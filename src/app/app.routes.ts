import { Routes } from '@angular/router';
import { FormSearchComponent } from './form-search/form-search.component';

const ROUTES: Routes = [
    {path: '', component: FormSearchComponent},
    {path: '**', component: FormSearchComponent}
];

export { ROUTES };