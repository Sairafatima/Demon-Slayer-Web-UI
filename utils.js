const tanjiro = {
    rank: "1",
    intro:
      "Tanjiro is very kind by nature and has been described by others as having very gentle eyes and a compassionate personamado",
    name: "Tanjiro Kamado",
  
};

function goToHeroSection(id){
    // document is html page
    // getElementById function returns the elemtn which has heros id
    // scrollIntoView function scroll to the element on which it is called on
    // behavior:"smooth" shows the scroll transition to the element
    // this function can be optimized by using id from funtion input/argument
    document.getElementById("heros").scrollIntoView({behavior:"smooth"})
}
function goToVilliansSection(){
     // document is html page
    // getElementById function returns the elemtn which has heros id
    // scrollIntoView function scroll to the element on which it is called on
    // behavior:"smooth" shows the scroll transition to the element
    document.getElementById("villians").scrollIntoView({behavior:"smooth"})
}
function goToContactSection(){
     // document is html page
    // getElementById function returns the elemtn which has heros id
    // scrollIntoView function scroll to the element on which it is called on
    // behavior:"smooth" shows the scroll transition to the element
    document.getElementById("contact").scrollIntoView({behavior:"smooth"})
}
function viewGallery(imageNumber){
document.getElementById("gallery").style.display="block"

}