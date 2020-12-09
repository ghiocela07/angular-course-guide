import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { PracticingComponentsComponent } from './practicing-components/practicing-components.component';
import { PracticingDatabindingComponent } from './practicing-databinding/practicing-databinding.component';
import { PracticingDirectivesComponent } from './practicing-directives/practicing-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    PracticingComponentsComponent,
    PracticingDatabindingComponent,
    PracticingDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
