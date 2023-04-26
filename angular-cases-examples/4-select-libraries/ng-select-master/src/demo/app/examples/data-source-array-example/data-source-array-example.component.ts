import { Component, OnInit } from '@angular/core';
import { DataService, Person } from '../data.service';

@Component({
    selector: 'data-source-array-example',
    templateUrl: './data-source-array-example.component.html',
    styleUrls: ['./data-source-array-example.component.scss']
})
export class DataSourceArrayExampleComponent implements OnInit {

    people: Person[] = [];
    selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

    selectedSimpleItem = 'Two';
    simpleItems = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        var insertData={
            id: 'string',
    isActive: false,
    age: 31,
    name: 'select a device',
    gender: 'string',
    company: 'company',
    email: 'email',
    phone: 'phone',
    disabled: false,
        }
        this.dataService.getPeople().subscribe(items =>{
            this.people = items;
            this.people.unshift(insertData)
            console.log("this.people",this.people);;
        });
        this.simpleItems = [true, 'Two', 3];
    }
}
