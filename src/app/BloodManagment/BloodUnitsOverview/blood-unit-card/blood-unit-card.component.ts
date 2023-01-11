import { Component, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-blood-unit-card',
  templateUrl: './blood-unit-card.component.html',
  styleUrls: ['./blood-unit-card.component.scss'],
})
export class BloodUnitCardComponent {
  @Input() units: number;
  @Input() totalUnits: number;
  @Input() title: string;

  ngOnInit() {
    this.getPercentage();
  }

  getPercentage() {
    console.log(this.units);
    console.log(this.units / this.totalUnits);
    return (this.units / this.totalUnits) * 100;
  }
}
