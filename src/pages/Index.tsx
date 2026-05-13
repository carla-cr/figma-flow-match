
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const Index = () => {
  const speakers = [
    { name: "Mariana Menchero", company: "Nixtla", avatar: "MM", image: "/lovable-uploads/b62b47fc-fb23-405c-98e8-8e14121ec591.png" },
    { name: "Yibei Hu", company: "Nixtla", avatar: "YH", image: "/lovable-uploads/bc04d95d-c3c9-42ae-8242-04fac7216865.png" },
    { name: "Ying Fry", company: "International Institute of Forecasters", avatar: "YF", image: "/lovable-uploads/ying-fry.png" },
    { name: "Anna Sroginis", company: "Lancaster University", avatar: "AS", image: "" },
    { name: "Yeasmin Khandakar", company: "Monash University", avatar: "YK", image: "" },
    { name: "Charupriya Sharma", company: "Amazon", avatar: "CS", image: "" },
    { name: "Xinyu (Rachel) Li", company: "Carnegie Mellon University", avatar: "XL", image: "" },
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

  const scrollToForm = () => {
    const formElement = document.getElementById('hubspot-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-violet-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/01369b9f-6dca-4a39-9faf-7293038d1408.png" 
            alt="WIF Logo" 
            className="h-8"
          />
        </div>
        <div className="flex items-center space-x-3">
          <img
            src="/lovable-uploads/nixtla-logo.svg"
            alt="Nixtla Logo"
            className="h-6 object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-normal mb-6 text-purple-950">
            Welcoming <span className="text-purple-700">Women in</span>
            <br />
            <span className="text-purple-700">Forecasting</span> all over the world
          </h1>
          
          <div className="bg-white rounded-lg p-6 mb-8 max-w-2xl mx-auto shadow-sm">
            <p className="text-lg text-gray-700 mb-4">
              Women working in the forecasting sphere come together to share
              insights, experiences, and the latest trends in the industry.
            </p>
            <p className="text-purple-700 font-semibold text-lg">
              June 25, 2025 8AM PT
            </p>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="text-center mb-8 max-w-2xl mx-auto" id="hubspot-form">
          <h2 className="text-2xl font-bold text-purple-700 mb-2">
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
          <h2 className="text-4xl font-bold text-purple-950 mb-12">Speakers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm mx-auto mb-3 w-48 h-40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-purple-200 flex items-center justify-center text-purple-800 font-semibold text-lg">
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>{speaker.avatar}</span>
                    )}
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
            onClick={scrollToForm}
          >
            Register now!
          </Button>
          
          <p className="text-sm text-gray-500">Powered By Nixtla</p>

          <div className="mt-10 flex flex-col items-center space-y-3">
            <span className="text-sm text-purple-900/80 font-medium">In partnership with</span>
            <img
              src="/lovable-uploads/iif-logo.png"
              alt="International Institute of Forecasters"
              className="h-16 object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
