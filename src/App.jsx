import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import NotFound from './components/notFound';
import Dashboard from './pages/dashboard';
import Jobs from './pages/alljobs';
import AddJob from './pages/add-job';
import Profile from './pages/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/new' element={<AddJob />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
