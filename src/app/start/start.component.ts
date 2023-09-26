import { Component } from '@angular/core';
import { Train } from '../train.model';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
trains : Train[] = [];
start : string = '';

constructor(private service : TrainService){
}
search(){
  this.service.findBySatart(this.start).subscribe(data => this.trains = data);
}
}
