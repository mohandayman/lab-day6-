const toPascal=function(inputString){
    let str="";
    str+=inputString[0].toUpperCase();

    for(let i=1;i<inputString.length;i++){
        if(inputString[i-1]==" "){
            str+=inputString[i].toUpperCase();
        }else{
            str+=inputString[i].toLowerCase();
        }

    }
    return str;
}

window.addEventListener("load",function(){
    
    let addButton=this.document.querySelector("input[value=Add]");                          //select
    let tableObject=this.document.querySelectorAll("table")[1];
    let nameTextBox=this.document.querySelector("input[name=studentName]");
    let gradeTextBox=this.document.querySelector("input[name=studentGrade]");
    let nameTextBoxError=this.document.querySelector("#nameError");
    let gradeTextBoxError=this.document.querySelector("#gardeError");
    let dropObject=this.document.querySelector("select");

    nameTextBox.onkeypress=function(event){                                                //name textbox accepts letters & space only
        //console.log(event.key.toUpperCase());
        if(!(event.key.toLowerCase()!=event.key.toUpperCase()||event.key==" ")){
            event.preventDefault();
        }
    }

    gradeTextBox.onkeypress=function(event){                                                //grade textbox accepts numbers only
        //console.log(event);
        if(isNaN(event.key)){
            event.preventDefault();
        }
    }

    nameTextBox.onblur=function(){                                                          //show name required when name text box is empty
        if(this.value.length==0){
            nameTextBoxError.classList.add("showError");
        }else{
            nameTextBoxError.classList.remove("showError");
        }
    }

    gradeTextBox.onblur=function(){                                                          //show grade required when grade text box is empty
        if(this.value.length==0){
            gradeTextBoxError.classList.add("showError");
        }else{
            gradeTextBoxError.classList.remove("showError");
        }
    }


    dropObject.onchange=function(){                                                         //drop down menu filter
        if(dropObject.value=="all"){
            for(let i = 0;i<tableObject.childElementCount;i++){                             
                tableObject.rows[i].classList.remove("hide");
            }
        }else if(dropObject.value=="success"){
            for(let i = 0;i<tableObject.childElementCount;i++){                             
                if(tableObject.rows[i].cells[1].innerText<50){
                    tableObject.rows[i].classList.add("hide");
                }else{
                    tableObject.rows[i].classList.remove("hide");
                }
            }
        }else{
            for(let i = 0;i<tableObject.childElementCount;i++){                             
                if(tableObject.rows[i].cells[1].innerText>=50){
                    tableObject.rows[i].classList.add("hide");
                }else{
                    tableObject.rows[i].classList.remove("hide");
                }
            }
        }
    }

    addButton.onclick=function(){                                                            //on add click
        let nameIsValid=true;
        let gradeIsValid=false;
        
        if(100>=gradeTextBox.value && gradeTextBox.value>=0 && gradeTextBox.value.length>0){ //check grade if empty & range
            gradeIsValid=true;
        }

        for(let i = 0;i<tableObject.childElementCount;i++){                                  //check if name is existing
            //console.log(tableObject.rows[i].cells[0]!=nameTextBox.value);
            if(tableObject.rows[i].cells[0].innerText==nameTextBox.value){
                nameIsValid=false;
            }
        }


        
        if(nameIsValid&&gradeIsValid){
            let trElement=document.createElement("tr");                                      //element creation
            let nameTdElement=document.createElement("td");
            let gradeTdElement=document.createElement("td");
            let deleteTdElement=document.createElement("td");
            let deleteImg=document.createElement("img");

            nameTdElement.innerText=toPascal(nameTextBox.value);                             //name & grade textbox value assginment
            gradeTdElement.innerText=gradeTextBox.value;
            
            deleteImg.src="delete-32.png";                                                   //delete button implementation
            deleteImg.classList.add("buttonImg");
            deleteImg.onclick=function(){
            deleteImg.parentElement.parentElement.remove();
            }

            let radioElement=document.querySelector("input[name=Department]:checked");       //row color implementation
            trElement.classList.add(`${radioElement.value}`);

            trElement.append(nameTdElement);                                                 //rows appending
            trElement.append(gradeTdElement);

            deleteTdElement.append(deleteImg);
            trElement.append(deleteTdElement);

            tableObject.append(trElement);
        }
    }


});