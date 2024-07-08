import PageNav from '@/components/shared/PageNav';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </>
  );
};

export default Layout;
