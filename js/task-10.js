function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const boxes = document.getElementById('boxes')



const createBoxes = (amount) => {
  
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {

    const addDiv = document.createElement('div');
    const randomColor = getRandomHexColor();

    addDiv.style.width = boxSize + 'px';
    addDiv.style.height = boxSize + 'px';
    addDiv.style.backgroundColor = randomColor;

    boxes.append(addDiv)
    boxSize += 10;
    
  }

}

const destroyBoxes = () => {
  
  while (boxes.firstChild) {
  boxes.removeChild(boxes.firstChild);
}
}

createBtn.addEventListener('click', ()=> createBoxes(input.value))
destroyBtn.addEventListener('click', ()=> destroyBoxes());
