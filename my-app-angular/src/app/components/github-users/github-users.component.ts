import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../services/github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-github-users',
  imports: [FormsModule, CommonModule],
  templateUrl: './github-users.component.html',
  styleUrl: './github-users.component.scss'
})
export class GithubUsersComponent {
  username = '';
  catFact = '';
  userData: any = null;
  errorMessage = '';

  constructor(private readonly gitHubService: GithubService){
    this.gitHubService.getCatFact().subscribe({
      next: (data)=>{
        console.log(data.data[0]);
        this.catFact = data.data[0];
      }
    });
  }

  searchUser(){
    this.gitHubService.getUser(this.username).subscribe({
      next: (data)=>{
        console.log(data);
        this.userData = data;
        this.errorMessage = '';
      },
      error: (err)=>{
        console.log(err.error.message);
        this.errorMessage = err.error.message;
        this.userData = null;
      }
    });
  }
}
