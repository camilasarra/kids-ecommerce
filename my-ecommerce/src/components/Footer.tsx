import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-scandi-beige py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">Tiny Scandi</h3>
            <p className="text-sm mb-4 text-scandi-charcoal">
              Handmade scandinavian clothes and accessories for your little ones.
              Quality craftsmanship and sustainable materials.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop/clothing" className="text-sm hover:underline">Clothing</Link></li>
              <li><Link to="/shop/accessories" className="text-sm hover:underline">Accessories</Link></li>
              <li><Link to="/shop/gifts" className="text-sm hover:underline">Gifts</Link></li>
              <li><Link to="/shop/sale" className="text-sm hover:underline">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:underline">About Us</Link></li>
              <li><Link to="/sustainability" className="text-sm hover:underline">Sustainability</Link></li>
              <li><Link to="/shipping" className="text-sm hover:underline">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-sm mb-2">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 border border-r-0 border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-scandi-charcoal text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-scandi-gray/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-scandi-gray mb-4 md:mb-0">
            © {currentYear} Tiny Scandi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-xs text-scandi-gray hover:underline">Terms & Conditions</Link>
            <Link to="/privacy" className="text-xs text-scandi-gray hover:underline">Privacy Policy</Link>
            <Link to="/cookies" className="text-xs text-scandi-gray hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
