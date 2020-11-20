//VAR

const submit = document.querySelector("#submit");

const asideRight = document.querySelector("#asideRight");
const form = document.querySelector("#form");
const section = document.querySelector("section");

//FUNCTION

function displayAside(){
    if(asideRight.className == "displayNone"){

        asideRight.classList.add("right");
        asideRight.classList.remove("displayNone");

        section.style.flexBasis = "50%";
    }
        
    else{
        asideRight.classList.add("displayNone");
        asideRight.classList.remove("right");
        section.style.flexBasis = "80%";
    }
        
}

function checkForm(){
    let id = document.querySelector("#login").value;
    let pass = document.querySelector("#pass").value;
    let confirm = document.querySelector("#confirm").value;

    if(id != "" && pass != "" && confirm != "" && pass == confirm){
        document.querySelector("#msg").textContent = "Merci pour votre souscription !";
        let data = [id, pass];
        localStorage.setItem("data", JSON.stringify(data));
        document.querySelector("#login").value = "";
        document.querySelector("#pass").value = "";
        document.querySelector("#confirm").value = "";
        displayAside();
    }
    else{
        document.querySelector("#msg").textContent = "Les mots de passe ne correspondent pas !";
    }
}

//MAIN

document.addEventListener("DOMContentLoaded", function(){
    form.addEventListener("click", displayAside);
    submit.addEventListener("click", checkForm);
});