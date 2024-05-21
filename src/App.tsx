import { useRoutes } from 'react-router-dom';
import { ROUTES } from 'routes/index.tsx';
import GlobalStyles from 'styles/GlobalStyles.ts';

function App() {
  const routes = useRoutes(ROUTES);

  return (
    <>
      <GlobalStyles />
      {routes}
    </>
  );
}

export default App;
