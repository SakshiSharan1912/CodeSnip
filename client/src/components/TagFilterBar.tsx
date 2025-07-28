interface TagFilterBarProps {
  availableTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const TagFilterBar = ({ availableTags, selectedTags, onTagToggle }: TagFilterBarProps) => {
  return (
    <div className="flex flex-wrap gap-3 py-4">
      {availableTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagToggle(tag)}
          className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium shadow-md transition-all duration-300
            ${
              selectedTags.includes(tag)
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700'
                : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
            }
          `}
        >
          {tag}
          <span className="ml-1 text-xs font-bold">
            {selectedTags.includes(tag) ? '×' : '+'}
          </span>
        </button>
      ))}
      {availableTags.length === 0 && (
        <p className="text-gray-500 text-sm">No tags available</p>
      )}
    </div>
  );
};

export default TagFilterBar;
