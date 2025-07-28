
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SnippetList from './pages/SnippetList';
import NewSnippet from './pages/NewSnippet';
import TestApi from './pages/TestApi';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/test-api" element={<TestApi />} />
              <Route
                path="/snippets"
                element={
                  <PrivateRoute>
                    <SnippetList />
                  </PrivateRoute>
                }
              />
              <Route
                path="/new"
                element={
                  <PrivateRoute>
                    <NewSnippet />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Navigate to="/snippets" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
