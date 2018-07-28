import { NgModule } from "../../node_modules/@angular/core";
import { ToastModule } from "../../node_modules/primeng/toast";
import {DialogModule} from '../../node_modules/primeng/dialog';

const moduleList = [
    ToastModule,
    DialogModule
]

@NgModule({
    imports: moduleList,
	exports: moduleList
})
export class AppPrimengModule { }