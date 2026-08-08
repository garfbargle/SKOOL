import type { SubjectCourse } from '../../types'

/**
 * Grade 7 Science — a full year of life science, phenomenon first.
 *
 * Every unit opens with something that does not make sense yet: water that
 * looks empty and is not, a tree that gains a tonne of mass from thin air, an
 * island where the wolves and the moose keep trading places. The explanation
 * arrives because students need it, not because it is next in the book.
 */
const course: SubjectCourse = {
  gradeId: 'g7',
  subjectId: 'science',
  title: 'Grade 7 Science: Life Science',
  overview:
    'This is the year biology stops being a list of names. Students investigate the claim that every living thing is built of cells and then follow that claim upward — cells into tissues, tissues into the interacting systems of a body, bodies into populations, populations into ecosystems that run on cycled matter and one-way energy. Along the way they meet the two mechanisms that explain why life looks the way it does: inheritance, which copies traits with variation, and selection, which sorts that variation against an environment. Nothing is asserted here that students are not first given a reason to want explained.',
  yearGoals: [
    'Provide evidence that living things are made of cells, and model how the parts of a cell contribute to the function of the whole.',
    'Argue from evidence that a body is a system of interacting subsystems, including how sensory receptors turn a stimulus into a message.',
    'Explain photosynthesis and cellular respiration as the rearrangement of matter and the movement of energy through organisms and ecosystems.',
    'Model how traits are inherited and varied, and why a change to a gene can change a protein and therefore an organism.',
    'Use fossil, anatomical, embryological and mathematical evidence to explain how populations change over time.',
  ],
  units: [
    /* ============================================================== UNIT 1 */
    {
      id: 'g7-sci-u1',
      gradeId: 'g7',
      subjectId: 'science',
      sequence: 1,
      title: 'Cells: The Smallest Thing That Is Alive',
      bigIdea:
        'Everything alive is built of cells — some organisms are one cell, some are trillions — and the parts inside a cell are what let the whole cell do its job.',
      description:
        'The unit begins with a jar of pond water that looks empty and is not. From that phenomenon students build the cell theory the way it was actually built: by looking, repeatedly, at different living things and finding the same structure every time. They then model how the parts of a cell contribute to its function, work out why no single cell can grow very large, and finish able to argue the difference between a plant cell and an animal cell from evidence rather than memory.',
      weeks: 5,
      standards: [
        { code: 'MS-LS1-1', framework: 'NGSS', text: 'Conduct an investigation to provide evidence that living things are made of cells; either one cell or many different numbers and types of cells.' },
        { code: 'MS-LS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the function of a cell as a whole and ways the parts of cells contribute to the function.' },
      ],
      lessonTitles: [
        'The Water That Was Not Empty',
        'Onion, Cheek and Leaf: Three Specimens, One Pattern',
        'What Each Part Actually Does',
        'Why No Single Cell Grows to the Size of a Cat',
        'Plant Cell, Animal Cell, and the Argument About the Wall',
      ],
      performanceTask:
        'The Cell Case File: students assemble evidence from at least four specimens they have observed themselves, plus two published micrographs, into a one-page argument for the claim that all living things are made of cells — including an honest section on what their own evidence cannot show.',
      lessons: [
        /* -------------------------------------------------- AUTHORED LESSON */
        {
          id: 'g7-sci-u1-l1',
          unitId: 'g7-sci-u1',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'The Water That Was Not Empty',
          essentialQuestion: 'How would you find out whether something is made of cells?',
          summary:
            'The anchor investigation of the year. Students look at a jar of clear pond water, predict what is in it, then prepare and observe their own wet mounts of onion epidermis and pond water. The claim that living things are made of cells is built from their own observations rather than handed over.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-1', framework: 'NGSS', text: 'Conduct an investigation to provide evidence that living things are made of cells; either one cell or many different numbers and types of cells.' },
            { code: 'MS-LS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the function of a cell as a whole and ways the parts of cells contribute to the function.' },
          ],
          objectives: [
            'I can prepare a wet mount slide without trapping air bubbles.',
            'I can record what I actually observe, separately from what I expected.',
            'I can use my observations as evidence for the claim that living things are made of cells.',
            'I can say what a single-celled organism and a multicellular organism have in common.',
          ],
          vocabulary: [
            { term: 'cell', definition: 'The smallest unit that is itself alive, enclosed by a membrane.', example: 'An onion is made of millions of cells; a paramecium is one.' },
            { term: 'unicellular', definition: 'Made of exactly one cell, which must do every job the organism needs.' },
            { term: 'multicellular', definition: 'Made of many cells, which can specialise because other cells cover the other jobs.' },
            { term: 'wet mount', definition: 'A slide made by putting a specimen in a drop of water under a cover slip.' },
            { term: 'field of view', definition: 'The circle of specimen you can see down the microscope at one time.' },
            { term: 'evidence', definition: 'An observation used to support a claim, as distinct from what you already believed.' },
          ],
          materials: [
            'A sealed jar of pond water, collected at least four days earlier, or a hay infusion made by steeping dried grass in water for a week',
            'A microscope, or a clip-on smartphone lens of 60x or more — either works, and the lesson has a no-microscope route in the notes',
            'Slides and cover slips, two per student',
            'One onion, quartered, with the papery inner skin peeled and ready',
            'Pipettes or drinking straws for transferring single drops',
            'Iodine or weak food colouring as a stain, plus paper towel',
            'The printed worksheet and a sharp pencil for observation drawings',
          ],
          prep: [
            'Collect the pond water at least four days before the lesson and leave the jar somewhere with indirect light. A jar collected that morning is often disappointing.',
            'Peel two or three sheets of onion epidermis in advance and keep them flat between damp paper towel. Peeling under pressure in front of a class rarely goes well.',
            'Focus one microscope on onion epidermis before the lesson starts and leave it set up. You will need one instrument that definitely works.',
            'Practise the cover slip drop yourself once. It is a small motion and it is the difference between a clear slide and a field of bubbles.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Is Anything Alive in Here?',
              minutes: 8,
              say: [
                "This is a jar of water from a pond. Look at it. Hold it up to the light if you want.",
                "Question: is anything alive in there right now? Not was. Is. Vote.",
                "Most of you said yes, and I want to push on that, because look at it — it is clear. It looks like tap water. What is your evidence?",
                "That is a prediction, not evidence. It is a good prediction. But right now nobody in this room has any evidence at all about what is in this jar.",
                "So we are going to get some. In about fifteen minutes you will be looking at one drop of this, and I am not going to tell you what you will see, because if I tell you what to see you will see it whether it is there or not.",
              ],
              do: [
                'Hold the jar up and turn it slowly. Say nothing while you do it — the silence makes people actually look.',
                'Take the vote with hands and write both numbers on the board.',
                'Refuse, visibly and cheerfully, to answer what is in the jar.',
              ],
              studentDoes: ['Observes the jar, commits to a prediction, and is pushed to distinguish prediction from evidence.'],
              checks: [
                {
                  ask: 'What is the difference between what you predict and what you know?',
                  lookFor: 'A prediction comes from what I have been told or expect; evidence comes from an observation I have made.',
                  ifStuck: 'Ask what they would say if a scientist demanded proof right now. The honest answer — nothing yet — is exactly the position an investigation starts from.',
                },
                {
                  ask: 'What would count as evidence that something is alive in there?',
                  lookFor: 'Seeing something move on its own, seeing something grow, seeing structures that are not just specks of dirt.',
                },
              ],
              tip: 'Do not tell them about microbes. Every year some student announces it and that is fine — ask them for their evidence too, and their answer will also be "I read it", which makes the point better than you could.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'How to Make a Slide That Works',
              minutes: 10,
              say: [
                "Before the pond water, we practise on something easier, because a bad slide will make you conclude the wrong thing.",
                "One drop of water in the middle of the slide. One drop. If you can see it spreading to the edges, that is three drops and your cover slip will float.",
                "Onion skin goes flat on the drop. Flat matters — a folded specimen looks like ten layers of nothing.",
                "Cover slip: touch one edge down first, then lower the other edge slowly, like a drawbridge closing. Straight down traps air, and air bubbles look like beautiful black-rimmed circles that fool everybody.",
                "Lowest magnification first, always. Find the specimen, then go up. If you start at high power you will spend ten minutes looking at a blur and decide there is nothing there.",
                "One more thing about recording. You draw what is in the circle. Not what you think should be there, not what is in a book. If your field of view is half empty, draw it half empty.",
              ],
              do: [
                'Demonstrate the whole sequence once at normal speed, then repeat the cover slip motion three times slowly.',
                'Deliberately make a bubble-filled slide and show it. Naming the failure in advance saves fifteen minutes later.',
                'Point at the pre-focused microscope so students know a working reference exists.',
              ],
              studentDoes: ['Watches the technique demonstration and asks about the cover slip motion.'],
              checks: [
                {
                  ask: 'Why do we lower the cover slip at an angle?',
                  lookFor: 'To push the air out ahead of it so no bubbles get trapped.',
                  ifStuck: 'Do it wrong on purpose under the visualiser or hold it up. The bubbles arrive instantly and the reason becomes obvious.',
                },
                { ask: 'Why start at the lowest magnification?', lookFor: 'Because the field of view is wider, so it is possible to find the specimen at all.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Onion First',
              minutes: 12,
              say: [
                "Onion first, because onion is forgiving and because you already know what an onion is.",
                "Make the slide. Find it at low power. Then come up one step.",
                "Now — do not tell me what you have been taught. Tell me what you see. Shape? Are the shapes the same as each other? Are they arranged in any pattern?",
                "Boxes. Everybody is saying boxes, or bricks. Look at how they share walls. Nobody drew a gap between them, did they.",
                "Count roughly how many fit across your field of view. That number, right there, is the beginning of your evidence.",
                "Add one drop of stain at the edge of the cover slip and draw it through with a corner of paper towel. Now look again. Something that was invisible thirty seconds ago is not invisible any more.",
              ],
              do: [
                'Circulate and refuse to identify anything for anyone. Answer every "is this it?" with "describe it to me".',
                'Set the staining step going only once most students have looked at the unstained slide, so the difference is a genuine before and after.',
                'Keep a tally on the board of how many cells students count across a field of view. The spread in the numbers is worth discussing.',
              ],
              studentDoes: ['Prepares and observes an onion epidermis wet mount, describes the repeating structure, then re-observes after staining.'],
              checks: [
                {
                  ask: 'Describe the shapes to me without using the word cell.',
                  lookFor: 'Boxes, bricks, rectangles, all roughly the same size, packed with shared walls and no gaps.',
                  ifStuck: 'Ask them to draw one shape only, then a second one next to it. The relationship shows up in the drawing before it shows up in words.',
                },
                {
                  ask: 'What did the stain make visible, and does that mean the stain created it?',
                  lookFor: 'A dark blob inside each box — the nucleus — and the recognition that staining reveals rather than creates.',
                  ifStuck: 'Ask whether painting a wall red makes the wall exist. Students find the distinction obvious once it is put physically.',
                },
              ],
              tip: 'The most valuable thing you can do in this beat is not answer questions. Every "what am I looking at?" you turn back into "describe it" builds the habit the whole year runs on.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Now the Pond Water',
              minutes: 18,
              say: [
                "New slide. One drop of pond water, cover slip, low power, hunt.",
                "Move the slide slowly. Most of the drop is empty and the interesting parts are not in the middle.",
                "If something moves across your field, follow it. Then draw it. Then answer the question on the worksheet: is that one cell, or many?",
                "Here is what I want in the observation boxes — a drawing, the magnification, and one sentence saying whether it moved on its own.",
                "When you have two organisms drawn, do the comparison table. Onion cells and pond organisms. What is the same about them? Not what is different — anyone can list differences. What is the same?",
              ],
              do: [
                'Expect a wave of excitement when the first student finds something moving. Let it happen, then get them to describe it before the whole class crowds round.',
                'Have a published micrograph ready for anyone whose drop is genuinely barren, and be honest that it is somebody else\'s evidence rather than theirs.',
                'Check drawings for the honesty rule — mostly empty fields drawn as mostly empty.',
              ],
              studentDoes: ['Prepares a pond water wet mount, locates and draws at least two organisms, records magnification and movement, and completes the comparison table.'],
              checks: [
                {
                  ask: 'Is the thing you drew one cell or many cells? How can you tell?',
                  lookFor: 'Reasoning from whether internal divisions or repeated compartments are visible, rather than from size.',
                  ifStuck: 'Put their pond drawing next to their onion drawing and ask where the walls are in each.',
                },
                {
                  ask: 'What is the same about an onion and a pond organism?',
                  lookFor: 'Both are built of enclosed units with something inside; both have a boundary; both have a dark central body when stained.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'What We Can Now Actually Claim',
              minutes: 7,
              say: [
                "Back to the vote. Was anything alive in the jar? And now — what is your evidence?",
                "Notice what changed. This morning you had a belief. Now you have a drawing with a magnification written next to it. That is the difference between science and being right by accident.",
                "Careful with the claim though. You looked at an onion and a drop of pond water. Have you shown that all living things are made of cells?",
                "No. You have shown that these are. That is why we look at a cheek cell and a leaf and a moss next lesson — because a claim about everything needs more than two specimens.",
                "Write your claim sentence at the bottom of the worksheet, and make it honest. Only claim what you saw.",
              ],
              do: [
                'Retake the vote and write the second numbers beside the first.',
                'Read one honest, appropriately limited claim sentence aloud. Praise the limitation specifically, not the confidence.',
              ],
              studentDoes: ['Writes a claim sentence bounded by the evidence they actually collected.'],
              checks: [
                {
                  ask: 'Why can we not yet say all living things are made of cells?',
                  lookFor: 'Because we have only looked at two kinds of living thing; a claim about everything needs many specimens.',
                  ifStuck: 'Ask how they would feel about a claim that all dogs bite based on meeting two dogs.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g7-sci-u1-l1-ws',
            title: 'The Water That Was Not Empty',
            style: 'diagram',
            prepNotes:
              'Print single-sided so the observation circles stay large; students draw inside them and a cramped circle produces a cramped drawing. Pencil only for the drawings — pen cannot be corrected and students stop looking once they have committed in ink. The reference micrographs at the bottom of the sheet are for comparison after observing, not before; fold that section under until the practice beat is done.',
            sections: [
              {
                id: 's1',
                title: 'Before You Look',
                directions: 'Write your prediction now, before the first slide. You will not lose marks for being wrong, and you will lose the point of the lesson if you go back and change it later.',
                layout: 'full',
                items: [
                  'I predict the pond water contains:',
                  'My prediction is based on (be honest — a lesson, a video, a guess?):',
                  'What I would have to see to call this evidence rather than a prediction:',
                ],
                writingLines: 5,
              },
              {
                id: 's2',
                title: 'Making the Slide',
                directions: 'Follow the four steps in the picture. Tick each one as you do it. If you get bubbles, start again — a bubble looks more like a cell than a cell does.',
                layout: 'row',
                items: [
                  'Step 1 — one drop of water in the centre of the slide',
                  'Step 2 — specimen flat on the drop, not folded',
                  'Step 3 — cover slip touched down on one edge first',
                  'Step 4 — cover slip lowered slowly, like a drawbridge',
                ],
                images: [
                  {
                    id: 'g7-sci-u1-img-wetmount',
                    slot: 'Section 2 — the four-stage wet mount procedure',
                    purpose: 'Technique failure is the biggest cause of a wasted practical. A four-panel sequence lets students self-correct at the bench without calling you over, and the angled cover slip in panel four is the single detail that prevents bubbles.',
                    subject: 'a four-panel technical procedure diagram of preparing a microscope wet mount, drawn in clean side-on cross section: a pipette releasing one drop onto a glass slide, a thin flat specimen resting on the drop, a cover slip touching down along one edge at an angle, and the cover slip fully lowered flat',
                    count: 4,
                    composition: 'four equal panels in a single horizontal strip, each panel a side-on cross-section view at the same scale with a thin dividing line between panels, uniform line weight, white background',
                    mustInclude: ['exactly four panels in left-to-right order', 'the cover slip clearly at an angle in the third panel and flat in the fourth', 'a single visible water drop, not a puddle spreading to the slide edges'],
                    mustAvoid: ['any lettering, numerals, captions or step numbers', 'a top-down view, which hides the cover slip angle that the whole diagram exists to show', 'hands, laboratory backgrounds or equipment other than slide, cover slip and pipette'],
                    aspect: '4:1',
                    altText: 'Four-panel cross-section diagram of preparing a wet mount slide',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Observation One — Onion Epidermis',
                directions: 'Draw exactly what is inside your field of view. Not what you expect. If half the circle is empty, draw it empty. Record your magnification underneath, then answer the two questions.',
                layout: 'split',
                items: [
                  'Magnification:',
                  'Roughly how many of these units fit across the widest part of your field of view?',
                  'Describe the shapes and how they are arranged, without using the word cell:',
                  'After staining, what became visible that you could not see before?',
                ],
                writingLines: 8,
                images: [
                  {
                    id: 'g7-sci-u1-img-onion-epidermis',
                    slot: 'Section 3 — reference micrograph of onion epidermis',
                    purpose: 'A reference for students to check their own slide against after they have drawn it. Comparing their drawing to a clean field is how they find out whether they were looking at cells or at bubbles, and the empty label boxes let them annotate what they identified themselves.',
                    subject: 'a scientific micrograph-style diagram of onion epidermis cells, elongated rectangular units packed edge to edge in a brick-like tiling with shared boundary walls and one small oval nucleus inside each unit, seen inside a circular microscope field of view',
                    count: 12,
                    composition: 'circular field of view filling the frame, exactly twelve complete cells tiled edge to edge with no gaps, three thin leader lines running from three different structures out to three empty rectangular boxes beyond the circle',
                    mustInclude: ['exactly twelve complete cells, each with one visible nucleus', 'shared straight walls between neighbouring cells with no gaps between them', 'exactly three empty rectangular label boxes connected by thin leader lines'],
                    mustAvoid: ['any lettering, words or numerals inside the label boxes or anywhere in the image', 'round air bubbles with thick dark rims, which would model the exact error students must avoid', 'chloroplasts, which onion epidermis does not have'],
                    aspect: '4:3',
                    altText: 'Micrograph-style diagram of twelve tiled onion epidermis cells with three empty label boxes',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's4',
                title: 'Observation Two — Pond Water',
                directions: 'Hunt slowly. Draw two different organisms you find, one in each circle. Under each drawing write the magnification and one sentence saying whether it moved on its own. Then answer the hardest question on the page: is it one cell or many?',
                layout: 'split',
                items: [
                  'Organism A — magnification:                Did it move on its own?',
                  'Organism A — one cell or many? What is your evidence?',
                  'Organism B — magnification:                Did it move on its own?',
                  'Organism B — one cell or many? What is your evidence?',
                ],
                writingLines: 8,
                images: [
                  {
                    id: 'g7-sci-u1-img-pond-microbes',
                    slot: 'Section 4 — reference field of pond organisms',
                    purpose: 'Students who find a barren drop still need something to reason about, and the mixture of single-celled and colonial forms sets up the one-cell-or-many question that the whole of MS-LS1-1 turns on.',
                    subject: 'a scientific micrograph-style diagram of a drop of pond water inside a circular field of view containing five clearly separated single-celled organisms of different shapes — a slipper-shaped ciliate with fine hair-like cilia, a shapeless amoeba with blunt extensions, a teardrop flagellate with one long whip, a boat-shaped diatom with a geometric shell, and a spherical green colony of many small round units',
                    count: 5,
                    composition: 'circular field of view filling the frame, exactly five organisms well separated across the circle with clear empty space between them, all drawn at a consistent scale, pale neutral background inside the circle',
                    mustInclude: ['exactly five organisms and no more', 'each organism a clearly different shape from the others', 'the spherical colony visibly made of many small repeated units'],
                    mustAvoid: ['any lettering, labels, scale bars or numerals', 'organisms overlapping or touching each other', 'a cluttered background of debris that would make counting impossible'],
                    aspect: '1:1',
                    altText: 'Micrograph-style diagram of five different pond organisms in a circular field of view',
                    style: 'diagram',
                  },
                  {
                    id: 'g7-sci-u1-img-cheek-cells',
                    slot: 'Section 4 — reference micrograph of animal cells',
                    purpose: 'Placing an animal cell beside a plant cell and a pond organism is what makes the comparison table possible. The irregular outline is the point: it shows the boundary is a flexible membrane rather than a rigid wall, without a word being said.',
                    subject: 'a scientific micrograph-style diagram of human cheek lining cells, irregular flattened rounded shapes with soft uneven outlines, each containing one dark round nucleus, loosely scattered rather than tiled, inside a circular microscope field of view',
                    count: 6,
                    composition: 'circular field of view, exactly six cells scattered irregularly with visible empty background between most of them, two cells lightly touching at one edge, all at the same scale',
                    mustInclude: ['exactly six cells, each with exactly one nucleus', 'soft irregular outlines with no straight shared walls', 'clear empty space between most of the cells'],
                    mustAvoid: ['any lettering, labels or numerals', 'rectangular brick-like tiling, which would erase the contrast with the onion image', 'cell walls or chloroplasts'],
                    aspect: '4:3',
                    altText: 'Micrograph-style diagram of six irregular cheek cells each with one nucleus',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's5',
                title: 'What Is the Same?',
                directions: 'Fill in the table comparing what you observed. Anyone can list differences. The row that matters is the last one — what is the same about all three?',
                layout: 'grid',
                items: [
                  'ONION — shape of the units / boundary between them / what is inside / one or many',
                  'POND ORGANISM — shape of the units / boundary between them / what is inside / one or many',
                  'ANIMAL CELLS — shape of the units / boundary between them / what is inside / one or many',
                  'WHAT ALL THREE SHARE:',
                  'MY CLAIM, limited to what I actually observed:',
                  'What I would need to observe before I could make a claim about all living things:',
                ],
                writingLines: 10,
                images: [
                  {
                    id: 'g7-sci-u1-img-scale-strip',
                    slot: 'Section 5 — the scale strip',
                    purpose: 'Students consistently believe cells are far bigger than they are, which quietly wrecks their reasoning about why cells cannot be seen and why organisms need so many. A single ordered strip from a hair down to a bacterium fixes the sense of scale in one glance.',
                    subject: 'a horizontal scale comparison strip showing five biological objects drawn in correct relative proportion along one baseline, ordered largest to smallest: a cross-section of a human hair, a plant cell, an animal cell, a single-celled pond organism, and a rod-shaped bacterium',
                    count: 5,
                    composition: 'one straight horizontal baseline running the width of the frame, exactly five objects evenly spaced along it in descending size order, a thin leader line dropping from each object to an empty rectangular caption box beneath the baseline',
                    mustInclude: ['exactly five objects in descending size order', 'exactly five empty caption boxes, one under each object', 'relative sizes genuinely proportional, with the bacterium dramatically smaller than the hair'],
                    mustAvoid: ['any numerals, units, lettering or scale markings anywhere', 'objects drawn at similar sizes for convenience, which destroys the entire purpose', 'decorative backgrounds or colour gradients'],
                    aspect: '4:1',
                    altText: 'A scale strip of five biological objects from a hair to a bacterium with empty caption boxes',
                    style: 'diagram',
                  },
                ],
              },
            ],
            answerKey: [
              'Section 3 — onion epidermis: rectangular units packed edge to edge with shared straight walls, no gaps, roughly ten to twenty across a field of view at medium power. Staining reveals one small oval nucleus per unit. Accept any honest count; the variation between students is worth discussing rather than correcting.',
              'Section 4 — pond organisms vary by sample. A slipper-shaped ciliate, a shapeless crawling amoeba and a green flagellate are all single cells; a green sphere made of many small units is a colony and is a legitimate source of disagreement. Reward the evidence, not the identification.',
              'Section 4 — one cell or many: the reasoning that counts is whether repeated internal compartments with their own boundaries are visible. Size alone is not evidence, since some single cells are large.',
              'Section 5 — all three share an outer boundary, contents inside that boundary, and a dark central body when stained. Differences students will notice: straight walls and tiling in onion, soft irregular outlines in animal cells, independent movement in pond organisms.',
              'Section 5 — an acceptable claim is bounded: "the onion, the cheek lining and the pond organisms I observed are all made of cells." An unacceptable claim is "all living things are made of cells", because two or three specimens cannot support it. The honest limitation is the assessed part.',
            ],
          },
          assessment: {
            successCriteria: [
              'Produces a wet mount clear enough to observe, correcting bubbles rather than working round them.',
              'Records observations that match what was actually in the field of view, including empty space.',
              'Uses their own observations as evidence rather than restating a remembered fact.',
              'States a claim bounded by the evidence collected, and names what further evidence would be needed.',
            ],
            exitTicket:
              'One sentence: what did you see today that you would use as evidence that living things are made of cells, and what does your evidence not yet show? A student who answers only the first half is not yet doing science — the limitation is the harder and more important half.',
            rubric: [
              { level: 'emerging', descriptor: 'Recites that living things are made of cells but their drawings show bubbles, remembered textbook shapes, or a field that could not have come from their slide.' },
              { level: 'developing', descriptor: 'Produces honest observations and draws what is there, but treats the general claim as already proven and does not distinguish their evidence from prior knowledge.' },
              { level: 'secure', descriptor: 'Observes accurately across two or more specimens, reasons about one-cell-or-many from visible structure, and states a claim bounded by their own evidence with the next specimen needed named.' },
            ],
          },
          differentiation: {
            support: [
              'Pair a student who struggles with the cover slip motion with the pre-focused microscope for the first observation, so they succeed once before troubleshooting.',
              'Give a partly completed observation circle with the outline of two cells already drawn; the student completes the field and adds the internal detail.',
              'Reduce the comparison table to two specimens rather than three.',
            ],
            extension: [
              'Compare fields of view at two magnifications and work out roughly how many cells would fit across a whole onion scale.',
              'Set up a second hay infusion under different conditions — light and dark, warm and cold — and compare what grows over the following week.',
              'Research and explain why Robert Hooke saw cell walls in cork but no living contents, and what that meant for how long cell theory took to arrive.',
            ],
            language: [
              'The technical words here are all concrete objects. Do the vocabulary at the microscope, pointing, rather than on a list beforehand.',
              'Provide a sentence frame for the claim: "The ___ I observed is made of cells because I saw ___ ."',
            ],
          },
          misconceptions: [
            {
              misconception: 'Air bubbles are cells.',
              looksLike: 'A drawing of perfect circles with thick black rims, all the same size, evenly spread.',
              correction: 'Bubbles have a heavy dark ring and a bright centre, they are perfectly circular, and they move when you press the cover slip. Press it and watch them shift. Cells do not travel.',
            },
            {
              misconception: 'Single-celled organisms are simple, and therefore not really properly alive.',
              looksLike: 'A student describes a paramecium as "just a blob" and is surprised it moves purposefully.',
              correction: 'Point out that one cell has to eat, move, sense, remove waste and reproduce with no help from anyone. It is doing every job your body divides between trillions of cells.',
            },
            {
              misconception: 'Staining creates the structures you then see.',
              looksLike: 'A student says the nucleus "appeared" when the iodine went on.',
              correction: 'Ask whether shining a torch into a dark room creates the furniture. Stain changes contrast; it does not build organelles.',
            },
            {
              misconception: 'If I cannot see it, my slide has nothing on it.',
              looksLike: 'A student concludes their pond water is sterile after twenty seconds at high power.',
              correction: 'Return to low power and move the slide systematically. Most of a drop is genuinely empty, and finding things is a searching skill rather than a luck one.',
            },
          ],
          homeExtension: [
            'Start a jar of water with a pinch of dried grass or a few dead leaves on a windowsill and look at a drop each week for a month with a phone lens. The succession of organisms over four weeks is remarkable.',
            'Look at the thin skin between two layers of a tomato or a red pepper against a bright light and see whether you can spot the cell pattern without any lens at all.',
            'Ask an adult what they were taught about cells and compare it with what you observed. The gap between the taught version and the observed one is usually worth discussing.',
          ],
          teacherNotes:
            'No microscope is not a barrier. A clip-on phone lens at 60x resolves onion cells clearly and larger pond organisms adequately, and the whole lesson runs unchanged. What genuinely matters is that you refuse to identify things for students during the guided and practice beats — the temptation is enormous and it converts an investigation back into a lecture. Expect the pond water to disappoint one or two students; have a published micrograph ready but be explicit that it is somebody else\'s evidence, because that distinction is the intellectual content of the close.',
        },

        {
          id: 'g7-sci-u1-l2',
          unitId: 'g7-sci-u1',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Onion, Cheek and Leaf: Three Specimens, One Pattern',
          essentialQuestion: 'How many different living things do I have to check before the pattern counts as evidence?',
          summary:
            'Replication as a scientific idea. Students observe three or four further specimens and build a class data set, then reason about how many specimens a general claim requires.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-1', framework: 'NGSS', text: 'Conduct an investigation to provide evidence that living things are made of cells; either one cell or many different numbers and types of cells.' },
          ],
          objectives: [
            'I can observe and record cells from at least three different organisms.',
            'I can contribute to and read a class data set.',
            'I can explain why one observation is not enough to support a general claim.',
          ],
          vocabulary: [
            { term: 'replication', definition: 'Repeating an observation to check the result holds.' },
            { term: 'specimen', definition: 'The particular sample being examined.' },
            { term: 'generalisation', definition: 'A claim that goes beyond the cases you actually observed.' },
          ],
          materials: ['Moss leaf, elodea or pondweed, banana pulp, prepared slides if available', 'Microscopes or phone lenses', 'A large class data chart'],
          prep: ['Prepare a wall-sized class data chart with a row per specimen and a column per observation feature.'],
          script: [],
          worksheet: { id: 'g7-sci-u1-l2-ws', title: 'Three Specimens, One Pattern', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Records three specimens accurately.', 'Identifies the feature common to all.', 'Explains why more specimens strengthen the claim.'],
            exitTicket: 'How many specimens would convince you, and why that number rather than one fewer?',
          },
          differentiation: {
            support: ['Assign one specimen and let the student read the class chart for the others.'],
            extension: ['Find a living thing whose cells are difficult to observe and explain what makes it difficult.'],
          },
          misconceptions: [
            { misconception: 'One clear observation proves a general rule.', looksLike: 'A student generalises from a single onion.', correction: 'Ask what would happen if the fourth specimen showed no cells. If a single counter-case would matter, a single supporting case cannot have been enough.' },
          ],
          homeExtension: ['Look at three foods under a phone lens and record which show a visible repeating structure.'],
        },
        {
          id: 'g7-sci-u1-l3',
          unitId: 'g7-sci-u1',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'What Each Part Actually Does',
          essentialQuestion: 'How do the parts inside a cell add up to a cell that works?',
          summary:
            'Students build a physical or drawn model of a cell in which each part is justified by a job the cell must do, rather than labelled from a diagram. The model must answer "what breaks if this is removed?"',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the function of a cell as a whole and ways the parts of cells contribute to the function.' },
          ],
          objectives: [
            'I can name what a cell as a whole has to accomplish to stay alive.',
            'I can explain what each organelle contributes to that.',
            'I can predict what fails if one part is removed.',
          ],
          vocabulary: [
            { term: 'organelle', definition: 'A structure inside a cell with a particular job.' },
            { term: 'membrane', definition: 'The boundary that controls what enters and leaves.' },
            { term: 'mitochondrion', definition: 'The organelle where most energy is released from food.' },
            { term: 'nucleus', definition: 'The organelle holding the genetic instructions.' },
          ],
          materials: ['Modelling materials — card, string, plasticine, or a drawing sheet', 'A jobs-a-cell-must-do list'],
          prep: ['Write the jobs list first: keep the right things in and out, get energy, build proteins, remove waste, store instructions, hold shape.'],
          script: [],
          worksheet: { id: 'g7-sci-u1-l3-ws', title: 'What Breaks If You Remove It?', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Every part of the model justified by a job.', 'Predicts a specific consequence of removing one part.'],
            exitTicket: 'Remove the mitochondria from your model. What is the first thing that stops working, and why?',
          },
          differentiation: {
            support: ['Supply the jobs list matched to four organelles only.'],
            extension: ['Model a specialised cell — nerve, root hair, red blood cell — and justify how its shape follows its job.'],
            language: ['Organelle names are mostly Greek and Latin roots; teaching the roots once makes the whole set easier to hold.'],
          },
          misconceptions: [
            { misconception: 'A cell is a bag of floating parts.', looksLike: 'A model with organelles scattered at random and no cytoskeleton or organisation.', correction: 'Ask what stops everything settling to the bottom. The question forces the idea of internal structure and movement.' },
          ],
          homeExtension: ['Explain your cell model to someone at home and see whether they can predict what removing a part would do.'],
        },
        {
          id: 'g7-sci-u1-l4',
          unitId: 'g7-sci-u1',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Why No Single Cell Grows to the Size of a Cat',
          essentialQuestion: 'What stops a cell from just getting bigger instead of dividing?',
          summary:
            'A quantitative investigation with agar cubes and dye. As a cube grows, its volume outruns its surface, and the dye stops reaching the middle — the reason organisms are made of many small cells rather than a few large ones.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-1', framework: 'NGSS', text: 'Conduct an investigation to provide evidence that living things are made of cells; either one cell or many different numbers and types of cells.' },
            { code: 'MS-LS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the function of a cell as a whole and ways the parts of cells contribute to the function.' },
          ],
          objectives: [
            'I can measure how far a substance diffuses into cubes of different sizes.',
            'I can calculate surface area and volume for a cube and compare their ratio.',
            'I can explain why size limits a cell using my own data.',
          ],
          vocabulary: [
            { term: 'diffusion', definition: 'The spreading of a substance from where it is concentrated to where it is not.' },
            { term: 'surface area to volume ratio', definition: 'How much boundary a shape has compared with how much inside.' },
          ],
          materials: ['Agar blocks coloured with a pH indicator, cut into cubes of 1, 2 and 3 cm', 'Dilute vinegar or dye', 'Rulers, plastic knives, timers'],
          prep: ['Make the agar the day before. It needs several hours to set properly and rushed agar crumbles when cut.'],
          script: [],
          worksheet: { id: 'g7-sci-u1-l4-ws', title: 'The Cube Problem', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Collects diffusion depth data for three cube sizes.', 'Calculates and compares the ratios.', 'Links the pattern to why cells stay small.'],
            exitTicket: 'Which cube had the largest unreached centre, and what does that predict about a giant cell?',
          },
          differentiation: {
            support: ['Provide the surface area and volume figures; the student compares and interprets.'],
            extension: ['Predict and then test a 4 cm cube, and explain any departure from the pattern.'],
          },
          misconceptions: [
            { misconception: 'Bigger cells absorb more, so bigger is better.', looksLike: 'A student predicts the largest cube will be fully coloured first.', correction: 'The data settles it. Cut the cubes open and measure the untouched core — the largest cube is the worst supplied relative to its size.' },
          ],
          homeExtension: ['Compare how long a small ice cube and a large one take to melt, and relate it to the same ratio.'],
        },
        {
          id: 'g7-sci-u1-l5',
          unitId: 'g7-sci-u1',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Plant Cell, Animal Cell, and the Argument About the Wall',
          essentialQuestion: 'What can I tell about how an organism lives just from looking at its cells?',
          summary:
            'Students are given unlabelled micrographs and must argue from structure alone whether each is plant or animal, and what that structure lets the organism do.',
          durationMin: 50,
          standards: [
            { code: 'MS-LS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the function of a cell as a whole and ways the parts of cells contribute to the function.' },
          ],
          objectives: [
            'I can identify a cell as plant or animal from structural evidence.',
            'I can explain how a cell wall and chloroplasts relate to how an organism lives.',
          ],
          vocabulary: [
            { term: 'cell wall', definition: 'A rigid outer layer outside the membrane in plant cells, giving shape and support.' },
            { term: 'chloroplast', definition: 'The organelle where light energy is captured in plant cells.' },
            { term: 'vacuole', definition: 'A fluid-filled sac; in plant cells a large central one helps keep the cell firm.' },
          ],
          materials: ['Six unlabelled micrographs of varying difficulty', 'Whiteboards for arguing positions'],
          prep: ['Include one genuinely ambiguous image. The disagreement it produces is the most valuable ten minutes of the lesson.'],
          script: [],
          worksheet: { id: 'g7-sci-u1-l5-ws', title: 'Argue From the Structure', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Classifies cells with structural reasons.', 'Links a structure to a way of living.', 'Acknowledges uncertainty on the ambiguous case.'],
            exitTicket: 'Which image were you least sure about, and what one extra observation would settle it?',
          },
          differentiation: {
            support: ['Provide a two-feature checklist — straight walls, green bodies — before adding subtler evidence.'],
            extension: ['Explain why fungal cells have a wall but no chloroplasts, and what that implies about how fungi feed.'],
          },
          misconceptions: [
            { misconception: 'Green means plant and not-green means animal.', looksLike: 'A student classifies unstained onion epidermis as an animal cell because it is colourless.', correction: 'Show onion epidermis, which is plant and has no chloroplasts because it never sees light. Structure beats colour.' },
          ],
          homeExtension: ['Look at a leaf and a peeled potato under a lens and account for the difference in what you see.'],
        },
      ],
    },

    /* ============================================================== UNIT 2 */
    {
      id: 'g7-sci-u2',
      gradeId: 'g7',
      subjectId: 'science',
      sequence: 2,
      title: 'Body Systems in Interaction',
      bigIdea:
        'A body is not a collection of organs — it is a set of subsystems that only work because of what the others are doing, right down to groups of cells specialised for one job.',
      description:
        'Starting from the ordinary experience of being out of breath on the stairs, students build the argument that the body is a system of interacting subsystems. They trace the hierarchy from cell to tissue to organ to system, follow oxygen and glucose through two systems working together, and finish with sensory processing: how a stimulus becomes a signal, becomes a response, and sometimes becomes a memory.',
      weeks: 5,
      standards: [
        { code: 'MS-LS1-3', framework: 'NGSS', text: 'Use argument supported by evidence for how the body is a system of interacting subsystems composed of groups of cells.' },
        { code: 'MS-LS1-8', framework: 'NGSS', text: 'Gather and synthesise information that sensory receptors respond to stimuli by sending messages to the brain for immediate behaviour or storage as memories.' },
        { code: 'MS-LS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the function of a cell as a whole and ways the parts of cells contribute to the function.' },
      ],
      lessonTitles: [
        'Why You Breathe Harder on the Stairs',
        'Cell, Tissue, Organ, System',
        'The Delivery Network',
        'Receptors: How a Stimulus Becomes a Message',
        'Reflex, Decision, Memory',
      ],
      performanceTask:
        'The Systems Argument: students choose one everyday event — sprinting for a bus, eating a meal, flinching from a hot pan — and construct an evidence-supported argument showing at least three subsystems interacting, with a model that a reader can follow and one prediction about what would fail if one subsystem stopped.',
      lessons: [
        {
          id: 'g7-sci-u2-l1',
          unitId: 'g7-sci-u2',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'Why You Breathe Harder on the Stairs',
          essentialQuestion: 'Why does moving your legs change your breathing?',
          summary:
            'The anchor phenomenon. Students collect their own heart rate and breathing rate data before and after exercise, and confront the fact that a leg muscle somehow changes what the lungs do.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-3', framework: 'NGSS', text: 'Use argument supported by evidence for how the body is a system of interacting subsystems composed of groups of cells.' },
          ],
          objectives: [
            'I can collect reliable heart and breathing rate data before and after activity.',
            'I can identify at least three body systems involved in one action.',
            'I can state the question the data raises rather than the answer it gives.',
          ],
          vocabulary: [
            { term: 'system', definition: 'A set of parts that work together and cannot do the job separately.' },
            { term: 'subsystem', definition: 'A system that is itself part of a bigger system.' },
            { term: 'recovery rate', definition: 'How quickly a measurement returns to its resting value.' },
          ],
          materials: ['Timers or a wall clock with a second hand', 'A data table per student', 'Space to do thirty seconds of step-ups safely'],
          prep: ['Practise taking a pulse yourself; many students cannot find one and it derails the data collection if you cannot help quickly.'],
          script: [],
          worksheet: { id: 'g7-sci-u2-l1-ws', title: 'Before and After', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Collects and records paired data.', 'Names three systems involved.', 'Poses a causal question the data does not yet answer.'],
            exitTicket: 'Your legs did the work. Why did your lungs change? Write the question, not a guess.',
          },
          differentiation: {
            support: ['Pair students so one counts while the other times.'],
            extension: ['Compare recovery rates across the class and consider what else besides fitness could explain the spread.'],
            language: ['Keep the data table language minimal — before, after, one minute later — so the science is not gated on reading.'],
          },
          misconceptions: [
            { misconception: 'Breathing hard is about needing more air in general.', looksLike: 'A student says the body "wants air" with no mechanism.', correction: 'Ask which cells need it and what for. The answer has to travel from the lung to the leg, and that journey is the unit.' },
          ],
          homeExtension: ['Measure resting heart rate on waking for five mornings and see how consistent it is.'],
        },
        {
          id: 'g7-sci-u2-l2',
          unitId: 'g7-sci-u2',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Cell, Tissue, Organ, System',
          essentialQuestion: 'How do specialised cells add up to an organ that does something?',
          summary:
            'The hierarchy, built upward from observation rather than recited downward. Students examine specialised cells and reason about what the shared job of a tissue must be.',
          durationMin: 50,
          standards: [
            { code: 'MS-LS1-3', framework: 'NGSS', text: 'Use argument supported by evidence for how the body is a system of interacting subsystems composed of groups of cells.' },
            { code: 'MS-LS1-2', framework: 'NGSS', text: 'Develop and use a model to describe the function of a cell as a whole and ways the parts of cells contribute to the function.' },
          ],
          objectives: [
            'I can order cell, tissue, organ, system and organism and explain each step.',
            'I can predict a cell\'s job from its shape.',
          ],
          vocabulary: [
            { term: 'tissue', definition: 'A group of similar cells doing the same job together.' },
            { term: 'organ', definition: 'Several tissues working together as one structure.' },
            { term: 'specialised cell', definition: 'A cell whose shape and contents fit one particular job.' },
          ],
          materials: ['Images of six specialised cells', 'Prepared slides of tissue if available', 'Sorting cards for the hierarchy'],
          prep: ['Choose specialised cells whose shape genuinely gives the job away — nerve, red blood, ciliated, muscle, root hair, sperm.'],
          script: [],
          worksheet: { id: 'g7-sci-u2-l2-ws', title: 'Shape Follows Job', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Orders the hierarchy correctly with justification.', 'Infers function from structure for at least three cells.'],
            exitTicket: 'Here is a cell you have not seen. From its shape, what is its job?',
          },
          differentiation: {
            support: ['Use three levels only — cell, organ, system — before adding tissue.'],
            extension: ['Explain why the same organ can belong to two systems, using the pancreas or the throat.'],
          },
          misconceptions: [
            { misconception: 'Organs are separate items in separate systems.', looksLike: 'A student is confused that one organ appears in two systems.', correction: 'Trace what passes through it. Membership in a system is about what it participates in, not where it sits.' },
          ],
          homeExtension: ['Name every organ you can feel or locate on yourself and assign each to a system.'],
        },
        {
          id: 'g7-sci-u2-l3',
          unitId: 'g7-sci-u2',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'The Delivery Network',
          essentialQuestion: 'How does a molecule of sugar from breakfast reach a muscle cell in your calf?',
          summary:
            'Students trace one glucose molecule and one oxygen molecule through digestion, circulation and gas exchange, and build a model of the two systems interacting rather than operating in parallel.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-3', framework: 'NGSS', text: 'Use argument supported by evidence for how the body is a system of interacting subsystems composed of groups of cells.' },
          ],
          objectives: [
            'I can trace a complete path from mouth to muscle cell.',
            'I can identify the exact point where two systems meet.',
            'I can model the exchange surfaces and say why they are shaped as they are.',
          ],
          vocabulary: [
            { term: 'exchange surface', definition: 'A place where substances move between systems, usually thin and heavily folded.' },
            { term: 'villi', definition: 'Tiny folds in the small intestine that hugely increase the absorbing surface.' },
            { term: 'alveoli', definition: 'The tiny air sacs where gases move between lung and blood.' },
          ],
          materials: ['A large paper roll for the journey map', 'Coloured markers', 'A towel and a crumpled towel to demonstrate surface area'],
          prep: ['Draw the outline body on the paper roll before the lesson so class time goes on the pathway rather than the outline.'],
          script: [],
          worksheet: { id: 'g7-sci-u2-l3-ws', title: 'Trace the Molecule', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Produces a complete, correctly ordered pathway.', 'Identifies at least two system interfaces.', 'Explains folding in terms of surface area.'],
            exitTicket: 'Where exactly do the digestive and circulatory systems touch? Name the structure.',
          },
          differentiation: {
            support: ['Provide pathway stages on cards to be sequenced rather than recalled.'],
            extension: ['Add the excretory system and trace the waste products back out.'],
          },
          misconceptions: [
            { misconception: 'Food goes to the stomach and energy comes out.', looksLike: 'A pathway that skips absorption and circulation entirely.', correction: 'Ask how the sugar crosses from the gut into the blood, and where. If they cannot name the wall it crosses, the pathway has a hole in it.' },
          ],
          homeExtension: ['Time how long after eating something sugary you notice a change in how you feel, and consider what had to happen in between.'],
        },
        {
          id: 'g7-sci-u2-l4',
          unitId: 'g7-sci-u2',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Receptors: How a Stimulus Becomes a Message',
          essentialQuestion: 'How does a change in the world turn into something your brain can use?',
          summary:
            'Students run simple receptor investigations — two-point touch discrimination, temperature adaptation, blind spot mapping — and gather information on how receptors convert stimuli into signals.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-8', framework: 'NGSS', text: 'Gather and synthesise information that sensory receptors respond to stimuli by sending messages to the brain for immediate behaviour or storage as memories.' },
          ],
          objectives: [
            'I can measure how sensitivity differs across parts of the body.',
            'I can describe the path from stimulus to receptor to brain.',
            'I can explain adaptation — why a sensation fades while the stimulus continues.',
          ],
          vocabulary: [
            { term: 'stimulus', definition: 'A change in the environment that a receptor can detect.' },
            { term: 'receptor', definition: 'A cell or structure that detects a particular kind of stimulus.' },
            { term: 'adaptation', definition: 'A receptor responding less to a stimulus that stays the same.' },
          ],
          materials: ['Paper clips bent into two-point testers', 'Three bowls of water at different temperatures', 'Blind spot test cards', 'Rulers'],
          prep: ['Test the two-point discriminator on yourself so you know what spacing produces a clean result on a fingertip versus a forearm.'],
          script: [],
          worksheet: { id: 'g7-sci-u2-l4-ws', title: 'How Sensitive Is That?', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Collects sensitivity data from at least three body areas.', 'Explains variation in terms of receptor density.', 'Describes the stimulus to brain pathway.'],
            exitTicket: 'Why can you feel two points a centimetre apart on a fingertip but not on your back?',
          },
          differentiation: {
            support: ['Run the two-point test only, with a partner recording.'],
            extension: ['Design a fair test comparing sensitivity on the dominant and non-dominant hand.'],
            language: ['Stimulus, receptor and response make a three-word chain worth drilling as a unit rather than separately.'],
          },
          misconceptions: [
            { misconception: 'Your skin senses things and your brain just receives the feeling ready-made.', looksLike: 'A student describes the finger as doing the feeling.', correction: 'Ask what happens to sensation under local anaesthetic, when the receptor still exists but the message cannot travel. Feeling happens in the brain.' },
          ],
          homeExtension: ['Put one hand in cool water and one in warm for a minute, then both in tepid, and describe what each hand reports.'],
        },
        {
          id: 'g7-sci-u2-l5',
          unitId: 'g7-sci-u2',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Reflex, Decision, Memory',
          essentialQuestion: 'Why are some responses faster than your own thinking?',
          summary:
            'Students measure reaction times, compare them with reflex speeds, and synthesise information on the three fates of a sensory message: immediate reflex, considered behaviour, or storage as memory.',
          durationMin: 50,
          standards: [
            { code: 'MS-LS1-8', framework: 'NGSS', text: 'Gather and synthesise information that sensory receptors respond to stimuli by sending messages to the brain for immediate behaviour or storage as memories.' },
            { code: 'MS-LS1-3', framework: 'NGSS', text: 'Use argument supported by evidence for how the body is a system of interacting subsystems composed of groups of cells.' },
          ],
          objectives: [
            'I can measure reaction time and compare it with a reflex.',
            'I can explain why a reflex arc does not wait for the brain.',
            'I can describe how a sensory experience can become a memory.',
          ],
          vocabulary: [
            { term: 'reflex arc', definition: 'A signal path that produces a response through the spinal cord without waiting for the brain.' },
            { term: 'reaction time', definition: 'How long it takes to respond to a signal you have to process.' },
            { term: 'memory', definition: 'A stored change that lets a past experience affect a future response.' },
          ],
          materials: ['Rulers for the drop-catch test', 'A data table for repeated trials', 'Short reading on reflex arcs'],
          prep: ['Run the ruler drop test yourself ten times. Knowing the realistic spread stops you treating one outlier as data.'],
          script: [],
          worksheet: { id: 'g7-sci-u2-l5-ws', title: 'Faster Than Thinking', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Collects repeated reaction time trials and uses an average.', 'Contrasts reflex and considered response with a mechanism.', 'Gives an example of a stored sensory memory.'],
            exitTicket: 'Why does your hand leave a hot pan before you feel the pain?',
          },
          differentiation: {
            support: ['Provide the data table with the conversion already done.'],
            extension: ['Test whether reaction time improves with practice over twenty trials and argue about what improved.'],
          },
          misconceptions: [
            { misconception: 'You decide to pull your hand away and then do it.', looksLike: 'A student describes a reflex as a very fast decision.', correction: 'Compare the measured timings. The response happens before the reported feeling, which is only possible if the brain was not in the loop.' },
          ],
          homeExtension: ['Find a smell that brings back a specific memory and describe what the receptor could possibly have to do with it.'],
        },
      ],
    },

    /* ============================================================== UNIT 3 */
    {
      id: 'g7-sci-u3',
      gradeId: 'g7',
      subjectId: 'science',
      sequence: 3,
      title: 'Food, Light and the Rearranging of Matter',
      bigIdea:
        'Plants build food out of air and water using light, and every organism rearranges food molecules to build bodies and release energy — matter is conserved throughout and energy flows one way.',
      description:
        'The unit opens with a genuinely startling question: where does the mass of a tree come from? Students confront the fact that a tonne of oak is mostly air, then build photosynthesis and cellular respiration as complementary rearrangements of matter rather than opposite processes that cancel out. Conservation of matter is the discipline enforced throughout — every atom is tracked.',
      weeks: 5,
      standards: [
        { code: 'MS-LS1-6', framework: 'NGSS', text: 'Construct a scientific explanation based on evidence for the role of photosynthesis in the cycling of matter and flow of energy into and out of organisms.' },
        { code: 'MS-LS1-7', framework: 'NGSS', text: 'Develop a model to describe how food is rearranged through chemical reactions forming new molecules that support growth and release energy as this matter moves through an organism.' },
      ],
      lessonTitles: [
        'Where Does the Mass of a Tree Come From?',
        'Light In, Sugar Out',
        'Following One Carbon Atom',
        'Food Is Rearranged, Not Burned Away',
        'Respiration and Photosynthesis Are Not Opposites',
      ],
      performanceTask:
        'The Atom Audit: students take one carbon atom entering a leaf as carbon dioxide and track it through photosynthesis, a food chain, respiration and back to the atmosphere, producing a model in which the atom is never created, destroyed or left unaccounted for at any stage.',
      lessons: [
        {
          id: 'g7-sci-u3-l1',
          unitId: 'g7-sci-u3',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'Where Does the Mass of a Tree Come From?',
          essentialQuestion: 'A tree weighs tonnes. Where did that material come from?',
          summary:
            'Van Helmont\'s willow experiment as an anchor. Students confront the near-universal belief that plant mass comes from soil, and find that the soil barely changed.',
          durationMin: 50,
          standards: [
            { code: 'MS-LS1-6', framework: 'NGSS', text: 'Construct a scientific explanation based on evidence for the role of photosynthesis in the cycling of matter and flow of energy into and out of organisms.' },
          ],
          objectives: [
            'I can state where I think plant mass comes from and identify what would test it.',
            'I can interpret historical experimental data.',
            'I can accept a conclusion that contradicts my intuition when the data requires it.',
          ],
          vocabulary: [
            { term: 'mass', definition: 'The amount of matter in something, measured on a balance.' },
            { term: 'conservation of matter', definition: 'Matter is not created or destroyed in a chemical change, only rearranged.' },
          ],
          materials: ['Van Helmont data on a card', 'A potted plant and a balance', 'A dry log or piece of firewood to hold'],
          prep: ['Weigh a potted plant and the pot separately in advance so the numbers are ready to discuss.'],
          script: [],
          worksheet: { id: 'g7-sci-u3-l1-ws', title: 'The Missing Kilograms', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['States an initial explanation and its test.', 'Interprets the willow data correctly.', 'Identifies air and water as candidate sources.'],
            exitTicket: 'If not soil, then what? Name a source and say how you would test it.',
          },
          differentiation: {
            support: ['Give the data as a simple before and after pair rather than a table.'],
            extension: ['Research how the missing piece — carbon dioxide — was eventually identified, and by whom.'],
          },
          misconceptions: [
            { misconception: 'Plants eat soil, and food from the soil becomes the plant.', looksLike: 'A student says the tree grew from nutrients in the ground.', correction: 'Show the numbers. Ninety kilograms of willow, less than a hundred grams of soil lost. Soil supplies minerals, not bulk.' },
          ],
          homeExtension: ['Ask three adults where a tree\'s mass comes from and record the answers. Most say soil.'],
        },
        {
          id: 'g7-sci-u3-l2',
          unitId: 'g7-sci-u3',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Light In, Sugar Out',
          essentialQuestion: 'What does a leaf actually do with light?',
          summary:
            'An investigation using pondweed or leaf discs to show that light drives gas production, followed by construction of the photosynthesis model from the students\' own evidence.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-6', framework: 'NGSS', text: 'Construct a scientific explanation based on evidence for the role of photosynthesis in the cycling of matter and flow of energy into and out of organisms.' },
          ],
          objectives: [
            'I can produce evidence that light changes what a plant releases.',
            'I can write the inputs and outputs of photosynthesis and account for every atom.',
            'I can design a fair test varying light intensity.',
          ],
          vocabulary: [
            { term: 'photosynthesis', definition: 'The process using light energy to build sugar from carbon dioxide and water.' },
            { term: 'reactant', definition: 'A substance that goes into a chemical reaction.' },
            { term: 'product', definition: 'A substance that comes out of a chemical reaction.' },
          ],
          materials: ['Elodea or spinach leaf discs, syringe, sodium bicarbonate solution', 'Lamp and ruler for distance', 'Timers'],
          prep: ['Run the leaf disc float test once beforehand. The vacuum step is fiddly and knowing the timing saves the lesson.'],
          script: [],
          worksheet: { id: 'g7-sci-u3-l2-ws', title: 'Counting the Bubbles', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Collects data at two or more light levels.', 'Identifies inputs and outputs.', 'Controls at least two variables.'],
            exitTicket: 'What went into the leaf and what came out? Account for the atoms on both sides.',
          },
          differentiation: {
            support: ['Provide the fair test design and let the student run and interpret it.'],
            extension: ['Investigate whether colour of light changes the rate, and explain the result in terms of what chlorophyll absorbs.'],
          },
          misconceptions: [
            { misconception: 'Plants take in oxygen only at night and carbon dioxide only in the day.', looksLike: 'A student says plants switch between the two processes.', correction: 'Both happen all the time. In daylight photosynthesis simply outpaces respiration, which is a difference in rate, not a switch.' },
          ],
          homeExtension: ['Put one houseplant in a dark cupboard for a week and compare it with an identical one on a sill.'],
        },
        {
          id: 'g7-sci-u3-l3',
          unitId: 'g7-sci-u3',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Following One Carbon Atom',
          essentialQuestion: 'Can I follow a single atom all the way through a living thing?',
          summary:
            'Modelling with physical atom tokens. Students move a fixed set of carbon, hydrogen and oxygen tokens through photosynthesis and respiration, and discover they cannot make the model work without conserving every token.',
          durationMin: 50,
          standards: [
            { code: 'MS-LS1-6', framework: 'NGSS', text: 'Construct a scientific explanation based on evidence for the role of photosynthesis in the cycling of matter and flow of energy into and out of organisms.' },
            { code: 'MS-LS1-7', framework: 'NGSS', text: 'Develop a model to describe how food is rearranged through chemical reactions forming new molecules.' },
          ],
          objectives: [
            'I can rearrange a fixed set of atoms into new molecules without inventing or losing any.',
            'I can explain what conservation of matter means using my model.',
          ],
          vocabulary: [
            { term: 'molecule', definition: 'Two or more atoms bonded together.' },
            { term: 'rearrangement', definition: 'Breaking and remaking bonds so the same atoms form different molecules.' },
          ],
          materials: ['Atom tokens in three colours, counted exactly', 'Reaction mats', 'A checking sheet'],
          prep: ['Count the token sets precisely. If a group has one spare carbon the entire point of the activity disappears.'],
          script: [],
          worksheet: { id: 'g7-sci-u3-l3-ws', title: 'Every Atom Accounted For', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Balances the model with no leftover or invented atoms.', 'Explains conservation in their own words.'],
            exitTicket: 'You have six carbons on the left. How many on the right, and why exactly that many?',
          },
          differentiation: {
            support: ['Model with three carbons instead of six.'],
            extension: ['Extend the model to include the nitrogen needed for proteins and identify where it must come from.'],
          },
          misconceptions: [
            { misconception: 'Energy is a substance that gets used up and disappears.', looksLike: 'A student writes energy on the atom side of the model.', correction: 'Energy has no tokens. Keep a separate arrow for it and insist matter cycles while energy flows one way through.' },
          ],
          homeExtension: ['Work out where the carbon in your dinner was one year ago and trace it back at least three steps.'],
        },
        {
          id: 'g7-sci-u3-l4',
          unitId: 'g7-sci-u3',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Food Is Rearranged, Not Burned Away',
          essentialQuestion: 'What happens to a sandwich once it is inside you?',
          summary:
            'Students model how food molecules are broken down and reassembled into body tissue and energy carriers, and confront where the mass of exhaled breath comes from.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-7', framework: 'NGSS', text: 'Develop a model to describe how food is rearranged through chemical reactions forming new molecules that support growth and release energy as this matter moves through an organism.' },
          ],
          objectives: [
            'I can model food molecules being broken down and rebuilt into body material.',
            'I can explain where the mass of exhaled carbon dioxide came from.',
            'I can distinguish matter leaving the body from energy being released.',
          ],
          vocabulary: [
            { term: 'cellular respiration', definition: 'The controlled release of energy from food molecules inside cells.' },
            { term: 'synthesis', definition: 'Building larger molecules from smaller ones.' },
          ],
          materials: ['Molecular model kits or the token set from the previous lesson', 'Limewater and straws for the exhalation test'],
          prep: ['Make fresh limewater. Old limewater goes cloudy on its own and ruins the result.'],
          script: [],
          worksheet: { id: 'g7-sci-u3-l4-ws', title: 'What the Sandwich Becomes', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Models breakdown and resynthesis.', 'Traces exhaled carbon back to food.', 'Separates matter accounting from energy accounting.'],
            exitTicket: 'When someone loses weight, where does the mass physically go?',
          },
          differentiation: {
            support: ['Focus on one food molecule type only.'],
            extension: ['Calculate roughly how much carbon a person exhales in a day and compare it with their food intake.'],
          },
          misconceptions: [
            { misconception: 'Fat is converted into energy and vanishes.', looksLike: 'A student says the mass turns into energy.', correction: 'The mass leaves mostly as exhaled carbon dioxide and water. Weight loss is largely breathed out, which surprises everyone including adults.' },
          ],
          homeExtension: ['Breathe through a straw into limewater and watch it cloud, then explain where that carbon was an hour earlier.'],
        },
        {
          id: 'g7-sci-u3-l5',
          unitId: 'g7-sci-u3',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Respiration and Photosynthesis Are Not Opposites',
          essentialQuestion: 'If plants do both, why do they not just cancel out?',
          summary:
            'A rate-based comparison that dismantles the tidy but wrong idea that the two processes are mirror images. Students reason about net gain and where a plant\'s stored mass actually comes from.',
          durationMin: 50,
          standards: [
            { code: 'MS-LS1-6', framework: 'NGSS', text: 'Construct a scientific explanation based on evidence for the role of photosynthesis in the cycling of matter and flow of energy into and out of organisms.' },
            { code: 'MS-LS1-7', framework: 'NGSS', text: 'Develop a model to describe how food is rearranged through chemical reactions forming new molecules.' },
          ],
          objectives: [
            'I can explain why a plant gains mass despite respiring constantly.',
            'I can compare the two processes on rate rather than direction alone.',
          ],
          vocabulary: [
            { term: 'net', definition: 'What is left after the opposing amounts are subtracted.' },
            { term: 'compensation point', definition: 'The light level at which photosynthesis and respiration exactly balance.' },
          ],
          materials: ['Data set of gas exchange at different light levels', 'Graph paper'],
          prep: ['Choose a data set that crosses zero, so the compensation point is visible on the graph rather than asserted.'],
          script: [],
          worksheet: { id: 'g7-sci-u3-l5-ws', title: 'Net Gain', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Graphs the data and locates the crossing point.', 'Explains net gain in terms of rates.'],
            exitTicket: 'At what light level does a plant neither gain nor lose, and what is happening then?',
          },
          differentiation: {
            support: ['Provide a partly plotted graph.'],
            extension: ['Predict what happens to a plant kept permanently at its compensation point, and justify the prediction.'],
          },
          misconceptions: [
            { misconception: 'Plants photosynthesise in the day and respire at night.', looksLike: 'A student draws two processes alternating.', correction: 'Respiration never stops. Draw both as continuous bars of different heights and let the difference be visible.' },
          ],
          homeExtension: ['Explain to someone at home why a plant in a dark room slowly dies even though it is respiring perfectly well.'],
        },
      ],
    },

    /* ============================================================== UNIT 4 */
    {
      id: 'g7-sci-u4',
      gradeId: 'g7',
      subjectId: 'science',
      sequence: 4,
      title: 'Growth, Reproduction and Inheritance',
      bigIdea:
        'Organisms grow and reproduce according to instructions in their genes, but the environment has a vote — and a change to a gene can change a protein, and therefore change an organism.',
      description:
        'From the structures and behaviours that make successful reproduction more likely, through the environmental and genetic factors that shape how big an organism gets, to the molecular reason that asexual reproduction produces copies while sexual reproduction produces variation. The unit ends with mutation modelled as a change in an instruction that may be harmful, beneficial or make no difference at all.',
      weeks: 5,
      standards: [
        { code: 'MS-LS1-4', framework: 'NGSS', text: 'Use argument based on empirical evidence and scientific reasoning to support an explanation for how characteristic animal behaviours and specialised plant structures affect the probability of successful reproduction.' },
        { code: 'MS-LS1-5', framework: 'NGSS', text: 'Construct a scientific explanation based on evidence for how environmental and genetic factors influence the growth of organisms.' },
        { code: 'MS-LS3-1', framework: 'NGSS', text: 'Develop and use a model to describe why structural changes to genes located on chromosomes may affect proteins and may result in harmful, beneficial or neutral effects to the structure and function of the organism.' },
        { code: 'MS-LS3-2', framework: 'NGSS', text: 'Develop and use a model to describe why asexual reproduction results in offspring with identical genetic information and sexual reproduction results in offspring with genetic variation.' },
      ],
      lessonTitles: [
        'Flowers Are Not Decoration',
        'Behaviour That Improves the Odds',
        'Two Seedlings, Same Seeds, Different Sizes',
        'Copies Versus Combinations',
        'A Change in the Gene, a Change in the Protein',
      ],
      performanceTask:
        'The Variation Investigation: students grow two trays of the same seed variety under one deliberately varied condition, measure growth over three weeks, and produce an explanation that separates the genetic contribution from the environmental one — including an honest account of the variation their data cannot explain.',
      lessons: [
        {
          id: 'g7-sci-u4-l1',
          unitId: 'g7-sci-u4',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'Flowers Are Not Decoration',
          essentialQuestion: 'Why would a plant spend energy on a flower?',
          summary:
            'Flower dissection with a functional question attached. Every structure students find must be explained in terms of how it raises the probability of pollination, not merely named.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-4', framework: 'NGSS', text: 'Use argument based on empirical evidence and scientific reasoning to support an explanation for how specialised plant structures affect the probability of successful reproduction.' },
          ],
          objectives: [
            'I can dissect a flower and identify its reproductive structures.',
            'I can argue how each structure raises the chance of successful pollination.',
            'I can compare an insect-pollinated and a wind-pollinated flower and explain the differences.',
          ],
          vocabulary: [
            { term: 'pollination', definition: 'The transfer of pollen from anther to stigma.' },
            { term: 'nectar', definition: 'A sugary reward that makes visiting worthwhile for a pollinator.' },
            { term: 'anther', definition: 'The structure that produces and presents pollen.' },
          ],
          materials: ['Large simple flowers such as lilies or tulips, one per pair', 'Grass flowers for the wind-pollinated comparison', 'Tweezers, hand lenses, sticky tape and card'],
          prep: ['Dissect one flower yourself the day before so you know which structures are fiddly in the variety you bought.'],
          script: [],
          worksheet: { id: 'g7-sci-u4-l1-ws', title: 'Why Spend Energy on That?', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Identifies structures from the specimen rather than a diagram.', 'Gives a probability-based reason for each.', 'Explains two differences in the wind-pollinated flower.'],
            exitTicket: 'Grass flowers have no petals and no scent. Why is that not a disadvantage?',
          },
          differentiation: {
            support: ['Provide a mounted reference dissection to compare against.'],
            extension: ['Explain why some plants have separate male and female flowers, in terms of avoiding self-pollination.'],
            language: ['Mount the dissected parts on card with blank spaces for naming; the physical specimen anchors the vocabulary better than a list.'],
          },
          misconceptions: [
            { misconception: 'Flowers exist to look attractive to people.', looksLike: 'A student explains bright petals in terms of beauty.', correction: 'Ask who was around before people were. Petal colour and scent evolved with insects, and some flowers signal in ultraviolet we cannot even see.' },
          ],
          homeExtension: ['Watch a flowering plant for ten minutes and record every visitor. Most people are surprised how busy it is.'],
        },
        {
          id: 'g7-sci-u4-l2',
          unitId: 'g7-sci-u4',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Behaviour That Improves the Odds',
          essentialQuestion: 'Why do animals do such strange and costly things to reproduce?',
          summary:
            'Students analyse case studies of courtship, nest building and parental care, and argue from evidence about how each behaviour changes the probability of offspring surviving.',
          durationMin: 50,
          standards: [
            { code: 'MS-LS1-4', framework: 'NGSS', text: 'Use argument based on empirical evidence and scientific reasoning to support an explanation for how characteristic animal behaviours affect the probability of successful reproduction.' },
          ],
          objectives: [
            'I can describe a reproductive behaviour precisely.',
            'I can argue from data how it affects offspring survival.',
            'I can weigh a behaviour\'s cost against its benefit.',
          ],
          vocabulary: [
            { term: 'courtship', definition: 'Behaviour that attracts or assesses a mate.' },
            { term: 'parental care', definition: 'Investment in offspring after they are produced.' },
            { term: 'trade-off', definition: 'A gain in one thing paid for by a loss in another.' },
          ],
          materials: ['Four case study cards with real survival data', 'Video clips of courtship or nesting behaviour'],
          prep: ['Choose at least one case with a genuine cost to the parent, so the trade-off idea has something to bite on.'],
          script: [],
          worksheet: { id: 'g7-sci-u4-l2-ws', title: 'Worth the Cost?', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Uses data rather than plausibility.', 'Names both a cost and a benefit.', 'Draws a conclusion about probability rather than certainty.'],
            exitTicket: 'Name a behaviour, its cost to the parent, and the evidence that it pays off.',
          },
          differentiation: {
            support: ['Work with two case studies and a comparison frame.'],
            extension: ['Find a behaviour whose benefit is disputed among biologists and summarise both positions.'],
          },
          misconceptions: [
            { misconception: 'Animals behave this way because they want offspring to survive.', looksLike: 'Explanations built entirely on animal intention.', correction: 'Reframe in terms of outcome: behaviours that led to more surviving offspring became more common. Intention is not required and usually not available.' },
          ],
          homeExtension: ['Watch birds near your home for a week in spring and record any behaviour that looks costly.'],
        },
        {
          id: 'g7-sci-u4-l3',
          unitId: 'g7-sci-u4',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Two Seedlings, Same Seeds, Different Sizes',
          essentialQuestion: 'If two plants have the same genes, why is one twice the size?',
          summary:
            'The launch of the unit growth investigation. Students set up identical seed trays differing in one condition and begin three weeks of measurement, reasoning about genetic and environmental contributions.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS1-5', framework: 'NGSS', text: 'Construct a scientific explanation based on evidence for how environmental and genetic factors influence the growth of organisms.' },
          ],
          objectives: [
            'I can design a growth investigation with one variable changed.',
            'I can measure growth consistently over time.',
            'I can separate genetic from environmental explanations for a difference.',
          ],
          vocabulary: [
            { term: 'variable', definition: 'Something that can change in an investigation.' },
            { term: 'control', definition: 'The setup kept at normal conditions for comparison.' },
            { term: 'environmental factor', definition: 'A condition outside the organism that affects how it develops.' },
          ],
          materials: ['Fast-germinating seeds such as radish or cress', 'Identical trays, compost, rulers', 'A measurement log per group'],
          prep: ['Sow a test tray a week ahead. Knowing the germination rate of your actual seed batch prevents an empty tray disaster.'],
          script: [],
          worksheet: { id: 'g7-sci-u4-l3-ws', title: 'One Variable Only', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Design changes exactly one variable.', 'Measurement method is repeatable.', 'Prediction distinguishes genetic from environmental effects.'],
            exitTicket: 'Name the one thing you changed and three things you deliberately kept the same.',
          },
          differentiation: {
            support: ['Provide the design and let the student run and record it.'],
            extension: ['Add a second variable in a separate tray and consider why interpreting two at once is harder.'],
          },
          misconceptions: [
            { misconception: 'Genes fix the outcome, so environment only matters a little.', looksLike: 'A student predicts identical results from identical seeds.', correction: 'The tray data will settle it. Genetically similar seeds in different light produce dramatically different plants.' },
          ],
          homeExtension: ['Grow cress on a windowsill and in a cupboard and photograph both every two days.'],
        },
        {
          id: 'g7-sci-u4-l4',
          unitId: 'g7-sci-u4',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Copies Versus Combinations',
          essentialQuestion: 'Why do siblings differ but a strawberry runner produces a clone?',
          summary:
            'Students model both reproductive routes with chromosome cards and see directly why one produces identical offspring and the other produces a new combination every time.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS3-2', framework: 'NGSS', text: 'Develop and use a model to describe why asexual reproduction results in offspring with identical genetic information and sexual reproduction results in offspring with genetic variation.' },
          ],
          objectives: [
            'I can model asexual reproduction and show why offspring are identical.',
            'I can model sexual reproduction and count the possible combinations.',
            'I can explain why variation matters to a population.',
          ],
          vocabulary: [
            { term: 'chromosome', definition: 'A long strand of genetic material carrying many genes.' },
            { term: 'clone', definition: 'An organism genetically identical to its parent.' },
            { term: 'gamete', definition: 'A sex cell carrying half the usual number of chromosomes.' },
          ],
          materials: ['Chromosome cards in two colours, four pairs per group', 'Combination recording sheets'],
          prep: ['Work out the number of possible combinations for your card set in advance; students will ask and the number is surprisingly large.'],
          script: [],
          worksheet: { id: 'g7-sci-u4-l4-ws', title: 'How Many Different Offspring?', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Both models run correctly.', 'Counts or calculates possible combinations.', 'Links variation to population survival.'],
            exitTicket: 'With four chromosome pairs, how many different gametes are possible, and why?',
          },
          differentiation: {
            support: ['Use two chromosome pairs so the combinations can be listed exhaustively.'],
            extension: ['Add crossing over to the model and describe what it does to the number of combinations.'],
          },
          misconceptions: [
            { misconception: 'Children are a fifty-fifty blend of their parents.', looksLike: 'A student expects every trait to be intermediate.', correction: 'Run the card model. Offspring receive whole chromosomes, not averages, which is why siblings differ so much from each other.' },
          ],
          homeExtension: ['Compare a physical trait across as many family members as you can and see whether it blends or appears whole.'],
        },
        {
          id: 'g7-sci-u4-l5',
          unitId: 'g7-sci-u4',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'A Change in the Gene, a Change in the Protein',
          essentialQuestion: 'What happens to an organism when one instruction is altered?',
          summary:
            'Mutation modelled as a change to a coded instruction. Students alter a sequence, decode the resulting protein, and classify effects as harmful, beneficial or neutral — discovering that neutral is the most common outcome.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS3-1', framework: 'NGSS', text: 'Develop and use a model to describe why structural changes to genes located on chromosomes may affect proteins and may result in harmful, beneficial or neutral effects to the structure and function of the organism.' },
          ],
          objectives: [
            'I can use a code table to build a protein sequence from a gene sequence.',
            'I can predict the effect of a substitution, insertion or deletion.',
            'I can explain why many mutations have no effect at all.',
          ],
          vocabulary: [
            { term: 'gene', definition: 'A section of genetic material carrying the instructions for one protein.' },
            { term: 'protein', definition: 'A molecule built from a sequence of amino acids that does a job in the organism.' },
            { term: 'mutation', definition: 'A change in the sequence of a gene.' },
            { term: 'neutral', definition: 'Having no noticeable effect on the organism, harmful or otherwise.' },
          ],
          materials: ['A simplified codon table', 'Sequence strips and scissors', 'Coloured beads for the protein chain'],
          prep: ['Prepare three prepared mutations: one silent, one that changes a single amino acid, one deletion that shifts everything.'],
          script: [],
          worksheet: { id: 'g7-sci-u4-l5-ws', title: 'One Letter Changed', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Decodes a sequence accurately.', 'Predicts the effect of all three mutation types.', 'Explains why some changes are silent.'],
            exitTicket: 'Which of the three mutations changed the protein most, and why that one?',
          },
          differentiation: {
            support: ['Use a shortened code table with six options.'],
            extension: ['Explain how the sickle cell variant can be harmful and protective in different environments.'],
            language: ['The decoding task is symbol matching rather than reading, and is often a strong entry point for multilingual learners.'],
          },
          misconceptions: [
            { misconception: 'All mutations are harmful.', looksLike: 'A student assumes any change breaks the organism.', correction: 'Let the data speak. In their own decoding, most single changes produce no difference at all, and a few improve function.' },
          ],
          homeExtension: ['Play a copying game where a sentence is passed along six people and see which changes matter and which do not.'],
        },
      ],
    },

    /* ============================================================== UNIT 5 */
    {
      id: 'g7-sci-u5',
      gradeId: 'g7',
      subjectId: 'science',
      sequence: 5,
      title: 'Ecosystems: Resources, Matter and Change',
      bigIdea:
        'Populations are limited by resources, matter cycles endlessly between living and non-living parts of an ecosystem, and a change to any component ripples through all the others.',
      description:
        'Real long-term data drives this unit. Students analyse decades of population records, model the cycling of matter and the one-way flow of energy, predict interaction patterns across different ecosystems, and argue from evidence about what happens when a component changes. It closes with an engineering evaluation: comparing competing designs for maintaining biodiversity and the services ecosystems provide.',
      weeks: 6,
      standards: [
        { code: 'MS-LS2-1', framework: 'NGSS', text: 'Analyse and interpret data to provide evidence for the effects of resource availability on organisms and populations of organisms in an ecosystem.' },
        { code: 'MS-LS2-2', framework: 'NGSS', text: 'Construct an explanation that predicts patterns of interactions among organisms across multiple ecosystems.' },
        { code: 'MS-LS2-3', framework: 'NGSS', text: 'Develop a model to describe the cycling of matter and flow of energy among living and nonliving parts of an ecosystem.' },
        { code: 'MS-LS2-4', framework: 'NGSS', text: 'Construct an argument supported by empirical evidence that changes to physical or biological components of an ecosystem affect populations.' },
        { code: 'MS-LS2-5', framework: 'NGSS', text: 'Evaluate competing design solutions for maintaining biodiversity and ecosystem services.' },
      ],
      lessonTitles: [
        'The Winter the Moose Ran Out',
        'Predicting Who Interacts With Whom',
        'The Same Atoms, Over and Over',
        'One Change, Many Populations',
        'Designing for Biodiversity',
      ],
      performanceTask:
        'The Ecosystem Brief: students take a real local or regional ecosystem under pressure, model its matter cycling and energy flow, use population data to argue what is driving the change, then evaluate two competing management proposals against stated criteria and recommend one, naming what their recommendation costs.',
      lessons: [
        /* -------------------------------------------------- AUTHORED LESSON */
        {
          id: 'g7-sci-u5-l1',
          unitId: 'g7-sci-u5',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'The Winter the Moose Ran Out',
          essentialQuestion: 'What actually controls how many animals an ecosystem can hold?',
          summary:
            'Students analyse decades of real wolf and moose population data from an isolated island forest and discover that the story they expect — predators control prey — is only half of it. Food supply, weather and disease turn out to be doing as much work as the wolves, and the evidence for that is sitting in the browse line on the fir trees.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS2-1', framework: 'NGSS', text: 'Analyse and interpret data to provide evidence for the effects of resource availability on organisms and populations of organisms in an ecosystem.' },
            { code: 'MS-LS2-4', framework: 'NGSS', text: 'Construct an argument supported by empirical evidence that changes to physical or biological components of an ecosystem affect populations.' },
            { code: 'MS-LS2-2', framework: 'NGSS', text: 'Construct an explanation that predicts patterns of interactions among organisms across multiple ecosystems.' },
          ],
          objectives: [
            'I can read a two-population graph and describe how the lines relate to each other.',
            'I can identify a year where the simple predator-prey story fails.',
            'I can use a second kind of evidence — tree growth — to explain what the population data alone cannot.',
            'I can construct an argument that resource availability limits a population.',
          ],
          vocabulary: [
            { term: 'population', definition: 'All the individuals of one species living in a particular place.' },
            { term: 'limiting factor', definition: 'The resource or condition in shortest supply, which sets the ceiling on a population.', example: 'On the island the limiting factor for moose is winter fir, not wolves.' },
            { term: 'carrying capacity', definition: 'The number of individuals an environment can support over the long term.' },
            { term: 'browse line', definition: 'The sharp horizontal edge on trees at the height where grazing animals can no longer reach.' },
            { term: 'lag', definition: 'A delay between a change in one population and the response in another.' },
            { term: 'correlation', definition: 'Two things changing together, which does not by itself show one caused the other.' },
          ],
          materials: [
            'The printed worksheet, which contains the population data table and graph grid',
            'A ruler and a sharp pencil for graphing',
            'Two coloured pencils, one per population',
            'A metre stick, for the browse-line demonstration',
            'Optional: a photograph of a real browse line in a forest, which is worth projecting if you have a screen',
          ],
          prep: [
            'Plot the graph yourself first. You need to know where the two lines cross and which year breaks the pattern, because a student will find it in the first four minutes.',
            'Mark a height on the classroom wall with tape at about two metres — moose reach — so the browse line demonstration is physical rather than described.',
            'Decide whether your class graphs from the table or receives the graph pre-plotted. Graphing takes twelve minutes and is worth it once; if this is the third graph this month, hand it over already plotted.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'One Winter, Half the Moose',
              minutes: 8,
              say: [
                "There is an island in a very large lake. Forty-five miles long, no roads, no towns. Two big mammals live on it: moose and wolves. Nothing else comes or goes.",
                "One winter, the moose population went from about two thousand four hundred to about five hundred. In a single winter. Roughly four out of five died.",
                "Your first instinct is wolves. Say it out loud, because that is everybody's first instinct.",
                "Here is the problem with that. That same winter, the wolf population was near its lowest recorded level. There were around a dozen wolves on the whole island.",
                "Twelve wolves. Nineteen hundred dead moose. Twelve wolves cannot eat nineteen hundred moose, so something else killed them. What?",
              ],
              do: [
                'Draw the island on the board as a long thin shape. Do not add anything else yet.',
                'Write the two numbers up — 2400 down to 500 — and leave them there for the whole lesson.',
                'Let the wolf answer come, write it up, then knock it down with the wolf count. Do not rush this.',
              ],
              studentDoes: ['Proposes explanations for the crash and confronts evidence that rules out the obvious one.'],
              checks: [
                {
                  ask: 'What could kill nineteen hundred moose in one winter if not predators?',
                  lookFor: 'Starvation, disease, extreme weather, or some combination. Any of these is a legitimate hypothesis at this point.',
                  ifStuck: 'Ask what a moose eats in February on an island under snow. The question answers itself once someone pictures the food.',
                },
                {
                  ask: 'Why does the low wolf number matter to this argument?',
                  lookFor: 'It is evidence against the predation explanation — the mechanism is not physically capable of producing that many deaths.',
                },
              ],
              tip: 'This is a real place and real data, and saying so matters. Middle schoolers work noticeably harder on numbers somebody actually went out in the snow to collect.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Reading Two Lines at Once',
              minutes: 11,
              say: [
                "Here is the fifty-year record. Two lines: moose on one axis, wolves on the other. Watch me read the first twenty years.",
                "Wolves go up here. Then moose go down — but notice, not immediately. Two or three years later. That delay is called a lag and it is a fingerprint of one population responding to another.",
                "Then moose are low, and a few years after that the wolves drop too. Fewer moose, less food for wolves, fewer wolves. It goes round.",
                "So far so tidy. This is the version in every textbook, and for the first twenty years it works.",
                "Now look at the crash year. Moose collapse. Wolves are already low and they stay low. There is no wolf spike before it and no wolf spike after it. The tidy story has nothing to say about the single biggest event in the whole data set.",
                "When a model explains most of your data and then fails on the most dramatic part, you do not throw the model away. You go and get a different kind of evidence.",
                "And here is what the researchers had. Fir trees. In the years before the crash, the moose population had been very high for a long time, and the fir trees on that island had been eaten to a flat line at exactly the height a moose can reach.",
              ],
              do: [
                'Trace each line separately on the board or the projected graph with your finger, out loud, before comparing them.',
                'Mark the lag with a bracket and write the number of years inside it.',
                'Circle the crash year. Leave the circle there.',
                'Stand at your taped wall line and reach up to it to show the browse height physically.',
              ],
              studentDoes: ['Follows the reading of a two-variable graph, identifies the lag, and locates the year the pattern fails.'],
              checks: [
                {
                  ask: 'Why do the moose not drop the same year the wolves rise?',
                  lookFor: 'It takes time — wolves have to find and take more moose, and the effect accumulates over seasons.',
                  ifStuck: 'Ask how long it would take twenty extra wolves to make a dent in two thousand moose. Time is the answer, and that is the lag.',
                },
                {
                  ask: 'What does the browse line tell us that the population graph cannot?',
                  lookFor: 'That the food supply had already been degraded before the crash — the resource was running out independently of predation.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Building the Argument Together',
              minutes: 12,
              say: [
                "Let us build the argument properly, the way you would have to write it. Claim, evidence, reasoning.",
                "Claim: the moose crash was caused mainly by food running out, not by wolves. Everyone write that down, then we hunt for evidence.",
                "Evidence one — somebody give me a number from the graph.",
                "Right: twelve wolves in the crash year. That is evidence against the alternative explanation, which is just as valuable as evidence for yours.",
                "Evidence two: the browse line. The fir trees were eaten flat to moose height, which means the winter food was gone before the winter started.",
                "Evidence three, and this is the one people miss: look at the years before the crash. Moose numbers were extremely high for nearly a decade. A big population eats a lot. The crash was being built the whole time it looked like things were going well.",
                "Now reasoning, which is the bit that has to be in words. Why does that evidence support the claim? Because a population above what its food can sustain is living on borrowed time, and a hard winter is only the trigger, not the cause.",
                "One honest complication before we move on. It was also an unusually severe winter that year. Does that ruin our argument?",
                "No — it makes it more accurate. Real ecosystems have several causes at once. Our claim is that food was the main limit; the winter is what collected the bill.",
              ],
              do: [
                'Write CLAIM, EVIDENCE, REASONING as three headings and fill them in from student contributions only.',
                'Insist every piece of evidence has a number or an observation attached. Reject "there were lots of moose" and ask for the figure.',
                'Introduce the severe winter yourself. If you let them find it later it feels like a trap; if you supply it, it models intellectual honesty.',
              ],
              studentDoes: ['Contributes evidence with figures attached and helps articulate the reasoning step.'],
              checks: [
                {
                  ask: 'What is the difference between the evidence and the reasoning?',
                  lookFor: 'Evidence is the observation or number; reasoning is the sentence explaining why that observation supports the claim.',
                  ifStuck: 'Read out a number with no reasoning attached and ask, "so?" The missing answer to "so what?" is exactly the reasoning.',
                },
                {
                  ask: 'Does the severe winter mean food was not the limiting factor?',
                  lookFor: 'No — a population already at the edge of its food supply is vulnerable to a shock that a healthy population would survive.',
                },
              ],
              tip: 'Some students will resist abandoning the wolf explanation even after seeing the wolf count. That is not stubbornness so much as the pull of a good story, and naming it out loud helps: "the wolf version is a better story, and the data does not support it."',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Your Own Analysis',
              minutes: 17,
              say: [
                "On the worksheet now. Finish plotting the data if you have not, then answer the analysis questions.",
                "Question four is the one I will be reading properly: pick any year and explain what was limiting the moose population that year. It will not be the same answer for every year, and that is the point.",
                "Then the model. Draw the ecosystem as boxes and arrows — sun, fir trees, moose, wolves, decomposers, soil. Arrows for energy, and different arrows for matter.",
                "Careful with the arrow directions. Energy arrives and eventually leaves. Matter goes round. If your matter arrows do not form a loop, something is wrong.",
                "Last question is a prediction. If the wolves disappeared from the island entirely, what happens to the fir trees? Give me two steps of reasoning, not one.",
              ],
              do: [
                'Circulate and check arrow directions on the model before anything else. A reversed energy arrow indicates a misconception worth catching now.',
                'Push anyone who writes "wolves" as the answer to every year of question four back to the graph.',
              ],
              studentDoes: ['Completes the graph, answers the analysis questions, builds a matter and energy model, and makes a two-step prediction.'],
              checks: [
                {
                  ask: 'Show me your matter arrows. Do they form a loop?',
                  lookFor: 'A closed cycle through decomposers back to soil and plants; energy arrows entering from the sun and leaving as heat.',
                  ifStuck: 'Ask what happens to a dead moose. Following the atoms of one carcass builds the missing part of the loop.',
                },
                {
                  ask: 'What happens to the fir trees with no wolves? Two steps.',
                  lookFor: 'More moose survive, so browsing increases, so fir regeneration fails and the browse line deepens — with the further step that the moose population later crashes harder.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'What Limits It Here?',
              minutes: 7,
              say: [
                "One sentence, out loud, from three people: what was actually limiting the moose?",
                "Notice nobody said one thing. Food, weather, disease, wolves — all of them, in different amounts in different years. That is what real ecosystem data looks like.",
                "Now take it off the island. What limits the population of pigeons in a city? Of foxes? Of the plants in a garden?",
                "Same question every time: what is in shortest supply. That question works on every ecosystem on Earth, and you can now answer it with evidence instead of a guess.",
                "Next lesson we take the same reasoning to three ecosystems that look nothing alike and find out whether the pattern holds.",
              ],
              do: ['Take three answers, no more. Write the limiting factors as a short list and leave it up for the next lesson.'],
              studentDoes: ['States a limiting factor with evidence and transfers the question to an unfamiliar ecosystem.'],
              checks: [
                {
                  ask: 'What limits the number of pigeons in a city, and how would you find out?',
                  lookFor: 'A named candidate — food waste, nesting sites, predators, disease — with a method for checking, such as counting nest sites or comparing districts.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g7-sci-u5-l1-ws',
            title: 'The Winter the Moose Ran Out',
            style: 'diagram',
            prepNotes:
              'Print double-sided. The graph grid must be large — at least half a page — or the two lines become unreadable and the whole analysis collapses. If your class has graphed recently, print a pre-plotted version of section two instead; the data interpretation is the target, not the plotting. The figures here are rounded from the long-running Isle Royale wolf and moose study, which is genuinely the longest continuous predator-prey record in the world and worth telling students about.',
            sections: [
              {
                id: 's1',
                title: 'The Island',
                directions: 'Look at the map before you touch the data. This is a closed system — nothing walks on and nothing walks off. Write down two things that makes easier to study, and one thing it makes unrealistic.',
                layout: 'full',
                items: [
                  'Two things a closed island makes easier to study:',
                  'One way this makes it unlike most real ecosystems:',
                ],
                writingLines: 4,
                images: [
                  {
                    id: 'g7-sci-u5-img-island-map',
                    slot: 'Section 1 — the island map',
                    purpose: 'Students reason far better about a system they can see the edges of. Showing an isolated island makes the idea of a closed system concrete before any data arrives, and the empty label boxes let students annotate the features themselves.',
                    subject: 'a simple physical map diagram of a long narrow forested island in the middle of a very large lake, with dense conifer forest shading, an irregular rocky shoreline, several small inland ponds, and open water surrounding it on all sides',
                    count: 4,
                    composition: 'the island running diagonally across the frame surrounded by open water, forest texture covering most of the island, four thin leader lines running from four different features out to four empty rectangular label boxes around the edge of the frame',
                    mustInclude: ['the island completely surrounded by water with no land bridge', 'visible conifer forest cover over most of the island', 'exactly four empty rectangular label boxes joined by leader lines'],
                    mustAvoid: ['any lettering, place names, numerals, compass letters or scale figures', 'roads, buildings, harbours or any human settlement', 'animals drawn on the map, which would pre-empt the data analysis'],
                    aspect: '16:9',
                    altText: 'Map diagram of a long forested island in a large lake with four empty label boxes',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Plot the Data',
                directions: 'Plot both populations on the same grid using a different colour for each. Moose on the left axis, wolves on the right — the scales are very different, so read carefully. Join each set of points with a smooth line, then answer the questions underneath.',
                layout: 'full',
                items: [
                  'DATA (rounded, from a long-term island study)',
                  'Year 1 — moose 800, wolves 20   |   Year 5 — moose 1100, wolves 24',
                  'Year 10 — moose 1000, wolves 31   |   Year 15 — moose 700, wolves 44',
                  'Year 20 — moose 900, wolves 23   |   Year 25 — moose 1400, wolves 14',
                  'Year 30 — moose 1700, wolves 12   |   Year 35 — moose 2400, wolves 12',
                  'Year 36 — moose 500, wolves 14   |   Year 40 — moose 750, wolves 19',
                  'Q1. In which year did the moose population fall most sharply?',
                  'Q2. What were the wolves doing in that same year?',
                  'Q3. Find a stretch where wolves rise and moose fall a few years later. How many years is the lag?',
                  'Q4. Pick any year and explain what was limiting the moose population that year. Use a number from the data.',
                ],
                writingLines: 10,
              },
              {
                id: 's3',
                title: 'The Second Kind of Evidence',
                directions: 'The population graph cannot explain the crash on its own. Look at the trees. Then explain, in two sentences, what the browse line shows about the food supply in the years before the crash.',
                layout: 'split',
                items: [
                  'What the browse line shows about the years before the crash:',
                  'Why this counts as evidence about the future and not just the past:',
                  'What you would measure in this forest to check whether the fir trees are recovering:',
                ],
                writingLines: 6,
                images: [
                  {
                    id: 'g7-sci-u5-img-browse-line',
                    slot: 'Section 3 — the browse line',
                    purpose: 'This is the piece of evidence that rescues the investigation, and it is almost impossible to grasp from words alone. A stand of firs eaten flat at a single height makes overbrowsing visible as a straight line in a forest, which students never forget.',
                    subject: 'a stand of young balsam fir trees in a winter forest, every tree stripped bare of branches below one sharp horizontal height and full and bushy above it, so a single straight edge runs across the whole stand',
                    count: 6,
                    composition: 'side-on view across a level forest floor, exactly six fir trees spaced apart in a rough line, a single unmistakable horizontal browse edge running across all six at the same height, thin snow on the ground, plain pale sky',
                    mustInclude: ['exactly six fir trees', 'a sharp continuous horizontal browse edge at the same height on every tree', 'bare stripped trunks below the line and dense foliage above it'],
                    mustAvoid: ['any animals in the frame, which would give away the explanation before the student reasons to it', 'lettering, arrows, measurement marks or annotation of any kind', 'trees at wildly different heights, which would break the horizontal line'],
                    aspect: '16:9',
                    altText: 'Six fir trees in snow, all stripped of branches below one sharp horizontal line',
                    style: 'realistic',
                  },
                  {
                    id: 'g7-sci-u5-img-moose-wolf-scale',
                    slot: 'Section 3 margin — scale comparison',
                    purpose: 'Students imagine wolves as far larger than they are and moose as far smaller. Seeing the two animals to scale on one baseline is what makes the twelve-wolves-nineteen-hundred-moose argument land physically rather than arithmetically.',
                    subject: 'side-profile outlines of an adult moose and an adult grey wolf standing on the same ground line, drawn accurately to relative scale so the moose towers over the wolf',
                    count: 2,
                    composition: 'both animals in full side profile facing the same direction on one shared horizontal baseline, clear space between them, plain white background, clean uniform outlines with minimal internal detail',
                    mustInclude: ['exactly two animals', 'correct relative scale with the moose roughly three times the shoulder height of the wolf', 'both standing on the same baseline'],
                    mustAvoid: ['any numerals, measurement lines, scale bars or lettering', 'a background scene, ground texture or vegetation', 'aggressive posture, bared teeth, blood or any depiction of a kill'],
                    aspect: '3:2',
                    altText: 'Side profiles of a moose and a wolf drawn to the same scale on one baseline',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's4',
                title: 'Model the System',
                directions: 'Complete the ecosystem model. Fill each empty box with one part of the system, then draw your arrows. Use solid arrows for matter and dashed arrows for energy. Check before you finish: your matter arrows should form a loop and your energy arrows should not.',
                layout: 'full',
                items: [
                  'Parts to place: sunlight, fir trees, moose, wolves, decomposers, soil nutrients',
                  'Where does energy enter this system?',
                  'Where does energy leave it?',
                  'Why can matter go round in a loop when energy cannot?',
                ],
                writingLines: 6,
                images: [
                  {
                    id: 'g7-sci-u5-img-cycle-model',
                    slot: 'Section 4 — the ecosystem model frame',
                    purpose: 'Handing students an empty framework rather than a finished cycle forces them to decide the arrow directions themselves, which is where the matter-cycles-energy-flows distinction is actually made or missed.',
                    subject: 'a blank systems-model framework of six empty rectangular boxes arranged in a rough ring, with short blank connector stubs between neighbouring boxes and one additional stub entering the ring from outside and one leaving it',
                    count: 6,
                    composition: 'six equal empty rectangles evenly spaced around an oval arrangement filling the frame, short plain connector stubs between adjacent boxes with no arrowheads drawn, one stub entering from the top left and one exiting at the lower right, thin uniform black lines on white',
                    mustInclude: ['exactly six empty boxes arranged in a ring', 'connector stubs with no arrowheads, so the direction is left for the student to draw', 'one entry stub and one exit stub outside the ring'],
                    mustAvoid: ['any lettering, labels, numerals or icons inside the boxes', 'pre-drawn arrowheads anywhere, which would give away the answer', 'colour fills, shading or decorative styling'],
                    aspect: '4:3',
                    altText: 'A blank ring of six empty boxes with connector stubs and one entry and one exit',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's5',
                title: 'Predict and Justify',
                directions: 'Two predictions. Each one needs at least two steps of reasoning — not just what happens, but what happens because of what happened first. Then look at the seedling quadrat and answer the last question.',
                layout: 'full',
                items: [
                  'PREDICTION 1. Every wolf disappears from the island. What happens to the fir trees? Two steps.',
                  'PREDICTION 2. A disease removes half the moose in one summer. What happens to the wolves, and when? Two steps.',
                  'The quadrat shows fir seedlings in one square metre of forest floor. If ecologists counted this many in a hundred squares, what would that tell them about the future of this forest?',
                ],
                writingLines: 10,
                images: [
                  {
                    id: 'g7-sci-u5-img-quadrat',
                    slot: 'Section 5 — the seedling quadrat',
                    purpose: 'Introduces the actual method ecologists use to turn a forest into data. Counting seedlings inside a fixed frame shows students that population evidence is collected by sampling, not by counting everything, and sets up the sampling work later in the unit.',
                    subject: 'a square wooden survey quadrat frame lying flat on a forest floor of leaf litter and moss, with several small fir seedlings growing inside the frame and bare litter elsewhere, viewed from directly above',
                    count: 7,
                    composition: 'straight overhead view with the square frame filling most of the image and its four sides fully visible, exactly seven small fir seedlings clearly separated inside the frame, no seedlings crossing or touching the frame edges',
                    mustInclude: ['exactly seven seedlings, all fully inside the frame and countable', 'all four sides of the quadrat frame visible', 'clear spacing between seedlings so none are ambiguous to count'],
                    mustAvoid: ['seedlings overlapping, touching, or sitting on the frame edge', 'any lettering, numbering or measurement marks on the frame', 'hands, tools or people in the frame'],
                    aspect: '1:1',
                    altText: 'Overhead view of a square quadrat frame on forest floor containing seven fir seedlings',
                    style: 'realistic',
                  },
                ],
              },
            ],
            answerKey: [
              'Q1. Year 36 — moose fall from 2400 to 500, by far the sharpest drop in the data.',
              'Q2. Wolves were at 12 to 14, near their lowest recorded level. This is evidence against predation as the main cause.',
              'Q3. Between roughly year 10 and year 15 wolves rise from 31 to 44 while moose fall from 1000 to 700 — a lag of around three to five years. Accept any reasoned reading of the interval.',
              'Q4. Answers should vary by year and must cite a figure. Around year 15 the limiting factor is plausibly predation, with wolves at their peak. Around years 30 to 36 it is food, with moose numbers far above what the browsed forest can sustain.',
              'Section 3 — the browse line shows the moose had already eaten the available winter food up to reach height in the years before the crash, so the food supply was exhausted before the hard winter arrived. It is evidence about the future because trees browsed flat cannot regrow quickly, so the shortage persists.',
              'Section 4 — energy enters as sunlight and leaves as heat at every step, so it cannot loop. Matter loops because decomposers return the atoms in dead organisms to the soil, where plants take them up again. Matter arrows must form a closed ring; energy arrows must enter at one point and exit.',
              'Prediction 1 — more moose survive, so browsing pressure rises, so fir seedlings fail to reach maturity and the forest stops regenerating; over a longer period the moose population then crashes harder because it overshoots further.',
              'Prediction 2 — wolves decline, but not immediately. There is a lag of a few years while the remaining moose become harder to find and wolf pups fail to survive.',
              'Quadrat — seven seedlings per square metre repeated across a hundred squares indicates active regeneration, so the forest has a future generation of firs. A count near zero would indicate the opposite, which is what heavy browsing produces.',
            ],
          },
          assessment: {
            successCriteria: [
              'Reads a two-variable graph and describes the relationship between the lines, including the lag.',
              'Identifies where the simple predator-prey explanation fails and says why.',
              'Uses a second, independent kind of evidence to explain what the population data cannot.',
              'Builds a model in which matter cycles and energy flows one way, with correctly directed arrows.',
            ],
            exitTicket:
              'Name the limiting factor for the moose in the crash year and give one piece of evidence for it, plus one piece of evidence against the wolf explanation. Requiring evidence against an alternative is the part that separates argument from assertion.',
            rubric: [
              { level: 'emerging', descriptor: 'Reads single values off the graph but describes the two populations separately; explains the crash with predators despite the wolf count, and draws matter and energy arrows the same way.' },
              { level: 'developing', descriptor: 'Describes the relationship between the lines and notices the crash year is anomalous, but relies on the population graph alone and does not bring in the browse-line evidence unprompted.' },
              { level: 'secure', descriptor: 'Identifies the lag, locates the failure of the simple model, argues from two independent kinds of evidence including evidence against the alternative, and produces a model distinguishing cycling matter from one-way energy.' },
            ],
          },
          differentiation: {
            support: [
              'Provide the graph pre-plotted. Plotting is a separate skill and it consumes the time this lesson needs for reasoning.',
              'Reduce the data set to six years including the crash, which preserves every pattern that matters.',
              'Give the model boxes pre-filled so the student only draws and directs the arrows.',
            ],
            extension: [
              'Investigate what happened on the real island after the wolf population fell to two animals, and what the decision to bring in new wolves involved. It is a genuine and unresolved ecological argument.',
              'Calculate the moose per wolf ratio for each data year and graph it. The ratio reveals things neither raw line shows.',
              'Find population data for a local species and apply the same claim, evidence and reasoning structure to it.',
            ],
            language: [
              'The graph is the text here, and it is accessible regardless of reading level. Let students narrate the lines orally before writing anything.',
              'Limiting factor and carrying capacity are the two terms that must be secure. Everything else can be paraphrased.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Predators control prey populations, and that is the whole story.',
              looksLike: 'A student answers every question with wolves, including the crash year when there were twelve wolves on the island.',
              correction: 'Put the wolf number next to the moose death toll and ask them to do the arithmetic out loud. Twelve wolves cannot eat nineteen hundred moose in a winter, and the number does the arguing.',
            },
            {
              misconception: 'Two lines that move together on a graph prove that one causes the other.',
              looksLike: 'A student claims the wolves caused every dip in the moose line, including dips that precede any wolf increase.',
              correction: 'Check the order of events. If the supposed effect happens before the supposed cause, the causal story is impossible, and correlation is all that remains.',
            },
            {
              misconception: 'Energy cycles round an ecosystem the way matter does.',
              looksLike: 'A model with energy arrows forming a closed loop back to the sun.',
              correction: 'Ask what warms up when an animal moves, and where that heat goes. Energy leaves at every step, which is precisely why the sun has to keep supplying more.',
            },
            {
              misconception: 'A healthy ecosystem holds a steady number of animals.',
              looksLike: 'A student treats every fluctuation as a sign of damage.',
              correction: 'Look at the fifty-year record. It never sits still and the ecosystem persists throughout. Oscillation is the normal condition, not the failure state.',
            },
          ],
          homeExtension: [
            'Find out what limits the population of one animal near where you live — pigeons, squirrels, foxes, gulls — and what evidence would settle it.',
            'Look for a browse line on real trees where deer, goats or cattle graze. Once you know to look, they are everywhere and startlingly straight.',
            'Explain to someone at home why removing all the predators from an area often ends badly for the prey animals too.',
          ],
          teacherNotes:
            'The figures here are rounded from the Isle Royale wolf and moose study in Lake Superior, which has run continuously since 1958 and is the longest predator-prey record anywhere. Telling students it is real, ongoing, and conducted by people who ski across a frozen island every winter changes how hard they work on it. Budget your time carefully: if the class must plot the graph themselves, the practice beat will overrun, and the honest fix is to hand out the pre-plotted version rather than to rush the argument-building in beat three. The single most common failure in the whole lesson is the energy arrow loop — check every model as you circulate, because the misconception is invisible in writing and obvious in a diagram.',
        },

        {
          id: 'g7-sci-u5-l2',
          unitId: 'g7-sci-u5',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Predicting Who Interacts With Whom',
          essentialQuestion: 'Do the same patterns of interaction show up in ecosystems that look nothing alike?',
          summary:
            'Students compare a desert, a coral reef and a temperate woodland and find the same interaction types — competition, predation, mutualism, parasitism — recurring in wildly different forms, then use the pattern to predict interactions in a fourth, unfamiliar ecosystem.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS2-2', framework: 'NGSS', text: 'Construct an explanation that predicts patterns of interactions among organisms across multiple ecosystems.' },
          ],
          objectives: [
            'I can classify an interaction by who benefits and who is harmed.',
            'I can find the same interaction type in three different ecosystems.',
            'I can predict interactions in an ecosystem I have not studied.',
          ],
          vocabulary: [
            { term: 'mutualism', definition: 'An interaction where both organisms benefit.' },
            { term: 'competition', definition: 'Two organisms needing the same limited resource.' },
            { term: 'parasitism', definition: 'One organism benefiting at the ongoing cost of another.' },
          ],
          materials: ['Three ecosystem case packs', 'Interaction sorting cards', 'A blank prediction sheet for the fourth ecosystem'],
          prep: ['Keep the fourth ecosystem genuinely unseen. Its whole function is to test transfer.'],
          script: [],
          worksheet: { id: 'g7-sci-u5-l2-ws', title: 'The Same Patterns Everywhere', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Classifies interactions correctly using a benefit-harm frame.', 'Finds the same type across three ecosystems.', 'Makes a justified prediction for the fourth.'],
            exitTicket: 'Predict one mutualism in an ecosystem we have not studied and say what each partner gains.',
          },
          differentiation: {
            support: ['Work with two interaction types before adding the rest.'],
            extension: ['Find an interaction that changes category depending on conditions, and explain what shifts it.'],
          },
          misconceptions: [
            { misconception: 'Ecosystems are so different that nothing transfers between them.', looksLike: 'A student treats each case study as unrelated.', correction: 'Lay the three sorted sets side by side. The categories fill up identically even though the species share nothing.' },
          ],
          homeExtension: ['Find one mutualism happening in a garden, a kitchen or on a pet, and describe what each side gets.'],
        },
        {
          id: 'g7-sci-u5-l3',
          unitId: 'g7-sci-u5',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'The Same Atoms, Over and Over',
          essentialQuestion: 'Where were the atoms in your body a hundred years ago?',
          summary:
            'A full matter-cycling and energy-flow model built at whole-class scale, with decomposers given the prominence they are usually denied. Students trace carbon, water and nitrogen through living and non-living components.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS2-3', framework: 'NGSS', text: 'Develop a model to describe the cycling of matter and flow of energy among living and nonliving parts of an ecosystem.' },
          ],
          objectives: [
            'I can build a model showing matter cycling and energy flowing.',
            'I can explain the role of decomposers in returning matter.',
            'I can identify the non-living parts of an ecosystem and their role.',
          ],
          vocabulary: [
            { term: 'decomposer', definition: 'An organism that breaks down dead material and returns its matter to the environment.' },
            { term: 'abiotic', definition: 'The non-living parts of an ecosystem, such as soil, water and air.' },
            { term: 'biomass', definition: 'The total mass of living material.' },
          ],
          materials: ['String and cards for a floor-scale model', 'Three atom types in different colours', 'A decomposition jar started three weeks earlier if possible'],
          prep: ['Start a decomposition jar three weeks ahead. Watching real decay makes decomposers impossible to dismiss.'],
          script: [],
          worksheet: { id: 'g7-sci-u5-l3-ws', title: 'Round and Round, Through and Out', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Matter arrows form a closed cycle.', 'Energy arrows enter and exit.', 'Decomposers are correctly positioned.'],
            exitTicket: 'What would happen to this ecosystem in ten years with no decomposers at all?',
          },
          differentiation: {
            support: ['Model carbon only before adding water and nitrogen.'],
            extension: ['Add the atmosphere as a reservoir and estimate how long an atom spends there.'],
          },
          misconceptions: [
            { misconception: 'Decomposers just make things rot away into nothing.', looksLike: 'A model where the decomposer arrow leads nowhere.', correction: 'Ask where the matter goes. Every arrow out of a decomposer must land somewhere, and it lands in the soil and the air.' },
          ],
          homeExtension: ['Set up a compost jar with food scraps and record the changes weekly for a month.'],
        },
        {
          id: 'g7-sci-u5-l4',
          unitId: 'g7-sci-u5',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'One Change, Many Populations',
          essentialQuestion: 'How far does one change to an ecosystem travel?',
          summary:
            'Case studies of real ecosystem disruptions — an invasive species, a dam, a removed predator — with students constructing evidence-based arguments about which population changes were caused by the disruption and which were coincidental.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS2-4', framework: 'NGSS', text: 'Construct an argument supported by empirical evidence that changes to physical or biological components of an ecosystem affect populations.' },
          ],
          objectives: [
            'I can trace the effects of one change through at least three populations.',
            'I can distinguish an effect of the change from a coincidence.',
            'I can build a claim, evidence and reasoning argument from real data.',
          ],
          vocabulary: [
            { term: 'invasive species', definition: 'A species introduced to a place where it has no established limits.' },
            { term: 'trophic cascade', definition: 'A change at one level of a food web producing effects several levels away.' },
          ],
          materials: ['Three case study packs with time-series data', 'Argument frames'],
          prep: ['Include a case where the popular explanation is contested, so students meet genuine scientific disagreement.'],
          script: [],
          worksheet: { id: 'g7-sci-u5-l4-ws', title: 'How Far Does It Travel?', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Traces at least three affected populations.', 'Uses data to distinguish effect from coincidence.', 'Writes a complete argument.'],
            exitTicket: 'Name one population change in your case that you cannot confidently attribute to the disruption, and say why not.',
          },
          differentiation: {
            support: ['Provide the causal chain with one link missing.'],
            extension: ['Find a counterexample where the same disruption produced a different outcome elsewhere.'],
          },
          misconceptions: [
            { misconception: 'Removing a harmful species always improves an ecosystem.', looksLike: 'A student proposes eradication as a universal answer.', correction: 'Look at cases where removal produced a worse outcome. Systems with many connections respond in ways that are genuinely hard to predict.' },
          ],
          homeExtension: ['Find out which invasive species is a problem in your region and what is being done about it.'],
        },
        {
          id: 'g7-sci-u5-l5',
          unitId: 'g7-sci-u5',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Designing for Biodiversity',
          essentialQuestion: 'How do you choose between two conservation plans that both sound good?',
          summary:
            'An engineering evaluation. Students define criteria and constraints, then score two competing real conservation proposals against them and defend a recommendation including its costs.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS2-5', framework: 'NGSS', text: 'Evaluate competing design solutions for maintaining biodiversity and ecosystem services.' },
            { code: 'MS-LS2-4', framework: 'NGSS', text: 'Construct an argument supported by empirical evidence that changes to physical or biological components of an ecosystem affect populations.' },
          ],
          objectives: [
            'I can state criteria and constraints before evaluating.',
            'I can score two proposals against the same criteria.',
            'I can recommend one and state honestly what it costs.',
          ],
          vocabulary: [
            { term: 'biodiversity', definition: 'The variety of living things in a place.' },
            { term: 'ecosystem services', definition: 'Things ecosystems do that people depend on, such as pollination, clean water and flood control.' },
            { term: 'criteria', definition: 'The standards a solution must meet, agreed before evaluating.' },
            { term: 'constraint', definition: 'A limit on what any solution can do, such as cost or land available.' },
          ],
          materials: ['Two competing conservation proposals for one real site', 'A decision matrix template'],
          prep: ['Choose proposals with a genuine trade-off, ideally where one costs less and delivers less. Easy choices teach nothing.'],
          script: [],
          worksheet: { id: 'g7-sci-u5-l5-ws', title: 'Which Plan, and What Does It Cost?', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Criteria stated before scoring.', 'Both proposals scored on the same basis.', 'Recommendation names its own downside.'],
            exitTicket: 'What does your recommended plan fail to do, and who bears that cost?',
          },
          differentiation: {
            support: ['Provide three criteria and let students add a fourth.'],
            extension: ['Design a third proposal that combines the strengths of both and identify its new weakness.'],
            language: ['A decision matrix is largely numerical, which makes this an accessible task; require the justification orally if writing is the barrier.'],
          },
          misconceptions: [
            { misconception: 'The best plan is the one that protects the most species.', looksLike: 'A student ignores cost and feasibility entirely.', correction: 'Add the budget constraint and rescore. A plan nobody can afford protects nothing at all.' },
          ],
          homeExtension: ['Find a local conservation project and work out what criteria it was chosen against.'],
        },
      ],
    },

    /* ============================================================== UNIT 6 */
    {
      id: 'g7-sci-u6',
      gradeId: 'g7',
      subjectId: 'science',
      sequence: 6,
      title: 'Evidence of Change Over Time',
      bigIdea:
        'Fossils, anatomy, embryos and living populations all record the same history — and natural selection explains how variation in a population becomes change over generations.',
      description:
        'The year closes with the largest explanatory idea in biology, built from four independent bodies of evidence rather than asserted. Students read the fossil record as a data set, compare limb bones across species, analyse embryological images, and study artificial selection as the case where humans did the selecting and can therefore show their working. It ends with mathematics: quantifying how a trait becomes more or less common over generations.',
      weeks: 6,
      standards: [
        { code: 'MS-LS4-1', framework: 'NGSS', text: 'Analyse and interpret data for patterns in the fossil record that document the existence, diversity, extinction and change of life forms throughout the history of life on Earth under the assumption that natural laws operate today as in the past.' },
        { code: 'MS-LS4-2', framework: 'NGSS', text: 'Apply scientific ideas to construct an explanation for the anatomical similarities and differences among modern organisms and between modern and fossil organisms to infer evolutionary relationships.' },
        { code: 'MS-LS4-3', framework: 'NGSS', text: 'Analyse displays of pictorial data to compare patterns of similarities in the embryological development across multiple species to identify relationships not evident in the fully formed anatomy.' },
        { code: 'MS-LS4-4', framework: 'NGSS', text: 'Construct an explanation based on evidence that describes how genetic variations of traits in a population increase some individuals\' probability of surviving and reproducing in a specific environment.' },
        { code: 'MS-LS4-5', framework: 'NGSS', text: 'Gather and synthesise information about technologies that have changed the way humans influence the inheritance of desired traits in organisms.' },
        { code: 'MS-LS4-6', framework: 'NGSS', text: 'Use mathematical representations to support explanations of how natural selection may lead to increases and decreases of specific traits in populations over time.' },
      ],
      lessonTitles: [
        'Reading the Rock Column',
        'Same Bones, Different Jobs',
        'Embryos Give the Game Away',
        'From Wolf to Chihuahua',
        'Variation, Survival and the Numbers',
      ],
      performanceTask:
        'The Four Lines of Evidence: students take one group of organisms — whales, horses, birds or dogs — and assemble fossil, anatomical, embryological and mathematical evidence into a single explanation of how the group came to be as it is, with one section on what remains genuinely uncertain.',
      lessons: [
        {
          id: 'g7-sci-u6-l1',
          unitId: 'g7-sci-u6',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'Reading the Rock Column',
          essentialQuestion: 'What can the order of fossils in rock tell you that a single fossil cannot?',
          summary:
            'Students analyse a stratigraphic column as a data set, extracting patterns of appearance, diversity and extinction, and reason about what the assumption of unchanging natural laws lets them conclude.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS4-1', framework: 'NGSS', text: 'Analyse and interpret data for patterns in the fossil record that document the existence, diversity, extinction and change of life forms throughout the history of life on Earth.' },
          ],
          objectives: [
            'I can determine relative age from rock layers.',
            'I can identify appearance, diversity and extinction patterns in fossil data.',
            'I can explain why gaps in the record are expected rather than fatal.',
          ],
          vocabulary: [
            { term: 'stratum', definition: 'A layer of rock, generally younger than the layers beneath it.' },
            { term: 'relative dating', definition: 'Establishing which of two things is older without giving an exact age.' },
            { term: 'extinction', definition: 'The permanent disappearance of a species from the record.' },
          ],
          materials: ['A printed stratigraphic column with fossil occurrences', 'Layered sediment jar or coloured sand demonstration'],
          prep: ['Build the layered jar in advance and add a disturbance to one side so students meet a complication early.'],
          script: [],
          worksheet: { id: 'g7-sci-u6-l1-ws', title: 'What the Layers Record', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Orders layers by relative age with justification.', 'Identifies at least two patterns in the fossil data.', 'Explains why absence of a fossil is weak evidence of absence.'],
            exitTicket: 'A species appears in layer four and is absent in layer five. Give two possible explanations.',
          },
          differentiation: {
            support: ['Work with five layers and three fossil types.'],
            extension: ['Interpret a column that has been folded or overturned and explain how you can tell.'],
          },
          misconceptions: [
            { misconception: 'A gap in the fossil record means the idea fails.', looksLike: 'A student treats every missing intermediate as decisive.', correction: 'Discuss how rarely anything fossilises at all. The surprise is not that there are gaps but that there is a record at all.' },
          ],
          homeExtension: ['Look at an exposed cliff, road cutting or riverbank and see whether you can identify separate layers.'],
        },
        {
          id: 'g7-sci-u6-l2',
          unitId: 'g7-sci-u6',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Same Bones, Different Jobs',
          essentialQuestion: 'Why does a bat wing have the same bones as your hand?',
          summary:
            'Comparative anatomy. Students colour-code the limb bones of five vertebrates and confront the fact that structures doing entirely different jobs are built from the same set of parts in the same order.',
          durationMin: 50,
          standards: [
            { code: 'MS-LS4-2', framework: 'NGSS', text: 'Apply scientific ideas to construct an explanation for the anatomical similarities and differences among modern organisms and between modern and fossil organisms to infer evolutionary relationships.' },
          ],
          objectives: [
            'I can match equivalent bones across five different limbs.',
            'I can explain why shared structure suggests shared ancestry.',
            'I can distinguish a homologous structure from one that merely does a similar job.',
          ],
          vocabulary: [
            { term: 'homologous', definition: 'Built from the same structures inherited from a common ancestor, even when used differently.' },
            { term: 'analogous', definition: 'Doing a similar job without shared underlying structure, such as an insect wing and a bird wing.' },
          ],
          materials: ['Limb diagrams for human, bat, whale, cat and bird', 'Five coloured pencils per student'],
          prep: ['Colour one set yourself so you can spot which bone students consistently mismatch. It is almost always the wrist.'],
          script: [],
          worksheet: { id: 'g7-sci-u6-l2-ws', title: 'Colour the Same Bone', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Matches bones correctly across all five limbs.', 'Explains the inference to common ancestry.', 'Correctly classifies an analogous pair.'],
            exitTicket: 'Insect wing and bat wing: homologous or analogous? Give your reason.',
          },
          differentiation: {
            support: ['Start with three limbs and the four largest bones.'],
            extension: ['Add a fossil intermediate limb and place it in the sequence with reasons.'],
            language: ['Homologous and analogous are easily confused; anchor them to two physical examples and refer back rather than re-defining.'],
          },
          misconceptions: [
            { misconception: 'Similar-looking animals must be closely related.', looksLike: 'A student groups a dolphin with a shark.', correction: 'Colour their limb bones. The dolphin has the same five-part pattern as your arm; the shark does not. Structure beats silhouette.' },
          ],
          homeExtension: ['Compare a chicken wing from the kitchen with your own arm and identify the matching bones.'],
        },
        {
          id: 'g7-sci-u6-l3',
          unitId: 'g7-sci-u6',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Embryos Give the Game Away',
          essentialQuestion: 'Why do a fish, a chicken and a human look so similar before they look like themselves?',
          summary:
            'Analysis of pictorial embryological data. Students compare developmental stages across species and identify relationships invisible in the adult forms, while learning to be careful about what the images do and do not show.',
          durationMin: 50,
          standards: [
            { code: 'MS-LS4-3', framework: 'NGSS', text: 'Analyse displays of pictorial data to compare patterns of similarities in the embryological development across multiple species to identify relationships not evident in the fully formed anatomy.' },
          ],
          objectives: [
            'I can compare embryo images across species and stages.',
            'I can identify shared features that disappear in the adult.',
            'I can say what a pictorial data display cannot tell me.',
          ],
          vocabulary: [
            { term: 'embryo', definition: 'An organism in its earliest stage of development.' },
            { term: 'developmental stage', definition: 'A point in the process of growing from a single cell to a full organism.' },
          ],
          materials: ['A four-species by three-stage embryo image grid', 'Adult images of the same four species'],
          prep: ['Use accurate modern images rather than the historical drawings, which were exaggerated and are still widely reproduced.'],
          script: [],
          worksheet: { id: 'g7-sci-u6-l3-ws', title: 'Before They Look Like Themselves', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Identifies shared early features.', 'Notes when the species become distinguishable.', 'States a limitation of the image data.'],
            exitTicket: 'Name one feature all four embryos share that only one adult keeps.',
          },
          differentiation: {
            support: ['Compare two species across three stages.'],
            extension: ['Research why the classic nineteenth-century embryo drawings were criticised and what modern imaging changed.'],
          },
          misconceptions: [
            { misconception: 'An embryo passes through the adult forms of its ancestors.', looksLike: 'A student says a human embryo "is a fish" at one stage.', correction: 'It shares features with other embryos, not with adult fish. The similarity is between early stages, which is a much more careful and more interesting claim.' },
          ],
          homeExtension: ['Look at photographs of a puppy and an adult dog of the same breed and list what changed and what did not.'],
        },
        {
          id: 'g7-sci-u6-l4',
          unitId: 'g7-sci-u6',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'From Wolf to Chihuahua',
          essentialQuestion: 'How much can selection change a species, and how fast?',
          summary:
            'Artificial selection as the case where the mechanism is documented. Students synthesise information on selective breeding of dogs, crops and livestock, and on modern technologies that changed how humans influence inherited traits.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS4-5', framework: 'NGSS', text: 'Gather and synthesise information about technologies that have changed the way humans influence the inheritance of desired traits in organisms.' },
            { code: 'MS-LS4-4', framework: 'NGSS', text: 'Construct an explanation based on evidence that describes how genetic variations of traits in a population increase some individuals\' probability of surviving and reproducing.' },
          ],
          objectives: [
            'I can explain how selective breeding changes a population over generations.',
            'I can compare traditional breeding with modern genetic technologies.',
            'I can identify a cost or risk of a selected trait.',
          ],
          vocabulary: [
            { term: 'artificial selection', definition: 'Humans choosing which individuals reproduce, based on desired traits.' },
            { term: 'selective breeding', definition: 'Breeding chosen individuals over many generations to strengthen a trait.' },
            { term: 'genetic engineering', definition: 'Directly altering an organism\'s genetic material.' },
          ],
          materials: ['Images of wild ancestors beside modern breeds and crops', 'A short reading on one modern genetic technology'],
          prep: ['Include the teosinte to maize comparison. It is more dramatic than the dog example and less familiar.'],
          script: [],
          worksheet: { id: 'g7-sci-u6-l4-ws', title: 'Who Chose That Trait?', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Explains selection over generations.', 'Compares two technologies for influencing inheritance.', 'Names a cost of an intensively selected trait.'],
            exitTicket: 'Name one trait humans selected for that turned out to harm the organism, and explain how.',
          },
          differentiation: {
            support: ['Work with dogs only, comparing three breeds to the wolf.'],
            extension: ['Take a position on a modern breeding technology and support it with evidence from at least two sources.'],
          },
          misconceptions: [
            { misconception: 'Selective breeding creates new traits.', looksLike: 'A student says breeders invented short legs.', correction: 'Selection can only work on variation that already exists. Breeders amplify the rare; they do not conjure it.' },
          ],
          homeExtension: ['Find out what the wild ancestor of a common vegetable looked like. Cabbage, broccoli and kale share one.'],
        },
        {
          id: 'g7-sci-u6-l5',
          unitId: 'g7-sci-u6',
          gradeId: 'g7',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Variation, Survival and the Numbers',
          essentialQuestion: 'How does a trait that starts rare end up in most of a population?',
          summary:
            'The mathematical closing lesson. Students run a selection simulation over multiple generations, tabulate trait frequencies and graph the change, then explain the result in terms of differential survival and reproduction.',
          durationMin: 55,
          standards: [
            { code: 'MS-LS4-6', framework: 'NGSS', text: 'Use mathematical representations to support explanations of how natural selection may lead to increases and decreases of specific traits in populations over time.' },
            { code: 'MS-LS4-4', framework: 'NGSS', text: 'Construct an explanation based on evidence that describes how genetic variations of traits in a population increase some individuals\' probability of surviving and reproducing in a specific environment.' },
          ],
          objectives: [
            'I can calculate trait frequency as a percentage across generations.',
            'I can graph the change and describe its shape.',
            'I can explain the change in terms of survival and reproduction rather than intention.',
          ],
          vocabulary: [
            { term: 'trait frequency', definition: 'The proportion of a population with a particular trait.' },
            { term: 'natural selection', definition: 'The process by which individuals with certain inherited traits survive and reproduce more than others in a given environment.' },
            { term: 'generation', definition: 'One complete round of reproduction in a population.' },
          ],
          materials: ['Coloured beads or paper dots on two background fabrics', 'Timers, tweezers, data tables, graph paper'],
          prep: ['Run one generation yourself to calibrate the timing. Too long and every prey item is taken; too short and nothing changes.'],
          script: [],
          worksheet: { id: 'g7-sci-u6-l5-ws', title: 'Counting the Change', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Calculates frequencies correctly across at least four generations.', 'Graphs the trend.', 'Explains it without appealing to intention or effort.'],
            exitTicket: 'Your graph goes up. Explain why, without saying that any individual changed.',
          },
          differentiation: {
            support: ['Provide the data table with the first generation calculated.'],
            extension: ['Change the background halfway through and predict, then test, what happens to the trend.'],
            language: ['Insist on the phrasing "individuals with the trait survived more often" rather than "the animals adapted", for everyone. It is a precision issue, not a language one.'],
          },
          misconceptions: [
            { misconception: 'Individuals change themselves to survive.', looksLike: 'A student says the prey items "turned" a different colour to hide.', correction: 'Point at the beads. Not one of them changed colour. The population changed because of which ones were left, and that is the whole mechanism.' },
          ],
          homeExtension: ['Explain to someone at home why an individual cannot evolve but a population can.'],
        },
      ],
    },
  ],
}

export default course
