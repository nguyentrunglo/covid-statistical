import React from 'react';
import NumberFormat from 'react-number-format';
import { DateTimeUtil } from './utils/index';

function PinTopCountry(props) {
    const { pinTopData } = props;
    return (
        <tr className="pin-top">
            <td className="p-2 sticky top-0 bg-white w-2/12">
            </td>
            <td className="p-2 sticky top-0 bg-white">
                <img src={pinTopData && pinTopData.countryInfo && pinTopData.countryInfo.flag} className="h-8" alt="country" style={{minWidth: '3rem'}}/>
            </td>
            <td className="p-2 flex flex-col sticky top-0 bg-white">
                <span className="font-bold">{pinTopData && pinTopData.country}</span>
                <span className="text-xs text-gray-400">{DateTimeUtil.timeSince(pinTopData && pinTopData.updated)}</span>
            </td>
            <td className="p-2 text-right text-red-500 font-bold sticky top-0 bg-white">
                <NumberFormat
                    value={pinTopData && pinTopData.cases}
                    displayType={'text'}
                    fixedDecimalScale={false}
                    thousandSeparator={','}
                    decimalSeparator={'.'}
                />
            </td>
        </tr>
    );
}

export default React.memo(PinTopCountry);