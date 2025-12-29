import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CabeloPage } from "./pages/CabeloPage";
import { MakeupPage } from "./pages/MakeupPage";
import { ManicurePedicurePage } from "./pages/ManicurePedicurePage";
import { EsteticaPage } from "./pages/EsteticaPage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { TeamPage } from "./pages/TeamPage";
import { AlisamentoPage } from "./pages/AlisamentoPage";
import { PenteadosPage } from "./pages/PenteadosPage";
import { MaosPage } from "./pages/MaosPage";
import { MadeixasPage } from "./pages/MadeixasPage";
import { ColoracaoPage } from "./pages/ColoracaoPage";
import { MakeupGalleryPage } from "./pages/MakeupGalleryPage";
import { HairLaminationPage } from "./pages/HairLaminationPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route
          path="/alisamento"
          element={<AlisamentoPage />}
        />
        <Route path="/penteados" element={<PenteadosPage />} />
        <Route path="/maos" element={<MaosPage />} />
        <Route path="/madeixas" element={<MadeixasPage />} />
        <Route path="/coloracao" element={<ColoracaoPage />} />
        <Route
          path="/makeup-galeria"
          element={<MakeupGalleryPage />}
        />
        <Route
          path="/hair-lamination"
          element={<HairLaminationPage />}
        />
        <Route path="/equipa" element={<TeamPage />} />
        <Route
          path="/servicos/cabelo"
          element={<CabeloPage />}
        />
        <Route
          path="/servicos/makeup"
          element={<MakeupPage />}
        />
        <Route
          path="/servicos/manicure-pedicure"
          element={<ManicurePedicurePage />}
        />
        <Route
          path="/servicos/estetica"
          element={<EsteticaPage />}
        />
      </Routes>
    </Router>
  );
}