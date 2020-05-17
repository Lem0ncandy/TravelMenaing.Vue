import {uploadContent}from '@/api/editor.js'

const actions = {
    uploadContent({commit},content){
        return new Promise((resolve,reject) =>{
            uploadContent(content).then(response =>{
                const {data} = response;
                console.log(data);
                resolve();
            }).catch(error =>{
                reject(error);
            })
        })
    }
}
export default{
    namespaced:true,
    actions,
}