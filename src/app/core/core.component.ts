
import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription} from 'rxjs';
import { GithubServiceService } from '../shared/github-service.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, OnDestroy {
  subscription!: Subscription 
  profile: any;
  username!:any;
  repos!: any[];

  constructor(
    private  githubService : GithubServiceService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.router.paramMap.subscribe(params => { 
      this.username = params.get("username")
      console.log(this.username)
    }) 
    this.githubService.setData(this.username)

    this.getAndRedirect()
  }

  searchUser($event: any){
    this.username = $event.username;
    this.githubService.setData(this.username)

    this.route.navigateByUrl(`${this.username}`); 
  }
  
  getAndRedirect(){
    this.githubService.getData()
    .pipe
      (map(data => {
        if (data == null) {
          this.route.navigateByUrl(`${this.username}/nao-encontrado`)
        }else {
          this.route.navigateByUrl(`${this.username}`); 
        }
      })).subscribe(res => 
            { this.profile = res }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}




