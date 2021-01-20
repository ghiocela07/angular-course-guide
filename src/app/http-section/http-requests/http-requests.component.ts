import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css']
})
export class HttpRequestsComponent implements OnInit, OnDestroy {
  public loadedPosts: Post[] = [];
  public isFetching = false;
  public error: string | undefined;

  private errorSubscription: Subscription | undefined;

  constructor(private http: HttpClient, private postService: PostService) { }

  public ngOnInit(): void {
	this.errorSubscription = this.postService.error.subscribe(errorMessage => {
		this.error = errorMessage;
	});
	this.fetchPosts();
  }

  public ngOnDestroy(): void {
	this.errorSubscription?.unsubscribe();
  }

  public onCreatePost(postData: Post): void {
	// Send Http request
	this.postService.createAndStorePosts(postData.title, postData.content);
	// TODO: find a better solution for this
	this.fetchPosts();

  }

  public onFetchPosts(): void {
	this.fetchPosts();
  }

  public onClearPosts(): void {
	this.postService.deletePosts().subscribe(() => {
		this.loadedPosts = [];
	});
  }

  public onHandleError(): void {
	this.error = undefined;
  }

  private fetchPosts(): void {
	this.isFetching = true;
	this.postService.fetchPosts().subscribe(posts => {
		this.isFetching = false;
		this.loadedPosts = posts;
	}, error => {
		this.isFetching = false;
		this.error = error.message;
	});
  }

}
