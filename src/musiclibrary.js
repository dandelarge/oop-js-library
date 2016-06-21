//Main Library Class
function MusicLibrary(global) {
	this.g = global || window;
	this.lib = [];

	this._renderAlbumsList = function(lib){
		var librarySection = document.getElementById('albumsSection');

		for (var i = 0; i < lib.length; i++) {
			var libraryThumbnail = document.createElement('article');
			libraryThumbnail.className ='album';
			libraryThumbnail.setAttribute('data-albumNo', i);
			//saving this Object's scope so we can use it inside the event listener callback
			var self = this;
			//Using IIFE so we keep the index of each Element after the for loop ends
			libraryThumbnail.addEventListener('click', (function(i){
				//here we handle the actual functionality
				return function() {
					self.lib[i].selectAlbum();
				};
			})(i));
			var libraryTemplate = 
				'<img class="album-img" src="" />'+
				'<h3 class="album-title"></h3>'+
				'<span class="album-artist"></span>';

			libraryThumbnail.innerHTML = libraryTemplate;
			librarySection.appendChild(libraryThumbnail);
			var albumImg = libraryThumbnail.getElementsByClassName('album-img')[0];
			var albumTitle = libraryThumbnail.getElementsByClassName('album-title')[0];
			var albumArtist = libraryThumbnail.getElementsByClassName('album-artist')[0];

			albumImg.setAttribute('src', lib[i].img);
			albumTitle.innerHTML = lib[i].aName;
			albumArtist.innerHTML = lib[i].artist;
		}
	}
}

//init function, gets everything we need for the library
MusicLibrary.prototype.init = function (albumList) {
	this.lib = albumList || [];

	//No albums? no problem creating an empty one for demo purposes
	if(this.lib.length === 0) {
		this.lib.push(new Album());
		console.log(this.lib)
	}

	var self = this;
	ready(function(){
		self._renderAlbumsList(self.lib);

	});
};

//album function right here
function Album(name, artist, img) {
	this.aId = parseInt(Date.now());
	this.aName = name || 'No Name';
	this.artist = artist || 'no Artist';
	this.img = img || 'metallica/(1991) Metallica.jpg'
	this.songs = [];

	this._renderAlbumDetails = function() {
		var albumDetails = document.getElementById('albumDetails');
		var detailsTemplate = '<article class="album-generals">' +
				'<h2 class="album-name"></h2>' +
				'<span class="album-artist"></span>' +
			'</article>' +
			'<ul class="songs-list">' +
			'</ul>';
		albumDetails.innerHTML = detailsTemplate;
		var title = albumDetails.getElementsByClassName('album-name')[0];
		var artist = albumDetails.getElementsByClassName('album-artist')[0];
		var songList = albumDetails.getElementsByClassName('songs-list')[0];
		var songListTemp = '';

		title.innerHTML = this.aName;
		artist.innerHTML = this.artist;

		for (var i = 0; i < this.songs.length; i++) {
			songListTemp += '<li class="song">' + this.songs[i].songName + '</li>';
		}

		songList.innerHTML = songListTemp;
		songElems = songList.getElementsByClassName('song');

		var self = this;
		for (var i = 0; i < songElems.length; i++) {
			songElems[i].addEventListener('click', (function(i){
				return function(){
					self.songs[i].selectSong();
				};
			})(i));
		};
	}
}

//add songs to the list
Album.prototype.addSongList = function (songList) {
	var self = this;
	songList.forEach(function(curr){
		self.songs.push(curr);
	});
}

//select an album and place the contents on the details section
Album.prototype.selectAlbum = function () {
	var self = this;
	ready(function(){
		self._renderAlbumDetails();
	});
}

function Song(name, path, album) {
	this.songName = name || 'No name';
	this.path = path || '';
	this.album = album || '';

	this._renderPlayer = function () {
		var nowPlayingElem = document.getElementById('nowPlaying'),
			songTitleElem = document.getElementById('songTitle'),
			sourceSong = document.createElement('source'),
			player = document.getElementById('audioControl'),
			currentSource = player.getElementsByTagName('source')[0];
		
		songTitleElem.innerHTML = this.songName;
		sourceSong.setAttribute('src', this.path);
		sourceSong.setAttribute('type', 'audio/mpeg');

		player.innerHTML = '';
		player.appendChild(sourceSong);

		player.load();
		player.play();
	}
} 

Song.prototype.selectSong = function() {
	var self = this;
	ready(function(){
		self._renderPlayer();
	});
}

//Instantiating Music Library
var $m = new MusicLibrary();