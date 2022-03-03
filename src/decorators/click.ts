import { DecoratorFn } from "../types/index.js";

export function click(selector: string, dataAttr: string): DecoratorFn   {
  return function(target: any, key: string, desc: PropertyDescriptor){
    console.log(target,selector, desc.value)
    const method =desc.value;    
    document.addEventListener("click",(e)=>{
      if((e.target as HTMLElement).className == selector){
        console.log("Added");
        let params:string;
        if(dataAttr){
          params = (e.target as HTMLElement).dataset[dataAttr] as string;
        }
        method(params!);
    }
    })
  }
}