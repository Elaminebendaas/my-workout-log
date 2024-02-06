"use client";
import { viewExercise } from "../actions";
import { useEffect, useState } from "react";
import { Exercises } from "@prisma/client";

export default function Page({ params }: { params: { exerciseId: string } }) {
  const [exercise, setExercise] = useState<false | Exercises>();

  useEffect(() => {
    const fetchExercise = async (ID: string) => {
      const fetchedExercise = await viewExercise(ID);
      setExercise(fetchedExercise);
    };

    fetchExercise(params.exerciseId);
  }, [setExercise, params.exerciseId]);

  if (!exercise) {
    return (
      <>
        <div>Could not find the exercise you are looking for</div>
      </>
    );
  }
  return (
    <>
      <div>
        <div>GRAPH HERE</div>

        <div>Exercise name: {exercise.name}</div>
      </div>
    </>
  );
}
