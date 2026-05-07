import { useNavigate } from 'react-router';
import ContactPage from '../../imports/Contact-1/Contact-9-325';

export function Contact() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const text = target.textContent?.trim();

    if (text === 'Home' || text?.includes('Upcoming Batches')) {
      event.preventDefault();
      navigate('/');
    } else if (text === 'Explore Courses') {
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
    }
  };

  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto cursor-pointer"
        style={{ width: '1440px', height: '2400px' }}
        onClick={handleClick}
      >
        <ContactPage />
      </div>
    </div>
  );
}
