import { render } from "ejs";
import CategoryModel from "../models/Category.js";
import PostModel from "../models/Post.js";

class CategoryController{
    static createCategory = (req, res) =>{
        const result = new CategoryModel({
        category_title:req.body.title,
        slug:req.body.slug,
        feature_image:req.file.filename,
    });
    result.save((err) => {
        if(err) {
            console.log(err);
        }
        else{
            console.log("data added successfully");
            res.redirect('/')
        };
      
    }) 

    };

    static getCategoryForm = async(req, res) =>{
        try {
            res.render("categoryform")
        } catch (error) {
            console.log(error)
        }
    };

    static getAllCategory = async(req, res) =>{
        try {
            var category_data = await CategoryModel.find()
            res.render("get_all_category", {category_list: category_data})
        } catch (error) {
            console.log(error)
        }
    };

    static getCategoryDetails = async(req, res) =>{
        try {
            var total_post = await PostModel.find({post_category : (req.params.title)})
            var category = await CategoryModel.find({category_title : (req.params.title)})
            res.render("category_details", {category: category, total_post: total_post})
        } catch (error) {
            console.log(error)
        }
    };

}
export default CategoryController;