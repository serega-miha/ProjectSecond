 const scroll = () =>{
    const arrowUp = document.querySelector('.arrow-up');
        
window.addEventListener('scroll', ()=>{
    if (document.documentElement.scrollTop > 1650) {
        arrowUp.classList.add('show')
    } else {
        arrowUp.classList.remove('show')
    }
})





    let links = document.querySelectorAll('[href^="#"]');
    links.forEach(item =>{
        if (item.href.split('#')[1] > ''){
            let toLink = item.href.split('#')[1];
            
            item.addEventListener('click', (e)=>{
            
                e.preventDefault();
                document.querySelector(`#${toLink}`).scrollIntoView({behavior: "smooth"});
            })
        }
    })





 }

 export default scroll;