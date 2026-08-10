import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Instagram, ExternalLink, Play, Pause, Sparkles, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface VideoReel {
  id: string;
  url: string;
  title: string;
  likes: string;
  views: string;
}

const INSTAGRAM_REELS: VideoReel[] = [
  {
    id: 'reel-1',
    url: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1786390201/SnapInsta.to_AQMAIhlu35eiY4TrC6of7Um1KBE_SX-_zNUqM1tR70CVR3Uj1EiniSb0f5qmga8TzdsUa9ze2xqgewFhNo4qGf4DLSWUujCxi1z1yrI_udcocz.mp4',
    title: 'Nossa Cozinha Pé na Areia 🌊🍳',
    likes: '1.2k',
    views: '15.4k',
  },
  {
    id: 'reel-2',
    url: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1786390189/SnapInsta.to_AQP5r24EjM_zDvjHm-eAKBlExMrF89CNcHhn21qCuNjLnWJd8R3pnaBPUArhvPbngCwpBFmaSXxa5ReeHP_hzkUMcsAPtTG1wvjyYwI_khwaio.mp4',
    title: 'Peixe Frito Fresquinho 🐟🔥',
    likes: '980',
    views: '12.1k',
  },
  {
    id: 'reel-3',
    url: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1786390185/SnapInsta.to_AQNSXw6tQdPkSMgE_JYmYhnwxSeUCIiCR8O8BFvCQ91eKcZGgwZHKruog7jA4MxtbpBgz3KDi7cF97I2RHpqXkG_oP_OiUD9LI-ExKU_wtvwez.mp4',
    title: 'Moqueca & Acompanhamentos 🥘✨',
    likes: '2.1k',
    views: '28.3k',
  },
  {
    id: 'reel-4',
    url: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1786390183/SnapInsta.to_AQP3sEEmEgzxj4r2YMTxqqy2n0yLDYme4Na7BiLz7p5ESMlNaIDN-IT9KeAk2ehW0THDs3iuUcrBrnCwa-rQ3jc6qtVAfRHpOfhVN5U_ojipsr.mp4',
    title: 'Marmitas Caprichadas iFood 🚴‍♂️📦',
    likes: '850',
    views: '9.8k',
  },
  {
    id: 'reel-5',
    url: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1786390180/SnapInsta.to_AQMUcPiXj3K6IaGNI_sRGlYtaMUZrL5aNbrwsMZHIrosA9F8WLXbBjkn_dsj-VEEXrIJhFexl62Mq6mtFCs__iRGMfh5EQ1JEH-6-Ew_ovxkxf.mp4',
    title: 'Atendimento na Praia do Francês 🏖️🍹',
    likes: '3.4k',
    views: '42.0k',
  },
  {
    id: 'reel-6',
    url: 'https://res.cloudinary.com/gu3r4btn/video/upload/v1786390178/SnapInsta.to_AQOzAXyosR_Nant-sZrdC_njRBchJ2HyTB9THFBY5WSq8BkyDp3RezgolwMtP2s3ehQhHLFlYnaEM5vmyWkyBjy4T2BAOUkBYW4F0is_qfyhio.mp4',
    title: 'Petiscos & Cerveja Trincando 🍺🍤',
    likes: '1.8k',
    views: '21.5k',
  },
];

// Individual Reel Video Card component
const ReelCard: React.FC<{ reel: VideoReel }> = ({ reel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-[220px] sm:w-[260px] h-[380px] sm:h-[440px] rounded-3xl overflow-hidden bg-slate-950 border-4 border-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all shrink-0 group select-none">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={reel.url}
        className="w-full h-full object-cover cursor-pointer"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onClick={togglePlay}
      />

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/70 via-black/20 to-transparent flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white text-[11px] font-black">
          <Instagram className="w-3.5 h-3.5 text-pink-400" />
          <span>Reels</span>
        </div>

        {/* Audio Toggle Button */}
        <button
          onClick={toggleSound}
          className={`p-2 rounded-full backdrop-blur-md border border-white/30 transition-all cursor-pointer shadow-lg active:scale-95 ${
            isMuted
              ? 'bg-black/60 text-white hover:bg-black/80'
              : 'bg-pink-600 text-white ring-2 ring-pink-400'
          }`}
          title={isMuted ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-amber-300" />
          ) : (
            <Volume2 className="w-4 h-4 text-white animate-pulse" />
          )}
        </button>
      </div>

      {/* Bottom Gradient & Reels Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white space-y-2 z-10">
        <div className="flex items-center justify-between text-xs text-slate-300 font-bold">
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            {reel.likes}
          </span>
          <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">
            {reel.views} viz.
          </span>
        </div>

        <h4 className="font-extrabold text-sm text-white line-clamp-2 leading-tight drop-shadow-sm">
          {reel.title}
        </h4>

        {/* Action Link */}
        <a
          href={RESTAURANT_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:opacity-90 text-white font-black text-[11px] py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md uppercase tracking-wider transition-all"
        >
          <span>Ver no Insta</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Center Play Indicator Overlay if paused */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 z-20 cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-2xl border-2 border-white">
            <Play className="w-7 h-7 fill-slate-900 ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export const InstagramSection: React.FC = () => {
  // Multiply list for continuous infinite marquee
  const marqueeItems = [...INSTAGRAM_REELS, ...INSTAGRAM_REELS, ...INSTAGRAM_REELS];

  return (
    <section
      id="instagram-reels-section"
      className="py-12 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden border-t-4 border-pink-500/30"
    >
      {/* Inline styles for Infinite Smooth Marquee */}
      <style>{`
        @keyframes instaMarqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .insta-marquee-track {
          display: flex;
          width: max-content;
          animation: instaMarqueeScroll 40s linear infinite;
        }
        .insta-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-2">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-black text-xs uppercase px-3.5 py-1.5 rounded-full tracking-wider shadow-md">
              <Instagram className="w-4 h-4" />
              <span>@foodtime.praia • Instagram Oficial</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Acompanhe Nosso Feed & Reels
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-xl">
              Confira os vídeos reais gravados por clientes e por nossa equipe na Praia do Francês. Clique no ícone de som no card para ouvir o áudio! 🔊
            </p>
          </div>

          {/* Follow Instagram Button */}
          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:scale-105 text-white font-black py-3.5 px-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider cursor-pointer border-2 border-pink-400 shrink-0"
          >
            <Instagram className="w-5 h-5" />
            <span>Seguir no Instagram</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
        </div>

      </div>

      {/* Infinite Auto-scrolling Video Marquee */}
      <div className="relative w-full py-2">
        {/* Side Shadow Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="insta-marquee-track space-x-4 px-4">
          {marqueeItems.map((reel, idx) => (
            <ReelCard key={`${reel.id}-${idx}`} reel={reel} />
          ))}
        </div>
      </div>

      {/* Bottom Tip */}
      <div className="text-center mt-6">
        <span className="text-[11px] font-bold text-slate-400 bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-700 inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Passe o mouse ou toque nos vídeos para pausar o movimento ou ligar o áudio</span>
        </span>
      </div>
    </section>
  );
};
