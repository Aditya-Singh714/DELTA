import TicketNum from "./TicketNum";
import './Lottery.css'

export default function Ticket({ticket}) {
    return(
        <div className="Ticket">
            <h2>Ticket</h2>
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    );
}