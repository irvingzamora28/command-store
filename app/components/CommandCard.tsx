import { Command } from '../types/command';
import { FC, useState } from 'react';

interface CommandCardProps {
  command: Command;
}

const CommandCard: FC<CommandCardProps> = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy command:', err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {command.description}
        </h3>
        <button
          onClick={copyToClipboard}
          className={`px-3 py-1 rounded-md text-sm transition-all duration-200 ${
            copied
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white flex items-center gap-1`}
        >
          {copied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Copied!
            </>
          ) : (
            'Copy'
          )}
        </button>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 font-mono text-sm mb-4">
        {command.command}
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Example:
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {command.example}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {command.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CommandCard;
