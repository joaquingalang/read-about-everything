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

function updateNavbar() {
    let windowWidth = $(window).width();
    console.log(`Window Width: ${windowWidth}`);
    console.log($(".nav-options"));
    console.log($(".hamburger-btn"));

    if (windowWidth < 564) {
        $(".nav-options").addClass("inactive");
        $(".hamburger-btn").removeClass("inactive");
    } else {
        $(".nav-options").removeClass("inactive");
        $(".hamburger-btn").addClass("inactive");
    }

}

$(window).on("load", renderHeroTitle);

$(window).on("load", updateNavbar);

$(window).resize(updateNavbar);

$(".hamburger-btn").on("click", function() {
    $(".nav-options").toggleClass("inactive");
});