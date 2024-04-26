import * as MUI from "@mui/material/";
import * as MUIIcons from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/header.css";
import hillringsbergIFLogo from "../images/main/logotype.png";

export default function Header() {
  const navigate = useNavigate();

  // Dropdown
  const [headerDropdown, setHeaderDropdown] = useState(false);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);

  // Drawer
  const [headerDrawer, setHeaderDrawer] = useState(false);

  return (
    <MUI.AppBar
      position="static"
      sx={{
        backgroundColor: "#111",
        height: "80px",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <MUI.Container
        maxWidth="xl"
        sx={{
          paddingLeft: { xs: "0.75em", md: "1em", lg: "1.25em", xl: "1.5em" },
          paddingRight: { xs: "0.75em", md: "1em", lg: "1.25em", xl: "1.5em" },
        }}
      >
        <MUI.Toolbar
          disableGutters
          sx={{ flexDirection: "row", justifyItems: "center" }}
        >
          <MUI.IconButton
            size="small"
            title="Navigera till startsidan"
            onClick={() => {
              navigate("/start");
              setHeaderDrawer(false);
            }}
          >
            <img
              src={hillringsbergIFLogo}
              alt="Hillringsbergslogga"
              width="65px"
              height="65px"
            />
          </MUI.IconButton>
          <MUI.Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <MUI.Button
              id="header__dropdown-button"
              aria-controls={
                headerDropdown ? "header__dropdown-menu" : undefined
              }
              aria-expanded={headerDropdown ? "true" : undefined}
              variant="outlined"
              type="button"
              aria-haspopup="true"
              onClick={(event) => {
                setHeaderDropdown(!headerDropdown);
                setDropdownAnchorEl(event.currentTarget);
              }}
              disableElevation
              endIcon={
                headerDropdown ? (
                  <MUIIcons.KeyboardArrowUp />
                ) : (
                  <MUIIcons.KeyboardArrowDown />
                )
              }
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid transparent",
              }}
            >
              Om Eljusspåret
            </MUI.Button>
            <MUI.Menu
              id="header__dropdown-menu"
              MenuListProps={{ "aria-labelledby": "header__dropdown-button" }}
              open={headerDropdown}
              onClose={() => setHeaderDropdown(false)}
              anchorEl={dropdownAnchorEl}
            >
              <MUI.MenuItem
                disableRipple
                onClick={() => {
                  navigate("/projektet-naturkraft");
                  setHeaderDropdown(false);
                }}
              >
                Projektet Naturkraft
              </MUI.MenuItem>
              <MUI.MenuItem
                disableRipple
                onClick={() => {
                  navigate("/samarbetspartners");
                  setHeaderDropdown(false);
                }}
              >
                Samarbetspartners
              </MUI.MenuItem>
              <MUI.MenuItem
                disableRipple
                onClick={() => {
                  navigate("/vill-du-veta-mer");
                  setHeaderDropdown(false);
                }}
              >
                Vill du veta mer?
              </MUI.MenuItem>
            </MUI.Menu>
            <MUI.Button
              disableElevation
              variant="outlined"
              type="button"
              onClick={() => navigate("/kontakt")}
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid transparent",
              }}
            >
              Hitta hit
            </MUI.Button>
          </MUI.Box>
          <MUI.Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <MUI.IconButton
              id="header__drawer-button"
              aria-controls={headerDrawer ? "header__drawer" : undefined}
              aria-expanded={headerDrawer ? "true" : undefined}
              variant="outlined"
              type="button"
              role="button"
              aria-haspopup="true"
              onClick={() => setHeaderDrawer(!headerDrawer)}
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid transparent",
              }}
            >
              {headerDrawer ? <MUIIcons.Close /> : <MUIIcons.Menu />}
            </MUI.IconButton>
            <MUI.Drawer
              anchor="right"
              id="header__menu"
              open={headerDrawer}
              onClose={() => setHeaderDrawer(false)}
              hideBackdrop
              variant="temporary"
              sx={{
                top: "80px",
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  top: "80px",
                  width: "100%",
                  backgroundColor: "#111",
                  color: "#fff",
                },
              }}
            >
              <MUI.Box component="section" role="presentation">
                <MUI.List>
                  <MUI.Accordion
                    defaultExpanded
                    sx={{ backgroundColor: "#111", color: "#fff" }}
                  >
                    <MUI.AccordionSummary
                      sx={{
                        "& .MuiAccordionSummary-content": {
                          display: "grid",
                          placeItems: "center",
                          textAlign: "center",
                        },
                      }}
                      expandIcon={
                        <MUIIcons.ExpandMore sx={{ color: "#fff" }} />
                      }
                    >
                      <MUI.Typography>Om Eljusspåret</MUI.Typography>
                    </MUI.AccordionSummary>
                    <MUI.AccordionDetails>
                      <MUI.List>
                        <MUI.ListItem disablePadding>
                          <MUI.ListItemButton
                            sx={{
                              "& .MuiListItemText-root": {
                                display: "grid",
                                placeItems: "center",
                                textAlign: "center",
                              },
                            }}
                            onClick={() => {
                              navigate("/projektet-naturkraft");
                              setHeaderDrawer(!headerDrawer);
                            }}
                          >
                            <MUI.ListItemText primary="Projektet Naturkraft" />
                          </MUI.ListItemButton>
                        </MUI.ListItem>
                        <MUI.ListItem disablePadding>
                          <MUI.ListItemButton
                            sx={{
                              "& .MuiListItemText-root": {
                                display: "grid",
                                placeItems: "center",
                                textAlign: "center",
                              },
                            }}
                            onClick={() => {
                              navigate("/samarbetspartners");
                              setHeaderDrawer(!headerDrawer);
                            }}
                          >
                            <MUI.ListItemText primary="Samarbetspartners" />
                          </MUI.ListItemButton>
                        </MUI.ListItem>
                        <MUI.ListItem disablePadding>
                          <MUI.ListItemButton
                            sx={{
                              "& .MuiListItemText-root": {
                                display: "grid",
                                placeItems: "center",
                                textAlign: "center",
                              },
                            }}
                            onClick={() => {
                              navigate("/vill-du-veta-mer");
                              setHeaderDrawer(!headerDrawer);
                            }}
                          >
                            <MUI.ListItemText primary="Vill du veta mer?" />
                          </MUI.ListItemButton>
                        </MUI.ListItem>
                      </MUI.List>
                    </MUI.AccordionDetails>
                  </MUI.Accordion>
                  <MUI.ListItem disablePadding>
                    <MUI.ListItemButton
                      sx={{
                        "& .MuiListItemText-root": {
                          display: "grid",
                          placeItems: "center",
                          textAlign: "center",
                        },
                      }}
                      onClick={() => {
                        navigate("/kontakt");
                        setHeaderDrawer(!headerDrawer);
                      }}
                    >
                      <MUI.ListItemText primary="Hitta hit" />
                    </MUI.ListItemButton>
                  </MUI.ListItem>
                </MUI.List>
              </MUI.Box>
            </MUI.Drawer>
          </MUI.Box>
        </MUI.Toolbar>
      </MUI.Container>
    </MUI.AppBar>
  );
}
