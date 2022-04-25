import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class WikipediaService {
  constructor(private _http: HttpClient) {}
  public search(term: string) {
    return this._http.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        format: "json",
        list: "search",
        utf8: "1",
        srsearch: term,
        origin: "*"
      }
    });
  }
}
