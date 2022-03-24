import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  ngOnInit() {
    // the value from route will be returned in string make
    const id=this.route.snapshot.params["id"];
    
    this.server = this.serversService.getServer(parseInt(id));
    console.log("this.server ",this.server );   
    //Listening for chages
    this.route.params.subscribe((params:Params)=>{
      console.log("params",params);
      this.server=this.serversService.getServer(parseInt(params['id']))
    })
  }

}
