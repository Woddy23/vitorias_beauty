import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
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
import { ContactPage } from "./pages/ContactPage";
import { ElogiosPage } from "./pages/ElogiosPage";
import { ParqueNacoesPage } from "./pages/ParqueNacoesPage";
import { SaldanhaPage } from "./pages/SaldanhaPage";
import { PortelaLRSPage } from "./pages/PortelaLRSPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { FaviconManager } from "./components/FaviconManager";

export default function App() {
  return (
    <Router>
      <FaviconManager />
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/sobre-nos" element={<Navigate to="/sobre" replace />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/elogios" element={<ElogiosPage />} />
        <Route path="/parque-nacoes" element={<ParqueNacoesPage />} />
        <Route path="/saldanha" element={<SaldanhaPage />} />
        <Route path="/portela-lrs" element={<PortelaLRSPage />} />
        <Route path="/cabelo" element={<Navigate to="/servicos/cabelo" replace />} />
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