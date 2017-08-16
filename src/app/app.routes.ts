
import { RouterModule, Routes } from '@angular/router';

import { 
    AboutComponent,
    PortafolioComponent,
    ItemComponent 
} from './components/index.paginas';



const app_routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**',pathMatch: 'full', redirectTo: ''}
];

export const app_roting = RouterModule.forRoot(app_routes, { useHash:true });
