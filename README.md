# oop-js-library
Ejemplito, chiquito de una librería con javascript orientado a objetos.

##Before anything...
This library is dependant in a second library (this is bad and I should feel bad, 
I know, but this is not pro code anyway) called loadStacker that is a evry burden 
and simplified version of jQuery's $(document).ready() which stacks any possible 
method or function that may need to happen after window.load event and triggers them
one after another.

##Usage:
**WARNING**
This is for _demo purposes only_. The design is sloppy and has harcoded stuff on it. 
Not to be taken seriously

Watch index.html for srcipt order of scripts. you need loadStacker for the musicLibrary
so you add that script first. Then the library and finally your own code. 

Make sure to have a template with the following DOM structure:
```
#albumSection
#albumDetails
#nowPlaying
   |_#songTitle
   |_audio#audioControl
```

This should look something like this:
```
<section id="albumsSection"></section>
<section id="albumDetails"></section>
<section id="nowPlaying">
	<span id="songTitle"></span>
	<audio controls id="audioControl"></audio>
</section>
```

##Setting up an Album
You can set up an album just by creating a new Album instance with it's propper Album title
and Artist Name arguments
```
var metallica = new Album('Black Album', 'Metallica');
``` 

##Adding songs
Once an Album instance is on, we can add a tracklist to it. Each song is an instance of
Song object.
```
var metallicaSongs = [
	new Song('Enter Sandman', 'metallica/01 - Enter Sandman.mp3'),
	new Song('Sad but true', 'metallica/02 - Sad But True.mp3'),
	new Song('Holier than thou', 'metallica/03 - Holier Than Thou.mp3'),
];

metallica.addSongList(metallicaSongs);
```

##Initialize the albums!
Once you have that, you can initialize the library by using $m.init() method. This
particular method takes an array of Album objects as only argument.
```
$m.init([metallica]);
```

#Method Reference

##MusicLibrary
An instance of this object is already returned by the library. This is called $m

###init
**arguments:**
albumList: _array_

**returns**
nothing

##Album

###selectAlbum
**arguments:**
none

**returns**
nothing

###addSongList
**arguments:**
songList: _array_

**returns**
nothing

##Song
###selectAlbum
**arguments:**
none

**returns**
nothing