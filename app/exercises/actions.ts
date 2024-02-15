"use server";
import db from "@/lib/db.";
import { User } from "@prisma/client";

/**
 * Function check if a exercise exists in the exercises collection
 * @param user The users email
 * @param name The name of the workout
 */
async function checkExists(user: User, name: string) {
  let exercise_return;
  user?.excersises.map(async (item) => {
    const exercise = await viewExercise(item);
    console.log(item);
    if (exercise) {
      if (exercise.name === name) {
        exercise_return = null;
        return null;
      }
    }
  });
}

/**
 * Creates an exercise
 * @param formData Data from the form specifically exercise name
 * @param email the users email
 * @returns if true it was successfully created, false there was no name input, null exercise already exists
 */
export async function createExercise(formData: FormData, email: string) {
  const name = formData.get("exercise") as string;
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    const checkExercise = await checkExists(user, name);
    console.log(checkExercise);
    if (checkExercise === null) {
      return null;
    }
  } else {
    return false;
  }

  if (name.length <= 0) {
    return false;
  } else {
    try {
      const newExercise = await db.exercises.create({
        data: {
          ownerEmail: email,
          name: name,
        },
      });
      user.excersises.push(newExercise.id);
      const updatedUser = await db.user.update({
        where: { email: email },
        data: { excersises: user.excersises },
      });
    } catch (error) {
      return false;
    }

    return true;
  }
}

/**
 * Fetchs exercises from a specific user using their email
 * @param email the users email
 * @returns  returns all the users exercises, if false the user was not found
 */
export async function fetchExercises(email: string) {
  const exercises = await db.exercises.findMany({
    where: {
      ownerEmail: email,
    },
  });
  if (exercises) return exercises;
  else return false;
}

/**
 * Deletes exercise specified
 * @param id the exercises id
 * @param email the users email
 * @returns  if true the exercise was successfully deleted, false the exercise could not be deleted
 */
export async function deleteExercise(id: string, email: string) {
  const exercise = await db.exercises.delete({
    where: {
      id: id,
      ownerEmail: email,
    },
  });
  if (exercise) return true;
  else return false;
}

/**
 * Send the exercise information
 * @param id The exercises unique identifier
 * @returns  The exercises content to be displayed, if false it could not be found incorrect ID
 */
export async function viewExercise(id: string) {
  const exercise = await db.exercises.findUnique({
    where: {
      id: id,
    },
  });
  if (exercise === null) return false;

  return exercise;
}
