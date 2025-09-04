import { Component, OnInit } from '@angular/core';
import { CampaignDataService } from '../campaign-data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component implements OnInit {
  constructor(private readonly campaignData: CampaignDataService) {}

  ngOnInit() {
    this.onDetailsExtracted({
      productName: 'Acme Widget Pro',
      description: 'Lightweight, durable, creator‑friendly widget.',
      campaignRules: [
        'Post 1x TikTok + 1x IG Reel within 7 days',
        'Tag @brand and use #acmewidget',
        'Show unboxing and usage'
      ]
    });
  }

  onDetailsExtracted(details: { productName?: string; description?: string; campaignRules?: string[] }) {
    this.campaignData.setExtractedDetails(details);
  }
}


