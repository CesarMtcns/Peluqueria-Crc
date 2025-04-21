
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import BusinessHours from '@/components/BusinessHours';
import Location from '@/components/Location';
import Appointment from '@/components/Appointment';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-salon-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <BusinessHours />
        <Location />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
