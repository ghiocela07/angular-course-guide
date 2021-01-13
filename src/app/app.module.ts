import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
import { DirectivesDeepDiveSectionComponent } from './directives-deep-dive-section/directives-deep-dive-section.component';
import { BasicHighlightDirecive } from './directives-deep-dive-section/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives-deep-dive-section/better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ServicesDependencyInjectionSectionComponent } from './services-dependency-injection-section/services-dependency-injection-section.component';
import { AccountComponent } from './services-dependency-injection-section/account/account.component';
import { NewAccountComponent } from './services-dependency-injection-section/new-account/new-account.component';
import { PracticingServicesComponent } from './services-dependency-injection-section/practicing-services/practicing-services.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActiveUsersComponent } from './services-dependency-injection-section/practicing-services/active-users/active-users.component';
import { InactiveUsersComponent } from './services-dependency-injection-section/practicing-services/inactive-users/inactive-users.component';
import { CounterComponent } from './services-dependency-injection-section/practicing-services/counter/counter.component';
import { RoutingSectionComponent } from './routing-section/routing-section.component';
import { RoutingHomeComponent } from './routing-section/routing-home/routing-home.component';
import { RoutingServersComponent } from './routing-section/routing-servers/routing-servers.component';
import { RoutingServerComponent } from './routing-section/routing-servers/routing-server/routing-server.component';
import { RoutingEditServerComponent } from './routing-section/routing-servers/routing-edit-server/routing-edit-server.component';
import { UsersComponent } from './routing-section/routing-users/routing-users.component';
import { UserComponent } from './routing-section/routing-users/routing-user/routing-user.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ErrorComponent } from './shared/error/error.component';
import { ObservablesSectionComponent } from './observables-section/observables-section.component';
import { ObservableUserComponent } from './observables-section/observable-user/observable-user.component';
import { ObservableHomeComponent } from './observables-section/observable-home/observable-home.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { FormsSectionComponent } from './forms-section/forms-section.component';
import { FormsComponent } from './forms-section/forms/forms.component';
import { ReactiveFormsComponent } from './forms-section/reactive-forms/reactive-forms.component';
import { ParcticingFormsComponent } from './forms-section/parcticing-forms/parcticing-forms.component';
import { FormsRequirementComponent } from './forms-section/parcticing-forms/forms-requirement/forms-requirement.component';
import { FormsSolutionComponent } from './forms-section/parcticing-forms/forms-solution/forms-solution.component';
import { ServicesRequirementComponent } from './services-dependency-injection-section/practicing-services/services-requirement/services-requirement.component';
import { PropertyEventBindingRequirementComponent } from './comp-datab-deep-dive-section/practicing-property-event-binding/property-event-binding-requirement/property-event-binding-requirement.component';
import { ComponentsRequirementComponent } from './basics-section/practicing-components/components-requirement/components-requirement.component';
import { DatabindingRequirementComponent } from './basics-section/practicing-databinding/databinding-requirement/databinding-requirement.component';
import { DirectivesRequirementComponent } from './basics-section/practicing-directives/directives-requirement/directives-requirement.component';
import { PracticingReactiveFormsComponent } from './forms-section/practicing-reactive-forms/practicing-reactive-forms.component';
import { ReactiveFormsSolutionComponent } from './forms-section/practicing-reactive-forms/reactive-forms-solution/reactive-forms-solution.component';
import { ReactiveFormsRequirementComponent } from './forms-section/practicing-reactive-forms/reactive-forms-requirement/reactive-forms-requirement.component';
import { PipesSectionComponent } from './pipes-section/pipes-section.component';
import { PipesComponent } from './pipes-section/pipes/pipes.component';
import { PracticingPipesComponent } from './pipes-section/practicing-pipes/practicing-pipes.component';
import { PipesRequirementComponent } from './pipes-section/practicing-pipes/pipes-requirement/pipes-requirement.component';
import { PipesSolutionComponent } from './pipes-section/practicing-pipes/pipes-solution/pipes-solution.component';
import { ShortenPipe } from './pipes-section/pipes/shorten.pipe';
import { FilterPipe } from './pipes-section/pipes/filter.pipe';
import { ReversePipe } from './pipes-section/pipes/reverse.pipe';
import { SortPipe } from './pipes-section/pipes/sort.pipe';
import { HttpSectionComponent } from './http-section/http-section.component';
import { HttpRequestsComponent } from './http-section/http-requests/http-requests.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './http-section/http-requests/auth-interceptor.service';
import { LoggingInterceptorService } from './http-section/http-requests/logging-interceptor.service';


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
    EvenComponent,
    DirectivesDeepDiveSectionComponent,
    BasicHighlightDirecive,
    BetterHighlightDirective,
    UnlessDirective,
    ServicesDependencyInjectionSectionComponent,
    AccountComponent,
    NewAccountComponent,
    PracticingServicesComponent,
    MainPageComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    CounterComponent,
    RoutingSectionComponent,
    RoutingHomeComponent,
    RoutingServersComponent,
    RoutingServerComponent,
    RoutingEditServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorComponent,
    ObservablesSectionComponent,
    ObservableUserComponent,
    ObservableHomeComponent,
    SectionHeaderComponent,
    FormsSectionComponent,
    FormsComponent,
    ReactiveFormsComponent,
    ParcticingFormsComponent,
    FormsRequirementComponent,
    FormsSolutionComponent,
    ServicesRequirementComponent,
    PropertyEventBindingRequirementComponent,
    ComponentsRequirementComponent,
    DatabindingRequirementComponent,
    DirectivesRequirementComponent,
    PracticingReactiveFormsComponent,
    ReactiveFormsRequirementComponent,
    ReactiveFormsSolutionComponent,
    PipesSectionComponent,
    PipesComponent,
    PracticingPipesComponent,
    PipesRequirementComponent,
    PipesSolutionComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
    HttpSectionComponent,
    HttpRequestsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
