(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoriesItems'];
function CategoriesController (categoriesItems) {
	console.log("Categories Controller Called");
	var categoryCtrl = this;
	categoryCtrl.categories = categoriesItems;
	console.log("CategoriesController categoryCtrl.categories: ", categoryCtrl.categories);
}

})();