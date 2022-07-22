import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { VistaAuthComponent } from "./vista-auth/vista-auth.component";
import { VistaRegistroComponent } from "./vista-registro/vista-registro.component";

const routes: Routes = [
	{ path: "", redirectTo: "/auth", pathMatch: "full" },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "detail/:id", component: HeroDetailComponent },
	{ path: "heroes", component: HeroesComponent },
	{ path: "auth", component: VistaAuthComponent },
	{ path: "register", component: VistaRegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
