import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'

import './todayILearned.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

interface Props {
  title: string
}

export default function TodayILearned({ title }: Props) {
  const handleDateClick = (arg: any) => { // bind with an arrow function
    alert(arg.dateStr)
  }

  return (
    <div className="today-i-learned">
      <div className="category-title">
        {title}
      </div>
      <div className="calendar">
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={[
            { title: 'event 1', date: '2020-12-01' },
            // { title: 'event 3', date: '2020-12-01' },
            { title: 'event 2', date: '2020-12-02' }
          ]}
          // eventContent={renderEventContent}
          eventClick={handleDateClick}
          dayMaxEvents={1}
          // stickyFooterScrollbar={true}
        />
      </div>
    </div>
  );
}

function renderEventContent(eventInfo: any) {
  return (
    <>
      <div>hello</div>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
