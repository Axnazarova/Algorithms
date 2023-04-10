

function keepLetters(strings) {

    let newString = ''
    

    for (let i = 0; i < strings.length; i++) {
        let cc = strings.charCodeAt(i);


        if ((cc >= 32 && cc <= 64) || (cc >= 91 && cc <= 96) || (cc >= 123 && cc <= 126)) {

           continue;

        } else {
            newString = newString + strings[i]

        }
    }

    console.log(newString)


}


keepLetters('Give me $20'); // 'Giveme'
keepLetters('Give/ me?%');
keepLetters('H!ell25o w,orld?%');
