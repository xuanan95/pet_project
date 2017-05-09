let express = require("express");
let Sequelize = require("sequelize");
let http  = require("http");
let app = express();

let server = http.createServer(app);
server.listen(3000);

app.use(express.static('public'));

var sequelize = new Sequelize('andeptrai', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'

});
// sequelize.authenticate().then(function () {
//   console.log('Connect to database successfully!')
// }).catch(function (error) {
//   console.log('Connect to database fail!', error)
// })

 var Posts = sequelize.define('Posts', {
  posts_title: Sequelize.STRING,
  posts_categories: Sequelize.STRING,
  posts_content: Sequelize.STRING
});

app.get('/api/posts',function(req,res){

	Posts.findAll({
		limit : 40,
		where : {
			
		},
		order : [['createdAt','DESC']]
	}).then(function(posts){res.send(posts)});
		
});

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/api/posts',function(req,res){
	// var post =  Posts.build({
 //  	posts_title : req.title,
 //  	posts_categories : req.ategories,
 //  	posts_content : req.content
 //  	});
 	console.log(req)
	// post.save().then(function(){
	// console.log('insert successfully');
	// },function(err){
	// console.log('insert fail',err);
	// });
})


