import { Component, OnInit } from '@angular/core';
import { Node, Edge, Network, Positions } from 'vis';

@Component({
  selector: 'app-vis-save-load',
  templateUrl: './vis-save-load.component.html',
  styleUrls: ['./vis-save-load.component.scss']
})
export class VisSaveLoadComponent {
  nodes: Node[] = [];
  edges: Edge[] = [];
  network!: Network;
  exportAreaValue = '';

  ngOnInit(): void {
    this.draw();
  }

  draw(): void {
    // Create a network of nodes
    const data = this.getScaleFreeNetwork(5);

    this.network = new Network(document.getElementById('mynetwork'), data, {
      manipulation: { enabled: true },
    });

    this.clearOutputArea();
  }

  clearOutputArea(): void {
    this.exportAreaValue = '';
  }

  exportNetwork(): void {
    this.clearOutputArea();

    const nodes = this.objectToArray(this.network.getPositions());

    nodes.forEach(this.addConnections.bind(this));

    // Pretty print node data
    const exportValue = JSON.stringify(nodes, undefined, 2);

    this.exportAreaValue = exportValue;

    this.resizeExportArea();
  }

  importNetwork(): void {
    const inputData = JSON.parse(this.exportAreaValue);

    const data = {
      nodes: this.getNodeData(inputData),
      edges: this.getEdgeData(inputData),
    };

    this.network = new Network(document.getElementById('mynetwork'), data, {});

    this.resizeExportArea();
  }

  addConnections(elem: any, index: any): void {
    // Need to replace this with a tree of the network, then get child direct children of the element
    elem.connections = this.network.getConnectedNodes(index);
  }

  destroyNetwork(): void {
    this.network.destroy();
  }

  getNodeData(data: any): Node[] {
    const networkNodes: Node[] = [];

    data.forEach((elem: any) => {
      networkNodes.push({
        id: elem.id,
        label: elem.id,
        x: elem.x,
        y: elem.y,
      });
    });

    return networkNodes;
  }

  getNodeById(data: any, id: any): any {
    for (let n = 0; n < data.length; n++) {
      if (data[n].id == id) {
        // Double equals since id can be numeric or string
        return data[n];
      }
    }

    throw "Can not find id '" + id + "' in data";
  }

  getEdgeData(data: any): Edge[] {
    const networkEdges: Edge[] = [];

    data.forEach((node: any) => {
      // Add the connection
      node.connections.forEach((connId: any) => {
        networkEdges.push({ from: node.id, to: connId });
        const cNode = this.getNodeById(data, connId);

        const elementConnections = cNode.connections;

        // Remove the connection from the other node to prevent duplicate connections
        const duplicateIndex = elementConnections.findIndex((connection: any) => {
          return connection == node.id; // Double equals since id can be numeric or string
        });

        if (duplicateIndex != -1) {
          elementConnections.splice(duplicateIndex, 1);
        }
      });
    });

    return networkEdges;
  }

getScaleFreeNetwork(size: number): any {
    const nodes = [];
    const edges = [];

    for (let i = 1; i <= size; i++) {
      nodes.push({ id: i, label: `Node ${i}` });
      if (i > 1) {
        edges.push({ from: i, to: Math.floor(Math.random() * (i - 1)) + 1 });
      }
    }

    return { nodes, edges };
  }

  objectToArray(obj: any): any[] {
    return Object.keys(obj).map((key) => {
      obj[key].id = key;
      return obj[key];
    });
  }

  resizeExportArea(): void {
    const exportArea = document.getElementById('input_output') as HTMLTextAreaElement;
    exportArea.style.height = '1px';
    exportArea.style.height = exportArea.scrollHeight + 'px';
  }
}
