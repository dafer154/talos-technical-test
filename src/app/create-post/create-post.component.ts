import { Component, OnInit } from '@angular/core';
import { PostClass } from '../classes/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  
  constructor() { }



  ngOnInit() {
  }

}
