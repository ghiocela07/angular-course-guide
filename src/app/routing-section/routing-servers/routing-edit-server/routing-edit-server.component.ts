import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { RoutingServersService } from '../../../core/services/routing-servers.service';
import { CanComponentDeactivate } from '../../../core/services/guards/can-deactivate-guard.service';
import { RoutingServer } from 'src/app/core/models/routing-server.model';

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
              private snackBarService: SnackBarService,
              private router: Router,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    // 1 approach to get query params and fragment - using snapshot
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    // 2 approach   get query params and fragment - with subscribe
    this.route.queryParams.subscribe(
      (queryParamas: Params) => {
        this.allowEdit = queryParamas.allowEdit === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params.id;
    this.server = this.serversService.getServer(id);
    if (this.server) {
      this.serverName = this.server?.name;
      this.serverStatus = this.server?.status;
    }
  }

  onUpdateServer(): void {
    if (this.server) {
      this.serversService.updateServer(
        this.server.id,
        {
          name: this.serverName,
          status: this.serverStatus
        });
    }
    this.changesSaved = true;
    this.snackBarService.openSuccessSnackBar('Server updated!', 'Ok');
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Promise<boolean> | Observable<boolean> | boolean {

    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server?.name || this.serverStatus !== this.server?.status) && !this.changesSaved) {

      return this.openDialog();
    } else {
      return true;
    }
  }

  openDialog(): Observable<boolean> {
    const dialogRef = this.matDialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Do you want to discard this changes?' }
    });

    return dialogRef.afterClosed();
  }
}
