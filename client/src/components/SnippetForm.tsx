import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const SUPPORTED_LANGUAGES = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C++',
  'HTML',
  'CSS',
  'SQL',
  'Bash',
  'JSON',
];

const generateTags = (code: string, language: string): string[] => {
  const tags = new Set<string>();
  tags.add(language.toLowerCase());

  const concepts = {
    function: /\b(function|def|void)\b/,
    class: /\b(class)\b/,
    loop: /\b(for|while|do)\b/,
    condition: /\b(if|else|switch|case)\b/,
    api: /(api|fetch|axios|http)/i,
    async: /(async|await|promise|then)/i,
    database: /(database|db|sql|query)/i,
    array: /(\[\]|array|list)/i,
    object: /(\{\}|object|dict)/i,
  };

  Object.entries(concepts).forEach(([concept, pattern]) => {
    if (pattern.test(code)) tags.add(concept);
  });

  return Array.from(tags);
};

const SnippetForm = () => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState(SUPPORTED_LANGUAGES[0]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const tags = generateTags(code, language);

      await api.snippets.create({ title, code, language, tags });
      navigate('/snippets');
    } catch (err: any) {
      console.error('Snippet creation error:', err);
      setError(err.response?.data?.message || 'Failed to create snippet');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-xl shadow-soft-xl transform transition-all duration-500 hover:scale-[1.01] animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Add a New Snippet
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Easily save and categorize your code
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md animate-shake">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter a descriptive title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
              Code
            </label>
            <textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              rows={10}
              placeholder="Paste your code here"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono sm:text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
          >
            {isLoading ? 'Creating...' : 'Create Snippet'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SnippetForm;
