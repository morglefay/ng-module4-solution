(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// 'item' is injected through state's resolve
ItemsController.$inject = ['item'];
function ItemsController (item) {
	console.log("Items Controller Called");
	var itemCtrl = this;
	itemCtrl.items = item.menu_items;
	console.log("ItemsController itemCtrl.items: ", itemCtrl.items);
}

})();