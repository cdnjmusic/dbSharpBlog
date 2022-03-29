let back2Top = document.getElementById("back2Top");
let indicator = document.getElementById("indicator");

// Scroll to Top
indicator.addEventListener('click', () => {
    if (back2Top.style.display === "none")
        back2Top.style.display = "block";
    else
        back2Top.style.display = "none";
});

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     back2Top.style.display = "block";
//   } else {
//     back2Top.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }