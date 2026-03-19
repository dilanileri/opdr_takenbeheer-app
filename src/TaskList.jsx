export default function TaskList({ toggleVoltooid, handleDelete }) {

    return (
        <div>
            {gefilterdeTaken.map((item) => (
                <p key={item.id}>
                    {item.taak}
                    <button className={item.voltooid ? "btn btn-success" : "btn btn-danger"} onClick={() => toggleVoltooid(item.id)}>{item.voltooid ? 'voltooid' : 'voltooien'}</button>
                    <button className="btn btn-secondary" onClick={() => handleDelete(item.id)}>Verwijderen</button>
                </p>))}
        </div>
    )
}