import { describe, it, expect } from 'vitest';
import { statesData, getNextElection, upcomingElections } from './statesData';

describe('States Data & Election Utilities', () => {
  it('should contain data for major states', () => {
    expect(statesData['kerala']).toBeDefined();
    expect(statesData['tamil-nadu']).toBeDefined();
    expect(statesData['uttar-pradesh'].seats).toBe(80);
  });

  it('upcomingElections should be sorted chronologically', () => {
    const dates = upcomingElections.map(e => new Date(e.date).getTime());
    const sortedDates = [...dates].sort((a, b) => a - b);
    expect(dates).toEqual(sortedDates);
  });

  it('getNextElection should return a valid future election or the last one', () => {
    const next = getNextElection();
    expect(next).toBeDefined();
    expect(next).toHaveProperty('name');
    expect(next).toHaveProperty('date');
  });
});
