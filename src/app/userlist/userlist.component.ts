import { Component, OnInit } from '@angular/core';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import {
  ToolbarItems,
  SearchSettingsModel,
} from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  public data: any[] = [];
  public filterOption: FilterSettingsModel = { type: 'Menu' };
  public searchSettings!: SearchSettingsModel;
  public toolbar!: ToolbarItems[];
  public pageSettings: any;
  public userdata: any;
  public total: any;
  public active: any;
  public nonactive: any;
  public toogle: any;
  public filterOption1: FilterSettingsModel = { type: 'Menu' };
  public fields: object = { text: 'CustomerID', value: 'CustomerID' };
  public height = '220px';
  constructor(private Hero: HeroService) {}

  ngOnInit(): void {
    this.count();
    this.changeSwitch('all');
  }

  changeSwitch(value: any) {
    let temp = { toogle: event };
    if (value == 'all') {
      this.Hero.viewUserByFilter(value).subscribe((data: any) => {
        // console.log(data['data']);
        this.userdata = data['data'];
      });
    }
    if (value == 'active') {
      this.userdata = '';
      this.Hero.viewUserByFilter(value).subscribe((data: any) => {
        this.userdata = data['data'];
      });
    }
    if (value == 'nonactive') {
      this.userdata = '';
      this.Hero.viewUserByFilter(value).subscribe((data: any) => {
        this.userdata = data['data']
      });
    }
  }

  count() {
    this.Hero.userSummary().subscribe((data: any) => {
      this.total = data['data']['Total'];
      this.active = data['data']['Active'];
      this.nonactive = data['data']['InActive'];
    });
  }
}


// active
// collegeId
// createdAt
// dept
// emailId
// name