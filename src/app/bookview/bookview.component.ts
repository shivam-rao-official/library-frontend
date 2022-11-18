import {
  Component,
  OnInit,
  TRANSLATIONS_FORMAT,
  ViewChild,
} from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import {
  EditSettingsModel,
  ToolbarItems,
  GridComponent,
} from '@syncfusion/ej2-angular-grids';
import { HeroService } from '../hero.service';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.scss'],
})
export class BookviewComponent implements OnInit {
  public data!: object[];
  public toolbar!: ToolbarItems[];
  @ViewChild('grid')
  public grid!: GridComponent;
  public editSettings!: EditSettingsModel;
  public edit: any;
  public drop: any;
  public elem: any;
  public sel: any;
  public view: any;
  public up: any;
  public dropObj: any;
  constructor(private Hero: HeroService) {}

  ngOnInit(): void {
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
    };
    this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
    this.catdropdown();
    this.viewtable();
  }

  option(args: any) {
    console.log(args);
    console.log(args.requestType);
    if (localStorage.getItem('email') != '') {
      // IF USER NOT LOGIN THEN THIS NOT WORK
      if (args.requestType == 'save' && args.action == 'add') {
        this.Hero.AddBookview(args.data).subscribe((data: any) => {
          this.view = data;
          this.viewtable();

          console.log(this.view);
        });
      } else if (args.requestType == 'save' && args.action == 'edit') {
        this.Hero.editBookview(args.data).subscribe((data: any) => {
          this.up = data;
          this.viewtable();

          console.log(this.up);
        });
      } else if (args.requestType == 'delete') {
        this.Hero.deleteBookview(args.data).subscribe((data: any) => {
          this.up = data[0].id;
          this.viewtable();
          console.log(this.up);
        });
      }
    }
  }

  //dropdown
  catdropdown() {
    // this.Hero.dropdown().subscribe((data: any)=>{
    this.drop = ['BCA', 'BBA', 'BHM'];
    // console.log(this.drop);
    this.edit = {
      create: () => {
        this.elem = document.createElement('input');
        return this.elem;
      },
      destroy: () => {
        this.dropObj.destroy();
      },
      read: () => {
        return this.dropObj.value;
      },
      write: () => {
        this.dropObj = new DropDownList({
          dataSource: new DataManager(this.drop),
          fields: { text: 'category', value: 'id' },
          floatLabelType: 'Never',
        });
        this.dropObj.appendTo(this.elem);
      },
      // }
    };
  }
  viewtable() {
    this.Hero.view().subscribe((data: any) => {
      this.sel = data['data'];
      // console.log(this.sel);
    });
  }
}
