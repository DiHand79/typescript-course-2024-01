import { describe, expect, it } from '@jest/globals';
// import { distance1, distance2 } from '../lib/lesson2-homework.js';
import { distance1, distance2 } from './lesson2-homework';

describe('distance1', () => {
  it('should be defined', () => {
    expect(distance1).toBeDefined();
  });

  //   - distance between (1,1) and (4,5) should be 5
  //   - distance between (0,0) and (0,0) should be 0
  //   - distance between (1,1) and (1,2) should be 1
  describe('distance1 between 2 point2D (1,1) and (4,5)', () => {
    it('input points (1,1) and (4,5) have distanse 5', () => {
      expect(distance1([1, 1], [4, 5])).toBe(5);
    });
  });
  describe('distance1 between 2 point2D (0,0) and (0,0)', () => {
    it('input points (0,0) and (0,0) have distanse 0', () => {
      expect(distance1([0, 0], [0, 0])).toBe(0);
    });
  });
  describe('distance1 between 2 point2D (1,1) and (1,2)', () => {
    it('input points (1,1) and (1,2) have distanse 1', () => {
      expect(distance1([1, 1], [1, 2])).toBe(1);
    });
  });
});

describe('distance2', () => {
  it('should be defined', () => {
    expect(distance2).toBeDefined();
  });

  //   - distance between (1,1) and (4,5) should be 5
  //   - distance between (0,0) and (0,0) should be 0
  //   - distance between (1,1) and (1,2) should be 1
  describe('distance2 between 2 point2D (1,1) and (4,5)', () => {
    it('input points (1,1) and (4,5) have distanse 5', () => {
      expect(distance2({ x: 1, y: 1 }, { x: 4, y: 5 })).toBe(5);
    });
  });
  describe('distance2between 2 point2D (0,0) and (0,0)', () => {
    it('input points (0,0) and (0,0) have distanse 0', () => {
      expect(distance2({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(0);
    });
  });
  describe('distance2 between 2 point2D (1,1) and (1,2)', () => {
    it('input points (1,1) and (1,2) have distanse 1', () => {
      expect(distance2({ x: 1, y: 1 }, { x: 1, y: 2 })).toBe(1);
    });
  });
});
