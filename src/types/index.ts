export type ContextStatus = 'complete' | 'incomplete' | 'misleading';

export interface TimelineSegment {
  label: string;
  startTime: string; // e.g. "00:00"
  endTime: string;   // e.g. "00:15"
  text: string;
  type: 'previous' | 'shared' | 'next';
}

export interface AnalysisResult {
  id: string;
  query: string;
  inputType: 'url' | 'text' | 'image' | 'video' | 'audio';
  status: ContextStatus;
  statusLabel: string;
  confidence: number; // e.g. 94%
  timestamp: string;
  originalSource: {
    name: string;
    title: string;
    url?: string;
    publishedDate?: string;
    type: 'official' | 'news' | 'statement' | 'interview';
  };
  timeline?: {
    totalDuration: string;
    segments: TimelineSegment[];
  };
  sharedSegment: {
    quote: string;
    circulatedClaim: string;
    contextMissing: string;
  };
  originalContext: {
    previousContext?: string;
    actualStatement: string;
    nextContext?: string;
    fullMeaning: string;
  };
  meaningDifference: string;
  intellectualImpact: string; // Why this matters for intellectual security / social cohesion
  keyPoints: string[];
  recommendation: string;
}

export interface NewsCardItem {
  id: string;
  title: string;
  date: string;
  contentType: 'video' | 'text' | 'image' | 'audio';
  status: 'misleading' | 'incomplete' | 'false';
  statusLabel: string;
  circulatedSummary: string;
  truthSummary: string;
  verificationSource: string;
  verificationUrl?: string;
  category: string;
  engagement: string;
}

export interface TrustedSource {
  id: string;
  name: string;
  arabicName: string;
  category: 'government' | 'independent';
  description: string;
  url: string;
  iconType: 'shield' | 'check' | 'award' | 'newspaper' | 'bar-chart' | 'cloud' | 'heart-pulse';
  badge: string;
}

export interface ExampleCase {
  id: string;
  title: string;
  category: string;
  status: ContextStatus;
  circulatedText: string;
  originalText: string;
  shiftExplanation: string;
  source: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
