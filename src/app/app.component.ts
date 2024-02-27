import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
// import { tableData } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _demoService: DemoService) { }

  phpApiData: any;
  jsonApiData: any;
  // tData! : tableData[];

  inputData = {
    // "id": "3",
    "name": "Saanvi",
    "email": "saanvi@gmail.com",
    "phone": "1230000000"
  }

  ngOnInit() {
    this.getApiData();
    this.getJsonData();
  }

  getApiData() {
    this._demoService.getData().subscribe(res => {
      this.phpApiData = res.data;
      console.log(this.phpApiData);
      // this.tData = res.data;
    })
  }

  getJsonData(){
    this._demoService.getJsonData().subscribe(res=>{
      console.log(res);
      this.jsonApiData = res;
      
    })
  }
}
