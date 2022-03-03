import BaseView from "../base-view.js";
import ExportFactory from "../export/export-factory.js";
import {ExportType, TaskData} from "../types/index.js";
import {click} from "../decorators/click.js";

export default class Tasks extends BaseView<TaskData> {

  constructor(el:any) {
    super(el);       
  }

  //First explain mount and then replace it with decorator
  // mount(): void {
  //   (document.querySelectorAll(".export-tasks") as NodeListOf<HTMLElement>).forEach(element=>{
  //     element.addEventListener("click",(e)=>{
  //       let type = (e.target as HTMLElement).dataset["type"] as string;
  //       let exportInstance = ExportFactory.getInstance(type as ExportType);
  //       exportInstance!.download();
  //     })
  //   })     
  // }

  @click("export-tasks","type")
  export(type: ExportType){
    let exportInstance = ExportFactory.getInstance(type as ExportType);
    exportInstance!.download();
  }

  
  render(data:TaskData): void {      
    let h=`<div>Task List- ${data.projectId}
            <button class="export-tasks" data-type="pdf">Export PDF</button>
            <button class="export-tasks" data-type="csv">Export CSV</button>
          </div> `;
    this.show(h);
  }
}