document.addEventListener('DOMContentLoaded', function () {

    const emblemOfFrostInput = document.getElementById('emblem-of-frost');
    const emblemOfTriumphInput = document.getElementById('emblem-of-triumph');
    const emblemOfConquestInput = document.getElementById('emblem-of-conquest');
    const emblemOfHeroismInput = document.getElementById('emblem-of-heroism');
    const emblemOfValorInput = document.getElementById('emblem-of-valor');
    const honorPointsInput = document.getElementById('honor-points');
    const arenaPointsInput = document.getElementById('arena-points');
    const stoneKeepersShardInput = document.getElementById('stone-keepers-shard');
    const wintergraspMarkOfHonorInput = document.getElementById('wintergrasp-mark-of-honor');

    const emblemOfFrostDisplay = emblemOfFrostInput.nextElementSibling;
    const emblemOfTriumphDisplay = emblemOfTriumphInput.nextElementSibling;
    const emblemOfConquestDisplay = emblemOfConquestInput.nextElementSibling;
    const emblemOfHeroismDisplay = emblemOfHeroismInput.nextElementSibling;
    const emblemOfValorDisplay = emblemOfValorInput.nextElementSibling;
    const honorPointsDisplay = honorPointsInput.nextElementSibling;
    const arenaPointsDisplay = arenaPointsInput.nextElementSibling;
    const stoneKeepersShardDisplay = stoneKeepersShardInput.nextElementSibling;
    const wintergraspMarkOfHonorDisplay = wintergraspMarkOfHonorInput.nextElementSibling;

    emblemOfFrostInput.addEventListener('input', function () {
        const frostValue = parseFloat(emblemOfFrostInput.value) || 0;
        const triumphValue = parseFloat(emblemOfTriumphInput.value) || 0;
        const frostTotal = frostValue * 11.58;
        const total = frostTotal + triumphValue * 11.58;

        if (total <= 4000) {
            emblemOfFrostDisplay.textContent = frostTotal;
        } else {
            emblemOfFrostInput.value = (4000 - triumphValue * 11.58) / 11.58;
            emblemOfFrostDisplay.textContent = 4000 - triumphValue * 11.58;
        }

        updateTotal('justice-points');
    });

    emblemOfTriumphInput.addEventListener('input', function () {
        const frostValue = parseFloat(emblemOfFrostInput.value) || 0;
        const triumphValue = parseFloat(emblemOfTriumphInput.value) || 0;
        const triumphTotal = triumphValue * 11.58;
        const total = frostValue * 11.58 + triumphTotal;

        if (total <= 4000) {
            emblemOfTriumphDisplay.textContent = triumphTotal;
        } else {
            emblemOfTriumphInput.value = (4000 - frostValue * 11.58) / 11.58;
            emblemOfTriumphDisplay.textContent = 4000 - frostValue * 11.58;
        }

        updateTotal('justice-points');
    });

    honorPointsInput.addEventListener('input', function () {
        const honorValue = parseFloat(honorPointsInput.value) || 0;
        const arenaValue = parseFloat(arenaPointsInput.value) || 0;
        const stoneValue = parseFloat(stoneKeepersShardInput.value) || 0;
        const winterValue = parseFloat(wintergraspMarkOfHonorInput.value) || 0;
        const honorTotal = honorValue * 0.024;
        const total = honorTotal + arenaValue * 0.85 + stoneValue * 1.6 + winterValue * 19.08;

        if (total <= 4000) {
            honorPointsDisplay.textContent = honorTotal;
        } else {
            honorPointsInput.value = (4000 - arenaValue * 0.85 - stoneValue * 1.6 - winterValue * 19.08) / 0.024;
            honorPointsDisplay.textContent = 4000 - arenaValue * 0.85 - stoneValue * 1.6 - winterValue * 19.08;
        }

        updateTotal('honor-points');
    });

    arenaPointsInput.addEventListener('input', function () {
        const honorValue = parseFloat(honorPointsInput.value) || 0;
        const arenaValue = parseFloat(arenaPointsInput.value) || 0;
        const stoneValue = parseFloat(stoneKeepersShardInput.value) || 0;
        const winterValue = parseFloat(wintergraspMarkOfHonorInput.value) || 0;
        const arenaTotal = arenaValue * 0.85;
        const total = honorValue * 0.024 + arenaTotal + stoneValue * 1.6 + winterValue * 19.08;

        if (total <= 4000) {
            arenaPointsDisplay.textContent = arenaTotal;
        } else {
            arenaPointsInput.value = (4000 - honorValue * 0.024 - stoneValue * 1.6 - winterValue * 19.08) / 0.85;
            arenaPointsDisplay.textContent = 4000 - honorValue * 0.024 - stoneValue * 1.6 - winterValue * 19.08;
        }

        updateTotal('honor-points');
    });

    stoneKeepersShardInput.addEventListener('input', function () {
        const honorValue = parseFloat(honorPointsInput.value) || 0;
        const arenaValue = parseFloat(arenaPointsInput.value) || 0;
        const stoneValue = parseFloat(stoneKeepersShardInput.value) || 0;
        const winterValue = parseFloat(wintergraspMarkOfHonorInput.value) || 0;
        const stoneTotal = stoneValue * 1.6;
        const total = honorValue * 0.024 + arenaValue * 0.85 + stoneTotal + winterValue * 19.08;

        if (total <= 4000) {
            stoneKeepersShardDisplay.textContent = stoneTotal;
        } else {
            stoneKeepersShardInput.value = (4000 - honorValue * 0.024 - arenaValue * 0.85 - winterValue * 19.08) / 1.6;
            stoneKeepersShardDisplay.textContent = 4000 - honorValue * 0.024 - arenaValue * 0.85 - winterValue * 19.08;
        }

        updateTotal('honor-points');
    });

    wintergraspMarkOfHonorInput.addEventListener('input', function () {
        const honorValue = parseFloat(honorPointsInput.value) || 0;
        const arenaValue = parseFloat(arenaPointsInput.value) || 0;
        const stoneValue = parseFloat(stoneKeepersShardInput.value) || 0;
        const winterValue = parseFloat(wintergraspMarkOfHonorInput.value) || 0;
        const winterTotal = winterValue * 19.08;
        const total = honorValue * 0.024 + arenaValue * 0.85 + stoneValue * 1.6 + winterTotal;

        if (total <= 4000) {
            wintergraspMarkOfHonorDisplay.textContent = winterTotal;
        } else {
            wintergraspMarkOfHonorInput.value = (4000 - honorValue * 0.024 - arenaValue * 0.85 - stoneValue * 1.6) / 19.08;
            wintergraspMarkOfHonorDisplay.textContent = 4000 - honorValue * 0.024 - arenaValue * 0.85 - stoneValue * 1.6;
        }

        updateTotal('honor-points');
    });

    emblemOfConquestInput.addEventListener('input', function () {
        const value = parseFloat(emblemOfConquestInput.value) || 0;
        emblemOfConquestDisplay.textContent = value * 5.5;
        updateTotal('gold-points');
    });

    emblemOfHeroismInput.addEventListener('input', function () {
        const value = parseFloat(emblemOfHeroismInput.value) || 0;
        emblemOfHeroismDisplay.textContent = value * 5.5;
        updateTotal('gold-points');
    });

    emblemOfValorInput.addEventListener('input', function () {
        const value = parseFloat(emblemOfValorInput.value) || 0;
        emblemOfValorDisplay.textContent = value * 5.5;
        updateTotal('gold-points');
    });

    // Select all text inputs within .points-section and set their initial values to 0
    const textInputs = document.querySelectorAll('.points-section input[type="text"]');
    textInputs.forEach(function (input) {
        input.value = '0';
    });

    // Attach event listener to each .points-section div to handle input events
    const sections = document.querySelectorAll('.points-section');
    sections.forEach(function (section) {
        console.log('Attaching event listener to section:', section);
        section.addEventListener('input', handleInputChange);
    });

    // Initialize total for each section
    sections.forEach(function (section) {
        updateTotal(section);
    });

    // Function to handle input events for text inputs
    function handleInputChange(event) {
        const input = event.target;
        console.log('Input changed:', input);
        const section = input.closest('.points-section');
        console.log('Section:', section);
        updateTotal(section);
    }



    // Update total for the specified section
    function updateTotal(section) {
        if (!(section instanceof Element)) {
            console.error('Invalid section:', section);
            return;
        }

        const displaySpans = section.querySelectorAll('.display');
        if (!displaySpans || displaySpans.length === 0) {
            console.error('No display spans found in section:', section);
            return;
        }

        let total = 0;
        displaySpans.forEach(function (span) {
            const value = parseFloat(span.textContent) || 0;
            total += value;
        });

        // Cap the total at 4000 for each section
        //total = Math.min(total, 4000);

        const totalCountSpan = section.querySelector('.total-count');
        if (!totalCountSpan) {
            console.error('No total count span found in section:', section);
            return;
        }

        totalCountSpan.textContent = 'Total: ' + total.toFixed(2);
    }


    // // Attach event listener to .points-section divs to handle input events for their text inputs
    // const pointsSections = document.querySelectorAll('.points-section');
    // pointsSections.forEach(function (section) {
    //     section.addEventListener('input', handleInputChange);
    // });

    // Initialize total for each section
}, { once: true });
