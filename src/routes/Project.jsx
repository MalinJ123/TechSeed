import * as MUI from "@mui/material";
/* import "../styles/project.css"; */

function Project() {
  return (
    <MUI.Container sx={{ marginTop: 4, padding: {xs: 0} }}>
      <MUI.Card elevation={2}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <MUI.CardHeader title="Eljusspåret i Glava" titleTypographyProps={{ textAlign: 'center' }} subheader="Glava elljusspår har något så speciellt som ett smart, behovsdrivet
            och modulärt energisystem baserat i solenergi. Kombinationen av
            solenergi, behovsstyrd energieffektiv belysning och lagring via
            nätet möjliggör en miljövänlig energiförsörjning. Samtidigt är
            utomhusmiljön både trygg och trivsam." subheaderTypographyProps={{fontWeight: 'bolder'}} />
        <MUI.CardContent>
          <MUI.Typography
          variant="body2" component="p" gutterBottom>
            Anläggningen med solpark, batteri och LED-belysning finns
            installerad vid motionsspåret i Glava, nära Glava kyrka. Systemet
            togs fram åren 2018–2024 i projektet Naturkraft – Må gott på
            mötesplatser ute i naturen, som finansierades av Energimyndigheten.
            Glava Energy Center koordinerade projektet i samarbete med bland
            andra flertalet lokala samarbetspartners som Hillringsbergs IF och
            Glava Gymnastikförening.
          </MUI.Typography>
        </MUI.CardContent>
        <MUI.CardActions>
          <MUI.Link
            underline="hover"
            component="button"
            variant="body1"
            role="button"
            type="button"
          >
            Läs mer om alla samarbetspartners
          </MUI.Link>
        </MUI.CardActions>
      </MUI.Card>
    </MUI.Container>
  );
}

export default Project;
