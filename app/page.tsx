'use client';

import { useState } from 'react';
import CommandCard from './components/CommandCard';
import { Command } from './types/command';

// Initial commands array with your first command
const initialCommands: Command[] = [
  {
    id: '1',
    command: 'find ~ -type f -size +500M -exec ls -lh {} \\; 2>/dev/null',
    description: 'Find large files (>500MB) in home directory',
    example: 'This command will list all files larger than 500MB in your home directory, showing their sizes in human-readable format',
    tags: ['find', 'files', 'size', 'search'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [commands] = useState<Command[]>(initialCommands);

  const filteredCommands = commands.filter((command) =>
    command.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
    command.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    command.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Command Store
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredCommands.map((command) => (
            <CommandCard key={command.id} command={command} />
          ))}
        </div>
      </div>
    </main>
  );
}
