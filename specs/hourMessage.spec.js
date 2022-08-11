/* eslint-disable no-undef */

const hourMessage = require("../src/hourMessage");
describe("hourMessage()", () => {
  let hourStub;
  afterEach(() => hourStub.restore());
  subject(() => hourMessage());

  describe("between 23 and 5", () => {
    beforeEach(() => {
      hourStub = sinon.stub(Date.prototype, "getHours").returns(4);
    });
    it(() => is.expected.to.equal("Good night"));
  });

  describe("between 6 and 11", () => {
    beforeEach(() => {
      hourStub = sinon.stub(Date.prototype, "getHours").returns(11);
    });
    it(() => is.expected.to.equal("Good morning"));
  });
  describe("between 12 and 17", () => {
    beforeEach(() => {
      hourStub = sinon.stub(Date.prototype, "getHours").returns(17);
    });
    it(() => is.expected.to.equal("Good afternoon"));
  });

  describe("between 18 and 22", () => {
    beforeEach(() => {
      hourStub = sinon.stub(Date.prototype, "getHours").returns(22);
    });
    it(() => is.expected.to.equal("Good evening"));
  });
});