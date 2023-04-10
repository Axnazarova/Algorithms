function getIndexPoint(text){

    if(typeof(text) === "string"){
        for(let i = 0 ; i < text.length ; i++){
            if(text[i] === '.'){
                console.log(`Индех точки ${i}`)
                break;
            } 
        }

    }else{
        alert('Это не строка')
    }
}


getIndexPoint('Hi hello. world.')

