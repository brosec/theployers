const services = [
    {
        icon: "language",
        title: "Web Architecture",
        description: "RAW PERFORMANCE AND SCALABLE CODE. WE DON'T JUST DESIGN; WE ENGINEER EXPERIENCES.",
    },
    
    {
        icon: "search",
        title: "SEARCH DOMINANCE",
        description: "DATA-DRIVEN VISIBILITY STARTEGIES. IF THEY CAN'T FIND YOU, YOU DON'T EXIST.",
    },

    {
        icon: "smartphone",
        title: "MOBILE SYSTEMS",
        description: "FUNCTIONAL APPLICATIONS FOR IOS AND ANDROID. NATIVE PERFORMANCE, ZERO FRICTION.",
    },

    {
        icon: "campaign",
        title: "DIRECT MARKETING",
        description: "AGRESSIVE CAMPAIGNS. TARGETED REACH. MEASURABLE CONVERSION METRICS ONLY.",
    },

    {
        icon: "palette",
        title: "IDENTITY DESIGN",
        description: "VISUAL STORYTELLING WITH SHARP EDGES. WE BUILD BRANDS THAT DEMAND ATTENTION.",
    },

    {
        icon: "cloud",
        title: "INFRASTRUCTURE",
        description: "CLOUD SOLUTIONS FOR MODERN ERA. SCALABLE, SECURE, UNCOMPROMISING.",
    },
];

function renderServices() {
    const container = document.getElementById("services-container");
    if (!container) return;

    container.innerHTML = services.map((service) => `<div class="p-12 theployers-border hover:bg-black hover:text-white transition-colors">
                    <span class="material-symbols-outlined mb-8 !text-6xl">${service.icon}</span>
                    <h3 class="text-3xl font-black mb-4">${service.title}</h3>
                    <p class="text-lg">${service.description}</p>
                </div>`).join("");
}

renderServices();