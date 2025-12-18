import { Outlet } from 'react-router';

import { Header, Navigator } from '../components';

export const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navigator />
    </div>
  );
};
