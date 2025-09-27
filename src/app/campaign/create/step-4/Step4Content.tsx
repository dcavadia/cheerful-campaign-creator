'use client';
import { useState } from 'react';
import { useCampaign } from '@/hooks/useCampaign';

type Step4State = 'setup' | 'generating' | 'review';

export default function Step4Content() {
  const { state, dispatch } = useCampaign();
  const [currentState, setCurrentState] = useState<Step4State>('setup');
  const [providerType, setProviderType] = useState<'cheerful' | 'external'>('cheerful');
  const [connectedEmails, setConnectedEmails] = useState<string[]>([
    'sarah.marketing@getdimeless.co',
    'john.sales@sendquotes.com'
  ]);
  const [searchEmail, setSearchEmail] = useState('');
  const [subjectLine, setSubjectLine] = useState('Hey {name}, a gift from Yeti just for you');
  const [emailBody, setEmailBody] = useState(`Hi {name},

I've been really enjoying your content on {channel_name} and your honest gear reviews. Your authentic approach and the way you`);

  const handleGenerateEmail = () => {
    setCurrentState('generating');
    
    // Simulate email generation
    setTimeout(() => {
      setCurrentState('review');
    }, 3000);
  };

  const handleBack = () => {
    if (currentState === 'review' || currentState === 'generating') {
      setCurrentState('setup');
      return;
    }

    dispatch({ type: 'SET_STEP', payload: 3 });
    const step3Element = document.querySelector('[data-step="3"]');
    step3Element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleLaunch = () => {
    dispatch({ type: 'COMPLETE_STEP', payload: 4 });
    // Here you could redirect to a success page or show completion
    alert('Campaign launched successfully!');
  };

  // Email Setup State
  if (currentState === 'setup') {
    return (
      <div 
        data-step="4"
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
            4. Email Setup
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: 0,
          }}>
            Configure your email provider, accounts, and recipients to launch your campaign.
          </p>
        </div>

        {/* Email Provider Selection */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'flex',
            gap: '16px',
          }}>
            {/* Cheerful (Recommended) */}
            <div
              onClick={() => setProviderType('cheerful')}
              style={{
                flex: 1,
                padding: '20px',
                border: `2px solid ${providerType === 'cheerful' ? '#8b5cf6' : '#e5e7eb'}`,
                borderRadius: '12px',
                cursor: 'pointer',
                backgroundColor: providerType === 'cheerful' ? '#faf5ff' : '#ffffff',
                transition: 'all 0.2s ease',
                position: 'relative',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '8px',
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: `2px solid ${providerType === 'cheerful' ? '#8b5cf6' : '#d1d5db'}`,
                  backgroundColor: providerType === 'cheerful' ? '#8b5cf6' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {providerType === 'cheerful' && (
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                    }} />
                  )}
                </div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: 0,
                }}>
                  Cheerful (Recommended)
                </h3>
                {providerType === 'cheerful' && (
                  <span style={{
                    fontSize: '10px',
                    fontWeight: '600',
                    color: '#8b5cf6',
                    backgroundColor: '#ede9fe',
                    padding: '2px 6px',
                    borderRadius: '8px',
                    textTransform: 'uppercase',
                  }}>
                    RECOMMENDED
                  </span>
                )}
              </div>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: 0,
              }}>
                Our email system with automatic optimization
              </p>
            </div>

            {/* Other External Provider */}
            <div
              onClick={() => setProviderType('external')}
              style={{
                flex: 1,
                padding: '20px',
                border: `2px solid ${providerType === 'external' ? '#8b5cf6' : '#e5e7eb'}`,
                borderRadius: '12px',
                cursor: 'pointer',
                backgroundColor: providerType === 'external' ? '#faf5ff' : '#ffffff',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '8px',
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: `2px solid ${providerType === 'external' ? '#8b5cf6' : '#d1d5db'}`,
                  backgroundColor: providerType === 'external' ? '#8b5cf6' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {providerType === 'external' && (
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                    }} />
                  )}
                </div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: 0,
                }}>
                  Other external provider
                </h3>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: 0,
              }}>
                Providers like Instantly, Mixmax, etc. Cheerful will handle replies only
              </p>
            </div>
          </div>
        </div>

        {/* Add Connect Sending Accounts */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '16px',
            margin: 0,
          }}>
            Add Connect Sending Accounts
          </h4>

          {/* Search Input */}
          <div style={{
            position: 'relative',
            marginBottom: '16px',
          }}>
            <input
              type="text"
              placeholder="Search connected emails"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 44px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: '#ffffff',
              }}
            />
            <span style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#9ca3af',
              fontSize: '16px',
            }}>
              🔍
            </span>
          </div>

          {/* Connected Email Tags */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            {connectedEmails.map((email, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#f3f4f6',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '14px',
                color: '#374151',
                border: '1px solid #e5e7eb',
              }}>
                <span>{email}</span>
                <button
                  onClick={() => setConnectedEmails(prev => prev.filter((_, i) => i !== index))}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#9ca3af',
                    cursor: 'pointer',
                    fontSize: '16px',
                    lineHeight: 1,
                    padding: 0,
                  }}
                >
                  ×
                </button>
              </div>
            ))}
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
            onClick={handleGenerateEmail}
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
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>⚡</span>
            Generate Email
          </button>
        </div>
      </div>
    );
  }

  // Generating State
  if (currentState === 'generating') {
    return (
      <div 
        data-step="4"
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '60px 40px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          textAlign: 'center',
        }}
      >
        {/* Loading Animation */}
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#8b5cf6',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>C</span>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: '4px solid transparent',
            borderTop: '4px solid rgba(255,255,255,0.7)',
            borderRadius: '50%',
            animation: 'spin 2s linear infinite',
          }} />
        </div>

        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#8b5cf6',
          margin: 0,
          marginBottom: '12px',
        }}>
          Generating your Email
        </h3>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '4px',
          marginBottom: '24px',
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#8b5cf6',
            borderRadius: '50%',
            animation: 'pulse 1.5s ease-in-out infinite',
          }} />
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#8b5cf6',
            borderRadius: '50%',
            animation: 'pulse 1.5s ease-in-out 0.5s infinite',
          }} />
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#8b5cf6',
            borderRadius: '50%',
            animation: 'pulse 1.5s ease-in-out 1s infinite',
          }} />
        </div>

        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 80%, 100% { opacity: 0.3; }
            40% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  // Review Email Draft State
  if (currentState === 'review') {
    return (
      <div 
        data-step="4"
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
            4. Review Email Draft
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: 0,
          }}>
            Cheerful has drafted an email for you. Feel free to edit as you please.
          </p>
        </div>

        {/* Email Form */}
        <div style={{ marginBottom: '32px' }}>
          {/* To Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '8px',
            }}>
              To
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              backgroundColor: '#f9fafb',
            }}>
              <span style={{ fontSize: '16px' }}>📊</span>
              <span style={{
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '500',
              }}>
                Click to upload CSV of Recipients
              </span>
            </div>
          </div>

          {/* Subject Line */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '8px',
            }}>
              Subject Line
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={subjectLine}
                onChange={(e) => setSubjectLine(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                }}
              />
              <button style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: '#6b7280',
                cursor: 'pointer',
                fontSize: '16px',
              }}>
                ✏️
              </button>
            </div>
          </div>

          {/* Email Body */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '8px',
            }}>
              Email Body
            </label>

            {/* Formatting Toolbar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              backgroundColor: '#f9fafb',
              border: '1px solid #d1d5db',
              borderBottom: 'none',
              borderRadius: '8px 8px 0 0',
            }}>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>B</button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontStyle: 'italic' }}>I</button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}>U</button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>🔗</button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>#</button>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginLeft: 'auto',
              }}>
                <span style={{
                  fontSize: '12px',
                  color: '#6b7280',
                }}>
                  # Merge Tags
                </span>
                <button style={{
                  backgroundColor: '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}>
                  🤖 Cheerfully
                </button>
              </div>
            </div>

            {/* Text Area */}
            <textarea
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderTop: 'none',
                borderRadius: '0 0 8px 8px',
                fontSize: '14px',
                fontFamily: 'inherit',
                resize: 'vertical',
              }}
            />
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
            onClick={handleLaunch}
            style={{
              backgroundColor: '#8b5cf6',
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
            Launch!
          </button>
        </div>
      </div>
    );
  }

  return null;
}
