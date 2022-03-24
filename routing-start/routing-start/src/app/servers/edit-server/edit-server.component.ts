import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  
  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    // retrieve the queryparams - on load of component
     console.log("this.route.snapshot.queryParams",this.route.snapshot.queryParams);
     console.log("this.route.snapshot.fragment",this.route.snapshot.fragment);
    //  if the params and fragment are changed within the route
     this.route.queryParams.subscribe();
     this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.route.snapshot.queryParams.allowEdit;

    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
