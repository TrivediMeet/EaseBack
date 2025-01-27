import Feature from './feature';

const features = [
  {
    title: "Seamless Integration",
    description: "Easily integrate with your existing tools and services."
  },
  {
    title: "Customizable",
    description: "Customize Nexx to fit your needs and preferences."
  },
  {
    title: "Analytics",
    description: "Track and analyze feedback to make informed decisions."
  },
  {
    title: "Secure",
    description: "Your data is safe and secure with Nexx."
  },
  {
    title: "Scalable",
    description: "Grow your business with Nexx as you scale."
  },
  {
    title: "Fast Support",
    description: "Get help when you need it with our fast support team."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <Feature 
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;