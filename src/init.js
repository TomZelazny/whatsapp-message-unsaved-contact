const input = document.querySelector("#phone");
const statusElement = document.querySelector("#status");

var iti = window.intlTelInput(input, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.min.js",
});
iti.promise.then(function () {
    statusElement.innerHTML = "Initialised!";
});

document.getElementById("test").addEventListener("click", () => {
    window.location.href = `https://wa.me/${iti.getNumber()}`
})