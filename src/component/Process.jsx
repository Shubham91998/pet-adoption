import React from 'react';

const Process = () => {
  const steps = [
    {
      title: "1. Application Submission",
      description: "Fill out our online application form to express your interest in adopting a pet. Provide details about your living situation and preferences."
    },
    {
      title: "2. Initial Review",
      description: "Our team will review your application to ensure it meets our basic requirements for pet adoption."
    },
    {
      title: "3. Home Visit/Check",
      description: "We will schedule a home visit to assess your living environment and discuss pet ownership responsibilities."
    },
    {
      title: "4. Meet-and-Greet",
      description: "Meet the pet you are interested in adopting. This is a great opportunity to see if you and the pet are a good match."
    },
    {
      title: "5. Reference Checks",
      description: "We will contact your references to learn more about your suitability as a pet owner."
    },
    {
      title: "6. Adoption Agreement",
      description: "Sign an adoption agreement that outlines your responsibilities as a pet owner."
    },
    {
      title: "7. Adoption Fee Payment",
      description: "Pay the adoption fee, which helps cover the pet's medical expenses and care."
    },
    {
      title: "8. Post-Adoption Support",
      description: "Receive resources and support for your new pet, including training tips and veterinary contacts."
    },
    {
      title: "9. Follow-Up",
      description: "We will check in with you after adoption to ensure a smooth transition for you and your new pet."
    },
    {
      title: "10. Community Engagement",
      description: "Join our community events and workshops to learn more about responsible pet ownership and share your success stories."
    }
  ];

  return (
    <>
    <div className="container mx-auto  p-6 bg-white shadow-md rounded-lg my-28">
      <h1 className="text-3xl font-bold text-center mb-6">Adoption Process</h1>
      <div className='py-5'>
        <h2 className="text-xl font-semibold">Current Status of Application :</h2>
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg">
            <h2 className="text-xl font-semibold">{step.title}</h2>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Process;