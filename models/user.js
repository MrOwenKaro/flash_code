import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email:{
            required:[true,'Email has to be filled in'],
            type:String,
            unique:[true,'Chosen Email already exists'],
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Please enter a valid email"
            }
        },
        username: {
            type: String,
            required: [true, 'Username is required!'],
            match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username disapproved , it should contain 8-20 alphanumeric letters."]
          },
          image: {
            type: String,
          }
},{timestamps:true})

const User = mongoose.models.User || mongoose.model('User',UserSchema)

export default User; 