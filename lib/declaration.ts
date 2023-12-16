export type Excercise = {
    id: string
    name: string
    ownerEmail: string;
} & {
    history: {
        date: Date;
        weightLBS: number;
        reps: number;
        sets: number;
    }   
}
