<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@material-ui/core@4.12.3/umd/material-ui.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.17.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const React = window.React;
      const ReactDOM = window.ReactDOM;
      const MUI = window.MaterialUI;

      const App = () => {
        return (
          <MUI.Container>
            <MUI.Typography variant="h1">Du är nu inloggad! Grattis gubben!</MUI.Typography>
          </MUI.Container>
        );
      };

      ReactDOM.render(<App />, document.getElementById('root'));
    </script>
  </body>
</html>
