import * as MUI from "@mui/material/";


function Contact() {
    return (
      <MUI.Container
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.90)",
          py: 4, // Lägg till önskat padding för att justera utseendet
        }}
      >
        {/* "Hitta hit" kort */}
        <MUI.Card sx={{ marginBottom: 4 }}>
          <MUI.CardHeader
            title="Hitta hit"
            titleTypographyProps={{ textAlign: "center" }}
          />
          <MUI.Typography variant="body1" component="p">
            Har ni några frågor eller funderingar angående Projektet
            “Naturkraft”? Tveka inte att höra av er till oss.
          </MUI.Typography>
        </MUI.Card>
  
        {/* Innehållet med korten och Google Maps */}
        <MUI.Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start" // Justera vertikal placering av innehållet
        >
          {/* Vänster sida med kort */}
          <MUI.Box
            display="flex"
            flexDirection="column"
            gap={2}
            flex="1"
            sx={{ backgroundColor: "rgba(255, 255, 255)" }}
          >
            <MUI.Card elevation={2}>
              <MUI.CardHeader
                title="Eljusspåret/ Hillringsbergs IF"
                titleTypographyProps={{ textAlign: "center" }}
              />
              <MUI.Typography variant="body1" component="p">
                Bengt Danielsson Ordförande Hillringsbergs IF
              </MUI.Typography>
              <MUI.Typography variant="body1" component="p">
                <MUI.Typography variant="body1" component="p">
                  bengt@delabglava.se 0703426345
                </MUI.Typography>
              </MUI.Typography>
            </MUI.Card>
            <MUI.Card elevation={2}>
              <MUI.CardHeader
                title="Projektet Naturkraft"
                titleTypographyProps={{ textAlign: "center" }}
              />
              <MUI.Typography variant="body1" component="p">
                Isac Myrén Andersson
                <MUI.Typography variant="body1" component="p">
                  Glava Energy Center
                </MUI.Typography>
                Isac.Myren.Andersson@GlavaEnergyCenter.se
              </MUI.Typography>
            </MUI.Card>
          </MUI.Box>
  
          {/* Höger sida med Google Maps */}
          <MUI.Box flex="1" sx={{ backgroundColor: "rgba(255, 255, 255)" }}>
            <MUI.Container fixed maxWidth="sm">
              {/* Din kod för Google Maps-komponenten */}
            </MUI.Container>
          </MUI.Box>
        </MUI.Box>
      </MUI.Container>
    );
  }
export default Contact;
