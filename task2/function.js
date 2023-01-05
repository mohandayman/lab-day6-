window.addEventListener("load",function(){
    let bodyObject=this.document.querySelector("body");
    let clickableDiv=this.document.querySelectorAll(".clickable");
    let newDivObject;
    

    const onclickFunction=function(divObject){
        divObject.onclick=function(){
            if(divObject.classList.contains("clickable")){                  //check if div is clickable
            newDivObject=document.createElement("div");                     //create new div
            newDivObject.classList.add(divObject.classList[0]);             //give new div the clicked div color
            newDivObject.classList.add("clickable");                        //make new div clickable
            bodyObject.append(newDivObject);                                //add new div to body
            divObject.classList.remove("clickable");                        //make the clicked div unclickable
            onclickFunction(newDivObject);                                  //resusion to give the new div the .coclick
            }
        }
    }

    for(let i=0;i<clickableDiv.length;i++){
        console.log("here 2");
        onclickFunction(clickableDiv[i]);
    }



});