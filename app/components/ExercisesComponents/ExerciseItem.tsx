import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExcerciseItem(){

    const { data: session, status } = useSession()


    if (status === "loading") {
        /* lets eventually implement the progress bar from shadcnui */
      return <p>Loading...</p>
    }

    return(
    <>
      <div className="flex justify-between align-center rounded m-2 bg-white p-4">

            <p className="font-semibold">Deadlift</p>

            <div className="flex justify-center align-center gap-2">
              <Button asChild variant={'secondary'}> 
                  <Link href={'/'}>View</Link>
              </Button>
              <Button asChild variant={'destructive'}> 
                <Link href={'/'}>Delete</Link>
              </Button> 
            </div>

        </div>
    </>
    )
}