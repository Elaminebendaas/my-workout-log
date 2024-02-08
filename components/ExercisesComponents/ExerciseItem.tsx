import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Exercises } from "@prisma/client";
import { deleteExercise } from "@/app/exercises/actions";
import { useToast } from "@/components/ui/use-toast";
import { Dispatch, SetStateAction } from "react";

interface IWorkoutProps {
  workout: Exercises;
  changeState: () => void;
}

export default function ExcerciseItem({ workout, changeState }: IWorkoutProps) {
  const { toast } = useToast();
  const { data: session, status } = useSession();

  if (status === "loading") {
    /* lets eventually implement the progress bar from shadcnui */
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex justify-between align-center rounded m-2 bg-white p-4">
        <p className="font-semibold">{workout.name}</p>

        <div className="flex justify-center align-center gap-2">
          <Button asChild variant={"secondary"}>
            <Link href={`/exercises/${workout.id}`}>View</Link>
          </Button>
          <Button
            variant={"destructive"}
            onClick={async () => {
              const deletedExercise = await deleteExercise(
                workout.id,
                workout.ownerEmail
              );

              if (deletedExercise) {
                changeState();
                toast({
                  title: `The Exercise: "${workout.name}" was deleted`,
                  description: "Your exercise was successfully deleted!",
                  variant: "default",
                });
              } else {
                toast({
                  title: `The Exercise: "${workout.name}" could not be deleted`,
                  description:
                    "There was an error that occured where the exercise could not be deleted",
                  variant: "destructive",
                });
              }
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}
