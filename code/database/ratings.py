import random

items = []
for x in open('food.sql.bkp').readlines():
    id = x.strip().split('VALUES')[1].strip().split(',')[0][1:]
    print(id)
    for i in range(20):
        items.append((id, random.randint(0,100), random.randint(0,100), random.randint(0,100), random.randint(0,100), random.randint(0,100)))

f = open('ratings.sql.bkp', 'w')

for i in items:
    sql = f"INSERT INTO item_rating(item_id, quality, taste, presentation, memorability, creativity) VALUES ({i[0]},{i[1]},{i[2]},{i[3]},{i[4]},{i[5]});\n"
    print(sql)
    f.write(sql)
