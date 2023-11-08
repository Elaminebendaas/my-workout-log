"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Plus } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Exercises(){

    return(<>
    <main className="">
        <h1 className="text-center text-4xl font-bold mb-10">Excercises</h1>


        <div className="flex justify-between items-end mb-4">
            <p className="font-semibold text-lg">Your Exercises</p>
            <Button asChild>
                    <Link href={'/exercises/create'}>
                        <Plus className="h-4 w-4 mr-2"/> New Exercise
                    </Link>
            </Button>
        </div>
        <Separator/>
            
        

    </main>
    
    </>) 
}