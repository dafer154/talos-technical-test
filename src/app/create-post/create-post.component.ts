import { Component, OnInit } from '@angular/core';
import { Posts } from '../classes/post';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  tokenPost: string;
  disabled = false;
  selectedFile: File = null;
  mainObj: Posts = new Posts();

  constructor(private postService: PostService,
              private router: Router
            ) { }

  ngOnInit() {
  }


  onSubmit(): void {
    this.postService.createPost(this.mainObj).subscribe((data: any) => {
      this.tokenPost = data.id;
      const uploadData = new FormData();
      uploadData.append('image', this.selectedFile, this.selectedFile.name);
      this.postService.imagePost(data.id, uploadData).subscribe((dataImage: any) => {
        this.router.navigate(['/post', this.tokenPost]);
      });
    });
  }


  //Upload image to posts
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }


}
