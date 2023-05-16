
import modals from "./modules/modals";
import sliders from "./modules/slider";
import formsSend from "./modules/forms" ;
import valid from "./modules/valid";
import IMask from 'imask'; //npm i imask библиотека для номеров телефонов в формах
import checkTextInputs from "./modules/checkTextInputs";
import lookMoreStyle from "./modules/lookMoreStyles";
import calc from "./modules/calc";
import tabs from "./modules/tabs";
import enterChange from "./modules/enterChange";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scroll from "./modules/scroll";

window.addEventListener('DOMContentLoaded', () => {
'use strict'



 



    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    formsSend();
    valid();
    checkTextInputs('[name = "name"]');
    checkTextInputs('[name = "message"]');
    lookMoreStyle('.button-styles', '#styles .row');
    calc();
    tabs();
    enterChange();
    accordion();
    burger();
    scroll();






 
})