import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-scandi-cream">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in [animation-delay:0.2s] opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
              Scandinavian Style for Little Adventurers
            </h1>
            <p className="text-lg mb-8 text-scandi-charcoal/80 max-w-md">
              Handcrafted clothing and accessories made with love,
              sustainable materials, and Nordic simplicity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/shop" 
                className="btn-scandi"
              >
                Shop Collection
              </Link>
              <Link 
                to="/about" 
                className="btn-scandi-outline"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in opacity-0">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Kids in scandinavian clothing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-scandi-softYellow opacity-60 -z-10 hidden lg:block"></div>
      <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full bg-scandi-softBlue opacity-60 -z-10 hidden lg:block"></div>
    </div>
  );
};

export default Hero;