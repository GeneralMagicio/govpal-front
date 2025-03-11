interface TagProps {
  text: string;
  onRemove?: () => void;
}

const Tag: React.FC<TagProps> = ({ text, onRemove }) => {
  return (
    <div className="inline-flex items-center px-2 py-1 rounded-lg text-sm bg-primary-accent/20 text-primary-accent">
      <span>{text}</span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1.5 hover:text-white focus:outline-none"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Tag;