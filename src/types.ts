export const PRIORITIES = ['low', 'medium', 'high'] as const;
export type Priority = (typeof PRIORITIES)[number];

export interface Task {
    content: string;
    priority: Priority;
    isEdited: boolean;
    isDone: boolean;
    id: number;
}
