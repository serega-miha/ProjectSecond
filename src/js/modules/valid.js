const valid = () => {

    let inputsC = document.querySelectorAll('input[name = "phone"]');
  
    inputsC.forEach((input, i) =>{
     
     const phoneMask = new IMask(input, {
         mask: "+7 (000)000-00-00",
       });
    })
 


 

}



export default valid;