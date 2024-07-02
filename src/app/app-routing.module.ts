import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ClientsFeedbackPageComponent } from './components/pages/clients-feedback-page/clients-feedback-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'index-2', pathMatch: 'full' }, // Default route
    { path: 'index-2', component: HomeDemoTwoComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'team', component: TeamPageComponent },
    { path: 'pricing', component: PricingPageComponent },
    { path: 'services', component: ServicesPageOneComponent },
    { path: 'service-details', component: ServiceDetailsPageComponent },
    { path: 'clients-feedback', component: ClientsFeedbackPageComponent },
    { path: 'faq', component: FaqPageComponent },
    { path: 'contact', component: ContactPageComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
