
items = []
for x in open('food.csv').readlines():
    item = x.strip().split(';')
    items.append((item))
f = open('food.sql', 'w')

for id, item in enumerate(items):
    name = item[0]
    desc = item[1]
    sub = item[2]
    price = item[3]
    image = item[4] or "default.jpeg"
    f.write(
        f"INSERT INTO item(id, name, image, description, subcategory_id, price, price_unit) VALUES ({id+1},\"{name}\",\"{image}\",\"{desc}\",{int(sub) + 1},{float('.'.join(price.split(',')))},\"EUR\");\n")
