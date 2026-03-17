import { useState } from "react"

export default function Taakbeheer() {

    const [nieuweTaak, setNieuweTaak] = useState('')

    const [taken, setTaken] = useState([

        { id: 1, taak: "Gras maaien", voltooid: false },
        { id: 2, taak: "Huiswerk maken", voltooid: false },
        { id: 3, taak: "Melk kopen", voltooid: false }

    ])

    const takenInputChange = (e) => setNieuweTaak(e.target.value)



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

    return (
        <>

            <h1>Takenbeheer App</h1>
            <button>Alle taken</button>
            <button>Voltooide taken</button>
            <button>Niet voltooide taken</button>

            <br /> <br />

            <input onChange={takenInputChange} type="text" value={nieuweTaak} placeholder="Voeg een nieuwe taak toe..." />

            <button onClick={handleAdd}>Toevoegen</button>

            <div>
                {taken.map((item) => (
                    <p key={item.id}>
                        {item.taak}
                        <button onClick={() => toggleVoltooid(item.id)}>{item.voltooid ? 'voltooid' : 'voltooien'}</button>
                        <button onClick={() => handleDelete(item.id)}>Verwijderen</button>
                    </p>))}



            </div>

        </>
    )
}