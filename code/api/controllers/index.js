const conn = require("../services/db");
const Q = require('q');

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

    Q.all([getNameLocation(),getContact(),getRating()]).then(function(results){
      const ContantInfoT = {
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

      const RestaurantRatingT = {
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

      const foodItem = {
        id: "1",
        title: "Test",
        image: "test.jpg",
        description: "Test",
        alergens: [AlergenT],
        ingredients: ["Tle pridejo sestavinee", "Test"],
        rating: FoodRatingT,
        price: {
          currency: "EUR",
          amount: 100,
        }
      };
      
      const subcategory = {
        id: 1,
        title: "Pasta",
        items: [foodItem]
      };
      
      const category = {
        id: 1,
        category: "Glavna jed",
        image: "test.jpg",
        size: "large",
        subcategories: [subcategory],
        col: 0
      };
      

      let json = {
        id: results[0][0][0].id,
        title: results[0][0][0].name,
        location: results[0][0][0].location,
        contantInfo,
        restaurantRating,
        menu: [[category, category], [category, category]]
      }
        res.send(JSON.stringify(json));
        // console.log(JSON.stringify(json));
        // res.send(JSON.stringify(results[0].solution+results[1].solution));
        // Hint : your third query would go here
    });
    // conn.query(
    //   "SELECT * FROM restaurant WHERE id = ?;", [req.params.id],
    //   function (err, data, fields) {
    //     if (err) return next(new AppError(err, 500));
    //     res.status(200).json({
    //       status: "success",
    //       length: data?.length,
    //       data: data,
    //     });
    //   }
    // );
    // return res.send({ message: ("Restauracija: " + req.params.id) });
   };