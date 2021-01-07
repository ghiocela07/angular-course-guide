import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable-home',
  templateUrl: './observable-home.component.html',
  styleUrls: ['./observable-home.component.css']
})
export class ObservableHomeComponent implements OnInit, OnDestroy {

  // private firstObservableSubscripton: Subscription | undefined;
  private customIntervalObservableSubscription: Subscription | undefined;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.firstObservableSubscripton = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count >= 3) {
          observer.error(new Error('Count is greater than 3!'));

        }
        count++;
      }, 1000)
    });

    const observableOperator = customIntervalObservable.pipe(filter((data: any) => {
      return data > 0;
    }), map((data: any) => {
      return 'Round: ' + (data + 1);
    }));

    this.customIntervalObservableSubscription = observableOperator.subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      this.openErrorSnackBar(error.message, 'Ok');
    }, () => {
      console.log('Completed!');
    })
  }

  ngOnDestroy() {
    // if (this.firstObservableSubscripton) {
    //   this.firstObservableSubscripton.unsubscribe();
    // }
    if (this.customIntervalObservableSubscription) {
      this.customIntervalObservableSubscription.unsubscribe();
    }
  }

  openErrorSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 50000,
      panelClass: 'error-snackbar'
    });
  }

}
