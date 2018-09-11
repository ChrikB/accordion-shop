class Item extends React.Component {
	
  updateData = (ev) =>  {
    store.dispatch({ type: 'UPDATE_SELECTION', item: this.item, index: this.props.index });  	
  }
  
  render() { 
  
    this.item = this.props.car;
  	let isChoosen = (this.props.highlightItem && this.props.highlightItem.id === this.props.car.id) ? ' choosen ' : '';
	
    return (
      <div 
	    class={ isChoosen + "col-sm-4 col-md-4  col-lg-4 item-slot"} 
		onClick={ this.updateData }
	  > 
	    <div class="item-view">
		  <div class="item-model text-center">{this.item.model}</div>
	      <img 
			src={' img/CARS/' + this.item.dir + '/' + this.item.dir +'.blue.svg'}
			width="80" 
			height="80"
		    style={{ width: "100%" }}
		  />
		</div>
	  </div>
	);
  }
}