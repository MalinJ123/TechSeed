import * as MUI from '@mui/material/';

import glavaLogo from '../images/cooperation/Glava_Energy_Center.png';
import energimyndighetenLogo from '../images/cooperation/Energimyndigheten.png';
import sun4Energy from '../images/cooperation/Sun4Energy.png';
import karlstadsUniversitetLogo from '../images/cooperation/Karlstads_Universitet.png';
import lundsUniversitetLogo from '../images/cooperation/Lunds_Universitet.png';
import sCBurmanAbLogo from '../images/cooperation/SC_Burman_AB.png';

export default function Cooperation() {
    return (
        <MUI.Box component="section" display="flex" flexDirection="column" justifyContent="center" height="100%" gap={12} >
            <MUI.Container fixed maxWidth="sm">
                    <MUI.Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.90)' }} elevation={2}>
                        <MUI.CardContent>
                            <MUI.Box component="div" display="flex" flexDirection="column" alignItems="center" gap={2}>
                                <MUI.Typography variant="h4" component="h1" gutterBottom>
                                    Samarbetpartners
                                </MUI.Typography>
                                <MUI.Stack spacing={4} direction="column">
                                    <MUI.Typography variant="body1" component="p">
                                        Syftet med projektet var att utveckla och testa ett modulärt, säkert, smart och lokalt energisystem som möjliggör att idrottsföreningar och kommuner får bra belysning på sina anläggningar, samtidigt som de kan spara energi och få intäkter från överskottsenergi som produceras under den ljusa delen av året. 
                                    </MUI.Typography>
                                    <MUI.Typography variant="body1" component="p">
                                        Målet var också att öka medvetenhet hos projektdeltagare och allmänhet om effektiv energianvändning och skapa mervärden genom att sprida kunskap och ge förslag till samhället för framtidens motionsanläggningar. Projektet ska också resultera i en guide som kan användas av andra kommuner och föreningar.
                                    </MUI.Typography>
                                    <MUI.Link underline="hover" component="button" variant="body1" role="button" type="button">Klicka här om du vill veta mer eller ta del av guiden</MUI.Link>
                                </MUI.Stack>
                            </MUI.Box>
                        </MUI.CardContent>
                    </MUI.Card>
            </MUI.Container>
            <MUI.Box component="section" width="100%" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.90)'}}>
                <MUI.Stack direction="row" justifyContent="center" spacing={4}>
                    <img src={glavaLogo} alt="placeholder" style={{aspectRatio: '1 / 1', height: '100px'}} />
                    <img src={energimyndighetenLogo} alt="placeholder" style={{aspectRatio: '1 / 1', height: '100px'}} />
                    <img src={sun4Energy} alt="placeholder" style={{aspectRatio: '1 / 1', height: '100px'}} />
                    <img src={karlstadsUniversitetLogo} alt="placeholder" style={{aspectRatio: '1 / 1', height: '100px'}} />
                    <img src={lundsUniversitetLogo} alt="placeholder" style={{aspectRatio: '1 / 1', height: '100px'}} />
                    <img src={sCBurmanAbLogo} alt="placeholder" style={{aspectRatio: '1 / 1', height: '100px'}} />
                </MUI.Stack>
            </MUI.Box>
        </MUI.Box>
    );
}