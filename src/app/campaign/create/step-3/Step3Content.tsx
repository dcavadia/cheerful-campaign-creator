'use client';
import { useState } from 'react';
import { useCampaign } from '@/hooks/useCampaign';

export default function Step3Content() {
  const { state, dispatch } = useCampaign();
  const [googleSheetEnabled, setGoogleSheetEnabled] = useState(false);
  const [googleSheetUrl, setGoogleSheetUrl] = useState('');
  const [trackingRules, setTrackingRules] = useState<{[key: string]: boolean}>({
    'Email': false,
    'Name': false,
    'Channel Name': false,
  });

  const handleNext = () => {
    dispatch({ type: 'COMPLETE_STEP', payload: 3 });
    dispatch({ type: 'SET_STEP', payload: 4 });
    const step4Element = document.querySelector('[data-step="4"]');
    step4Element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleBack = () => {
    dispatch({ type: 'SET_STEP', payload: 2 });
    const step2Element = document.querySelector('[data-step="2"]');
    step2Element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div 
      data-step="3"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '8px',
          margin: 0,
        }}>
          3. Add Integrations
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          margin: 0,
        }}>
          Connect your tools to save time and reduce manual work.
        </p>
      </div>

      {/* Google Sheets Integration */}
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        marginBottom: '16px',
        overflow: 'hidden',
      }}>
        {/* Google Sheets Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
          backgroundColor: '#ffffff',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            {/* Google Sheets Icon */}
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#0f9d58',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>📊</span>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1f2937',
                margin: 0,
                marginBottom: '2px',
              }}>
                Google Sheets
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: 0,
              }}>
                Automatically track campaign results in your Google Sheets
              </p>
            </div>
          </div>

          {/* Toggle Switch */}
          <div
            onClick={() => setGoogleSheetEnabled(!googleSheetEnabled)}
            style={{
              width: '48px',
              height: '24px',
              backgroundColor: googleSheetEnabled ? '#10b981' : '#d1d5db',
              borderRadius: '12px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{
              width: '20px',
              height: '20px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              position: 'absolute',
              top: '2px',
              left: googleSheetEnabled ? '26px' : '2px',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }} />
          </div>
        </div>

        {/* Google Sheets Expanded Content */}
        {googleSheetEnabled && (
          <div style={{
            padding: '0 20px 20px 20px',
            borderTop: '1px solid #f3f4f6',
            backgroundColor: '#f9fafb',
          }}>
            {/* Sheet URL Input */}
            <div style={{ marginBottom: '20px' }}>
              <input
                type="url"
                placeholder="https://docs.google.com/spreadsheets/d/..."
                value={googleSheetUrl}
                onChange={(e) => setGoogleSheetUrl(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  backgroundColor: '#ffffff',
                }}
              />
              <p style={{
                fontSize: '12px',
                color: '#6b7280',
                margin: 0,
                marginTop: '6px',
              }}>
                Tip: Set your sheet permissions to 'Anyone with the link can edit'
              </p>
            </div>

            {/* What to Track Section */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}>
                <h4 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: 0,
                }}>
                  What to Track:
                </h4>
                <span style={{
                  fontSize: '12px',
                  color: '#8b5cf6',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}>
                  💡 Regenerate with AI
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                {Object.entries(trackingRules).map(([rule, enabled]) => {
                  const descriptions: {[key: string]: string} = {
                    'Email': 'verify the influencer\'s email from the reply, so on the row, add if missing, if asked about payment, respond giving only.',
                    'Name': 'confirm the influencer\'s name from the reply, update if blank or mismatched.',
                    'Channel Name': 'fill in the creator\'s channel name if provided in the reply.',
                  };

                  return (
                    <div key={rule} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '12px',
                      backgroundColor: '#ffffff',
                      borderRadius: '6px',
                      border: '1px solid #e5e7eb',
                    }}>
                      {/* Status Dot */}
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: enabled ? '#10b981' : '#d1d5db',
                        borderRadius: '50%',
                        marginTop: '6px',
                        flexShrink: 0,
                      }} />

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          marginBottom: '2px',
                        }}>
                          <span style={{
                            fontSize: '13px',
                            fontWeight: '600',
                            color: '#1f2937',
                            marginRight: '6px',
                          }}>
                            In "{rule}"
                          </span>
                          <span style={{
                            fontSize: '13px',
                            color: '#6b7280',
                            lineHeight: '1.4',
                          }}>
                            - {descriptions[rule]}
                          </span>
                        </div>
                      </div>

                      {/* Toggle Icons */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        flexShrink: 0,
                      }}>
                        <button
                          onClick={() => setTrackingRules(prev => ({ ...prev, [rule]: false }))}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: !enabled ? '#ef4444' : '#d1d5db',
                          }}
                        >
                          🗑️
                        </button>
                        <button
                          onClick={() => setTrackingRules(prev => ({ ...prev, [rule]: !prev[rule] }))}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: enabled ? '#10b981' : '#d1d5db',
                          }}
                        >
                          ✏️
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Shopify Integration - Coming Soon */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        backgroundColor: '#f9fafb',
        opacity: 0.6,
        marginBottom: '32px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          {/* Shopify Icon */}
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#7ab55c',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>🛍️</span>
          </div>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#6b7280',
                margin: 0,
              }}>
                Shopify
              </h3>
              <span style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#8b5cf6',
                backgroundColor: '#f3e8ff',
                padding: '2px 8px',
                borderRadius: '10px',
              }}>
                COMING SOON
              </span>
            </div>
            <p style={{
              fontSize: '14px',
              color: '#9ca3af',
              margin: 0,
            }}>
              Connect your Shopify store for seamless product management
            </p>
          </div>
        </div>

        {/* Disabled Toggle */}
        <div style={{
          width: '48px',
          height: '24px',
          backgroundColor: '#e5e7eb',
          borderRadius: '12px',
          position: 'relative',
          cursor: 'not-allowed',
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#f3f4f6',
            borderRadius: '50%',
            position: 'absolute',
            top: '2px',
            left: '2px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          }} />
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <button
          onClick={handleBack}
          style={{
            padding: '12px 24px',
            backgroundColor: 'transparent',
            color: '#6b7280',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          style={{
            backgroundColor: '#1f2937',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
