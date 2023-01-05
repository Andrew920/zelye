
kategorije = [
    # Predjedi
    ('Juhe', 3),
    # Pijače
    ('Hladni napitki', 4),
    ('Brezalkoholne pijače', 4),
    ('Pivo', 4),
    ('Cider', 4),
    ('Žgane pijače', 4),
    ('Vina', 4),
    # Pice
    ('Pice', 5),
    ('Morske Pice', 5),
    ('Posebne pice', 5),
    ('Napoletana', 5),
    ('Dodatki', 5),
    # Sladice
    ('Sladice', 6),
    # Glavne jedi
    ('Testenine', 7),
    ('Burgerji', 7),
    ('Navadne jedi', 7),
    ('Rižote', 7),
    ('Solate', 7),
    # Prigrizki
    ('Prigrizki', 8),
    # Tople pijače
    ('Kava', 9),
    ('Kavni napitki', 9),
    ('Topli napitki', 9),
]

f = open('subs.sql', 'w')
for id, (dish, parentId) in enumerate(kategorije):
    f.write(
        f"INSERT INTO subcategory(id, name, category_id) VALUES ({id+1}, \"{dish}\",{parentId});\n")
f.close()
