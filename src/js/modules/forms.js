import { postData } from "../services/requests";

const formsSend = () => {
    const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    textarea = document.querySelectorAll('textarea'),
        upload = document.querySelectorAll('[name = "upload"]');


    



   
 

  

    const message = {
        loading: 'Загрузка....',
        success: `Спасибо! Скоро мы с вами свяжемся `,
        error: ' Что-то пошло не так...',
        spinner: "assets/img/spinner.gif",
        ok: "assets/img/ok.png",
        fail: "assets/img/fail.png"
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    }

    // forms.forEach(form => {
    //     bindPostData(form);
    // })



    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        textarea.forEach(item => {
            item.value = '';
        });
        upload.forEach(item =>{
            item.previousElementSibling.textContent = "Файл не выбран";
        })
    }
//============================================

//=================================================
    upload.forEach(item =>{
        item.addEventListener('input', function(){

            let uploadDiv =item.closest('div');
            let newImg = document.createElement('img');
            newImg.classList.add('upup');
          // ищем url адрес картинки добавляем превью
            let reader = new FileReader();
            reader.readAsDataURL(this.files[0]);
          

            reader.onload = function() {
                newImg.src = reader.result
           
                uploadDiv.append(newImg);
              };
  //===========================================



            
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name =  arr[0].substring(0,6) + dots +  arr[1];
            item.previousElementSibling.textContent = name;
        })
    })

    forms.forEach(item =>{
        item.addEventListener('submit', (e) => {
            e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.parentNode.appendChild(statusMessage);

        item.classList.add('animated','fadeOutUp');
        setTimeout(() => {
            item.style.display = 'none';
        }, 400);

        let statusImg = document.createElement('img');
        statusImg.setAttribute('src', message.spinner);
        statusImg.classList.add('animated', 'fadeInUp' );
        statusMessage.appendChild(statusImg);

     
        let textMessage = document.createElement('div');
        textMessage.textContent = message.loading;
        statusMessage.appendChild(textMessage);



        const formData = new FormData(item);
        let api = path.question;
        // item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
        console.log(api);


        postData(api, formData)
               .then(data => {
                console.log(data);
                statusImg.setAttribute('src', message.ok);
                textMessage.textContent = message.success;

              
            }).catch(() =>{
                statusImg.setAttribute('src', message.fail);
                textMessage.textContent = message.error;
            }).finally(() =>{
                clearInputs();
                item.reset();
                document.querySelector('.calc-price').textContent = 'Для расчета нужно выбрать размер картины и материал картины'
                setTimeout(() =>{
                    statusMessage.remove();
                    item.style.display = 'block';
                    item.classList.remove('fadeOutUp');
                    item.classList.add('fadeInUp');
                }, 5000)
            })



        })
    })





   
}





export default formsSend;

