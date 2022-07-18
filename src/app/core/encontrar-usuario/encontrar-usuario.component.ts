import { GithubServiceService } from 'src/app/shared/github-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-encontrar-usuario',
  templateUrl: './encontrar-usuario.component.html',
  styleUrls: ['./encontrar-usuario.component.scss']
})
export class EncontrarUsuarioComponent implements OnInit {
  username!: any;

  constructor(
    private githubService: GithubServiceService
  ) { }


  ngOnInit() {
    
  }
   @Output() whenSearched = new EventEmitter<any>();

   search(){
      console.log('aqui==',this.username);
      const emitValue = {username: this.username};
      this.whenSearched.emit(emitValue);
    }
}

