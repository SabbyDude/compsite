/**
 * iRhZi Benchmarking Data
 * Manual Scale Control: { name, unit, inverse, min, max, step }
 */
const comparisonRegistry = {
    "chart-port-vs-macs": {
        title: "Productivity & Creative Benchmarks",
        machines: {
            "ma1":"MacBook Air M4 10-core CPU 8-core GPU 16GB RAM",
            "dport1":"Deltop Port Z25U 8C 5",
            "ma2":"MacBook Air M4 10-core CPU 10-core GPU 32GB RAM",
            "ma3":"MacBook Air M5 10-core CPU 10-core GPU 32GB RAM",
            "dport2":"Deltop Port Z25U 10C 10",
            "dport3":"Deltop Port Z25U+ 10C 30",
            "dport4":"Deltop Port Z30U 12C 15",
            "mp1":"MacBook Pro M4 Pro 14-core CPU 20-core GPU 24GB RAM",
            "dport5":"Deltop Port Z30U+ 14C 75",
            "mp2":"MacBook Pro M4 Pro 16-core CPU 40-core GPU 48GB RAM",
            "mp3":"MacBook Pro M4 Max 16-core CPU 40-core GPU 48GB RAM",
            "dport6":"Deltop Port Z30U+ 16C 150"
        },
        benchmarks: [
            { name: "PugetBench (CPU Acceleration)", unit: "pts", inverse: false, min: 0, max: 7000, step: 1000 },
            { name: "Blender Cycles (GPU Render)", unit: "pts", inverse: false, min: 1000, max: 9000, step: 1000 },
            { name: "PassMark RAM Perf", unit: "MB/s", inverse: false, min: 0, max: 6000, step: 500 }
        ],
        scores: {
  "PugetBench (CPU Acceleration)": {"dport1":948,"dport2":2764,"dport3":3268,"dport4":3745,"dport5":5017,"dport6":6451,"ma1":736,"ma2":1745,"ma3":1896,"mp1":4308,"mp2":5329,"mp3":5856},
  "Blender Cycles (GPU Render)": {"dport1":2381,"dport2":3942,"dport3":4371,"dport4":4738,"dport5":6010,"dport6":8103,"ma1":1923,"ma2":2769,"ma3":2964,"mp1":5501,"mp2":6745,"mp3":7682},
  "PassMark RAM Perf": {"dport1":205,"dport2":412,"dport3":1274,"dport4":662,"dport5":2794,"dport6":5524,"ma1":708,"ma2":1452,"ma3":1465,"mp1":904,"mp2":1893,"mp3":1902}
}
    },
    "chart-play-vs-gaming": {
        title: "Gaming Performance (Avg FPS from 1080p/1440p/4k High to Ultra Setting)",
        machines: {
            "play1": "Deltop Play Z25H 6C T25U 12C 10",
            "o1": "Lenovo LOQ Ryzen 5 7235HS RTX 3050 6GB 12GB RAM",
            "play2": "Deltop Play Z25H+ 10C T25U 20C 75",
            "o2": "Asus TUF Core i7-13th RTX 4050 6GB 16GB RAM",
            "play3": "Deltop Play Z25H+ 14C T25U+ 12C 125 ",
            "play4": "Deltop Play Z30H 16C T26U 16C 20 ",
            "o3": "Acer Predator Core i9-13th RTX 4060 8GB 16GB RAM",
            "o4": "HP Omen Ryzen AI 7 RTX 5050 8GB 24GB RAM",
            "play5": "Deltop Play Z30H+ 12C T26U 12C 50 ",
            "o5": "Asus ROG Zephyrus Ryzen 9 270 RTX 5060 8GB 16GB RAM",
            "play6": "Deltop Play Z30H+ 20C T26U 20C 150",
            "o6": "Dell Alienware Core Ultra 9 275HX RTX 5090 64GB RAM"

        },
        benchmarks: [
            { name: "Red Dead Redemption 2", unit: "FPS", inverse: false, min: 0, max: 150, step: 25 },
            { name: "Shadow of the Tomb Raider", unit: "FPS", inverse: false, min: 0, max: 200, step: 50 },
            { name: "Elden Ring", unit: "FPS", inverse: false, min: 0, max: 150, step: 25 },
            { name: "Witcher 3: The Wild Hunt", unit: "FPS", inverse: false, min: 0, max: 250, step: 50 },
            { name: "Cyberpunk 2077", unit: "FPS", inverse: false, min: 0, max: 150, step: 25 },
            { name: "Black Myth Wukong", unit: "FPS", inverse: false, min: 0, max: 150, step: 25 },
            { name: "Alan Wake 2", unit: "FPS", inverse: false, min: 0, max: 150, step: 25 },
            { name: "Forza Horizon", unit: "FPS", inverse: false, min: 0, max: 250, step: 50 },
            { name: "PUBG", unit: "FPS", inverse: false, min: 0, max: 300, step: 50 },
            { name: "Minecraft", unit: "FPS", inverse: false, min: 0, max: 600, step: 50 }
        ],
       "scores": {
    "Red Dead Redemption 2": { "play1": 61, "o1": 50, "play2": 88, "o2": 70, "play3": 100, "play4": 103, "o3": 85, "o4": 90, "play5": 111, "o5": 95, "play6": 133, "o6": 120 },
    "Shadow of the Tomb Raider": { "play1": 72, "o1": 55, "play2": 89, "o2": 75, "play3": 95, "play4": 105, "o3": 90, "o4": 95, "play5": 118, "o5": 100, "play6": 151, "o6": 140 },
    "Elden Ring": { "play1": 67, "o1": 50, "play2": 87, "o2": 70, "play3": 94, "play4": 95, "o3": 85, "o4": 90, "play5": 112, "o5": 95, "play6": 132, "o6": 120 },
    "Witcher 3: The Wild Hunt": { "play1": 85, "o1": 60, "play2": 91, "o2": 80, "play3": 100, "play4": 112, "o3": 95, "o4": 160, "play5": 189, "o5": 105, "play6": 212, "o6": 140 },    
    "Cyberpunk 2077": { "play1": 58, "o1": 45, "play2": 85, "o2": 65, "play3": 92, "play4": 95, "o3": 80, "o4": 85, "play5": 102, "o5": 90, "play6": 131, "o6": 120 },
    "Black Myth Wukong": { "play1": 68, "o1": 50, "play2": 85, "o2": 70, "play3": 90, "play4": 97, "o3": 85, "o4": 90, "play5": 110, "o5": 95, "play6": 140, "o6": 130 },
    "Alan Wake 2": { "play1": 55, "o1": 29, "play2": 72, "o2": 45, "play3": 78, "play4": 86, "o3": 70, "o4": 75, "play5": 97, "o5": 80, "play6": 123, "o6": 110 },
    "Forza Horizon": { "play1": 80, "o1": 65, "play2": 106, "o2": 90, "play3": 115, "play4": 122, "o3": 110, "o4": 120, "play5": 142, "o5": 130, "play6": 216, "o6": 200 },
    "PUBG": { "play1": 85, "o1": 70, "play2": 112, "o2": 100, "play3": 124, "play4": 139, "o3": 120, "o4": 130, "play5": 159, "o5": 140, "play6": 267, "o6": 250 },
    "Minecraft": { "play1": 117, "o1": 100, "play2": 163, "o2": 150, "play3": 174, "play4": 214, "o3": 200, "o4": 200, "play5": 269, "o5": 250, "play6": 512, "o6": 500 }
}
    },
     "chart-station-vs-workstation": {
    "title": "Station Gaming and Creative Benchmark",
    "machines": {
      "o1": "Core i5-12400F + Radeon RX 7600XT + 16 GB  ",
      "o2": "Ryzen 5 9600X + RTX 5070  + 16 GB",
      "o4": "Core Ultra 7 + Arc A770 + 32 GB ",
      "o6": "Ryzen 7 9800X3D + Arc B580 + 32 GB",
      "station1": "Z25X 12C T25X 12C 100",
      "o3": "Ryzen 9 7900X + Radeon RX 7900 XTX + 64 GB",
      "station2": "Z25X 16C T25X+ 6C 200",
      "o5": "Core i9-14900K + RTX 5090 + 64 GB",
      "station3": "Z25X+ 16C T25X 64C 200",
      "station4": "Z25X+ 24C T25X+ 32C 300",
      "station5": "Z30X 24C T30X 16C 200",
      "station6": "Z30X 32C T30X+ 16C 250",
      "station7": "Z30X+ 40C T30X 128C 375",
      "station8": "Z30X+ 64C T30X+ 128C 500"
    },
    "benchmarks": [
      { "name": "Red Dead Redemption 2", "unit": "FPS", "inverse": false, "min": 0, "max": 700, "step": 50 },
      { "name": "Shadow of the Tomb Raider", "unit": "FPS", "inverse": false, "min": 0, "max": 700, "step": 50 },
      { "name": "Witcher 3: The Wild Hunt", "unit": "FPS", "inverse": false, "min": 0, "max": 600, "step": 50 },
      { "name": "Cyberpunk 2077", "unit": "FPS", "inverse": false, "min": 0, "max": 400, "step": 50 },
      { "name": "Civilization VII", "unit": "FPS", "inverse": false, "min": 0, "max": 1000, "step": 100 },
      { "name": "Counter Strike", "unit": "FPS", "inverse": false, "min": 0, "max": 2000, "step": 100 },
      { "name": "Minecraft", "unit": "FPS", "inverse": false, "min": 0, "max": 2000, "step": 100 },
      { "name": "PugetBench (CPU Acceleration)", "unit": "pts", "inverse": false, "min": 0, "max": 30000, "step": 1000 },
      { "name": "Blender Cycles (GPU Render)", "unit": "seconds", "inverse": true, "min": 0, "max": 200, "step": 1 },
      { "name": "PassMark RAM Perf", "unit": "MB/s", "inverse": false, "min": 0, "max": 120000, "step": 1000 }
    ],
    "scores": {
      "Red Dead Redemption 2": { "o4": 75, "o1": 89, "o2": 125, "o6": 155, "station1": 164, "o3": 185, "station2": 220, "o5": 287, "station3": 314, "station4": 365, "station5": 421, "station6": 467, "station7": 507, "station8": 604 },
      "Shadow of the Tomb Raider": { "o4": 89, "o1": 105, "o2": 141, "o6": 171, "station1": 204, "o3": 205, "station2": 252, "o5": 328, "station3": 341, "station4": 403, "station5": 423, "station6": 483, "station7": 570, "station8": 627 },
      "Witcher 3: The Wild Hunt": { "o4": 81, "o1": 97, "o2": 131, "o6": 162, "station1": 176, "o3": 193, "station2": 269, "o5": 312, "station3": 354, "station4": 378, "station5": 416, "station6": 470, "station7": 473, "station8": 523 },
      "Cyberpunk 2077": { "o4": 55, "o1": 63, "o2": 88, "o6": 112, "station1": 132, "o3": 143, "station2": 148, "o5": 205, "station3": 221, "station4": 253, "station5": 290, "station6": 308, "station7": 332, "station8": 342 },
      "Civilization VII": { "o4": 128, "o1": 144, "o2": 185, "o6": 230, "station1": 271, "o3": 277, "station2": 365, "o5": 412, "station3": 461, "station4": 536, "station5": 591, "station6": 633, "station7": 747, "station8": 763 },
      "Counter Strike": { "o4": 220, "o1": 262, "o2": 345, "o6": 442, "station1": 499, "o3": 508, "station2": 599, "o5": 783, "station3": 884, "station4": 1007, "station5": 1129, "station6": 1299, "station7": 1439, "station8": 1599 },
      "Minecraft": { "o4": 184, "o1": 262, "o2": 345, "o6": 442, "station1": 470, "o3": 508, "station2": 656, "o5": 783, "station3": 860, "station4": 868, "station5": 977, "station6": 1170, "station7": 1317, "station8": 1562 },
      "PugetBench (CPU Acceleration)": { "o4": 8500, "o1": 6500, "o2": 9500, "o6": 14200, "station1": 14715, "o3": 11500, "station2": 16823, "o5": 15500, "station3": 18521, "station4": 21599, "station5": 22753, "station6": 23942, "station7": 26696, "station8": 28542 },
      "Blender Cycles (GPU Render)": { "o4": 190, "o1": 150, "o2": 108, "o6": 132, "station1": 36, "o3": 72, "station2": 30, "o5": 48, "station3": 18, "station4": 16, "station5": 12, "station6": 10, "station7": 8, "station8": 6 },
      "PassMark RAM Perf": { "o4": 24500, "o1": 18000, "o2": 19500, "o6": 26500, "station1": 48066, "o3": 32000, "station2": 76190, "o5": 34000, "station3": 77414, "station4": 94617, "station5": 86254, "station6": 88373, "station7": 95675, "station8": 113452 }
    }
  }
 
};

function initCharts() {
    for (const [id, data] of Object.entries(comparisonRegistry)) {
        const container = document.getElementById(id);
        if (!container) continue;

        let html = `<div class="chart-header"><span class="chart-title">${data.title}</span></div>`;

        data.benchmarks.forEach(bench => {
            const directionLabel = bench.inverse ? "Lower is Better" : "Higher is Better";
            const benchScores = data.scores[bench.name];
            
            // Manual Scale Logic
            const chartMin = bench.min !== undefined ? bench.min : 0;
            const chartMax = bench.max !== undefined ? bench.max : Math.max(...Object.values(benchScores));

            html += `
                <div class="bench-group">
                    <div class="bench-label">
                        ${bench.name}
                        <span style="display:block; font-size:9px; color:var(--text-dim); text-transform:uppercase; margin-top:2px; opacity:0.7;">
                            ${directionLabel}
                        </span>
                    </div>`;

            for (const [mKey, mName] of Object.entries(data.machines)) {
                const score = benchScores[mKey];
                
                // Calculate width based on manual max
                // Clamped at 100% just in case a score exceeds your manual max
                const width = Math.min(((score - chartMin) / (chartMax - chartMin)) * 100, 100);
                
                let barColor = '#333'; 
                if (mKey.toLowerCase().includes('port')) barColor = 'var(--accent-port)';
                if (mKey.toLowerCase().includes('play')) barColor = 'var(--neon-play)';
                if (mKey.toLowerCase().includes('station')) barColor = 'var(--neon-zeta)';

                html += `
                    <div class="bar-row">
                        <div class="bar-meta">
                            <span>${mName}</span>
                            <span class="m-score">${score} ${bench.unit}</span>
                        </div>
                        <div class="bar-track">
                            <div class="bar-fill" style="width: ${width}%; background-color: ${barColor}"></div>
                        </div>
                    </div>`;
            }
            html += `</div>`;
        });
        container.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', initCharts);









