export interface toDoList {
    nameItem:string,
    daysOfWeek:string[] | null[],
    DefinitelyDoable:boolean
    Id?:string
}

export interface Iprovider {
    children:React.ReactNode
}