import { Component, OnInit } from '@angular/core';
import { Node, Edge, Network, Positions } from 'vis';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-vis-manipulation',
  templateUrl: './vis-manipulation.component.html',
  styleUrls: ['./vis-manipulation.component.scss']
})
export class VisManipulationComponent {
  nodes: Node[] = [];
  edges: Edge[] = [];
  network!: Network;

  ngOnInit(): void {
    this.setDefaultLocale();
    this.draw();
  }

  setDefaultLocale(): void {
    // Implement this method if needed
  }

  destroy(): void {
    if (this.network) {
      this.network.destroy();
      this.network = null as any;
    }
  }

  draw(): void {
    this.destroy();
    this.nodes = [];
    this.edges = [];
 
    // Create your network data here
    // For simplicity, I'm using the same getScaleFreeNetwork function
    // You might need to adjust this based on your actual data source
    const data = this.getScaleFreeNetwork(5);
    const container = document.getElementById('mynetwork') as HTMLElement;
    const options = {
      layout: { randomSeed: 2 },
      locale: (document.getElementById('locale') as HTMLSelectElement).value,
      interaction: { keyboard: true },
      manipulation: {
        addNode: (nodeData, callback) => {
          // this.showPopup('Add Node', nodeData, callback);
          this.addNodePopup(data, callback);
        },
        editNode: (nodeData, callback) => {
          this.showPopup('Edit Node', nodeData, callback);
        },
        addEdge: (edgeData, callback) => {
          if (edgeData.from === edgeData.to) {
            const result = confirm('Do you want to connect the node to itself?');
            if (result) {
              callback(edgeData);
            }
          } else {
            callback(edgeData);
          }
        },
      },
    };

    this.network = new Network(container, data, options);
  }
addNodePopup(data: any, callback: (result: any) => void): void {
  // Your logic to show the popup for adding nodes
  console.log('Add Node Popup', data);
  const nodeId = uuidv4();
    // Set the generated ID to the node data
  data.id = nodeId;
  const existingNode = this.nodes.find((node) => node.id === data.id);
  // Example: Simulate a popup and use callback to add the node
  const nodeName = prompt('Enter node name:');
   if (existingNode) {
    // Node with the same ID already exists, handle accordingly
    console.log('Node with the same ID already exists:', existingNode);
  } else {
    // Continue with your logic to add the node
    // ...
    if (nodeName) {
      data.label = nodeName;
      callback(data);
    }
  }
}
  showPopup(operation: string, data: any, callback: (result: any) => void): void {
    // Implement the popup logic here
    // You can use Angular services or other components for the popup
    // For simplicity, I'm showing a console log for demonstration
    console.log(`${operation} popup shown for data:`, data);

    // Example of saving data and closing popup
    // Uncomment the following lines if you have a real popup component
    // callback(savedData);
    // this.closePopup();
  }

  closePopup(): void {
    // Implement the popup closing logic here
    // You can use Angular services or other components for the popup
    // For simplicity, I'm showing a console log for demonstration
    console.log('Popup closed');
  }

  getScaleFreeNetwork(size: number): any {
    // Implement your network data creation logic here
    // For simplicity, returning a dummy data
    // You might need to adjust this based on your actual data source
    const nodes = new Array(size).fill(null).map((_, i) => ({ id: i, label: `Node ${i}` }));
    const edges = new Array(size - 1)
      .fill(null)
      .map((_, i) => ({ from: i, to: i + 1, label: `Edge ${i}` }));
    return { nodes, edges };
  }
}
