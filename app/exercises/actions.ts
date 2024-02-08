"use server";
import db from "@/lib/db.";
import { User } from "@prisma/client";

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

export async function fetchExercises(email: string) {
  try {
    const exercises = await db.exercises.findMany({
      where: {
        ownerEmail: email,
      },
    });
    if (exercises) return exercises;
  } catch (error) {
    return false;
  }
}

export async function deleteExercise(id: string, email: string) {
  try {
    const exercise = await db.exercises.delete({
      where: {
        id: id,
        ownerEmail: email,
      },
    });
  } catch (error) {
    return false;
  }
  return true;
}

export async function viewExercise(id: string) {
  const exercise = await db.exercises.findUnique({
    where: {
      id: id,
    },
  });
  if (exercise === null) return false;

  return exercise;
}
