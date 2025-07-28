import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'
})
export class ReviewService {
  private apiuri = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }
  getReviews(){
    //return this.http.get(${this.apiuri}/reviews');
  }
  triggerReview(prId: number) {
    //return this.http.post(`${this.apiUrl}/reviews/trigger`, { prId });
  }
}
