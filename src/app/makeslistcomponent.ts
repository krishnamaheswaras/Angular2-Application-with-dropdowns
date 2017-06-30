import { Component } from '@angular/core';
import { DataService } from './dataservice';
import { Make } from './make';
import { MakeModal } from './makemodal';

@Component({
  selector: 'my-makes-list',
  templateUrl: 'app/makeslistcomponent.html',
  providers: [DataService]
})


export class MakesListComponent {
  makes: Make[];
  modals: MakeModal[];

  constructor(private _dataService: DataService) {
    this.makes = this._dataService.getMakes();
    this.selectedMake = "0";
  }
  
  onSelectMake(make) {
   this.selectedModalObj = null;
   this.selectedModel = "0";
   this.modals = this._dataService.getMakesByName(make);
  }

  onSelectedModel(modal){
    if(modal=="0"){
      this.selectedModalObj = null;
      return;
    }else if(modal){
      for(var i=0 ; i<this.modals.models.length; i++){
        if(modal==this.modals.models[i].model){
          this.selectedModalObj = this.modals.models[i];
          break;
        }
      }
    }

  }
  
}
