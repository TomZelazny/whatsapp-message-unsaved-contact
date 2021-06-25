const input = document.querySelector("#phone");

var iti = window.intlTelInput(input, {
    initialCountry: "IL",
    preferredCountries: ["IL", "us", "gb"],
    utilsScript: "/vendors/js/utils.min.js",
});
iti.promise.then(function () {
    console.log("initialized!");
});

document.getElementById("phone_form").addEventListener("submit", () => {
    window.location.href = `https://wa.me/${iti.getNumber()}`
})