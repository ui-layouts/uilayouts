import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export function readNotes(directory) {
  return readdirSync(directory).filter(name => name.endsWith('.md')).sort().reverse().map(name => {
    const match = /^(\d{4}-\d{2}-\d{2})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.exec(name);
    const date = new Date(match?.[1] + 'T00:00:00Z');
    if (!match || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== match[1]) {
      throw new Error('Expected YYYY-MM-DD-short-title.md with a valid date: ' + name);
    }
    const content = readFileSync(join(directory, name), 'utf8').trim().replace(/\r\n/g, '\n');
    const parts = /^# ([^\n]+)\n\s*\n([\s\S]+)$/.exec(content);
    if (!parts || !parts[1].trim() || !parts[2].trim()) {
      throw new Error('Expected a # Title, blank line and summary in ' + name);
    }
    return {
      id: name,
      title: parts[1].trim(),
      date: date.toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' }),
      description: parts[2].trim(),
      details: [],
    };
  });
}
