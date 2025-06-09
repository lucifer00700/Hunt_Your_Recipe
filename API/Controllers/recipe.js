import { Recipe } from "../Models/Recipe.js";
import { SavedRecipe } from "../Models/SavedRecipe.js";


export const add = async (req, res) => {
  const {title,inst,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl} = req.body;

  try{
    const recipe = await Recipe.create({
        title,inst,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl,
        user:req.user,
    });
    
    res.json({message:"Recipe Created Successfully..!",recipe} )
  }catch(error){
    res.json({message:error})

  }
};


export const getAllRecipe = async (req,res) => {
    const recipe = await Recipe.find();
    res.json({recipe}) 
}


export const getRecipeById = async (req,res) => {
    const id = req.params.id
    
    try{
        let recipe = await Recipe.findById(id);

        if(!recipe) return res.json({message:"Recipe with requested id does not exist..!"})

        res.json({recipe})    
    }
    catch(error){
        res.json({message:error})
    }
}




export const getRecipeByUserId = async (req,res) => {
    const userId = req.params.id
    
    try{
        let recipe = await Recipe.find({user:userId});

        if(!recipe) return res.json({message:"Recipe with requested user id does not exist..!"})

        res.json({recipe})    
    }
    catch(error){
        res.json({message:error})
    }
}

export const SavedRecipeById = async(req,res) => {
    const id = req.params.id;

    let recipe = await SavedRecipe.findOne({recipe:id})

    if(recipe) return res.json({message:"recipe already saved..!"})
    
    recipe = await SavedRecipe.create({recipe:id})
    
    res.json({message:"Recipe saved successfully..!"})
}



export const getSavedRecipe = async (req,res) => {
    const recipe = await SavedRecipe.find();
    res.json({recipe}) 
}
