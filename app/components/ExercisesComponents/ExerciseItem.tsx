import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Exercises } from "@prisma/client"

interface IWorkoutProps {
  workout: Exercises
}

export default function ExcerciseItem({ workout }: IWorkoutProps){

    const { data: session, status } = useSession()


    if (status === "loading") {
        /* lets eventually implement the progress bar from shadcnui */
      return <p>Loading...</p>
    }

    return(
    <>
      <div className="flex justify-between align-center rounded m-2 bg-white p-4">

            <p className="font-semibold">{workout.name}</p>

            <div className="flex justify-center align-center gap-2">
              <Button asChild variant={'secondary'}> 
                  <Link href={`/${workout.id}`}>View</Link>
              </Button>
              <Button asChild variant={'destructive'}> 
                <Link href={`/${workout.id}/`}>Delete</Link>{/* Replace the Link with a button since you want an onclick function with this to delete the workout */}
              </Button> 
            </div>

        </div>
    </>
    )
}