import { Component, OnInit } from '@angular/core';
import { PostClass } from '../classes/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postForm: FormGroup;
  model: PostClass;
  submittedModel: PostClass;
  submitted = false;
  tagsForm: ['prueba1', 'prueba2'];
  selectedFile: File = null;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService
            ) { }

  ngOnInit() {

    this.model = new PostClass('prueba', 'prueba', 'prueba');

    this.postForm = this.formBuilder.group({
      title:       [this.model.title, Validators.required],
      description: [this.model.description, Validators.required],
      tags:        [this.model.tags, Validators.required]
    });
  }

  onSubmit({ value, valid }: { value: PostClass, valid: boolean }) {
    this.submitted = true;
    console.log(value);
    this.postService.createPost(value).subscribe((data: any) => {
      console.log(data);
    });
    console.log(this.submittedModel);
  }



  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const id = '418d3630-1912-11e9-b085-81ab8876293b';
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.postService.imagePost(id, uploadData).subscribe((data: any) => {
      console.log(data);
    });
  }
}
