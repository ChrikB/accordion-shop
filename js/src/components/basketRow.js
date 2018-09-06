class BasketRow extends React.Component {	
  constructor(props) {
  	super();
    this.index = props.index;		
  }
  
  componentDidMount() {   
    let that = this;  
    $(that.collapsiverow).on('click', function(e) {
		
      if ($(e.target).hasClass('fa-times')) { return; }
	  
      let r = $(this).attr('data-target');
	  
	  $(that.collapsiverow).find('.fa-times').removeClass('clickable');
		
	  if ($("#collapseOnez" + that.index).hasClass('show')) {		  
	    $($(this).attr('data-target')).collapse('hide');		 		
	  } else {		  
	    $($(this).attr('data-target')).collapse('show');	
	  }
    });
	
	$("#collapseOnez" + that.index).on('shown.bs.collapse', function (e,r) {				  
	     store.dispatch({ type: 'OPEN_ACCORDION_ROW' , rowId: that.props.index });
	     $(that.collapsiverow).find('.fa-times').addClass('clickable');
	});	  
	$("#collapseOnez" + that.index).on('hidden.bs.collapse', function (e,r) {
	     store.dispatch({ type: 'CLOSE_ACCORDION_ROW' , rowId: that.props.index});
		 $(that.collapsiverow).find('.fa-times').addClass('clickable');
	});	 	
  }

  removeBasketRow = (ev) =>  {
      if (!$(ev.target).hasClass('clickable')) { return; }	  
	  ev.preventDefault();   	  
	  store.dispatch({ type: 'REMOVE_BASKET_ROW', rowId:  this.index });
  }
  

  
  render() { 
    let isHiddenImg,
	paddingLeft,
	itemIMG;
	
    if (!this.props.item.color) { this.props.item.color = this.props.item.colors[0]; }
	if (!this.props.item.color.img) {
	  itemIMG = null;
	} else {
	  itemIMG = ' img/CARS/' + this.props.item.dir + '/' + this.props.item.color.img;     
	}

  	let isHiddenClass = (this.props.isOpen) ? 'show collapse details-section' : ' collapse details-section'; 
	
	isHiddenImg = itemIMG ? '' : 'd-none'; 
	paddingLeft = itemIMG ? '' : '0px';
	
    return (  
      <div class="row card row-basket"   index={this.index}>	
          <div class="col-12  col-sm-12  col-md-12  col-lg-12  card-header" >
  	        <div class="row card-header-row"  aria-expanded="true" aria-controls="collapseOne"
			  ref={(ref) => { this.collapsiverow = ref; }}  
			  index={this.index}  
			  data-target={'#collapseOnez' + this.index} 
			>		     
               <div class="col-12 col-sm-6  col-md-6  col-lg-6 limited-col-right" >
  			      <div class="row item">
  				     <div class="col-sm-1  col-md-1  col-lg-1 d-none d-sm-none d-md-none d-lg-block" >
  					   <span class="row-basket-icon fa fa-circle-o-notch" aria-hidden="true" ></span>
  					 </div>
                       <div class="col-12 col-sm-12  col-md-12  col-lg-6" >
  					   <img class={"item-img" + ' ' + isHiddenImg } src={itemIMG} />
  					   <span class="item-name" style={{paddingLeft: paddingLeft}}>{this.props.item.model || '** No selection **' }</span>
  					 </div>
  					 <div class="col-5 col-sm-5  col-md-5  col-lg-5 item-price d-sm-none d-md-none" ></div>
  				  </div>
  			   </div>
               <div class="col-12 col-sm-12  col-md-6  col-lg-6 limited-col-left" >
  			      <div class="row service">				    
  					 <div class="col-6 col-sm-6  col-md-6  col-lg-6" >
  					   <img class="service-img" src={this.props.service.img}/>
  					   <span class="service-name">{this.props.service.name || '** No selection **' }</span>
  					 </div>
  					 <div class="col-4 col-sm-5  col-md-4  col-lg-5 service-price" >{this.props.price + '$'}</div>
  					 <div class="col-2 col-sm-1  col-md-2  col-lg-1 text-right icon-col">
  					   <span class="row-basket-icon fa fa-times clickable" aria-hidden="true" 
					     onClick={this.removeBasketRow}
					   ></span>
  					 </div>
  				  </div>
  			   </div>
            </div>
          </div> 		
          <div id={"collapseOnez" + this.index} class={isHiddenClass} aria-labelledby="headingTwo" data-parent="#accordion" >
            <div class="col-12 col-sm-12  col-md-12  col-lg-12  card-body SHOP" >

  		      <Details 
			    hidden={this.props.shopOpen}
			    index={this.index} 
				item={this.props.item} 
				service={this.props.service}
			  />

			  <Shop
	            hidden={!this.props.shopOpen}
                index={this.index}		
			    cars={this.props.store.shopData.cars} 
			    services={this.props.store.shopData.services} 
			    filters={this.props.store.shopData.filters} 
			    itemBrandList={this.props.store.shopData.itemBrandList} 
			    serviceBrandList={this.props.store.shopData.serviceBrandList} 				
			    highlight={
				  {
				    item: this.props.item , 
					service: this.props.service
				  }
				}
		      />  	
			  
  		    </div>			
  	      </div>
  	  </div>  
  	);	
  }  
  
  
  
  
  
  
  
  
  
  
}