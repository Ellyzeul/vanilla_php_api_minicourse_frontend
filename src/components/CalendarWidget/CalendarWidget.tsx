import './CalendarWidget.css'
import { CalendarBox } from '../CalendarBox/CalendarBox'
import { useState } from 'react'
import { EventManager } from '../EventManager/EventManager'

export const CalendarWidget = () => {
  const [selectedDate, setSelectedDate] = useState("")
  console.log(selectedDate)
  
  return (
    <div className="calendar_widget">
      <CalendarBox setSelectedDate={setSelectedDate} />
      <EventManager selectedDate={selectedDate} />
    </div>
  )
}