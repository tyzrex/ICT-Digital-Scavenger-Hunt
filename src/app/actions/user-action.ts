"use server"

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { db } from '@/lib/db';

export const checkPassword= async (id: number, password: string) => {
    try{
        const prevId = parseInt(id.toString()) - 1
        const prevPassword = await db.scavenger.findUnique({
            where: { id: prevId },
            select: { password: true }
        })
        return prevPassword?.password === password
    }
    catch(e){
        throw new Error("No more scavenger hunts")
    }
}

export const getNewPassword = async (id: number) => {
    try{
        const nextId = parseInt(id.toString()) 
        //check if it is the last one

        const newPassword = await db.scavenger.findUnique({
            where: { id: nextId },
        })
        return {
            password: newPassword?.password,
            location: newPassword?.location_hint
        }
    }
    catch(e){
        throw new Error("No more scavenger hunts")
    }
}

export const addNewHint = async (hint:string, password:string) => {
    try{
        const newHint = await db.scavenger.create({
            data: {
                password: password,
                location_hint: hint
            }
        })
        revalidatePath('/admin')
        return newHint
    }
    catch(e){
        throw new Error("No more scavenger hunts")
    }
}

export const checkLastHint = async (id: number) => {
        const numberOfPasswords = await db.scavenger.count()
        if(
            parseInt(id.toString())
            === parseInt(numberOfPasswords.toString())){
            redirect("/last_point")
        }
    }
  
export const editExistingHint = async (id: number, hint:string, password:string) => {
    try{
        const newHint = await db.scavenger.update({
            where: { id: id },
            data: {
                password: password,
                location_hint: hint
            }
        })
        revalidatePath('/admin')
        return newHint
    }
    catch(e){
        throw new Error("No more scavenger hunts")
    }
}

export const deleteExistingHint = async (id: number) => {
    try{
        await db.scavenger.delete({
            where: { id: id },
        })
        revalidatePath('/admin')
        return {
            message: "deleted"
        }
    }
    catch(e){
        throw new Error("No more scavenger hunts")
    }
}