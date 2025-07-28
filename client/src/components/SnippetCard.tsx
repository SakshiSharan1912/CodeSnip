import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import api from '../services/api';

interface SnippetCardProps {
  _id: string;
  title: string;
  code: string;
  language: string;
  tags: string[];
  createdAt: string;
  onDelete: (id: string) => void; // trigger parent update
}

const SnippetCard = ({ _id, title, code, language, tags, createdAt, onDelete }: SnippetCardProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this snippet?');
    if (!confirmed) return;

    try {
      await api.snippets.delete(_id);
      onDelete(_id); // notify parent
    } catch (err) {
      console.error('Error deleting snippet:', err);
      alert('Failed to delete snippet.');
    }
  };

  const getNormalizedLanguage = (lang: string) => {
    const languageMap: { [key: string]: string } = {
      JavaScript: 'javascript',
      TypeScript: 'typescript',
      Python: 'python',
      Java: 'java',
      HTML: 'markup',
      CSS: 'css',
    };
    return languageMap[lang] || 'javascript';
  };

  return (
  <div className="rounded-xl overflow-hidden shadow-soft-xl bg-white hover:shadow-md transition-shadow duration-300 relative">
    <div className="p-5 border-b border-gray-200">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition-all duration-300"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>

    <div className="bg-gray-900 text-white text-sm p-4 overflow-x-auto">
      <pre className="whitespace-pre-wrap">
        <code className={`language-${getNormalizedLanguage(language)}`}>
          {code}
        </code>
      </pre>
    </div>

    <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
      Created: {new Date(createdAt).toLocaleDateString()}
    </div>
  </div>
)}

export default SnippetCard;
