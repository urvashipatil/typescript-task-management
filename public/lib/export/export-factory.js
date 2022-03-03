import ExportCSV from "./export-csv.js";
import ExportPdf from "./export-pdf.js";
export default class ExportFactory {
    static getInstance(type) {
        switch (type) {
            case "csv":
                return new ExportCSV();
            case "pdf":
                return new ExportPdf();
        }
        const _ensureAllconditions = type;
        return _ensureAllconditions;
    }
}
