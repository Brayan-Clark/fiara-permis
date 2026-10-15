import { describe, it, expect } from 'vitest';
import { quizModules, getQuizModule, withSignVisuals } from '../quiz';
import { panneaux } from '../panneaux';

describe('quizModules', () => {
  it('has at least one module', () => {
    expect(quizModules.length).toBeGreaterThan(0);
  });

  it('each module has a unique slug', () => {
    const slugs = quizModules.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('each module has at least one question', () => {
    for (const mod of quizModules) {
      expect(mod.questions.length).toBeGreaterThan(0);
    }
  });

  it('each question has a valid correctIndex', () => {
    for (const mod of quizModules) {
      for (const q of mod.questions) {
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.choices.length);
      }
    }
  });

  it('each question has at least 2 choices', () => {
    for (const mod of quizModules) {
      for (const q of mod.questions) {
        expect(q.choices.length).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it('each question has a unique id within its module', () => {
    for (const mod of quizModules) {
      const ids = mod.questions.map((q) => q.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });
});

describe('question ids and sign illustrations', () => {
  it('ids are unique across all modules (the mistake tracker is global)', () => {
    const ids = quizModules.flatMap((m) => m.questions.map((q) => q.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every illustrated question points to an existing sign', () => {
    const signIds = new Set(panneaux.map((s) => s.id));
    for (const mod of quizModules) {
      for (const q of mod.questions.filter((q) => q.sign)) {
        expect(signIds.has(q.sign!)).toBe(true);
      }
    }
  });

  it('every sign has its own picture card', () => {
    const illustrated = new Set(quizModules.flatMap((m) => m.questions.map((q) => q.sign)));
    for (const sign of panneaux) {
      expect(illustrated.has(sign.id)).toBe(true);
    }
  });

  it('withSignVisuals adds markup only to illustrated questions', () => {
    const mod = getQuizModule('panneaux-images')!;
    const [withSign] = withSignVisuals(mod.questions.slice(0, 1));
    expect(withSign.signHtml).toBeTruthy();
    const [plain] = withSignVisuals(quizModules[0].questions.filter((q) => !q.sign).slice(0, 1));
    expect(plain).not.toHaveProperty('signHtml');
  });

  it('choices within a question are distinct', () => {
    for (const mod of quizModules) {
      for (const q of mod.questions) {
        expect(new Set(q.choices).size).toBe(q.choices.length);
      }
    }
  });
});

describe('getQuizModule', () => {
  it('returns a module by slug', () => {
    const mod = getQuizModule(quizModules[0].slug);
    expect(mod).toBeDefined();
    expect(mod!.slug).toBe(quizModules[0].slug);
  });

  it('returns undefined for unknown slug', () => {
    expect(getQuizModule('nonexistent')).toBeUndefined();
  });
});

describe('quiz (malagasy)', () => {
  it('every question has a Malagasy version with the same number of choices', () => {
    for (const mod of quizModules) {
      for (const q of mod.questions) {
        expect(q.mg, q.id).toBeDefined();
        expect(q.mg!.question.trim().length, q.id).toBeGreaterThan(0);
        expect(q.mg!.explanation.trim().length, q.id).toBeGreaterThan(0);
        expect(q.mg!.choices.length, q.id).toBe(q.choices.length);
        expect(new Set(q.mg!.choices).size, q.id).toBe(q.mg!.choices.length);
      }
    }
  });

  it('every module has a Malagasy title', () => {
    for (const mod of quizModules) {
      expect(mod.titleMg, mod.slug).toBeTruthy();
    }
  });

  it('has no orphan translation (every translated id exists in French)', async () => {
    const { quizMg } = await import('../mg/quiz');
    const ids = new Set(quizModules.flatMap((m) => m.questions.map((q) => q.id)));
    for (const id of Object.keys(quizMg)) {
      expect(ids.has(id), id).toBe(true);
    }
  });
});
