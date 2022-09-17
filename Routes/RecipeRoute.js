import express from 'express';
import { createRecipe, deleteRecipe, updateRecipe, getAllRecipe, getRecipe } from '../controllers/RecipeController.js';

const router = express.Router();

router.get('/', getAllRecipe);
router.get('/recipe', getRecipe);
router.post('/create', createRecipe);
router.put('/update/:id', updateRecipe);
router.delete('/delete/:id', deleteRecipe);

export default router;