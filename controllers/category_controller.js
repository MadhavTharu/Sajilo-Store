const CategoryModel = require('../models/category_model');
const CategoryController ={
    createCategory : async function( req, res){
        try{
            const categoryData =req.body;
            const newCategory = new CategoryModel(categoryData);
            await newCategory.save();

            return res.json({success: true, data: newCategory, message: "Category Created"});
        }
        catch(ex){
            return res.json({ success: false, message: ex});
        }
    },
    
     fetchAllCategories : async function( req, res){
        try{
            const catagories = await CategoryModel.find();

            return res.json({success: true, data: catagories});
        }
        catch(ex){
            return res.json({ success: false, message: ex});
        }
    },

    
     fetchCategoryById : async function( req, res){
        try{
             const id = req.params.id;
            const foundCategory = await CategoryModel.findById(id);
            if(!foundCategory){
                return res.json({success: false, message:"Category Not Found"});
            }

            return res.json({success: true, data: foundCategory});
        }
        catch(ex){
            return res.json({ success: false, message: ex});
        }
    }

};

module.exports= CategoryController;