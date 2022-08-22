import { useState } from "react";
import { bracketsValidator } from "../functions/bracketsValidator/bracketsValidator";

export const Brackets = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('');
        //setOutput(isPalindrome(input));
        setOutput(bracketsValidator(input));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input">Enter a string:</label>
                <input type="text" id="input" value={input} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <p>Output: {output.toString()}</p>
        </div>
    )
}
