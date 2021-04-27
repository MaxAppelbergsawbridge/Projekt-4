
let openDoorButton = document.querySelector(".open-door-button");

openDoorButton.addEventListener("click", click)

function click(event)
{
    console.log("DAD");
    document.querySelector(".länk").classList.toggle("invisible");
    document.querySelector(".dörr").classList.toggle("invisible");
}