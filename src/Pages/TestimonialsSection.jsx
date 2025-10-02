// TestimonialsSection.jsx
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: `Me and my wife bought a car and two weeks later the engine blew on it and the thermostat housing. We had no money to buy an expensive pre-rebuilt engine so we got online and I just so happened to run across this website, everyone was trying to charge me anywhere from 2500 to 7 to $10,000 for a new engine and I got a new used engine from ready to start With 7000 miles on it for $1400 we feel is though they were a godsent. So we put the car in the shop,got the engine put in then the transmission went out on our car. Again we used ready to start and everyone else was charging a down payment on a house for a transmission and ready to start only charged us 500 bucks thanks ready to start.
    `,
    author: "Terrence Smith",
    rating: 5,
  },
  {
    text: `Thank u for the transmission ready to start auto-parts Thanks again ready to start auto parts, special thanks To Rio, appreciate u and the team for getting me my transmission everything is working great in my 2006 E350 Mercedes.`,
    author: "Mark Azzopardi",
    rating: 4,
  },
  {
    text: `I was in desperate need of a transmission for my work truck. With the current supply issues everywhere I couldnt find a new one and to rebuild would have taken longer than I had time for. Rio contacted me right away when I filled out the request of what I needed online. Ready to start Auto and Rio were so helpful not only during the ordering process, but through the tracking, delivery and follow up to see how satisfied I was with everything. Excellent customer service throughout the entire process. I dont have any pictures I can share as it was delivered right to the garage that was installing it for me.`,
    author: "James Higdon",
    rating: 5,
  },
  {
    text: `The service was great and timely. It's been a long time since I received such a great and personal service from any business. The owner was contacting me directly with updates on my package, delivery personnel were great and knowledgeable. The first delivery didn't work out but they promptly returned the next day with a smaller truck and completed my delivery. I will continue to recommend this company. Rio really stood out a top notch employee.`,
    author: "Todd Stokes",
    rating: 5,
  },
  {
    text: `Good day all! I would like to submit fantastic service to the entire RTS crew. My rep (Danny) that helped me through each step was there from the beginning to the end. He was five star [plus one more for good measure] I purchased my part towards the end of November [2021] of last year. I had other business that needed my attention at first, therefore I was unable to test my vehicle immediately. I assure you, it's not all good but rather, it's all great!! I've been promoting your business to everyone since then. Three-thousand thumbs up my friends! The staff was extremely clear and courteous and spoke to me as often as needed to answer any of my questions during my span of delivery. I live to appreciate that they remembered me as a customer that had a need that was wholeheartedly, and professionally met. Todd S.`,
    author: "Dan Savors",
    rating: 5,
  },
  {
    text: `
I needed a transmission for my vehicle and nobody was willing to work with me until I found ready to start auto parts I spoke with a man named Caine and he delivered the best shopping experience he went above and beyond to make sure it was in my budget and that I received the correct part he even stayed later at work just for me to get the part I have to say I'm very pleased with the service I received from him I have never been treated so well before I highly recommend ready to start auto parts thank you so much for the service and cant wait to receive my transmission
`,
    author: "BakedMusician",
    rating: 4,
  },
  {
    text: `Ordered a 5.7 hemi had the best price around saved me 500.00, engine ran great highly recommended look forward to doing business with them in the future thanks guys !!!!`,
    author: "Frank Aikeins",
    rating: 5,
  },
  {
    text: `I needed a new engine for my son's car. I found READY TO START AUTO PARTS online and contacted them. They were very knowledgeable and helpful. They presented me with some options and guided me to make the right decision. They processed my order promptly. The engine arrived very quickly and on time. Now my son has his car back on the road and he is very happy w satisfied with the service I received from READY TO START AUTO PARTS, and I recommend them very highly to anyone`,
    author: "Anonymous",
    rating: 5,
  },
];

const TestimonialCard = ({ text, author, rating }) => {
  const [expanded, setExpanded] = useState(false);
  const previewText = text.length > 200 ? text.slice(0, 200) + "..." : text;

  return (
    <article className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition">
      <div className="flex items-center gap-1 mb-3 text-yellow-500">
        {Array.from({ length: rating }, (_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-gray-700 italic mb-4">
        &ldquo;{expanded ? text : previewText}&rdquo;
      </p>
      {text.length > 200 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
      <p className="text-right font-semibold text-gray-900 mt-3">- {author}</p>
    </article>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map(({ text, author, rating }, index) => (
          <TestimonialCard
            key={index}
            text={text}
            author={author}
            rating={rating}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
