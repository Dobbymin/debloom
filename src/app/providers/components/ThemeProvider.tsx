import { Global } from '@emotion/react';

import { globalStyles } from '@/shared';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <div>
      <Global styles={globalStyles} />
      {children}
    </div>
  );
};
