var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseView from "../base-view.js";
import ExportFactory from "../export/export-factory.js";
import { click } from "../decorators/click.js";
export default class Tasks extends BaseView {
    constructor(el) {
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
    export(type) {
        let exportInstance = ExportFactory.getInstance(type);
        exportInstance.download();
    }
    render(data) {
        let h = `<div>Task List- ${data.projectId}
            <button class="export-tasks" data-type="pdf">Export PDF</button>
            <button class="export-tasks" data-type="csv">Export CSV</button>
          </div> `;
        this.show(h);
    }
}
__decorate([
    click("export-tasks", "type")
], Tasks.prototype, "export", null);
