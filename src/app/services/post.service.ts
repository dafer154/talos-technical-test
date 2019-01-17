import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import Post from '../../../server/src/model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://localhost:3000/';

  allPosts(): Observable<any> {
    const post = 'posts';
    return this.http
      .get(`${this.BASE_URL}${post}`);
  }

  createPost(postTalos: any): Observable<any> {
      const post = 'posts';
      return this.http.post(`${this.BASE_URL}${post}`, postTalos);
  }

  detailPost(id: string): Observable<any> {
    const detail = `posts/${id}`;
    return this.http
    .get(`${this.BASE_URL}${detail}`);
  }

  imagePost(id: string, imagePath: any): Observable<any> {
    const picture = `posts/${id}/picture`;
    return this.http
    .put(`${this.BASE_URL}${picture}`, imagePath);
  }

  private errorHandler(error: Response) {
    console.error('An error occurred', error);
    return Observable.throw(error.statusText);
  }
}
