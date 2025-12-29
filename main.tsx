import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { ProofAndAuthority } from '@/components/ProofAndAuthority';
import { SegmentCallouts } from '@/components/SegmentCallouts';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Black Oak Land and Capital | Santa Barbara County Permitting & Land Use Strategy</title>
        <meta 
          name="description" 
          content="Expert land use consulting, permit strategy, and capital alignment for Santa Barbara County. Serving architects, contractors, and property owners in Montecito, Hope Ranch, Santa Ynez Valley, and surrounding areas." 
        />
        <meta name="keywords" content="Santa Barbara County permits, land use consultant, Montecito permitting, Hope Ranch development, coastal zone permits, ADU permits Santa Barbara" />
        <link rel="canonical" href="https://blackoakland.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Black Oak Land and Capital | Santa Barbara County Permitting" />
        <meta property="og:description" content="Quiet control over Santa Barbara County approvals. Expert permit strategy for architects, contractors, and discerning property owners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackoakland.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Black Oak Land and Capital" />
        <meta name="twitter:description" content="Expert land use consulting for Santa Barbara County." />
      </Helmet>
      
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <ProofAndAuthority />
        <SegmentCallouts />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Black Oak Land and Capital",
          "description": "Land use consulting, permit strategy, and capital alignment for Santa Barbara County",
          "url": "https://blackoakland.com",
          "telephone": "(805) 555-1234",
          "email": "info@blackoakland.com",
          "areaServed": [
            "Montecito, CA",
            "Hope Ranch, CA",
            "Santa Ynez Valley, CA",
            "Carpinteria, CA",
            "Goleta, CA",
            "Santa Barbara County, CA"
          ],
          "serviceType": [
            "Land Use Consulting",
            "Permit Strategy",
            "Entitlements",
            "Development Consulting"
          ]
        })}
      </script>
    </>
  );
};
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>
  );
}
