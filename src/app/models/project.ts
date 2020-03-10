import { Task } from './task';

export interface Project {
    _id: string;
    title: string;
    description: string;
    tasks: Array<Task>;
    createAt: string;
    finishAt?: string;
}