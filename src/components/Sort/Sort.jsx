

const Sort = () => {
    return (
        <div className="mx-auto container items-center mt-10  lg:mt-20     ">
            <select className="select select-primary w-full max-w-xs">
                <option disabled selected>Total Cost</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
            </select>
        </div>
    );
};

export default Sort;