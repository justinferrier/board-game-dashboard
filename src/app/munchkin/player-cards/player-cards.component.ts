import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-cards',
  templateUrl: './player-cards.component.html',
  styleUrls: ['./player-cards.component.css']
})
export class PlayerCardsComponent {
  @Input() playerName: string = '';
  @Input() playerLevel: number = 1;
  @Input() playerBonus: number = 0;
  @Input() playerTotal: number = 1;

  increaseLevel() {
    this.playerLevel++;
    this.updateTotal();
  }

  decreaseLevel() {
    if (this.playerLevel > 1) {
      this.playerLevel--;
      this.updateTotal();
    }
  }

  increaseBonus() {
    this.playerBonus++;
    this.updateTotal();
  }

  decreaseBonus() {
    if (this.playerBonus > 0) {
      this.playerBonus--;
      this.updateTotal();
    }
  }

  private updateTotal() {
    this.playerTotal = this.playerLevel + this.playerBonus;
  }
}
