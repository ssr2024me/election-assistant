import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, Play } from 'lucide-react';

const EVMGuide = ({ t, lang }) => {
  const [step, setStep] = useState(0);

  const evmSteps = [
    { title: "Step 1: Check the Blue Light", desc: "The Control Unit will enable the Balloting Unit. Wait for the 'Ready' lamp.", descHi: "कंट्रोल यूनिट बैलेटिंग यूनिट को सक्रिय करेगी। 'तैयार' लैंप का इंतज़ार करें।" },
    { title: "Step 2: Press the Button", desc: "Press the blue button next to the candidate of your choice.", descHi: "अपनी पसंद के उम्मीदवार के सामने वाला नीला बटन दबाएं।" },
    { title: "Step 3: Hear the Beep", desc: "A long beep confirms your vote is recorded.", descHi: "एक लंबी बीप पुष्टि करेगी कि आपका वोट रिकॉर्ड हो गया है।" },
    { title: "Step 4: Verify on VVPAT", desc: "Check the VVPAT glass. A slip will be visible for 7 seconds showing your choice.", descHi: "VVPAT ग्लास देखें। आपके चयन को दिखाते हुए एक पर्ची 7 सेकंड के लिए दिखाई देगी।" }
  ];

  return (
    <div className="evm-guide-card">
      <div className="advice-tag"><Info size={12} /> {lang === 'hi' ? 'ईवीएम मार्गदर्शिका' : 'EVM User Guide'}</div>
      <div className="evm-steps-container">
        <div className="evm-step-indicator">
          {evmSteps.map((_, i) => (
            <div key={i} className={`indicator-dot ${i === step ? 'active' : ''}`} />
          ))}
        </div>
        <motion.div key={step} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="evm-step-content">
          <h4>{evmSteps[step].title}</h4>
          <p>{lang === 'hi' ? evmSteps[step].descHi : evmSteps[step].desc}</p>
        </motion.div>
        <button className="evm-next-btn" onClick={() => setStep((step + 1) % evmSteps.length)}>
          {lang === 'hi' ? 'अगला' : 'Next Step'} <Play size={12} />
        </button>
      </div>
    </div>
  );
};

export default EVMGuide;
