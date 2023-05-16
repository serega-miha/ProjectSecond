const burger = () =>{

    const menuBurger = document.querySelector('.burger-menu'),
        burgerBtn = document.querySelector('.burger');


        const ttt = document.querySelector('.container');


        // menuBurger.classList.add('hide');

        burgerBtn.addEventListener('click', ()=>{
            if (window.screen.availWidth < 992) {
                menuBurger.classList.toggle('show');
            }
   
         
          
        })

        window.addEventListener('resize', ()=>{
            if (window.screen.availWidth > 992) {
                menuBurger.classList.remove('show');
            }
        })





}


export default burger;