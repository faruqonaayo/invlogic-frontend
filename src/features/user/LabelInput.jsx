export default function LabelInput({ labelText, inputType, inputName }) {
    return (
        <div>
            <label>{labelText}</label>
            <input type={`${inputType}`} name={`${inputName}`} />
        </div>
    );
}
