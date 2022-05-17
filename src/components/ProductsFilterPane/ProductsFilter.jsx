export default function ProductFilter() {
    return (
        <form action="#" className="product-filter">

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
                <label >
                    <input type="radio" value="4" />4 Stars and above
                </label>
                <label >
                    <input type="radio" value="3" />3 Stars and above
                </label>
                <label >
                    <input type="radio" value="2" />2 Stars and above
                </label>
            </div>

            <div className="category">
                <h4 className="highlight">Sort by</h4>
                <label >
                    <input type="radio" /> Price - Low to High
                </label>
                <label >
                    <input type="radio" /> Price - High to Low
                </label>
            </div>

        </form>
    )
}