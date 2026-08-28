const iRhZi_DATA = {
    // Keeping all original options as requested
    ramOptions: [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 100, 110, 125, 140, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 1000, 2000],
    ssdOptions: [150, 250, 350, 500, 750, 1000, 1200, 1500, 1800, 2000, 2500, 3000, 3300, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 6000, 7000, 8000, 9000, 10000],
    
    sizeOptions: {
        '25': {
            'Port': ['32', '34'],
            'Play': ['18', '19'],
            'Station': ['Carton', 'Tower']
        },
        '30': {
            'Port': ['34', '38'],
            'Play': ['19', '20'],
            'Station': ['Punnet', 'Tower', 'Server']
        }
    },

    // Add this to computer.js
chassisDescriptions : {
    'Carton': '10cm (W) x 20cm (H) x 20cm (D) with 2 removable handles on top',
    'Tower': '20cm (W) x 50cm (H) x 40cm (D) with 2 handles on top and 4 wheels+standoffs',
    'Punnet': '15cm (W) x 15cm (H) x 15cm (D) with a single handle on top',
    'Server': '60cm (W) x 10cm (H) x 60cm (D) with extensive server utilities/customizations'
},

    colorOptions: {
        '25': [
            { name: 'Zinc', hex: '#B1b1b1' },
            { name: 'Obsidian', hex: '#2e3134' },
            { name: 'Wood', hex: '#855e42' }
        ],
        '30': [
            { name: 'Zinc', hex: '#B1b1b1' },
            { name: 'Obsidian', hex: '#2e3134' },
            { name: 'Wood', hex: '#855e42' }
        ]
    },

    coreData: {
        '25': { 
            'U': [8, 10], 
            'U+': [10, 12], 
            'H': [6, 10], 
            'H+': [10, 14], 
            'X': [12, 16], 
            'X+': [16, 24] 
        },
        '30': { 
            'U': [10, 12], 
            'U+': [14, 16], 
            'H': [8, 16], 
            'H+': [12, 16, 20], 
            'X': [24, 32], 
            'X+': [40, 64] 
        }
    },

    thetaRange: {
        '25': {
            'Play': { 'U': [10, 12, 14, 16, 20, 24, 28], 'U+': [4, 8, 10, 12] },
            'Station': { 'X': [12, 16, 32, 64, 80, 96], 'X+': [6, 20, 32, 48] }  
        },
        '30': {
            'Play': { 'U': [12, 20, 40], 'U+': [12, 16, 20] },
            'Station': { 'X': [16, 32, 128], 'X+': [16, 64, 80, 96, 128] }
        }
    },

    pricing: {
        '25': {
            chassis: { 
                'Port': { '32': 50000, '34': 60000 }, 
                'Play': { '18': 30000, '19': 40000 }, 
                'Station': { 'Carton': 150000, 'Tower': 200000 } 
            },
            perGB_RAM: 150,
            perGB_SSD: 15,
            zeta: {
                'U': { 8: 27000, 10: 35000 },
                'U+': { 10: 38000, 12: 42000 },
                'H': { 6: 10000, 10: 16000 },
                'H+': { 10: 20000, 14: 26000 },
                'X': { 12: 90000, 16: 105000 },
                'X+': { 16: 120000, 24: 160000 }
            },
            theta: {
                'U': { 10: 10000, 12: 13000, 14: 16000, 16: 20000, 20: 25000, 24: 32000, 28: 40000 },
                'U+': { 4: 15000, 8: 22000, 10: 30000, 12: 38000 },
                'X': { 12: 50000, 16: 80000, 32: 120000, 64: 180000, 80: 240000, 96: 300000 },
                'X+': { 6: 60000, 20: 100000, 32: 260000, 48: 500000 }
            }
        },
        '30': {
            chassis: { 
                'Port': { '34': 90000, '38': 120000 }, 
                'Play': { '19': 50000, '20': 60000 }, 
                'Station': { 'Punnet': 350000, 'Tower': 150000, 'Server': 850000 } 
            },
            perGB_RAM: 250,
            perGB_SSD: 20,
            zeta: {
                'U': { 10: 48000, 12: 68000 },
                'U+': { 14: 90000, 16: 154000 },
                'H': { 8: 15000, 16: 18000 },
                'H+': { 12: 24000, 16: 28000, 20: 32000 },
                'X': { 24: 100000, 32: 150000 },
                'X+': { 40: 200000, 64: 250000 }
            },
            theta: {
                'U': { 12: 20000, 20: 30000, 40: 40000 },
                'U+': { 12: 50000, 16: 65000, 20: 85000 },
                'X': { 16: 90000, 32: 150000, 64: 220000 },
                'X+': { 16: 200000, 64: 300000, 80: 420000, 96: 500000, 128: 700000 }
            }
        }
    }
};


// Port U series 8 - 10 cores: <=50GB RAM and <=500GB Storage

// Port U+ series any no. of cores: <=150GB RAM and <=1000GB Storage


// Play Zeta H x cores: <= Theta U 2x cores and 10GB RAM >= and <=100GB RAM and 500 GB <= Storage <= 1500

// Play Zeta H+ x cores: <= Theta U 2x cores 50GB RAM >= and <=150GB RAM and 500 GB <= Storage <= 2000

// Play Zeta H+ x cores: <= Theta U+ x cores 75GB RAM >= and <=150GB RAM and 1000 GB <= Storage <= 3000


// Basically H Zeta can't handle U+ Theta


// Station Zeta X n cores : <= Theta X n cores and 100GB RAM >= and <=300GB RAM and 1000 GB <= Storage <= 4000

// Station Zeta X n cores : <= Theta X+ n/2 cores and 150GB RAM >= and <=300GB RAM and 3000 GB <= Storage <= 6000

// Station Zeta X+ n cores : <= Theta X 4n cores and 200GB RAM >= and <=400GB RAM and 4000 GB <= Storage <= 8000

// Station Zeta X+ n cores : <= Theta X+ 2n cores 200GB RAM >= and <=500GB RAM and 5000 GB <= Storage <= 10k 
