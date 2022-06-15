import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  constructor() {}
  ngOnInit() {}
  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
