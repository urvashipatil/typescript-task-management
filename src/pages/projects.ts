import BaseView from "../base-view.js";
import {Project, TaskData} from "../types/index.js";
import Tasks from "./tasks.js";
import {click} from "../decorators/click.js";
import Kel from "../store/kel.js";
import store from "../store/store.js";

export default class Projects extends BaseView<{}>{
   data: Project[];
  constructor(el: any,state:Kel) {
    super(el,state);  
    console.log("store",state.store); 
    this.data = state.store.projects;
    
  //   state.on("changecounter",function(val:any){
  //     console.log("changeCounter",val)
  //  })

  //  state.emit("changecounter",function(){
  //    console.log(state);
  //    state.store.count++;

  //    return state.store;
  //  });
  }

  // mount():void{
  //   (document.querySelectorAll(".button-show-task") as NodeListOf<HTMLElement>).forEach(element=>{
  //     element.addEventListener("click",(e)=>{
  //       let pid = (e.target as HTMLElement).dataset.pid as string;
  //       this.showtasks(pid);
  //     })
  //   })            
  // }

  @click("button-show-task","pid")
  showtasks(projectId: string){
    alert(projectId);
    // store.emit("changeProject",function(){
    //   console.log(store);
    //   store.store.projects[0].name="Post";
 
    //   return store.store;
    // });
    let tasks = new Tasks("#content");
    tasks.render({projectId:projectId});
  }



  render(): void {
      // const projectList:Project[] = [{id:1,name:"Ecommerce"},{id:2,name:"Blog"}];
      let h = this.data.map(p=>{
        return `<div>
                  <div>${p.id} - ${p.name}</div>
                  <button class="button-show-task" data-pid="${p.id}">Show Tasks</button>
                </div>`;
      })
      
      
      this.show(h);
  }
}