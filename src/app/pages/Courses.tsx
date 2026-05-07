import { useNavigate } from 'react-router';
import ExploreCourses from '../../imports/ExploreCourses/ExploreCourses';

export function Courses() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const text = target.textContent?.trim();

    // Check if click is on a course card or explore button
    const isEnrollButton = text === 'Enroll Now' || text === 'View Details' || text === 'Explore Now';
    const isCourseTitle = text?.includes('Data Science') || text?.includes('Data Analytics') ||
                         text?.includes('Business Analytics') || text?.includes('AI') ||
                         text?.includes('Machine Learning');

    if (isEnrollButton || isCourseTitle) {
      event.preventDefault();
      navigate('/courses/data-science');
      return;
    }

    if (text === 'Home' || text?.includes('Upcoming Batches')) {
      event.preventDefault();
      navigate('/');
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
        style={{ width: '1440px', height: '3500px' }}
        onClick={handleClick}
      >
        <ExploreCourses />
      </div>
    </div>
  );
}
