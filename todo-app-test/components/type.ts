// types.ts

export interface Task {
    id: number;
    body: string;
    check: boolean;
}

export interface TaskListProps {
    tasks: Task[];
    updateTask: (taskId: number, updatedTask: string) => void;
    deleteTask: (taskId: number) => void;
    deleteTaskAll: () => void;
    checkTask: (taskId: number) => void;
}

export interface AddTaskProps {
    addTask: (task: Task) => void;
}

export interface DeleteAllTaskProps {
    deleteTaskAll: () => void;
}

export interface DeleteTaskProps {
    task: Task;
    deleteTask: (id: string, onClose: () => void) => void;
}
