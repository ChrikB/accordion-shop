class ServiceBrand extends React.Component {	
  constructor(props) {
    super();
    this.brandName = props.param;
  }
  
  
  highlight(ev) {	
      let enabled = $(ev.target).hasClass('choosen');  
	  $('.service-section .brand-name').removeClass('choosen');
	  if (!enabled) {
	    $(ev.target).addClass('choosen');
		return true;
	  }
	  return false;
  }
  
  
  render() {
	  
    let isChoosen = (this.props.filters.serviceBrand && this.props.filters.serviceBrand === this.brandName) ? ' choosen ' : '';

	if (!this.props.filters.serviceBrand) {
	  $('.service-section .brand-name').removeClass('choosen');	
	}  	  
	
    return (
		<div class={isChoosen + ' col brand-name'}
		  onClick={	(ev) => {
			  		   let brandName = '';
		               if (this.highlight(ev)) {
						  brandName = this.brandName;  
					   } 
			           store.dispatch({ type: 'FILTER_SERVICES', serviceType: brandName });
					} 
		  }
		>{this.brandName}</div>		        
	);
  }
}