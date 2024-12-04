import httpInstance from "@/utils/http";

export const test = ()=>{
    return httpInstance.get('home/category/head')
}