angular.module('splitter')
       .service('ItemService', ['$http', function($http) {
  var self = this;

  self.getAll = function(id) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + id + '/items';
    return $http.get(url)
    .then(function(response){
      return response.data;
    });
  };

  self.removeItem = function(billId, itemId){
    var url = 'http://splitter-backend.herokuapp.com/bills/' + billId +  '/items/' + itemId ;
    return $http.delete(url);
  };

  self.editItem = function(billId, itemId, params) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + billId +  '/items/' + itemId ;
    return $http.patch(url, {item: params});
  };

  self.addItem = function(billId, params) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + billId +  '/items/';
    return $http.post(url, {item: params, bill_id: billId});
  };

}]);
