'use strict';
let function_with_spread_1 = (param1, ...params) => {
    console.log(param1 + " and " + params.length); // 1 and 3
    console.log(params); // ["name", "raymond", "jett"]
};

function_with_spread_1('1', 'name', 'raymond', 'jett');