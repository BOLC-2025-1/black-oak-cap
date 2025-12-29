import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// 1. ADD YOUR COMPONENT CODE HERE (Navigation, Hero, etc.)
// Note: Since these aren't in separate files in your repo, 
// they must be defined in this file or imported correctly.

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Black Oak Land and Capital | Santa Barbara County Permitting & Land Use Strategy</title>
        <meta name="description" content="Expert land use consulting for Santa Barbara County." />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Your Site Content Here */}
        <h1 style={{textAlign: 'center', marginTop: '20%'}}>Black Oak Land and Capital: Site Live</h1>
      </main>
    </HelmetProvider>
  );
};

// 2. THE IGNITION COMMAND
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>
  );
}
