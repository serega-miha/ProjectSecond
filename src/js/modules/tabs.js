const tabs = () =>{

const btnTabs  = document.querySelectorAll('.portfolio-menu li'),
        images = document.querySelectorAll('.portfolio-block'),
        noProfil = document.querySelector('.portfolio-no');


        function removeHide(data){
            data.forEach(item =>{
                item.classList.remove('hide')
                item.classList.add('show');
                noProfil.style.display = 'none';
            })
        };

    
        

        btnTabs.forEach((item, i) =>{
            item.addEventListener('click', (e) =>{
                    removeHide(images);
                    btnTabs.forEach(tab  =>{
                        tab.classList.remove('active');
                    })

                    if (item.classList.contains('grandmother') || item.classList.contains('granddad')){
                        noProfil.style.display = 'block';
                    } 
                    images.forEach(img =>{
                        
                            if (!img.classList.contains(item.className)){
                                img.classList.remove('show');
                                img.classList.add('hide');
                            }
                        })
                
                    item.classList.add('active');
            })
        })






}

export default tabs;