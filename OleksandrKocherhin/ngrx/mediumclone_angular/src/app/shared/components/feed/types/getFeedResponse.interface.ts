import { ArticleInterface } from "src/app/shared/types/article.interface";

export interface GetFeedResponseInterface{
    articles:ArticleInterface[];
    articleCount:number;
}