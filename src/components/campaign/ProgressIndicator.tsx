'use client';
import { useCampaign } from '@/hooks/useCampaign';
import { useEffect, useState } from 'react';

export function ProgressIndicator() {
  const { state, dispatch } = useCampaign();
  const [visibleStep, setVisibleStep] = useState(1);
  
  const steps = [
    { number: 1, title: 'Campaign Type' },
    { number: 2, title: 'Campaign Information' },
    { number: 3, title: 'Add Integrations' },
    { number: 4, title: 'Email Setup' },
  ];

  // Track which step is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const stepElements = [
        document.getElementById('step-1'),
        document.getElementById('step-2'),
        document.getElementById('step-3'),
        document.getElementById('step-4'),
      ];

      const viewportCenter = window.innerHeight / 2;
      
      for (let i = stepElements.length - 1; i >= 0; i--) {
        const element = stepElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportCenter) {
            setVisibleStep(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      width: '220px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Step Counter */}
      <div style={{
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '24px',
        fontWeight: '500',
      }}>
        {visibleStep}/4
      </div>

      {/* Progress Steps */}
      <div style={{ position: 'relative' }}>
        {/* Vertical Line */}
        <div style={{
          position: 'absolute',
          left: '15px',
          top: '15px',
          width: '2px',
          height: `${(steps.length - 1) * 80}px`,
          backgroundColor: '#e5e7eb',
          zIndex: 0,
        }} />

        {/* Active Line - shows progress */}
        <div style={{
          position: 'absolute',
          left: '15px',
          top: '15px',
          width: '2px',
          height: `${Math.max(0, (visibleStep - 1) * 80)}px`,
          backgroundColor: '#10b981',
          zIndex: 1,
          transition: 'height 0.3s ease',
        }} />

        {steps.map((step, index) => (
          <div key={step.number} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: index < steps.length - 1 ? '80px' : '0',
            position: 'relative',
            zIndex: 2,
          }}>
            {/* Step Circle */}
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: step.number < visibleStep ? '#10b981' :
                            step.number === visibleStep ? '#1f2937' : '#e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              border: '3px solid #ffffff',
              transition: 'all 0.3s ease',
            }}>
              {step.number < visibleStep ? (
                <span style={{ color: 'white', fontSize: '12px', fontWeight: '600' }}>✓</span>
              ) : (
                <span style={{
                  color: step.number === visibleStep ? 'white' : '#9ca3af',
                  fontSize: '12px',
                  fontWeight: '700',
                }}>
                  {step.number}
                </span>
              )}
            </div>

            {/* Step Title */}
            <div style={{
              marginLeft: '16px',
              fontSize: '14px',
              color: step.number === visibleStep ? '#1f2937' : '#6b7280',
              fontWeight: step.number === visibleStep ? '600' : '400',
              lineHeight: '1.3',
              maxWidth: '160px',
            }}>
              {step.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
