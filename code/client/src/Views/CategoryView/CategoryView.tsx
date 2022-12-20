import { createRef, FC, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRestaurantQuery, useGetSponsorQuery } from 'Api';
import { BackgroundImage, IconButton, IconName, Spinner } from 'Components';
import { FoodItemT, SubcategoryT } from 'Types';
import { FoodItemCard } from './FoodItemCard';
import { NavbarItem } from './NavbarItem';
import { SectionHeader } from './SectionHeader';
import './CategoryView.scss';

export const CategoryView: FC = () => {
  const { restaurant, category: categoryId } = useParams();

  const { data: restaurantData, isLoading } = useGetRestaurantQuery(restaurant || '');
  const { data: sponsorData, isLoading: sponsorLoading } = useGetSponsorQuery();

  const category = useMemo(() => {
    if (!categoryId || !restaurantData) return undefined;
    return restaurantData.menu.flat().find((category) => category.id == categoryId);
  }, [categoryId, restaurantData, location]);

  const sectionRefs = useMemo(() => {
    if (!category) return [];
    return category?.subcategories?.map(() => createRef<HTMLDivElement>());
  }, [category?.subcategories]);

  const navbarItemRefs = useMemo(() => {
    if (!category) return [];
    return category?.subcategories?.map(() => createRef<HTMLAnchorElement>());
  }, [category?.subcategories]); // add refs for NavbarItem elements

  const [active, setActive] = useState(new Array(category?.subcategories?.length).fill(false));

  // Check for active section in view, to set the navigation bar item into active
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
        setActive((prevActive) => {
          const newActive = [...prevActive];
          newActive[index] = entry.isIntersecting;
          return newActive;
        });
      });
    });

    sectionRefs?.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  // Scroll corresponding NavbarItem into view when section becomes active
  useEffect(() => {
    const handleScroll = () => {
      navbarItemRefs.forEach((ref, index) => {
        console.log('should scroll');
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          console.log('should scroll');
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarItemRefs]);

  return isLoading || sponsorLoading ? (
    <Spinner />
  ) : sponsorData && category ? (
    <>
      <BackgroundImage image={sponsorData.background} />
      <div className='category-view__content'>
        <div className='category-view__header'>
          <IconButton
            icon={IconName.ChevronLeft}
            href='..'
            onClick={() => console.log('clicked')}
          />
          <h3>{category.category}</h3>
          <div className='category-view__header-buttons'>
            <IconButton icon={IconName.Sort} onClick={() => console.log('clicked')} />
            <IconButton icon={IconName.Filter} onClick={() => console.log('clicked')} />
          </div>
        </div>
        <div className='category-view__navigation-bar'>
          {category?.subcategories?.map(({ id, title }: SubcategoryT, index: number) => {
            return (
              <NavbarItem
                key={id}
                text={title}
                id={id}
                active={active.findIndex((val) => val) == index}
                anchorRef={navbarItemRefs[index]}
              />
            );
          })}
        </div>
        <div className='category-view__content-container'>
          {category.subcategories?.map(({ id, title, items }: SubcategoryT, index: number) => {
            return (
              <section ref={sectionRefs[index]} id={id} key={id}>
                <SectionHeader title={title} />
                <div className='section-items'>
                  {items.map((foodItem: FoodItemT) => {
                    return <FoodItemCard key={foodItem.id} {...foodItem} />;
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <>Error</>
  );
};
