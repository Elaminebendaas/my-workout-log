import ExcerciseItem from "./ExerciseItem";
import { fetchExercises } from "@/app/exercises/actions";
import { Exercises } from "@prisma/client";
import { useEffect, useState, useRef } from "react";

export default function ExcerciseContainer({ email }: { email: string }) {
  const [exercises, setExercises] = useState<any>();
  const [fetchState, setFetchState] = useState(false);
  const myExercises = useRef<Exercises[] | false>();

  useEffect(() => {
    const fetch = async () => {
      const fetchedExercises = await fetchExercises(email);
      setExercises(fetchedExercises);
      myExercises.current = fetchedExercises;
      setFetchState(true);
    };
    fetch();
  }, [email, myExercises]);

  if (fetchState === false) {
    return (
      <>
        <div className="flex flex-col bg-gray-200 bg-opacity-50 rounded-md mt-4 p-2">
          <p>Loading your exercises ...</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col bg-gray-200 bg-opacity-50 rounded-md mt-4 p-2">
          {myExercises.current === false ||
          myExercises.current?.length === 0 ? (
            <p>You currently have no exercises. Go ahead and create one!</p>
          ) : (
            myExercises.current?.map((item: Exercises, key: number) => {
              return <ExcerciseItem key={key} workout={item} />;
            })
          )}
        </div>
      </>
    );
  }
}
