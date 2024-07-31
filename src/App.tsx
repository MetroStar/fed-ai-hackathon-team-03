import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Route, Routes } from 'react-router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { ProtectedRoute } from './components/protected-route/protected-route';
import { AiOptimized } from './pages/ai-optimized/ai-optimized';
import { Home } from './pages/home/home';
import { Results } from './pages/results/results';

const queryClient = new QueryClient();

export const App = (): React.ReactElement => (
  <QueryClientProvider client={queryClient}>
    <Header />
    <main id="mainSection" className="usa-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-optimized" element={<AiOptimized />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/results" element={<Results />} />
        </Route>
      </Routes>
    </main>
    <Footer />
  </QueryClientProvider>
);
