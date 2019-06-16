import { Component, OnInit, Input } from '@angular/core';
import { Indicator } from 'src/app/indicator/Indicator';


@Component({
  selector: 'app-Towers',
  templateUrl: './Towers.component.html',
  styleUrls: ['./Towers.component.css']
})
export class TowersComponent implements OnInit {
  tower : Indicator = {
    id: '1',
    title: 'FIRST tower',
    value: 66,
    minValue: 30,
    maxValue: 100
  };

  calculateLevel(tower) {
    let level = (tower.value*100/(tower.maxValue-tower.minValue));
    if (level > 100) {
      level = 100;
    } else if (level < 0) {
      level = 0;
    }
    return level;
  }
  calculatePercent(tower) {
    let level = (tower.value*100/(tower.maxValue-tower.minValue));
    if (level <0) {
      level = 0;
    } 
    return level;
  }
  @Input() towers: Indicator;
  constructor() { }

  ngOnInit() {
  }

}
