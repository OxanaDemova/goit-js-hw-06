const slider = document.getElementById('font-size-control'); 

const sliderText = document.getElementById('text');



slider.addEventListener('input', () => {
    sliderText.style.fontSize = slider.value + 'px';
})

