import React from 'react';
import { Star, ExternalLink, MessageSquareHeart, CheckCircle2 } from 'lucide-react';
import { GOOGLE_REVIEWS, ReviewItem } from '../data/reviewsData';
import { RESTAURANT_INFO } from '../data/menuData';

export const GoogleReviewsSection: React.FC = () => {
  // Google review direct URL (opens Google Maps search / review page)
  const googleReviewUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Food Time Praia do Francês Marechal Deodoro AL')}`;

  // Helper for generating distinct avatar background colors based on author name
  const getAvatarBg = (name: string) => {
    const bgColors = [
      'bg-red-500',
      'bg-blue-600',
      'bg-teal-600',
      'bg-amber-500',
      'bg-purple-600',
      'bg-emerald-600',
      'bg-orange-500',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return bgColors[Math.abs(hash) % bgColors.length];
  };

  // Get initials from author name
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // Duplicate reviews array for seamless infinite marquee loop
  const marqueeReviews = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  return (
    <section id="google-reviews-section" className="py-12 bg-gradient-to-b from-amber-50 via-white to-amber-50 overflow-hidden border-t-2 border-b-2 border-amber-200">
      
      {/* Inline Style for Infinite Smooth Scrolling Marquee */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left">
          <div className="space-y-2">
            
            {/* Google Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border-2 border-slate-200 shadow-xs">
              {/* Official Google G Logo SVG */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
                />
              </svg>
              <span className="font-black text-xs uppercase tracking-wider text-slate-800">
                Avaliações Verificadas no Google
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              O que nossos clientes dizem
            </h2>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-slate-700 font-bold text-sm">
              <span className="text-2xl font-black text-amber-500 flex items-center gap-1">
                4.9
                <span className="flex text-amber-400 text-lg">★★★★★</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 font-extrabold">+100 avaliações de clientes satisfeitos</span>
            </div>
          </div>

          {/* Direct CTA to leave a Google Review */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black py-3.5 px-6 rounded-2xl shadow-[4px_4px_0px_0px_#1e3a8a] transition-all active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer border-2 border-blue-400"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span>Avaliar no Google</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>

      </div>

      {/* Auto-sliding Horizontal Marquee Cards Track */}
      <div className="relative w-full py-4">
        
        {/* Left & Right subtle fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-amber-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-amber-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="marquee-track space-x-4 px-4">
          {marqueeReviews.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[280px] sm:w-[340px] bg-white p-5 rounded-3xl border-2 border-amber-200 shadow-md hover:border-orange-400 transition-all flex flex-col justify-between shrink-0 select-none group"
            >
              <div className="space-y-3">
                {/* Author Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-10 h-10 rounded-2xl ${getAvatarBg(
                        rev.author
                      )} text-white font-black text-sm flex items-center justify-center shadow-xs border border-white`}
                    >
                      {getInitials(rev.author)}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm leading-tight flex items-center gap-1">
                        {rev.author}
                      </h4>
                      <span className="text-[10px] font-bold text-slate-400 block">
                        {rev.timeAgo} no Google
                      </span>
                    </div>
                  </div>

                  {/* Google G small icon */}
                  <svg className="w-4 h-4 opacity-60" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
                    />
                  </svg>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-xs font-black text-amber-600 ml-1">
                    5.0
                  </span>
                </div>

                {/* Comment text */}
                <p className="text-xs font-medium text-slate-700 leading-relaxed italic line-clamp-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* Tag Footer */}
              {rev.tag && (
                <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-[10px] text-slate-500 font-bold">
                  <span className="bg-amber-100/70 text-orange-950 px-2.5 py-1 rounded-lg border border-amber-200">
                    {rev.tag}
                  </span>
                  <span className="flex items-center gap-0.5 text-teal-700 font-extrabold">
                    <CheckCircle2 className="w-3 h-3 text-teal-600" />
                    Verificado
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Touch/Scroll hint for mobile */}
      <div className="text-center mt-3">
        <p className="text-[11px] font-bold text-slate-400 flex items-center justify-center gap-1">
          <span>Passe o mouse ou toque para pausar o carrossel</span>
        </p>
      </div>
    </section>
  );
};
