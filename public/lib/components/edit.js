import BaseView from "../base-view.js";
export default class Edit extends BaseView {
    constructor(el) {
        super(el);
        this.currentTask = null;
        this.showEdit = true;
    }
    mount() {
        document.querySelector(".btn-edit-save").addEventListener("click", (e) => {
            var _a;
            if (this.currentTask) {
                this.currentTask.name = document.querySelector(".input-name").value;
            }
            alert((_a = this.currentTask) === null || _a === void 0 ? void 0 : _a.name);
        });
        document.querySelector(".btn-edit-save").addEventListener("click", (e) => {
            this.showEdit = false;
            this.render(this.currentTask);
        });
    }
    render(data) {
        this.currentTask = data;
        let h = "";
        if (this.showEdit) {
            h = `<div class="modal">
        <div class="card">
          <label class="modal-close">X</label>
          <input class="input-name" value="${data.name}" />
          <button class="btn-edit-save">Save</button>
        </div>
      </div>`;
        }
        else {
            h = ``;
        }
        this.show(h);
    }
}
