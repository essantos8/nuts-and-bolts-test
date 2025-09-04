import { Component } from '@angular/core';
import { CampaignDataService } from '../campaign-data.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {
  sheetUrl = '';
  columns = '';

  constructor(private readonly campaignData: CampaignDataService) {}

  onEmailSendingOptionSelected(option: string) {
    this.campaignData.setEmailSendingOption(option);
    console.log('Email Sending Option selected:', option);
  }

  onGoogleSheetUpdate(update: { enabled: boolean; sheetUrl?: string; columns?: string }) {
    this.campaignData.setGoogleSheetUpdate(update);
  }
}


