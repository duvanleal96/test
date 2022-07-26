import { Component, OnInit } from '@angular/core';
import { PlayerAPIService } from '../../services/player-api.service';
import { Player } from '../../interfaces/player';
import { BoardAPIService } from '../../services/board-api.service';
import { Board } from 'src/app/interfaces/board';
import { findIndex, map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { CardGameAPIService } from '../../services/card-api.service';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';




@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  boards : Board[]=[];
	playerId: string= "";
  
	player: Player = {
			playerId : "",
				nickName : "",
				email: "",
				score: 0,

				pointsHistory: [],
				cardModels: [],
	}

  board: Board = {
    id: "62de01f1ee60c664c3d720fb",
time: 10000,
listWinRound: [],
listCard: [],
listplayer: [],
idPlayers: []
}
  listaPlayers: string[]=[];

  constructor( 
    private boardAPIService: BoardAPIService,
    private cardAPIService: CardGameAPIService,
    private router: Router,
    private gameService: GameService) {
      

    
      
      }
      
  
  ngOnInit(): void {
    this.boardAPIService.getBoardById("62de01f1ee60c664c3d720fb")
    .subscribe(board=>{this.board.listplayer=board.listplayer;
    this.board.idPlayers=board.idPlayers})
    if(this.board){
      this.getPlayer();
    }
    this.addPlayerToBoard();
    
  }
  iniciarJuego(): void {
    this.gameService.getGame().subscribe(game => {
    
      (game[0].cardGamesList.length === 0)
      ?   this.cardAPIService.getRandomCards(this.board.idPlayers.length*5).subscribe(  
          card=>this.board.listCard.push(card))
          &&
          this.router.navigate(['game'])
      :this.router.navigate(['game']);
    })


    
  }
  getPlayer():void{
    this.playerId=localStorage.getItem("uid")!;
    
    if (!this.playerId) {
      location.reload();

    }
    
  }
  addPlayerToBoard(): void {
    if (this.board) {
      console.log(this.board.idPlayers);
      this.boardAPIService.addPlayerInBoard(this.playerId)
      .subscribe(respuesta=>console.log(respuesta));
    } 
  }
  }

  




