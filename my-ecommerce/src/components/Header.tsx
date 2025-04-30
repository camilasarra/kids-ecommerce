import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { cn } from "/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white bg-opacity-95 backdrop-blur-sm border-b">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-display font-medium">
            Tiny Scandi
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm hover:text-primary transition-colors">
              SHOP
            </Link>
            <Link to="/collections" className="text-sm hover:text-primary transition-colors">
              COLLECTIONS
            </Link>
            <Link to="/about" className="text-sm hover:text-primary transition-colors">
              ABOUT
            </Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart size={20} />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className={cn(
          "py-4 transition-all duration-300 overflow-hidden",
          isSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full pr-10"
              autoFocus={isSearchOpen}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col space-y-4 py-4">
            <Link to="/shop" className="hover:text-primary transition-colors">
              SHOP
            </Link>
            <Link to="/collections" className="hover:text-primary transition-colors">
              COLLECTIONS
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              ABOUT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;