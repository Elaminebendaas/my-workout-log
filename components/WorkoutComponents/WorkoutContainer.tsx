import { fetchWorkouts } from "@/app/workouts/actions"
import { Workouts } from "@prisma/client"
import { useEffect, useState, useRef } from "react"



export default function WorkoutContainer({email}: {email: string}){

    const [workouts, setWorkouts] = useState<any>()
    const [fetchState, setFetchState] = useState(false)
    const myWorkouts  = useRef<Workouts[] | false>(workouts)
    
    useEffect( () => {
        const fetch = async () =>{
            const fetchedWorkouts = await fetchWorkouts(email)        
            setWorkouts(fetchedWorkouts) 
            myWorkouts.current = fetchedWorkouts
            setFetchState(true)
        }
        fetch()
    },[email, myWorkouts])

    


    if(fetchState === false){
        return(
            <>
            <div className="flex flex-col bg-gray-200 bg-opacity-50 rounded-md mt-4 p-2">
                <p>Loading your exercises ...</p>
            </div>
            </>
        )
    }else{
        return(
            <>
                <div className="flex flex-col bg-gray-200 bg-opacity-50 rounded-md mt-4 p-2">
                    Hello
                </div>
            </>)
    }
    
}