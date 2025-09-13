// GlooPlay - Legal Movie Streaming Platform
// Using public domain and Creative Commons licensed content

class GLOOPLAY {
    constructor() {
        this.movies = [];
        this.filteredMovies = [];
        this.currentGenre = 'all';
        this.init();
    }

    async init() {
        await this.loadMovies();
        this.setupEventListeners();
        this.displayMovies();
    }

    // Legal movie database with public domain and Creative Commons content
    async loadMovies() {
        this.movies = [
            {
                id: 1,
                title: "Night of the Living Dead",
                year: 1968,
                genre: "horror",
                rating: 7.9,
                description: "A group of people hide from bloodthirsty zombies in a farmhouse. Classic horror film in the public domain.",
                poster: "https://archive.org/download/night_of_the_living_dead/night_of_the_living_dead.thumbs/night_of_the_living_dead_000001.jpg",
                videoUrl: "https://archive.org/download/night_of_the_living_dead/night_of_the_living_dead_512kb.mp4"
            },
            {
                id: 2,
                title: "The Cabinet of Dr. Caligari",
                year: 1920,
                genre: "horror",
                rating: 8.0,
                description: "A masterpiece of German Expressionist cinema. This silent horror film is in the public domain.",
                poster: "https://archive.org/download/caligari/caligari.thumbs/caligari_000001.jpg",
                videoUrl: "https://archive.org/download/caligari/caligari_512kb.mp4"
            },
            {
                id: 3,
                title: "Metropolis",
                year: 1927,
                genre: "sci-fi",
                rating: 8.3,
                description: "Fritz Lang's groundbreaking silent science-fiction epic. Public domain masterpiece.",
                poster: "https://archive.org/download/Metropolis_201811/Metropolis.thumbs/Metropolis_000001.jpg",
                videoUrl: "https://archive.org/download/Metropolis_201811/Metropolis.mp4"
            },
            {
                id: 4,
                title: "Nosferatu",
                year: 1922,
                genre: "horror",
                rating: 7.9,
                description: "F.W. Murnau's unauthorized adaptation of Dracula. Classic German expressionist horror.",
                poster: "https://archive.org/download/nosferatu_murnau/nosferatu_murnau.thumbs/nosferatu_murnau_000001.jpg",
                videoUrl: "https://archive.org/download/nosferatu_murnau/nosferatu_murnau_512kb.mp4"
            },
            {
                id: 5,
                title: "The Great Dictator",
                year: 1940,
                genre: "comedy",
                rating: 8.4,
                description: "Charlie Chaplin's satirical comedy about fascism. A timeless classic.",
                poster: "https://archive.org/download/CC_1940_The_Great_Dictator/CC_1940_The_Great_Dictator.thumbs/CC_1940_The_Great_Dictator_000001.jpg",
                videoUrl: "https://archive.org/download/CC_1940_The_Great_Dictator/CC_1940_The_Great_Dictator_512kb.mp4"
            },
            {
                id: 6,
                title: "Plan 9 from Outer Space",
                year: 1959,
                genre: "sci-fi",
                rating: 4.0,
                description: "Often called the worst movie ever made, this B-movie has gained cult status.",
                poster: "https://archive.org/download/Plan9FromOuterSpace/Plan9FromOuterSpace.thumbs/Plan9FromOuterSpace_000001.jpg",
                videoUrl: "https://archive.org/download/Plan9FromOuterSpace/Plan9FromOuterSpace.mp4"
            },
            {
                id: 7,
                title: "Little Shop of Horrors",
                year: 1960,
                genre: "comedy",
                rating: 6.3,
                description: "Roger Corman's low-budget comedy about a man-eating plant. Shot in just two days!",
                poster: "https://archive.org/download/TheLittleShopOfHorrors_201611/TheLittleShopOfHorrors.thumbs/TheLittleShopOfHorrors_000001.jpg",
                videoUrl: "https://archive.org/download/TheLittleShopOfHorrors_201611/TheLittleShopOfHorrors.mp4"
            },
            {
                id: 8,
                title: "The Phantom of the Opera",
                year: 1925,
                genre: "drama",
                rating: 7.6,
                description: "Lon Chaney's iconic performance in this silent horror classic.",
                poster: "https://archive.org/download/PhantomOfTheOpera1925/PhantomOfTheOpera1925.thumbs/PhantomOfTheOpera1925_000001.jpg",
                videoUrl: "https://archive.org/download/PhantomOfTheOpera1925/PhantomOfTheOpera1925.mp4"
            },
            {
                id: 9,
                title: "Carnival of Souls",
                year: 1962,
                genre: "horror",
                rating: 7.1,
                description: "An atmospheric psychological horror film that influenced many later filmmakers.",
                poster: "https://archive.org/download/CarnivalOfSouls_1962/CarnivalOfSouls.thumbs/CarnivalOfSouls_000001.jpg",
                videoUrl: "https://archive.org/download/CarnivalOfSouls_1962/CarnivalOfSouls.mp4"
            },
            {
                id: 10,
                title: "The Last Man on Earth",
                year: 1964,
                genre: "sci-fi",
                rating: 6.8,
                description: "Vincent Price stars in this post-apocalyptic vampire film based on 'I Am Legend'.",
                poster: "https://archive.org/download/TheLastManOnEarth/TheLastManOnEarth.thumbs/TheLastManOnEarth_000001.jpg",
                videoUrl: "https://archive.org/download/TheLastManOnEarth/TheLastManOnEarth.mp4"
            },
            {
                id: 11,
                title: "Charade",
                year: 1963,
                genre: "drama",
                rating: 7.9,
                description: "Cary Grant and Audrey Hepburn star in this romantic thriller.",
                poster: "https://archive.org/download/Charade_1963/Charade_1963.thumbs/Charade_1963_000001.jpg",
                videoUrl: "https://archive.org/download/Charade_1963/Charade_1963.mp4"
            },
            {
                id: 12,
                title: "Santa Claus Conquers the Martians",
                year: 1964,
                genre: "comedy",
                rating: 2.7,
                description: "A wonderfully terrible holiday sci-fi comedy that's become a cult classic.",
                poster: "https://archive.org/download/Santa_Claus_Conquers_the_Martians/Santa_Claus_Conquers_the_Martians.thumbs/Santa_Claus_Conquers_the_Martians_000001.jpg",
                videoUrl: "https://archive.org/download/Santa_Claus_Conquers_the_Martians/Santa_Claus_Conquers_the_Martians.mp4"
            }
        ];

        // Add some demo placeholder posters for movies without valid images
        this.movies = this.movies.map(movie => ({
            ...movie,
            poster: movie.poster || `https://via.placeholder.com/300x450/1a1a1a/ffffff?text=${encodeURIComponent(movie.title)}`
        }));

        this.filteredMovies = [...this.movies];
        this.hideLoading();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchMovies(e.target.value);
        });

        // Genre filters
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterByGenre(e.target.dataset.genre);
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Modal functionality
        const modal = document.getElementById('videoModal');
        const closeBtn = document.getElementById('closeModal');
        
        closeBtn.addEventListener('click', () => {
            this.closeModal();
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    displayMovies() {
        const moviesGrid = document.getElementById('moviesGrid');
        moviesGrid.innerHTML = '';

        if (this.filteredMovies.length === 0) {
            moviesGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px; color: #666;">
                    <i class="fas fa-film" style="font-size: 3rem; margin-bottom: 20px;"></i>
                    <p style="font-size: 1.2rem;">No movies found matching your criteria.</p>
                </div>
            `;
            return;
        }

        this.filteredMovies.forEach(movie => {
            const movieCard = this.createMovieCard(movie);
            moviesGrid.appendChild(movieCard);
        });
    }

    createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="movie-poster" style="background-image: url('${movie.poster}')">
                <div class="play-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="rating">${movie.rating}/10</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            this.openModal(movie);
        });

        return card;
    }

    openModal(movie) {
        const modal = document.getElementById('videoModal');
        const videoPlayer = document.getElementById('videoPlayer');
        const movieTitle = document.getElementById('movieTitle');
        const movieDescription = document.getElementById('movieDescription');
        const movieYear = document.getElementById('movieYear');
        const movieGenre = document.getElementById('movieGenre');
        const movieRating = document.getElementById('movieRating');

        // Set movie details
        movieTitle.textContent = movie.title;
        movieDescription.textContent = movie.description;
        movieYear.textContent = movie.year;
        movieGenre.textContent = movie.genre.toUpperCase();
        movieRating.textContent = `${movie.rating}/10`;

        // Set video source
        videoPlayer.src = movie.videoUrl;
        videoPlayer.poster = movie.poster;

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Auto-play video (if allowed by browser)
        setTimeout(() => {
            videoPlayer.play().catch(e => {
                console.log('Autoplay prevented:', e);
            });
        }, 500);
    }

    closeModal() {
        const modal = document.getElementById('videoModal');
        const videoPlayer = document.getElementById('videoPlayer');

        // Pause and reset video
        videoPlayer.pause();
        videoPlayer.currentTime = 0;

        // Hide modal
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    searchMovies(query) {
        const searchTerm = query.toLowerCase().trim();
        
        if (searchTerm === '') {
            this.filteredMovies = this.movies.filter(movie => 
                this.currentGenre === 'all' || movie.genre === this.currentGenre
            );
        } else {
            this.filteredMovies = this.movies.filter(movie => {
                const matchesSearch = movie.title.toLowerCase().includes(searchTerm) ||
                                    movie.description.toLowerCase().includes(searchTerm) ||
                                    movie.genre.toLowerCase().includes(searchTerm);
                const matchesGenre = this.currentGenre === 'all' || movie.genre === this.currentGenre;
                return matchesSearch && matchesGenre;
            });
        }

        this.displayMovies();
    }

    filterByGenre(genre) {
        this.currentGenre = genre;
        const searchInput = document.getElementById('searchInput');
        this.searchMovies(searchInput.value);
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        loading.style.display = 'none';
    }
}

// Utility functions
function scrollToMovies() {
    document.getElementById('movies').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 15, 15, 0.98)';
    } else {
        header.style.background = 'rgba(15, 15, 15, 0.95)';
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new GlooPlay();
    
    // Add some loading animation
    const loading = document.getElementById('loading');
    loading.style.display = 'block';
});

// Error handling for video playback
document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    
    videoPlayer.addEventListener('error', (e) => {
        console.error('Video playback error:', e);
        
        // Show user-friendly error message
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #fff;
            background: rgba(0,0,0,0.8);
            padding: 20px;
            border-radius: 10px;
        `;
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 15px; color: #e50914;"></i>
            <p>Unable to load video. This may be due to:</p>
            <ul style="text-align: left; margin-top: 10px;">
                <li>Network connectivity issues</li>
                <li>Video file temporarily unavailable</li>
                <li>Browser compatibility</li>
            </ul>
            <button onclick="location.reload()" style="margin-top: 15px; padding: 8px 16px; background: #e50914; border: none; color: white; border-radius: 5px; cursor: pointer;">
                Try Again
            </button>
        `;
        
        videoPlayer.parentElement.appendChild(errorDiv);
    });
});

// Add fullscreen functionality
function toggleFullscreen(videoElement) {
    if (!document.fullscreenElement) {
        videoElement.requestFullscreen().catch(err => {
            console.log('Fullscreen error:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (modal.style.display === 'block') {
        switch(e.key) {
            case ' ':
                e.preventDefault();
                if (videoPlayer.paused) {
                    videoPlayer.play();
                } else {
                    videoPlayer.pause();
                }
                break;
            case 'f':
            case 'F':
                e.preventDefault();
                toggleFullscreen(videoPlayer);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - 10);
                break;
            case 'ArrowRight':
                e.preventDefault();
                videoPlayer.currentTime = Math.min(videoPlayer.duration, videoPlayer.currentTime + 10);
                break;
        }
    }
});