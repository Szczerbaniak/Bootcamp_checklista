export type Priority = "low" | "medium" | "high";

export interface Task {
    content: string;
    priority: Priority;
    isDone: boolean;
    id: number;
}
