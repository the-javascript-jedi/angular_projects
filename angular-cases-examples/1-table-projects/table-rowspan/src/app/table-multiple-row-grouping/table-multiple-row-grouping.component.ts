import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-multiple-row-grouping',
  templateUrl: './table-multiple-row-grouping.component.html',
  styleUrls: ['./table-multiple-row-grouping.component.scss']
})
export class TableMultipleRowGroupingComponent implements OnInit {
    public Countries: any[];
    public streets: any[];
    name: string;
  constructor() {
    this.SetData();

      const concat = (x,y) => x.concat(y)
      const flatMap = (f,xs) => xs.map(f).reduce(concat, [])


        let states = flatMap(c => c.States.map(s => ({Country:c, State: s})), this.Countries);
        let cities = flatMap(c => c.State.Cities.map(s => ({Country:c.Country, State:c.State, City: s})), states);

        this.streets = flatMap(c => c.City.Streets.map(str => ({Country:c.Country,     State:c.State, City: c.City, Street: str})), cities);
                     // .flatMap(c => c.Sreets.map(str => ({Country:c.Country, //State:c.State, City: c, Street: str)));
   }

  ngOnInit(): void {
  }
  public firstCountryInGroup(str: any){
      return this.streets.filter(s => s.Country == str.Country).indexOf(str) == 0;
    }

    public numberOfCountry(str: any){
      return this.streets.filter(s => s.Country == str.Country).length;
    }

     public firstStateInGroup(str: any){
      return this.streets.filter(s => s.State == str.State).indexOf(str) == 0;
    }

    public numberOfState(str: any){
      return this.streets.filter(s => s.State == str.State).length;
    }

      public firstCityInGroup(str: any){
      return this.streets.filter(s => s.City == str.City).indexOf(str) == 0;
    }

    public numberOfCity(str: any){
      return this.streets.filter(s => s.City == str.City).length;
    }

    private SetData(){
        this.Countries = [
  {
    "CountryName": " 1",
    "States": [
      {
        "StateName": "Kerala",
        "Cities": [
          {
            "CityName": "Cochin",
            "Streets": [
              {
                "StreetName": "New Street",
                "Male": 500,
                "Female": 600,
                "Others": 6
              },
              {
                "StreetName": "Main Street",
                "Male": 300,
                "Female": 288,
                "Others": 2
              }
            ],
            "NoOfStreets": 2
          },
          {
            "CityName": "Trivandrum",
            "Streets": [
              {
                "StreetName": "Guru Street",
                "Male": 500,
                "Female": 600,
                "Others": 10
              },
              {
                "StreetName": "TVK Street",
                "Male": 500,
                "Female": 600,
                "Others": 2
              }
            ],
            "NoOfStreets": 2
          }
        ],
        "NoOfStreets": 4
      },
      {
        "StateName": "Maharastra",
        "Cities": [
          {
            "CityName": "Mumbai",
            "Streets": [
              {
                "StreetName": "Krisha Street",
                "Male": 700,
                "Female": 850,
                "Others": 1
              },
              {
                "StreetName": "Main Street",
                "Male": 500,
                "Female": 600,
                "Others": 2
              }
            ],
            "NoOfStreets": 2
          },
          {
            "$id": "20",
            "CityName": "Surath",
            "Streets": [
              {
                "StreetName": "New Street",
                "Male": 500,
                "Female": 600,
                "Others": 4
              },
              {
                "StreetName": "Billa Street",
                "Male": 500,
                "Female": 600,
                "Others": 2
              }
            ],
            "NoOfStreets": 2
          }
        ],
        "NoOfStreets": 4
      }
    ],
    "NoOfStreets": 8
  },
  {
    "CountryName": " 2",
    "States": [
      {
        "StateName": "Alaska",
        "Cities": [
          {
            "CityName": "AKA Central",
            "Streets": [
              {
                "StreetName": "New Street",
                "Male": 200,
                "Female": 210,
                "Others": 2
              },
              {
                "StreetName": "Cross Street",
                "Male": 1000,
                "Female": 1050,
                "Others": 10
              }
            ],
            "NoOfStreets": 2
          }
        ],
        "NoOfStreets": 2
      }
    ],
    "NoOfStreets": 2
  }
];
console.log("this.Countries",this.Countries)
    }
    
}


