"use client";

import ExcerciseHistoricalGraph from "@/components/ExercisesComponents/ExerciseHistoricalGraph";
import { useState } from "react";

export type Selection = "avgW" | "maxW" | "avgR" | "maxR";

export default function GraphSelectionContainer(props: { exerciseID: string }) {
  const [selectionType, setSelectionType] = useState<Selection>("avgW");

  return (
    <>
      <div>
        <div>
          <div onClick={() => setSelectionType("avgW")}>
            <span>Average Weight</span>
          </div>
          <div onClick={() => setSelectionType("maxW")}>
            <span>Max Weight</span>
          </div>
          <div onClick={() => setSelectionType("avgR")}>
            <span>Average Reps</span>
          </div>
          <div onClick={() => setSelectionType("maxR")}>
            <span>Max Reps</span>
          </div>
        </div>
        <div>
          <ExcerciseHistoricalGraph
            selectionType={selectionType}
            exerciseID={props.exerciseID}
          />
        </div>
      </div>
    </>
  );
}
