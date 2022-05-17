export default function ProductFilter() {
    return (
        <form action="#" class="product-filter">

            <div class="filter highlight">
                filter
                <input type="reset" />
            </div>

            <div class="scale">
                <h4 class="highlight">Range</h4>
                <div class="scale-values">
                    <span>20</span>
                    <span>20</span>
                    <span>20</span>
                </div>
                <input type="range" class="slider" />
            </div>

            <div class="category">
                <h4 class="highlight">Category</h4>
                <label for="men">
                    <input type="checkbox" value="fiction" />Fiction
                </label>
                <label for="women">
                    <input type="checkbox" value="self-help" />Self Help
                </label>
                <label for="women">
                    <input type="checkbox" value="technical" />Technical
                </label>
                <label for="women">
                    <input type="checkbox" value="non-fiction" />Non-Fiction
                </label>
            </div>

            <div class="category">
                <h4 class="highlight">Rating</h4>
                <label for="men">
                    <input type="radio" value="4" />4 Stars and above
                </label>
                <label for="women">
                    <input type="radio" value="3" />3 Stars and above
                </label>
                <label for="women">
                    <input type="radio" value="2" />2 Stars and above
                </label>
            </div>

            <div class="category">
                <h4 class="highlight">Sort by</h4>
                <label for="men">
                    <input type="radio" /> Price - Low to High
                </label>
                <label for="women">
                    <input type="radio" /> Price - High to Low
                </label>
            </div>

        </form>
    )
}