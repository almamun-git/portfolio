// Performance monitoring utilities for the portfolio app
export interface PerformanceMetrics {
  navigationStart: number;
  loadComplete: number;
  domContentLoaded: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
}

export class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  
  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMetrics();
    }
  }

  private initializeMetrics() {
    // Navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.metrics.navigationStart = navigation.startTime;
      this.metrics.loadComplete = navigation.loadEventEnd;
      this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd;
    }

    // Paint metrics
    this.observePaintMetrics();
    
    // Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
  }

  private observePaintMetrics() {
    const paintMetrics = performance.getEntriesByType('paint');
    paintMetrics.forEach((metric) => {
      if (metric.name === 'first-paint') {
        this.metrics.firstPaint = metric.startTime;
      } else if (metric.name === 'first-contentful-paint') {
        this.metrics.firstContentfulPaint = metric.startTime;
      }
    });
  }

  private observeLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private observeFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEventTiming) => {
          if (entry.processingStart && entry.startTime) {
            this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
          }
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  private observeCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: LayoutShift) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cumulativeLayoutShift = clsValue;
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public logMetrics() {
    if (process.env.NODE_ENV === 'development') {
      console.group('Performance Metrics');
      console.log('Navigation Start:', this.metrics.navigationStart);
      console.log('DOM Content Loaded:', this.metrics.domContentLoaded);
      console.log('Load Complete:', this.metrics.loadComplete);
      console.log('First Paint:', this.metrics.firstPaint);
      console.log('First Contentful Paint:', this.metrics.firstContentfulPaint);
      console.log('Largest Contentful Paint:', this.metrics.largestContentfulPaint);
      console.log('First Input Delay:', this.metrics.firstInputDelay);
      console.log('Cumulative Layout Shift:', this.metrics.cumulativeLayoutShift);
      console.groupEnd();
    }
  }

  public reportToAnalytics() {
    // In a real application, you would send these metrics to your analytics service
    // Example: gtag('event', 'timing_complete', { ... });
    if (process.env.NODE_ENV === 'production') {
      // Analytics reporting would go here
      console.log('Metrics ready for analytics:', this.getMetrics());
    }
  }
}

// Initialize performance monitoring
export const performanceMonitor = new PerformanceMonitor();

// Report metrics after page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.logMetrics();
      performanceMonitor.reportToAnalytics();
    }, 2000); // Wait 2 seconds after load to capture most metrics
  });
}