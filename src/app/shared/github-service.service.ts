import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, forkJoin, Observable, of, Subject, throwError} from 'rxjs';



import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
 // private userBehaviorSubject = new BehaviorSubject<string>(``);
  private subject = new Subject<any>();
  profile: any;
  username!:any;
  repos!: any[];

  
  
constructor(
  private http: HttpClient,
  private route: Router,
  private router: ActivatedRoute
  ) { }

  getProfile(searchQuery: string): Observable<any> {
    let dataURL = `https://api.github.com/users/${searchQuery}`;
    return this.http.get<any>(dataURL);
  }

  getRepos(searchQuery: string): Observable<any[]> {
    let dataURL = `https://api.github.com/users/${searchQuery}/repos`;
    return this.http.get<any[]>(dataURL) 
  } 
  
  public setData(searchQuery: any) {
    forkJoin({ 
      profile: this.getProfile(searchQuery),
      repos: this.getRepos(searchQuery), 
    }).pipe(
        catchError(this.handleError)
    ).subscribe(res => {
        if (res){
          const data = {profile: res.profile, repos: res.repos}   
          this.subject.next(data)
        }else {
        this.subject.next(null)
        }
      })
  }

  public getData(): Observable<any> {
    return this.subject.asObservable().pipe(catchError(this.handleError))
  }

  handleError() {
    return of(null); 
  }

}



