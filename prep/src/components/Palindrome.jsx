import { useState } from "react";
import { isPalindrome, isPalindromeRecursive } from "../functions/palindrome/palindrome";

export const Palindrome = () => {
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
        setOutput(isPalindromeRecursive(input));
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
