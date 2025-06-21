
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Policies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Policies</h1>
          <p className="text-xl text-slate-600">Important information about our policies and terms</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <Tabs defaultValue="privacy" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="shipping">Shipping Policy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="privacy" className="mt-6">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Privacy Policy</h2>
                <p className="text-slate-600 mb-4">Last updated: December 2024</p>
                
                <h3 className="text-lg font-medium mb-3 text-slate-800">Information We Collect</h3>
                <p className="text-slate-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support.
                </p>
                
                <h3 className="text-lg font-medium mb-3 text-slate-800">How We Use Your Information</h3>
                <p className="text-slate-600 mb-4">
                  We use the information we collect to provide, maintain, and improve our services, 
                  process transactions, and communicate with you.
                </p>
                
                <h3 className="text-lg font-medium mb-3 text-slate-800">Information Sharing</h3>
                <p className="text-slate-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="terms" className="mt-6">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Terms of Service</h2>
                <p className="text-slate-600 mb-4">Last updated: December 2024</p>
                
                <h3 className="text-lg font-medium mb-3 text-slate-800">Acceptance of Terms</h3>
                <p className="text-slate-600 mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
                
                <h3 className="text-lg font-medium mb-3 text-slate-800">Use License</h3>
                <p className="text-slate-600 mb-4">
                  Permission is granted to temporarily download one copy of the materials on EliteStore's 
                  website for personal, non-commercial transitory viewing only.
                </p>
                
                <h3 className="text-lg font-medium mb-3 text-slate-800">Disclaimer</h3>
                <p className="text-slate-600 mb-4">
                  The materials on EliteStore's website are provided on an 'as is' basis. EliteStore 
                  makes no warranties, expressed or implied.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Shipping Policy</h2>
                <p className="text-slate-600 mb-4">Last updated: December 2024</p>
                
                <h3 className="text-lg font-medium mb-3 text-slate-800">Shipping Methods</h3>
                <ul className="text-slate-600 mb-4 list-disc list-inside">
                  <li>Standard Shipping (3-5 business days)</li>
                  <li>Express Shipping (1-2 business days)</li>
                  <li>Overnight Shipping (next business day)</li>
                </ul>
                
                <h3 className="text-lg font-medium mb-3 text-slate-800">Shipping Costs</h3>
                <p className="text-slate-600 mb-4">
                  Shipping costs are calculated based on the weight and destination of your order. 
                  Free shipping is available on orders over $100.
                </p>
                
                <h3 className="text-lg font-medium mb-3 text-slate-800">International Shipping</h3>
                <p className="text-slate-600 mb-4">
                  We ship to most countries worldwide. International shipping times and costs vary 
                  by destination. Customers are responsible for any customs duties or taxes.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Policies;