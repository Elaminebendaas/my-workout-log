
import ExcerciseItem from "./ExerciseItem"
import { fetchExercises } from "@/app/exercises/actions"
import { Excercise } from "@/lib/declaration"
import { Exercises } from "@prisma/client"
import { useEffect, useState, useRef } from "react"



export default function ExcerciseContainer({email}: {email: string}){

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
            {myExercises.current?.length === 0 ? <p></p> : myExercises.current?.map((key: number, item: Excercise) => {
                {console.log(item)}
                <p>{item.name}</p> 
            })}
        </div>
    </>)
}