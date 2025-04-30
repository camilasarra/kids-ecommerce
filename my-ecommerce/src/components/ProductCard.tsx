import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isSale = false,
  salePrice
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
    });
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to wishlist",
      description: `${name} has been added to your wishlist`,
    });
  };
  
  return (
    <Link to={`/product/${id}`}>
      <div 
        className="group relative rounded-md overflow-hidden transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="aspect-[3/4] overflow-hidden relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-scandi-softGreen text-xs px-2 py-1 rounded">New</span>
            )}
            {isSale && (
              <span className="bg-scandi-softPink text-xs px-2 py-1 rounded">Sale</span>
            )}
          </div>
          
          {/* Actions */}
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-3 flex justify-between gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-xs"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={14} className="mr-1" /> Add to Cart
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="border"
              onClick={handleAddToWishlist}
            >
              <Heart size={14} />
            </Button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="pt-3 pb-1">
          <p className="text-xs text-muted-foreground mb-1">{category}</p>
          <h3 className="font-medium truncate">{name}</h3>
          <div className="flex items-center mt-1">
            {isSale && salePrice ? (
              <>
                <span className="text-scandi-charcoal font-medium">${salePrice.toFixed(2)}</span>
                <span className="text-muted-foreground line-through ml-2 text-sm">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-scandi-charcoal font-medium">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;