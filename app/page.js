// app/page.js

// name: Zoya Siddiqui
// utorid: sidd1133
// student number: 1008888312

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden relative px-4 py-8">
      {/* Header Navigation */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex space-x-8">
          <div className="text-[#eaecd7] text-lg md:text-2xl font-bold font-['Inknut_Antiqua']">About</div>
          <div className="text-[#eaecd7] text-lg md:text-2xl font-bold font-['Inknut_Antiqua']">Buy Beanz</div>
          <div className="text-[#eaecd7] text-lg md:text-2xl font-bold font-['Inknut_Antiqua']">Locations</div>
        </div>
        
        <button className="bg-[#eaecd7] rounded-full px-6 py-2">
          <span className="text-[#db4439] text-base font-black font-['Inknut_Antiqua']">Login</span>
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-24 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-7xl lg:text-[110px] text-[#eaecd7] font-black font-['Inknut_Antiqua'] leading-tight">
            Red Beanz
          </h1>
          <p className="text-2xl md:text-3xl lg:text-[40px] text-[#eaecd7] font-semibold font-['Inknut_Antiqua'] mt-6">
            the coolest coffee in town
          </p>
        </div>
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="bg-[#d9d9d9] w-full max-w-lg mx-auto aspect-[543/590] relative transform -rotate-6">
            <img 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://i.pinimg.com/474x/45/37/07/453707cebd904406fa5e26ca7ed01745.jpg" 
              alt="Coffee product"
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full bg-white py-6 mt-16 absolute bottom-0 left-0">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between px-4">
          <div className="text-[#db4439] text-xl md:text-2xl font-black font-['Inknut_Antiqua'] my-2">Brand New Drinks</div>
          <div className="text-[#db4439] text-xl md:text-2xl font-black font-['Inknut_Antiqua'] my-2">Cool Atmospheres</div>
          <div className="text-[#db4439] text-xl md:text-2xl font-black font-['Inknut_Antiqua'] my-2">Gourmet Grinds</div>
        </div>
      </div>
    </div>
  );
}