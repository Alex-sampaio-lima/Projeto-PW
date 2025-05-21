//pedindo para o Dom averiguar os eventos acontecerem
document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: 'assets/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: 'assets/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: 'assets/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: 'assets/artista-gusttavo-lima.jpg' },
        { name: 'Luan Santana', image: 'assets/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: 'assets/artista-mateus-kauan.jpg' }

    ];
    
    const albumsData = [
        { name: 'White Noise (sleep & Relaxation Sounds)', artist: 'Sleepy John', image: 'assets/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo(Ao Vivo)', artist: 'Henrique & juliano', image: 'assets/album-ceu-explica.jpg ' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: 'assets/album-vida-loka.jpg ' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'assets/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'liniker', image: 'assets/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luisa Sonza', image:'assets/album-escandalo.jpg' }
    ];


    const musicasData = [
        { name: 'ClickBait', image: 'assets/musicas-dosPredios.jpg' },
        { name: 'Não temos Medo', image: 'assets/musicas-naoTemosMedo.jpeg' },
        { name: 'Mãe Solteira', image: 'assets/musicas-maeSolteira.jpg' },
        { name: 'Deixa eu ver se ta Lisinha', image: 'assets/musicas-deixaEuVer.jpeg' },
        { name: 'Taylor', image: 'assets/musicas-taylor.jpg' },
        { name: 'Three Little Birds', image: 'assets/musicas-bobMarley.jpg' }

    ];
    


    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')
    const musicasGrid = document.querySelector('.musicas-grid')

    //Sessão Artista
    // pegar artista por artista e colocar na tela
    artistsData.forEach( artist => {
        // criando uma div 
        const artistCard = document.createElement('div')
        // colocando uma class nela 
        artistCard.classList.add('artist-card')
        // estou inserindo o conteudo na div 
        artistCard.innerHTML = `
           <img src="${artist.image}" alt= "imagem do ${artist.name}">
           <div>
              <h3>${artist.name}</h3>
              <p>artista</p>
            </div>
        `
        //jogando as div no html 
        artistGrid.appendChild(artistCard)
    })

    //Sessão album
    // pegar album por album e colocar na tela
    albumsData.forEach(album => {
        // criando uma div 
        const albumCard = document.createElement('div')
        // colocando uma class nela 
        albumCard.classList.add('album-card')
        // estou inserindo o conteudo na div 
        albumCard.innerHTML = `
           <img src="${album.image}" alt= "imagem do ${album.name}">
           <div>
             <h3>${album.name}<h3>
             <p>${album.artist}</p>
           </div>
        `
        //jogando as div no html 
        albumsGrid.appendChild(albumCard)

    })

    musicasData.forEach( musicas => {
        // criando uma div 
        const musicasCard = document.createElement('div')
        // colocando uma class nela 
        musicasCard.classList.add('musicas-card')
        // estou inserindo o conteudo na div 
        musicasCard.innerHTML = `
           <img src="${musicas.image}" alt= "imagem do ${musicas.name}">
           <div>
              <h3>${musicas.name}</h3>
              <p>Música</p>
            </div>
        `
        //jogando as div no html 
        musicasGrid.appendChild(musicasCard)
    })

})





