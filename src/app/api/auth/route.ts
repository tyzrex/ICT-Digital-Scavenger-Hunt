import { NextResponse } from 'next/server';

import { db } from '@/lib/db';

export async function  POST(req: Request, res: Response) {
    const { username, password } = await req.json()
      try{
          if(!username || !password) throw new Error("No user found")
            const user = await db.admin.findUnique({
                where: { username: username },
            })
           if(!user) return NextResponse.json("No user found", { status: 401 })
            if(user?.password === password){
                return NextResponse.json(user, { status: 200 })
            }
      }
        catch(e:any){
            return NextResponse.json(e.message, { status: 401 })
        }
}
