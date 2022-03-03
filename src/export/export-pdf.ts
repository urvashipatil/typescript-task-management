import { Export } from "../types/index.js";

export default class ExportPdf implements Export{
  // geturl(): string {
  //     return "url";
  // }

  download(): void {
    //pdf logic goes here 
    alert("PDF exported");
  }
}