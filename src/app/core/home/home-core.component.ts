import { GithubServiceService } from 'src/app/shared/github-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-core',
  templateUrl: './home-core.component.html',
  styleUrls: ['./home-core.component.scss']
})
export class HomeCoreComponent implements OnInit {
  username!:any;

  constructor(
    private route: Router,
    private  githubService : GithubServiceService
  
  ){}

  ngOnInit() {}

  getAndSend($event: any){
    this.username = $event.username
    this.githubService.setData(this.username)
    this.route.navigateByUrl(`${this.username}`)
  }
}
