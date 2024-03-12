let nameInput = document.querySelector('#characterName');
let nameOutput = document.querySelector('#nameDetails');

let birthdayInput = document.querySelector('#birthday');
let birthdayOutput = document.querySelector('#dob');

let jobInput = document.querySelector('#job');
let jobOutput = document.querySelector('#PlayerJob')

let levelInput = document.querySelector('#level');
let levelOutput = document.querySelector('#currentLevel');

let strengthInput = document.querySelector('#strength');
let strengthOutput = document.querySelector('#currentStrength');

let dexterityInput = document.querySelector('#dexterity');
let dexterityOutput = document.querySelector('#currentDexterity');

let constitutionInput = document.querySelector('#constitution');
let constitutionOutput = document.querySelector('#currentConstitution');

let inteligenceInput = document.querySelector('#inteligence');
let inteligenceOutput = document.querySelector('#currentInteligence');

let wisdomInput = document.querySelector('#wisdom');
let wisdomOutput = document.querySelector('#currentWisdom');

let charismaInput = document.querySelector('#charisma');
let charismaOutput = document.querySelector('#currentCharisma');

let charge = document.querySelector('#charge');
let retreat = document.querySelector('#retreat');
let stealth = document.querySelector('#stealth');
let SkillsOutput = document.querySelector('#skills');

let fireball = document.querySelector('#fireball');
let flight = document.querySelector('#flight');
let invisible = document.querySelector('#invisible');
let MagicOutput = document.querySelector('#magic');

let weaponInput = document.querySelector('#weapon');
let weaponOutput = document.querySelector('#currentWeapon');

let armorInput = document.querySelector('#armor');
let armorOutput = document.querySelector('#currentArmor');

let moneyInput = document.querySelector('#money');
let moneyOutput = document.querySelector('#currentMoney');

let good = document.querySelector('#good');
let neutral = document.querySelector('#neutral');
let evil = document.querySelector('#evil');
let AlignmentOutput = document.querySelector('#alignment');

// This is called by the buttons onClick attribute
function ProcessForm()
{
    let nameDetails = "Name:" + nameInput.value;
    let dob = "Birthday: " + birthdayInput.value;
    let PlayerJob = "Class " + jobInput.value; 
    let currentLevel = "Level: " + levelInput.value;
    let currentStrength = "Strength: " + strengthInput.value;
    let currentDexterity = "Dexterity: " + dexterityInput.value;
    let currentConstitution = "Constitution: " + constitutionInput.value;
    let currentInteligence = "Intelligence: " + inteligenceInput.value;
    let currentWisdom = "Wisdom: " + wisdomInput.value;
    let currentCharisma = "Charisma: " + charismaInput.value;
    let skillsList = "Skills: ";
    if(charge.checked)
    {
        skillsList += "[Charge] ";
    }
    if(retreat.checked)
    {
        skillsList += "[Retreat] ";
    }
    if(stealth.checked)
    {
        skillsList += "[Stealth] ";
    }
    let magicList = "Magic: ";
    if(fireball.checked)
    {
        magicList += "[Fireball] ";
    }
    if(flight.checked)
    {
        magicList += "[Flight] ";
    }
    if(invisible.checked)
    {
        magicList += "[Invisible] ";
    }
    let currentWeapon = "Weapon: " + weaponInput.value;
    let currentArmor = "Armor: " + armorInput.value;
    let currentMoney = "Money: " + moneyInput.value + "G";
    let currentAlignment = "Alignment: ";
    if(good.checked)
    {
        currentAlignment += "Good"
    }
    if(neutral.checked)
    {
        currentAlignment += "Neutral"
    }
    if(evil.checked)
    {
        currentAlignment += "Evil"
    }

    nameOutput.innerHTML = nameDetails;
    birthdayOutput.innerHTML = dob;
    jobOutput.innerHTML = PlayerJob;
    levelOutput.innerHTML = currentLevel;
    strengthOutput.innerHTML = currentStrength;
    dexterityOutput.innerHTML = currentDexterity;
    constitutionOutput.innerHTML = currentConstitution;
    inteligenceOutput.innerHTML = currentInteligence;
    wisdomOutput.innerHTML = currentWisdom;
    charismaOutput.innerHTML = currentCharisma;
    skillsOutput.innerHTML = skillsList;
    magicOutput.innerHTML = magicList;
    weaponOutput.innerHTML = currentWeapon;
    armorOutput.innerHTML = currentArmor;
    moneyOutput.innerHTML = currentMoney;
    alignmentOutput.innerHTML = currentAlignment;
}