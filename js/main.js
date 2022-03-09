import cards from '../libraries/getDataCards.js';
import '../static/main.scss'

const cardss = new cards(3);

const cartsTaroFlex=document.querySelector('.cardsFlex');
cardss.cartss(cartsTaroFlex);


const catdsTaro=document.querySelectorAll('.card');
    catdsTaro.forEach((card)=>{
        card.onclick=function(event){
            card.classList.add('animation');
            setTimeout(() =>{
                card.insertAdjacentHTML('afterBegin',`<img src="${cardss.randCard()}" alt="photo">` );
            }, 300); 
        }
    });
    
