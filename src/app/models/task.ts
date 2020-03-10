export interface Task {
    _id: string;
    title: string;
    description: string;
    status: string;
    assignedTo: string;
    completed: boolean;
    project: string;
    createAt: string;
    finishAt: string;
}