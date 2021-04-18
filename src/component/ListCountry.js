import React from 'react';
import CountryItem from './CountryItem';
import PinTopCountry from './PinTopCountry';
import './ListCountry.css';

function ListCountry(props) {
    const { pinTopData, dataFilter, searchInput } = props;
    return (
        <div className="px-2 overflow-auto list-language" style={{height: '616px'}}>
            <table className="w-full relative table-fixed">
                <tbody>
                    <PinTopCountry
                        pinTopData={pinTopData}
                    />
                    {dataFilter.map((data,index)=>{
                        return (
                            <CountryItem 
                                key={index}
                                index={index}
                                data={data}
                                searchInput={searchInput}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default React.memo(ListCountry);