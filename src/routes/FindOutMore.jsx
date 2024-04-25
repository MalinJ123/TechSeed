import * as MUI from "@mui/material/";
// import "../styles/findoutmore.css"

function FindOutMore() {
  return (
    <>
      <MUI.Box
        component="section"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={12}
        marginTop={4}
      >
        <MUI.Container fixed maxWidth="sm">
          <MUI.Card
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.90)" }}
            elevation={2}
          >
            <MUI.CardHeader
              title="Vill du veta mer"
              titleTypographyProps={{ textAlign: "center" }}
            />
            <MUI.CardContent>
              <MUI.Box
                component="div"
                display="flex"
                style={{ fontWeight: "bold" }}
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                <MUI.Stack spacing={4} direction="column">
                  <MUI.Typography
                    variant="body1"
                    component="p"
                    style={{ fontWeight: "bold" }}
                  >
                    Glava elljusspår visar att idrottsföreningar och kommuner
                    kan få bra belysning på sina anläggningar, samtidigt som de
                    kan spara energi och få intäkter från överskottsenergi som
                    produceras under den ljusa delen av året. Inspirerad och
                    intresserad av att veta mer? Ta del av projektets resultat
                    och guide!
                  </MUI.Typography>
                  <MUI.Typography variant="body1" component="p">
                    Sverige har cirka 1 700 elljusspår som är belysta. De flesta
                    är byggda på 1960–70-talen med energikrävande och
                    miljöfarliga kvicksilverlampor som ska avvecklas enligt
                    EU-direktiv. Många föreningar och kommuner står inför större
                    uppgraderingar med krav på miljö och elsäkerhet. Att åtgärda
                    detta fordrar stora investeringar.
                  </MUI.Typography>
                  <MUI.Typography variant="body1" component="p">
                    Målet med projektet Naturkraft var bland annat att sprida
                    kunskap och ge förslag till samhället för framtidens
                    motionsanläggningar. Projektet visar att kombinationen av
                    solenergi, behovsstyrd energieffektiv belysning och lagring
                    via nätet kan ge en miljövänlig energiförsörjning och trygg
                    och trivsam utomhusmiljö på ett kostnadseffektivt sätt.
                  </MUI.Typography>
                  <MUI.Typography variant="body1" component="p">
                    Projektet ska också resultera i en guide som kan användas av
                    andra kommuner och föreningar.
                  </MUI.Typography>

                  <MUI.Typography
                    variant="body1"
                    component="p"
                    style={{ fontWeight: "bold" }}
                  >
                    Vill du veta mer eller ta del av guiden? Mer information om
                    projektet och kontaktpersoner hittar du på Glava Energy
                    Centers webbplats:
                  </MUI.Typography>
                </MUI.Stack>
              </MUI.Box>
            </MUI.CardContent>
            <MUI.CardActions
              className="bold"
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <MUI.Link
                underline="hover"
                component="button"
                variant="body1"
                role="button"
                type="button"
              >
                {" "}
                https://glavaenergycenter.se/sv/
              </MUI.Link>
            </MUI.CardActions>
          </MUI.Card>
        </MUI.Container>
      </MUI.Box>
    </>
  );
}
export default FindOutMore;
