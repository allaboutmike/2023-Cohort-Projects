import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Event Registration',
      description:
        'Simplify event registration for both organizers and attendees. Create custom registration forms, collect essential information, and manage RSVPs seamlessly.',
    },
    {
      title: 'Event Analytics',
      description:
        'Gain valuable insights into your event\'s performance with detailed analytics. Track attendee engagement, ticket sales, and other key metrics to improve future events.',
    },
    {
      title: 'Email Notifications',
      description:
        'Keep your attendees informed and engaged with automated email notifications. Send event updates, reminders, and important announcements effortlessly.',
    },
    // Add more features here
  ];

  return (
    <div className="h-screen w-2/3 mx-auto my-0">
      <div className="container px-4">
        <div className="text-center w-2/5 mb-36 mx-auto my-0">
          <h1 className="text-3xl font-semibold mb-4">Features of Convi</h1>
          <p className="text-gray-600">
            Convi offers a comprehensive set of features designed to make event management a breeze. From planning to execution, our platform provides all the tools you need to create successful events.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center space-x-6">
            {features.map((feature, index) => (
              <div key={index} className="border-solid border-2 border-grey-700 w-72 rounded-lg shadow-xl p-4">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
