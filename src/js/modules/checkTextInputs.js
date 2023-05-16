const checkTextInputs = (selector) =>{

        const txtInputs = document.querySelectorAll(selector);

//проверка формы на заполнение только на руссском языке
        // txtInputs.forEach(input => {
        //     input.addEventListener('keypress', function(e) {
        //         if (e.key.match(/[^а-яё 0-9]/ig)) {
        //             e.preventDefault();
        //         }
        //     })
        // })
//чтобы убрать автозаполнение форм
        // txtInputs.forEach(item =>{
        //     item.setAttribute('autocomplete', 'off')
        // })



}


export default checkTextInputs;