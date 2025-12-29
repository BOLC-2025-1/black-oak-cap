import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { 
  Shield, 
  CheckCircle, 
  MapPin, 
  ArrowRight, 
  Mail, 
  Phone, 
  FileText, 
  Users, 
  Scale 
} from 'lucide-react';

// --- STYLES (Inline for maximum deployment speed) ---
const styles = {
  section: { padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' },
  hero: { backgroundColor: '#1a1a1a', color: 'white', textAlign: 'center' as const, padding: '100px 20px' },
  button: { backgroundColor: '#c5a059', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.1rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
  card: { padding: '30px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' as const }
};

// --- COMPONENTS ---
const Navigation = () => (
  <nav style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#1a1a1a' }}>BLACK OAK</div>
    <div style={{ display: 'flex', gap: '20px' }}>
      <a href="#services" style={{ textDecoration: 'none', color: '#666' }}>Services</a>
      <a href="#contact" style={{ textDecoration: 'none', color: '#666' }}>Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <section style={styles.hero}>
    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Institutional Stewardship. Quiet Control.</h1>
    <p style={{ fontSize: '1.25rem', marginBottom: '30px', opacity: 0.9 }}>Expert Permitting & Land Use Strategy for Santa Barbara County.</p>
    <button style={styles.button}>Secure Your Strategy <ArrowRight size={18} style={{ marginLeft: '8px' }} /></button>
  </section>
);

const Services = () => (
  <section id="services" style={styles.section}>
    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Our Core Competencies</h2>
    <div style={styles.grid}>
      <div style={styles.card}>
        <Shield size={40} color="#c5a059" style={{ marginBottom: '20px' }} />
        <h3>Permit Strategy</h3>
        <p>Expert navigation of the Coastal Zone and County planning requirements.</p>
      </div>
      <div style={styles.card}>
        <Scale size={40} color="#c5a059" style={{ marginBottom: '20px' }} />
        <h3>Capital Alignment</h3>
        <p>Ensuring development projects match financial and regulatory timelines.</p>
      </div>
      <div style={styles.card}>
        <MapPin size={40} color="#c5a059" style={{ marginBottom: '20px' }} />
        <h3>Land Use Strategy</h3>
        <p>Comprehensive modeling for architects, contractors, and owners.</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ backgroundColor: '#f9f9f9', padding: '40px 20px', textAlign: 'center' as const, borderTop: '1px solid #eee' }}>
    <p>© 2026 Black Oak Land and Capital. All Rights Reserved.</p>
    <p style={{ color: '#666', fontSize: '0.9rem' }}>Santa Barbara | Montecito | Santa Ynez Valley</p>
  </footer>
);

// --- MAIN PAGE LOGIC ---
const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Black Oak Land and Capital | Santa Barbara Permitting</title>
        <meta name="description" content="Expert land use consulting and permit strategy for Santa Barbara County." />
      </Helmet>
      
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navigation />
        <Hero />
        <Services />
        <section style={{...styles.section, textAlign: 'center'}}>
           <h2>Ready to Begin?</h2>
           <p>Contact us at (805) 555-1234 or email info@blackoakland.com</p>
        </section>
        <div style={{ flex: 1 }}></div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

// --- THE IGNITION COMMAND ---
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>
  );
}
