import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Have a question, booking inquiry, or just want to say hello? Use the form below or reach out via email.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;