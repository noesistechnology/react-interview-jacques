import './App.css';
import 'antd/dist/antd.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { DataTable } from './Table';
import { DashBoarLayout } from './Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';

export const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <DashBoarLayout>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/tables">
            <DataTable />
          </Route>
        </Switch>
      </DashBoarLayout>
    </Router>
  </QueryClientProvider>
);

export default App;
