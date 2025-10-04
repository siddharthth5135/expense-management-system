import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import AdminView from './Components/Adminview.jsx';
import NotFound from './Components/NotFound.jsx';
import Header from './Components/Header.jsx';
import ExpensesView from './Components/ExpensesView.jsx';
import ApprovalsView from './Components/ApprovalsView.jsx';

function App() {
  return (<>
    <Header />
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminView />} />
        <Route path="/expenses" element={<ExpensesView />} />
        <Route path="/approvals" element={<ApprovalsView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
