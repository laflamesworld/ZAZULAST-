import React, { useState } from 'react';
import './PfpGenerator.css';

// Mock asset data structure
const CATEGORIES = ['Background', 'Headwear', 'Glasses', 'Clothing', 'Accessories'];

const ASSETS = {
    Background: [
        { id: 'bg_none', name: 'None', url: '/assets/pfp_gen_1/bg_none_color.png' },
        { id: 'bg_kobe', name: 'Trophies', url: '/assets/pfp_gen_1/bg_kobe.png' },
        { id: 'bg_scream', name: 'The Scream', url: '/assets/pfp_gen_1/bg_scream.png' },
        { id: 'bg_street', name: 'The Hood', url: '/assets/pfp_gen_1/bg_street.png' },
        { id: 'bg_creation', name: 'Creation of Adam', url: '/assets/pfp_gen_1/bg_creation.png' },
        { id: 'bg_legends', name: 'Legends', url: '/assets/pfp_gen_1/bg_legends.png' },
        { id: 'bg_battlefield', name: 'Battlefield', url: '/assets/pfp_gen_1/bg_battlefield.png' },
        { id: 'bg_heat_dunk', name: 'The Dunk', url: '/assets/pfp_gen_1/bg_heat_dunk.png' },
        { id: 'bg_oblock', name: 'O Block', url: '/assets/pfp_gen_1/bg_oblock.png' },
        { id: 'bg_rage_quit', name: 'Crash Out', url: '/assets/pfp_gen_1/bg_rage_quit.png' },
        { id: 'bg_nighthawks', name: 'Nighthawks', url: '/assets/pfp_gen_1/bg_nighthawks.png' },
        { id: 'bg_wolf', name: 'Wolf of Wall St', url: '/assets/pfp_gen_1/bg_wolf.png' },
        { id: 'bg_cat_mafia', name: 'Cat Mafia', url: '/assets/pfp_gen_1/bg_cat_mafia.png' },
        { id: 'bg_iverson', name: 'Step Over', url: '/assets/pfp_gen_1/bg_iverson.png' },
        { id: 'bg_cafe', name: 'Cafe Terrace', url: '/assets/pfp_gen_1/bg_cafe.png' },
        { id: 'bg_trading_floor', name: 'Trading Floor', url: '/assets/pfp_gen_1/bg_trading_floor.png' },
        { id: 'bg_trenches', name: 'The Trenches', url: '/assets/pfp_gen_1/bg_trenches.png' },
        { id: 'bg_nyse', name: 'NYSE', url: '/assets/pfp_gen_1/bg_nyse.png' },
        { id: 'bg_nuke', name: 'Nuke', url: '/assets/pfp_gen_1/bg_nuke.png' },
        { id: 'bg_favela', name: 'Favela', url: '/assets/pfp_gen_1/bg_favela.png' },
        { id: 'bg_stealth', name: 'Stealth Bombers', url: '/assets/pfp_gen_1/bg_stealth.png' },
        { id: 'bg_wtc', name: 'WTC', url: '/assets/pfp_gen_1/bg_wtc.png' },
        { id: 'bg_desert', name: 'Desert Tactics', url: '/assets/pfp_gen_1/bg_desert.png' },
    ],
    Headwear: [
        { id: 'h_none', name: 'None', url: '' },
        { id: 'h_helmet', name: 'Army Helmet', url: '/assets/pfp_gen_1/h_helmet.png' },
        { id: 'h_beret', name: 'Commander Beret', url: '/assets/pfp_gen_1/h_beret.png' },
        { id: 'h_ny', name: 'NY Hat', url: '/assets/pfp_gen_1/h_ny.png' },
        { id: 'h_la', name: 'LA Hat', url: '/assets/pfp_gen_1/h_la.png' },
        { id: 'h_bulls', name: 'Bulls Hat', url: '/assets/pfp_gen_1/h_bulls.png' },
        { id: 'h_heat', name: 'Heat Hat', url: '/assets/pfp_gen_1/h_heat.png' },
        { id: 'h_crown', name: 'Crown', url: '/assets/pfp_gen_1/h_crown.png' },
        { id: 'h_knight', name: 'Knight Helmet', url: '/assets/pfp_gen_1/h_knight.png' },
        { id: 'h_ushanka', name: 'Ushanka', url: '/assets/pfp_gen_1/h_ushanka.png' },
        { id: 'h_bandana', name: 'Red Bandana', url: '/assets/pfp_gen_1/h_bandana.png' },
        { id: 'h_viking', name: 'Viking Helmet', url: '/assets/pfp_gen_1/h_viking.png' },
        { id: 'h_cowboy', name: 'Cowboy Hat', url: '/assets/pfp_gen_1/h_cowboy.png' },
        { id: 'h_pharaoh', name: 'Pharaoh', url: '/assets/pfp_gen_1/h_pharaoh.png' },
        { id: 'h_donttread', name: 'Don\'t Tread', url: '/assets/pfp_gen_1/h_donttread.png' },
        { id: 'h_blackhelm', name: 'Black Helm', url: '/assets/pfp_gen_1/h_blackhelm.png' },
        { id: 'h_camo', name: 'Camo Hat', url: '/assets/pfp_gen_1/h_camo.png' },
        { id: 'h_bluecap', name: 'Blue Cap', url: '/assets/pfp_gen_1/h_bluecap.png' },
        { id: 'h_snapback', name: 'Snapback', url: '/assets/pfp_gen_1/h_snapback.png' },
        { id: 'h_propeller', name: 'Propeller Hat', url: '/assets/pfp_gen_1/h_propeller.png' },
        { id: 'h_keffiyeh', name: 'Keffiyeh', url: '/assets/pfp_gen_1/h_keffiyeh.png' },
        { id: 'h_tophat', name: 'Top Hat', url: '/assets/pfp_gen_1/h_tophat.png' },
        { id: 'h_fedora', name: 'Fedora', url: '/assets/pfp_gen_1/h_fedora.png' },
    ],
    Glasses: [
        { id: 'g_none', name: 'None', url: '' },
        { id: 'g_aviators', name: 'Aviators', url: '/assets/pfp_gen_2/g_aviators.png' },
        { id: 'g_moggles', name: 'Moggles', url: '/assets/pfp_gen_2/g_moggles.png' },
        { id: 'g_circular', name: 'Circular Glasses', url: '/assets/pfp_gen_2/g_circular.png' },
        { id: 'g_goggles', name: 'Snow Goggles', url: '/assets/pfp_gen_2/g_goggles.png' },
        { id: 'g_maybach', name: 'Maybach Shades', url: '/assets/pfp_gen_2/g_maybach.png' },
        { id: 'g_lv', name: 'LV Shades', url: '/assets/pfp_gen_2/g_lv.png' },
        { id: 'g_laser', name: 'Laser Eyes', url: '/assets/pfp_gen_2/g_laser.png' },
        { id: 'g_speed', name: 'Speed Shades', url: '/assets/pfp_gen_2/g_speed.png' },
        { id: 'g_wayfarers', name: 'Wayfarers', url: '/assets/pfp_gen_2/g_wayfarers.png' },
        { id: 'g_pitvipers', name: 'Pit Vipers', url: '/assets/pfp_gen_2/g_pitvipers.png' },
        { id: 'g_wire', name: 'Wire Frames', url: '/assets/pfp_gen_2/g_wire.png' },
        { id: 'g_visor', name: 'Cyber Visor', url: '/assets/pfp_gen_2/g_visor.png' },
        { id: 'g_steampunk', name: 'Plastic Goggles', url: '/assets/pfp_gen_2/g_steampunk.png' },
    ],
    Clothing: [
        { id: 'c_none', name: 'None', url: '' },
        { id: 'c_camo', name: 'Camo Uniform', url: '/assets/pfp_gen_2/c_camo.png' },
        { id: 'c_camo_vest', name: 'Camo Vest', url: '/assets/pfp_gen_2/c_camo_vest.png' },
        { id: 'c_parka', name: 'Fur Parka', url: '/assets/pfp_gen_2/c_parka.png' },
        { id: 'c_puffer', name: 'Puffer Jacket', url: '/assets/pfp_gen_2/c_puffer.png' },
        { id: 'c_robe', name: 'Royal Robe', url: '/assets/pfp_gen_2/c_robe.png' },
        { id: 'c_polo', name: 'White Polo', url: '/assets/pfp_gen_2/c_polo.png' },
        { id: 'c_polo_black', name: 'Black Polo', url: '/assets/pfp_gen_2/c_polo_black.png' },
        { id: 'c_polo_gucci', name: 'Gucci Polo', url: '/assets/pfp_gen_2/c_polo_gucci.png' },
        { id: 'c_camo_hoodie', name: 'Camo Hoodie', url: '/assets/pfp_gen_2/c_camo_hoodie.png' },
        { id: 'c_jersey_lakers', name: 'Lakers Jersey', url: '/assets/pfp_gen_2/c_jersey_lakers.png' },
        { id: 'c_jersey_heat', name: 'Heat Jersey', url: '/assets/pfp_gen_2/c_jersey_heat.png' },
        { id: 'c_jersey_bulls', name: 'Bulls Jersey', url: '/assets/pfp_gen_2/c_jersey_bulls.png' },
        { id: 'c_armor', name: 'Knight Armor', url: '/assets/pfp_gen_2/c_armor.png' },
        { id: 'c_psg', name: 'PSG Jersey', url: '/assets/pfp_gen_2/c_psg.png' },
        { id: 'c_bandolier', name: 'PSG Jersey', url: '/assets/pfp_gen_2/c_bandolier.png' },
    ],
    Accessories: [
        { id: 'a_none', name: 'None', url: '' },
        { id: 'a_ak47', name: 'Assault Rifle', url: '/assets/pfp_gen_2/a_ak47.png' },
        { id: 'a_dual_pistols', name: 'Dual Pistols', url: '/assets/pfp_gen_2/a_dual_pistols.png' },
        { id: 'a_watch_gold', name: 'Jacob & Co Tourbillon', url: '/assets/pfp_gen_2/a_watch_gold.png' },
        { id: 'a_watch_silver', name: 'Iced Out Patek', url: '/assets/pfp_gen_2/a_watch_silver.png' },
        { id: 'a_watch_rainbow', name: 'Colored Diamond Patek', url: '/assets/pfp_gen_2/a_watch_rainbow.png' },
        { id: 'a_watch_digital', name: 'Diamond G Shock', url: '/assets/pfp_gen_2/a_watch_digital.png' },
        { id: 'a_watch_emerald', name: 'Rainbow Rolex', url: '/assets/pfp_gen_2/a_watch_emerald.png' },
        { id: 'a_katana', name: 'Katana', url: '/assets/pfp_gen_2/a_katana.png' },
        { id: 'a_mustache', name: 'Mustache', url: '/assets/pfp_gen_2/a_mustache.png' },
        { id: 'a_mace', name: 'Mace', url: '/assets/pfp_gen_2/a_mace.png' },
        { id: 'a_flail', name: 'Flail', url: '/assets/pfp_gen_2/a_flail.png' },
        { id: 'a_nunchucks', name: 'Nunchucks', url: '/assets/pfp_gen_2/a_nunchucks.png' },
        { id: 'a_shuriken', name: 'Shuriken', url: '/assets/pfp_gen_2/a_shuriken.png' },
        { id: 'a_chopsticks', name: 'Chopsticks', url: '/assets/pfp_gen_2/a_chopsticks.png' },
        { id: 'a_cigar', name: 'Cuban Cigar', url: '/assets/pfp_gen_2/a_cigar.png' },
        { id: 'a_cigarette', name: 'Cigarette', url: '/assets/pfp_gen_2/a_cigarette.png' },
        { id: 'a_sniper', name: 'Desert Sniper', url: '/assets/pfp_gen_2/a_sniper.png' },
        { id: 'a_diamondsmg', name: 'Diamond SMG', url: '/assets/pfp_gen_2/a_diamondsmg.png' },
        { id: 'a_goldsmg', name: 'Gold SMG', url: '/assets/pfp_gen_2/a_goldsmg.png' },
        { id: 'a_middlefinger', name: 'Middle Finger', url: '/assets/pfp_gen_2/a_middlefinger.png' },
    ]
};

const PfpGenerator = () => {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const [isDownloading, setIsDownloading] = useState(false);
    const [selections, setSelections] = useState({
        Background: ASSETS.Background[0],
        Headwear: ASSETS.Headwear[0],
        Glasses: ASSETS.Glasses[0],
        Clothing: ASSETS.Clothing[0],
        Accessories: ASSETS.Accessories[0]
    });

    const handleSelect = (category, item) => {
        setSelections(prev => ({
            ...prev,
            [category]: item
        }));
    };

    const handleDownload = async () => {
        setIsDownloading(true);
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        // Order matters! Background -> Base Cat -> Clothing -> Headwear -> Glasses -> Accessories (Always Front)
        const layersToDraw = [
            selections.Background?.url,
            '/assets/base-cat.png',
            selections.Clothing?.url,
            selections.Headwear?.url,
            selections.Glasses?.url,
            selections.Accessories?.url
        ].filter(Boolean); // This removes any empty string URLs ("None" selections)

        const loadImage = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'anonymous'; // Avoid CORS issues
                img.onload = () => resolve(img);
                img.onerror = () => reject(new Error(`Failed to load background image`));
                img.src = src;
            });
        };

        try {
            // Give it a solid background dark fill just in case they don't have a background set
            if (!selections.Background?.url) {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            for (const url of layersToDraw) {
                const img = await loadImage(url);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }

            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'trenchcat-pfp.png';
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error generating image:', error);
            alert('Failed to generate image. Please try again.');
        } finally {
            setIsDownloading(false);
        }
    };

    const randomOutfit = () => {
        const randomSelections = {};
        CATEGORIES.forEach(cat => {
            const items = ASSETS[cat];
            // For Background, skip index 0 ("None") so there is always a background
            const minIdx = cat === 'Background' ? 1 : 0;
            const randIdx = Math.floor(Math.random() * (items.length - minIdx)) + minIdx;
            randomSelections[cat] = items[randIdx];
        });
        setSelections(randomSelections);
    };

    return (
        <section className="generator-section align-center">
            <div className="section-header text-center">
                <h2 className="title-gradient">PFP Generator</h2>
            </div>

            <div className="generator-container glass-panel">

                {/* Left Side: Preview Canvas */}
                <div className="preview-container dark-card">
                    <div className={`canvas-wrapper ${!selections.Background?.url ? 'bg-white' : ''}`}>
                        {/* Base Layer */}
                        <img src="/assets/base-cat.png" alt="Base Cat" className="layer-img base-layer" />

                        {/* Accessory Layers */}
                        {/* Ensure Accessories are drawn last so they appear on very top */}
                        {['Background', 'Clothing', 'Headwear', 'Glasses', 'Accessories'].map(cat => {
                            const item = selections[cat];
                            if (!item || !item.url) return null;

                            return (
                                <img
                                    key={cat}
                                    src={item.url}
                                    alt={item.name}
                                    className={`layer-img layer-${cat.toLowerCase()} animate-fade-in`}
                                />
                            );
                        })}
                    </div>

                    <div className="preview-actions">
                        <button className="btn-secondary" onClick={randomOutfit}>
                            <span>🎲</span> Randomize
                        </button>
                        <button className="btn-primary" onClick={handleDownload} disabled={isDownloading}>
                            {isDownloading ? 'Downloading...' : 'Download PFP'}
                        </button>
                    </div>
                </div>

                {/* Right Side: Configuration */}
                <div className="config-container">
                    <div className="category-tabs">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="items-grid custom-scrollbar">
                        {ASSETS[activeCategory].map(item => (
                            <button
                                key={item.id}
                                className={`item-card ${selections[activeCategory].id === item.id ? 'selected' : ''}`}
                                onClick={() => handleSelect(activeCategory, item)}
                            >
                                <div className={`item-thumbnail ${activeCategory === 'Background' ? 'bg-thumbnail' : ''}`}>
                                    {item.url ? (
                                        <img src={item.url} alt={item.name} />
                                    ) : (
                                        <div className="none-placeholder">X</div>
                                    )}
                                </div>
                                <span className={`item-name ${activeCategory === 'Background' ? 'bg-name' : ''}`}>{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PfpGenerator;
