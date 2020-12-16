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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicsSectionComponent } from './basics-section/basics-section.component';
import { ServerComponent } from './basics-section/server/server.component';
import { ServersComponent } from './basics-section/servers/servers.component';
import { SuccessAlertComponent } from './basics-section/success-alert/success-alert.component';
import { WarningAlertComponent } from './basics-section/warning-alert/warning-alert.component';
import { PracticingComponentsComponent } from './basics-section/practicing-components/practicing-components.component';
import { PracticingDatabindingComponent } from './basics-section/practicing-databinding/practicing-databinding.component';
import { PracticingDirectivesComponent } from './basics-section/practicing-directives/practicing-directives.component';
import { CompDatabDeepDiveSectionComponent } from './comp-datab-deep-dive-section/comp-datab-deep-dive-section.component';
import { AppRoutingModule } from './app-routing.module';
import { CockpitComponent } from './comp-datab-deep-dive-section/cockpit/cockpit.component';
import { ServerElementComponent } from './comp-datab-deep-dive-section/server-element/server-element.component';
import { PracticingPropertyEventBindingComponent } from './comp-datab-deep-dive-section/practicing-property-event-binding/practicing-property-event-binding.component';
import { GameControlComponent } from './comp-datab-deep-dive-section/practicing-property-event-binding/game-control/game-control.component';
import { OddComponent } from './comp-datab-deep-dive-section/practicing-property-event-binding/odd/odd.component';
import { EvenComponent } from './comp-datab-deep-dive-section/practicing-property-event-binding/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    PracticingComponentsComponent,
    PracticingDatabindingComponent,
    PracticingDirectivesComponent,
    BasicsSectionComponent,
    CompDatabDeepDiveSectionComponent,
    CockpitComponent,
    ServerElementComponent,
    PracticingPropertyEventBindingComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    AppRoutingModule,
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
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
