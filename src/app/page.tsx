'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to campaign creation page
    router.push('/campaign/create');
  }, [router]);

  // Show loading state while redirecting
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#8b5cf6',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
        }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>C</span>
        </div>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          margin: 0,
        }}>
          Loading Campaign Creator...
        </p>
      </div>
    </div>
  );
}
