
items = []
for x in open('food.csv').readlines():
    name, desc, subcategory, price = x.strip().split(';')
    items.append((name, desc, subcategory, price))
f = open('food.sql', 'w')

for id, (name, desc, sub, price) in enumerate(items):
    f.write(
        f"INSERT INTO item(id, name, image, description, subcategory_id, price, price_unit) VALUES ({id+1},\"{name}\",\"image-{id}.jpeg\",\"{desc}\",{int(sub) + 1},{float('.'.join(price.split(',')))},\"EUR\");\n")
