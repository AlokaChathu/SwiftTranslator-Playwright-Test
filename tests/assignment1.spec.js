const { test, expect } = require('@playwright/test');

const TARGET_URL = 'https://www.swifttranslator.com/';

test.describe('IT3040 Assignment 1 – Singlish to Sinhala Transliteration', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(TARGET_URL);
    await page.waitForLoadState('domcontentloaded');
  });

  /* -------------------- POSITIVE FUNCTIONAL TESTS (24) -------------------- */

  test('Pos_Fun_01: Simple daily sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('mama gedhara yanavaa.');
    await expect(page.locator('body')).toContainText('මම ගෙදර යනවා');
  });

  test('Pos_Fun_02: Compound sentence', async ({ page }) => {
    await page.locator('textarea').first().fill(
      'api kaeema kanna yamu.'
    );
    await expect(page.locator('body')).toContainText('අපි කෑම කන්න යමු.');
  });

  test('Pos_Fun_03: Complex conditional sentence', async ({ page }) => {
    await page.locator('textarea').first().fill(
      'oya enavaanam mama balan innavaa enne nathnam veelaasanin kiyanna.'
    );
    await expect(page.locator('body')).toContainText('ඔය එනවානම් මම බලන් ඉන්නවා එන්නෙ නත්නම් වේලාසනින් කියන්න.');
  });

  test('Pos_Fun_04: Interrogative question', async ({ page }) => {
    await page.locator('textarea').first().fill('oyaata kohomadha?');
    await expect(page.locator('body')).toContainText('ඔයාට කොහොමද?');
  });

  test('Pos_Fun_05: Imperative command', async ({ page }) => {
    await page.locator('textarea').first().fill('issarahata yanna.');
    await expect(page.locator('body')).toContainText('ඉස්සරහට යන්න.');
  });

  test('Pos_Fun_06: Positive form', async ({ page }) => {
    await page.locator('textarea').first().fill('api heta enavaa.');
    await expect(page.locator('body')).toContainText('අපි හෙට එනවා.');
  });

  test('Pos_Fun_07: Negative form', async ({ page }) => {
    await page.locator('textarea').first().fill('mama ehema karanne naehae.');
    await expect(page.locator('body')).toContainText('මම එහෙම කරන්නේ නැහැ.');
  });

  test('Pos_Fun_08: Greeting phrase', async ({ page }) => {
    await page.locator('textarea').first().fill('aayuboovan!');
    await expect(page.locator('body')).toContainText('ආයුබෝවන්!');
  });

  test('Pos_Fun_09: Polite request', async ({ page }) => {
    await page.locator('textarea').first().fill(
      'karuNaakaralaa mata podi udhavvak karanna.'
    );
    await expect(page.locator('body')).toContainText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න.');
  });

  test('Pos_Fun_10: Informal phrasing', async ({ page }) => {
    await page.locator('textarea').first().fill('ehema karapan.');
    await expect(page.locator('body')).toContainText('එහෙම කරපන්.');
  });

  test('Pos_Fun_11: Repeated emphasis words', async ({ page }) => {
    await page.locator('textarea').first().fill('hari hari  hodhin innavaa.');
    await expect(page.locator('body')).toContainText('හරි හරි  හොදින් ඉන්නවා.');
  });

  test('Pos_Fun_12: Joined words input', async ({ page }) => {
    await page.locator('textarea').first().fill('mama gedhara yanavaa.');
    await expect(page.locator('body')).toContainText('මම ගෙදර යනවා.');
  });

  test('Pos_Fun_13: Past tense', async ({ page }) => {
    await page.locator('textarea').first().fill('mama iiyee gedhara giyaa.');
    await expect(page.locator('body')).toContainText('මම ඊයේ ගෙදර ගියා.');
  });

  test('Pos_Fun_14: Present tense', async ({ page }) => {
    await page.locator('textarea').first().fill('mama dhaen vaeda karanavaa.');
    await expect(page.locator('body')).toContainText('මම දැන් වැඩ කරනවා.');
  });

  test('Pos_Fun_15: Future tense', async ({ page }) => {
    await page.locator('textarea').first().fill('api iilaga sathiyee yamu.');
    await expect(page.locator('body')).toContainText('අපි ඊලග සතියේ යමු.');
  });

  test('Pos_Fun_16: Pronoun variation', async ({ page }) => {
    await page.locator('textarea').first().fill('eyaalaa gedhara enavaa.');
    await expect(page.locator('body')).toContainText('එයාලා ගෙදර එනවා.');
  });

  test('Pos_Fun_17: Medium-length paragraph', async ({ page }) => {
    await page.locator('textarea').first().fill(
      'mama gedhara gihin raeta bath kaala passe poddak nidhagaththaa.'
    );
    await expect(page.locator('body')).toContainText('මම ගෙදර ගිහින් රැට බත් කාල පස්සෙ පොඩ්ඩක් නිදගත්තා.');
  });

  test('Pos_Fun_18: Long input robustness', async ({ page }) => {
    const longInput = 'mama gedhara yanavaa.'.repeat(30);
    await page.locator('textarea').first().fill(longInput);
    await expect(page.locator('body')).toContainText('මම ගෙදර යනවා.');
  });

  test('Pos_Fun_19: English brand name', async ({ page }) => {
    await page.locator('textarea').first().fill(
      'mama Zoom meeting ekakata join venavaa.'
    );
    await expect(page.locator('body')).toContainText('මම Zoom meeting එකකට join වෙනවා.');
  });

  test('Pos_Fun_20: Technical English word', async ({ page }) => {
    await page.locator('textarea').first().fill(
      'WiFi password eka mata evanna.'
    );
    await expect(page.locator('body')).toContainText('WiFi password එක මට එවන්න.');
  });

  test('Pos_Fun_21: Abbreviations', async ({ page }) => {
    await page.locator('textarea').first().fill(
      'mage NIC eka hoyaganna bae.'
    );
    await expect(page.locator('body')).toContainText('mage NIC එක හොයගන්න බැ.');
  });

  test('Pos_Fun_22: Currency and numbers', async ({ page }) => {
    await page.locator('textarea').first().fill(
      'Rs. 2500k mage account ekata dhenna.'
    );
    await expect(page.locator('body')).toContainText('Rs. 2500ක් mage account එකට දෙන්න.');
  });

  test('Pos_Fun_23: Date formats', async ({ page }) => {
    await page.locator('textarea').first().fill(
      '2026-05-21 mage exam eka thiyenavaa.'
    );
    await expect(page.locator('body')).toContainText('2026-05-21 mage exam එක තියෙනවා.');
  });

  test('Pos_Fun_24: Line breaks handling', async ({ page }) => {
    await page.locator('textarea').first().fill(
      'mama gedhara yanavaa.\n oyaa enavadha?'
    );
    await expect(page.locator('body')).toContainText('මම ගෙදර යනවා.\n ඔයා එනවද?');
  });


  /* -------------------- NEGATIVE FUNCTIONAL TESTS (10) -------------------- */

  test('Neg_Fun_01: Random meaningless characters', async ({ page }) => {
    await page.locator('textarea').first().fill('xxyyzzqwert');
    await expect(page.locator('body')).not.toContainText('මම');
  });

  test('Neg_Fun_02: Numbers only input', async ({ page }) => {
    await page.locator('textarea').first().fill('1234567890');
    await expect(page.locator('body')).not.toContainText('එක');
  });

  test('Neg_Fun_03: Symbols inside words', async ({ page }) => {
    await page.locator('textarea').first().fill('gedh@ra y@n@v@');
    await expect(page.locator('body')).not.toContainText('ගෙදර');
  });

  test('Neg_Fun_04: URL input', async ({ page }) => {
    await page.locator('textarea').first().fill('https://www.google.com');
    await expect(page.locator('body')).not.toContainText('ගූගල්');
  });

  test('Neg_Fun_05: Email address input', async ({ page }) => {
    await page.locator('textarea').first().fill('user123@email.com');
    await expect(page.locator('body')).not.toContainText('ඊමේල්');
  });

  test('Neg_Fun_06: Mixed upper and lower case chaos', async ({ page }) => {
    await page.locator('textarea').first().fill('MaMa GeDhArA YaNaVaA');
    await expect(page.locator('body')).not.toContainText('මම ගෙදර යනවා');
  });

  test('Neg_Fun_07: Emoji mixed with Singlish', async ({ page }) => {
    await page.locator('textarea').first().fill('mama geddhara yanavaa 😊');
    await expect(page.locator('body')).not.toContainText('මම ගෙදර යනවා 😊');
  });


  test('Neg_Fun_08: Code-like input', async ({ page }) => {
    await page.locator('textarea').first().fill('if(a==b){return;}');
    await expect(page.locator('body')).not.toContainText('නැවත');
  });

  test('Neg_Fun_09: Only punctuation', async ({ page }) => {
    await page.locator('textarea').first().fill('!!! ??? ...');
    await expect(page.locator('body')).not.toContainText('මම');
  });


  test('Neg_Fun_10: Excessive spacing causing instability', async ({ page }) => {
    await page.locator('textarea').first().fill('mama     gedhara     yanavaa');
    await expect(page.locator('body')).not.toContainText('මම ගෙදර යනවා.');
  });

  /* --------------------  UI SCENARIO (1 Test)-------------------- */


  test('Pos_UI_01: Real-time output update behavior', async ({ page }) => {

    const inputBox = page.locator('textarea').first();

    await inputBox.type('mama', { delay: 100 });

    await expect(page.locator('body')).toContainText('මම');

    await inputBox.type(' yamu', { delay: 100 });

    await expect(page.locator('body')).toContainText('මම යමු');
  });


});
