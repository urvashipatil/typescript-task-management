var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseView from "../base-view.js";
import ExportFactory from "../export/export-factory.js";
import { click } from "../decorators/click.js";
import Edit from "../components/edit.js";
export default class Tasks extends BaseView {
    constructor(el, state) {
        super(el);
        this.tasksList = [];
        this.tasksList = [{ id: "t1", name: "Task1", status: "pending" }, { id: "t2", name: "Task2", status: "completed" }];
        this.projectId = "";
    }
    //First explain mount and then replace it with decorator
    mount() {
        document.querySelectorAll(".mark-complete-task").forEach(element => {
            element.addEventListener("click", (e) => {
                let taskid = e.target.dataset["taskid"];
                this.markTaskCompleted(taskid);
            });
        });
        document.querySelectorAll(".edit-task").forEach(element => {
            element.addEventListener("click", (e) => {
                let taskid = e.target.dataset["taskid"];
                this.showEditTaskScreen(taskid);
            });
        });
    }
    export(type) {
        let exportInstance = ExportFactory.getInstance(type);
        exportInstance.download();
    }
    // @click("edit-task","taskid")
    showEditTaskScreen(taskid) {
        alert("Edit Task " + taskid);
        let task = this.tasksList.find(t => t.id == taskid);
        let editItem = new Edit("#modal");
        editItem.render(task);
    }
    // @click("mark-complete-task", "taskid")  
    // @delayMiliseconds(1000)
    markTaskCompleted(taskid) {
        console.log("this", this);
        this.tasksList.map(t => {
            if (t.id == taskid) {
                t.status = "Completed";
            }
        });
        this.render({ projectId: this.projectId });
    }
    getTaskListUI(tasksList) {
        return tasksList.map(t => {
            return `<li>${t.name} - ${t.status} <button class="edit-task" data-taskid="${t.id}">Edit</button>  <button class="mark-complete-task" data-taskid="${t.id}">Mark Completed</button></li>`;
        });
    }
    render(data) {
        this.projectId = data.projectId;
        let h = `<div>Task List- ${data.projectId}
            <button class="export-tasks" data-type="pdf">Export PDF</button>
            <button class="export-tasks" data-type="csv">Export CSV</button>
            <ul>
              ${this.getTaskListUI(this.tasksList).join("")}
            </ul>
          </div> `;
        this.show(h);
    }
}
__decorate([
    click("export-tasks", "type")
], Tasks.prototype, "export", null);
