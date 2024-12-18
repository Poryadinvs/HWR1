import '../static/style.css'
export default function Button({ onClick, status = 'default', text = 'Click' }) {
    return (
        <button
            className={"button " + status}
            onClick={onClick}
        >
            {text}
        </button>
    )

}
