import { useProduct } from "../../contexts"
export default function ProductFilter() {
    const { state, dispatch } = useProduct();
    const { rating, sortBy } = state;

    return (
        <fieldset action="#" className="product-filter">

            <div className="filter highlight">
                filter
                <button type="reset" onClick={() => {
                   
                    dispatch({ type: "CLEAR_ALL" })
                }}>Reset</button>
                {/* error while adding this, check bookmarked page */}
                {/* <input type="reset" onClick={dispatch({ type: "CLEAR_ALL" })} /> */}
            </div>

            <div className="scale">
                <h4 className="highlight">Range</h4>
                <div className="scale-values">
                    <span>100</span>
                    <span>1000</span>
                </div>
                {/* (event) => dispatch({ type: "PRICE_RANGE", payload: event.target.value }) */}
                <input type="range" min="200" max="1000" step="100" value={state.range} className="slider" onChange={(event) => dispatch({ type: "PRICE_RANGE", payload: event.target.value })} />
                <span>{state.range}</span>
            </div>

            <div className="category">
                <h4 className="highlight">Category</h4>
                <label >
                    <input name="category" type="checkbox" value="fiction" checked={state.category["fiction"]} onChange={(event) => dispatch({ type: "CATEGORY", payload: event.target.value })} />Fiction
                </label>

                <label >
                    <input name="category" type="checkbox" value="horror" checked={state.category["horror"]} onChange={(event) => dispatch({ type: "CATEGORY", payload: event.target.value })} />Horror
                </label>
                <label >
                    <input name="category" type="checkbox" value="romantic" checked={state.category["romantic"]} onChange={(event) => dispatch({ type: "CATEGORY", payload: event.target.value })} />Romantic
                </label>
            </div>

            <div className="category">
                <h4 className="highlight">Rating</h4>

                {/* ggg */}
                <label>
                    <input
                        type="radio"
                        id="rating-radio-input-1"
                        name="rating-radio-item"
                        value="4"
                        onChange={(event) => dispatch({ type: "RATING", payload: event.target.value })}
                    />
                    <span>4 and above</span>
                </label>
                <label >
                    <input
                        type="radio"
                        id="rating-radio-input-1"
                        name="rating-radio-item"
                        value="3"
                        onChange={(event) => dispatch({ type: "RATING", payload: event.target.value })}
                    />
                    <span>3 and above</span>
                </label>
                <label >
                    <input
                        type="radio"
                        id="rating-radio-input-1"
                        name="rating-radio-item"
                        value="2"
                        onChange={(event) => dispatch({ type: "RATING", payload: event.target.value })}
                    />
                    <span>2 and above</span>
                </label>
                <label >
                    <input
                        type="radio"
                        id="rating-radio-input-1"
                        name="rating-radio-item"
                        value="1"
                        onChange={(event) => dispatch({ type: "RATING", payload: event.target.value })}
                    />
                    <span>1 and above</span>
                </label>

            </div>

            <div className="category">
                <h4 className="highlight">Sort by</h4>

                <label htmlFor="radio-input-1">
                    <input
                        type="radio"
                        id="radio-input-1"
                        name="radio-item"
                        // value="lowToHigh"
                        checked={sortBy === "LOW_TO_HIGH"}
                        onChange={() => dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })}
                    />
                    <span>Price - Low to high</span>
                </label>
                <label htmlFor="radio-input-2">
                    <input
                        type="radio"
                        id="radio-input-2"
                        name="radio-item"
                        value="highToLow"
                        checked={sortBy === "HIGH_TO_LOW"}
                        onChange={() => dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })}
                    />
                    <span>Price - High to low</span>
                </label>

            </div>

        </fieldset>
    )
}