import { EventType } from "@/app/home/components/events/Event";

const MINUTE_IN_MS = 60 * 1000;



function formatDateForCalendarUrl(date: Date) {
  return date.toISOString().replace(/-|:|\.\d+/g, '');

}

export function generateGoogleCalendarUrl(calendarEvent: EventType) {
  const startDate = formatDateForCalendarUrl(calendarEvent.startDate);
  const endDate = formatDateForCalendarUrl(calendarEvent.endDate);

  const encodedUrl = encodeURI([
    'https://www.google.com/calendar/render',
    '?action=TEMPLATE',
    `&text=${  calendarEvent.title || ''}`,
    `&dates=${  startDate || ''}`,
    `/${  endDate || ''}`,
    `&location=${  calendarEvent.address || ''}`,
    '&sprop=&sprop=name:'].join(''));

  return encodedUrl;
}

// Generates ICS for Apple and Outlook calendars
export function generateIcsCalendarFile(calendarEvent: EventType) {
  const startDate = formatDateForCalendarUrl(calendarEvent.startDate);
  const endDate = formatDateForCalendarUrl(calendarEvent.endDate);

  const encodedUrl = encodeURI(
    `data:text/calendar;charset=utf8,${  [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `URL:${  document.URL}`, // TODO: insert video app url here
      `DTSTART:${  startDate || ''}`,
      `DTEND:${  endDate || ''}`,
      `SUMMARY:${  calendarEvent.title || ''}`,
      `LOCATION:${  calendarEvent.address || ''}`,
      'END:VEVENT',
      'END:VCALENDAR'].join('\n')}`);

  return encodedUrl;

  // return '<a class="' + eClass + '" target="_blank" href="' + href + '">' + calendarName + ' Calendar</a>';
}

export function generateYahooCalendarUrl(calendarEvent: EventType) {
  const st = helpers.formatTime(calendarEvent.startDate)
  const duration = helpers.getEventDurationForYahoo(calendarEvent);

  const encodedUrl = encodeURI([
    'http://calendar.yahoo.com/?v=60&view=d&type=20',
    `&title=${  calendarEvent.title || ''}`,
    `&st=${  st || ''}`,
    `&dur=${  duration || ''}`,
    `&in_loc=${  calendarEvent.address || ''}`
  ].join(''));

  return encodedUrl;
}



const helpers = {
  formatTime (date: Date) {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  },
  getEventDurationForYahoo (calendarEvent: EventType) {
    const eventDuration = 
      ((calendarEvent.endDate.getTime() - calendarEvent.startDate.getTime()) / MINUTE_IN_MS)

    // Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
    const yahooHourDuration = eventDuration < 600 ?
      `0${  Math.floor((eventDuration / 60))}` :
      `${Math.floor((eventDuration / 60))  }`;

    const yahooMinuteDuration = eventDuration % 60 < 10 ?
      `0${  eventDuration % 60}` :
      `${eventDuration % 60  }`;

    const yahooEventDuration = yahooHourDuration + yahooMinuteDuration;

    return yahooEventDuration;
  }
}