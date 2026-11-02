document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scramble text effect for title reveal
    class TextScrambler {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({
                    from: oldText[i] || '',
                    to: newText[i] || '',
                    start,
                    end,
                    char: ''
                });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        
        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span style="color: #ff4f19; font-weight: bold;">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    // Reveal Proposals Mechanism
    const revealButtons = document.querySelectorAll('.btn-reveal');
    
    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.proposal-card');
            
            // If already revealed, do nothing
            if (card.classList.contains('revealed') || card.classList.contains('scanning')) {
                return;
            }
            
            // Start scanning phase
            card.classList.add('scanning');
            this.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin-icon"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg> Escaneando combinaciones...`;
            
            // Add spin animation class locally to the SVG inside the button
            const spinSvg = this.querySelector('.spin-icon');
            if (spinSvg) {
                spinSvg.style.animation = 'spin 1s linear infinite';
            }

            // Define target values
            const isOption1 = card.dataset.proposal === '1';
            const realTitle = isOption1 ? 'SHOP DE MOMENTOS' : 'Código de Reserva';
            
            // Wait 1.8 seconds for scanner sweep, then decrypt title and show contents
            setTimeout(() => {
                card.classList.remove('scanning');
                card.classList.add('revealed');
                
                // Get title element
                const titleElement = card.querySelector('.actual-title');
                titleElement.style.display = 'block';
                
                // Trigger text scramble/decrypt animation
                const scrambler = new TextScrambler(titleElement);
                scrambler.setText(realTitle);
                
                // Update Button State
                this.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Propuesta Revelada`;
                this.setAttribute('disabled', 'true');
                
                // Scroll slightly to focus on the revealed timeline if desktop
                if (window.innerWidth > 768) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 1800);
        });
    });

    // Add inline rotation animation styles for spinning scan icons
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});
