import { Component } from '@angular/core';

@Component({
  selector: 'app-munchkin',
  templateUrl: './munchkin.component.html',
  styleUrls: ['./munchkin.component.css']
})
export class MunchkinComponent {
  players: any[] = [{ name: '', sex: 'Male', level: 1, bonus: 0, total: 1}];

  selectedGameType: string = 'normal'; 
  gameStarted: boolean = false;

  addPlayer() {
    if (this.players.length < 6) {
      this.players.push({ name: '', sex: 'Male', level: 1, bonus: 0, total: 1 })
    }
  }

  removePlayer(index: number) {
    if (this.players.length > 1) {
      this.players.splice(index, 1)
    }
  }

  startGame() {
    if (this.players.length < 3) {
      alert('Cannot start game. Must have at least 3 players.')
      return
    }

    if (this.players.every(player => player.name.trim() !== '')) {
      alert(`Starting game with players:\n ${this.players.map(player => `Name: ${player.name}, Sex: ${player.sex}\n`)} and gametype: ${this.selectedGameType}`)
    } else {
      alert('Cannot start game. Every player must have a name.')
    }
    this.gameStarted = true
  }
  
}
