import { describe, it, expect } from 'vitest';
import { glossary } from '../glossary';

describe('glossary', () => {
  it('has at least one term', () => {
    expect(glossary.length).toBeGreaterThan(0);
  });

  it('each term has non-empty term and definition', () => {
    for (const entry of glossary) {
      expect(entry.term.trim().length).toBeGreaterThan(0);
      expect(entry.definition.trim().length).toBeGreaterThan(0);
    }
  });

  it('has unique terms', () => {
    const terms = glossary.map((g) => g.term.toLowerCase());
    expect(new Set(terms).size).toBe(terms.length);
  });
});

describe('glossary (malagasy)', () => {
  it('every term has a Malagasy translation', () => {
    for (const entry of glossary) {
      expect(entry.mg, entry.term).toBeDefined();
      expect(entry.mg!.term.trim().length).toBeGreaterThan(0);
      expect(entry.mg!.definition.trim().length).toBeGreaterThan(0);
    }
  });
});
