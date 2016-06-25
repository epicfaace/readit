//npm install -g jasmine-node
describe("Configuration setup", function() {
    it("should load local configurations", function(next) {
        var config = require('../config')();
        expect(config.mode).toBe('local');
        next();
    });
    it("should load staging configurations", function(next) {
        var config = require('../config')('staging');
        expect(config.mode).toBe('staging');
        next();
    });
    it("should load production configurations", function(next) {
        var config = require('../config')('production');
        expect(config.mode).toBe('production');
        next();
    });


    http://code.tutsplus.com/tutorials/build-a-complete-mvc-website-with-expressjs--net-34168