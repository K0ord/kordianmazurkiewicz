import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white pt-24">
        <div className="text-red-500">If this is red, Tailwind works!</div>
      <h1 className="text-5xl font-bold mb-4">Welcome Home</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center">
        This is the home page. Use this space to greet visitors and give them a warm introduction to your site!
      </p>
    </div>
  );
};

export default Home;
