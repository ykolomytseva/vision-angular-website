import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
    public isMonthly: boolean = true;

    public monthlyPlans = [
        {
            name: 'Individual',
            description:
                'Entrepreneurs & small businesses. Managing 1 website.',
            price: 15,
            features: [
                'SEO Training & Support',
                'Reports Per Day',
                'Tracked Keywords',
                'Numbers of Locations',
                'Keyword Research (Inactive)',
                'Competitive Analysis (Inactive)',
            ],
            popular: true,
        },
        {
            name: 'Business',
            description:
                'Entrepreneurs & small businesses. Managing 7 websites.',
            price: 29,
            features: [
                'SEO Training & Support',
                'Reports Per Day',
                'Tracked Keywords',
                'Numbers of Locations',
                'Keyword Research',
                'Competitive Analysis (Inactive)',
            ],
            popular: false,
        },
        {
            name: 'Enterprise / Agency',
            description:
                'Entrepreneurs & small businesses. Managing 10+ websites.',
            price: 79,
            features: [
                'SEO Training & Support',
                'Reports Per Day',
                'Tracked Keywords',
                'Numbers of Locations',
                'Keyword Research',
                'Competitive Analysis',
            ],
            popular: false,
        },
    ];

    public yearlyPlans = [
        {
            name: 'Individual',
            description:
                'Entrepreneurs & small businesses. Managing 1 website.',
            price: 150,
            originalPrice: 180,
            features: [
                'SEO Training & Support',
                'Reports Per Day',
                'Tracked Keywords',
                'Numbers of Locations',
                'Keyword Research (Inactive)',
                'Competitive Analysis (Inactive)',
            ],
            popular: true,
        },
        {
            name: 'Business',
            description:
                'Entrepreneurs & small businesses. Managing 7 websites.',
            price: 290,
            originalPrice: 348,
            features: [
                'SEO Training & Support',
                'Reports Per Day',
                'Tracked Keywords',
                'Numbers of Locations',
                'Keyword Research',
                'Competitive Analysis (Inactive)',
            ],
            popular: false,
        },
        {
            name: 'Enterprise / Agency',
            description:
                'Entrepreneurs & small businesses. Managing 10+ websites.',
            price: 790,
            originalPrice: 948,
            features: [
                'SEO Training & Support',
                'Reports Per Day',
                'Tracked Keywords',
                'Numbers of Locations',
                'Keyword Research',
                'Competitive Analysis',
            ],
            popular: false,
        },
    ];

    constructor(public router: Router) {}

    togglePricing() {
        this.isMonthly = !this.isMonthly;
    }
}
