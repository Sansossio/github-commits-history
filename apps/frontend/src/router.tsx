import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CommitsPage } from './app/pages/commits/commits';
import { Home } from "./app/pages/home/home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repository/commits" element={<CommitsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
