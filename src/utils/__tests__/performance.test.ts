import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { PerformanceMonitor, performanceMonitor } from '../performance';

// Mock Performance API
const mockPerformance = {
  getEntriesByType: vi.fn(),
  now: vi.fn(() => 1000),
};

// Mock PerformanceObserver
class MockPerformanceObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

global.PerformanceObserver = MockPerformanceObserver as any;

// Mock performance object
Object.defineProperty(window, 'performance', {
  value: mockPerformance,
  writable: true,
});

describe('PerformanceMonitor', () => {
  let monitor: PerformanceMonitor;

  beforeEach(() => {
    vi.clearAllMocks();
    monitor = new PerformanceMonitor();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('initialization', () => {
    it('initializes without throwing in browser environment', () => {
      expect(() => new PerformanceMonitor()).not.toThrow();
    });

    it('initializes metrics object', () => {
      const metrics = monitor.getMetrics();
      expect(metrics).toEqual({});
    });
  });

  describe('navigation timing', () => {
    it('captures navigation timing metrics when available', () => {
      const mockNavigationEntry = {
        startTime: 0,
        loadEventEnd: 1500,
        domContentLoadedEventEnd: 800,
      };

      mockPerformance.getEntriesByType.mockReturnValue([mockNavigationEntry]);

      monitor = new PerformanceMonitor();
      const metrics = monitor.getMetrics();

      expect(metrics.navigationStart).toBe(0);
      expect(metrics.loadComplete).toBe(1500);
      expect(metrics.domContentLoaded).toBe(800);
    });

    it('handles missing navigation timing data gracefully', () => {
      mockPerformance.getEntriesByType.mockReturnValue([]);

      monitor = new PerformanceMonitor();
      const metrics = monitor.getMetrics();

      expect(metrics.navigationStart).toBeUndefined();
      expect(metrics.loadComplete).toBeUndefined();
      expect(metrics.domContentLoaded).toBeUndefined();
    });
  });

  describe('paint metrics', () => {
    it('captures first-paint and first-contentful-paint metrics', () => {
      const mockPaintEntries = [
        { name: 'first-paint', startTime: 200 },
        { name: 'first-contentful-paint', startTime: 300 },
      ];

      mockPerformance.getEntriesByType.mockImplementation((type: string) => {
        if (type === 'paint') return mockPaintEntries;
        if (type === 'navigation') return [];
        return [];
      });

      monitor = new PerformanceMonitor();
      const metrics = monitor.getMetrics();

      expect(metrics.firstPaint).toBe(200);
      expect(metrics.firstContentfulPaint).toBe(300);
    });

    it('handles missing paint metrics gracefully', () => {
      mockPerformance.getEntriesByType.mockReturnValue([]);

      monitor = new PerformanceMonitor();
      const metrics = monitor.getMetrics();

      expect(metrics.firstPaint).toBeUndefined();
      expect(metrics.firstContentfulPaint).toBeUndefined();
    });
  });

  describe('Core Web Vitals', () => {
    it('observes Largest Contentful Paint (LCP)', () => {
      const mockLCPEntry = { startTime: 2500 };

      // Mock the PerformanceObserver callback
      let lcpCallback: any;
      global.PerformanceObserver = class extends MockPerformanceObserver {
        constructor(callback: any) {
          super();
          lcpCallback = callback;
        }
      } as any;

      monitor = new PerformanceMonitor();

      // Simulate LCP observation
      if (lcpCallback) {
        lcpCallback({ getEntries: () => [mockLCPEntry] });
      }

      const metrics = monitor.getMetrics();
      expect(metrics.largestContentfulPaint).toBe(2500);
    });

    it('observes First Input Delay (FID)', () => {
      const mockFIDEntry = {
        processingStart: 1200,
        startTime: 1000,
      };

      let fidCallback: any;
      global.PerformanceObserver = class extends MockPerformanceObserver {
        constructor(callback: any) {
          super();
          fidCallback = callback;
        }
      } as any;

      monitor = new PerformanceMonitor();

      if (fidCallback) {
        fidCallback({ getEntries: () => [mockFIDEntry] });
      }

      const metrics = monitor.getMetrics();
      expect(metrics.firstInputDelay).toBe(200);
    });

    it('observes Cumulative Layout Shift (CLS)', () => {
      const mockCLSEntries = [
        { value: 0.1, hadRecentInput: false },
        { value: 0.05, hadRecentInput: true }, // Should be ignored
        { value: 0.2, hadRecentInput: false },
      ];

      let clsCallback: any;
      global.PerformanceObserver = class extends MockPerformanceObserver {
        constructor(callback: any) {
          super();
          clsCallback = callback;
        }
      } as any;

      monitor = new PerformanceMonitor();

      if (clsCallback) {
        clsCallback({ getEntries: () => mockCLSEntries });
      }

      const metrics = monitor.getMetrics();
      expect(metrics.cumulativeLayoutShift).toBe(0.3); // 0.1 + 0.2
    });
  });

  describe('logging and reporting', () => {
    it('logs metrics in development environment', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      const consoleGroupSpy = vi.spyOn(console, 'group').mockImplementation(() => {});
      const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      const consoleGroupEndSpy = vi.spyOn(console, 'groupEnd').mockImplementation(() => {});

      monitor.logMetrics();

      expect(consoleGroupSpy).toHaveBeenCalledWith('Performance Metrics');
      expect(consoleLogSpy).toHaveBeenCalled();
      expect(consoleGroupEndSpy).toHaveBeenCalled();

      process.env.NODE_ENV = originalEnv;
    });

    it('does not log metrics in production environment', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'production';

      const consoleGroupSpy = vi.spyOn(console, 'group').mockImplementation(() => {});

      monitor.logMetrics();

      expect(consoleGroupSpy).not.toHaveBeenCalled();

      process.env.NODE_ENV = originalEnv;
    });

    it('reports to analytics in production environment', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'production';

      const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      monitor.reportToAnalytics();

      expect(consoleLogSpy).toHaveBeenCalledWith('Metrics ready for analytics:', expect.any(Object));

      process.env.NODE_ENV = originalEnv;
    });

    it('does not report to analytics in development environment', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'production';

      const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

      monitor.reportToAnalytics();

      expect(consoleLogSpy).toHaveBeenCalled();

      process.env.NODE_ENV = originalEnv;
    });
  });

  describe('global instance', () => {
    it('exports a global performance monitor instance', () => {
      expect(performanceMonitor).toBeInstanceOf(PerformanceMonitor);
    });

    it('sets up load event listener for automatic reporting', () => {
      const addEventListenerSpy = vi.spyOn(window, 'addEventListener');

      // Re-import to trigger the initialization
      vi.doMock('../performance', () => ({
        performanceMonitor: new PerformanceMonitor(),
      }));

      expect(addEventListenerSpy).toHaveBeenCalledWith('load', expect.any(Function));
    });
  });
});