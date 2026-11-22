/* Communication-partner techniques for families, in four languages. Content preserved from
   the original app. Evidence base: supported-conversation and communication-partner training. */
export type Lang = "en" | "kn" | "te" | "hi";
export type Mode = "aphasia" | "hearing";
export interface Tech { title: Record<Lang, string>; detail: Record<Lang, string> }

export const TECH: Record<Mode, Tech[]> = {
  aphasia: [
    { title: { en: "Set up the conversation", kn: "ಮಾತುಕತೆಗೆ ಸಿದ್ಧಗೊಳಿಸಿ", te: "సంభాషణకు సిద్ధం చేయండి", hi: "बातचीत की तैयारी करें" },
      detail: { en: "Sit face to face, turn off the TV, and talk one person at a time.", kn: "ಎದುರು-ಬದುರು ಕುಳಿತುಕೊಳ್ಳಿ, ಟಿವಿ ಆರಿಸಿ, ಒಬ್ಬೊಬ್ಬರೇ ಮಾತನಾಡಿ.", te: "ఎదురెదురుగా కూర్చోండి, టీవీ ఆపండి, ఒకరి తర్వాత ఒకరు మాట్లాడండి.", hi: "आमने-सामने बैठें, टीवी बंद करें, एक समय में एक ही व्यक्ति बोले।" } },
    { title: { en: "Short sentences, adult respect", kn: "ಚಿಕ್ಕ ವಾಕ್ಯ, ಹಿರಿಯರ ಗೌರವ", te: "చిన్న వాక్యాలు, పెద్దవారికి గౌరవం", hi: "छोटे वाक्य, बड़ों जैसा सम्मान" },
      detail: { en: "Use short, clear sentences, but talk to them as the adult they are.", kn: "ಚಿಕ್ಕ, ಸ್ಪಷ್ಟ ವಾಕ್ಯ ಬಳಸಿ; ಆದರೆ ಅವರು ವಯಸ್ಕರು ಎಂಬಂತೆಯೇ ಮಾತನಾಡಿ.", te: "చిన్న, స్పష్టమైన వాక్యాలు వాడండి; కానీ వారిని పెద్దవారిలాగే గౌరవంగా మాట్లాడండి.", hi: "छोटे, साफ़ वाक्य बोलें, पर उनसे एक वयस्क की तरह ही बात करें।" } },
    { title: { en: "Write, draw and point", kn: "ಬರೆಯಿರಿ, ಚಿತ್ರಿಸಿ, ತೋರಿಸಿ", te: "రాయండి, గీయండి, చూపించండి", hi: "लिखें, बनाएँ, इशारा करें" },
      detail: { en: "Write key words, draw, or point to photos and objects while you talk.", kn: "ಮಾತನಾಡುವಾಗ ಮುಖ್ಯ ಪದ ಬರೆಯಿರಿ, ಚಿತ್ರ ಬಿಡಿಸಿ, ಅಥವಾ ಫೋಟೋ, ವಸ್ತು ತೋರಿಸಿ.", te: "మాట్లాడుతూ ముఖ్య పదాలు రాయండి, బొమ్మ గీయండి, లేదా ఫోటోలు, వస్తువులు చూపించండి.", hi: "बात करते समय मुख्य शब्द लिखें, चित्र बनाएँ, या फ़ोटो और चीज़ों की ओर इशारा करें।" } },
    { title: { en: "Ask easy questions", kn: "ಸುಲಭ ಪ್ರಶ್ನೆ ಕೇಳಿ", te: "సులభమైన ప్రశ్నలు అడగండి", hi: "आसान सवाल पूछें" },
      detail: { en: "Ask yes-or-no or choice questions: “Tea or coffee?”", kn: "ಹೌದು-ಇಲ್ಲ ಅಥವಾ ಆಯ್ಕೆಯ ಪ್ರಶ್ನೆ ಕೇಳಿ: “ಚಹಾ ಬೇಕಾ, ಕಾಫಿ ಬೇಕಾ?”", te: "అవును-కాదు లేదా ఎంపిక ప్రశ్నలు అడగండి: “టీ కావాలా, కాఫీ కావాలా?”", hi: "हाँ-ना या चुनने वाले सवाल पूछें: “चाय या कॉफ़ी?”" } },
    { title: { en: "Give time", kn: "ಸಮಯ ಕೊಡಿ", te: "సమయం ఇవ్వండి", hi: "समय दें" },
      detail: { en: "Wait for them to answer. Don't finish their sentences unless they ask.", kn: "ಉತ್ತರಿಸಲು ಕಾಯಿರಿ. ಅವರು ಕೇಳದ ಹೊರತು ಅವರ ವಾಕ್ಯ ನೀವೇ ಮುಗಿಸಬೇಡಿ.", te: "సమాధానం కోసం ఆగండి. వారు అడిగితే తప్ప వారి వాక్యాలు మీరు పూర్తి చేయకండి.", hi: "जवाब का इंतज़ार करें। जब तक वे न कहें, उनका वाक्य आप पूरा न करें।" } },
    { title: { en: "Check you understood", kn: "ಅರ್ಥವಾಯಿತೆ ಖಚಿತಪಡಿಸಿ", te: "అర్థమైందో సరిచూసుకోండి", hi: "समझ की पुष्टि करें" },
      detail: { en: "Repeat back the main point: “So you want to visit your sister?”", kn: "ಮುಖ್ಯ ವಿಷಯ ಮತ್ತೆ ಹೇಳಿ: “ಅಂದರೆ ನೀವು ತಂಗಿಯನ್ನು ನೋಡಲು ಹೋಗಬೇಕಾ?”", te: "ముఖ్య విషయం మళ్లీ చెప్పండి: “అంటే మీరు చెల్లెలిని చూడాలనుకుంటున్నారా?”", hi: "मुख्य बात दोहराएँ: “तो आप बहन से मिलने जाना चाहते हैं?”" } }
  ],
  hearing: [
    { title: { en: "Get attention first", kn: "ಮೊದಲು ಗಮನ ಸೆಳೆಯಿರಿ", te: "ముందు దృష్టి ఆకర్షించండి", hi: "पहले ध्यान खींचें" },
      detail: { en: "Say their name and make sure they can see your face before you start.", kn: "ಆರಂಭಿಸುವ ಮೊದಲು ಹೆಸರು ಕರೆಯಿರಿ, ನಿಮ್ಮ ಮುಖ ಕಾಣುವಂತೆ ನೋಡಿಕೊಳ್ಳಿ.", te: "మొదలుపెట్టే ముందు పేరు పిలవండి, మీ ముఖం కనిపించేలా చూసుకోండి.", hi: "शुरू करने से पहले नाम लें और देखें कि वे आपका चेहरा देख सकें।" } },
    { title: { en: "Cut background noise", kn: "ಹಿನ್ನೆಲೆ ಶಬ್ದ ಕಡಿಮೆ ಮಾಡಿ", te: "నేపథ్య శబ్దం తగ్గించండి", hi: "आसपास का शोर कम करें" },
      detail: { en: "Turn off the TV, mixer or fan, and move away from noise.", kn: "ಟಿವಿ, ಮಿಕ್ಸಿ ಅಥವಾ ಫ್ಯಾನ್ ಆರಿಸಿ; ಗದ್ದಲದಿಂದ ದೂರ ಸರಿಯಿರಿ.", te: "టీవీ, మిక్సీ లేదా ఫ్యాన్ ఆపండి; శబ్దానికి దూరంగా వెళ్లండి.", hi: "टीवी, मिक्सी या पंखा बंद करें और शोर से दूर हो जाएँ।" } },
    { title: { en: "Speak clearly, don't shout", kn: "ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡಿ, ಕಿರುಚಬೇಡಿ", te: "స్పష్టంగా మాట్లాడండి, అరవకండి", hi: "साफ़ बोलें, चिल्लाएँ नहीं" },
      detail: { en: "A little slower and clearer. Shouting distorts speech.", kn: "ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿ, ಸ್ಪಷ್ಟವಾಗಿ. ಕಿರುಚಿದರೆ ಮಾತು ವಿಕಾರವಾಗುತ್ತದೆ.", te: "కొంచెం నెమ్మదిగా, స్పష్టంగా. అరిస్తే మాట వక్రీకరిస్తుంది.", hi: "थोड़ा धीमे और साफ़। चिल्लाने से बोली बिगड़ जाती है।" } },
    { title: { en: "Say it another way", kn: "ಬೇರೆ ರೀತಿ ಹೇಳಿ", te: "మరో విధంగా చెప్పండి", hi: "दूसरे तरीक़े से कहें" },
      detail: { en: "If they miss it, rephrase instead of repeating the same words.", kn: "ಅರ್ಥವಾಗದಿದ್ದರೆ ಅದೇ ಪದ ಪುನರಾವರ್ತಿಸದೆ ಬೇರೆ ರೀತಿ ಹೇಳಿ.", te: "అర్థం కాకపోతే అవే మాటలు మళ్లీ కాకుండా వేరే విధంగా చెప్పండి.", hi: "समझ न आए तो वही शब्द दोहराने की जगह बात दूसरे ढंग से कहें।" } },
    { title: { en: "Name the topic", kn: "ವಿಷಯ ತಿಳಿಸಿ", te: "విషయం చెప్పండి", hi: "विषय बताएँ" },
      detail: { en: "Say what you are talking about first, and when the topic changes.", kn: "ಮೊದಲು ಯಾವ ವಿಷಯ ಎಂದು ಹೇಳಿ; ವಿಷಯ ಬದಲಾದಾಗಲೂ ತಿಳಿಸಿ.", te: "ముందు దేని గురించి మాట్లాడుతున్నారో, విషయం మారినప్పుడూ చెప్పండి.", hi: "पहले बताएँ कि किस बारे में बात है, और विषय बदले तब भी।" } },
    { title: { en: "Support the hearing aids", kn: "ಶ್ರವಣ ಸಾಧನಕ್ಕೆ ಬೆಂಬಲ", te: "వినికిడి యంత్రాలకు సహాయం", hi: "हियरिंग एड में मदद" },
      detail: { en: "Help keep them charged or with fresh batteries, and worn all day.", kn: "ಚಾರ್ಜ್ ಅಥವಾ ಹೊಸ ಬ್ಯಾಟರಿ ಇರುವಂತೆ, ದಿನವಿಡೀ ಧರಿಸುವಂತೆ ಸಹಾಯ ಮಾಡಿ.", te: "ఛార్జ్ లేదా కొత్త బ్యాటరీలు ఉండేలా, రోజంతా పెట్టుకునేలా సహాయం చేయండి.", hi: "चार्ज या नई बैटरी रखने और दिन भर पहनने में मदद करें।" } }
  ]
};

export const last14Days = (now = new Date()): { iso: string; date: Date }[] =>
  Array.from({ length: 14 }, (_, k) => {
    const d = new Date(now); d.setDate(d.getDate() - (13 - k));
    return { iso: new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10), date: d };
  });
