export type aidStepType ={
    id:number,
    step:string,
    title:string,
    description:string,
    imagedsc:any|null,
}

export class  AidData {
    id:number;
     aidTitle: string;
     imagedsc: any;
     aidSteps:aidStepType[];
     why:string
    howToPrv:string

    constructor(id:number, aidTitle:string, imagedsc:any, aidSteps: aidStepType[], why:string, howToPrv:string) {
        this.aidTitle = aidTitle
        this.imagedsc = imagedsc
        this.aidSteps = aidSteps
        this.id = id
        this.why = why
        this.howToPrv = howToPrv

    }
}

