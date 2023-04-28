import { Component, Input } from '@angular/core';
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

   name:string="";
   description:string="";
   addBoat(): void {
     this.boatService.addBoat(this.name,this.description).subscribe(boat=>{
       this.addedBoat=boat,
       this.messageService.add(`Successfully added boat id=${boat.id}`);
     });
  }
   backHome(): void{
      this.router.navigate(["/home"]);
   }
   login():void{
     this.router.navigate(["/login"]);
   }
}
