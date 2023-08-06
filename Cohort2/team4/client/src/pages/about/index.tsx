import React from 'react';
import Mike from '../../images/A.jpg'
import AJ from '../../images/B.png'
import Johnathan from '../../images/C.png'
import Michelle from '../../images/D.jpg'
import Trey from '../../images/E.png'

const AboutUs = () => {

    const team = [
        {
            name: "Mike",
            image: Mike,
            title: 'Something Cool.'
        },
        {
            name: "AJ",
            image: AJ,
            title: 'Picaso\'s Protege.'
        },
        {
            name: "Johnathan",
            image: Johnathan,
            title: 'THE EXTERMINATOR'
        },
        {
            name: "Michelle",
            image: Michelle,
            title: 'I\'m in silver. '
        },
        {
            name: "Trey",
            image: Trey,
            title: "Fastest fingers in the west. "
        }
    ]

    return (
        <div className="h-screen py-8">
        <div className="container px-4 mx-auto">
            <div className="text-center w-2/3 my-0 mx-auto ">
            <h1 className="text-3xl font-semibold mb-4">About Convi</h1>
            <p className="text-gray-600">
                Convi is your go-to event management platform for organizing memorable and seamless events. Whether you're planning a small gathering, a corporate conference, a wedding, or any other type of event, Convi has got you covered.
            </p>
            <p className="text-gray-600">
                Our mission is to provide you with the tools and resources to plan, manage, and execute successful events, making the process as effortless as possible. With Convi, you can streamline event registration, manage attendees, send invitations and reminders, track event progress, and much more. We believe that every event should be a memorable and enjoyable experience for both organizers and attendees, and that's exactly what we aim to deliver through our platform.
            </p>
            </div>

            <div className="mt-12 text-center">
            <h2 className="text-3xl font-semibold mb-4 ">Our Team</h2>
           
                    <div className="flex justify-center flex-wrap">
                    {team.map((team) => {
                return(
                        <div key={team.name} className="border-solid border-2 border-grey-700 rounded-lg shadow-xl p-4 mx-4 my-2 max-w-md w-40">
                        <img
                            className="w-24 h-24 mx-auto mb-4 rounded-full"
                            src={team.image.src}
                            alt={team.name}
                        />
                        <h3 className="text-lg font-semibold">{team.name}</h3>
                        <p className="text-gray-600">{team.title}</p>
                        </div>
                    )
                })}
                    </div>
                </div>

            </div>
        </div>
  );
};

export default AboutUs;
