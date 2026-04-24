import { Phone, Smartphone, Eye, UserCheck, ExternalLink } from 'lucide-react';

const OfficialTools = ({ t }) => {
  const tools = [
    { id: 'helpline', icon: <Phone size={24} />, title: t.helplineTitle, desc: t.helplineDesc, link: "tel:1950", color: 'helpline' },
    { id: 'voterapp', icon: <Smartphone size={24} />, title: t.voterApp, desc: t.voterAppDesc, link: "https://voters.eci.gov.in/", color: 'blue' },
    { id: 'cvigil', icon: <Eye size={24} />, title: t.cVigil, desc: t.cVigilDesc, link: "https://cvigil.eci.gov.in/", color: 'blue' },
    { id: 'kyc', icon: <UserCheck size={24} />, title: t.kycApp, desc: t.kycAppDesc, link: "https://voterportal.eci.gov.in/", color: 'blue' }
  ];

  return (
    <div className="tools-grid" role="region" aria-label="Official Election Tools">
      {tools.map(tool => (
        <a key={tool.id} href={tool.link} target="_blank" rel="noopener noreferrer" className={`tool-card ${tool.color}`}>
          <div className="tool-icon-box">{tool.icon}</div>
          <h4>{tool.title}</h4>
          <p>{tool.desc}</p>
          <div className="tool-action-btn">
            {t.accessNow} <ExternalLink size={14} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default OfficialTools;
