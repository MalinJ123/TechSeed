import "../styles/project.css"


function Project() {
  return (
    <>

      <section className="project__container">
        <h1 className="project__container--title">Eljusspåret i Glava</h1>
        <article className="project__container--bold--text" >
          <p className="project__container--text" >
            Glava elljusspår har något så speciellt som ett smart, behovsdrivet
            och modulärt energisystem baserat i solenergi. Kombinationen av
            solenergi, behovsstyrd energieffektiv belysning och lagring via
            nätet möjliggör en miljövänlig energiförsörjning. Samtidigt är
            utomhusmiljön både trygg och trivsam.
          </p>
        </article>
        <article>
          <p className="project__container--text" >
            Anläggningen med solpark, batteri och LED-belysning finns
            installerad vid motionsspåret i Glava, nära Glava kyrka. Systemet
            togs fram åren 2018–2024 i projektet Naturkraft – Må gott på
            mötesplatser ute i naturen, som finansierades av Energimyndigheten.
            Glava Energy Center koordinerade projektet i samarbete med bland
            andra flertalet lokala samarbetspartners som Hillringsbergs IF och
            Glava Gymnastikförening.
          </p>
        </article>
        <div className="border">
          <p className="">Läs mer om alla samarbetspartners: [Samarbetspartners].</p>
        </div>
      </section>
    </>
  );
}
export default Project;
