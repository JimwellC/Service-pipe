import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ng-pipes-demo';
  //DATE TIME PIPE
  presentDate = new Date();
  time$ = interval(1000).pipe(map(() => new Date()));
  //CURRENCY PIPE
  price : number = 20000; ngOnInit() {
    this.price = 20000;
  }
  Fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
  fruitConstructor() { }
  //DECIMAL PIPE
  decimalNum1 : number = 0.349;
  decimalNum2 : number = 5.43;
  dcPipe() {}
  //PERCENTAGE PIPE
  a: number = 0.259;
  b: number = 1.3495;
  //ASYNC PIPE
  greeting: Promise<string> | null = null;
  arrived: boolean = false;

  private resolve: Function | null = null;

  // constructor() {
  //   this.reset();
  // }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
  //JSON PIPE
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  //html display only the first and last element
  testArray = [1, 2, 3, 4, 5, 0];

  testObject = {
    name: 'John Doe',
    age: 25,
    food: 'Pizza'
  };

  todaydate;
  componentproperty;
  constructor(private myservice: MyserviceService) { 
    this.todaydate = myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
  
}
