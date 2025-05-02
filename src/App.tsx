import React, { useState } from 'react';
    import { Music2, ImagePlus, SendHorizonal, Info } from 'lucide-react';
    import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

    function HomePage() {
      const [description, setDescription] = useState('');
      const [mood, setMood] = useState('');
      const [genre, setGenre] = useState('');
      const [language, setLanguage] = useState('');
      const [suggestions, setSuggestions] = useState<string[]>([]);

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
          description: description || '',
          
          mood: mood || '',
          genre: genre || '',
          language: language || '',
        };
        console.log(payload)
        // Simulate API call (replace with actual API endpoint)
        try {

          const response = await fetch('https://post-jiyy.onrender.com//api/music-suggestions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log(data)
          if (!data || !data.suggestions) {
            throw new Error('Invalid response from server');
          }
          setSuggestions(data.suggestions);
        } catch (error) {
          console.error('Failed to get suggestions:', error);
          setSuggestions(['Error fetching suggestions.']);
        }
      };

      return (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
                    <Music2 className="inline-block mr-2" size={32} />
                    Find your music  
                  </h1>
                  <p className="text-gray-600 text-center mb-6">
                    Describe your photo, set the mood, choose a genre, and specify the language.
                    We'll suggest the perfect song for your Instagram story or post!
                  </p>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="description" className="block text-lg font-medium text-gray-700">
                          Photo Description:
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="description"
                            rows={3}
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 hover:shadow-md transition duration-300"
                            placeholder="Describe your photo..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="mood" className="block text-lg font-medium text-gray-700">
                          Mood:
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="mood"
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 hover:shadow-md transition duration-300"
                            placeholder="e.g., Happy, Relaxed, Energetic"
                            value={mood}
                            onChange={(e) => setMood(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="genre" className="block text-lg font-medium text-gray-700">
                          Genre:
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="genre"
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 hover:shadow-md transition duration-300"
                            placeholder="e.g., Pop, Hip-hop, Electronic"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="language" className="block text-lg font-medium text-gray-700">
                          Language:
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="language"
                            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 hover:shadow-md transition duration-300"
                            placeholder="e.g., English, Spanish, Hindi"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline flex items-center hover:scale-105 transition duration-300"
                        >
                          <SendHorizonal className="mr-2" />
                          Get Suggestions
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {suggestions.length > 0 && (
                  <div className="pt-6 text-base leading-6 font-bold text-gray-900 sm:text-lg sm:leading-7">
                    <h2 className="text-2xl font-semibold mb-3">Suggested Songs:</h2>
                    <ul>
                      {suggestions.map((song, index) => (
                        <li key={index} className="mb-2 p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition duration-200">
                          {song}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    function AboutUs() {
      return (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
                    <Info className="inline-block mr-2" size={32} />
                    About Us
                  </h1>
                  <p className="text-gray-700 text-lg text-center mb-6">
                    We help you find the perfect music to match your Instagram posts! Just describe your photo,
                    tell us the mood, genre, and language, and we'll suggest songs that fit the vibe.
                  </p>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <p>
                      Our mission is to enhance your social media presence by providing personalized music suggestions.
                      We understand the power of music in storytelling, and we aim to make it easier for you to find the
                      perfect soundtrack for your visual content.
                    </p>
                    <p>
                      Whether you're sharing a travel adventure, a cozy moment, or a celebration, we've got you covered.
                      Our suggestions are based on your input, ensuring that the music aligns with the unique character
                      of your posts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    function App() {
      return (
        <Router>
          <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow-md py-4">
              <div className="container mx-auto px-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-semibold text-gray-800 hover:text-purple-600 transition duration-300">
                  PostPlay
                </Link>
                <nav>
                  <ul className="flex space-x-6">
                    <li>
                      <Link to="/" className="text-gray-700 hover:text-purple-600 transition duration-300">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-gray-700 hover:text-purple-600 transition duration-300">
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>

            <footer className="bg-gray-100 py-4 mt-auto">
              <div className="container mx-auto px-4 text-center">
                <p className="text-gray-600">
                  &copy; {new Date().getFullYear()} PostPlay. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </Router>
      );
    }

    export default App;