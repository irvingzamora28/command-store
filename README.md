# Command Store

A modern web application built with [Next.js](https://nextjs.org) that helps you store, search, and manage your frequently used commands.

## Features

- 🔍 Search commands by name, description, or tags
- 🌓 Dark/Light mode support
- 💨 Fast and responsive interface
- 🏷️ Tag-based organization
- 📱 Mobile-friendly design

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Data Structure

Commands are stored in a `commands.json` file with the following structure:

```typescript
interface Command {
  command: string;
  description: string;
  tags: string[];
}
```

## Technologies Used

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- TypeScript - Type safety

## Development

You can start editing the application by modifying the files in the `app` directory. The page auto-updates as you edit the files.

## License

[MIT](https://choosealicense.com/licenses/mit/)
