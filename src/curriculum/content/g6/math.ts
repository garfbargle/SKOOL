import type { SubjectCourse } from '../../types'

/**
 * Grade 6 Mathematics.
 *
 * Sixth grade is the year arithmetic turns into algebra. Ratio reasoning,
 * negative numbers, variables and statistical thinking all arrive at once, and
 * each of them asks the learner to hold a relationship in mind rather than a
 * calculation. The scripts here assume an eleven- or twelve-year-old who is
 * perfectly capable of an abstract idea but will not accept one on authority.
 */
const course: SubjectCourse = {
  gradeId: 'g6',
  subjectId: 'math',
  title: 'Grade 6 Mathematics',
  overview:
    'Grade 6 is the hinge year. Up to now, a number has mostly been a count of something. This year a number becomes a relationship — three cups per two litres, negative four degrees, x plus seven — and the arithmetic that used to be the whole subject becomes the tool rather than the point. Learners build ratio and rate reasoning, finish fraction and decimal fluency, extend the number line below zero and the grid into all four quadrants, meet variables and equations properly for the first time, and learn to describe a set of data honestly. Expect the pace to feel faster than Grade 5 and expect a stretch of genuine confusion around negatives and variables. That confusion is the work, not a sign it is going badly.',
  yearGoals: [
    'Reason with ratios, rates and percentages, and move fluently between tables, double number lines, tape diagrams and the coordinate plane.',
    'Divide a fraction by a fraction and know why the procedure works, and compute fluently with multi-digit whole numbers and decimals.',
    'Use positive and negative rational numbers on the number line and in all four quadrants, including absolute value and ordering.',
    'Write, read, evaluate and rearrange algebraic expressions, and solve one-variable equations and inequalities that model real situations.',
    'Find area, surface area and volume by decomposing shapes and unfolding solids into nets.',
    'Ask a statistical question, display the answers, and describe the distribution by its shape, centre and spread rather than by a single number.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'g6-math-u1',
      gradeId: 'g6',
      subjectId: 'math',
      sequence: 1,
      title: 'Ratios, Rates and Proportional Reasoning',
      bigIdea:
        'A ratio is not two numbers side by side — it is a relationship that stays true when both quantities grow or shrink together.',
      description:
        'Learners meet ratio language, build tables of equivalent ratios, and discover the unit rate: the single number that lets any two rates be compared. Multiple representations matter here. A learner who can only do ratio tables will stall on an unfamiliar problem; one who can move between a table, a double number line, a tape diagram and a graph will not.',
      weeks: 5,
      standards: [
        { code: 'CCSS.MATH.CONTENT.6.RP.A.1', framework: 'CCSS-M', text: 'Understand the concept of a ratio and use ratio language to describe a ratio relationship between two quantities.' },
        { code: 'CCSS.MATH.CONTENT.6.RP.A.2', framework: 'CCSS-M', text: 'Understand the concept of a unit rate a/b associated with a ratio a:b with b ≠ 0, and use rate language in the context of a ratio relationship.' },
        { code: 'CCSS.MATH.CONTENT.6.RP.A.3', framework: 'CCSS-M', text: 'Use ratio and rate reasoning to solve real-world and mathematical problems, e.g. by reasoning about tables of equivalent ratios, tape diagrams, double number line diagrams or equations.' },
        { code: 'CCSS.MATH.CONTENT.6.RP.A.3.C', framework: 'CCSS-M', text: 'Find a percent of a quantity as a rate per 100; solve problems involving finding the whole given a part and the percent.' },
        { code: 'CCSS.MATH.CONTENT.6.RP.A.3.D', framework: 'CCSS-M', text: 'Use ratio reasoning to convert measurement units; manipulate and transform units appropriately when multiplying or dividing quantities.' },
      ],
      lessonTitles: [
        'Ratio Language: For Every, To, Per',
        'Equivalent Ratios and Ratio Tables',
        'Unit Rate: What One of Them Costs',
        'Comparing Rates: Which Is the Better Deal?',
        'Percent as a Rate per Hundred',
        'Converting Units with Ratio Reasoning',
      ],
      performanceTask:
        'The Shopping Audit: given a photographed supermarket shelf with five package sizes and prices, the learner computes the unit price of each, ranks them, and writes a short recommendation that names the one case where the biggest package is not the best value and explains why.',
      lessons: [
        {
          id: 'g6-math-u1-l1',
          unitId: 'g6-math-u1',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 1,
          status: 'outline',
          title: 'Ratio Language: For Every, To, Per',
          essentialQuestion: 'What is a ratio actually telling me, and how do I say it precisely?',
          summary:
            'Introduces ratio as a multiplicative comparison and drills the three ways of saying it — "for every 3 cups of flour, 2 cups of water", "3 to 2", "3:2". Also separates part-to-part from part-to-whole, which is the source of most later confusion.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.RP.A.1', framework: 'CCSS-M', text: 'Understand the concept of a ratio and use ratio language to describe a ratio relationship between two quantities.' },
          ],
          objectives: [
            'I can describe a ratio relationship in words, with a colon and as a fraction.',
            'I can tell the difference between a part-to-part ratio and a part-to-whole ratio.',
            'I can write a ratio in the order the question asks for.',
          ],
          vocabulary: [
            { term: 'ratio', definition: 'A comparison of two quantities that says how much of one there is for a given amount of the other.', example: '3 red beads for every 2 blue beads.' },
            { term: 'part-to-part', definition: 'A ratio comparing one part of a group with a different part.', example: '3 red to 2 blue.' },
            { term: 'part-to-whole', definition: 'A ratio comparing one part with the total.', example: '3 red out of 5 beads altogether.' },
          ],
          materials: ['Two colours of small counters, beads or dried beans', 'Squared paper', 'The printed worksheet'],
          prep: [
            'Bag up three or four collections with clean ratios: 6 red and 4 blue, 8 red and 12 blue, 9 red and 3 blue.',
            'Decide now that you will insist on the order of the words. "Red to blue" and "blue to red" are different ratios and this is where that habit is built.',
          ],
          script: [],
          worksheet: { id: 'g6-math-u1-l1-ws', title: 'Saying It Three Ways', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: [
              'Writes a ratio in all three notations for the same situation.',
              'Correctly identifies whether a given ratio is part-to-part or part-to-whole.',
              'Preserves the order named in the question.',
            ],
            exitTicket:
              'Show 4 apples and 6 oranges. Ask for the ratio of apples to oranges, the ratio of oranges to apples, and the ratio of apples to all the fruit. Three different answers is the point.',
          },
          differentiation: {
            support: ['Physically separate the two groups on the table before writing anything. Language follows the arrangement.'],
            extension: ['Give a part-to-whole ratio and ask the learner to reconstruct the two part-to-part ratios from it.'],
            language: ['Drill the frame "for every ___ , there are ___". The word "for" is doing the mathematical work and is easy to skip over.'],
          },
          misconceptions: [
            {
              misconception: 'A ratio of 3:2 means there are exactly 3 of one thing and 2 of the other.',
              looksLike: 'The learner rejects a jar of 30 red and 20 blue as being "3 to 2".',
              correction: 'Build 3:2 with counters, then double it in front of them and ask whether the relationship changed. Repeat to 30:20.',
            },
          ],
          homeExtension: ['Read the ratio off a recipe out loud while cooking, then halve it and say the new numbers.'],
        },
        {
          id: 'g6-math-u1-l2',
          unitId: 'g6-math-u1',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 2,
          status: 'outline',
          title: 'Equivalent Ratios and Ratio Tables',
          essentialQuestion: 'How do I scale a ratio up or down without breaking it?',
          summary:
            'Builds the ratio table as a reasoning tool rather than a fill-in exercise. Learners scale by multiplying both quantities, and — crucially — learn to jump around the table by adding rows together rather than always multiplying from the first row.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.RP.A.3.A', framework: 'CCSS-M', text: 'Make tables of equivalent ratios relating quantities with whole-number measurements, find missing values in the tables, and plot the pairs of values on the coordinate plane.' },
          ],
          objectives: [
            'I can generate equivalent ratios by multiplying or dividing both quantities by the same number.',
            'I can find a missing value in a ratio table and explain the move I used.',
            'I can combine two rows of a ratio table to make a new true row.',
          ],
          vocabulary: [
            { term: 'equivalent ratios', definition: 'Ratios that describe the same relationship, like 3:2 and 12:8.' },
            { term: 'scale factor', definition: 'The number you multiply both quantities by to get an equivalent ratio.' },
          ],
          materials: ['Squared paper for tables', 'The printed worksheet'],
          prep: ['Draw one blank two-row table on paper before you start so the learner sees the structure before any numbers arrive.'],
          script: [],
          worksheet: { id: 'g6-math-u1-l2-ws', title: 'Scaling Without Breaking', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Fills a ratio table accurately.', 'Explains why both quantities must be scaled by the same factor.'],
            exitTicket: 'Give the row 4 : 10 and ask for the entries when the first quantity is 6. Watch whether they scale by 1.5 or add 2 to both.',
          },
          differentiation: {
            support: ['Restrict to whole-number scale factors of 2, 3 and 10 until the structure is automatic.'],
            extension: ['Ask for a row where the first quantity is 1, which quietly introduces the unit rate before the next lesson names it.'],
          },
          misconceptions: [
            {
              misconception: 'You keep a ratio equivalent by adding the same number to both quantities.',
              looksLike: '3:2 becomes 4:3 becomes 5:4, and the learner is satisfied.',
              correction: 'Build 3:2 with counters, add one to each, and physically re-pair them. The pairs no longer work out, and the mismatch is visible.',
            },
          ],
          homeExtension: ['Scale a recipe for double the people and write out the new table before cooking.'],
        },

        /* ------------------------------------------------------- AUTHORED */
        {
          id: 'g6-math-u1-l3',
          unitId: 'g6-math-u1',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 3,
          status: 'authored',
          title: 'Unit Rate: What One of Them Costs',
          essentialQuestion: 'How do I compare two deals when the packages are different sizes?',
          summary:
            'The unit rate is the great equaliser: once both offers are expressed as a price for one, comparison is trivial. This lesson builds the unit rate from a double number line rather than from a rule, so that learners can also run it backwards and can choose which of the two possible unit rates answers the question in front of them.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.RP.A.2', framework: 'CCSS-M', text: 'Understand the concept of a unit rate a/b associated with a ratio a:b with b ≠ 0, and use rate language in the context of a ratio relationship.' },
            { code: 'CCSS.MATH.CONTENT.6.RP.A.3.B', framework: 'CCSS-M', text: 'Solve unit rate problems including those involving unit pricing and constant speed.' },
            { code: 'CCSS.MATH.CONTENT.6.RP.A.3.A', framework: 'CCSS-M', text: 'Make tables of equivalent ratios relating quantities with whole-number measurements, find missing values in the tables, and plot the pairs of values on the coordinate plane.' },
          ],
          objectives: [
            'I can find the unit rate for a ratio by scaling one quantity down to 1.',
            'I can use a double number line to find any value in a ratio relationship.',
            'I can say which of the two possible unit rates answers a particular question, and why.',
          ],
          vocabulary: [
            { term: 'rate', definition: 'A ratio comparing two quantities measured in different units.', example: '£6 for 4 kilograms.' },
            { term: 'unit rate', definition: 'The rate when the second quantity is exactly 1.', example: '£1.50 per kilogram.' },
            { term: 'per', definition: 'For each one. The word that signals a unit rate.', example: '60 miles per hour.' },
            { term: 'double number line', definition: 'Two parallel number lines with matching tick marks, used to keep two quantities lined up as they scale together.' },
          ],
          materials: [
            'The printed worksheet',
            'A ruler',
            'A pencil and an eraser — this lesson involves changing your mind on paper',
            'Two real packages of the same product in different sizes, with the prices visible (a small and a large box of anything)',
            'A calculator, allowed only from the guided practice onwards',
          ],
          prep: [
            'Find the two packages before the lesson. Rig it if you can: hunt for a case where the larger package is NOT the better value, because the hook depends on it. Multi-buy offers on small sizes often do this.',
            'Write the two prices and two sizes on a scrap of paper large enough to see from across the table. Do not write the unit prices — that is the discovery.',
            'Draw one blank double number line on a spare sheet so you can model before the worksheet.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Bigger Box Is Always Cheaper. Right?',
              minutes: 8,
              say: [
                'Quick one. Two boxes of the same cereal. The small one is 400 grams for £2.20. The big one is 750 grams for £4.35. Which is the better deal?',
                'Go with your gut. No maths yet. Just say it.',
                'Right — most people say the big one, because bigger boxes are always cheaper per gram. Shops rely on you thinking that.',
                'So let us actually check. Not by feel. By working out what one gram costs in each box.',
                'And here is the thing: I am not going to tell you the answer. When we finish, one of us is going to be wrong, and I honestly do not know which.',
              ],
              do: [
                'Put the two real packages on the table where the learner can pick them up.',
                'Write the four numbers big — 400 g, £2.20, 750 g, £4.35 — and nothing else.',
                'Let the guess sit there uncorrected. Do not hint.',
              ],
              studentDoes: ['Makes a prediction out loud and commits to it before any calculation.'],
              checks: [
                {
                  ask: 'What would you have to know to be certain, rather than just confident?',
                  lookFor: 'Some version of "what one gram costs" or "the price for the same amount of each".',
                  ifStuck: 'Ask: "If both boxes were exactly 100 grams, would this be easy?" Then: "So what are we trying to do to these numbers?"',
                },
              ],
              tip: 'Use real packages if you possibly can. A twelve-year-old will argue with a made-up problem and engage with a real one, and the shop shelf is a genuinely contested space in their life.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Walking Down the Double Number Line',
              minutes: 12,
              say: [
                'I am going to draw the relationship instead of computing it, because the picture keeps me honest.',
                'Top line: kilograms. Bottom line: pounds. The tick marks line up, and whatever is above is always paired with whatever is below.',
                'Let me use easier numbers first. 4 kilograms of apples costs £6. So I put 4 above and 6 below, on the same tick.',
                'Now halve it. Two kilograms above… three pounds below. Halve again: one kilogram above, one pound fifty below.',
                'Stop there. That last tick — one kilogram, one pound fifty — is the unit rate. £1.50 per kilogram.',
                'Notice what I did. I did not memorise a rule. I walked down the line until the top said one.',
                'And here is the bit people miss. There are two unit rates hiding in every rate. I can also walk until the BOTTOM says one: how many kilograms do I get for one pound? That is a different number and it answers a different question.',
              ],
              do: [
                'Draw the double number line slowly, marking the paired ticks as you go. Say both numbers out loud every time you mark a tick.',
                'Ring the 1-kilogram tick and write "unit rate" beside it.',
                'Then, on the same diagram, ring the tick where the money line reads 1 and mark that separately.',
              ],
              studentDoes: ['Copies the double number line and marks the two unit-rate ticks.'],
              checks: [
                {
                  ask: 'Which unit rate would I want if the question was "how much for 7 kilograms?"',
                  lookFor: 'The price per kilogram — £1.50 — because you multiply it by 7.',
                  ifStuck: 'Ask the question the other way: "If I have £10, how many kilos can I buy?" Then ask which of the two numbers helps with THAT one.',
                },
                {
                  ask: 'What does the tick above the 3 on the money line say?',
                  lookFor: '2 kilograms, read straight off the diagram rather than recalculated.',
                },
              ],
              tip: 'Resist teaching "divide the price by the weight" as the headline. It is true, and they will get there, but a learner who only has the rule cannot tell which number to divide by when the units are unfamiliar.',
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Settling the Cereal Argument',
              minutes: 12,
              say: [
                'Back to the cereal. Your turn to drive. I will only ask questions.',
                'Set up your double number line for the small box. Grams on top, pounds underneath.',
                '400 grams and £2.20 on the same tick. Now get the top line down to 100 grams. What do you have to do?',
                'Divide by 4. So the bottom does what?',
                'Now do the big box the same way. 750 grams, £4.35. Get to 100 grams.',
                'Read me both numbers. Which box wins?',
                'So — were you right at the start? Say it out loud either way. Being wrong out loud is how this stops happening at the shop.',
              ],
              do: [
                'Hand over the calculator now. The arithmetic is not the learning objective in this beat.',
                'If they scale to 1 gram instead of 100 grams, let them. The awkward decimals will teach the lesson about choosing a convenient unit better than you can.',
                'Write both final unit prices side by side in a column so the comparison is a glance, not a calculation.',
              ],
              studentDoes: ['Computes both unit prices, compares them, and states which package is better value and by how much.'],
              checks: [
                {
                  ask: 'How much would you save on a kilogram by buying the better one?',
                  lookFor: 'A scaling step from the per-100-gram price up to per kilogram, then a subtraction.',
                  ifStuck: 'Point at the double number line and ask what tick is missing. Do not supply the arithmetic.',
                },
                {
                  ask: 'Why did we both go to 100 grams instead of 1 gram?',
                  lookFor: 'Because per gram gives fractions of a penny that are hard to compare; 100 grams keeps the numbers readable.',
                },
              ],
              tip: 'If the big box does turn out to be better value, do not treat the hook as failed. Ask what would have to change about the prices for the small box to win, and let them construct it. That is the same reasoning running backwards.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 18,
              say: [
                'Now the page. Three sections, and they get harder on purpose.',
                'First one is straight unit rate — fill the double number line and find the price for one.',
                'Second one is the ratio table. Watch for the row where the first number is 1. That row is doing something special and I want you to notice what.',
                'Third one is the trap section. Two of those questions want the price per item and two of them want the number of items per pound. Read them twice before you calculate.',
                'When you plot the pairs on the grid at the end, do not join the dots up until you have looked at them. Then tell me what you notice.',
              ],
              do: [
                'Read every set of directions aloud. Do not assume they read the page.',
                'Leave the room, or at least look away, for the trap section. Rescuing them costs you the diagnostic.',
              ],
              studentDoes: ['Completes the worksheet independently, including the plotted graph of equivalent ratios.'],
              checks: [
                {
                  ask: 'On the graph, what is special about the point where x is 1?',
                  lookFor: 'Its y-value is the unit rate; every other point is a multiple of it.',
                },
                {
                  ask: 'Show me a question on this page where the unit rate is NOT a price.',
                  lookFor: 'The speed or the items-per-pound item, correctly identified with its units named.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Name the Units or It Means Nothing',
              minutes: 5,
              say: [
                'Last thing, and it is the thing that will save you marks for the next six years.',
                'I say "the unit rate is 1.5". Is that useful?',
                'No. One point five what? Pounds per kilo? Kilos per pound? Miles per hour? A unit rate without its units is just a number lying around.',
                'So the rule for the rest of the year: every rate you write gets the word "per" and both units. Every time.',
                'Say me one rate from today, out loud, with the units in it.',
              ],
              do: ['Write "____ per ____" on a card and stick it on the wall for the rest of the unit.'],
              studentDoes: ['States a unit rate from the lesson in full, with both units named.'],
              checks: [
                {
                  ask: 'Give me the same relationship as a rate the other way round, with its units.',
                  lookFor: 'The reciprocal rate with the units correctly swapped, e.g. kilograms per pound.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g6-math-u1-l3-ws',
            title: 'What One of Them Costs',
            style: 'manipulative',
            prepNotes:
              'The double number lines and the grid must print with straight, evenly spaced tick marks — check the printout before handing it over, because a squashed number line makes the whole page harder than it should be. Allow the calculator from section 2 onwards; the arithmetic is not what is being assessed here.',
            sections: [
              {
                id: 's1',
                title: 'Walk It Down to One',
                directions:
                  'Write the two quantities on the matching ticks of the double number line, then keep halving or dividing until the top line reads 1. Write the unit rate underneath, with its units.',
                layout: 'column',
                items: [
                  '6 metres of ribbon costs £4.50. Find the price per metre.',
                  'A car travels 180 kilometres in 3 hours. Find the speed in kilometres per hour.',
                  '8 identical pencils cost £2.40. Find the price per pencil.',
                  'A tap fills 15 litres in 4 minutes. Find the litres per minute. (This one does not come out whole — that is fine.)',
                ],
                images: [
                  {
                    id: 'img-dnl-blank',
                    slot: 'Section 1 — blank double number line',
                    purpose:
                      'The learner needs a geometrically correct double number line to write into. Drawing their own consumes the lesson time and the uneven spacing then hides the proportional structure the diagram exists to reveal.',
                    subject:
                      'a blank double number line: two long parallel horizontal lines one above the other, each carrying seven short vertical tick marks that align exactly with the tick marks on the other line',
                    count: 7,
                    composition:
                      'the two horizontal lines run the full width of the frame with a generous gap between them, exactly seven tick marks on each line, tick marks evenly spaced at identical intervals and perfectly vertically aligned between the upper and lower line, a clear blank writing space above the top line and below the bottom line',
                    mustInclude: [
                      'exactly seven tick marks on each of the two lines',
                      'tick marks on the upper and lower lines vertically aligned in matched pairs',
                      'perfectly even spacing between consecutive tick marks',
                      'clear empty space above and below for handwriting',
                    ],
                    mustAvoid: [
                      'any numbers, digits or labels anywhere on the diagram',
                      'arrowheads that suggest the line only runs one way',
                      'unequal tick spacing',
                      'a third line or any grid',
                    ],
                    aspect: '4:1',
                    altText: 'A blank double number line with seven aligned tick marks on each of two parallel lines',
                  },
                ],
                writingLines: 4,
              },
              {
                id: 's2',
                title: 'The Ratio Table and the Special Row',
                directions:
                  'Fill in the ratio table for this relationship: 5 kilograms of flour costs £4. Use the columns for 5 kg, 10 kg, 1 kg, 3 kg, 20 kg and 0.5 kg. Then answer: which column is the unit rate, and how could you get every other column from it?',
                layout: 'full',
                items: [
                  'Column headings to use, in this order: 5 kg, 10 kg, 1 kg, 3 kg, 20 kg, 0.5 kg.',
                  'Which column is the unit rate?',
                  'Explain how you could rebuild the whole table using only that one column.',
                ],
                images: [
                  {
                    id: 'img-ratio-table-blank',
                    slot: 'Section 2 — blank two-row ratio table',
                    purpose:
                      'A pre-drawn table stops learners from squeezing six columns into three and losing the alignment, which is the only thing that makes a ratio table readable as a set of paired values rather than a list of sums.',
                    subject:
                      'an empty two-row table grid with six equal columns, drawn as a plain rectangular grid with clean ruled lines',
                    count: 6,
                    composition:
                      'a wide rectangle divided into exactly two horizontal rows of equal height and exactly six vertical columns of equal width, all twelve cells completely empty, ruled lines of even weight, cells tall enough to write a number and a unit inside',
                    mustInclude: [
                      'exactly six columns and exactly two rows, giving twelve empty cells',
                      'all cells completely empty',
                      'columns of equal width and rows of equal height',
                      'a clearly visible outer border',
                    ],
                    mustAvoid: [
                      'any numbers, headings or text in any cell',
                      'a shaded header row',
                      'a third row',
                      'columns of unequal width',
                    ],
                    aspect: '3:1',
                    altText: 'An empty ratio table with two rows and six columns',
                  },
                  {
                    id: 'img-tape-diagram-3-5',
                    slot: 'Section 2 — tape diagram for a 3 to 5 ratio',
                    purpose:
                      'The tape diagram makes the shared unit visible: every segment in both bars is the same size, which is exactly the fact that makes scaling legitimate and adding illegitimate. Learners who only meet tables tend to lose this.',
                    subject:
                      'a tape diagram of two stacked horizontal bars: the upper bar divided into three equal segments and the lower bar divided into five equal segments, every segment in both bars exactly the same width as every other',
                    count: 8,
                    composition:
                      'two bars of equal height stacked with a small gap between them and left-aligned at the same starting edge, the upper bar three segments long and the lower bar five segments long, internal dividing lines clearly drawn, every one of the eight segments identical in width so the upper bar is visibly three-fifths the length of the lower bar, all segments unshaded',
                    mustInclude: [
                      'exactly three segments in the upper bar and exactly five in the lower bar, eight segments in total',
                      'every segment exactly the same width across both bars',
                      'both bars left-aligned at the same vertical edge',
                    ],
                    mustAvoid: [
                      'numbers, labels or text on or beside the bars',
                      'segments of differing widths',
                      'shading or colour fill that would stop the learner writing inside a segment',
                      'the two bars drawn at different heights or centred rather than left-aligned',
                    ],
                    aspect: '3:1',
                    altText: 'A tape diagram with a three-segment bar above a five-segment bar, all segments equal',
                  },
                ],
                writingLines: 3,
              },
              {
                id: 's3',
                title: 'Read It Twice',
                directions:
                  'Two of these questions want a price per item. Two of them want items per pound. Underline the words that tell you which, then answer.',
                layout: 'column',
                items: [
                  '12 bread rolls cost £3.60. What does one roll cost?',
                  '12 bread rolls cost £3.60. How many rolls could you buy with £1?',
                  'A 2-litre bottle of juice costs £2.50. What is the price per litre?',
                  'A 2-litre bottle of juice costs £2.50. How many litres do you get per pound?',
                  'Which pair of answers are reciprocals of each other, and why does that make sense?',
                ],
                images: [
                  {
                    id: 'img-two-boxes',
                    slot: 'Section 3 — two package sizes',
                    purpose:
                      'Anchors the abstract rate work back to the shelf. The two packages must be obviously the same product at different sizes, so the only variable in play is the amount, and the worksheet can supply the prices without the picture contradicting them.',
                    subject:
                      'two plain rectangular cardboard cereal boxes standing side by side, identical in shape and surface design but clearly different in size, the left one small and the right one roughly twice as tall and wider',
                    count: 2,
                    composition:
                      'both boxes standing upright on a common baseline against plain white space, viewed straight on from the front, clearly separated with a gap between them, the size difference unmistakable at a glance',
                    mustInclude: [
                      'exactly two boxes',
                      'both boxes the same plain design so they read as the same product',
                      'an obvious and large difference in size between them',
                    ],
                    mustAvoid: [
                      'any writing, branding, barcodes, weights or price labels on the boxes',
                      'a shelf, trolley or shop background',
                      'a third package',
                      'boxes drawn at an angle that makes the relative sizes ambiguous',
                    ],
                    aspect: '4:3',
                    altText: 'Two plain cereal boxes of very different sizes side by side',
                    style: 'flat-vector',
                  },
                ],
                writingLines: 5,
              },
              {
                id: 's4',
                title: 'Plot the Pairs',
                directions:
                  'Plot the pairs from your flour table on the grid: kilograms across, pounds up. Label the axes yourself, choosing a scale that fits. Then answer the question underneath.',
                layout: 'full',
                items: [
                  'What do you notice about the points?',
                  'Put your finger on the point where the horizontal axis reads 1. What is special about it?',
                  'Without plotting it, where would the point for 8 kilograms sit? Explain how you know.',
                ],
                images: [
                  {
                    id: 'img-first-quadrant-grid',
                    slot: 'Section 4 — blank first-quadrant grid',
                    purpose:
                      'Learners plot equivalent ratios and discover they fall in a straight line through the origin. The grid must be unlabelled so that choosing and writing the scale is part of the task rather than something done for them.',
                    subject:
                      'a blank first-quadrant coordinate grid: a square grid of fine squares with a heavier horizontal axis along the bottom and a heavier vertical axis up the left side, meeting at the bottom-left corner',
                    count: 10,
                    composition:
                      'exactly ten equal intervals along the horizontal axis and exactly ten along the vertical axis, forming a ten by ten array of identical squares, axis lines noticeably heavier than the internal grid lines, a short tick mark at every interval on both axes, generous blank margin outside the axes for handwritten labels',
                    mustInclude: [
                      'exactly ten equal intervals on each axis',
                      'perfectly square cells',
                      'axes drawn heavier than the internal grid lines',
                      'a blank margin outside both axes wide enough to write numbers in',
                    ],
                    mustAvoid: [
                      'any numbers, letters or axis labels',
                      'plotted points, dots or a line of best fit',
                      'negative regions or a second or third quadrant',
                      'grid squares that are rectangular rather than square',
                    ],
                    aspect: '1:1',
                    altText: 'A blank ten by ten first-quadrant coordinate grid with unlabelled axes',
                  },
                ],
              },
            ],
            answerKey: [
              'Section 1: £0.75 per metre; 60 kilometres per hour; £0.30 per pencil; 3.75 litres per minute.',
              'Section 2 table: 5 kg → £4.00; 10 kg → £8.00; 1 kg → £0.80; 3 kg → £2.40; 20 kg → £16.00; 0.5 kg → £0.40. The 1 kg column is the unit rate. Every other column is that column multiplied by the number of kilograms.',
              'Section 2 tape diagram: accept any correct labelling that keeps all eight segments equal in value.',
              'Section 3: £0.30 per roll; 3⅓ rolls per pound; £1.25 per litre; 0.8 litres per pound. Each pair are reciprocals because they describe the same relationship read in opposite directions — pounds for one roll, and rolls for one pound.',
              'Section 4: the points lie on a straight line through the origin. At x = 1 the y-value is the unit rate, £0.80. The point for 8 kg sits at (8, 6.40), on the same straight line — eight times the unit-rate point.',
            ],
          },
          assessment: {
            successCriteria: [
              'Finds a unit rate by scaling a quantity to 1 rather than by recalling a rule.',
              'States every rate with the word "per" and both units.',
              'Chooses the correct one of the two possible unit rates for a given question.',
              'Recognises that plotted equivalent ratios lie on a straight line through the origin.',
            ],
            exitTicket:
              'Say: "Nine tennis balls cost £13.50." Ask for two different unit rates from that sentence, each with its units, and one sentence saying which question each one answers. Two correct rates with units is a secure result; one correct rate is developing.',
            rubric: [
              { level: 'emerging', descriptor: 'Divides two numbers and reports a bare figure, often the wrong way round, with no units attached.' },
              { level: 'developing', descriptor: 'Finds the price-per-item unit rate reliably but cannot produce or interpret the reciprocal rate, and drops units under pressure.' },
              { level: 'secure', descriptor: 'Moves between double number line, table and graph, produces both unit rates with correct units, and selects the appropriate one for the question asked.' },
            ],
          },
          differentiation: {
            support: [
              'Stay with rates that halve cleanly — 8 for £12, 4 for £6, 2 for £3, 1 for £1.50. Repeated halving down to one is the whole idea and does not need awkward numbers to teach it.',
              'Pre-draw the double number line on every problem rather than asking for it to be drawn each time.',
              'Cover the second unit rate entirely for now. One direction, done confidently, beats two done vaguely.',
            ],
            extension: [
              'Introduce the constant of proportionality: the unit rate is the number you multiply x by to get y, which is the equation y = kx a year early.',
              'Give a rate with awkward numbers — 7 items for £11.55 — where scaling by halving fails and division is the only route.',
              'Ask them to design a supermarket offer that makes the small package look better value than it is, then explain the trick.',
            ],
            language: [
              'The word "per" is doing enormous work and has no obvious cognate in many languages. Teach it as a synonym for "for every one" and use both phrasings interchangeably for a fortnight.',
              'Practise reading rate sentences aloud with the units included, so the units become part of the spoken answer rather than an afterthought written at the end.',
            ],
          },
          misconceptions: [
            {
              misconception: 'The unit rate is just the two numbers divided, and it does not matter which way round.',
              looksLike: 'For "£6 for 4 kg" the learner writes 0.667 and cannot say whether that is pounds or kilograms.',
              correction: 'Force the units into the division: pounds ÷ kilograms gives pounds per kilogram. Say the units aloud while writing the division bar, every time, until it is automatic.',
            },
            {
              misconception: 'The bigger package always has the lower unit price.',
              looksLike: 'The learner announces the answer before calculating and then adjusts their arithmetic when it disagrees.',
              correction: 'Find a real counter-example on a real shelf. One genuine case where the small pack wins does more than any amount of explanation.',
            },
            {
              misconception: 'A rate and a ratio are the same thing, so units can be ignored.',
              looksLike: 'The learner treats 3 boys to 2 girls and 3 pounds per 2 kilograms as identical objects and is surprised that only one of them has a meaningful "per one" value in pounds.',
              correction: 'Sort a pile of statements into "same units on both sides" and "different units". Only the second group produces a rate, and the sorting makes the distinction concrete.',
            },
            {
              misconception: 'Scaling a ratio means adding the same amount to both quantities.',
              looksLike: 'On the double number line the learner marks 4 and 6, then 5 and 7, then 6 and 8.',
              correction: 'Plot both versions on the grid in section 4. The correct scaling is a straight line through the origin; the additive version is a line that misses it. The picture settles the argument.',
            },
          ],
          homeExtension: [
            'Give them the phone at the supermarket and let them decide which size to buy, out loud, with the reasoning. Once a week is enough.',
            'On a car journey, work out the average speed from the distance sign and the clock, then predict the arrival time and check it.',
            'Compare the cost per hour of two things the family pays for monthly — a streaming service against a swimming pass — and argue about which is better value. The argument is the point.',
          ],
          teacherNotes:
            'The genuinely hard part of this lesson is not the arithmetic, it is the direction. Almost every learner can divide; far fewer can say which quantity goes on top and why. If you are short of time, cut the graph in section 4 rather than the reciprocal-rate work in section 3 — the graph reappears in Grade 7 with proper support, whereas choosing the right unit rate is what makes the rest of this unit possible. Also: do not be tempted to teach cross-multiplication here. It is fast, it works, and it will erase every trace of the reasoning you have just built.',
        },

        {
          id: 'g6-math-u1-l4',
          unitId: 'g6-math-u1',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 4,
          status: 'outline',
          title: 'Comparing Rates: Which Is the Better Deal?',
          essentialQuestion: 'How do I compare situations that use different amounts?',
          summary:
            'Applies unit rate to comparison problems: best buy, fastest runner, most efficient car. The emphasis is on choosing a common basis for comparison and justifying it in writing.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.RP.A.3.B', framework: 'CCSS-M', text: 'Solve unit rate problems including those involving unit pricing and constant speed.' },
          ],
          objectives: [
            'I can compare two rates by converting both to the same unit rate.',
            'I can write a justification that names the unit rate I used and why.',
          ],
          vocabulary: [
            { term: 'better value', definition: 'A lower cost for the same amount, judged by unit price rather than by total price.' },
            { term: 'constant speed', definition: 'A rate of travel that does not change, so distance and time scale together.' },
          ],
          materials: ['Supermarket receipts or online shopping screenshots', 'Calculator', 'The printed worksheet'],
          prep: ['Collect three or four real price comparisons in advance, including one where the answer is genuinely close.'],
          script: [],
          worksheet: { id: 'g6-math-u1-l4-ws', title: 'Which Is the Better Deal?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Converts both quantities to a common unit rate before comparing.', 'Writes a justification naming the rate used.'],
            exitTicket: 'Runner A does 5 km in 24 minutes; runner B does 8 km in 40 minutes. Who is faster, and what rate did you use to decide?',
          },
          differentiation: {
            support: ['Provide a two-column comparison frame with the unit-rate row already labelled.'],
            extension: ['Introduce a case where the better value depends on how much you actually need — buying 12 when the bulk pack contains 40.'],
          },
          misconceptions: [
            {
              misconception: 'The cheaper total price is the better deal.',
              looksLike: 'The learner picks the small pack because it costs less at the till, ignoring quantity entirely.',
              correction: 'Ask what they would pay to end up with the same amount of product from each option. That forces a common basis.',
            },
          ],
          homeExtension: ['Compare the cost per wash of two washing-up liquids, or the cost per portion of two ready meals.'],
        },
        {
          id: 'g6-math-u1-l5',
          unitId: 'g6-math-u1',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 5,
          status: 'outline',
          title: 'Percent as a Rate per Hundred',
          essentialQuestion: 'What is a percentage really a ratio of?',
          summary:
            'Percent is reframed as a rate per 100 rather than a separate topic. Learners find a percent of a quantity, and — harder and more useful — find the whole given a part and the percent.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.RP.A.3.C', framework: 'CCSS-M', text: 'Find a percent of a quantity as a rate per 100; solve problems involving finding the whole given a part and the percent.' },
          ],
          objectives: [
            'I can write a percentage as a ratio out of 100 and as a decimal.',
            'I can find a percent of a quantity using a double number line or a table.',
            'I can find the whole when I know a part and its percentage.',
          ],
          vocabulary: [
            { term: 'percent', definition: 'A rate per hundred. 35% means 35 for every 100.' },
            { term: 'the whole', definition: 'The quantity that counts as 100%.' },
          ],
          materials: ['A 10 by 10 grid printed several times', 'Calculator', 'The printed worksheet'],
          prep: ['Print at least six blank hundred-grids. Shading them is the fastest route to the "per 100" idea.'],
          script: [],
          worksheet: { id: 'g6-math-u1-l5-ws', title: 'Out of a Hundred', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Finds a percent of a quantity accurately.', 'Reconstructs the whole from a part and a percentage.'],
            exitTicket: '18 is 30% of what number? The reverse question is the one that separates understanding from procedure.',
          },
          differentiation: {
            support: ['Stay with 10%, 25%, 50% and their combinations. Building 35% as 25% plus 10% is real reasoning, not a shortcut.'],
            extension: ['Percentage increase and decrease, and why a 20% rise followed by a 20% fall does not return you to where you started.'],
          },
          misconceptions: [
            {
              misconception: 'A percentage is a fixed amount rather than a proportion of something.',
              looksLike: 'The learner says 50% is "a half of a hundred", so 50% of 80 is 50.',
              correction: 'Always name the whole out loud before calculating: "50% of WHAT?" Make the question a reflex.',
            },
          ],
          homeExtension: ['Work out the discount on a sale item before reaching the till, then check against the receipt.'],
        },
        {
          id: 'g6-math-u1-l6',
          unitId: 'g6-math-u1',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 6,
          status: 'outline',
          title: 'Converting Units with Ratio Reasoning',
          essentialQuestion: 'Why does multiplying by a fraction that equals 1 change the units but not the amount?',
          summary:
            'Unit conversion treated as ratio reasoning rather than as a table to memorise. Learners build conversion factors and check that the unwanted unit cancels — the habit that makes science calculations survivable.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.RP.A.3.D', framework: 'CCSS-M', text: 'Use ratio reasoning to convert measurement units; manipulate and transform units appropriately when multiplying or dividing quantities.' },
          ],
          objectives: [
            'I can write a conversion factor as a ratio equal to 1.',
            'I can convert between units by multiplying and check that the units cancel.',
          ],
          vocabulary: [
            { term: 'conversion factor', definition: 'A ratio of two equal quantities in different units, such as 100 cm to 1 m, which equals 1.' },
            { term: 'cancel', definition: 'When the same unit appears on the top and the bottom of a calculation and disappears from the answer.' },
          ],
          materials: ['A metre rule and a tape measure with both metric and imperial markings', 'The printed worksheet'],
          prep: ['Have a physical measurement ready that the learner can convert and then verify against the other scale on the tape.'],
          script: [],
          worksheet: { id: 'g6-math-u1-l6-ws', title: 'Same Amount, Different Units', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Sets up a conversion so the unwanted unit cancels.', 'Judges whether an answer should be larger or smaller before computing it.'],
            exitTicket: 'Convert 2.5 hours into minutes, and 4500 metres into kilometres. Ask which answer should be the bigger number and why, before either is worked out.',
          },
          differentiation: {
            support: ['Ask "should this get bigger or smaller?" before every conversion. It catches most of the errors on its own.'],
            extension: ['Two-step conversions such as metres per second into kilometres per hour.'],
          },
          misconceptions: [
            {
              misconception: 'Converting always means multiplying, or always means dividing.',
              looksLike: 'The learner multiplies by 1000 to turn metres into kilometres.',
              correction: 'Predict the direction first — more small units, fewer big ones — then choose the operation to match the prediction.',
            },
          ],
          homeExtension: ['Convert a recipe from cups to millilitres, or a journey from miles to kilometres, and sanity-check the size of the answer.'],
        },
      ],
    },

    /* ============================================================ UNIT 2 */
    {
      id: 'g6-math-u2',
      gradeId: 'g6',
      subjectId: 'math',
      sequence: 2,
      title: 'The Number System: Fractions, Fluency and Factors',
      bigIdea:
        'Dividing by a fraction asks how many of that fraction fit inside — and once you can see that, the invert-and-multiply rule stops being magic.',
      description:
        'This unit closes out the arithmetic of the primary years. Fraction division is the conceptual centrepiece and the piece most adults were never taught to understand. Alongside it, learners reach fluency with the standard algorithms for multi-digit division and all four decimal operations, and use greatest common factor and least common multiple as tools rather than as vocabulary.',
      weeks: 6,
      standards: [
        { code: 'CCSS.MATH.CONTENT.6.NS.A.1', framework: 'CCSS-M', text: 'Interpret and compute quotients of fractions, and solve word problems involving division of fractions by fractions, e.g. by using visual fraction models and equations to represent the problem.' },
        { code: 'CCSS.MATH.CONTENT.6.NS.B.2', framework: 'CCSS-M', text: 'Fluently divide multi-digit numbers using the standard algorithm.' },
        { code: 'CCSS.MATH.CONTENT.6.NS.B.3', framework: 'CCSS-M', text: 'Fluently add, subtract, multiply and divide multi-digit decimals using the standard algorithm for each operation.' },
        { code: 'CCSS.MATH.CONTENT.6.NS.B.4', framework: 'CCSS-M', text: 'Find the greatest common factor of two whole numbers less than or equal to 100 and the least common multiple of two whole numbers less than or equal to 12; use the distributive property to express a sum of two whole numbers with a common factor as a multiple of a sum of two whole numbers with no common factor.' },
      ],
      lessonTitles: [
        'How Many Fit Inside? Dividing by a Fraction',
        'Why Invert and Multiply Actually Works',
        'Fraction Division in Real Problems',
        'Fluent Long Division with Multi-Digit Numbers',
        'Decimal Operations with the Standard Algorithms',
        'GCF, LCM and Factoring Out',
      ],
      performanceTask:
        'The Recipe Scaling Job: given a recipe written in fractional quantities and a fixed amount of one ingredient in the cupboard, the learner determines the largest whole number of batches possible, writes the shopping list for the rest, and shows the fraction division that justifies each figure.',
      lessons: [
        {
          id: 'g6-math-u2-l1',
          unitId: 'g6-math-u2',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 1,
          status: 'outline',
          title: 'How Many Fit Inside? Dividing by a Fraction',
          essentialQuestion: 'What question is a division by a fraction actually asking?',
          summary:
            'Reframes division as measurement: 3 ÷ ¼ asks how many quarters fit into 3. Learners answer fraction division questions with strips and diagrams before any procedure is introduced, so the surprising result — the answer is bigger than what you started with — is discovered rather than announced.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.A.1', framework: 'CCSS-M', text: 'Interpret and compute quotients of fractions, and solve word problems involving division of fractions by fractions, e.g. by using visual fraction models.' },
          ],
          objectives: [
            'I can read a division by a fraction as "how many of these fit inside that".',
            'I can solve a fraction division with a diagram and explain the answer.',
            'I can say why dividing by a number less than 1 makes the answer bigger.',
          ],
          vocabulary: [
            { term: 'quotient', definition: 'The answer to a division.' },
            { term: 'measurement division', definition: 'Division that asks how many groups of a given size fit into a total.' },
          ],
          materials: ['Paper fraction strips or a strip of paper to fold', 'Coloured pencils', 'The printed worksheet'],
          prep: ['Fold a strip into quarters yourself first so you can demonstrate without fumbling.'],
          script: [],
          worksheet: { id: 'g6-math-u2-l1-ws', title: 'How Many Fit Inside?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Represents a fraction division with a diagram.', 'Predicts correctly whether the answer will be larger or smaller than the dividend.'],
            exitTicket: 'Ask: how many two-thirds are in 4? Then ask why the answer is bigger than 4.',
          },
          differentiation: {
            support: ['Start with whole numbers divided by unit fractions before either number is a non-unit fraction.'],
            extension: ['Handle a case with a remainder, such as 5 ÷ ⅔, and interpret what the leftover part means in context.'],
          },
          misconceptions: [
            {
              misconception: 'Dividing always makes things smaller.',
              looksLike: 'The learner computes 3 ÷ ¼ = 0.75 because a division "should" shrink.',
              correction: 'Do it physically. Cut three sheets of paper into quarters and count the pieces. Twelve pieces settles it.',
            },
          ],
          homeExtension: ['While cooking, ask how many quarter-cup scoops fill a two-cup jug, then check by scooping.'],
        },
        {
          id: 'g6-math-u2-l2',
          unitId: 'g6-math-u2',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 2,
          status: 'outline',
          title: 'Why Invert and Multiply Actually Works',
          essentialQuestion: 'Where does flipping the second fraction come from?',
          summary:
            'Derives the reciprocal rule from the diagrams built in the previous lesson, using common denominators as the bridge. The rule is earned rather than issued, which matters because it is one of the most-memorised and least-understood procedures in school mathematics.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.A.1', framework: 'CCSS-M', text: 'Interpret and compute quotients of fractions, and solve word problems involving division of fractions by fractions, using visual fraction models and equations.' },
          ],
          objectives: [
            'I can divide two fractions using the reciprocal.',
            'I can explain, with a diagram, why the reciprocal method gives the right answer.',
          ],
          vocabulary: [
            { term: 'reciprocal', definition: 'The fraction turned upside down. The reciprocal of ¾ is 4/3.' },
            { term: 'common denominator', definition: 'The same bottom number on both fractions, so the parts being counted are the same size.' },
          ],
          materials: ['Fraction strips', 'The printed worksheet'],
          prep: ['Work through ½ ÷ ⅛ by the common-denominator route yourself before teaching it. It is the step that makes the rule visible.'],
          script: [],
          worksheet: { id: 'g6-math-u2-l2-ws', title: 'Earning the Rule', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Divides fractions correctly using the reciprocal.', 'Gives a reason for the method beyond "that is the rule".'],
            exitTicket: 'Compute ⅗ ÷ ¼ and write one sentence saying why flipping the ¼ is allowed.',
          },
          differentiation: {
            support: ['Keep the common-denominator method as the main route and treat the reciprocal as the shortcut, not the other way round.'],
            extension: ['Divide mixed numbers, and divide a fraction by a whole number, checking the direction of the result each time.'],
          },
          misconceptions: [
            {
              misconception: 'You flip the first fraction, or you flip both.',
              looksLike: 'The learner computes ⅔ ÷ ¾ as 3/2 × 3/4.',
              correction: 'Estimate first. ⅔ ÷ ¾ must be a bit less than 1 because ¾ is slightly bigger than ⅔. Any answer far from 1 is caught before it is written down.',
            },
          ],
          homeExtension: ['Set two fraction divisions at breakfast and demand an estimate before the calculation.'],
        },
        {
          id: 'g6-math-u2-l3',
          unitId: 'g6-math-u2',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 3,
          status: 'outline',
          title: 'Fraction Division in Real Problems',
          essentialQuestion: 'How do I tell whether a word problem needs division at all?',
          summary:
            'Word problems where the operation is not signalled. Learners sort problems by structure — how many groups, how big is each group, how much is one whole — and write the equation before touching the arithmetic.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.A.1', framework: 'CCSS-M', text: 'Solve word problems involving division of fractions by fractions, e.g. by using visual fraction models and equations to represent the problem.' },
          ],
          objectives: [
            'I can write the equation for a fraction word problem before solving it.',
            'I can decide whether a situation calls for multiplication or division.',
          ],
          vocabulary: [
            { term: 'dividend', definition: 'The amount being divided up.' },
            { term: 'divisor', definition: 'The size of each group, or the number of groups.' },
          ],
          materials: ['The printed worksheet', 'Scrap paper for diagrams'],
          prep: ['Choose contexts the learner actually cares about — ribbon, screen time, running distances, portions of food.'],
          script: [],
          worksheet: { id: 'g6-math-u2-l3-ws', title: 'What Is the Question Asking?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Writes a correct equation for a worded situation.', 'Interprets the answer in context, including any remainder.'],
            exitTicket: 'A ribbon is 4½ m long. Each bow needs ¾ m. How many bows? Ask what the answer means before asking what it is.',
          },
          differentiation: {
            support: ['Give the equation and ask only for the interpretation. Splitting the two demands halves the difficulty.'],
            extension: ['Write a word problem of their own for a given equation. Producing one is harder than solving three.'],
          },
          misconceptions: [
            {
              misconception: 'The bigger number always goes first in the division.',
              looksLike: 'For "how many ¾ m in 4½ m" the learner writes 4½ ÷ ¾ correctly, but for "⅓ of a metre split into ¾-metre pieces" they still put the larger number first.',
              correction: 'Return to the "how many fit inside" phrasing every time. The thing being fitted goes second.',
            },
          ],
          homeExtension: ['Divide a leftover portion into fractional servings and state the equation aloud before serving.'],
        },
        {
          id: 'g6-math-u2-l4',
          unitId: 'g6-math-u2',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 4,
          status: 'outline',
          title: 'Fluent Long Division with Multi-Digit Numbers',
          essentialQuestion: 'How do I divide large numbers reliably and know the answer is sensible?',
          summary:
            'Fluency with the standard long division algorithm, paired with estimation as a permanent check. Speed is not the goal; a learner who estimates first will catch the misplaced digit that the algorithm alone will not.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.B.2', framework: 'CCSS-M', text: 'Fluently divide multi-digit numbers using the standard algorithm.' },
          ],
          objectives: [
            'I can divide a four-digit number by a two-digit number using the standard algorithm.',
            'I can estimate the answer first and use the estimate to check my work.',
          ],
          vocabulary: [
            { term: 'remainder', definition: 'What is left over when the division does not come out exactly.' },
            { term: 'estimate', definition: 'A rough answer found quickly with friendly numbers, used to check the exact one.' },
          ],
          materials: ['Squared paper — the columns keep the digits aligned', 'The printed worksheet'],
          prep: ['Insist on squared paper. Most long division errors at this age are alignment errors, not arithmetic errors.'],
          script: [],
          worksheet: { id: 'g6-math-u2-l4-ws', title: 'Long Division, Checked', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Completes multi-digit division accurately with aligned working.', 'Produces a sensible estimate before dividing.'],
            exitTicket: '3,876 ÷ 24. Ask for the estimate first, written down, then the exact answer.',
          },
          differentiation: {
            support: ['Build a times-table strip for the divisor before starting. It removes the guessing and leaves the algorithm.'],
            extension: ['Express remainders as fractions and as decimals, and say which form suits which context.'],
          },
          misconceptions: [
            {
              misconception: 'A digit can be skipped in the quotient when the divisor does not go into a partial dividend.',
              looksLike: 'The learner omits a zero in the middle of the answer, giving a result ten times too small.',
              correction: 'Estimate first. An answer that is out by a factor of ten is caught instantly by a rough estimate.',
            },
          ],
          homeExtension: ['Split a bill or a mileage figure by hand before checking on a phone.'],
        },
        {
          id: 'g6-math-u2-l5',
          unitId: 'g6-math-u2',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 5,
          status: 'outline',
          title: 'Decimal Operations with the Standard Algorithms',
          essentialQuestion: 'Where does the decimal point go, and how would I know if it were wrong?',
          summary:
            'All four operations with multi-digit decimals. Place value, not rule-following, decides where the point goes, and estimation is the check that catches everything else.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.B.3', framework: 'CCSS-M', text: 'Fluently add, subtract, multiply and divide multi-digit decimals using the standard algorithm for each operation.' },
          ],
          objectives: [
            'I can add, subtract, multiply and divide decimals accurately.',
            'I can justify the position of the decimal point using estimation.',
          ],
          vocabulary: [
            { term: 'place value', definition: 'What each digit is worth because of where it sits.' },
            { term: 'tenths, hundredths, thousandths', definition: 'The place-value columns to the right of the decimal point.' },
          ],
          materials: ['Squared paper', 'A price list or receipt with realistic decimals', 'The printed worksheet'],
          prep: ['Have real prices to work with. Money makes the decimal point matter in a way that abstract decimals do not.'],
          script: [],
          worksheet: { id: 'g6-math-u2-l5-ws', title: 'Where Does the Point Go?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Aligns decimal points correctly when adding and subtracting.', 'Places the decimal point in a product or quotient and justifies it by estimation.'],
            exitTicket: '4.6 × 0.35. Ask for a rough answer first — is it near 1.6 or near 16? — and then the exact one.',
          },
          differentiation: {
            support: ['Rewrite every problem on squared paper with one digit per square. Misalignment causes most of the errors here.'],
            extension: ['Divide by a decimal by scaling both numbers up to whole numbers first, and explain why that is legitimate.'],
          },
          misconceptions: [
            {
              misconception: 'You line up the last digits when adding decimals, the way you do with whole numbers.',
              looksLike: '3.5 + 0.25 is computed as 3.75 sometimes and 0.60 other times, depending on the alignment used.',
              correction: 'Line up the decimal points and fill the gaps with zeros so both numbers have the same number of decimal places.',
            },
          ],
          homeExtension: ['Add up a shopping basket by hand before the till does it, and compare.'],
        },
        {
          id: 'g6-math-u2-l6',
          unitId: 'g6-math-u2',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 6,
          status: 'outline',
          title: 'GCF, LCM and Factoring Out',
          essentialQuestion: 'When would I ever need the biggest shared factor of two numbers?',
          summary:
            'Greatest common factor and least common multiple taught through problems that genuinely need them, then used to factor a sum with the distributive property — the first real taste of the algebra in Unit 4.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.B.4', framework: 'CCSS-M', text: 'Find the greatest common factor of two whole numbers less than or equal to 100 and the least common multiple of two whole numbers less than or equal to 12; use the distributive property to express a sum of two whole numbers with a common factor as a multiple of a sum of two whole numbers with no common factor.' },
          ],
          objectives: [
            'I can find the greatest common factor and least common multiple of two numbers.',
            'I can use the distributive property to rewrite 36 + 8 as 4 × (9 + 2).',
            'I can tell from a word problem whether it needs GCF or LCM.',
          ],
          vocabulary: [
            { term: 'greatest common factor', definition: 'The largest number that divides into both numbers exactly.' },
            { term: 'least common multiple', definition: 'The smallest number that both numbers divide into exactly.' },
            { term: 'distributive property', definition: 'a(b + c) = ab + ac — the rule that lets you take a common factor outside a bracket.' },
          ],
          materials: ['Squared paper for factor rectangles', 'The printed worksheet'],
          prep: ['Prepare two contrasting word problems — one that needs GCF (splitting into equal groups) and one that needs LCM (two events coinciding).'],
          script: [],
          worksheet: { id: 'g6-math-u2-l6-ws', title: 'Shared Factors, Shared Multiples', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Finds GCF and LCM accurately.', 'Rewrites a sum as a product using a common factor.', 'Chooses correctly between GCF and LCM for a worded situation.'],
            exitTicket: 'Rewrite 45 + 30 using the greatest common factor outside a bracket, and say what the GCF is.',
          },
          differentiation: {
            support: ['List all the factors of both numbers in full before choosing. Prime factorisation can wait.'],
            extension: ['Extend to three numbers, and to expressions with a variable such as 6x + 15.'],
          },
          misconceptions: [
            {
              misconception: 'GCF and LCM are interchangeable, or the LCM is always the product of the two numbers.',
              looksLike: 'The learner gives 24 as the LCM of 4 and 6.',
              correction: 'List the multiples of both in two rows and ring the first one that appears in both. Seeing 12 arrive before 24 fixes it.',
            },
          ],
          homeExtension: ['Work out when two repeating events coincide — a bin collection every 2 weeks and a club every 3 weeks.'],
        },
      ],
    },

    /* ============================================================ UNIT 3 */
    {
      id: 'g6-math-u3',
      gradeId: 'g6',
      subjectId: 'math',
      sequence: 3,
      title: 'Rational Numbers and the Coordinate Plane',
      bigIdea:
        'The number line does not stop at zero, and the grid does not stop at the corner — extending both in the other direction gives every number a place and every place a pair of numbers.',
      description:
        'Negative numbers arrive as directions and opposites rather than as "numbers less than nothing". Learners order rational numbers, separate absolute value from order (the single hardest idea in the unit), and extend the coordinate plane into all four quadrants, using it to find distances and to reflect points.',
      weeks: 5,
      standards: [
        { code: 'CCSS.MATH.CONTENT.6.NS.C.5', framework: 'CCSS-M', text: 'Understand that positive and negative numbers are used together to describe quantities having opposite directions or values; use positive and negative numbers to represent quantities in real-world contexts, explaining the meaning of 0 in each situation.' },
        { code: 'CCSS.MATH.CONTENT.6.NS.C.6', framework: 'CCSS-M', text: 'Understand a rational number as a point on the number line; extend number line diagrams and coordinate axes to represent points on the line and in the plane with negative number coordinates.' },
        { code: 'CCSS.MATH.CONTENT.6.NS.C.7', framework: 'CCSS-M', text: 'Understand ordering and absolute value of rational numbers.' },
        { code: 'CCSS.MATH.CONTENT.6.NS.C.8', framework: 'CCSS-M', text: 'Solve real-world and mathematical problems by graphing points in all four quadrants of the coordinate plane, including using coordinates and absolute value to find distances between points with the same first coordinate or the same second coordinate.' },
      ],
      lessonTitles: [
        'Numbers Below Zero: Opposites and Direction',
        'Placing Rational Numbers on the Number Line',
        'Absolute Value: Distance from Zero',
        'Ordering Rational Numbers and Reading Inequalities',
        'The Coordinate Plane in Four Quadrants',
        'Reflections, Distance and Problems on the Grid',
      ],
      performanceTask:
        'The Dive Log: given a record of a diver’s depths, a submarine’s depth and the height of a cliff above the same water surface, the learner plots every value on a vertical number line, orders them, and answers questions that deliberately separate "lowest" from "furthest from the surface".',
      lessons: [
        {
          id: 'g6-math-u3-l1',
          unitId: 'g6-math-u3',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 1,
          status: 'outline',
          title: 'Numbers Below Zero: Opposites and Direction',
          essentialQuestion: 'What does a negative number actually mean in a real situation?',
          summary:
            'Negative numbers introduced through contexts with a genuine zero and two directions — temperature, sea level, bank balances, floors of a building. The meaning of zero in each context is the focus, because it is what makes the negatives meaningful.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.C.5', framework: 'CCSS-M', text: 'Understand that positive and negative numbers are used together to describe quantities having opposite directions or values; use positive and negative numbers to represent quantities in real-world contexts, explaining the meaning of 0 in each situation.' },
          ],
          objectives: [
            'I can use positive and negative numbers to describe opposite directions.',
            'I can explain what zero means in a given situation.',
            'I can name the opposite of any number.',
          ],
          vocabulary: [
            { term: 'opposite', definition: 'The number the same distance from zero but on the other side. The opposite of −7 is 7.' },
            { term: 'integer', definition: 'A whole number, positive, negative or zero.' },
          ],
          materials: ['A thermometer, or a picture of one', 'A vertical number line taped to the wall', 'The printed worksheet'],
          prep: ['Tape a vertical number line from −20 to 20 somewhere visible. Vertical is better than horizontal for the first lesson because up and down are already meaningful.'],
          script: [],
          worksheet: { id: 'g6-math-u3-l1-ws', title: 'Two Directions from Zero', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Represents a real quantity with a signed number.', 'States what zero means in a given context.'],
            exitTicket: 'In a lift, what does floor 0 mean? In a bank account, what does a balance of 0 mean? Ask for both.',
          },
          differentiation: {
            support: ['Stay with temperature only until the two directions are secure. One context, done properly.'],
            extension: ['Contexts where the zero is arbitrary, such as sea level or a calendar year, and a discussion of who chose it.'],
          },
          misconceptions: [
            {
              misconception: 'Negative numbers are just positive numbers with a minus sign for decoration, so −8 is bigger than −3.',
              looksLike: 'The learner orders −3, −8, −12 as if they were 3, 8, 12.',
              correction: 'Use the vertical thermometer. −12 degrees is lower on the wall than −3, and lower is colder. The physical direction carries it.',
            },
          ],
          homeExtension: ['Check the weather forecast for somewhere cold and order the week’s temperatures from coldest to warmest.'],
        },
        {
          id: 'g6-math-u3-l2',
          unitId: 'g6-math-u3',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 2,
          status: 'outline',
          title: 'Placing Rational Numbers on the Number Line',
          essentialQuestion: 'Where exactly does −2¾ sit?',
          summary:
            'Extends the number line to negative fractions and decimals. Learners partition intervals accurately and discover that the opposite of the opposite of a number is the number itself.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.C.6.A', framework: 'CCSS-M', text: 'Recognise opposite signs of numbers as indicating locations on opposite sides of 0 on the number line; recognise that the opposite of the opposite of a number is the number itself.' },
            { code: 'CCSS.MATH.CONTENT.6.NS.C.6.C', framework: 'CCSS-M', text: 'Find and position integers and other rational numbers on a horizontal or vertical number line diagram.' },
          ],
          objectives: [
            'I can place negative fractions and decimals accurately on a number line.',
            'I can explain why −(−5) is 5.',
          ],
          vocabulary: [
            { term: 'rational number', definition: 'Any number that can be written as a fraction of two integers, including negatives and terminating decimals.' },
          ],
          materials: ['Blank number lines, several per page', 'A ruler', 'The printed worksheet'],
          prep: ['Print number lines with the interval endpoints marked but the middle unlabelled, so partitioning is the work.'],
          script: [],
          worksheet: { id: 'g6-math-u3-l2-ws', title: 'Exactly Where?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Positions negative rationals accurately by partitioning the interval.', 'Explains double negation on the number line.'],
            exitTicket: 'Place −1.6 and −1⅔ on the same number line and say which is further left.',
          },
          differentiation: {
            support: ['Fold a paper strip to partition the interval physically before marking anything.'],
            extension: ['Place numbers between two negative fractions with different denominators.'],
          },
          misconceptions: [
            {
              misconception: 'Negative fractions get bigger as the numerator grows, just like positive ones.',
              looksLike: 'The learner places −⅞ closer to zero than −⅜.',
              correction: 'Mark both on the same line. The larger the fraction, the further from zero in whichever direction the sign points.',
            },
          ],
          homeExtension: ['Mark the family’s heights, and the depth of the deepest thing you can think of, on one long line drawn on paper.'],
        },
        {
          id: 'g6-math-u3-l3',
          unitId: 'g6-math-u3',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 3,
          status: 'outline',
          title: 'Absolute Value: Distance from Zero',
          essentialQuestion: 'How can −20 be less than −5 but also the bigger amount?',
          summary:
            'Absolute value as distance from zero, held deliberately apart from order. The debt example does the heavy lifting: a debt of £50 is a worse position than a debt of £20, but −50 is the smaller number. Both statements are true and they are about different things.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.C.7.C', framework: 'CCSS-M', text: 'Understand the absolute value of a rational number as its distance from 0 on the number line; interpret absolute value as magnitude for a positive or negative quantity in a real-world situation.' },
            { code: 'CCSS.MATH.CONTENT.6.NS.C.7.D', framework: 'CCSS-M', text: 'Distinguish comparisons of absolute value from statements about order.' },
          ],
          objectives: [
            'I can find the absolute value of any rational number.',
            'I can explain the difference between "smaller" and "smaller in size".',
          ],
          vocabulary: [
            { term: 'absolute value', definition: 'The distance a number is from zero, always positive or zero. Written |−7| = 7.' },
            { term: 'magnitude', definition: 'How big a quantity is, ignoring its direction or sign.' },
          ],
          materials: ['A long number line on the floor made with tape', 'The printed worksheet'],
          prep: ['Tape a walkable number line on the floor if you have space. Walking the distance from zero is worth ten explanations.'],
          script: [],
          worksheet: { id: 'g6-math-u3-l3-ws', title: 'How Far, Not Which Way', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Computes absolute values correctly.', 'Correctly answers a question that pits order against magnitude.'],
            exitTicket: 'Account A is −£30, account B is −£45. Which account has less money, and which has the bigger debt? Both answers, in one breath.',
          },
          differentiation: {
            support: ['Walk it. Distance from zero is a physical fact before it is a notation.'],
            extension: ['Solve |x| = 6 and discuss why it has two solutions.'],
          },
          misconceptions: [
            {
              misconception: 'Absolute value means "make it positive", so |−x| is always x.',
              looksLike: 'The learner writes |−(−4)| = −4, or applies the bars as a sign-flipping rule without thinking.',
              correction: 'Return to distance every time. Ask "how far from zero?" rather than "what do the bars do?"',
            },
          ],
          homeExtension: ['Compare two overdrafts, or two temperatures below freezing, and ask both questions: which is lower, and which is further from zero.'],
        },
        {
          id: 'g6-math-u3-l4',
          unitId: 'g6-math-u3',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 4,
          status: 'outline',
          title: 'Ordering Rational Numbers and Reading Inequalities',
          essentialQuestion: 'What does −3 > −7 mean on the number line?',
          summary:
            'Inequality statements read as positional claims: the greater number is the one further right. Learners order mixed sets of fractions, decimals and negatives and write inequalities in both directions.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.C.7.A', framework: 'CCSS-M', text: 'Interpret statements of inequality as statements about the relative position of two numbers on a number line diagram.' },
            { code: 'CCSS.MATH.CONTENT.6.NS.C.7.B', framework: 'CCSS-M', text: 'Write, interpret and explain statements of order for rational numbers in real-world contexts.' },
          ],
          objectives: [
            'I can order a mixed set of positive and negative rational numbers.',
            'I can write and read an inequality as a statement about position.',
          ],
          vocabulary: [
            { term: 'inequality', definition: 'A statement that one number is greater or less than another.' },
            { term: 'ascending order', definition: 'From least to greatest, which is left to right on the number line.' },
          ],
          materials: ['Number cards including negatives, fractions and decimals', 'A washing line and pegs, if you have them', 'The printed worksheet'],
          prep: ['Make a set of about twelve mixed number cards. Pegging them onto a line is the best version of this lesson.'],
          script: [],
          worksheet: { id: 'g6-math-u3-l4-ws', title: 'Left to Right', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Orders mixed rational numbers correctly.', 'Explains an inequality in terms of position rather than a memorised symbol rule.'],
            exitTicket: 'Order −2.5, 1¾, −3, 0, −0.5. Then write two true inequalities using any of them.',
          },
          differentiation: {
            support: ['Convert everything to decimals before ordering, then convert back.'],
            extension: ['Order values in a context where the ordering is counter-intuitive, such as golf scores or temperature drops.'],
          },
          misconceptions: [
            {
              misconception: 'The inequality symbol points to the answer, or means "the alligator eats the big one".',
              looksLike: 'The learner writes −3 < −7 confidently because 3 is less than 7.',
              correction: 'Read every inequality as a position claim: "−3 is to the right of −7". If the picture disagrees, the statement is false.',
            },
          ],
          homeExtension: ['Order the week’s overnight temperatures, or a set of golf or diving scores, from lowest to highest.'],
        },
        {
          id: 'g6-math-u3-l5',
          unitId: 'g6-math-u3',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 5,
          status: 'outline',
          title: 'The Coordinate Plane in Four Quadrants',
          essentialQuestion: 'How do two numbers pin down one point?',
          summary:
            'Extends the first-quadrant grid into all four quadrants. Learners plot and read ordered pairs with negative coordinates and connect the signs of the pair to the quadrant it lands in.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.C.6.B', framework: 'CCSS-M', text: 'Understand signs of numbers in ordered pairs as indicating locations in quadrants of the coordinate plane; recognise that when two ordered pairs differ only by signs, the locations of the points are related by reflections across one or both axes.' },
            { code: 'CCSS.MATH.CONTENT.6.NS.C.6.C', framework: 'CCSS-M', text: 'Find and position pairs of integers and other rational numbers on a coordinate plane.' },
          ],
          objectives: [
            'I can plot and read points in all four quadrants.',
            'I can name the quadrant a point is in from the signs of its coordinates.',
          ],
          vocabulary: [
            { term: 'ordered pair', definition: 'Two coordinates in a fixed order, (x, y), where the first is horizontal.' },
            { term: 'quadrant', definition: 'One of the four regions the axes divide the plane into.' },
            { term: 'origin', definition: 'The point (0, 0), where the axes cross.' },
          ],
          materials: ['Four-quadrant grid paper', 'The printed worksheet'],
          prep: ['Print several four-quadrant grids. Plotting on a grid you drew yourself under time pressure is a recipe for scale errors.'],
          script: [],
          worksheet: { id: 'g6-math-u3-l5-ws', title: 'All Four Quadrants', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Plots points accurately in all four quadrants.', 'Predicts the quadrant from the signs of the coordinates.'],
            exitTicket: 'Plot (−4, 3), (3, −4) and (−4, −3), and say what is different about each one.',
          },
          differentiation: {
            support: ['Say the moves aloud every time: "along first, then up or down." The order of the pair is the most common error.'],
            extension: ['Plot a shape, then plot every point with both signs reversed, and describe the transformation.'],
          },
          misconceptions: [
            {
              misconception: 'Coordinates can be read in either order.',
              looksLike: '(3, −4) and (−4, 3) are plotted in the same place.',
              correction: 'Plot both and mark them. Two different points from the same two numbers makes the case better than any rule.',
            },
          ],
          homeExtension: ['Play battleships on a four-quadrant grid, negatives included.'],
        },
        {
          id: 'g6-math-u3-l6',
          unitId: 'g6-math-u3',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 6,
          status: 'outline',
          title: 'Reflections, Distance and Problems on the Grid',
          essentialQuestion: 'How do I find the distance between two points without a ruler?',
          summary:
            'Uses coordinates and absolute value to find distances along horizontal and vertical lines, including across an axis, and connects sign changes to reflections. This is the lesson where absolute value earns its keep.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.NS.C.8', framework: 'CCSS-M', text: 'Solve real-world and mathematical problems by graphing points in all four quadrants of the coordinate plane, including using coordinates and absolute value to find distances between points with the same first coordinate or the same second coordinate.' },
          ],
          objectives: [
            'I can find the distance between two points that share a coordinate.',
            'I can reflect a point across an axis and describe what happens to its coordinates.',
          ],
          vocabulary: [
            { term: 'reflection', definition: 'A flip across a line, here across the x-axis or the y-axis.' },
            { term: 'horizontal distance', definition: 'How far apart two points are left to right, found from their x-coordinates.' },
          ],
          materials: ['Four-quadrant grid paper', 'A ruler for checking, used only after the calculation', 'The printed worksheet'],
          prep: ['Prepare at least two distance problems that cross an axis, since those are the ones that separate adding from subtracting.'],
          script: [],
          worksheet: { id: 'g6-math-u3-l6-ws', title: 'How Far Apart?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Computes distances between points sharing a coordinate, including across an axis.', 'Describes a reflection in terms of coordinate signs.'],
            exitTicket: 'Find the distance from (−6, 2) to (5, 2), and say why you added rather than subtracted.',
          },
          differentiation: {
            support: ['Count the squares first, then find the calculation that gives the same answer.'],
            extension: ['Find the perimeter and area of a rectangle given only its four vertices as coordinates.'],
          },
          misconceptions: [
            {
              misconception: 'Distance is always found by subtracting the coordinates, whatever their signs.',
              looksLike: 'From −6 to 5 the learner computes 6 − 5 = 1 or 5 − 6 = −1 and accepts a negative distance.',
              correction: 'Split the journey at zero. Six units to reach zero, five more after it: eleven. Then show that |−6| + |5| does the same thing.',
            },
          ],
          homeExtension: ['Map the rooms of the house on a coordinate grid with the front door at the origin, and compute walking distances.'],
        },
      ],
    },

    /* ============================================================ UNIT 4 */
    {
      id: 'g6-math-u4',
      gradeId: 'g6',
      subjectId: 'math',
      sequence: 4,
      title: 'Expressions, Equations and Inequalities',
      bigIdea:
        'A letter is not a mystery to be solved — it is a number you have not been told yet, and it obeys every rule that numbers obey.',
      description:
        'The algebra unit. Learners write and evaluate expressions with exponents and variables, name the parts of an expression precisely, generate equivalent expressions, then solve one-step equations and inequalities. It closes with dependent and independent variables, which quietly sets up the function work of Grades 7 and 8.',
      weeks: 7,
      standards: [
        { code: 'CCSS.MATH.CONTENT.6.EE.A.1', framework: 'CCSS-M', text: 'Write and evaluate numerical expressions involving whole-number exponents.' },
        { code: 'CCSS.MATH.CONTENT.6.EE.A.2', framework: 'CCSS-M', text: 'Write, read and evaluate expressions in which letters stand for numbers.' },
        { code: 'CCSS.MATH.CONTENT.6.EE.A.3', framework: 'CCSS-M', text: 'Apply the properties of operations to generate equivalent expressions.' },
        { code: 'CCSS.MATH.CONTENT.6.EE.A.4', framework: 'CCSS-M', text: 'Identify when two expressions are equivalent, i.e. when the two expressions name the same number regardless of which value is substituted into them.' },
        { code: 'CCSS.MATH.CONTENT.6.EE.B.7', framework: 'CCSS-M', text: 'Solve real-world and mathematical problems by writing and solving equations of the form x + p = q and px = q for cases in which p, q and x are all non-negative rational numbers.' },
        { code: 'CCSS.MATH.CONTENT.6.EE.C.9', framework: 'CCSS-M', text: 'Use variables to represent two quantities in a real-world problem that change in relationship to one another; write an equation to express one quantity, the dependent variable, in terms of the other quantity, the independent variable.' },
      ],
      lessonTitles: [
        'Exponents: Repeated Multiplication in Shorthand',
        'Order of Operations with Exponents',
        'Writing Expressions with Variables',
        'The Parts of an Expression: Terms, Factors, Coefficients',
        'Equivalent Expressions and the Distributive Property',
        'What Does It Mean to Solve an Equation?',
        'Solving One-Step Equations',
        'Inequalities and Quantities That Change Together',
      ],
      performanceTask:
        'The Party Budget: given fixed costs, a per-guest cost and a total budget, the learner writes an expression for the total cost, an equation for the break-even number of guests, and an inequality for the number of guests they can afford, then presents all three with a graph of the relationship.',
      lessons: [
        {
          id: 'g6-math-u4-l1',
          unitId: 'g6-math-u4',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 1,
          status: 'outline',
          title: 'Exponents: Repeated Multiplication in Shorthand',
          essentialQuestion: 'What does the little raised number actually tell me to do?',
          summary:
            'Whole-number exponents as repeated multiplication, with immediate attention to the two classic errors: reading 3⁴ as 12, and confusing 3² with 3 × 2. Squares and cubes are tied to actual squares and cubes.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.EE.A.1', framework: 'CCSS-M', text: 'Write and evaluate numerical expressions involving whole-number exponents.' },
          ],
          objectives: [
            'I can write repeated multiplication using an exponent.',
            'I can evaluate expressions with whole-number exponents.',
            'I can explain why 5² is not 10.',
          ],
          vocabulary: [
            { term: 'base', definition: 'The number being multiplied by itself.' },
            { term: 'exponent', definition: 'How many times the base is used as a factor.' },
            { term: 'squared / cubed', definition: 'Raised to the power 2 or 3, named after the area of a square and the volume of a cube.' },
          ],
          materials: ['Centimetre cubes or sugar cubes', 'Squared paper', 'The printed worksheet'],
          prep: ['Build a 3 by 3 square and a 3 by 3 by 3 cube out of cubes before the lesson if you can. The names stop being arbitrary the moment they are held.'],
          script: [],
          worksheet: { id: 'g6-math-u4-l1-ws', title: 'Powers and What They Mean', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Evaluates whole-number powers correctly.', 'Distinguishes 4³ from 4 × 3.'],
            exitTicket: 'Evaluate 2⁵ and 5², and say in one sentence why they are different.',
          },
          differentiation: {
            support: ['Write out the full multiplication every single time before evaluating. The shorthand can wait.'],
            extension: ['Explore powers of 2 and how fast they grow — the chessboard-and-rice-grains story lands well at this age.'],
          },
          misconceptions: [
            {
              misconception: 'An exponent means multiply the base by the exponent.',
              looksLike: '3⁴ is evaluated as 12.',
              correction: 'Insist on writing 3 × 3 × 3 × 3 underneath before evaluating, until the habit sticks.',
            },
          ],
          homeExtension: ['Fold a piece of paper in half repeatedly and record the number of layers as a power of 2.'],
        },
        {
          id: 'g6-math-u4-l2',
          unitId: 'g6-math-u4',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 2,
          status: 'outline',
          title: 'Order of Operations with Exponents',
          essentialQuestion: 'Why does everyone have to agree on the order?',
          summary:
            'Order of operations revisited with exponents included, framed as a convention that exists so two people get the same answer. Learners deliberately evaluate an expression two ways and see the disagreement before the rule is stated.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.EE.A.1', framework: 'CCSS-M', text: 'Write and evaluate numerical expressions involving whole-number exponents.' },
            { code: 'CCSS.MATH.CONTENT.6.EE.A.2.C', framework: 'CCSS-M', text: 'Evaluate expressions at specific values of their variables, including expressions that arise from formulas, using the conventional order of operations.' },
          ],
          objectives: [
            'I can evaluate an expression using the conventional order of operations.',
            'I can say why the order is a convention rather than a law of nature.',
          ],
          vocabulary: [
            { term: 'convention', definition: 'An agreement people make so that everyone gets the same result.' },
            { term: 'grouping symbols', definition: 'Brackets and the fraction bar, which say "do this first".' },
          ],
          materials: ['The printed worksheet', 'A calculator, for the disagreement demonstration'],
          prep: ['Find a calculator that evaluates 2 + 3 × 4 as 14 and, if you can, a cheap one that gives 20. The contradiction is the hook.'],
          script: [],
          worksheet: { id: 'g6-math-u4-l2-ws', title: 'Everyone Gets the Same Answer', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Evaluates multi-step expressions with exponents accurately.', 'Adds brackets to force a different intended meaning.'],
            exitTicket: 'Evaluate 4 + 2 × 3², then insert brackets to make the answer 108.',
          },
          differentiation: {
            support: ['Annotate the expression by circling the step to be done next before computing anything.'],
            extension: ['Given a target value, insert brackets into a fixed string of numbers to hit it.'],
          },
          misconceptions: [
            {
              misconception: 'Multiplication always comes before division, and addition before subtraction.',
              looksLike: '12 ÷ 3 × 2 is evaluated as 2 rather than 8.',
              correction: 'State the rule as left to right within each level. Work several examples where it matters.',
            },
          ],
          homeExtension: ['Type an ambiguous expression into two different calculators and compare what they do.'],
        },
        {
          id: 'g6-math-u4-l3',
          unitId: 'g6-math-u4',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 3,
          status: 'outline',
          title: 'Writing Expressions with Variables',
          essentialQuestion: 'How do I turn a sentence into algebra?',
          summary:
            'Translating between words and symbols in both directions. The reverse translation — reading 3n + 5 back into a plausible story — is where the understanding shows, and it gets equal time.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.EE.A.2.A', framework: 'CCSS-M', text: 'Write expressions that record operations with numbers and with letters standing for numbers.' },
            { code: 'CCSS.MATH.CONTENT.6.EE.B.6', framework: 'CCSS-M', text: 'Use variables to represent numbers and write expressions when solving a real-world or mathematical problem; understand that a variable can represent an unknown number or any number in a specified set.' },
          ],
          objectives: [
            'I can write an algebraic expression from a worded description.',
            'I can write a story that matches a given expression.',
            'I can say what my variable stands for, in words, with units.',
          ],
          vocabulary: [
            { term: 'variable', definition: 'A letter standing for a number that can change or is not yet known.' },
            { term: 'expression', definition: 'A combination of numbers, variables and operations with no equals sign.' },
          ],
          materials: ['Index cards for a matching game', 'The printed worksheet'],
          prep: ['Write six expressions on cards and six matching word descriptions on others, then shuffle. Matching beats worksheets for this content.'],
          script: [],
          worksheet: { id: 'g6-math-u4-l3-ws', title: 'Words to Symbols and Back', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Writes correct expressions from words.', 'Defines the variable explicitly, including units.'],
            exitTicket: 'Write an expression for "five less than twice a number", then write a story that 2n − 5 could describe.',
          },
          differentiation: {
            support: ['Provide a bank of operation phrases — "more than", "less than", "times as many" — and sort them by operation first.'],
            extension: ['Two-variable expressions, and expressions where the same variable appears twice.'],
          },
          misconceptions: [
            {
              misconception: 'Word order maps directly onto symbol order.',
              looksLike: '"Five less than a number" is written as 5 − n.',
              correction: 'Substitute a number. If the number is 12, is the answer 7 or −7? The check catches it every time.',
            },
          ],
          homeExtension: ['Write an expression for the family’s weekly shopping total in terms of the number of people at home.'],
        },
        {
          id: 'g6-math-u4-l4',
          unitId: 'g6-math-u4',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 4,
          status: 'outline',
          title: 'The Parts of an Expression: Terms, Factors, Coefficients',
          essentialQuestion: 'What do I call the pieces, and why does the naming matter?',
          summary:
            'Precise vocabulary for the parts of an expression, taught because it makes every later instruction intelligible. Learners also view an expression as a single object — "the sum of two terms" — which is the structural reading algebra depends on.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.EE.A.2.B', framework: 'CCSS-M', text: 'Identify parts of an expression using mathematical terms — sum, term, product, factor, quotient, coefficient — and view one or more parts of an expression as a single entity.' },
          ],
          objectives: [
            'I can name the terms, factors and coefficients in an expression.',
            'I can describe an expression as a sum or a product of its parts.',
          ],
          vocabulary: [
            { term: 'term', definition: 'A part of an expression separated by plus or minus signs.' },
            { term: 'coefficient', definition: 'The number multiplying a variable.' },
            { term: 'factor', definition: 'Something being multiplied.' },
          ],
          materials: ['Highlighters in two colours', 'The printed worksheet'],
          prep: ['Choose expressions with enough structure to be worth describing, such as 4(x + 3) − 2y.'],
          script: [],
          worksheet: { id: 'g6-math-u4-l4-ws', title: 'Naming the Pieces', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Identifies terms, factors and coefficients accurately.', 'Describes a whole expression structurally in one sentence.'],
            exitTicket: 'For 7y + 3(x − 2), name the terms, the coefficient of y, and the two factors in the second term.',
          },
          differentiation: {
            support: ['Highlight the plus and minus signs first — the terms fall out of that automatically.'],
            extension: ['Describe the same expression in two different structural ways and say when each reading is useful.'],
          },
          misconceptions: [
            {
              misconception: 'A term is any number or letter you can see.',
              looksLike: 'In 3x + 5, the learner lists 3, x and 5 as three terms.',
              correction: 'Draw a box around each chunk between the plus and minus signs. Two boxes, two terms.',
            },
          ],
          homeExtension: ['Read an expression aloud in full sentences at the dinner table and have someone else write it down.'],
        },
        {
          id: 'g6-math-u4-l5',
          unitId: 'g6-math-u4',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 5,
          status: 'outline',
          title: 'Equivalent Expressions and the Distributive Property',
          essentialQuestion: 'How can two expressions that look different always give the same answer?',
          summary:
            'Equivalence tested by substitution and then justified by the properties of operations. Learners expand and factorise with the distributive property and combine like terms, checking every claim numerically first.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.EE.A.3', framework: 'CCSS-M', text: 'Apply the properties of operations to generate equivalent expressions.' },
            { code: 'CCSS.MATH.CONTENT.6.EE.A.4', framework: 'CCSS-M', text: 'Identify when two expressions are equivalent, i.e. when the two expressions name the same number regardless of which value is substituted into them.' },
          ],
          objectives: [
            'I can expand and factorise using the distributive property.',
            'I can combine like terms.',
            'I can test whether two expressions are equivalent by substituting several values.',
          ],
          vocabulary: [
            { term: 'equivalent expressions', definition: 'Expressions that give the same value for every possible value of the variable.' },
            { term: 'like terms', definition: 'Terms with exactly the same variable part, which can be added together.' },
          ],
          materials: ['Algebra tiles, or paper rectangles cut to represent x and 1', 'The printed worksheet'],
          prep: ['Cut paper tiles if you do not own algebra tiles: long rectangles for x and small squares for 1. Twenty minutes of cutting saves the whole unit.'],
          script: [],
          worksheet: { id: 'g6-math-u4-l5-ws', title: 'Same Value, Different Look', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Expands and factorises correctly.', 'Uses substitution to test equivalence rather than judging by appearance.'],
            exitTicket: 'Is 3(x + 4) equivalent to 3x + 4? Prove your answer with a substitution.',
          },
          differentiation: {
            support: ['Build every expression with tiles before writing anything. The area model makes distribution obvious.'],
            extension: ['Factorise expressions with a common variable factor, such as 6x + 9x².'],
          },
          misconceptions: [
            {
              misconception: 'The multiplier outside a bracket only applies to the first term inside.',
              looksLike: '3(x + 4) becomes 3x + 4.',
              correction: 'Substitute x = 2 into both. 18 against 10. Then lay out the tiles and count.',
            },
          ],
          homeExtension: ['Work out a restaurant bill for a group two ways — per person then total, and total then divided — and note that they agree.'],
        },
        {
          id: 'g6-math-u4-l6',
          unitId: 'g6-math-u4',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 6,
          status: 'outline',
          title: 'What Does It Mean to Solve an Equation?',
          essentialQuestion: 'What am I actually looking for when I solve?',
          summary:
            'Solving reframed as answering a question: which value makes this statement true? Learners test candidate values from a set before ever performing an inverse operation, which stops "solving" from becoming a ritual with no meaning.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.EE.B.5', framework: 'CCSS-M', text: 'Understand solving an equation or inequality as a process of answering a question: which values from a specified set, if any, make the equation or inequality true? Use substitution to determine whether a given number makes an equation or inequality true.' },
          ],
          objectives: [
            'I can test whether a value is a solution by substituting it.',
            'I can explain what the solution to an equation means.',
          ],
          vocabulary: [
            { term: 'equation', definition: 'A statement that two expressions are equal.' },
            { term: 'solution', definition: 'A value for the variable that makes the equation true.' },
          ],
          materials: ['A balance scale, or a drawing of one', 'The printed worksheet'],
          prep: ['Have a physical balance if possible. Equality as "both sides the same" is far more convincing when it can tip.'],
          script: [],
          worksheet: { id: 'g6-math-u4-l6-ws', title: 'Which Value Makes It True?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Determines by substitution whether a value is a solution.', 'Explains the meaning of a solution in plain words.'],
            exitTicket: 'Which of 2, 5 and 7 is a solution of 3x − 4 = 11? Show the substitution for the one you choose.',
          },
          differentiation: {
            support: ['Give a short list of candidate values to test. Searching a small set builds the meaning before the method.'],
            extension: ['Find an equation with no solution, and one that is true for every value, and explain the difference.'],
          },
          misconceptions: [
            {
              misconception: 'The equals sign means "here comes the answer".',
              looksLike: 'The learner writes 3 + 4 = 7 + 2 = 9, treating the sign as a running total.',
              correction: 'Use the balance. Both sides must weigh the same at every moment, so 7 = 9 is visibly false.',
            },
          ],
          homeExtension: ['Pose a "guess my number" riddle at dinner and have the family test values out loud.'],
        },
        {
          id: 'g6-math-u4-l7',
          unitId: 'g6-math-u4',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 7,
          status: 'outline',
          title: 'Solving One-Step Equations',
          essentialQuestion: 'How do I undo what has been done to the variable?',
          summary:
            'Inverse operations applied to both sides, justified by the balance model. Learners solve x + p = q and px = q with non-negative rational values, and write an equation from a situation before solving it.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.EE.B.7', framework: 'CCSS-M', text: 'Solve real-world and mathematical problems by writing and solving equations of the form x + p = q and px = q for cases in which p, q and x are all non-negative rational numbers.' },
          ],
          objectives: [
            'I can solve one-step equations using inverse operations.',
            'I can check my solution by substituting it back.',
            'I can write an equation from a word problem before solving it.',
          ],
          vocabulary: [
            { term: 'inverse operation', definition: 'The operation that undoes another — subtraction undoes addition, division undoes multiplication.' },
            { term: 'balance', definition: 'Whatever you do to one side of an equation, you must do to the other.' },
          ],
          materials: ['Balance scale or drawn balance', 'The printed worksheet'],
          prep: ['Insist from the very first example that the working shows the same operation written under both sides. The habit is the whole lesson.'],
          script: [],
          worksheet: { id: 'g6-math-u4-l7-ws', title: 'Undo It, Both Sides', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Solves one-step equations accurately with both sides shown.', 'Checks the solution by substitution.'],
            exitTicket: 'Solve 0.6x = 4.2 and check your answer. Both steps required.',
          },
          differentiation: {
            support: ['Stay with whole numbers and addition only until the both-sides habit is automatic.'],
            extension: ['Equations with fractional coefficients, and two-step equations as a preview.'],
          },
          misconceptions: [
            {
              misconception: 'You move the number across the equals sign and change its sign, as a rule about moving things.',
              looksLike: 'The learner gets the right answer for x + 5 = 12 but has no idea what to do with 5x = 12.',
              correction: 'Go back to the balance and physically remove the same amount from both pans. The rule reappears as a consequence.',
            },
          ],
          homeExtension: ['Set a one-step equation from a real situation — "I spent £14 and had £6 left, how much did I start with?" — and require the equation to be written before the answer.'],
        },
        {
          id: 'g6-math-u4-l8',
          unitId: 'g6-math-u4',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 8,
          status: 'outline',
          title: 'Inequalities and Quantities That Change Together',
          essentialQuestion: 'What does it mean for an answer to be a whole range of numbers?',
          summary:
            'Inequalities written from constraints, with solutions shown on a number line and understood as infinite sets. The lesson closes the unit by introducing dependent and independent variables and graphing the relationship between them.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.EE.B.8', framework: 'CCSS-M', text: 'Write an inequality of the form x > c or x < c to represent a constraint or condition in a real-world or mathematical problem; recognise that inequalities of this form have infinitely many solutions; represent solutions of such inequalities on number line diagrams.' },
            { code: 'CCSS.MATH.CONTENT.6.EE.C.9', framework: 'CCSS-M', text: 'Use variables to represent two quantities in a real-world problem that change in relationship to one another; write an equation to express one quantity, the dependent variable, in terms of the other quantity, the independent variable; analyse the relationship using graphs and tables.' },
          ],
          objectives: [
            'I can write an inequality for a real constraint.',
            'I can show the solution set on a number line.',
            'I can identify which variable depends on which and write the equation that links them.',
          ],
          vocabulary: [
            { term: 'inequality', definition: 'A statement that one quantity is greater or less than another, with infinitely many solutions.' },
            { term: 'independent variable', definition: 'The quantity you choose or control.' },
            { term: 'dependent variable', definition: 'The quantity that responds to the one you chose.' },
          ],
          materials: ['Blank number lines', 'Squared paper for the graph', 'The printed worksheet'],
          prep: ['Collect two or three real constraints from the learner’s own life — a height limit at a theme park, a screen-time cap, a spending limit.'],
          script: [],
          worksheet: { id: 'g6-math-u4-l8-ws', title: 'Ranges and Relationships', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Writes a correct inequality from a constraint.', 'Graphs the solution set correctly.', 'Names the dependent and independent variables and writes the linking equation.'],
            exitTicket: 'A ride requires you to be at least 140 cm tall. Write the inequality, show it on a number line, and give two heights that satisfy it.',
          },
          differentiation: {
            support: ['Test three specific values against the constraint before writing any symbol. The symbol then describes what was found.'],
            extension: ['Compound constraints such as "at least 140 cm and under 190 cm", and the double inequality that expresses them.'],
          },
          misconceptions: [
            {
              misconception: 'An inequality has one answer, like an equation.',
              looksLike: 'For x > 5 the learner writes "x = 6".',
              correction: 'Ask for five more solutions, then ten more. The number line shading follows naturally from running out of patience.',
            },
          ],
          homeExtension: ['Find three real constraints around the house — a weight limit, a speed limit, an age restriction — and write each as an inequality.'],
        },
      ],
    },

    /* ============================================================ UNIT 5 */
    {
      id: 'g6-math-u5',
      gradeId: 'g6',
      subjectId: 'math',
      sequence: 5,
      title: 'Geometry: Area, Surface Area and Volume',
      bigIdea:
        'Every area formula in this unit comes from cutting a shape up and rearranging it into a rectangle — and every surface area comes from unfolding a solid flat.',
      description:
        'Learners derive rather than memorise. Triangles come from halved parallelograms, parallelograms from rearranged rectangles, and awkward polygons from decomposition. Volume extends to fractional edge lengths, and nets turn three-dimensional surface area into a two-dimensional area problem they already know how to do.',
      weeks: 5,
      standards: [
        { code: 'CCSS.MATH.CONTENT.6.G.A.1', framework: 'CCSS-M', text: 'Find the area of right triangles, other triangles, special quadrilaterals and polygons by composing into rectangles or decomposing into triangles and other shapes; apply these techniques in the context of solving real-world and mathematical problems.' },
        { code: 'CCSS.MATH.CONTENT.6.G.A.2', framework: 'CCSS-M', text: 'Find the volume of a right rectangular prism with fractional edge lengths by packing it with unit cubes of the appropriate unit fraction edge lengths, and show that the volume is the same as would be found by multiplying the edge lengths.' },
        { code: 'CCSS.MATH.CONTENT.6.G.A.3', framework: 'CCSS-M', text: 'Draw polygons in the coordinate plane given coordinates for the vertices; use coordinates to find the length of a side joining points with the same first coordinate or the same second coordinate.' },
        { code: 'CCSS.MATH.CONTENT.6.G.A.4', framework: 'CCSS-M', text: 'Represent three-dimensional figures using nets made up of rectangles and triangles, and use the nets to find the surface area of these figures.' },
      ],
      lessonTitles: [
        'Area of Triangles by Decomposing',
        'Parallelograms, Trapeziums and Awkward Polygons',
        'Polygons on the Coordinate Plane',
        'Volume with Fractional Edge Lengths',
        'Nets: Unfolding a Solid',
        'Surface Area from Nets',
      ],
      performanceTask:
        'The Packaging Brief: the learner designs a box to hold a given object, draws its net to scale, calculates the surface area of card required and the volume enclosed, and then produces a second design with the same volume but less card, explaining the trade-off.',
      lessons: [
        {
          id: 'g6-math-u5-l1',
          unitId: 'g6-math-u5',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 1,
          status: 'outline',
          title: 'Area of Triangles by Decomposing',
          essentialQuestion: 'Where does the half come from in the triangle formula?',
          summary:
            'Two identical triangles are cut out and fitted together into a parallelogram, so the halving is discovered physically. The perpendicular height — not the slanted side — is established from the start, because that is where nearly all triangle-area errors live.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.G.A.1', framework: 'CCSS-M', text: 'Find the area of right triangles and other triangles by composing into rectangles or decomposing into triangles and other shapes.' },
          ],
          objectives: [
            'I can find the area of any triangle.',
            'I can identify the perpendicular height for a chosen base.',
            'I can explain why the formula has a half in it.',
          ],
          vocabulary: [
            { term: 'base', definition: 'The side of a triangle you measure the height from.' },
            { term: 'perpendicular height', definition: 'The straight-up distance from the base to the opposite vertex, at a right angle to the base.' },
          ],
          materials: ['Paper, scissors, a ruler and a set square or the corner of a card', 'Squared paper', 'The printed worksheet'],
          prep: ['Cut several pairs of identical triangles in advance, including at least one obtuse triangle where the height falls outside the shape.'],
          script: [],
          worksheet: { id: 'g6-math-u5-l1-ws', title: 'Half a Parallelogram', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Computes triangle areas accurately.', 'Selects the perpendicular height rather than a slanted side.'],
            exitTicket: 'Give an obtuse triangle with base 8 cm, height 3 cm and a slant side of 6 cm marked. Ask for the area and watch which number is used.',
          },
          differentiation: {
            support: ['Count squares on squared paper first, then check against the formula. Agreement between the two is the convincing bit.'],
            extension: ['Find the area of a triangle drawn on a coordinate grid with no gridlines through its vertices.'],
          },
          misconceptions: [
            {
              misconception: 'The height of a triangle is the length of the slanted side.',
              looksLike: 'The learner multiplies the base by the longest side and halves it.',
              correction: 'Physically stand a set square on the base. The height is the only measurement that meets the base at a right angle.',
            },
          ],
          homeExtension: ['Find a triangular object at home, measure its base and perpendicular height, and calculate its area.'],
        },
        {
          id: 'g6-math-u5-l2',
          unitId: 'g6-math-u5',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 2,
          status: 'outline',
          title: 'Parallelograms, Trapeziums and Awkward Polygons',
          essentialQuestion: 'What do I do with a shape that has no formula?',
          summary:
            'Decomposition as a general strategy. Learners cut compound shapes into rectangles and triangles, or enclose them in a rectangle and subtract, and compare the two routes on the same shape.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.G.A.1', framework: 'CCSS-M', text: 'Find the area of special quadrilaterals and polygons by composing into rectangles or decomposing into triangles and other shapes; apply these techniques in the context of solving real-world and mathematical problems.' },
          ],
          objectives: [
            'I can find the area of a parallelogram and a trapezium.',
            'I can split a compound shape into pieces I know how to handle.',
            'I can solve the same area problem by two different decompositions and get the same answer.',
          ],
          vocabulary: [
            { term: 'compound shape', definition: 'A shape made from several simpler shapes joined together.' },
            { term: 'decompose', definition: 'To cut a shape into smaller shapes whose areas you can find.' },
          ],
          materials: ['Squared paper', 'Scissors', 'The printed worksheet'],
          prep: ['Draw one compound shape that can be split two genuinely different ways, and plan to ask for both.'],
          script: [],
          worksheet: { id: 'g6-math-u5-l2-ws', title: 'Cut It Into Pieces You Know', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Finds areas of parallelograms and trapeziums.', 'Decomposes a compound shape and totals the parts correctly.'],
            exitTicket: 'Give an L-shaped garden with all sides labelled and ask for its area by two different methods.',
          },
          differentiation: {
            support: ['Physically cut the shape up with scissors before calculating anything.'],
            extension: ['A shape with a rectangular hole in it, where subtraction is the only sensible route.'],
          },
          misconceptions: [
            {
              misconception: 'Areas of the parts can be added, and so can the perimeters.',
              looksLike: 'The learner adds the perimeters of the two pieces of an L-shape and gets more than the true perimeter.',
              correction: 'Trace the outside of the whole shape with a finger. The internal cut line is not part of the outline.',
            },
          ],
          homeExtension: ['Measure a room with an alcove and calculate its floor area by decomposing it.'],
        },
        {
          id: 'g6-math-u5-l3',
          unitId: 'g6-math-u5',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 3,
          status: 'outline',
          title: 'Polygons on the Coordinate Plane',
          essentialQuestion: 'Can I find a length without measuring it?',
          summary:
            'Polygons drawn from coordinates, with side lengths computed from the coordinates themselves. Connects directly back to the distance work of Unit 3 and forward to the area work of this one.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.G.A.3', framework: 'CCSS-M', text: 'Draw polygons in the coordinate plane given coordinates for the vertices; use coordinates to find the length of a side joining points with the same first coordinate or the same second coordinate; apply these techniques in the context of solving real-world and mathematical problems.' },
          ],
          objectives: [
            'I can draw a polygon from a list of coordinates.',
            'I can find a side length from the coordinates of its endpoints.',
            'I can find the perimeter and area of a polygon given only its vertices.',
          ],
          vocabulary: [
            { term: 'vertex', definition: 'A corner of a polygon, given here as an ordered pair.' },
            { term: 'perimeter', definition: 'The total distance round the outside of a shape.' },
          ],
          materials: ['Four-quadrant grid paper', 'A ruler', 'The printed worksheet'],
          prep: ['Prepare at least one polygon whose vertices straddle an axis, since that is where the distance reasoning is tested.'],
          script: [],
          worksheet: { id: 'g6-math-u5-l3-ws', title: 'Shapes from Coordinates', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Plots a polygon accurately from coordinates.', 'Computes side lengths from coordinates rather than by measuring.'],
            exitTicket: 'Given A(−3, 4), B(5, 4), C(5, −1) and D(−3, −1), find the perimeter and area without using a ruler.',
          },
          differentiation: {
            support: ['Count grid squares first, then find the calculation that matches the count.'],
            extension: ['Find the area of a triangle whose vertices are given, by enclosing it in a rectangle and subtracting.'],
          },
          misconceptions: [
            {
              misconception: 'Side lengths must be measured with a ruler because coordinates are just positions.',
              looksLike: 'The learner measures in centimetres and reports a length that ignores the grid scale entirely.',
              correction: 'Compare the ruler answer with the grid-square count. When the scale is not 1 cm per square, the ruler is simply wrong.',
            },
          ],
          homeExtension: ['Draw a floor plan on grid paper using coordinates and calculate the perimeter of the skirting board needed.'],
        },
        {
          id: 'g6-math-u5-l4',
          unitId: 'g6-math-u5',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 4,
          status: 'outline',
          title: 'Volume with Fractional Edge Lengths',
          essentialQuestion: 'What happens to volume when the edges are not whole numbers?',
          summary:
            'Volume built by packing with unit-fraction cubes, so that the formula extends to fractional edges rather than being asserted for them. The count of small cubes and the product of the edge lengths are shown to agree.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.G.A.2', framework: 'CCSS-M', text: 'Find the volume of a right rectangular prism with fractional edge lengths by packing it with unit cubes of the appropriate unit fraction edge lengths, and show that the volume is the same as would be found by multiplying the edge lengths; apply the formulas V = lwh and V = bh.' },
          ],
          objectives: [
            'I can find the volume of a rectangular prism with fractional edges.',
            'I can explain why packing with small cubes gives the same answer as multiplying the edges.',
          ],
          vocabulary: [
            { term: 'prism', definition: 'A solid with the same cross-section all the way through.' },
            { term: 'unit cube', definition: 'A cube with edges of length 1, used as the unit of volume.' },
          ],
          materials: ['Centimetre cubes or sugar cubes', 'A small box to fill', 'The printed worksheet'],
          prep: ['Have enough cubes to actually fill something. Sixty is usually enough; a hundred is comfortable.'],
          script: [],
          worksheet: { id: 'g6-math-u5-l4-ws', title: 'Packing the Box', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Computes volumes with fractional edge lengths.', 'Explains the equivalence of packing and multiplying.'],
            exitTicket: 'Find the volume of a prism measuring 2½ by 3 by 1½ units, and say how many half-unit cubes would fill it.',
          },
          differentiation: {
            support: ['Work with halves only. One awkward dimension at a time is plenty.'],
            extension: ['Given a volume and two edge lengths, find the third.'],
          },
          misconceptions: [
            {
              misconception: 'Volume is found by adding the three dimensions, or by counting only the visible cubes.',
              looksLike: 'The learner counts the cubes on the faces of a stack and misses the hidden interior.',
              correction: 'Build a solid three by three by three, then take it apart and count. Twenty-seven, not twenty-six.',
            },
          ],
          homeExtension: ['Work out how many small storage boxes fit inside a larger one, then check by packing them.'],
        },
        {
          id: 'g6-math-u5-l5',
          unitId: 'g6-math-u5',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 5,
          status: 'outline',
          title: 'Nets: Unfolding a Solid',
          essentialQuestion: 'What does a box look like when you flatten it out?',
          summary:
            'Learners cut open real boxes, lay them flat, and match nets to solids. Spatial visualisation is the objective, and the only reliable way to build it is with actual card and actual scissors.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.G.A.4', framework: 'CCSS-M', text: 'Represent three-dimensional figures using nets made up of rectangles and triangles.' },
          ],
          objectives: [
            'I can match a net to the solid it folds into.',
            'I can draw a net for a cuboid, a triangular prism and a square-based pyramid.',
            'I can tell whether a given arrangement of faces will actually fold up.',
          ],
          vocabulary: [
            { term: 'net', definition: 'A flat arrangement of faces that folds up into a solid.' },
            { term: 'face', definition: 'One flat surface of a solid.' },
          ],
          materials: ['An empty cereal box to cut open', 'Card, scissors and tape', 'The printed worksheet'],
          prep: ['Cut one box open yourself along the edges and keep it flat. Seeing a real product become a net is the whole hook.'],
          script: [],
          worksheet: { id: 'g6-math-u5-l5-ws', title: 'Flat and Folded', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Matches nets to solids correctly.', 'Draws a valid net for a given solid.'],
            exitTicket: 'Show four arrangements of six squares and ask which fold into a cube. Two should work and two should not.',
          },
          differentiation: {
            support: ['Cut out and fold every candidate. Physical folding is not cheating; it is how the mental image gets built.'],
            extension: ['Find all eleven distinct nets of a cube. It is a genuine investigation and takes more than one sitting.'],
          },
          misconceptions: [
            {
              misconception: 'Any arrangement of six squares folds into a cube.',
              looksLike: 'The learner accepts a three-by-two block of squares as a valid cube net.',
              correction: 'Cut it out and try to fold it. The failure is immediate and memorable.',
            },
          ],
          homeExtension: ['Flatten the recycling before it goes out and identify the net of each package.'],
        },
        {
          id: 'g6-math-u5-l6',
          unitId: 'g6-math-u5',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 6,
          status: 'outline',
          title: 'Surface Area from Nets',
          essentialQuestion: 'How much card would it take to make this box?',
          summary:
            'Surface area computed as the total area of a net. Because the net turns a three-dimensional problem into a set of rectangles and triangles, this lesson is mostly the application of everything already built in the unit.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.G.A.4', framework: 'CCSS-M', text: 'Represent three-dimensional figures using nets made up of rectangles and triangles, and use the nets to find the surface area of these figures; apply these techniques in the context of solving real-world and mathematical problems.' },
          ],
          objectives: [
            'I can find the surface area of a prism or pyramid from its net.',
            'I can organise my working so that no face is counted twice or missed.',
          ],
          vocabulary: [
            { term: 'surface area', definition: 'The total area of all the faces of a solid.' },
            { term: 'lateral face', definition: 'A side face of a prism or pyramid, not the base.' },
          ],
          materials: ['The nets built in the previous lesson', 'A ruler', 'The printed worksheet'],
          prep: ['Insist on a face-by-face table rather than a single long calculation. Almost every error here is a bookkeeping error.'],
          script: [],
          worksheet: { id: 'g6-math-u5-l6-ws', title: 'How Much Card?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Computes surface area accurately with organised working.', 'Accounts for every face exactly once.'],
            exitTicket: 'Find the surface area of a cuboid 4 by 3 by 2, listing all six faces before adding.',
          },
          differentiation: {
            support: ['Number the faces on the physical net with a pencil and tick each one off as it is calculated.'],
            extension: ['Compare two boxes with equal volume and different surface area, and discuss which a manufacturer would choose and why.'],
          },
          misconceptions: [
            {
              misconception: 'Surface area and volume are variations of the same calculation.',
              looksLike: 'The learner multiplies all three dimensions and calls the result the surface area.',
              correction: 'Ask what unit the answer should be in. Square units for a covering, cubic units for a filling. The units force the distinction.',
            },
          ],
          homeExtension: ['Estimate the amount of wrapping paper needed for a real present, then check by wrapping it.'],
        },
      ],
    },

    /* ============================================================ UNIT 6 */
    {
      id: 'g6-math-u6',
      gradeId: 'g6',
      subjectId: 'math',
      sequence: 6,
      title: 'Statistics: Variability and Distributions',
      bigIdea:
        'A statistical question expects the answers to vary — and a single number can never describe a set of varied answers on its own.',
      description:
        'The statistics unit begins with the question, not the calculation. Learners distinguish statistical from non-statistical questions, display data as dot plots, histograms and box plots, and describe a distribution by its shape, centre and spread. The central habit being built is scepticism: a mean with no sense of spread behind it is not information.',
      weeks: 4,
      standards: [
        { code: 'CCSS.MATH.CONTENT.6.SP.A.1', framework: 'CCSS-M', text: 'Recognise a statistical question as one that anticipates variability in the data related to the question and accounts for it in the answers.' },
        { code: 'CCSS.MATH.CONTENT.6.SP.A.2', framework: 'CCSS-M', text: 'Understand that a set of data collected to answer a statistical question has a distribution which can be described by its centre, spread and overall shape.' },
        { code: 'CCSS.MATH.CONTENT.6.SP.A.3', framework: 'CCSS-M', text: 'Recognise that a measure of centre for a numerical data set summarises all of its values with a single number, while a measure of variation describes how its values vary with a single number.' },
        { code: 'CCSS.MATH.CONTENT.6.SP.B.4', framework: 'CCSS-M', text: 'Display numerical data in plots on a number line, including dot plots, histograms and box plots.' },
        { code: 'CCSS.MATH.CONTENT.6.SP.B.5', framework: 'CCSS-M', text: 'Summarise numerical data sets in relation to their context, including reporting the number of observations, describing the attribute under investigation, giving quantitative measures of centre and variability, and relating the choice of measures to the shape of the distribution.' },
      ],
      lessonTitles: [
        'What Makes a Question Statistical?',
        'Dot Plots and Histograms',
        'Shape, Centre and Spread',
        'Mean, Median and Which One to Trust',
        'Box Plots and the Interquartile Range',
        'Mean Absolute Deviation and Reporting Honestly',
      ],
      performanceTask:
        'The Household Survey: the learner writes a genuinely statistical question, collects at least twenty responses, chooses and draws an appropriate display, reports the number of observations, the attribute measured with its units, a measure of centre and a measure of spread, and justifies the choice of centre from the shape of the distribution.',
      lessons: [
        {
          id: 'g6-math-u6-l1',
          unitId: 'g6-math-u6',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 1,
          status: 'outline',
          title: 'What Makes a Question Statistical?',
          essentialQuestion: 'Which questions need data, and which just need a fact?',
          summary:
            'Learners sort questions into those that anticipate variability and those with a single answer. "How tall am I?" is not statistical; "how tall are the students in Year 7?" is. Getting this distinction right is what makes the rest of the unit make sense.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.SP.A.1', framework: 'CCSS-M', text: 'Recognise a statistical question as one that anticipates variability in the data related to the question and accounts for it in the answers.' },
          ],
          objectives: [
            'I can tell a statistical question from a non-statistical one.',
            'I can rewrite a non-statistical question so that it becomes statistical.',
          ],
          vocabulary: [
            { term: 'statistical question', definition: 'A question whose answers are expected to vary, so it needs data rather than a single fact.' },
            { term: 'variability', definition: 'The fact that the answers are not all the same.' },
          ],
          materials: ['Question cards for sorting', 'The printed worksheet'],
          prep: ['Write twelve question cards, deliberately including some near-misses that are hard to classify. The arguments about the borderline cases are the lesson.'],
          script: [],
          worksheet: { id: 'g6-math-u6-l1-ws', title: 'Does This Question Need Data?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Classifies questions correctly and justifies the classification by variability.', 'Rewrites a non-statistical question as a statistical one.'],
            exitTicket: 'Turn "how old is my teacher?" into a statistical question, and say what makes the new version different.',
          },
          differentiation: {
            support: ['Ask "would everyone give the same answer?" for each card. That single question does most of the sorting.'],
            extension: ['Write a statistical question that would be genuinely difficult to collect data for, and explain the difficulty.'],
          },
          misconceptions: [
            {
              misconception: 'A question is statistical if it contains numbers.',
              looksLike: '"How many days are in September?" is classified as statistical.',
              correction: 'Test it by asking three people. If all three must give the same answer, it is not statistical.',
            },
          ],
          homeExtension: ['Write down one statistical and one non-statistical question about your own household.'],
        },
        {
          id: 'g6-math-u6-l2',
          unitId: 'g6-math-u6',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 2,
          status: 'outline',
          title: 'Dot Plots and Histograms',
          essentialQuestion: 'How do I turn a list of numbers into a picture?',
          summary:
            'Building dot plots from raw data, then grouping into intervals to make a histogram. Learners see what grouping reveals and, crucially, what it hides — the same data with different bin widths can tell noticeably different stories.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.SP.B.4', framework: 'CCSS-M', text: 'Display numerical data in plots on a number line, including dot plots and histograms.' },
          ],
          objectives: [
            'I can draw a dot plot from a list of data.',
            'I can group data into intervals and draw a histogram.',
            'I can say what changing the interval width does to the picture.',
          ],
          vocabulary: [
            { term: 'dot plot', definition: 'A display with one dot per data value, stacked above a number line.' },
            { term: 'histogram', definition: 'A display where data is grouped into equal intervals and the bars show how many fall in each.' },
            { term: 'frequency', definition: 'How many values fall in a category or interval.' },
          ],
          materials: ['A real data set — family shoe sizes, reaction times, minutes of a journey', 'Squared paper', 'The printed worksheet'],
          prep: ['Collect a real data set with at least twenty values before the lesson. Made-up data is noticeably less interesting to plot.'],
          script: [],
          worksheet: { id: 'g6-math-u6-l2-ws', title: 'Turning Numbers into Pictures', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Draws an accurate dot plot.', 'Constructs a histogram with equal intervals and a labelled scale.'],
            exitTicket: 'Given twelve values, draw the dot plot and say which value occurs most often.',
          },
          differentiation: {
            support: ['Order the data list before plotting. It removes most of the counting errors.'],
            extension: ['Draw the same data with two different interval widths and write about how the story changes.'],
          },
          misconceptions: [
            {
              misconception: 'A histogram is a bar chart, so the bars should have gaps and the categories can be any width.',
              looksLike: 'The learner draws gapped bars with unequal intervals and orders them by height.',
              correction: 'Anchor the histogram to the number line underneath it. The bars touch because the intervals touch, and the order is fixed by the scale.',
            },
          ],
          homeExtension: ['Time everyone’s journey to school or work for a week and plot the results.'],
        },
        {
          id: 'g6-math-u6-l3',
          unitId: 'g6-math-u6',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 3,
          status: 'outline',
          title: 'Shape, Centre and Spread',
          essentialQuestion: 'How do I describe a whole distribution in a few sentences?',
          summary:
            'The vocabulary for describing a distribution: symmetric, skewed, clustered, gaps, peaks and outliers. Learners describe several distributions in words before computing anything, so that the numbers later have something to attach to.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.SP.A.2', framework: 'CCSS-M', text: 'Understand that a set of data collected to answer a statistical question has a distribution which can be described by its centre, spread and overall shape.' },
          ],
          objectives: [
            'I can describe the shape of a distribution in words.',
            'I can identify clusters, gaps and outliers on a plot.',
            'I can write a three-sentence description covering shape, centre and spread.',
          ],
          vocabulary: [
            { term: 'distribution', definition: 'The overall pattern of how the data values are spread out.' },
            { term: 'skewed', definition: 'Lopsided, with a longer tail on one side.' },
            { term: 'outlier', definition: 'A value far away from the rest of the data.' },
          ],
          materials: ['Four or five printed dot plots with clearly different shapes', 'The printed worksheet'],
          prep: ['Print a set of contrasting distributions — one symmetric, one right-skewed, one bimodal, one with a lone outlier.'],
          script: [],
          worksheet: { id: 'g6-math-u6-l3-ws', title: 'Describing the Whole Picture', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Uses shape vocabulary accurately.', 'Writes a description covering all three of shape, centre and spread.'],
            exitTicket: 'Show a right-skewed dot plot and ask for three sentences: one on shape, one on centre, one on spread.',
          },
          differentiation: {
            support: ['Provide a sentence frame for each of the three features, and fill only the blanks at first.'],
            extension: ['Given a written description, sketch a plot that would match it. Working backwards is much harder.'],
          },
          misconceptions: [
            {
              misconception: 'Describing data means saying the highest and lowest values.',
              looksLike: 'The learner reports the range and nothing else.',
              correction: 'Show two plots with the same range and utterly different shapes. The range clearly cannot be the whole story.',
            },
          ],
          homeExtension: ['Find a chart in a newspaper or online and describe its distribution out loud in three sentences.'],
        },

        /* ------------------------------------------------------- AUTHORED */
        {
          id: 'g6-math-u6-l4',
          unitId: 'g6-math-u6',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 4,
          status: 'authored',
          title: 'Mean, Median and Which One to Trust',
          essentialQuestion: 'When does the average lie to you?',
          summary:
            'The mean and the median are both measures of centre and they disagree whenever a distribution is skewed or carries an outlier. This lesson builds the mean as a balance point rather than as a procedure, builds the median as a positional middle, and then makes the learner choose between them and defend the choice — which is the actual Grade 6 standard.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.SP.A.3', framework: 'CCSS-M', text: 'Recognise that a measure of centre for a numerical data set summarises all of its values with a single number, while a measure of variation describes how its values vary with a single number.' },
            { code: 'CCSS.MATH.CONTENT.6.SP.B.5.C', framework: 'CCSS-M', text: 'Give quantitative measures of centre — median and/or mean — and variability, as well as describing any overall pattern and any striking deviations from the overall pattern.' },
            { code: 'CCSS.MATH.CONTENT.6.SP.B.5.D', framework: 'CCSS-M', text: 'Relate the choice of measures of centre and variability to the shape of the data distribution and the context in which the data were gathered.' },
          ],
          objectives: [
            'I can calculate the mean and the median of a data set.',
            'I can explain the mean as the balance point of the data.',
            'I can decide which measure of centre describes a distribution more honestly, and justify it.',
          ],
          vocabulary: [
            { term: 'mean', definition: 'The total of all the values shared equally between them; also the balance point of the distribution.', example: 'The mean of 3, 4 and 8 is 5.' },
            { term: 'median', definition: 'The middle value when the data is put in order.', example: 'The median of 3, 4 and 8 is 4.' },
            { term: 'outlier', definition: 'A value far away from the rest, which drags the mean towards it but leaves the median almost untouched.' },
            { term: 'skewed', definition: 'A lopsided distribution with a long tail on one side.' },
          ],
          materials: [
            'A 30 cm ruler and a pencil to balance it on, or a metre rule and a round pen',
            'Ten identical small cubes, coins or counters to act as weights',
            'Sticky notes or small cards',
            'The printed worksheet',
            'A calculator, allowed throughout',
          ],
          prep: [
            'Practise balancing the ruler on the pencil once before the lesson so the demonstration does not collapse on the first attempt. Tape helps.',
            'Write out the salary data set on a card so you can reveal it in one go: 18, 19, 19, 20, 21, 21, 22, 23, 24, 213 (in thousands).',
            'Have the "average number of legs" fact ready and resist explaining it too early.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Average Person Has Fewer Than Two Legs',
              minutes: 7,
              say: [
                'Here is a true statement. The average person has slightly fewer than two legs.',
                'No, I am not joking. It is true, and you can check it.',
                'Think about it. Almost everyone has exactly two. A small number of people have one or none. Nobody at all has three.',
                'So the total number of legs divided by the total number of people comes out just under two. The average is a number that describes almost nobody.',
                'That is not a trick. That is the mean doing exactly what it always does — and it is why "average" is one of the most misused words in the language.',
                'By the end of today you will be able to say precisely when the average is telling the truth and when it is not.',
              ],
              do: [
                'Write "average number of legs = 1.99" on paper and leave it visible for the whole lesson.',
                'Let them argue with it. The argument is the engagement, so do not resolve it quickly.',
              ],
              studentDoes: ['Argues, then works out why the statement is true.'],
              checks: [
                {
                  ask: 'Why does the mean come out below two when almost everybody has exactly two?',
                  lookFor: 'Because a few people pull it down and nobody pulls it back up — there is nothing above two.',
                  ifStuck: 'Ask: "Is there anyone with three legs to balance out the person with one?" The asymmetry is the whole answer.',
                },
              ],
              tip: 'This example is memorable because it is genuinely true and slightly absurd. Learners repeat it to other people, and repeating it means rehearsing the idea.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'The Mean Is a Balance Point',
              minutes: 12,
              say: [
                'Most people are taught the mean as "add them up and divide". That is how you calculate it. It is not what it is.',
                'Watch. I am balancing this ruler on a pencil. Right now it balances in the middle, because it is even on both sides.',
                'Now I put one cube on the 2, one on the 4 and one on the 6. Where does it balance? At 4. And 2 plus 4 plus 6, divided by 3, is 4. Same answer.',
                'Here is the useful bit. Watch what happens when I move one cube a long way out.',
                'I take the cube from the 6 and put it right out on the 20. The balance point slides way over. One value moved, and the centre moved with it.',
                'That is what an outlier does to a mean. Every single value pulls on it, and a value that is far out pulls hard.',
                'Now the median. The median does not care how far out that cube went. It only cares about position — which cube is in the middle of the line. Move the far cube to 100 and the middle cube is still the middle cube.',
                'So: the mean feels every value. The median only feels the order.',
              ],
              do: [
                'Balance the ruler physically. If it will not balance, tape a coin underneath as a keel — the demonstration is worth the fiddle.',
                'Move one weight dramatically outward and let them watch the balance point shift.',
                'Line the cubes up on the table and physically point at the middle one for the median. Two different actions for two different ideas.',
              ],
              studentDoes: ['Predicts where the ruler will balance, then checks; identifies the median cube by position.'],
              checks: [
                {
                  ask: 'If I move that far-out cube even further away, what happens to the mean? What happens to the median?',
                  lookFor: 'The mean moves further; the median does not move at all.',
                  ifStuck: 'Do it. Move it, rebalance, and point at the middle cube, which has not budged.',
                },
                {
                  ask: 'Why do we divide by the number of values when we calculate the mean?',
                  lookFor: 'Because we are sharing the total equally between them — it is the value everyone would have if it were levelled out.',
                },
              ],
              tip: 'The balance model matters more than it looks. It is the reason mean absolute deviation makes sense two lessons from now, and it is the reason the phrase "the mean is pulled by outliers" is a description rather than a slogan.',
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'The Salary Trap',
              minutes: 13,
              say: [
                'Real situation. A small company advertises a job and says "our average salary is £40,000". Sounds good.',
                'Here are the ten actual salaries, in thousands: 18, 19, 19, 20, 21, 21, 22, 23, 24 and 213.',
                'Work out the mean. Use the calculator, I am not interested in your arithmetic today.',
                'Exactly £40,000. So the company is not lying. That figure is true.',
                'Now work out the median. Order them and find the middle. What do you get?',
                'Twenty-one thousand. So which number describes what you would actually earn if you took this job?',
                'Both are correct. Only one is honest. That is the whole lesson.',
                'Last question before the worksheet: what should the company have published, and what would you accuse them of if they published the mean on purpose?',
              ],
              do: [
                'Reveal all ten numbers at once on the card. Revealing the 213 slowly kills the surprise.',
                'Make them compute both. Being told the mean is 40 is much weaker than getting 40 themselves.',
                'Write the two answers side by side with a large gap between them and leave it up.',
              ],
              studentDoes: ['Computes both measures, compares them, and states which is the more honest summary and why.'],
              checks: [
                {
                  ask: 'Who is the 213 and why does it change the mean so much?',
                  lookFor: 'The owner or a director; it is an outlier far above everything else and the mean feels every value.',
                },
                {
                  ask: 'Remove the 213 entirely. What happens to each measure?',
                  lookFor: 'The mean drops sharply, to around 20.8; the median barely shifts, from 21 to 20.5.',
                  ifStuck: 'Have them recompute both without it and write the four numbers in a two-by-two table.',
                },
              ],
              tip: 'Some learners will insist the company is lying. They are not, and this is a genuinely valuable distinction: a statement can be technically true and deliberately misleading. Sit with that for a minute — it is a life skill, not just a maths one.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 18,
              say: [
                'Four sections. The first two are calculation, then it gets interesting.',
                'Section one: build a dot plot from the data list, then find both measures from your plot.',
                'Section two is the balance-point one. Do not calculate first. Predict where it balances by looking, write the prediction down, then calculate. I want to see both numbers.',
                'Section three is where you choose. Each data set gets a mean, a median, and one sentence saying which you would report and why. The sentence is the part that counts.',
                'Section four is the histogram. Draw it, then say which measure of centre suits that shape.',
                'And here is the standing rule for this whole page: every number you write gets its units and its context. "21" is not an answer. "£21,000 per year" is.',
              ],
              do: [
                'Read every set of directions aloud.',
                'Leave the calculator available and stay out of the way for the choosing section — that is the diagnostic and rescuing them destroys it.',
              ],
              studentDoes: ['Completes all four sections, including the written justifications.'],
              checks: [
                {
                  ask: 'Show me the data set on this page where the mean and median are almost identical. Why are they?',
                  lookFor: 'The roughly symmetric set, with no outlier to drag the mean off the middle.',
                },
                {
                  ask: 'Read me one of your justification sentences.',
                  lookFor: 'A reason grounded in the shape of the distribution or a named outlier, not just "because it is bigger".',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Two Questions to Ask Any Average',
              minutes: 5,
              say: [
                'From now on, whenever anyone tells you an average, you ask two questions.',
                'One: is that the mean or the median? Most people saying "average" have no idea which they mean.',
                'Two: how spread out is the data? Because an average with no spread behind it is half a sentence.',
                'Give me an example from today where knowing only the mean would have misled you.',
                'Good. Ask those two questions for the rest of your life and you will be harder to fool than most adults.',
              ],
              do: ['Write the two questions on a card and put it above the desk for the rest of the unit.'],
              studentDoes: ['Recalls the salary or legs example and explains what the mean alone concealed.'],
              checks: [
                {
                  ask: 'A news report says the average house price in a town is £850,000. What do you want to know before you believe that tells you anything useful?',
                  lookFor: 'Whether it is mean or median, and whether a few very expensive houses are dragging it up.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g6-math-u6-l4-ws',
            title: 'Mean, Median and Which One to Trust',
            style: 'manipulative',
            prepNotes:
              'The dot plot axes on this page are deliberately unlabelled — writing the scale is part of the task, and it is where you will spot a learner who does not yet realise the spacing has to be even. Check that the number lines have printed with even tick spacing before you hand the page over. A calculator is allowed throughout; the arithmetic is not what is being assessed.',
            sections: [
              {
                id: 's1',
                title: 'Plot It, Then Measure It',
                directions:
                  'Here are the number of press-ups fourteen people managed in one minute: 12, 14, 15, 15, 16, 16, 16, 17, 18, 18, 19, 20, 21, 41. Write a scale on the number line, draw the dot plot, then find the mean and the median. Circle the value that is causing the trouble.',
                layout: 'full',
                items: [
                  'Mean = ______ press-ups',
                  'Median = ______ press-ups',
                  'Which value is the outlier? ______',
                  'Work out the mean again with the outlier removed. How much did it move? What about the median?',
                ],
                images: [
                  {
                    id: 'img-dotplot-blank',
                    slot: 'Section 1 — blank dot-plot axis',
                    purpose:
                      'Learners must choose and write their own scale. Supplying the numbers would remove the most common error at this level, which is uneven spacing, and the plot has to be built by hand for the outlier to feel like a real discovery rather than a stated fact.',
                    subject:
                      'a blank horizontal number line for a dot plot: one long horizontal line with thirteen short evenly spaced vertical tick marks along it and a wide clear area above the line',
                    count: 13,
                    composition:
                      'the horizontal line spans the full width of the frame, exactly thirteen short vertical tick marks sit on it at perfectly even intervals, a tall clear white area above the line at least six dot-heights deep for stacking dots, and a narrow clear strip below the line for writing a scale',
                    mustInclude: [
                      'exactly thirteen tick marks',
                      'perfectly even spacing between consecutive tick marks',
                      'a generous empty vertical space above the line for stacked dots',
                      'a clear empty strip below the line for handwritten numbers',
                    ],
                    mustAvoid: [
                      'any numbers, digits or labels on or under the line',
                      'any dots already plotted above the line',
                      'a vertical axis or a box frame around the plot',
                      'uneven tick spacing',
                    ],
                    aspect: '3:1',
                    altText: 'A blank dot-plot number line with thirteen evenly spaced unlabelled tick marks',
                  },
                ],
                writingLines: 4,
              },
              {
                id: 's2',
                title: 'Find the Balance Point',
                directions:
                  'The picture shows ten identical weights on a balanced plank. Predict where it balances by eye and mark your prediction with an arrow. Then work out the mean of the positions and compare. Were you close?',
                layout: 'full',
                items: [
                  'My prediction: the plank balances at position ______',
                  'The calculated mean: ______',
                  'If I moved the rightmost weight twice as far out, what would happen to the balance point? What would happen to the median position?',
                ],
                images: [
                  {
                    id: 'img-mean-balance',
                    slot: 'Section 2 — weights on a plank',
                    purpose:
                      'The balance model is what makes the mean an idea rather than a procedure. Predicting the fulcrum position by eye and then checking it arithmetically builds the intuition that every value pulls, and that distant values pull hardest.',
                    subject:
                      'a long straight horizontal plank resting on a single triangular fulcrum, with ten identical small cubes sitting on top of the plank at various positions along its length, most cubes clustered towards the left and one cube far out near the right-hand end',
                    count: 10,
                    composition:
                      'the plank runs horizontally across the full width of the frame with evenly spaced tick marks along its upper edge, the triangular fulcrum sits beneath it, ten identical cubes rest on the plank with nine of them grouped in the left half at separate tick positions and one lone cube near the far right end, every cube exactly the same size, the plank drawn perfectly level',
                    mustInclude: [
                      'exactly ten cubes, all identical in size',
                      'exactly one cube clearly separated from the group, far out to the right',
                      'evenly spaced tick marks along the top edge of the plank',
                      'a single triangular fulcrum beneath the plank',
                    ],
                    mustAvoid: [
                      'any numbers or labels on the plank or the cubes',
                      'cubes of differing sizes',
                      'the plank drawn tilted, which would give away the answer',
                      'more than one fulcrum, or a fulcrum positioned to indicate the balance point',
                    ],
                    aspect: '3:1',
                    altText: 'Ten identical cubes on a level plank over a triangular fulcrum, nine clustered left and one far right',
                  },
                  {
                    id: 'img-median-strip',
                    slot: 'Section 2 — ordered bars for the median',
                    purpose:
                      'Separates the median visually from the mean. Once the bars are in order, the median is a matter of counting in from both ends, and the picture shows that stretching the tallest bar would not move it.',
                    subject:
                      'a row of nine vertical bars of steadily increasing height, arranged shortest on the left to tallest on the right, with the rightmost bar dramatically taller than the rest',
                    count: 9,
                    composition:
                      'nine narrow vertical bars standing on a common horizontal baseline, evenly spaced with equal gaps, heights increasing steadily from left to right for the first eight bars and then jumping sharply for the ninth, all bars the same width and unshaded outlines',
                    mustInclude: [
                      'exactly nine bars',
                      'heights strictly increasing from left to right',
                      'the ninth bar at least twice the height of the eighth',
                      'all bars identical in width and sitting on the same baseline',
                    ],
                    mustAvoid: [
                      'numbers, labels or a value axis',
                      'bars of unequal width',
                      'shading or colour fill that would prevent writing on the bars',
                      'any marking of the middle bar',
                    ],
                    aspect: '16:9',
                    altText: 'Nine bars increasing in height from left to right, with the last one much taller',
                  },
                ],
                writingLines: 3,
              },
              {
                id: 's3',
                title: 'You Choose, and You Justify',
                directions:
                  'For each data set, find the mean and the median. Then write one sentence saying which you would report to someone who asked "what is typical here?" — and why. The sentence is worth more than the two numbers.',
                layout: 'column',
                items: [
                  'Set A — minutes spent on homework: 35, 40, 42, 45, 45, 48, 50, 52',
                  'Set B — number of goals scored by eight players: 0, 0, 1, 1, 2, 2, 3, 27',
                  'Set C — heights of nine plants in cm: 11, 12, 12, 13, 13, 13, 14, 14, 15',
                  'Set D — prices of seven second-hand bikes in pounds: 40, 55, 60, 65, 70, 80, 900',
                  'Which two of these four sets have a mean and a median that are almost the same? What do those two sets have in common?',
                ],
                writingLines: 8,
              },
              {
                id: 's4',
                title: 'From the Histogram to the Choice',
                directions:
                  'Group this data into intervals of 10 and draw the histogram: 4, 7, 9, 11, 12, 12, 14, 15, 18, 21, 23, 25, 29, 34, 47, 52, 68, 71, 95. Write your own scale on both axes. Then answer the question underneath.',
                layout: 'full',
                items: [
                  'Describe the shape of this distribution in one sentence.',
                  'Would you report the mean or the median as the typical value? Say why, using the shape as your reason.',
                ],
                images: [
                  {
                    id: 'img-histogram-blank',
                    slot: 'Section 4 — blank histogram frame',
                    purpose:
                      'A pre-drawn frame with touching intervals rules out the most common structural error — drawing a gapped bar chart instead of a histogram — while leaving the scale, the bar heights and the interpretation entirely to the learner.',
                    subject:
                      'a blank histogram frame: a vertical axis line up the left side, a horizontal axis line along the bottom divided into six equal touching intervals by short vertical tick marks, and an empty plotting area above',
                    count: 6,
                    composition:
                      'a tall rectangular plotting area bounded by a heavier vertical axis on the left and a heavier horizontal axis at the bottom, exactly six equal intervals marked along the horizontal axis by tick marks that touch with no gaps between them, faint horizontal gridlines across the plotting area at even heights, the plotting area completely empty, wide blank margins outside both axes for handwritten scales',
                    mustInclude: [
                      'exactly six equal intervals along the horizontal axis, touching with no gaps',
                      'a completely empty plotting area with no bars drawn',
                      'faint evenly spaced horizontal gridlines to support reading heights',
                      'blank margin outside both axes wide enough to write numbers in',
                    ],
                    mustAvoid: [
                      'any bars, numbers or axis labels',
                      'gaps between the intervals, which would make it a bar chart',
                      'intervals of unequal width',
                      'a title or legend',
                    ],
                    aspect: '4:3',
                    altText: 'A blank histogram frame with six equal touching intervals and an empty plotting area',
                  },
                ],
                writingLines: 3,
              },
            ],
            answerKey: [
              'Section 1: mean = 18.4 press-ups (258 ÷ 14); median = 16.5 press-ups. The outlier is 41. Without it the mean drops to about 16.7 and the median moves only to 16 — the mean shifts by roughly 1.7, the median by 0.5.',
              'Section 2: accept any reasonable prediction. The calculated mean is the mean of the ten marked positions; the key answer is that moving the far-right weight further out shifts the balance point further right, while the median position does not move at all.',
              'Section 3 — Set A: mean 44.6, median 45, report either, roughly symmetric. Set B: mean 4.5, median 1.5, report the median, the 27 is an extreme outlier and no player is remotely typical of 4.5. Set C: mean 13, median 13, report either, tight and symmetric. Set D: mean £181.43, median £65, report the median, the £900 bike drags the mean above every other bike in the list. Sets A and C are the matching pair; both are roughly symmetric with no outlier.',
              'Section 4: intervals 0–9, 10–19, 20–29, 30–39, 40–49, 50–59 and beyond; frequencies 3, 6, 4, 1, 1, 1 with a further 2 above 60. The distribution is right-skewed with a long tail. Report the median, because the few large values pull the mean above the bulk of the data.',
            ],
          },
          assessment: {
            successCriteria: [
              'Calculates the mean and median of a data set accurately.',
              'Explains the mean as a balance point that every value pulls on.',
              'Identifies an outlier and predicts its differing effect on mean and median.',
              'Chooses a measure of centre and justifies the choice from the shape of the distribution.',
            ],
            exitTicket:
              'Give this set: 4, 5, 5, 6, 6, 7, 48. Ask for the mean, the median, and one sentence saying which one you would report and why. The sentence is the assessment; the two numbers are just the entry fee.',
            rubric: [
              { level: 'emerging', descriptor: 'Calculates the mean by procedure but computes the median without ordering the data, and treats the two as interchangeable.' },
              { level: 'developing', descriptor: 'Computes both correctly and can spot an outlier, but justifies the choice of measure by which number "looks better" rather than by the shape of the distribution.' },
              { level: 'secure', descriptor: 'Computes both, explains the mean as a balance point, predicts the effect of moving an extreme value on each measure, and defends a choice of centre by reference to skew or an outlier.' },
            ],
          },
          differentiation: {
            support: [
              'Use data sets of five or seven values so the median is always an actual data point and never needs averaging two middles.',
              'Do the physical balancing every time before any calculation. The ruler and cubes carry the idea when the arithmetic will not.',
              'Give the mean and the median already calculated and ask only for the choice and the justification. Splitting the two demands roughly halves the difficulty.',
            ],
            extension: [
              'Construct a data set with a specified mean and median — for example, seven values with a mean of 20 and a median of 12. Building one is far harder than analysing one.',
              'Introduce the mode and discuss when a distribution has two peaks and no single sensible centre at all.',
              'Find a real published statistic that uses "average" without saying which one, and work out which it must be from the context.',
            ],
            language: [
              '"Average", "mean" and "typical" are used loosely in everyday English and precisely in mathematics. Be explicit that "average" in ordinary speech usually means the mean, and insist on the precise word in written answers.',
              'The verb "to skew" is unfamiliar to most learners in any language. Teach it with a physical gesture — one hand pulling a shape sideways — before using it in writing.',
            ],
          },
          misconceptions: [
            {
              misconception: 'The median is the middle number of the list as written, without ordering it first.',
              looksLike: 'For 8, 3, 9, 2, 5 the learner reports 9 as the median.',
              correction: 'Write each value on a separate card and physically sort them into a line before picking the middle one. Ordering becomes a step you can see, not one you can forget.',
            },
            {
              misconception: 'The mean is always the best measure because it uses all the data.',
              looksLike: 'The learner reports a mean of £181 for the second-hand bikes and does not blink at the fact that six of the seven bikes cost less than half of it.',
              correction: 'Ask them to point to a bike that costs about the mean. There is not one. A measure of centre that describes none of the data is not doing its job.',
            },
            {
              misconception: 'An outlier is a mistake and should be deleted.',
              looksLike: 'The learner crosses out the £900 bike and reports the mean of the remaining six as the answer.',
              correction: 'Ask whether the expensive bike is real. It is, and it is part of the market. You do not delete inconvenient data; you choose a summary that copes with it, and you mention it.',
            },
            {
              misconception: 'Mean and median are just two different formulas that should give roughly the same answer.',
              looksLike: 'When the two answers differ by a factor of three, the learner assumes an arithmetic error and recalculates instead of interpreting the gap.',
              correction: 'Treat a big gap as information, not an error. A large difference between mean and median is the clearest signal you have that the distribution is skewed.',
            },
          ],
          homeExtension: [
            'Find an "average" quoted in a news story this week and work out whether it is a mean or a median, or whether the article does not say. Most do not say.',
            'Collect the ages of everyone in the extended family and compute both measures. Then ask which one describes the family better and argue about it over dinner.',
            'Look up the mean and median house price for your area — both are usually published — and work out what the gap between them tells you about the local housing market.',
          ],
          teacherNotes:
            'The calculation is easy and the judgement is hard, so watch the balance of your time carefully: if you spend forty minutes on arithmetic you have taught the wrong lesson. The part that genuinely sticks is the salary example, because the distinction between "technically true" and "honest" is the intellectual content here and it transfers well beyond mathematics. If time runs short, cut section 4 of the worksheet — histograms return in the next lesson with more room. Do not cut section 3. One more thing worth knowing: many adults were taught that the median is what you use when the data is "messy", which is nearly right but leaves learners unable to say why. The balance-point demonstration is what turns that folk rule into a reason.',
        },

        {
          id: 'g6-math-u6-l5',
          unitId: 'g6-math-u6',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 5,
          status: 'outline',
          title: 'Box Plots and the Interquartile Range',
          essentialQuestion: 'How can five numbers summarise a whole data set?',
          summary:
            'The five-number summary and the box plot built from it. The interquartile range arrives as a measure of spread that, like the median, is unbothered by outliers — which makes it the natural partner to the median chosen in the previous lesson.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.SP.B.4', framework: 'CCSS-M', text: 'Display numerical data in plots on a number line, including dot plots, histograms and box plots.' },
            { code: 'CCSS.MATH.CONTENT.6.SP.B.5.C', framework: 'CCSS-M', text: 'Give quantitative measures of centre and variability, including the interquartile range and/or mean absolute deviation.' },
          ],
          objectives: [
            'I can find the five-number summary of a data set.',
            'I can draw a box plot to scale.',
            'I can interpret the interquartile range as the spread of the middle half of the data.',
          ],
          vocabulary: [
            { term: 'quartile', definition: 'A value that splits the ordered data into quarters.' },
            { term: 'interquartile range', definition: 'The distance between the lower and upper quartiles — the spread of the middle half.' },
            { term: 'five-number summary', definition: 'Minimum, lower quartile, median, upper quartile, maximum.' },
          ],
          materials: ['Data cards to sort physically', 'Squared paper', 'The printed worksheet'],
          prep: ['Write each data value on a separate card. Splitting a physical line of cards into quarters is far clearer than any explanation of quartiles.'],
          script: [],
          worksheet: { id: 'g6-math-u6-l5-ws', title: 'Five Numbers, One Picture', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Finds the five-number summary correctly.', 'Draws an accurate box plot to a stated scale.', 'Explains what the box contains.'],
            exitTicket: 'Given eleven ordered values, find the five-number summary and say what fraction of the data sits inside the box.',
          },
          differentiation: {
            support: ['Use data sets whose size makes the quartiles land on actual values, such as 7 or 11 items.'],
            extension: ['Compare two box plots on the same scale and write about which group is more consistent and why.'],
          },
          misconceptions: [
            {
              misconception: 'A longer box means more data points.',
              looksLike: 'The learner says the group with the wider box has more people in it.',
              correction: 'Every box holds exactly half the data by construction. A wider box means more spread, not more values.',
            },
          ],
          homeExtension: ['Draw box plots for two sports teams’ scores and argue about which is the more reliable team.'],
        },
        {
          id: 'g6-math-u6-l6',
          unitId: 'g6-math-u6',
          gradeId: 'g6',
          subjectId: 'math',
          sequence: 6,
          status: 'outline',
          title: 'Mean Absolute Deviation and Reporting Honestly',
          essentialQuestion: 'How do I say in one number how spread out the data is?',
          summary:
            'Mean absolute deviation as the average distance from the mean, built directly on the balance-point model. The unit closes by assembling a complete, honest data report: number of observations, attribute and units, centre, spread and shape.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.6.SP.B.5.C', framework: 'CCSS-M', text: 'Give quantitative measures of centre and variability, including the interquartile range and/or mean absolute deviation.' },
            { code: 'CCSS.MATH.CONTENT.6.SP.B.5.A', framework: 'CCSS-M', text: 'Report the number of observations in a data set.' },
            { code: 'CCSS.MATH.CONTENT.6.SP.B.5.B', framework: 'CCSS-M', text: 'Describe the nature of the attribute under investigation, including how it was measured and its units of measurement.' },
          ],
          objectives: [
            'I can calculate the mean absolute deviation of a small data set.',
            'I can interpret it as the typical distance a value sits from the mean.',
            'I can write a complete data report covering observations, attribute, centre, spread and shape.',
          ],
          vocabulary: [
            { term: 'deviation', definition: 'How far one value is from the mean.' },
            { term: 'mean absolute deviation', definition: 'The average of those distances, ignoring their direction.' },
          ],
          materials: ['Calculator', 'A table template with a deviation column', 'The printed worksheet'],
          prep: ['Prepare a table with columns for value, distance from the mean, and absolute distance. The organisation is most of the difficulty.'],
          script: [],
          worksheet: { id: 'g6-math-u6-l6-ws', title: 'How Far From Typical?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Computes mean absolute deviation accurately.', 'Interprets it in context with units.', 'Produces a complete five-part data report.'],
            exitTicket: 'For 4, 6, 8, 10, 12, find the mean and the mean absolute deviation, and say in one sentence what the MAD tells you.',
          },
          differentiation: {
            support: ['Keep data sets to five values with a whole-number mean, so the arithmetic never obscures the idea.'],
            extension: ['Compare two data sets with the same mean and very different MADs, and describe the practical difference between them.'],
          },
          misconceptions: [
            {
              misconception: 'The deviations should be added with their signs, so the total is always zero and MAD must be zero.',
              looksLike: 'The learner computes a MAD of 0 for a clearly spread-out data set and is untroubled by it.',
              correction: 'That total being zero is exactly what the balance point guarantees. Take the absolute value of each distance first — we want how far, not which way.',
            },
          ],
          homeExtension: ['Time the same journey on five different days and calculate the mean and the mean absolute deviation. The MAD is how much extra time to leave.'],
        },
      ],
    },
  ],
}

export default course
