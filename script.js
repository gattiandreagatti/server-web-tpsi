const paletteContainer = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');
const COLOR_COUNT = 5;

// Genera un colore esadecimale casuale
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Crea la struttura della palette
function generatePalette() {
    paletteContainer.innerHTML = '';

    for (let i = 0; i < COLOR_COUNT; i++) {
        const hexColor = getRandomColor();

        const card = document.createElement('div');
        card.classList.add('color-card');

        card.innerHTML = `
            <div class="color-box" style="background-color: ${hexColor}"></div>
            <div class="color-code">${hexColor}</div>
        `;

        // Click per copiare negli appunti (dinamismo client-side)
        card.addEventListener('click', () => {
            navigator.clipboard.writeText(hexColor);
            const codeEl = card.querySelector('.color-code');
            const originalText = codeEl.textContent;
            
            codeEl.textContent = 'Copiato!';
            setTimeout(() => {
                codeEl.textContent = originalText;
            }, 1000);
        });

        paletteContainer.appendChild(card);
    }
}

// Event Listeners
generateBtn.addEventListener('click', generatePalette);

// Genera la prima palette al caricamento della pagina
generatePalette();