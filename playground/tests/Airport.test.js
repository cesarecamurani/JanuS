const { verify, group, check  } = require('janus');
const airport = require('../src/Airport')
const plane = require('../src/Plane')

group('Airport', () => {
  group('method: clearForLanding', () => {
    check('adds a plane to the hangar', () => {
      airport.clearForLanding(plane)
      verify.contains(airport.hangar, plane);
    });
  });
  group('method: clearForTakeOff', () => {
    check('removes a plane from the hangar', () => {
      airport.clearForTakeOff(plane)
      verify.notContains(airport.hangar, plane);
    });
  });
});
