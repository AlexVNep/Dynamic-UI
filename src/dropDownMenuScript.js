const menuButton = document.querySelector(".menuBtn");
const dropDownMenu = document.querySelector(".dropdown");

// Add event listener to menu button that shows menu items when clicked
// when men button is clicked a new class of visible is added to the menu items
// Menu items must all have same class name

function toggleDropDown() {
  dropDownMenu.classList.toggle("show");
}

menuButton.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropDown();
});

// export { toggleDropDown };
