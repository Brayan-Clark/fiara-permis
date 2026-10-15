import { describe, it, expect } from 'vitest';
import { scenarios } from '../scenarios';

describe('scenarios', () => {
  it('has at least one scenario', () => {
    expect(scenarios.length).toBeGreaterThan(0);
  });

  it('each scenario has a unique id', () => {
    const ids = scenarios.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('each scenario has non-empty text fields', () => {
    for (const s of scenarios) {
      expect(s.situation.trim().length).toBeGreaterThan(0);
      expect(s.question.trim().length).toBeGreaterThan(0);
      expect(s.explanation.trim().length).toBeGreaterThan(0);
    }
  });

  it('each scenario has a boolean answer', () => {
    for (const s of scenarios) {
      expect(typeof s.answer).toBe('boolean');
    }
  });
});

describe('scenarios (malagasy)', () => {
  it('every scenario has a Malagasy translation', () => {
    for (const s of scenarios) {
      expect(s.mg, s.id).toBeDefined();
      expect(s.mg!.situation.trim().length).toBeGreaterThan(0);
      expect(s.mg!.question.trim().length).toBeGreaterThan(0);
      expect(s.mg!.explanation.trim().length).toBeGreaterThan(0);
    }
  });
});
