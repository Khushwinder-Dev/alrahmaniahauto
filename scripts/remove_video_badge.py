with open('components/Home/HeroSection.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update imports
c = c.replace(
    'import { ArrowRight, Play, Pause, Volume2, VolumeX, Image as ImageIcon } from "lucide-react";',
    'import { ArrowRight, Play, Pause } from "lucide-react";'
)

# 2. Remove isMuted state if not needed, or keep it muted
# 3. Remove the badge JSX:
old_badge = '''      {/* 5. Video Mode Status Badge & Sound Toggle */}
      {isPlayingVideo && (
        <div className="absolute top-24 sm:top-28 right-5 sm:right-10 z-30 flex items-center gap-2.5 bg-black/60 backdrop-blur-lg border border-red-500/30 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold shadow-2xl transition-all">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          <span className="hidden sm:inline text-white/90">
            {isVideoPaused
              ? (isArabic ? "الفيديو متوقف" : "Video Paused")
              : (isArabic ? "فيديو الورشة" : "Workshop Video")}
          </span>
          <button
            onClick={handleToggleMute}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            className="p-1 hover:text-red-500 transition-colors cursor-pointer"
            title={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-white/80 hover:text-white" />
            ) : (
              <Volume2 className="w-4 h-4 text-red-500" />
            )}
          </button>
          <button
            onClick={handleSwitchToImage}
            className="pl-2 border-l border-white/20 hover:text-red-500 transition-colors flex items-center gap-1.5 cursor-pointer text-white/80 hover:text-white"
            title="Return to photo banner"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium">{isArabic ? "صورة" : "Photo"}</span>
          </button>
        </div>
      )}'''

# Handle both CRLF and LF
c_lf = c.replace('\r\n', '\n')
badge_lf = old_badge.replace('\r\n', '\n')

if badge_lf in c_lf:
    c_lf = c_lf.replace(badge_lf, '')
    print("Successfully removed video status badge")
else:
    print("Badge pattern not matched, checking...")

with open('components/Home/HeroSection.tsx', 'w', encoding='utf-8') as f:
    f.write(c_lf)

print("Saved components/Home/HeroSection.tsx")
