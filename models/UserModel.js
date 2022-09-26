import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema(
    {
        Username: {
            type: String,
            required: true,
            unique: true
        },
            Email: {
                type: String,
                required: true,
                unique: true,
                trim: true,
                lowercase: true
            },
            Password: {
                type: String,
                required: true
            },
            Role:{
                type: String,
                enum: ["Regular", "Professional"],
                required: true,
            },
            isAdmin: {
                type: Boolean,
                default: false
            },
        },
        {
            timestamps: true
        }
)
    UserSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('Password')) {
        const salt = await bcrypt.genSalt();
        user.Password = await bcrypt.hash(user.Password, salt);
        next()
    }
    next()
  })
   UserSchema.statics.login = async function(Email, Password) {
     const user = await this.findOne({Email});
     if(user) {
         const auth = await bcrypt.compare(Password, user.Password);
         if(auth) {
             return user;
         }
         return 'Incorrect password'
   }else {
       return 'Incorrect Email'
  }
 }

export const UserModel =  mongoose.model('user', UserSchema)