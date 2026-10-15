import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { panneaux, signCategoryOrder, signHtml } from '../panneaux';

const publicDir = join(__dirname, '../../../public/panneaux');

describe('panneaux', () => {
  it('has at least one sign', () => {
    expect(panneaux.length).toBeGreaterThan(0);
  });

  it('each sign has a unique id', () => {
    const ids = panneaux.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('each sign has a non-empty name and description', () => {
    for (const sign of panneaux) {
      expect(sign.name.trim().length).toBeGreaterThan(0);
      expect(sign.description.trim().length).toBeGreaterThan(0);
    }
  });

  it('each sign has either inline SVG or an official image file', () => {
    for (const sign of panneaux) {
      if (sign.svg) {
        expect(sign.svg).toContain('<svg');
        expect(sign.svg).toContain('</svg>');
      } else {
        expect(sign.image).toBe(true);
        expect(existsSync(join(publicDir, `${sign.id}.svg`))).toBe(true);
      }
    }
  });

  it('credits every official image (CC BY-SA requires attribution)', () => {
    for (const sign of panneaux.filter((s) => s.image)) {
      expect(sign.credit?.author.trim().length).toBeGreaterThan(0);
      expect(sign.credit?.license.trim().length).toBeGreaterThan(0);
      expect(sign.credit?.page).toMatch(/^https:\/\/commons\.wikimedia\.org\//);
    }
  });

  it('renders official images through signHtml', () => {
    const sign = panneaux.find((s) => s.image)!;
    expect(signHtml(sign)).toContain(`panneaux/${sign.id}.svg`);
  });

  it('each sign has a valid category', () => {
    const validCategories = signCategoryOrder;
    for (const sign of panneaux) {
      expect(validCategories).toContain(sign.category);
    }
  });
});

describe('panneaux (malagasy)', () => {
  it('every sign has a Malagasy name and description', () => {
    for (const sign of panneaux) {
      expect(sign.mg, sign.id).toBeDefined();
      expect(sign.mg!.name.trim().length).toBeGreaterThan(0);
      expect(sign.mg!.description.trim().length).toBeGreaterThan(0);
    }
  });
});
