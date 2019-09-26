import { Component, OnInit } from '@angular/core';
import { CommandService } from '../command.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  constructor(private cmdService: CommandService) { }
  cmdRequest;
  opResponse;

  ngOnInit() {
    this.cmdRequest = "";
    this.opResponse = "";
  }

  public process() { 
    this.cmdService.process(this.cmdRequest).subscribe(res => {
      this.opResponse = res;
      console.log(res);      
    });
  }

}
