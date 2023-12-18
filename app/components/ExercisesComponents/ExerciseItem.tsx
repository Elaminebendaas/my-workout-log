import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Exercises } from "@prisma/client"
import { deleteExercise } from "@/app/exercises/actions"
import { useToast } from "@/components/ui/use-toast"

interface IWorkoutProps {
  workout: Exercises
}

export default function ExcerciseItem({ workout }: IWorkoutProps){
    const { toast } = useToast()
    const router = useRouter()
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
                  <Link href={`/exercises/${workout.id}`}>View</Link>
              </Button>
              <Button variant={'destructive'} onClick={async () =>{
                const deletedExercise = await deleteExercise(workout.id, workout.ownerEmail)

                if(deletedExercise){
                  router.refresh()
                    toast({
                      title: `The Exercise: ${workout.name} was deleted`,
                      description: "Your exercise was successfully deleted!",
                      variant: 'default'
                    })
                }else{
                    toast({
                      title: `The Exercise: ${workout.name} could not be deleted`,
                      description: "There was an error that occured where the exercise could not be deleted",
                      variant: 'destructive'
                    })
                }
              }}> 
                Delete{/* Replace the Link with a button since you want an onclick function with this to delete the workout */}
              </Button> 

            </div>

        </div>
    </>
    )
}