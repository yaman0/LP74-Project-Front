import { Component, OnInit } from '@angular/core';
import {Conveyer} from '../Model/Conveyer';
import {projectsFixtures} from '../Model/Fixtures';

@Component({
  selector: 'app-conveyer',
  templateUrl: './conveyer.component.html',
  styleUrls: ['./conveyer.component.css', '../tables.css']
})
export class ConveyerComponent implements OnInit {
  Convoyers: Convoyer[];

  constructor() { }

  ngOnInit() {
  }

}
