const body = document.body;
const mode = document.querySelector(".icon-mode");
const nav = document.querySelector("nav");

const myList = document.getElementById("myList");
const aList = myList.querySelectorAll("li a");

const light = 'light_mode';
const bgcl = '#fff';
const tcl = '#000';

const dark = 'dark_mode';
const bgcd = '#000';
const tcd = '#fff';

body.style.backgroundColor = bgcl;
body.style.color = tcl;
mode.innerText = dark;
mode.style.cursor = 'pointer';
nav.style.backgroundColor = bgcd;

mode.addEventListener('click', function() {
    if (mode.innerText === light) {
        body.style.backgroundColor = bgcl;
        body.style.color = tcl;
        mode.innerText = dark;
        nav.style.backgroundColor = bgcd;

        for (var i = 0; i < aList.length; i++) {
            aList[i].style.color = tcd;
            aList[i].addEventListener("mouseover", function () {
                this.style.backgroundColor = bgcl;
                this.style.color = tcl;
            });
          
            aList[i].addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
                this.style.color = tcd;
            });
        }
    } else {
        body.style.backgroundColor = bgcd;
        body.style.color = tcd;
        mode.innerText = light;
        nav.style.backgroundColor = bgcl;

        for (var i = 0; i < aList.length; i++) {
            aList[i].style.color = tcl;
            aList[i].addEventListener("mouseover", function () {
                this.style.backgroundColor = bgcd;
                this.style.color = tcd;
            });
          
            aList[i].addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
                this.style.color = tcl;
            });
        }

        // for (var i = 0; i < aList.length; i++) {
        //     aList[i].addEventListener("mouseover", function () {
        //         this.style.backgroundColor = bgcd;
        //         aList[i].style.color = tcl;
        //     });
          
        //     aList[i].addEventListener("mouseout", function () {
        //         this.style.backgroundColor = "";
        //     });
        // }
    }
});
