'use server'
import db from "@/lib/db."

export async function createExercise(formData: FormData, email: string){

    const name = formData.get('exercise') as string

    if(name.length <= 0){
        return false
    }
    else{
        try {
            const newExercise = await db.exercises.create({
                data: {
                    ownerEmail: email,
                    name: name
                }
            })    
        } catch (error) {
            return false
        }
        
        return true
    }
  }

export async function fetchExercises(email: string){
    
    const exercises = await db.exercises.findMany(
        {
            where:{
                ownerEmail: email
            }
    })


    if(exercises) return exercises
    else return false
}


export async function deleteExercise(id: string, email: string){
    try {
        const exercise = await db.exercises.delete({
            where: {
                id: id,
                ownerEmail: email
            }
        })    
    } catch (error) {
        return false
    }
    return true
}

export async function viewExercise(id: string){
    
    
}