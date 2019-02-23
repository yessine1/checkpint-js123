function bold(){
    document.getElementById("salut").style.fontWeight="bold" 
    }

function italic(){
    document.getElementById("salut").style.fontStyle="italic" 
    console.log("ahlin")
    }
function under(){
    document.getElementById("salut").style.textDecoration="underline" 
    }


function changefonts(){
    document.getElementById("salut").style.fontFamily= document.getElementById("dropdown").value;
}
function changesize(){
    document.getElementById("salut").style.fontSize= document.getElementById("dropdown2").value;
}