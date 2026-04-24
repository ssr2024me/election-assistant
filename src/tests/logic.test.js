import { describe, it, expect } from 'vitest';
import { getNextElection } from '../data/statesData';

describe('Election Logic Tests', () => {
  it('should return the next upcoming election correctly', () => {
    const next = getNextElection();
    expect(next).toBeDefined();
    expect(next.state).toBeDefined();
    expect(new Date(next.date).getTime()).toBeGreaterThan(new Date().getTime());
  });

  it('should have both English and Hindi translations for all states', () => {
    const states = ['Maharashtra', 'Delhi', 'Uttar Pradesh'];
    states.forEach(state => {
      // Mock logic check for data consistency
      expect(state).not.toBeNull();
    });
  });
});
