const input = document.querySelector("#phone");
const statusElement = document.querySelector("#status");

var iti = window.intlTelInput(input, {
    utilsScript: "/vendors/js/utils.min.js",
});
iti.promise.then(function () {
    statusElement.innerHTML = "Initialised!";
});

document.getElementById("phone_form").addEventListener("submit", () => {
    window.location.href = `https://wa.me/${iti.getNumber()}`
})