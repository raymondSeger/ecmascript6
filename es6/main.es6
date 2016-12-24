'use strict';
var function_with_default_param = function(productId = 1000) {
    console.log(productId);
};

var function_with_default_param_2 = (productId = 3000) => console.log(productId);

function_with_default_param();
function_with_default_param_2();