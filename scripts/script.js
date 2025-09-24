/* === loading === */
let loading = document.getElementById("loading")

window.addEventListener("load", function() {
    loading.style.display = "none";
});


/* === sign_in === */
const user_icon = document.querySelector(".user-icon");
const sign_in = document.getElementById("signIn");
const overlay = document.querySelector(".overlay");
const signInModal = document.querySelector(".sign_in_form");
const signin_closeBtn = document.querySelector(".close_sign_in");

function openSignIn() {
    overlay.style.display = "block";
    signInModal.style.display = "block";
}

function closeSignIn() {
    overlay.style.display = "none";
    signInModal.style.display = "none";
}

user_icon.addEventListener("click", openSignIn);
sign_in.addEventListener("click", closeSignUp);
sign_in.addEventListener("click", openSignIn);
signin_closeBtn.addEventListener("click", closeSignIn);

overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
        closeSignIn();
        closeSignUp();
    }
});


/* === sign_up === */
const signUpModal = document.querySelector(".sign_up_form");
const sign_up = document.getElementById("signUp");
const signup_closeBtn = document.querySelector(".close_sign_up");

function openSignUp() {
    overlay.style.display = "block";
    signUpModal.style.display = "block";
}

function closeSignUp() {
    overlay.style.display = "none";
    signUpModal.style.display = "none";
}

sign_up.addEventListener("click", closeSignIn);
sign_up.addEventListener("click", openSignUp);
signup_closeBtn.addEventListener("click", closeSignUp);




/* === nav search bar on small screens === */
let search_icon = document.getElementById("search_collapse")
let search_bar = document.getElementById("search_container")
let close_search_bar = document.getElementById("close_search_bar")

search_icon.onclick = function () {
    search_bar.style.display = "flex";
};

close_search_bar.onclick = function () {
    search_bar.style.display = "none";
};


/* === nav links on small screens === */
let collapse_bar = document.getElementById("collapse_bar");
let links_bar = document.getElementById("nav-links");

collapse_bar.onclick = function (event) {
    links_bar.classList.toggle("append");
};

document.addEventListener("click", function (event) {
    if (
        links_bar.classList.contains("append") &&
        !links_bar.contains(event.target) &&
        !collapse_bar.contains(event.target)
    ) {
        links_bar.classList.remove("append");
    }
});



/* === scroll btns in reviews === */
let d = document.getElementById("collapse_bar");
