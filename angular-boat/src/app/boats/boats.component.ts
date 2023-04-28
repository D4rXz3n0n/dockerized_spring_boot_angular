import { Component, OnInit } from '@angular/core';
import {BoatService} from '../boat.service';
import { Boat } from '../boat'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {

  constructor(private boatService: BoatService,private router:Router) { }

  boats: Boat[] = [];

  selectedBoat?: Boat;

  authenticated = sessionStorage.getItem("authenticatedUser");

  onDeleted(deleted: boolean){
    if(deleted)
      this.getBoats();
  }
  onSelect(boat: Boat): void{
     this.selectedBoat = boat;
     //this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`);
  }

  backHome(): void{
    this.router.navigate(["/home"]);
  }
  getBoats(): void{
    this.boatService.getBoats().subscribe(boats => this.boats = boats);
  }
  ngOnInit(): void {
    this.getBoats();
  }

  login():void{
    this.router.navigate(["/login"]);
  }

}
