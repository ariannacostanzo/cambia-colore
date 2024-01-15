const colorNameElement = document.querySelector('h1');
const button = document.querySelector('button');
const body = document.querySelector('.container');
const hexElement = document.getElementById('hex');
const rgbElement = document.getElementById('rgb');
const hexComponents = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','F'];

const logSomething = (something) => console.log(something);



/**Gets random color component from the array of hex components
 * 
 * @returns a random color component
 */
const getRandomColor = () => {
    
    let hexCode = '#'
    
    for (let i = 0; i < 6; i++) {
        const randomComponent = Math.floor(Math.random() *hexComponents.length -1) +1;
        const randomHexComponent = hexComponents[randomComponent];
        hexCode += randomHexComponent;
    }
    return hexCode;


};

/**Gets random number from 0 to 255
 * 
 * @returns 
 */

const getRandomRGBNumber = () => {
    const randomNumber = Math.floor(Math.random() * (255 + 1 -0)) + 0;
    return randomNumber;

};


//Hex colors from the array


hexElement.addEventListener('click', () => {

    button.addEventListener('click', () => {

        //gets one random color from array
        const randomColor = getRandomColor();
        body.style.backgroundColor = randomColor;
        colorNameElement.innerText = `background color: ${randomColor}`
        
    
    
    });

});


//Rgb colors

rgbElement.addEventListener('click', () => {

    button.addEventListener('click', () => {

        //gets 3 random numbers to create an rgb color
        const randomR = getRandomRGBNumber();
        const randomG = getRandomRGBNumber();
        const randomB = getRandomRGBNumber();


        colorNameElement.innerText = `background color: rgb (${randomR}, ${randomG}, ${randomB})`
        body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`

    })
    



})



//creare un rgba
//capire come creare un hex random invece di prenderlo dall'array
//l'array deve contentere i numeri da 0 a 9 e poi a, b, c, d, e, f. Generare una stringa 
//di 6 lettere/numeri presi dall'array