
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Features />
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in opacity-0">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="Sustainable materials" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="animate-fade-in [animation-delay:0.2s] opacity-0">
              <h2 className="text-3xl mb-4">Crafted with Love and Sustainability</h2>
              <p className="text-scandi-charcoal/80 mb-4">
                We believe in creating beautiful pieces that are kind to both your child and the planet. 
                Each item in our collection is thoughtfully designed and crafted using sustainable materials 
                like organic cotton, natural linen, and responsibly sourced wood.
              </p>
              <p className="text-scandi-charcoal/80 mb-6">
                Our commitment to quality ensures that these treasured items can be passed down 
                through siblings or saved as keepsakes for generations to come.
              </p>
              <a href="/about" className="btn-scandi-outline inline-block">Learn More About Our Values</a>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default Index;