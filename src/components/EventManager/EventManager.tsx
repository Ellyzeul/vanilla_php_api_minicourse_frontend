import './EventManager.css'
import { EventManagerProp } from "./propTypes"

export const EventManager = (props: EventManagerProp) => {
    const selectedDate = props.selectedDate
    const dateParts = selectedDate.split('-')
    dateParts[1] = parseInt(dateParts[1]) < 10 ? `0${dateParts[1]}` : dateParts[1]
    dateParts[2] = parseInt(dateParts[2]) < 10 ? `0${dateParts[2]}` : dateParts[2]
    const displayDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`

    return (
        <div className="event_manager">
            <div className="events_header">
                {displayDate}
            </div>
            <div className="events_body"></div>
        </div>
    )
}