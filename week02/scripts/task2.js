/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const name = "Juan Zurita"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = name;

// Step 3: declare and instantiate a variable to hold the current year
let current_year = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = current_year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let image = "images/juan.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").src = image



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const fav_food = ["pizza", "In-N-Out burguer", "burritos"]

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = fav_food;

// Step 3: declare and instantiate a variable to hold another favorite food
const another_food = "lasagna";

// Step 4: add the variable holding another favorite food to the favorite food array
fav_food.push(another_food);

// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = fav_food;

// Step 6: remove the first element in the favorite foods array
fav_food.shift();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = fav_food;

// Step 8: remove the last element in the favorite foods array
fav_food.pop();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = fav_food;


