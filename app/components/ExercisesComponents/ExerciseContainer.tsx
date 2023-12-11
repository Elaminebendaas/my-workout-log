import ExcerciseItem from "./ExerciseItem"
import { fetchExercises } from "@/app/exercises/actions"




export default function ExcerciseContainer({email}: {email: string}){


    return(
    <>
        <div className="flex flex-col bg-gray-200 bg-opacity-50 rounded-md mt-4 p-2">
            <ExcerciseItem />
            <ExcerciseItem />
        </div>
    </>)
}