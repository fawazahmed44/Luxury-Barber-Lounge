import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { FullServicePage } from './pages/FullServicePage';
import { FadesPage } from './pages/FadesPage';
import { HotTowelShavePage } from './pages/HotTowelShavePage';
import { HairCutBeardPage } from './pages/HairCutBeardPage';
import { GodfatherCutPage } from './pages/GodfatherCutPage';
import { InHomePage } from './pages/InHomePage';
import { HairColorPage } from './pages/HairColorPage';

import { AboutPage } from './pages/AboutPage';
import { BarbersPage } from './pages/BarbersPage';
import { HiringPage } from './pages/HiringPage';
import { BecomeBarberPage } from './pages/BecomeBarberPage';
import { GalleryPage } from './pages/GalleryPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ContactPage } from './pages/ContactPage';
import { BookPage } from './pages/BookPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { ContractorAgreementPage } from './pages/ContractorAgreementPage';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#0c0d0e] text-[#f4f2ee] selection:bg-[#c5a880] selection:text-[#0c0d0e]">
          <Navbar />
          <CartDrawer />

          <main className="flex-grow">
            <Routes>
              {/* Core Landing & Overview */}
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />

              {/* Dedicated Real Service Routes */}
              <Route path="/services/full-service-hair-cuts" element={<FullServicePage />} />
              <Route path="/services/fades-hair-cuts" element={<FadesPage />} />
              <Route path="/services/hot-towel-shave" element={<HotTowelShavePage />} />
              <Route path="/services/hair-cut-beard" element={<HairCutBeardPage />} />
              <Route path="/services/godfather-cut" element={<GodfatherCutPage />} />
              <Route path="/services/in-home-hair-service" element={<InHomePage />} />
              <Route path="/services/hair-color" element={<HairColorPage />} />

              {/* About & Studio Brand */}
              <Route path="/about" element={<AboutPage />} />

              {/* Barbers & Careers */}
              <Route path="/barbers" element={<BarbersPage />} />
              <Route path="/hiring" element={<HiringPage />} />
              <Route path="/become-a-barber" element={<BecomeBarberPage />} />

              {/* Visual Gallery */}
              <Route path="/gallery" element={<GalleryPage />} />

              {/* Products & Details */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productSlug" element={<ProductDetailPage />} />

              {/* Booking Flow */}
              <Route path="/book" element={<BookPage />} />

              {/* Contact & Hours */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Service Areas */}
              <Route path="/areas" element={<ServiceAreasPage />} />
              <Route path="/areas/:areaSlug" element={<ServiceAreasPage />} />

              {/* Policies & Contractor Agreement */}
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/contractor-agreement" element={<ContractorAgreementPage />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
