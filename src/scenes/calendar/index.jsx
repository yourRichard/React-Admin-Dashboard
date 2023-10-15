import React from 'react'
import { useState } from 'react'
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import { Box,List,ListItem,ListItemText,Typography,useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents , setCurrentEvents] = useState([]);

    const handleDateClick = (selected) =>{
        const title = prompt("Enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start:selected.startStr,
                end:selected.endStr,
                allDay:selected.allDay
            })
        }
        
    }
    const handleEventClick = (selected) =>{
        if(
            window.confirm(`Are you sure you want to delete the event ${selected.event.title} ?`)
        )
        {
            selected.event.remove();
        }
    }
     
  return (
    <Box m="20px">
        <Header title="CALENDAR" subtitle="Make your plan on time and anytime"/>
        <Box
        m="20px"
        flex="1 1 20%"
        backgroundColor={colors.primary[400]}
        borderRadius="4px"
        p="15px"
        >
            <Typography variant='h5'>
                Event
            </Typography>
            <List>
                {currentEvents.map((event)=>(
                    <ListItem 
                    key={event.id}
                    sx={{
                        backgroundColor:colors.greenAccent[500],
                        margin: "10px 0",
                        borderRadius:"2px"
                    }}>
                        <ListItemText
                        primary={event.title}
                        secondary={
                            <Typography>
                                {formatDate(event.start,{
                                    year:"numeric",
                                    month:"short",
                                    day:"numeric"
                                })}
                            </Typography>
                        }
                        />
                    </ListItem>
                ))}
            </List>

        </Box>
        <Box flex="1 1 100%"ml="15px">
            <FullCalendar 
            height="75vh"
            plugins={[
                dayGridPlugin,
                timeGridPlugin,
                listPlugin,
                interactionPlugin,
            ]}
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {
                  id: "12315",
                  title: "All-day event",
                  date: "2023-09-14",
                },
                {
                  id: "5123",
                  title: "Timed event",
                  date: "2023-09-28",
                },
              ]}/>   
        </Box>
    </Box>
  )
}

export default Contact