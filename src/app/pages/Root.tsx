import { Outlet, useLocation } from 'react-router';
import { Navigation } from '../components/Navigation';

export function Root() {
  const location = useLocation();
  const isFigmaPage = location.pathname === '/' ||
                      location.pathname === '/about' ||
                      location.pathname === '/courses' ||
                      location.pathname === '/corporate' ||
                      location.pathname === '/contact' ||
                      location.pathname.startsWith('/courses/');

  return (
    <div className="min-h-screen bg-background">
      {!isFigmaPage && <Navigation />}
      <main>
        <Outlet />
      </main>
      {!isFigmaPage && (
        <footer className="border-t py-8 mt-20">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 ALabs. All rights reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
}
