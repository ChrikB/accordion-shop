class ItemColor extends React.Component {
	
  updateData = (ev) =>  {
	store.dispatch({ type: 'UPDATE_SELECTION', selectedColor: this.props.color.code, color: this.props.color , index: this.props.index}); 
  }
	
	
  render() { 
  
	let isChoosen = (this.props.itemColor && this.props.itemColor.code === this.props.color.code) ? ' choosen ' : '';
	
    return (
      <div class="align-items-center text-center"> 
	    <div 
		  class={'outer-dot  d-flex align-items-center' + isChoosen } 
		  onClick={	this.updateData }
		 >
	       <span 
		     class={'dot' + isChoosen} 
			 style={{ backgroundColor: this.props.color.code }} 
		   ></span>
		</div>
	  </div>
    );
  }  
}

