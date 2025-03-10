import { connectDB } from "@/app/lib/db";
import User from "@/app/server/models/User";
import bcrypt from "bcryptjs";


export const POST = async(request: Request) => {
    await connectDB()
    const { name , email , password } = await request.json()

    const existingUser = await User.findOne({email})
    if(existingUser){
        return Response.json({error:"User alreaddy exists"},{status:400})
    }

    const hashedPassword = await bcrypt.hash(password , 10)
    const newUser = new User({name,email,password:hashedPassword})
    await newUser.save()

    return Response.json({message:"New user created Successfully"})
}