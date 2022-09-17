import express from 'express';
import mongoose from 'mongoose';
import {Recipe} from '../models/RecipeModel.js'


export const createRecipe = async(req, res) => {
    try{
        const org = new Recipe(req.body);
        console.log(org)

        await org.save();
        res.json({ message: "Recipe created successfully",
        data: org
    })
    }catch (error) {
        console.log(error.message);
    }
    }
    export const getAllRecipe = async(req, res)=> {
        try {
            const org = await Recipe.find();
            if(org){
                res.send(org)
            }else{
                res.send('No Recipe found');
            }
        }catch (error) {
            console.error(error.message);
        }
    }

    export const getRecipe = async(req, res)=> {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
                return res.json({
                    message: "Recipe not Found"
                });
            }
            const id =  req.params.id;
            const org = await Recipe.findById(id);
            if(org){res.send(org);
            }
        }catch (error) {
            console.error(error.message)
        }
    }
    export const updateRecipe = async(req, res)=> {
        try{
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
                return res.json({
                    message: "Recipe not Found"
                });
            }
            const id =  req.params.id;
            const org = await Recipe.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true
            })
            if (org) {
                res.json({
                    message: "Recipe updated Successfully",
                    data: org
                });
            }
        } catch (error) {
            console.error(error.message);
        }
    }
    export const deleteRecipe = async(req, res)=> {
        try{
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
                return res.json({
                    message: "Recipe not Found"
                });
            }
            const id =  req.params.id;
            const org = await Recipe.findByIdAndDelete(id);
            if (org) {
                res.json({
                    message: "Recipe deleted Successfully"});
            }
        } catch (error) {
            console.error(error.message);
        }
    }