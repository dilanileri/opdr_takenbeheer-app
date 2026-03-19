import { useState } from "react"
import useLocalStorage from "../../state-en-hooks/src/hooks/useLocalStorage"
import AddTodoInput from "./AddTodoInput"
import TaskFilters from "./TaskFIlters"
import TaskList from "./TaskList"

export default function Taakbeheer() {

    const [nieuweTaak, setNieuweTaak] = useState('')

    const [taken, setTaken] = useLocalStorage("taken", [

        { id: 1, taak: "Gras maaien", voltooid: false },
        { id: 2, taak: "Huiswerk maken", voltooid: false },
        { id: 3, taak: "Melk kopen", voltooid: false }

    ])

    const takenInputChange = (e) => setNieuweTaak(e.target.value)

    const [filter, setFilter] = useState("alle")

    const handleAdd = (e) => {
        e.preventDefault()

        if (nieuweTaak.trim() === "") {
            return
        }
        const nieuweTaakobject = {
            id: Date.now(),
            taak: nieuweTaak,
            voltooid: false
        }
        setTaken([...taken, nieuweTaakobject])
        setNieuweTaak("")
    }

    const handleDelete = (id) => {
        setTaken(taken.filter(item => item.id !== id))
    }

    const toggleVoltooid = (id) => {

        setTaken(taken.map(item => {
            if (item.id == id) {
                return {
                    ...item,
                    voltooid: !item.voltooid
                }
            }
            return item
        }))
    }

    const gefilterdeTaken = taken.filter((item) => {
        if (filter == "voltooid")
            return item.voltooid
        if (filter == "niet")
            return !item.voltooid
        return true
    })

    return (
        <div className="m-5">

            <h1>Takenbeheer App</h1>
            <TaskFilters setFilter={setFilter} />

            <AddTodoInput onChange={takenInputChange} value={nieuweTaak} />
            <button className="btn btn-dark mb-2" onClick={handleAdd}>Toevoegen</button>

            <TaskList toggleVoltooid={toggleVoltooid} handleDelete={handleDelete} />
            {/* hier werkt iets nog niet drm wit scherm */}

        </div>
    )
}