/**
 * BuildSphere - Interactive Construction Cost Estimator Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  const typeRadios = document.querySelectorAll('input[name="est-type"]');
  const qualityRadios = document.querySelectorAll('input[name="est-quality"]');
  const areaSlider = document.getElementById('est-area-slider');
  const areaInput = document.getElementById('est-area-input');
  const floorsSelect = document.getElementById('est-floors-select');
  const quotationBtn = document.getElementById('btn-get-quotation');
  
  // Display elements
  const displayCostRange = document.getElementById('est-display-cost');
  const displaySqftRate = document.getElementById('est-display-rate');
  const displayBuiltup = document.getElementById('est-display-area');
  const displaySpecText = document.getElementById('est-display-spec');
  const displayTierLabel = document.getElementById('est-display-tier');

  // Rates configuration (Loaded dynamically with fallback)
  let ratesConfig = {
    residential: {
      basic: { rate: 1650, label: 'Basic Package', spec: 'UltraTech/Zuari Cement, Fe-500 Steel, Standard Red Bricks, Vitrified 2x2 Tiles, Asian Paints, Standard UPVC Windows' },
      standard: { rate: 1950, label: 'Standard Package', spec: 'Grade 53 Cement, Vizag/Tata TMT Steel, Wire-cut Bricks, 2x4 Glazed Vitrified Tiles, Teak Wood Main Door, Jaguar/Cera Fittings, Finolex Wiring' },
      premium: { rate: 2400, label: 'Premium Package', spec: 'Tata Tiscon TMT Steel, Ready-Mix Concrete M25, Full Teak Wood Frames, Italian Marble / GVT Flooring, Grohe/Kohler Bathrooms, Full False Ceiling' },
      luxury: { rate: 2900, label: 'Ultra Luxury', spec: 'Architectural Customization, Imported Marble, Smart Home Automation, Soundproof Double Glazed Windows, Designer Landscapes, VRV AC Conduits' }
    },
    commercial: {
      basic: { rate: 1750, label: 'Commercial Basic', spec: 'Commercial Grade RCC Frame, Vitrified Flooring, Heavy-duty Aluminium Glazing, Standard Fire Safety Conduits' },
      standard: { rate: 2200, label: 'Commercial Standard', spec: 'Curtain Wall Structural Glazing, High-Traffic Granite/Tile Flooring, Concealed HVAC ducts, High-Speed Lift Shafts' },
      premium: { rate: 2750, label: 'Commercial Premium', spec: 'Grade A Corporate Finishes, Acoustic Ceilings, Integrated Access Control, Full Fire Fighting Hydrant System, Energy-Efficient Low-E Glass' },
      luxury: { rate: 3200, label: 'Corporate Tower', spec: 'Double skin facade, LEED certified green specs, 100% backup power infrastructure' }
    },
    renovation: {
      basic: { rate: 800, label: 'Renovation Basic', spec: 'Plaster repairs, Wall skim coating, Full exterior & interior repainting, Basic electrical rewiring, Waterproofing patch repairs' },
      standard: { rate: 1250, label: 'Renovation Modern', spec: 'New tile overlay, Modern false ceiling with LED profiles, Bathroom remodelling with sanitary upgrade, Elevation modern cladding' },
      premium: { rate: 1750, label: 'Complete Overhaul', spec: 'Structural strengthening, Layout reconfiguration, New plumbing/wiring lines, Premium flooring, Designer facade facelift, 5-Yr Guaranteed Waterproofing' },
      luxury: { rate: 2200, label: 'Heritage Restoration', spec: 'Specialized structural retrofitting, luxury interior remodel, soundproofing, high-end facade enhancement' }
    },
    floorMultipliers: {
      g: 1.0,
      g1: 1.95,
      g2: 2.9,
      g3: 3.85,
      g4: 4.8
    }
  };

  // Fetch updated rates from API
  fetch('/api/estimator-rates')
    .then(r => r.json())
    .then(data => {
      if (data && data.residential) {
        ratesConfig = data;
        calculateEstimate();
      }
    })
    .catch(() => {
      // Use fallback defaults
      calculateEstimate();
    });

  // Number formatting in Lakhs / Crores
  function formatINR(val) {
    if (val >= 10000000) {
      return '₹' + (val / 10000000).toFixed(2) + ' Cr';
    }
    return '₹' + (val / 100000).toFixed(2) + ' Lakhs';
  }

  function getSelectedType() {
    const checked = document.querySelector('input[name="est-type"]:checked');
    return checked ? checked.value : 'residential';
  }

  function getSelectedQuality() {
    const checked = document.querySelector('input[name="est-quality"]:checked');
    return checked ? checked.value : 'standard';
  }

  function calculateEstimate() {
    const type = getSelectedType();
    const quality = getSelectedQuality();
    const area = parseFloat(areaSlider.value) || 1500;
    const floorKey = floorsSelect ? floorsSelect.value : 'g1';

    const multiplier = (ratesConfig.floorMultipliers && ratesConfig.floorMultipliers[floorKey]) || 1.95;
    const totalBuiltup = Math.round(area * multiplier);

    const typeRates = ratesConfig[type] || ratesConfig.residential;
    const tier = typeRates[quality] || typeRates.standard || { rate: 1950, label: 'Standard Package', spec: 'Standard Specs' };

    const baseCost = tier.rate * totalBuiltup;
    const minCost = Math.round(baseCost * 0.95);
    const maxCost = Math.round(baseCost * 1.08);

    if (displayCostRange) {
      displayCostRange.textContent = `${formatINR(minCost)} – ${formatINR(maxCost)}`;
    }
    if (displaySqftRate) {
      displaySqftRate.textContent = `Approx ₹${Math.round(tier.rate * 0.95)} – ₹${Math.round(tier.rate * 1.08)} / sq.ft`;
    }
    if (displayBuiltup) {
      displayBuiltup.textContent = `${totalBuiltup.toLocaleString()} Sq.Ft (${floorsSelect ? floorsSelect.options[floorsSelect.selectedIndex].text : 'G+1'})`;
    }
    if (displaySpecText) {
      displaySpecText.textContent = tier.spec;
    }
    if (displayTierLabel) {
      displayTierLabel.textContent = `${type.toUpperCase()} • ${tier.label.toUpperCase()}`;
    }

    // Also update quick hero calculator if present
    const heroCostVal = document.getElementById('hero-calc-val');
    if (heroCostVal) {
      heroCostVal.textContent = `${formatINR(minCost)} – ${formatINR(maxCost)}`;
    }
  }

  // Event Listeners
  typeRadios.forEach(r => r.addEventListener('change', calculateEstimate));
  qualityRadios.forEach(r => r.addEventListener('change', calculateEstimate));

  if (areaSlider && areaInput) {
    areaSlider.addEventListener('input', (e) => {
      areaInput.textContent = `${e.target.value} Sq.Ft Plot / Footprint`;
      calculateEstimate();
    });
  }

  if (floorsSelect) {
    floorsSelect.addEventListener('change', calculateEstimate);
  }

  // Hero Quick Calculator trigger
  const heroType = document.getElementById('hero-calc-type');
  const heroArea = document.getElementById('hero-calc-area');
  const heroQuality = document.getElementById('hero-calc-quality');
  if (heroType && heroArea && heroQuality) {
    function updateHeroCalc() {
      const type = heroType.value;
      const area = parseFloat(heroArea.value) || 1500;
      const qual = heroQuality.value;
      const rateObj = (ratesConfig[type] && ratesConfig[type][qual]) || { rate: 1950 };
      const total = area * 1.95 * rateObj.rate;
      const heroCostVal = document.getElementById('hero-calc-val');
      if (heroCostVal) {
        heroCostVal.textContent = `${formatINR(total * 0.95)} – ${formatINR(total * 1.08)}`;
      }
    }
    heroType.addEventListener('change', updateHeroCalc);
    heroArea.addEventListener('input', updateHeroCalc);
    heroQuality.addEventListener('change', updateHeroCalc);
    updateHeroCalc();
  }

  // Quotation Handover to Consultation Form
  if (quotationBtn) {
    quotationBtn.addEventListener('click', () => {
      const type = getSelectedType();
      const quality = getSelectedQuality();
      const area = areaSlider ? areaSlider.value : '1500';
      const costRange = displayCostRange ? displayCostRange.textContent : '';

      // Open Consultation Modal or scroll to form
      const modal = document.getElementById('consultation-modal');
      const formType = document.getElementById('consult-project-type');
      const formArea = document.getElementById('consult-area');
      const formMsg = document.getElementById('consult-message');

      if (formType) {
        formType.value = type === 'commercial' ? 'Commercial Construction' : (type === 'renovation' ? 'Building Renovation' : 'Residential Construction');
      }
      if (formArea) {
        formArea.value = `${area} sq.ft (${quality} quality)`;
      }
      if (formMsg) {
        formMsg.value = `I generated a preliminary cost estimate (${costRange}) for my ${type} project. Please contact me with a detailed architectural breakdown and quotation.`;
      }

      if (modal) {
        modal.classList.add('open');
      } else {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // Initial Run
  calculateEstimate();
});
