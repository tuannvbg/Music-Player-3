// Feching Music Using Api

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
	}
});
});
    // Adding Music To Images

window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll("#pads div");
  pads.forEach((pad, index) => {
    pad.addEventListener("mouseover", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
		pad.addEventListener("mouseout", function() {
			sounds[index].pause();
		});
  });
});
