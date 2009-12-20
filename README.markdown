## Demos

* [Display Only](http://github.com/ssimasanti/ratingbox/raw/master/display.html)
* [Basic Form](http://github.com/ssimasanti/ratingbox/raw/master/basic-form.html)
* [Ajax Form](http://github.com/ssimasanti/ratingbox/raw/master/ajax-form.html)

## Installation

Add styles.css to your header
			
			<link rel="stylesheet" href="ratingbox/styles.css" type="text/css" media="screen" title="no title" charset="utf-8">
			
Add ratingbox library: (in edit page only)


			<script src="prototype/prototype.js" type="text/javascript" charset="utf-8"></script>
			<script src="ratingbox/scriptaculous.ratingbox.min.js" type="text/javascript" charset="utf-8"></script>
			
			
** Doesn't require or provide scriptaculous. I use this name just to remind myself that this library compat with the scriptaculous.


## Usage

### To display the stars:

			<span class="stars pts-10" title="10/10">10 Points</span>
			<span class="stars pts-8" title="8/10">8 Points</span>

### In edit form:
			<select name="rating" id="id_rating">
				<option value="10">10/10</option>	
				<option value="9">9/10</option>	
				<option value="8">8/10</option>	
				<option value="7">7/10</option>	
				<option value="6" selected="selected">6/10</option>	
				<option value="5">5/10</option>	
				<option value="4">4/10</option>	
				<option value="3">3/10</option>	
				<option value="2">2/10</option>	
				<option value="1">1/10</option>	
				<option value="0">0/10</option>	
			</select>

			<script type="text/javascript" charset="utf-8">
			document.observe("dom:loaded", function () {
				new RatingBox('id_rating');
			})
			</script>


## Options

From demo/ajax-form.html

			new RatingBox('id_rating', {
				onChange: function (e, value) {	
					var labels = {
						1: 'Terrible', 
						2: 'Terrible', 
						3: 'Poor', 
						4: 'Poor', 
						5: 'Average', 
						6: 'Average', 
						7: 'Good', 
						8: 'Good', 
						9: 'Excellent',
						10: 'Excellent'
					};
					if(labels[value]){
						$('rating-status').update(labels[value]);
					}
				},
				onRate: function(e, value){
					$('rating-form').request();
					alert("Add ajax hook here, point=" + value);
				}
			});		

