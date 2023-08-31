import React, { useEffect, useState } from 'react';
import './mainPage.css';

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 5 seconds
    const delay = 5000; // 5 seconds in milliseconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Navigate to the /account-prompt page
      window.location.href = '/account-prompt';
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return null; // Don't render anything while loading
  }

  return (
    <div className="main-page">
      <div className="h-screen flex items-center justify-center md:w-screen">
        <div className="blur-background">
          <h1 className="text-center text-orange text-9xl font-bold">
            Green<span className="text-primary-green">Mart</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
