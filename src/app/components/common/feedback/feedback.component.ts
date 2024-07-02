import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
    newFeedbackSlides!: OwlOptions;

    constructor(public router: Router) {
        this.initializeNewFeedbackSlides();
    }

    private initializeNewFeedbackSlides(): void {
        this.newFeedbackSlides = {
            items: 1,
            nav: false,
            loop: true,
            dots: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
        };
    }
}
