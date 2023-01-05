const conn = require("../services/db");
const Q = require('q');
const { async } = require("q");



exports.rateRestaurant = (req, res, body) => {
  for (var i = 0; i < body.items.length; i++) {
    sql = "INSERT INTO item_rating(quality, item_id, taste, presentation, memorability, creativity) VALUES (?)";
    values = [body.items[i].quality, body.items[i].id, body.items[i].taste, body.items[i].presentation, body.items[i].memorability, body.items[i].creativity];
    conn.query(sql, [values], function (err, result) {
      if (err) throw err;
    });
  }
  sql = "INSERT INTO restaurant_rating(id_rest, hospitality, atmosphere, value, location, food) VALUES ( ? )";
  values = [body.id, body.hospitality, body.atmosphere, body.value, body.location, body.food];
  conn.query(sql, [values], function (err, result) {
    if (err) throw err;
  });
  res.send(JSON.stringify("You rated restaurant with id: " + req.params.id));
}

exports.getRestaurant = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }

    function getNameLocation(){
      var defered = Q.defer();
      conn.query("SELECT * FROM restaurant WHERE id = ?;", [req.params.id] ,defered.makeNodeResolver());
      return defered.promise;
    }
    function getContact(){
      var defered = Q.defer();
      conn.query("SELECT * FROM contact WHERE id_rest = ?;", [req.params.id] ,defered.makeNodeResolver());
      return defered.promise;
    }
    function getRating(){
      var defered = Q.defer();
      conn.query("SELECT * FROM restaurant_rating WHERE id_rest = ?;", [req.params.id] ,defered.makeNodeResolver());
      return defered.promise;
    }
    function getCategories(){
      var defered = Q.defer();
      conn.query("SELECT * FROM category WHERE rest_id = ? order by place;", [req.params.id] ,defered.makeNodeResolver());
      return defered.promise;
    }
    function getSubCategories(){
      var defered = Q.defer();
      conn.query("SELECT subcategory.id, subcategory.name, subcategory.category_id FROM subcategory JOIN category ON category.id=subcategory.category_id WHERE category.rest_id = ?;", [req.params.id] ,defered.makeNodeResolver());
      return defered.promise;
    }
    function getFood(){
      var defered = Q.defer();
      conn.query("SELECT item.* FROM item JOIN subcategory ON subcategory.id=item.subcategory_id JOIN category ON category.id=subcategory.category_id WHERE category.rest_id = ?;", [req.params.id] ,defered.makeNodeResolver());
      return defered.promise;
    }
    function getItemRatings(){
      var defered = Q.defer();
      conn.query("SELECT item_rating.* FROM item_rating JOIN item on item.id=item_rating.item_id JOIN subcategory ON subcategory.id=item.subcategory_id JOIN category ON category.id=subcategory.category_id WHERE category.rest_id = ?;", [req.params.id] ,defered.makeNodeResolver());
      return defered.promise;
    }

    Q.all([getNameLocation(),getContact(),getRating(),getCategories(),getSubCategories(),getFood(),getItemRatings()]).then(function(results){
      const contantInfo = {
        mobile: results[1][0][0].mobile,
        location: {
          country: results[1][0][0].country,
          city: results[1][0][0].city,
          postCode: results[1][0][0].postcode,
          address: results[1][0][0].address,
        },
        email: results[1][0][0].email,
      };

      const ratings = [0,0,0,0,0];
      for (let i = 0; i < results[2][0].length; i++) {
        ratings[0] += results[2][0][i].hospitality;
        ratings[1] += results[2][0][i].food;
        ratings[2] += results[2][0][i].atmosphere;
        ratings[3] += results[2][0][i].value;
        ratings[4] += results[2][0][i].location;
      }
      for (let i = 0; i < ratings.length; i++) {
        ratings[i] = ratings[i]/results[2][0].length;
      }

      const restaurantRating = {
        hospitality: ratings[0],
        food: ratings[1],
        atmosphere: ratings[2],
        value: ratings[3],
        location: ratings[4]
      };
      
      const FoodRatingT = {
        taste: 5,
        ingredientQuality: 5,
        presentation: 5,
        creativity: 5,
        memorability: 5,
      };

      const AlergenT = {
        id: 1,
        name: "Test",
        icon: "test.jpg"
      };

      // const foodItem = {
      //   id: "1",
      //   title: "Test",
      //   image: "test.jpg",
      //   description: "Test",
      //   alergens: [AlergenT],
      //   ingredients: ["Tle pridejo sestavinee", "Test"],
      //   rating: FoodRatingT,
      //   price: {
      //     currency: "EUR",
      //     amount: 100,
      //   }
      // };

      // const subcategory = {
      //   id: 1,
      //   title: "Pasta",
      //   items: [foodItem]
      // };

      // const category = {
      //   id: 1,
      //   category: "Glavna jed",
      //   image: "test.jpg",
      //   size: "large",
      //   subcategories: [subcategory],
      //   col: 0
      // };
      
      const menu = [];
      for (let i = 0; i < results[3][0].length; i++) { 
        let subcategories = [];
        for (let j = 0; j < results[4][0].length; j++) {
          if(results[3][0][i].id == results[4][0][j].category_id){
            let items = [];
            for (let k = 0; k < results[5][0].length; k++) {
              if(results[4][0][j].id == results[5][0][k].subcategory_id){
                let calc_ratings = [0,0,0,0,0];
                let counter = 0;

                for (let l = 0; l < results[6][0].length; l++) {
                  if(results[5][0][k].id == results[6][0][l].item_id){
                    calc_ratings[0] += results[6][0][l].taste;
                    calc_ratings[1] += results[6][0][l].quality;
                    calc_ratings[2] += results[6][0][l].presentation;
                    calc_ratings[3] += results[6][0][l].creativity;
                    calc_ratings[4] += results[6][0][l].memorability;
                    counter++;
                  }
                }
                
                if (counter == 0) {
                  counter = 1;
                }
                for (let l = 0; l < 5; l++) {
                  calc_ratings[l] = calc_ratings[l]/counter;
                }
                // console.table(calc_ratings);
                let rating = {
                  taste: calc_ratings[0],
                  quality: calc_ratings[1],
                  presentation: calc_ratings[2],
                  creativity: calc_ratings[3],
                  memorability: calc_ratings[4],
                }

                items.push({ 
                  id: results[5][0][k].id,
                  title: results[5][0][k].name,
                  image: results[5][0][k].image,
                  description: results[5][0][k].description,
                  price: {
                    currency: "EUR",
                    amount: results[5][0][k].price,
                  },
                  rating,
                  alergens: [""],
                  ingredients: [],
                });
              }
            }
            subcategories.push({
              id: results[4][0][j].id,
              title: results[4][0][j].name,
              items
            });
          }
        }

        menu.push({
          id: results[3][0][i].id,
          category: results[3][0][i].name,
          image: results[3][0][i].photo,
          size: results[3][0][i].size,
          col: results[3][0][i].col,
          subcategories
        });
      }

      let json = {
        id: results[0][0][0].id,
        title: results[0][0][0].name,
        location: results[0][0][0].location,
        contantInfo,
        restaurantRating,
        menu
      }
      res.send(JSON.stringify(json));
    });
   };