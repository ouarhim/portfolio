import React from 'react';

const Section = ({ id, title, subtitle, children }) => {
  return (
    <section 
      id={id} 
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Background gradient shapes will be added here or in specific section components */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-xl mb-8">{subtitle}</p>
        {children}
      </div>
    </section>
  );
};

export default Section; 