import { useNavigate } from 'react-router';
import ForCorporatePage from '../../imports/ForCorporate/ForCorporate';

export function Corporate() {
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
    } else if (text === 'Contact' || text === 'Contact Us') {
      event.preventDefault();
      navigate('/contact');
    }
  };

  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto cursor-pointer"
        style={{ width: '1440px', height: '4400px' }}
        onClick={handleClick}
      >
        <ForCorporatePage />
      </div>
    </div>
  );
}
