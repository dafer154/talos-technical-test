import { Component, OnInit } from '@angular/core';
import { PostClass } from '../classes/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  tokenPost: string;
  postForm: FormGroup;
  model: PostClass;
  submittedModel: PostClass;
  submitted = false;
  tagsForm: any = [];
  selectedFile: File = null;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router
            ) { }

  ngOnInit() {

    this.model = new PostClass('.', '.');

    this.postForm = this.formBuilder.group({
      title:       [this.model.title, Validators.required],
      description: [this.model.description, Validators.required]
      //tags:        [this.model.tags, Validators.required]
    });
  }

  agregarTag(tag) {

    console.log(tag.target);
    this.tagsForm.push(tag);
  }

  onSubmit({ value, valid }: { value: PostClass, valid: boolean }) {
    this.submitted = true;
    console.log(value);
    this.postService.createPost(value).subscribe((data: any) => {
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
