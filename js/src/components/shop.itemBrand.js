class ItemBrand extends React.Component {	
  constructor(props) {
    super();
    this.brandName = props.param;
  }

  
  highlight(ev) {	
    let enabled = $(ev.target).hasClass('choosen');  
	$('.item-section .brand-name').removeClass('choosen');
	if (!enabled) {
	  $(ev.target).addClass('choosen');
      return true;
	}
	return false;
  }
  
  
  render() {

	let isChoosen = (this.props.filters.itemBrand && this.props.filters.itemBrand === this.brandName) ? ' choosen ' : '';
	
	if (!this.props.filters.itemBrand) {
	  $('.item-section .brand-name').removeClass('choosen');	
	}
	
    return (
	  <div class={isChoosen + 'col brand-name'}
		 onClick={	(ev) => { 
		               let brandName = null;
		               if (this.highlight(ev)) {
						  brandName = this.brandName;  
					   } 
					   store.dispatch({ type: 'FILTER_ITEMS', brand: brandName });
					} 
		 }
	  >{this.brandName}</div>		        
	);
  }
}