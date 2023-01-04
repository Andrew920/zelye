const conn = require("../services/db");
const Q = require('q');
const { async } = require("q");

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

    Q.all([getNameLocation(),getContact(),getRating(),getCategories(),getSubCategories()]).then(function(results){
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