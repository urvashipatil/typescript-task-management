var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseView from "../base-view.js";
import Tasks from "./tasks.js";
import { click } from "../decorators/click.js";
export default class Projects extends BaseView {
    constructor(el) {
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
    showtasks(projectId) {
        alert(projectId);
        let tasks = new Tasks("#content");
        tasks.render({ projectId: projectId });
    }
    render() {
        const projectList = [{ id: 1, name: "Ecommerce" }, { id: 2, name: "Blog" }];
        let h = projectList.map(p => {
            return `<div>
                  <div>${p.id} - ${p.name}</div>
                  <button class="button-show-task" data-pid="${p.id}">Show Tasks</button>
                </div>`;
        });
        this.show(h);
    }
}
__decorate([
    click("button-show-task", "pid")
], Projects.prototype, "showtasks", null);
