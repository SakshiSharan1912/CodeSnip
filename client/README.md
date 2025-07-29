# CodeSnip Client

A modern and responsive React frontend for managing and organizing personal code snippets. Built with React, TypeScript, and Tailwind CSS with gradient-themed styling.

## Features

- 🔐 Secure authentication with JWT (Login & Signup)
- 📝 Create, view, and manage code snippets with ease
- 🎨 Syntax highlighting using Prism.js
- 🏷️ Smart tag generation based on snippet content
- 🔍 Search and filter snippets by title, content, or tags
- 📊 API and CORS test page for debugging backend connections
- 🧩 Protected routes using custom PrivateRoute
- 📱 Fully responsive and clean UI with gradient color themes

## Tech Stack

- React 18 with TypeScript
- React Router v6 for routing
- Tailwind CSS for custom UI styling
- Prism.js for syntax highlighting
- Axios for API communication
- react-toastify for notifications

## Getting Started

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd client
   npm install
  ```
3. Create a .env file in the client directory:
```
VITE_API_URL=http://localhost:5000
```
4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/        # Reusable UI components
├── contexts/         # React context providers
├── pages/           # Route components
├── types/           # TypeScript type definitions
└── utils/           # Helper functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request