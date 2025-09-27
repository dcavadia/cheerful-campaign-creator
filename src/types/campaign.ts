export type CampaignType = 'seeding' | 'paid' | 'other';

export interface CampaignData {
  type: CampaignType;
  typeDescription?: string;
  productName?: string;
  productDescription?: string;
  campaignRules?: string[];
  files?: File[];
  productUrl?: string;
  integrations: {
    googleSheet?: {
      url: string;
      trackingRules: string[];
    };
    shopify?: boolean;
  };
  emailAccounts?: string[];
}

export interface StepperState {
  currentStep: number;
  completedSteps: number[];
  campaignData: Partial<CampaignData>;
}
