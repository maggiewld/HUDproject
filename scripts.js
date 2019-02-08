// Video --------------------------------------------
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

// Date ---------------------------------------------
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

// Center Console -------------------------------

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

// Character Profiles -------------------------------
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

// Welcome ------------------------------------------
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

// Modal Popup---------------------------------------------

var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
