"use server"

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { RouteType } from '@/lib/utils';

export const checkPassword = async (id: number, password: string, routeType: RouteType, isLastHint?: boolean) => {
    try {
        if (isLastHint) {
            const lastHint = await db.scavenger.findFirst({
                where: { id: id, type: routeType }
            });
            return lastHint?.password === password;
        }

       const hints = await db.scavenger.findMany({
              where: { id: { lt: parseInt(id.toString()) }, type: routeType },
              orderBy: { id: 'asc' }
         });
        //check if the password is correct
        const oneBefore = hints[hints.length - 1];
        return oneBefore?.password === password;
    }
    catch(e) {
        throw new Error("Error in checking password");
    }
}

export const getNewPassword = async (id: number, routeType: RouteType) => {
    try {
        const nextId = parseInt(id.toString());
        const newPassword = await db.scavenger.findFirst({
            where: { id: nextId, type: routeType },
        });
        return {
            password: newPassword?.password,
            location: newPassword?.location_hint
        };
    }
    catch(e) {
        throw new Error("Error in getting new password");
    }
}

export const addNewHint = async (hint: string, password: string, routeType: RouteType, quote:string) => {
    try {
        const newHint = await db.scavenger.create({
            data: {
                password: password,
                location_hint: hint,
                type: routeType, // Add the route type here
                quote: quote
            }
        });
        revalidatePath('/admin');
        return newHint;
    }
    catch(e) {
        throw new Error("Error in adding new hint");
    }
}

export const checkLastHint = async (id: number, routeType: RouteType) => {
    const numberOfPasswords = await db.scavenger.count({
        where: { type: routeType }
    });
    if (parseInt(id.toString()) === parseInt(numberOfPasswords.toString())) {
        redirect("/last_point");
    }
}

export const editExistingHint = async (id: number, hint: string, password: string) => {
    try {
        const newHint = await db.scavenger.updateMany({
            where: { id: id },
            data: {
                password: password,
                location_hint: hint
            }
        });
        revalidatePath('/admin');
        return newHint;
    }
    catch(e) {
        throw new Error("Error in editing existing hint");
    }
}

export const deleteExistingHint = async (id: number) => {
    try {
        await db.scavenger.deleteMany({
            where: { id: id},
        });
        revalidatePath('/admin');
        return {
            message: "deleted"
        };
    }
    catch(e) {
        throw new Error("Error in deleting existing hint");
    }
}
