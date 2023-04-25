import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { StyledLayout } from './Layout.styled';

export const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </StyledLayout>
  );
};

//export default Layout;
