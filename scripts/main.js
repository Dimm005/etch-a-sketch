/* Set the amount of blocks by default */
let fieldBlocks = 16;

const usedHeight = 60; // height of footer and header together
const usedWidth = 190; // width of buttons_contaitner

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
        block.style.backgroundColor = "rgba(0, 0, 0, 0)";
        block.style.height = blockSizePx + "px";
        block.style.width = blockSizePx + "px";
        field.appendChild(block);
    };
    return;
};


