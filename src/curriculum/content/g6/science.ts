import type { SubjectCourse } from '../../types'

/**
 * Grade 6 Science — physical science and space.
 *
 * The organising commitment of this course is phenomenon-first. Every unit
 * opens with something the learner can see happening and cannot yet explain,
 * and the explanation is built afterwards because it is needed. Nothing here
 * begins with a definition.
 *
 * The other commitment is modelling. A twelve-year-old can absolutely handle
 * the particle model, the Earth-sun-moon system and deep time — what they
 * cannot handle is being told the answer and asked to believe it. So the
 * scripts spend their time building models, testing them against the
 * phenomenon, and being honest about where each model breaks.
 */
const course: SubjectCourse = {
  gradeId: 'g6',
  subjectId: 'science',
  title: 'Grade 6 Science: Matter, Energy and Space',
  overview:
    'This year is about what things are made of and what moves between them. Learners build a particle model of matter and then use it relentlessly: to explain states and state changes, to work out whether a chemical reaction has occurred, to account for mass that seems to vanish, and to explain why a metal handrail feels colder than a wooden bench at the same temperature. Then the scale jumps. The same habit of building and testing a model is turned on the sky, where a polystyrene ball and a lamp explain lunar phases, gravity explains the shape of the solar system, and a stack of rock layers turns out to be a readable record of four and a half billion years. Expect the learner to arrive with confident wrong explanations for almost all of it. Those explanations are the starting material.',
  yearGoals: [
    'Use a particle model of matter to explain structure, states, state change and thermal expansion, and know where the model stops working.',
    'Decide from evidence whether a chemical reaction has occurred, and account for every atom before and after it.',
    'Explain thermal energy transfer in terms of particle motion, and design and test a device that deliberately controls it.',
    'Use a physical model of the Earth-sun-moon system to explain and predict lunar phases, eclipses and seasons.',
    'Describe the solar system in terms of gravity and of scale, using real data rather than textbook pictures.',
    'Read a sequence of rock strata as evidence and construct an explanation of the events that produced it.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'g6-sci-u1',
      gradeId: 'g6',
      subjectId: 'science',
      sequence: 1,
      title: 'What Matter Is Made Of',
      bigIdea:
        'Everything is built from a small number of kinds of atom, and how those atoms are arranged decides almost everything about how the substance behaves.',
      description:
        'Opens with a phenomenon that has no sensible large-scale explanation: a pencil lead and a diamond are made of exactly the same atoms and behave nothing alike. From there learners build molecular and extended-structure models, then use the same model to explain states of matter and state change as differences in particle motion and arrangement. The unit ends where the model starts to strain, which is deliberate.',
      weeks: 6,
      standards: [
        { code: 'MS-PS1-1', framework: 'NGSS', text: 'Develop models to describe the atomic composition of simple molecules and extended structures.' },
        { code: 'MS-PS1-4', framework: 'NGSS', text: 'Develop a model that predicts and describes changes in particle motion, temperature, and state of a pure substance when thermal energy is added or removed.' },
        { code: 'MS-PS1-2', framework: 'NGSS', text: 'Analyze and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred.' },
      ],
      lessonTitles: [
        'Same Atoms, Different Substance',
        'Building Molecules: Models of What We Cannot See',
        'Solid, Liquid, Gas: A Difference in Motion',
        'Adding and Removing Energy: The Flat Bit on the Graph',
        'Squeezing a Gas, and What That Tells You About Space',
      ],
      performanceTask:
        'The Model Defence: given three unfamiliar substances and their properties — hardness, melting point, whether they conduct, whether they dissolve — the learner builds a physical model of the likely particle arrangement for each, presents it, and must answer two challenge questions about what their model predicts that they have not been told.',
      lessons: [
        {
          id: 'g6-sci-u1-l1',
          unitId: 'g6-sci-u1',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'Same Atoms, Different Substance',
          essentialQuestion: 'If a diamond and a pencil lead are both pure carbon, why is one the hardest thing you own and the other one smears?',
          summary:
            'The unit\'s anchoring phenomenon. Learners record everything they can observe about graphite and about a diamond or cubic zirconia, discover the two are made of identical atoms, and are left with a question that only a structural model can answer.',
          durationMin: 50,
          standards: [
            { code: 'MS-PS1-1', framework: 'NGSS', text: 'Develop models to describe the atomic composition of simple molecules and extended structures.' },
          ],
          objectives: [
            'I can describe the observable properties of two substances carefully.',
            'I can explain why identical atoms cannot by themselves explain different properties.',
            'I can state the question the rest of the unit has to answer.',
          ],
          vocabulary: [
            { term: 'atom', definition: 'The smallest particle of an element that still counts as that element.' },
            { term: 'property', definition: 'A characteristic of a substance you can observe or measure, such as hardness or melting point.' },
            { term: 'structure', definition: 'How the particles of a substance are arranged and connected.' },
          ],
          materials: ['A soft pencil and paper', 'A hard transparent stone — a diamond, cubic zirconia or clear quartz', 'A hand lens', 'A property recording table'],
          prep: [
            'Do not reveal that both are carbon until the observations are finished. The reveal is the hook and it only works once.',
            'Have a piece of graphite and a picture of a diamond ready if you have no stone.',
          ],
          script: [],
          worksheet: { id: 'g6-sci-u1-l1-ws', title: 'Two Substances, One Element', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Records at least five observable properties for each substance.', 'Articulates why "they are made of different stuff" cannot be the answer.'],
            exitTicket: 'Ask: what would you need to know about these two to explain the difference? Accept any answer that reaches for arrangement.',
          },
          differentiation: {
            support: ['Provide the property table pre-headed so the recording is about noticing, not about designing a table.'],
            extension: ['Research a third form of carbon — graphene or a fullerene — and predict its properties before looking them up.'],
          },
          misconceptions: [
            {
              misconception: 'Different properties must mean different ingredients.',
              looksLike: 'The learner insists there must be something else mixed into the pencil.',
              correction: 'Stay with the contradiction rather than resolving it. Write the question on the wall and leave it there for the next lesson.',
            },
          ],
          homeExtension: ['Find two objects in the house made of the same material that behave completely differently, and say what the difference is.'],
        },

        /* ------------------------------------------------------- AUTHORED */
        {
          id: 'g6-sci-u1-l2',
          unitId: 'g6-sci-u1',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 2,
          status: 'authored',
          title: 'Building Molecules: Models of What We Cannot See',
          essentialQuestion: 'How can we draw something nobody has ever seen, and how do we know the drawing is any good?',
          summary:
            'Learners build physical ball-and-stick models of water, carbon dioxide and methane, then extend to structures with no fixed size at all — the carbon lattice of diamond and the stacked sheets of graphite. The lesson answers the unit\'s opening phenomenon and, just as importantly, makes explicit what a scientific model is for and where each one lies.',
          durationMin: 55,
          standards: [
            { code: 'MS-PS1-1', framework: 'NGSS', text: 'Develop models to describe the atomic composition of simple molecules and extended structures.' },
            { code: 'MS-PS1-2', framework: 'NGSS', text: 'Analyze and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred.' },
          ],
          objectives: [
            'I can build a model showing which atoms are in a molecule and how many of each.',
            'I can explain the difference between a molecule and an extended structure.',
            'I can use structure to explain why graphite and diamond behave differently.',
            'I can name one thing my model gets wrong on purpose.',
          ],
          vocabulary: [
            { term: 'molecule', definition: 'A group of atoms bonded together, with a definite number of each kind.', example: 'One water molecule is two hydrogen atoms and one oxygen atom.' },
            { term: 'extended structure', definition: 'A substance whose atoms are bonded on and on in a repeating pattern, with no fixed molecule size.', example: 'Diamond, salt and sand are extended structures.' },
            { term: 'bond', definition: 'The connection holding two atoms together.' },
            { term: 'model', definition: 'A deliberately simplified representation used to explain and predict. Every model is wrong somewhere.' },
            { term: 'chemical formula', definition: 'A shorthand giving the kinds of atoms in a substance and how many of each.' },
          ],
          materials: [
            'Modelling clay or plasticine in three colours, or three sizes of dried bean or bead',
            'Cocktail sticks, matchsticks or short lengths of dry spaghetti for bonds',
            'A ruler, used only to keep bond lengths roughly equal',
            'The printed worksheet',
            'A pencil and coloured pencils',
            'Optionally, a pencil and a hard clear stone left over from the previous lesson',
          ],
          prep: [
            'Roll the clay into balls before the lesson: about twelve small ones of one colour, six medium of a second colour and six large of a third. Rolling clay eats fifteen minutes if you do it during the lesson.',
            'Agree the colour code out loud and write it down: one colour for hydrogen, one for oxygen, one for carbon. It does not matter which; it matters that it never changes.',
            'Build a water molecule yourself in advance and then take it apart. You want to have felt how awkward the bond angle is before you ask anyone else to make one.',
            'Have the diamond-versus-graphite question from the previous lesson still visible.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Draw Me Some Water',
              minutes: 7,
              say: [
                'Before anything else. Take the pencil and draw me water.',
                'Right — a wavy line, or a glass with a blue bit in it. That is not wrong. That is water at the size you are.',
                'Now here is the problem. I could show you that drawing and ask you why water freezes at zero and boils at a hundred, and why it sticks to itself in drops, and your drawing would have nothing to say.',
                'So we are going to draw water at a completely different size. Not a glass of it. One piece of it. The smallest piece that is still water.',
                'And I have to be honest with you before we start: nobody has ever seen one. Not with the best microscope on Earth. What we are about to build is a model, and models are things we make up on purpose because they let us predict things.',
                'The test of a model is not "is it a photograph". It is "does it tell me what will happen".',
              ],
              do: [
                'Actually make them draw it. Ten seconds is enough. The drawing has to exist for the point to land.',
                'Write the word MODEL on a card and put it in the middle of the table.',
                'Leave the previous lesson\'s diamond-versus-graphite question visible; you will come back to it in beat four.',
              ],
              studentDoes: ['Draws water at everyday scale, then articulates what that drawing cannot explain.'],
              checks: [
                {
                  ask: 'Name one thing about water your drawing cannot explain.',
                  lookFor: 'Freezing, boiling, drops sticking together, ice floating — anything requiring structure.',
                  ifStuck: 'Ask why ice floats on water when almost every other solid sinks in its own liquid. Nothing at glass-of-water scale touches that.',
                },
              ],
              tip: 'The honesty about nobody having seen an atom is not a caveat, it is the lesson. Learners who think a molecule model is a tiny photograph cannot understand why scientists argue about models, and cannot criticise one.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Two Hydrogens, One Oxygen, and an Awkward Angle',
              minutes: 12,
              say: [
                'Water is H two O. You have seen that written a hundred times. Today it stops being a code and becomes a set of instructions.',
                'H is hydrogen. The little two after it means there are two of them. O is oxygen, and no number means one. So: two hydrogen atoms, one oxygen atom, joined.',
                'Watch. Big ball for oxygen, in the middle. Two small balls for hydrogen. One stick from oxygen to each hydrogen.',
                'Now — do I put the hydrogens on opposite sides so the whole thing is a straight line? That is what most people do first, and it is wrong.',
                'They sit at an angle, like a very wide V. Roughly a hundred and five degrees. And that awkward angle is the reason water does almost everything interesting it does, including sticking to itself.',
                'Now carbon dioxide. CO two. One carbon, two oxygens. And THIS one is a straight line — oxygen, carbon, oxygen, flat.',
                'Two molecules, both with three atoms, and they behave completely differently. One is the sea and one is a gas you breathe out. Shape matters as much as ingredients.',
              ],
              do: [
                'Build the water molecule slowly in front of them. Deliberately build it straight first, then say "no, that is the mistake" and bend it.',
                'Hold the two finished models side by side — bent water, straight carbon dioxide — and say nothing for a moment. The contrast does the work.',
                'Write both formulas on the card next to the word MODEL, and read each one aloud as instructions rather than as a name.',
              ],
              studentDoes: ['Builds a water molecule and a carbon dioxide molecule, checking the atom counts against the formulas.'],
              checks: [
                {
                  ask: 'How many atoms altogether in one water molecule? How many kinds?',
                  lookFor: 'Three atoms, two kinds. Learners frequently answer "two" for the first because the formula has two letters.',
                  ifStuck: 'Have them touch and count the balls on their own model out loud.',
                },
                {
                  ask: 'If I gave you C H four, what would you build?',
                  lookFor: 'One carbon and four hydrogens. Do not require the tetrahedral shape yet; the counting is the target here.',
                },
              ],
              tip: 'Insist on the bend in water. If you let a straight water molecule stand, you will be undoing it in Grade 8 when they meet polarity, and the bend costs you nothing today.',
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'When the Molecule Never Stops',
              minutes: 14,
              say: [
                'Build me methane. C H four. One carbon, four hydrogens.',
                'Good. Now count. Five atoms, and then the molecule is finished. There is an edge to it. That is a molecule: a definite group with a definite number of atoms.',
                'Right. Now I am going to ask for something that breaks that.',
                'Build me a diamond. One carbon in the middle, four bonds coming off it, and on the end of each bond — another carbon. And each of THOSE gets four bonds.',
                'Keep going. Keep going. When do you stop?',
                'You do not. That is the answer. You stop when you run out of clay, and a real diamond stops when it runs out of diamond. There is no such thing as one diamond molecule. It is one enormous connected structure, and to break it you have to break actual bonds. That is why it is the hardest thing you own.',
                'Now graphite, same atoms. Each carbon bonds to only three others, and they make flat sheets of hexagons. The sheets stack, but the sheets are barely held to each other at all.',
                'So when you drag a pencil across paper — you are not breaking anything. You are sliding sheets off. That is your black line. Same atoms, different arrangement, completely different behaviour.',
              ],
              do: [
                'Let them keep building the diamond lattice until they physically run out of clay. Do not stop them early — the running out is the point being made.',
                'Model graphite with two or three flat cut-out hexagon sheets of paper stacked loosely, and slide the top one off with one finger.',
                'Put the pencil and the hard stone back on the table at this moment and let them answer the unit question themselves.',
              ],
              studentDoes: ['Builds a methane molecule, then an open-ended carbon lattice, and explains the graphite-diamond difference in terms of structure.'],
              checks: [
                {
                  ask: 'Why can I not tell you how many atoms are in one diamond?',
                  lookFor: 'Because it is not a molecule — the bonding pattern keeps repeating with no natural stopping point.',
                  ifStuck: 'Ask how many bricks are in "a wall". The question only makes sense for a particular wall.',
                },
                {
                  ask: 'Predict: would you expect graphite to melt at a lower temperature than diamond?',
                  lookFor: 'Reasoning from structure either way. The interesting bit is that both are very high, because sliding sheets apart is not the same as melting them.',
                },
                {
                  ask: 'What does your clay model get wrong?',
                  lookFor: 'Atoms are not coloured, there are no sticks, atoms are not solid balls, the spacing is wrong, nothing is moving.',
                },
              ],
              tip: 'The last check is the most valuable thing in the lesson. A learner who can list what their model fakes is doing science; a learner who thinks the model is a picture is doing decoration.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 17,
              say: [
                'The page now. You will be drawing the models you just built, and drawing is harder than building, so take your time.',
                'Section one: three molecules to draw from their formulas. Use circles of different sizes for different atoms and keep the sizes consistent down the whole page.',
                'Section two: read the formula and count. How many atoms of each kind, how many altogether. Watch the ones with brackets — those are there to catch you.',
                'Section three is the extended structures. You are not drawing all of it, obviously. Draw a piece and then draw the bonds heading off the edge of your box to show it carries on. That trailing bond is doing real work; do not tidy it away.',
                'Section four is the honest one. For each model on the page, write one thing it gets wrong.',
              ],
              do: [
                'Read all four sets of directions aloud before they start.',
                'Leave the physical clay models on the table while they draw. Working from the object rather than from memory is not cheating; it is what chemists do.',
                'Do not correct a drawing mid-flow. Wait, then ask them to check it against their own model.',
              ],
              studentDoes: ['Draws molecular and extended-structure models, counts atoms from formulas, and identifies limitations of each model.'],
              checks: [
                {
                  ask: 'Point at a bond on your diamond drawing that leaves the box. What is on the other end of it?',
                  lookFor: 'Another carbon, and another after that. The learner understands the drawing is a cut-out of something larger.',
                },
                {
                  ask: 'Which of your four drawings is a molecule and which is not, and how can you tell by looking?',
                  lookFor: 'Molecules have edges; extended structures have bonds running off the page.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Every Model Lies Somewhere',
              minutes: 5,
              say: [
                'Last thing, and it is the thing I actually want you to keep.',
                'Everything we built today is wrong. Atoms are not coloured. There are no little sticks. Atoms are not hard balls, they are mostly empty space with a fuzzy edge. And in a real substance nothing is sitting still — everything is vibrating, all the time.',
                'And the models are still enormously useful, because they let you predict things. You used one today to explain why a pencil writes. That is a real explanation and it came out of a lump of clay.',
                'So when I ask you for a model this year, I am never asking "what does it really look like". I am asking "what does this let you work out".',
                'Give me one thing today\'s models let you work out that you could not work out yesterday.',
              ],
              do: ['Keep one clay model intact somewhere visible until the end of the unit. It gets referred back to constantly.'],
              studentDoes: ['States both a use and a limitation of the models built today.'],
              checks: [
                {
                  ask: 'Is a model that is wrong in some ways a bad model?',
                  lookFor: 'No — a model is judged on what it predicts, not on how closely it resembles reality.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g6-sci-u1-l2-ws',
            title: 'Models of the Invisible',
            style: 'diagram',
            prepNotes:
              'Print in greyscale if you like, but tell the learner to use the same shading or size for the same element all the way down the page — inconsistency here is the main source of confusion. The extended-structure boxes in section three need to print large; if they come out small the trailing bonds will not fit and the whole point of that section is lost.',
            sections: [
              {
                id: 's1',
                title: 'Build It on Paper',
                directions:
                  'Draw a model of each molecule from its formula. Use a bigger circle for a bigger atom and keep every atom of the same kind the same size all the way down the page. Draw each bond as a single straight line. Write the number of atoms of each kind underneath.',
                layout: 'column',
                items: [
                  '1. Water, H2O — two hydrogen atoms and one oxygen atom. Remember the bend.',
                  '2. Carbon dioxide, CO2 — one carbon atom and two oxygen atoms, in a straight line.',
                  '3. Methane, CH4 — one carbon atom and four hydrogen atoms, spread out around the carbon.',
                  '4. Ammonia, NH3 — one nitrogen atom and three hydrogen atoms.',
                ],
                images: [
                  {
                    id: 'g6-sci-u1-img-water-model',
                    slot: 'Section 1 — worked example, water molecule',
                    purpose:
                      'Gives one correct worked model so the learner has a target for what counts as a good drawing, including the bent geometry that almost everyone draws straight on a first attempt.',
                    subject:
                      'a ball-and-stick model of a water molecule: one large central sphere with two smaller identical spheres joined to it by straight rods, the two rods meeting the central sphere at a wide open angle rather than in a straight line',
                    count: 3,
                    composition:
                      'the large sphere centred slightly low in the frame with the two small spheres above it to the left and right, the angle between the two bonds clearly wide and open at roughly one hundred and five degrees, both bonds exactly the same length, the two small spheres identical in size and clearly smaller than the central one, plain white background',
                    mustInclude: [
                      'exactly three spheres, one large and two identical smaller ones',
                      'exactly two straight bond rods of equal length',
                      'a visibly bent arrangement, definitely not a straight line',
                      'the two smaller spheres identical to each other in size and shade',
                    ],
                    mustAvoid: [
                      'any letters, chemical symbols, numbers or labels on or beside the spheres',
                      'the three atoms drawn in a straight line',
                      'extra spheres, electron clouds, orbit rings or shading suggesting charge',
                      'a laboratory, beaker or water background',
                    ],
                    aspect: '1:1',
                    altText: 'A ball-and-stick model of water: one large sphere bonded to two smaller spheres at a wide angle',
                  },
                  {
                    id: 'g6-sci-u1-img-co2-model',
                    slot: 'Section 1 — worked example, carbon dioxide molecule',
                    purpose:
                      'Placed directly against the water model so the learner sees two three-atom molecules with completely different shapes. The contrast is what teaches that a formula alone does not determine behaviour.',
                    subject:
                      'a ball-and-stick model of a carbon dioxide molecule: three spheres in a perfectly straight horizontal line, a medium central sphere with a larger sphere joined by a straight rod on each side',
                    count: 3,
                    composition:
                      'the three spheres arranged along one perfectly straight horizontal axis across the centre of the frame, the two outer spheres identical to each other and larger than the central one, both bond rods identical in length, generous white space above and below, plain white background',
                    mustInclude: [
                      'exactly three spheres in a perfectly straight line',
                      'the two outer spheres identical in size and shade as each other',
                      'exactly two bond rods of equal length',
                    ],
                    mustAvoid: [
                      'any letters, chemical symbols, numbers or labels',
                      'a bent or angled arrangement',
                      'extra atoms, electron shells or orbit rings',
                      'background scenery of any kind',
                    ],
                    aspect: '3:1',
                    altText: 'A ball-and-stick model of carbon dioxide: three spheres in a straight line',
                  },
                ],
                writingLines: 6,
              },
              {
                id: 's2',
                title: 'Count the Atoms',
                directions:
                  'For each formula, write how many atoms of each kind there are and how many atoms there are altogether. The last two have brackets — everything inside the bracket is multiplied by the number outside it.',
                layout: 'column',
                items: [
                  '1. H2O',
                  '2. CO2',
                  '3. C6H12O6 (glucose)',
                  '4. NaCl (table salt)',
                  '5. Ca(OH)2 (slaked lime)',
                  '6. Mg(NO3)2 (magnesium nitrate)',
                ],
                writingLines: 6,
              },
              {
                id: 's3',
                title: 'Structures With No Edge',
                directions:
                  'These two are not molecules — they carry on and on. Draw a piece of each inside the box, and draw the bonds continuing off the edge of the box to show it does not stop. Underneath, explain in one sentence why you cannot say how many atoms there are in one diamond.',
                layout: 'split',
                items: [
                  'Diamond: every carbon atom bonded to four others, spreading out in every direction.',
                  'Graphite: every carbon atom bonded to three others, making flat sheets of hexagons that stack loosely on top of one another.',
                  'Why can you not count the atoms in one diamond?',
                  'Use your two drawings to explain why a pencil writes and a diamond does not.',
                ],
                images: [
                  {
                    id: 'g6-sci-u1-img-diamond-lattice',
                    slot: 'Section 3 — diamond lattice fragment',
                    purpose:
                      'The whole diamond-versus-graphite explanation depends on seeing that the bonding runs in three dimensions with no stopping point. A fragment with bonds cut off at the frame edge shows continuation, which a tidy closed shape would hide.',
                    subject:
                      'a fragment of a three-dimensional carbon lattice: identical spheres joined by straight rods so that each interior sphere has four rods radiating from it towards four different directions, with rods at the outer edges cut off mid-length by the frame',
                    count: 17,
                    composition:
                      'a roughly cubic cluster of exactly seventeen identical spheres drawn in slight perspective so the three-dimensional arrangement is readable, every interior sphere showing four bonds, several bonds at the boundary running to the edge of the frame and stopping there without a sphere on the end, even spacing throughout, plain white background',
                    mustInclude: [
                      'every interior sphere joined by exactly four bonds',
                      'all spheres identical in size and shade, because they are all the same element',
                      'at least six bonds cut off by the frame edge with no sphere terminating them',
                      'a readable three-dimensional arrangement rather than a flat grid',
                    ],
                    mustAvoid: [
                      'any letters, symbols, numbers or labels',
                      'a neatly closed shape with every bond terminated, which would suggest a finite molecule',
                      'spheres of differing sizes or colours',
                      'a jewel, ring, sparkle effect or gemstone facets',
                    ],
                    aspect: '1:1',
                    altText: 'A fragment of the diamond lattice, each atom bonded to four others, with bonds running off the edge',
                  },
                  {
                    id: 'g6-sci-u1-img-graphite-sheets',
                    slot: 'Section 3 — stacked graphite sheets',
                    purpose:
                      'Shows the two different distances in graphite — tight bonds within a sheet and a wide gap between sheets. That single visual contrast is the entire explanation of why a pencil leaves a mark, and learners get it from the picture faster than from any sentence.',
                    subject:
                      'three flat parallel sheets of joined hexagons stacked one above another with a wide empty gap between each sheet, every hexagon made of identical spheres joined by short rods',
                    count: 3,
                    composition:
                      'three identical flat hexagonal sheets shown in slight perspective, stacked horizontally one above the other, the vertical gap between sheets visibly much larger than the distance between neighbouring spheres within a sheet, no connecting rods at all between the sheets, edges of each sheet ragged where the hexagons are cut by the frame, plain white background',
                    mustInclude: [
                      'exactly three separate stacked sheets',
                      'a gap between sheets that is clearly wider than the spacing between atoms inside a sheet',
                      'no bonds of any kind drawn between one sheet and the next',
                      'each sphere within a sheet joined to three neighbours',
                    ],
                    mustAvoid: [
                      'any letters, symbols, numbers or labels',
                      'vertical rods or bonds joining the sheets together',
                      'a pencil, paper or writing imagery',
                      'sheets touching or overlapping each other',
                    ],
                    aspect: '4:3',
                    altText: 'Three flat hexagonal carbon sheets stacked with wide gaps and no bonds between them',
                  },
                ],
                writingLines: 5,
              },
              {
                id: 's4',
                title: 'Where the Model Lies',
                directions:
                  'Look at the sphere below. It is how we draw an atom, and it is wrong in at least three ways. Write down three things a ball-and-stick model shows that are not true of real atoms, then write one thing the model is genuinely good for.',
                layout: 'full',
                items: [
                  'Wrong thing 1:',
                  'Wrong thing 2:',
                  'Wrong thing 3:',
                  'One thing this model lets me work out that I could not work out without it:',
                ],
                images: [
                  {
                    id: 'g6-sci-u1-img-single-atom-sphere',
                    slot: 'Section 4 — a single modelled atom',
                    purpose:
                      'Isolating one sphere makes the criticism concrete. Learners can look at a hard edge, a solid fill and a fixed position and name each as a lie, which is much harder to do when the sphere is embedded in a busy diagram.',
                    subject:
                      'a single plain sphere with a hard crisp outline and an even flat surface, shown alone with a short straight rod stub protruding from one side',
                    count: 1,
                    composition:
                      'one sphere centred in the frame, drawn large, with a clean unbroken outline and flat even shading, a single short straight rod protruding to the right and ending abruptly, a great deal of empty white space around it',
                    mustInclude: [
                      'exactly one sphere',
                      'a hard sharply defined outline',
                      'exactly one short rod stub attached to it',
                    ],
                    mustAvoid: [
                      'any letters, numbers, symbols or labels',
                      'a fuzzy, glowing or cloud-like edge',
                      'orbiting electrons, rings, a nucleus or internal structure',
                      'additional spheres or bonds',
                    ],
                    aspect: '1:1',
                    altText: 'A single hard-edged sphere with one short bond stub, as an atom is conventionally drawn',
                  },
                ],
                writingLines: 5,
              },
            ],
            answerKey: [
              'Section 1: water — one large oxygen bonded to two smaller hydrogens at a wide angle, three atoms in total. Carbon dioxide — three atoms in a straight line. Methane — one carbon with four hydrogens spread around it, five atoms. Ammonia — one nitrogen with three hydrogens, four atoms. Mark the atom counts and the consistency of circle sizes; do not mark the artistry.',
              'Section 2: H2O — 2 H, 1 O, 3 atoms. CO2 — 1 C, 2 O, 3 atoms. C6H12O6 — 6 C, 12 H, 6 O, 24 atoms. NaCl — 1 Na, 1 Cl, 2 atoms (and worth noting aloud that salt is really an extended structure, not a molecule). Ca(OH)2 — 1 Ca, 2 O, 2 H, 5 atoms. Mg(NO3)2 — 1 Mg, 2 N, 6 O, 9 atoms.',
              'Section 3: diamond drawn with four bonds per atom and bonds leaving the box; graphite drawn as separate sheets with nothing joining them. You cannot count the atoms in one diamond because it is not a molecule — the bonding pattern repeats until the crystal ends, so the number depends on the size of the stone. A pencil writes because whole sheets slide off, with no bonds broken between them; a diamond does not because marking it would mean breaking bonds in every direction.',
              'Section 4: accept any three of — atoms are not coloured, atoms have no hard edge, there are no physical sticks between them, atoms are mostly empty space, real atoms are constantly moving, the relative sizes are not to scale, and the spacing between atoms is not shown correctly. The model is good for showing how many atoms of each kind there are and how they are arranged relative to one another.',
            ],
          },
          assessment: {
            successCriteria: [
              'Builds and draws a molecule with the correct number of each kind of atom.',
              'Distinguishes a molecule from an extended structure and shows continuation with trailing bonds.',
              'Explains a property of a substance by reference to its structure rather than its ingredients.',
              'Names at least two specific limitations of the ball-and-stick model.',
            ],
            exitTicket:
              'On a slip of paper: draw a model of CH4 and write one thing your drawing gets wrong. Both halves required. The second half is the one that tells you whether the lesson landed.',
            rubric: [
              { level: 'emerging', descriptor: 'Counts atoms from a simple formula but treats the model as a picture of reality, and draws extended structures as closed finite shapes.' },
              { level: 'developing', descriptor: 'Builds accurate molecules and shows continuation in extended structures, but explains properties by naming the substance rather than by reasoning from arrangement.' },
              { level: 'secure', descriptor: 'Reasons from structure to property unprompted, distinguishes molecules from extended structures fluently, and can criticise the model without prompting.' },
            ],
          },
          differentiation: {
            support: [
              'Do only water and carbon dioxide. Two contrasting three-atom molecules deliver the shape-matters idea on their own.',
              'Pre-build the diamond lattice yourself so the learner extends an existing structure rather than starting one, which removes a lot of fiddly hand-work.',
              'Supply cut-out paper hexagons for graphite instead of building it from clay.',
            ],
            extension: [
              'Model an ionic extended structure — sodium chloride, alternating two sizes of sphere in a cube — and explain why it dissolves in water while diamond does not.',
              'Research graphene, a single graphite sheet, and predict three of its properties from the structure before checking.',
              'Work out how many atoms would be in a cube of diamond one millimetre on a side, given that atoms sit about 0.15 nanometres apart. The answer is absurd, and that is the point.',
            ],
            language: [
              'The formula notation is a genuine second symbolic system. Read every formula aloud as a full sentence — "one carbon and two oxygens" — every single time, for weeks.',
              'Element names and symbols are worth a bilingual glossary; many are shared across languages and that is a help, not a coincidence.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Atoms have the properties of the substance they make up — copper atoms are shiny, water molecules are wet.',
              looksLike: 'The learner colours the water molecule blue, or says the carbon atoms in graphite are grey and slippery.',
              correction: 'Ask how many atoms it would take to be shiny. Properties like wetness and shininess only exist for enormous numbers of particles together; a single one has none of them.',
            },
            {
              misconception: 'A chemical formula is a name, not a set of instructions.',
              looksLike: 'The learner reads "H2O" as a word and cannot say how many atoms it contains, or builds three atoms of hydrogen because there are three characters.',
              correction: 'Read every formula aloud as a count before building anything. Build directly from the spoken count rather than from the written symbol.',
            },
            {
              misconception: 'Every substance is made of molecules.',
              looksLike: 'The learner draws a "diamond molecule" as a neat closed shape with every bond terminated.',
              correction: 'Have them keep building until the clay runs out. The physical experience of never reaching an edge does what an explanation cannot.',
            },
          ],
          homeExtension: [
            'Find three chemical formulas on labels around the house — cleaning products and food packaging are full of them — and work out the atom counts.',
            'Look at a pencil line under a hand lens or a phone camera at maximum zoom, and describe what sliding sheets would look like from above.',
            'Ask someone at home to draw an atom, then interview them about what their drawing gets wrong. Almost everyone draws the orbiting-electrons version, which is itself an outdated model.',
          ],
          teacherNotes:
            'The clay is worth the mess. Learners who only draw molecules routinely produce flat, correct-looking diagrams while believing something quite different, and the misconception stays hidden. Building the lattice until the clay runs out is the single highest-value ninety seconds in the unit — protect it if you are short of time and cut section two of the worksheet instead. Do not go anywhere near electron shells or bonding theory today; the question on the table is arrangement, and adding a second unfamiliar model will cost you the first.',
        },

        {
          id: 'g6-sci-u1-l3',
          unitId: 'g6-sci-u1',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Solid, Liquid, Gas: A Difference in Motion',
          essentialQuestion: 'What is actually different about the same substance in three different states?',
          summary:
            'States of matter re-described as arrangement and motion rather than as three separate kinds of stuff. Learners model each state with their own bodies and then with particle diagrams.',
          durationMin: 50,
          standards: [
            { code: 'MS-PS1-4', framework: 'NGSS', text: 'Develop a model that predicts and describes changes in particle motion, temperature, and state of a pure substance when thermal energy is added or removed.' },
          ],
          objectives: [
            'I can draw the particle arrangement of a solid, a liquid and a gas.',
            'I can describe the motion in each state, not just the spacing.',
            'I can explain why a gas fills its container and a solid does not.',
          ],
          vocabulary: [
            { term: 'particle', definition: 'A general word for the atoms or molecules a substance is made of.' },
            { term: 'kinetic energy', definition: 'The energy something has because it is moving.' },
            { term: 'state', definition: 'Solid, liquid or gas — a description of how a substance\'s particles are arranged and how they move.' },
          ],
          materials: ['A tray of marbles or dried peas', 'A sealed clear bottle with a little water in it', 'The printed worksheet'],
          prep: ['Clear enough floor space for the learner to physically act out each state. The body model is the memorable one.'],
          script: [],
          worksheet: { id: 'g6-sci-u1-l3-ws', title: 'Three States, One Substance', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Draws all three states with correct spacing and describes the motion in each.', 'Explains a property from the model.'],
            exitTicket: 'Ask why you can pour a liquid but not a solid, in terms of particles.',
          },
          differentiation: {
            support: ['Act out all three states physically before drawing anything.'],
            extension: ['Explain why a gas exerts pressure on its container using the particle model.'],
          },
          misconceptions: [
            {
              misconception: 'Particles in a solid are completely still.',
              looksLike: 'A solid diagram described as "not moving".',
              correction: 'Vibration in place is still motion. Ask what would have to be true for a solid to warm up at all.',
            },
          ],
          homeExtension: ['Watch steam condense on a cold window and describe what the particles are doing.'],
        },
        {
          id: 'g6-sci-u1-l4',
          unitId: 'g6-sci-u1',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Adding and Removing Energy: The Flat Bit on the Graph',
          essentialQuestion: 'Why does the temperature stop rising while ice is melting, even though you keep heating it?',
          summary:
            'Learners heat ice water and plot temperature against time, producing the plateau themselves. The flat section is the phenomenon, and the particle model has to account for where the energy went.',
          durationMin: 55,
          standards: [
            { code: 'MS-PS1-4', framework: 'NGSS', text: 'Develop a model that predicts and describes changes in particle motion, temperature, and state of a pure substance when thermal energy is added or removed.' },
          ],
          objectives: [
            'I can plot a heating curve from my own measurements.',
            'I can explain what is happening to the particles during the flat section.',
            'I can predict the shape of a cooling curve.',
          ],
          vocabulary: [
            { term: 'melting point', definition: 'The temperature at which a solid becomes a liquid.' },
            { term: 'thermal energy', definition: 'The total energy of the moving particles in a substance.' },
            { term: 'plateau', definition: 'A flat section of a graph where the value stops changing.' },
          ],
          materials: ['Crushed ice', 'A heatproof beaker or small pan', 'A thermometer', 'A timer', 'Graph paper'],
          prep: [
            'Test the timing yourself once. You need enough ice that the plateau lasts several minutes, or the learner will not believe it is real.',
            'Agree the safety rules for the heat source out loud before anything is switched on.',
          ],
          script: [],
          worksheet: { id: 'g6-sci-u1-l4-ws', title: 'The Heating Curve', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Produces a heating curve with a visible plateau.', 'Explains the plateau in terms of bonds and arrangement rather than temperature.'],
            exitTicket: 'Ask where the energy goes during the flat section if the temperature is not rising.',
          },
          differentiation: {
            support: ['Provide pre-drawn axes with a sensible scale so all the effort goes into plotting and explaining.'],
            extension: ['Predict and then measure the cooling curve of hot water, and explain why the shape differs.'],
          },
          misconceptions: [
            {
              misconception: 'Heating always makes the temperature rise.',
              looksLike: 'The learner assumes the thermometer is broken during the plateau.',
              correction: 'Let them check with a second thermometer. Discovering the instrument is fine is what forces the model to change.',
            },
          ],
          homeExtension: ['Time how long a glass of iced water stays at zero degrees, and explain the result.'],
        },
        {
          id: 'g6-sci-u1-l5',
          unitId: 'g6-sci-u1',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Squeezing a Gas, and What That Tells You About Space',
          essentialQuestion: 'Why can you compress air in a syringe but not water?',
          summary:
            'A blocked syringe makes the difference between gas and liquid spacing immediately physical. Learners use the result to argue that most of a gas is empty space.',
          durationMin: 50,
          standards: [
            { code: 'MS-PS1-4', framework: 'NGSS', text: 'Develop a model that predicts and describes changes in particle motion, temperature, and state of a pure substance when thermal energy is added or removed.' },
            { code: 'MS-PS1-1', framework: 'NGSS', text: 'Develop models to describe the atomic composition of simple molecules and extended structures.' },
          ],
          objectives: [
            'I can compare the compressibility of a gas and a liquid.',
            'I can use particle spacing to explain the difference.',
            'I can explain what happens to gas particles when the volume is reduced.',
          ],
          vocabulary: [
            { term: 'compress', definition: 'To squeeze into a smaller volume.' },
            { term: 'volume', definition: 'The amount of space something takes up.' },
            { term: 'pressure', definition: 'The result of particles colliding with the walls of their container.' },
          ],
          materials: ['Two large plastic syringes with no needles', 'A finger or a bung to seal the nozzle', 'Water'],
          prep: ['Try both syringes yourself. The water one must genuinely refuse to move or the contrast is lost.'],
          script: [],
          worksheet: { id: 'g6-sci-u1-l5-ws', title: 'Why Air Squashes', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Describes both results accurately.', 'Explains compressibility in terms of the space between particles.'],
            exitTicket: 'Ask what happens to the particles themselves when air is compressed. They do not shrink.',
          },
          differentiation: {
            support: ['Model the syringe with marbles in a tube versus ping-pong balls with gaps.'],
            extension: ['Explain why a compressed gas feels warmer, using the particle model.'],
          },
          misconceptions: [
            {
              misconception: 'Compressing a gas squashes the particles themselves.',
              looksLike: 'A diagram of squashed oval particles.',
              correction: 'Ask what the particles are made of. Atoms do not deform; the gaps between them close.',
            },
          ],
          homeExtension: ['Squeeze a sealed crisp packet and explain why it springs back.'],
        },
      ],
    },
    /* ============================================================ UNIT 2 */
    {
      id: 'g6-sci-u2',
      gradeId: 'g6',
      subjectId: 'science',
      sequence: 2,
      title: 'Chemical Reactions: When the Stuff Itself Changes',
      bigIdea:
        'In a chemical reaction the atoms are rearranged into different substances — but every atom that goes in comes out again, so nothing is ever actually lost.',
      description:
        'Opens with a phenomenon that looks like cheating: a lump of steel wool is weighed, burned, and weighs more afterwards. Learners work out what counts as evidence of a chemical reaction, distinguish it from a change of state, and then confront conservation of mass in a system that seems to violate it. The unit closes on synthetic materials, where the same chemistry becomes a set of decisions with consequences.',
      weeks: 6,
      standards: [
        { code: 'MS-PS1-2', framework: 'NGSS', text: 'Analyze and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred.' },
        { code: 'MS-PS1-5', framework: 'NGSS', text: 'Develop and use a model to describe how the total number of atoms does not change in a chemical reaction and thus mass is conserved.' },
        { code: 'MS-PS1-3', framework: 'NGSS', text: 'Gather and make sense of information to describe that synthetic materials come from natural resources and impact society.' },
        { code: 'MS-PS1-1', framework: 'NGSS', text: 'Develop models to describe the atomic composition of simple molecules and extended structures.' },
      ],
      lessonTitles: [
        'The Steel Wool That Got Heavier',
        'Properties as Fingerprints: Is It Still the Same Substance?',
        'Evidence of a Reaction, and What Fools You',
        'Counting Atoms Either Side: Conservation of Mass',
        'Synthetic Materials: From Natural Resource to Useful Thing',
      ],
      performanceTask:
        'The Unknown Powders: five white powders and four test liquids. The learner designs and runs a testing sequence, records property data in a table, identifies which combinations produced a chemical reaction and which merely dissolved, and writes an evidence-based identification of at least three of the powders.',
      lessons: [
        {
          id: 'g6-sci-u2-l1',
          unitId: 'g6-sci-u2',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'The Steel Wool That Got Heavier',
          essentialQuestion: 'How can burning something make it weigh more?',
          summary:
            'The anchoring phenomenon. Steel wool is weighed, burned in air, and reweighed — and the mass goes up. Learners generate explanations, all of which will be wrong, and the unit spends five lessons earning the right one.',
          durationMin: 50,
          standards: [
            { code: 'MS-PS1-2', framework: 'NGSS', text: 'Analyze and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred.' },
          ],
          objectives: [
            'I can record mass accurately before and after a change.',
            'I can describe an observation that my current model cannot explain.',
            'I can propose a testable explanation.',
          ],
          vocabulary: [
            { term: 'mass', definition: 'The amount of matter in something, measured in grams.' },
            { term: 'reactant', definition: 'A substance you start with in a reaction.' },
            { term: 'product', definition: 'A substance you end up with.' },
          ],
          materials: ['Fine steel wool', 'A digital balance reading to 0.01 g', 'A heatproof mat and tongs', 'A 9V battery or a lighter, used by the adult only'],
          prep: [
            'Do this once yourself first. Steel wool burns fast and hot; the adult handles all ignition and the learner handles all measurement.',
            'Have a fire-safe surface, a lid and water to hand before anything is lit.',
          ],
          script: [],
          worksheet: { id: 'g6-sci-u2-l1-ws', title: 'The Mass Went Up', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Records before and after masses.', 'States clearly why the result is surprising.', 'Offers at least one testable explanation.'],
            exitTicket: 'Ask them to finish the sentence: "The extra mass must have come from..."',
          },
          differentiation: {
            support: ['Provide the data if the practical is not possible. The reasoning is the lesson, not the burning.'],
            extension: ['Predict what would happen if the same thing were burned in a sealed jar, and say why.'],
          },
          misconceptions: [
            {
              misconception: 'Burning always destroys matter, so mass must go down.',
              looksLike: 'The learner assumes the balance is faulty.',
              correction: 'Repeat the measurement on a second balance. Confirming the instrument forces the explanation to change instead.',
            },
          ],
          homeExtension: ['Weigh an apple core, leave it out for three days, weigh it again, and explain the change.'],
        },
        {
          id: 'g6-sci-u2-l2',
          unitId: 'g6-sci-u2',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Properties as Fingerprints: Is It Still the Same Substance?',
          essentialQuestion: 'How do I know whether I have made something new or just changed how it looks?',
          summary:
            'Learners measure a set of properties — colour, density, melting point, solubility, whether it conducts — before and after several changes, and use the data table to decide in each case whether the substance itself changed.',
          durationMin: 55,
          standards: [
            { code: 'MS-PS1-2', framework: 'NGSS', text: 'Analyze and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred.' },
          ],
          objectives: [
            'I can measure several properties of a substance systematically.',
            'I can decide from a data table whether a new substance was formed.',
            'I can explain why one property alone is not enough evidence.',
          ],
          vocabulary: [
            { term: 'characteristic property', definition: 'A property that stays the same for a substance no matter how much of it you have, like density or melting point.' },
            { term: 'physical change', definition: 'A change where the substance itself stays the same.' },
            { term: 'chemical change', definition: 'A change where new substances with different properties are formed.' },
          ],
          materials: ['Ice, salt, sugar, bicarbonate of soda, vinegar', 'A balance and a measuring cylinder', 'A prepared data table'],
          prep: ['Set up four stations before the lesson so time goes into measurement and interpretation rather than fetching.'],
          script: [],
          worksheet: { id: 'g6-sci-u2-l2-ws', title: 'Before and After', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Completes a before-and-after property table.', 'Justifies a chemical-or-physical verdict with more than one property.'],
            exitTicket: 'Give a property table for an unknown change and ask for a verdict with two supporting rows.',
          },
          differentiation: {
            support: ['Reduce to two properties, colour and whether it dissolves, before adding measured ones.'],
            extension: ['Design a test that would distinguish two substances with the same appearance.'],
          },
          misconceptions: [
            {
              misconception: 'A colour change always means a chemical reaction.',
              looksLike: 'Food colouring in water declared a reaction.',
              correction: 'Ask whether it can be reversed and whether any other property changed. One indicator is never enough.',
            },
          ],
          homeExtension: ['Find one change in the kitchen that is physical and one that is chemical, and give evidence for each.'],
        },
        {
          id: 'g6-sci-u2-l3',
          unitId: 'g6-sci-u2',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Evidence of a Reaction, and What Fools You',
          essentialQuestion: 'Which of these signs really means a reaction happened?',
          summary:
            'Bubbles, colour change, temperature change, a precipitate, a smell. Learners test each indicator against cases where it appears without a reaction, and build a rule that requires converging evidence.',
          durationMin: 50,
          standards: [
            { code: 'MS-PS1-2', framework: 'NGSS', text: 'Analyze and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred.' },
          ],
          objectives: [
            'I can list five common indicators of a chemical reaction.',
            'I can give a counter-example for each indicator.',
            'I can state what evidence would convince me.',
          ],
          vocabulary: [
            { term: 'precipitate', definition: 'A solid that appears when two solutions are mixed.' },
            { term: 'indicator', definition: 'An observation that suggests something has happened, without proving it.' },
            { term: 'counter-example', definition: 'A case that shows a rule does not always hold.' },
          ],
          materials: ['Bicarbonate of soda and vinegar', 'Fizzy water', 'Warm water and sugar', 'Two clear cups'],
          prep: ['Prepare the fizzy water counter-example. Bubbles without a reaction is the demonstration that does the most work.'],
          script: [],
          worksheet: { id: 'g6-sci-u2-l3-ws', title: 'Five Signs and Five Traps', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Pairs each indicator with a counter-example.', 'States a rule requiring more than one line of evidence.'],
            exitTicket: 'Show bubbles rising in a glass and ask whether a reaction is happening, and how they would find out.',
          },
          differentiation: {
            support: ['Work through two indicators only, with the counter-example demonstrated rather than described.'],
            extension: ['Design an experiment that produces four indicators at once and explain which is the most reliable.'],
          },
          misconceptions: [
            {
              misconception: 'Bubbles always mean a chemical reaction.',
              looksLike: 'Boiling water called a reaction.',
              correction: 'Boil water and ask what the bubbles are made of. It is still water, just in a different state.',
            },
          ],
          homeExtension: ['Find three things that bubble at home and decide for each whether a reaction is happening.'],
        },
        {
          id: 'g6-sci-u2-l4',
          unitId: 'g6-sci-u2',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Counting Atoms Either Side: Conservation of Mass',
          essentialQuestion: 'If nothing is lost, why did the mass change?',
          summary:
            'The payoff lesson. Learners run the vinegar and bicarbonate reaction in an open cup and in a sealed bag, weighing both, and then model the reaction with counters to show every atom accounted for.',
          durationMin: 55,
          standards: [
            { code: 'MS-PS1-5', framework: 'NGSS', text: 'Develop and use a model to describe how the total number of atoms does not change in a chemical reaction and thus mass is conserved.' },
            { code: 'MS-PS1-1', framework: 'NGSS', text: 'Develop models to describe the atomic composition of simple molecules and extended structures.' },
          ],
          objectives: [
            'I can show that mass is conserved when the system is closed.',
            'I can explain an apparent mass loss or gain by identifying what entered or left.',
            'I can model a reaction with the same atoms rearranged on both sides.',
          ],
          vocabulary: [
            { term: 'conservation of mass', definition: 'The total mass of a closed system does not change during a reaction.' },
            { term: 'closed system', definition: 'A setup where nothing can get in or out.' },
            { term: 'rearrange', definition: 'To put the same atoms together in a different pattern.' },
          ],
          materials: ['Vinegar and bicarbonate of soda', 'A resealable freezer bag', 'A balance', 'Coloured counters for atom modelling'],
          prep: [
            'Test the bag first. It has to seal completely and it will inflate, so leave room.',
            'Count out the atom counters in advance so the modelling stage moves quickly.',
          ],
          script: [],
          worksheet: { id: 'g6-sci-u2-l4-ws', title: 'Nothing Left the Bag', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Measures equal mass before and after in a closed system.', 'Explains the open-cup result by naming the escaping gas.', 'Balances an atom count across a reaction.'],
            exitTicket: 'Return to the steel wool. Ask where the extra mass came from and how they now know.',
          },
          differentiation: {
            support: ['Model with counters first and do the practical afterwards, so the expectation is already built.'],
            extension: ['Balance a simple written equation and explain what the coefficients mean physically.'],
          },
          misconceptions: [
            {
              misconception: 'Gases have no mass.',
              looksLike: 'The learner is unbothered that the open cup lost mass.',
              correction: 'Weigh an inflated and a deflated balloon on a sensitive balance, or weigh the sealed bag before and after.',
            },
          ],
          homeExtension: ['Weigh a sealed bottle of fizzy drink, shake it, and weigh it again. Explain the result.'],
        },
        {
          id: 'g6-sci-u2-l5',
          unitId: 'g6-sci-u2',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Synthetic Materials: From Natural Resource to Useful Thing',
          essentialQuestion: 'Where does a plastic bottle actually come from, and what did making it cost?',
          summary:
            'Learners trace three synthetic materials back to natural resources, describe the chemistry in outline, and weigh benefits against costs honestly — including cases where the synthetic option is genuinely the better one.',
          durationMin: 55,
          standards: [
            { code: 'MS-PS1-3', framework: 'NGSS', text: 'Gather and make sense of information to describe that synthetic materials come from natural resources and impact society.' },
          ],
          objectives: [
            'I can trace a synthetic material back to its natural resource.',
            'I can describe one benefit and one cost of a synthetic material.',
            'I can make a materials recommendation and justify it with evidence.',
          ],
          vocabulary: [
            { term: 'synthetic', definition: 'Made by people through chemical processing, rather than used as found.' },
            { term: 'natural resource', definition: 'Raw material taken from the Earth or from living things.' },
            { term: 'polymer', definition: 'A very long molecule made of the same small unit repeated over and over.' },
          ],
          materials: ['Samples of plastic, nylon fabric, glass and a metal object', 'Access to reference sources', 'The printed worksheet'],
          prep: [
            'Choose three materials to trace, and check a source for each in advance so the research stage does not stall.',
            'Decide to include at least one case where the synthetic material is clearly better — medical plastics or synthetic insulation.',
          ],
          script: [],
          worksheet: { id: 'g6-sci-u2-l5-ws', title: 'Where Did This Come From?', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Traces a material to its source with a named process.', 'Gives a balanced cost and benefit.', 'Justifies a recommendation with evidence.'],
            exitTicket: 'Hold up any object and ask what natural resource it started as.',
          },
          differentiation: {
            support: ['Provide the source chain and ask only for the costs and benefits.'],
            extension: ['Compare two materials for the same job and write a recommendation with a stated trade-off.'],
            language: ['Provide a labelled flow-chart frame so the sequence can be shown before it is written in prose.'],
          },
          misconceptions: [
            {
              misconception: 'Natural means good and synthetic means bad.',
              looksLike: 'Blanket condemnation of all plastics with no case considered individually.',
              correction: 'Introduce a synthetic material that saves lives, such as sterile single-use medical tubing, and ask for the trade-off.',
            },
          ],
          homeExtension: ['Pick five objects in one room and sort them into natural, processed and fully synthetic.'],
        },
      ],
    },

    /* ============================================================ UNIT 3 */
    {
      id: 'g6-sci-u3',
      gradeId: 'g6',
      subjectId: 'science',
      sequence: 3,
      title: 'Thermal Energy on the Move',
      bigIdea:
        'There is no such thing as cold moving into something — energy always travels from the warmer object to the cooler one, and every design that keeps something hot or cold is just a way of slowing that down.',
      description:
        'Opens with a phenomenon everybody has felt and nobody explains correctly: at the same room temperature, a metal handrail feels far colder than a wooden bench. Learners rebuild their understanding of temperature as average particle motion, investigate how mass and material change what a given amount of energy does, and finish with an engineering challenge that is assessed on iteration rather than on the first result.',
      weeks: 6,
      standards: [
        { code: 'MS-PS3-3', framework: 'NGSS', text: 'Apply scientific principles to design, construct, and test a device that either minimizes or maximizes thermal energy transfer.' },
        { code: 'MS-PS3-4', framework: 'NGSS', text: 'Plan an investigation to determine the relationships among the energy transferred, the type of matter, the mass, and the change in the average kinetic energy of the particles as measured by the temperature of the sample.' },
        { code: 'MS-PS3-5', framework: 'NGSS', text: 'Construct, use, and present arguments to support the claim that when the kinetic energy of an object changes, energy is transferred to or from the object.' },
        { code: 'MS-PS1-6', framework: 'NGSS', text: 'Undertake a design project to construct, test, and modify a device that either releases or absorbs thermal energy by chemical processes.' },
      ],
      lessonTitles: [
        'Why the Metal Rail Feels Colder Than the Wooden Bench',
        'Temperature Is Not Heat: What the Thermometer Measures',
        'Mass, Material and Temperature Change',
        'Arguing From Energy: Where Did It Go?',
        'Design Challenge: Keep It Hot, Keep It Cold',
      ],
      performanceTask:
        'The Two-Device Challenge: the learner designs, builds and tests both a container that keeps ice solid for as long as possible and a chemical hand warmer, records temperature data over time for each, then redesigns one of them on the basis of the data and reports the measured improvement. The redesign and its justification carry more weight than the winning time.',
      lessons: [
        {
          id: 'g6-sci-u3-l1',
          unitId: 'g6-sci-u3',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'Why the Metal Rail Feels Colder Than the Wooden Bench',
          essentialQuestion: 'Two objects in the same room, at the same temperature — so why does one feel freezing?',
          summary:
            'The anchoring phenomenon. Learners measure both objects with a thermometer, find identical readings, and are forced to conclude that "feeling cold" is a measurement of energy leaving the hand rather than a measurement of the object.',
          durationMin: 50,
          standards: [
            { code: 'MS-PS3-3', framework: 'NGSS', text: 'Apply scientific principles to design, construct, and test a device that either minimizes or maximizes thermal energy transfer.' },
          ],
          objectives: [
            'I can measure the temperature of several objects in the same room.',
            'I can explain why touch is a poor thermometer.',
            'I can describe the direction energy is moving when something feels cold.',
          ],
          vocabulary: [
            { term: 'conduction', definition: 'Energy transfer through direct contact, as vibrating particles jostle their neighbours.' },
            { term: 'conductor', definition: 'A material that transfers thermal energy quickly.' },
            { term: 'insulator', definition: 'A material that transfers thermal energy slowly.' },
          ],
          materials: ['A metal object, a wooden object and a fabric item that have all been in the same room overnight', 'A thermometer or infrared thermometer'],
          prep: ['Leave the objects out together the night before. If one has been in a bag, the result is ruined.'],
          script: [],
          worksheet: { id: 'g6-sci-u3-l1-ws', title: 'Same Temperature, Different Feeling', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Records equal temperatures for objects that feel different.', 'States that energy moves from hand to object.'],
            exitTicket: 'Ask which way the energy is travelling when a metal spoon feels cold in the hand.',
          },
          differentiation: {
            support: ['Use only two objects with a dramatic contrast, metal and thick fabric.'],
            extension: ['Predict which of five materials will feel coldest and rank them, then test.'],
          },
          misconceptions: [
            {
              misconception: 'Cold is a substance that moves into your hand.',
              looksLike: '"The cold from the metal went into me."',
              correction: 'Ban the word "cold" as a noun for one lesson. Requiring every sentence to be about energy moving out changes the thinking quickly.',
            },
          ],
          homeExtension: ['Touch five surfaces at home, rank them by how cold they feel, then check them all with a thermometer.'],
        },
        {
          id: 'g6-sci-u3-l2',
          unitId: 'g6-sci-u3',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Temperature Is Not Heat: What the Thermometer Measures',
          essentialQuestion: 'Why does a bathtub of warm water contain more energy than a boiling cup?',
          summary:
            'Temperature redefined as average particle kinetic energy, separated cleanly from total thermal energy. The bath-versus-cup comparison is the whole lesson and it survives well into secondary school.',
          durationMin: 50,
          standards: [
            { code: 'MS-PS3-4', framework: 'NGSS', text: 'Plan an investigation to determine the relationships among the energy transferred, the type of matter, the mass, and the change in the average kinetic energy of the particles as measured by the temperature of the sample.' },
          ],
          objectives: [
            'I can define temperature as average particle motion.',
            'I can explain why a larger amount at a lower temperature can hold more energy.',
            'I can use the words heat and temperature correctly in the same sentence.',
          ],
          vocabulary: [
            { term: 'temperature', definition: 'A measure of the average kinetic energy of the particles in a substance.' },
            { term: 'thermal energy', definition: 'The total energy of all the particles, which depends on how many there are.' },
            { term: 'average', definition: 'A typical value across a whole group, not the value of any one member.' },
          ],
          materials: ['Two beakers of very different volumes', 'A thermometer', 'Counters to model particles'],
          prep: ['Prepare the bath-and-cup comparison as a concrete question rather than as an announcement.'],
          script: [],
          worksheet: { id: 'g6-sci-u3-l2-ws', title: 'Average, Not Total', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Distinguishes temperature from total thermal energy with an example.', 'Explains what a thermometer is actually responding to.'],
            exitTicket: 'Which has more thermal energy, a cup of boiling water or a bath of warm water? Explain.',
          },
          differentiation: {
            support: ['Use counters: ten fast counters versus a thousand medium ones.'],
            extension: ['Explain why a spark from a firework can be over a thousand degrees and not burn you.'],
          },
          misconceptions: [
            {
              misconception: 'Hotter always means more energy.',
              looksLike: 'The cup of boiling water chosen without hesitation.',
              correction: 'Ask which one could melt more ice. The question makes total energy the relevant quantity.',
            },
          ],
          homeExtension: ['Ask someone at home which contains more energy, a bath or a kettle, and see what they say.'],
        },
        {
          id: 'g6-sci-u3-l3',
          unitId: 'g6-sci-u3',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Mass, Material and Temperature Change',
          essentialQuestion: 'Does the same amount of energy always produce the same temperature rise?',
          summary:
            'A planned investigation. Learners heat different masses of water, and equal masses of water and cooking oil, for the same time and compare the temperature rise. Two variables, controlled one at a time.',
          durationMin: 55,
          standards: [
            { code: 'MS-PS3-4', framework: 'NGSS', text: 'Plan an investigation to determine the relationships among the energy transferred, the type of matter, the mass, and the change in the average kinetic energy of the particles as measured by the temperature of the sample.' },
          ],
          objectives: [
            'I can plan a fair test with one variable changed at a time.',
            'I can describe how mass affects temperature rise for the same energy input.',
            'I can describe how the material affects temperature rise.',
          ],
          vocabulary: [
            { term: 'variable', definition: 'Something in an investigation that can change.' },
            { term: 'control variable', definition: 'Something deliberately kept the same so it cannot affect the result.' },
            { term: 'specific heat capacity', definition: 'How much energy a material needs to raise its temperature by one degree.' },
          ],
          materials: ['Water and cooking oil', 'Two identical containers', 'A thermometer and a timer', 'A balance', 'A consistent heat source'],
          prep: [
            'Fix the heat source in advance. If the energy input is not constant, the investigation cannot say anything.',
            'Prepare a results table with room for repeat readings.',
          ],
          script: [],
          worksheet: { id: 'g6-sci-u3-l3-ws', title: 'Two Variables, One at a Time', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Identifies independent, dependent and control variables.', 'Reports both relationships from their own data.'],
            exitTicket: 'Ask which would heat faster with the same flame, half a litre or two litres, and why.',
          },
          differentiation: {
            support: ['Run only the mass comparison. Two materials can wait for a second session.'],
            extension: ['Calculate the energy transferred using the specific heat capacity of water and compare it to the heater\'s rating.'],
          },
          misconceptions: [
            {
              misconception: 'All materials heat up at the same rate.',
              looksLike: 'Surprise that oil warms faster than water.',
              correction: 'Repeat with equal masses, not equal volumes. The controlled comparison is what makes the material difference visible.',
            },
          ],
          homeExtension: ['Time how long a small pan and a large pan of water take to boil, keeping the hob setting identical.'],
        },
        {
          id: 'g6-sci-u3-l4',
          unitId: 'g6-sci-u3',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Arguing From Energy: Where Did It Go?',
          essentialQuestion: 'When something slows down or cools down, where did the energy actually go?',
          summary:
            'Learners build evidence-based arguments about energy transfer in three scenarios — a rolling ball stopping, hot and cold water mixing, hands rubbed together — and must name both the source and the destination each time.',
          durationMin: 50,
          standards: [
            { code: 'MS-PS3-5', framework: 'NGSS', text: 'Construct, use, and present arguments to support the claim that when the kinetic energy of an object changes, energy is transferred to or from the object.' },
          ],
          objectives: [
            'I can name where energy came from and where it went in a transfer.',
            'I can support a claim about energy with measured evidence.',
            'I can explain why "the energy was used up" is not an answer.',
          ],
          vocabulary: [
            { term: 'transfer', definition: 'Energy moving from one place or object to another.' },
            { term: 'friction', definition: 'A force between surfaces sliding past each other, which transfers energy to thermal energy.' },
            { term: 'system', definition: 'The set of objects you have decided to keep track of.' },
          ],
          materials: ['A ball and a rough surface', 'Hot and cold water and two thermometers', 'The printed worksheet'],
          prep: ['Prepare the mixing demonstration with measured masses so the final temperature can be predicted before it is measured.'],
          script: [],
          worksheet: { id: 'g6-sci-u3-l4-ws', title: 'From Where, To Where', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Names a source and a destination for every transfer.', 'Cites a measurement as evidence.'],
            exitTicket: 'Rub your hands together and ask for a full account of the energy: where from and where to.',
          },
          differentiation: {
            support: ['Provide a from-and-to frame to complete for each scenario.'],
            extension: ['Predict the final temperature of a hot and cold water mix before measuring, using the masses.'],
          },
          misconceptions: [
            {
              misconception: 'Energy gets used up and disappears.',
              looksLike: '"The ball ran out of energy."',
              correction: 'Ask what got warmer. Requiring a named destination every time makes disappearance impossible to claim.',
            },
          ],
          homeExtension: ['Feel a phone charger, a laptop and a light bulb after use and name where that thermal energy came from.'],
        },
        {
          id: 'g6-sci-u3-l5',
          unitId: 'g6-sci-u3',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Design Challenge: Keep It Hot, Keep It Cold',
          essentialQuestion: 'Can I design something that beats my first attempt, and prove it with data?',
          summary:
            'The engineering lesson. Learners build an insulated container and a chemical hand warmer, test both against measured criteria, and then must produce a second version justified by their own data. The redesign is the assessed part.',
          durationMin: 55,
          standards: [
            { code: 'MS-PS3-3', framework: 'NGSS', text: 'Apply scientific principles to design, construct, and test a device that either minimizes or maximizes thermal energy transfer.' },
            { code: 'MS-PS1-6', framework: 'NGSS', text: 'Undertake a design project to construct, test, and modify a device that either releases or absorbs thermal energy by chemical processes.' },
          ],
          objectives: [
            'I can design a device against stated criteria and constraints.',
            'I can test it and record temperature over time.',
            'I can justify a change to my design using my own data.',
          ],
          vocabulary: [
            { term: 'criteria', definition: 'What a successful design has to achieve.' },
            { term: 'constraint', definition: 'A limit on what you are allowed to use or do.' },
            { term: 'exothermic', definition: 'A process that releases thermal energy to its surroundings.' },
            { term: 'endothermic', definition: 'A process that absorbs thermal energy from its surroundings.' },
          ],
          materials: ['Assorted insulating materials', 'Ice cubes of equal mass', 'A thermometer and a timer', 'Calcium chloride or bicarbonate of soda and citric acid for the hand warmer', 'Resealable bags'],
          prep: [
            'Set the constraints in advance: a materials budget, a size limit and a fixed test duration. Unconstrained design produces a pile of blankets and no learning.',
            'Test the chemical hand warmer yourself and check the safety notes for whichever chemical you use.',
          ],
          script: [],
          worksheet: { id: 'g6-sci-u3-l5-ws', title: 'Build, Test, Change, Test Again', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Builds to stated criteria and constraints.', 'Records temperature data over time.', 'Makes and justifies one data-driven change.'],
            exitTicket: 'Ask what they changed on the second version and which number in their data made them do it.',
          },
          differentiation: {
            support: ['Provide a working baseline design to modify rather than starting from nothing.'],
            extension: ['Add a cost constraint and require the best performance per pound spent.'],
            language: ['Provide a labelled design-brief template so the technical vocabulary is available while planning.'],
          },
          misconceptions: [
            {
              misconception: 'More layers is always better.',
              looksLike: 'A container wrapped in everything available, with no reasoning.',
              correction: 'Impose a strict materials budget. Scarcity forces the learner to think about which material and why.',
            },
          ],
          homeExtension: ['Test whether a cool bag actually works by measuring the temperature inside it over two hours.'],
        },
      ],
    },
    /* ============================================================ UNIT 4 */
    {
      id: 'g6-sci-u4',
      gradeId: 'g6',
      subjectId: 'science',
      sequence: 4,
      title: 'The Earth, the Sun and the Moon',
      bigIdea:
        'Almost everything we see in the sky is the same three objects moving in predictable ways, seen from a moving vantage point — and once you can model the geometry, you can predict it.',
      description:
        'Opens with the most familiar unexplained thing in anyone\'s life: the Moon was a thin crescent last week and a half circle tonight, and nothing moved it. Learners build a physical model with a lamp and a ball, use it to generate the full phase cycle, then extend the same model to eclipses and seasons. The unit is deliberately hands-on — the phase sequence is discovered by turning around in a darkened room, not memorised from a diagram.',
      weeks: 5,
      standards: [
        { code: 'MS-ESS1-1', framework: 'NGSS', text: 'Develop and use a model of the Earth-sun-moon system to describe the cyclic patterns of lunar phases, eclipses of the sun and moon, and seasons.' },
        { code: 'MS-ESS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the role of gravity in the motions within galaxies and the solar system.' },
      ],
      lessonTitles: [
        'The Moon Changed Shape and Nobody Moved It',
        'Why There Is Not an Eclipse Every Month',
        'Seasons: It Is Not the Distance',
        'Predicting the Sky: Using the Model Forwards',
        'Tides, Time and Why the Moon Keeps One Face Towards Us',
      ],
      performanceTask:
        'The Prediction Log: the learner uses their model to predict the Moon\'s phase and approximate rise time for five specific dates spread over the following month, records what they actually observe on each of those nights, and then writes an explanation of any mismatch that refers to the geometry rather than to bad luck.',
      lessons: [
        /* ------------------------------------------------------- AUTHORED */
        {
          id: 'g6-sci-u4-l1',
          unitId: 'g6-sci-u4',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'The Moon Changed Shape and Nobody Moved It',
          essentialQuestion: 'The Moon is a ball and the Sun never stops shining on it — so why does it look like a different shape every week?',
          summary:
            'The phase cycle built from scratch with a lamp and a polystyrene ball. The lesson deliberately begins by taking the common Earth-shadow explanation seriously and then testing it to destruction, because a misconception that is disproved by the learner\'s own model stays disproved. By the end the learner can produce any phase on demand and say where the Sun, Earth and Moon must be.',
          durationMin: 55,
          standards: [
            { code: 'MS-ESS1-1', framework: 'NGSS', text: 'Develop and use a model of the Earth-sun-moon system to describe the cyclic patterns of lunar phases, eclipses of the sun and moon, and seasons.' },
            { code: 'MS-ESS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the role of gravity in the motions within galaxies and the solar system.' },
          ],
          objectives: [
            'I can show that half of the Moon is always lit, whatever phase we see.',
            'I can produce any phase with a ball and a lamp and say where all three bodies are.',
            'I can explain why the Earth\'s shadow does not cause the phases.',
            'I can put the eight phases in order and say which way the cycle runs.',
          ],
          vocabulary: [
            { term: 'phase', definition: 'How much of the Moon\'s lit half we can see from Earth at a given moment.' },
            { term: 'orbit', definition: 'The curved path one object follows around another under gravity.' },
            { term: 'waxing', definition: 'Getting larger night by night, from new towards full.' },
            { term: 'waning', definition: 'Getting smaller night by night, from full back towards new.' },
            { term: 'gibbous', definition: 'More than half lit but not fully lit.' },
            { term: 'terminator', definition: 'The line on the Moon between the lit half and the dark half.' },
          ],
          materials: [
            'A polystyrene or table-tennis ball on a stick, pencil or skewer — this is the Moon',
            'A single bright lamp with the shade removed, or a strong torch propped up — this is the Sun',
            'A room that can be made properly dark. Not dim. Dark.',
            'The printed worksheet',
            'A pencil, and a black or dark pencil for shading the phase circles',
            'Optionally, eight sticky labels or chalk marks for the floor positions',
          ],
          prep: [
            'Test the room in daylight and again with the curtains shut. If you can still read a book by the ambient light, the model will not work — the crescent phases wash out completely.',
            'Set the lamp at roughly head height and stand about two metres away when you test it. Too close and the ball is lit from a range of angles; too far and it is too dim.',
            'Practise the full turn yourself once, slowly, and watch the ball. If you have never done this, do it before the lesson — the moment when the crescent appears is genuinely startling and you want to have had that moment privately first.',
            'Mark eight positions on the floor in a circle around where the learner will stand, if you can. It makes the eight phases countable rather than continuous.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Two Weeks Ago It Was a Fingernail',
              minutes: 7,
              say: [
                'Two weeks ago the Moon was a thin curved sliver. Last night it was a fat half circle. Next week it will be a full disc.',
                'Nobody flew up there and repainted it. It is a rock. It has been the same rock for four and a half billion years and the Sun has been shining on it the whole time.',
                'So what is going on? Give me your best explanation. I mean it — say it out loud even if you are not sure.',
                'Right. A lot of people say the Earth\'s shadow falls on it. That is a completely reasonable idea, it is what most adults will tell you, and we are going to test it properly rather than me just saying no.',
                'Here is the thing that makes the shadow idea worth testing: it makes a prediction. If the Earth\'s shadow causes the phases, then the Earth has to be between the Sun and the Moon for us to see anything less than full.',
                'Hold on to that. We are going to build the thing and check.',
              ],
              do: [
                'Draw whatever explanation they give on paper, taking it entirely seriously. Do not signal that it is wrong.',
                'Write the shadow prediction on the sheet as a testable statement: "Earth must be between Sun and Moon."',
                'Do not turn the lamp on yet.',
              ],
              studentDoes: ['Offers an explanation for the changing shape and states what it would predict.'],
              checks: [
                {
                  ask: 'If the Earth\'s shadow caused the phases, how often would we see a full moon?',
                  lookFor: 'Any reasoning about the Earth needing to be out of the way, which starts to expose the problem.',
                  ifStuck: 'Ask instead: "can the Earth\'s shadow reach the Moon when the Moon is on the same side of us as the Sun?"',
                },
              ],
              tip: 'Taking the wrong explanation seriously costs you two minutes and buys you the whole lesson. A learner who is told "no, that is wrong" keeps the idea privately; a learner who watches their own prediction fail gives it up.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Half of It Is Always Lit',
              minutes: 12,
              say: [
                'Lamp on, other lights off. Let your eyes adjust for a moment — this does not work in a half-dark room.',
                'Here is the ball. Watch what the lamp does to it. Look — one half is bright, the other half is dark. There is a line down the middle where the light stops.',
                'That line has a name. It is the terminator, which is a much better word than it deserves to be.',
                'Now the important bit. I am going to move the ball anywhere in this room. Watch the lit half.',
                'It is always half. Always. It never becomes a crescent, it never becomes a gibbous shape, and there is no position in this room where less than half the ball is lit. Half is lit and half is dark, permanently.',
                'So the Moon is never actually a crescent. Not once, ever. Half of it is lit right now, and half of it was lit two weeks ago when it looked like a fingernail.',
                'Which means the phases are not about the Moon at all. They are about us. They are about which part of the lit half we happen to be able to see from where we are standing.',
                'And that changes everything about how you have to think about this. Stop asking "what shape is the Moon". Start asking "where am I looking from".',
              ],
              do: [
                'Move the ball slowly all round the room while they watch. Go behind them, above them, off to the side.',
                'Point at the terminator line with a finger every time you stop.',
                'Say the phrase "half is lit" at least four times. It is the sentence the rest of the lesson rests on.',
              ],
              studentDoes: ['Watches the ball from a fixed position and confirms that the lit fraction never changes.'],
              checks: [
                {
                  ask: 'How much of the ball is lit right now?',
                  lookFor: 'Half — given confidently and without checking, from any position.',
                  ifStuck: 'Hand them the ball and ask them to move it until less than half is lit. The failed search is the proof.',
                },
                {
                  ask: 'So if half is always lit, what is actually changing when we see a crescent?',
                  lookFor: 'How much of the lit half is facing us, or where we are looking from.',
                },
              ],
              tip: 'Do not rush this beat to get to the exciting part. "Half is always lit" is the single sentence that unlocks the whole topic, and learners who skip it end up memorising a phase diagram they do not believe.',
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'You Are the Earth. Turn Around.',
              minutes: 14,
              say: [
                'Stand here in the middle. You are the Earth. Your head is the Earth, and your eyes are everybody on the side of the Earth that is in daytime.',
                'Hold the ball out at arm\'s length, slightly above your head so your own head does not get in the way. That is important — hold it high.',
                'Start facing the lamp, with the ball between you and the lamp. What do you see?',
                'Dark. The lit half is facing away from you, towards the lamp. That is a new moon, and it is why you cannot see a new moon in the sky.',
                'Now turn slowly to your left. Do not lower the ball. Keep turning. Tell me the moment something changes.',
                'There — a sliver of light down one edge. That is your crescent, and nothing is in shadow. You are just seeing the edge of the lit half.',
                'Keep going. Quarter turn — you should see exactly half of the ball lit, a straight line down the middle. Keep going. Now it is fat and lumpy on one side, that is gibbous.',
                'Keep going until the lamp is directly behind you and the ball is in front of you. Fully lit. Full moon.',
                'Now the question from the start. When you are at full moon, where is your head? Between the lamp and the ball. So where is your shadow?',
                'On the ball. And is the ball dark? No. It is the brightest it has been all night. So the shadow explanation — is it dead?',
              ],
              do: [
                'Physically position them and physically raise their arm the first time. Verbal instructions are not enough in a dark room.',
                'Make them turn slowly. The whole cycle should take at least ninety seconds.',
                'At full moon, tap their shoulder and ask where their shadow is falling. Let the contradiction be theirs.',
                'If their head blocks the ball at full moon, celebrate it — that is a lunar eclipse and it is next lesson. Have them raise the ball higher and note why we do not get one every month.',
              ],
              studentDoes: ['Turns through a full cycle holding the Moon, names each phase as it appears, and disproves the shadow hypothesis from their own model.'],
              checks: [
                {
                  ask: 'You are at half moon. Where is the lamp relative to you?',
                  lookFor: 'Off to one side, at ninety degrees. The learner can locate the Sun from the phase alone.',
                  ifStuck: 'Have them point at the lamp with their free hand while holding the phase. The two arms make the geometry visible.',
                },
                {
                  ask: 'Which way did you turn, and what would happen if you turned the other way?',
                  lookFor: 'The phases would run in reverse — waning instead of waxing. The cycle has a direction.',
                },
                {
                  ask: 'Is the Earth\'s shadow explanation dead, and what killed it?',
                  lookFor: 'Yes — at full moon the Earth is directly between the two and the Moon is at its brightest, which is the opposite of what the hypothesis predicted.',
                },
              ],
              tip: 'Holding the ball too low is the commonest practical failure and it produces a permanent eclipse instead of a phase cycle. Say "higher" before they start, and again when they forget.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 17,
              say: [
                'Back to the light and on to the page, while it is still fresh.',
                'Section one is the overhead view. Eight positions of the Moon around the Earth, with the sunlight coming from one side. For each position, shade the half of the Moon that is dark. Every single one gets exactly half shaded — if you shade more or less than half on any of them, you have gone wrong.',
                'Section two is the view from here. Same eight positions, but now draw what someone standing on Earth would actually see. Those are the ones that are not half.',
                'Careful — those two sections are different jobs and it is easy to draw the overhead view twice. The first is what is true. The second is what looks true from where we stand.',
                'Section three: put them in order and name them. Waxing means growing, waning means shrinking.',
                'Section four is the argument. Somebody says the phases are caused by the Earth\'s shadow. Write the evidence from today that shows they are wrong. Use the diagram.',
              ],
              do: [
                'Read all four sets of directions before they begin. The distinction between sections one and two needs saying twice.',
                'Leave the ball and the lamp set up. If a learner gets stuck on a phase, send them back to the model rather than explaining it.',
                'Watch for anyone shading more than half in section one. Stop them at the first one, not the eighth.',
              ],
              studentDoes: ['Completes the overhead model, the Earth view, the ordered cycle and a written refutation of the shadow explanation.'],
              checks: [
                {
                  ask: 'In your overhead diagram, is there any position where more than half the Moon is dark?',
                  lookFor: 'No, and the learner checks all eight rather than answering from memory.',
                },
                {
                  ask: 'Point at the position where the Moon is between us and the Sun. What do we see, and why is that hard to observe?',
                  lookFor: 'New moon; the lit side faces away and it is up during the day, close to the Sun in the sky.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Go and Look',
              minutes: 5,
              say: [
                'Last thing, and it is homework of the good kind.',
                'Tonight, or the next clear night, go outside and look at the Moon. Just look.',
                'Then tell me where the Sun is. You can do that now. If the lit edge is on the right, the Sun is off to the right, below the horizon. The Moon is pointing at it.',
                'That is a genuinely useful thing to be able to do and almost no adult can do it. You have had one lesson.',
                'Before you go — half of the Moon is always what?',
              ],
              do: ['Write the date and the current phase on a calendar and agree to check it in a week.'],
              studentDoes: ['States the core principle and commits to one observation.'],
              checks: [
                {
                  ask: 'If tonight the Moon is a crescent with the lit side on the right, where is the Sun?',
                  lookFor: 'Off to the right and below the horizon — the lit side always points towards the Sun.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g6-sci-u4-l1-ws',
            title: 'Half Is Always Lit',
            style: 'diagram',
            prepNotes:
              'Print this one properly — the eight small circles in section one need to be big enough to shade exactly half without the pencil going everywhere. A soft dark pencil beats a biro for the shading. Keep the lamp and ball set up on the table while the page is being done; sending a stuck learner back to the model is far more useful than explaining the diagram to them.',
            sections: [
              {
                id: 's1',
                title: 'The Overhead View',
                directions:
                  'This is the Earth-Moon system seen from above, with sunlight coming from one side. Shade the dark half of the Moon at each of the eight positions. Every single one gets exactly half shaded — no more, no less. If you find yourself shading three quarters of one, go back to the ball and the lamp.',
                layout: 'full',
                items: [
                  'Which position is a new moon?',
                  'Which position is a full moon?',
                  'At position 1, is the Earth between the Sun and the Moon, or is the Moon between the Sun and the Earth?',
                ],
                images: [
                  {
                    id: 'g6-sci-u4-img-phase-wheel',
                    slot: 'Section 1 — overhead Earth-Moon system with eight Moon positions',
                    purpose:
                      'This is the diagram the whole topic depends on. Leaving all eight Moon circles unshaded turns it from something to look at into something to do, and shading half of each one is the act that installs the idea that the lit fraction never changes.',
                    subject:
                      'an overhead diagram of the Earth-Moon system: a single larger sphere at the centre with eight identical smaller empty circles evenly spaced around it on a thin circular orbit line, and a set of long straight parallel arrows entering from one side of the frame to represent sunlight',
                    count: 8,
                    composition:
                      'the central sphere in the middle of the frame, a thin circle drawn around it as the orbit path, exactly eight small circles of identical size placed at even intervals on that orbit line, all eight small circles completely blank and unshaded with a clean outline, five or six long straight parallel arrows entering horizontally from the left edge and stopping short of the orbit, generous white space, plain white background',
                    mustInclude: [
                      'exactly eight identical small circles evenly spaced around the orbit',
                      'all eight small circles completely unshaded and blank inside',
                      'parallel straight arrows all travelling in the same direction from one side only',
                      'a visible thin orbit circle passing through all eight positions',
                    ],
                    mustAvoid: [
                      'any numbers, letters, labels or captions',
                      'any of the small circles already shaded, half-shaded or filled',
                      'a drawn shadow cone or shadow region behind the central sphere',
                      'stars, a sun disc, or a space background that would darken the page',
                    ],
                    aspect: '1:1',
                    altText: 'Overhead diagram of eight unshaded Moon positions orbiting Earth with parallel sunlight arrows from one side',
                  },
                  {
                    id: 'g6-sci-u4-img-terminator',
                    slot: 'Section 1 — close-up of the lit and dark halves',
                    purpose:
                      'A single large sphere lit from one side makes the terminator line unmistakable before the learner has to draw it eight times small. It is also the picture that settles the argument that half is always lit.',
                    subject:
                      'a single large sphere lit strongly from the right-hand side, with the right half brightly lit and the left half in deep shadow, divided by a clean vertical line straight down the middle',
                    count: 1,
                    composition:
                      'one sphere filling most of the frame, the boundary between lit and unlit running vertically down the exact centre of the sphere, the lit half plain and bright, the unlit half plain and dark, a few short straight arrows at the right edge of the frame indicating the direction the light is coming from, plain white background',
                    mustInclude: [
                      'exactly one sphere',
                      'exactly half lit and half dark, divided down the centre',
                      'a crisp straight dividing line between the two halves',
                    ],
                    mustAvoid: [
                      'any labels, arrows pointing at parts, or captions',
                      'craters, surface detail or a face',
                      'a gradual fade covering more than a narrow band at the boundary',
                      'a starry sky or any background other than white',
                    ],
                    aspect: '1:1',
                    altText: 'A sphere lit from the right, exactly half bright and half dark, split by a straight line',
                  },
                ],
                writingLines: 3,
              },
              {
                id: 's2',
                title: 'What You Would Actually See',
                directions:
                  'Now the same eight positions, but drawn as they look from Earth. Shade each circle to show the phase somebody standing outside would see. These are the ones that are NOT half — that is the whole point. Work from your section one diagram, position by position.',
                layout: 'row',
                items: [
                  'Position 1 →',
                  'Position 2 →',
                  'Position 3 →',
                  'Position 4 →',
                  'Position 5 →',
                  'Position 6 →',
                  'Position 7 →',
                  'Position 8 →',
                ],
                images: [
                  {
                    id: 'g6-sci-u4-img-blank-phase-discs',
                    slot: 'Section 2 — eight blank discs for recording phases',
                    purpose:
                      'Translating the overhead geometry into the view from Earth is the hard cognitive step of the lesson. Blank discs in a row let the learner do that translation eight times and then read their own sequence as a cycle.',
                    subject:
                      'a horizontal row of eight identical empty circles with clean thin outlines',
                    count: 8,
                    composition:
                      'exactly eight circles of identical diameter in one straight horizontal row, evenly spaced with clear white gaps between them, all completely empty inside, thin even outlines, plenty of blank space beneath each circle for a handwritten name',
                    mustInclude: [
                      'exactly eight circles, all the same size',
                      'every circle completely empty inside',
                      'even spacing along a single straight row',
                    ],
                    mustAvoid: [
                      'any shading, crescents or fill inside any circle',
                      'numbers, letters or labels under or inside the circles',
                      'a dark or starry background strip behind the row',
                      'circles of differing sizes or an extra ninth circle',
                    ],
                    aspect: '4:1',
                    altText: 'A row of eight identical empty circles for drawing moon phases',
                  },
                ],
                writingLines: 2,
              },
              {
                id: 's3',
                title: 'Name the Cycle',
                directions:
                  'Write the eight phase names in order underneath your circles from section two, starting at new moon. Then answer the questions. Waxing means the lit part is growing; waning means it is shrinking.',
                layout: 'column',
                items: [
                  'The eight names to use: new moon, waxing crescent, first quarter, waxing gibbous, full moon, waning gibbous, last quarter, waning crescent.',
                  'How many days does the whole cycle take?',
                  'Why can you not see a new moon in the night sky?',
                  'If tonight is a waxing crescent, what will it look like in a week?',
                  'The Moon is called first quarter when half of it looks lit. Why "quarter" rather than "half"?',
                ],
                images: [
                  {
                    id: 'g6-sci-u4-img-lamp-ball-setup',
                    slot: 'Section 3 — the model set-up seen from above',
                    purpose:
                      'A record of the physical model means the learner can rebuild it at home without an adult present, which is what makes the observation homework actually happen. It also fixes the geometry of the activity in a form that can be revisited.',
                    subject:
                      'an overhead floor-plan diagram of a room activity: a lamp at one end, a standing human figure seen from directly above in the middle of the frame with one arm extended holding a small ball, and eight small circular floor markers arranged in an even ring around the figure',
                    count: 8,
                    composition:
                      'the lamp drawn simply at the left edge, the standing figure viewed from directly overhead in the centre, one arm clearly extended outward holding a small ball, exactly eight small circular markers evenly spaced in a ring on the floor around the figure at arm\'s length, a few straight lines from the lamp indicating the direction of light, clean line-drawing style on plain white background',
                    mustInclude: [
                      'exactly eight floor markers evenly spaced in a complete ring',
                      'one lamp, one figure and one ball',
                      'the figure viewed from directly above with an arm clearly extended',
                    ],
                    mustAvoid: [
                      'any numbers, labels or captions',
                      'furniture, windows or room decoration',
                      'more than one figure',
                      'shading heavy enough to make the diagram hard to read when printed',
                    ],
                    aspect: '4:3',
                    altText: 'Overhead plan of a lamp, a person holding a ball, and eight floor markers in a ring',
                  },
                ],
                writingLines: 5,
              },
              {
                id: 's4',
                title: 'Kill the Shadow Explanation',
                directions:
                  'A friend says: "The phases happen because the Earth\'s shadow falls on the Moon." Use your section one diagram to explain why that cannot be right. Your answer must refer to at least one specific position on the diagram and say what the shadow idea predicts that we do not observe.',
                layout: 'full',
                items: [
                  'What does the shadow explanation predict?',
                  'What do we actually observe at that position?',
                  'So what is really causing the phases?',
                  'Bonus: at which position COULD the Earth\'s shadow actually fall on the Moon? Why does that not happen every month?',
                ],
                writingLines: 8,
              },
            ],
            answerKey: [
              'Section 1: every one of the eight circles has exactly half shaded, and the shaded half is always the side facing away from the incoming arrows. New moon is the position between the Earth and the light source; full moon is the position on the far side of the Earth from the light source. At the new moon position the Moon is between the Sun and the Earth.',
              'Section 2: reading from new moon and going round — fully dark, a thin crescent, half lit, mostly lit, fully lit, mostly lit on the other side, half lit on the other side, a thin crescent on the other side. Mark whether the lit side is consistently on the correct side, not the neatness of the shading.',
              'Section 3: about 29.5 days. You cannot see a new moon because its lit half faces away from us and it is in the sky during the day, close to the Sun. A waxing crescent becomes roughly a full moon in a week and a half; in exactly seven days it is around first quarter. It is called first quarter because the Moon is one quarter of the way through its cycle, even though half the disc looks lit.',
              'Section 4: the shadow explanation predicts that the Moon is dimmest when the Earth sits between it and the Sun. At the full moon position the Earth is exactly there, and the Moon is at its brightest — the opposite of the prediction. The phases are caused by how much of the permanently lit half is turned towards us. Bonus: the Earth\'s shadow can only reach the Moon at the full moon position, which is a lunar eclipse, and it does not happen monthly because the Moon\'s orbit is tilted so it usually passes above or below the shadow.',
            ],
          },
          assessment: {
            successCriteria: [
              'States that half the Moon is always lit and uses this when reasoning.',
              'Produces a named phase on demand with the ball and lamp, and locates all three bodies.',
              'Refutes the Earth-shadow explanation using a specific position on their own diagram.',
              'Orders the eight phases and distinguishes waxing from waning.',
            ],
            exitTicket:
              'Hand over the ball and say: "Show me a waxing crescent, then tell me where the Sun is." Doing it beats naming it — a learner who can position the ball has the model, whatever vocabulary they have.',
            rubric: [
              { level: 'emerging', descriptor: 'Can name some phases from pictures but still explains them by shadow or by the Moon changing shape, and shades more than half in the overhead view.' },
              { level: 'developing', descriptor: 'Shades the overhead diagram correctly and orders the phases, but cannot reliably translate a position into the view from Earth without the physical model.' },
              { level: 'secure', descriptor: 'Moves fluently between the overhead geometry and the Earth view in either direction, deduces the Sun\'s position from a phase, and can explain why the shadow account fails.' },
            ],
          },
          differentiation: {
            support: [
              'Do only four positions — new, first quarter, full, last quarter. The crescents and gibbous phases are much harder to see in an imperfectly darkened room and can be added later.',
              'Let the learner hold the ball while you slowly walk the lamp around them instead. Some learners lose the thread while managing their own rotation.',
              'Give the overhead diagram already shaded and ask only for the Earth view. Translating is the harder half.',
            ],
            extension: [
              'Work out at roughly what time of day each phase rises and sets, using the geometry alone. First quarter rising around noon surprises everybody.',
              'Explain why the crescent Moon is sometimes seen in the afternoon sky, and predict which crescent it will be.',
              'Model a solar eclipse with the same equipment and explain why the shadow it casts on Earth is so small.',
            ],
            language: [
              'Waxing and waning are unusual words with no everyday use. Attach them to a gesture — hands opening and closing — and use the gesture every time for a fortnight.',
              'Moon vocabulary differs a good deal across languages and many learners will have richer terms at home. Ask for them and put them on the diagram alongside the English.',
            ],
          },
          misconceptions: [
            {
              misconception: 'The phases are caused by the Earth\'s shadow falling on the Moon.',
              looksLike: 'The learner draws a curved shadow edge sweeping across the Moon, and cannot explain why the shadow always moves in the same direction month after month.',
              correction: 'Have them stand at the full moon position with the ball held high and look at where their own shadow falls. The Earth is directly in between and the Moon is at its brightest, which is exactly backwards.',
            },
            {
              misconception: 'The Moon is only in the sky at night.',
              looksLike: 'Surprise or disbelief when told the Moon is visible during the day for much of every month.',
              correction: 'Look for it in daylight. A waxing gibbous Moon in the afternoon sky is easy to find, and one sighting fixes it permanently.',
            },
            {
              misconception: 'The Moon changes shape, or clouds cover part of it.',
              looksLike: 'A drawing of a crescent as an actual banana-shaped object rather than as part of a lit sphere.',
              correction: 'Return to the ball. Ask them to find any position in the room where the ball itself becomes crescent-shaped. The search fails and the point is made physically.',
            },
            {
              misconception: 'The dark part of the Moon is not there at all.',
              looksLike: 'Drawing a crescent with nothing around it and no circle outline.',
              correction: 'Insist on drawing the whole circle first and then shading. On a clear night the unlit part is sometimes faintly visible by earthshine, which is worth looking for.',
            },
          ],
          homeExtension: [
            'Keep a Moon diary for a fortnight. One small sketch a night, with the date and roughly what time you looked. Two weeks is enough to see the pattern with your own eyes.',
            'Each time you see the Moon, work out where the Sun must be and point at it. Check yourself against sunrise and sunset times.',
            'Find out what phase the Moon was on the day you were born, then work out roughly how many complete cycles it has been through since.',
          ],
          teacherNotes:
            'The room has to be genuinely dark. This is the single thing that determines whether the lesson works, and a room that seems dark to you at the start will not be dark enough after your eyes adjust — test it properly beforehand. The other common failure is the ball held too low, which produces an eclipse at every full moon; say "hold it higher" pre-emptively. Do not attempt eclipses today even though the question will come up. Note it, promise the next lesson, and move on — trying to teach the orbital tilt while the phase model is still fresh reliably collapses both.',
        },

        {
          id: 'g6-sci-u4-l2',
          unitId: 'g6-sci-u4',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Why There Is Not an Eclipse Every Month',
          essentialQuestion: 'The Moon passes between us and the Sun every month, so why is a solar eclipse so rare?',
          summary:
            'The orbital tilt. Learners add a five-degree tilt to their model and discover that the Moon usually passes above or below the line, so eclipses only happen when the crossing points line up with the Sun.',
          durationMin: 55,
          standards: [
            { code: 'MS-ESS1-1', framework: 'NGSS', text: 'Develop and use a model of the Earth-sun-moon system to describe the cyclic patterns of lunar phases, eclipses of the sun and moon, and seasons.' },
          ],
          objectives: [
            'I can distinguish a solar eclipse from a lunar eclipse by the geometry.',
            'I can explain why eclipses are rare using the tilt of the Moon\'s orbit.',
            'I can predict which phase each kind of eclipse must occur at.',
          ],
          vocabulary: [
            { term: 'solar eclipse', definition: 'The Moon passing between the Sun and the Earth, blocking the Sun from part of the Earth.' },
            { term: 'lunar eclipse', definition: 'The Earth passing between the Sun and the Moon, so the Earth\'s shadow falls on the Moon.' },
            { term: 'umbra', definition: 'The darkest, complete part of a shadow.' },
          ],
          materials: ['The lamp and ball from the previous lesson', 'A tilted hoop or a piece of stiff card to model the orbital plane', 'The printed worksheet'],
          prep: ['Make the tilted orbit ring in advance. Building it during the lesson costs more than it teaches.'],
          script: [],
          worksheet: { id: 'g6-sci-u4-l2-ws', title: 'Lined Up, Just Occasionally', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['States the phase required for each kind of eclipse.', 'Explains rarity in terms of tilt rather than chance.'],
            exitTicket: 'Ask which phase a lunar eclipse must happen at, and why we do not get one every month.',
          },
          differentiation: {
            support: ['Model the tilt with a hand held at an angle. The physical gesture carries the idea.'],
            extension: ['Research the next solar eclipse visible from your location and explain why the path is so narrow.'],
          },
          misconceptions: [
            {
              misconception: 'Eclipses are unpredictable.',
              looksLike: 'Treating eclipses as random events.',
              correction: 'Show a published eclipse table decades ahead. Predictability is itself the evidence that the geometry is understood.',
            },
          ],
          homeExtension: ['Find the date of the last eclipse visible where you live and what phase the Moon was in.'],
        },
        {
          id: 'g6-sci-u4-l3',
          unitId: 'g6-sci-u4',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Seasons: It Is Not the Distance',
          essentialQuestion: 'If summer is when we are closer to the Sun, why is it summer in Australia in December?',
          summary:
            'The distance explanation is tested and fails on the first question. Learners model axial tilt with a globe and a lamp, and measure how the same beam of light spreads over more area when it strikes at an angle.',
          durationMin: 55,
          standards: [
            { code: 'MS-ESS1-1', framework: 'NGSS', text: 'Develop and use a model of the Earth-sun-moon system to describe the cyclic patterns of lunar phases, eclipses of the sun and moon, and seasons.' },
          ],
          objectives: [
            'I can explain seasons in terms of the tilt of the Earth\'s axis.',
            'I can show why angled light delivers less energy per unit area.',
            'I can explain why the two hemispheres have opposite seasons.',
          ],
          vocabulary: [
            { term: 'axis', definition: 'The imaginary line the Earth spins around, tilted at about 23.5 degrees.' },
            { term: 'hemisphere', definition: 'Half of the Earth, north or south of the equator.' },
            { term: 'intensity', definition: 'How concentrated the light energy is over a given area.' },
          ],
          materials: ['A globe or a ball with a marked axis', 'A torch', 'Squared paper to measure the lit area', 'A protractor'],
          prep: ['Try the angled-torch demonstration on squared paper first so you can say how many squares are lit at each angle.'],
          script: [],
          worksheet: { id: 'g6-sci-u4-l3-ws', title: 'Angle, Not Distance', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Rejects the distance explanation with a reason.', 'Explains seasons using tilt and light intensity.'],
            exitTicket: 'Ask why the Southern Hemisphere has summer in December.',
          },
          differentiation: {
            support: ['Do only the torch and squared paper demonstration. The area effect alone carries most of the idea.'],
            extension: ['Explain why the Arctic gets continuous daylight in June, using the tilt.'],
          },
          misconceptions: [
            {
              misconception: 'Seasons are caused by the Earth being closer to the Sun in summer.',
              looksLike: 'A drawing of a wildly elliptical orbit.',
              correction: 'Point out that the Earth is actually closest to the Sun in early January, during the Northern winter.',
            },
          ],
          homeExtension: ['Measure the length of your shadow at noon once a month and record how it changes.'],
        },
        {
          id: 'g6-sci-u4-l4',
          unitId: 'g6-sci-u4',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Predicting the Sky: Using the Model Forwards',
          essentialQuestion: 'Can I say what the sky will do next month?',
          summary:
            'The model turned into a predictive tool. Learners forecast phases and rough rise times for specific dates, then check against observation or an almanac. Prediction is what separates a model from a picture.',
          durationMin: 50,
          standards: [
            { code: 'MS-ESS1-1', framework: 'NGSS', text: 'Develop and use a model of the Earth-sun-moon system to describe the cyclic patterns of lunar phases, eclipses of the sun and moon, and seasons.' },
          ],
          objectives: [
            'I can predict the Moon\'s phase for a future date.',
            'I can estimate when a given phase rises and sets.',
            'I can compare a prediction with an observation and explain the difference.',
          ],
          vocabulary: [
            { term: 'prediction', definition: 'A statement about what will happen, made before it happens and able to be wrong.' },
            { term: 'cycle', definition: 'A pattern that repeats over a fixed period.' },
          ],
          materials: ['A calendar', 'The learner\'s Moon diary if they kept one', 'An almanac or printed moon-phase table for checking'],
          prep: ['Have the real data ready but hidden. Predictions must be committed to in writing before anything is checked.'],
          script: [],
          worksheet: { id: 'g6-sci-u4-l4-ws', title: 'Say What Will Happen', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Produces dated written predictions.', 'Compares against real data and explains discrepancies.'],
            exitTicket: 'Ask for the phase in exactly fourteen days\' time, with the reasoning.',
          },
          differentiation: {
            support: ['Predict only one week ahead to start with, where the change is small and checkable.'],
            extension: ['Predict the phase on a birthday six months away and explain the arithmetic.'],
          },
          misconceptions: [
            {
              misconception: 'The Moon cycle is exactly four weeks.',
              looksLike: 'Predictions that drift by a day or two each month and are counted as failures.',
              correction: 'The cycle is 29.5 days. The half-day is precisely why calendars and moons never quite agree.',
            },
          ],
          homeExtension: ['Predict the phase for a family event next month and check on the day.'],
        },
        {
          id: 'g6-sci-u4-l5',
          unitId: 'g6-sci-u4',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Tides, Time and Why the Moon Keeps One Face Towards Us',
          essentialQuestion: 'Why have humans never seen the far side of the Moon from Earth?',
          summary:
            'Gravity as the connecting idea. Learners model tidal bulges and tidal locking, and discover that the Moon does rotate — exactly once per orbit, which is why the same face is always turned towards us.',
          durationMin: 50,
          standards: [
            { code: 'MS-ESS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the role of gravity in the motions within galaxies and the solar system.' },
            { code: 'MS-ESS1-1', framework: 'NGSS', text: 'Develop and use a model of the Earth-sun-moon system to describe the cyclic patterns of lunar phases, eclipses of the sun and moon, and seasons.' },
          ],
          objectives: [
            'I can explain why there are two high tides a day.',
            'I can show that the Moon rotates once per orbit.',
            'I can describe gravity as a force acting at a distance between any two masses.',
          ],
          vocabulary: [
            { term: 'tide', definition: 'The regular rise and fall of sea level caused mainly by the Moon\'s gravity.' },
            { term: 'tidal locking', definition: 'When a body rotates exactly once per orbit, so it always shows the same face.' },
            { term: 'gravity', definition: 'An attractive force between any two objects with mass, stronger for more mass and weaker with distance.' },
          ],
          materials: ['A ball with one side marked', 'A chair or a marked spot to orbit', 'A tide table if you live near a coast'],
          prep: ['Practise the walking demonstration: carry the ball around a chair keeping the mark always facing the chair, and count your own rotations.'],
          script: [],
          worksheet: { id: 'g6-sci-u4-l5-ws', title: 'The Same Face, Always', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Explains tidal locking with a physical demonstration.', 'Accounts for two tides rather than one.'],
            exitTicket: 'Ask whether the Moon rotates. The correct answer is yes, once per orbit, and the reasoning matters more than the word.',
          },
          differentiation: {
            support: ['Do the walking demonstration and stop there. It is the memorable part.'],
            extension: ['Explain why there is a second tidal bulge on the far side of the Earth.'],
          },
          misconceptions: [
            {
              misconception: 'The Moon does not rotate.',
              looksLike: '"It always shows the same face, so it must not be spinning."',
              correction: 'Walk around a chair facing it the whole time, and have them count how many times your back faced the wall. Once per lap.',
            },
          ],
          homeExtension: ['Look up today\'s tide times for the nearest coast and see how they shift each day.'],
        },
      ],
    },

    /* ============================================================ UNIT 5 */
    {
      id: 'g6-sci-u5',
      gradeId: 'g6',
      subjectId: 'science',
      sequence: 5,
      title: 'The Solar System, Scale and Deep Time',
      bigIdea:
        'Gravity organises everything from a moon to a galaxy, the solar system is almost entirely empty space, and the rocks under your feet are a readable record of four and a half billion years.',
      description:
        'Opens with a scale model that cannot be built indoors: if the Sun is a football, where is the Earth? Learners work with real solar system data, build a scale model that has to leave the building, and then turn the same evidence-based reasoning on rock strata, where the layers of a cliff face turn out to be a sequence of datable events. Deep time is the hardest idea in the course and is treated as such.',
      weeks: 6,
      standards: [
        { code: 'MS-ESS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the role of gravity in the motions within galaxies and the solar system.' },
        { code: 'MS-ESS1-3', framework: 'NGSS', text: 'Analyze and interpret data to determine scale properties of objects in the solar system.' },
        { code: 'MS-ESS1-4', framework: 'NGSS', text: 'Construct a scientific explanation based on evidence from rock strata for how the geologic time scale is used to organize Earth\'s 4.6-billion-year-old history.' },
      ],
      lessonTitles: [
        'If the Sun Is a Football, Where Is the Earth?',
        'Gravity: The Rule the Solar System Obeys',
        'Reading the Data Table: Scale Properties of Planets',
        'Rock Strata: A Stack of Events in Order',
        'Four and a Half Billion Years on a Piece of String',
      ],
      performanceTask:
        'The Scale Walk: the learner chooses a scale, calculates the position and size of every planet at that scale, and lays the model out along a real street, path or field. They then write a short account of what the model shows that a textbook diagram cannot, including at least two numbers from their own calculations.',
      lessons: [
        {
          id: 'g6-sci-u5-l1',
          unitId: 'g6-sci-u5',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'If the Sun Is a Football, Where Is the Earth?',
          essentialQuestion: 'Why is every picture of the solar system you have ever seen a lie?',
          summary:
            'The anchoring phenomenon of the unit. Learners estimate where a pea-sized Earth would go if the Sun were a football, then calculate it and discover the answer is about twenty-five metres away — and the whole model will not fit in the room.',
          durationMin: 50,
          standards: [
            { code: 'MS-ESS1-3', framework: 'NGSS', text: 'Analyze and interpret data to determine scale properties of objects in the solar system.' },
          ],
          objectives: [
            'I can estimate a distance and then check it by calculation.',
            'I can explain why solar system diagrams are not to scale.',
            'I can work out a scaled distance from a real one.',
          ],
          vocabulary: [
            { term: 'scale', definition: 'The fixed ratio between a distance in a model and the real distance it represents.' },
            { term: 'astronomical unit', definition: 'The average distance from the Earth to the Sun, used as a convenient unit for the solar system.' },
            { term: 'order of magnitude', definition: 'A factor of ten. Two orders of magnitude means a hundred times.' },
          ],
          materials: ['A football and a dried pea', 'A long tape measure', 'A calculator', 'A table of planetary distances'],
          prep: ['Check you have twenty-five metres available outdoors. If not, scale down to a tennis ball Sun before the lesson.'],
          script: [],
          worksheet: { id: 'g6-sci-u5-l1-ws', title: 'It Does Not Fit in the Room', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Estimates, calculates and compares.', 'Explains why textbook diagrams compress distance.'],
            exitTicket: 'Ask how far away Neptune would be at the same scale, in kilometres or in minutes of walking.',
          },
          differentiation: {
            support: ['Provide the scale factor and ask only for two planets.'],
            extension: ['Work out where the nearest star would be at the same scale. It is roughly the distance to another country.'],
          },
          misconceptions: [
            {
              misconception: 'The planets are fairly close together and roughly in a line.',
              looksLike: 'A diagram of evenly spaced planets filling the page.',
              correction: 'Do the walk. No explanation competes with counting your own paces to Jupiter.',
            },
          ],
          homeExtension: ['Pace out the scaled distance to Mars along your street.'],
        },
        {
          id: 'g6-sci-u5-l2',
          unitId: 'g6-sci-u5',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Gravity: The Rule the Solar System Obeys',
          essentialQuestion: 'Why does anything orbit anything?',
          summary:
            'Gravity introduced as a universal attraction that depends on mass and distance, then used to explain why the Sun holds the planets, why moons orbit planets, and why galaxies hold together at all.',
          durationMin: 50,
          standards: [
            { code: 'MS-ESS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the role of gravity in the motions within galaxies and the solar system.' },
          ],
          objectives: [
            'I can state what gravity depends on.',
            'I can explain why an orbiting object is constantly falling and never lands.',
            'I can use gravity to explain the structure of the solar system.',
          ],
          vocabulary: [
            { term: 'mass', definition: 'The amount of matter in an object, which determines how strongly it pulls.' },
            { term: 'orbit', definition: 'A path in which an object keeps falling towards another but keeps missing it.' },
            { term: 'satellite', definition: 'Anything in orbit around a larger body, natural or built.' },
          ],
          materials: ['A stretchy fabric sheet and a heavy ball for the gravity-well model', 'Marbles', 'A ball on a string'],
          prep: [
            'Set up the fabric model in advance and know its limits — it represents curvature with gravity, which is circular, so say so honestly.',
            'Practise the ball on a string so the release direction is clean.',
          ],
          script: [],
          worksheet: { id: 'g6-sci-u5-l2-ws', title: 'Falling Forever', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['States that gravity depends on mass and distance.', 'Explains an orbit as continuous falling.'],
            exitTicket: 'Ask what would happen to the Earth if the Sun\'s gravity switched off. The answer is a straight line, not a fall inwards.',
          },
          differentiation: {
            support: ['Use the ball on a string only. Letting go and watching it fly off straight is the key observation.'],
            extension: ['Explain why the outer planets take so much longer to orbit than the inner ones.'],
          },
          misconceptions: [
            {
              misconception: 'There is no gravity in space.',
              looksLike: '"Astronauts float because there is no gravity up there."',
              correction: 'Ask what holds the Moon in orbit then. Astronauts float because they are falling, along with their spacecraft.',
            },
          ],
          homeExtension: ['Watch footage of astronauts on the space station and explain what is really happening.'],
        },
        {
          id: 'g6-sci-u5-l3',
          unitId: 'g6-sci-u5',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Reading the Data Table: Scale Properties of Planets',
          essentialQuestion: 'What can you work out about a planet you have never seen, from a table of numbers?',
          summary:
            'Data analysis with real planetary data — diameter, mass, density, distance, orbital period, number of moons. Learners find the patterns themselves, including the density split between rocky and gas planets.',
          durationMin: 55,
          standards: [
            { code: 'MS-ESS1-3', framework: 'NGSS', text: 'Analyze and interpret data to determine scale properties of objects in the solar system.' },
          ],
          objectives: [
            'I can find a pattern in a table of planetary data.',
            'I can use density to sort planets into two groups.',
            'I can make and defend a claim about a planet from data alone.',
          ],
          vocabulary: [
            { term: 'density', definition: 'Mass divided by volume — how much matter is packed into a given space.' },
            { term: 'orbital period', definition: 'The time a planet takes to go once around the Sun.' },
            { term: 'terrestrial', definition: 'Rocky and relatively dense, like the four inner planets.' },
          ],
          materials: ['A printed planetary data table', 'A calculator', 'Graph paper'],
          prep: ['Check your data table has density in it, or the main pattern is invisible.'],
          script: [],
          worksheet: { id: 'g6-sci-u5-l3-ws', title: 'What the Numbers Say', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Identifies at least two patterns in the data.', 'Sorts planets by density and justifies the grouping.'],
            exitTicket: 'Give data for an unnamed planet and ask whether it is rocky or gaseous, with the reason.',
          },
          differentiation: {
            support: ['Reduce the table to four planets and two columns.'],
            extension: ['Plot distance against orbital period and describe the relationship.'],
            language: ['Data tables are language-light and are an excellent place for a multilingual learner to lead.'],
          },
          misconceptions: [
            {
              misconception: 'Bigger planets are always heavier in the sense of denser.',
              looksLike: 'Saturn assumed to be the densest because it is large.',
              correction: 'Saturn is less dense than water. Compute a couple of densities rather than asserting it.',
            },
          ],
          homeExtension: ['Work out what you would weigh on Mars and on Jupiter and explain the difference.'],
        },
        {
          id: 'g6-sci-u5-l4',
          unitId: 'g6-sci-u5',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Rock Strata: A Stack of Events in Order',
          essentialQuestion: 'How can a cliff face tell you the order things happened in?',
          summary:
            'Superposition and cross-cutting relationships. Learners build a layered model in a jar, then read real strata sequences and construct an evidence-based account of the events that produced them.',
          durationMin: 55,
          standards: [
            { code: 'MS-ESS1-4', framework: 'NGSS', text: 'Construct a scientific explanation based on evidence from rock strata for how the geologic time scale is used to organize Earth\'s 4.6-billion-year-old history.' },
          ],
          objectives: [
            'I can put rock layers in order from oldest to youngest.',
            'I can use a fossil or an intrusion to date a layer relative to others.',
            'I can construct an explanation of the events that produced a sequence.',
          ],
          vocabulary: [
            { term: 'strata', definition: 'Layers of sedimentary rock, normally laid down oldest at the bottom.' },
            { term: 'superposition', definition: 'The principle that in undisturbed layers, the lower ones are older.' },
            { term: 'index fossil', definition: 'A fossil of a species that existed for a short, known span, used to date the rock containing it.' },
            { term: 'unconformity', definition: 'A gap in the record where layers were eroded away before new ones formed.' },
          ],
          materials: ['A clear jar', 'Sand, gravel and soil in contrasting colours', 'Printed diagrams of real strata sequences'],
          prep: ['Build the jar in advance and add a tilt or a break to one part, so there is something to interpret rather than just a stack.'],
          script: [],
          worksheet: { id: 'g6-sci-u5-l4-ws', title: 'Oldest at the Bottom, Usually', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Orders layers correctly and justifies the order.', 'Interprets an intrusion or an unconformity as an event.'],
            exitTicket: 'Show a sequence with one tilted section and ask what happened, in order.',
          },
          differentiation: {
            support: ['Start with three horizontal layers and no complications.'],
            extension: ['Interpret a sequence containing a fault, an intrusion and an unconformity together.'],
          },
          misconceptions: [
            {
              misconception: 'The lowest layer is always the oldest, without exception.',
              looksLike: 'Confidently misreading an overturned or faulted sequence.',
              correction: 'Show a folded sequence. Superposition holds for undisturbed layers, and spotting disturbance is part of the skill.',
            },
          ],
          homeExtension: ['Look for layers in a road cutting, a cliff or a riverbank and photograph them.'],
        },
        {
          id: 'g6-sci-u5-l5',
          unitId: 'g6-sci-u5',
          gradeId: 'g6',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Four and a Half Billion Years on a Piece of String',
          essentialQuestion: 'If all of Earth\'s history were one long piece of string, how much of it would humans occupy?',
          summary:
            'Deep time made physical. A measured length of string is marked with the major events of Earth history to scale, and the human section turns out to be too small to mark with a pen.',
          durationMin: 50,
          standards: [
            { code: 'MS-ESS1-4', framework: 'NGSS', text: 'Construct a scientific explanation based on evidence from rock strata for how the geologic time scale is used to organize Earth\'s 4.6-billion-year-old history.' },
          ],
          objectives: [
            'I can place major events on a scaled timeline.',
            'I can calculate the scaled position of an event from its date.',
            'I can describe how the geologic time scale organises Earth history.',
          ],
          vocabulary: [
            { term: 'geologic time scale', definition: 'The system of eons, eras and periods used to organise Earth\'s history.' },
            { term: 'era', definition: 'A major division of geologic time, containing several periods.' },
            { term: 'extinction event', definition: 'A period when a large proportion of species died out, often used as a boundary marker.' },
          ],
          materials: ['A 4.6-metre length of string or tape', 'Pegs or sticky labels', 'A list of dated events', 'A calculator'],
          prep: [
            'Measure and cut the string in advance. One metre per billion years is the easiest scale to reason with.',
            'Work out the human position yourself first so you are ready for the reaction.',
          ],
          script: [],
          worksheet: { id: 'g6-sci-u5-l5-ws', title: 'The Last Millimetre', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Calculates scaled positions correctly.', 'Describes the relative brevity of recent events accurately.'],
            exitTicket: 'Ask where on the string the dinosaurs died out, and how far that is from the end.',
          },
          differentiation: {
            support: ['Place four events rather than twelve.'],
            extension: ['Rescale to a single calendar year and work out the date and time humans appear.'],
          },
          misconceptions: [
            {
              misconception: 'Humans and dinosaurs overlapped.',
              looksLike: 'Placing both near the same point on the string.',
              correction: 'Measure the actual gap on the string. Sixty-six million years is six and a half centimetres at this scale, and humans occupy well under a millimetre.',
            },
          ],
          homeExtension: ['Stretch the string across a room at home and walk its length, saying what is happening as you go.'],
        },
      ],
    },
  ],
}

export default course
