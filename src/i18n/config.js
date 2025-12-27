
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: {
      hero: "Building scalable frontend systems.",
      homeHeadline: "Web Developer",
      name: "Nishant Padhi",
      home: "Home",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      home1: "I am a Senior Software Engineer at Walmart, specializing in frontend engineering with React and JavaScript, where I build scalable, high-performance web applications used at massive scale.",
      home2: "My core strength lies in performance optimization and frontend architecture. I enjoy identifying bottlenecks, simplifying complex UI systems, and improving load times, responsiveness, and overall user experience—especially in production apps that serve millions of users. Whether it’s optimizing rendering, improving bundle size, or designing reusable component systems, I focus on measurable impact, not just clean code.",
      home3: "I work closely with product managers, designers, and backend engineers to turn ambiguous requirements into reliable, user-friendly features. I value strong fundamentals, thoughtful trade-offs, and writing code that teams can confidently maintain and scale.",
      home4: "Tech focus: React, React-Query, Tailwind CSS, JavaScript, Frontend Architecture, Web Performance, Scalable UI, Optimization, Design Systems",
      home5: "If you are building performance-critical web products or looking for someone who cares deeply about user experience at scale, let us connect.",
      educationHeadline: "Education History",
      btechTitle: "2016-2020",
      btechCardTitle: "B.Tech (NIT Patna)",
      btechCardSubtitle: "CGPA: 7.8",
      btechCardDetailedText: "I have completed my B.Tech from NIT Patna in Information Technology. The major subjects were DSA, Web Technology, DBMS, Computer Networks, OS.",
      hscTitle: "2014-2016",
      hscCardTitle: "12th (IHSE)",
      hscCardSubtitle: "Percentage: 89.5",
      hscCardDetailedText: "I have completed my 12th from IHSE in Science stream with major subjects as Physics, Chemistry, Mathematics and Information technology.",
      sscTitle: "2011-2014",
      sscCardTitle: "10th (Udala High School)",
      sscCardSubtitle: "Percentage: 93",
      sscCardDetailedText: "I have completed my 10th from Udala High School.",
      experienceHeadline: "Working Experience",
      exp1Title: "June 2025 - Present",
      exp1CardTitle: "Senior Software Engineer @Walmart",
      exp1CardDetailedText: `
      <ul>
        <li>Promoted for technical leadership and high-impact delivery across marketplace initiatives.</li>
        <br />
        <li>Leading frontend architecture decisions for large-scale seller experience platforms.</li>
        <br />
        <li>Mentoring engineers on React performance patterns, testing strategies, and scalable UI design.</li>
        <br />
        <li>Collaborating with cross-functional teams to define technical roadmaps and deliver customer-centric solutions.</li>
        <br />
        <li>Driving adoption of best practices in code quality, performance optimization, and frontend architecture.</li>
        <br />
        <li>Delivered multiple High impact, high GMV impact projects in time.</li>
        <br />
        <li>Added multiple reusable component in the common design system library to streamline development and ensure consistency across applications.</li>
      </ul>
    `,
      exp2Title: "June 2022 - May 2025",
      exp2CardTitle: "Software Engineer III @Walmart",
      exp2CardDetailedText: `
      <ul>
        <li>Led a team of 4 engineers in the Marketplace domain to deliver Listing Quality and Seller Tiering initiatives from the ground up. Owned the full lifecycle—from effort estimation, roadmap and timeline definition, and project scaffolding to unblocking engineers, conducting code reviews, and ensuring high-quality delivery under aggressive deadlines. Proactively introduced automated test coverage, significantly reducing manual testing effort and improving release reliability.</li>
        <br />
        <li>Built shared component libraries adopted across teams, reducing duplication and improving performance.</li>
        <br />
        <li>Took initiative across multiple projects to resolve critical SonarQube issues and increase unit test coverage above the suggested threshold.</li>
        <br />
        <li>Refactored data-fetching and state management using React Query, significantly reducing unnecessary re-renders and improving overall application performance. Improved Lighthouse performance score from ~9 to 66 and redesigned the architecture to be configuration-driven, enabling reuse across multiple markets.</li>
        <br />
        <li>Designed and developed a Jira automation tool to standardize and accelerate ticket creation, saving 300+ engineering hours per quarter. The solution was later adopted by multiple teams, improving consistency and operational efficiency at scale.</li>
      </ul>
    `,
      exp3Title: "Jan 2020 - May 2022",
      exp3CardTitle: "SOFTWARE ENGINEER 1 & 2 @Factset",
      exp3CardDetailedText: `
      <ul>
        <li>As part of the RAISE team, contributed to a cross-platform Document Viewer used across web and workstation environments to render HTML and PDF content. Led development of the Viewer Workspace Persistence feature, enabling users to save and restore their work, and built an in-app notification system to surface newly released features with guided demos.</li>
        <br />
        <li>Strengthened code quality by adding comprehensive unit test coverage, increasing coverage from ~60% to 90%+ and significantly reducing production bugs. Proactively resolved SonarQube code smells, improving maintainability and long-term code health.</li>
        <br />
        <li>As part of the BOI team, built reusable frontend libraries adopted across multiple applications. Led the end-to-end development of the Blackline comparison library, enabling users to visually compare documents, and extended the Historical Tables library to support PDF documents.</li>
      </ul>
    `,
      exp4Title: "Mar 2019 - Apr 2019",
      exp4CardTitle: "Web Development Intern @Connecting Freshers",
      exp4CardDetailedText: `
      <ul>
        <li>Developed SEO-optimized webpages aggregating comprehensive information about IITs and NITs, enabling students to access all relevant college-selection details from a single page. Applied on-page SEO and performance optimization techniques to improve search rankings, discoverability, and page performance.</li>
        <br />
        <li>Created a reusable frontend boilerplate that standardized development patterns and was adopted by other engineers to rapidly build multiple web pages, improving consistency and development velocity.</li>
      </ul>
    `,
    }},
    hi: { translation: {
      hero: "स्केलेबल फ्रंटएंड सिस्टम बना रहा हूँ।",
      homeHeadline: "वेब डेवलपर",
      name: "निशांत पाढ़ी",
      home: "मुख्य पृष्ठ",
      education: "शिक्षा",
      experience: "अनुभव",
      projects: "परियोजनाओं",
      contact: "संपर्क",
      home1: "मैं वॉलमार्ट में एक सीनियर सॉफ्टवेयर इंजीनियर हूँ, जो React और JavaScript के साथ फ्रंटएंड इंजीनियरिंग में स्पेशलाइज़्ड हूँ, जहाँ मैं बड़े पैमाने पर इस्तेमाल होने वाले स्केलेबल, हाई-परफॉर्मेंस वेब एप्लिकेशन बनाता हूँ।",
      home2: "मेरी मुख्य ताकत परफॉर्मेंस ऑप्टिमाइजेशन और फ्रंटएंड आर्किटेक्चर में है। मुझे बॉटलनेक पहचानने, जटिल UI सिस्टम को आसान बनाने, और लोड टाइम, रिस्पॉन्सिवनेस और ओवरऑल यूजर एक्सपीरियंस को बेहतर बनाने में मज़ा आता है - खासकर उन प्रोडक्शन ऐप्स में जो लाखों यूजर्स को सर्विस देते हैं। चाहे वह रेंडरिंग को ऑप्टिमाइज़ करना हो, बंडल साइज़ को बेहतर बनाना हो, या रियूजेबल कंपोनेंट सिस्टम डिज़ाइन करना हो, मैं सिर्फ़ क्लीन कोड पर नहीं, बल्कि मेज़रेबल इम्पैक्ट पर फोकस करता हूँ।",
      home3: "मैं प्रोडक्ट मैनेजर, डिज़ाइनर और बैकएंड इंजीनियर के साथ मिलकर काम करता हूँ ताकि अस्पष्ट ज़रूरतों को भरोसेमंद, यूज़र-फ्रेंडली फ़ीचर्स में बदला जा सके। मैं मज़बूत फंडामेंटल्स, सोच-समझकर लिए गए फ़ैसलों और ऐसा कोड लिखने को महत्व देता हूँ जिसे टीमें भरोसे के साथ मेंटेन और स्केल कर सकें।",
      home4: "टेक फोकस: React, React-Query, Tailwind CSS, JavaScript, फ्रंटएंड आर्किटेक्चर, वेब परफॉर्मेंस, स्केलेबल UI, ऑप्टिमाइज़ेशन, डिज़ाइन सिस्टम",
      home5: "अगर आप परफॉर्मेंस-क्रिटिकल वेब प्रोडक्ट्स बना रहे हैं या ऐसे किसी व्यक्ति की तलाश में हैं जो बड़े पैमाने पर यूज़र एक्सपीरियंस की बहुत परवाह करता हो, तो आइए कनेक्ट करते हैं।",
      educationHeadline: "शिक्षा का इतिहास",
      btechTitle: "२०१६-२०२०",
      btechCardTitle: "B.Tech (NIT पटना)",
      btechCardSubtitle: "सीजीपीए: 7.8",
      btechCardDetailedText: "मैंने NIT पटना से इन्फॉर्मेशन टेक्नॉलॉजी में B.Tech पूरा किया है। मुख्य विषय थे DSA, वेब टेक्नोलॉजी, DBMS, कंप्यूटर नेटवर्क्स, OS।",
      hscTitle: "२०१४-२०१६",
      hscCardTitle: "12वीं (IHSE)",
      hscCardSubtitle: "प्रतिशत: 89.5",
      hscCardDetailedText: "मैंने IHSE से साइंस स्ट्रीम में 12वीं पूरी की है, मुख्य विषय फिजिक्स, केमिस्ट्री, मैथमैटिक्स और इन्फॉर्मेशन टेक्नोलॉजी थे।",
      sscTitle: "२०११-२०१४",
      sscCardTitle: "10वीं (उडाला हाई स्कूल)",
      sscCardSubtitle: "प्रतिशत: 93",
      sscCardDetailedText: "मैंने उडाला हाई स्कूल से 10वीं पूरी की है।",
      experienceHeadline: "कार्य अनुभव",
      exp1Title: "जून 2025 - वर्तमान",
      exp1CardTitle: "सीनियर सॉफ्टवेयर इंजीनियर @Walmart",
      exp1CardDetailedText: `
      <ul>
        <li>मार्केटप्लेस इनिशिएटिव्स में टेक्निकल लीडरशिप और हाई-इम्पैक्ट डिलीवरी के लिए प्रमोट किया गया।</li>
        <br />
        <li>वबड़े पैमाने पर सेलर एक्सपीरियंस प्लेटफॉर्म के लिए लीडिंग फ्रंटएंड आर्किटेक्चर के फैसले लेना।</li>
        <br />
        <li>इंजीनियरों को रिएक्ट परफॉर्मेंस पैटर्न, टेस्टिंग स्ट्रेटेजी और स्केलेबल UI डिज़ाइन के बारे में मेंटरिंग देना।</li>
        <br />
        <li>टेक्निकल रोडमैप तय करने और कस्टमर-सेंट्रिक सॉल्यूशन देने के लिए क्रॉस-फंक्शनल टीमों के साथ मिलकर काम करना।</li>
        <br />
        <li>कोड क्वालिटी, परफॉर्मेंस ऑप्टिमाइज़ेशन और फ्रंटएंड आर्किटेक्चर में बेस्ट प्रैक्टिस को अपनाने को बढ़ावा देना।</li>
        <br />
        <li>समय पर कई हाई इम्पैक्ट, हाई GMV इम्पैक्ट वाले प्रोजेक्ट डिलीवर किए।</li>
        <br />
        <li>डेवलपमेंट को आसान बनाने और सभी एप्लिकेशन में एकरूपता सुनिश्चित करने के लिए कॉमन डिज़ाइन सिस्टम लाइब्रेरी में कई रियूजेबल कंपोनेंट जोड़े गए हैं।</li>
      </ul>
    `,
      exp2Title: "जून 2022 - मई 2025",
      exp2CardTitle: "सॉफ़्टवेयर इंजीनियर III @Walmart",
      exp2CardDetailedText: `
      <ul>
        <li>मार्केटप्लेस डोमेन में 4 इंजीनियरों की एक टीम को लीड किया ताकि लिस्टिंग क्वालिटी और सेलर टियरिंग इनिशिएटिव को शुरू से लागू किया जा सके। पूरे लाइफसाइकिल की ज़िम्मेदारी संभाली - जिसमें एफर्ट एस्टिमेशन, रोडमैप और टाइमलाइन तय करना, और प्रोजेक्ट स्केफोल्डिंग से लेकर इंजीनियरों की रुकावटें दूर करना, कोड रिव्यू करना, और कड़ी डेडलाइन के तहत हाई-क्वालिटी डिलीवरी सुनिश्चित करना शामिल था। प्रोएक्टिव तरीके से ऑटोमेटेड टेस्ट कवरेज शुरू किया, जिससे मैनुअल टेस्टिंग का काम काफी कम हो गया और रिलीज़ की विश्वसनीयता में सुधार हुआ।</li>
        <br />
        <li>शेयर किए गए कंपोनेंट लाइब्रेरी बनाए गए जिन्हें टीमों ने अपनाया, जिससे डुप्लीकेशन कम हुआ और परफॉर्मेंस बेहतर हुई।</li>
        <br />
        <li>कई प्रोजेक्ट्स में पहल करके ज़रूरी SonarQube समस्याओं को हल किया और यूनिट टेस्ट कवरेज को सुझाए गए थ्रेशहोल्ड से ऊपर बढ़ाया।</li>
        <br />
        <li>React Query का इस्तेमाल करके डेटा-फेचिंग और स्टेट मैनेजमेंट को रिफैक्टर किया, जिससे बेवजह के री-रेंडर काफी कम हो गए और पूरे एप्लिकेशन की परफॉर्मेंस बेहतर हुई। लाइटहाउस परफॉर्मेंस स्कोर ~9 से बढ़कर 66 हो गया और आर्किटेक्चर को कॉन्फ़िगरेशन-ड्रिवन बनाने के लिए रीडिजाइन किया गया, जिससे इसे कई मार्केट में दोबारा इस्तेमाल किया जा सके।</li>
        <br />
        <li>टिकट बनाने की प्रक्रिया को स्टैंडर्डाइज़ और तेज़ करने के लिए एक जीरा ऑटोमेशन टूल डिज़ाइन और डेवलप किया, जिससे हर तिमाही 300 से ज़्यादा इंजीनियरिंग घंटे बचे। इस सॉल्यूशन को बाद में कई टीमों ने अपनाया, जिससे बड़े पैमाने पर कंसिस्टेंसी और ऑपरेशनल एफिशिएंसी में सुधार हुआ।</li>
      </ul>
    `,
      exp3Title: "जनवरी 2020 - मई 2022",
      exp3CardTitle: "SOFTWARE ENGINEER 1 & 2 @Factset",
      exp3CardDetailedText: `
      <ul>
        <li>RAISE टीम के हिस्से के तौर पर, मैंने एक क्रॉस-प्लेटफ़ॉर्म डॉक्यूमेंट व्यूअर में योगदान दिया, जिसका इस्तेमाल वेब और वर्कस्टेशन एनवायरनमेंट में HTML और PDF कंटेंट दिखाने के लिए किया जाता है। मैंने व्यूअर वर्कस्पेस परसिस्टेंस फ़ीचर के डेवलपमेंट को लीड किया, जिससे यूज़र्स अपना काम सेव और रिस्टोर कर सकते हैं, और नए रिलीज़ हुए फ़ीचर्स को गाइडेड डेमो के साथ दिखाने के लिए एक इन-ऐप नोटिफिकेशन सिस्टम बनाया।</li>
        <br />
        <li>व्यापक यूनिट टेस्ट कवरेज जोड़कर कोड की क्वालिटी को मज़बूत किया, कवरेज को ~60% से बढ़ाकर 90%+ किया और प्रोडक्शन बग्स को काफी कम किया। SonarQube कोड स्मेल को सक्रिय रूप से ठीक किया, जिससे मेंटेनेंस और लंबे समय तक कोड की हेल्थ बेहतर हुई।</li>
        <br />
        <li>BOI टीम के हिस्से के तौर पर, मैंने रियूजेबल फ्रंटएंड लाइब्रेरी बनाईं जिन्हें कई एप्लीकेशन्स में इस्तेमाल किया गया। मैंने ब्लैकलाइन कम्पेरिजन लाइब्रेरी के एंड-टू-एंड डेवलपमेंट को लीड किया, जिससे यूज़र्स डॉक्यूमेंट्स की तुलना विज़ुअली कर सकें, और हिस्टोरिकल टेबल्स लाइब्रेरी को PDF डॉक्यूमेंट्स को सपोर्ट करने के लिए बढ़ाया।</li>
      </ul>
    `,
      exp4Title: "मार्च 2019 - अप्रैल 2019",
      exp4CardTitle: "वेब डेवलपमेंट इंटर्न @Connecting Freshers",
      exp4CardDetailedText: `
      <ul>
        <li>IIT और NIT के बारे में पूरी जानकारी देने वाले SEO-ऑप्टिमाइज़्ड वेबपेज बनाए, जिससे स्टूडेंट्स एक ही पेज से कॉलेज चुनने की सभी ज़रूरी जानकारी पा सकें। सर्च रैंकिंग, खोजने में आसानी और पेज परफॉर्मेंस को बेहतर बनाने के लिए ऑन-पेज SEO और परफॉर्मेंस ऑप्टिमाइज़ेशन टेक्नीक का इस्तेमाल किया।</li>
        <br />
        <li>एक रियूजेबल फ्रंटएंड बॉयलरप्लेट बनाया गया जिसने डेवलपमेंट पैटर्न को स्टैंडर्डाइज़ किया और दूसरे इंजीनियरों ने इसे कई वेब पेज तेज़ी से बनाने के लिए अपनाया, जिससे कंसिस्टेंसी और डेवलपमेंट की स्पीड बेहतर हुई।</li>
      </ul>
    `,
    }},
    or: { translation: {
      hero: "ସ୍କେଲେବଲ୍ ଫ୍ରଣ୍ଟଏଣ୍ଡ ସିଷ୍ଟମ୍ ତିଆରି କରୁଛି।",
      homeHeadline: "ୱେବ୍ ଡେଭଲପର",
      name: "ନିଶାନ୍ତ ପାଢୀ",
      home: "ମୂଳପୃଷ୍ଠା",
      education: "ଶିକ୍ଷା",
      experience: "ଅଭିଜ୍ଞତା",
      projects: "ପ୍ରୋଜେକ୍ଟଗୁଡ଼ିକ",
      contact: "ଯୋଗାଯୋଗ",
      home1: "ମୁଁ Walmart ରେ ଜଣେ ବରିଷ୍ଠ ସଫ୍ଟୱେର୍ ଇଞ୍ଜିନିୟର, React ଏବଂ JavaScript ସହିତ ଫ୍ରଣ୍ଟଏଣ୍ଡ ଇଞ୍ଜିନିୟରିଂରେ ବିଶେଷଜ୍ଞ, ଯେଉଁଠାରେ ମୁଁ ବଡ଼ ସ୍ତରରେ ବ୍ୟବହୃତ ସ୍କେଲେବଲ୍, ଉଚ୍ଚ-ପ୍ରଦର୍ଶିତ ୱେବ୍ ଆପ୍ଲିକେସନ୍ ତିଆରି କରେ।",
      home2: "ମୋର ମୂଳ ଶକ୍ତି କାର୍ଯ୍ୟଦକ୍ଷତା ଅପ୍ଟିମାଇଜେସନ୍ ଏବଂ ଫ୍ରଣ୍ଟଏଣ୍ଡ୍ ଆର୍କିଟେକ୍ଚରରେ ରହିଛି। ମୁଁ ବାଧାଗୁଡ଼ିକୁ ଚିହ୍ନଟ କରିବା, ଜଟିଳ UI ସିଷ୍ଟମଗୁଡ଼ିକୁ ସରଳ କରିବା ଏବଂ ଲୋଡ୍ ସମୟ, ପ୍ରତିକ୍ରିୟାଶୀଳତା ଏବଂ ସାମଗ୍ରିକ ବ୍ୟବହାରକାରୀ ଅଭିଜ୍ଞତାକୁ ଉନ୍ନତ କରିବା ଉପଭୋଗ କରେ - ବିଶେଷକରି ନିୟୁତ ଉପଭୋଗୀଙ୍କୁ ସେବା ପ୍ରଦାନ କରୁଥିବା ଉତ୍ପାଦନ ଆପ୍ସରେ। ଏହା ରେଣ୍ଡରିଂକୁ ଅପ୍ଟିମାଇଜ୍ କରିବା, ବଣ୍ଡଲ୍ ଆକାରକୁ ଉନ୍ନତ କରିବା, କିମ୍ବା ପୁନଃବ୍ୟବହାରଯୋଗ୍ୟ ଉପାଦାନ ସିଷ୍ଟମ ଡିଜାଇନ୍ କରିବା ହେଉ, ମୁଁ କେବଳ ସଫା କୋଡ୍ ନୁହେଁ, ମାପଯୋଗ୍ୟ ପ୍ରଭାବ ଉପରେ ଧ୍ୟାନ ଦିଏ।",
      home3: "ମୁଁ ଅସ୍ପଷ୍ଟ ଆବଶ୍ୟକତାଗୁଡ଼ିକୁ ନିର୍ଭରଯୋଗ୍ୟ, ବ୍ୟବହାରକାରୀ-ଅନୁକୂଳ ବୈଶିଷ୍ଟ୍ୟରେ ପରିଣତ କରିବା ପାଇଁ ଉତ୍ପାଦ ପରିଚାଳକ, ଡିଜାଇନର ଏବଂ ବ୍ୟାକଏଣ୍ଡ ଇଞ୍ଜିନିୟରମାନଙ୍କ ସହିତ ଘନିଷ୍ଠ ଭାବରେ କାର୍ଯ୍ୟ କରେ। ମୁଁ ଦୃଢ଼ ମୌଳିକ ତତ୍ତ୍ୱ, ଚିନ୍ତାଶୀଳ ବାଣିଜ୍ୟ ଏବଂ ଲେଖା କୋଡକୁ ମୂଲ୍ୟ ଦିଏ ଯାହାକୁ ଦଳଗୁଡ଼ିକ ଆତ୍ମବିଶ୍ୱାସର ସହିତ ବଜାୟ ରଖିପାରିବେ ଏବଂ ସ୍କେଲ୍ କରିପାରିବେ।",
      home4: "ଟେକ୍ନୋଲୋଜି ଫୋକସ୍: React, React-Query, Tailwind CSS,JavaScript, ଫ୍ରଣ୍ଟଏଣ୍ଡ ଆର୍କିଟେକ୍ଚର, ୱେବ୍ ପରଫରମାନ୍ସ, ସ୍କେଲେବଲ୍ UI, ଅପ୍ଟିମାଇଜେସନ୍, ଡିଜାଇନ୍ ସିଷ୍ଟମ୍",
      home5: "ଯଦି ଆପଣ କାର୍ଯ୍ୟଦକ୍ଷତା-ସଙ୍କଟପୂର୍ଣ୍ଣ ୱେବ୍ ଉତ୍ପାଦ ନିର୍ମାଣ କରୁଛନ୍ତି କିମ୍ବା ଏପରି ଜଣେ ବ୍ୟକ୍ତିଙ୍କୁ ଖୋଜୁଛନ୍ତି ଯିଏ ସ୍କେଲରେ ଉପଭୋକ୍ତା ଅଭିଜ୍ଞତା ବିଷୟରେ ଗଭୀର ଭାବରେ ଚିନ୍ତା କରନ୍ତି, ଆସନ୍ତୁ ସଂଯୋଗ ହେବା।",
      educationHeadline: "ଶିକ୍ଷା ଇତିହାସ",
      btechTitle: "୨୦୧୬-୨୦୨୦",
      btechCardTitle: "B.Tech (NIT ପାଟ୍ନା)",
      btechCardSubtitle: "ସିଜିପିଏ: 7.8",
      btechCardDetailedText: "ମୁଁ NIT ପାଟ୍ନାରୁ ଇନ୍ଫର୍ମେସନ୍ ଟେକ୍ନୋଲଜୀରେ B.Tech ସମ୍ପୂର୍ଣ୍ଣ କରିଛି। ମୁଖ୍ୟ ବିଷୟଗୁଡିକ ଥିଲା DSA, ଓେବ୍ ଟେକ୍ନୋଲୋଜି, DBMS, କମ୍ପ୍ୟୁଟର ନେଟୱର୍କ୍ସ, OS।",
      hscTitle: "୨୦୧୪-୨୦୧୬",
      hscCardTitle: "12th (IHSE)",
      hscCardSubtitle: "ଶତକଡା: 89.5",
      hscCardDetailedText: "ମୁଁ IHSE ଠାରୁ ସାଇନ୍ସ୍ ଷ୍ଟ୍ରିମ୍‌ରେ ଦ୍ୱାଦଶ ସମ୍ପୂର୍ଣ୍ଣ କରିଛି, ମୁଖ୍ୟ ବିଷୟଗୁଡିକ ଥିଲା Physics, Chemistry, Mathematics ଏବଂ Information Technology।",
      sscTitle: "୨୦୧୧-୨୦୧୪",
      sscCardTitle: "ଦଶମ (Udala High School)",
      sscCardSubtitle: "ଶତକଡା: 93",
      sscCardDetailedText: "ମୁଁ Udala High School ଠାରୁ ଦଶମ ସମ୍ପୂର୍ଣ୍ଣ କରିଛି।",
      experienceHeadline: "କାର୍ଯ୍ୟ ଅଭିଜ୍ଞତା",
      exp1Title: "ଜୁନ ୨୦୨୫ - ବର୍ତ୍ତମାନ",
      exp1CardTitle: "Senior Software Engineer @Walmart",
      exp1CardDetailedText: `
      <ul>
        <li>ବଜାର ପଦକ୍ଷେପଗୁଡ଼ିକରେ ବୈଷୟିକ ନେତୃତ୍ୱ ଏବଂ ଉଚ୍ଚ-ପ୍ରଭାବ ବିତରଣ ପାଇଁ ପ୍ରୋତ୍ସାହିତ।</li>
        <br />
        <li>ବଡ଼-ସ୍ତରର ବିକ୍ରେତା ଅଭିଜ୍ଞତା ପ୍ଲାଟଫର୍ମ ପାଇଁ ଅଗ୍ରଣୀ ଫ୍ରଣ୍ଟଏଣ୍ଡ ସ୍ଥାପତ୍ୟ ନିଷ୍ପତ୍ତି।</li>
        <br />
        <li>ପ୍ରତିକ୍ରିୟା କାର୍ଯ୍ୟଦକ୍ଷତା ପ୍ୟାଟର୍ନ, ପରୀକ୍ଷଣ ରଣନୀତି ଏବଂ ସ୍କେଲେବଲ୍ UI ଡିଜାଇନ୍ ଉପରେ ଇଞ୍ଜିନିୟରମାନଙ୍କୁ ପରାମର୍ଶ ଦେବା।</li>
        <br />
        <li>ବୈଷୟିକ ରୋଡମ୍ୟାପ୍ ପରିଭାଷିତ କରିବା ଏବଂ ଗ୍ରାହକ-କୈନ୍ଦ୍ରିକ ସମାଧାନ ପ୍ରଦାନ କରିବା ପାଇଁ କ୍ରସ-ଫଙ୍କସନ୍ଲ ଦଳଗୁଡ଼ିକ ସହିତ ସହଯୋଗ କରିବା।</li>
        <br />
        <li>କୋଡ୍ ଗୁଣବତ୍ତା, କାର୍ଯ୍ୟଦକ୍ଷତା ଅପ୍ଟିମାଇଜେସନ୍, ଏବଂ ଫ୍ରଣ୍ଟଏଣ୍ଡ ଆର୍କିଟେକ୍ଚରରେ ସର୍ବୋତ୍ତମ ଅଭ୍ୟାସଗୁଡ଼ିକୁ ଗ୍ରହଣ କରିବା।</li>
        <br />
        <li>ସମୟ ମଧ୍ୟରେ ଅନେକ ଉଚ୍ଚ ପ୍ରଭାବ, ଉଚ୍ଚ GMV ପ୍ରଭାବ ପ୍ରକଳ୍ପ ପ୍ରଦାନ କରିଛି।</li>
        <br />
        <li>Developmentକୁ ସୁଗମ କରିବା ଏବଂ ପ୍ରୟୋଗଗୁଡ଼ିକରେ ସ୍ଥିରତା ସୁନିଶ୍ଚିତ କରିବା ପାଇଁ ସାଧାରଣ ଡିଜାଇନ୍ ସିଷ୍ଟମ ଲାଇବ୍ରେରୀରେ ଏକାଧିକ ପୁନଃବ୍ୟବହାରଯୋଗ୍ୟ ଉପାଦାନ ଯୋଡାଯାଇଛି।</li>
      </ul>
    `,
      exp2Title: "ଜୁନ ୨୦୨୨ - ମେ ୨୦୨୫",
      exp2CardTitle: "Software Engineer III @Walmart",
      exp2CardDetailedText: `
      <ul>
        <li>ମାର୍କେଟପ୍ଲେସ୍ ଡୋମେନରେ 4 ଜଣ ଇଞ୍ଜିନିୟରଙ୍କ ଏକ ଦଳକୁ ନେତୃତ୍ୱ ଦେଇ ତାଲିକାଭୁକ୍ତ ଗୁଣବତ୍ତା ଏବଂ ବିକ୍ରେତା ସ୍ତରୀକରଣ ପଦକ୍ଷେପଗୁଡ଼ିକୁ ମୂଳରୁ ପ୍ରଦାନ କରିଥିଲେ। ପ୍ରୟାସ ଆକଳନ, ରୋଡମ୍ୟାପ୍ ଏବଂ ସମୟସୀମା ପରିଭାଷା ଏବଂ ପ୍ରୋଜେକ୍ଟ ସ୍କାଫୋଲ୍ଡିଂ ଠାରୁ ଆରମ୍ଭ କରି ଇଞ୍ଜିନିୟରମାନଙ୍କୁ ଅଣଲବ୍ଧ କରିବା, କୋଡ୍ ସମୀକ୍ଷା କରିବା ଏବଂ ଆକ୍ରମଣାତ୍ମକ ସମୟସୀମା ମଧ୍ୟରେ ଉଚ୍ଚ-ଗୁଣବତ୍ତା ବିତରଣ ସୁନିଶ୍ଚିତ କରିବା ପର୍ଯ୍ୟନ୍ତ ସମ୍ପୂର୍ଣ୍ଣ ଜୀବନଚକ୍ରର ମାଲିକ ଥିଲେ। ସକ୍ରିୟ ଭାବରେ ସ୍ୱୟଂଚାଳିତ ପରୀକ୍ଷଣ କଭରେଜ୍ ପ୍ରଚଳନ କରିଥିଲେ, ମାନୁଆଲ୍ ପରୀକ୍ଷଣ ପ୍ରୟାସକୁ ଉଲ୍ଲେଖନୀୟ ଭାବରେ ହ୍ରାସ କରିଥିଲେ ଏବଂ ମୁକ୍ତି ନିର୍ଭରଯୋଗ୍ୟତାକୁ ଉନ୍ନତ କରିଥିଲେ।</li>
        <br />
        <li>ଦଳଗୁଡ଼ିକ ମଧ୍ୟରେ ଗ୍ରହଣ କରାଯାଇଥିବା ସେୟାର କମ୍ପୋନେଣ୍ଟ ଲାଇବ୍ରେରୀଗୁଡ଼ିକ ନିର୍ମିତ, ନକଲ ହ୍ରାସ ଏବଂ କାର୍ଯ୍ୟଦକ୍ଷତା ଉନ୍ନତ।</li>
        <br />
        <li>ସୋନାରକ୍ୟୁବ୍ ସମସ୍ୟାର ସମାଧାନ କରିବା ଏବଂ ପ୍ରସ୍ତାବିତ ସୀମାଠାରୁ ଅଧିକ ୟୁନିଟ୍ ପରୀକ୍ଷଣ କଭରେଜ୍ ବୃଦ୍ଧି କରିବା ପାଇଁ ଅନେକ ପ୍ରକଳ୍ପରେ ପଦକ୍ଷେପ ନିଆଯାଇଛି।</li>
        <br />
        <li>React Query ବ୍ୟବହାର କରି ଡାଟା-ଫେଚିଂ ଏବଂ ଷ୍ଟେଟ୍ ପରିଚାଳନାକୁ ପୁନଃଫ୍ୟାକ୍ଟର କରାଯାଇଛି, ଯାହା ଅନାବଶ୍ୟକ ପୁନଃ-ରେଣ୍ଡରଗୁଡ଼ିକୁ ଉଲ୍ଲେଖନୀୟ ଭାବରେ ହ୍ରାସ କରିଛି ଏବଂ ସାମଗ୍ରିକ ଆପ୍ଲିକେସନ୍ କାର୍ଯ୍ୟଦକ୍ଷତାକୁ ଉନ୍ନତ କରିଛି। ଲାଇଟହାଉସ୍ କାର୍ଯ୍ୟଦକ୍ଷତା ସ୍କୋରକୁ ~9 ରୁ 66 କୁ ଉନ୍ନତ କରିଛି ଏବଂ ବିନ୍ୟାସ-ଚାଳିତ ହେବା ପାଇଁ ସ୍ଥାପତ୍ୟକୁ ପୁନଃ ଡିଜାଇନ୍ କରିଛି, ଯାହା ଅନେକ ବଜାରରେ ପୁନଃବ୍ୟବହାରକୁ ସକ୍ଷମ କରିଛି।</li>
        <br />
        <li>ଟିକେଟ୍ ସୃଷ୍ଟିକୁ ମାନକୀକରଣ ଏବଂ ତ୍ୱରାନ୍ୱିତ କରିବା ପାଇଁ ଏକ ଜିରା ଅଟୋମେସନ ଟୁଲ୍ ଡିଜାଇନ୍ ଏବଂ ବିକଶିତ କରିଛି, ଯାହା ପ୍ରତି ତ୍ରୈମାସିକରେ 300+ ଇଞ୍ଜିନିୟରିଂ ଘଣ୍ଟା ସଞ୍ଚୟ କରିଥାଏ। ପରେ ଏହି ସମାଧାନକୁ ଅନେକ ଦଳ ଦ୍ୱାରା ଗ୍ରହଣ କରାଯାଇଥିଲା, ଯାହା ସ୍ଥିରତା ଏବଂ ସ୍ତରରେ କାର୍ଯ୍ୟକ୍ଷମ ଦକ୍ଷତାକୁ ଉନ୍ନତ କରିଥିଲା।</li>
      </ul>
    `,
      exp3Title: "ଜାନୁଆରୀ ୨୦୨୦ - ମେ ୨୦୨୨",
      exp3CardTitle: "SOFTWARE ENGINEER 1 & 2 @Factset",
      exp3CardDetailedText: `
      <ul>
        <li>RAISE ଦଳର ଅଂଶ ଭାବରେ, HTML ଏବଂ PDF ବିଷୟବସ୍ତୁ ପ୍ରଦାନ କରିବା ପାଇଁ ୱେବ୍ ଏବଂ ୱର୍କଷ୍ଟେସନ୍ ପରିବେଶରେ ବ୍ୟବହୃତ ଏକ କ୍ରସ୍-ପ୍ଲାଟଫର୍ମ ଡକ୍ୟୁମେଣ୍ଟ ଭ୍ୟୁଅରରେ ଅବଦାନ ଦେଇଥିଲେ। ଭ୍ୟୁଅର୍ ୱର୍କସ୍ପେସ୍ ପର୍ସିଷ୍ଟେନ୍ସ ବୈଶିଷ୍ଟ୍ୟର ବିକାଶର ନେତୃତ୍ୱ ନେଇଥିଲେ, ଯାହା ବ୍ୟବହାରକାରୀମାନଙ୍କୁ ସେମାନଙ୍କର କାର୍ଯ୍ୟ ସଂରକ୍ଷଣ ଏବଂ ପୁନଃସ୍ଥାପନ କରିବାକୁ ସକ୍ଷମ କରିଥିଲା, ଏବଂ ନିର୍ଦ୍ଦେଶିତ ଡେମୋ ସହିତ ନୂତନ ଭାବରେ ପ୍ରକାଶିତ ବୈଶିଷ୍ଟ୍ୟଗୁଡ଼ିକୁ ସାମ୍ନା କରିବା ପାଇଁ ଏକ ଇନ୍-ଆପ୍ ବିଜ୍ଞପ୍ତି ସିଷ୍ଟମ ନିର୍ମାଣ କରିଥିଲା।</li>
        <br />
        <li>ବ୍ୟାପକ ୟୁନିଟ୍ ପରୀକ୍ଷଣ କଭରେଜ୍ ଯୋଡି, କଭରେଜ୍ ~60% ରୁ 90%+ କୁ ବୃଦ୍ଧି କରି ଏବଂ ଉତ୍ପାଦନ ତ୍ରୁଟିକୁ ଉଲ୍ଲେଖନୀୟ ଭାବରେ ହ୍ରାସ କରି କୋଡ୍ ଗୁଣବତ୍ତାକୁ ସୁଦୃଢ଼ ​​କରିଛି। ସୋନାରକ୍ୟୁବ୍ କୋଡ୍ ଗନ୍ଧକୁ ସକ୍ରିୟ ଭାବରେ ସମାଧାନ କରାଯାଇଛି, ରକ୍ଷଣାବେକ୍ଷଣ ଏବଂ ଦୀର୍ଘକାଳୀନ କୋଡ୍ ସ୍ୱାସ୍ଥ୍ୟରେ ଉନ୍ନତି ଆଣିଛି।</li>
        <br />
        <li>BOI ଦଳର ଅଂଶ ଭାବରେ, ବହୁବିଧ ପ୍ରୟୋଗରେ ଗ୍ରହଣ କରାଯାଇଥିବା ପୁନଃବ୍ୟବହାରଯୋଗ୍ୟ ଫ୍ରଣ୍ଟଏଣ୍ଡ ଲାଇବ୍ରେରୀ ନିର୍ମାଣ କରିଥିଲେ। ବ୍ଲାକଲାଇନ୍ ତୁଳନା ଲାଇବ୍ରେରୀର ଶେଷ-ରୁ-ଶେଷ ବିକାଶର ନେତୃତ୍ୱ ନେଇଥିଲେ, ଯାହା ବ୍ୟବହାରକାରୀମାନଙ୍କୁ ଡକ୍ୟୁମେଣ୍ଟଗୁଡ଼ିକୁ ଦୃଶ୍ୟମାନ ଭାବରେ ତୁଳନା କରିବାକୁ ସକ୍ଷମ କରିଥିଲା, ଏବଂ PDF ଡକ୍ୟୁମେଣ୍ଟଗୁଡ଼ିକୁ ସମର୍ଥନ କରିବା ପାଇଁ ଐତିହାସିକ ସାରଣୀ ଲାଇବ୍ରେରୀକୁ ବିସ୍ତାର କରିଥିଲା।</li>
      </ul>
    `,
      exp4Title: "ମାର୍ଚ୍ଚ ୨୦୧୯ - ଅପ୍ରେଲ୍ ୨୦୧୯",
      exp4CardTitle: "Web Development Intern @Connecting Freshers",
      exp4CardDetailedText: `
      <ul>
        <li>IIT ଏବଂ NIT ବିଷୟରେ ବ୍ୟାପକ ସୂଚନାକୁ ଏକତ୍ରିତ କରି SEO-ଅପ୍ଟିମାଇଜଡ୍ ୱେବପେଜ୍ ବିକଶିତ କରାଯାଇଛି, ଯାହା ଦ୍ଵାରା ଛାତ୍ରମାନେ ଗୋଟିଏ ପୃଷ୍ଠାରୁ ସମସ୍ତ ପ୍ରାସଙ୍ଗିକ କଲେଜ-ଚୟନ ବିବରଣୀ ପାଇପାରିବେ। ସନ୍ଧାନ ରାଙ୍କିଂ, ଆବିଷ୍କାରଯୋଗ୍ୟତା ଏବଂ ପୃଷ୍ଠା କାର୍ଯ୍ୟଦକ୍ଷତାକୁ ଉନ୍ନତ କରିବା ପାଇଁ ଅନ-ପେଜ୍ SEO ଏବଂ କାର୍ଯ୍ୟଦକ୍ଷତା ଅପ୍ଟିମାଇଜେସନ୍ କୌଶଳ ପ୍ରୟୋଗ କରାଯାଇଛି।</li>
        <br />
        <li>ଏକ ପୁନଃବ୍ୟବହାରଯୋଗ୍ୟ ଫ୍ରଣ୍ଟଏଣ୍ଡ ବଏଲରପ୍ଲେଟ୍ ତିଆରି କରିଥିଲେ ଯାହା ବିକାଶ ଧାରାଗୁଡ଼ିକୁ ମାନକୀକରଣ କରିଥିଲା ​​ଏବଂ ଅନ୍ୟ ଇଞ୍ଜିନିୟରମାନଙ୍କ ଦ୍ୱାରା ଦ୍ରୁତ ଗତିରେ ଏକାଧିକ ୱେବ୍ ପୃଷ୍ଠା ନିର୍ମାଣ କରିବା ପାଇଁ ଗ୍ରହଣ କରାଯାଇଥିଲା, ଯାହା ସ୍ଥିରତା ଏବଂ ବିକାଶ ବେଗକୁ ଉନ୍ନତ କରିଥିଲା।</li>
      </ul>
    `,
    }}
  },
  lng: "en",
  fallbackLng: "en"
});
