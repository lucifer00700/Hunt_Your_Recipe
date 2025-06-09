import express from 'express'
import { add, getAllRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe, SavedRecipeById } from '../Controllers/recipe.js';
import { Authenticate } from '../middlewares/auth.js';

const router = express.Router();

router.post('/add',Authenticate,add)

router.get('/',getAllRecipe)

router.get('/saved',getSavedRecipe)

router.get('/:id',getRecipeById)

router.get('/user/:id',getRecipeByUserId)

router.post('/:id',Authenticate , SavedRecipeById)

export default router