/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    "name": "Rachel Hernandez",
    "photo": "images/profile.jpg",
    "favoriteFoods": [
        "Nachos",
        "Chicken Alfredo",
        "Pozole",
        "French Fries",
        "Tres Leche Cake"
    ],
    "hobbies": [
        "Hiking",
        "Being with family",
        "Fishing",
        "Movies"
    ],
    "placesLived": []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        "place": "Rigby, Idaho",
        "length": "20 years"
    }
);

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

/* Name */

/* Photo with attributes */
document.querySelector('img').setAttribute('src', myProfile.photo);
document.querySelector('img').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });  

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  

