import { Component } from '@angular/core';
import { CampaignDataService } from '../campaign-data.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component {
  constructor(private readonly campaignData: CampaignDataService) {}

  onCampaignTypeSelected(type: string) {
    this.campaignData.setCampaignType(type);
  }
}


