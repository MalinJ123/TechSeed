import * as MUI from "@mui/material";
import CompanyLogo from '../images/main/logotype.png';

function Footer() {
  return (
    <>
      <MUI.Container
        sx={{ marginTop: 4, backgroundColor: "black", color: "white", padding: 2 }}
      >
        <MUI.Grid container justifyContent="space-between">
          <MUI.Grid item xs={12} sm={4}>
            <MUI.Typography variant="body1">
              Hillringsberg 671 97 Glava
            </MUI.Typography>
            <MUI.Typography variant="body1">
              bengt@hotmail.com
            </MUI.Typography>
            <MUI.Typography variant="body1">
              070-234 234
            </MUI.Typography>
          </MUI.Grid>
          <MUI.Grid item xs={12} sm={4} textAlign="center">
          <MUI.Avatar alt="Company Logo" src={CompanyLogo} sx={{ width: 100, height: 100 }} />
     
          
          </MUI.Grid>
          <MUI.Grid item xs={12} sm={4}>
            <MUI.Typography variant="body1" textAlign="right">
              Hitta hit
            </MUI.Typography>
            <MUI.Typography variant="body1" textAlign="right">
              isac.myren.andersson@hotmail.com
            </MUI.Typography>
            <MUI.Typography variant="body1" textAlign="right">
              Scaaler IOT. adress
            </MUI.Typography>
          </MUI.Grid>
        </MUI.Grid>
      </MUI.Container>
    </>
  );
}

export default Footer;