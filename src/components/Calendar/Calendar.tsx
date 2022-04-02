import { CalendarProp } from "./propTypes"
import './Calendar.css'
import { useRef, useEffect } from "react"

export const Calendar = (props: CalendarProp) => {
    const month = props.month
    const year = props.year
    const setSelectedDate = props.setSelectedDate
    const tbodyRef = useRef(null)

    const selectDate = (day: number) => {
        const date = `${year}-${month}-${day}`

        setSelectedDate(date)
    }

    useEffect(() => {
        if(!tbodyRef.current) return

        const tbody = tbodyRef.current as HTMLTableSectionElement
        const dateOfFirstDay = new Date(year, month-1, 1)
        const dateOfLastDay = new Date(year, month, 0)
        const lastDay = dateOfLastDay.getDate()
        const firstWeekday = dateOfFirstDay.getDay()
        let day = 1

        for(let i = 0; i < 6; i++) {
            for(let j = 0; j < 7; j++) {
                let cond = (((i === 0 && firstWeekday <= j) || i > 0) && day <= lastDay)
                tbody.rows[i].cells[j].textContent = cond ? `${day++}` : ''
                tbody.rows[i].cells[j].className = cond ? 'calendar_day' : ''
                tbody.rows[i].cells[j].onclick = 
                    cond 
                    ? (() => selectDate(parseInt(tbody.rows[i].cells[j].textContent as string))) 
                    : null
            }
        }
    })

    return (
        <table className="calendar">
            <thead>
                <tr>
                    <th>Dom</th>
                    <th>Seg</th>
                    <th>Ter</th>
                    <th>Qua</th>
                    <th>Qui</th>
                    <th>Sex</th>
                    <th>Sab</th>
                </tr>
            </thead>
            <tbody ref={tbodyRef}>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            </tbody>
        </table>
    )
}