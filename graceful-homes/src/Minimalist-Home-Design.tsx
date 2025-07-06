// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Dialog, DialogContent } from "../../components/ui/dialog";
import livingRoomImage from './assets/Living.jpg';
import bedRoomImage from './assets/Bedroom.jpg';
import kitchenImage from './assets/Kitchen.jpg';
import bathroomImage from './assets/Bathroom.jpg';
import livingGallery1 from './assets/Living Gallery/WhatsApp Image 2025-06-28 at 12.14.46.jpeg';
import livingGallery2 from './assets/Living Gallery/WhatsApp Image 2025-06-28 at 12.14.47.jpeg';
import livingGallery3 from './assets/Living Gallery/WhatsApp Image 2025-06-28 at 12.14.48.jpeg';

const App: React.FC = () => {
const [showGallery, setShowGallery] = useState(false);
const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
const handleRoomClick = (roomTitle: string) => {
setSelectedRoom(roomTitle);
setShowGallery(true);
};
// Room data with image prompts
const rooms = [
{
title: "Living Room",
imageUrl: livingRoomImage,
galleryImages: [livingGallery1, livingGallery2, livingGallery3],
},
{
title: "Bed Room",
imageUrl: bedRoomImage,
galleryImages: [],
},
{
title: "Kitchen",
imageUrl: kitchenImage,
galleryImages: [],
},
{
title: "Bathroom",
imageUrl: bathroomImage,
galleryImages: [],
},
];

const selectedRoomData = rooms.find(room => room.title === selectedRoom);

return (
<div className="min-h-screen bg-[#FAFAFA] font-sans">
{/* Header with hero section */}
<header className="relative h-[600px] w-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"></div>
<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundColor: `#F0EBE5`,
opacity: 0.9
}}
></div>
<div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
<div className="max-w-xl">
<h1 className="font-serif text-5xl md:text-6xl font-bold text-[#4A4A4A] mb-4 animate-fade-in">
Graceful Homes
</h1>
<p className="text-xl md:text-2xl text-[#4A4A4A] font-light mb-8 animate-fade-in-delay">
Choose the best design for your home
</p>
<Button className="bg-[#C0A080] hover:bg-[#B09070] text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
Explore Designs
</Button>
</div>
</div>
</header>
{/* Main content */}
<main className="container mx-auto px-6 py-16">
<section className="mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-[#4A4A4A] text-center mb-4">
Our Design Categories
</h2>
<p className="text-center text-[#6A6A6A] max-w-2xl mx-auto mb-12">
Explore our curated collection of interior designs for every room in your home. Each space is thoughtfully crafted to blend elegance with functionality.
</p>
<div className="w-full flex justify-center">
  <div className="grid grid-cols-2 gap-4">
    {rooms.map((room, index) => (
      <Card
        key={index}
        className="group relative w-[3in] h-[2in] overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
        onClick={() => handleRoomClick(room.title)}
      >
        <img
          src={room.imageUrl}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 group-hover:bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h3 className="font-serif text-lg text-white font-medium tracking-wide transition-all duration-300 group-hover:scale-110 group-hover:text-[#FAFAFA]">
            {room.title}
          </h3>
        </div>
      </Card>
    ))}
  </div>
</div>
</section>
<section className="mb-16">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<h2 className="font-serif text-3xl md:text-4xl text-[#4A4A4A] mb-6">
Why Choose Graceful Homes
</h2>
<p className="text-[#6A6A6A] mb-6">
At Graceful Homes, we believe that your living space should be a reflection of your personality and lifestyle. Our designs combine aesthetics with functionality to create spaces that are both beautiful and practical.
</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<i className="fas fa-check text-[#C0A080] mt-1 mr-3"></i>
<span className="text-[#6A6A6A]">Personalized design consultations</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-[#C0A080] mt-1 mr-3"></i>
<span className="text-[#6A6A6A]">High-quality materials and craftsmanship</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-[#C0A080] mt-1 mr-3"></i>
<span className="text-[#6A6A6A]">Sustainable and eco-friendly options</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-[#C0A080] mt-1 mr-3"></i>
<span className="text-[#6A6A6A]">Timely project completion and installation</span>
</li>
</ul>
<Button className="bg-[#C0A080] hover:bg-[#B09070] text-white px-6 py-2 !rounded-button whitespace-nowrap cursor-pointer">
Learn More
</Button>
</div>
<div className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden">
</div>
</div>
</section>
<section className="mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-[#4A4A4A] text-center mb-12">
Our Process
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-16 h-16 bg-[#C0A080]/10 rounded-full flex items-center justify-center mb-6">
<i className="fas fa-pencil-ruler text-[#C0A080] text-2xl"></i>
</div>
<h3 className="font-serif text-xl text-[#4A4A4A] mb-4">Design Consultation</h3>
<p className="text-[#6A6A6A]">
We begin with understanding your vision, preferences, and requirements through an in-depth consultation with our design experts.
</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-16 h-16 bg-[#C0A080]/10 rounded-full flex items-center justify-center mb-6">
<i className="fas fa-drafting-compass text-[#C0A080] text-2xl"></i>
</div>
<h3 className="font-serif text-xl text-[#4A4A4A] mb-4">Concept Development</h3>
<p className="text-[#6A6A6A]">
Our designers create detailed concepts and mood boards that align with your aesthetic preferences and functional needs.
</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-16 h-16 bg-[#C0A080]/10 rounded-full flex items-center justify-center mb-6">
<i className="fas fa-home text-[#C0A080] text-2xl"></i>
</div>
<h3 className="font-serif text-xl text-[#4A4A4A] mb-4">Implementation</h3>
<p className="text-[#6A6A6A]">
We handle everything from sourcing materials to installation, ensuring a seamless transformation of your space into the home of your dreams.
</p>
</div>
</div>
</section>
<section>
<div className="bg-[#F0EBE5] rounded-lg p-10 md:p-16">
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-serif text-3xl md:text-4xl text-[#4A4A4A] mb-6">
Ready to Transform Your Space?
</h2>
<p className="text-[#6A6A6A] mb-8">
Schedule a consultation with our design experts and take the first step toward creating your dream home.
</p>
<Button className="bg-[#C0A080] hover:bg-[#B09070] text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
Book a Consultation
</Button>
</div>
</div>
</section>
</main>
<footer className="bg-[#4A4A4A] text-white py-12">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div>
<h3 className="font-serif text-xl mb-4">Graceful Homes</h3>
<p className="text-gray-300 text-sm">
Creating beautiful, functional spaces that reflect your unique style and personality.
</p>
</div>
<div>
<h4 className="font-medium mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Services</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Portfolio</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Testimonials</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Contact</h4>
<ul className="space-y-2 text-gray-300">
<li className="flex items-start">
<i className="fas fa-map-marker-alt mt-1 mr-3"></i>
<span>123 Design Street, Creative City</span>
</li>
<li className="flex items-start">
<i className="fas fa-phone mt-1 mr-3"></i>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-start">
<i className="fas fa-envelope mt-1 mr-3"></i>
<span>info@gracefulhomes.com</span>
</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Follow Us</h4>
<div className="flex space-x-4">
<a href="#" className="w-10 h-10 rounded-full bg-[#C0A080] flex items-center justify-center hover:bg-[#B09070] transition-colors cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-[#C0A080] flex items-center justify-center hover:bg-[#B09070] transition-colors cursor-pointer">
<i className="fab fa-pinterest"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-[#C0A080] flex items-center justify-center hover:bg-[#B09070] transition-colors cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-[#C0A080] flex items-center justify-center hover:bg-[#B09070] transition-colors cursor-pointer">
<i className="fab fa-houzz"></i>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
<p>© 2025 Graceful Homes. All rights reserved.</p>
</div>
</div>
</footer>
{/* Gallery Modal */}
<Dialog open={showGallery} onOpenChange={setShowGallery}>
<DialogContent className="max-w-4xl">
<div className="p-6">
<h2 className="font-serif text-2xl text-[#4A4A4A] mb-6">{selectedRoom}</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto p-1">
{selectedRoomData?.galleryImages && selectedRoomData.galleryImages.length > 0 ? (
            selectedRoomData.galleryImages.map((image, index) => (
<div key={index} className="relative aspect-video">
<img
                  src={image}
                  alt={`${selectedRoom} gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
</div>
            ))
          ) : (
<p>No gallery images available for this room.</p>
          )}
</div>
</div>
</DialogContent>
</Dialog>
</div>
);
}
export default App
