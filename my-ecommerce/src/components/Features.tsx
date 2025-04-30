import { Baby, PackageCheck, Recycle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Baby size={32} className="text-scandi-charcoal" />,
      title: "Kid-Friendly Materials",
      description: "Safe, non-toxic, and gentle on sensitive skin. We select only the best materials for your little ones."
    },
    {
      icon: <Recycle size={32} className="text-scandi-charcoal" />,
      title: "Sustainably Made",
      description: "Ethically crafted with eco-friendly materials and processes that respect our planet."
    },
    {
      icon: <PackageCheck size={32} className="text-scandi-charcoal" />,
      title: "Built to Last",
      description: "Quality craftsmanship ensures our products withstand playtime and can be passed down."
    }
  ];
  
  return (
    <section className="py-16 bg-scandi-softGreen/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg text-center flex flex-col items-center animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-scandi-softBlue/30 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-scandi-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;