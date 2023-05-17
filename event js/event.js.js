document.getElementById("sidemenu").addEventListener("mousemove",movingMymouse);
function movingMymouse(){
    document.getElementById("sidemenu").classList.add("active")
    document.getElementById("item-menu").classList.add("active")
    document.getElementById("item-menu1").classList.add("active")
    document.getElementById("item-menu2").classList.add("active")
    document.getElementById("item-menu3").classList.add("active")
    document.getElementById("item-menu4").classList.add("active")
    document.getElementById("item-menu5").classList.add("active")
    document.getElementById("item-menu6").classList.add("active")
    document.getElementById("item-menu7").classList.add("active")
    document.getElementById("item-menu8").classList.add("active")
}
document.getElementById("sidemenu").addEventListener("mouseout",exitMymouse);
function exitMymouse(){
    document.getElementById("sidemenu").classList.remove("active")
    document.getElementById("item-menu").classList.remove("active")
    document.getElementById("item-menu1").classList.remove("active")
    document.getElementById("item-menu2").classList.remove("active")
    document.getElementById("item-menu3").classList.remove("active")
    document.getElementById("item-menu4").classList.remove("active")
    document.getElementById("item-menu5").classList.remove("active")
    document.getElementById("item-menu6").classList.remove("active")
    document.getElementById("item-menu7").classList.remove("active")
    document.getElementById("item-menu8").classList.remove("active")

}
