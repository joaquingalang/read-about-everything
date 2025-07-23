function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function renderHeroTitle() {
    const fullTitle = "read about everything.";
    let title = "";

    for (let i = 0; i < 5; i++) {
        $(".hero-title").text("|");
        await sleep(250);
        $(".hero-title").text("");
        await sleep(250);
    }

    for (let i = 0; i < fullTitle.length; i++) {
        title += fullTitle[i];
        $(".hero-title").text(title + "|")
        await sleep(80);
    }

    $(".hero-title").text(fullTitle + "|");
    await sleep(80);
    $(".hero-title").text(fullTitle);
}

