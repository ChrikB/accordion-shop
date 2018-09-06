class ServiceList extends React.Component {
   
  groupThem(children,active){	 
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
	components,	
	hc,
	m,
    groups = [],
	children = [],
	active = true,
	carouselId,
	isHiddenClass;
	
    components = this.props.services.map((b,k) => {
				
      hc = <Service 
			 index={k} 
			 service={b} 
			 highlightService={this.props.highlightService}
			 index={this.props.index}
		   />;
					  
	  if (this.props.highlightService.id && this.props.highlightService.id === b.id) { 
		highLightKey = k;  
		highLightComponent = hc; 
	  }					
	  return  hc;	   
    });
		

    while (components.length > 0) {
      children.push(components.shift());
      if (children.length === 6) {
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
	 
	carouselId = 'carousel-service' + this.props.index;
	
	if (highLightKey) {	  
	  carouselNumber = parseInt(highLightKey/6,10);
      $('#' + carouselId ).carousel(carouselNumber); 	
	} else {  
	  $('#' + carouselId ).carousel(0); 
	}
	
 	isHiddenClass = (groups.length > 1) ? '' : ' d-none ';

	
    return (
  	   <div class="col-12  col-sm-12 col-md-12 col-lg-12">
  	     <div id={carouselId} class="carousel slide carousel-service" data-ride="carousel" data-interval="false">
		   <div class="row">		  
    		 <div class="col-2 col-sm-1 col-md-1  col-lg-1 align-self-center" >
    		   <a class={isHiddenClass + "carousel-control-prev1"} href={'#' + carouselId} role="button" data-slide="prev">
    			 <span class="carousel-control-prev-icon1 arrow-icon" aria-hidden="true" ></span>
               </a>											
    		 </div>	
			 <div class="col-8 col-sm-10 col-md-10  col-lg-10">
			   <div class="carousel-inner" >{groups}</div> 
			 </div> 
    		 <div class="col-2 col-sm-1 col-md-1 col-lg-1 align-self-center" >
    		   <a class={isHiddenClass + "carousel-control-next1"} href={'#' + carouselId} role="button" data-slide="next" >
    		    <span class="carousel-control-next-icon1 arrow-icon" aria-hidden="true"></span>
               </a>					  					  
    		 </div>			
	      </div>
  		</div>
  	  </div>	
  	);		
  } 
}