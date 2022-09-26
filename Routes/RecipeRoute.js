import express from 'express';
import { createRecipe, deleteRecipe, updateRecipe, getAllRecipe, getRecipe } from '../controllers/RecipeController.js';
import { adminUser, prof } from '../middleware/admin.js';
import verifyToken from '../middleware/authmiddle.js';

const router = express.Router();

router.get('/', getAllRecipe);
router.get('/:id', verifyToken, getRecipe);
router.post('/create', verifyToken, prof, createRecipe);
router.put('/update/:id',verifyToken,adminUser, updateRecipe);
router.delete('/delete/:id',verifyToken,adminUser, deleteRecipe);

export default router;


