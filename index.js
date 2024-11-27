const express = require('express');

const app = express();


// return all food
// URL : http://localhost:3000/
app.get('/', (req, res) => {
    res.json(foodData);
})

// return random category
// URL : http://localhost:3000/random-category
app.get('/random-category', (req, res) => {
    const randomIndex = Math.floor(Math.random()*foodData.length);
    const foodCategory = foodData[randomIndex].foodCategory;
    console.log(foodCategory);
    res.json(foodCategory);
})

// return filtered
// URL : http://localhost:3000/filter?category=Fruits
app.get('/filter', ( req, res ) => {
    const category = req.query.category;
    // const name = req.query.name;
    const foodCategory = foodData.find((food) => food.foodCategory === category);
    
    console.log(foodCategory.types);
    res.json(foodCategory.types)
})


app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})


const foodData = [
    {
      foodCategory_id: 1,
      foodCategory: "Fruits",
      types: ["Apple", "Banana", "Mango", "Orange"]
    },
    {
      foodCategory_id: 2,
      foodCategory: "Vegetables",
      types: ["Carrot", "Broccoli", "Spinach", "Potato"]
    },
    {
      foodCategory_id: 3,
      foodCategory: "Grains",
      types: ["Rice", "Wheat", "Oats", "Quinoa"]
    },
    {
      foodCategory_id: 4,
      foodCategory: "Dairy",
      types: ["Milk", "Cheese", "Yogurt", "Butter"]
    },
    {
      foodCategory_id: 5,
      foodCategory: "Proteins",
      types: ["Chicken", "Fish", "Eggs", "Lentils"]
    },
    {
      foodCategory_id: 6,
      foodCategory: "Desserts",
      types: ["Ice Cream", "Cake", "Chocolate", "Cookies"]
    }
  ];
  
 
  