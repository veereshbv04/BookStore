import { useProduct } from "../../contexts/product-context"
export default function ProductFilter() {
    const { state, dispatch } = useProduct();
    const { rating, sortBy } = state;

    return (
        <fieldset action="#" className="product-filter">

            <div className="filter highlight">
                filter
                <input type="reset" />
            </div>

            <div className="scale">
                <h4 className="highlight">Range</h4>
                <div className="scale-values">
                    <span>20</span>
                    <span>20</span>
                    <span>20</span>
                </div>
                <input type="range" className="slider" />
            </div>

            <div className="category">
                <h4 className="highlight">Category</h4>
                <label >
                    <input type="checkbox" value="fiction" />Fiction
                </label>
                {/* <label for="women">
                    <input type="checkbox" value="romantic" />Romantic
                </label> */}
                <label >
                    <input type="checkbox" value="horror" />Horror
                </label>

            </div>

            <div className="category">
                <h4 className="highlight">Rating</h4>

                {/* ggg */}
                <label for="rating-radio-input-1">
                    <input
                        type="radio"
                        id="rating-radio-input-1"
                        name="rating-radio-item"
                        value="4"
                        onChange={(event) => dispatch({ type: "RATING", payload: event.target.value })}
                    />
                    <span>4 and above</span>
                </label>
                <label for="rating-radio-input-1">
                    <input
                        type="radio"
                        id="rating-radio-input-1"
                        name="rating-radio-item"
                        value="3"
                        onChange={(event) => dispatch({ type: "RATING", payload: event.target.value })}
                    />
                    <span>3 and above</span>
                </label>
                <label for="rating-radio-input-1">
                    <input
                        type="radio"
                        id="rating-radio-input-1"
                        name="rating-radio-item"
                        value="2"
                        onChange={(event) => dispatch({ type: "RATING", payload: event.target.value })}
                    />
                    <span>2 and above</span>
                </label>
                <label for="rating-radio-input-1">
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

                <label for="radio-input-1">
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
                <label for="radio-input-2">
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