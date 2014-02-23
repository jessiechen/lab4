
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index',{
  	'projects':[
  	    {  	
  	    	'name':'a thousand stars',
  	        'image':'lorempixel.people.1.jpeg',
        	'id':'project1'
  	    },
  	    {  	
  	    	'name':"I'm here",
  	        'image':'lorempixel.city.1.jpeg',
        	'id':'project2'
  	    },
  	]

  });
};