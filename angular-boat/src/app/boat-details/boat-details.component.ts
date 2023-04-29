import { Component, Input, Output, EventEmitter } from '@angular/core';
import  { Boat } from '../boat';
import { BoatService } from '../boat.service';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-boat-details',
  templateUrl: './boat-details.component.html',
  styleUrls: ['./boat-details.component.css']
})
export class BoatDetailsComponent {

  @Input() boat?: Boat;
  @Output() deleteEvent = new EventEmitter<boolean>();
  constructor(private boatService:BoatService, private messageService:MessageService, private location:Location){};



  update(): void{

    if(this.boat!=undefined){
      if(this.boat.name.length==0 || this.boat.description.length == 0){
         this.messageService.add("ERROR: Please enter a valide name and a valid description !");
         return;
      }
      this.boatService.update(this.boat.id,this.boat.name,this.boat.description).subscribe(boat=>{
        this.messageService.add(`Successfully update boat id=${boat.id}`),
        this.boat = undefined,
        this.deleteEvent.emit(true)
      });
    }
  }
  delete():void{
    if(this.boat!=undefined){
      this.boatService.delete(this.boat.id).subscribe(()=>{
        if(this.boat!=undefined) this.messageService.add(`Successfully delete boat id=${this.boat.id}`),
        this.boat = undefined,
        this.deleteEvent.emit(true);

      });
    }
  }
}
