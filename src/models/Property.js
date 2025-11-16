import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
},{
    timestamps: true
});

const Property = models.Property || model('Property',PropertySchema);
export default Property;
