import { RouterModule, Routes } from "@angular/router";
import { MunchkinComponent } from "./munchkin/munchkin.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', redirectTo: '/munchkin', pathMatch: 'full' },
    { path: 'munchkin', component: MunchkinComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}