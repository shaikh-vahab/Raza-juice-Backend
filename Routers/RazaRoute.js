import express from 'express'
import { Juice, get, getJuices ,DryFruites,getDryFruites} from '../Controller/JuiceController.js';

const RazaRouter = express.Router();

RazaRouter.get('/', get)
RazaRouter.post('/Juices', Juice)
RazaRouter.get('/Juices', getJuices)
RazaRouter.post('/DryFruit', DryFruites)
RazaRouter.get('/DryFruit', getDryFruites)


export default RazaRouter