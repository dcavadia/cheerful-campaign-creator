'use client';
import { useCampaign } from '@/hooks/useCampaign';

export function ProgressIndicator() {
  const { state } = useCampaign();
  
  const steps = [
    { number: 1, title: 'Campaign Type' },
    { number: 2, title: 'Campaign Information' },
    { number: 3, title: 'Add Integrations' },
    { number: 4, title: 'Email Setup' },
  ];

  return (
    <div style={{
      width: '200px',
      paddingRight: '40px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Step Counter */}
      <div style={{
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '8px',
      }}>
        {state.currentStep}/4
      </div>

      {/* Progress Steps */}
      <div style={{ position: 'relative' }}>
        {/* Vertical Line */}
        <div style={{
          position: 'absolute',
          left: '15px',
          top: '20px',
          width: '2px',
          height: 'calc(100% - 40px)',
          backgroundColor: '#e5e7eb',
        }} />

        {steps.map((step, index) => (
          <div key={step.number} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: index < steps.length - 1 ? '40px' : '0',
            position: 'relative',
          }}>
            {/* Step Circle */}
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: step.number === state.currentStep ? '#1f2937' : 
                            state.completedSteps.includes(step.number) ? '#10b981' : '#e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              position: 'relative',
            }}>
              {state.completedSteps.includes(step.number) ? (
                <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
              ) : (
                <span style={{
                  color: step.number === state.currentStep ? 'white' : '#9ca3af',
                  fontSize: '12px',
                  fontWeight: '600',
                }}>
                  {step.number}
                </span>
              )}
            </div>

            {/* Step Title */}
            <div style={{
              marginLeft: '12px',
              fontSize: '14px',
              color: step.number === state.currentStep ? '#1f2937' : '#6b7280',
              fontWeight: step.number === state.currentStep ? '600' : '400',
            }}>
              {step.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
