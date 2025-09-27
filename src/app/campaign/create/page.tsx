'use client';
import { useCampaign } from '@/hooks/useCampaign';
import { ProgressIndicator } from '@/components/campaign/ProgressIndicator';
import Step1Content from './step-1/Step1Content';
import Step2Content from './step-2/Step2Content';
import Step3Content from './step-3/Step3Content';
import Step4Content from './step-4/Step4Content';

export default function CampaignCreatePage() {
  const { state } = useCampaign();

  return (
    <div style={{ 
      display: 'flex', 
      width: '100%',
      minHeight: '100vh',
      justifyContent: 'center',
      position: 'relative',
    }}>
      {/* Progress Indicator - Fixed Position */}
      <div style={{ 
        position: 'fixed',
        left: '120px',
        top: '120px',
        zIndex: 10,
        width: '220px',
      }}>
        <ProgressIndicator />
      </div>

      {/* Centered Content Area */}
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        marginLeft: '300px', // Space for progress bar
        marginRight: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Step 1 */}
        <div 
          id="step-1"
          style={{ 
            width: '100%',
            minHeight: '100vh', 
            paddingBottom: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Step1Content />
        </div>

        {/* Step 2 */}
        <div 
          id="step-2"
          style={{ 
            width: '100%',
            minHeight: '100vh',
            paddingBottom: '100px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Step2Content />
        </div>

        {/* Step 3 */}
        <div 
          id="step-3"
          style={{ 
            width: '100%',
            minHeight: '100vh',
            paddingBottom: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Step3Content />
        </div>

        {/* Step 4 */}
        <div 
          id="step-4"
          style={{ 
            width: '100%',
            minHeight: '100vh',
            paddingBottom: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Step4Content />
        </div>
      </div>
    </div>
  );
}
