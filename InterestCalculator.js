var interest = {};
interest.simpleInterest = function(principle, roi, year){
    return principle * roi * year
}
interest.compoundInterest = function(){
    return 'Compound interest function'
}

module.export = interest;
//exports.test = interest;