import { useState, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SmartExpert = ({ t, lang, userContext }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: lang === 'hi' ? 'नमस्ते! मैं आपका स्मार्ट इलेक्शन गाइड हूँ। आप मुझसे चुनाव से जुड़ा कुछ भी पूछ सकते हैं।' : 'Hello! I am your Smart Election Guide. Ask me anything about the voting process!' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate Gemini AI Logic based on user context
    setTimeout(() => {
      let response = "";
      const lowerInput = userMsg.toLowerCase();

      if (lowerInput.includes('registration') || lowerInput.includes('पंजीकरण')) {
        response = lang === 'hi' 
          ? `आपकी स्थिति के अनुसार, आपको फॉर्म 6 भरना चाहिए। ${userContext.state ? userContext.state : 'अपने राज्य'} के लिए ऑनलाइन पोर्टल का उपयोग करें।` 
          : `Based on your context, you should fill Form 6. Use the official portal for ${userContext.state ? userContext.state : 'your state'}.`;
      } else if (lowerInput.includes('document') || lowerInput.includes('दस्तावेज')) {
        response = lang === 'hi'
          ? "आप वोटर आईडी के अलावा आधार कार्ड, पैन कार्ड या ड्राइविंग लाइसेंस का भी उपयोग कर सकते हैं।"
          : "Besides Voter ID, you can use Aadhaar Card, PAN Card, or Driving License as proof.";
      } else {
        response = lang === 'hi'
          ? "यह एक बहुत ही महत्वपूर्ण सवाल है। लोकतंत्र में आपकी भागीदारी ही देश का भविष्य तय करती है। क्या आप अपनी पंजीकरण स्थिति जांचना चाहेंगे?"
          : "That's a great question. Your participation is what shapes our democracy. Would you like to check your registration status first?";
      }

      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="smart-expert-container">
      <div className="expert-header">
        <Bot size={20} className="glow-icon" />
        <div>
          <h4>{t.smartAdvice}</h4>
          <span className="expert-status">Powered by Google Gemini Logic</span>
        </div>
      </div>
      
      <div className="chat-window">
        {messages.map((msg, i) => (
          <motion.div 
            initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            key={i} 
            className={`chat-bubble ${msg.role}`}
          >
            <div className="bubble-icon">
              {msg.role === 'bot' ? <Bot size={14} /> : <User size={14} />}
            </div>
            <div className="bubble-text">{msg.text}</div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="chat-bubble bot">
            <div className="bubble-icon"><Loader2 size={14} className="animate-spin" /></div>
            <div className="bubble-text">Thinking...</div>
          </div>
        )}
      </div>

      <div className="chat-input-area">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder={lang === 'hi' ? 'सवाल पूछें...' : 'Ask a question...'}
          className="chat-input"
        />
        <button onClick={handleSend} className="chat-send-btn">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default SmartExpert;
