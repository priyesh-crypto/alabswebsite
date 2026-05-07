import { useNavigate } from 'react-router';
import AlabsLandingPage from '../../imports/AlabsLandingPage/AlabsLandingPage';

export function Home() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const text = target.textContent?.trim();

    // Check if click is on a course card by looking for parent elements
    const isEnrollButton = text === 'Enroll Now' || text === 'View Details';
    const parentCard = (event.target as HTMLElement).closest('[data-name*="Group"]');

    if (isEnrollButton || (parentCard && text?.includes('Data'))) {
      event.preventDefault();
      navigate('/courses/data-science');
      return;
    }

    if (text === 'Explore Courses' || text === 'Explore Course') {
      event.preventDefault();
      navigate('/courses');
    } else if (text === 'About' || text === 'Why Us') {
      event.preventDefault();
      navigate('/about');
    } else if (text === 'For Corporates') {
      event.preventDefault();
      navigate('/corporate');
    } else if (text === 'Services') {
      event.preventDefault();
      navigate('/services');
    } else if (text === 'Contact' || text === 'Contact Us') {
      event.preventDefault();
      navigate('/contact');
    }
  };

  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto cursor-pointer"
        style={{ width: '1440px', height: '8343px' }}
        onClick={handleClick}
      >
        <AlabsLandingPage />
      </div>
    </div>
  );
}
