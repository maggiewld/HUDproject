// Character Picture Image Array =========================

var i = 0;
var images = [];
var time = 3000; //3s

//Image List ---------------------------------------------

images [0] = "images/avocato.jpg";
images [1] = "images/lordCommander.jpg";
images [2] = "images/mooncake.jpg";
images [3] = "images/nightfall.jpg";

//Image change function ----------------------------------
function changeImg() {
  document.slide.src=images[i];

  if(i < images.length - 1) {
    i ++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

//Light up events on key press ============================

// Video --------------------------------------------------
window.addEventListener("keydown", event => {

  if (event.key == "v") {
  document.getElementById('videoDiv').style.boxShadow = "0 0 20px #7993d5";
  }
  });

  window.addEventListener("keyup", event => {
  if (event.key == "v") {
  document.getElementById('videoDiv').style.boxShadow = "";
  }
});

// Date ---------------------------------------------------
window.addEventListener("keydown", event => {

  if (event.key == "d") {
  document.getElementById('dateDiv').style.boxShadow = "0 0 20px #7993d5";
  }
  });

  window.addEventListener("keyup", event => {
  if (event.key == "d") {
  document.getElementById('dateDiv').style.boxShadow = "";
  }
});

// Nav ----------------------------------------------
window.addEventListener("keydown", event => {

  if (event.key == "n") {
  document.getElementById('navDiv').style.boxShadow = "0 0 20px #7993d5";
  }
  });

  window.addEventListener("keyup", event => {
  if (event.key == "n") {
  document.getElementById('navDiv').style.boxShadow = "";
  }
});

// Status -------------------------------------------
window.addEventListener("keydown", event => {

  if (event.key == "s") {
  document.getElementById('statusDiv').style.boxShadow = "0 0 20px #7993d5";
  }
  });

  window.addEventListener("keyup", event => {
  if (event.key == "s") {
  document.getElementById('statusDiv').style.boxShadow = "";
  }
});

// Center Console ----------------------------------------

window.addEventListener("keydown", event => {

  if (event.key == "h") {
  document.getElementById('nameDiv').style.boxShadow = "0 0 40px #7993d5";
  }
  });

  window.addEventListener("keyup", event => {
  if (event.key == "h") {
  document.getElementById('nameDiv').style.boxShadow = "";
  }
});

// Character Profiles ------------------------------------
window.addEventListener("keydown", event => {

  if (event.key == "c") {
  document.getElementById('charDiv').style.boxShadow = "0 0 20px #7993d5";
  }
  });

  window.addEventListener("keyup", event => {
  if (event.key == "c") {
  document.getElementById('charDiv').style.boxShadow = "";
  }
});

// Welcome -----------------------------------------------
window.addEventListener("keydown", event => {

  if (event.key == "w") {
  document.getElementById('welcomeDiv').style.boxShadow = "0 0 20px #7993d5";
  }
  });

  window.addEventListener("keyup", event => {
  if (event.key == "w") {
  document.getElementById('welcomeDiv').style.boxShadow = "";
  }
});
