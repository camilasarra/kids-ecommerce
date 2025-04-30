import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { useToast } from "/components/ui/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

const CART_ITEMS: CartItem[] = [
  {
    id: "1",
    name: "Organic Cotton Overall",
    price: 49.99,
    size: "6-12m",
    color: "#D8E2DC",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: "3",
    name: "Wooden Stacking Toy",
    price: 34.99,
    size: "One Size",
    color: "Natural",
    quantity: 2,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1754&q=80"
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(CART_ITEMS);
  const { toast } = useToast();
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart."
    });
  };
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 9.99;
  const total = subtotal + shipping;
  
  if (cartItems.length === 0) {
    return (
      <div className="container py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart size={48} className="mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-2xl font-medium mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button asChild className="btn-scandi">
            <Link to="/shop">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-medium mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div 
                key={item.id}
                className="flex flex-col sm:flex-row border rounded-lg p-4 gap-4 animate-fade-in opacity-0"
              >
                {/* Product Image */}
                <div className="sm:w-24 h-24 bg-scandi-cream rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Product Details */}
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <Link to={`/product/${item.id}`} className="font-medium hover:underline">
                      {item.name}
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-6 w-6 text-muted-foreground"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mt-1">
                    Size: {item.size}
                  </div>
                  
                  <div className="flex items-center mt-1">
                    <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-muted-foreground">
                      {item.color === "Natural" ? "Natural" : ""}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-gray-200 rounded-md">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 rounded-none"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 rounded-none"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </Button>
                    </div>
                    <div className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-scandi-cream rounded-lg p-6">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              
              {shipping > 0 && (
                <div className="text-xs text-muted-foreground">
                  Free shipping on orders over $75
                </div>
              )}
              
              <div className="border-t pt-3 mt-3 flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Button className="w-full mt-6 btn-scandi">
              Proceed to Checkout
            </Button>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Have a promo code?</h3>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Enter code" 
                  className="flex-1 px-3 py-2 border border-r-0 border-gray-300 rounded-l-md focus:outline-none"
                />
                <Button variant="outline" className="rounded-l-none">
                  Apply
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/shop" className="text-scandi-charcoal underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;