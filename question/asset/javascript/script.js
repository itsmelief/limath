$('.btn-to-qt').click(function() {
    PutarLagu()
    Aktifkan()

});

function Aktifkan() {
	document.getElementById("display-none").style.display = "none";
    document.getElementById("jumpscare").style.display = "block";
    document.getElementById("jumpscare").requestFullscreen();
};

function PutarLagu() {
    var lagu = document.getElementById("lagu");
    return lagu.paused ? lagu.play() : lagu.pause();
};

// ====================================================================================================== \\

// Mendisable Shortcut Keyboard
document.onkeydown = function(e) {
	if (event.keyCode == 123) {
		return false;
	}

	// CTRL + KEYBOARD CODE
	if (e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)) { // Tidak bisa membuka halaman riwayat browsing
		return false;
	}
	if (e.ctrlKey && e.keyCode == 'J'.charCodeAt(0)) { // Tidak bisa membuka halaman download
		return false;
	}
	if (e.ctrlKey && e.keyCode == 'R'.charCodeAt(0)) { // Tidak bisa memuat ulang halaman
		return false;
	}
	if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Tidak bisa melihat source code HTML
		return false;
	}
	if (e.ctrlKey && e.keyCode == 'N'.charCodeAt(0)) { // Tidak bisa membuka jendela baru Google Chrome
		return false;
	}
	if (e.ctrlKey && e.keyCode == 'T'.charCodeAt(0)) { // Tidak bisa membuka tab baru 
		return false;
	}
	if (e.ctrlKey && e.keyCode == 'W'.charCodeAt(0)) { // Tidak bisa menutup tab yang terbuka
		return false;
	}

	// Tidak bisa membuka tab selanjutnya (CTRL + ANGKA)
	if (e.ctrlKey && e.keyCode == '1'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == '2'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == '3'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == '4'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == '5'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == '6'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == '7'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == '8'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == '9'.charCodeAt(0)) {
		return false;
	}

	// CTRL + SHIFT + KEYBOARD CODE
	if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Tidak bisa inspect element
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Tidak bisa membuka developer tools
		return false;
	}
}