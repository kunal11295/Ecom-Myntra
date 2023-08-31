    import mongoose  from "mongoose";
    import { Schema } from "mongoose";

    const myntra = new Schema({
        name :{ type:String, required:true},
        email : {type:String , required: true, unique : true},
        password :{type:String , required: true},
    })

    export default mongoose.model("Myntras",myntra);