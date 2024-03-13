import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Network, DataSet } from 'vis';

@Component({
  selector: 'app-vis-one',
  templateUrl: './vis-one.component.html',
  styleUrls: ['./vis-one.component.scss']
})
export class VisOneComponent {

  @ViewChild('network') el: ElementRef;
  private networkInstance: any;

  ngAfterViewInit() {
     const container = this.el.nativeElement;
     const nodes = new DataSet<any>([
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ]);

    const edges = new DataSet<any>([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5},
        {from: 3, to: 5}
        
    ]);
    const data = { nodes, edges };

    this.networkInstance = new Network(container, data, {});
  }
}
