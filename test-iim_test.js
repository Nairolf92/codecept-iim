
Feature('Test iim');

Scenario('test homepage', (I) => {
    I.amOnPage('https://iim.fr');
    I.fillField('#wpcf7-f9356-o1 > form > div.inbound-form > p:nth-child(1) > span > input', 'John');
    I.fillField('#wpcf7-f9356-o1 > form > div.inbound-form > p:nth-child(2) > span > input', 'Lennon');
});

Scenario('test header', (I) => {
    I.amOnPage('https://iim.fr');
    I.see('L’Ecole', 'a');
    I.see('Admissions', 'a');
    I.see('Axes', 'a');
    I.see('Programmes', 'a');
    I.see('Entreprises et débouchés', 'a');
    I.see('Vie étudiante', 'a');
    I.see('Galerie', 'a');
    I.see('Blog', 'a');
});

Scenario('test axes', (I) => {
    I.amOnPage('https://www.iim.fr/axes-metiers/animation-3d/');
    I.amOnPage('https://www.iim.fr/axes-metiers/developpement-web/');
    I.amOnPage('https://www.iim.fr/axes-metiers/communication-digitale-ebusiness/');
    I.amOnPage('https://www.iim.fr/axes-metiers/creation-design/');
    I.amOnPage('https://www.iim.fr/axes-metiers/animation-3d/');
});

Scenario('test facebook', (I) => {
    I.amOnPage('https://www.iim.fr');
    I.click('#social-media > div:nth-child(1) > a');
    I.wait(2);
    I.switchToNextTab(1);
    I.seeInCurrentUrl('https://www.facebook.com/Institut.Internet.Multimedia');
});

Scenario('test twitter', (I) => {
    I.amOnPage('https://www.iim.fr');
    I.click('#social-media > div:nth-child(2) > a');
    I.wait(2);
    I.switchToNextTab(1);
    I.seeInCurrentUrl('https://twitter.com/iimparis');
});

Scenario('test youtube', (I) => {
    I.amOnPage('https://www.iim.fr');
    I.click('#social-media > div:nth-child(3) > a');
    I.wait(2);
    I.switchToNextTab(1);
    I.seeInCurrentUrl('https://www.youtube.com/user/chaineIIM');
});

Scenario('test google', (I) => {
    I.amOnPage('https://www.iim.fr');
    I.click('#social-media > div:nth-child(4) > a');
    I.wait(2);
    I.switchToNextTab(1);
    I.seeInCurrentUrl('https://plus.google.com/+IIMfr');
});

Scenario('test alternance', (I) => {
    I.amOnPage('https://iim.fr');
    I.moveCursorTo('#menu-item-11902');
    I.click('#menu-item-11906 > a');
    I.see('Elodie Guéneau');
    I.see('elodie.gueneau@devinci.fr');
    I.click('#top > div.container.author.bloc_auteur > div.row.justify-content-around.pt-5 > div:nth-child(1) > p:nth-child(4) > a');
});