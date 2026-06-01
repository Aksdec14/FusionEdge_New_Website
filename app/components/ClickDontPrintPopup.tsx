'use client'

import { useState, useEffect } from 'react'
import ClickDontPrint from './ClickDontPrint'

export default function ClickDontPrintPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const dismiss = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        .cdp-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          backdrop-filter: blur(4px);
          animation: cdpFadeIn 0.3s ease;
        }

        .cdp-modal {
          position: relative;
          background: transparent;
          max-width: 820px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          overflow-x: visible;
          border-radius: 24px;
          animation: cdpScaleIn 0.3s ease;
        }

        .cdp-close {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 99999;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: none;
          background: #5B2ECC;
          color: #ffffff;
          font-size: 28px;
          font-weight: 500;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
          transition: all 0.2s ease;
        }

        .cdp-close:hover {
          transform: scale(1.08);
          background: #4a23aa;
        }

        .cdp-close:active {
          transform: scale(0.96);
        }

        @keyframes cdpFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes cdpScaleIn {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 768px) {
          .cdp-overlay {
            padding: 16px;
          }

          .cdp-modal {
            max-height: 88vh;
          }

          .cdp-close {
            top: 12px;
            right: 12px;
            width: 38px;
            height: 38px;
            font-size: 24px;
          }
        }

        @media (max-width: 600px) {
          .cdp-overlay {
            align-items: flex-end;
            padding: 12px;
          }

          .cdp-modal {
            max-height: 85vh;
          }

          .cdp-close {
            top: 10px;
            right: 10px;
            width: 36px;
            height: 36px;
            font-size: 22px;
          }
        }
      `}</style>

      <div className="cdp-overlay" onClick={dismiss}>
        <div
          className="cdp-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="cdp-close"
            onClick={dismiss}
            aria-label="Close popup"
          >
            ×
          </button>

          <ClickDontPrint />
        </div>
      </div>
    </>
  )
}