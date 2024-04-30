import * as MUI from "@mui/material";
import "../styles/project.css"; 

function Project() {
  return (
    <MUI.Container sx={{ marginTop: 10, padding: {xs: 0} }}>
      <MUI.Box 
        display="flex" 
        flexDirection="column" alignItems="center">
        <MUI.Card elevation={2} 
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: 2, 
          }}
        >
          <MUI.CardHeader className="text-card" title="Elljusspåret i Glava"
          titleTypographyProps={{ textAlign: 'center', fontSize: {xs: 32, md: 36}, marginBottom: 3, marginTop: 2}} subheader="Glava elljusspår har något så speciellt som ett smart, behovsdrivet
              och modulärt energisystem baserat i solenergi. Kombinationen av
              solenergi, behovsstyrd energieffektiv belysning och lagring via
              nätet möjliggör en miljövänlig energiförsörjning. Samtidigt är
              utomhusmiljön både trygg och trivsam." subheaderTypographyProps={{fontWeight: 'bolder', fontSize: {xs: 18, md: 26}, paddingX: {xs: 2, md: 3}}} />
          <MUI.CardContent>
            <MUI.Typography
            variant="body2" component="p" gutterBottom lineHeight={2}
            sx={{
              paddingX: {
                xs: 2, 
                md: 3,
              },
              fontSize: {
                xs: 18, 
                md: 22,
              }
            }}>
              Anläggningen med solpark, batteri och LED-belysning finns
              installerad vid motionsspåret i Glava, nära Glava kyrka. Systemet
              togs fram åren 2018–2024 i projektet Naturkraft – Må gott på
              mötesplatser ute i naturen, som finansierades av Energimyndigheten.
              Glava Energy Center koordinerade projektet i samarbete med bland
              andra flertalet lokala samarbetspartners som Hillringsbergs IF och
              Glava Gymnastikförening.
            </MUI.Typography>
          </MUI.CardContent>
          <MUI.CardActions sx={{marginLeft: 3}}>
            <MUI.Link
              underline="hover"
              component="button"
              variant="body1"
              role="button"
              type="button"
              fontSize={20}
            >
              Läs mer om alla samarbetspartners
            </MUI.Link>
          </MUI.CardActions>
        </MUI.Card>

      </MUI.Box>
    </MUI.Container>
  );
}

export default Project;
