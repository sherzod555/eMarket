

export const Search = () => {
    return (
        <>
        
            <main className="container mx-auto w-[1252px] mb-14">
                <div className="mx-auto border-2 border-[#40BFFF] w-[635px] rounded-sm flex items-center justify-between">
                    <input className="py-4 px-7 outline-none" type="search" placeholder="Search query..." />
                    <button className="py-4 px-7 text-white text-xl font-semibold hover:text-[#BCDDFE] bg-[#40BFFF]">Search</button>
                </div>
            </main>
        </>
    )
};
export default Search