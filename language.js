(() => {
  const translations = new Map([
    ["Firma", "Firm"],
    ["Método", "Method"],
    ["Servicios", "Services"],
    ["Filosofía", "Philosophy"],
    ["Contacto", "Contact"],
    ["Conversemos", "Let's talk"],
    ["Conversemos sobre su empresa", "Let's talk about your company"],
    ["Conozca IMPACT 0.1", "Discover IMPACT 0.1"],
    ["Asesoría de transformación empresarial", "Business transformation advisory"],
    ["Transformando empresas mediante", "Transforming companies through"],
    ["estrategia, liderazgo", "strategy, leadership"],
    ["e inteligencia artificial.", "and artificial intelligence."],
    ["Ayudamos a empresarios y equipos directivos a identificar lo que realmente está frenando su organización, transformar sus procesos y construir capacidades que produzcan resultados medibles.", "We help business owners and executive teams identify what is truly holding their organization back, transform their processes, and build capabilities that produce measurable results."],
    ["años integrando tecnología, operaciones y negocio", "years integrating technology, operations, and business"],
    ["años liderando sistemas y construyendo soluciones", "years leading systems and building solutions"],
    ["años al frente de la dirección general", "years leading as chief executive"],
    ["No empezamos con la tecnología.", "We don't start with technology."],
    ["Empezamos entendiendo la empresa.", "We start by understanding the business."],
    ["Benavides Trusted Advisors nace para ayudar a más empresas a transformar la forma en que operan, deciden y crecen. Integramos experiencia ejecutiva, estrategia, liderazgo, optimización de procesos, automatización e inteligencia artificial aplicada.", "Benavides Trusted Advisors was created to help more companies transform the way they operate, make decisions, and grow. We integrate executive experience, strategy, leadership, process optimization, automation, and applied artificial intelligence."],
    ["Primero encontramos el verdadero “dolor de muelas”: el problema que está generando o frenando a los demás. Después observamos, medimos y priorizamos. Solo entonces decidimos qué simplificar, qué rediseñar y dónde la tecnología puede crear valor.", "First, we find the true root cause: the problem creating or constraining the others. Then we observe, measure, and prioritize. Only then do we decide what to simplify, what to redesign, and where technology can create value."],
    ["Nuestra regla de trabajo", "Our working rule"],
    ["Todo proceso debe justificar el tiempo que consume.", "Every process must justify the time it consumes."],
    ["Metodología IMPACT 0.1", "IMPACT 0.1 Methodology"],
    ["De la realidad operativa a la transformación medible", "From operational reality to measurable transformation"],
    ["Un proceso riguroso para entender, decidir, construir y transformar.", "A rigorous process to understand, decide, build, and transform."],
    ["IMPACT no fuerza a la empresa dentro de una solución. Parte de su realidad, mide antes de intervenir y deja evidencia concreta en cada etapa.", "IMPACT does not force a company into a solution. It starts from operational reality, measures before intervening, and leaves concrete evidence at every stage."],
    ["Identify", "Identificar"],
    ["Measure", "Medir"],
    ["Prioritize", "Priorizar"],
    ["Analyze", "Analizar"],
    ["Create", "Construir"],
    ["Transform", "Transformar"],
    ["Identificar", "Identify"],
    ["Medir", "Measure"],
    ["Priorizar", "Prioritize"],
    ["Analizar", "Analyze"],
    ["Construir", "Create"],
    ["Transformar", "Transform"],
    ["Entender cómo funciona realmente el proceso antes de hacer recomendaciones.", "Understand how the process truly works before making recommendations."],
    ["Observar antes de juzgar. Escuchar antes de proponer.", "Observe before judging. Listen before proposing."],
    ["Convertir la realidad observada en información cuantificable.", "Turn observed reality into quantifiable information."],
    ["Lo que solamente percibimos puede discutirse. Lo que medimos puede analizarse.", "What we merely perceive can be debated. What we measure can be analyzed."],
    ["Determinar dónde intervenir primero para crear el mayor valor compartido.", "Determine where to intervene first to create the greatest shared value."],
    ["No todo lo que puede mejorarse debe mejorarse al mismo tiempo.", "Not everything that can be improved should be improved at the same time."],
    ["Diseñar el mejor proceso antes de elegir la tecnología.", "Design the best process before choosing the technology."],
    ["Primero analizo. Después decido si automatizo.", "First I analyze. Then I decide whether to automate."],
    ["Convertir el diseño optimizado en una solución funcional.", "Turn the optimized design into a functional solution."],
    ["La tecnología es una herramienta. La solución es el resultado.", "Technology is a tool. The solution is the outcome."],
    ["Convertir la mejora implementada en resultados medibles y nueva capacidad organizacional.", "Turn the implemented improvement into measurable results and new organizational capability."],
    ["Una implementación no es transformación hasta que produce valor.", "An implementation is not transformation until it creates value."],
    ["Entregable", "Deliverable"],
    ["Mapa de Realidad Operativa", "Operational Reality Map"],
    ["Línea Base Operativa", "Operational Baseline"],
    ["Mapa de Prioridades de Transformación", "Transformation Priorities Map"],
    ["Cadena de Valor Optimizada", "Optimized Value Chain"],
    ["Solución Operativa IMPACT", "IMPACT Operational Solution"],
    ["Reporte de Transformación IMPACT", "IMPACT Transformation Report"],
    ["Matriz Benavides", "Benavides Matrix"],
    ["Priorizar el valor compartido", "Prioritizing shared value"],
    ["No elegimos lo más llamativo. Elegimos lo que genera el mayor impacto sostenible.", "We don't choose what is most impressive. We choose what creates the greatest sustainable impact."],
    ["Impacto organizacional", "Organizational impact"],
    ["Capacidad liberada", "Released capacity"],
    ["Impacto humano", "Human impact"],
    ["Valor económico", "Economic value"],
    ["Viabilidad", "Feasibility"],
    ["Sostenibilidad", "Sustainability"],
    ["El principio de capacidad liberada", "The released capacity principle"],
    ["No celebramos horas ahorradas. Celebramos capacidad recuperada y bien utilizada.", "We don't celebrate hours saved. We celebrate capacity recovered and put to good use."],
    ["Antes", "Before"],
    ["Después", "After"],
    ["El tiempo liberado no es simplemente ahorro. Es capacidad recuperada. Su mejor utilización se decide entre la organización y el dueño del proceso para que produzca valor para ambos.", "Released time is not simply a saving. It is recovered capacity. Its best use is decided jointly by the organization and the process owner so it creates value for both."],
    ["Transformación = mejora medible del negocio + capacidad liberada + desarrollo de las personas", "Transformation = measurable business improvement + released capacity + people development"],
    ["Del problema real a la capacidad instalada", "From the real problem to installed capability"],
    ["Intervenimos donde la transformación genera valor.", "We engage where transformation creates value."],
    ["Diagnóstico ejecutivo IMPACT", "IMPACT Executive Assessment"],
    ["Entendemos cómo funciona realmente la empresa, hacemos visible lo que hoy se percibe y construimos una línea base para decidir con evidencia.", "We understand how the company truly operates, make visible what is currently only perceived, and build a baseline for evidence-based decisions."],
    ["Optimización de procesos", "Process optimization"],
    ["Cuestionamos, simplificamos y rediseñamos la cadena de valor antes de incorporar herramientas o automatización.", "We challenge, simplify, and redesign the value chain before introducing tools or automation."],
    ["Automatización e IA aplicada", "Automation and applied AI"],
    ["Construimos soluciones que integran sistemas, eliminan trabajo repetitivo y amplifican la capacidad de las personas donde la IA aporta valor real.", "We build solutions that integrate systems, eliminate repetitive work, and expand people's capabilities where AI delivers real value."],
    ["Transformación organizacional", "Organizational transformation"],
    ["Alineamos procesos, tecnología, liderazgo y adopción para que la mejora se convierta en una nueva capacidad de la empresa.", "We align processes, technology, leadership, and adoption so improvement becomes a new organizational capability."],
    ["Acompañamiento estratégico", "Strategic advisory"],
    ["Trabajamos junto al empresario y su equipo directivo para priorizar, decidir y ejecutar con claridad, continuidad y resultados medibles.", "We work alongside business owners and their executive teams to prioritize, decide, and execute with clarity, continuity, and measurable results."],
    ["Nuestros estándares", "Our standards"],
    ["Cómo sabemos que el trabajo está bien hecho", "How we know the work is done well"],
    ["Seis compromisos que protegen la calidad de cada transformación.", "Six commitments that protect the quality of every transformation."],
    ["Comprensión validada", "Validated understanding"],
    ["El cliente confirma que entendimos su realidad.", "The client confirms that we understood their reality."],
    ["Evidencia objetiva", "Objective evidence"],
    ["Las decisiones están respaldadas por datos y observación.", "Decisions are supported by data and observation."],
    ["Simplicidad demostrada", "Demonstrated simplicity"],
    ["Evaluamos la opción más simple antes de añadir complejidad.", "We evaluate the simplest option before adding complexity."],
    ["Adopción por las personas", "People adoption"],
    ["La solución se considera implementada cuando las personas la usan y la entienden.", "A solution is considered implemented when people use it and understand it."],
    ["Valor demostrable", "Demonstrable value"],
    ["Existe un antes y un después claro.", "There is a clear before and after."],
    ["El cliente puede sostener la mejora sin depender permanentemente de nosotros.", "The client can sustain the improvement without permanently depending on us."],
    ["“No entregamos proyectos.", "“We don't deliver projects."],
    ["Dejamos capacidades instaladas.", "We leave lasting capabilities in place."],
    ["”", "”"],
    ["La tecnología cambia procesos.", "Technology changes processes."],
    ["El liderazgo cambia personas.", "Leadership changes people."],
    ["La combinación correcta cambia empresas.", "The right combination changes companies."],
    ["— Filosofía Benavides Trusted Advisors", "— Benavides Trusted Advisors Philosophy"],
    ["Visión ejecutiva.", "Executive vision."],
    ["Experiencia operativa.", "Operational experience."],
    ["Fundador · Asesor de transformación empresarial", "Founder · Business transformation advisor"],
    ["Tecnología desde el principio. Negocio desde la experiencia.", "Technology from the beginning. Business through experience."],
    ["Su relación con la tecnología comenzó en high school, cuando una computadora Texas Instruments y el lenguaje BASIC despertaron una curiosidad que se convertiría en una carrera.", "His relationship with technology began in high school, when a Texas Instruments computer and the BASIC programming language sparked a curiosity that would become a career."],
    ["Durante más de 27 años pasó de programar y construir soluciones a dirigir sistemas, operaciones y finalmente una empresa mediana-grande desde la posición de CEO. Esa trayectoria le enseñó a traducir entre dos mundos que rara vez hablan el mismo idioma: las necesidades del negocio y las posibilidades de la tecnología.", "Over more than 27 years, he progressed from programming and building solutions to leading systems, operations, and ultimately a mid-to-large company as CEO. That journey taught him to translate between two worlds that rarely speak the same language: business needs and technological possibilities."],
    ["Creó Benavides Trusted Advisors para poner esa capacidad al servicio de muchas organizaciones y acompañar a sus líderes desde una convicción propia: transformar procesos sin perder de vista a las personas que los hacen posibles.", "He founded Benavides Trusted Advisors to put that capability to work for many organizations and support their leaders with a deeply held conviction: transform processes without losing sight of the people who make them possible."],
    ["Estrategia", "Strategy"],
    ["Liderazgo", "Leadership"],
    ["Operaciones", "Operations"],
    ["Automatización", "Automation"],
    ["Inteligencia artificial", "Artificial intelligence"],
    ["Una pregunta para comenzar", "One question to begin"],
    ["De todos los problemas que tiene hoy su empresa, ¿cuál cree usted que es el que realmente la mantiene estancada y está frenando a los demás?", "Of all the problems your company faces today, which one do you believe is truly keeping it stuck and holding everything else back?"],
    ["Ahí comienza nuestro trabajo.", "That is where our work begins."],
    ["Transformando empresas mediante estrategia, liderazgo e inteligencia artificial.", "Transforming companies through strategy, leadership, and artificial intelligence."],
    ["© 2026 Benavides Trusted Advisors", "© 2026 Benavides Trusted Advisors"]
  ]);

  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style") || !node.data.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    nodes.push({ node, original: node.data });
  }

  const buttons = [...document.querySelectorAll("[data-lang]")];
  const description = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const languageGroup = document.querySelector(".language-switcher");
  const brandHome = document.querySelector(".site-header .brand");
  const mainNav = document.querySelector(".site-header nav");
  const menuButton = document.querySelector(".menu-toggle");
  const portrait = document.querySelector(".founder-photo");

  function applyLanguage(language) {
    const english = language === "en";
    document.documentElement.lang = language;
    document.title = english ? "Benavides Trusted Advisors | Business Transformation" : "Benavides Trusted Advisors | Transformación empresarial";
    description?.setAttribute("content", english ? "Benavides Trusted Advisors: business transformation advisory through strategy, leadership, process optimization, automation, and applied artificial intelligence." : "Benavides Trusted Advisors: asesoría de transformación empresarial mediante estrategia, liderazgo, optimización de procesos, automatización e inteligencia artificial aplicada.");
    ogDescription?.setAttribute("content", english ? "Transforming companies through strategy, leadership, and artificial intelligence." : "Transformamos empresas mediante estrategia, liderazgo e inteligencia artificial.");
    languageGroup?.setAttribute("aria-label", english ? "Select language" : "Seleccionar idioma");
    brandHome?.setAttribute("aria-label", english ? "Benavides Trusted Advisors, home" : "Benavides Trusted Advisors, inicio");
    mainNav?.setAttribute("aria-label", english ? "Main navigation" : "Navegación principal");
    menuButton?.setAttribute("aria-label", menuButton.getAttribute("aria-expanded") === "true" ? (english ? "Close menu" : "Cerrar menú") : (english ? "Open menu" : "Abrir menú"));
    portrait?.setAttribute("alt", english ? "Humberto Benavides, founder of Benavides Trusted Advisors" : "Humberto Benavides, fundador de Benavides Trusted Advisors");

    nodes.forEach(({ node, original }) => {
      if (!english) {
        node.data = original;
        return;
      }
      const source = original.trim();
      const translated = translations.get(source);
      node.data = translated ? original.replace(source, translated) : original;
    });

    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
    try { localStorage.setItem("benavides-trusted-advisors-language", language); } catch {}
  }

  buttons.forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
  let initial = "es";
  try { initial = localStorage.getItem("benavides-trusted-advisors-language") === "en" ? "en" : "es"; } catch {}
  applyLanguage(initial);

  function setMenu(open) {
    mainNav?.classList.toggle("is-open", open);
    menuButton?.setAttribute("aria-expanded", String(open));
    const english = document.documentElement.lang === "en";
    menuButton?.setAttribute("aria-label", open ? (english ? "Close menu" : "Cerrar menú") : (english ? "Open menu" : "Abrir menú"));
  }

  menuButton?.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
  mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", event => { if (event.key === "Escape") setMenu(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 960) setMenu(false); });

  const revealGroups = [
    [".hero-copy", "reveal"],
    [".hero-proof > div", "reveal"],
    [".section-label", "reveal"],
    [".manifesto-content > *", "reveal"],
    [".method-heading > div:last-child", "reveal"],
    [".method-grid article", "reveal-scale"],
    [".priority .section-intro > div:last-child", "reveal"],
    [".priority-grid > div", "reveal-scale"],
    [".capacity > *", "reveal"],
    [".services .section-intro > div:last-child", "reveal"],
    [".service-list article", "reveal"],
    [".standards-heading > div:last-child", "reveal"],
    [".standards-grid article", "reveal-scale"],
    [".installed-capacity", "reveal"],
    [".philosophy > *", "reveal"],
    [".founder-portrait", "reveal-left"],
    [".founder-copy > *", "reveal"],
    [".contact > *", "reveal"],
    ["footer > *", "reveal"]
  ];

  const revealElements = [];
  revealGroups.forEach(([selector, variant]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add("reveal");
      if (variant !== "reveal") element.classList.add(variant);
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
      revealElements.push(element);
    });
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(element => element.classList.add("is-visible"));
  } else {
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold:0.12, rootMargin:"0px 0px -7% 0px" });
    revealElements.forEach(element => observer.observe(element));
  }
})();
