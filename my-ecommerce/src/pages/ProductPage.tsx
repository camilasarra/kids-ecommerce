import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "/components/ui/button";
import { useToast } from "/components/ui/use-toast";
import { PRODUCTS } from "/data/products";
import FeaturedProducts from "@/components/FeaturedProducts";

const ProductPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const product = PRODUCTS.find(p => p.id === id);
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl mb-4">Product not found</h1>
        <p className="mb-6">The product you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}, ${selectedColor}) has been added to your cart`,
    });
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
    });
  };

  return (
    <>
      <div className="container py-10">
        <Link to="/shop" className="inline-flex items-center text-sm text-scandi-charcoal mb-8 hover:underline">
          <ChevronLeft size={16} className="mr-1" /> Back to Shopping
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-[3/4] bg-scandi-cream rounded-lg overflow-hidden mb-4">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-accent' : 'border-transparent hover:border-gray-200'}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-2">
              {product.isNew && (
                <span className="bg-scandi-softGreen text-xs px-2 py-1 rounded">New</span>
              )}
              {product.isSale && (
                <span className="bg-scandi-softPink text-xs px-2 py-1 rounded">Sale</span>
              )}
            </div>
            
            {/* Basic Info */}
            <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-500 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#EAB308" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(24 reviews)</span>
            </div>
            
            <div className="flex items-center mb-6">
              {product.isSale && product.salePrice ? (
                <>
                  <span className="text-2xl font-medium">${product.salePrice.toFixed(2)}</span>
                  <span className="text-muted-foreground line-through ml-2">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-scandi-charcoal mb-8">{product.description}</p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'ring-2 ring-accent ring-offset-2' : ''}`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${color}`}
                  ></button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 border rounded-md text-sm ${
                      selectedSize === size 
                        ? 'bg-scandi-charcoal text-white border-scandi-charcoal' 
                        : 'bg-white text-scandi-charcoal border-gray-200 hover:border-scandi-charcoal'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex items-center border border-gray-200 w-32 rounded-md">
                <button 
                  className="w-10 h-10 flex items-center justify-center text-lg"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <div className="flex-1 text-center">{quantity}</div>
                <button 
                  className="w-10 h-10 flex items-center justify-center text-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart and Wishlist */}
            <div className="flex flex-wrap gap-4">
              <Button 
                className="flex-1 bg-scandi-charcoal hover:bg-scandi-charcoal/90"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} className="mr-2" /> Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-scandi-charcoal text-scandi-charcoal hover:bg-scandi-charcoal hover:text-white"
                onClick={handleAddToWishlist}
              >
                <Heart size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="border-t border-b py-12 mt-12">
        <div className="container">
          <h2 className="text-2xl mb-6">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3">Material</h3>
              <p className="text-scandi-gray">100% organic cotton, certified by GOTS</p>
            </div>
            <div>
              <h3 className="font-medium mb-3">Care Instructions</h3>
              <p className="text-scandi-gray">Machine wash cold, gentle cycle. Tumble dry low.</p>
            </div>
            <div>
              <h3 className="font-medium mb-3">Shipping & Returns</h3>
              <p className="text-scandi-gray">Free shipping on orders over $75. Easy returns within 30 days.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* You May Also Like Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {PRODUCTS.filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct, index) => (
                <div key={relatedProduct.id} className="animate-fade-in opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link to={`/product/${relatedProduct.id}`} className="group block">
                    <div className="aspect-[3/4] bg-scandi-cream rounded-lg overflow-hidden mb-3">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    <h3 className="font-medium">{relatedProduct.name}</h3>
                    <div className="flex items-center mt-1">
                      {relatedProduct.isSale && relatedProduct.salePrice ? (
                        <>
                          <span className="font-medium">${relatedProduct.salePrice.toFixed(2)}</span>
                          <span className="text-muted-foreground line-through ml-2 text-sm">${relatedProduct.price.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className="font-medium">${relatedProduct.price.toFixed(2)}</span>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;