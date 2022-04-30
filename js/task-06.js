const form = document.querySelector('#validation-input');


form.addEventListener('blur', () => {


    if (form.value.length === parseInt(form.dataset.length)) {
        
        form.classList.add('valid')
        form.classList.remove('invalid')
        
    } else {
        form.classList.add('invalid')
        form.classList.remove('valid')
    }
}
)

