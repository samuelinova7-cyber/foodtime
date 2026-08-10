import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles, Bike, Umbrella, ExternalLink, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const VideoShowcaseSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
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
    <section id="video-experience" className="py-8 sm:py-12 bg-gradient-to-b from-amber-50 via-orange-100/60 to-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 bg-orange-600 text-white font-black text-xs uppercase px-4 py-1.5 rounded-full tracking-wider shadow-sm">
            <Flame className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Vídeo Oficial • Experiência Real</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Sinta o Sabor & o Clima da Praia do Francês
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-semibold">
            Confira como nossos pratos, porções de frutos do mar e bebidas são preparados e servidos com carinho no iFood e pé na areia.
          </p>
        </div>

        {/* Video Container - Full Width Video Card */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-slate-950 group">
          
          {/* Main Video Element */}
          <div className="relative aspect-video w-full max-h-[600px] bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/gu3r4btn/video/upload/v1786388987/WhatsApp_Video_2026-08-10_at_3.46.32_PM_aenqzi.mp4"
              className="w-full h-full object-cover sm:object-contain md:object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            {/* Subtle Gradient Overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* Top Badges Over Video */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex flex-wrap items-center gap-2 z-10">
              <span className="bg-red-600/90 backdrop-blur-md text-white font-black text-[10px] sm:text-xs px-3 py-1.5 rounded-xl border border-red-400/50 shadow-md flex items-center gap-1.5">
                <Bike className="w-3.5 h-3.5 text-amber-300" />
                <span>iFood 4.9 ★</span>
              </span>
              <span className="bg-amber-400/95 backdrop-blur-md text-orange-950 font-black text-[10px] sm:text-xs px-3 py-1.5 rounded-xl border border-orange-500/50 shadow-md flex items-center gap-1.5">
                <Umbrella className="w-3.5 h-3.5 text-orange-900" />
                <span>Atendimento na Praia</span>
              </span>
            </div>

            {/* Video Controls Overlay (Mute & Play/Pause Buttons) */}
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 flex items-center gap-2 z-10">
              <button
                onClick={toggleMute}
                className="bg-black/60 hover:bg-black/80 text-white p-2.5 sm:p-3 rounded-2xl backdrop-blur-md border border-white/20 transition-all active:scale-95 cursor-pointer shadow-lg flex items-center gap-1.5 text-xs font-extrabold"
                title={isMuted ? 'Ativar Áudio' : 'Desativar Áudio'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                    <span className="hidden xs:inline">Sem som</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    <span className="hidden xs:inline">Com som</span>
                  </>
                )}
              </button>

              <button
                onClick={togglePlay}
                className="bg-black/60 hover:bg-black/80 text-white p-2.5 sm:p-3 rounded-2xl backdrop-blur-md border border-white/20 transition-all active:scale-95 cursor-pointer shadow-lg"
                title={isPlaying ? 'Pausar Vídeo' : 'Reproduzir Vídeo'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
                )}
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="space-y-1 text-white max-w-xl">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                    Food Time • Praia do Francês
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black leading-tight drop-shadow-md">
                  A melhor gastronomia à beira-mar e delivery acelerado no iFood!
                </h3>
              </div>

              {/* Action Buttons overlaid at video bottom */}
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <a
                  href={RESTAURANT_INFO.ifoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-black px-4 py-2.5 rounded-2xl text-xs sm:text-sm shadow-xl border border-red-400 flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer flex-1 sm:flex-none"
                >
                  <Bike className="w-4 h-4" />
                  <span>Pedir no iFood</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Olá! Vi o vídeo do Food Time e gostaria de fazer um pedido.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-black px-4 py-2.5 rounded-2xl text-xs sm:text-sm shadow-xl border border-green-400 flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer flex-1 sm:flex-none"
                >
                  <span>Pedir WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
