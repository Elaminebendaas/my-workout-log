import { useSession } from "next-auth/react"

export default function ExcerciseItem(){

    const { data: session, status } = useSession()


    if (status === "loading") {
        /* lets eventually implement the progress bar from shadcnui */
      return <p>Loading...</p>
    }

    return(<>
    <div>



    </div>

    </>)
}