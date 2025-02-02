import mongoose, {Schema} from "mongoose";

const faqSchema = new Schema({
        question: { 
            type: String,
            required: true 
        },
        answer: { 
            type: String,
            required: true 
        },
        translations: { 
            type: Map,
            of:{ 
                question:{type:String},
                answer:{type:String}
            }
        }
    },{timestamps :true}
);



const faq = mongoose.model("FAQ",faqSchema);
export default faq;
