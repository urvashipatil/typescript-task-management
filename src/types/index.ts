export type Project={
  id: number,
  name:string
}

export type TaskData={
  projectId: string
}

export interface Export{
  // geturl(): string;

  download():void;

}

export type ExportType = "pdf"|"csv";

export type DecoratorFn = (target: any, key: string, desc: PropertyDescriptor)=> void;



// export type componentDataType<T> = T extends ()=> infer R?R:{}