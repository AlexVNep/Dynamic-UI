const menuButton = document.querySelector(".menuBtn");
const dropDownMenu = document.querySelector(".dropdown");

//Adds the class 'show' to dropDownMenu
function toggleDropDown() {
  dropDownMenu.classList.toggle("show");
}

//Listens for the click to execute the toggleDropDown function
menuButton.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropDown();
});

export { toggleDropDown };
