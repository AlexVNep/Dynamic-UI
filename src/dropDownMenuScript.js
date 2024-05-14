const menuButton = document.querySelector(".menuBtn");
const dropDownMenu = document.querySelector(".dropdown");

//Adds the class 'show' to dropDownMenu
function toggleDropDown() {
  dropDownMenu.classList.toggle("show");
}

//Listens for the click to execute the toggleDropDown function
function menuButtonHandler() {
  attachEventListenerOpen(menuButton);
}

function attachEventListenerOpen(element) {
  element.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropDown();
  });
}

function closeMenuHandler() {
  attachEventListenerClose(dropDownMenu);
}

function attachEventListenerClose(element) {
  document.documentElement.addEventListener("click", function () {
    if (element.classList.contains("show")) {
      toggleDropDown();
    }
  });
}

export {
  toggleDropDown,
  menuButtonHandler,
  closeMenuHandler,
  attachEventListenerOpen,
  attachEventListenerClose,
};
