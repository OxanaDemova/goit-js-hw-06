function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const backgroundStyle = document.querySelector('body');
const textColor = document.querySelector('.color')

const changeBgColor = () => {
  
  const randomColor = getRandomHexColor();
  
  textColor.textContent = randomColor;
  backgroundStyle.style.backgroundColor = randomColor
}

backgroundStyle.addEventListener('click', changeBgColor);