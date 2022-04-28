import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems,SearchSettingsModel  } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-bookstatus',
  templateUrl: './bookstatus.component.html',
  styleUrls: ['./bookstatus.component.scss']
})
export class BookstatusComponent implements OnInit {

  public data: any[] = [];
  public filterOption: FilterSettingsModel = {type:'Menu'}
  public searchSettings!: SearchSettingsModel;
  public toolbar!: ToolbarItems[];
  public pageSettings: any;
  public userdate :any;
  public totalbooks:any;
  public available:any;
  public unavailable:any;
  public toogle:any;
  public filterOption1: FilterSettingsModel = { type: 'Menu' };
  public fields: object = { text: 'CustomerID', value: 'CustomerID' };
  public height = '220px';

  constructor(private Hero:HeroService) { }

  ngOnInit(): void {
    this.bookscount();
  }
  changeSwitch(value:any){
    console.log(value);
    let temp={'toogle':event};
    this.Hero.booklist({'value':value}).subscribe((data: any)=>{    
      this.userdate=data;
      console.log(this.userdate);
          }
          );
  

  }
  bookscount(){
    this.Hero.totalbooks().subscribe((data: any)=>{    
      this.totalbooks=data[0].count;
      console.log(this.totalbooks);
          });
          this.Hero.availablebooks().subscribe((data: any)=>{    
            this.available=data[0].count;
            console.log(this.available);
                });
                this.Hero.unavailablebooks().subscribe((data: any)=>{    
                  this.unavailable=data[0].count;
                  console.log(this.unavailable);
                      });
                   
  }
}
