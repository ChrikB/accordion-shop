class ItemColorList extends React.Component {
	
  render() {	
  
    if (!this.props.colors) { 
	  this.props.colors = []; 
	}
	if (!this.props.selectedColor) { 
	  this.props.selectedColor = null;
	}
	
	let carouselId = 'carousel-color' + this.props.index;
	
    return (
  	  <div class="col-12  col-sm-12 col-md-12 col-lg-12">
  		<div id={carouselId} class="carousel slide" data-ride="carousel" data-interval="false">
		  <div class="row">		  
    		<div class="col-2 col-sm-1 col-md-1  col-lg-1 align-self-center" ></div>	
			<div class="col-8 col-sm-10 col-md-10  col-lg-10">
			  <div class="row">			  
           	    { 				  
				  this.props.colors.map((x,k) => {    
           		    return <ItemColor  
         				     color={x} 
							 selectedColor={this.props.selectedColor}							 
							 itemColor={this.props.itemColor}
							 index={this.props.index}
							 hightlightItem={this.props.hightlightItem}
         				   />																		
           		  })
				}			   
			  </div>    
			</div> 
    		<div class="col-2 col-sm-1 col-md-1 col-lg-1 align-self-center" ></div>			
	      </div>
  	    </div>
  	  </div>	
  	);	
  }
  
}
