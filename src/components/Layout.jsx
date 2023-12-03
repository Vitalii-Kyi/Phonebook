import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LoadingSpinnerComponent from 'react-spinners-components';
import AppBar from './AppBar/AppBar';

export default function Layout() {
  return (
    <div style={{ maxWidth: 1000, margin: '8px auto 0', padding: '0 16px' }}>
      <AppBar />
      <Suspense
        fallback={
          <LoadingSpinnerComponent
            type={'Gear'}
            color={'black'}
            size={'220px'}
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}