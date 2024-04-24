import { Container, Grid, Typography } from '@mui/material';
import '../styles/project.css';
function Project() {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: '4em' }}>
        <Grid item sx={{backgroundColor: 'rgba(255, 255, 255, 0.954)', borderRadius: '15px', zIndex: 1, fontFamily: 'var(--font-jura)', padding: '20px' }}>
          <Typography variant="h1" gutterBottom align="center" sx={{ marginBottom: '1em', fontWeight: 'bold', fontSize: '25px' }}>
            Eljusspåret i Glava
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '1em' }}>
            Glava elljusspår har något så speciellt som ett smart, behovsdrivet
            och modulärt energisystem baserat i solenergi. Kombinationen av
            solenergi, behovsstyrd energieffektiv belysning och lagring via
            nätet möjliggör en miljövänlig energiförsörjning. Samtidigt är
            utomhusmiljön både trygg och trivsam.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Anläggningen med solpark, batteri och LED-belysning finns
            installerad vid motionsspåret i Glava, nära Glava kyrka. Systemet
            togs fram åren 2018–2024 i projektet Naturkraft – Må gott på
            mötesplatser ute i naturen, som finansierades av Energimyndigheten.
            Glava Energy Center koordinerade projektet i samarbete med bland
            andra flertalet lokala samarbetspartners som Hillringsbergs IF och
            Glava Gymnastikförening.
          </Typography>
          <Typography variant="body1" gutterBottom align="right">
            Läs mer om alla samarbetspartners: [Samarbetspartners].
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Project;