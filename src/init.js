const input = document.querySelector("#phone");
const statusElement = document.querySelector("#status");

var iti = window.intlTelInput(input, {
    utilsScript: "/vendors/utils1.min.js",
});
iti.promise.then(function () {
    statusElement.innerHTML = "Initialised!";
});

document.getElementById("test").addEventListener("click", () => {
    window.location.href = `https://wa.me/${iti.getNumber()}`
})