import { getResource } from "../services/requests";


const lookMoreStyle = (trigger, wrapper) =>{
 const btnLookMoreStyle = document.querySelector(trigger);
       

     
// btnLookMoreStyle.addEventListener('click', (e) => {
//     e.preventDefault();
//     cards.forEach(card =>{
//         card.classList.add('animated', 'fadeInUp');
//         card.classList.remove('hidden-lg','hidden-md','hidden-sm','hidden-xs');
//         card.classList.add('col-sm-3','col-sm-offset-0','col-xs-10','col-xs-offset-1');

//     })
//     btnLookMoreStyle.style.display = 'none';

// })

btnLookMoreStyle.addEventListener('click', function(){//поставили функцию вместо стрелочной функции, т.к. стрелочная не имеет в контексте вызова сам объект вызова, а функция безымяная имеет
    getResource('http://localhost:3000/styles')
    
    .then(res => createCards(res))
    .catch(error => console.log(error));

    this.remove();
})

function createCards(response) {
    response.forEach(item =>{
        let card = document.createElement('div')
        card.classList.add('animated', 'fadeInUp');
        card.classList.add('col-sm-3','col-sm-offset-0','col-xs-10','col-xs-offset-1');
        card.innerHTML = `
            <div class='styles-block'>
                <img src=${item.src} alt="style">
                <h4>${item.title}</h4>
                <a href="${item.link}">Подробнее</a>
            </div>
            
        `
        document.querySelector(wrapper).appendChild(card);

    })
}





}



export default lookMoreStyle;