import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/components/ui/tabs";
import { PRODUCTS } from "/data/products";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredProducts = activeTab === "all" 
    ? PRODUCTS.slice(0, 8) 
    : PRODUCTS.filter(product => product.category.toLowerCase() === activeTab).slice(0, 8);
  
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-center mb-4">Discover Our Collection</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Timeless pieces crafted with care for your little ones. Our collection blends 
          Scandinavian simplicity with playful elements and sustainable materials.
        </p>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-scandi-cream">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="clothing">Clothing</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
              <TabsTrigger value="toys">Toys</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="animate-fade-in opacity-0" style={{ animationDelay: `${parseInt(product.id) * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="clothing" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="animate-fade-in opacity-0" style={{ animationDelay: `${parseInt(product.id) * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="accessories" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="animate-fade-in opacity-0" style={{ animationDelay: `${parseInt(product.id) * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="toys" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="animate-fade-in opacity-0" style={{ animationDelay: `${parseInt(product.id) * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="btn-scandi-outline">
            <a href="/shop">View All Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;