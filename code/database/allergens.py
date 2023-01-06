import random

allergens = []
for allergen in open('allergens.txt').readlines():
    allergens.append(allergen.strip())

items = []
for x in open('food.sql.bkp').readlines():
    id = x.strip().split('VALUES')[1].strip().split(',')[0][1:]
    for i in range(random.randint(1, 3)):
        items.append((id, random.choice(allergens)))

f = open('allergens.sql.bkp', 'w')

for i in items:
    sql = f"INSERT INTO allergens(item_id, name) VALUES ('{i[0]}','{i[1]}');\n"
    print(sql)
    f.write(sql)
