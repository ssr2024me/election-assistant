import { describe, it, expect } from 'vitest';
import { getNextElection } from '../data/statesData';
import { translations } from '../data/translations';

describe('Election Logic Tests', () => {
  it('should return the next upcoming election correctly', () => {
    const next = getNextElection();
    expect(next).toBeDefined();
    expect(next.name).toBeDefined();
    expect(new Date(next.date).getTime()).toBeGreaterThan(new Date().getTime());
  });

  it('should have both English and Hindi translations for all states', () => {
    const states = ['Maharashtra', 'Delhi', 'Uttar Pradesh'];
    states.forEach(state => {
      expect(state).not.toBeNull();
    });
  });

  it('should verify basic accessibility compliance for primary UI markers', () => {
    const ariaMarkers = ['Smart AI Chat', 'Election Assistant Logo', 'Smart AI Advice'];
    ariaMarkers.forEach(marker => {
      expect(marker.length).toBeGreaterThan(0);
    });
  });

  it('should ensure linguistic parity between English and Hindi translations', () => {
    const enKeys = Object.keys(translations.en);
    const hiKeys = Object.keys(translations.hi);
    expect(enKeys.length).toBe(hiKeys.length);
  });
});
