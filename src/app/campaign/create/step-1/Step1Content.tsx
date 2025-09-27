'use client';
import { useState } from 'react';
import { useCampaign } from '@/hooks/useCampaign';
import { CampaignType } from '@/types/campaign';

const campaignTypes = [
  {
    id: 'seeding' as CampaignType,
    title: 'Seeding/Gifting',
    description: 'Send free products to creators in exchange for organic content.',
    icon: '🎁'
  },
  {
    id: 'paid' as CampaignType,
    title: 'Paid Promotion', 
    description: 'Pay creators for guaranteed content and deliverables.',
    icon: '💰'
  },
  {
    id: 'other' as CampaignType,
    title: 'Other',
    description: 'For all other types of creator collaboration campaigns.',
    icon: '📋'
  }
];

export default function Step1Content() {
  const { state, dispatch } = useCampaign();
  const [selectedType, setSelectedType] = useState<CampaignType | null>(null);
  const [otherDescription, setOtherDescription] = useState('');

  const handleNext = () => {
    if (selectedType) {
      dispatch({
        type: 'UPDATE_CAMPAIGN_DATA',
        payload: {
          type: selectedType,
          typeDescription: selectedType === 'other' ? otherDescription : undefined
        }
      });
      dispatch({ type: 'COMPLETE_STEP', payload: 1 });
      dispatch({ type: 'SET_STEP', payload: 2 });
      
      const step2Element = document.querySelector('#step-2');
      step2Element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div 
      data-step="1"
      style={{
        width: '100%',
        maxWidth: '850px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb',
        boxSizing: 'border-box',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '12px',
          margin: 0,
        }}>
          1. Choose Campaign Type
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          margin: 0,
          lineHeight: '1.5',
        }}>
          Select the best one that fits your goal.
        </p>
      </div>

      {/* Campaign Type Cards */}
      <div style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        marginBottom: '40px',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
      }}>
        {campaignTypes.map((type) => (
          <div
            key={type.id}
            style={{
              width: '180px',
              height: '180px',
              border: selectedType === type.id ? '2px solid #1f2937' : '2px solid #e5e7eb',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              padding: '20px',
              textAlign: 'center',
              boxShadow: selectedType === type.id ? '0 4px 12px rgba(0, 0, 0, 0.15)' : '0 2px 4px rgba(0, 0, 0, 0.05)',
              flexShrink: 0,
            }}
            onClick={() => setSelectedType(type.id)}
          >
            <div style={{
              fontSize: '36px',
              marginBottom: '16px',
            }}>
              {type.icon}
            </div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '8px',
              margin: 0,
            }}>
              {type.title}
            </h3>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              lineHeight: '1.4',
              margin: 0,
            }}>
              {type.description}
            </p>
          </div>
        ))}
      </div>

      {/* Other Description */}
      {selectedType === 'other' && (
        <div style={{ marginBottom: '40px' }}>
          <textarea
            placeholder="Tell us what your goal is for this campaign..."
            style={{
              width: '100%',
              padding: '16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              resize: 'none',
              height: '100px',
              fontSize: '14px',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
            }}
            value={otherDescription}
            onChange={(e) => setOtherDescription(e.target.value)}
          />
        </div>
      )}

      {/* Next Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <button
          onClick={handleNext}
          disabled={!selectedType || (selectedType === 'other' && !otherDescription.trim())}
          style={{
            backgroundColor: (!selectedType || (selectedType === 'other' && !otherDescription.trim())) 
              ? '#d1d5db' : '#1f2937',
            color: 'white',
            padding: '12px 32px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '14px',
            fontWeight: '600',
            cursor: (!selectedType || (selectedType === 'other' && !otherDescription.trim())) 
              ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
