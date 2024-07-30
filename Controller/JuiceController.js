import { DryFruitModel, JuiceModel } from "../Model/JuiceModel.js";

const get = (req, res) => {
    res.send('Hello world .......... !');
};

const Juice = async (req, res) => {
    const { Image, JuiceName, Price, Quantity } = req.body;

    if (!Image || !JuiceName || !Price || !Quantity) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    const newJuice = new JuiceModel({ Image, JuiceName, Price, Quantity });
    try {
        const savedJuice = await newJuice.save();
        res.status(201).json(savedJuice);
        console.log(savedJuice)
    } catch (error) {
        console.error('Error while saving juice data:', error);
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};

const getJuices = async (req, res) => {
    try {
        const Juice = await JuiceModel.find();
        res.status(200).json(Juice);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
}


const DryFruites = async (req, res) => {
    const { Image, DryFruitName, Quantity, Price } = req.body;

    if (!Image || !DryFruitName || !Price || !Quantity) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    const newDryfruit = new DryFruitModel({ Image, DryFruitName, Quantity, Price });

    try {

        const DryfruitSave = await newDryfruit.save()
        res.status(201).json(DryfruitSave);
        console.log(DryfruitSave)

    } catch (error) {
        console.error('Error while saving Dryfruit data:', error);

    }


}


const getDryFruites = async (req,res) => {
    try {
        const Dryfruit = await DryFruitModel.find();
        res.status(200).json(Dryfruit);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
}
export { get, Juice, getJuices, DryFruites, getDryFruites };
