/* Set the amount of blocks by default */
let fieldBlocks = 16;

/* Calculate field size and size of the blocks */
let fieldSizePx = 0;
let availableHeight = document.documentElement.clientHeight - 60; // viewport height minus height of footer and header
let availableWidth = document.documentElement.clientWidth -190; // viewport width minus width of buttons_contaitner

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


