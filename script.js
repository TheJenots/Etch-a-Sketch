
const container = document.querySelector(".container");

//Creates initial grid
createGrid(16);

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", clear);

//Function to create grid
function createGrid(num) {
    //Defines grid cell sizes
    container.style.gridTemplate = `repeat(${num}, ${75/num}vh) / repeat(${num}, ${75/num}vh)`;
    //Checks if user entered correct data
    if (num === null) {
        createGrid(16);
    } else if (num >100) {
        alert("Square count too big. Please enter number between 2 and 100!");
        createGrid(prompt("Number?"));
    } else if (num < 2) {
        alert("Square count too small. Please enter number between 2 and 100!");
        createGrid(prompt("Number?"));
    }
    else {
        //Creates grid and add needed event listeners
        let i = 0;
        while (i < num*num) {
            let div = document.createElement("div");
            container.appendChild(div);
            div.addEventListener("mouseover", draw);
            i++;
        } 
    } 
}    

//Clear grid and offers create new
function clear() {
    container.querySelectorAll("div").forEach(div => div.remove());
    createGrid(prompt("Number?"));    
}

//Change background color of element
function draw() {
    this.style.backgroundColor = `rgb(${randomNumbRgb()}, ${randomNumbRgb()}, ${randomNumbRgb()})`;
    
}

function randomNumbRgb() {
    return (Math.floor(Math.random()*256));
}
