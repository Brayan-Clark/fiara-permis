import { describe, it, expect } from 'vitest';
import { photos } from '../photos';
import { schemas } from '../schemas';
import { marquages } from '../marquages';
import { photosMg, schemasMg, marquagesMg } from '../mg/visuels';

describe('visuels (malagasy)', () => {
  it('every photo caption is translated', () => {
    for (const p of photos) expect(photosMg[p.file]?.caption, p.file).toBeTruthy();
  });
  it('every schema is translated', () => {
    for (const s of schemas) expect(schemasMg[s.id]?.name, s.id).toBeTruthy();
  });
  it('every road marking is translated', () => {
    for (const m of marquages) expect(marquagesMg[m.id]?.name, m.id).toBeTruthy();
  });
});
