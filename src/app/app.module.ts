import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { HeaderComponent } from './components/common/header/header.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { ProjectsComponent } from './components/common/projects/projects.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { ServicesComponent } from './components/common/services/services.component';
import { QuotesComponent } from './components/common/quotes/quotes.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { LetsTalkComponent } from './components/common/lets-talk/lets-talk.component';
import { ExpertiseComponent } from './components/common/expertise/expertise.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { AboutComponent } from './components/common/about/about.component';
import { TeamComponent } from './components/common/team/team.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ClientsFeedbackPageComponent } from './components/pages/clients-feedback-page/clients-feedback-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeDemoTwoComponent,
        FooterComponent,
        SubscribeComponent,
        HeaderComponent,
        BlogComponent,
        PricingComponent,
        ProjectsComponent,
        WhyChooseUsComponent,
        FeedbackComponent,
        FunfactsComponent,
        ServicesComponent,
        QuotesComponent,
        FeaturesComponent,
        LetsTalkComponent,
        ExpertiseComponent,
        HometwoBannerComponent,
        AboutComponent,
        TeamComponent,
        ServicesPageOneComponent,
        ServiceDetailsPageComponent,
        ContactPageComponent,
        FaqComponent,
        FaqPageComponent,
        ClientsFeedbackPageComponent,
        PricingPageComponent,
        TeamPageComponent,
        AboutPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
