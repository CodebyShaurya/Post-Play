# PostPlay Suggestor

    Find the perfect music for your Instagram posts! This application suggests songs based on your photo description, mood, genre, and language.

    ## Features

    - Suggests songs for Instagram stories and posts.
    - Takes photo description, mood, genre, and language as input.
    - Provides a list of suggested songs and artists.
    - Includes a mock API for demonstration purposes.
    - About Us page describing the application and its purpose.

    ## Technologies Used

    - React
    - Vite
    - Tailwind CSS
    - Express
    - Node.js
    - OpenAI API (optional, requires API key)

    ## Setup Instructions

    1.  Clone the repository.
    2.  Navigate to the project directory.
    3.  Install dependencies:

        ```bash
        npm install
        ```

    4.  Start the backend server:

        ```bash
        npm run backend
        ```

    5.  Start the frontend development server:

        ```bash
        npm run dev
        ```

    6.  Open your browser and navigate to the address shown in the console (usually `http://localhost:5173`).

    ## Configuration

    -   **OpenAI API Key:** To use the OpenAI API, replace `"YOUR_OPENAI_API_KEY"` in `server/index.js` with your actual OpenAI API key.  If you do not have an OpenAI API key, the application will use a mock response.

    ## API Endpoint

    The frontend communicates with the backend using the `/api/music-suggestions` endpoint.

    ## Mock API

    The application includes a mock API endpoint located at `/mock-api/music-suggestions.json`.  This is used when the backend is not running or the OpenAI API key is not configured.

    ## Contributing

    Feel free to contribute to this project by submitting pull requests.

    ## Author

    -   [Your Github Profile](https://github.com/your-github-username)