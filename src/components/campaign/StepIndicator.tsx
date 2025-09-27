'use client';
import { useCampaign } from '@/hooks/useCampaign';

const steps = [
  '1. Campaign Type',
  '2. Add Campaign Information', 
  '3. Add Integrations',
  '4. Email Setup'
];

export function StepIndicator() {
  const { state } = useCampaign();
  
  return (
    <div className="mb-12">
      {/* Step Counter */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-gray-500 font-medium">
          {state.currentStep}/4
        </div>
      </div>
      
      {/* Current Step Title */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          {steps[state.currentStep - 1]}
        </h2>
        <p className="text-lg text-gray-600">
          {getStepDescription(state.currentStep)}
        </p>
      </div>
    </div>
  );
}

function getStepDescription(step: number): string {
  const descriptions = [
    'Select the best one that fits your goal.',
    'Upload a file or paste a link - we\'ll pull the product and campaign details for you.',
    'Connect your tools to streamline campaign management.',
    'Set up email accounts for creator outreach.'
  ];
  return descriptions[step - 1] || '';
}
