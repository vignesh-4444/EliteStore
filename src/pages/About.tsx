
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">About EliteStore</h1>
          <p className="text-xl text-slate-600">Your trusted partner for premium products and exceptional service</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">Our Story</h2>
            <p className="text-slate-600 mb-4">
              Founded in 2020, EliteStore began with a simple mission: to make premium, 
              high-quality products accessible to everyone. We believe that great design 
              and exceptional craftsmanship shouldn't be a luxury reserved for the few.
            </p>
            <p className="text-slate-600">
              Today, we're proud to serve thousands of customers worldwide, offering 
              carefully curated products that enhance everyday life through thoughtful 
              design and superior quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Our Mission</h3>
              <p className="text-slate-600">
                To provide exceptional products and service that exceed our customers' 
                expectations while building lasting relationships based on trust and quality.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Our Vision</h3>
              <p className="text-slate-600">
                To become the world's most trusted destination for premium lifestyle 
                products, setting new standards for quality and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-800">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-slate-800">Quality First</h4>
                <p className="text-slate-600 text-sm">
                  We never compromise on quality, ensuring every product meets our high standards.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-slate-800">Customer Focus</h4>
                <p className="text-slate-600 text-sm">
                  Our customers are at the heart of everything we do.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-slate-800">Innovation</h4>
                <p className="text-slate-600 text-sm">
                  We continuously evolve to bring you the latest and best products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;