import { BrowserRouter, Route, Routes } from 'react-router';

import { LoginPage, MainPage, PomodoroPage, SettingPage, SignupPage, TILPage, TechInterview } from '@/pages';
import { ROUTE_PATHS } from '@/shared';
import { RootLayout } from '@/widgets';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path={ROUTE_PATHS.MAIN} element={<MainPage />} />
          <Route path={ROUTE_PATHS.LOGIN} element={<LoginPage />} />
          <Route path={ROUTE_PATHS.SIGNUP} element={<SignupPage />} />
          <Route path={ROUTE_PATHS.SETTING} element={<SettingPage />} />
          <Route path={ROUTE_PATHS.POMODORO} element={<PomodoroPage />} />
          <Route path={ROUTE_PATHS.TECH_INTERVIEW} element={<TechInterview />} />
          <Route path={ROUTE_PATHS.TIL} element={<TILPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
