
export interface Person{
    name: string,
    surname: string;
    secondName: string;
    jobTitle: JobTitle;
    department: Department;
}

export interface JobTitle{
    name: string;
    id: string;
}

export interface Department{
    name: string;
    id: string;
    rootDepartment?: string;
}