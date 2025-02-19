import mongoose from 'mongoose';
import Article from '../models/Article';

async function getArticles(){
    try{
        const data = await Article.find()
        return data
    }
    catch (err : any) {
        console.error(`getArticles Error: ${err.message}`);
        process.exit(1);
    }
}

async function getArticleById(id: string){
    try{
        const data = await Article.findById(id)
        return data
    }
    catch (err : any) {
        console.error(`getArticlesById Error: ${err.message}`);
        process.exit(1);
    }
}

async function createArticle(article: Object){
    try{
        const data = await Article.create(article)
        return { message: `Article ${data._id} succesfully created`, result: data }
    }
    catch (err : any) {
        console.error(`createArticle Error: ${err.message}`);
        process.exit(1);
    }
}

async function deleteArticle(id: string){
    try{
        const data = await Article.deleteOne({_id: id})
        return { message: `Article succesfully deleted`, result: data }
    }
    catch (err : any) {
        console.error(`deleteArticle Error: ${err.message}`);
        process.exit(1);
    }
}

async function updateArticle(id: string, article: Object){
    try{
        const data = await Article.updateOne({_id: id}, article)
        return { message: `Article succesfully updated`, result: data }
    }
    catch (err : any) {
        console.error(`updateArticle Error: ${err.message}`);
        process.exit(1);
    }
}

export {
    getArticles,
    getArticleById,
    createArticle,
    deleteArticle,
    updateArticle
}