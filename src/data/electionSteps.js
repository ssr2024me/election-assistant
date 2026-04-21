export const electionData = {
  initial: {
    question: "Which country are you voting in?",
    options: [
      { label: "🇮🇳 India", value: "india", next: "registrationStatus" },
      { label: "🇺🇸 United States", value: "usa", next: "registrationStatus" },
      { label: "🌍 Other Country", value: "general", next: "registrationStatus" }
    ]
  },
  registrationStatus: {
    question: "Have you registered as a voter yet?",
    options: [
      { label: "✅ Yes, I am registered", value: "yes", next: "readyToVote" },
      { label: "📝 No, not yet", value: "no", next: "registrationGuide" },
      { label: "🤔 I'm not sure", value: "unsure", next: "checkStatus" }
    ]
  },
  india: {
    registrationGuide: [
      {
        id: 'step1', title: 'Check Eligibility', titleHi: 'पात्रता जाँचें', icon: '📋',
        content: 'You must be an Indian citizen and 18 years or older on the qualifying date (usually January 1st of the year of revision).',
        contentHi: 'आपको भारतीय नागरिक होना चाहिए और निर्धारित तिथि (आमतौर पर संशोधन वर्ष की 1 जनवरी) को 18 वर्ष या उससे अधिक आयु का होना चाहिए।',
        simpleContent: 'Think of it like checking if you meet the height requirement for a roller coaster — but here, the only "requirement" is your age and citizenship! 🎢',
        simpleHi: 'इसे ऐसे समझें जैसे रोलर कोस्टर की ऊंचाई जांचना — बस यहां उम्र और नागरिकता चाहिए! 🎢'
      },
      {
        id: 'step2', title: 'Fill Form 6 Online', titleHi: 'फॉर्म 6 ऑनलाइन भरें', icon: '✍️',
        content: 'Apply for fresh registration using Form 6 on the NVSP (National Voter Service Portal) or the Voter Helpline App. It\'s free!',
        contentHi: 'NVSP (राष्ट्रीय मतदाता सेवा पोर्टल) या वोटर हेल्पलाइन ऐप पर फॉर्म 6 भरकर नया पंजीकरण करें। यह मुफ़्त है!',
        simpleContent: 'It\'s just like filling out a sign-up form for a new app — enter your details, upload a photo, and hit submit! 📱',
        simpleHi: 'जैसे किसी नए ऐप में अकाउंट बनाते हैं — अपनी जानकारी भरें, फोटो डालें, और सबमिट करें! 📱',
        link: 'https://voters.eci.gov.in/', cta: 'Open Voter Portal', ctaHi: 'वोटर पोर्टल खोलें'
      },
      {
        id: 'step3', title: 'Gather Your Documents', titleHi: 'दस्तावेज़ इकट्ठा करें', icon: '📎',
        content: 'You\'ll need: Passport-size photo, Age proof (Birth certificate, Class 10 marksheet, or Passport), Address proof (Aadhaar card, Electricity bill, or Bank passbook).',
        contentHi: 'आपको चाहिए: पासपोर्ट साइज़ फोटो, आयु प्रमाण (जन्म प्रमाणपत्र, 10वीं की मार्कशीट), पता प्रमाण (आधार कार्ड, बिजली बिल, बैंक पासबुक)।',
        simpleContent: 'Imagine packing for a trip — gather your photo, birthday proof, and home address proof. That\'s your luggage! 🧳',
        simpleHi: 'जैसे यात्रा के लिए बैग पैक करते हैं — फोटो, जन्मतिथि प्रमाण और पता प्रमाण इकट्ठा करें! 🧳'
      },
      {
        id: 'step4', title: 'Verification Visit', titleHi: 'सत्यापन दौरा', icon: '🏠',
        content: 'After submission, a Booth Level Officer (BLO) may visit your address for physical verification. Keep your documents handy.',
        contentHi: 'आवेदन के बाद, बूथ लेवल ऑफिसर (BLO) आपके पते पर सत्यापन के लिए आ सकते हैं। अपने दस्तावेज़ तैयार रखें।',
        simpleContent: 'A friendly officer knocks on your door to say "Yep, you live here!" — like a delivery person confirming your address. 🚪',
        simpleHi: 'एक अधिकारी आपके दरवाजे पर आकर पुष्टि करता है कि "हाँ, आप यहीं रहते हैं!" 🚪'
      },
      {
        id: 'step5', title: 'Get Your Voter ID (EPIC)', titleHi: 'वोटर ID (EPIC) प्राप्त करें', icon: '🪪',
        content: 'Once approved, your Elector Photo Identity Card (EPIC) will be issued. You can collect it from the ERO office or download e-EPIC from the NVSP portal.',
        contentHi: 'मंजूरी मिलने पर आपका मतदाता फोटो पहचान पत्र (EPIC) जारी किया जाएगा। आप ERO कार्यालय से ले सकते हैं या NVSP से e-EPIC डाउनलोड कर सकते हैं।',
        simpleContent: 'Your VIP pass to democracy arrives! You can even download a digital version — like a digital boarding pass. ✈️',
        simpleHi: 'लोकतंत्र का आपका VIP पास आ गया! डिजिटल वर्शन भी डाउनलोड कर सकते हैं! ✈️'
      }
    ],
    checkStatus: {
      title: 'Check If You\'re Already Registered', titleHi: 'जांचें कि आप पहले से पंजीकृत हैं या नहीं',
      icon: '🔍',
      content: 'Visit the Electoral Search portal to check if your name is on the voter list. You can search by your EPIC number or by personal details like name & address.',
      contentHi: 'इलेक्टोरल सर्च पोर्टल पर जाकर जांचें कि आपका नाम मतदाता सूची में है या नहीं। EPIC नंबर या नाम-पते से खोजें।',
      link: 'https://electoralsearch.eci.gov.in/', cta: 'Search Electoral Roll Now', ctaHi: 'मतदाता सूची खोजें'
    },
    readyToVote: {
      beforeChecklist: [
        { label: 'Confirm your name is in the Electoral Roll', labelHi: 'मतदाता सूची में अपना नाम पुष्टि करें', icon: '📋' },
        { label: 'Download Voter Helpline App to find your booth', labelHi: 'वोटर हेल्पलाइन ऐप डाउनलोड करें', icon: '📱' },
        { label: 'Check voter slip for your Serial Number', labelHi: 'वोटर स्लिप में अपना क्रम संख्या देखें', icon: '🔢' },
        { label: 'Keep EPIC or any of 12 approved photo IDs ready', labelHi: 'EPIC या 12 मान्य फोटो ID में से कोई तैयार रखें', icon: '🪪' },
        { label: 'Know your polling station address & timings', labelHi: 'अपने मतदान केंद्र का पता और समय जानें', icon: '📍' }
      ],
      onDayChecklist: [
        { label: 'Carry your Voter ID (EPIC) or approved photo ID', labelHi: 'अपना वोटर ID या मान्य फोटो ID साथ लाएं', icon: '🪪' },
        { label: 'Reach polling station within voting hours (7 AM–6 PM)', labelHi: 'मतदान के समय (सुबह 7 – शाम 6) में मतदान केंद्र पहुंचें', icon: '⏰' },
        { label: 'Stand in the queue patiently', labelHi: 'धैर्य से कतार में खड़े रहें', icon: '🚶' },
        { label: 'Get indelible ink mark on your finger', labelHi: 'उंगली पर अमिट स्याही का निशान लगवाएं', icon: '☝️' },
        { label: 'Press the button next to your chosen candidate on EVM', labelHi: 'EVM पर अपने उम्मीदवार के बटन को दबाएं', icon: '🗳️' },
        { label: 'Verify your vote on the VVPAT slip', labelHi: 'VVPAT स्लिप पर अपना वोट सत्यापित करें', icon: '✅' }
      ],
      tips: [
        { title: '12 Accepted IDs', titleHi: '12 मान्य पहचान पत्र', content: 'Aadhaar, Passport, DL, PAN Card, Bank Passbook with photo, MNREGA Job Card, and more. You don\'t NEED the Voter ID card if you have alternatives!', contentHi: 'आधार, पासपोर्ट, DL, PAN कार्ड, बैंक पासबुक, MNREGA जॉब कार्ड आदि। वोटर ID न हो तो भी ये चलेंगे!' },
        { title: 'EVM & VVPAT', titleHi: 'EVM और VVPAT', content: 'The Electronic Voting Machine records your vote. The VVPAT shows a printed slip of your choice for 7 seconds — verify it!', contentHi: 'EVM आपका वोट रिकॉर्ड करती है। VVPAT 7 सेकंड के लिए पर्ची दिखाता है — इसे ज़रूर जांचें!' },
        { title: 'Your Rights at the Booth', titleHi: 'बूथ पर आपके अधिकार', content: 'If you\'re in the queue when polls close, you MUST be allowed to vote. You can also lodge complaints via cVIGIL app.', contentHi: 'अगर पोल बंद होने पर आप कतार में हैं, तो आपको वोट देने का अधिकार है। cVIGIL ऐप से शिकायत भी कर सकते हैं।' },
        { title: 'NOTA Option', titleHi: 'NOTA विकल्प', content: 'If you don\'t want to vote for any candidate, you can choose NOTA — it\'s your democratic right.', contentHi: 'किसी उम्मीदवार को वोट नहीं देना चाहते? NOTA चुनें — यह आपका लोकतांत्रिक अधिकार है।' }
      ]
    },
    importantForms: [
      { form: 'Form 6', purpose: 'New voter registration', purposeHi: 'नया मतदाता पंजीकरण' },
      { form: 'Form 6B', purpose: 'Aadhaar linking with Voter ID', purposeHi: 'आधार को वोटर ID से जोड़ना' },
      { form: 'Form 7', purpose: 'Objection to a name in the list', purposeHi: 'सूची में किसी नाम पर आपत्ति' },
      { form: 'Form 8', purpose: 'Correction of entries / shifting address', purposeHi: 'प्रविष्टियों में सुधार / पता बदलना' },
      { form: 'Form 8A', purpose: 'Transposition within same constituency', purposeHi: 'एक ही निर्वाचन क्षेत्र में स्थानांतरण' }
    ]
  },
  usa: {
    registrationGuide: [
      { id: 'us-step1', title: 'Check Eligibility', icon: '🗽', content: 'You must be a U.S. citizen, meet your state\'s residency requirements, and be 18 years old on or before Election Day.', simpleContent: 'Similar to ordering from a restaurant — you need to be in the right place, the right age, and a member of the club (citizen)! 🍔' },
      { id: 'us-step2', title: 'Register to Vote', icon: '📝', content: 'Register online at vote.gov, in person at your local election office, or by mail. Some states offer same-day registration!', simpleContent: 'It\'s like signing up for a gym — you can do it online, by mail, or walk in! 🏋️', link: 'https://vote.gov', cta: 'Register at Vote.gov' },
      { id: 'us-step3', title: 'Find Your Deadlines', icon: '📅', content: 'Deadlines vary by state — typically 15 to 30 days before Election Day. Check your state\'s specific deadline!', simpleContent: 'Like an RSVP to a party — some require weeks of notice, others let you show up day-of! 🎉' }
    ],
    checkStatus: { title: 'Verify Your Registration', icon: '🔍', content: 'Check your voter registration status online through your state\'s Secretary of State website or through vote.org.', link: 'https://www.vote.org/am-i-registered-to-vote/', cta: 'Check My Status' },
    readyToVote: {
      beforeChecklist: [
        { label: 'Confirm your registration is active', icon: '✅' },
        { label: 'Know your polling place location', icon: '📍' },
        { label: 'Review your sample ballot online', icon: '📄' },
        { label: 'Check if your state requires photo ID', icon: '🪪' },
        { label: 'Know your voting options (early, mail-in, Election Day)', icon: '📬' }
      ],
      onDayChecklist: [
        { label: 'Bring required ID (varies by state)', icon: '🪪' },
        { label: 'Arrive at your polling place during operating hours', icon: '⏰' },
        { label: 'Sign in and receive your ballot', icon: '📝' },
        { label: 'Mark your ballot carefully', icon: '✏️' },
        { label: 'Submit your ballot in the scanner or drop box', icon: '🗳️' }
      ],
      tips: [
        { title: 'Early Voting', content: 'Many states allow early voting — in person — several days or weeks before Election Day.' },
        { title: 'Mail-In Voting', content: 'Some states automatically mail ballots; others require a request. Pay attention to return deadlines!' },
        { title: 'Provisional Ballot', content: 'If there\'s an issue at the polls, you have the RIGHT to cast a provisional ballot.' }
      ]
    }
  },
  general: {
    registrationGuide: [
      { id: 'g-step1', title: 'Find Your Election Authority', icon: 'ℹ️', content: 'Every country has a national election commission. Visit their official website to understand eligibility and registration requirements.', simpleContent: 'Like finding the help desk at a mall — they\'ll tell you everything! 🏬' },
      { id: 'g-step2', title: 'Register Before Deadlines', icon: '📝', content: 'Most countries require advance registration. Complete the process well before the election date.', simpleContent: 'Like booking movie tickets in advance! 🎬' },
      { id: 'g-step3', title: 'Prepare Your Documents', icon: '📎', content: 'Typically you\'ll need proof of identity and proof of address. Check your country\'s specific requirements.', simpleContent: 'Pack your essentials — ID and address proof! 🎒' }
    ],
    checkStatus: { title: 'Check Your Registration', icon: '🔍', content: 'Most countries offer an online portal to verify your voter registration status.', link: 'https://www.google.com/search?q=voter+registration+check', cta: 'Search for Your Portal' },
    readyToVote: {
      beforeChecklist: [
        { label: 'Verify your name is on the voter list', icon: '📋' },
        { label: 'Find your assigned polling station', icon: '📍' },
        { label: 'Check required identification documents', icon: '🪪' },
        { label: 'Research candidates and parties', icon: '🔍' }
      ],
      onDayChecklist: [
        { label: 'Carry valid identification', icon: '🪪' },
        { label: 'Arrive at your polling station during voting hours', icon: '⏰' },
        { label: 'Follow the voting procedure as instructed', icon: '📝' },
        { label: 'Cast your vote privately and securely', icon: '🗳️' }
      ],
      tips: [
        { title: 'Know Your Rights', content: 'You have the right to a secret ballot and to vote without intimidation.' },
        { title: 'Educate Yourself', content: 'Use non-partisan sources to learn about candidates. An informed vote is the strongest vote!' }
      ]
    }
  },
  myths: [
    { myth: "EVMs can be hacked remotely.", mythHi: "EVM को दूर से हैक किया जा सकता है।", fact: "EVMs in India are standalone devices with no Wi-Fi, Bluetooth, or internet. They cannot be hacked remotely.", factHi: "भारत में EVM स्टैंडअलोन डिवाइस हैं — कोई Wi-Fi, Bluetooth या इंटरनेट नहीं। इन्हें दूर से हैक नहीं किया जा सकता।", icon: "💻" },
    { myth: "No Voter ID Card = No Vote.", mythHi: "वोटर ID कार्ड नहीं = वोट नहीं।", fact: "You CAN vote with any of the 12 approved photo IDs (Aadhaar, Passport, DL, etc.).", factHi: "आप 12 मान्य फोटो ID में से किसी से भी वोट कर सकते हैं (आधार, पासपोर्ट, DL आदि)।", icon: "🪪" },
    { myth: "My single vote doesn't matter.", mythHi: "मेरे एक वोट से कुछ नहीं होता।", fact: "Elections have been won by margins as small as 1 vote! Every vote matters.", factHi: "चुनाव 1 वोट के अंतर से भी जीते गए हैं! हर वोट मायने रखता है।", icon: "🗳️" },
    { myth: "I can vote from anywhere.", mythHi: "मैं कहीं से भी वोट कर सकता हूँ।", fact: "You can only vote at the polling station assigned to your registered address.", factHi: "आप केवल अपने पंजीकृत पते के मतदान केंद्र पर ही वोट कर सकते हैं।", icon: "📍" },
    { myth: "NOTA vote is wasted.", mythHi: "NOTA वोट बेकार है।", fact: "NOTA is a valid democratic expression counted officially.", factHi: "NOTA एक वैध लोकतांत्रिक अभिव्यक्ति है जो आधिकारिक रूप से गिनी जाती है।", icon: "❌" }
  ],
  timeline: [
    { stage: "Election Announcement", stageHi: "चुनाव की घोषणा", desc: "The Election Commission announces dates. Model Code of Conduct begins.", descHi: "चुनाव आयोग तारीखें घोषित करता है। आदर्श आचार संहिता लागू होती है।", icon: "📢", color: "#f59e0b" },
    { stage: "Nominations Filed", stageHi: "नामांकन दाखिल", desc: "Candidates submit their nomination papers.", descHi: "उम्मीदवार अपने नामांकन पत्र जमा करते हैं।", icon: "📄", color: "#3b82f6" },
    { stage: "Scrutiny", stageHi: "जांच-पड़ताल", desc: "Election officials verify all nomination papers.", descHi: "चुनाव अधिकारी सभी नामांकन पत्रों की जांच करते हैं।", icon: "🔍", color: "#8b5cf6" },
    { stage: "Campaign Period", stageHi: "चुनाव प्रचार", desc: "Candidates campaign. Campaigning stops 48 hours before polling.", descHi: "उम्मीदवार प्रचार करते हैं। मतदान से 48 घंटे पहले प्रचार बंद।", icon: "📣", color: "#ec4899" },
    { stage: "Polling Day", stageHi: "मतदान दिवस", desc: "Citizens cast their votes using EVMs.", descHi: "नागरिक EVM से अपना वोट डालते हैं।", icon: "🗳️", color: "#10b981" },
    { stage: "Counting & Results", stageHi: "मतगणना और परिणाम", desc: "Votes are counted and results declared.", descHi: "वोटों की गिनती होती है और परिणाम घोषित किए जाते हैं।", icon: "📊", color: "#ef4444" }
  ],
  quickFacts: [
    { stat: "96.8 Cr+", label: "Registered Voters in India", labelHi: "भारत में पंजीकृत मतदाता", icon: "👥" },
    { stat: "10.5 Lakh+", label: "Polling Stations", labelHi: "मतदान केंद्र", icon: "🏛️" },
    { stat: "543", label: "Lok Sabha Seats", labelHi: "लोकसभा सीटें", icon: "💺" },
    { stat: "1952", label: "First General Election", labelHi: "पहला आम चुनाव", icon: "📅" }
  ]
};
