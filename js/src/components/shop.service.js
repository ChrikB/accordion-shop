class Service extends React.Component {

  render() {
	  
	this.service = this.props.service;
	let className = (this.props.highlightService && this.props.highlightService.id === this.service.id) ? 'choosen' : '';  
	
    return (
      <div class=" col-sm-12 col-md-6 col-lg-6 service-slot">
		<div 
			class={ className + " item-pair" } 
		    onClick={(ev) => {
				    store.dispatch({ type: 'UPDATE_SELECTION', service: this.service, index: this.props.index});} 
			}
		>
		  <h5 class="service-duration">{this.service.duration + ' ' + this.service.pricePer + 's'}</h5>
		</div>
	  </div>
	);
  }
}