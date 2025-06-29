import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/18/01/34/women-2414310_640.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              The Spirit of a Warrior
            </h2>
            <p className="mt-6 text-gray-600">
             This isn’t just about visuals—it’s about values.
The image of a woman warrior stands for leadership, courage, and determination.
In a world full of noise, true power is found in clarity of purpose.
This section reminds us that behind every strong design is an even stronger story.
Let it speak to the strength within you—the strength to create, lead, and inspire.
            </p>
            <p className="mt-4 text-gray-600">
              Strength is not always loud—it can be quiet, calm, and focused.
This project reflects the resilience of those who rise, no matter how many times they fall.
Like a warrior, we build with purpose, adapt with grace, and face challenges head-on.
Every element here is designed to inspire courage and action.
Whether in code or in battle, precision and heart make the difference.
We honor the journey—not just the victory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
