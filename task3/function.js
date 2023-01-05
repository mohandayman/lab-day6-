const eggDrop=function(eggObject,basketObject){
    let left=Math.round(Math.random()*(window.innerWidth-(eggObject.width)));   //random egg left initalization
    eggObject.style.left=left+"px";
    let top=0;
    
    let id = this.setInterval(function(){
    
        if(top>=window.innerHeight-eggObject.height-5){         //if egg reached floor
            eggObject.src="brokenEgg.png";
            clearInterval(id);
        }else{                                                  //if not
            top+=5;
            eggObject.style.top=top+"px";
        }

        let eggHeightFromFloor=window.innerHeight-parseInt(eggObject.style.top)-eggObject.height;
        let eggDistanceFromBasketLeft=parseInt(basketObject.style.left)-left;
        let eggDistanceFromBasketRight=left-(parseInt(basketObject.style.left)+basketObject.width);
        /*console.log("height"+eggHeightFromFloor);
        console.log(eggHeightFromFloor<basketObject.height);
        console.log("left: "+eggDistanceFromBasketLeft);
        console.log(eggDistanceFromBasketLeft<=0);
        console.log("right: "+eggDistanceFromBasketRight);
        console.log(eggDistanceFromBasketRight<=0);*/
        if ((eggHeightFromFloor<basketObject.height)&&(eggDistanceFromBasketLeft<=0)&&(eggDistanceFromBasketRight<=0)){
            eggObject.style.display = 'none';                   //hide the egg
        }
    },20);
    

}
window.addEventListener("load",function(){
    let eggObject=this.document.querySelector(".egg");
    let basketObject=this.document.querySelector(".basket");
    basketObject.style.left=this.window.innerWidth/2+"px";
    basketObject.style.top=this.window.innerHeight-basketObject.height+"px";
    
    if(eggDrop(eggObject,basketObject)){
        
    }
    
    

    this.window.onkeydown=function(event){
        let pos=parseInt(basketObject.style.left);
        if (event.key === "ArrowLeft") {                        //on arrow left
            let id =setInterval(function(){
                if(pos>0){                                      //reached edge?
                basketObject.style.left=pos-10+"px";            //minus basket 10px
                }
                clearInterval(id);
            },20);

        } else if (event.key == "ArrowRight") {                 //on arrow right
            let id =setInterval(function(){
                if(pos<innerWidth-basketObject.width-1){        //reached edge?
                basketObject.style.left=pos+10+"px";            //plus basket 10px
                }
                clearInterval(id);
                
            },20);
        } 
    }

});