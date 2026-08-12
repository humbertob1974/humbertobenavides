const services = [
  ["01", "Diagnóstico ejecutivo IMPACT", "Entendemos cómo funciona realmente la empresa, hacemos visible lo que hoy se percibe y construimos una línea base para decidir con evidencia."],
  ["02", "Optimización de procesos", "Cuestionamos, simplificamos y rediseñamos la cadena de valor antes de incorporar herramientas o automatización."],
  ["03", "Automatización e IA aplicada", "Construimos soluciones que integran sistemas, eliminan trabajo repetitivo y amplifican la capacidad de las personas donde la IA aporta valor real."],
  ["04", "Transformación organizacional", "Alineamos procesos, tecnología, liderazgo y adopción para que la mejora se convierta en una nueva capacidad de la empresa."],
  ["05", "Acompañamiento estratégico", "Trabajamos junto al empresario y su equipo directivo para priorizar, decidir y ejecutar con claridad, continuidad y resultados medibles."],
];

const methodology = [
  { letter:"I", title:"Identificar", english:"Identify", objective:"Entender cómo funciona realmente el proceso antes de hacer recomendaciones.", principle:"Observar antes de juzgar. Escuchar antes de proponer.", deliverable:"Mapa de Realidad Operativa" },
  { letter:"M", title:"Medir", english:"Measure", objective:"Convertir la realidad observada en información cuantificable.", principle:"Lo que solamente percibimos puede discutirse. Lo que medimos puede analizarse.", deliverable:"Línea Base Operativa" },
  { letter:"P", title:"Priorizar", english:"Prioritize", objective:"Determinar dónde intervenir primero para crear el mayor valor compartido.", principle:"No todo lo que puede mejorarse debe mejorarse al mismo tiempo.", deliverable:"Mapa de Prioridades de Transformación" },
  { letter:"A", title:"Analizar", english:"Analyze", objective:"Diseñar el mejor proceso antes de elegir la tecnología.", principle:"Primero analizo. Después decido si automatizo.", deliverable:"Cadena de Valor Optimizada" },
  { letter:"C", title:"Construir", english:"Create", objective:"Convertir el diseño optimizado en una solución funcional.", principle:"La tecnología es una herramienta. La solución es el resultado.", deliverable:"Solución Operativa IMPACT" },
  { letter:"T", title:"Transformar", english:"Transform", objective:"Convertir la mejora implementada en resultados medibles y nueva capacidad organizacional.", principle:"Una implementación no es transformación hasta que produce valor.", deliverable:"Reporte de Transformación IMPACT" },
];

const standards = [
  ["01", "Comprensión validada", "El cliente confirma que entendimos su realidad."],
  ["02", "Evidencia objetiva", "Las decisiones están respaldadas por datos y observación."],
  ["03", "Simplicidad demostrada", "Evaluamos la opción más simple antes de añadir complejidad."],
  ["04", "Adopción por las personas", "La solución se considera implementada cuando las personas la usan y la entienden."],
  ["05", "Valor demostrable", "Existe un antes y un después claro."],
  ["06", "Sostenibilidad", "El cliente puede sostener la mejora sin depender permanentemente de nosotros."],
];

const whatsapp = "https://wa.me/19562206880?text=Hola%20Humberto%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20mi%20empresa.";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Firma Benavides, inicio"><span className="brand-mark">B</span><span className="brand-name">Firma Benavides</span></a>
        <nav aria-label="Navegación principal"><a href="#firma">Firma</a><a href="#metodologia">Método</a><a href="#servicios">Servicios</a><a href="#filosofia">Filosofía</a><a href="#trayectoria">Humberto</a></nav>
        <a className="header-cta" href="#contacto">Conversemos <ArrowIcon /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
        <div className="hero-copy">
          <p className="eyebrow light">Asesoría de transformación empresarial</p>
          <h1>Transformando empresas mediante <em>estrategia, liderazgo</em> e inteligencia artificial.</h1>
          <p className="hero-intro">Ayudamos a empresarios y equipos directivos a identificar lo que realmente está frenando su organización, transformar sus procesos y construir capacidades que produzcan resultados medibles.</p>
          <div className="hero-actions"><a className="button button-gold" href="#contacto">Conversemos sobre su empresa <ArrowIcon /></a><a className="text-link" href="#metodologia">Conozca IMPACT 0.1 <span>↓</span></a></div>
        </div>
        <div className="hero-proof" aria-label="Experiencia profesional">
          <div><strong>27+</strong><span>años integrando tecnología, operaciones y negocio</span></div>
          <div><strong>20</strong><span>años liderando sistemas y construyendo soluciones</span></div>
          <div><strong>8</strong><span>años al frente de la dirección general</span></div>
        </div>
      </section>

      <section className="manifesto section" id="firma">
        <div className="section-label"><span>01</span><p>Firma Benavides</p></div>
        <div className="manifesto-content">
          <p className="eyebrow">Asesoría de transformación empresarial</p>
          <h2>No empezamos con la tecnología. <em>Empezamos entendiendo la empresa.</em></h2>
          <div className="two-column-copy">
            <p>Firma Benavides nace para ayudar a más empresas a transformar la forma en que operan, deciden y crecen. Integramos experiencia ejecutiva, estrategia, liderazgo, optimización de procesos, automatización e inteligencia artificial aplicada.</p>
            <p>Primero encontramos el verdadero “dolor de muelas”: el problema que está generando o frenando a los demás. Después observamos, medimos y priorizamos. Solo entonces decidimos qué simplificar, qué rediseñar y dónde la tecnología puede crear valor.</p>
          </div>
          <div className="gold-rule"><span>Nuestra regla de trabajo</span><strong>Todo proceso debe justificar el tiempo que consume.</strong></div>
        </div>
      </section>

      <section className="method section" id="metodologia">
        <div className="method-heading">
          <div className="section-label"><span>02</span><p>Metodología IMPACT 0.1</p></div>
          <div><p className="eyebrow">De la realidad operativa a la transformación medible</p><h2>Un proceso riguroso para entender, decidir, construir y transformar.</h2><p className="method-intro">IMPACT no fuerza a la empresa dentro de una solución. Parte de su realidad, mide antes de intervenir y deja evidencia concreta en cada etapa.</p></div>
        </div>
        <div className="method-grid method-grid-detailed">
          {methodology.map((item) => (
            <article key={item.letter}>
              <span className="method-letter">{item.letter}</span>
              <div><p className="method-english">{item.english}</p><h3>{item.title}</h3><p>{item.objective}</p><blockquote>{item.principle}</blockquote><small>Entregable</small><strong>{item.deliverable}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="priority section">
        <div className="section-intro">
          <div className="section-label"><span>03</span><p>Matriz Benavides</p></div>
          <div><p className="eyebrow">Priorizar el valor compartido</p><h2>No elegimos lo más llamativo. Elegimos lo que genera el mayor impacto sostenible.</h2></div>
        </div>
        <div className="priority-grid">
          <div><strong>25%</strong><span>Impacto organizacional</span></div><div><strong>20%</strong><span>Capacidad liberada</span></div><div><strong>20%</strong><span>Impacto humano</span></div><div><strong>15%</strong><span>Valor económico</span></div><div><strong>10%</strong><span>Viabilidad</span></div><div><strong>10%</strong><span>Sostenibilidad</span></div>
        </div>
      </section>

      <section className="capacity">
        <div><p className="eyebrow light">El principio de capacidad liberada</p><h2>No celebramos horas ahorradas. Celebramos capacidad recuperada y bien utilizada.</h2></div>
        <div className="capacity-example"><span>Antes</span><strong>100 h</strong><i>→</i><span>Después</span><strong>40 h</strong><i>=</i><span>Capacidad liberada</span><strong>60 h</strong></div>
        <p>El tiempo liberado no es simplemente ahorro. Es capacidad recuperada. Su mejor utilización se decide entre la organización y el dueño del proceso para que produzca valor para ambos.</p>
        <div className="equation">Transformación = mejora medible del negocio + capacidad liberada + desarrollo de las personas</div>
      </section>

      <section className="services section" id="servicios">
        <div className="section-intro inverse"><div className="section-label light-label"><span>04</span><p>Servicios</p></div><div><p className="eyebrow light">Del problema real a la capacidad instalada</p><h2>Intervenimos donde la transformación genera valor.</h2></div></div>
        <div className="service-list">{services.map(([number,title,description])=><article key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="service-line" /></article>)}</div>
      </section>

      <section className="standards section" id="filosofia">
        <div className="standards-heading"><div className="section-label"><span>05</span><p>Nuestros estándares</p></div><div><p className="eyebrow">Cómo sabemos que el trabajo está bien hecho</p><h2>Seis compromisos que protegen la calidad de cada transformación.</h2></div></div>
        <div className="standards-grid">{standards.map(([number,title,description])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <blockquote className="installed-capacity">“No entregamos proyectos. <em>Dejamos capacidades instaladas.</em>”</blockquote>
      </section>

      <section className="philosophy">
        <div className="quote-mark">“</div><blockquote>La tecnología cambia procesos.<br />El liderazgo cambia personas.<br /><em>La combinación correcta cambia empresas.</em></blockquote><p>— Filosofía Firma Benavides</p>
      </section>

      <section className="founder section" id="trayectoria">
        <div className="founder-portrait">
          <img className="founder-photo" src="/humberto-benavides.webp" alt="Humberto Benavides, fundador de Firma Benavides" />
          <span>Visión ejecutiva.<br />Experiencia operativa.</span>
        </div>
        <div className="founder-copy">
          <div className="section-label compact"><span>06</span><p>Humberto Benavides</p></div><p className="eyebrow">Fundador · Asesor de transformación empresarial</p><h2>Tecnología desde el principio. Negocio desde la experiencia.</h2>
          <p className="founder-lead">Su relación con la tecnología comenzó en high school, cuando una computadora Texas Instruments y el lenguaje BASIC despertaron una curiosidad que se convertiría en una carrera.</p>
          <p>Durante más de 27 años pasó de programar y construir soluciones a dirigir sistemas, operaciones y finalmente una empresa mediana-grande desde la posición de CEO. Esa trayectoria le enseñó a traducir entre dos mundos que rara vez hablan el mismo idioma: las necesidades del negocio y las posibilidades de la tecnología.</p>
          <p>Creó Firma Benavides para poner esa capacidad al servicio de muchas organizaciones y acompañar a sus líderes desde una convicción propia: transformar procesos sin perder de vista a las personas que los hacen posibles.</p>
          <div className="credentials"><span>Estrategia</span><span>Liderazgo</span><span>Operaciones</span><span>Automatización</span><span>Inteligencia artificial</span></div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <p className="eyebrow light">Una pregunta para comenzar</p>
        <h2>De todos los problemas que tiene hoy su empresa, ¿cuál cree usted que es el que realmente la mantiene estancada y está frenando a los demás?</h2>
        <p>Ahí comienza nuestro trabajo.</p>
        <a className="button button-gold contact-button" href={whatsapp} target="_blank" rel="noreferrer">Conversemos <ArrowIcon /></a>
        <a className="phone" href="tel:+19562206880">+1 956 220 6880</a>
      </section>

      <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark">B</span><span className="brand-name">Firma Benavides</span></a><p>Transformando empresas mediante estrategia, liderazgo e inteligencia artificial.</p><p>© {new Date().getFullYear()} Firma Benavides</p></footer>
    </main>
  );
}
