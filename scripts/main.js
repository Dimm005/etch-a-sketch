/* Set initial parameters */
let fieldBlocks = 16; // set the amount of blocks by default
const usedHeight = 60; // height of footer and header together
const usedWidth = 190; // width of buttons_contaitner
let mode = "simple" // set mode by default, can be 'simple', 'grey' or 'random'


/* Calculate field size and size of the blocks */
let fieldSizePx = 0;
let availableHeight = document.documentElement.clientHeight - usedHeight; 
let availableWidth = document.documentElement.clientWidth - usedWidth; 

if (availableHeight < availableWidth) { // select the smallest dimension
    fieldSizePx = availableHeight;
} else {
    fieldSizePx = availableWidth;
};

fieldSizePx = fieldSizePx - fieldSizePx % fieldBlocks;
let blockSizePx = fieldSizePx / fieldBlocks;

/* Set height of main elements */
const mainContainer = document.getElementById("main_container");
mainContainer.style.height = availableHeight + "px";

const buttonsContainer = document.getElementById("buttons_container");
buttonsContainer.style.height = availableHeight + "px";

/* Set properties of field element */
const field = document.getElementById("field");
field.style.backgroundColor = "#fff";
field.style.height = fieldSizePx + "px";
field.style.width = fieldSizePx + "px";

/* Function that creates a new field with given amount of blocks
and size of a block in px */
function createField (fieldBlocks, blockSizePx) {
    let blocksAmount = fieldBlocks * fieldBlocks; // total amount of blocks
    for (let i = 1; i <= blocksAmount; i++) {
        let block = document.createElement("div");
        block.classList.add("block");
        block.style.backgroundColor = "rgba(0, 0, 0, 0)";
        block.style.height = blockSizePx + "px";
        block.style.width = blockSizePx + "px";
        field.appendChild(block);
    };
    return;
};

/* Function that clear the field if it's not empty */
function clearField () {
    let existingBlocks = document.querySelectorAll(".block");
    while (existingBlocks != undefined) {
        let blockToRemove = document.querySelector(".block");
        field.removeChild(blockToRemove);
    };
    return;
};

/* Simple mode function: change color of the block to black */
function simpleMode(block) {
    block.style.backgroundColor = "rgba(0, 0, 0, 1";
};

/* Random mode function: change color of the block to random
color */
function randomMode(block) {
    let randomRGB = [];
    for (let i = 0; i < 3; i++) {
        randomRGB[i] = Math.floor(Math.random() * 256);
    };
    let randomColor = "rgba(" + randomRGB[0].toString() + ", " + randomRGB[1].toString() + ", " + randomRGB[2].toString() + ", 1)";
    block.style.backgroundColor = randomColor;
}

/* Grey mode function: makes color (initilly white) of the block
10% darker */
function greyMode(block) {
    let style = window.getComputedStyle(block); 
    let oldOpacity = style.backgroundColor[16]; // get current opacity
    if (!oldOpacity) {  // set opacity to 0 if it's not defined
        oldOpacity = 0; 
    };
    let newOpacity = oldOpacity + 1;
    if (newOpacity < 10) {
        block.style.backgroundColor = "rgba(0, 0, 0, 0." + newOpacity;
    } else {
        block.style.backgroundColor = "rgba(0, 0, 0, 1)";
    };
};


/*
createField(16, 55);
let b = document.querySelector(".block");
greyMode(b);


/*alert("Remove?");
clearField();*/