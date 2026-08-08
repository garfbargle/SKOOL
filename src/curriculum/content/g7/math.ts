import type { SubjectCourse } from '../../types'

/**
 * Grade 7 Mathematics.
 *
 * Seventh grade is the year arithmetic stops being arithmetic. Ratios become
 * functions, the number line grows a left-hand side that behaves, and letters
 * start standing in for quantities that vary. Two lessons are fully scripted —
 * the sign-rule derivation in Unit 2 and compound probability in Unit 5 —
 * because those are the two places where a rule taught as a rule does the most
 * long-term damage.
 */
const course: SubjectCourse = {
  gradeId: 'g7',
  subjectId: 'math',
  title: 'Grade 7 Mathematics',
  overview:
    'Grade 7 is the bridge year. A student arrives able to compute and leaves able to model. Proportional reasoning turns ratio tables into equations and graphs; the number line extends to the left in a way that has to be reasoned about rather than memorised; expressions get rewritten to reveal what a situation is actually doing; geometry moves from naming shapes to computing with them; and probability stops being a vocabulary list about likely and unlikely and becomes a set of models you can check against data. The single biggest predictor of success in Grade 8 algebra is whether proportional reasoning and signed-number reasoning are genuinely understood here rather than survived.',
  yearGoals: [
    'Recognise a proportional relationship in a table, a graph, an equation or a description, and use the constant of proportionality fluently in all four.',
    'Add, subtract, multiply and divide rational numbers, and explain why the sign rules have to be what they are.',
    'Write, rewrite and solve multi-step equations and inequalities of the forms px + q = r and p(x + q) = r, and interpret the solution set in context.',
    'Work confidently with scale, circles, angle relationships, cross-sections, surface area and volume.',
    'Use random samples to make inferences about a population, and build probability models for simple and compound events.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'g7-math-u1',
      gradeId: 'g7',
      subjectId: 'math',
      sequence: 1,
      title: 'Proportional Relationships',
      bigIdea:
        'A proportional relationship is one number multiplied by a constant to get another — and that single constant shows up as a unit rate, as a slope through the origin, and as the k in y = kx.',
      description:
        'Students meet the same relationship in four costumes: a table of equivalent ratios, a straight line through the origin, an equation of the form y = kx, and a sentence in English. The unit insists they connect the four rather than treat them as separate topics. Percent work is folded in at the end, not as a new subject but as proportional reasoning with a fixed second quantity of 100.',
      weeks: 6,
      standards: [
        { code: 'CCSS.MATH.CONTENT.7.RP.A.1', framework: 'CCSS-M', text: 'Compute unit rates associated with ratios of fractions, including ratios of lengths, areas and other quantities measured in like or different units.' },
        { code: 'CCSS.MATH.CONTENT.7.RP.A.2.A', framework: 'CCSS-M', text: 'Decide whether two quantities are in a proportional relationship, e.g. by testing for equivalent ratios in a table or graphing on a coordinate plane and observing whether the graph is a straight line through the origin.' },
        { code: 'CCSS.MATH.CONTENT.7.RP.A.2.B', framework: 'CCSS-M', text: 'Identify the constant of proportionality (unit rate) in tables, graphs, equations, diagrams and verbal descriptions of proportional relationships.' },
        { code: 'CCSS.MATH.CONTENT.7.RP.A.2.C', framework: 'CCSS-M', text: 'Represent proportional relationships by equations.' },
        { code: 'CCSS.MATH.CONTENT.7.RP.A.2.D', framework: 'CCSS-M', text: 'Explain what a point (x, y) on the graph of a proportional relationship means in terms of the situation, with special attention to the points (0, 0) and (1, r).' },
        { code: 'CCSS.MATH.CONTENT.7.RP.A.3', framework: 'CCSS-M', text: 'Use proportional relationships to solve multistep ratio and percent problems.' },
      ],
      lessonTitles: [
        'Unit Rates When the Numbers Are Fractions',
        'Is It Proportional? Testing a Table',
        'The Graph Test: Straight, and Through the Origin',
        'The Constant of Proportionality, Four Ways',
        'Percent Increase, Percent Decrease and the Multiplier',
        'Tax, Tip, Markup and Simple Interest',
      ],
      performanceTask:
        'The Price Audit: given a supermarket shelf photograph with four package sizes of the same product, the student computes the unit price for each, decides which is genuinely the best value, then works out what the largest package would cost after a 15% markdown and 8% sales tax — and writes one paragraph on why the biggest box is not always the cheapest.',
      lessons: [
        {
          id: 'g7-math-u1-l1',
          unitId: 'g7-math-u1',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 1,
          status: 'outline',
          title: 'Unit Rates When the Numbers Are Fractions',
          essentialQuestion: 'How fast is someone going if they walk half a mile in a quarter of an hour?',
          summary:
            'Students extend unit rate from whole numbers to ratios of fractions. The key move is recognising that "per one" means dividing by the second quantity, even when that quantity is 1/4. Complex fractions are handled as ordinary division rather than as a new species of object.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.RP.A.1', framework: 'CCSS-M', text: 'Compute unit rates associated with ratios of fractions, including ratios of lengths, areas and other quantities measured in like or different units.' },
          ],
          objectives: [
            'I can find a unit rate when both quantities are fractions.',
            'I can write a complex fraction as a division problem and simplify it.',
            'I can say in words what my unit rate means in the situation.',
          ],
          vocabulary: [
            { term: 'unit rate', definition: 'How much of the first quantity there is for exactly one of the second.', example: 'Half a mile in a quarter hour is 2 miles per hour.' },
            { term: 'complex fraction', definition: 'A fraction whose numerator or denominator is itself a fraction.', example: '(1/2) over (1/4).' },
            { term: 'per', definition: 'For each one of. It signals division by the second quantity.' },
          ],
          materials: ['A ruler and a measuring jug or kitchen scale', 'A stopwatch or phone timer', 'Squared paper'],
          prep: [
            'Have three real rate contexts ready to hand: a recipe that serves an awkward number, a walking pace, and a price per unit weight from a packet in your cupboard.',
            'Decide in advance that you will always say the full unit out loud — "miles per hour", never just "two".',
          ],
          script: [],
          worksheet: { id: 'g7-math-u1-l1-ws', title: 'Unit Rates With Fractions', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: [
              'Computes a unit rate from two fractional quantities.',
              'States the unit rate with its full units attached.',
              'Chooses which quantity goes on the bottom based on what the question asks.',
            ],
            exitTicket: 'A tap fills 3/4 of a bucket in 2/3 of a minute. How many buckets per minute? Ask for the answer and the sentence that explains what it means.',
          },
          differentiation: {
            support: ['Rewrite every complex fraction as an explicit division sentence before touching it.', 'Start with a whole-number denominator and only then move to a fractional one.'],
            extension: ['Ask for both unit rates from the same pair of quantities — miles per hour and hours per mile — and for what each one is useful for.'],
          },
          misconceptions: [
            {
              misconception: 'A unit rate is always the bigger number divided by the smaller one.',
              looksLike: 'Given 1/2 mile in 1/4 hour the student writes 1/4 divided by 1/2 to avoid an answer bigger than either number.',
              correction: 'Force the units into every line of working. "Miles per hour" tells you miles goes on top, no matter which number is larger.',
            },
          ],
          homeExtension: ['Compare two package sizes in the kitchen by price per 100 grams.', 'Time a walk to the end of the road and work out the pace in kilometres per hour.'],
        },
        {
          id: 'g7-math-u1-l2',
          unitId: 'g7-math-u1',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 2,
          status: 'outline',
          title: 'Is It Proportional? Testing a Table',
          essentialQuestion: 'How can I tell from a table whether two quantities are proportional?',
          summary:
            'Students test tables for equivalent ratios by computing y divided by x for every row. Non-examples matter as much as examples here — a table that adds a constant each time looks proportional to a student who only checks that the numbers go up together.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.RP.A.2.A', framework: 'CCSS-M', text: 'Decide whether two quantities are in a proportional relationship, e.g. by testing for equivalent ratios in a table.' },
          ],
          objectives: ['I can test a table for proportionality by dividing y by x in every row.', 'I can explain why a table that grows by adding is not proportional.'],
          vocabulary: [
            { term: 'proportional', definition: 'Two quantities are proportional when one is always the same constant times the other.' },
            { term: 'equivalent ratios', definition: 'Ratios that simplify to the same value.' },
          ],
          materials: ['Printed tables, half proportional and half not', 'A calculator'],
          prep: ['Prepare at least two convincing non-examples: a taxi fare with a flat pickup charge, and a table of ages of two siblings.'],
          script: [],
          worksheet: { id: 'g7-math-u1-l2-ws', title: 'Proportional or Not?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Divides y by x for every row rather than just one.', 'Correctly rejects an additive table.'],
            exitTicket: 'Give a four-row table for a taxi that charges 3 pounds plus 2 pounds a mile. Ask whether it is proportional and for the reason.',
          },
          differentiation: {
            support: ['Add a third column to the table labelled "y divided by x" and fill the first row together.'],
            extension: ['Ask the student to modify the taxi table by one number so that it becomes proportional, and to say what that change means in the real world.'],
          },
          misconceptions: [
            {
              misconception: 'If both columns increase, the relationship is proportional.',
              looksLike: 'The student calls a table proportional because "when x goes up, y goes up".',
              correction: 'Show the taxi table. Both columns rise, the ratios are 5, 3.5, 3, 2.75 — not constant. Increasing together is not the test.',
            },
          ],
          homeExtension: ['Look at a mobile phone tariff or a parking charge sheet and decide whether it is proportional.'],
        },
        {
          id: 'g7-math-u1-l3',
          unitId: 'g7-math-u1',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 3,
          status: 'outline',
          title: 'The Graph Test: Straight, and Through the Origin',
          essentialQuestion: 'What does a proportional relationship look like on a coordinate plane, and why must it pass through (0, 0)?',
          summary:
            'Students graph proportional and non-proportional data and discover the two-part test. The origin condition gets a real argument: zero of one quantity has to mean zero of the other, which is exactly why the taxi with a pickup fee fails.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.RP.A.2.A', framework: 'CCSS-M', text: 'Decide whether two quantities are in a proportional relationship by graphing on a coordinate plane and observing whether the graph is a straight line through the origin.' },
            { code: 'CCSS.MATH.CONTENT.7.RP.A.2.D', framework: 'CCSS-M', text: 'Explain what a point (x, y) on the graph of a proportional relationship means in terms of the situation, with special attention to the points (0, 0) and (1, r).' },
          ],
          objectives: ['I can plot a table on a coordinate plane and judge proportionality from the graph.', 'I can explain what the point (1, r) means in the situation.'],
          vocabulary: [
            { term: 'origin', definition: 'The point (0, 0) where the axes meet.' },
            { term: 'coordinate plane', definition: 'The grid formed by a horizontal and a vertical number line.' },
          ],
          materials: ['Squared paper or printed first-quadrant grids', 'A ruler', 'A pencil with an eraser'],
          prep: ['Draw the axes yourself first and choose scales that make the data fill the grid — a squashed graph hides the straightness.'],
          script: [],
          worksheet: { id: 'g7-math-u1-l3-ws', title: 'Reading the Line', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Applies both parts of the test: straight AND through the origin.', 'Interprets (1, r) as the unit rate.'],
            exitTicket: 'Sketch two graphs, one a line through the origin and one a parallel line crossing above it. Ask which is proportional and why the other fails.',
          },
          differentiation: {
            support: ['Provide the axes and the scale already drawn so the work is about interpretation, not plotting.'],
            extension: ['Ask what the graph of a proportional relationship with a very small constant looks like, and why a nearly flat line is still proportional.'],
          },
          misconceptions: [
            {
              misconception: 'Any straight line is a proportional relationship.',
              looksLike: 'The student calls y = 2x + 5 proportional because the graph is straight.',
              correction: 'Trace the line back to the vertical axis with a finger. It crosses at 5, not 0. Zero hours of work would still cost 5 pounds, which is not proportional.',
            },
          ],
          homeExtension: ['Sketch a graph of the cost of petrol against litres pumped and check that it goes through the origin.'],
        },
        {
          id: 'g7-math-u1-l4',
          unitId: 'g7-math-u1',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 4,
          status: 'outline',
          title: 'The Constant of Proportionality, Four Ways',
          essentialQuestion: 'Where is the same constant hiding in a table, a graph, an equation and a sentence?',
          summary:
            'The synthesis lesson of the unit. Students take one situation and find k four times over: as the quotient in the table, as the height of the graph at x equals 1, as the coefficient in y = kx, and as the "per" number in the sentence. Being able to move between the four is the whole objective.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.RP.A.2.B', framework: 'CCSS-M', text: 'Identify the constant of proportionality (unit rate) in tables, graphs, equations, diagrams and verbal descriptions of proportional relationships.' },
            { code: 'CCSS.MATH.CONTENT.7.RP.A.2.C', framework: 'CCSS-M', text: 'Represent proportional relationships by equations.' },
          ],
          objectives: ['I can find the constant of proportionality from any of the four representations.', 'I can write the equation y = kx for a situation described in words.'],
          vocabulary: [
            { term: 'constant of proportionality', definition: 'The fixed number k that you multiply x by to get y.' },
            { term: 'coefficient', definition: 'The number multiplying a variable.' },
          ],
          materials: ['A four-panel organiser sheet (table, graph, equation, words)', 'Squared paper'],
          prep: ['Choose one situation you will run through all four panels together before releasing the student to do their own.'],
          script: [],
          worksheet: { id: 'g7-math-u1-l4-ws', title: 'One Constant, Four Homes', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Produces the same value of k from all four representations of one situation.', 'Writes a correct equation from a verbal description.'],
            exitTicket: 'Give only the equation y = 6.5x for a job that pays by the hour. Ask for the table, the meaning of 6.5, and the point on the graph where you can see it.',
          },
          differentiation: {
            support: ['Give three of the four panels filled in and ask for only the missing one.'],
            extension: ['Give a graph with no gridline landing on x = 1 and ask the student to recover k anyway.'],
          },
          misconceptions: [
            {
              misconception: 'The constant of proportionality is whichever number appears in the problem.',
              looksLike: 'From "12 pencils cost 4 pounds" the student writes y = 12x.',
              correction: 'Ask what one pencil costs. Rebuild k as a quotient every single time until the habit sticks.',
            },
          ],
          homeExtension: ['Write the equation for your own household: cost of a shower against minutes, or petrol against distance.'],
        },
        {
          id: 'g7-math-u1-l5',
          unitId: 'g7-math-u1',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 5,
          status: 'outline',
          title: 'Percent Increase, Percent Decrease and the Multiplier',
          essentialQuestion: 'Why is adding 20% the same as multiplying by 1.2?',
          summary:
            'Students move from the two-step "find the percent, then add it" method to the single multiplier. The multiplier is what makes multi-step percent problems tractable, and it is also what makes it obvious that a 20% rise followed by a 20% fall does not get you back where you started.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.RP.A.3', framework: 'CCSS-M', text: 'Use proportional relationships to solve multistep ratio and percent problems, including percent increase and decrease.' },
            { code: 'CCSS.MATH.CONTENT.7.EE.A.2', framework: 'CCSS-M', text: 'Understand that rewriting an expression in different forms in a problem context can shed light on the problem, e.g. that a + 0.05a = 1.05a means that increase by 5% is the same as multiply by 1.05.' },
          ],
          objectives: ['I can write any percent change as a single multiplier.', 'I can find the percent change between two amounts.', 'I can explain why up 20% then down 20% is a loss.'],
          vocabulary: [
            { term: 'multiplier', definition: 'The single number you multiply by to apply a percent change.', example: 'A 15% discount has multiplier 0.85.' },
            { term: 'percent change', definition: 'The change divided by the original amount, written as a percent.' },
          ],
          materials: ['A calculator', 'Real price tags or advertisements showing discounts'],
          prep: ['Have a real "was and now" price to hand. Students argue harder about a trainer price than about x.'],
          script: [],
          worksheet: { id: 'g7-math-u1-l5-ws', title: 'The Single Multiplier', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Converts a percent change to a multiplier in one step.', 'Computes percent change using the original amount as the denominator.'],
            exitTicket: 'A jacket rises from 40 to 50 pounds, then falls back to 40. Ask for both percent changes and why they are not the same number.',
          },
          differentiation: {
            support: ['Build a multiplier table together: 10% up is 1.1, 10% down is 0.9, and so on, before any word problems.'],
            extension: ['Give the final price and the discount and ask for the original — reverse percentage, which is genuinely hard.'],
          },
          misconceptions: [
            {
              misconception: 'Percent change is measured against whichever number is convenient.',
              looksLike: 'Going from 40 to 50 and from 50 to 40 are both reported as 20%.',
              correction: 'Write the word "original" under the denominator every time. From 40 the change is 10 out of 40; from 50 it is 10 out of 50.',
            },
          ],
          homeExtension: ['Find a sale item and work out the original price from the discount and the sale price.'],
        },
        {
          id: 'g7-math-u1-l6',
          unitId: 'g7-math-u1',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 6,
          status: 'outline',
          title: 'Tax, Tip, Markup and Simple Interest',
          essentialQuestion: 'How do I handle a problem with two or three percent steps in a row?',
          summary:
            'The applications lesson. Students chain multipliers for tax on a discounted price, work out a tip, distinguish markup from margin, and compute simple interest with I = Prt. Estimation is required throughout: an answer that is not roughly checkable is not finished.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.RP.A.3', framework: 'CCSS-M', text: 'Use proportional relationships to solve multistep ratio and percent problems: simple interest, tax, markups and markdowns, gratuities and commissions, fees, percent increase and decrease, percent error.' },
            { code: 'CCSS.MATH.CONTENT.7.EE.B.3', framework: 'CCSS-M', text: 'Solve multi-step real-life problems posed with positive and negative rational numbers in any form, and assess the reasonableness of answers using mental computation and estimation.' },
          ],
          objectives: ['I can chain two percent steps in one calculation.', 'I can compute simple interest.', 'I can estimate the answer before I calculate it.'],
          vocabulary: [
            { term: 'principal', definition: 'The starting amount of money that interest is calculated on.' },
            { term: 'markup', definition: 'The amount added to the cost price to get the selling price.' },
            { term: 'gratuity', definition: 'A tip, calculated as a percent of the bill.' },
          ],
          materials: ['A restaurant bill or receipt', 'A calculator'],
          prep: ['Insist on a written estimate before every calculation. Say out loud that you will not accept a bare number.'],
          script: [],
          worksheet: { id: 'g7-math-u1-l6-ws', title: 'Receipts and Interest', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Applies two percent steps in the correct order.', 'Uses I = Prt correctly with time in years.', 'Produces a reasonable estimate first.'],
            exitTicket: 'A 60 pound coat is marked down 25%, then 8% tax is added. Ask for an estimate first, then the exact total.',
          },
          differentiation: {
            support: ['Do one step per line with a written label for each line.'],
            extension: ['Ask whether applying the discount before or after the tax changes the total, and to prove it algebraically.'],
          },
          misconceptions: [
            {
              misconception: 'Percentages can be added together across steps.',
              looksLike: 'A 25% discount then 8% tax is treated as a net 17% discount.',
              correction: 'Run both routes on 100 pounds. 0.75 times 1.08 is 0.81, not 0.83. Multipliers multiply; they do not add.',
            },
          ],
          homeExtension: ['Recalculate the last restaurant receipt in the house, including the tip, and check the arithmetic on it.'],
        },
      ],
    },

    /* ============================================================ UNIT 2 */
    {
      id: 'g7-math-u2',
      gradeId: 'g7',
      subjectId: 'math',
      sequence: 2,
      title: 'Rational Numbers and Why the Sign Rules Work',
      bigIdea:
        'The negative numbers are not a separate arithmetic with its own rules — they are forced to behave the way they do by the requirement that the properties of operations keep working.',
      description:
        'Most students meet the sign rules as four sentences to memorise, and most of them mix the multiplication rules up with the addition rules by March. This unit derives them instead. Addition and subtraction are built on the number line, subtraction is reframed as adding the opposite, and multiplication of negatives is developed twice — once from a pattern and once from the distributive property — so that the rule arrives as a consequence rather than a decree.',
      weeks: 6,
      standards: [
        { code: 'CCSS.MATH.CONTENT.7.NS.A.1.A', framework: 'CCSS-M', text: 'Describe situations in which opposite quantities combine to make 0.' },
        { code: 'CCSS.MATH.CONTENT.7.NS.A.1.B', framework: 'CCSS-M', text: 'Understand p + q as the number located a distance |q| from p, in the positive or negative direction depending on whether q is positive or negative. Show that a number and its opposite have a sum of 0.' },
        { code: 'CCSS.MATH.CONTENT.7.NS.A.1.C', framework: 'CCSS-M', text: 'Understand subtraction of rational numbers as adding the additive inverse, p − q = p + (−q). Show that the distance between two rational numbers on the number line is the absolute value of their difference.' },
        { code: 'CCSS.MATH.CONTENT.7.NS.A.2.A', framework: 'CCSS-M', text: 'Understand that multiplication is extended from fractions to rational numbers by requiring that operations continue to satisfy the properties of operations, particularly the distributive property, leading to products such as (−1)(−1) = 1.' },
        { code: 'CCSS.MATH.CONTENT.7.NS.A.2.D', framework: 'CCSS-M', text: 'Convert a rational number to a decimal using long division; know that the decimal form of a rational number terminates in 0s or eventually repeats.' },
        { code: 'CCSS.MATH.CONTENT.7.NS.A.3', framework: 'CCSS-M', text: 'Solve real-world and mathematical problems involving the four operations with rational numbers.' },
      ],
      lessonTitles: [
        'Opposites That Cancel',
        'Adding on the Number Line',
        'Subtraction Is Adding the Opposite',
        'Why a Negative Times a Negative Is Positive',
        'Dividing Signed Numbers and the Three Signs of a Fraction',
        'Terminating, Repeating and Long Division',
      ],
      performanceTask:
        'The Account Statement: students receive a fictional bank statement with deposits, withdrawals, a recurring monthly fee and one overdraft, compute the running balance in a signed-number column, and then answer four questions that can only be settled by reasoning about signs rather than by recomputing.',
      lessons: [
        {
          id: 'g7-math-u2-l1',
          unitId: 'g7-math-u2',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 1,
          status: 'outline',
          title: 'Opposites That Cancel',
          essentialQuestion: 'What kinds of real situations add up to exactly zero?',
          summary:
            'Additive inverses in context: a deposit and a withdrawal of the same size, a step forwards and a step back, a positive charge and a negative charge. Students build zero pairs physically with two-colour counters so that the later abstract work has something to lean on.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.NS.A.1.A', framework: 'CCSS-M', text: 'Describe situations in which opposite quantities combine to make 0.' },
          ],
          objectives: ['I can give a real situation where two quantities combine to make zero.', 'I can build and remove zero pairs with counters.'],
          vocabulary: [
            { term: 'additive inverse', definition: 'The number that adds to a given number to make zero.', example: 'The additive inverse of −7 is 7.' },
            { term: 'zero pair', definition: 'A positive and a negative of the same size, which together are worth nothing.' },
          ],
          materials: ['Two-colour counters, or coins with one side marked', 'A whiteboard'],
          prep: ['Count out twenty counters. Decide which colour is positive and never change it mid-unit.'],
          script: [],
          worksheet: { id: 'g7-math-u2-l1-ws', title: 'Making Zero', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Names the additive inverse of any rational number.', 'Explains a zero-sum situation in context.'],
            exitTicket: 'Ask for three genuinely different real situations that add to zero, from three different areas of life.',
          },
          differentiation: {
            support: ['Stay with whole numbers and physical counters for the whole lesson.'],
            extension: ['Ask for the additive inverse of expressions such as −(x + 3).'],
          },
          misconceptions: [
            {
              misconception: 'The opposite of a number is its reciprocal.',
              looksLike: 'The student says the opposite of 4 is 1/4.',
              correction: 'Point at the number line. Opposite means the same distance from zero on the other side, not the flip of a fraction.',
            },
          ],
          homeExtension: ['Find two entries on a household bill or bank app that cancel each other out.'],
        },
        {
          id: 'g7-math-u2-l2',
          unitId: 'g7-math-u2',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 2,
          status: 'outline',
          title: 'Adding on the Number Line',
          essentialQuestion: 'Where do I land if I start at p and add q?',
          summary:
            'Addition as movement: start at p, then travel a distance of |q| — right if q is positive, left if q is negative. Students draw the arrows before they write the answer, which stops the guessing that comes from half-remembered sign rules.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.NS.A.1.B', framework: 'CCSS-M', text: 'Understand p + q as the number located a distance |q| from p, in the positive or negative direction depending on whether q is positive or negative.' },
          ],
          objectives: ['I can model p + q with an arrow on a number line.', 'I can add two rational numbers with different signs and say why the answer has the sign it has.'],
          vocabulary: [
            { term: 'absolute value', definition: 'The distance a number is from zero, always positive or zero.' },
            { term: 'magnitude', definition: 'How big a number is, ignoring its sign.' },
          ],
          materials: ['Printed number lines from −10 to 10', 'A ruler', 'Coloured pens for the two arrows'],
          prep: ['Draw the first example yourself so the arrow convention is fixed: arrows sit above the line, tail to head.'],
          script: [],
          worksheet: { id: 'g7-math-u2-l2-ws', title: 'Arrows on the Line', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Draws a correct two-arrow diagram for any sum.', 'Predicts the sign of the answer before computing it.'],
            exitTicket: '−8 + 5 and 8 + (−5). Ask for both answers and for what is the same about them.',
          },
          differentiation: {
            support: ['Use a vertical number line — a thermometer or a lift — if left and right are causing trouble.'],
            extension: ['Add three signed numbers in one diagram and reorder them to make it easier.'],
          },
          misconceptions: [
            {
              misconception: 'Adding always makes a number bigger.',
              looksLike: 'The student computes 6 + (−9) as 15 or 3 rather than −3.',
              correction: 'Walk it on the floor with a taped number line. Adding a negative is a genuine move to the left; the word "add" does not promise growth.',
            },
          ],
          homeExtension: ['Track the temperature at breakfast and at bedtime for three days and write the change as a signed number.'],
        },
        {
          id: 'g7-math-u2-l3',
          unitId: 'g7-math-u2',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 3,
          status: 'outline',
          title: 'Subtraction Is Adding the Opposite',
          essentialQuestion: 'Why can I turn every subtraction into an addition, and why would I want to?',
          summary:
            'p − q = p + (−q), established on the number line and then used relentlessly. Students also meet distance as |p − q| and check that it comes out positive whichever order they subtract in.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.NS.A.1.C', framework: 'CCSS-M', text: 'Understand subtraction of rational numbers as adding the additive inverse. Show that the distance between two rational numbers on the number line is the absolute value of their difference.' },
          ],
          objectives: ['I can rewrite any subtraction as an addition.', 'I can find the distance between two numbers on the number line.'],
          vocabulary: [
            { term: 'difference', definition: 'The result of a subtraction.' },
            { term: 'distance', definition: 'How far apart two numbers are, always positive.' },
          ],
          materials: ['Printed number lines', 'A whiteboard'],
          prep: ['Prepare a set of pairs that includes at least two where the answer is a bigger positive than either number, such as 4 − (−6).'],
          script: [],
          worksheet: { id: 'g7-math-u2-l3-ws', title: 'Add the Opposite', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Rewrites subtraction as addition of the inverse before computing.', 'Reports distance as a positive number regardless of order.'],
            exitTicket: 'What is the distance between −13 and 6? Ask for the subtraction, the absolute value and a number-line sketch.',
          },
          differentiation: {
            support: ['Insist on the rewriting step in writing for every problem, with no mental shortcuts allowed yet.'],
            extension: ['Give |x − 3| = 7 and ask for both values of x.'],
          },
          misconceptions: [
            {
              misconception: 'Two minus signs next to each other are a typing error.',
              looksLike: 'The student reads 4 − (−6) as 4 − 6 and answers −2.',
              correction: 'Say the sentence out loud: "four, take away negative six". Then rewrite as 4 + 6 using the rule and check on the line.',
            },
          ],
          homeExtension: ['Look up two cities with temperatures on opposite sides of zero and compute the gap.'],
        },
        /* ------------------------------------------------- L4 AUTHORED */
        {
          id: 'g7-math-u2-l4',
          unitId: 'g7-math-u2',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 4,
          status: 'authored',
          title: 'Why a Negative Times a Negative Is Positive',
          essentialQuestion: 'Is the rule about two negatives something someone decided, or is it forced?',
          summary:
            'The sign rule for multiplication is derived twice: once by continuing a multiplication pattern down through zero, and once from the distributive property applied to 5 × (3 + (−3)) = 0. Both routes arrive at the same place, and the point of running both is that the student stops experiencing the rule as arbitrary. This is the lesson that determines whether signed-number errors persist into algebra.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.NS.A.2.A', framework: 'CCSS-M', text: 'Understand that multiplication is extended from fractions to rational numbers by requiring that operations continue to satisfy the properties of operations, particularly the distributive property, leading to products such as (−1)(−1) = 1 and the rules for multiplying signed numbers.' },
            { code: 'CCSS.MATH.CONTENT.7.NS.A.2.C', framework: 'CCSS-M', text: 'Apply properties of operations as strategies to multiply and divide rational numbers.' },
            { code: 'CCSS.MATH.CONTENT.7.NS.A.1.C', framework: 'CCSS-M', text: 'Understand subtraction of rational numbers as adding the additive inverse.' },
          ],
          objectives: [
            'I can continue a multiplication pattern past zero and predict the next products.',
            'I can use the distributive property to show that a negative times a negative has to be positive.',
            'I can multiply any two rational numbers and justify the sign of my answer with a reason, not a rule.',
          ],
          vocabulary: [
            { term: 'distributive property', definition: 'a(b + c) = ab + ac. Multiplying a sum gives the same result as multiplying each part and adding.', example: '5(3 + (−3)) = 5(3) + 5(−3).' },
            { term: 'additive inverse', definition: 'The number that adds to a given number to make zero.', example: '−3 is the additive inverse of 3.' },
            { term: 'product', definition: 'The result of multiplying.' },
            { term: 'pattern', definition: 'A regular change that continues predictably.', example: '15, 10, 5, 0, … each step is 5 less.' },
          ],
          materials: [
            'A whiteboard or a large sheet of paper you can write a vertical column on',
            'Two-colour counters (optional but useful for the guided beat)',
            'The printed worksheet',
            'A pencil and a coloured pen',
          ],
          prep: [
            'Write the pattern column down the left of your board before you start, but stop at 5 × 1 = 5. The blank space underneath is the whole hook.',
            'Rehearse the distributive argument once out loud. It is four lines and it goes badly if you improvise the order.',
            'Decide now that you will not say "two negatives make a positive" at any point in the first thirty minutes. Let the student say it first.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'I Bet You Cannot Tell Me Why',
              minutes: 6,
              say: [
                'Quick question. Negative four times negative six. What is it?',
                'Twenty-four. Right. Now the real question: why?',
                'And "because two negatives make a positive" is not an answer, that is just the thing restated. Who decided that? Why not negative twenty-four? It would be tidier.',
                'Here is my claim, and I want you to try to break it: nobody decided. Nobody voted on it. Once you have negative numbers at all, that answer is forced. There was no choice.',
                'By the end of this lesson you are going to be able to prove that to somebody else. Two different ways.',
              ],
              do: [
                'Write "(−4) × (−6) = ?" large on the board and leave it there for the whole lesson.',
                'Genuinely refuse the memorised rule. Push back once, lightly, and let the silence sit.',
              ],
              studentDoes: ['Gives the memorised answer, then discovers they cannot justify it.'],
              checks: [
                {
                  ask: 'Why is it positive twenty-four and not negative twenty-four?',
                  lookFor: 'Any honest version of "I do not actually know, I was just told". That is the productive starting point.',
                  ifStuck: 'If the student insists the rule is the reason, ask them to explain it to a younger sibling who asks "but why". The gap opens on its own.',
                },
              ],
              tip: 'Do not rescue the discomfort here. A student who has just noticed that they believe something for no reason is the most attentive student you will have all week.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Route One: Fall Off the End of the Pattern',
              minutes: 14,
              say: [
                'We are going to build a column and let it tell us the answer. Read these with me.',
                'Five times three is fifteen. Five times two is ten. Five times one is five. Five times zero is zero.',
                'Look at the right-hand column. Fifteen, ten, five, zero. What is happening every time I drop a row?',
                'It goes down by five. Every single row. So tell me: five times negative one. What has to come next?',
                'Negative five. You did not compute that, you predicted it — and the pattern has not lied to us yet. Keep going. Five times negative two?',
                'Now the interesting part. We do the same thing but we count down the other factor instead. Watch.',
                'Three times negative four is negative twelve. Two times negative four is negative eight. One times negative four is negative four. Zero times negative four is zero.',
                'Look at that right column now. Negative twelve, negative eight, negative four, zero. What is happening each row?',
                'It goes UP by four each time. So what comes after zero? Negative one times negative four has to be…',
                'Four. Positive four. The pattern does not care how you feel about it. It has been going up by four the whole way and it is not going to stop at the interesting bit.',
              ],
              do: [
                'Write the first column vertically, aligned, so the descending products are in a clean line the student can run a finger down.',
                'Draw a curved arrow between consecutive products and write the step size beside it.',
                'When you reach the second column, cover the rows below zero with your hand and reveal them one at a time.',
              ],
              studentDoes: ['Reads the pattern aloud, states the step size, and predicts each next product before it is written.'],
              checks: [
                {
                  ask: 'What is the step size in this column, and does it change anywhere?',
                  lookFor: 'A constant step named correctly, and the observation that it stays constant across zero.',
                  ifStuck: 'Write the differences between consecutive rows in a third column. Seeing −4, −4, −4 written down makes the constancy undeniable.',
                },
                {
                  ask: 'Why should the pattern be allowed to continue past zero at all?',
                  lookFor: 'Because nothing special happens at zero — it is just another number on the line.',
                  ifStuck: 'Ask what would have to be true for the pattern to break there, and whether they can name any reason it would.',
                },
              ],
              tip: 'The second column is the one that does the work. Slow down when the products start climbing. Students often notice the direction change out loud, and that noise is the lesson landing.',
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Route Two: The Distributive Property Boxes You In',
              minutes: 12,
              say: [
                'The pattern is convincing, but a pattern is not a proof. Someone could say you just liked where it was going. So here is the second route, and this one is airtight.',
                'Start with something nobody can argue with. Three plus negative three is zero. Agreed?',
                'So negative five times that whole bracket has to be zero, because anything times zero is zero. Write it: negative five times, bracket, three plus negative three, close bracket, equals zero.',
                'Now I use the distributive property. That is the rule that says you can multiply into a bracket, and it worked for every positive number we ever met, so we are keeping it.',
                'That gives me negative five times three, PLUS negative five times negative three. And the whole thing still equals zero.',
                'Negative five times three is negative fifteen. We already know that one — five lots of negative three.',
                'So: negative fifteen, plus the mystery thing, equals zero. What has to go in the mystery slot?',
                'Positive fifteen. It has no choice. It is the only number that makes the sentence true.',
                'And the mystery thing WAS negative five times negative three. So negative five times negative three is positive fifteen. Not because we like it. Because if it were anything else, the distributive property would break.',
              ],
              do: [
                'Write the four lines one under the other, each one a single line, with the mystery product boxed in a different colour.',
                'Point back at the boxed slot at the end and rewrite the original product inside it.',
                'Hand the pen over and ask the student to run the identical argument for (−2) × (−7).',
              ],
              studentDoes: ['Follows the four-line argument, then reproduces it with a different pair of numbers, writing every line.'],
              checks: [
                {
                  ask: 'What is the one number that can go in the box, and why is there only one?',
                  lookFor: 'Positive fifteen, because it is the only thing that adds to −15 to give 0.',
                  ifStuck: 'Cover the rest and pose it as a missing-addend question: −15 + ? = 0. That version they can already do.',
                },
                {
                  ask: 'Which property would we have to give up if the answer were negative fifteen instead?',
                  lookFor: 'The distributive property, or "multiplying into a bracket would stop working".',
                  ifStuck: 'Substitute −15 into the box and let them evaluate. They get −30 = 0, which is plainly false.',
                },
              ],
              tip: 'If the student can reproduce this argument with their own numbers, they have the lesson. If they can only follow yours, spend tomorrow on it again rather than moving on.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 18,
              say: [
                'Page time. Three things on it.',
                'First, finish the pattern columns. Do not compute the bottom rows — predict them from the step, then check.',
                'Second, there is a set of products to work out. For each one, write the sign FIRST, on its own, before you touch the digits. Sign, then size.',
                'Third, the argument. Someone on the internet has written a bad explanation for why a negative times a negative is positive, and your job is to say exactly which line is wrong and fix it.',
                'That last one is the one I care about. Anyone can get twenty-four. Not everyone can say why.',
              ],
              do: [
                'Model the "sign first" habit on one product, out loud, before releasing the page.',
                'Leave the board work from beats two and three visible. This is not a memory test.',
              ],
              studentDoes: ['Completes the three sections, writing the sign before the magnitude on every product.'],
              checks: [
                {
                  ask: 'How did you know the sign before you multiplied?',
                  lookFor: 'A count of the negative factors, or a reference back to one of the two arguments — not "the rule".',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Convince Me in Thirty Seconds',
              minutes: 5,
              say: [
                'Back to the board. Negative four times negative six.',
                'Convince me. Thirty seconds. Either route, your choice.',
                'That is a proof. Not a rule you were handed — a proof you can rebuild if you ever forget it.',
                'And that is worth more than remembering it, because you will forget it, some time around next February. The argument you can rebuild.',
              ],
              do: ['Time the thirty seconds genuinely. The constraint makes them choose the strongest line.'],
              studentDoes: ['Gives a coherent thirty-second justification using the pattern or the distributive argument.'],
              checks: [
                {
                  ask: 'Give me the one-sentence version.',
                  lookFor: 'Something like "because otherwise the distributive property would break" or "because the pattern goes up by four and does not stop".',
                  ifStuck: 'Give them the first three words of either argument and let them run from there.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g7-math-u2-l4-ws',
            title: 'Why the Sign Rule Has to Be True',
            style: 'manipulative',
            prepNotes:
              'Print single-sided and keep your board work from the lesson visible while the student writes — section three is an analysis task, not a recall task. The number line strip at the top is deliberately unlabelled so the student writes the scale themselves; check they mark zero in the middle before they start.',
            sections: [
              {
                id: 's1',
                title: 'Finish the Pattern',
                directions:
                  'Each column drops by one in the left factor. Work out the step size in the answers, write it in the margin, then predict the rows below the line. Do not multiply — predict, then check.',
                layout: 'grid',
                items: [
                  'Column A: 4 × 3 = 12,  4 × 2 = 8,  4 × 1 = 4,  4 × 0 = ___,  4 × (−1) = ___,  4 × (−2) = ___',
                  'Column B: 3 × (−6) = −18,  2 × (−6) = −12,  1 × (−6) = −6,  0 × (−6) = ___,  (−1) × (−6) = ___,  (−2) × (−6) = ___',
                  'Column C: 2 × (−1.5) = −3,  1 × (−1.5) = −1.5,  0 × (−1.5) = ___,  (−1) × (−1.5) = ___,  (−2) × (−1.5) = ___',
                  'Write the step size for each column here: A ____   B ____   C ____',
                ],
                images: [
                  {
                    id: 'img-g7m-nl-21',
                    slot: 'Top of page — blank number line strip',
                    purpose:
                      'The student marks their own scale on this line and plots each product from Column B as they predict it. Seeing the answers walk leftwards to zero and then turn round and walk back to the right is the visual form of the pattern argument, and it gives a student who does not trust a column of numbers something to trust instead.',
                    subject:
                      'a plain horizontal number line drawn as a single straight rule with short evenly spaced vertical tick marks and a small arrowhead at each end',
                    count: 21,
                    composition:
                      'one straight horizontal line spanning the full width, exactly twenty-one identical vertical tick marks at perfectly equal intervals, the centre tick drawn slightly taller than the rest, generous white space above and below the line for the student to write in',
                    mustInclude: [
                      'exactly twenty-one tick marks at rigorously equal spacing',
                      'the central tick noticeably taller than the other twenty',
                      'an arrowhead at both the left and the right end of the line',
                    ],
                    mustAvoid: [
                      'any numerals, digits or lettering printed anywhere on or near the line',
                      'unevenly spaced or drifting tick marks',
                      'a grid, shading or background of any kind',
                      'arrows, jumps or arcs already drawn above the line',
                    ],
                    aspect: '4:1',
                    altText: 'A blank horizontal number line with twenty-one evenly spaced tick marks and a taller central tick',
                    style: 'manipulative',
                  },
                  {
                    id: 'img-g7m-pattern-boxes-6',
                    slot: 'Section 1 — pattern chain frame',
                    purpose:
                      'An empty chain of boxes joined by arrows, for the student to write Column B into vertically. Separating the products into discrete boxes with the step written on the arrow between them makes the constant step visible as a repeated object rather than something you have to hold in your head.',
                    subject:
                      'a vertical chain of identical empty rounded rectangular boxes, each connected to the one below it by a short downward arrow',
                    count: 6,
                    composition:
                      'six identical empty boxes stacked in one straight vertical column, equal vertical gaps, a single short downward arrow centred between each consecutive pair, wide clear margin to the right of the arrows for the student to write the step size',
                    mustInclude: [
                      'exactly six boxes, all the same width and height',
                      'exactly five downward arrows, one between each consecutive pair of boxes',
                      'every box completely empty inside',
                    ],
                    mustAvoid: [
                      'any numbers, symbols or lettering inside the boxes or beside the arrows',
                      'boxes of differing sizes',
                      'decorative shadows, gradients or colour fills that would obscure pencil writing',
                    ],
                    aspect: '2:3',
                    altText: 'Six empty boxes in a vertical column joined by five downward arrows',
                    style: 'manipulative',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Sign First, Then Size',
                directions:
                  'For each product, write the sign in the small box before you work out any digits. Then write the whole answer. If you cannot justify the sign, do not write it yet.',
                layout: 'grid',
                items: [
                  '(−7) × (−8) = ____',
                  '(−9) × 6 = ____',
                  '12 × (−3) = ____',
                  '(−2) × (−5) × (−4) = ____',
                  '(−1/2) × (−10) = ____',
                  '(−0.4) × 2.5 = ____',
                  '(−3) × (−3) × (−3) = ____',
                  '(−1) × (−1) × (−1) × (−1) = ____',
                  'Look at the last three. What decides the sign when there are lots of factors? Write the rule you found in your own words.',
                ],
                writingLines: 3,
                images: [
                  {
                    id: 'img-g7m-zero-pairs-10',
                    slot: 'Section 2 — zero pair counters',
                    purpose:
                      'A physical reminder that a positive and a negative of equal size are worth nothing together. Students who lose confidence partway through a multi-factor product can come back to this picture and rebuild the idea that the sign is about direction, not about size.',
                    subject:
                      'a row of small identical flat circular counters, half of them dark solid and half of them light with a dark outline, arranged so each dark counter sits immediately above a light one in matched vertical pairs',
                    count: 10,
                    composition:
                      'two horizontal rows of five counters each, the top row all dark and the bottom row all light, each top counter aligned exactly above its partner below, equal generous gaps between the five columns, all ten counters identical in diameter',
                    mustInclude: [
                      'exactly ten counters, five dark on top and five light beneath',
                      'strict vertical alignment of each dark counter with its light partner',
                      'all counters exactly the same size',
                    ],
                    mustAvoid: [
                      'plus or minus symbols, numerals or any lettering on the counters',
                      'counters overlapping or touching',
                      'a table, hand, container or any background',
                      'counters of differing diameters',
                    ],
                    aspect: '16:9',
                    altText: 'Five dark counters in a row above five light counters, paired vertically',
                    style: 'manipulative',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Find the Broken Line',
                directions:
                  'Someone posted this explanation online. Exactly one line is wrong. Circle it, say why it is wrong, and rewrite it correctly. Then finish the argument properly.',
                layout: 'full',
                items: [
                  'Line 1:  3 + (−3) = 0',
                  'Line 2:  So (−5) × (3 + (−3)) = 0, because anything times zero is zero.',
                  'Line 3:  Distributing gives (−5)(3) + (−5)(−3) = 0',
                  'Line 4:  (−5)(3) = 15',
                  'Line 5:  So 15 + (−5)(−3) = 0',
                  'Line 6:  So (−5)(−3) = −15',
                  'Which line is wrong? ____',
                  'Why is it wrong?',
                  'Rewrite that line correctly, then rewrite every line after it.',
                ],
                writingLines: 8,
                images: [
                  {
                    id: 'img-g7m-nl-jumps-3',
                    slot: 'Section 3 — number line with jump arcs',
                    purpose:
                      'Space for the student to check their corrected result by walking it out. Three pre-drawn arcs of equal span above an evenly ticked line let them show three groups of the same size travelling in one direction, which is repeated addition made visible and is the last sanity check on the sign.',
                    subject:
                      'a horizontal number line with evenly spaced short vertical tick marks and three identical curved arcs drawn above it, each arc ending in an arrowhead and each spanning the same number of tick intervals',
                    count: 3,
                    composition:
                      'the line runs the full width with evenly spaced ticks, the three arcs sit above the line end to end so that each arc starts where the previous one finished, all three arcs the same height and the same horizontal span, arrowheads all pointing the same way',
                    mustInclude: [
                      'exactly three arcs, identical in span and height',
                      'the arcs placed consecutively, tail of each meeting the head of the one before',
                      'evenly spaced tick marks along the whole line',
                    ],
                    mustAvoid: [
                      'any numerals, labels or lettering on the line or the arcs',
                      'arcs of different sizes or overlapping arcs',
                      'arcs pointing in different directions',
                      'shading, grid lines or background',
                    ],
                    aspect: '3:1',
                    altText: 'A number line with three equal curved jump arrows drawn end to end above it',
                    style: 'manipulative',
                  },
                ],
              },
            ],
            answerKey: [
              'Column A: 0, −4, −8. Step size −4.',
              'Column B: 0, 6, 12. Step size +6.',
              'Column C: 0, 1.5, 3. Step size +1.5.',
              'Sign first: 56, −54, −36, −40, 5, −1, −27, 1.',
              'Rule for many factors: an even number of negative factors gives a positive product, an odd number gives a negative one. Accept any clear wording; the reasoning matters more than the phrasing.',
              'Broken line: Line 4. (−5)(3) is −15, not 15 — five groups of negative three.',
              'Corrected Line 4: (−5)(3) = −15. Line 5 becomes −15 + (−5)(−3) = 0. Line 6 becomes (−5)(−3) = 15.',
              'A strong answer names WHY line 4 is wrong (a negative times a positive is negative, five lots of −3) rather than only that the sign is different.',
            ],
          },
          assessment: {
            successCriteria: [
              'Continues a multiplication pattern through zero and predicts the products below it.',
              'Reproduces the distributive-property argument with a fresh pair of numbers.',
              'States the sign of a product before computing it, and justifies that sign with a reason.',
              'Identifies and repairs a faulty line in someone else\'s argument.',
            ],
            exitTicket:
              'Ask: "Explain to me, in two sentences, why (−3) × (−8) is 24. You may not use the words rule or always." A student who can only produce the memorised sentence has not got it yet, whatever their answers on the page looked like.',
            rubric: [
              { level: 'emerging', descriptor: 'Gets products right by applying a remembered rule, and cannot say where the rule comes from. Mixes up the addition and multiplication sign rules when tired.' },
              { level: 'developing', descriptor: 'Can follow either derivation when led through it, and can extend a pattern column, but cannot yet start the distributive argument unaided.' },
              { level: 'secure', descriptor: 'Reconstructs at least one derivation independently with new numbers, predicts signs before computing, and can find the error in a flawed argument and explain it.' },
            ],
          },
          differentiation: {
            support: [
              'Do the pattern route only, and do it three times with three different numbers. One route understood beats two routes half-followed.',
              'Keep the step size written in a third column beside the products so the constancy is on the page rather than in memory.',
              'Use a vertical number line if left and right are still slippery — a lift or a thermometer removes the directional load.',
            ],
            extension: [
              'Ask for a derivation that (−1) × (−1) = 1 specifically, then show how every other case follows from it by writing (−5)(−3) as (−1)(5)(−1)(3).',
              'Pose the question: what would arithmetic look like if we decided a negative times a negative were negative? Ask them to find the first thing that breaks.',
              'Introduce the sign of a power: (−2) to the fifth against (−2) to the sixth, and ask for the general statement.',
            ],
            language: [
              'The word "negative" describes the number; the word "minus" describes the operation. Use them apart, consistently, and say "negative three" not "minus three" for the number.',
              'Give the sentence frame: "The product is ______ because there are ______ negative factors." Insist on the full sentence for the first few.',
            ],
          },
          misconceptions: [
            {
              misconception: 'The sign rules for multiplication also apply to addition.',
              looksLike: 'The student computes (−4) + (−6) as 10, reasoning that two negatives make a positive.',
              correction: 'Put the two side by side deliberately. Model (−4) + (−6) on the number line as two moves left, and (−4) × (−6) with the pattern column. Name out loud that these are different operations with different reasons, and that the rules do not transfer.',
            },
            {
              misconception: 'The rule is a convention someone chose, so it could have been chosen differently.',
              looksLike: 'The student shrugs and says "that is just how maths works" when asked to justify the sign.',
              correction: 'Run the distributive argument and then substitute the wrong answer into the boxed slot. The student watches 0 = −30 appear on the page. Nobody chose this; the alternative is inconsistent.',
            },
            {
              misconception: 'Multiplying always makes a number bigger.',
              looksLike: 'The student is surprised that (−1/2) × (−10) is only 5, or expects (−7) × (−8) to exceed 56.',
              correction: 'Detach size from sign explicitly. Compute the magnitudes first as a pure whole-number product, decide the sign second, and note that a factor between 0 and 1 shrinks whatever it touches.',
            },
          ],
          homeExtension: [
            'Ask someone older in the house why a negative times a negative is positive. Almost nobody can say. Teach them one of the two arguments and see whether it lands.',
            'Find a real situation with a rate that is negative and a time that is going backwards — a tank draining, run in reverse — and describe what the positive product means.',
            'Write the pattern column for 6 on a sticky note and put it on the fridge. Predict, do not compute, the rows below zero.',
          ],
          teacherNotes:
            'This is the highest-leverage lesson in the course and it is worth two days if you have them. Two honest warnings. First, the distributive argument is genuinely abstract and a fair number of twelve-year-olds will follow it in the room and not be able to reproduce it the next morning — that is normal, and the pattern argument is the one that sticks, so make sure that one is solid before you spend time on the second. Second, resist the urge to hand over the mnemonic at the end as a "shortcut for speed". Students reach for the mnemonic under pressure and it is precisely the mnemonic that gets confused with the addition rules. If they can rebuild the reason, the speed follows within a fortnight.',
        },
        {
          id: 'g7-math-u2-l5',
          unitId: 'g7-math-u2',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 5,
          status: 'outline',
          title: 'Dividing Signed Numbers and the Three Signs of a Fraction',
          essentialQuestion: 'Why are −(3/4), (−3)/4 and 3/(−4) all the same number?',
          summary:
            'Division inherits its sign behaviour from multiplication, because every division is a missing-factor multiplication. Students also sort out the three places a minus sign can live on a fraction, and confirm that division by zero is undefined rather than zero.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.NS.A.2.B', framework: 'CCSS-M', text: 'Understand that integers can be divided, provided the divisor is not zero, and that every quotient of integers with a non-zero divisor is a rational number. If p and q are integers, then −(p/q) = (−p)/q = p/(−q).' },
          ],
          objectives: ['I can divide signed rational numbers and justify the sign.', 'I can move a minus sign around a fraction without changing its value.'],
          vocabulary: [
            { term: 'quotient', definition: 'The result of a division.' },
            { term: 'divisor', definition: 'The number you are dividing by.' },
          ],
          materials: ['A whiteboard', 'A calculator for checking only'],
          prep: ['Prepare the missing-factor framing: −24 divided by 6 asks what times 6 gives −24.'],
          script: [],
          worksheet: { id: 'g7-math-u2-l5-ws', title: 'Signs and Quotients', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Divides signed numbers correctly.', 'Shows the three equivalent forms of a negative fraction.'],
            exitTicket: 'Write −(5/8) in two other ways and explain why the value is unchanged.',
          },
          differentiation: {
            support: ['Rewrite every division as a missing-factor multiplication before answering.'],
            extension: ['Ask why 0 divided by 5 is fine but 5 divided by 0 is not, using the missing-factor framing.'],
          },
          misconceptions: [
            {
              misconception: 'A fraction with two minus signs is negative.',
              looksLike: 'The student reads (−3)/(−4) as negative.',
              correction: 'Ask what times −4 gives −3. Positive three-quarters. The missing-factor question settles it every time.',
            },
          ],
          homeExtension: ['Work out an average daily temperature change over a week that includes days below zero.'],
        },
        {
          id: 'g7-math-u2-l6',
          unitId: 'g7-math-u2',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 6,
          status: 'outline',
          title: 'Terminating, Repeating and Long Division',
          essentialQuestion: 'Why do some fractions stop and others go on forever?',
          summary:
            'Students convert fractions to decimals by long division and notice that the remainders must eventually repeat, because there are only finitely many possible remainders. That argument is the reason every rational number terminates or repeats, and it is worth making explicitly.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.NS.A.2.D', framework: 'CCSS-M', text: 'Convert a rational number to a decimal using long division; know that the decimal form of a rational number terminates in 0s or eventually repeats.' },
          ],
          objectives: ['I can convert a fraction to a decimal by long division.', 'I can predict from the denominator whether the decimal will terminate.', 'I can use repeating-decimal notation.'],
          vocabulary: [
            { term: 'terminating decimal', definition: 'A decimal that stops.' },
            { term: 'repeating decimal', definition: 'A decimal in which a block of digits repeats forever.' },
            { term: 'remainder', definition: 'What is left over at each step of a long division.' },
          ],
          materials: ['Squared paper for aligned long division', 'A list of denominators to test: 2, 3, 4, 5, 6, 7, 8, 9, 11, 12'],
          prep: ['Work out 1/7 yourself first. The six-digit cycle is the best moment in the lesson and you want to hit it cleanly.'],
          script: [],
          worksheet: { id: 'g7-math-u2-l6-ws', title: 'Stop or Repeat?', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Performs long division to a repeating block.', 'Explains why a repeat is inevitable.'],
            exitTicket: 'Convert 5/12 to a decimal and mark the repeating part. Then say how you knew it would not terminate.',
          },
          differentiation: {
            support: ['Use squared paper with one digit per square so the columns cannot drift.'],
            extension: ['Ask which denominators produce terminating decimals and why the answer is about factors of 2 and 5.'],
          },
          misconceptions: [
            {
              misconception: 'A repeating decimal is an approximation, so a fraction is more exact.',
              looksLike: 'The student says 1/3 is exact but 0.333… is only close.',
              correction: 'The bar notation means the repetition never stops. 0.3 recurring is exactly one third; the rounding is something we do, not something the number does.',
            },
          ],
          homeExtension: ['Test 1/7, 2/7 and 3/7 on a calculator and look for the same six digits in a different starting place.'],
        },
      ],
    },

    /* ============================================================ UNIT 3 */
    {
      id: 'g7-math-u3',
      gradeId: 'g7',
      subjectId: 'math',
      sequence: 3,
      title: 'Expressions, Equations and Inequalities',
      bigIdea:
        'Rewriting an expression does not change what it is worth, but it changes what it tells you — and an equation is a question about which value makes two expressions agree.',
      description:
        'Students learn to add, subtract, expand and factor linear expressions with rational coefficients, and — the part that matters more — to choose the form that answers the question in front of them. Equations of the forms px + q = r and p(x + q) = r are solved both arithmetically and algebraically, and the two solutions are compared deliberately. Inequalities close the unit, with real attention to what the solution set means in context rather than just which way the arrow points.',
      weeks: 6,
      standards: [
        { code: 'CCSS.MATH.CONTENT.7.EE.A.1', framework: 'CCSS-M', text: 'Apply properties of operations as strategies to add, subtract, factor and expand linear expressions with rational coefficients.' },
        { code: 'CCSS.MATH.CONTENT.7.EE.A.2', framework: 'CCSS-M', text: 'Understand that rewriting an expression in different forms in a problem context can shed light on the problem and how the quantities in it are related.' },
        { code: 'CCSS.MATH.CONTENT.7.EE.B.3', framework: 'CCSS-M', text: 'Solve multi-step real-life and mathematical problems posed with positive and negative rational numbers in any form, using tools strategically, and assess the reasonableness of answers using mental computation and estimation.' },
        { code: 'CCSS.MATH.CONTENT.7.EE.B.4.A', framework: 'CCSS-M', text: 'Solve word problems leading to equations of the form px + q = r and p(x + q) = r, where p, q and r are specific rational numbers; compare an algebraic solution to an arithmetic solution.' },
        { code: 'CCSS.MATH.CONTENT.7.EE.B.4.B', framework: 'CCSS-M', text: 'Solve word problems leading to inequalities of the form px + q > r or px + q < r; graph the solution set of the inequality and interpret it in the context of the problem.' },
      ],
      lessonTitles: [
        'Adding and Subtracting Linear Expressions',
        'Expanding and Factoring With Rational Coefficients',
        'Choosing the Form That Answers the Question',
        'Solving px + q = r',
        'Solving p(x + q) = r, and Comparing Two Routes',
        'Inequalities and What the Solution Set Means',
      ],
      performanceTask:
        'The Fundraiser Plan: students model a school fundraiser with a fixed setup cost and a per-item profit, write the expression two ways, solve for the break-even number of items, then write and graph an inequality for the number of items needed to clear a 400 pound target — and explain why the solution set has to be whole numbers.',
      lessons: [
        {
          id: 'g7-math-u3-l1',
          unitId: 'g7-math-u3',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 1,
          status: 'outline',
          title: 'Adding and Subtracting Linear Expressions',
          essentialQuestion: 'What can I combine, and what has to stay where it is?',
          summary:
            'Combining like terms with rational coefficients, including the case that trips everyone: subtracting a whole bracket. Students learn to distribute the subtraction explicitly rather than trying to hold the sign changes in their head.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.EE.A.1', framework: 'CCSS-M', text: 'Apply properties of operations as strategies to add and subtract linear expressions with rational coefficients.' },
          ],
          objectives: ['I can combine like terms with fraction and decimal coefficients.', 'I can subtract a bracket correctly by distributing the minus sign.'],
          vocabulary: [
            { term: 'like terms', definition: 'Terms with exactly the same variable part.' },
            { term: 'coefficient', definition: 'The number multiplying a variable.' },
            { term: 'term', definition: 'A single number, variable or product of them, separated by plus or minus signs.' },
          ],
          materials: ['Coloured pens for marking like terms', 'A whiteboard'],
          prep: ['Prepare three subtraction-of-bracket problems. That is where the marks are lost, so weight the practice towards it.'],
          script: [],
          worksheet: { id: 'g7-math-u3-l1-ws', title: 'Combining Terms', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Combines like terms accurately with rational coefficients.', 'Handles subtraction of a bracket without sign errors.'],
            exitTicket: 'Simplify (4x − 7) − (2x − 9). Ask for the middle line, not just the answer.',
          },
          differentiation: {
            support: ['Underline like terms in matching colours before combining anything.'],
            extension: ['Introduce expressions with two different variables and a constant.'],
          },
          misconceptions: [
            {
              misconception: 'The minus sign in front of a bracket only affects the first term.',
              looksLike: '(4x − 7) − (2x − 9) becomes 4x − 7 − 2x − 9.',
              correction: 'Rewrite the subtraction as adding −1 times the bracket and distribute it visibly. Every term inside changes sign, every time.',
            },
          ],
          homeExtension: ['Write an expression for the total cost of a household weekly shop with an unknown number of a repeated item.'],
        },
        {
          id: 'g7-math-u3-l2',
          unitId: 'g7-math-u3',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 2,
          status: 'outline',
          title: 'Expanding and Factoring With Rational Coefficients',
          essentialQuestion: 'How do I move between a(b + c) and ab + ac in both directions?',
          summary:
            'Expansion is usually secure by now; factoring is not. Students find the greatest common factor of a linear expression, including fractional common factors, and check every factoring by re-expanding it.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.EE.A.1', framework: 'CCSS-M', text: 'Apply properties of operations as strategies to factor and expand linear expressions with rational coefficients.' },
          ],
          objectives: ['I can expand a bracket with a rational coefficient.', 'I can factor a linear expression by taking out the greatest common factor.', 'I can check a factoring by expanding it back.'],
          vocabulary: [
            { term: 'expand', definition: 'To multiply out a bracket.' },
            { term: 'factor', definition: 'To write an expression as a product, usually by taking out a common factor.' },
            { term: 'greatest common factor', definition: 'The largest quantity that divides every term.' },
          ],
          materials: ['An area model template (a rectangle split into two parts)', 'A whiteboard'],
          prep: ['Draw the area model once yourself. It is the fastest way to make factoring feel like a reversal rather than a new skill.'],
          script: [],
          worksheet: { id: 'g7-math-u3-l2-ws', title: 'Both Directions', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Expands correctly with negative and fractional coefficients.', 'Factors out the greatest common factor, not merely a common factor.'],
            exitTicket: 'Factor 6x + 15, then factor 0.5x + 2. Ask for the check in both cases.',
          },
          differentiation: {
            support: ['Use the area model for every problem in both directions before working symbolically.'],
            extension: ['Factor expressions where the common factor is a fraction, such as (1/3)x + (2/3).'],
          },
          misconceptions: [
            {
              misconception: 'Factoring means finding any common factor.',
              looksLike: '12x + 18 is factored as 2(6x + 9) and left there.',
              correction: 'Ask whether anything is still shared inside the bracket. Six and nine both have a three. Push until the bracket is stripped.',
            },
          ],
          homeExtension: ['Take a bill with a repeated line item and write it in factored form.'],
        },
        {
          id: 'g7-math-u3-l3',
          unitId: 'g7-math-u3',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 3,
          status: 'outline',
          title: 'Choosing the Form That Answers the Question',
          essentialQuestion: 'Two expressions are worth the same. Why would I prefer one of them?',
          summary:
            'The 7.EE.A.2 lesson, and the most conceptual in the unit. a + 0.05a and 1.05a are the same number, but only one of them makes it obvious that this is a 5% increase. Students match expressions to the questions they answer best.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.EE.A.2', framework: 'CCSS-M', text: 'Understand that rewriting an expression in different forms in a problem context can shed light on the problem and how the quantities in it are related, e.g. that a + 0.05a = 1.05a means that increase by 5% is the same as multiply by 1.05.' },
          ],
          objectives: ['I can rewrite an expression in an equivalent form.', 'I can say what each form makes obvious about the situation.'],
          vocabulary: [
            { term: 'equivalent expressions', definition: 'Expressions that give the same value for every value of the variable.' },
          ],
          materials: ['Card sort of expressions and the questions they answer', 'A calculator'],
          prep: ['Cut the card sort in advance. Do not skip this — the sorting is the lesson.'],
          script: [],
          worksheet: { id: 'g7-math-u3-l3-ws', title: 'Same Value, Different Story', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Produces at least two equivalent forms of a contextual expression.', 'Explains what each form reveals.'],
            exitTicket: 'Write the total cost of n items at 8 pounds each after a 10% discount in two different forms, and say which one you would use to find the per-item price.',
          },
          differentiation: {
            support: ['Substitute a number into both forms to confirm equivalence before discussing meaning.'],
            extension: ['Give three forms and ask for a context where each is the best choice.'],
          },
          misconceptions: [
            {
              misconception: 'Rewriting an expression changes its value.',
              looksLike: 'The student checks 1.05a against a + 0.05a and assumes an error when the answers match.',
              correction: 'Substitute several values, including a negative one. Equivalence means every value, not just the convenient ones.',
            },
          ],
          homeExtension: ['Rewrite a phone tariff two ways: as a base plus per-gigabyte charge, and as a single expression.'],
        },
        {
          id: 'g7-math-u3-l4',
          unitId: 'g7-math-u3',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 4,
          status: 'outline',
          title: 'Solving px + q = r',
          essentialQuestion: 'How do I undo what has been done to x, and in what order?',
          summary:
            'Two-step equations with rational p, q and r. Students solve arithmetically first — working backwards through the operations — and then algebraically, and are made to compare the two so the algebra is recognised as a written form of what they were already doing.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.EE.B.4.A', framework: 'CCSS-M', text: 'Solve word problems leading to equations of the form px + q = r; compare an algebraic solution to an arithmetic solution, identifying the sequence of the operations used in each approach.' },
          ],
          objectives: ['I can solve px + q = r algebraically.', 'I can solve the same problem arithmetically and compare the two routes.', 'I can check my solution by substitution.'],
          vocabulary: [
            { term: 'inverse operation', definition: 'The operation that undoes another.' },
            { term: 'solution', definition: 'The value of the variable that makes the equation true.' },
          ],
          materials: ['A balance-scale diagram or a set of cups and counters', 'A whiteboard'],
          prep: ['Write out a worked example with the "what I did to both sides" note down the right-hand margin. That margin is the habit you are teaching.'],
          script: [],
          worksheet: { id: 'g7-math-u3-l4-ws', title: 'Two Steps, Both Sides', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Solves two-step equations with rational coefficients.', 'Substitutes to check.', 'Describes the arithmetic route in words.'],
            exitTicket: 'A taxi charges 2.50 plus 1.80 per mile and the fare was 16.90. Ask for the equation, the solution and the check.',
          },
          differentiation: {
            support: ['Keep to integer coefficients until the two-step structure is automatic.'],
            extension: ['Give an equation with the variable on the right, or with a negative coefficient, and ask what changes.'],
          },
          misconceptions: [
            {
              misconception: 'You undo operations in the same order they were applied.',
              looksLike: 'For 3x + 5 = 20 the student divides by 3 first, getting x + 5 = 6.67.',
              correction: 'Point at the order of operations. Multiplication happened before addition, so undoing goes the other way. Get dressed, then undress in reverse.',
            },
          ],
          homeExtension: ['Work out how many weeks of saving a fixed amount are needed to reach a target, starting from an amount already saved.'],
        },
        {
          id: 'g7-math-u3-l5',
          unitId: 'g7-math-u3',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 5,
          status: 'outline',
          title: 'Solving p(x + q) = r, and Comparing Two Routes',
          essentialQuestion: 'Should I expand the bracket or divide by it first?',
          summary:
            'Students solve the bracketed form both ways — divide through first, or expand first — and discover that both work, but one is usually cleaner. Deciding which is cleaner is the actual skill.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.EE.B.4.A', framework: 'CCSS-M', text: 'Solve word problems leading to equations of the form p(x + q) = r, where p, q and r are specific rational numbers.' },
            { code: 'CCSS.MATH.CONTENT.7.EE.B.3', framework: 'CCSS-M', text: 'Solve multi-step real-life and mathematical problems posed with positive and negative rational numbers in any form.' },
          ],
          objectives: ['I can solve p(x + q) = r by two different routes.', 'I can decide which route is more efficient for a given equation.'],
          vocabulary: [{ term: 'distribute', definition: 'To multiply the outside factor into every term inside the bracket.' }],
          materials: ['A whiteboard split into two columns for the two routes', 'A calculator'],
          prep: ['Choose one equation where dividing first is clearly nicer and one where expanding first is. The contrast makes the choice real.'],
          script: [],
          worksheet: { id: 'g7-math-u3-l5-ws', title: 'Two Routes, One Answer', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Solves bracketed equations by either route.', 'Justifies a choice of route.'],
            exitTicket: 'Solve 4(x − 2.5) = 18 both ways and say which you would use again.',
          },
          differentiation: {
            support: ['Always expand first until it is secure, then introduce the division route as a shortcut.'],
            extension: ['Give p(x + q) = r where r is not divisible by p and ask which route avoids fractions longer.'],
          },
          misconceptions: [
            {
              misconception: 'Dividing both sides by p only divides the first term inside the bracket.',
              looksLike: '4(x − 2.5) = 18 becomes x − 2.5 = 18, or x − 10 = 4.5.',
              correction: 'Dividing by 4 divides the whole left side, which is the bracket as a single object. Circle the bracket first to make its unity visible.',
            },
          ],
          homeExtension: ['Split a bill four ways after a fixed service charge and write the equation before doing the arithmetic.'],
        },
        {
          id: 'g7-math-u3-l6',
          unitId: 'g7-math-u3',
          gradeId: 'g7',
          subjectId: 'math',
          sequence: 6,
          status: 'outline',
          title: 'Inequalities and What the Solution Set Means',
          essentialQuestion: 'What does it mean for a problem to have infinitely many answers, and which of them make sense?',
          summary:
            'Students solve px + q > r and px + q < r, graph the solution on a number line, and then do the harder work: deciding which parts of the solution set the real situation actually permits. You cannot sell 12.4 raffle tickets.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.MATH.CONTENT.7.EE.B.4.B', framework: 'CCSS-M', text: 'Solve word problems leading to inequalities of the form px + q > r or px + q < r, where p, q and r are specific rational numbers. Graph the solution set of the inequality and interpret it in the context of the problem.' },
          ],
          objectives: ['I can solve a two-step inequality.', 'I can graph the solution set with the right kind of endpoint.', 'I can say which solutions make sense in the situation.'],
          vocabulary: [
            { term: 'inequality', definition: 'A statement that one quantity is greater or less than another.' },
            { term: 'solution set', definition: 'All the values that make the inequality true.' },
            { term: 'open circle', definition: 'A number-line endpoint that is not itself included.' },
          ],
          materials: ['Printed number lines', 'Coloured pens'],
          prep: ['Have one context ready where the answer must be a whole number and one where it need not be. The contrast is the point of the closing discussion.'],
          script: [],
          worksheet: { id: 'g7-math-u3-l6-ws', title: 'More Than One Answer', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Solves the inequality correctly.', 'Uses open and closed circles appropriately.', 'Interprets the solution set in context.'],
            exitTicket: 'Tickets cost 6 pounds and the hall costs 90. Write and solve the inequality for making a profit, graph it, and say how many tickets are actually needed.',
          },
          differentiation: {
            support: ['Solve the matching equation first, then test one value on each side to decide the direction.'],
            extension: ['Introduce an inequality with a negative coefficient and let the student discover, by testing values, that the direction reverses.'],
          },
          misconceptions: [
            {
              misconception: 'An inequality has one answer, like an equation.',
              looksLike: 'The student solves x > 15 and writes "x = 16".',
              correction: 'Ask them to name five more values that work. Then five more. The shading on the number line is the answer, not a single point.',
            },
          ],
          homeExtension: ['Work out the minimum hours of work needed to afford something, given an hourly rate and money already saved.'],
        },
      ],
    },
/* @@REST@@ */
  ],
}

export default course
