import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offLine';
    counter = 5;
    isLogin = false;
    userName: string;
    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
                           new Student('Steve Jobs', 'Computer Science'),
                           new Student('Elon Musk', 'Computer Science')];

    egg = 0;
    rice = 0;
    chicken = 0;
    mushroom = 0;
    dishes = '';
    finish = false;

    addEgg() {
      if (this.counter > 0) {
        this.egg ++;
        this.counter --;
      }
    }

    addRice() {
      if (this.counter > 0) {
        this.rice ++;
        this.counter --;
      }
    }

    addChicken() {
      if (this.counter > 0) {
        this.chicken ++;
        this.counter --;
      }
    }


    addMushroom() {
      if (this.counter > 0) {
        this.mushroom ++;
        this.counter --;
      }
    }


    getServerStatus() {
      return this.serverStatus;
    }


    resetCounter() {
      this.counter = 5;
      this.mushroom = 0;
      this.chicken = 0;
      this.egg = 0;
      this.rice = 0;
      this.dishes = '';
      this.finish = false;
    }

    checkDishes() {
      this.finish = true;
      // tslint:disable-next-line:triple-equals
      if (this.egg == 3 && this.counter == 2) {
        this.dishes = 'Tea Egg';
        return true;
        // tslint:disable-next-line:triple-equals
      } else if (this.rice == 2 && this.counter == 3) {
        this.dishes = 'Rice Ball';
        return true;
      }
      return false;
    }

    login() {
      this.isLogin = true;
    }

    signOut() {
      this.isLogin = false;
    }

    // Event Binding
    onUpdateUserName(event: Event) {
      this.userName = (<HTMLInputElement>event.target).value;
    }
}
