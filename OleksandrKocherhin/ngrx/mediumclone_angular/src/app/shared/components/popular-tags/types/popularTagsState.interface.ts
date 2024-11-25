import { PopularTagType } from "./popularTag.type";

export interface PopularTagsStateInterface{
    isLoading:boolean;
    error:string|null;
    data:PopularTagType[]|null;
}