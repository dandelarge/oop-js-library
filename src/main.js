var metallica = new Album('Black Album', 'Metallica');
var queen = new Album('Greatest Hits', 'Queen', 'queen/Folder.jpg');

var metallicaSongs = [
	new Song('Enter Sandman', 'metallica/01 - Enter Sandman.mp3'),
	new Song('Sad but true', 'metallica/02 - Sad But True.mp3'),
	new Song('Holier than thou', 'metallica/03 - Holier Than Thou.mp3'),
];

var QueenSongs = [
	new Song('we will rock you', 'queen/01 We Will Rock You.mp3'),
	new Song('We are the champions', 'queen/02 We Are the Champions.mp3'),
	new Song('Radio Gaga', 'queen/03 Radio Ga Ga.mp3')
];

metallica.addSongList(metallicaSongs);
queen.addSongList(QueenSongs);

var albumsArr = [metallica, queen];

$m.init(albumsArr);

