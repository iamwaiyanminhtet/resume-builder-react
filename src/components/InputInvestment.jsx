import "../styles/input.css";

const InputInvestment = ({ name, info, handler, action, dataArrName }) => {
    return (
        <div className="input-investment-section">
            <h3>{name}</h3>
            {
                info.map((row) =>
                    <>
                        <div className="input-section-education" id="input-section-education" key={row.id}>
                            <div className="input-section-education-rows">
                                <div className="input-section-education-row">
                                    <div>
                                        <label htmlFor="education-from-input-1">From</label>
                                        <input type="date" name="from" id="education-from-input-1" onChange={(e) => handler(row.id, "start", e.target.value, info, dataArrName)} />
                                    </div>
                                    <div>
                                        <label htmlFor="education-to-input-1">To</label>
                                        <input type="date" id="education-to-input-1" onChange={(e) => handler(row.id, "end", e.target.value, info, dataArrName)} />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="where" id="education-where-input-1" className="custom-input" placeholder="Where" onChange={(e) => handler(row.id, "where", e.target.value, info, dataArrName)} />
                                        <label id="education-where-input-1" className="custom-input-label" >Where</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>)
            }
            <div className="plus-minus">
                <div className="add-row-btn" id="add-education-row-btn" onClick={(e) => action(info, dataArrName, e.target.innerText)}>
                    +
                </div>
                <div className="remove-row-btn" id="remove-education-row-btn" onClick={(e) => action(info, dataArrName, e.target.innerText)}>
                    -
                </div>
            </div>
        </div>
    )
}

export default InputInvestment;