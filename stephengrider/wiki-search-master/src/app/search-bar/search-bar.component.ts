import { Component, OnInit, EventEmitter, Output } from "@angular/core";
@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  term = "";
  @Output() submitted = new EventEmitter<string>();
  ngOnInit() {}
  onInput(value: string) {
    this.term = value;
  }
  onFormSubmit(event: any) {
    event.preventDefault();
    console.log(this.term);
    this.submitted.emit(this.term);
  }
}
