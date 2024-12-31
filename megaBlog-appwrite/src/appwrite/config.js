import conf from '../conf/conf'
import { Client,ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client;
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases= new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,{
                title,
                content, featuredImage,
                   status, userId ,                             
            })
        } catch (error) {
            console.log("appwrite service::createPost::error",error);
            
        } 
    }

    async updatePost(slug,{title, featuredImage, userId,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,{
                title, status, userId, content,
            })
        } catch (error) {
            console.log("Appwrite service::updatePost::error",error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
            return true;
        } catch (error) {
            console.log("appwrite service:: deletepost:: error",error);
            return false;
            
        }
    }


    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId, slug)
        } catch (error) {
            console.log("appwrite service:: getPost:: error",error);
            return false
        }
    }
    async getPosts(queries){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,[Query.equal("status","active")])
        } catch (error) {
            console.log("appwrite service:: getPosts::error",error)
            return false
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file)
        } catch (error) {
            console("appwrite service::uploadfile.error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
            return true;
        } catch (error) {
            console.log("appwrite service:: deletefile:: error",error);
            return false;
        }
    }
    //iska response kaafi fast hai kyunki yeh promise nahi leta isiliye isse async mei nahi daalenge
    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId)
    }
}
const service = new Service()
export default service;