import React from 'react';
import NumberFormat from 'react-number-format';

function CovidStatistical(props) {
    return (
        <div className="covid-statistical mb-4">
            <h1 className="text-red-500 text-center text-5xl font-bold">
                <NumberFormat
                    value={props.caseStatical}
                    displayType={'text'}
                    fixedDecimalScale={false}
                    thousandSeparator={','}
                    decimalSeparator={'.'}
                />
            </h1>
            <div className="flex justify-between mt-8 px-2">
                <div className="flex flex-col items-center font-bold">
                    <span className="text-2xl">
                        <NumberFormat
                            value={props.deathStatical}
                            displayType={'text'}
                            fixedDecimalScale={false}
                            thousandSeparator={','}
                            decimalSeparator={'.'}
                        />
                    </span>
                    <span className="text-gray-400 uppercase">Deaths</span>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <span className="text-2xl">
                        <NumberFormat
                            value={props.recoverStatical}
                            displayType={'text'}
                            fixedDecimalScale={false}
                            thousandSeparator={','}
                            decimalSeparator={'.'}
                        />
                    </span>
                    <span className="text-gray-400 uppercase">Recoveries</span>
                </div>
            </div>
        </div>
    );
}

export default React.memo(CovidStatistical);