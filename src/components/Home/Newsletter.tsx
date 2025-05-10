import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd normally send this to your backend or newsletter service
    console.log('Submitted email:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the submission state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join the Fan Club</h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to get early access to tickets, exclusive content, and updates on new shows and podcast episodes.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300 font-medium"
              >
                Subscribe
              </button>
            </div>
            
            {isSubmitted && (
              <div className="mt-4 text-green-400 text-sm">
                Thanks for subscribing! Check your email for confirmation.
              </div>
            )}
            
            <p className="mt-4 text-gray-500 text-sm">
              I promise not to spam. You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;