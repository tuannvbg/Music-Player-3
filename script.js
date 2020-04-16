var fetchMusic=$("#fetchMusic");
$("#button").click(function(){
	var song=$(".searchSong").val();

$.ajax({
	dataType : "jsonp",
	url :  "https://itunes.apple.com/search?term="+song+"&limit="+16,

	async : true,
	success : function(data){
    var results=data.results;
			 console.log(results);
       for(let result of results)
       {
         fetchMusic.append(`
            <div class="card shadow-lg " style="width:18rem; margin:30px;">
                 <img src="${result.artworkUrl100.replace('100x100', '2180x2180')}" class="card-img-top"/>
                 <div class="justify-content-center align-self-center">
                 <div class="class="audioSection1">
                 <audio controls style="width:250px;height:60px;border-style:none;">
                 <source src="${result.previewUrl}"/>
                 </audio>
                 </div>
                 <p>${result.artistName}</p>
                 </div>
            </div>


           `)
       }
		// showResults(data.results);
	}
});
});

// $("#searchResults").empty();
// var searchRequest = $("#search")[0];
// var specificSearch = searchRequest.value;
//
//
//   if (specificSearch == ""){
//     return;
