/**
 * Professional Website Controller
 * Semua konten dan fitur dikelola di sini.
 */

const App = {
    // 1. DATA SITUS (Ubah di sini untuk mengedit konten)
    config: {
        siteName: "Inovasi Digital",
        tagline: "Solusi Profesional untuk Masa Depan Anda",
        heroTitle: "Bangun Masa Depan Digital Anda",
        heroSubtitle: "Kami membantu bisnis Anda bertransformasi dengan teknologi mutakhir dan desain yang elegan.",
        ctaButtonText: "Mulai Sekarang",
    },

    // 2. FITUR/LAYANAN (Ubah atau tambah di sini)
    features: [
        {
            icon: "🚀", 
            title: "Pengembangan Cepat",
            description: "Proses development yang efisien dengan teknologi terbaru untuk hasil yang maksimal."
        },
        {
            icon: "🎨",
            title: "Desain Modern",
            description: "Antarmuka yang bersih dan user-friendly untuk pengalaman pengguna yang tak terlupakan."
        },
        {
            icon: "🛡️",
            title: "Keamanan Terjamin",
            description: "Standar keamanan tinggi untuk melindungi data dan privasi bisnis Anda."
        },
        {
            icon: "📈",
            title: "Strategi SEO",
            description: "Optimasi mesin pencari untuk meningkatkan visibilitas dan pertumbuhan bisnis Anda."
        }
    ],

    // 2.1 TESTIMONIAL (Contoh fitur tambahan)
    testimonials: [
        {
            name: "Andi Saputra",
            company: "Tech Solutions",
            quote: "Website yang dibuat sangat profesional dan cepat. Bisnis saya berkembang pesat!"
        },
        {
            name: "Siska Putri",
            company: "Creative Studio",
            quote: "Desainnya sangat modern dan mudah digunakan. Sangat direkomendasikan."
        }
    ],

    // 3. LOGIKA RENDER (Jangan diubah kecuali ingin mengubah struktur)
    init() {
        this.renderHeader();
        this.renderHero();
        this.renderFeatures();
        this.renderTestimonials(); // Panggil fungsi testimonial
        this.renderFooter();
        this.addEventListeners();
    },

    renderHeader() {
        const header = document.createElement('header');
        header.innerHTML = `
            <nav>
                <div class="logo">${this.config.siteName}</div>
                <ul class="nav-links">
                    <li><a href="#home">Beranda</a></li>
                    <li><a href="#features">Layanan</a></li>
                    <li><a href="#testimonials">Testimoni</a></li>
                    <li><a href="#contact">Kontak</a></li>
                </ul>
            </nav>
        `;
        document.getElementById('app').appendChild(header);
    },

    renderHero() {
        const hero = document.createElement('section');
        hero.id = 'home';
        hero.className = 'hero';
        hero.innerHTML = `
            <div class="hero-content">
                <h1>${this.config.heroTitle}</h1>
                <p>${this.config.heroSubtitle}</p>
                <a href="#features" class="btn">${this.config.ctaButtonText}</a>
            </div>
        `;
        document.getElementById('app').appendChild(hero);
    },

    renderFeatures() {
        const section = document.createElement('section');
        section.id = 'features';
        section.innerHTML = `
            <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem;">Layanan Kami</h2>
            <div class="features-grid">
                ${this.features.map(feature => `
                    <div class="feature-card">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">${feature.icon}</div>
                        <h3>${feature.title}</h3>
                        <p style="color: #6b7280; margin-top: 1rem;">${feature.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        document.getElementById('app').appendChild(section);
    },

    renderTestimonials() {
        const section = document.createElement('section');
        section.id = 'testimonials';
        section.style.backgroundColor = '#f3f4f6';
        section.innerHTML = `
            <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem;">Apa Kata Klien</h2>
            <div class="features-grid">
                ${this.testimonials.map(t => `
                    <div class="feature-card">
                        <p style="font-style: italic; color: #4b5563; margin-bottom: 1rem;">"${t.quote}"</p>
                        <h4 style="color: var(--primary-color);">${t.name}</h4>
                        <small>${t.company}</small>
                    </div>
                `).join('')}
            </div>
        `;
        document.getElementById('app').appendChild(section);
    },

    renderFooter() {
        const footer = document.createElement('footer');
        footer.innerHTML = `
            <p>&copy; ${new Date().getFullYear()} ${this.config.siteName}. Hak Cipta Dilindungi.</p>
            <div style="margin-top: 1rem;">
                <a href="#" style="color: white; margin: 0 10px;">Twitter</a>
                <a href="#" style="color: white; margin: 0 10px;">LinkedIn</a>
                <a href="#" style="color: white; margin: 0 10px;">Instagram</a>
            </div>
        `;
        document.getElementById('app').appendChild(footer);
    },

    addEventListeners() {
        // Implementasi smooth scroll untuk link navigasi
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
};

// Jalankan aplikasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
