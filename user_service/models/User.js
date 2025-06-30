import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
    },

    picture: {
        type: String,
        default: function () {
        const seed = Date.now().toString();
        return `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`;
        },
    },

    location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
        coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
        },
    },

    radius:{
        type: Number,
        default:5,
    },

    isOnline:{
        type:Boolean,
        default:false,
    },

    lastActive:{
        type:Date,
        default:Date.now,
    },

        socketId: {
        type: String,
        default: null,
    },

  
    interests: {
        type: [String],
        default: [],
    },

    }, { timestamps: true });

    userSchema.index =

    const User= mongoose.model("User",userSchema);
    export default User;
