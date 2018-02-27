/**
 * example:
 * var p = document.getElementById("p");
 * popUpTip(p, "可能属性值：column");
 */
var toolTip = (function () {

    function insertAfter(newElement, archorElement) {
        if (archorElement.nextSibling) {
            return archorElement.parentNode.insertBefore(newElement, archorElement.nextSibling);
        }
        return archorElement.parentNode.appendChild(newElement);
    }

    return {
        popUpTip: function(ele, msg) {
            if (typeof msg !== 'string') {
                throw new TypeError("Tooltip message type is not string.", "popUpTip", 79);
            }
            function setTipStyle(pop) {
                pop.sourceEle.style.cursor = "pointer";
                pop.popUpEle.classList.add("toolTipDialogBox");
                pop.popUpEle.innerText = msg;
        
                pop.sourceEle.addEventListener("click", (event) => {
                    if (pop.isAppeared) {
                        pop.popUpEle.style.display = "none";
                        pop.isAppeared = false;
                    } else {
                        pop.popUpEle.style.display = "block";
                        pop.isAppeared = true;
                    }
                }, false);
            }
        
            var popUp = {
                popUpEle: document.createElement("div"),
                sourceEle: ele,
                isAppeared: false,
                msg: msg
            }
            setTipStyle(popUp);
            insertAfter(popUp.popUpEle, ele);
        
            return popUp;
        },
        popUpTipFromClass: function () {
            var elements = document.getElementsByClassName("toolTip");
            for (let i = 0; i < elements.length; i++) {
                this.popUpTip(elements[i], elements[i].dataset.tip);
            }
        }
    }
})();

