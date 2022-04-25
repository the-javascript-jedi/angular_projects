import { Component } from "@angular/core";
import { WikipediaService } from "./wikipedia.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pages = [];
  constructor(private _wikiService: WikipediaService) {}
  title = "wiki-search-app";
  onTerm(term: string) {
    console.log("@output data from child>>", term);
    this._wikiService.search(term).subscribe((response: any) => {
      console.log(response);
      this.pages = response.query.search;
    });
  }
}
