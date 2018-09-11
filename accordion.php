<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>React + Redux + Bootstrap 4 + ACCORDION</title>
<meta name="keywords"    content="shop collapse, accordion shop, react redux bootstrap">
<meta name="description" content="A different shoping cart">
<meta name="author"      content="Chris B">
<link rel="stylesheet" href="font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.min.css">
	
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>	
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>		



<STYLE>
#accordion {
  box-shadow: 0px 2px 25px black;
}

.card,
.card-header {
  border-width: 0px;
}

.card-header {
  background-color: transparent;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.card-header .card-header-row {
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
}

.card {
  word-wrap: normal;
  border-bottom: 1px solid gray;
  border-radius: 0px;
}

.limited-col-left {
  padding-left: 50px;
}

.limited-col-right {
  padding-right: 50px;
}

#items .col-4 {
  margin-bottom: 20px;
}

.row.item,
.row.service {
  align-items: center;
}

.row-basket.card {
  cursor: pointer;
}
.row-basket .service-price {
  text-align: right;
}
.row-basket .fa-times:not(.clickable) {
  color: #e6e6e6;
}
.row-basket .fa-times:hover {
  cursor: pointer;
  color: red;
}
.row-basket .row-basket-icon {
  font-size: 25px !important;
}
.row-basket .item .item-name {
  padding-left: 15px;
  vertical-align: middle;
}
.row-basket .item .item-img {
  margin-left: 0px;
  width: 47px;
  height: 31px;
}
.row-basket .item .item-price {
  text-align: right;
}
.row-basket .service {
  height: 31px;
}
.row-basket .service .service-name {
  padding-left: 0px;
}
.row-basket .service .service-img {
  width: 20%;
}
.details-section {
  overflow: hidden;
  clear: both;
}
.details-section .detail-button-col {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}
.details-section.collapse {
  padding-bottom: 0px;
  margin-bottom: 0px;
}
.details-section .details-container .title {
  padding-top: 20px;
  padding-bottom: 35px;
}
.details-section .details-container .service-img {
  width: 100%;
}
.details-section .details-container .item-img {
  width: 100%;
}
.details-section .details-container .list-group-item {
  text-align: left;
  padding-left: 0px;
  border-width: 0px;
  padding-top: 2px;
  padding-bottom: 2px;
}
.details-section .details-container .list-group-item.property-list {
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom: 1px solid #e4e4e4;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  margin-bottom: 0px;
}
.details-section .details-container .list-group-item.property-list .property {
  font-style: italic;
}
.details-section .details-container .list-group-item.property-list-no-un {
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  margin-bottom: 0px;
}
.details-section .details-container .list-group-item.property-list-no-un .property {
  font-style: italic;
}
.details-section .details-container .list-group-item .value {
  white-space: nowrap;
}
.details-section .details-container .list-group-item .sub-title {
  border-width: 0px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: gray;
  margin-top: 14px;
  margin-bottom: 4px;
}

.total-row {
  border-width: 0px;
}
.total-row.card.row-basket {
  cursor: default;
}
.total-row .fa-cart-plus:hover {
  cursor: pointer;
  color: red;
}
.total-row .item-price {
  text-align: right;
  font-weight: bold;
}
</STYLE>
<STYLE>
.shop .shop-button-col {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
}
.shop .arrow-icon {
  width: 15px;
  height: 15px;
  display: block;
}
.shop .carousel-control-next-icon1 {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='RED' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}
.shop .carousel-control-prev-icon1 {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='RED' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}
.shop .item-section,
.shop .service-section {
  padding-top: 12px;
}
.shop .item-section .title {
  padding-top: 20px;
  padding-bottom: 35px;
}
.shop .item-section .brands {
  padding-bottom: 0px;
}
.shop .item-section .brands .carousel {
  border-bottom: 1px solid #d7d2d2;
  padding-bottom: 10px;
}
.shop .item-section .brands .brand-name-cont {
  padding-left: 30px;
  padding-right: 30px;
}
.shop .item-section .brands .brand-name-cont .brand-name {
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #ffffff;
  color: gray;
  transition: color 200ms linear, background-color 200ms linear;
  margin-left: 2px;
  margin-right: 2px;
}
.shop .item-section .brands .brand-name-cont .brand-name:hover {
  background-color: #3899c6;
  color: white;
}
.shop .item-section .brands .brand-name-cont .brand-name.choosen {
  background-color: #3899c6;
  color: white;
}
.shop .item-section .items {
  padding-bottom: 0px;
  min-height: 414px;
  height: auto;
}
.shop .item-section .items .carousel {
  border-bottom: 1px solid #d7d2d2;
  padding-top: 15px;
  padding-bottom: 15px;
  min-height: 412px;
  height: auto;
}
.shop .item-section .items .carousel .carousel-inner {
  min-height: 380px;
}
.shop .item-section .items .item-slot {
  border: 1px solid rgba(1, 1, 1, 0);
  padding: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  padding-bottom: 5px;
  height: 123px;
}
.shop .item-section .items .item-slot .item-model {
  font-weight: bold;
  padding-top: 0px;
}
.shop .item-section .items .item-slot:hover {
  border: 1px solid #3591f2;
  cursor: pointer;
}
.shop .item-section .items .item-slot {
  border-width: 0px;
  border-radius: 10px;
  padding: 2px;
  color: gray;
}
.shop .item-section .items .item-slot:hover {
  border: 0px solid rgba(0, 0, 0, 0);
}
.shop .item-section .items .item-slot.choosen {
  border: 0px solid #3591f2;
  color: #1ea9cf;
}
.shop .item-section .items .item-slot.choosen .item-view {
  border: 1px solid #3591f2;
}
.shop .item-section .items #carouselitem .carousel-inner {
  min-height: 380px;
}
.shop .item-section .items .item-view {
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 8px;
  height: 100%;
  border-radius: 10px;
  padding-bottom: 5px;
}
.shop .item-section .items .item-view:hover {
  border: 1px solid #3591f2;
  padding: 8px;
  height: 100%;
  border-radius: 10px;
  padding-bottom: 5px;
}
.shop .item-section .colors {
  padding-bottom: 0px;
}
.shop .item-section .colors .carousel {
  border-bottom: 1px solid #d7d2d2;
  padding-top: 15px;
  padding-bottom: 15px;
}
.shop .item-section .colors .outer-dot {
  height: 35px;
  width: 35px;
  background-color: #bbb;
  border-radius: 50%;
  border: 1px solid black;
  margin: auto;
}
.shop .item-section .colors .outer-dot.choosen {
  background-color: red;
  border: 1px solid red;
}
.shop .item-section .colors .outer-dot .dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  MARGIN: AUTO;
}
.shop .item-section .colors .outer-dot {
  border-radius: 0px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0);
  transform: skew(-20deg, 0deg);
  padding: 0px;
  transform: skew(20deg, 0deg);
  width: 35px;
  height: 50px;
}
.shop .item-section .colors .outer-dot .dot {
  border-radius: 0px;
  display: inline-block;
  MARGIN: AUTO;
  border: 2px solid #4d4b4b;
  width: 35px;
  height: 50px;
}
.shop .item-section .colors .outer-dot:hover {
  background-color: transparent;
  border: 1px solid #00dbff;
  cursor: pointer;
}
.shop .item-section .colors .outer-dot.choosen {
  background-color: transparent;
  border: 1px solid #00dbff;
  transform: skew(0deg, 0deg) scale(1.3, 1.3);
  position: relative;
  z-index: 10000;
}
.shop .service-section .title {
  padding-top: 20px;
  padding-bottom: 35px;
}
.shop .service-section .brands {
  padding-bottom: 0px;
}
.shop .service-section .brands .brand-name-cont .brand-name.choosen {
  background-color: #3899c6;
  color: white;
}
.shop .service-section .brands .carousel {
  border-bottom: 1px solid #d7d2d2;
  padding-bottom: 10px;
}
.shop .service-section .brands .brand-name-cont {
  padding-left: 30px;
  padding-right: 30px;
}
.shop .service-section .brands .brand-name-cont .brand-name {
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  color: #716767;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  margin-left: 2px;
  margin-right: 2px;
  transition: color 200ms linear, background-color 200ms linear;
}
.shop .service-section .brands .brand-name-cont .brand-name:hover {
  background-color: #3899c6;
  color: white;
}
.shop .service-section .services {
  padding-top: 7px;
}
.shop .service-section .services .carousel .carousel-inner {
  min-height: 399px;
}
.shop .service-section .services .item-pair {
  border: 1px solid #ddcfcf;
  border-radius: 10px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  color: gray;
}
.shop .service-section .services .item-pair:hover {
  border: 1px solid #3591f2;
  cursor: pointer;
}
.shop .service-section .services .choosen {
  border: 1px solid #3591f2;
  color: #1ea9cf;
}
.shop .service-section .services #carousel-service {
  padding-top: 5px;
}
.shop .service-section .services #carousel-service .carousel-inner {
  min-height: 410px;
}
.shop .service-section .services .service-duration {
  margin: 0px;
  font-size: 18px;
  padding: 10px;
  font-weight: bold;
  font-style: italic;
  background-color: transparent;
}
.shop .service-section .services .service-slot {
  padding: 10px;
}
</STYLE>
<style>

BODY {
  overflow-y: scroll;
  height: 100%;
  -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none; 
                               
}
.card-header {
    max-height: 53px;
}
#accordion {
    box-shadow: 0px 2px 10px black;
}

.shop-main-row .limited-col-right {
  border-right: 1px solid #afd8f2;
}

@media only screen and (max-width: 970px) {

      .card-header {
          max-height: 	83px;
      }
     .limited-col-right {
         padding-right: 15px;
     }
     .limited-col-left {
         padding-left: 15px;		
     }
	 
     .shop-main-row .limited-col-right {
        border-right: 0px solid #afd8f2;
     }	
	 
	 .details-container  .limited-col-right { 
	   padding-top: 15px; 
	 }
	 .details-container	 .limited-col-left { 
	   padding-top: 15px;  
	 }
}
</style>


</style>

</head>



<body>

<script type="text/babel" 	src="js/src/data.js"></script>

<script  >

</script>

<div class="footer_wrapper" style="color: black;text-align: center;margin-top:30px;color: red;font-weight: bold;">         
 <p class="footer" > <?php include 'php_template/footer.php'; echo "and Chris B" ?> </p> 
<?php

   if ( isset($_GET['a']) ) {
	   echo '<h1 style="font-size: 18px;padding: 10px;padding-top: 0px;color: #f09;font-style: italic;text-align: right;margin-bottom:10px;"><a href="https://github.com/ChrikB/accordion-shop">see ES6 files on github</a></h1>';
   }
   
?> 
</div>

<div class="container"><div id="root"></div></div>
  



<script src="js/libs/react/react.production.16.4.1.min.js" ></script>
<script src="js/libs/react/react-dom.production.16.4.1.min.js" ></script>
<script src="js/libs/transpilers/babel.min.js"></script>
<script src="js/libs/redux/redux_4-0-0_dist_redux.min.js"></script>
<script src="js/libs/redux/react_redux-5-0-7.js"></script>
<script src="js/libs/polyfills/babel-polyfill.min.js"></script>
<script src="js/libs/polyfills/urlsearchparams.polyfill.js"></script>


<script type="text/babel" 	src="js/src/containers/shop.itemBrandList.js"></script>
<script type="text/babel" 	src="js/src/components/shop.itemBrand.js"></script>



<script type="text/babel" 	src="js/src/containers/shop.itemList.js"></script>
<script type="text/babel" 	src="js/src/components/shop.item.js"></script>


<script type="text/babel" 	src="js/src/containers/shop.itemColorList.js"></script>
<script type="text/babel" 	src="js/src/components/shop.itemColor.js"></script>

<script type="text/babel" 	src="js/src/containers/shop.serviceBrandList.js"></script>
<script type="text/babel" 	src="js/src/components/shop.serviceBrand.js"></script>

<script type="text/babel" 	src="js/src/containers/shop.serviceList.js"></script>
<script type="text/babel" 	src="js/src/components/shop.service.js"></script>


<script type="text/babel" 	src="js/src/containers/details.js"></script>
<script type="text/babel" 	src="js/src/containers/shop.js"></script>

<script type="text/babel" 	src="js/src/containers/basket.js"></script>
<script type="text/babel" 	src="js/src/components/basketRow.js"></script>





<script type="text/babel" 	src="js/src/main.js"></script>




 
<div id="spin-to-load" style="width: 48px;position: fixed;left: 50%;top: 50%;transform: translate(-50%, -50%);color: green;">
  <img src="ajax-loader.gif" usingclass="fa fa-spinner fa-spin fa-3x" width="50">
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">React.js + redux.js + bootstrap 4 + SASS + responsive</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">		
       <ul>
	    <li>Car images have been replaced with some free silhouettes from  <a target="_blank" href="https://vecteezy.com" rel="nofollow">Vecteezy.com!</a></li>
		<li>Car brands, models and properties are not real.</li>
		<li>ES6 and babel in action</li>
		<li>Image preloading before anything else.</li>
		<li>Intergation of jquery's asynch timers for accordion open/close with react component's rendering and updating</li>
		<li>There are 2 kinds of reducers using Redux.combineReducers. <br>One is for shop and the other for basket. <br>This increases perfomance and keep things separated</li>
		<li>The purpose of this , is not to demonstrate an eye-candy interface using perfect color balance and symmetry, but a functional e-shop layout with the power of  SASS + React.js + redux.js + bootstrap 4</li>
	   </ul>
	   <b>Thank you for visiting</b>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<script>
$('#exampleModalLong').modal('show');
</script>
</body>
</html> 
