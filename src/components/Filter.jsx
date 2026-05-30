function Filter({ setTitleFilter, setRateFilter }) {
return (
    <div className="flex justify-center gap-4 mb-6">
    <input
        className="p-2 rounded bg-gray-800 text-white"
        placeholder="Search title..."
        onChange={(e) => setTitleFilter(e.target.value)}
    />

    <input
        type="number"
        className="p-2 rounded bg-gray-800 text-white w-32"
        placeholder="Min rating"
        onChange={(e) => setRateFilter(Number(e.target.value))}
    />
    </div>
);
}

export default Filter;