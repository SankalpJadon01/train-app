import { Component } from '@angular/core';
import { Train } from '../train.model';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
trains :  Train[] = [];
constructor(private service : TrainService){
  this.service.list().subscribe(data => this.trains =data);
}

}
