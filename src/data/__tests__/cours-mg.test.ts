import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const contentDir = join(__dirname, '../../content');
const lessons = (dir: string) =>
  readdirSync(join(contentDir, dir))
    .filter((f) => f.endsWith('.md'))
    .sort();

describe('leçons en malagasy', () => {
  it('chaque leçon malagasy correspond à une leçon française (même nom de fichier)', () => {
    const fr = new Set(lessons('cours'));
    for (const file of lessons('cours-mg')) {
      expect(fr.has(file)).toBe(true);
    }
  });

  it('toutes les leçons françaises ont leur version malagasy', () => {
    expect(lessons('cours-mg')).toEqual(lessons('cours'));
  });

  it('chaque leçon malagasy a un titre et un résumé', () => {
    for (const file of lessons('cours-mg')) {
      const text = readFileSync(join(contentDir, 'cours-mg', file), 'utf8');
      expect(text).toMatch(/^---\ntitle: ".+"\nsummary: ".+"\n---\n/);
    }
  });
});
