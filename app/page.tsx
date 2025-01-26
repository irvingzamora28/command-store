'use client';

import { useState, useEffect } from 'react';
import CommandCard from './components/CommandCard';
import { Command } from './types/command';

const initialCommands: Command[] = [];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [commands, setCommands] = useState<Command[]>(initialCommands);

  useEffect(() => {
    const fetchCommands = async () => {
      const response = await fetch('/commands.json');
      const data: Command[] = await response.json();
      setCommands(data);
    };
    fetchCommands();
  }, []);

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
          {filteredCommands.map((command, index) => (
            <CommandCard key={index} command={command} />
          ))}
        </div>
      </div>
    </main>
  );
}
