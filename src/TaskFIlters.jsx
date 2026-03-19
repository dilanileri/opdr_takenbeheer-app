export default function TaskFilters({ setFilter }) {
    //props komen als object binnen

    return (
        <div className="mb-4 mt-3">
            <button className=" btn btn-primary" onClick={() => setFilter("alle")}>Alle taken</button>
            <button className="btn btn-outline-secondary" onClick={() => setFilter("voltooid")}>Voltooide taken</button>
            <button className="btn btn-outline-secondary" onClick={() => setFilter("niet")}> Niet voltooide taken</button>
        </div>
    )
}


