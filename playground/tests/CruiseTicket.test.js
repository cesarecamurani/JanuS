const { verify, check, xcheck, group } = require('janus');
const ticket = require('../src/CruiseTicket');

group('CruiseTicket', () => {
  group('method: returnTicket', () => {
    check('returns ticket in the desired format', () => {
      verify.same(ticket.returnTicket('delhi'), 'The price of your journey to delhi is £1500');
    });
  });
});
