
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const speakers = [
    { name: "Azul Garza", company: "Nixtla", avatar: "AG" },
    { name: "Mariana Menchero", company: "Company", avatar: "MM" },
    { name: "Yibei Hu", company: "Company", avatar: "YH" },
    { name: "Khuyen Tran", company: "Company", avatar: "KT" },
    { name: "Laila Ahadi Akhlaghi", company: "Company", avatar: "LA" },
    { name: "Ritika Arora", company: "Company", avatar: "RA" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-purple-600">▷ WIF</div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">✕✕ NIXTLA</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcoming <span className="text-pink-500">Women in</span>
            <br />
            <span className="text-pink-500">Forecasting</span> all over the world
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Women working in the forecasting sphere come together to share
            insights, experiences, and the latest trends in the industry.
          </p>
          
          <p className="text-pink-500 font-semibold text-lg">
            June 25, 2025 8AM PT
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-pink-500 mb-2">
            Empower Your Future at Women in Forecast
          </h2>
          <p className="text-gray-600 mb-8">
            Join a movement of visionaries shaping tomorrow, reserve your spot today!
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name *
                </Label>
                <Input 
                  id="name" 
                  placeholder="full name" 
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email *
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="example@email.com" 
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company (Optional)
              </Label>
              <Input 
                id="company" 
                placeholder="name of the company" 
                className="mt-1"
              />
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">
                By registering, you agree to our{" "}
                <a href="#" className="text-pink-500 underline">Privacy Policy</a>{" "}
                and consent to occasional event updates.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg">
                Confirm my spot!
              </Button>
            </div>
          </form>
        </div>

        {/* Speakers Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Speakers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold text-lg mx-auto mb-3">
                  {speaker.avatar}
                </div>
                <h3 className="font-semibold text-gray-800">{speaker.name}</h3>
                <p className="text-sm text-gray-500">{speaker.company}</p>
              </div>
            ))}
          </div>
          
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg mb-8">
            Register now!
          </Button>
          
          <p className="text-sm text-gray-500">Powered By Nixtla</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
