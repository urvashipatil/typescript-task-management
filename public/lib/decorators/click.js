// export function click(selector: string, dataAttr: string): DecoratorFn   {
//   return function(target: any, key: string, desc: PropertyDescriptor){
//     // console.log(target,selector, desc.value)
//     const method =desc.value; 
//     debugger;
//     desc.value = function (...args:any[]) {
// 		  // document.addEventListener("click",(e)=>{      
//       //   if((e.target as HTMLElement).className == selector){
//       //     // console.log("Added");
//       //     let params:string;
//       //     if(dataAttr){
//       //       params = (e.target as HTMLElement).dataset[dataAttr] as string;
//       //     }
//       //     method.call(this,args);
//       //   }
//       // })
//       setTimeout(() => {
// 		    method.call(this, ...args);
// 		   }, 3000); 
//       return desc;
// 		};        
//   }
// }
export function delayMiliseconds(milliseconds = 0) {
    debugger;
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            setTimeout(() => {
                originalMethod.call(this, ...args);
            }, milliseconds);
        };
        return descriptor;
    };
}
// export function click(selector: string, dataAttr: string): DecoratorFn   {
//   return function(target: any, key: string, desc: PropertyDescriptor){
//     // console.log(target,selector, desc.value)
//     const method =desc.value; 
//     document.addEventListener("click",(e)=>{
//       if((e.target as HTMLElement).className == selector){
//         // console.log("Added");
//         let params:string;
//         if(dataAttr){
//           params = (e.target as HTMLElement).dataset[dataAttr] as string;
//         }        
//         method(params!);
//       }
//     })
//   }
// }
export function click(selector, dataAttr) {
    return function (target, key, desc) {
        // console.log(target,selector, desc.value)
        const method = desc.value;
        document.addEventListener("click", (e) => {
            if (e.target.className == selector) {
                // console.log("Added");
                let params;
                if (dataAttr) {
                    params = e.target.dataset[dataAttr];
                }
                method.call(target, params);
            }
        });
    };
}
