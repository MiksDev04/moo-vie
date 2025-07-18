# 🎬 Moo-vie - Movie Discovery App

A modern React-based movie discovery application that allows users to explore trending movies, search for specific titles, and view detailed information about films. Built with React, Vite, and Tailwind CSS, powered by The Movie Database (TMDB) API.

## ✨ Features

- **🔥 Trending Movies**: Browse the latest trending movies with beautiful poster displays
- **🔍 Smart Search**: Search for movies by title with real-time API integration
- **📱 Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **🎭 Movie Details**: Comprehensive movie information including:
  - High-quality backdrop and poster images
  - Movie ratings, release dates, and popularity scores
  - Detailed overviews and genres
  - Runtime, budget, and IMDB links
  - Direct links to streaming platforms
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎨 Modern UI**: Clean, dark-themed interface with hover effects and smooth animations

## 🚀 Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **API**: The Movie Database (TMDB) API v3
- **Icons**: Custom SVG icons and Tailwind utilities

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- A TMDB API key (free registration required)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/moo-vie.git
   cd moo-vie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your TMDB API token:
   ```env
   VITE_API_TOKEN=your_tmdb_api_token_here
   ```
   
   > **Note**: Get your free API token from [TMDB](https://www.themoviedb.org/settings/api)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the app in action!

## 🎯 Usage

### Browsing Movies
- The app loads with trending movies displayed in a responsive grid
- Use pagination controls to navigate through different pages
- Hover over movie posters for smooth scaling effects

### Searching Movies
- Use the search bar at the top to find specific movies
- Search results replace the trending movies display
- Clear the search to return to trending movies

### Viewing Movie Details
- Click on any movie poster to view detailed information
- See comprehensive details including budget, runtime, genres, and ratings
- Access direct links to streaming platforms
- Click "Go back" to return to the movie grid

## 📁 Project Structure

```
src/
├── components/
│   ├── Footer.jsx          # Application footer
│   ├── Hero.jsx            # Hero section with branding
│   ├── Movies.jsx          # Movie grid display with pagination
│   ├── Search.jsx          # Search input component
│   └── ShowMovie.jsx       # Detailed movie information page
├── utils/
│   └── movieApi.js         # TMDB API integration functions
├── css/
│   └── index.css           # Global styles and Tailwind imports
├── assets/                 # Static images and icons
├── App.jsx                 # Main application component
└── main.jsx               # Application entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 API Integration

This app integrates with TMDB API for:
- Fetching trending movies
- Searching movies by title
- Getting detailed movie information
- Accessing high-quality movie images

### Key API Endpoints Used:
- `/trending/movie/day` - Trending movies
- `/search/movie` - Movie search
- `/movie/{id}` - Movie details

## 🎨 Styling Features

- **Dark Theme**: Elegant dark color scheme
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Hover Effects**: Smooth animations and transitions
- **Loading States**: User-friendly loading indicators
- **Image Optimization**: Multiple image sizes for different viewports

## 🔗 External Links

The app provides direct links to popular streaming platforms:
- 2213 Movies
- M4UHD
- M4UHD-tv

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the comprehensive movie API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool and development experience

---

**Made with ❤️ by MiksDev04**
