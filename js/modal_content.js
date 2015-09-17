var link = document.querySelector(".btn-write");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var cancelClose = document.querySelector(".cancel-btn");
var itempress = document.querySelector(".item1");


link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});
cancelClose.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});
