const calc = () =>{

const sizeSelect = document.querySelector('#size'),
      materialSelect = document.querySelector('#material'),
      optionsSelect = document.querySelector('#options'),
      promocodeInput = document.querySelector('.promocode'),
      calcField = document.querySelector('.calc-price'),
      resultCalc = document.querySelector('.result-calc');
      

let sum = 0;

function calcSum() {
    sum = (+sizeSelect.value) * (+materialSelect.value) + (+optionsSelect.value);

    if (sizeSelect.value == '' || materialSelect.value == ''){
        calcField.textContent = 'Выберите размер картины и материал картины';
    } else if (promocodeInput.value === 'IWANTPOPART'){
        calcField.textContent = `${sum*0.7}руб.`;
        resultCalc.value = `${sum*0.7}руб.`;
    } else {
        calcField.textContent = `${sum}руб.`;
        resultCalc.value = `${sum}руб.`;
    }
    return sum;
}
sizeSelect.addEventListener('change', calcSum);
materialSelect.addEventListener('change', calcSum);
optionsSelect.addEventListener('change', calcSum);
promocodeInput.addEventListener('input', calcSum);


      

    



    
      




};


export default calc;

