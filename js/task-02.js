const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const addIngredients = () => {
  
  for (const ingredient of ingredients) {

    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    list.append(listItem);

    console.log(listItem);
  }
  
}
addIngredients(ingredients);