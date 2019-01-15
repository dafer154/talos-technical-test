import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  post: any = {};

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      const id = param['id'];
      this.postService.detailPost(id).subscribe(
        (data: {}) => {
          this.post = data;
        },
        err => {
          // If post detail return error, raise 404
          this.router.navigate(['/404']);
        }
      );
    });
  }

}
