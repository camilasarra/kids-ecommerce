import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletters with special offers and updates.",
    });
  };

  return (
    <section className="py-16 bg-scandi-beige">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-4">Join Our Community</h2>
          <p className="text-scandi-charcoal/80 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for exclusive deals, new arrivals, 
            and thoughtful parenting tips from our community.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              required
              placeholder="Your email address" 
              className="flex-1 bg-white"
            />
            <Button type="submit" className="btn-scandi whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-scandi-gray mt-4">
            By subscribing, you agree to our privacy policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;