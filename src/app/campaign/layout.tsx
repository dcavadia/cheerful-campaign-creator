import { CampaignProvider } from '@/hooks/useCampaign';

export default function CampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CampaignProvider>
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
        {/* Left Sidebar - Fixed */}
        <div style={{
          width: '80px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 0',
          position: 'fixed',
          height: '100vh',
          zIndex: 100,
          left: 0,
          top: 0,
        }}>
          {/* Logo/Brand */}
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#8b5cf6',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>C</span>
          </div>

          {/* Navigation Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#1f2937',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: 'white', fontSize: '16px' }}>+</span>
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '16px' }}>📧</span>
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '16px' }}>📊</span>
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '16px' }}>⚙️</span>
            </div>
          </div>

          {/* Bottom Avatar */}
          <div style={{
            marginTop: 'auto',
            width: '32px',
            height: '32px',
            backgroundColor: '#1f2937',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: 'white', fontSize: '14px' }}>N</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ 
          flex: 1, 
          marginLeft: '80px', // Account for fixed sidebar
          display: 'flex', 
          flexDirection: 'column',
        }}>
          {/* Top Header - Fixed */}
          <div style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          }}>
            <h1 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1f2937',
              margin: 0,
            }}>
              Untitled Campaign
            </h1>
          </div>

          {/* Scrollable Content Container */}
          <div style={{ 
            flex: 1,
            padding: '40px 20px',
            overflow: 'auto',
          }}>
            {children}
          </div>
        </div>
      </div>
    </CampaignProvider>
  );
}
