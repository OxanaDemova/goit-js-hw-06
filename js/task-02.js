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

  // ====Попередній варіант====
  
  // for (const ingredient of ingredients) {

  //   const listItem = document.createElement('li');
  //   listItem.textContent = ingredient;
  //   listItem.classList.add('item');
  //   list.append(listItem);

  //   console.log(listItem);
  // }


  
// ====Новий варіант з map====

  const markup = ingredients.map(ingridient => {
    

    const listItem = document.createElement('li');
    
    listItem.textContent = ingridient;
    listItem.classList.add('item');

    return listItem;

  });
  
  return markup;
  
}
list.append(...addIngredients());
addIngredients(ingredients);