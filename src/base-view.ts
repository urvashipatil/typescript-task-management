import Kel from "./store/kel.js";

export default abstract class BaseView<T={}>{ 
  constructor(public el:any,state?: Kel) {       
  }

  // abstract render():void

  abstract render(data?:T):void

  mount(): void{

  }

  show(h:string| string[]):void{
    if(typeof h == "string"){
      (document.querySelector(this.el) as HTMLElement).innerHTML=h;
    } else {     
        (document.querySelector(this.el) as HTMLElement).innerHTML=h.join("");      
    }

    this.mount();
  }

  
}