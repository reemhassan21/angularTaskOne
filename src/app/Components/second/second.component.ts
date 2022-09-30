import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {
  imgSrc="../../../assets/images/1.jpg"
  i =1
  myInterval =0
  moveNext(){
    if(this.i<7){
      this.i++;
      this.imgSrc="../../../assets/images/"+this.i+".jpg"
    }

  }

  movePrev(){
    if(this.i>1){
      this.i--;
      this.imgSrc="../../../assets/images/"+this.i+".jpg"
    }
  }
  startShow(){
    this.myInterval = setInterval(() => {
      if(this.i<7){
        this.i++;
        this.imgSrc="../../../assets/images/"+this.i+".jpg"
      }
      else if(this.i==7){
        this.i=0
      }
    }, 1000);
  }
  stopShow(){
    clearInterval(this.myInterval)
  }
}
