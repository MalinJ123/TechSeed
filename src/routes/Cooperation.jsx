import * as MUI from '@mui/material/';

import '../styles/cooperation.css'

import glavaEnergyCenterLogo from '../images/cooperation/Glava_Energy_Center.png';
import energimyndighetenLogo from '../images/cooperation/Energimyndigheten.png';
import sun4EnergyLogo from '../images/cooperation/Sun4Energy.png';
import sweModuleLogo from '../images/cooperation/Swemodule.png';
import karlstadsUniversitetLogo from '../images/cooperation/Karlstads_Universitet.png';
import lundsUniversitetLogo from '../images/cooperation/Lunds_Universitet.png';
import teknikiVastLogo from '../images/cooperation/TeknikiVast.png';
import hillringsbergsIFLogo from '../images/cooperation/Hillringsberg_IF.png';
import glavaGymnastikföreningLogo from '../images/cooperation/Glava_Gymnastikförening.png';
import sCBurmanAbLogo from '../images/cooperation/SC_Burman_AB.png';

export default function Cooperation() {
    return (
        <MUI.Box component="section" display="flex" flexDirection="column" justifyContent="center" gap={12} marginTop={8} >
            <MUI.Container sx={{padding: {xs: 0}}}>
                    <MUI.Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.90)' }} elevation={2} >
                        <MUI.CardHeader title="Samarbetspartners" titleTypographyProps={{ textAlign: 'center', fontSize: {xs: 32, md: 36}, marginBottom: 3, marginTop: 4, padding: 1}} />
                        <MUI.CardContent>
                            <MUI.Box component="div" display="flex" flexDirection="column" alignItems="center" gap={2} >
                                <MUI.Stack spacing={4} direction="column">
                                    <MUI.Typography variant="body1" component="p" lineHeight={1.8}
                                    sx={{
                                        paddingX: {xs: 1, md: 6},
                                        fontSize: {xs: 18,md: 20}
                                    }}>
                                        <b>Syftet med projektet var att utveckla</b> och testa ett modulärt, säkert, smart och lokalt energisystem som möjliggör att idrottsföreningar och kommuner får bra belysning på sina anläggningar, samtidigt som de kan spara energi och få intäkter från överskottsenergi som produceras under den ljusa delen av året. 
                                    </MUI.Typography>
                                    <MUI.Typography variant="body1" component="p" lineHeight={1.8}
                                          sx={{
                                            paddingX: {xs: 1, md: 6},
                                            fontSize: {xs: 18, md: 20,}
                                        }}>
                                        <b>Målet var också att öka medvetenhet</b> hos projektdeltagare och allmänhet om effektiv energianvändning och skapa mervärden genom att sprida kunskap och ge förslag till samhället för framtidens motionsanläggningar. Projektet ska också resultera i en guide som kan användas av andra kommuner och föreningar.
                                    </MUI.Typography>
                                </MUI.Stack>
                            </MUI.Box>
                        </MUI.CardContent>
                            <MUI.CardActions sx={{display: 'flex', justifyContent:'flex-end', marginRight: 6}} >
                                <MUI.Link 
                                underline="hover" 
                                component="button" 
                                variant="body1" 
                                role="button" 
                                type="button"
                                sx={{
                                    marginBottom: {xs: 2, md: 3},
                                    fontSize: {xs: 16, md: 22}, 
                                    color: "black"
                                }}>
                                Klicka här om du vill veta mer eller ta del av guiden
                                </MUI.Link>
                            </MUI.CardActions>
                    </MUI.Card>
            </MUI.Container>
            <MUI.Box component="section" width="100%" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.90)'}}>
                <MUI.Stack sx={{flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'}}} alignItems="center" justifyContent="center" spacing={4} gap={2} p={4}>
                    <img className="cooperation__image" src={glavaEnergyCenterLogo} alt="Glava Energy Center logotyp"  />
                    <img className="cooperation__image" src={energimyndighetenLogo} alt="Energimyndigheten logotyp" />
                    <img className="cooperation__image" src={sun4EnergyLogo} alt="Sun 4 Energy logotyp" />
                    <img className="cooperation__image" src={sweModuleLogo} alt="SWEMODULE logotyp" />
                    <img className="cooperation__image" src={karlstadsUniversitetLogo} alt="Karlstads Universitet logotyp" />
                    <img className="cooperation__image" src={lundsUniversitetLogo} alt="Lunds Universitet logotyp"  />
                </MUI.Stack>
                <MUI.Stack sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'}}} alignItems="center" justifyContent="center" spacing={4} gap={2} p={4}>
                    <img className="cooperation__image" src={teknikiVastLogo} alt="Teknik i Väst logotyp" />
                    <MUI.Box component="div" display="flex" flexDirection="column" alignContent="center" justifyContent="center" width="200px">
                        <MUI.Typography variant="body1" textAlign="center" component="p">Teknik o Gårdstjänster</MUI.Typography>
                    </MUI.Box> 
                    <img className="cooperation__image" src={hillringsbergsIFLogo} alt="Hillringsbergs IF logotyp" />
                    <img className="cooperation__image" src={glavaGymnastikföreningLogo} alt="Glava Gymnastikförening" />
                    <img className="cooperation__image" src={sCBurmanAbLogo} alt="SC Burman AB logotyp" />
                </MUI.Stack>
            </MUI.Box>
        </MUI.Box>
    );
}