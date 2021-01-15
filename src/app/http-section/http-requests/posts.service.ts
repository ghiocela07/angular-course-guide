import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {

    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndStorePosts(title: string, content: string): void {
        const postData: Post = {
            title,
            content
        };
        this.http
            .post('https://my-first-app-a35ea-default-rtdb.firebaseio.com/posts.json', postData, {
                observe: 'response'
            })
            .subscribe(responseData => {
                console.log(responseData);
            }, error => {
                this.error.next(error.message);
            });
    }

    fetchPosts(): Observable<Post[]> | Observable<never> {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'key');

        return this.http
            .get<{ [key: string]: Post }>('https://my-first-app-a35ea-default-rtdb.firebaseio.com/posts.json', {
                headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
                // params: new HttpParams().set('print','pretty')
                params: searchParams,
                responseType: 'json'
            })
            .pipe(map(responseData => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key });
                    }
                }

                return postsArray;
            }), catchError(errorRes => {
                return throwError(errorRes);
            }));
    }

    deletePosts(): Observable<any> {
        return this.http.delete('https://my-first-app-a35ea-default-rtdb.firebaseio.com/posts.json', {
            observe: 'events',
            responseType: 'text'
        })
            .pipe(
                tap((event: any) => {
                    if (event.type === HttpEventType.Response) {
                        console.log(event.body);
                    }
                    if (event.type === HttpEventType.Sent) {
                        ///
                    }
                    console.log(event);
                })
            );
    }
}
