import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CampaignDataService } from '../campaign-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step4',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './step4.component.html',
  styleUrl: './step4.component.scss'
})
export class Step4Component {
  subject = 'Collab with Acme — Quick intro';
  body = `Hey {first_name},\n\nWe love your content and think our product would be a great fit.\n\n— Team Acme`;

  constructor(private readonly campaignData: CampaignDataService) {}

  onEmailDraftChanged(subject: string, body: string) {
    this.campaignData.setEmailDraft({ subject, body });
  }

  onLaunch() {
    this.campaignData.logData();
    // Optionally, navigate or perform other actions
  }
}


