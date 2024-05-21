import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages';
import GalleryPage from './pages/gallery';
import SettingRootPage from './pages/setting';
import SeniorInfoPage from './pages/setting/senior-info';
import Keyword from './pages/setting/keyword';
import Device from './pages/setting/device';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/setting' element={<SettingRootPage />} />
        <Route path='/setting/senior-info' element={<SeniorInfoPage />} />
        <Route path='/setting/keyword' element={<Keyword />} />
        <Route path='/setting/device' element={<Device />} />
      </Routes>
    </BrowserRouter>
  );
}
