// Google Auth Test Utility
// Use this in the browser console to test Google OAuth

export const testGoogleAuth = () => {
  console.log('Testing Google OAuth Configuration...');
  
  // Check if Google Client ID is set
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  console.log('Google Client ID:', clientId ? 'Set' : 'Not set');
  
  // Check if Google APIs are loaded
  if (window.google) {
    console.log('✅ Google APIs loaded');
  } else {
    console.log('❌ Google APIs not loaded');
  }
  
  // Check COOP headers
  console.log('Cross-Origin-Opener-Policy:', document.querySelector('meta[http-equiv="Cross-Origin-Opener-Policy"]')?.content || 'Not set');
  
  // Check CSP headers
  const csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  console.log('Content-Security-Policy includes Google domains:', 
    csp?.content.includes('accounts.google.com') ? '✅ Yes' : '❌ No');
    
  // Test popup window
  try {
    const popup = window.open('', 'test', 'width=500,height=600');
    if (popup) {
      console.log('✅ Popup windows allowed');
      popup.close();
    } else {
      console.log('❌ Popup windows blocked');
    }
  } catch (error) {
    console.log('❌ Popup test failed:', error.message);
  }
  
  console.log('Google Auth test complete');
};

// Add to window for easy console access
if (typeof window !== 'undefined') {
  window.testGoogleAuth = testGoogleAuth;
}