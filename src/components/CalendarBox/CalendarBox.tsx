import { useState } from "react"
import { Calendar } from "../Calendar/Calendar"
import { MonthChanger } from "../MonthChanger/MonthChanger"
import './CalendarBox.css'
import { CalendarBoxProp } from "./propTypes"

export const CalendarBox = (props: CalendarBoxProp) => {
    const setSelectedDate = props.setSelectedDate || ((str: string) => console.log(str))

    const date = new Date()

    const [month, setMonth] = useState(date.getMonth() + 1)
    const [year, setYear] = useState(date.getFullYear())

    return (
        <div className="calendar_box">
            <MonthChanger 
                month={month}
                year={year}
                setMonth={setMonth}
                setYear={setYear}
            />
            <Calendar 
                month={month}
                year={year}
                setSelectedDate={setSelectedDate}
            />
        </div>
    )
}