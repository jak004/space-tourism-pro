import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Destination } from '../pages/Destination/Destination';
import { Crew } from '../pages/Crew/Crew';
import { Technology } from '../pages/Technology/Technology';
import { NotFound } from '../pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Navigate to="/destination/moon" replace />} />
        <Route path="/destination/:id" element={<Destination />} />
        <Route path="/crew" element={<Navigate to="/crew/douglas-hurley" replace />} />
        <Route path="/crew/:id" element={<Crew />} />
        <Route path="/technology" element={<Navigate to="/technology/launch-vehicle" replace />} />
        <Route path="/technology/:id" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
