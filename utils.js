

var name=""
var email=""
var message=""
var userArray=[]

function setName(){
    if(document.getElementById("form-name"))
    {
        let nameElm=document.getElementById("form-name")
        name=nameElm.value
    }
}


function setEmail(){
    if(document.getElementById("form-email"))
    {
       
        email=document.getElementById("form-email").value
        
    }
}


function setMessage(){
    if(document.getElementById("form-message"))
    {
        message=document.getElementById("form-message").value
        
    }
}

function submitForm(){
  
   document.getElementById("thank-you-text").html=name;
   document.getElementById("thank-you-text").style.display="block"
   let user={
    name:name ||"NA",
    email:email ||"NA",
    message:message ||"NA"
   } 

   userArray.push(user)
}



function goToHeroSection(id){
    // document is html page
    // getElementById function returns the elemnt which has heros id
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
document.getElementById("gallery").style.display="flex"

}
function closeGallery(){
    document.getElementById("gallery").style.display="none"
}
function viewResponse(imageNumber){
    document.getElementById("contact-responses").style.display="flex"
    let tableElm=document.getElementById("response-table")
    userArray.forEach(element => {
        let row= tableElm.insertRow()
        let nameCell= row.insertCell()
        nameCell.innerHTML=element.name
        let emailCell= row.insertCell()
        emailCell.innerHTML=element.email
        let messageCell= row.insertCell()
        messageCell.innerHTML=element.message
    });
    
    }

function closeResponses(){
    document.getElementById("contact-responses").style.display="none"
}


var img=1;
var maxImages=3
function prevImage(){
   if(img===1){
    return
   }
    img-=1
    let id="img-"+img
    document.getElementById(id).scrollIntoView({behavior:"smooth"})
}
function nextImage(){
   if(img===maxImages){
    return
   }
    img+=1
    let id="img-"+img
    document.getElementById(id).scrollIntoView({behavior:"smooth"})
}