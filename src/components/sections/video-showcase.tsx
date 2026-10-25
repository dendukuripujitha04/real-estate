'use client';

import React, { useState, useRef, useEffect } from 'react';

interface VideoShowcaseProps {
  onOpenConsultation?: (service: string) => void;
}

export const VideoShowcaseSection: React.FC<VideoShowcaseProps> = ({ onOpenConsultation }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasStartedWithSound, setHasStartedWithSound] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Auto hide controls after mouse idle
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timer);
      if (isPlaying) {
        timer = setTimeout(() => setShowControls(false), 3000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      clearTimeout(timer);
    };
  }, [isPlaying]);

  // Handle Play with Sound (Full Volume)
  const handlePlayWithSound = () => {
    if (!videoRef.current) return;
    const v = videoRef.current;
    v.muted = false;
    v.volume = 1;
    setIsMuted(false);
    setVolume(1);
    v.play()
      .then(() => {
        setIsPlaying(true);
        setHasStartedWithSound(true);
      })
      .catch((err) => {
        console.warn('Playback error:', err);
      });
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && videoRef.current.volume === 0) {
      videoRef.current.volume = 1;
      setVolume(1);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="section-padding video-showcase-section" id="video-tour">
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <div className="section-tag light">
            <i className="fa fa-play-circle"></i> EXPERIENCE BUILDSPHERE IN ACTION
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Live Architectural &amp; Engineering Showcase
          </h2>
          <p className="section-desc" style={{ color: '#cbd5e1' }}>
            Watch real site execution, structural framing, and finished luxury villas in Vijayawada &amp; Amaravati. Tap below to play with full sound!
          </p>
        </div>

        {/* Master Cinema Video Frame */}
        <div className="cinema-frame-wrapper">
          {/* Ambient Golden Glow Behind Frame */}
          <div className="cinema-ambient-glow" aria-hidden="true"></div>

          {/* Luxury Frame Container */}
          <div
            className={`cinema-player-card ${isFullscreen ? 'is-fullscreen' : ''}`}
            ref={containerRef}
          >
            {/* Bezel Top Bar (Cinema Monitor Aesthetic) */}
            <div className="cinema-top-bar">
              <div className="cinema-window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-amber"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="cinema-monitor-title">
                <i className="fa fa-film" style={{ color: 'var(--accent-gold)' }}></i>
                <span>BuildSphere Studio • Live Project Video Tour</span>
              </div>
              <div className="cinema-badges">
                <span className="cinema-badge-quality">
                  <i className="fa fa-circle" style={{ color: '#10b981', fontSize: '0.6rem' }}></i> 4K UHD
                </span>
                <span className={`cinema-badge-sound ${!isMuted ? 'active' : ''}`}>
                  <i className={`fa ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>{' '}
                  {!isMuted ? 'SOUND ON' : 'MUTED'}
                </span>
              </div>
            </div>

            {/* Video Screen Viewport */}
            <div className="cinema-video-viewport" onClick={togglePlay}>
              <video
                ref={videoRef}
                className="cinema-video-tag"
                playsInline
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/video/brand-showcase.mp4" type="video/mp4" />
                <source src="/video/WhatsApp%20Video%202026-10-25%20at%209.30.45%20AM.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              {/* Big "Play With Sound" Callout Overlay (Shown before first play or when paused) */}
              {(!isPlaying || !hasStartedWithSound) && (
                <div
                  className="cinema-play-overlay"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayWithSound();
                  }}
                >
                  <div className="cinema-play-btn-glow">
                    <button
                      className="cinema-play-pulse-btn"
                      aria-label="Play video with sound"
                    >
                      <i className="fa fa-play"></i>
                    </button>
                  </div>
                  <div className="cinema-play-text-box">
                    <h4 className="cinema-play-title">
                      <i className="fa fa-volume-up" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i>
                      {hasStartedWithSound ? 'RESUME PLAYBACK' : 'PLAY WITH SOUND'}
                    </h4>
                    <p className="cinema-play-desc">
                      Tap to experience our engineering walkthrough with full cinematic audio
                    </p>
                  </div>
                </div>
              )}

              {/* Top Floating Unmute Toggle Pill */}
              <button
                className={`floating-audio-toggle ${!isMuted ? 'unmuted' : 'muted'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                title={isMuted ? 'Click to enable audio' : 'Click to mute'}
              >
                <i className={`fa ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
                <span>{isMuted ? 'Click For Sound 🔊' : 'Audio Active 🔊'}</span>
              </button>
            </div>

            {/* Custom Cinema Control Bar */}
            <div
              className={`cinema-controls-bar ${showControls || !isPlaying ? 'visible' : 'hidden'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Progress Scrubber */}
              <div className="cinema-scrubber-row">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="cinema-progress-range"
                  aria-label="Seek video progress"
                />
              </div>

              {/* Buttons Row */}
              <div className="cinema-controls-actions">
                <div className="controls-left">
                  {/* Play/Pause */}
                  <button
                    className="cinema-ctrl-btn"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    <i className={`fa ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                  </button>

                  {/* Sound & Volume */}
                  <div className="cinema-volume-group">
                    <button
                      className="cinema-ctrl-btn"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      <i
                        className={`fa ${
                          isMuted || volume === 0
                            ? 'fa-volume-mute'
                            : volume < 0.5
                            ? 'fa-volume-down'
                            : 'fa-volume-up'
                        }`}
                      ></i>
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="cinema-volume-slider"
                      aria-label="Volume slider"
                    />
                  </div>

                  {/* Time Duration */}
                  <div className="cinema-time-display">
                    <span>{formatTime(currentTime)}</span>
                    <span style={{ opacity: 0.5 }}>/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="controls-right">
                  {/* Quick Consultation CTA */}
                  {onOpenConsultation && (
                    <button
                      className="btn btn-primary btn-sm cinema-quote-btn"
                      onClick={() => onOpenConsultation('Inquiry from Video Showcase')}
                    >
                      <i className="fa fa-calendar-check"></i> FREE SITE VISIT
                    </button>
                  )}

                  {/* Fullscreen */}
                  <button
                    className="cinema-ctrl-btn"
                    onClick={toggleFullscreen}
                    aria-label="Toggle Fullscreen"
                    title="Fullscreen"
                  >
                    <i className={`fa ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pills Below Video Frame */}
        <div className="cinema-highlights-grid">
          <div className="cinema-highlight-card">
            <div className="highlight-icon-box">
              <i className="fa fa-hard-hat"></i>
            </div>
            <div>
              <h5>Live Site Execution</h5>
              <p>Reinforced concrete, deep pile foundations, and Vizag TMT steel in action.</p>
            </div>
          </div>

          <div className="cinema-highlight-card">
            <div className="highlight-icon-box">
              <i className="fa fa-drafting-compass"></i>
            </div>
            <div>
              <h5>Vasthu Compliant Design</h5>
              <p>Scientific floor planning, maximum natural cross-ventilation, and elegance.</p>
            </div>
          </div>

          <div className="cinema-highlight-card">
            <div className="highlight-icon-box">
              <i className="fa fa-certificate"></i>
            </div>
            <div>
              <h5>15-Year Warranty</h5>
              <p>Engineered structural guarantee with certified IS standard compliance.</p>
            </div>
          </div>

          <div className="cinema-highlight-card">
            <div className="highlight-icon-box">
              <i className="fa fa-volume-up"></i>
            </div>
            <div>
              <h5>Cinematic Sound</h5>
              <p>Crystal clear on-site audio &amp; narration explaining our building process.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
