import random

ingredients = []
for ingredient in open('ingredients.txt').readlines():
    ingredients.append(ingredient.strip())

items = []
for x in open('food.sql.bkp').readlines():
    id = x.strip().split('VALUES')[1].strip().split(',')[0][1:]
    for i in range(random.randint(4, 10)):
        items.append((id, random.choice(ingredients)))

f = open('ingredients.sql.bkp', 'w')

for i in items:
    sql = f"INSERT INTO ingredients(item_id, name) VALUES ('{i[0]}','{i[1]}');\n"
    print(sql)
    f.write(sql)
