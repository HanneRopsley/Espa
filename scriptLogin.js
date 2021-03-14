// capture login

let ingelogdeSpeler;

const verifyInput = () => {
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("paswoord").value;
    if (emailInput === "jorisdeschutter@gmail.com" && passwordInput === "espa") {
        ingelogdeSpeler = "Jos";
    }
    unhideButtons();
    goToKomendeWedstrijden();
}

let loginBtn = document.getElementById("loginButton");

loginBtn.addEventListener("click", verifyInput);

let x = window.matchMedia("(max-width: 480px)");

const unhideButtons = () => {
    if (ingelogdeSpeler === "Jos") { 
        if (x.matches) {
            document.getElementsByClassName("hidden")[0].style.display = "flex";
            document.getElementsByClassName("nothidden")[0].style.height = "50%";
        } else {
            document.getElementsByClassName("hidden")[0].style.display = "block";
        }
    }
}

const goToKomendeWedstrijden = () => {
    location.replace("komendeWedstrijden.html")
}

unhideButtons();

x.addListener(unhideButtons);



