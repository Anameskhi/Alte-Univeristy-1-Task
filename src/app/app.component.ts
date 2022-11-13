import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First_exercise';
  isActive: boolean = true
  
  status: string = "success"

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.isActive = !this.isActive
    if(this.isActive === true){
      
      this.status = 'success'
    }else{
     
      this.status = 'warning'
    }
  }
}
