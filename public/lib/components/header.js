import BaseView from "../base-view.js";
export default class Header extends BaseView {
    constructor(el) {
        super(el);
    }
    render() {
        let h = `<h4>Header goes here....</h4>`;
        // (document.querySelector(this.el) as HTMLElement).innerHTML=h;
        this.show(h);
    }
}
