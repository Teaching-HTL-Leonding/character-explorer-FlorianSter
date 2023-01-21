import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirTableFields, AirTableRecord, AirTableService } from '../services/air-table.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  public character?:AirTableRecord;
  constructor(
    private activatedRoute: ActivatedRoute,
    private airTableService: AirTableService
    ){
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(x => {
      const id = parseInt(x['id']);
      this.airTableService.getData().subscribe(y => {
        console.log(y);
         this.character = y.records.find(z => z.fields.id === id);
         console.log(this.character);
      });
    });
  }


}
