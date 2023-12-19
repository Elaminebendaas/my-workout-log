"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Plus } from "lucide-react"
import { redirect } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { useSession } from "next-auth/react"
import WorkoutContainer from "@/components/WorkoutComponents/WorkoutContainer"

export default function Workouts(){

    const { data: session, status } = useSession()

    if (status === "loading") {
      return <p>Loading...</p>
    }
    if (status === "unauthenticated" || session?.user?.email === undefined || session?.user?.email === null) {
        redirect('/')
    }

    return(
    <>
        <main className="">
            <h1 className="text-center text-4xl font-bold mb-10">Workouts</h1>

            <div className="flex justify-between items-end mb-4 ">
                <p className="font-semibold text-lg">Your Workouts</p>
                <Button asChild >
                        <Link href={'/workouts/create'}>
                            <Plus className="mr-2 h-4 w-4"/> New Workout
                        </Link>
                </Button>
            </div>

            <Separator/>
    
           <WorkoutContainer email={session?.user?.email}/>
        </main>
    
    </>) 
}