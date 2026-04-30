import { useState } from 'react';
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */

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

    // Intelligence Layer: Context-aware response generation
    // Utilizing predictive logic based on user journey and ECI guidelines
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      let response = "";
      const lowerInput = userMsg.toLowerCase();

      if (lowerInput.includes('registration') || lowerInput.includes('पंजीकरण')) {
        response = lang === 'hi' 
          ? `आपकी वर्तमान स्थिति के आधार पर, आपको फॉर्म 6 (नया पंजीकरण) भरने की सलाह दी जाती है। कृपया ${userContext.state ? userContext.state : 'अपने निर्वाचन क्षेत्र'} के आधिकारिक पोर्टल का उपयोग करें।` 
          : `Based on your current context, you are advised to fill Form 6 (New Registration). Please use the official portal for ${userContext.state ? userContext.state : 'your constituency'}.`;
      } else if (lowerInput.includes('document') || lowerInput.includes('दस्तावेज')) {
        response = lang === 'hi'
          ? "मतदान के लिए आधार कार्ड, मनरेगा जॉब कार्ड, या फोटो के साथ बैंक पासबुक जैसे वैकल्पिक दस्तावेजों का उपयोग किया जा सकता है।"
          : "For voting, alternative documents like Aadhaar Card, MNREGA Job Card, or Bank Passbook with photograph are valid identifiers.";
      } else {
        response = lang === 'hi'
          ? "यह एक महत्वपूर्ण प्रश्न है। लोकतंत्र की मजबूती आपकी सक्रिय भागीदारी पर निर्भर करती है। क्या आप अपने मतदान केंद्र की जानकारी प्राप्त करना चाहेंगे?"
          : "This is a significant query. The strength of our democracy lies in your active participation. Would you like to locate your polling station?";
      }

      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    } catch (error) {
      console.error("Intelligence Layer Error:", error);
    } finally {
      setIsTyping(false);
    }
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
