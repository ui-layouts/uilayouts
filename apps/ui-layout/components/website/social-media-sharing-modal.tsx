// @ts-nocheck
"use client"
import React, { useState, useEffect } from 'react';
import { X, Share2, Twitter, Linkedin, Github, Heart } from 'lucide-react';

const SocialShareModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCount, setShowCount] = useState(0);

  useEffect(() => {
    // Check different interaction types
    const hasShared = localStorage.getItem('ui-layouts-share-modal-shared');
    const lastClosedDate = localStorage.getItem('ui-layouts-share-modal-closed-date');
    const modalShowCount = parseInt(localStorage.getItem('ui-layouts-share-modal-count') || '0');
    const currentDate = new Date().getTime();

    // If user has shared before, never show again
    if (hasShared) {
      return;
    }

    // Check if enough time has passed since last close
    let shouldShow = false;
    
    if (!lastClosedDate) {
      // First time visitor
      shouldShow = true;
    } else {
      // Check if 2 days have passed since last close
      const lastClosed = parseInt(lastClosedDate);
      const twoDaysInMs = 2 * 24 * 60 * 60 * 1000; // 2 days
      
      if (currentDate - lastClosed >= twoDaysInMs) {
        shouldShow = true;
      }
    }

    if (shouldShow) {
      setShowCount(modalShowCount);
      const timer = setTimeout(() => {
        setShowModal(true);
        // Increment show count
        localStorage.setItem('ui-layouts-share-modal-count', (modalShowCount + 1).toString());
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    // Mark as closed with current timestamp (not shared)
    localStorage.setItem('ui-layouts-share-modal-closed-date', new Date().getTime().toString());
  };

  const handleShare = (platform: string) => {
    const url = window.location.origin;
    
    // Pre-written posts for each platform
    const posts = {
      twitter: "🚀 Just discovered UI Layouts - an amazing collection of ready-to-use UI components and layouts for developers! \n\n✨ Beautiful designs\n⚡ Easy to implement\n🎨 Modern & responsive\n\nPerfect for speeding up development! Check it out:",
      
      linkedin: "I just found an incredible resource for web developers - UI Layouts! 🚀\n\nIt's a comprehensive collection of beautiful, ready-to-use UI components and layouts that can significantly speed up development workflow.\n\nWhat I love about it:\n✨ Clean, modern designs\n⚡ Easy to implement\n🎨 Fully responsive\n📱 Mobile-first approach\n🔧 Developer-friendly\n\nIf you're building web applications and want to save time while creating beautiful interfaces, this is definitely worth checking out!\n\n#WebDevelopment #UI #Frontend #Developer #WebDesign",
    };
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(posts.twitter)}&url=${encodeURIComponent(url)}&hashtags=webdev,ui,frontend,developer,layouts`,
      
      linkedin: `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(posts.linkedin + '\n\n' + url)}`,
      
      github: 'https://github.com/your-username/ui-layouts' 
    };

    window.open(shareUrls[platform], '_blank');

    localStorage.setItem('ui-layouts-share-modal-shared', 'true');
    
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fadeIn"
        onClick={handleClose}
      >
        <div 
          className="bg-white dark:bg-neutral-900 border dark:border-neutral-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 relative transform transition-all animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-primary text-primary-foreground hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100 z-10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-1">
              <Heart className="w-8 h-8 fill-white text-white" />
            </div>

            <h2 className="text-2xl font-medium text-primary mb-2">
              {showCount === 0 
                ? "Love UI Layouts? 💜"
                : "Sorry to interrupt! 🙏 Still loving UI Layouts?"
              }
            </h2>

            {/* Description */}
            <p className="text-primary/60 mb-6 leading-relaxed text-sm">
              {showCount === 0
                ? "Help us grow! Share UI Layouts with your network using our ready-to-post content. Just click and share - no writing needed!"
                : "We'd really appreciate your support! Share UI Layouts with ready-to-post content. One click and you're done!"
              }
            </p>

            {/* Social buttons with preview text */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleShare('twitter')}
                className="w-full flex items-center justify-start gap-3 bg-black text-white py-4 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 group"
              >
                <Twitter size={22} className="flex-shrink-0 fill-white" />
                <div className="text-left flex-1">
                  <div className="font-medium">Share on X</div>
                  <div className="text-xs text-gray-300 opacity-75 group-hover:opacity-100 transition-opacity">
                    "🚀 Just discovered UI Layouts - amazing collection..."
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => handleShare('linkedin')}
                className="w-full flex items-center justify-start gap-3 bg-blue-600 text-white py-4 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 group"
              >
                <Linkedin size={22} className="flex-shrink-0 fill-white" />
                <div className="text-left flex-1">
                  <div className="font-medium">Share on LinkedIn</div>
                  <div className="text-xs text-blue-200 opacity-75 group-hover:opacity-100 transition-opacity">
                    Professional post with benefits & hashtags included
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => handleShare('github')}
                className="w-full flex items-center justify-start gap-3 bg-gray-800 text-white py-4 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105 group"
              >
                <Github size={22} className="flex-shrink-0 fill-white" />
                <div className="text-left flex-1">
                  <div className="font-medium">Star on GitHub</div>
                  <div className="text-xs text-gray-300 opacity-75 group-hover:opacity-100 transition-opacity">
                    Show support & get updates
                  </div>
                </div>
              </button>
            </div>

            {/* Skip option */}
            <button
              onClick={handleClose}
              className="text-gray-500 text-sm hover:text-gray-700 transition-colors underline-offset-2 hover:underline"
            >
              Maybe later
            </button>

            {/* Small note */}
            <p className="text-xs text-primary/70 mt-4">
              Pre-written posts included - just click and share! ✨
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default SocialShareModal;