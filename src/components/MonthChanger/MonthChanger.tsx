import './MonthChanger.css'
import { MonthChangerProp } from './propsTypes'

export const MonthChanger = (props: MonthChangerProp) => {
    const months = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    const month = props.month
    const year = props.year
    const setMonth = props.setMonth
    const setYear = props.setYear

    const changeMonth = (direction: number) => {
        const threshold = direction === 1 ? 12 : 1
        const newMonth = month === threshold ? 13 - threshold : month + direction
        const newYear = month === threshold ? year + direction : year
        setMonth(newMonth)
        setYear(newYear)
    }

    return (
        <div className="month_changer">
            <i className="fa-solid fa-angle-left" onClick={() => changeMonth(-1)}></i>
            <p>{`${months[month]} / ${year}`}</p>
            <i className="fa-solid fa-angle-right" onClick={() => changeMonth(1)}></i>
        </div>
    )
}