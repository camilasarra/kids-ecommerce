import { useState } from "react";
import { Minus, Plus, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "/components/ui/input";
import { Checkbox } from "/components/ui/checkbox";
import { Label } from "/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "/components/ui/sheet";
import { PRODUCTS } from "/data/products";
import ProductCard from "/components/ProductCard";

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState<Record<string, boolean>>({
    categories: true,
    price: true,
    special: true
  });
  
  const categories = [...new Set(PRODUCTS.map(p => p.category))];
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const toggleExpandFilter = (section: string) => {
    setExpandedFilters({
      ...expandedFilters,
      [section]: !expandedFilters[section]
    });
  };
  
  const filteredProducts = PRODUCTS.filter(product => {
    // Filter by search query
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    
    // Filter by price
    const price = product.salePrice || product.price;
    if (price < priceRange[0] || price > priceRange[1]) {
      return false;
    }
    
    // Filter by new
    if (showNewOnly && !product.isNew) {
      return false;
    }
    
    // Filter by sale
    if (showSaleOnly && !product.isSale) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-medium mb-2">Shop</h1>
      <p className="text-muted-foreground mb-8">Browse our collection of scandinavian kids' clothing and accessories</p>
      
      {/* Mobile filters */}
      <div className="mb-6 flex items-center justify-between md:hidden">
        <div className="relative w-full mr-2">
          <Input 
            type="text" 
            placeholder="Search products..." 
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <SlidersHorizontal size={16} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              {/* Mobile category filter */}
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox 
                        id={`category-mobile-${category}`} 
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <Label 
                        htmlFor={`category-mobile-${category}`} 
                        className="ml-2 cursor-pointer"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mobile price filter */}
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <div className="flex items-center justify-between mb-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Mobile special filters */}
              <div>
                <h3 className="font-medium mb-3">Special</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox 
                      id="new-only-mobile" 
                      checked={showNewOnly}
                      onCheckedChange={() => setShowNewOnly(!showNewOnly)}
                    />
                    <Label 
                      htmlFor="new-only-mobile" 
                      className="ml-2 cursor-pointer"
                    >
                      New Arrivals
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="sale-only-mobile" 
                      checked={showSaleOnly}
                      onCheckedChange={() => setShowSaleOnly(!showSaleOnly)}
                    />
                    <Label 
                      htmlFor="sale-only-mobile" 
                      className="ml-2 cursor-pointer"
                    >
                      On Sale
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Desktop filters sidebar */}
        <div className="hidden md:block">
          {/* Search filter */}
          <div className="relative mb-8">
            <Input 
              type="text" 
              placeholder="Search products..." 
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          </div>
          
          {/* Category filter */}
          <div className="mb-6">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleExpandFilter('categories')}
            >
              <h3 className="font-medium">Categories</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                {expandedFilters.categories ? <Minus size={16} /> : <Plus size={16} />}
              </Button>
            </div>
            {expandedFilters.categories && (
              <div className="space-y-2 mt-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox 
                      id={`category-${category}`} 
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <Label 
                      htmlFor={`category-${category}`} 
                      className="ml-2 cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Price filter */}
          <div className="mb-6">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleExpandFilter('price')}
            >
              <h3 className="font-medium">Price Range</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                {expandedFilters.price ? <Minus size={16} /> : <Plus size={16} />}
              </Button>
            </div>
            {expandedFilters.price && (
              <div className="px-2 mt-3">
                <div className="flex items-center justify-between mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            )}
          </div>
          
          {/* Special filters */}
          <div className="mb-6">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleExpandFilter('special')}
            >
              <h3 className="font-medium">Special</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                {expandedFilters.special ? <Minus size={16} /> : <Plus size={16} />}
              </Button>
            </div>
            {expandedFilters.special && (
              <div className="space-y-2 mt-3">
                <div className="flex items-center">
                  <Checkbox 
                    id="new-only" 
                    checked={showNewOnly}
                    onCheckedChange={() => setShowNewOnly(!showNewOnly)}
                  />
                  <Label 
                    htmlFor="new-only" 
                    className="ml-2 cursor-pointer"
                  >
                    New Arrivals
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox 
                    id="sale-only" 
                    checked={showSaleOnly}
                    onCheckedChange={() => setShowSaleOnly(!showSaleOnly)}
                  />
                  <Label 
                    htmlFor="sale-only" 
                    className="ml-2 cursor-pointer"
                  >
                    On Sale
                  </Label>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Products grid */}
        <div className="md:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategories([]);
                  setPriceRange([0, 100]);
                  setShowNewOnly(false);
                  setShowSaleOnly(false);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;