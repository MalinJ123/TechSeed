<!DOCTYPE html>
<html>
  <head>
    <!-- Lägg till nödvändiga script-taggar -->
    <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@material-ui/core@4.12.3/umd/material-ui.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.17.0/babel.min.js"></script>
    
    <!-- Länka till dina JavaScript-filer -->
    <script type="module">
      import { Root } from "../src/routes/Root.jsx";
      
      const React = window.React;
      const ReactDOM = window.ReactDOM;
      const MUI = window.MaterialUI;

      // Rendera Root-komponenten i DOM
      ReactDOM.render(React.createElement(Root), document.getElementById('root'));

      // En enkel React-komponent som renderar ett Material-UI-element
      const App = () => {
        return (
          React.createElement(MUI.Container, null,
            React.createElement(MUI.Typography, { variant: "h1" }, "Du är nu inloggad! Grattis gubben!")
          )
        );
      };

      // Rendera App-komponenten i DOM, detta kommer att ersätta det som tidigare renderats av Root.jsx
      ReactDOM.render(React.createElement(App), document.getElementById('root'));
    </script>
  </head>
  <body>
    <!-- En div med id "root" där din React-applikation kommer att renderas -->
    <div id="root"></div>
  </body>
</html>
