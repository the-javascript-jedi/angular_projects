export interface Recipe{
    id:string;
    title:string;
    imageUrl:string;
    ingredients:string[];
    instructions?:string[];
    difficulty?:string;
    time?:number;
}