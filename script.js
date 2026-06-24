function buyArtwork(){
document.getElementById("order")
.scrollIntoView({
behavior:"smooth"
});
}

document
.getElementById("orderForm")
.addEventListener("submit",function(e){

e.preventDefault();

document
.getElementById("successPopup")
.style.display="block";

});
