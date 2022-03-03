import BaseView from "../base-view.js";
import {Project, TaskData} from "../types/index.js";
import Tasks from "./tasks.js";
import {click} from "../decorators/click.js";


export default class Projects extends BaseView<{}>{
 
  constructor(el: any) {
    super(el);  
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
    let tasks = new Tasks("#content");
    tasks.render({projectId:projectId});
  }



  render(): void {
      const projectList:Project[] = [{id:1,name:"Ecommerce"},{id:2,name:"Blog"}];
      let h = projectList.map(p=>{
        return `<div>
                  <div>${p.id} - ${p.name}</div>
                  <button class="button-show-task" data-pid="${p.id}">Show Tasks</button>
                </div>`;
      })
      
      
      this.show(h);
  }
}