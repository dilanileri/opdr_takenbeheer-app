export default function AddTodoInput({ onChange, value }) {

    return (

        <input onChange={onChange} type="text" value={value} placeholder="Voeg een nieuwe taak toe..." />

    )
}