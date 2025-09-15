// @ts-nocheck
'use client';
import React, { useState, useEffect } from 'react';
import { X, Share2, Twitter, Linkedin, Github, Heart } from 'lucide-react';

const SocialShareModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCount, setShowCount] = useState(0);

  useEffect(() => {
    // Check different interaction types
    const hasShared = localStorage.getItem('ui-layouts-share-modal-shared');
    const lastClosedDate = localStorage.getItem(
      'ui-layouts-share-modal-closed-date'
    );
    const modalShowCount = parseInt(
      localStorage.getItem('ui-layouts-share-modal-count') || '0'
    );
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
      const twoDaysInMs = 1 * 24 * 60 * 60 * 1000; // 2 days

      if (currentDate - lastClosed >= twoDaysInMs) {
        shouldShow = true;
      }
    }

    if (shouldShow) {
      setShowCount(modalShowCount);
      const timer = setTimeout(() => {
        setShowModal(true);
        // Increment show count
        localStorage.setItem(
          'ui-layouts-share-modal-count',
          (modalShowCount + 1).toString()
        );
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem(
      'ui-layouts-share-modal-closed-date',
      new Date().getTime().toString()
    );
  };

  const handleShare = (platform: string) => {
    const targetUrl = "https://pro.ui-layouts.com/dashboard/rewards";
  
    localStorage.setItem("ui-layouts-share-modal-shared", "true");
  
    window.open(targetUrl, "_blank");
  
    setShowModal(false);
  };
  

  if (!showModal) return null;

  return (
    <>
      <div
        className='fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fadeIn'
        onClick={handleClose}
      >
        <div
          className='bg-white dark:bg-neutral-900 border dark:border-orange-600 rounded-2xl shadow-2xl max-w-md w-full mx-4 relative transform transition-all animate-slideUp'
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className='absolute top-4 right-4 p-2 bg-orange-500 text-white hover:bg-orange-600 transition-colors rounded-lg z-10'
            aria-label='Close modal'
          >
            <X size={20} />
          </button>

          <div className='p-8 text-center'>
            <div className='mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-1'>
              <Heart className='w-8 h-8 fill-white text-white' />
            </div>

            <h2 className='text-2xl font-medium text-primary mb-2'>
              Get All the blocks Free
            </h2>

            {/* Description */}
            <p className='text-primary/60 mb-6 leading-relaxed text-sm'>
              Unlock premium blocks by sharing UI Layouts. Post on your favorite
              platforms, get verified, and enjoy Pro blocks without a
              subscription.
            </p>

            {/* <div className='space-y-3 mb-6'>
              <button
                onClick={() => handleShare('twitter')}
                className='w-full flex items-center justify-start gap-3 bg-black text-white py-4 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 group'
              >
                <Twitter size={22} className='flex-shrink-0 fill-white' />
                <div className='text-left flex-1'>
                  <div className='font-medium'>Share on X</div>
                  <div className='text-xs text-gray-300 opacity-75 group-hover:opacity-100 transition-opacity'>
                    "🚀 Just discovered UI Layouts - amazing collection..."
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleShare('linkedin')}
                className='w-full flex items-center justify-start gap-3 bg-blue-600 text-white py-4 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 group'
              >
                <Linkedin size={22} className='flex-shrink-0 fill-white' />
                <div className='text-left flex-1'>
                  <div className='font-medium'>Share on LinkedIn</div>
                  <div className='text-xs text-blue-200 opacity-75 group-hover:opacity-100 transition-opacity'>
                    Professional post with benefits & hashtags included
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleShare('github')}
                className='w-full flex items-center justify-start gap-3 bg-gray-800 text-white py-4 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105 group'
              >
                <Github size={22} className='flex-shrink-0 fill-white' />
                <div className='text-left flex-1'>
                  <div className='font-medium'>Star on GitHub</div>
                  <div className='text-xs text-gray-300 opacity-75 group-hover:opacity-100 transition-opacity'>
                    Show support & get updates
                  </div>
                </div>
              </button>
            </div>

            <button
              onClick={handleClose}
              className='text-gray-500 text-sm hover:text-gray-700 transition-colors underline-offset-2 hover:underline'
            >
              Maybe later
            </button> */}
            <button
              onClick={handleShare}
              className='bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500'
            >
              Unlock Blocks 🎉
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
