const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"username require"],
        unique:[true,"unique unique"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email is unique"]
    },
    password:{
        type:String,
        required:[true,"require"],
        select:false
    },
    bio:String,
    profile_pic:{
        type:String,
        default:'https://ik.imagekit.io/r5nxypvid/image.png?updatedAt=1778947673109'
    }
})

const usermodel = mongoose.model('users',userSchema)

module.exports = usermodel