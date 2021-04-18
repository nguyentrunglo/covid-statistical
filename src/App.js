import React, {useCallback, useEffect, useMemo, useState} from 'react';
import CovidStatistical from './component/Statistical/CovidStatistical';
import SearchInput from './component/Input/SearchInput';
import axios from 'axios';
import ListCountry from './component/ListCountry/ListCountry';

const TIMER = 3*60*100;
const PIN_TOP_COUNTRY = 'Vietnam';

function App() {
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            await axios('https://disease.sh/v3/covid-19/countries')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
        };
        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, TIMER);
        return () => clearInterval(interval);
    }, []);

    const onChangeSearchInput = useCallback(e => {
        setSearchInput(e.target.value);
    },[]);

    const pinTopData = data.find(item => item.country === PIN_TOP_COUNTRY);
    const dataFilter = searchInput ? [...data].filter(item => item.country.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1)
    : [...data].sort((a,b) => (a.cases < b.cases) ? 1 : ((b.cases < a.cases) ? -1 : 0)).slice(0,10);
    const deathStatical = useMemo(() => data.reduce((a, b) => a + b.deaths, 0), [data]);
    const recoverStatical = useMemo(()=> data.reduce((a, b) => a + b.recovered, 0), [data]);
    const caseStatical = useMemo(() => data.reduce((a, b) => a + b.cases, 0), [data]);
    return (
        <div className="max-w-md m-auto px-4 bg-gray-100 py-8">
            <CovidStatistical 
                deathStatical={deathStatical}
                recoverStatical={recoverStatical}
                caseStatical={caseStatical}
            />
            <SearchInput
                onChangeSearchInput={onChangeSearchInput}    
            />
            <ListCountry
                pinTopData={pinTopData}
                dataFilter={dataFilter}
                searchInput={searchInput}
            />
        </div>
    );
}

export default App;
