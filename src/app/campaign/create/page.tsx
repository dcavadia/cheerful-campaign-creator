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
    <div style={{ display: 'flex', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Progress Indicator - Fixed */}
      <div style={{ 
        position: 'sticky', 
        top: '0', 
        height: 'fit-content',
        paddingTop: '20px',
      }}>
        <ProgressIndicator />
      </div>

      {/* Content Sections */}
      <div style={{ flex: 1 }}>
        {/* Step 1 */}
        <div style={{ 
          minHeight: '100vh', 
          paddingBottom: '100px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Step1Content />
        </div>

        {/* Step 2 */}
        <div style={{ 
          minHeight: '100vh',
          paddingBottom: '100px', 
          display: 'flex',
          alignItems: 'center',
        }}>
          <Step2Content />
        </div>

        {/* Step 3 */}
        <div style={{ 
          minHeight: '100vh',
          paddingBottom: '100px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Step3Content />
        </div>

        {/* Step 4 */}
        <div style={{ 
          minHeight: '100vh',
          paddingBottom: '100px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Step4Content />
        </div>
      </div>
    </div>
  );
}
