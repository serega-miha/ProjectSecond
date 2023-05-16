const enterChange = () =>{

 const sizeBlocks = document.querySelectorAll('.sizes-block img');


 

 sizeBlocks.forEach((item, i) =>{
    item.addEventListener('mouseover', ()=>{
        item.src = `assets/img/sizes-${i+1}-1.png`;
        item.style.zIndex = '5';
        item.style.position = 'relative';
    

    })
    item.addEventListener('mouseout', ()=>{
        item.src = `assets/img/sizes-${i+1}.png`;
        item.style.zIndex = '';
        item.style.position = '';
    })
 })





}

export default enterChange;

