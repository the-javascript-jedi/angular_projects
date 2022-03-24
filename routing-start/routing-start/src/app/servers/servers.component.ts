import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public allServers: {id: number, name: string, status: string}[] = [];
  public singleServer:{id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.allServers = this.serversService.getServers();
    console.log("this.allServers",this.allServers);    
  }

}
