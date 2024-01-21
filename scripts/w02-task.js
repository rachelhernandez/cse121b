/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

    
let fullName = 'Rachel Hernandez';
let currentYear = '2024';
let profilePicture = ("images/profile.jpg")


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */


nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.innerHTML = (`${currentYear}`);
imageElement.setAttribute('src', `${profilePicture}`);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let foods = ['Nachos', 'Chicken Alfredo', 'Fruit', 'Tamales', 'French Fries', 'Pozole'];

const newFavoriteFood = 'Baked Potatoes';
foods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${foods.join('<br>')}`;
foods.shift();

foodElement.innerHTML = foods.join('<br>');
foods.pop();

foodElement.innerHTML += `<br>${foods.join('<br>')}`;


