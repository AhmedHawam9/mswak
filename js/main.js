//=========== Active navbar =============
const currentLocation = location.href;
const menuItem = document.querySelectorAll(
  ".navbar .nav-item .nav-link"
);
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "nav-link active";
  }
}
//=========== Active navbar =============

//=========== Close inspect =============
// document.addEventListener("contextmenu", (event) => event.preventDefault());
// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//     return false;
//   }
// };
//=========== Close inspect =============
