
import PostModel from "../models/Post.js";
import CategoryModel from "../models/Category.js";
 

class PostController {
     
    static adminCreatePost = (req, res) =>{
        const post = new PostModel({
        post_title:req.body.title,
        slug:req.body.slug,
        post_category:req.body.category,
        post_description:req.body.description,
        feature_image:req.file.filename,
    });
 
    post.save((err) => {
        if(err) {
            console.log(err);
        }
        else{
            console.log("data added successfully");
        };
        res.redirect("/admin/post");
    }) 
 
    }
    static homePageRender = async(req, res) =>{
        try {
            var result = await PostModel.find()
            var category = await CategoryModel.distinct("category_title")
            var category_data = await CategoryModel.find()
            var all_category_filter_item = {}
            category.forEach((item) =>{ 
                var res = result.filter((val) => {
                    return val.post_category.toLowerCase() == item.toLowerCase()
                })
                all_category_filter_item[item] = res
            })
            res.render("index", {data: result, category_list: category_data, all_category_details: all_category_filter_item})
         
        } catch (error) {
            console.log(error)
        }
    }
    static getPostForm = async(req, res) =>{
        var category = await CategoryModel.distinct("category_title")
        try {
            res.render("postform", {'category_list': category})
        } catch (error) {
            console.log(error)
        }
    }
    static deletePost = async (req, res) =>{
        try {
            const result = await PostModel.find()
            res.render("deletepost", {data: result})
        } catch (error) {
            console.log(error)
        }      
    }
    
    static deletePostById = async (req, res) =>{
        try {
            console.log(req.params.id)
            const result = await PostModel.findByIdAndDelete(req.params.id)
            res.redirect("/admin/deletepost")
        } catch (error) {
            console.log(error)
        }
    }
    static getPostDetailsById= async (req, res) =>{
        try {
            const result = await PostModel.find({post_title : (req.params.id)})
            console.log(result[0].feature_image)
            res.render("post_details", {post: result[0]})
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default PostController;