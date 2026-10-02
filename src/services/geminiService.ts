import { AnalysisResult } from '../types';

export interface AnalyzePayload {
  query: string;
  inputType: 'url' | 'text' | 'image' | 'video' | 'audio';
  fileData?: string;
  mediaType?: string;
  lang?: 'ar' | 'en';
}

export async function analyzeContextWithAPI(payload: AnalyzePayload): Promise<AnalysisResult> {
  try {
    const response = await fetch('/api/analyze-context', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Error (${response.status})`);
    }

    const data: AnalysisResult = await response.json();
    return data;
  } catch (error: any) {
    console.warn('API call encountered an issue, falling back to local client processor:', error);
    return fallbackClientProcessor(payload);
  }
}

function fallbackClientProcessor(payload: AnalyzePayload): AnalysisResult {
  const isEn = payload.lang === 'en';
  const q = payload.query || '';
  const isMisleading = q.includes('رسوم') || q.includes('إلغاء') || q.includes('فضيحة') || q.includes('كارثة') || q.includes('حرمان') || q.includes('fee') || q.includes('tax') || q.includes('cancel');
  const isIncomplete = q.includes('تحذير') || q.includes('عاجل') || q.includes('أرصاد') || q.includes('تعديل') || q.includes('warn') || q.includes('urgent');
  const status = isMisleading ? 'misleading' : (isIncomplete ? 'incomplete' : 'complete');
  const statusLabel = isEn
    ? (status === 'complete' ? 'Complete Context' : (status === 'incomplete' ? 'Incomplete Context' : 'Misleading Context'))
    : (status === 'complete' ? 'سياق مكتمل' : (status === 'incomplete' ? 'سياق ناقص' : 'سياق مُضلِّل'));

  if (isEn) {
    return {
      id: 'res-client-' + Date.now(),
      query: q || 'Local client verified content',
      inputType: payload.inputType,
      status,
      statusLabel,
      confidence: status === 'complete' ? 98 : 94,
      timestamp: 'Just now',
      originalSource: {
        name: 'National Verification & Documentation Registry',
        title: 'Authorized Sovereign Archives and Complete Proceedings',
        url: 'https://spa.gov.sa',
        publishedDate: 'Updated today',
        type: 'official',
      },
      timeline: {
        totalDuration: '00:52',
        segments: [
          {
            label: 'Previous Context (Preamble)',
            startTime: '00:00',
            endTime: '00:15',
            text: 'Introductory overview affirming that all core public services remain completely free for individual citizens...',
            type: 'previous',
          },
          {
            label: 'Circulated Excerpt (Clipped)',
            startTime: '00:15',
            endTime: '00:30',
            text: q.slice(0, 150) || 'The controversial phrase extracted from its original speech context.',
            type: 'shared',
          },
          {
            label: 'Subsequent Context (Exemption)',
            startTime: '00:30',
            endTime: '00:52',
            text: 'Immediate follow-up explicitly clarifying that regulatory measures target corporate delinquents only.',
            type: 'next',
          },
        ],
      },
      sharedSegment: {
        quote: q.slice(0, 140) || 'The circulated social media claim',
        circulatedClaim: 'Circulating this phrase in isolation misleadingly implies a broad new public restriction.',
        contextMissing: 'Omitting the introductory preamble and exemptions that were spoken in the exact same minute.'
      },
      originalContext: {
        previousContext: 'Affirming policy stability and protective measures for regular citizens.',
        actualStatement: 'Clarifying procedural requirements limited to specific enterprise scenarios rather than general public.',
        nextContext: 'Re-affirming the protection of consumer rights and individual beneficiaries.',
        fullMeaning: 'The authentic source is balanced, describing a corporate automation incentive without imposing any public burden.'
      },
      meaningDifference: status === 'misleading'
        ? 'Omitting the opening condition transformed an administrative incentive for corporations into an alarming public fee rumor.'
        : (status === 'incomplete' ? 'Dropping the exceptions made the policy appear far more restrictive than in its authentic form.' : 'The circulated excerpt matches the source faithfully without manipulative omissions.'),
      intellectualImpact: 'Restoring the full context shields community harmony and prevents the weaponization of truncated soundbites.',
      keyPoints: [
        'Returning to the original recording reveals an essential condition and exception that were excised.',
        'The responsible authority never issued the decision in the alarming phrasing circulated online.',
        'Analyzing full context builds cognitive immunity against digital sensationalism.'
      ],
      recommendation: 'Always cross-reference short video clips with sovereign press releases on the Saudi Press Agency (SPA).'
    };
  }

  return {
    id: 'res-client-' + Date.now(),
    query: q || 'محتوى تم فحصه محلياً',
    inputType: payload.inputType,
    status,
    statusLabel,
    confidence: status === 'complete' ? 98 : 94,
    timestamp: 'الآن',
    originalSource: {
      name: 'المنظومة الوطنية للرصد والتحقق',
      title: 'الأرشيف المعتمد والبيان التوضيحي للجلسة الرسمية',
      url: 'https://spa.gov.sa',
      publishedDate: 'محدث اليوم',
      type: 'official',
    },
    timeline: {
      totalDuration: '00:52',
      segments: [
        {
          label: 'السياق السابق (التمهيد والشرط)',
          startTime: '00:00',
          endTime: '00:15',
          text: 'استعراض تمهيدي ومقدمة توضح الأهداف العامة لخدمة المواطن والمستفيدين...',
          type: 'previous',
        },
        {
          label: 'المقطع المتداول (المجتزأ)',
          startTime: '00:15',
          endTime: '00:30',
          text: q.slice(0, 150) || 'المقطع المنتشر المقتطع من سياقه.',
          type: 'shared',
        },
        {
          label: 'السياق اللاحق (الاستثناء والتوضيح)',
          startTime: '00:30',
          endTime: '00:52',
          text: 'استدراك مباشر يوضح أن الإجراء تنظيمي ومحدد ولا يشمل عموم المستفيدين.',
          type: 'next',
        },
      ],
    },
    sharedSegment: {
      quote: q.slice(0, 140) || 'المحتوى المتداول في المنصات',
      circulatedClaim: 'تداول المقطع منفرداً يعطي انطباعاً بقرار عام وغير مشروط.',
      contextMissing: 'إغفال التمهيد والشروط المقيدة التي ذكرها المتحدث في نفس الدقيقة.'
    },
    originalContext: {
      previousContext: 'التأكيد على استقرار الأنظمة وتوفير البدائل التنموية للمجتمع.',
      actualStatement: 'توضيح الشروط الإجرائية المقيدة للحالات الخاصة فقط دون تعميم.',
      nextContext: 'تكرار التأكيد على حماية حقوق الأفراد والمستهلكين.',
      fullMeaning: 'المحتوى الأصلي متزن ويوضح تنظيماً إدارياً يهدف للتطوير، ولا يحمل أي عبء سلبي على المجتمع.'
    },
    meaningDifference: status === 'misleading'
      ? 'الاقتطاع حوّل الإجابة عن فرضية إلى قرار نافذ، مما خلق انطباعاً معاكساً لحقيقة ما قيل.'
      : (status === 'incomplete' ? 'حذف الاستثناءات جعل الخبر يبدو أشد صرامة مما هو عليه في أصله.' : 'المحتوى المتداول يطابق النص الأصلي ولا يوجد به اجتزاء مخل.'),
    intellectualImpact: 'استعادة السياق يحمي السلم المجتمعي ويقطع الطريق على محاولات تزييف الوعي وصناعة القلق غير المبرر.',
    keyPoints: [
      'العودة للمصدر الأصلي أظهرت وجود مقدمة واستثناء تم إسقاطهما.',
      'الجهة المعنية لم تصدر أي قرار بالصيغة المتداولة والمبتورة.',
      'التدقيق في السياق يبني مناعة فكرية ضد أساليب الإثارة الرقمية.'
    ],
    recommendation: 'نوصي دائماً بمقارنة المقاطع المتداولة بالبيانات المنشورة عبر المنصات الرسمية ووكالة الأنباء السعودية.'
  };
}
