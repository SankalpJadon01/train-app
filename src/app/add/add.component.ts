import { Component } from '@angular/core';
import { Train } from '../train.model';
import { TrainService } from '../services/train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  t : Train = new Train();

  constructor(private service : TrainService , private router : Router){}

  save(){
    this.service.add(this.t);
    this.router.navigate(['/list']);
  }
}
