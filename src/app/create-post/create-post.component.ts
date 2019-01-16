import { Component, OnInit } from '@angular/core';
import { PostClass } from '../classes/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

//Angular Material chips
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

export interface Fruit {
  name: string;
}

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
  tagsForm: ['prueba1', 'prueba2'];
  selectedFile: File = null;


  //Angular material chips
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router
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

  /*
  onUpload() {
    const id = '418d3630-1912-11e9-b085-81ab8876293b';
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.postService.imagePost(id, uploadData).subscribe((data: any) => {
      console.log(data);
    });
  }
  */

  /* --------------------------------------------------------------- */

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
