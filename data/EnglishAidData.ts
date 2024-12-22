import {AidData, aidStepType} from "../models/AidModal";

const nosebleedSteps: aidStepType[] = [
    {
        id: 1,
        step: "Step 1",
        title: "Sit Up and Lean Forward",
        description: "Sit upright and lean forward to prevent blood from flowing down the throat, reducing the risk of choking or stomach upset.",
        imagedsc: null,
    },
    {
        id: 2,
        step: "Step 2",
        title: "Keep the Head Up",
        description: "Maintain an elevated head position to further prevent blood from descending into the throat.",
        imagedsc: null,
    },
    {
        id: 3,
        step: "Step 3",
        title: "Gently Blow Your Nose",
        description: "Clear any blood clots by gently blowing your nose.",
        imagedsc: null,
    },
    {
        id: 4,
        step: "Step 4",
        title: "Pinch the Nose",
        description: "Use the thumb and a finger to pinch both nostrils shut. Breathe through the mouth. Keep pinching for 10 to 15 minutes. Pinching puts pressure on the blood vessels and helps stop the blood flow.",
        imagedsc: null,
    },
    {
        id: 5,
        step: "Step 5",
        title: "Repeat Pinching if Bleeding Persists",
        description: "If the bleeding doesn't stop, pinch the nose again for up to 15 minutes. Don't let go for at least five minutes even to check if the bleeding has stopped. Seek emergency care if the bleeding doesn't stop after the second try.",
        imagedsc: null,
    },
    {
        id: 6,
        step: "Step 6",
        title: "Prevent Another Nosebleed",
        description: "Avoid picking or blowing the nose. Refrain from dropping the head below the heart or lifting anything heavy for many hours. Gently apply a saline gel (Ayr), antibiotic ointment (Neosporin), or petroleum jelly (Vaseline) on the inside of the nose. Focus on the septum, the middle part of the nose. Steam, humidifiers, or an ice pack across the bridge of the nose may also help.",
        imagedsc: null,
    },
    {
        id: 7,
        step: "Step 7",
        title: "Repeat First-Aid Steps if Another Nosebleed Occurs",
        description: "If you have another nosebleed, repeat the first-aid steps. This time, spray both sides of the nose with a nasal spray that has oxymetazoline in it (Afrin). Do this after blowing the nose. Then pinch the nose again. Seek medical help if the bleeding does not stop.",
        imagedsc: null,
    },
];

const faintingSteps: aidStepType[] = [
    {
        id: 1,
        step: "Step 1",
        title: "Ensure Safety",
        description: "Check the surroundings for any potential hazards. Clear the area to prevent injury to the person who fainted.",
        imagedsc: null,
    },
    {
        id: 2,
        step: "Step 2",
        title: "Check for Consciousness",
        description: "Gently tap the person and ask loudly, 'Are you okay?' to check for responsiveness. If there's no response, they may be unconscious.",
        imagedsc: null,
    },
    {
        id: 3,
        step: "Step 3",
        title: "Call for Help",
        description: "If the person remains unconscious for more than a few seconds, call for emergency medical assistance immediately.",
        imagedsc: null,
    },
    {
        id: 4,
        step: "Step 4",
        title: "Positioning",
        description: "Carefully lay the person on their back. If possible, raise their legs above heart level to improve blood flow to the brain. This can help in case of a vasovagal syncope (common fainting cause).",
        imagedsc: null,
    },
    {
        id: 5,
        step: "Step 5",
        title: "Loosen Tight Clothing",
        description: "Loosen any tight clothing, especially around the neck, to facilitate better blood circulation.",
        imagedsc: null,
    },
    {
        id: 6,
        step: "Step 6",
        title: "Monitor Breathing",
        description: "Check if the person is breathing. If not, begin CPR if you are trained. If unsure, wait for professional medical assistance.",
        imagedsc: null,
    },
    {
        id: 7,
        step: "Step 7",
        title: "Revival and Recovery",
        description: "Stay with the person until they regain consciousness. Once awake, help them sit up slowly. Offer water and monitor their condition for any signs of confusion or other concerning symptoms.",
        imagedsc: null,
    },
    {
        id: 8,
        step: "Step 8",
        title: "Seek Medical Evaluation",
        description: "Encourage the person to seek medical evaluation to determine the cause of the fainting episode and address any underlying health issues.",
        imagedsc: null,
    },
];

const thermalBurnAidStepsEnglish: aidStepType[] = [
    {
        id: 1,
        step: "Step 1",
        title: "Call 911",
        description: "Call 911 if the burn penetrates all layers of the skin, the skin appears leathery or charred with white, brown, or black patches, or if the person is an infant or a senior.",
        imagedsc: null,
    },
    {
        id: 2,
        step: "Step 2",
        title: "Stop Burning Immediately",
        description: "Put out fire or stop the person's contact with hot liquid, steam, or other material. Help the person 'stop, drop, and roll' to smother flames. Remove smoldering material and hot/burned clothing. If clothing sticks to the skin, cut or tear around it.",
        imagedsc: null,
    },
    {
        id: 3,
        step: "Step 3",
        title: "Remove Constrictive Clothing Immediately",
        description: "Take off jewelry, belts, and tight clothing. Burns can swell quickly.",
        imagedsc: null,
    },
    {
        id: 4,
        step: "Step 4",
        title: "For First-Degree Burns (Affecting Top Layer of Skin): Cool Burn",
        description: "Cool the burn by holding burned skin under cool (not cold) running water or immerse in cool water until the pain subsides. Use compresses if running water isn't available. Protect the burn by covering it with a sterile, non-adhesive bandage or clean cloth. Do not apply butter, oil, lotions, or creams. Apply a petroleum-based ointment two to three times per day.",
        imagedsc: null,
    },
    {
        id: 5,
        step: "Step 5",
        title: "When to See a Doctor for First-Degree Burns",
        description: "Seek medical help if signs of infection occur, if tetanus or a booster shot is needed, if the burn blister is larger than two inches or oozes, if redness and pain last more than a few hours, if the pain worsens, or if the hands, feet, face, or genitals are burned.",
        imagedsc: null,
    },
    {
        id: 6,
        step: "Step 6",
        title: "For Second-Degree Burns (Affecting Top 2 Layers of Skin): Cool Burn",
        description: "Cool the burn by immersing it in cool water for 10 or 15 minutes. Use compresses if running water isn't available. Don't apply ice. It can lower body temperature and cause further pain and damage. Don't break blisters or apply butter or ointments, which can cause infection. Protect the burn by covering it loosely with a sterile, nonstick bandage and secure in place with gauze or tape. Prevent shock by laying the person flat, elevating feet about 12 inches, and covering with a coat or blanket. See a doctor for testing burn severity and treatment.",
        imagedsc: null,
    },
    {
        id: 7,
        step: "Step 7",
        title: "For Third-Degree Burns",
        description: "Call 911. Protect the burn area by covering it loosely with a sterile, nonstick bandage or a sheet. Prevent shock by laying the person flat, elevating feet about 12 inches, and covering with a coat or blanket. Do not soak the burn in water or apply ointments or butter, which can cause infection. For an airway burn, do not place a pillow under the person's head when the person is lying down. This can close the airway. Have a person with a facial burn sit up. Check pulse and breathing to monitor for shock until emergency help arrives. See a doctor for oxygen, fluids, and burn treatment.",
        imagedsc: null,
    },

]
const bruiseAidSteps: aidStepType[] = [
    {
        id: 1,
        step: "Step 1",
        title: "Elevate the Bruised Area",
        description: "Elevate the bruised area above heart level, if possible. This helps reduce blood flow to the injured area and minimizes swelling.",
        imagedsc: null,
    },
    {
        id: 2,
        step: "Step 2",
        title: "Apply Ice Pack",
        description: "Apply an ice pack wrapped in a thin towel to the bruised area. Leave it in place for 20 minutes. Repeat several times for a day or two after the injury. This helps reduce swelling and alleviate pain.",
        imagedsc: null,
    },
    {
        id: 3,
        step: "Step 3",
        title: "Use Elastic Bandage (If Swelling)",
        description: "If the bruised area is swelling, put an elastic bandage around it, but not too tight. The bandage helps compress the area, reducing swelling.",
        imagedsc: null,
    },
    {
        id: 4,
        step: "Step 4",
        title: "No Bandage Needed (If Skin Isn't Broken)",
        description: "If the skin isn't broken, you don't need to bandage a bruise. Allow the bruise to be exposed to air for natural healing. Consider taking a nonprescription pain reliever if needed.",
        imagedsc: null,
    },
]

const cutAndWoundAidSteps: aidStepType[] = [
    {
        id: 1,
        step: "Step 1",
        title: "Stop the Bleeding",
        description: "Apply direct pressure on the area to stop bleeding. Use a clean cloth or sterile gauze.",
        imagedsc: null,
    },
    {
        id: 2,
        step: "Step 2",
        title: "Clean and Protect",
        description: "Clean the area with warm water and gentle soap. Apply an antibiotic ointment to reduce the chance of infection. Put a sterile bandage on the area. If antibiotic ointments cause a rash, discontinue use.",
        imagedsc: null,
    },
    {
        id: 3,
        step: "Step 3",
        title: "Call a Doctor",
        description: "Call a doctor if the cut is deep or over a joint, if you cannot get the cut or laceration clean, if the injury is a deep puncture wound, or if the person has not had a recent tetanus shot or booster. Seek medical help for cuts from human or animal bites.",
        imagedsc: null,
    },
    {
        id: 4,
        step: "Step 4",
        title: "Follow Up",
        description: "For a minor cut or laceration, remove the bandage after a couple of days to promote healing. See a doctor if the cut doesn't heal or shows signs of infection, including redness, swelling, pus, or excessive pain.",
        imagedsc: null,
    },
];

export const aidData = [
    new AidData(1, "Nosebleed", `${require("../assets/noseBleeding.jpg")}`, nosebleedSteps, "There are various factors that can initiate a nosebleed. The primary culprit is often dry air, whether it's due to winter heating or residing in a warm, low-humidity environment. Additional triggers encompass activities such as nose-picking, frequent forceful nose-blowing, injuries resulting from falls or impacts to the nose, adverse effects of certain medications like blood thinners, allergies, and exposure to high altitudes where the air is notably thin.",  "To reduce the risk of nosebleeds, keep your nasal passages moist with petroleum jelly or antibiotic ointment, use saline nasal products, employ a humidifier, avoid smoking, refrain from nose-picking or excessive blowing, and keep your child's nails short. Use cold and allergy medications cautiously, consulting your doctor about potential effects on nosebleeds while continuing medication unless otherwise advised.") ,
     new AidData(2, "Fainting", `${require("../assets/6691752.jpg")}`,faintingSteps, "",""),
    new AidData(3,"First Aid for Thermal Burns", `${require("../assets/6691752.jpg")}`, thermalBurnAidStepsEnglish," ", ""),
    new  AidData(4,"First Aid for Bruises", `${require("../assets/6691752.jpg")}`, bruiseAidSteps,"Bumping into things a lot more lately for one reason or another. Maybe you just need a new pair of glasses.Some health conditions can cause you to bruise more often. Your doctor can diagnose a problem and offer you treatment, if it’s needed.","A bruise forms when blood vessels under the skin break. The trapped blood creates a bruise that's black, purple or blue then changes color as it heals."),
    new AidData(5,"First Aid for Cuts and Wounds", `${require("../assets/6691752.jpg")}`, cutAndWoundAidSteps,"Cuts and scrapes are going to happen, no matter how careful you are.  Most times, they aren’t too serious. But when they are, it’s important to know how to treat them yourself or whether you need to go to the doctor.", "")
];

