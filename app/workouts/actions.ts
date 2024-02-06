"use server";
import db from "@/lib/db.";

export async function fetchWorkouts(email: string) {
  try {
    const workouts = await db.workouts.findMany({
      where: {
        ownerEmail: email,
      },
    });
    if (workouts) return workouts;
  } catch (error) {
    return false;
  }
}
