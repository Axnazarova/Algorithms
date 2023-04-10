let tdElements = document.querySelectorAll('td')


for(let i = 4; i < tdElements.length ; i += 5){
    if(Number(tdElements[i].textContent) > 0){
        
        tdElements[i].setAttribute('class','increase')
    } 
    if(Number(tdElements[i].textContent) < 0) {
        tdElements[i].setAttribute('class','decrease')
    }
}