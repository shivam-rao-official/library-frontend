import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import {
  ToolbarItems,
  SearchSettingsModel,
} from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-bookstatus',
  templateUrl: './bookstatus.component.html',
  styleUrls: ['./bookstatus.component.scss'],
})
export class BookstatusComponent implements OnInit {
  public data: any[] = [];
  public filterOption: FilterSettingsModel = { type: 'Menu' };
  public searchSettings!: SearchSettingsModel;
  public toolbar!: ToolbarItems[];
  public pageSettings: any;
  public userdate: any;
  public totalbooks: any;
  public available: any;
  public unavailable: any;
  public toogle: any;
  public filterOption1: FilterSettingsModel = { type: 'Menu' };
  public fields: object = { text: 'CustomerID', value: 'CustomerID' };
  public height = '220px';
  public status = 'all';
  public deptFilter = 'all';

  constructor(private Hero: HeroService) {}

  ngOnInit(): void {
    this.bookscount();
    this.changeSwitch('all');
  }
  changeSwitch(value: any) {
    this.status = value;
    console.log(value);
    let temp = { toogle: event };
    if (this.deptFilter == 'all') {
      if (value == 'all') {
        this.Hero.view().subscribe((data: any) => {
          this.userdate = data['data'];
        });
      }
      if (value == 'avl') {
        this.userdate = '';
        this.Hero.viewByFilter(value).subscribe((data: any) => {
          this.userdate = data['data'];
        });
      }
      if (value == 'unavl') {
        this.userdate = '';
        this.Hero.viewByFilter(value).subscribe((data: any) => {
          this.userdate = data['data'];
        });
      }
    }
  }

  changeDeptSwitch(value: any) {
    this.deptFilter = value;
  }

  bookscount() {
    this.Hero.bookSummary().subscribe((data: any) => {
      this.totalbooks = data['data']['Total'];
      this.available = data['data']['unIssued'];
      this.unavailable = data['data']['issued'];
    });
    // this.Hero.totalbooks().subscribe((data: any)=>{
    //   this.totalbooks=data[0].count;
    //   console.log(this.totalbooks);
    //       });
    //       this.Hero.availablebooks().subscribe((data: any)=>{
    //         this.available=data[0].count;
    //         console.log(this.available);
    //             });
    //             this.Hero.unavailablebooks().subscribe((data: any)=>{
    //               this.unavailable=data[0].count;
    //               console.log(this.unavailable);
    //                   });
  }
}
