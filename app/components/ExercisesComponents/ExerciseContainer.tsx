import ExcerciseItem from "./ExerciseItem"



export default function ExcerciseContainer(){

    return(
    <>
        <div className="flex flex-col bg-gray-200 bg-opacity-50 rounded-md mt-4 p-2">
            <ExcerciseItem />
            <ExcerciseItem />
        </div>
    </>)
}