export default class BaseView {
    constructor(el) {
        this.el = el;
    }
    mount() {
    }
    show(h) {
        if (typeof h == "string") {
            document.querySelector(this.el).innerHTML = h;
        }
        else {
            document.querySelector(this.el).innerHTML = h.join("");
        }
        this.mount();
    }
}
