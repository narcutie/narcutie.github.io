var user = document.querySelector(".user-block");
var popup = document.querySelector(".modal-popup");
var overlay = document.querySelector(".overlay");
var overlayShow = document.querySelector(".overlay-show");
var login = document.querySelector(".login-form input[name=login]");
var password = document.querySelector(".login-form input[name=password]")
var popclose = document.querySelector(".modal-popup .close")
//  .modal-content-show

user.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("overlay-show");
	login.focus();
})

popclose.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	overlay.classList.remove("overlay-show");
})

