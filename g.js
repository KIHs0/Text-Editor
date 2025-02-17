const lowerow = document.querySelectorAll(".lowerrow");
const upperow = document.querySelectorAll(".upperrow"); // selecting like :  as for container

const colours = document.getElementById("foreColor");
const highlighter = document.getElementById("backColor");
const namefont = document.getElementById("fontnamelist");
const sizefont = document.getElementById("fontsize");
const formatblock = document.getElementById("formatblock"); // selected with id

const writingarea = document.querySelector(".text-container"); //  ------------ AREA----------------

// const linkbtn

const fts = document.querySelectorAll(".ft");
const alignbtns = document.querySelectorAll(".align");
const indentoutdent = document.querySelectorAll(".spacing");
const boldbtn = document.querySelectorAll(".format");
const ss = document.querySelectorAll(".script"); // selecting extra inv things

let fontnamesforbetter = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "Cursive", // MY fonts
];

const init = () => {
  highlighteraa(fts, false);
  highlighteraa(alignbtns, true);
  highlighteraa(boldbtn, false);
  highlighteraa(ss, true);
  highlighteraa(indentoutdent, true); // starting of functions

  fontnamesforbetter.map((value) => {
    let opt = document.createElement("option");
    opt.value = value;
    opt.innerHTML = value;
    namefont.appendChild(opt); // adding options from js to last select box of my fonts
  });

  for (let i = 1; i <= 79; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = i;
    sizefont.appendChild(opt); // adding options from js
  }
  sizefont.value = 2;
};

//------------------------------   end of main working function --------------------------------------//

// editing function

const modifyeth = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

upperow.forEach((elem) => {
  elem.addEventListener("click", () => {
    modifyeth(elem.id, false, null);
  });
});

lowerow.forEach((elem) => {
  elem.addEventListener("change", () => {
    modifyeth(elem.id, false, elem.value);
  });
});

colours.addEventListener("input", (e) => {
  const selectedcolor = e.target.value;
  console.log(selectedcolor);
  // writingarea.style.color = selectedcolor;
  modifyeth(colours.id, false, selectedcolor);
}); // for changing font foreColor

highlighter.addEventListener("input", (e) => {
  const sc = e.target.value;
  modifyeth(highlighter.id, false, sc);
});

const highlighteraa = (classname, needsremoval) => {
  classname.forEach((element) => {
    element.addEventListener("click", () => {
      if (needsremoval) {
        let alreadyactive = false;
        if (element.classList.contains("active")) {
          alreadyactive = true;
          highlighterremover(classname);
        }

        if (!alreadyactive) {
          element.classList.add("active");
        }
      } else {
        element.classList.toggle("active");
      }
    });
  });
};

const highlighterremover = (classnames) => {
  classnames.forEach((buttons) => {
    buttons.classList.remove("active");
  });
};

//====================================== basic function--------------------------------------------------//
window.onload = init();
