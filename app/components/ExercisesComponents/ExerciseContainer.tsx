
import ExcerciseItem from "./ExerciseItem"
import { fetchExercises } from "@/app/exercises/actions"
import { useEffect, useState, useRef } from "react"



export default  function ExcerciseContainer({email}: {email: string}){

    const [exercises, setExercises] = useState<any>()
    const myExercises  = useRef(exercises)
    
    useEffect( () => {
        const fetch = async () =>{
            const fetchedExercises = await fetchExercises(email)        
            setExercises(fetchedExercises) 
            myExercises.current = fetchedExercises
        }
        fetch()
    },[email, myExercises])


    return(
    <>
        <div className="flex flex-col bg-gray-200 bg-opacity-50 rounded-md mt-4 p-2">
            <ExcerciseItem />
            <ExcerciseItem />
        </div>
    </>)
}