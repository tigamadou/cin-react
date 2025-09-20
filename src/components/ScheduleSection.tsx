import { useState } from 'react';
import type { ScheduleByDay } from '../types';

interface ScheduleSectionProps {
  scheduleByDay: ScheduleByDay;
}

const ScheduleSection: React.FC<ScheduleSectionProps> = ({ scheduleByDay }) => {
  const [activeTab, setActiveTab] = useState('day1');

  return (
    <section id="schedule" className="py-5 bg-yellow min-vh-50">
      <div className="container">
        <div className=" mb-5">
          <h2 className="display-6 fw-bold mb-3 text-dark">PROGRAMME</h2>
        </div>
        
        {/* Tabs */}
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="schedule-tabs">
              <button
                className={`schedule-tab ${activeTab === 'day0' ? 'active' : ''}`}
                onClick={() => setActiveTab('day0')}
              >
               26 septembre
              </button>
              <button
                className={`schedule-tab ${activeTab === 'day1' ? 'active' : ''}`}
                onClick={() => setActiveTab('day1')}
              >
               27 septembre
              </button>
              <button
                className={`schedule-tab ${activeTab === 'day2' ? 'active' : ''}`}
                onClick={() => setActiveTab('day2')}
              >
               28 septembre
              </button>
            </div>
          </div>
        </div>

        {/* Schedule Content */}
        <div className="row">
          <div className="col-lg-12">
            <div className="schedule-container">
              {scheduleByDay[activeTab]?.map((item, index) => (
                <div key={index} className="schedule-item-minimal">
                  <div className="schedule-time-minimal">
                    {item.time}
                  </div>
                  <div className="schedule-content-minimal">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
