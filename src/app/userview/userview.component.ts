import { Component, OnInit } from '@angular/core';
import {
  FilterSettingsModel,
  SearchSettingsModel,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss'],
})
export class UserviewComponent implements OnInit {
  public data: any[] = [];
  public filterOption: FilterSettingsModel = { type: 'Menu' };
  public searchSettings!: SearchSettingsModel;
  public toolbar!: ToolbarItems[];
  public pageSettings: any;
  public userdata: any;
  public bookdata: any;
  public total: any;
  public active: any;
  public nonactive: any;
  public toogle: any;
  public filterOption1: FilterSettingsModel = { type: 'Menu' };
  public fields: object = { text: 'CustomerID', value: 'CustomerID' };
  public height = '220px';

  constructor(private Hero: HeroService) {}

  ngOnInit(): void {
    this.changeSwitch('all');
  }

  changeSwitch(value: any) {
    let temp = { toogle: event };
    console.log(value);
    
    if (value == 'all') {
      this.Hero.issueReturnReportAll(this.Hero.adminEmailToken).subscribe(
        (data: any) => {
          for (let i = 0; i < data['data'].length; i++) {
            this.userdata = data['data'];
          }
        }
      );
    }
    if (value == 'active') {
      this.userdata = '';
      this.Hero.issueReturnReportByFilter(value, this.Hero.adminEmailToken).subscribe((data: any) => {
       this.userdata = data['data']
       console.log(this.userdata);
       
      });
    }
    if (value == 'nonactive') {
      this.userdata = '';
      this.Hero.viewUserByFilter(value).subscribe((data: any) => {
        this.userdata = data['data'];
        console.log(data['data'])
      });
    }
  }
}

