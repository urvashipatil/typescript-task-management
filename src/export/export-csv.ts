import { Export } from "../types/index.js";

export default class ExportCSV implements Export{
  // geturl(): string {
  //     return "url";
  // }

  download(): void {
    //CSV logic goes here 
    alert("CSV exported");
  }
}