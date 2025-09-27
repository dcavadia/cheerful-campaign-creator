'use client';
import { useState } from 'react';
import { useCampaign } from '@/hooks/useCampaign';

type Step2State = 'input' | 'processing' | 'review';

export default function Step2Content() {
  const { state, dispatch } = useCampaign();
  const [currentState, setCurrentState] = useState<Step2State>('input');
  const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('file');
  const [productUrl, setProductUrl] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  // Mock products from Figma - single row layout
  const mockProducts = [
    { id: '1', name: 'Summer Yeti Cooler...', type: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: '2', name: 'Yeti Cooler', type: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: '3', name: 'Yeti Cooler', type: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: '4', name: 'Yeti Cooler', type: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: '5', name: 'Yeti Cooler', type: 'Yeti Cooler', date: 'Created 8/25/25' },
    { id: '6', name: 'Yeti Cooler', type: 'Yeti Cooler', date: 'Created 8/25/25' },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    // Add to existing files instead of replacing
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (indexToRemove: number) => {
    setFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleNext = () => {
    // Start processing
    setCurrentState('processing');
    
    // Simulate loading/processing time
    setTimeout(() => {
      setCurrentState('review');
    }, 3000);
  };

  const handleFinalNext = () => {
    dispatch({ type: 'COMPLETE_STEP', payload: 2 });
    dispatch({ type: 'SET_STEP', payload: 3 });
    // Smooth scroll to next section
    const step3Element = document.querySelector('[data-step="3"]');
    step3Element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleBack = () => {
    if (currentState === 'review') {
      setCurrentState('input');
      return;
    }
    
    dispatch({ type: 'SET_STEP', payload: 1 });
    // Smooth scroll to previous section
    const step1Element = document.querySelector('[data-step="1"]');
    step1Element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Input State
  if (currentState === 'input') {
    return (
      <div 
        data-step="2"
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
            2. Add Campaign Information
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: 0,
          }}>
            Upload a file or paste a link - we'll pull the product and campaign details for you.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '24px',
          justifyContent: 'center',
        }}>
          <button
            onClick={() => setUploadMethod('file')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              backgroundColor: uploadMethod === 'file' ? '#1f2937' : '#ffffff',
              color: uploadMethod === 'file' ? '#ffffff' : '#374151',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            New Product
          </button>
          <button
            onClick={() => setUploadMethod('url')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              backgroundColor: uploadMethod === 'url' ? '#1f2937' : '#f9fafb',
              color: uploadMethod === 'url' ? '#ffffff' : '#6b7280',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Existing Products
          </button>
        </div>

        {/* New Product Tab */}
        {uploadMethod === 'file' && (
          <>
            {/* Product URL Input */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
              }}>
                Product URL (Optional)
              </label>
              <input
                type="url"
                placeholder="https://example.com/product"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                }}
              />
            </div>

            {/* File Upload */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
              }}>
                File Upload
              </label>
              
              <div style={{
                border: '2px dashed #d1d5db',
                borderRadius: '12px',
                padding: '32px',
                textAlign: 'center',
                backgroundColor: '#f9fafb',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '20px',
                }}>
                  📁
                </div>
                <p style={{
                  fontSize: '16px',
                  color: '#374151',
                  marginBottom: '8px',
                  margin: 0,
                }}>
                  Drop files here or click to upload files
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  marginBottom: '16px',
                  margin: 0,
                }}>
                  PDF, PNG, JPG up to 10MB
                </p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#1f2937',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Browse Files
                </label>
              </div>

              {/* Uploaded Files List */}
              {files.length > 0 && (
                <div style={{ marginTop: '16px' }}>
                  {files.map((file, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px',
                      backgroundColor: '#f3f4f6',
                      borderRadius: '8px',
                      marginBottom: '8px',
                    }}>
                      <span style={{ fontSize: '16px', marginRight: '12px' }}>📄</span>
                      <span style={{ fontSize: '14px', color: '#374151', flex: 1 }}>{file.name}</span>
                      <div style={{
                        width: '100px',
                        height: '4px',
                        backgroundColor: '#ef4444',
                        borderRadius: '2px',
                        marginRight: '12px',
                      }} />
                      <button
                        onClick={() => removeFile(index)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#ef4444',
                          cursor: 'pointer',
                          fontSize: '18px',
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* Existing Products Tab */}
        {uploadMethod === 'url' && (
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              maxHeight: '300px',
              overflowY: 'auto',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}>
              {mockProducts.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setSelectedProducts(prev =>
                      prev.includes(product.id)
                        ? prev.filter(id => id !== product.id)
                        : [...prev, product.id]
                    );
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    borderBottom: index < mockProducts.length - 1 ? '1px solid #f3f4f6' : 'none',
                    cursor: 'pointer',
                    backgroundColor: selectedProducts.includes(product.id) ? '#f0f9ff' : '#ffffff',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {/* Product Image Placeholder */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '6px',
                    marginRight: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '20px' }}>📦</span>
                  </div>

                  {/* Product Info */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: 0,
                      marginBottom: '4px',
                    }}>
                      {product.name}
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      margin: 0,
                    }}>
                      {product.date}
                    </p>
                  </div>

                  {/* Selection Indicator */}
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid',
                    borderColor: selectedProducts.includes(product.id) ? '#2563eb' : '#d1d5db',
                    backgroundColor: selectedProducts.includes(product.id) ? '#2563eb' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {selectedProducts.includes(product.id) && (
                      <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
            disabled={
              (uploadMethod === 'file' && files.length === 0) || 
              (uploadMethod === 'url' && selectedProducts.length === 0)
            }
            style={{
              backgroundColor: (
                (uploadMethod === 'file' && files.length === 0) || 
                (uploadMethod === 'url' && selectedProducts.length === 0)
              ) ? '#d1d5db' : '#1f2937',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '14px',
              fontWeight: '600',
              cursor: (
                (uploadMethod === 'file' && files.length === 0) || 
                (uploadMethod === 'url' && selectedProducts.length === 0)
              ) ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // Processing State
  if (currentState === 'processing') {
    return (
      <div 
        data-step="2"
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
          Gathering your campaign information
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

  // Review State
  if (currentState === 'review') {
    return (
      <div 
        data-step="2"
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
            2. Review Campaign Information
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: 0,
          }}>
            We've pulled product info and campaign rules from your files. Review and edit if needed.
          </p>
        </div>

        {/* Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          marginBottom: '32px',
        }}>
          {/* Product Information */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '16px',
              margin: 0,
            }}>
              Product Information
            </h3>
            
            <div style={{
              backgroundColor: '#f9fafb',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '16px',
            }}>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px',
                margin: 0,
              }}>
                YETI Cooler 50
              </h4>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5',
                margin: 0,
              }}>
                Experience unmatched cooling performance with the YETI Cooler 50. Built with rotomolded construction for superior durability, this premium cooler keeps ice frozen for days and bears the intimidation test. Whether camping or tailgating, the YETI Cooler ensures your refreshments stay icy cold for the duration of your adventures.
              </p>
            </div>

            <div>
              <h5 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px',
                margin: 0,
              }}>
                Key Features:
              </h5>
              <ul style={{
                fontSize: '14px',
                color: '#6b7280',
                paddingLeft: '20px',
                margin: 0,
              }}>
                <li>Rotomolded construction for superior durability</li>
                <li>Keeps ice frozen for up to 5 days in normal conditions</li>
                <li>Heavy-duty rubber latches and stainless steel hardware</li>
                <li>No-slip feet and comfortable carrying handles</li>
              </ul>
            </div>
          </div>

          {/* Campaign Rules */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '16px',
              margin: 0,
            }}>
              Campaign Rules
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                }}>
                  <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                </div>
                <div>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1f2937',
                    margin: 0,
                    marginBottom: '4px',
                  }}>
                    Post must include @yeti tag and #YETIPartner hashtag
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: 0,
                  }}>
                    Required for campaign compliance and tracking
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                }}>
                  <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                </div>
                <div>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1f2937',
                    margin: 0,
                    marginBottom: '4px',
                  }}>
                    Content must showcase cooler in outdoor adventure setting
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: 0,
                  }}>
                    Camping, fishing, tailgating, or similar activities
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                }}>
                  <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                </div>
                <div>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1f2937',
                    margin: 0,
                    marginBottom: '4px',
                  }}>
                    Minimum 1000 words in caption describing the experience
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: 0,
                  }}>
                    Detailed review helps drive authentic engagement
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                }}>
                  <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                </div>
                <div>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1f2937',
                    margin: 0,
                    marginBottom: '4px',
                  }}>
                    Submit post within 30 days of product delivery
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: 0,
                  }}>
                    Campaign timeline ensures timely content delivery
                  </p>
                </div>
              </div>
            </div>
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
            onClick={handleFinalNext}
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

  return null;
}
