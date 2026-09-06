import { FormEvent, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Facebook,
  Flame,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  PhoneCall,
  Quote,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const services = [
  {
    icon: Flame,
    number: "०१",
    title: "गृह प्रवेश पूजा",
    text: "नवगृह में मंगल, शांति और सकारात्मक ऊर्जा के लिए शास्त्रोक्त विधि से पूजा।",
  },
  {
    icon: HeartHandshake,
    number: "०२",
    title: "विवाह संस्कार",
    text: "विवाह के पवित्र बंधन को वैदिक मंत्रों और परंपराओं के साथ शुभता प्रदान करें।",
  },
  {
    icon: ScrollText,
    number: "०३",
    title: "कुंडली एवं मुहूर्त",
    text: "विशेष अवसरों के लिए जन्मकुंडली, ग्रह-नक्षत्र और शुभ मुहूर्त का मार्गदर्शन।",
  },
  {
    icon: Sun,
    number: "०४",
    title: "सत्यनारायण कथा",
    text: "परिवार की सुख-समृद्धि और आस्था के लिए भावपूर्ण कथा एवं पूजन विधि।",
  },
  {
    icon: Sparkles,
    number: "०५",
    title: "हवन एवं अनुष्ठान",
    text: "गृह शुद्धि, आरोग्य, शांति और मनोकामना पूर्ति हेतु विशेष वैदिक अनुष्ठान।",
  },
  {
    icon: ShieldCheck,
    number: "०६",
    title: "शांति पाठ",
    text: "ग्रह शांति, वास्तु दोष निवारण और जीवन में संतुलन के लिए परामर्श।",
  },
  {
    icon: Quote,
    number: "०७",
    title: "कथा वाचक",
    text: "भागवत कथा, राम कथा एवं धार्मिक प्रसंगों का भावपूर्ण वाचन और आध्यात्मिक मार्गदर्शन।",
  },
];

const steps = [
  { no: "१", title: "अपनी आवश्यकता साझा करें", text: "आपके संस्कार, अवसर या अनुष्ठान की जानकारी हमें दें।" },
  { no: "२", title: "शुभ मुहूर्त चुनें", text: "परंपरा और सुविधा के अनुरूप पूजा की तिथि तय करें।" },
  { no: "३", title: "श्रद्धा से अनुष्ठान सम्पन्न करें", text: "पूरी तैयारी और विधि-विधान के साथ आपका शुभ कार्य सम्पन्न होगा।" },
];

const faqs = [
  { q: "क्या पूजा हमारे घर पर सम्पन्न हो सकती है?", a: "हाँ, उपलब्धता और स्थान के अनुसार गृह पूजा, कार्यालय या मंदिर—तीनों स्थानों पर अनुष्ठान की व्यवस्था की जा सकती है।" },
  { q: "पूजा की सामग्री कौन उपलब्ध कराता है?", a: "आपकी सुविधा के अनुसार सामग्री सूची साझा की जाती है। चाहें तो आवश्यक पूजन सामग्री की व्यवस्था भी कराई जा सकती है।" },
  { q: "शुभ मुहूर्त कैसे तय किया जाता है?", a: "अवसर, स्थान और उपलब्ध जानकारी के आधार पर पंचांग एवं वैदिक परंपरा के अनुसार उपयुक्त समय सुझाया जाता है।" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span><Sparkles size={14} /> परंपरा, श्रद्धा और विश्वास के साथ</span>
          <span className="topline-location"><MapPin size={14} /> भारत एवं विदेशों में उपलब्ध</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="होम पर जाएं">
            <span className="brand-mark"><span>ॐ</span></span>
            <span className="brand-copy">
              <strong>वशिष्ठ जी महाराज</strong>
              <small>धर्म • संस्कार • अनुष्ठान</small>
            </span>
          </button>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="मुख्य मेनू">
            <button onClick={() => scrollTo("about")}>हमारे बारे में</button>
            <button onClick={() => scrollTo("services")}>सेवाएं</button>
            <button onClick={() => scrollTo("process")}>प्रक्रिया</button>
            <button onClick={() => scrollTo("contact")}>संपर्क</button>
            <button className="nav-cta" onClick={() => scrollTo("contact")}>परामर्श लें <ArrowUpRight size={16} /></button>
          </nav>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "मेनू बंद करें" : "मेनू खोलें"}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow"><span className="eyebrow-line" /> सनातन परंपरा का सान्निध्य</div>
              <h1>शुभ कार्यों एवं धार्मिक अनुष्ठानों के लिए <em>वशिष्ठ जी महाराज</em></h1>
              <p className="hero-subtitle">विधि-विधान एवं श्रद्धा के साथ हिन्दू पूजा-पाठ, संस्कार एवं धार्मिक अनुष्ठान सम्पन्न कराएं।</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo("contact")}>अपना शुभ कार्य तय करें <ArrowUpRight size={18} /></button>
                <button className="button button-quiet" onClick={() => scrollTo("about")}><span className="play-dot"><ArrowDown size={15} /></span> और जानें</button>
              </div>
              <div className="hero-signature"><span className="signature-rule" /> <span>ॐ शुभमस्तु ॐ</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <img src="/manus-storage/temple-altar_7175ed6c.jpg" alt="दीपों से सजा हुआ पारंपरिक मंदिर प्रांगण" />
                <div className="image-overlay" />
                <div className="hero-badge"><span className="badge-icon"><Flame size={17} /></span><span><strong>श्रद्धा से सेवा</strong><small>विधि-विधान के साथ</small></span></div>
              </div>
              <div className="floating-om">ॐ</div>
              <div className="visual-note"><span>॥ श्री गणेशाय नमः ॥</span><span className="note-dash" /></div>
            </div>
          </div>
          <div className="hero-bottom container">
            <div className="trust-note"><ShieldCheck size={18} /><span>अनुभव और परंपरा से जुड़ी विश्वसनीय सेवा</span></div>
            <div className="hero-scroll"><span>नीचे स्क्रॉल करें</span><span className="scroll-line" /></div>
          </div>
        </section>

        <section className="belief-strip">
          <div className="container belief-grid">
            <div className="belief-intro"><span className="small-kicker">हमारा संकल्प</span><strong>हर शुभ आरंभ में<br />आस्था का प्रकाश</strong></div>
            <div className="belief-item"><span className="belief-no">१०+</span><span>वर्षों का<br />अनुभव</span></div>
            <div className="belief-item"><span className="belief-no">५००+</span><span>सफल<br />अनुष्ठान</span></div>
            <div className="belief-item"><span className="belief-no">१००%</span><span>समर्पण और<br />पारदर्शिता</span></div>
          </div>
        </section>

        <section id="about" className="about-section section-padding">
          <div className="container about-grid">
<div className="about-art" aria-label="वशिष्ठ जी महाराज">
  <img
    src="/vashisth-ji-maharaj.jpg.png"
    alt="वशिष्ठ जी महाराज"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>
            <div className="about-copy">
              <div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> हमारा परिचय</div>
              <h2>जहाँ परंपरा मिलती है <em>विश्वास</em> से</h2>
              <p className="lead-copy">वशिष्ठ जी महाराज के सान्निध्य में होने वाला प्रत्येक अनुष्ठान केवल एक विधि नहीं, बल्कि आपके जीवन के महत्वपूर्ण अवसर को आशीर्वाद और मंगलकामना से भरने का माध्यम है।</p>
              <p>शास्त्रों में आस्था, विधि-विधान में निष्ठा और आपकी सुविधा का ध्यान—इन्हीं तीन आधारों पर हमारी सेवा टिकी है। हर पूजा को सरल, सहज और अर्थपूर्ण बनाना हमारा प्रयास है ताकि आप अपने प्रियजनों के साथ उस पवित्र क्षण को पूरे मन से जी सकें।</p>
              <div className="about-points"><div><Check size={16} /> शास्त्रोक्त विधि एवं मंत्रोच्चार</div><div><Check size={16} /> सरल भाषा में मार्गदर्शन</div><div><Check size={16} /> आपकी सुविधा के अनुसार आयोजन</div></div>
              <button className="text-link" onClick={() => scrollTo("contact")}>परामर्श के लिए संपर्क करें <ArrowUpRight size={17} /></button>
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-padding">
          <div className="container">
            <div className="section-heading centered-heading"><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> हमारी सेवाएं <span className="eyebrow-line" /></div><h2>हर अवसर के लिए <em>शुभ विधान</em></h2><p>आपके जीवन के हर महत्वपूर्ण पड़ाव को आस्था, शांति और मंगल से जोड़ने वाली सेवाएं।</p></div>
            <div className="service-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={number}><div className="service-top"><span className="service-icon"><Icon size={23} strokeWidth={1.5} /></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{text}</p><button className="card-arrow" onClick={() => scrollTo("contact")} aria-label={`${title} के लिए संपर्क करें`}><ArrowUpRight size={18} /></button></article>)}</div>
          </div>
        </section>

        <section id="process" className="process-section section-padding">
          <div className="container process-grid">
            <div className="process-intro"><div className="eyebrow"><span className="eyebrow-line" /> सरल प्रक्रिया</div><h2>आपका शुभ कार्य,<br /><em>हमारी जिम्मेदारी</em></h2><p>पहली बातचीत से लेकर अनुष्ठान के पूर्ण होने तक, हम हर चरण में आपके साथ हैं।</p><button className="button button-outline" onClick={() => scrollTo("contact")}>बात शुरू करें <ArrowUpRight size={17} /></button></div>
            <div className="steps-list">{steps.map((step, index) => <div className="step-item" key={step.no}><div className="step-number">{step.no}</div><div className="step-copy"><span>चरण {String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></div>{index < steps.length - 1 && <div className="step-connector" />}</div>)}</div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container quote-inner"><Quote size={35} className="quote-mark" /><blockquote>“श्रद्धा से किया गया प्रत्येक शुभ कर्म<br />जीवन में शांति और समृद्धि का मार्ग खोलता है।”</blockquote><div className="quote-author"><span className="quote-line" /> वशिष्ठ जी महाराज <span className="quote-line" /></div></div>
        </section>

        <section className="faq-section section-padding">
          <div className="container faq-grid"><div className="faq-heading"><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> सामान्य प्रश्न</div><h2>मन में कोई<br /><em>सवाल है?</em></h2><p>पूजा-पाठ और अनुष्ठान से जुड़ी कुछ सामान्य जानकारी यहाँ पाएं।</p></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={faq.q}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq.q}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{faq.a}</p>}</div>)}</div></div>
        </section>

        <section id="contact" className="contact-section section-padding">
          <div className="container contact-grid">
            <div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line" /> शुभ शुरुआत करें</div><h2>आपके शुभ कार्य का<br /><em>पहला कदम</em> आज ही</h2><p>अपने अवसर और आवश्यकता के बारे में बताएं। वशिष्ठ जी महाराज की टीम आपसे शीघ्र संपर्क करेगी।</p><div className="contact-details"><div><span className="detail-icon"><PhoneCall size={17} /></span><span><small>फोन नंबर</small><a href="tel:+917499902251"><strong>+91 74999 02251</strong></a></span></div><div><span className="detail-icon"><PhoneCall size={17} /></span><span><small>वैकल्पिक फोन नंबर</small><a href="tel:+919565428626"><strong>+91 95654 28626</strong></a></span></div><div><span className="detail-icon"><Mail size={17} /></span><span><small>ईमेल पता</small><a href="mailto:fm.mishra51@gmail.com"><strong>fm.mishra51@gmail.com</strong></a></span></div><div><span className="detail-icon"><CalendarDays size={17} /></span><span><small>बुकिंग</small><strong>पूर्व निर्धारित समयानुसार</strong></span></div><div><span className="detail-icon"><Clock3 size={17} /></span><span><small>संपर्क समय</small><strong>प्रातः ९:०० – सायं ७:००</strong></span></div></div></div>
            <div className="contact-card"><div className="form-heading"><span>ॐ</span><div><strong>आशीर्वाद सहित</strong><small>अपनी जानकारी साझा करें</small></div></div>{sent ? <div className="success-message"><span><Check size={23} /></span><h3>धन्यवाद!</h3><p>आपका संदेश प्राप्त हो गया है। हम शीघ्र ही आपसे संपर्क करेंगे।</p><button className="text-link" onClick={() => setSent(false)}>नया संदेश भेजें <ArrowUpRight size={16} /></button></div> : <form onSubmit={handleSubmit}><label>आपका नाम<input required name="name" placeholder="पूरा नाम" /></label><div className="form-row"><label>मोबाइल नंबर<input required name="phone" type="tel" placeholder="+91" /></label><label>अनुष्ठान का अवसर<select name="occasion" defaultValue=""><option value="" disabled>चुनें</option><option>गृह प्रवेश</option><option>विवाह संस्कार</option><option>सत्यनारायण कथा</option><option>कथा वाचन</option><option>हवन एवं अनुष्ठान</option><option>कुंडली एवं मुहूर्त</option><option>अन्य</option></select></label></div><label>आपका संदेश <textarea name="message" rows={3} placeholder="अपने शुभ कार्य के बारे में बताएं..." /></label><button className="button button-primary form-submit" type="submit">संदेश भेजें <ArrowUpRight size={18} /></button></form>}</div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><div className="brand"><span className="brand-mark"><span>ॐ</span></span><span className="brand-copy"><strong>वशिष्ठ जी महाराज</strong><small>धर्म • संस्कार • अनुष्ठान</small></span></div><p>श्रद्धा, परंपरा और विश्वास के साथ आपके हर शुभ कार्य में सहभागी।</p><div className="socials"><a href="#contact" aria-label="Instagram"><Instagram size={17} /></a><a href="#contact" aria-label="Facebook"><Facebook size={17} /></a><a href="#contact" aria-label="संपर्क"><PhoneCall size={17} /></a></div></div><div className="footer-links"><div><h4>नेविगेशन</h4><button onClick={() => scrollTo("about")}>हमारे बारे में</button><button onClick={() => scrollTo("services")}>सेवाएं</button><button onClick={() => scrollTo("process")}>प्रक्रिया</button></div><div><h4>हमसे जुड़ें</h4><button onClick={() => scrollTo("contact")}>परामर्श लें</button><button onClick={() => scrollTo("contact")}>पूजा बुक करें</button><button onClick={() => scrollTo("contact")}>संदेश भेजें</button></div></div></div><div className="container footer-bottom"><span>© २०२६ वशिष्ठ जी महाराज. सर्वाधिकार सुरक्षित।</span><span>शुभम भवतु • मंगलम भवतु</span></div></footer>
    </div>
  );
}
