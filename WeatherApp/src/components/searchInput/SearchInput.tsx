
interface SearchInputProps {
    setSearchedCity: (city: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    cardColor: string | undefined;
}


export const SearchInput: React.FC<SearchInputProps> = ({ setSearchedCity, handleSubmit, cardColor }) => {
    return (
        <form onSubmit={handleSubmit} className="relative w-10/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 mx-auto transition-all duration-500 animate-fadeIn ease-in-out">
            <input
                required
                onChange={(e) => setSearchedCity(e.target.value)}
                className={`w-full py-1 sm:py-2 px-4 border-2 bg-gradient-to-r ${cardColor} transition-all duration-500 backdrop-blur-xl font-bold text-xl rounded-md focus:outline-none`}
                type="search"
                placeholder="Search"
            />
            <button type="submit" className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-300 border-t-2 border-b-2 border-r-2 rounded-r-md focus:outline-none">
                <svg className="h-5 w-5 fill-slate-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
                </svg>
            </button>
        </form>

    )
}
