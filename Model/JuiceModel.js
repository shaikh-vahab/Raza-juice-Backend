import mongoose from "mongoose";

const JuiceSchema = mongoose.Schema({
    Image: String,
    JuiceName: { type: String, required: true },
    Price: { type: String, required: true },
    Quantity: { type: String, required: true },
})

const DryFruitsSchema = mongoose.Schema({
    Image: String,
    DryFruitName: { type: String, required: true },
    Quantity: { type: String, required: true },
    Price: { type: String, required: true }

})

const JuiceModel = mongoose.model('Juices', JuiceSchema);
const DryFruitModel = mongoose.model('Dryfruit', DryFruitsSchema);

export { JuiceModel, DryFruitModel };