import BaseView from "../base-view.js";
export default class Footer extends BaseView{  
  constructor(el:any){
    super(el);
  }
  render(){
    let h=`<h4>Footer goes here....</h4>`;
    // (document.querySelector(this.el) as HTMLElement).innerHTML=h;
    this.show(h);
  }

}