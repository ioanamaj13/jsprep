import { useState } from "react";
import { fizzbuzz, fizzbuzzMultiple, fizzbuzzRange } from "../functions/fizzbuzz/fizzbuzz";

export const FizzBuzz = () => {

    const [number, setNumber] = useState();
    const [numbers, setNumbers] = useState([]);
    const [type, setType] = useState('');
    const [rangeStart, setRangeStart] = useState();
    const [rangeEnd, setRangeEnd] = useState();
    const [output, setOutput] = useState([]);

    const resetAll = () => {
        setNumber('');
        setNumbers([]);
        setRangeStart('');
        setRangeEnd('');
        setOutput([]);
    }

    const handleChangeSingle = (e) => {
        setNumber(e.target.value);
    }

    const handleChangeMultiple = (e) => {
        setNumbers(e.target.value.split(','));
    }

    const handleChangeRangeStart = (e) => {
        setRangeStart(e.target.value);
    }

    const handleChangeRangeEnd = (e) => {
        setRangeEnd(e.target.value);
    }

    const handleSubmitSingle = (e) => {
        e.preventDefault();
        setOutput([fizzbuzz(number)]);
    }

    const handleSubmitMultiple = (e) => {
        e.preventDefault();
        setOutput(fizzbuzzMultiple(...numbers));
    }

    const handleSubmitRange = (e) => {
        e.preventDefault();
        setOutput(fizzbuzzRange(rangeStart, rangeEnd));
    }


    const handleTypeChange = (e) => {
        resetAll();
        setType(e.target.value);
    }

    const TypeCheck = () => {
        return (
            <div onChange={handleTypeChange} className="radioSet">
                <input type="radio" value="Single" name="type" />
                <label htmlFor="Single">Single</label>
                <input type="radio" value="Multiple" name="type" />
                <label htmlFor="Multiple"> Multiple</label>
                <input type="radio" value="Range" name="type" />
                <label htmlFor="Range"> Range</label>
            </div>
        )
    }


    const SingleNumber = () => {
        return (
            <form onSubmit={handleSubmitSingle}>
                <label htmlFor="fizzbuzz-input"> Input </label>
                <input type="text" name="fizzbuzz-input" value={number} onChange={handleChangeSingle} />
                <button type="submit">Submit</button>
            </form>
        )
    }

    const MultipleNumbers = () => {
        return (
            <form onSubmit={handleSubmitMultiple}>
                <label htmlFor="fizzbuzz-input"> Input </label>
                <input type="text" name="fizzbuzz-input" value={numbers} onChange={handleChangeMultiple} />
                <button type="submit">Submit</button>
            </form>
        )
    }

    const RangeNumbers = () => {
        return (
            <form onSubmit={handleSubmitRange}>
                <label htmlFor="fizzbuzz-input"> From </label>
                <input type="text" name="fizzbuzz-from" value={rangeStart} onChange={handleChangeRangeStart} />
                <label htmlFor="fizzbuzz-input"> To </label>
                <input type="text" name="fizzbuzz-to" value={rangeEnd} onChange={handleChangeRangeEnd} />
                <button type="submit">Submit</button>
            </form>
        )
    }

    return (
        <div>
            <TypeCheck />
            {type === 'Single' ? <SingleNumber /> : null}
            {type === 'Multiple' ? <MultipleNumbers /> : null}
            {type === 'Range' ? <RangeNumbers /> : null}
            <div>
                {output.map((item, index) => { return <p key={index}>{item}</p> })}
            </div>
        </div >
    )
}