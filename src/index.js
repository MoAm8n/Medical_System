import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { ClerkProvider } from '@clerk/clerk-react';
// import { AuthProvider } from './contexts/AuthContext';

const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('Missing Publishable Key');
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
        <ClerkProvider publishableKey={publishableKey} afterSignOutUrl='/Medical_System'>
      {/* <AuthProvider> */}
          <App />
      {/* </AuthProvider> */}
        </ClerkProvider>
    </ContextProvider>
  </React.StrictMode>
);

