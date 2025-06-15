import React from 'react';
import GitHubCalendar from 'react-github-calendar';
// import './GitHubSection.css';

const GitHubSection = ({ username = "Mehulposh" }) => {
//   const theme = {
//     level0: '#ebedf0',
//     level1: '#9be9a8', 
//     level2: '#40c463',
//     level3: '#30a14e',
//     level4: '#216e39',
//   };

  return (
    <section className="w-full border border-white/10  rounded-xl px-5 ">
      <div className="text-gray-400  ">
        <h2 className='font-bold text-xl text-center'>GitHub Contributions</h2>
        <p className='text-center mb-2'>My coding activity over the past year</p>
        
        <div className="calendar-container">
          <GitHubCalendar
            username={username}
            blockSize={12}
            blockMargin={4}
            // theme={theme}
            fontSize={14}
            showWeekdayLabels
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;