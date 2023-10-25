/* Get current viewport dimensions */
const viewportHeight = document.documentElement.clientHeight;
const viewportWidth = document.documentElement.clientWidth;
const availableHeight = viewportHeight - 60;
const availableWidth = viewportWidth -190;

/* Set height of main elements */
const mainContainer = document.getElementById("main_container");
mainContainer.style.height = availableHeight + "px";

const buttonsContainer = document.getElementById("buttons_container");
buttonsContainer.style.height = availableHeight + "px";

/* Set properties of field element */
const field = document.getElementById("field");
field.style.backgroundColor = "#fff";

if (availableHeight < availableWidth) {
    field.style.height = availableHeight + "px";
    field.style.width = availableHeight + "px";
} else {
    field.style.height = availableWidth + "px";
    field.style.width = availableWidth + "px";
}


