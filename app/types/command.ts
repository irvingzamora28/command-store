export interface Command {
  id: string;
  command: string;
  description: string;
  example: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
