import { Component, OnInit } from '@angular/core';
import { AirTableData, AirTableService } from '../services/air-table.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  public data?: AirTableData;
  constructor(public airtableService: AirTableService){}

  ngOnInit(): void {
    this.airtableService.getData().subscribe(x=>{
      this.data = x;
    });
  }
}
