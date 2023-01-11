import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  firstData=[
    [1, 1, 1],
    [1, 1, 3],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4],
    [5, 5, 5],
    [6, 6, 6],
    [7, 7, 7],
    [8, 8, 8],
    [9, 9, 9],
    [10, 10, 10],
    [11, 11, 11],
    [12, 12, 12],
    [6,8,10]
  ];

  secondData=[
    [3, 0, 2],
    [9, 9, 0],
    [3, 4, 8],
    [2, 6, 1],
    [8, 9, 2],
    [7, 6, 5],
    [6, 3, 1],
    [9, 3, 1],
    [8, 9, 3],
    [9, 1, 0],
    [3, 8, 7],
    [8, 0, 0],
  ]
}
