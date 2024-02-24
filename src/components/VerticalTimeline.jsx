// VerticalTimeline.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the styles
import './VerticalTimeling.css'

const VerticalTimelineComponent = ({ events }) => {
  return (
    <div className="wrap">
        <VerticalTimeline>
            {events.map((event, index) => (
              
                <VerticalTimelineElement
                key={index}
                date={event.date}
                iconStyle={{ background: '#fbc919', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">{event.title}</h3>
                <a href={event.link} style={{ color: '#000', textDecoration: 'none' }}>Project Link</a>
                <p className="vertical-timeline-element-description">{event.description}</p>
                </VerticalTimelineElement>
 
            ))}
        </VerticalTimeline>
    </div>
  );
};

export default VerticalTimelineComponent;
