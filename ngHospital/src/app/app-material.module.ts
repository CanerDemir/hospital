import { NgModule } from "@angular/core";

import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule, MatRadioModule, MatAutocompleteModule, MatCheckboxModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule, MatGridListModule, MatListModule, MatStepperModule, MatTabsModule, MatTreeModule, MatButtonToggleModule, MatBadgeModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatBottomSheetModule, MatDialogModule, MatSnackBarModule, MatTooltipModule, MatPaginatorModule, MatSortModule, MatTableModule } from "@angular/material";

const moduleList = [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule, MatRadioModule, MatAutocompleteModule, MatCheckboxModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule, MatGridListModule, MatListModule, MatStepperModule, MatTabsModule, MatTreeModule, MatButtonToggleModule, MatBadgeModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule, MatBottomSheetModule, MatDialogModule, MatSnackBarModule, MatTooltipModule, MatPaginatorModule, MatSortModule, MatTableModule];

@NgModule({
	imports: moduleList,
	exports: moduleList
})
export class AppMaterialModule { }