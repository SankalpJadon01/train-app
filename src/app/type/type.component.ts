import { Component } from '@angular/core';
import { Train } from '../train.model';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent {
 
  trains : Train[] = [];
  type : string = '';

  constructor(private service : TrainService){}

  search(){
    this.service.findByType(this.type).subscribe(data => this.trains = data);
  }
}
