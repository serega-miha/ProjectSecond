const accordion = () =>{
    const btnAc = document.querySelectorAll('.accordion-heading'),
        bodyAc = document.querySelectorAll('.accordion-block');

        hideAc();

        function hideAc(){
            bodyAc.forEach(item => item.classList.remove('show'));
            bodyAc.forEach(item => item.classList.add('hide'));
        }

   


        btnAc.forEach((item, i) =>{
            item.addEventListener('click', ()=>{
                // hideAc();
                // bodyAc[i].classList.remove('hide');
                bodyAc[i].classList.toggle('show');
            })
        })


}


export default accordion;