const years = Array.from({ length: 16 }, (_, index) => 2010 + index);
const letters = ["A", "B", "C", "D"];

const questionBank = {
	Physics: [
		["A car travels 120 m in 8 s. What is its average speed?", ["10 m/s", "15 m/s", "20 m/s", "960 m/s"], 1, "Average speed = distance ÷ time = 120 ÷ 8 = 15 m/s."],
		["Which instrument measures electric current?", ["Voltmeter", "Barometer", "Ammeter", "Hydrometer"], 2, "An ammeter is connected in series to measure current in a circuit."],
		["A force of 12 N acts on a 3 kg mass. What is the acceleration?", ["0.25 m/s²", "4 m/s²", "9 m/s²", "36 m/s²"], 1, "From F = ma, a = F/m = 12/3 = 4 m/s²."],
		["The SI unit of work is the", ["watt", "newton", "joule", "pascal"], 2, "Work is measured in joules (J), equivalent to a newton-metre."],
		["Which wave can travel through a vacuum?", ["Sound wave", "Water wave", "Seismic wave", "Light wave"], 3, "Light is an electromagnetic wave and does not require a material medium."],
		["A 6 Ω resistor carries a current of 2 A. The potential difference is", ["3 V", "8 V", "12 V", "24 V"], 2, "Ohm's law gives V = IR = 2 × 6 = 12 V."],
		["The image formed by a plane mirror is always", ["real and inverted", "virtual and upright", "real and upright", "virtual and inverted"], 1, "A plane mirror forms a virtual, upright image of the same size as the object."],
		["A body of mass 4 kg moves at 3 m/s. Its momentum is", ["1.33 kg m/s", "7 kg m/s", "12 kg m/s", "24 kg m/s"], 2, "Momentum p = mv = 4 × 3 = 12 kg m/s."],
		["The period of a wave with frequency 5 Hz is", ["0.2 s", "2.5 s", "5 s", "25 s"], 0, "Period T = 1/f = 1/5 = 0.2 s."],
		["Which material is a good electrical insulator?", ["Copper", "Aluminium", "Rubber", "Iron"], 2, "Rubber resists the flow of electric charge and is an insulator."],
		["A machine does 600 J of work in 20 s. Its power is", ["12 W", "30 W", "120 W", "580 W"], 1, "Power = work/time = 600/20 = 30 W."],
		["The upward force exerted by a fluid on an immersed body is called", ["friction", "thrust", "upthrust", "tension"], 2, "Upthrust (buoyant force) acts upward on a body immersed in a fluid."],
		["A 2 kg object is raised through 5 m. Taking g = 10 m/s², its gain in potential energy is", ["10 J", "25 J", "100 J", "250 J"], 2, "Gain in gravitational potential energy = mgh = 2 × 10 × 5 = 100 J."],
		["Which colour of visible light has the longest wavelength?", ["Violet", "Blue", "Green", "Red"], 3, "Red light has the longest wavelength in the visible spectrum."],
		["A transformer works with", ["direct current only", "alternating current", "static charge", "chemical energy"], 1, "A changing magnetic flux from alternating current induces a voltage in the secondary coil."],
		["If the net force on a moving object is zero, the object", ["must stop immediately", "moves with constant velocity", "must accelerate", "loses all its mass"], 1, "Newton's first law states that zero net force means no change in velocity."],
	],
	Chemistry: [
		["The atomic number of an element is the number of", ["neutrons", "protons", "nucleons", "shells"], 1, "The atomic number equals the number of protons in the nucleus."],
		["A solution with pH 3 is", ["acidic", "neutral", "alkaline", "a salt"], 0, "A pH below 7 indicates an acidic solution."],
		["Which gas is released when dilute hydrochloric acid reacts with zinc?", ["Oxygen", "Chlorine", "Hydrogen", "Nitrogen"], 2, "Zinc reacts with dilute acid to form a salt and hydrogen gas."],
		["The bond in sodium chloride is mainly", ["covalent", "ionic", "metallic", "hydrogen"], 1, "Sodium transfers an electron to chlorine, forming oppositely charged ions."],
		["The relative molecular mass of H₂O is", ["10", "16", "18", "20"], 2, "H₂O has mass 2(1) + 16 = 18."],
		["Which method is most suitable for separating ethanol from water?", ["filtration", "fractional distillation", "decantation", "magnetic separation"], 1, "Ethanol and water are miscible liquids with different boiling points; fractional distillation separates them."],
		["A substance that speeds up a reaction without being used up is a", ["reactant", "catalyst", "solvent", "product"], 1, "A catalyst changes reaction rate and is regenerated at the end."],
		["The gas that turns limewater milky is", ["hydrogen", "ammonia", "carbon dioxide", "sulphur dioxide"], 2, "Carbon dioxide reacts with limewater to form insoluble calcium carbonate."],
		["Oxidation can be defined as the", ["gain of electrons", "loss of electrons", "gain of neutrons", "loss of protons"], 1, "In electron-transfer terms, oxidation is the loss of electrons."],
		["Which of these is a noble gas?", ["Chlorine", "Nitrogen", "Neon", "Hydrogen"], 2, "Neon is a Group 18 noble gas with a stable outer electron shell."],
		["The formula of calcium carbonate is", ["CaCO₃", "Ca₂CO₃", "Ca(CO₃)₂", "CaCO₂"], 0, "Ca²⁺ combines in a 1:1 ratio with CO₃²⁻ to give CaCO₃."],
		["The number of moles in 11 g of carbon dioxide (Mr = 44) is", ["0.25", "0.5", "2", "4"], 0, "Moles = mass/Mr = 11/44 = 0.25 mol."],
		["Which process occurs at the cathode during electrolysis?", ["oxidation", "reduction", "neutralisation", "combustion"], 1, "Positive ions gain electrons at the cathode; gain of electrons is reduction."],
		["The main component of natural gas is", ["ethane", "methane", "propane", "butane"], 1, "Methane is the principal constituent of natural gas."],
		["In the periodic table, elements in the same group generally have the same number of", ["neutrons", "occupied shells", "valence electrons", "isotopes"], 2, "For main-group elements, group membership corresponds to the number of outer-shell electrons."],
		["Which oxide is acidic?", ["Na₂O", "MgO", "CO₂", "CaO"], 2, "Carbon dioxide is a non-metal oxide that forms carbonic acid in water."],
	],
	Biology: [
		["The basic structural and functional unit of life is the", ["tissue", "organ", "cell", "organ system"], 2, "The cell is the smallest unit capable of carrying out life processes."],
		["Which cell organelle is the main site of aerobic respiration?", ["ribosome", "mitochondrion", "vacuole", "Golgi body"], 1, "Mitochondria release energy through aerobic respiration."],
		["The green pigment that traps light energy in plants is", ["haemoglobin", "melanin", "chlorophyll", "keratin"], 2, "Chlorophyll in chloroplasts absorbs light for photosynthesis."],
		["A plant tissue that transports water from roots is the", ["phloem", "xylem", "epidermis", "cambium"], 1, "Xylem vessels conduct water and mineral salts upward through a plant."],
		["The organ that produces insulin is the", ["liver", "pancreas", "kidney", "stomach"], 1, "The pancreas produces insulin, which helps regulate blood glucose."],
		["An organism that makes its own food is described as", ["a parasite", "a producer", "a consumer", "a decomposer"], 1, "Producers, such as green plants, make organic food from inorganic materials."],
		["The transfer of pollen from anther to stigma is called", ["fertilisation", "germination", "pollination", "transpiration"], 2, "Pollination is the transfer of pollen grains to a flower's stigma."],
		["Which blood cells help defend the body against infection?", ["red blood cells", "white blood cells", "platelets", "plasma cells only"], 1, "White blood cells help protect the body by destroying pathogens and producing antibodies."],
		["The loss of water vapour from leaves mainly through stomata is", ["respiration", "transpiration", "translocation", "excretion"], 1, "Transpiration is water loss from aerial plant parts, especially through stomata."],
		["A relationship in which both organisms benefit is", ["parasitism", "predation", "mutualism", "competition"], 2, "In mutualism, both participating organisms benefit."],
		["The male gamete in humans is the", ["ovum", "zygote", "sperm cell", "embryo"], 2, "The sperm cell is the male reproductive gamete."],
		["Which part of the brain helps coordinate balance and movement?", ["cerebrum", "cerebellum", "medulla", "hypothalamus"], 1, "The cerebellum coordinates posture, balance and voluntary movement."],
		["The first organisms to colonise a bare rock in primary succession are often", ["large trees", "lichens", "mammals", "flowering shrubs"], 1, "Lichens can grow on bare rock and help begin soil formation."],
		["The functional unit of the kidney is the", ["neuron", "alveolus", "nephron", " villus"], 2, "Each nephron filters blood and contributes to urine formation."],
		["A characteristic that improves an organism's chances of survival is an", ["adaptation", "acquired habit", "allele pair", "ecosystem"], 0, "An adaptation is an inherited feature that can improve survival or reproduction."],
		["The process by which a cell divides to produce two genetically identical daughter cells is", ["meiosis", "mitosis", "fertilisation", "budding only"], 1, "Mitosis produces two daughter cells with the same chromosome number and genetic information."],
	],
	Mathematics: [
		["Simplify 3(2x − 1) + 4.", ["6x − 1", "6x + 1", "5x + 3", "6x + 7"], 1, "Expand and collect terms: 6x − 3 + 4 = 6x + 1."],
		["Solve 2x + 5 = 17.", ["5", "6", "11", "12"], 1, "Subtract 5 to get 2x = 12, then divide by 2: x = 6."],
		["What is 25% of 240?", ["24", "48", "60", "80"], 2, "25% is one quarter; 240 ÷ 4 = 60."],
		["The angles of a triangle are 2x, 3x and x. Find the largest angle.", ["30°", "60°", "90°", "120°"], 1, "The angles sum to 180°: 6x = 180°, so x = 30° and the largest is 3x = 90°."],
		["Evaluate 2³ × 2².", ["2⁵", "2⁶", "4⁵", "4⁶"], 0, "For the same base, add exponents: 2³ × 2² = 2⁵."],
		["Find the gradient of the line through (1, 2) and (5, 10).", ["1", "2", "4", "8"], 1, "Gradient = (10 − 2)/(5 − 1) = 8/4 = 2."],
		["A bag has 3 red and 5 blue balls. What is the probability of picking a red ball?", ["3/5", "3/8", "5/8", "1/3"], 1, "There are 3 red balls out of 8 balls in total, so the probability is 3/8."],
		["Factorise x² − 9.", ["(x − 9)(x + 1)", "(x − 3)(x + 3)", "(x − 3)²", "(x + 9)(x − 1)"], 1, "This is a difference of squares: x² − 3² = (x − 3)(x + 3)."],
		["Find the mean of 4, 6, 8 and 10.", ["6", "7", "8", "28"], 1, "Mean = (4 + 6 + 8 + 10)/4 = 28/4 = 7."],
		["If y varies directly as x and y = 12 when x = 3, find y when x = 5.", ["15", "20", "24", "60"], 1, "Direct variation gives y = kx. Here k = 12/3 = 4, so y = 4 × 5 = 20."],
		["The circumference of a circle of radius 7 cm is (use π = 22/7)", ["22 cm", "44 cm", "49 cm", "154 cm"], 1, "Circumference = 2πr = 2 × 22/7 × 7 = 44 cm."],
		["Solve the simultaneous equations x + y = 9 and x − y = 3.", ["x = 3, y = 6", "x = 6, y = 3", "x = 9, y = 3", "x = 6, y = 9"], 1, "Adding the equations gives 2x = 12, so x = 6; then y = 3."],
		["Convert 0.375 to a fraction in its simplest form.", ["3/8", "3/5", "5/8", "375/100"], 0, "0.375 = 375/1000; dividing numerator and denominator by 125 gives 3/8."],
		["The value of sin 30° is", ["0", "1/2", "√3/2", "1"], 1, "From the standard trigonometric ratios, sin 30° = 1/2."],
		["Find the simple interest on ₦5,000 at 4% per annum for 2 years.", ["₦200", "₦400", "₦800", "₦4,000"], 1, "Simple interest = PRT/100 = 5000 × 4 × 2/100 = ₦400."],
		["The solutions of x² − 5x + 6 = 0 are", ["1 and 6", "−2 and −3", "2 and 3", "−2 and 3"], 2, "Factorise: (x − 2)(x − 3) = 0, giving x = 2 or x = 3."],
	],
	English: [
		["Choose the word nearest in meaning to ‘brief’.", ["Lengthy", "Concise", "Unclear", "Careless"], 1, "‘Concise’ means short and expressed clearly, making it nearest in meaning to ‘brief’."],
		["Choose the word opposite in meaning to ‘scarce’.", ["Rare", "Limited", "Abundant", "Small"], 2, "‘Abundant’ means plentiful, the opposite of ‘scarce’."],
		["Choose the correctly spelt word.", ["Accomodation", "Accommodation", "Acommodation", "Accommmodation"], 1, "The standard spelling is ‘accommodation’, with double c and double m."],
		["Complete the sentence: Neither the teacher nor the students ___ late.", ["was", "is", "were", "be"], 2, "With ‘neither … nor’, the verb agrees with the nearer subject, ‘students’, which is plural."],
		["Choose the word nearest in meaning to ‘reluctant’. ", ["Unwilling", "Excited", "Careless", "Certain"], 0, "‘Reluctant’ means unwilling or hesitant to do something."],
		["Choose the word opposite in meaning to ‘expand’. ", ["Increase", "Extend", "Contract", "Develop"], 2, "‘Contract’ means to become smaller, the opposite of ‘expand’."],
		["Complete the sentence: She has lived in Kano ___ 2020.", ["for", "since", "during", "by"], 1, "Use ‘since’ with a specific starting point in time."],
		["Identify the adjective in: ‘The diligent pupil completed the task.’", ["pupil", "completed", "diligent", "task"], 2, "‘Diligent’ describes the noun ‘pupil’, so it is an adjective."],
		["Choose the correct expression: The news ___ encouraging.", ["are", "were", "is", "have been"], 2, "‘News’ is an uncountable noun treated as singular, so it takes ‘is’."],
		["Choose the word nearest in meaning to ‘observe’. ", ["Notice", "Ignore", "Forget", "Avoid"], 0, "‘Observe’ can mean to watch or notice something carefully."],
		["Choose the word opposite in meaning to ‘generous’. ", ["Kind", "Selfish", "Helpful", "Friendly"], 1, "‘Selfish’ describes someone unwilling to give or share, opposite to ‘generous’."],
		["Complete the sentence: If I ___ you, I would apologise.", ["am", "was", "were", "be"], 2, "The subjunctive ‘were’ is used in this hypothetical conditional expression."],
		["Which punctuation mark ends a direct question?", ["Full stop", "Comma", "Question mark", "Colon"], 2, "A direct question ends with a question mark."],
		["Choose the correctly punctuated sentence.", ["After lunch we, went home.", "After lunch, we went home.", "After, lunch we went home.", "After lunch we went, home."], 1, "A comma follows the introductory phrase ‘After lunch’."],
		["Choose the word nearest in meaning to ‘diligent’. ", ["Hardworking", "Impatient", "Forgetful", "Ordinary"], 0, "A diligent person is careful and hardworking."],
		["Complete the sentence: The committee ___ submitted its report.", ["have", "has", "are", "were"], 1, "‘Committee’ is treated as a singular collective noun here, so use ‘has’."],
	],
};

const yearSelect = document.querySelector("#year-select");
const subjectButtons = [...document.querySelectorAll(".subject-button")];
const questionText = document.querySelector("#question-text");
const optionsElement = document.querySelector("#options");
const feedback = document.querySelector("#feedback");
const toast = document.querySelector("#toast");
let currentSubject = "Physics";
let currentQuestion = 0;
let selectedAnswer = null;
let answered = false;
let visibleQuestions = [];

yearSelect.innerHTML = `<option value="all">All years</option>${years.map(year => `<option value="${year}">${year}</option>`).join("")}`;

function getVisibleQuestions() {
	const selectedYear = yearSelect.value;
	return questionBank[currentSubject]
		.map((question, index) => ({ question, year: years[index] }))
		.filter(item => selectedYear === "all" || String(item.year) === selectedYear);
}

function renderQuestion() {
	visibleQuestions = getVisibleQuestions();
	if (!visibleQuestions.length) return;
	currentQuestion = Math.min(currentQuestion, visibleQuestions.length - 1);
	const item = visibleQuestions[currentQuestion];
	const [prompt, choices] = item.question;
	selectedAnswer = null;
	answered = false;
	questionText.textContent = prompt;
	document.querySelector("#current-subject").textContent = currentSubject.toUpperCase();
	document.querySelector("#question-number").textContent = String(currentQuestion + 1).padStart(2, "0");
	document.querySelector("#question-year").textContent = `${item.year} SET`;
	document.querySelector("#progress-label").textContent = `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;
	document.querySelector("#question-total").textContent = `OF ${visibleQuestions.length}`;
	document.querySelector("#set-count").textContent = `${visibleQuestions.length} QUESTION${visibleQuestions.length === 1 ? "" : "S"} IN THIS SET`;
	document.querySelector("#progress-fill").style.width = `${((currentQuestion + 1) / visibleQuestions.length) * 100}%`;
	optionsElement.innerHTML = choices.map((choice, index) => `<button class="option" type="button" data-index="${index}" aria-pressed="false"><span class="letter">${letters[index]}</span><span>${choice}</span></button>`).join("");
	optionsElement.querySelectorAll(".option").forEach(button => button.addEventListener("click", () => chooseAnswer(Number(button.dataset.index))));
	feedback.hidden = true;
	feedback.textContent = "";
	feedback.className = "feedback";
	document.querySelector("#check-button").disabled = false;
	document.querySelector("#check-button").innerHTML = 'Check answer <span>↗</span>';
	document.querySelector("#next-button").setAttribute("aria-label", currentQuestion === visibleQuestions.length - 1 ? "Restart question set" : "Next question");
}

function chooseAnswer(index) {
	if (answered) return;
	selectedAnswer = index;
	optionsElement.querySelectorAll(".option").forEach((button, optionIndex) => {
		button.classList.toggle("selected", optionIndex === index);
		button.setAttribute("aria-pressed", String(optionIndex === index));
	});
}

function checkAnswer() {
	if (answered) return;
	if (selectedAnswer === null) {
		toast.textContent = "Choose an option first.";
		toast.classList.add("show");
		window.setTimeout(() => toast.classList.remove("show"), 1800);
		return;
	}
	answered = true;
	const item = visibleQuestions[currentQuestion];
	const [, , correctIndex, explanation] = item.question;
	const isCorrect = selectedAnswer === correctIndex;
	optionsElement.querySelectorAll(".option").forEach((button, index) => {
		button.disabled = true;
		if (index === correctIndex) button.classList.add("correct");
		else if (index === selectedAnswer) button.classList.add("incorrect");
	});
	feedback.hidden = false;
	feedback.classList.toggle("wrong", !isCorrect);
	feedback.innerHTML = `<strong>${isCorrect ? "Correct." : `Not quite. The answer is ${letters[correctIndex]}.`}</strong> ${explanation}`;
	document.querySelector("#check-button").textContent = isCorrect ? "Answer checked" : "Review answer";
	document.querySelector("#check-button").disabled = true;
}

subjectButtons.forEach(button => button.addEventListener("click", () => {
	currentSubject = button.dataset.subject;
	currentQuestion = 0;
	subjectButtons.forEach(item => item.classList.toggle("active", item === button));
	renderQuestion();
}));

yearSelect.addEventListener("change", () => {
	currentQuestion = 0;
	renderQuestion();
});

document.querySelector("#check-button").addEventListener("click", checkAnswer);
document.querySelector("#next-button").addEventListener("click", () => {
	currentQuestion = currentQuestion === visibleQuestions.length - 1 ? 0 : currentQuestion + 1;
	renderQuestion();
});

renderQuestion();
