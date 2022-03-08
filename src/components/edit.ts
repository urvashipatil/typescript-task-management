import BaseView from "../base-view.js";
import { Task } from "../types/index.js";

export default class Edit extends BaseView{
 
  currentTask: Task|null;
  showEdit:boolean;

  constructor(el: string) {
    super(el);   
    this.currentTask= null; 
    this.showEdit =true;
  }

  mount(): void {   
    (document.querySelector(".btn-edit-save") as HTMLElement).addEventListener("click",(e)=>{
      if(this.currentTask){
        this.currentTask.name = (document.querySelector(".input-name") as HTMLInputElement).value;
      }
      alert(this.currentTask?.name);
    });


   
    (document.querySelector(".btn-edit-save") as HTMLElement).addEventListener("click",(e)=>{
     this.showEdit = false;
     this.render(this.currentTask!);
    })
  }

  render(data: Task): void {
    this.currentTask = data;
    let h="";
    if(this.showEdit){
        h=`<div class="modal">
        <div class="card">
          <label class="modal-close">X</label>
          <input class="input-name" value="${data.name}" />
          <button class="btn-edit-save">Save</button>
        </div>
      </div>`;
    } else{
      h=``;
    }
        

        this.show(h);
  }
}