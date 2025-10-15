import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { PerformanceMonitor, performanceMonitor } from '../performance';

// Mock Performance API globally before any imports
const mockPerformance = {
  getEntriesByType: vi.fn(() => []),
  now: vi.fn(() => 1000),
};

// Mock PerformanceObserver globally
class MockPerformanceObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

global.PerformanceObserver = MockPerformanceObserver as any;

// Mock performance object globally
Object.defineProperty(window, 'performance', {
  value: mockPerformance,
  writable: true,
});

describe('PerformanceMonitor', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset mock returns for each test
    mockPerformance.getEntriesByType.mockReturnValue([]);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('initializes without throwing in browser environment', () => {
    expect(() => new PerformanceMonitor()).not.toThrow();
  });

  it('initializes with empty metrics object', () => {
    const monitor = new PerformanceMonitor();
    const metrics = monitor.getMetrics();
    expect(metrics).toEqual({});
  });

  it('can get metrics after initialization', () => {
    const monitor = new PerformanceMonitor();
    const metrics = monitor.getMetrics();
    expect(typeof metrics).toBe('object');
  });

  it('logMetrics does not throw in development', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    const monitor = new PerformanceMonitor();
    expect(() => monitor.logMetrics()).not.toThrow();

    process.env.NODE_ENV = originalEnv;
  });

  it('logMetrics does not throw in production', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    const monitor = new PerformanceMonitor();
    expect(() => monitor.logMetrics()).not.toThrow();

    process.env.NODE_ENV = originalEnv;
  });

  it('reportToAnalytics does not throw in production', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    const monitor = new PerformanceMonitor();
    expect(() => monitor.reportToAnalytics()).not.toThrow();

    process.env.NODE_ENV = originalEnv;
  });

  it('exports a global performance monitor instance', () => {
    expect(performanceMonitor).toBeInstanceOf(PerformanceMonitor);
  });

  it('global instance is accessible', () => {
    expect(performanceMonitor.getMetrics).toBeDefined();
    expect(performanceMonitor.logMetrics).toBeDefined();
    expect(performanceMonitor.reportToAnalytics).toBeDefined();
  });
});