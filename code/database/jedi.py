
items = []
for x in open('food.csv').readlines():
    item = x.strip().split(';')
    items.append((item))
f = open('food-wtih-photos-update.sql.bkp', 'w')

for id, item in enumerate(items):
    name = item[0]
    desc = item[1]
    sub = item[2]
    price = item[3]
    image = item[4] or "default.jpg"
    f.write(
        # f"INSERT INTO item(id, name, image, description, subcategory_id, price, price_unit) VALUES ({id+1},\"{name}\",\"{image}\",\"{desc}\",{int(sub) + 1},{float('.'.join(price.split(',')))},\"EUR\");\n")
        f"UPDATE item SET name=\"{name}\",image=\"{image}\",description=\"{desc}\",subcategory_id=\"{int(sub) + 1}\",price=\"{float('.'.join(price.split(',')))}\",price_unit=\"EUR\" WHERE id=\"{id+1}\";\n")
