import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { useTranslation } from 'react-i18next';
export default function WeddingTimeline() {
  const { t } = useTranslation();
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2024/09/28 18:00
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot variant="filled" color="pink" />
        <TimelineConnector sx={{ bgcolor: 'pink.main' }} />
        </TimelineSeparator>
        <TimelineContent>{t("timeline_dinner_label")}</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2024/09/29 08:00 ~ 11:00 
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot variant="filled" color="pink" />
        <TimelineConnector sx={{ bgcolor: 'pink.main' }} />
        </TimelineSeparator>
        <TimelineContent>{t("pre_wedding_title")}</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          11:00 ~ 15:00 
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot variant="filled" color="pink" />
        </TimelineSeparator>
        <TimelineContent>{t("wedding_title")}</TimelineContent>
      </TimelineItem>


    </Timeline>
  )
}