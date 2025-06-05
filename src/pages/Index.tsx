
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const Index = () => {
  const speakers = [
    { name: "Azul Garza", company: "Nixtla", avatar: "AG", image: "photo-1649972904349-6e44c42644a7" },
    { name: "Mariana Menchero", company: "Company", avatar: "MM", image: "/lovable-uploads/b62b47fc-fb23-405c-98e8-8e14121ec591.png" },
    { name: "Yibei Hu", company: "Company", avatar: "YH", image: "/lovable-uploads/bc04d95d-c3c9-42ae-8242-04fac7216865.png" },
    { name: "Khuyen Tran", company: "Company", avatar: "KT", image: "photo-1581092795360-fd1ca04f0952" },
    { name: "Laila Ahadi Akhlaghi", company: "Company", avatar: "LA", image: "photo-1649972904349-6e44c42644a7" },
    { name: "Ritika Arora", company: "Company", avatar: "RA", image: "/lovable-uploads/8fd9d7ab-dd0e-4ae7-bb75-51aea87e34d1.png" },
  ];

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/45906594.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="text-2xl text-purple-600">▷ WIF</div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl">✕✕ NIXTLA</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcoming <span className="text-pink-500">Women in</span>
            <br />
            <span className="text-pink-500">Forecasting</span> all over the world
          </h1>
          
          <div className="bg-gradient-to-r from-purple-200 via-pink-100 to-purple-300 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700">
              Women working in the forecasting sphere come together to share
              insights, experiences, and the latest trends in the industry.
            </p>
          </div>
          
          <p className="text-pink-500 font-semibold text-lg">
            June 25, 2025 8AM PT
          </p>
        </div>

        {/* Registration Form Section */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-pink-500 mb-2">
            Empower Your Future at Women in Forecast
          </h2>
          <p className="text-gray-600 mb-6">
            Join a movement of visionaries shaping tomorrow, reserve your spot today!
          </p>
          
          {/* HubSpot Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
            <div className="hs-form-frame" data-region="na1" data-form-id="a0e37df1-e69b-4805-b26d-bb39029f294c" data-portal-id="45906594"></div>
          </div>
        </div>

        {/* Speakers Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Speakers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm mx-auto mb-3 w-48 h-32 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={speaker.image.startsWith('/') ? speaker.image : `https://images.unsplash.com/${speaker.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80`}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800">{speaker.name}</h3>
                <p className="text-sm text-gray-500">{speaker.company}</p>
              </div>
            ))}
          </div>
          
          <Button 
            className="text-white px-8 py-3 rounded-lg mb-8 hover:opacity-90"
            style={{ backgroundColor: '#6A1B9A' }}
          >
            Register now!
          </Button>
          
          <p className="text-sm text-gray-500">Powered By Nixtla</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
