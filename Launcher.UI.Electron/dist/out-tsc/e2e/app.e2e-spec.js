"use strict";
var app_po_1 = require("./app.po");
describe('laucher.game App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.GamePage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map