import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService,
              private router: Router
  ) { }


  posts = [];

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.allPosts().subscribe((data: any) => {
    this.posts = data;
    console.log(this.posts);
    });
  }

  redirectPost(id: string) {
    this.router.navigate(['/post', id]);
  }


}
