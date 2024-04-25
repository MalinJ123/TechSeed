import { Container, Grid, Typography } from "@mui/material";
import * as MUI from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/project.css";

function Project() {
  return (
    <MUI.Container maxWidth="lg" className="project__container">
      <MUI.Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "4em" }}
      >
        <MUI.Grid className="project__container-body"
          item
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.954)",
            borderRadius: "15px",
            zIndex: 1,
            padding: "20px",
          }}
        >
          <MUI.Typography className="project__container-title"
            variant="h1"
            gutterBottom
            align="center"
            sx={{ marginBottom: "1em", fontWeight: "bold", fontSize: "25px" }}
          >
            Eljusspåret i Glava
          </MUI.Typography>
          <MUI.Typography className="project__container-bold-text"
            variant="body1"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "20px", marginBottom: "1em" }}
          >
            Glava elljusspår har något så speciellt som ett smart, behovsdrivet
            och modulärt energisystem baserat i solenergi. Kombinationen av
            solenergi, behovsstyrd energieffektiv belysning och lagring via
            nätet möjliggör en miljövänlig energiförsörjning. Samtidigt är
            utomhusmiljön både trygg och trivsam.
          </MUI.Typography>
          <MUI.Typography className="project__container-text"
          variant="body1" gutterBottom  sx={{ fontSize: "16px", marginBottom: "1em" }}>
            Anläggningen med solpark, batteri och LED-belysning finns
            installerad vid motionsspåret i Glava, nära Glava kyrka. Systemet
            togs fram åren 2018–2024 i projektet Naturkraft – Må gott på
            mötesplatser ute i naturen, som finansierades av Energimyndigheten.
            Glava Energy Center koordinerade projektet i samarbete med bland
            andra flertalet lokala samarbetspartners som Hillringsbergs IF och
            Glava Gymnastikförening.
          </MUI.Typography>

          <MUI.Typography className="project__container-link"
            variant="body1"
            gutterBottom
            align="right"
            sx={{ fontWeight: "bold" }}
            mt="2em"
          >
            Läs mer om alla samarbetspartners: 
            <Link to="/samarbetspartners">[Samarbetspartners]</Link>
          </MUI.Typography>
        </MUI.Grid>
      </MUI.Grid>
    </MUI.Container>
  );
}

export default Project;
