const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default class cards{
    constructor(num){
        this.num=num;
    };

    randCard(){
        return `../cards/общаг/${random(1,78)}.jpg`
    }
    
    insert(){
        return `<div class="card"></div>`
    }
    
    cartss(elems){
        for(let i=0;i<this.num;i++){
            elems.insertAdjacentHTML('afterBegin',this.insert())
        }
    }
    
}