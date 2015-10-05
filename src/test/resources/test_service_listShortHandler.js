var eb = require('vertx-js/bus');
var TestService = require('test-js/test_service-proxy');
var testService = new TestService(eb, 'someaddress');

testService.listShortHandler(function(err, res) {
  if (err !== undefined) {
    vertx.eventBus().send("testaddress", "unexpected failure " + err);
  } else if (res[0] != 11 && res[1] != 12 && res[2] != 13) {
    vertx.eventBus().send("testaddress", "unexpected result " + res);
  } else {
    vertx.eventBus().send("testaddress", "ok");
  }
});


