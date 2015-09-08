module.exports = function(){
    var faker = require("faker");
    var chance = require('chance').Chance();
    var _ = require("lodash");
    return {
        card: _.times(50, function (n) {
            return {
                id: n,
                card: faker.helpers.createCard()
            };
        })
    };
};
