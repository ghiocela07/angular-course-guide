import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingServer } from '../routing-server.model';
import { RoutingServersService } from '../routing-servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-routing-edit-server',
  templateUrl: './routing-edit-server.component.html',
  styleUrls: ['./routing-edit-server.component.css']
})
export class RoutingEditServerComponent implements OnInit, CanComponentDeactivate {

  availableStatuses: string[] = ['online', 'offline'];
  server: RoutingServer | undefined;
  serverName: string | undefined;
  serverStatus: string | undefined;
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: RoutingServersService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    // 1 approach to get query params and fragment - using snapshot
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    //2 approach   get query params and fragment - with subscribe
    this.route.queryParams.subscribe(
      (queryParamas: Params) => {
        this.allowEdit = queryParamas['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    if (this.server) {
      this.serverName = this.server?.name;
      this.serverStatus = this.server?.status;
    }
  }

  onUpdateServer() {
    if (this.server) {
      this.serversService.updateServer(
        this.server.id,
        {
          name: this.serverName,
          status: this.serverStatus
        });
    }
    this.changesSaved = true;
    this.openSuccessSnackBar('Server updated!', 'Ok');
    this.router.navigate(['../'], { relativeTo: this.route })
  }
// TODO: create a shared file where to store this to be used in other components to avoid duplicating code
  openSuccessSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 50000,
      panelClass: 'success-snackbar'
    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server?.name || this.serverStatus !== this.server?.status) && !this.changesSaved) {
     // TODO: transform this to an Material Dialog
      return confirm('Do you want to discard the changes?')
    } else {
      return true;
    }
  }
}
