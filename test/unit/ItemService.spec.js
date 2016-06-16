describe('ItemService', function() {
  beforeEach(module('splitter'));

  var itemService, httpBackend;

  var itemData = [{name: 'beer', price: '4.00', paid: false}, {name: 'chips', price: '3.00', paid: true}];

  beforeEach(inject(function(_ItemService_, $httpBackend) {
    itemService = _ItemService_;
    httpBackend = $httpBackend;
  }));

  it('fetches a list of items', function() {

    var item1 = {name: 'beer', price: '4.00', paid: false};
    var item2 = {name: 'chips', price: '3.00', paid: true};

    var id = 1;

    httpBackend.expectGET("http://localhost:3000/bills/1/items").respond(itemData);
    itemService.getAll(id).then(function(items) {
      expect(items).toEqual([item1,item2]);
    });
    httpBackend.flush();
  });
});