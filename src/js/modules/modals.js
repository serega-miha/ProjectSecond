

const modals = () => {
    let btnPressed = false;
    function blindModal(triggerSelector, modalSelector, closeSelector){
        const modalPlusScroll = window.innerWidth - document.documentElement.clientWidth;
       

        const trigger = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector);

                
          
    
            trigger.forEach(item =>{
                item.addEventListener('click', (e)=>{
                   if (e.target) {
                    e.preventDefault();
                    btnPressed = true;
                   }
                   closeAllPopup();
                   modal.classList.add('show');
                   document.body.style.overflow = 'hidden';
                   document.body.style.paddingRight = `${modalPlusScroll}px`;
                   document.querySelector('.fixed-gift').style.paddingRight = `${modalPlusScroll}px`;
            })
            
        })
        
        modal.addEventListener('click', (e)=>{
            if (e.target === modal) { 
               
                closeAllPopup();
                modal.classList.remove('show');
                document.body.style.overflow = '';
                document.body.style.paddingRight = `0px`;
                document.querySelector('.fixed-gift').style.paddingRight = `0px`;
              }
        })
        
        
        
        close.addEventListener('click', ()=>{
            closeAllPopup();
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.paddingRight = `0px`;
            document.querySelector('.fixed-gift').style.paddingRight = `0px`;
        })
    }
   
  //ниже представлена ФУНКЦИЯ КОТОРАЯ ОТКРЫВАЕТ МОДАЛЬНОЕ ОКНО ЧЕРЕЗ КАКОЕ ЧТО ВРЕМЯ, НО ПРОВЕРЯЕТ, ЕСЛИ ХОТЬ ОДНО ОКНО ОТКРЫТО, ТО ОНО НЕ ОТКРОЕТСЯ  
    function showModal(selector, time){
        const modalPlusScroll = window.innerWidth - document.documentElement.clientWidth;
        setTimeout(function() {
            let display;
            document.querySelectorAll('[data-modal]').forEach(item =>{
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });
            if(!display){
                document.querySelector(selector).classList.add('show');
                document.body.style.overflow = 'hidden'; 
                document.body.style.paddingRight = `${modalPlusScroll}px`;
                document.querySelector('.fixed-gift').style.paddingRight = `${modalPlusScroll}px`;
                
                
            }
          
        }, time)
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', ()=>{
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            //ищем максимум, потому что в страых браузерах общая высота странички считалась по другому
            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click(); //можно сбытие вызвыать в ручную
            }
        })
    }
    

    blindModal('.button-design','.popup-design','.popup-design .popup-close');
    blindModal('.button-consultation','.popup-consultation','.popup-consultation .popup-close');

    blindModal('.infinite','.popup-gift','.popup-gift .popup-close');
    document.querySelector('.infinite').addEventListener('click', ()=>{
        document.querySelector('.fixed-gift').remove();
    })
    openByScroll('.infinite')


    showModal('.popup-consultation',60000);

 
   



};

function closeAllPopup() {
    const allPopup = document.querySelectorAll('.popup_dialog');
    allPopup.forEach(item => {
        item.parentElement.classList.remove('show');
        });
}




export default modals;