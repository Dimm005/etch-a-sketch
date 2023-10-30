/* Set initial parameters */
let fieldBlocks = 16; // set the amount of blocks by default
const usedHeight = 60; // height of footer and header together
const usedWidth = 190; // width of buttons_contaitner
let mode = "simple"; // set mode by default, can be 'simple', 'grey' or 'random'
let fieldSizePx = 0;
let blockSizePx = 0;
let availableHeight = document.documentElement.clientHeight - usedHeight; 
let availableWidth = document.documentElement.clientWidth - usedWidth;



/* Set height of main elements */
const mainContainer = document.getElementById("main_container");
mainContainer.style.height = availableHeight + "px";

const buttonsContainer = document.getElementById("buttons_container");
buttonsContainer.style.height = availableHeight + "px";

/* Set properties of field element */
let sizes = calculateSizes();
fieldSizePx = sizes[0];
blockSizePx = sizes[1];
const field = document.getElementById("field");
field.style.backgroundColor = "#fff"; // used in grey mode 
field.style.height = fieldSizePx + "px";
field.style.width = fieldSizePx + "px";
createField(fieldBlocks, blockSizePx);

/* Add blocks to the field */
const blocks = document.querySelectorAll(".block");
addModeToBlocks(mode);

/* add buttons event */
const sizeButton = document.getElementById("size_button");
sizeButton.addEventListener("click", () => {
    
})

const clearButton = document.getElementById("clear_button");
clearButton.addEventListener("click", () => {
    clearField();
    sizes = calculateSizes();
    fieldSizePx = sizes[0];
    blockSizePx = sizes[1];
    createField(fieldBlocks, blockSizePx);
    addModeToBlocks(mode);
});


/* Function that add event listners with needed mode to the blocks */
function addModeToBlocks(mode) {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        switch (mode) {
            case "simple":
                block.addEventListener("mouseover", () => {
                    simpleMode(block);
                });
                break;
            case "grey":
                block.addEventListener("mouseover", () => {
                    greyMode(block);
                });
                break;
            case "random":
                block.addEventListener("mouseover", () => {
                    randomMode(block);
                });
                break;
        };
    return;
    });
}

/* Function that calculates field size and size of the blocks */
function calculateSizes () {
    availableHeight = document.documentElement.clientHeight - usedHeight; 
    availableWidth = document.documentElement.clientWidth - usedWidth;
    let fieldSizePx = 0;

    if (availableHeight < availableWidth) { // select the smallest dimension
        fieldSizePx = availableHeight;
    } else {
        fieldSizePx = availableWidth;
    };
    fieldSizePx = fieldSizePx - fieldSizePx % fieldBlocks;
    blockSizePx = fieldSizePx / fieldBlocks;
    return [fieldSizePx, blockSizePx];
};

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
    let i = true
    while (i) {
        let blockToRemove = document.querySelector(".block");
        if (blockToRemove != null) {
                    field.removeChild(blockToRemove);
        } else {
            i = false;
        };

    };
    return;
};

/* Simple mode function: change color of the block to black */
function simpleMode(block) {
    block.style.backgroundColor = "rgba(0, 0, 0, 1";
};

/* Random mode function: change color of the block to random color */
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
    let oldOpacity = parseInt(style.backgroundColor[16]); // get current opacity
    if (!oldOpacity) {  // set opacity to 0 if it's not defined
        oldOpacity = 0; 
    };
    let newOpacity = 0;
    if(oldOpacity < 9) { // prevent cycling of color
        newOpacity = oldOpacity +1;
    } else {
        newOpacity = 9;
    };
    if (newOpacity < 10) {
        block.style.backgroundColor = "rgba(0, 0, 0, 0." + newOpacity;
    } else {
        block.style.backgroundColor = "rgba(0, 0, 0, 1)";
    };
};
 


// const blocks = document.querySelectorAll(".block");
// blocks.forEach((block) => {
//     block.addEventListener("mouseover", () => {
//         greyMode(block);
//     });
// });

// while (true) {  // main cycle of the page
//     // add buttons event
//     const sizeButton = document.getElementById("size_button");
//     sizeButton.addEventListener("click", () => {

//     })

//     const clearButton = document.getElementById("clear_button");
//     clearButton.addEventListener("click", () => {
//     clearField();
//     createField(fieldBlocks, blockSizePx);
//     });



// }



