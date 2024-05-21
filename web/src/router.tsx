import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages';
import GalleryPage from './pages/gallery';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
