"use server"

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
        const nextId = parseInt(id.toString()) + 1
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