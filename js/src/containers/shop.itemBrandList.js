class ItemBrandList extends React.Component {	
  constructor(props) {
  	super();
	this.itemBrandList = props.itemBrandList;
  }
  
  
  groupThem(children,active){	 
    let cl =  active ? 'active' : '';
	return(	
	  <div class={`carousel-item  ${cl} `}>
		<div class="row">
		  <div class="col-12 col-sm-12 col-md-12  col-lg-12 col-xl-12 brand-name-cont">
			<div class="row">
			  {children}
			</div>
		  </div>
		</div>
	  </div>		
	);  	  
  }
  

  render() { 	
    let m,
    groups = [],
    children = [],
	active = true,
	isHiddenClass,
	carouselId,
	components;
	
    components = this.itemBrandList.map((b,k) => {
      return <ItemBrand 
		       param={b} 
			   filters={this.props.filters} 
			  />;
    });
		

    while (components.length > 0) {
         children.push(components.shift());
         if (children.length === 4) {
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
 	
	isHiddenClass = (groups.length > 1) ? '' : ' d-none ';
	carouselId = 'carousel-brand' + this.props.index;
	
    return (
  	  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
  		<div id={carouselId} class="carousel slide" data-ride="carousel" data-interval="false">
		  <div class="row">		  
    		<div class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-1 " >
    		  <a class={isHiddenClass + 'carousel-control-prev1'} href={'#' + carouselId} role="button" data-slide="prev">
    			 <span class="carousel-control-prev-icon1 arrow-icon" aria-hidden="true" ></span>
              </a>											
    		</div>	
			<div class="col-8  col-sm-10 col-md-10  col-lg-10  col-xl-10">
			  <div class="carousel-inner">{ groups }</div> 
			</div> 
    		<div class="align-self-center col-2 col-sm-1 col-md-1 col-lg-1 col-xl-1">
    		  <a class={isHiddenClass + 'carousel-control-next1'} href={'#' + carouselId} role="button" data-slide="next" >
    			<span class="carousel-control-next-icon1 arrow-icon" aria-hidden="true"></span>
              </a>					  					  
    		</div>			
	      </div>
  		</div>
  	  </div>	
  	);		
  } 
}