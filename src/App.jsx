import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Vote, CheckCircle2, Globe, Search, Sparkles, ArrowRight, RefreshCcw, Calendar, HelpCircle, AlertTriangle, Shield, FileText, ChevronLeft, Languages, Sun, Moon, MapPin, Share2, Volume2, Timer, Home } from 'lucide-react';
import './App.css';
import { electionData } from './data/electionSteps';
import { translations } from './data/translations';
import { statesData, getNextElection } from './data/statesData';

// Isolated countdown component — won't re-render the parent App
function CountdownTimer({ lang }) {
  const t = translations[lang];
  const [cd, setCd] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [election, setElection] = useState(getNextElection());
  useEffect(() => {
    const tick = () => {
      const next = getNextElection();
      setElection(next);
      const diff = Math.max(0, new Date(next.date).getTime() - Date.now());
      setCd({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="countdown-section">
      <div className="countdown-label"><Timer size={13} style={{ verticalAlign: 'middle' }} /> {t.countdown}</div>
      <div className="countdown-event">{lang === 'hi' ? election.nameHi : election.name}</div>
      <div className="countdown-grid">
        <div className="countdown-box"><div className="countdown-number">{cd.d}</div><div className="countdown-unit">{t.days}</div></div>
        <div className="countdown-box"><div className="countdown-number">{cd.h}</div><div className="countdown-unit">{t.hours}</div></div>
        <div className="countdown-box"><div className="countdown-number">{cd.m}</div><div className="countdown-unit">{t.minutes}</div></div>
        <div className="countdown-box"><div className="countdown-number">{cd.s}</div><div className="countdown-unit">{t.seconds}</div></div>
      </div>
    </div>
  );
}

function App() {
  const [step, setStep] = useState('initial');
  const [choices, setChoices] = useState({});
  const [ready, setReady] = useState(false);
  const [simpleMode, setSimpleMode] = useState(false);
  const [checked, setChecked] = useState({});
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [selectedState, setSelectedState] = useState('');
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const t = translations[lang];
  useEffect(() => { setReady(true); }, []);
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  const pick = (nextStep, key, value) => {
    setChoices(p => ({ ...p, [key]: value }));
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const toggle = (id) => setChecked(p => ({ ...p, [id]: !p[id] }));
  const reset = () => { setStep('initial'); setChoices({}); setChecked({}); };

  const country = choices.country || 'general';
  const countryData = electionData[country];

  // Voice Mode
  const speak = (text) => {
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
    u.rate = 0.9;
    u.onend = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  // Share
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: t.shareTitle, text: t.shareText, url }); } catch (e) {}
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } }, exit: { opacity: 0, y: -16, transition: { duration: 0.25 } } };
  const stagger = { hidden: { opacity: 0, x: -16 }, show: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.08, duration: 0.35 } }) };

  const countryLabels = [t.india, t.usa, t.other];
  const regLabels = [t.regYes, t.regNo, t.regUnsure];

  /* ---------- SCREENS ---------- */

  const Initial = () => (
    <motion.div key="init" variants={fade} initial="hidden" animate="show" exit="exit" className="question-card">
      <Globe className="icon-main" size={44} strokeWidth={1.5} />
      <h2 className="question-text">{t.countryQ}</h2>
      <div className="options-grid">
        {electionData.initial.options.map((o, i) => (
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} key={o.value} className="option-btn" onClick={() => pick(o.next, 'country', o.value)}>
            {countryLabels[i]}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  const RegStatus = () => (
    <motion.div key="reg" variants={fade} initial="hidden" animate="show" exit="exit" className="question-card">
      <Vote className="icon-main" size={44} strokeWidth={1.5} />
      <h2 className="question-text">{t.regQ}</h2>
      <div className="options-grid">
        {electionData.registrationStatus.options.map((o, i) => (
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} key={o.value} className="option-btn" onClick={() => pick(o.next, 'registered', o.value)}>
            {regLabels[i]}
          </motion.button>
        ))}
      </div>
      <button className="btn-ghost" onClick={() => setStep('initial')}><ChevronLeft size={14} style={{ verticalAlign: 'middle' }} /> {t.changeCountry}</button>
    </motion.div>
  );

  const Guide = () => {
    const guide = countryData.registrationGuide;
    const allText = guide.map(s => lang === 'hi' && s.contentHi ? s.contentHi : s.content).join('. ');
    return (
      <motion.div key="guide" variants={fade} initial="hidden" animate="show" exit="exit" className="guide-container">
        <div className="section-header">
          <FileText className="icon-section" size={22} /><h2 className="section-title">{t.regRoadmap}</h2>
          <button className={`voice-btn ${speaking ? 'speaking' : ''}`} onClick={() => speak(allText)} title="Voice">{speaking ? t.voiceStop : t.voiceMode}</button>
        </div>
        <div className="steps-list">
          {guide.map((s, i) => (
            <motion.div custom={i} variants={stagger} initial="hidden" animate="show" key={s.id} className="step-item">
              <div className="step-icon-box">{s.icon}</div>
              <div className="step-content">
                <h3>{lang === 'hi' && s.titleHi ? s.titleHi : s.title}</h3>
                <p className="step-text">{lang === 'hi' && s.contentHi ? s.contentHi : s.content}</p>
                {simpleMode && s.simpleContent && <span className="simple-analogy">💡 {lang === 'hi' && s.simpleHi ? s.simpleHi : s.simpleContent}</span>}
                {s.link && <motion.a whileHover={{ x: 4 }} href={s.link} target="_blank" rel="noopener noreferrer" className="cta-btn saffron">{lang === 'hi' && s.ctaHi ? s.ctaHi : s.cta} <ArrowRight size={16} /></motion.a>}
              </div>
            </motion.div>
          ))}
        </div>
        {country === 'india' && electionData.india.importantForms && (
          <div className="forms-section">
            <h3 className="checklist-label"><FileText size={16} /> {t.eciForms}</h3>
            <div className="forms-table">
              {electionData.india.importantForms.map((f, i) => (
                <div key={i} className="forms-row"><div className="form-name">{f.form}</div><div className="form-purpose">{lang === 'hi' && f.purposeHi ? f.purposeHi : f.purpose}</div></div>
              ))}
            </div>
          </div>
        )}
        <div style={{ textAlign: 'center' }}><button className="btn-reset" onClick={reset}><RefreshCcw size={15} /> {t.startOver}</button></div>
      </motion.div>
    );
  };

  const StatusCheck = () => {
    const d = countryData.checkStatus;
    return (
      <motion.div key="status" variants={fade} initial="hidden" animate="show" exit="exit" className="status-card">
        <Search className="icon-main" size={44} strokeWidth={1.5} />
        <h2 className="question-text">{lang === 'hi' && d.titleHi ? d.titleHi : d.title}</h2>
        <p className="status-desc">{lang === 'hi' && d.contentHi ? d.contentHi : d.content}</p>
        {d.link && <motion.a whileHover={{ scale: 1.03 }} href={d.link} target="_blank" rel="noopener noreferrer" className="cta-btn large">{lang === 'hi' && d.ctaHi ? d.ctaHi : d.cta} <ArrowRight size={18} /></motion.a>}
        <button className="btn-ghost" onClick={reset}><ChevronLeft size={14} style={{ verticalAlign: 'middle' }} /> {t.backHome}</button>
      </motion.div>
    );
  };

  const ReadyToVote = () => {
    const d = countryData.readyToVote;
    return (
      <motion.div key="ready" variants={fade} initial="hidden" animate="show" exit="exit" className="ready-container">
        <div className="section-header">
          <CheckCircle2 className="icon-section" size={22} style={{ color: 'var(--accent-green)' }} /><h2 className="section-title">{t.votingPrep}</h2>
          <button className={`voice-btn ${speaking ? 'speaking' : ''}`} onClick={() => speak(d.beforeChecklist.map(i => i.label).join('. '))} title="Voice">{speaking ? t.voiceStop : t.voiceMode}</button>
        </div>
        {d.beforeChecklist && (
          <div className="checklist-section">
            <div className="checklist-label">{t.beforeVoting}</div>
            <div className="checklist-card">
              {d.beforeChecklist.map((item, i) => { const id = `before-${i}`; return (
                <motion.div whileTap={{ x: 4 }} key={id} className="check-item" onClick={() => toggle(id)}>
                  <span className="check-icon">{item.icon}</span>
                  <div className={`check-box ${checked[id] ? 'done' : ''}`}>{checked[id] && <CheckCircle2 size={14} />}</div>
                  <span className={`check-label ${checked[id] ? 'done' : ''}`}>{lang === 'hi' && item.labelHi ? item.labelHi : item.label}</span>
                </motion.div>
              ); })}
            </div>
          </div>
        )}
        {d.onDayChecklist && (
          <div className="checklist-section">
            <div className="checklist-label">{t.onVotingDay}</div>
            <div className="checklist-card">
              {d.onDayChecklist.map((item, i) => { const id = `onday-${i}`; return (
                <motion.div whileTap={{ x: 4 }} key={id} className="check-item" onClick={() => toggle(id)}>
                  <span className="check-icon">{item.icon}</span>
                  <div className={`check-box ${checked[id] ? 'done' : ''}`}>{checked[id] && <CheckCircle2 size={14} />}</div>
                  <span className={`check-label ${checked[id] ? 'done' : ''}`}>{lang === 'hi' && item.labelHi ? item.labelHi : item.label}</span>
                </motion.div>
              ); })}
            </div>
          </div>
        )}
        {d.tips && (
          <div className="tips-section"><div className="checklist-label">{t.proTips}</div>
            <div className="tips-grid">{d.tips.map((tip, i) => (
              <motion.div whileHover={{ y: -3 }} key={i} className="tip-card">
                <h4>{lang === 'hi' && tip.titleHi ? tip.titleHi : tip.title}</h4>
                <p>{lang === 'hi' && tip.contentHi ? tip.contentHi : tip.content}</p>
              </motion.div>
            ))}</div>
          </div>
        )}
        {/* Share Button */}
        <div style={{ textAlign: 'center' }}>
          <motion.button whileHover={{ scale: 1.05 }} className={`share-btn ${copied ? 'copied' : ''}`} onClick={handleShare}>
            <Share2 size={16} /> {copied ? t.shareCopied : t.shareCard}
          </motion.button>
        </div>
        <div style={{ textAlign: 'center', marginTop: '10px' }}><button className="btn-reset" onClick={reset}><RefreshCcw size={15} /> {t.startOver}</button></div>
      </motion.div>
    );
  };

  /* ---------- STATE CARD ---------- */
  const stateInfo = statesData[selectedState];

  /* ---------- RENDER ---------- */
  return (
    <div className={`app-container ${ready ? 'ready' : ''}`}>
      <header className="header">
        <div className="container header-inner">
          <div className="logo-area">
            <button className="home-btn" onClick={reset} title="Home"><Home size={18} /></button>
            <div className="logo-badge"><Vote size={22} /></div>
            <div className="logo-text">{t.logoTitle}<span className="logo-sub">{t.logoSub}</span></div>
          </div>
          <div className="header-actions">
            <button className={`mode-toggle ${simpleMode ? 'active' : ''}`} onClick={() => setSimpleMode(!simpleMode)}>
              <Sparkles size={14} /><span>{simpleMode ? t.simpleOn : t.explainSimply}</span>
            </button>
            <button className="lang-toggle" onClick={() => setLang(l => l === 'en' ? 'hi' : 'en')}>
              <Languages size={14} /><span>{t.langLabel}</span>
            </button>
            <button className="theme-toggle" onClick={() => setTheme(th => th === 'dark' ? 'light' : 'dark')} title="Toggle Theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main className="container main-content">
        <section className="hero-section">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-badge"><Shield size={13} /> {t.heroBadge}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="hero-title">{t.heroTitle1} <span className="gradient-text">{t.heroTitle2}</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="hero-subtitle">{t.heroSubtitle}</motion.p>
          {step === 'initial' && electionData.quickFacts && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="stats-bar">
              {electionData.quickFacts.map((s, i) => (<div key={i} className="stat-item"><div className="stat-number">{s.stat}</div><div className="stat-label">{lang === 'hi' && s.labelHi ? s.labelHi : s.label}</div></div>))}
            </motion.div>
          )}

          {/* COUNTDOWN TIMER — isolated component, no parent re-render */}
          {step === 'initial' && <CountdownTimer lang={lang} />}
        </section>

        <div className="interaction-wrapper">
          <AnimatePresence mode="wait">
            {step === 'initial' && <Initial />}
            {step === 'registrationStatus' && <RegStatus />}
            {step === 'registrationGuide' && <Guide />}
            {step === 'checkStatus' && <StatusCheck />}
            {step === 'readyToVote' && <ReadyToVote />}
          </AnimatePresence>
        </div>

        {/* BOOTH FINDER + STATE GUIDE */}
        {step !== 'initial' && country === 'india' && (
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="booth-section">
            <h2 className="section-title center"><MapPin size={20} style={{ verticalAlign: 'middle' }} /> {t.boothFinder}</h2>
            <p className="section-subtitle">{t.boothFinderDesc}</p>
            <select className="state-select" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">{t.selectState}</option>
              {Object.entries(statesData).map(([key, st]) => (
                <option key={key} value={key}>{lang === 'hi' && st.nameHi ? st.nameHi : st.name}</option>
              ))}
            </select>
            {stateInfo && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="state-card">
                <div className="state-card-name">🏛️ {lang === 'hi' && stateInfo.nameHi ? stateInfo.nameHi : stateInfo.name}</div>
                <div className="state-stats">
                  <div className="state-stat-box"><div className="state-stat-num">{stateInfo.seats}</div><div className="state-stat-label">{t.lokSabhaSeats}</div></div>
                  <div className="state-stat-box"><div className="state-stat-num">{stateInfo.assemblySeats}</div><div className="state-stat-label">{t.assemblySeats}</div></div>
                  <div className="state-stat-box"><div className="state-stat-num">{stateInfo.nextElection}</div><div className="state-stat-label">{t.nextStateElection}</div></div>
                </div>
                <div className="state-links">
                  <a href={stateInfo.boothLink} target="_blank" rel="noopener noreferrer" className="state-link-btn primary"><MapPin size={14} /> {t.findBooth}</a>
                  <a href={stateInfo.ecLink} target="_blank" rel="noopener noreferrer" className="state-link-btn secondary"><Globe size={14} /> {t.visitEC}</a>
                </div>
              </motion.div>
            )}
          </motion.section>
        )}

        {/* DEEP DIVE */}
        {step !== 'initial' && (
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="deep-dive">
            <h2 className="section-title center">{t.resources}</h2>
            <p className="section-subtitle">{t.resourcesSub}</p>
            <div className="deep-dive-grid">
              <div className="resource-card">
                <div className="card-header"><Calendar className="card-icon" size={20} /><h3>{t.timeline}</h3></div>
                <div className="timeline-list">
                  {electionData.timeline.map((item, i) => (
                    <div key={i} className="timeline-row">
                      <div className="timeline-dot" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}44` }}></div>
                      <div><span className="timeline-icon">{item.icon}</span><span className="timeline-stage">{lang === 'hi' && item.stageHi ? item.stageHi : item.stage}</span><p className="timeline-desc">{lang === 'hi' && item.descHi ? item.descHi : item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="resource-card">
                <div className="card-header"><HelpCircle className="card-icon" size={20} /><h3>{t.mythFact}</h3></div>
                <div className="myths-list">
                  {electionData.myths.map((m, i) => (
                    <div key={i} className="myth-item">
                      <div className="myth-tag"><AlertTriangle size={10} /> {t.myth}</div>
                      <p className="myth-text">{m.icon} {lang === 'hi' && m.mythHi ? m.mythHi : m.myth}</p>
                      <div className="fact-tag"><CheckCircle2 size={10} /> {t.fact}</div>
                      <p className="fact-text">{lang === 'hi' && m.factHi ? m.factHi : m.fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      <footer className="footer"><div className="container">
        <div className="footer-main"><Vote size={14} /> {t.footerCopy}</div>
        <div className="footer-links"><span>{t.footerNon}</span><span className="footer-dot">•</span><span>{t.footerEdu}</span><span className="footer-dot">•</span><span>{t.footerVerify}</span></div>
      </div></footer>
    </div>
  );
}

export default App;
