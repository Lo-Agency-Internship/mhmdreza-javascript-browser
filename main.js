// <!-- project one --> hex
function onclicks( )
{
    let color = Math.floor(Math.random()*16666666).toString(16);
    document.getElementById("backgroundcolor").style.backgroundColor ='#'+color
    console.log(color)
}
// <!-- project two -->




// start project 2 --> filter 

function onclicks1(name) {  
  if (name!=="all") {
    switch (name) {
      
      case "sweet":
       document.querySelectorAll(".all").forEach(a=>a.style.display = "none");
       document.querySelectorAll(".sweet").forEach(a=>a.style.display = "initial");
        break;
        case "cake":
       document.querySelectorAll(".all").forEach(a=>a.style.display = "none");
       document.querySelectorAll(".cake").forEach(a=>a.style.display = "initial");
        break;
        case "dounat":
       document.querySelectorAll(".all").forEach(a=>a.style.display = "none");
       document.querySelectorAll(".dounat").forEach(a=>a.style.display = "initial");
        break;
        case "cupcake":
       document.querySelectorAll(".all").forEach(a=>a.style.display = "none");
       document.querySelectorAll(".cupcake").forEach(a=>a.style.display = "initial");
        break;
    
      default:
        break;
    }
  }
  else 
  {
    document.querySelectorAll(".all").forEach(a=>a.style.display = "initial");
  }
  
 }
 
function onclicks2() {
 let val= document.getElementById("search").value
 switch (val) {
   case "sweet":
    document.querySelectorAll(".all").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".sweet").forEach(a=>a.style.display = "initial");
     break;
     case "cake":
    document.querySelectorAll(".all").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".cake").forEach(a=>a.style.display = "initial");
     break;
     case "dounat":
    document.querySelectorAll(".all").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".dounat").forEach(a=>a.style.display = "initial");
     break;
     case "cupcake":
    document.querySelectorAll(".all").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".cupcake").forEach(a=>a.style.display = "initial");
     break;
     case "all":
  
      document.querySelectorAll(".all").forEach(a=>a.style.display = "initial");
       break;
 
   default:
     break;
 }
}

// end of project 2