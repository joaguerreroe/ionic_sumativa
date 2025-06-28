import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.scss'],
  standalone: true,
  imports:[IonicModule, RouterModule],
})
export class ToggleMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
