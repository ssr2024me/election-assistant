import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, MousePointer2, Eye, BellRing, Info } from 'lucide-react';

const EVMGuide = ({ t, lang }) => {
  const [step, setStep] = useState(1);
  const [showSlip, setShowSlip] = useState(false);
  const [showBeep, setShowBeep] = useState(false);

  const reset = () => {
    setStep(1);
    setShowSlip(false);
    setShowBeep(false);
  };

  const handleVote = () => {
    setStep(3);
    setShowSlip(true);
    setTimeout(() => {
      setShowSlip(false);
      setShowBeep(true);
      setStep(4);
    }, 7000);
  };

  return (
    <div className="evm-guide-container">
      <div className="section-header">
        <Cpu className="icon-section" size={22} /><h2 className="section-title">{t.evmTitle}</h2>
      </div>

      <div className="evm-interface">
        {/* Step Indicator */}
        <div className="evm-steps-indicator">
          {[1, 2, 3, 4].map(s => (
            <div key={s} className={`step-dot ${step === s ? 'active' : ''} ${step > s ? 'done' : ''}`}>
              {s}
            </div>
          ))}
        </div>

        <div className="evm-visual-grid">
          {/* EVM Ballot Unit */}
          <div className="ballot-unit">
            <div className="ballot-header">EVM BALLOT UNIT</div>
            <div className="candidate-list">
              {[1, 2, 3].map(i => (
                <div key={i} className="candidate-row">
                  <div className="candidate-name">CANDIDATE {i}</div>
                  <div className="candidate-symbol">🪷</div>
                  <button 
                    className={`blue-btn ${step === 2 ? 'glow' : ''}`}
                    onClick={step === 2 ? handleVote : null}
                    disabled={step !== 2}
                  >
                    {t.pressButton}
                  </button>
                  <div className={`lamp ${step === 3 ? 'on' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* VVPAT Display */}
          <div className="vvpat-unit">
            <div className="vvpat-header">VVPAT</div>
            <div className="vvpat-screen">
              <AnimatePresence>
                {showSlip && (
                  <motion.div 
                    initial={{ y: -50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    exit={{ y: 50, opacity: 0 }}
                    className="vvpat-slip"
                  >
                    <div className="slip-content">
                      <div className="slip-symbol">🪷</div>
                      <div className="slip-text">CANDIDATE 1</div>
                      <div className="slip-id">#001</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {!showSlip && !showBeep && <div className="vvpat-idle">WAITING...</div>}
              {showBeep && <div className="vvpat-success">✅</div>}
            </div>
          </div>
        </div>

        {/* Dynamic Instructions */}
        <div className="evm-instructions">
          <motion.div key={step} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="instruction-box">
            <Info size={16} />
            <p>
              {step === 1 && t.evmStep1}
              {step === 2 && t.evmStep2}
              {step === 3 && t.evmStep3}
              {step === 4 && t.evmStep4}
            </p>
          </motion.div>
          
          {step === 1 && (
            <button className="cta-btn small" onClick={() => setStep(2)}>
              Proceed to Vote <MousePointer2 size={14} />
            </button>
          )}

          {showBeep && (
            <div className="beep-announcement">
              <BellRing size={20} className="shake" />
              <span>{t.beepMsg}</span>
              <button className="btn-reset" onClick={reset} style={{ marginTop: '10px' }}>Try Again</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EVMGuide;
