const ALPHONE_DATA = {

    colorOptions: {
        '25': [
            { name: 'Bromine', hex: '#9E3339' },
            { name: 'Sulphur', hex: '#EED72F' },
            { name: 'Cobalt', hex: '#004385' },
            { name: 'Zinc', hex: '#B1b1b1' },
            { name: 'Obsidian', hex: '#2e3134' }
        ],
        '26': [
            { name: 'Leaf', hex: '#3AA50B' },
            { name: 'Tulip', hex: '#E82E75' },
            { name: 'Marigold', hex: '#F46300' },
            { name: 'Zinc', hex: '#B1b1b1' },
            { name: 'Obsidian', hex: '#2e3134' }
        ]
    },

    // NEW STRUCTURE: Options are now Year -> Model Series
    umgOptions: {
        '25': {
            'L': ['5/50', '5/75', '8/75'],
            'Base': ['8/75', '8/100', '10/100'],
            'X': ['10/100', '10/150', '15/250', '15/500']
        },
        '26': {
            'L': ['5/75', '5/100', '8/100'],
            'Base': ['10/100', '10/125', '10/150'],
            'X': ['15/200', '15/250', '15/500', '15/1000']
        }
    },

    // Tier-specific hardware specs
    specs: {
        'L': {
            display: '15cm inch Upsilon Display',
            frontCam: '12 MP front-facing main camera',
            rearCam: '24 MP rear-facing main camera',
            battery: 'Up to 35 hours optimum battery',
            chipPrefix: 'Zeta M'
        },
        'Base': {
            display: '16cm inch Upsilon Display',
            frontCam: '20MP front-facing main camera',
            rearCam: '48MP rear-facing main camera',
            extraCam: '24MP rear-facing ultra-wide camera',
            battery: 'Up to 45 hours optimum battery',
            chipPrefix: 'Zeta M'
        },
        'X': {
            display: '17cm inch Upsilon+ Display',
            frontCam: '30MP front-facing main camera',
            rearCam: '100MP rear-facing main camera',
            extraCam: '50MP rear-facing ultra-wide camera',
            teleCam: '50MP rear-facing telephoto camera',
            battery: 'Up to 60 hours optimum battery',
            chipPrefix: 'Zeta M',
            chipSuffix: '+' 
        }
    },

    // Individual pricing for the UMG combinations per year
    pricing: {
        '25': {
            baseChassis: { 'L': 35000, 'Base': 55000, 'X': 85000 },
            umgPrices: {
                '5/50': 5000, '5/75': 9000,
                '8/75': 10000, '8/100': 15000, '10/100': 20000, '10/150': 29000,
                '15/250': 40000, '15/500': 58000
            }
        },
        '26': {
            baseChassis: { 'L': 40000, 'Base': 65000, 'X': 100000 },
            umgPrices: {
                '5/75': 5500, '5/100': 10000, '8/100': 14500, 
                '10/100': 19000, '10/125': 24000, '10/150': 30000,
                '15/200': 36000, '15/250': 42000, '15/500': 50000, '15/1000': 60000
            }
        }
    }
};