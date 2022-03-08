import BaseView from "../base-view.js";
import ExportFactory from "../export/export-factory.js";
import {ExportType, TaskData,Task,DecoratorFn} from "../types/index.js";
import {click} from "../decorators/click.js";
import Edit from "../components/edit.js";
import Kel from "../store/kel.js";



export default class Tasks extends BaseView<TaskData> {

  public tasksList: Task[]=[];
  projectId: string;

  constructor(el:any,state?:Kel) {
    super(el); 
    this.tasksList=[{id:"t1",name:"Task1", status:"pending"},{id:"t2",name:"Task2", status:"completed"}];        
    this.projectId="";

   
  }

  
  //First explain mount and then replace it with decorator
  mount(): void {
    (document.querySelectorAll(".mark-complete-task") as NodeListOf<HTMLElement>).forEach(element=>{
      element.addEventListener("click",(e)=>{
        let taskid = (e.target as HTMLElement).dataset["taskid"] as string;
        this.markTaskCompleted(taskid);
      })
    }) ;
    
    (document.querySelectorAll(".edit-task") as NodeListOf<HTMLElement>).forEach(element=>{
      element.addEventListener("click",(e)=>{
        let taskid = (e.target as HTMLElement).dataset["taskid"] as string;
        this.showEditTaskScreen(taskid);
      })
    })   
  }
  

  @click("export-tasks","type")
  export(type: ExportType){
    let exportInstance = ExportFactory.getInstance(type as ExportType);
    exportInstance!.download();
  }

  // @click("edit-task","taskid")
  showEditTaskScreen(taskid: string){
    alert("Edit Task " + taskid);
    let task = this.tasksList.find(t=>t.id == taskid);
    let editItem = new Edit("#modal");
    editItem.render(task!);
  }

  // @click("mark-complete-task", "taskid")  
  // @delayMiliseconds(1000)
  markTaskCompleted(taskid: string){
    console.log("this",this);
    this.tasksList.map(t=>{
      if(t.id == taskid){
        t.status="Completed"
      }
    });
    this.render({projectId:this.projectId});
  }

  getTaskListUI(tasksList:Task[] ){
    return tasksList.map(t=>{
      return `<li>${t.name} - ${t.status} <button class="edit-task" data-taskid="${t.id}">Edit</button>  <button class="mark-complete-task" data-taskid="${t.id}">Mark Completed</button></li>`
    })
  }
  
  render(data:TaskData): void {    
    this.projectId = data.projectId;
    let h=`<div>Task List- ${data.projectId}
            <button class="export-tasks" data-type="pdf">Export PDF</button>
            <button class="export-tasks" data-type="csv">Export CSV</button>
            <ul>
              ${this.getTaskListUI(this.tasksList).join("")}
            </ul>
          </div> `;
    this.show(h);
  }
}