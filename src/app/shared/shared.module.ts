import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ErrorComponent } from './error/error.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { UnlessDirective } from './unless.directive';


@NgModule({
    declarations: [
        ConfirmationDialogComponent,
        ErrorComponent,
        SectionHeaderComponent,
        UnlessDirective
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AngularMaterialModule,
        FlexLayoutModule
    ],
    exports: [
        ConfirmationDialogComponent,
        ErrorComponent,
        SectionHeaderComponent,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AngularMaterialModule,
        FlexLayoutModule,
        UnlessDirective
    ]
})
export class SharedModule {

}
