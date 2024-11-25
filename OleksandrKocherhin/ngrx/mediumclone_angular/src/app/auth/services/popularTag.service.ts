import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map, Observable } from 'rxjs';
import { GetPopularTagsResponseInterface } from 'src/app/shared/components/popular-tags/types/getPopularTagsResponse.interface';
import { PopularTagType } from 'src/app/shared/components/popular-tags/types/popularTag.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PopularTagService{
    constructor(private http:HttpClient){}

    getPopularTags():Observable<PopularTagType[]>{
        const url=environment.apiUrl+'/tags';
        return this.http.get<GetPopularTagsResponseInterface>(url).pipe(map((response)=>response.tags))
    }
}