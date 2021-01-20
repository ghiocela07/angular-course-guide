import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
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
	MatDialogModule,
];

@NgModule({
	imports: [
		materialModules
	],
	exports: [
		materialModules
	]
})
export class AngularMaterialModule {

}
