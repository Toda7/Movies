function checkYourReputationSection() {
    // Provera Reputation section text
    var xxx = element(by.className('my_reputation'));
    expect(xxx.getText()).toEqual('Your Reputation\nstars\nReputation Score: 230\nshow_chart\nReputation Rank: In top of 1% of CBANC Members\npie_chart\nReputation Trend: Moved up 0 spots this week');
}

function checkRank() {
    // Proverava da li se usitao Rank sekcija
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection.with-header .collection-header'), 'Rank'), 7000);
}

function checkMember() {
    // Proverava da li se usitao Rank sekcija
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection.with-header .collection-header'), 'Member'), 7000);
}

function checkScore() {
    // Proverava da li se usitao Rank sekcija
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement($('.collection.with-header .collection-header'), 'Score'), 7000);
}

module.exports = {
    checkYourReputationSection,
    checkRank,
    checkMember,
    checkScore,
}