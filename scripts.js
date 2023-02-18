//This variables gets the input text in the html by id
const cipher = document.getElementById('cipher_text');

const stepSize = document.getElementById('step_size');

// This variables gets the button in the html by id
const decrypt  = document.getElementById('decrypt');

const encrypt  = document.getElementById('encrypt');

//Gets the variable of the encrypted || decrypted text
const msg = document.getElementById('msg');

//This variable holds the array of shift keys for the ceaser's algrorith
const list_obj = [ 'a','b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// Now, this triggers the event of the encryption button and runs the algorithm you see here(not hard hehe :) )
encrypt.addEventListener('click', () => {

    let newText = '';
    let keyVal = Number(stepSize.value);
    let input_word = cipher.value


    for (const letter of input_word.toLowerCase()) {


        if(keyVal > 50){
            continue
        }

        if(!list_obj.includes(letter)){
            continue
        }

        const indexLetter = list_obj.findIndex(item => item === letter);
        let newLetter = indexLetter + keyVal;

        if(newLetter > 25){
            newLetter -= 26;
        }

        newText += list_obj[newLetter]
        msg.innerText = newText

    }

    newText = '';
})

//Decryption Algorithm: Some kind similar to the Encryption algrotithm but instead of the (+) sign we use the (-) sign intsead
decrypt.addEventListener('click', () => {

    let newText = '';
    let keyVal = Number(stepSize.value);
    let input_word = cipher.value

    for (const letter of input_word.toLowerCase()) {

        if(keyVal > 50){
            continue
        }

        

        if(!list_obj.includes(letter)){
            continue
        }

        const indexLetter = list_obj.findIndex(item => item === letter);
        let newLetter = indexLetter - keyVal;

        if(newLetter < 0){
            newLetter += 26;
        }

        newText += list_obj[newLetter]
        msg.innerText = newText

    }

    newText = '';
    
})
