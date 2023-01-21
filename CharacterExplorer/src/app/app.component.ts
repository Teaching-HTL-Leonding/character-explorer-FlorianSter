import { Component, OnInit } from '@angular/core';
import { AirTableFields, AirTableRecord, AirTableService } from './services/air-table.service';
import { PonyWebService } from './services/pony-web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CharacterExplorer';
  constructor(
    private ponyWebService: PonyWebService,
    private airTableService: AirTableService
    ){

  }

  uploadPonyDataToAirTable(){
    this.ponyWebService.getData().subscribe(x => {
      let records = [];
      for (let i = 0; i < x.data.length; i++) {
        const element = x.data[i];
        const record: AirTableRecord = {
          fields: {
            alias: element.alias,
            id: element.id,
            image: element.image[0],
            name: element.name,
          }
        };
        records.push(record);

        if(i % 10 == 0){
          const airTableData = {
            records: records
          };
          this.airTableService.postData(airTableData).subscribe();
          records = [];
        }
      }
      if(records.length > 0){
        const airTableData = {
          records: records
        };
        this.airTableService.postData(airTableData).subscribe();
      }

    });
  }

  ngOnInit(): void {
    this.airTableService.getData().subscribe(x => {
      if(x.records.length == 0){
        this.uploadPonyDataToAirTable();
      }
    });
  }
}
