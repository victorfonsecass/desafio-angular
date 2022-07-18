import { Component,OnDestroy, OnInit } from '@angular/core';

import { GithubServiceService } from 'src/app/shared/github-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],

})
export class ResultadoComponent implements OnInit, OnDestroy {
  subscription!: Subscription 
  repos!: any[];
  profile:any;

  constructor(
  private  githubService: GithubServiceService,
  ) {}

  ngOnInit() {
    this.subscription = this.githubService.getData()
      .subscribe(res =>{
        this.profile = res.profile;
        this.repos = res.repos;
        
        this.repos.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        })
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  
}






















