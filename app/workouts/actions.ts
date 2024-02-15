"use server";
import db from "@/lib/db.";
import { Workouts } from "@prisma/client";

/**
 * Fetchs workouts
 * @param email The users email
 * @returns
 */
export async function fetchWorkouts(email: string): Promise<false | Workouts[]> {
  const workouts = await db.workouts.findMany({
    where: {
      ownerEmail: email,
    },
  });

  if (workouts)
    return workouts;
  else
    return false
}
