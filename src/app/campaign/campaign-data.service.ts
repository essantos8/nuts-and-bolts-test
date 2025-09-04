import { Injectable, signal } from '@angular/core';

export interface CampaignData {
  campaignType?: string;
  extractedDetails?: {
    productName?: string;
    description?: string;
    campaignRules?: string[];
  };
  emailSendingOption?: string;
  googleSheetUpdate?: {
    enabled: boolean;
    sheetUrl?: string;
    columns?: string;
  };
  emailDraft?: {
    subject?: string;
    body?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class CampaignDataService {
  private readonly data = signal<CampaignData>({});

  get campaignData() {
    return this.data();
  }

  setCampaignType(type: string) {
    this.data.update(d => ({ ...d, campaignType: type }));
  }

  setExtractedDetails(details: CampaignData['extractedDetails']) {
    this.data.update(d => ({ ...d, extractedDetails: details }));
  }

  setEmailSendingOption(option: string) {
    this.data.update(d => ({ ...d, emailSendingOption: option }));
  }

  setGoogleSheetUpdate(update: CampaignData['googleSheetUpdate']) {
    this.data.update(d => ({ ...d, googleSheetUpdate: update }));
  }

  setEmailDraft(draft: CampaignData['emailDraft']) {
    this.data.update(d => ({ ...d, emailDraft: draft }));
  }

  logData() {
    console.log('Campaign Data:', this.data());
  }
}
