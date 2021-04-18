import React, { Fragment } from 'react';
import { DateTimeUtil } from './utils/index';
import NumberFormat from 'react-number-format';

function CountryItem(props) {
    const { searchInput, data, index } = props;
    return (
        <Fragment>
            <tr className="hover:bg-gray-200">
                <td className="p-2">
                    <span className="text-gray-400 bg-white w-full block text-center">{index + 1}</span>
                </td>
                <td className="p-2">
                    <img src={data && data.countryInfo && data.countryInfo.flag} className="w-12 h-8" alt="country" />
                </td>
                <td className="p-2 flex flex-col">
                    <span className="font-bold">{data && data.country}</span>
                    <span className="text-xs text-gray-400">{DateTimeUtil.timeSince(data && data.updated)}</span>
                </td>
                <td className="p-2 text-right text-red-500 font-bold">
                    <NumberFormat
                        value={data && data.cases}
                        displayType={'text'}
                        fixedDecimalScale={false}
                        thousandSeparator={','}
                        decimalSeparator={'.'}
                    />
                </td>
            </tr>
            { searchInput ? (
                <tr>
                    <td className="px-2 text-center" colSpan={2}>
                        <NumberFormat
                            value={data && data.deaths}
                            displayType={'text'}
                            fixedDecimalScale={false}
                            thousandSeparator={','}
                            decimalSeparator={'.'}
                        />
                        &nbsp;
                        <span className="uppercase text-gray-400">Deaths</span>
                    </td>
                    <td className="px-2 text-center" colSpan={2}>
                        <NumberFormat
                            value={data && data.recovered}
                            displayType={'text'}
                            fixedDecimalScale={false}
                            thousandSeparator={','}
                            decimalSeparator={'.'}
                        />
                        &nbsp;
                        <span className="uppercase text-gray-400">Recoveries</span>
                    </td>
                </tr>
            ) :
                null
            }
        </Fragment>
    );
}

export default React.memo(CountryItem);