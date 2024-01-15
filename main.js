const colorNameElement = document.querySelector('h1');
const button = document.querySelector('button');
const body = document.querySelector('.container');
const hexElement = document.getElementById('hex');
const rgbElement = document.getElementById('rgb');

const logSomething = (something) => console.log(something);

const colors = [
'#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

const getRandomColor = () => {
    const randomColorIndex = Math.floor(Math.random() *colors.length -1) +1;
    let randomColor;

    for (let i = 0; i < colors.length; i++) {
        randomColor = colors[randomColorIndex];
    }
    return randomColor;


};

const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() *255) + 1;
    return randomNumber;

};


//Simple


hexElement.addEventListener('click', () => {
    button.addEventListener('click', () => {

        
        const randomColor = getRandomColor();
        body.style.backgroundColor = randomColor;
        colorNameElement.innerText = `background color: ${randomColor}`
        
    
    
    });

});


//Hex

rgbElement.addEventListener('click', () => {

    button.addEventListener('click', () => {
        const randomR = getRandomNumber();
        const randomG = getRandomNumber();
        const randomB = getRandomNumber();


        colorNameElement.innerText = `background color: rgb (${randomR}, ${randomG}, ${randomB})`
        body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`

    })
    



})



//fare in modo che non si possa trovare lo stesso numero più volte