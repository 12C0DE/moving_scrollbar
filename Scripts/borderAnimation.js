var borderLine = document.querySelector("#testBorder");

function setup() {
    borderLine.addEventListener("load", setInitialClass, false);

    borderLine.addEventListener("transitionend", loopTransition, false);
    borderLine.addEventListener("webkitTransitionEnd", loopTransition, false);
    borderLine.addEventListener("mozTransitionEnd", loopTransition, false);
    borderLine.addEventListener("msTransitionEnd", loopTransition, false);
    borderLine.addEventListener("oTransitionEnd", loopTransition, false);
}

setup();

function setInitialClass(e) {
    borderLine.className = "draw";
}

function loopTransition(e) {
    if (e.propertyName == "opacity") {
        if (borderLine.className == "draw") {
            borderLine.className = "borderDraw";
        } else {
            borderLine.className = "draw";
        }
    }
}