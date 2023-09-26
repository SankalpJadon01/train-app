import { Component } from '@angular/core';
import { Train } from '../train.model';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent {
  trains : Train[] = [];
  start : string = '';
  end : string = '';
  constructor(private service : TrainService){

  }
  search(){
    this.service.findByRoute(this.start, this.end).subscribe(data => this.trains = data);
  }

}
