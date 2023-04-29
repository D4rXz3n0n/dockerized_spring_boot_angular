import { Component, Input, Output, EventEmitter} from '@angular/core';
import {BoatService} from '../boat.service';
import { Boat } from '../boat'
import { MessageService } from '../message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-boat',
  templateUrl: './add-boat.component.html',
  styleUrls: ['./add-boat.component.css']
})
export class AddBoatComponent {

   constructor(private boatService: BoatService, private messageService:MessageService,private router:Router) { }
   addedBoat?: Boat;
   authenticated = sessionStorage.getItem("authenticatedUser");
   @Output() addEvent = new EventEmitter<boolean>();
   name:string="";
   description:string="";
   addBoat(): void {
     if(this.name.length == 0 || this.description.length == 0)
     {
        this.messageService.add("ERROR: Please enter a valid name and a valid description");
        return;
     }
     this.boatService.addBoat(this.name,this.description).subscribe(boat=>{
       this.addedBoat=boat,
       this.messageService.add(`Successfully added boat id=${boat.id}`);
       this.addEvent.emit(true);
     });
  }
   backHome(): void{
      this.router.navigate(["/home"]);
   }
   login():void{
     this.router.navigate(["/login"]);
   }
}
