class ItemList extends React.Component {
  
  
  
  componentDidMount() {
    let id = '#collapseOnez' + this.props.index; 
	  
	$(id  + ' .items').eq(0).on("mouseenter",function(e){
	  e.stopPropagation(); 
      $(id  + ' .items .carousel-control-prev-icon1').removeClass("d-none"); 
      $(id  + ' .items .carousel-control-next-icon1').removeClass("d-none");  	
	});
	$(id  + ' .items').eq(0).on("mouseleave",function(e){
      $(id  + ' .items .carousel-control-prev-icon1').addClass("d-none"); 
      $(id  + ' .items .carousel-control-next-icon1').addClass("d-none");  	    
	});	  
  }
  
  groupThem(children,active) {	
  
    let cl =  active ? 'active' : '';
	
	return(	
	  <div class={`carousel-item  ${cl} `}>
	    <div class="mr-0 ml-0 row">
		  <div class="col-sm-12 col-md-12  col-lg-12">
			<div class="row">
			  {children}
			</div>
		  </div>
		</div>
	  </div>		
	);  	  
  }
  
   
  render() { 	

    let highLightKey = null,
	highLightComponent = 0,
	carouselNumber = 0,
	groups = [],
	children = [],
	active = true,
	hc,
	m,
	components,
	carouselId,
	isHiddenClass;
	
    components = this.props.items.map((b,k) => { 			   
      hc = <Item 
			car={b} 
			index={k} 
			highlightItem={this.props.highlightItem}
			index={this.props.index}
		   />;		   
	  if (this.props.highlightItem.id && this.props.highlightItem.id === b.id) { 
		  highLightKey = k;  
		  highLightComponent = hc; 
	  }	   					   
	  return hc;	   
    });
		
    while (components.length > 0) {
      children.push(components.shift());
      if (children.length === 9) {
	    m = this.groupThem(children,active); 
        groups.push(m);
        children = [];
		active = false;
       }
     }
     
    if (children.length > 0 ) {
	  m = this.groupThem(children,active);
      groups.push(m);
    }
 	
	
	carouselId = 'carouselitem' + this.props.index;	
	
	if (highLightKey) {
	  carouselNumber = parseInt(highLightKey/9,10); 
	  $('#' + carouselId).carousel(carouselNumber);
	} else {  
	  $('#' + carouselId).carousel(0);
	}
	
 	isHiddenClass = (groups.length > 1) ? '' : ' d-none ';
	
    return (
  	  <div class="col-12  col-sm-12 col-md-12 col-lg-12">
  		<div id={carouselId} class="carousel slide carouselitem" data-ride="carousel" data-interval="false">
		  <div class="row">		  
    		<div class="col-2 col-sm-1 col-md-1  col-lg-1 align-self-center" >
    		  <a class={isHiddenClass + 'carousel-control-prev1'} href={'#' + carouselId} role="button" data-slide="prev">
    		    <span class="carousel-control-prev-icon1 arrow-icon d-none" aria-hidden="true" ></span>
              </a>											
    		</div>	
			<div class="col-8 col-sm-10 col-md-10  col-lg-10" >
			  <div class="carousel-inner">{ groups }</div> 
			</div> 
    		<div class="col-2 col-sm-1 col-md-1 col-lg-1 align-self-center" >
    		  <a class={isHiddenClass + 'carousel-control-next1'} href={'#' + carouselId} role="button" data-slide="next" >
    		    <span class="carousel-control-next-icon1 arrow-icon d-none" aria-hidden="true"></span>
              </a>					  					  
    		</div>			
	      </div>
  		</div>
  	  </div>	
  	);		
  } 
}