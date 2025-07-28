import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-white via-sky-50 to-sky-100 shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-tight"
          >
            CodeSnip
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {isAuthenticated ? (
              <>
                <NavLink to="/snippets" active={isActive('/snippets')}>
                  My Snippets
                </NavLink>
                <NavLink to="/new" active={isActive('/new')}>
                  New
                </NavLink>
                <button
                  onClick={logout}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" active={isActive('/login')}>
                  Login
                </NavLink>
                <Link
                  to="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <>&#x2715;</> : <>&#9776;</>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-2 bg-white shadow-sm">
          {isAuthenticated ? (
            <>
              <MobileLink to="/snippets" active={isActive('/snippets')}>
                My Snippets
              </MobileLink>
              <MobileLink to="/new" active={isActive('/new')}>
                New Snippet
              </MobileLink>
              <button
                onClick={logout}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <MobileLink to="/login" active={isActive('/login')}>
                Login
              </MobileLink>
              <Link
                to="/signup"
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

//  Desktop Link Component
const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
      active
        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-sm'
        : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'
    }`}
  >
    {children}
  </Link>
);

// Mobile Link Component
const MobileLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`block w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      active
        ? 'bg-purple-600 text-white'
        : 'text-gray-800 hover:bg-gray-100 hover:text-purple-600'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
