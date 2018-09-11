class Basket extends React.Component {
  constructor(props) {
  	super();
	store.dispatch({ type: 'CREATE_UNIQUE_BRANDS' });	
  }
  
		
  commaCurrency(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
			
	
  render() { 
  
	let total = 0;
    let calcPrice;
	let days;

	return (
	  <div id="accordion" >						 
	    { 	
		  this.props.selected.map((x,k) => {
			if (x.item.model && x.service.name) {
			  if (x.service.pricePer === 'month') {
			    days = x.service.duration * 30 ;
			  }
			  else if (x.service.pricePer === 'year') {
			    days = x.service.duration * 365 ; 
			  }
			  else {
			  	 days = x.service.duration ;  
			  }
			  calcPrice = parseInt((x.item.price * x.service.price) * days - (days * 0.001),10);
			} else {
			    calcPrice = 0;	
			}
			total += calcPrice;
			  
			return <BasketRow  
			         index={k} 
			  		 item={ x.item || {} } 
			  		 service={ x.service || {} } 
			  		 price={this.commaCurrency(calcPrice)}
			  		 hasShop={x.hasShop}
			  		 shopOpen={x.shopOpen}
					 isOpen={x.isOpen}
                     store={store.getState()}									 
			  	   />																		
		  })
		}  
        <div class="row card row-basket total-row" >	
          <div class="col-12  col-sm-12  col-md-12  col-lg-12  card-header" >
            <div class="row card-header-row">		     
              <div class="col-12 col-sm-6  col-md-6  col-lg-6 limited-col-right" >
                <div class="row item">
                   <div class="col-7 col-sm-7  col-md-7  col-lg-7 item-name-col">
                     <span style={{textAlign: 'center', width: '47px'}}class="row-basket-icon fa fa-plus-circlea fa-cart-plus" aria-hidden="true" 
                       onClick={(ev) => {store.dispatch({ type: 'ADD_BASKET_ROW' });}}
                      ></span>				   
                	  <span class="item-name">Pick</span>
                   </div>
                   <div class="col-5 col-sm-5  col-md-5  col-lg-5 d-none d-sm-none d-md-none d-lg-block item-price" ></div>
                </div>
              </div>
              <div class="col-12 col-sm-6  col-md-6  col-lg-6 limited-col-left" >
                <div class="row service">				    
                  <div class="col-6 col-sm-5  col-md-6  col-lg-6" >
                    <img class="service-img" />
                	<span class="service-name"></span>
                  </div>
                  <div class="col-6 col-sm-7  col-md-6  col-lg-6 item-price">{'Total : ' + this.commaCurrency(total) + ' $ '}</div>
                </div>
              </div>
            </div>
          </div> 				
        </div>
		
      </div>	
	);		
  }  
}