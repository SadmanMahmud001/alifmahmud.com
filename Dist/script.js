let menuItems = document.getElementById("menuItems");

document.getElementById("menuIcon").addEventListener("click", function () {
    if (menuItems.style.transform == "translateX(0%)") {
        menuItems.style.transform = "translateX(-100%)"; 
    } else {
        menuItems.style.transform = "translateX(0%)"; 
    }
});

let remove = document.getElementById("remove");

remove.addEventListener("click", function(){
    if(menuItems.style.transform == "translateX(-100%)"){
        menuItems.style.transform = "translateX(0%)"
    }
    else{
        menuItems.style.transform = "translateX(-100%)"
    }
});


let myInfo = document.getElementById("myInfo");

document.getElementById("myInfoRemove").addEventListener("click", function(){
    myInfo.style.display = "none";
    document.getElementById("headerText").style.marginTop = "70px";
});


// questionsBox

let questionsBox_1 = document.getElementById("questionsBox_1");
let questionsBox_2 = document.getElementById("questionsBox_2");
let questionsBox_3 = document.getElementById("questionsBox_3");
let questionsBox_4 = document.getElementById("questionsBox_4");

questionsBox_1.style.backgroundColor = "white";
questionsBox_2.style.backgroundColor = "white";
questionsBox_3.style.backgroundColor = "white";
questionsBox_4.style.backgroundColor = "white";


questionsBox_1.addEventListener("click", function(){
    if(questionsBox_1.style.backgroundColor == "white"){
        questionsBox_1.style.backgroundColor = "#EEE9FF";
    }
    else{
        questionsBox_1.style.backgroundColor = "white";
    }
});

questionsBox_2.addEventListener("click", function(){
    if(questionsBox_2.style.backgroundColor == "white"){
        questionsBox_2.style.backgroundColor = "#EEE9FF";
    }
    else{
        questionsBox_2.style.backgroundColor = "white";
    }
});

questionsBox_3.addEventListener("click", function(){
    if(questionsBox_3.style.backgroundColor == "white"){
        questionsBox_3.style.backgroundColor = "#EEE9FF";
    }
    else{
        questionsBox_3.style.backgroundColor = "white";
    }
});

questionsBox_4.addEventListener("click", function(){
    if(questionsBox_4.style.backgroundColor == "white"){
        questionsBox_4.style.backgroundColor = "#EEE9FF";
    }
    else{
        questionsBox_4.style.backgroundColor = "white";
    }
});