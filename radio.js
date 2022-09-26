class Player{
      constructor(){
        var hei1 = document.getElementById("div1");
        hei1.style.height=screen.height+"px";
        if(screen.width<500){
            hei1.style.height=screen.height+"px";
        }
        var hei2=document.getElementById("div2");
        hei2.style.height=screen.height-300 +"px";

      }
       
        
}
onload =new Player();

//************* */
class Audio{
  constructor(){
    this.audio=document.getElementById("audio");
    this.plpa=document.getElementById("plpa");
    this.titer=document.getElementById("titer");
    this.isplay;
    this.plpa.addEventListener("click",()=>{
        this.puase_play();
    });

    this.nam=[];
    this.nam[0]="Radio France";
    this.nam[1]="Radio Canada";
    this.nam[2]="Radio Atlantique ";

    this.sourc=[];
    this.sourc[0]="https://rfimonde64k.ice.infomaniak.ch/rfimonde-64.mp3";
    this.sourc[1]="http://stream02.ustream.ca/cibl128.mp3";
    this.sourc[2]="https://s7.voscast.com:10433/stream.mp3";

    this.server=0;
    this.resourc();

    var next=document.getElementById("next");
    var back=document.getElementById("back");

    next.addEventListener("click",()=>{
        if(this.server<this.sourc.length-1){
            ++this.server;
            this.isplay=false;
        }else{
            this.server=0;
        }
        localStorage.setItem("s-p",this.server);
        this.resourc();
    });
    
    back.addEventListener("click",()=>{
        if(this.server>0){
            --this.server;
            this.isplay=false;
        }else{
            this.server=this.sourc.length-1;
        }
       localStorage.setItem("s-p",this.server);
        this.resourc();
    });

  }
  resourc(){
    if(localStorage.getItem("s-p")!=null){
       this.server=localStorage.getItem("s-p");
     }

    this.audio.src=this.sourc[this.server];
    this.titer.innerHTML=this.nam[this.server];
    this.puase_play();

}
  puase_play(){
       if(this.isplay==false){
         this.audio.play();
         this.isplay=true;
         this.plpa.src="pause.png"
       }else{
        this.audio.pause();
        this.isplay=false;
        this.plpa.src="play.png"  
    }
}

}
onload =new Audio();

/* ************************** */

class Vol{
    constructor(){
        this.audio=document.getElementById("audio");
        this.audio.volume=50/100;
        
        this.rvol=document.getElementById("rvol");
         this.rvol.addEventListener("change",()=>{
            this.audio.volume=this.rvol.value/100;

         });

         this.rvit=document.getElementById("rvit");
         this.rvit.playbackRate=1;
         this.rvit.addEventListener("change",()=>{
            this.audio.playbackRate=this.rvit.value/100;
            
         });
 
    }
}
onload =new Vol();


/************************* */

class Color{
    constructor(){
    this.col1=document.getElementById("col1");
    this.col1.addEventListener("click",()=>{
     this.scolor("col1");
    });
     this.col2=document.getElementById("col2");
     this.col2.addEventListener("click",()=>{
      this.scolor("col2");
     });

     this.col3=document.getElementById("col3");
     this.col3.addEventListener("click",()=>{
      this.scolor("col3");
     });

     this.col4=document.getElementById("col4");
     this.col4.addEventListener("click",()=>{
      this.scolor("col4");
     });
    
     if(localStorage.getItem("coc")==null){
        document.body.style.background= "rgb(73, 121, 163)";
     }
     this.scolor(localStorage.getItem("coc"));

    }
    scolor(col){
    if(col=="col1"){
        document.body.style.background= "rgb(73, 121, 163)";
    }
    if(col=="col2"){
        document.body.style.background= " rgb(73, 163, 125)";
    }
    if(col=="col3"){
        document.body.style.background= "rgb(121, 163, 73)";
    }
    if(col=="col4"){
        document.body.style.background= " rgb(163, 106, 73)";
    }
    localStorage.getItem("coc",col);

    }
}
onload =new Color();