import { Component, OnInit } from '@angular/core';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems,SearchSettingsModel  } from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  public data: any[] = [];
  public filterOption: FilterSettingsModel = {type:'Menu'}
  public searchSettings!: SearchSettingsModel;
  public toolbar!: ToolbarItems[];
  public pageSettings: any;
  public userdate :any;
  public total:any;
  public active:any;
  public nonactive:any;
  public toogle:any;
  public filterOption1: FilterSettingsModel = { type: 'Menu' };
  public fields: object = { text: 'CustomerID', value: 'CustomerID' };
  public height = '220px';
  constructor(private Hero:HeroService) { }

  ngOnInit(): void {
    this.count();
  }
  changeSwitch(value:any){
    console.log(value);
    let temp={'toogle':event};
    this.Hero.userlist({'value':value}).subscribe((data: any)=>{    
      this.userdate=data;
      console.log(this.userdate);
          }
          );
  

  }
  count(){
    this.Hero.total().subscribe((data: any)=>{    
      this.total=data[0].count;
      console.log(this.total);
          });
          this.Hero.active().subscribe((data: any)=>{    
            this.active=data[0].count;
            console.log(this.active);
                });
                this.Hero.nonactive().subscribe((data: any)=>{    
                  this.nonactive=data[0].count;
                  console.log(this.nonactive);
                      });
                   
  }
}
