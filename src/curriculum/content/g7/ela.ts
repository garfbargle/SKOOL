import type { SubjectCourse } from '../../types'

/**
 * Grade 7 English Language Arts.
 *
 * The year turns on one shift: a seventh grader stops asking "what happened?"
 * and starts asking "how do I know, and is that enough?" Every unit here is
 * built to make evidence visible — several pieces of it, weighed rather than
 * collected — whether the text is a short story, an opinion column, a podcast
 * or the student's own argument essay.
 */
const course: SubjectCourse = {
  gradeId: 'g7',
  subjectId: 'ela',
  title: 'Grade 7 English Language Arts',
  overview:
    'Twelve- and thirteen-year-olds can already find the answer in the text. What they cannot yet do reliably is show that one quotation is not enough, notice that a narrator has an interest in how the story is told, or tell the difference between a reason and the evidence that is supposed to back it up. This course spends the year on those three moves. Students read fiction closely enough to trace how setting bends character, follow arguments closely enough to say where the reasoning snaps, compare two writers covering the same event, watch a story become a film and account for what the camera decided, and finish by writing arguments that take the other side seriously enough to answer it.',
  yearGoals: [
    'Cite several pieces of textual evidence — not one — to support an analysis, and explain what each piece contributes.',
    'Analyse how setting, character and plot act on one another, and how an author builds and contrasts different points of view.',
    'Trace an argument to its claim, then judge whether the reasoning is sound and the evidence relevant and sufficient.',
    'Compare how two authors, or a text and its filmed version, shape the same material differently — and say why it matters.',
    'Write a formal argument that states a claim, supports it with credible evidence, and acknowledges an opposing claim honestly.',
  ],
  units: [
    /* ============================================================== UNIT 1 */
    {
      id: 'g7-ela-u1',
      gradeId: 'g7',
      subjectId: 'ela',
      sequence: 1,
      title: 'Evidence and Inference: Reading Fiction Closely',
      bigIdea:
        'An inference is a claim about a text, and like any claim it needs several pieces of evidence — one detail is a hunch, three converging details are a reading.',
      description:
        'Students arrive able to quote. This unit teaches them to quote in plural. They practise separating what a text states outright from what it lets a careful reader conclude, then build readings that rest on three or four converging details rather than the first line that seemed important. Half-way through, the unit turns to how the parts of a story act on each other: how a setting narrows what a character can do, and how one plot turn can be traced back to a decision made pages earlier.',
      weeks: 6,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RL.7.1', framework: 'CCSS-ELA', text: 'Cite several pieces of textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
        { code: 'CCSS.ELA-LITERACY.RL.7.2', framework: 'CCSS-ELA', text: 'Determine a theme or central idea of a text and analyse its development over the course of the text; provide an objective summary.' },
        { code: 'CCSS.ELA-LITERACY.RL.7.3', framework: 'CCSS-ELA', text: 'Analyse how particular elements of a story or drama interact, for example how setting shapes the characters or plot.' },
        { code: 'CCSS.ELA-LITERACY.RL.7.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text, including figurative and connotative meanings.' },
      ],
      lessonTitles: [
        'What the Text Says and What It Lets You Think',
        'Three Pieces, Not One',
        'When the Setting Pushes the Character Around',
        'Plot Turns You Can Trace Backwards',
        'Theme Is a Claim, Not a Word',
      ],
      performanceTask:
        'The Reading on Trial: students write a one-page analysis of a short story of their choice in which a stated inference is supported by exactly three quoted details, each followed by a sentence explaining what that detail contributes that the other two do not. A partner reads it and tries to knock out one piece of evidence; the writer must defend or replace it.',
      lessons: [
        {
          id: 'g7-ela-u1-l1',
          unitId: 'g7-ela-u1',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'What the Text Says and What It Lets You Think',
          essentialQuestion: 'Where is the line between what a text states and what I am concluding?',
          summary:
            'Students sort statements about a short passage into three piles: stated outright, fairly inferred, and invented. The third pile is the point — most weak analysis is an invention that felt like an inference.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.1', framework: 'CCSS-ELA', text: 'Cite several pieces of textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
          ],
          objectives: [
            'I can tell the difference between a statement the text makes and a conclusion I have drawn.',
            'I can point to the exact words that permit an inference.',
            'I can recognise when my "inference" is really something I imagined.',
          ],
          vocabulary: [
            { term: 'explicit', definition: 'Stated outright in the words on the page, with nothing left for the reader to fill in.', example: 'The text says explicitly that the shop had closed.' },
            { term: 'inference', definition: 'A conclusion the text permits but does not state, built from details plus reasoning.' },
            { term: 'unsupported', definition: 'A claim about a text with no words in the text behind it.' },
          ],
          materials: ['A short story or two-page excerpt everyone can read in eight minutes', 'Highlighters in two colours', 'Index cards or slips of paper'],
          prep: [
            'Read the passage yourself and write down two fair inferences and one invention. You will need your own invention to model with.',
            'Cut ten slips of paper. Write one statement about the passage on each: four explicit, four inferable, two invented.',
          ],
          script: [],
          worksheet: { id: 'g7-ela-u1-l1-ws', title: 'Stated, Inferred, or Invented', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: [
              'Sorts statements into stated, inferred and invented with reasoning for each.',
              'Underlines the specific words that make an inference fair.',
            ],
            exitTicket: 'Give students one inference about the passage and ask them to write the shortest quotation that makes it fair. If they cannot find one, the inference was an invention — that is the lesson landing.',
          },
          differentiation: {
            support: ['Work with a single paragraph rather than the whole passage, and reduce to six slips.', 'Give the sentence frame: "The text says ___, so it is fair to think ___."'],
            extension: ['Ask students to write one statement so borderline the class cannot agree on which pile it belongs in, then defend their placement.'],
            language: ['Pre-teach "explicit", "imply" and "infer" as a trio, with the reminder that a writer implies and a reader infers.'],
          },
          misconceptions: [
            { misconception: 'If it feels true about the character, it is an inference.', looksLike: 'A student writes that a character is lonely because "you can just tell", with no detail behind it.', correction: 'Ask for the words. Not the paragraph — the words. If the finger cannot land on a phrase, the claim is an invention.' },
          ],
          homeExtension: [
            'Watch two minutes of a film with the sound off and list what you can state versus what you are inferring.',
            'Read a news photo caption, then look at the photo and list three things the caption does not actually say.',
          ],
          teacherNotes:
            'Resist grading the inferences as right or wrong today. The skill is the ability to name which pile a statement sits in, and a wrong-but-well-evidenced inference is better practice than a right guess.',
        },

        /* -------------------------------------------------- AUTHORED LESSON */
        {
          id: 'g7-ela-u1-l2',
          unitId: 'g7-ela-u1',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 2,
          status: 'authored',
          title: 'Three Pieces, Not One',
          essentialQuestion: 'Why is one quotation almost never enough to prove a reading?',
          summary:
            'The central move of RL.7.1. Students take one inference about a short narrative passage and build it on three separate details, then test each detail by asking what it contributes that the others do not. The lesson deliberately shows a single-quotation analysis collapsing under one alternative explanation.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.1', framework: 'CCSS-ELA', text: 'Cite several pieces of textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
            { code: 'CCSS.ELA-LITERACY.RL.7.3', framework: 'CCSS-ELA', text: 'Analyse how particular elements of a story or drama interact, for example how setting shapes the characters or plot.' },
            { code: 'CCSS.ELA-LITERACY.RL.7.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text, including connotative meanings.' },
          ],
          objectives: [
            'I can state an inference as a claim in one sentence.',
            'I can support that claim with three separate details from different parts of the passage.',
            'I can explain what each detail adds that the other two do not.',
            'I can knock down a reading that rests on a single quotation.',
          ],
          vocabulary: [
            { term: 'converging evidence', definition: 'Several separate details that point at the same conclusion from different directions.', example: 'The ticket, the money and the unread note all converge on the same reading.' },
            { term: 'alternative explanation', definition: 'A different, also-reasonable reading that one piece of evidence would equally support.', example: 'He might have counted his money twice simply because he is careful.' },
            { term: 'connotation', definition: 'The feeling or association a word carries beyond its plain meaning.', example: '"Clutched" and "held" mean nearly the same thing, but "clutched" carries fear.' },
            { term: 'analysis', definition: 'Writing that explains how evidence supports a claim, rather than just placing the evidence next to it.' },
          ],
          materials: [
            'The printed worksheet, which contains the full passage — nothing else to read is required',
            'Three sticky notes or paper slips per student',
            'A pen and a highlighter',
            'A whiteboard or a large sheet of paper for the modelled evidence chain',
          ],
          prep: [
            'Read the passage on the worksheet once. It is six sentences long and takes ninety seconds.',
            'Decide in advance which single detail you will use in the hook as the deliberately weak, one-quotation reading. The money-counting detail works best because it has an obvious innocent explanation.',
            'Draw an empty evidence chain on the board: three boxes on the left, arrows into one wider box on the right. Leave it blank.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Knock My Reading Over',
              minutes: 8,
              say: [
                "Read the passage at the top of the page. Ninety seconds. Then look up.",
                "Here is my reading of it: Theo is not planning to come back. And here is my proof — he counted his money twice. Done. That is my whole argument.",
                "Your job right now is to destroy that. Give me one other reason a person might count their money twice.",
                "Right — because he is careful. Because he is nervous about the fare. Because he is bored and it is cold. You just took my entire argument apart in nine seconds, and I had a real quotation.",
                "So a quotation is not proof. One detail almost always has an innocent explanation sitting right next to it. That is the problem we are solving today.",
              ],
              do: [
                'Time the read. Do not talk over it.',
                'Write your one-quotation claim on the board so it is visible when it falls.',
                'Take three or four alternative explanations from the room and write them under the claim. Let the list get embarrassing.',
              ],
              studentDoes: ['Reads the passage, then generates alternative explanations for a single detail.'],
              checks: [
                {
                  ask: 'Why did my argument fall apart so fast?',
                  lookFor: 'Because one detail can mean lots of things / there was another explanation.',
                  ifStuck: 'Point at the list on the board. "There are four other reasons up here. Which one is right?" The answer — you cannot tell — is the point.',
                },
              ],
              tip: 'Do not defend your reading. The whole hook depends on you losing quickly and visibly. Students remember an argument they demolished far better than one they were handed.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'What Three Details Do That One Cannot',
              minutes: 11,
              say: [
                "Watch what happens when I stop relying on one detail. I am keeping the same claim: Theo is not planning to come back.",
                "Detail one: he counted his money twice. On its own — weak. Fine. Keep it anyway.",
                "Detail two: the ticket in his pocket is one way. Now those alternative explanations start dying. A careful person still buys a return if he is returning.",
                "Detail three: he did not look back at the house. Not once, in six sentences, in a passage that mentions the house twice.",
                "Now try to give me an innocent explanation that covers all three at the same time. Careful with money, one-way ticket, and refusing to look at the house. Go on.",
                "It is much harder, isn't it. That is what several pieces of evidence buy you. Each one closes a door.",
                "Here is the rule I want in your head for the rest of the year: evidence converges. Three details that point at the same reading from three different directions are worth more than three quotations that all say the same thing.",
              ],
              do: [
                'Fill the board chain live: one detail per box, arrow into the claim box.',
                'After each detail, cross out one of the alternative explanations from the hook that it kills. The visible crossing-out is the argument.',
              ],
              studentDoes: ['Follows the chain, attempts to find an innocent explanation covering all three details.'],
              checks: [
                {
                  ask: 'Which of my three details does the most work, and why?',
                  lookFor: 'The one-way ticket, because it is hardest to explain away — students should reason about how many alternatives a detail kills, not just which sounds strongest.',
                  ifStuck: 'Cover one box with your hand and ask whether the reading still stands. Do it three times, one box at a time.',
                },
                {
                  ask: 'What would make a fourth detail useless to me?',
                  lookFor: 'If it just repeated what one of the first three already showed.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Build a Chain for the Opposite Claim',
              minutes: 12,
              say: [
                "Now the uncomfortable part. I want you to argue against me. New claim: Theo fully intends to come back.",
                "Same passage. You get three sticky notes. Find three details that support the opposite reading.",
                "You are allowed to reuse a detail I used — but only if you can explain how it points the other way.",
                "Two minutes to hunt, then we build it together.",
                "So we now have two readings of the same six sentences, both with three details. Does that mean the passage means nothing?",
                "No. It means one of the chains is stronger — and now we can actually compare them, because they are built the same way. That is what evidence is for. It lets two people disagree usefully.",
              ],
              do: [
                'Give a hard two-minute limit for hunting; the constraint prevents the hunt turning into rereading the whole page.',
                'Build the second chain on the board next to the first so the two are visible side by side.',
                'Ask the room to vote on which chain is stronger and insist a reason accompanies each vote.',
              ],
              studentDoes: ['Locates three details supporting the opposing inference and explains how each functions.'],
              checks: [
                {
                  ask: 'Show me one detail that both chains use. How can one detail serve both readings?',
                  lookFor: 'Recognition that a detail only means something once a reader interprets it, and that the interpretation must be argued rather than assumed.',
                  ifStuck: 'Take the folded note. Read it as loyalty, then read it as avoidance. Same six words, two readings, both need arguing.',
                },
                {
                  ask: 'Which chain is stronger and what would it take to change your mind?',
                  lookFor: 'A named detail that would have to appear in the passage — students should be able to say what evidence is missing.',
                },
              ],
              tip: 'The students who found the opposing chain hardest are usually the ones who decided what the passage meant on the first read. That is worth naming gently — it is the habit the unit exists to break.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet: Your Own Chain, Tested',
              minutes: 18,
              say: [
                "On your own now. Pick either claim — the one I made or the opposite — and build the strongest three-detail chain you can.",
                "For each detail you must write one sentence saying what it adds that the other two do not. If you cannot write that sentence, the detail is a duplicate. Swap it out.",
                "Then the last section: I have written a paragraph of analysis that uses only one quotation. Find its weakness and rewrite it with two more pieces of evidence.",
                "Quotation marks matter here. If the words are the author's, they get quotation marks. If they are yours, they do not.",
              ],
              do: [
                'Circulate with one question only: "what does that add that this one does not?" Ask it of every student at least once.',
                'Do not correct interpretations. Correct duplication and missing quotation marks.',
              ],
              studentDoes: ['Completes the worksheet: builds and annotates a three-detail evidence chain, then repairs a single-quotation paragraph.'],
              checks: [
                {
                  ask: 'Read me your three "what this adds" sentences back to back. Do any two say the same thing?',
                  lookFor: 'Three distinct contributions — for example one about money, one about the ticket, one about behaviour toward the house.',
                  ifStuck: 'Tell them to delete the weakest of the three and hunt for a replacement in a part of the passage they have not touched yet.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'One Sentence, Out Loud',
              minutes: 6,
              say: [
                "Stand up if your chain uses a detail nobody else has mentioned yet. Read it out and tell us what it kills.",
                "Last thing. Finish this sentence out loud with a partner: one quotation is not enough because…",
                "Because it always has another explanation. Say it once more so it sticks.",
                "For the rest of this year, when I ask you for evidence and you give me one quotation, I am going to ask you the same question I asked all lesson. What does that add that the others do not?",
              ],
              do: ['Take four or five contributions, no more. Keep the pace up so the close feels like a snap, not a wind-down.'],
              studentDoes: ['States the principle in their own words to a partner.'],
              checks: [
                { ask: 'One quotation is not enough because…?', lookFor: 'Because a single detail can be explained another way; several converging details close off the alternatives.' },
              ],
            },
          ],
          worksheet: {
            id: 'g7-ela-u1-l2-ws',
            title: 'Three Pieces, Not One',
            style: 'line-art',
            prepNotes:
              'Print double-sided. The passage sits at the top of page one and is reproduced nowhere else, so students will be flipping back — that is deliberate, it forces rereading. The evidence-chain diagram needs to print large enough to write inside the boxes; check the first copy before you run the rest.',
            sections: [
              {
                id: 's1',
                title: 'The Passage',
                directions: 'Read this twice before you write anything. The second read is where you will notice the details you need.',
                layout: 'full',
                items: [
                  'THE 6:40 FERRY',
                  'Theo reached the dock before the fog lifted and counted his money for the second time that morning. The rucksack at his feet had belonged to his brother first, and the strap had been mended with fishing line. Behind him the house showed one lit window, then two, and he did not turn round for either of them. In his jacket pocket the ticket had been folded into quarters, the way you fold something you do not intend to check again; it was a single, not a return. His mother had pressed a note into his hand at the gate and he had put it away without reading it, and it was still there, still folded. When the ferry sounded, he picked up the rucksack with both hands, as though it weighed more than it did.',
                ],
                images: [
                  {
                    id: 'g7-ela-u1-img-dock',
                    slot: 'Beside the passage — the scene',
                    purpose: 'Gives students a concrete scene to anchor the passage, and quietly rehearses the skill itself: the illustration shows posture and objects but states nothing, so every conclusion drawn from it must be argued the same way a textual inference is.',
                    subject: 'a lone thirteen-year-old boy standing at the end of a wooden ferry dock at dawn in low fog, seen from behind and slightly to one side, a worn canvas rucksack on the boards beside him',
                    count: 1,
                    composition: 'wide shot, the boy small in the left third with his back to a distant shoreline of low houses on the right, flat grey water and heavy fog filling the upper half of the frame, generous empty space',
                    mustInclude: ['exactly one human figure in the frame', 'the rucksack visibly worn with a mended strap', 'the boy facing away from the houses'],
                    mustAvoid: ['any signage, lettering or numbers anywhere in the scene', 'other people, boats or gulls that would divide attention', 'a bright cheerful sky that contradicts the passage'],
                    aspect: '16:9',
                    altText: 'A boy alone at the end of a foggy dock at dawn with a worn rucksack beside him',
                    style: 'storybook',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Build Your Chain',
                directions: 'Write your claim in the wide box on the right. Then put one detail in each box on the left — quoted exactly, with quotation marks. Under each box, write one sentence: what does this detail add that the other two do not?',
                layout: 'full',
                items: [
                  'My claim (one sentence, no hedging):',
                  'Detail 1 — quoted exactly:',
                  'What this adds that the others do not:',
                  'Detail 2 — quoted exactly:',
                  'What this adds that the others do not:',
                  'Detail 3 — quoted exactly:',
                  'What this adds that the others do not:',
                ],
                writingLines: 12,
                images: [
                  {
                    id: 'g7-ela-u1-img-evidence-chain',
                    slot: 'Section 2 — the evidence chain organiser',
                    purpose: 'Makes convergence visible as a shape. Three arrows arriving at one destination is the argument students are learning to build, and having to fill three boxes stops them stopping at one.',
                    subject: 'a clean graphic organiser of three identical empty rectangular boxes stacked vertically on the left, each with a straight arrow pointing right into one single wider empty rectangular box on the right',
                    count: 4,
                    composition: 'left column of three equal empty rectangles evenly spaced, three arrows of equal length converging on one taller empty rectangle centred on the right, thin uniform black outlines on white, no shading',
                    mustInclude: ['exactly four empty boxes in total, three small and one wide', 'all boxes completely empty with clear white interiors for handwriting', 'arrows pointing left to right only'],
                    mustAvoid: ['any writing, lettering, numbering or symbols inside or beside the boxes', 'decorative borders, shadows or colour fills', 'additional boxes or branching arrows'],
                    aspect: '4:3',
                    altText: 'Three empty boxes with arrows converging into one wider empty box',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Weigh It',
                directions: 'Put your claim on one side of the balance and the strongest opposing reading on the other. Under the picture, write the one detail from the passage that tips it — and explain why that detail is heavier than the rest.',
                layout: 'split',
                items: [
                  'The opposing reading, stated fairly in one sentence:',
                  'The detail that tips the balance:',
                  'Why that detail carries more weight than the others:',
                ],
                writingLines: 6,
                images: [
                  {
                    id: 'g7-ela-u1-img-balance',
                    slot: 'Section 3 — the balance',
                    purpose: 'Argument at this age tends to be additive — more quotations equals more proof. A balance forces the harder idea that evidence has weight, and that two well-built readings can still be unequal.',
                    subject: 'a simple two-pan balance scale drawn in outline, both pans empty and hanging level, with a thin leader line running from each pan out to an empty rectangular caption box',
                    count: 2,
                    composition: 'the balance centred, beam perfectly level, one empty pan on each side, one short leader line from each pan to a blank rectangle at the outer edge of the frame, plenty of white space',
                    mustInclude: ['exactly two pans, both completely empty', 'exactly two empty caption rectangles, one per side', 'the beam level rather than tipped'],
                    mustAvoid: ['any weights, objects or dots in the pans', 'any lettering, numerals or tick marks anywhere', 'an ornate antique scale with detailed engraving'],
                    aspect: '3:2',
                    altText: 'An outline balance scale with two empty pans and two empty caption boxes',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's4',
                title: 'Repair the Weak Paragraph',
                directions: 'This paragraph rests on one quotation. First, write one innocent explanation that destroys it. Then rewrite the paragraph so it uses three pieces of evidence and explains what each one contributes.',
                layout: 'full',
                items: [
                  'WEAK PARAGRAPH: Theo is not planning to return home. The passage says he "counted his money for the second time that morning", which shows he is thinking about a long journey. This proves he is leaving for good.',
                  'One innocent explanation that destroys this paragraph:',
                  'Your rewritten paragraph (three pieces of evidence, each with an explanation):',
                ],
                writingLines: 14,
                images: [
                  {
                    id: 'g7-ela-u1-img-objects',
                    slot: 'Section 4 — the three objects',
                    purpose: 'The three physical objects in the passage carry most of its evidence. Seeing them isolated from the prose helps students who read past concrete detail notice that the author chose each one on purpose.',
                    subject: 'a plain overhead still life of three separate objects laid out on a bare wooden surface — a worn canvas rucksack with a strap mended in coarse line, a small paper ticket folded into quarters, and a folded handwritten note',
                    count: 3,
                    composition: 'flat overhead view, the three objects clearly separated in a loose horizontal line with wide space between them, even soft daylight, no other objects in frame',
                    mustInclude: ['exactly three objects and nothing else', 'the mended strap clearly visible on the rucksack', 'both paper items folded so that no writing surface is exposed'],
                    mustAvoid: ['any readable writing, print, numbers or handwriting on the papers', 'the objects overlapping or touching', 'additional props such as coins, keys or a table setting'],
                    aspect: '3:1',
                    altText: 'Three objects laid out on wood: a mended rucksack, a folded ticket and a folded note',
                    style: 'realistic',
                  },
                ],
              },
            ],
            answerKey: [
              'Section 2 — a secure chain for "Theo is not coming back" uses three of: the single rather than return ticket (hardest to explain innocently); not turning round for either lit window (behaviour, not object); the unread note still folded (avoidance); the borrowed rucksack with the mended strap (he is travelling with what he could take, not what he chose). Accept any three provided the three "what this adds" sentences are genuinely different.',
              'Section 2 — a chain for the opposite claim can use: he counted his money, suggesting he is budgeting a stay; he kept the note rather than discarding it; he brought his brother\'s bag, a thing he would have to return. Weaker overall, and students should be able to say so.',
              'Section 3 — the tipping detail is almost always the one-way ticket, because it is the only detail that is a decision already paid for rather than an ambiguous gesture.',
              'Section 4 — an innocent explanation: anyone about to buy a fare counts their money twice, especially a nervous thirteen-year-old. A secure rewrite adds the ticket and one behavioural detail, keeps the quotation marks accurate, and explains rather than lists.',
            ],
          },
          assessment: {
            successCriteria: [
              'States an inference as a single arguable sentence rather than a summary.',
              'Cites three separate details, quoted accurately with quotation marks.',
              'Explains a distinct contribution for each piece of evidence, with no duplication.',
              'Identifies at least one alternative explanation that a single-detail reading cannot survive.',
            ],
            exitTicket:
              'On a slip: "One quotation is not enough because ___." Then name the strongest detail in the passage and say what it rules out. A student who names a detail but cannot say what it rules out is still collecting evidence rather than weighing it.',
            rubric: [
              { level: 'emerging', descriptor: 'Finds one relevant quotation and restates it rather than explaining it; a second detail, if present, repeats the first.' },
              { level: 'developing', descriptor: 'Cites three details accurately but the explanations overlap, and the reading would still stand on any one of them alone.' },
              { level: 'secure', descriptor: 'Cites three converging details from different parts of the passage, names what each rules out, and can articulate the strongest opposing reading fairly.' },
            ],
          },
          differentiation: {
            support: [
              'Pre-highlight six candidate details in the passage and let the student choose three from that set. The skill being assessed is the explaining, not the hunting.',
              'Give the sentence frame: "This detail matters because it rules out the idea that ___."',
              'Let the student talk the three explanations aloud into a phone recording before writing anything.',
            ],
            extension: [
              'Add a fourth detail that undercuts the student\'s own claim, and require a sentence acknowledging it. This is the counterclaim move Unit 6 will formalise.',
              'Rewrite the passage changing exactly one detail so that the strongest reading flips, then explain the mechanics of the change.',
              'Apply the chain to the opening two paragraphs of Jack London\'s "To Build a Fire", which is in the public domain and freely available online.',
            ],
            language: [
              'Model the difference between quoting and paraphrasing with two sentences on the board, one of each, before the practice beat.',
              'Provide the verbs of analysis as a short bank — suggests, implies, reveals, undercuts, rules out — since the noun-heavy vocabulary is rarely the barrier.',
            ],
          },
          misconceptions: [
            {
              misconception: 'More quotations always make an argument stronger.',
              looksLike: 'A paragraph with five quotations in a row, four of which prove the same thing, and no sentence explaining any of them.',
              correction: 'Ask what each one rules out. Delete every quotation that rules out nothing new. A three-detail chain that closes three different doors beats a five-quotation pile.',
            },
            {
              misconception: 'The quotation speaks for itself, so the explanation is padding.',
              looksLike: 'Claim, colon, quotation, full stop, next paragraph.',
              correction: 'Cover the quotation with your thumb and ask the student to say aloud what it was doing there. Whatever they say aloud is the missing sentence — have them write exactly that.',
            },
            {
              misconception: 'A detail can only support one reading, so if two readings use it, one student must be wrong.',
              looksLike: 'Students arguing about who is allowed to use the folded note as evidence.',
              correction: 'Put the same detail into both chains on the board and make each side argue it. The detail does not carry meaning on its own; the reasoning attached to it does.',
            },
          ],
          homeExtension: [
            'Find a review of a film or game online, and count how many separate reasons the reviewer gives. Then ask whether any two of them are secretly the same reason.',
            'At dinner, make a claim about a family member — that they had a good day, say — and support it with three converging observations rather than one.',
            'Read the first page of any novel in the house and write down the three details you would use to predict what kind of story it is.',
          ],
          teacherNotes:
            'The hook only works if you genuinely lose. Rehearse being defeated. Also expect the guided beat to expose which students decided what the passage meant during the first read — those students find the opposing chain almost impossible, and that difficulty is diagnostic rather than a behaviour problem. If time runs short, cut the balance section on the worksheet rather than the "what this adds" sentences; those sentences are the entire lesson.',
        },

        {
          id: 'g7-ela-u1-l3',
          unitId: 'g7-ela-u1',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'When the Setting Pushes the Character Around',
          essentialQuestion: 'How does where and when a story happens change what a character is able to do?',
          summary:
            'Students take a scene and relocate it — a confrontation in a crowded corridor moved to an empty road at night — and account for every behaviour that has to change. Setting stops being scenery and becomes a constraint.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.3', framework: 'CCSS-ELA', text: 'Analyse how particular elements of a story or drama interact, for example how setting shapes the characters or plot.' },
          ],
          objectives: [
            'I can name three things a setting makes possible and three it makes impossible.',
            'I can explain a character choice by pointing at the setting rather than at personality.',
          ],
          vocabulary: [
            { term: 'constraint', definition: 'Something in the situation that limits what a character can realistically do.' },
            { term: 'atmosphere', definition: 'The feeling a setting creates, built from sensory detail and word choice.' },
          ],
          materials: ['A story with a strong setting — a survival story or a story set in a confined space works best', 'Blank paper for relocation notes'],
          prep: ['Choose the relocation before the lesson and make sure it genuinely changes the outcome, not just the decor.'],
          script: [],
          worksheet: { id: 'g7-ela-u1-l3-ws', title: 'Move the Scene', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names a specific character action and traces it to a feature of the setting.', 'Predicts how the scene changes when relocated, with reasons.'],
            exitTicket: 'Name one thing this character could not have done in a different setting, and say why not.',
          },
          differentiation: {
            support: ['Provide the relocation and two of the changes; the student supplies the third.'],
            extension: ['Relocate the scene across time rather than place — the same confrontation two hundred years earlier — and account for what changes.'],
          },
          misconceptions: [
            { misconception: 'Setting is the background description you can skip.', looksLike: 'A student summarises a story without mentioning where it happens.', correction: 'Remove the setting entirely and reread the scene aloud. When it stops making sense, the setting was doing work.' },
          ],
          homeExtension: ['Pick a scene from a film and describe how it would fail if it happened somewhere else.'],
        },

        {
          id: 'g7-ela-u1-l4',
          unitId: 'g7-ela-u1',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Plot Turns You Can Trace Backwards',
          essentialQuestion: 'Where was the decision that made this ending inevitable?',
          summary:
            'Working backwards from a climax, students find the earlier moment that made it possible. Causation replaces sequence: "and then" becomes "because of".',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.3', framework: 'CCSS-ELA', text: 'Analyse how particular elements of a story or drama interact, for example how the plot develops from character decisions.' },
            { code: 'CCSS.ELA-LITERACY.RL.7.2', framework: 'CCSS-ELA', text: 'Analyse the development of a theme or central idea over the course of a text.' },
          ],
          objectives: [
            'I can find the earlier moment that caused a later event.',
            'I can rewrite a plot summary replacing "and then" with "because".',
          ],
          vocabulary: [
            { term: 'causation', definition: 'One event making another one happen, rather than merely coming before it.' },
            { term: 'turning point', definition: 'The moment after which the ending becomes hard to avoid.' },
          ],
          materials: ['A completed short story from earlier in the unit', 'Sticky notes for the backwards chain'],
          prep: ['Build the backwards chain yourself first; there is usually one link students will dispute, and it is worth knowing which.'],
          script: [],
          worksheet: { id: 'g7-ela-u1-l4-ws', title: 'Working Backwards', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Builds a causal chain of at least four links from ending to origin.', 'Distinguishes a cause from something that merely happened earlier.'],
            exitTicket: 'Name the earliest moment that made this ending unavoidable, and defend it against a later candidate.',
          },
          differentiation: {
            support: ['Supply the chain out of order on slips and have the student sequence it.'],
            extension: ['Argue for a different turning point than the class consensus and defend it with three details.'],
          },
          misconceptions: [
            { misconception: 'Whatever happened first caused what happened next.', looksLike: 'A chain that is really a plot summary in reverse.', correction: 'Test each link by deleting it. If the ending still happens, it was sequence, not cause.' },
          ],
          homeExtension: ['Trace a real event in your week backwards through four links to the decision that started it.'],
        },

        {
          id: 'g7-ela-u1-l5',
          unitId: 'g7-ela-u1',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Theme Is a Claim, Not a Word',
          essentialQuestion: 'What is the difference between a topic and a theme?',
          summary:
            'Students convert one-word themes ("friendship", "courage") into arguable sentences about what the text says regarding that topic, then support the sentence across three points in the text.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.2', framework: 'CCSS-ELA', text: 'Determine a theme or central idea of a text and analyse its development over the course of the text; provide an objective summary of the text.' },
            { code: 'CCSS.ELA-LITERACY.RL.7.1', framework: 'CCSS-ELA', text: 'Cite several pieces of textual evidence to support analysis.' },
          ],
          objectives: [
            'I can turn a one-word topic into a full theme statement.',
            'I can trace a theme across the beginning, middle and end of a text.',
            'I can write an objective summary that leaves my opinion out.',
          ],
          vocabulary: [
            { term: 'theme', definition: 'What a text argues about a topic, stated as a complete sentence.', example: 'Not "loyalty" but "loyalty costs something, and the text refuses to pretend otherwise".' },
            { term: 'objective summary', definition: 'A retelling of what happens with no judgement or opinion added.' },
          ],
          materials: ['The unit short story', 'A three-column organiser: beginning, middle, end'],
          prep: ['Write two theme statements for the story, one obvious and one genuinely arguable, to show the difference.'],
          script: [],
          worksheet: { id: 'g7-ela-u1-l5-ws', title: 'From Topic to Theme', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Writes a theme as an arguable complete sentence.', 'Supports it with evidence from three different points in the text.', 'Produces a summary free of opinion.'],
            exitTicket: 'Convert the topic word on the board into a theme statement, then name the detail that would most trouble your statement.',
          },
          differentiation: {
            support: ['Offer three theme statements and have the student choose and defend one before writing their own.'],
            extension: ['Write two competing theme statements for the same text and argue which the ending supports.'],
            language: ['Give the frame: "The story suggests that ___ , even when ___ ."'],
          },
          misconceptions: [
            { misconception: 'Theme is a single word such as "friendship".', looksLike: 'A student answers the theme question with a noun.', correction: 'Ask, "and what does the story say about friendship?" The answer to that question is the theme.' },
          ],
          homeExtension: ['State the theme of a film you have watched twice as a full sentence, then find the scene that most supports it.'],
        },
      ],
    },

    /* ============================================================== UNIT 2 */
    {
      id: 'g7-ela-u2',
      gradeId: 'g7',
      subjectId: 'ela',
      sequence: 2,
      title: 'Point of View: Whose Story Is This?',
      bigIdea:
        'An author does not just give characters different opinions — the author builds the difference, sentence by sentence, and often knows more than the narrator telling the story.',
      description:
        'This unit moves students from identifying a narrator to analysing one. They track how an author contrasts two characters who witnessed the same event, notice the gap between what a narrator says and what the reader can see, and study connotation as the tool that does most of the quiet work. It ends with students rewriting a scene from another character\'s vantage point and accounting for every change they had to make.',
      weeks: 5,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RL.7.6', framework: 'CCSS-ELA', text: 'Analyse how an author develops and contrasts the points of view of different characters or narrators in a text.' },
        { code: 'CCSS.ELA-LITERACY.RL.7.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text, including figurative and connotative meanings; analyse the impact of a specific word choice on meaning and tone.' },
        { code: 'CCSS.ELA-LITERACY.RL.7.3', framework: 'CCSS-ELA', text: 'Analyse how particular elements of a story or drama interact.' },
        { code: 'CCSS.ELA-LITERACY.W.7.3', framework: 'CCSS-ELA', text: 'Write narratives to develop real or imagined experiences using effective technique, relevant descriptive details and well-structured event sequences.' },
      ],
      lessonTitles: [
        'Narrators Who Do Not Tell You Everything',
        'Two Characters, One Scene, Two Versions',
        'Word Choice as a Fingerprint',
        'What the Character Misses and the Reader Sees',
        'Rewriting a Scene From the Other Side',
      ],
      performanceTask:
        'The Second Account: students rewrite a 300-word scene from a second character\'s point of view, then attach a one-page commentary identifying five specific choices they made — a word swapped, a detail withheld, an event reordered — and what each choice does to the reader.',
      lessons: [
        {
          id: 'g7-ela-u2-l1',
          unitId: 'g7-ela-u2',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Narrators Who Do Not Tell You Everything',
          essentialQuestion: 'How do I read a story when I cannot fully trust the person telling it?',
          summary:
            'An introduction to narrative distance and reliability. Students identify the narrator type, then hunt for the places where the reader knows more than the narrator admits.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.6', framework: 'CCSS-ELA', text: 'Analyse how an author develops and contrasts the points of view of different characters or narrators in a text.' },
          ],
          objectives: [
            'I can identify first person, third limited and third omniscient narration from the text itself.',
            'I can find a moment where the narrator is not telling me everything.',
          ],
          vocabulary: [
            { term: 'narrator', definition: 'The voice telling the story, which is not the same thing as the author.' },
            { term: 'unreliable narrator', definition: 'A narrator whose account the reader has reason to question.' },
            { term: 'omniscient', definition: 'A narrator with access to the thoughts of more than one character.' },
          ],
          materials: ['Three short openings, one in each narrative mode', 'Highlighters'],
          prep: ['Choose openings where the pronouns alone do not give the answer away, so students must reason from access to thoughts.'],
          script: [],
          worksheet: { id: 'g7-ela-u2-l1-ws', title: 'Who Is Telling This?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Identifies narrative mode with evidence from pronouns and access to thought.', 'Names one moment of withheld information.'],
            exitTicket: 'Which sentence in this passage tells you what kind of narrator you have? Copy it and explain.',
          },
          differentiation: {
            support: ['Reduce to two modes — first person and third limited — until the distinction is automatic.'],
            extension: ['Rewrite an omniscient paragraph as first person and list what the reader loses.'],
          },
          misconceptions: [
            { misconception: 'First person narrators tell the truth because they were there.', looksLike: 'A student treats a narrator\'s self-description as fact.', correction: 'Ask what the narrator has to gain from the reader believing them. Being present is not the same as being honest.' },
          ],
          homeExtension: ['Retell an argument you witnessed twice, once from each side, and notice what you leave out each time.'],
        },
        {
          id: 'g7-ela-u2-l2',
          unitId: 'g7-ela-u2',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'Two Characters, One Scene, Two Versions',
          essentialQuestion: 'How does an author make two people who saw the same thing sound completely different?',
          summary:
            'Students analyse a text that gives two accounts of one event, cataloguing the specific techniques — different detail selection, different vocabulary, different ordering — the author uses to build the contrast.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.6', framework: 'CCSS-ELA', text: 'Analyse how an author develops and contrasts the points of view of different characters or narrators in a text.' },
            { code: 'CCSS.ELA-LITERACY.RL.7.1', framework: 'CCSS-ELA', text: 'Cite several pieces of textual evidence to support analysis.' },
          ],
          objectives: [
            'I can list what each account includes that the other leaves out.',
            'I can name the technique an author uses to build a point of view, not just the opinion it produces.',
          ],
          vocabulary: [
            { term: 'contrast', definition: 'A difference an author sets up deliberately so the reader notices it.' },
            { term: 'selection', definition: 'Choosing which details to tell and which to leave out — one of the strongest tools a narrator has.' },
          ],
          materials: ['A dual-narrator text or two paired accounts', 'A two-column comparison sheet'],
          prep: ['Mark three details that appear in only one account. These are the engine of the discussion.'],
          script: [],
          worksheet: { id: 'g7-ela-u2-l2-ws', title: 'Same Scene, Two Tellings', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Identifies at least three differences and classifies each as selection, wording or ordering.', 'Explains the effect of one difference on the reader.'],
            exitTicket: 'Name one detail present in only one account, and say what its absence does to the other version.',
          },
          differentiation: {
            support: ['Provide the two-column chart pre-filled on one side.'],
            extension: ['Write a third account from a bystander who has no stake in the outcome.'],
          },
          misconceptions: [
            { misconception: 'Two accounts differ because one character is lying.', looksLike: 'A student resolves every difference by declaring someone dishonest.', correction: 'Point at a difference caused by physical position or by what mattered to that person. Honest witnesses differ constantly.' },
          ],
          homeExtension: ['Ask two family members to describe the same holiday and list the differences without deciding who is right.'],
        },
        {
          id: 'g7-ela-u2-l3',
          unitId: 'g7-ela-u2',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Word Choice as a Fingerprint',
          essentialQuestion: 'How much of a point of view is carried by single words?',
          summary:
            'A close study of connotation. Students swap neutral synonyms into a loaded passage and describe exactly what evaporates, which makes word choice measurable rather than decorative.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text, including figurative and connotative meanings; analyse the impact of a specific word choice on meaning and tone.' },
            { code: 'CCSS.ELA-LITERACY.L.7.5', framework: 'CCSS-ELA', text: 'Demonstrate understanding of word relationships and nuances in word meanings, including distinguishing among the connotations of words with similar denotations.' },
          ],
          objectives: [
            'I can replace a loaded word with a neutral one and describe what changes.',
            'I can rank three near-synonyms by the weight they carry.',
          ],
          vocabulary: [
            { term: 'connotation', definition: 'The associations a word carries beyond its dictionary meaning.' },
            { term: 'denotation', definition: 'The plain dictionary meaning of a word.' },
            { term: 'tone', definition: 'The attitude a text takes toward its subject, built largely from word choice.' },
          ],
          materials: ['A passage with strong verbs and adjectives', 'A thesaurus, printed or digital'],
          prep: ['Prepare a neutralised version of one paragraph so the two can be read aloud back to back.'],
          script: [],
          worksheet: { id: 'g7-ela-u2-l3-ws', title: 'Swap the Word, Lose the Feeling', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Explains the effect of a specific word rather than saying it is "more descriptive".', 'Ranks synonyms by connotative weight and justifies the order.'],
            exitTicket: 'Rank these three words from lightest to heaviest, and say what the heaviest one accuses the subject of.',
          },
          differentiation: {
            support: ['Work with pairs of words rather than triples, and start with obvious pairs such as "thin" and "scrawny".'],
            extension: ['Rewrite a neutral news paragraph twice, once sympathetic and once hostile, changing only adjectives and verbs.'],
            language: ['Connotation is one of the last things to arrive in a second language. Build a shared class chart of loaded and neutral pairs and keep adding to it all year.'],
          },
          misconceptions: [
            { misconception: 'Synonyms are interchangeable.', looksLike: 'A student swaps in a thesaurus word that wrecks the tone and reports no change.', correction: 'Read both versions aloud. The ear catches what the eye slides over.' },
          ],
          homeExtension: ['Find two headlines about the same story and highlight every word that carries an attitude.'],
        },
        {
          id: 'g7-ela-u2-l4',
          unitId: 'g7-ela-u2',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'What the Character Misses and the Reader Sees',
          essentialQuestion: 'How does an author let me know something the character does not?',
          summary:
            'Dramatic irony as a technical achievement. Students find the exact sentences that leak information past the narrator and describe the mechanism.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.6', framework: 'CCSS-ELA', text: 'Analyse how an author develops and contrasts the points of view of different characters or narrators.' },
            { code: 'CCSS.ELA-LITERACY.RL.7.3', framework: 'CCSS-ELA', text: 'Analyse how particular elements of a story or drama interact.' },
          ],
          objectives: [
            'I can identify a moment of dramatic irony and quote the sentence that creates it.',
            'I can explain how an author signals something to the reader over the narrator\'s shoulder.',
          ],
          vocabulary: [
            { term: 'dramatic irony', definition: 'When the reader knows something a character does not.' },
            { term: 'foreshadowing', definition: 'A detail planted early that only pays off later.' },
          ],
          materials: ['A story with a clear irony gap', 'Two-colour annotation pens'],
          prep: ['Locate the exact sentence where the gap opens; students will look for a scene, but it is usually one clause.'],
          script: [],
          worksheet: { id: 'g7-ela-u2-l4-ws', title: 'The Gap', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Quotes the sentence that creates the gap.', 'Describes the effect of the gap on the reading experience.'],
            exitTicket: 'What do you know that this character does not, and which sentence told you?',
          },
          differentiation: {
            support: ['Give the scene and ask only for the effect, not the location.'],
            extension: ['Write a paragraph that creates dramatic irony in three sentences or fewer.'],
          },
          misconceptions: [
            { misconception: 'Dramatic irony is the same as a plot twist.', looksLike: 'A student cites the ending as the irony.', correction: 'Irony is the stretch of text where you know and the character does not. A twist is a single moment of revelation. Mark the stretch with a bracket, not a dot.' },
          ],
          homeExtension: ['Watch a horror or comedy scene and mark the moment the audience learns something the character has not.'],
        },
        {
          id: 'g7-ela-u2-l5',
          unitId: 'g7-ela-u2',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Rewriting a Scene From the Other Side',
          essentialQuestion: 'What do I have to change to make a scene belong to a different character?',
          summary:
            'The unit performance task in workshop form. Students rewrite a scene from a second character\'s point of view and annotate five deliberate choices.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.7.3', framework: 'CCSS-ELA', text: 'Write narratives to develop real or imagined experiences using effective technique, relevant descriptive details and well-structured event sequences.' },
            { code: 'CCSS.ELA-LITERACY.RL.7.6', framework: 'CCSS-ELA', text: 'Analyse how an author develops and contrasts the points of view of different characters or narrators.' },
          ],
          objectives: [
            'I can rewrite a scene so the reader sees it through a different character.',
            'I can justify five specific choices I made and their effects.',
          ],
          vocabulary: [
            { term: 'vantage point', definition: 'The physical and emotional position from which a character sees an event.' },
            { term: 'withholding', definition: 'Deliberately not telling the reader something the narrator knows.' },
          ],
          materials: ['A drafted scene from earlier in the unit', 'Coloured pens for annotation'],
          prep: ['Model the first three sentences of your own rewrite so students see how quickly the tone has to shift.'],
          script: [],
          worksheet: { id: 'g7-ela-u2-l5-ws', title: 'The Second Account', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Produces a rewrite consistent in vantage point throughout.', 'Annotates five choices with named effects.'],
            exitTicket: 'Name the hardest sentence to rewrite and explain what made it hard.',
          },
          differentiation: {
            support: ['Rewrite a single paragraph rather than the scene, and annotate three choices.'],
            extension: ['Write the second account so the reader can tell the first narrator was lying, without ever saying so.'],
          },
          misconceptions: [
            { misconception: 'Changing point of view means changing the pronouns.', looksLike: 'A rewrite identical to the original with "he" swapped for "I".', correction: 'Ask what the new narrator physically could not see from where they were standing. Delete those sentences and the rewrite begins for real.' },
          ],
          homeExtension: ['Retell a childhood story from a parent\'s point of view and ask them what you got wrong.'],
        },
      ],
    },

    /* ============================================================== UNIT 3 */
    {
      id: 'g7-ela-u3',
      gradeId: 'g7',
      subjectId: 'ela',
      sequence: 3,
      title: 'Weighing Arguments: Claims, Reasoning and Sources',
      bigIdea:
        'Tracing an argument means finding its claim, separating reasons from evidence, and then asking the two questions that actually matter: is the reasoning sound, and is there enough of the right evidence?',
      description:
        'The evaluation unit. Students learn to strip an argumentative text down to its skeleton, then judge that skeleton rather than the writer\'s confidence. They practise on opinion columns, advertisements, a persuasive speech and a set of online sources of varying quality, and they finish able to say precisely where an argument fails rather than that they simply disagree.',
      weeks: 6,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RI.7.8', framework: 'CCSS-ELA', text: 'Trace and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound and the evidence is relevant and sufficient to support the claims.' },
        { code: 'CCSS.ELA-LITERACY.RI.7.1', framework: 'CCSS-ELA', text: 'Cite several pieces of textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
        { code: 'CCSS.ELA-LITERACY.RI.7.5', framework: 'CCSS-ELA', text: 'Analyse the structure an author uses to organise a text, including how the major sections contribute to the whole and to the development of the ideas.' },
        { code: 'CCSS.ELA-LITERACY.W.7.8', framework: 'CCSS-ELA', text: 'Gather relevant information from multiple print and digital sources, using search terms effectively; assess the credibility and accuracy of each source.' },
        { code: 'CCSS.ELA-LITERACY.SL.7.3', framework: 'CCSS-ELA', text: 'Delineate a speaker\'s argument and specific claims, evaluating the soundness of the reasoning and the relevance and sufficiency of the evidence.' },
      ],
      lessonTitles: [
        'Finding the Claim Under the Noise',
        'Reasons Are Not Evidence',
        'Is That Enough Evidence?',
        'Spotting the Broken Link',
        'Who Is Telling You This, and How Do They Know?',
        'Delineating a Speaker\'s Argument',
      ],
      performanceTask:
        'The Argument Autopsy: students take one opinion column and produce a one-page diagnostic — the claim in a single sentence, each reason listed with the evidence attached to it, a verdict on relevance and sufficiency for each, and a final judgement naming the single weakest link and what evidence would repair it.',
      lessons: [
        {
          id: 'g7-ela-u3-l1',
          unitId: 'g7-ela-u3',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Finding the Claim Under the Noise',
          essentialQuestion: 'What is this writer actually asking me to believe?',
          summary:
            'Students reduce argumentative texts to a single claim sentence. The difficulty is real: most opinion writing buries its claim under anecdote, and some texts have two claims wearing one coat.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.7.8', framework: 'CCSS-ELA', text: 'Trace and evaluate the argument and specific claims in a text.' },
            { code: 'CCSS.ELA-LITERACY.RI.7.5', framework: 'CCSS-ELA', text: 'Analyse the structure an author uses to organise a text, including how the major sections contribute to the whole.' },
          ],
          objectives: [
            'I can state a writer\'s claim in one sentence in my own words.',
            'I can tell the difference between the topic of a text and its claim.',
            'I can find the paragraph where the claim is actually made.',
          ],
          vocabulary: [
            { term: 'claim', definition: 'The thing the writer wants you to believe or do, stated as an arguable sentence.' },
            { term: 'thesis', definition: 'The claim of a whole piece of writing, usually stated near the beginning or the end.' },
            { term: 'anecdote', definition: 'A short personal story used to make a point feel true.' },
          ],
          materials: ['Two short opinion columns from a student newspaper or a young-reader news site', 'Highlighters'],
          prep: ['Find one column whose claim appears in the final paragraph. Students expect it up front and need to be surprised.'],
          script: [],
          worksheet: { id: 'g7-ela-u3-l1-ws', title: 'One Sentence, No Hedging', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['States the claim as an arguable sentence rather than a topic.', 'Points to the text location where the claim is made or implied.'],
            exitTicket: 'Write this writer\'s claim in one sentence, then write the sentence someone who disagrees would write.',
          },
          differentiation: {
            support: ['Offer three candidate claims and have the student eliminate two with reasons.'],
            extension: ['Find a column with an unstated claim and construct it from the evidence provided.'],
            language: ['Practise the arguable-sentence test: if nobody could disagree with it, it is not a claim.'],
          },
          misconceptions: [
            { misconception: 'The claim is whatever the title says.', looksLike: 'A student copies the headline as the claim.', correction: 'Headlines are written to be clicked, sometimes by someone other than the writer. Make students find the sentence in the body that the headline is advertising.' },
          ],
          homeExtension: ['Read one opinion piece with an adult and see whether you agree about what its claim is.'],
        },
        {
          id: 'g7-ela-u3-l2',
          unitId: 'g7-ela-u3',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'Reasons Are Not Evidence',
          essentialQuestion: 'What is the difference between why someone believes something and what shows it is true?',
          summary:
            'The distinction most seventh graders have never been taught. A reason is the logical step; evidence is the observable thing that backs the step. Students sort a jumbled argument into the two categories.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.7.8', framework: 'CCSS-ELA', text: 'Trace and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound and the evidence is relevant and sufficient.' },
          ],
          objectives: [
            'I can separate the reasons in an argument from the evidence attached to them.',
            'I can find a reason with no evidence under it.',
          ],
          vocabulary: [
            { term: 'reason', definition: 'A statement explaining why the claim should be accepted — a logical step.' },
            { term: 'evidence', definition: 'Facts, data, examples or testimony that show a reason is true.' },
            { term: 'assertion', definition: 'A statement offered with nothing behind it.' },
          ],
          materials: ['One argumentative text cut into strips, one sentence per strip', 'Two labelled trays or areas of the desk'],
          prep: ['Cut the strips in advance and shuffle them; the sorting is the lesson and it dies if students spend the hour with scissors.'],
          script: [],
          worksheet: { id: 'g7-ela-u3-l2-ws', title: 'Sort the Skeleton', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Sorts every sentence into claim, reason, evidence or filler.', 'Identifies at least one unsupported reason.'],
            exitTicket: 'Name a reason in this text that has no evidence attached, and say what evidence would fix it.',
          },
          differentiation: {
            support: ['Sort only into two piles — reason and evidence — before adding the other categories.'],
            extension: ['Write the missing evidence for an unsupported reason, then say where a writer would have to go to get it.'],
          },
          misconceptions: [
            { misconception: 'A confidently stated reason counts as evidence.', looksLike: 'A student marks "everyone knows phones are distracting" as evidence.', correction: 'Ask who counted, and when. If nobody counted, it is an assertion wearing a lab coat.' },
          ],
          homeExtension: ['Listen to an advertisement and separate its reason from its evidence. Most have no evidence at all.'],
        },

        /* -------------------------------------------------- AUTHORED LESSON */
        {
          id: 'g7-ela-u3-l3',
          unitId: 'g7-ela-u3',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 3,
          status: 'authored',
          title: 'Is That Enough Evidence?',
          essentialQuestion: 'How do I decide whether an argument has enough of the right evidence to stand up?',
          summary:
            'The core of RI.7.8. Students take a complete, plausible-sounding opinion column apart, attach each piece of evidence to the reason it is meant to support, then apply two tests — relevance and sufficiency — and name where the argument actually fails. The text is deliberately good enough to be convincing on a first read.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.7.8', framework: 'CCSS-ELA', text: 'Trace and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound and the evidence is relevant and sufficient to support the claims.' },
            { code: 'CCSS.ELA-LITERACY.RI.7.1', framework: 'CCSS-ELA', text: 'Cite several pieces of textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
            { code: 'CCSS.ELA-LITERACY.RI.7.6', framework: 'CCSS-ELA', text: 'Determine an author\'s point of view or purpose in a text and analyse how the author distinguishes his or her position from that of others.' },
          ],
          objectives: [
            'I can attach every piece of evidence in a text to the reason it is supposed to support.',
            'I can judge whether a piece of evidence is relevant to the reason it sits under.',
            'I can judge whether there is enough evidence, and say what "enough" would look like.',
            'I can name the single weakest link in an argument and the evidence that would repair it.',
          ],
          vocabulary: [
            { term: 'relevant', definition: 'Actually about the thing it is supposed to prove.', example: 'A statistic about high-school students is not relevant to a claim about seven-year-olds.' },
            { term: 'sufficient', definition: 'Enough in quantity and quality that a fair reader would accept the reason.', example: 'One friend\'s experience is not sufficient evidence about a whole school.' },
            { term: 'anecdotal evidence', definition: 'A single story used as though it described everyone.' },
            { term: 'sample', definition: 'The group actually observed, which may or may not represent the group being talked about.' },
            { term: 'sound reasoning', definition: 'Reasoning where each step really does follow from the one before it.' },
          ],
          materials: [
            'The printed worksheet, which contains the full opinion column',
            'Two highlighters in different colours — one for reasons, one for evidence',
            'A pen',
            'A board or large sheet for the shared skeleton',
          ],
          prep: [
            'Read the column on the worksheet. Notice deliberately that it sounds reasonable — you will need to model being taken in before you model the analysis.',
            'Draw the empty argument frame on the board: one wide box at the top, three boxes beneath it, two small boxes beneath each of those. Do not fill anything in.',
            'Decide which of the three reasons you will dissect together and which two you will leave for the students. Reason two, the statistic, is the best one to model.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'I Was Convinced',
              minutes: 7,
              say: [
                "Read the column on your worksheet. Three minutes. Do not annotate yet — just read it like you would read anything.",
                "Hands up if it convinced you. Hands up if it half convinced you.",
                "Same. It convinced me too, the first time. It is well written, it sounds fair, and the writer clearly cares.",
                "Here is the uncomfortable thing: none of that is evidence. A well-written argument and a well-supported argument are two different objects, and today we learn to tell them apart.",
                "So we are going to do something slightly rude. We are going to take this apart until we can say exactly where it fails — not that we disagree with it. Where it fails.",
              ],
              do: [
                'Time the read strictly. Annotating early ruins the hook.',
                'Take the hands-up count honestly and record it on the board. You will return to it in the close.',
                'Say out loud that you were convinced. Students will not admit it unless you do first.',
              ],
              studentDoes: ['Reads the column once and registers a first, unanalysed reaction.'],
              checks: [
                {
                  ask: 'What made it feel convincing, before we look at anything?',
                  lookFor: 'Tone, confidence, a good story at the start, the fact that it names a number — surface features rather than support.',
                  ifStuck: 'Read the opening anecdote aloud yourself, with feeling. Then ask how many people that story is actually about. One.',
                },
              ],
              tip: 'Do not pick an argument the class already disagrees with. The whole skill is evaluating an argument you are inclined to accept — that is the case where it is hard and where it matters.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Two Questions, Asked in Order',
              minutes: 12,
              say: [
                "There are only two questions. Relevance first, then sufficiency, and the order matters.",
                "Relevance: is this evidence actually about the thing it is under? Sufficiency: is there enough of it for a fair person to accept the reason?",
                "Watch me do reason two — the one with the number in it. The reason is that phones at lunch are making students less social. The evidence is a survey saying sixty-eight per cent of students used a phone at lunch at least once last term.",
                "Relevance test. Does using a phone once at lunch tell me anything about being less social? No. It tells me people used phones. Those are different things, and the number was doing the work of hiding that.",
                "So this evidence fails at question one and I never even get to sufficiency. Notice how easily the number fooled me. A statistic is not automatically relevant just because it is precise.",
                "Now watch a different failure. Reason one is that the lunch hall is too noisy. The evidence is one student saying she cannot hear her friends. Relevant? Yes — that is genuinely about noise. Sufficient? One person, on one day, in one corner of one hall.",
                "That is the whole method. Relevant but not sufficient is a repairable argument. Not relevant is a broken one. Learn to say which.",
              ],
              do: [
                'Fill in the argument frame on the board as you go, but only for reason two and reason one.',
                'Write RELEVANT? and SUFFICIENT? beside the frame and tick or cross each one visibly.',
                'Physically cover the number with your hand while asking what it actually measures. The gesture makes the point better than the explanation.',
              ],
              studentDoes: ['Follows the two tests being applied, annotating their own copy alongside you.'],
              checks: [
                {
                  ask: 'Why do I test relevance before sufficiency?',
                  lookFor: 'Because if the evidence is not about the right thing, having more of it does not help.',
                  ifStuck: 'Ask how many irrelevant statistics it would take to convince them. The answer — no number is enough — is the reason for the order.',
                },
                {
                  ask: 'What would relevant evidence for reason two actually look like?',
                  lookFor: 'Something that measures social interaction directly — observed conversations, a comparison of lunch halls with and without phones, students reporting fewer conversations.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Reason Three, Together',
              minutes: 12,
              say: [
                "Your turn, but out loud and together. Reason three: the writer says a phone ban would improve results, and the evidence is one head teacher from another school saying it worked there.",
                "Relevance first. Talk to the person next to you. Thirty seconds.",
                "Most of you said yes, it is relevant — it is genuinely about a phone ban and genuinely about results. Good. Relevance is often fine. It is not where most arguments die.",
                "Now sufficiency. One school. Are there other things that changed at that school that year? Do we know how they measured results? Do we know whether they are telling us about the year it did not work?",
                "So here is the honest verdict on reason three: relevant, insufficient, and repairable. If the writer had five schools instead of one, and results measured the same way, this reason would stand up.",
                "Say the verdict in that shape — relevant or not, sufficient or not, repairable or not. Three words and you have said something a lot of adults cannot.",
              ],
              do: [
                'Force the thirty-second partner talk before taking answers. It doubles participation on the sufficiency question.',
                'Write the three-part verdict formula on the board and leave it there for the practice beat.',
                'Push back once on a student who says "insufficient" without saying how much would be enough.',
              ],
              studentDoes: ['Applies both tests to a third reason with a partner and produces a three-part verdict.'],
              checks: [
                {
                  ask: 'How much evidence would be enough here, specifically?',
                  lookFor: 'A concrete answer — several schools, a comparison group, results measured the same way before and after.',
                  ifStuck: 'Ask what would happen if the next school they asked said it made no difference. The fact that one counter-case would sink the reason is the definition of insufficient.',
                },
                {
                  ask: 'Is "the head teacher might be biased" a relevance problem or a sufficiency problem?',
                  lookFor: 'Neither exactly — it is a credibility problem, which is the next lesson. Accept students noticing that the two tests do not cover everything.',
                },
              ],
              tip: 'When a student says an argument is "just their opinion", that is a refusal to evaluate rather than an evaluation. Redirect to the formula: relevant, sufficient, repairable.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Autopsy',
              minutes: 18,
              say: [
                "On your own. Fill in the argument frame on the worksheet — claim at the top, three reasons, evidence underneath each one.",
                "Then a verdict for each reason using our three words. Relevant or not. Sufficient or not. Repairable or not.",
                "Last section is the one I care most about: name the single weakest link and write the evidence that would repair it. Be specific. Not 'more evidence' — what evidence, from where, measuring what.",
                "If you finish, there is a fourth reason hidden in the column that the writer never actually states. Find it and write it in the margin.",
              ],
              do: [
                'Circulate and ask one question: "what exactly would count as enough?" Do not accept a shrug.',
                'Watch for students marking everything insufficient. Blanket scepticism is as lazy as blanket agreement — press them to defend a piece of evidence too.',
              ],
              studentDoes: ['Completes the argument frame, issues three verdicts, and specifies repairing evidence for the weakest link.'],
              checks: [
                {
                  ask: 'Which reason survives best, and why?',
                  lookFor: 'Reason three, because it is at least relevant and could be repaired with more cases; students should distinguish it from reason two, which cannot be repaired by quantity.',
                },
                {
                  ask: 'Read me your repair. Where would that evidence come from?',
                  lookFor: 'A named plausible source — a school survey the student could actually run, published research, a comparison across several schools.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Hands Up Again',
              minutes: 6,
              say: [
                "Back to the start. Hands up if the column convinces you now.",
                "Look at the difference on the board. Nothing changed about the writing. What changed is that you can now see what is holding it up.",
                "Important: this does not mean the writer is wrong. The claim might be completely true. Badly supported is not the same as false — say that back to me.",
                "That is the difference between arguing and evaluating. Anyone can disagree. You can now say where an argument fails and what would fix it, which is a genuinely rare skill.",
              ],
              do: ['Take the second hands-up count and write it next to the first. The visible drop is the assessment.'],
              studentDoes: ['Re-votes and articulates the distinction between an unsupported claim and a false one.'],
              checks: [
                {
                  ask: 'Badly supported is not the same as…?',
                  lookFor: 'False or wrong. Students should be able to hold both — the argument fails, and the conclusion could still be true.',
                  ifStuck: 'Offer an obvious case: "The sun will rise tomorrow, because my cousin said so." Terrible support, true conclusion.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g7-ela-u3-l3-ws',
            title: 'Is That Enough Evidence?',
            style: 'diagram',
            prepNotes:
              'Print double-sided; the column runs down page one and the frame fills page two, so students can see both at once when the page is folded. The argument frame must print large — students write full sentences inside the boxes, not single words. Two highlighter colours make the reason and evidence layers legible at a glance when you circulate.',
            sections: [
              {
                id: 's1',
                title: 'The Column',
                directions: 'Read this all the way through once without marking it. Then read it again with your highlighters: one colour for reasons, one for evidence.',
                layout: 'full',
                items: [
                  'PUT THE PHONES AWAY AT LUNCH — an opinion column from a school newspaper',
                  'Last Tuesday I sat down opposite my friend Nadia and she did not look up for eleven minutes. I counted. When she finally did, she asked me what I had said, and I had not said anything, because there had not seemed to be much point. That is what lunch has become at this school, and it is why the phones should go away between twelve and one.',
                  'First, the lunch hall has become a difficult place to have a conversation. One Year 8 student told me she has stopped trying to talk to people across the table because nobody hears her.',
                  'Second, phones are making us less social. A survey of our own students last term found that sixty-eight per cent had used a phone at lunch at least once.',
                  'Third, a ban would improve our results. The head teacher of a school forty miles away introduced a lunchtime phone ban two years ago and told our newspaper that grades there have gone up since.',
                  'I am not saying phones are bad. I am saying that one hour a day without them would give us back something we have not noticed losing. The school should try it for a term.',
                ],
              },
              {
                id: 's2',
                title: 'Build the Frame',
                directions: 'Write the claim in the wide box at the top. Put one reason in each of the three boxes beneath it. Underneath each reason, write the evidence the writer attaches to it — and if a box stays empty, that is a finding, not a mistake.',
                layout: 'full',
                images: [
                  {
                    id: 'g7-ela-u3-img-argument-frame',
                    slot: 'Section 2 — the argument frame organiser',
                    purpose: 'Shows an argument as a load-bearing structure rather than a piece of prose. Empty evidence boxes become visible holes, which is exactly the diagnosis students find hardest to make from continuous text.',
                    subject: 'a hierarchical graphic organiser of empty rectangles — one wide rectangle across the top, three equal rectangles in a row beneath it, and two smaller rectangles beneath each of those three, all joined by short straight connector lines',
                    count: 10,
                    composition: 'strict three-tier pyramid, top rectangle spanning the full width, middle tier of three equal rectangles evenly spaced, bottom tier of six smaller rectangles in three pairs, thin uniform black outlines on white with straight vertical connectors',
                    mustInclude: ['exactly ten empty rectangles arranged one, three, then six', 'every rectangle completely empty and large enough to write a sentence inside', 'connector lines showing which small boxes belong to which middle box'],
                    mustAvoid: ['any lettering, numbering or symbols in or near the boxes', 'colour fills, shading or drop shadows', 'extra tiers or diagonal connectors between branches'],
                    aspect: '4:3',
                    altText: 'An empty three-tier argument organiser: one box, three boxes, six boxes',
                    style: 'diagram',
                  },
                  {
                    id: 'g7-ela-u3-img-stool',
                    slot: 'Section 2 margin — the three-legged stool',
                    purpose: 'A physical image for sufficiency. Students grasp instantly that a stool with one short leg still stands but cannot be sat on, which is precisely the condition of an argument with one weak reason.',
                    subject: 'a plain three-legged wooden stool seen from the side, two legs of equal length and the third noticeably shorter so the seat tilts',
                    count: 3,
                    composition: 'the stool alone and centred, viewed straight from the side so all three legs are distinguishable, plain white background, seat tilting clearly toward the short leg',
                    mustInclude: ['exactly three legs', 'one leg visibly shorter than the other two', 'a clearly tilted seat'],
                    mustAvoid: ['any writing, arrows or annotation marks', 'a floor, room or background objects', 'a broken or snapped leg, which would suggest failure rather than insufficiency'],
                    aspect: '1:1',
                    altText: 'A three-legged stool with one short leg, tilting',
                    style: 'line-art',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Two Tests, Three Verdicts',
                directions: 'For each reason, answer both questions and then give a three-word verdict: relevant or not, sufficient or not, repairable or not. If you say something is insufficient, you must say how much would be enough.',
                layout: 'column',
                items: [
                  'REASON 1 (the noisy lunch hall) — Relevant? Sufficient? Verdict:',
                  'How much evidence would be enough here?',
                  'REASON 2 (phones make us less social) — Relevant? Sufficient? Verdict:',
                  'What would evidence that actually measures this look like?',
                  'REASON 3 (a ban would improve results) — Relevant? Sufficient? Verdict:',
                  'How much evidence would be enough here?',
                ],
                writingLines: 12,
                images: [
                  {
                    id: 'g7-ela-u3-img-sample-jars',
                    slot: 'Section 3 — the two jars',
                    purpose: 'Sufficiency is an abstraction until it is a quantity you can see. Two jars holding wildly different numbers of identical marbles turns "is that enough?" into a question students answer with their eyes before they answer it with reasoning.',
                    subject: 'two identical clear glass jars standing side by side on a plain surface, the left jar holding a very small number of identical marbles resting on the bottom and the right jar filled nearly to the brim with the same marbles',
                    count: 2,
                    composition: 'straight-on eye-level view, the two jars the same size and shape, well separated with clear space between them, plain white background and even lighting',
                    mustInclude: ['exactly two jars, identical in size and shape', 'exactly three marbles in the left jar, clearly countable', 'the right jar filled well past halfway with the same kind of marble'],
                    mustAvoid: ['lids, labels or any lettering on the jars', 'marbles of different sizes or colours between the two jars', 'a patterned background that makes the contents hard to see'],
                    aspect: '4:3',
                    altText: 'Two identical jars, one holding three marbles and one nearly full',
                    style: 'realistic',
                  },
                ],
              },
              {
                id: 's4',
                title: 'Find the Broken Plank',
                directions: 'Look at the bridge. Every missing plank is a place a reader falls through. Name the weakest link in this column, then write the exact evidence that would repair it — what it would measure, who would collect it, and how much of it there would need to be.',
                layout: 'full',
                items: [
                  'The weakest link in this argument is:',
                  'It fails the test of (circle one): relevance / sufficiency / both',
                  'The evidence that would repair it — be specific about what, who and how much:',
                  'CHALLENGE: there is a fourth reason the writer never states out loud. Write it here.',
                ],
                writingLines: 10,
                images: [
                  {
                    id: 'g7-ela-u3-img-bridge',
                    slot: 'Section 4 — the plank bridge',
                    purpose: 'Gives students a way to talk about where an argument fails rather than whether they like it. A walkable bridge with specific gaps is a far more precise metaphor than "weak argument", and students start pointing at planks.',
                    subject: 'a simple rope-and-plank footbridge seen from the side spanning a narrow gap, with several planks present and several plank positions empty',
                    count: 8,
                    composition: 'side elevation, the bridge spanning the full width of the frame with two rope handrails, exactly eight wooden planks present and three clearly empty gaps spaced along the span, plain background',
                    mustInclude: ['exactly eight planks in place', 'exactly three empty gaps where planks are missing', 'both rope handrails intact along the full span'],
                    mustAvoid: ['any people, animals or figures on the bridge', 'a dramatic chasm, river or landscape that pulls attention', 'broken or snapped ropes, which would suggest total collapse'],
                    aspect: '3:1',
                    altText: 'A rope footbridge with eight planks and three missing gaps',
                    style: 'line-art',
                  },
                ],
              },
            ],
            answerKey: [
              'Claim: the school should ban phones in the lunch hall between twelve and one for a trial term.',
              'Reason 1 — the hall is hard to talk in. Evidence: one Year 8 student\'s statement. Relevant (it is about noise and conversation), insufficient (one person, one report), repairable — a short survey of the hall or an observation count over a week would do it.',
              'Reason 2 — phones make us less social. Evidence: sixty-eight per cent used a phone at least once. NOT relevant: the statistic measures phone use, not sociability, and "at least once" measures almost nothing. Not repairable by adding more of the same number; it needs evidence that measures interaction directly.',
              'Reason 3 — a ban would improve results. Evidence: one head teacher\'s report from one school. Relevant, insufficient, repairable — several schools, results measured the same way before and after, and some account for what else changed.',
              'Weakest link: reason 2, because a failure of relevance cannot be repaired by quantity. Accept reason 1 or 3 if the student argues sufficiency well, but the strongest answer explains why irrelevance is the worse fault.',
              'Hidden fourth reason: the opening anecdote implies that phones damage friendships. It is never stated as a reason and never supported, which is why it slips past the reader.',
            ],
          },
          assessment: {
            successCriteria: [
              'Attaches each piece of evidence to the reason it is meant to support, and notices where none is attached.',
              'Applies relevance before sufficiency and can explain why that order matters.',
              'Specifies what "enough" would look like rather than declaring evidence insufficient in general.',
              'Distinguishes an argument that fails from a conclusion that is false.',
            ],
            exitTicket:
              'One reason from the column, one verdict in three words, and one sentence naming the evidence that would repair it. A student who writes "insufficient" with no repair has not yet understood sufficiency as a quantity.',
            rubric: [
              { level: 'emerging', descriptor: 'Identifies the claim and agrees or disagrees with it; evaluates the writer\'s tone rather than the support, and treats any statistic as proof.' },
              { level: 'developing', descriptor: 'Separates reasons from evidence and spots the thin ones, but judges sufficiency by feel and cannot say how much would be enough.' },
              { level: 'secure', descriptor: 'Applies both tests in order, distinguishes a relevance failure from a sufficiency failure, specifies repairing evidence concretely, and holds the line that badly supported is not the same as false.' },
            ],
          },
          differentiation: {
            support: [
              'Give the claim and the three reasons already filled in, so the student only performs the two tests. The tests are the skill; the extraction can be scaffolded away.',
              'Provide a two-column checklist — "is it about the right thing?" and "is there enough of it?" — to be ticked before any verdict is written.',
              'Do reason one entirely orally with the student before they write anything.',
            ],
            extension: [
              'Rewrite the column so that all three reasons pass both tests, inventing plausible evidence and marking clearly where you had to invent.',
              'Find a real opinion column online and run the same autopsy on it, then compare how much harder a real text is than a constructed one.',
              'Argue the opposite claim using only evidence that would pass both tests, and notice how much shorter the piece becomes.',
            ],
            language: [
              'Relevant and sufficient are the two words this whole lesson hangs on. Post them with a one-line test each and refer to the poster rather than re-explaining.',
              'Allow the three-part verdict to be given orally before it is written; the reasoning is the target, not the sentence construction.',
            ],
          },
          misconceptions: [
            {
              misconception: 'A number is evidence, and a precise number is strong evidence.',
              looksLike: 'A student accepts "sixty-eight per cent" as proof of a claim the number does not measure.',
              correction: 'Ask what was counted, and by whom, and whether the thing counted is the thing being claimed. Sixty-eight per cent used a phone once; nobody measured sociability at all.',
            },
            {
              misconception: 'If I disagree with the conclusion, the argument is bad; if I agree, it is good.',
              looksLike: 'A student who supports a phone ban marks every reason as sufficient and cannot find a weak link.',
              correction: 'Have them evaluate an argument for something they already believe. Ask them to find its weakest reason as a favour to their own side — a weak reason is a liability in a real debate.',
            },
            {
              misconception: 'Saying "there is not enough evidence" is a complete evaluation.',
              looksLike: 'Three identical verdicts of "not enough" with no account of how much would be enough.',
              correction: 'Insufficient is only meaningful with a threshold attached. Require the sentence "it would be enough if ___" every single time.',
            },
            {
              misconception: 'An argument that fails means the conclusion is false.',
              looksLike: 'A student concludes phones must be fine at lunch because the column was badly supported.',
              correction: 'Separate the two on the board: the argument and the claim, in two boxes. A bad argument leaves the claim exactly where it was — unproven, not disproven.',
            },
          ],
          homeExtension: [
            'Take one advertisement and run both tests on it. Most advertisements have no evidence at all, which is itself a finding worth reporting back.',
            'Ask an adult to make a case for something at home — a later bedtime rule, a family purchase — and ask them, kindly, what evidence they have and how much would be enough.',
            'Find two news reports of the same event and check whether the numbers in each measure the same thing.',
          ],
          teacherNotes:
            'The single hardest thing here is getting students to evaluate an argument they agree with. If your class overwhelmingly supports or opposes phone bans, swap the topic for something genuinely split in your room — the mechanics transfer completely. Also be prepared for the reason-two discussion to be slower than you expect: a mis-measuring statistic feels like evidence to almost everyone, adults included, and the moment it comes apart is worth five extra minutes taken from the practice beat.',
        },

        {
          id: 'g7-ela-u3-l4',
          unitId: 'g7-ela-u3',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Spotting the Broken Link',
          essentialQuestion: 'Where exactly does this reasoning stop following?',
          summary:
            'A practical tour of the reasoning failures seventh graders meet daily: mistaking sequence for cause, the false choice between two options, attacking the person, and the leap from some to all.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.7.8', framework: 'CCSS-ELA', text: 'Trace and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound.' },
          ],
          objectives: [
            'I can name the point in an argument where one step does not follow from the last.',
            'I can recognise a false choice and add the missing third option.',
            'I can tell the difference between attacking an argument and attacking a person.',
          ],
          vocabulary: [
            { term: 'sound reasoning', definition: 'Reasoning in which each step genuinely follows from the one before it.' },
            { term: 'false choice', definition: 'Presenting two options as if no others exist.' },
            { term: 'correlation', definition: 'Two things happening together, which is not the same as one causing the other.' },
          ],
          materials: ['Six short argument cards, each with one broken link', 'A poster of the four failure types'],
          prep: ['Write one broken argument about something in your own house. Local examples land harder than textbook ones.'],
          script: [],
          worksheet: { id: 'g7-ela-u3-l4-ws', title: 'Where Does It Stop Following?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Locates the broken step rather than rejecting the whole argument.', 'Names the type of failure and explains it in plain words.'],
            exitTicket: 'Underline the sentence where this argument stops following, and write one sentence saying why.',
          },
          differentiation: {
            support: ['Work with two failure types only until they are secure.'],
            extension: ['Write an argument containing exactly one broken link and see whether a partner can find it.'],
          },
          misconceptions: [
            { misconception: 'Naming a fallacy wins the argument.', looksLike: 'A student labels an argument and stops there.', correction: 'The label is a description, not a refutation. Require the sentence that explains what would have to be true for the step to work.' },
          ],
          homeExtension: ['Find one "because" sentence in the news that does not survive being questioned.'],
        },
        {
          id: 'g7-ela-u3-l5',
          unitId: 'g7-ela-u3',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Who Is Telling You This, and How Do They Know?',
          essentialQuestion: 'How do I judge a source I found in nine seconds?',
          summary:
            'Source evaluation as a habit rather than a checklist. Students investigate who made a page, what it wants, and whether anyone independent says the same thing — including learning to read sideways by leaving the page to check it.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.7.8', framework: 'CCSS-ELA', text: 'Gather relevant information from multiple print and digital sources, using search terms effectively; assess the credibility and accuracy of each source; quote or paraphrase the data and conclusions of others while avoiding plagiarism.' },
            { code: 'CCSS.ELA-LITERACY.RI.7.6', framework: 'CCSS-ELA', text: 'Determine an author\'s point of view or purpose in a text and analyse how the author distinguishes his or her position from that of others.' },
          ],
          objectives: [
            'I can find out who published a source and what they want from me.',
            'I can check a claim by leaving the page and looking for an independent account.',
            'I can tell a source that is wrong from a source that is arguing.',
          ],
          vocabulary: [
            { term: 'credibility', definition: 'How much trust a source has earned, based on who made it and how they know.' },
            { term: 'corroboration', definition: 'An independent source saying the same thing.' },
            { term: 'reading sideways', definition: 'Leaving a page to find out about it, instead of judging it by how it looks.' },
          ],
          materials: ['Four prepared sources on one topic, ranging from strong to dreadful', 'Devices with internet access, or printed screenshots if not'],
          prep: [
            'Choose sources where the worst one looks the most professional. Design matters far more to students than they realise, and this is the fastest way to prove it.',
            'Check every link the morning of the lesson.',
          ],
          script: [],
          worksheet: { id: 'g7-ela-u3-l5-ws', title: 'Read Sideways', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Identifies publisher and purpose for each source.', 'Corroborates or fails to corroborate one specific claim.', 'Ranks the four sources with reasons.'],
            exitTicket: 'Rank these two sources and give the one fact about the publisher that decided it.',
          },
          differentiation: {
            support: ['Give the publisher information and ask only for the purpose and the corroboration step.'],
            extension: ['Find a claim that appears in three places and trace all three back to the same original source.'],
            language: ['Provide a fixed question stem set — who made this, how do they know, what do they want, who else says so — and let students answer in note form.'],
          },
          misconceptions: [
            { misconception: 'A professional-looking site is a reliable site.', looksLike: 'A student ranks the slickest page first.', correction: 'Show two pages side by side, the better source uglier. Then ask who runs each one. Design is cheap; accountability is not.' },
          ],
          homeExtension: ['Check one claim you see on social media by finding two independent sources, and time how long it takes.'],
        },
        {
          id: 'g7-ela-u3-l6',
          unitId: 'g7-ela-u3',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 6,
          status: 'outline',
          title: 'Delineating a Speaker\'s Argument',
          essentialQuestion: 'How do I evaluate an argument I can only hear once?',
          summary:
            'The same evaluation moves applied to speech, where there is no text to reread. Students take structured notes on a recorded speech and then judge the reasoning from their notes.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.SL.7.3', framework: 'CCSS-ELA', text: 'Delineate a speaker\'s argument and specific claims, evaluating the soundness of the reasoning and the relevance and sufficiency of the evidence.' },
            { code: 'CCSS.ELA-LITERACY.SL.7.2', framework: 'CCSS-ELA', text: 'Analyse the main ideas and supporting details presented in diverse media and formats and explain how the ideas clarify a topic.' },
          ],
          objectives: [
            'I can capture a spoken claim and its reasons in note form on one hearing.',
            'I can judge sufficiency from my notes rather than my impression.',
            'I can notice when delivery is doing the work that evidence should be doing.',
          ],
          vocabulary: [
            { term: 'delineate', definition: 'To set out the parts of something clearly, so each one can be examined.' },
            { term: 'delivery', definition: 'How something is said — pace, volume, pauses — as distinct from what is said.' },
          ],
          materials: ['A five-minute recorded speech or podcast segment', 'A pre-printed note frame with claim, reasons and evidence rows'],
          prep: ['Listen once yourself taking the same notes you are asking for. It is harder than it looks and you will want to know where.'],
          script: [],
          worksheet: { id: 'g7-ela-u3-l6-ws', title: 'One Hearing Only', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Produces usable notes on a single hearing.', 'Issues a relevance and sufficiency verdict from the notes.'],
            exitTicket: 'From your notes alone, what was the speaker\'s weakest reason?',
          },
          differentiation: {
            support: ['Play the audio twice, the second time with the note frame partly filled.'],
            extension: ['Compare the speech transcript to the audio and identify what the delivery added that the words did not.'],
          },
          misconceptions: [
            { misconception: 'A confident speaker has a strong argument.', looksLike: 'A student rates a forceful speaker highly and cannot recall a single piece of evidence.', correction: 'Have them read the transcript flat and unemotionally, then re-rate. The gap between the two ratings is the lesson.' },
          ],
          homeExtension: ['Take claim-reason-evidence notes on any video you watch this week and see how many reasons come with evidence.'],
        },
      ],
    },

    /* ============================================================== UNIT 4 */
    {
      id: 'g7-ela-u4',
      gradeId: 'g7',
      subjectId: 'ela',
      sequence: 4,
      title: 'Two Authors, One Topic',
      bigIdea:
        'Two writers can report the same facts and leave you with opposite impressions, entirely through what they emphasise, what they omit and how they interpret.',
      description:
        'Students read pairs of texts on the same subject — two accounts of one historical event, two reports of one study, a memoir and an encyclopaedia entry — and account for the difference without reaching for the word "biased" as an explanation. The unit ends with comparison writing that makes an argument rather than listing similarities and differences.',
      weeks: 5,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RI.7.9', framework: 'CCSS-ELA', text: 'Analyse how two or more authors writing about the same topic shape their presentations of key information by emphasising different evidence or advancing different interpretations of facts.' },
        { code: 'CCSS.ELA-LITERACY.RI.7.6', framework: 'CCSS-ELA', text: 'Determine an author\'s point of view or purpose in a text and analyse how the author distinguishes his or her position from that of others.' },
        { code: 'CCSS.ELA-LITERACY.RI.7.2', framework: 'CCSS-ELA', text: 'Determine two or more central ideas in a text and analyse their development over the course of the text; provide an objective summary.' },
        { code: 'CCSS.ELA-LITERACY.RL.7.9', framework: 'CCSS-ELA', text: 'Compare and contrast a fictional portrayal of a time, place or character and a historical account of the same period as a means of understanding how authors of fiction use or alter history.' },
      ],
      lessonTitles: [
        'Same Facts, Different Emphasis',
        'What Got Left Out',
        'Fact, Interpretation, and the Line Between',
        'Where the Author Stands Against Everyone Else',
        'Writing a Comparison That Argues',
      ],
      performanceTask:
        'The Paired Reading Report: given two texts on one topic, students produce a comparison essay that names the shared facts, identifies three points of divergence, explains each as a choice about emphasis, omission or interpretation, and argues which account a reader should rely on and for what purpose.',
      lessons: [
        {
          id: 'g7-ela-u4-l1',
          unitId: 'g7-ela-u4',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Same Facts, Different Emphasis',
          essentialQuestion: 'How can two true accounts leave me with opposite impressions?',
          summary:
            'Students verify that two accounts contain the same facts, then chart where each fact appears and how much space it gets. Emphasis becomes measurable in paragraphs and word counts.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.7.9', framework: 'CCSS-ELA', text: 'Analyse how two or more authors writing about the same topic shape their presentations of key information by emphasising different evidence or advancing different interpretations of facts.' },
          ],
          objectives: [
            'I can list the facts both texts share.',
            'I can show where each text puts its emphasis, using position and length as evidence.',
          ],
          vocabulary: [
            { term: 'emphasis', definition: 'The weight a writer gives something through position, repetition or length.' },
            { term: 'lead', definition: 'The opening of a report, which signals what the writer thinks matters most.' },
          ],
          materials: ['Two news reports of the same event', 'A two-column chart and a ruler for measuring column space'],
          prep: ['Pick reports of similar length, or the comparison becomes about size rather than emphasis.'],
          script: [],
          worksheet: { id: 'g7-ela-u4-l1-ws', title: 'Where the Weight Falls', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Identifies the shared factual core.', 'Cites position and length as evidence of emphasis.'],
            exitTicket: 'Which fact does each writer put first, and what does that tell you?',
          },
          differentiation: {
            support: ['Compare only the first two paragraphs of each.'],
            extension: ['Rewrite one report\'s opening so its emphasis matches the other, changing no facts.'],
          },
          misconceptions: [
            { misconception: 'A difference in emphasis means one report is lying.', looksLike: 'A student calls the shorter account false.', correction: 'Line the shared facts up in a column. When the facts match, the disagreement is about attention, not truth.' },
          ],
          homeExtension: ['Compare the top story on two different news sites and note what each puts first.'],
        },
        {
          id: 'g7-ela-u4-l2',
          unitId: 'g7-ela-u4',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'What Got Left Out',
          essentialQuestion: 'How do I notice something that is not there?',
          summary:
            'Omission is invisible by definition. Students build a combined fact list from both texts and then mark which facts each text lacks, making absence visible for the first time.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.7.9', framework: 'CCSS-ELA', text: 'Analyse how two or more authors writing about the same topic shape their presentations of key information.' },
            { code: 'CCSS.ELA-LITERACY.RI.7.2', framework: 'CCSS-ELA', text: 'Determine two or more central ideas in a text and analyse their development.' },
          ],
          objectives: [
            'I can build a combined list of facts from two sources.',
            'I can identify what each source omits and suggest why.',
          ],
          vocabulary: [
            { term: 'omission', definition: 'Something true and relevant that a text does not mention.' },
            { term: 'framing', definition: 'The choices about what to include and exclude that shape how a reader understands a topic.' },
          ],
          materials: ['The two paired texts from lesson one', 'A three-column grid: fact, in text A, in text B'],
          prep: ['Build your own combined list first so you know how many facts you are hunting.'],
          script: [],
          worksheet: { id: 'g7-ela-u4-l2-ws', title: 'The Missing Column', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Produces a combined fact grid.', 'Names one significant omission and offers a plausible reason.'],
            exitTicket: 'Name a fact in one text and absent from the other, and say how its absence changes the impression.',
          },
          differentiation: {
            support: ['Provide the combined fact list; the student only ticks the columns.'],
            extension: ['Find a third source and identify a fact both original texts omitted.'],
          },
          misconceptions: [
            { misconception: 'Every omission is deliberate and sinister.', looksLike: 'A student attributes motives to every gap.', correction: 'Word count, audience and deadline explain most omissions. Ask what a plausible innocent reason would be before reaching for a sinister one.' },
          ],
          homeExtension: ['Read a product review and list three things a buyer would want to know that it never mentions.'],
        },
        {
          id: 'g7-ela-u4-l3',
          unitId: 'g7-ela-u4',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Fact, Interpretation, and the Line Between',
          essentialQuestion: 'When does a writer stop reporting and start interpreting?',
          summary:
            'Students colour-code a text into verifiable facts and the interpretations built on them, then find the sentences where the two blur — usually adjectives doing quiet argumentative work.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.7.9', framework: 'CCSS-ELA', text: 'Analyse how two or more authors advance different interpretations of facts.' },
            { code: 'CCSS.ELA-LITERACY.RI.7.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text; analyse the impact of a specific word choice on meaning and tone.' },
          ],
          objectives: [
            'I can mark a sentence as fact, interpretation, or a mixture.',
            'I can identify the word that turns a fact into an interpretation.',
          ],
          vocabulary: [
            { term: 'interpretation', definition: 'What a writer says the facts mean.' },
            { term: 'verifiable', definition: 'Able to be checked against something outside the text.' },
          ],
          materials: ['A paired text set', 'Three highlighter colours'],
          prep: ['Mark up your own copy in advance; the mixed sentences are the ones worth discussing and they are easy to miss live.'],
          script: [],
          worksheet: { id: 'g7-ela-u4-l3-ws', title: 'Fact, Interpretation, Mixture', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Classifies sentences accurately.', 'Identifies the specific word carrying an interpretation.'],
            exitTicket: 'Rewrite this interpretive sentence as pure fact, and say what you had to delete.',
          },
          differentiation: {
            support: ['Work with ten pre-selected sentences rather than a whole text.'],
            extension: ['Write a paragraph of pure fact, then add three words that turn it into an argument.'],
            language: ['Practise the verifiability test aloud: could two people who disagree still both check this?'],
          },
          misconceptions: [
            { misconception: 'Anything in a serious publication is fact.', looksLike: 'A student marks an entire column as fact.', correction: 'Apply the check-it test sentence by sentence. Ask where they would go to verify it. Most sentences have no such place.' },
          ],
          homeExtension: ['Take one paragraph of sports commentary and separate what happened from what it supposedly means.'],
        },
        {
          id: 'g7-ela-u4-l4',
          unitId: 'g7-ela-u4',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Where the Author Stands Against Everyone Else',
          essentialQuestion: 'How does a writer show you they disagree with other people?',
          summary:
            'Students hunt for the moves writers use to position themselves — "many people believe", "the standard account holds", "critics argue" — and analyse how each move sets up the writer\'s own claim.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.7.6', framework: 'CCSS-ELA', text: 'Determine an author\'s point of view or purpose in a text and analyse how the author distinguishes his or her position from that of others.' },
          ],
          objectives: [
            'I can find where a writer describes someone else\'s position.',
            'I can judge whether the other position was described fairly.',
          ],
          vocabulary: [
            { term: 'positioning', definition: 'How a writer places their view relative to other people\'s.' },
            { term: 'straw man', definition: 'A weakened version of someone else\'s view, easier to knock down than the real one.' },
          ],
          materials: ['An essay that explicitly engages with other views', 'Sticky flags'],
          prep: ['Flag three positioning moves in advance so you can seed the hunt if it stalls.'],
          script: [],
          worksheet: { id: 'g7-ela-u4-l4-ws', title: 'Whose View Is That?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Locates positioning moves.', 'Judges the fairness of a summarised opposing view.'],
            exitTicket: 'Find where the writer describes an opposing view. Would someone holding that view recognise themselves?',
          },
          differentiation: {
            support: ['Supply a list of positioning phrases to hunt for.'],
            extension: ['Rewrite a straw man version of an opposing view into its strongest honest form.'],
          },
          misconceptions: [
            { misconception: 'If a writer mentions the other side, they have been fair.', looksLike: 'A student credits any mention as balance.', correction: 'Read the summarised view aloud and ask whether a believer would nod. Mention is not representation.' },
          ],
          homeExtension: ['Find an article that describes a view you hold, and judge whether you recognise yourself in it.'],
        },
        {
          id: 'g7-ela-u4-l5',
          unitId: 'g7-ela-u4',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Writing a Comparison That Argues',
          essentialQuestion: 'How do I write a comparison that says something instead of just listing?',
          summary:
            'Comparison writing with a thesis. Students learn point-by-point structure and are forbidden the phrase "they are both similar and different".',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.7.2', framework: 'CCSS-ELA', text: 'Write informative or explanatory texts to examine a topic and convey ideas, concepts and information through the selection, organisation and analysis of relevant content.' },
            { code: 'CCSS.ELA-LITERACY.RI.7.9', framework: 'CCSS-ELA', text: 'Analyse how two or more authors writing about the same topic shape their presentations of key information.' },
          ],
          objectives: [
            'I can write a comparison thesis that makes a judgement.',
            'I can organise a comparison point by point rather than text by text.',
            'I can say which account a reader should rely on, and for what.',
          ],
          vocabulary: [
            { term: 'point-by-point', definition: 'Organising a comparison around the points of difference rather than around each text in turn.' },
            { term: 'so what', definition: 'The sentence that says why the difference matters to a reader.' },
          ],
          materials: ['Notes and grids from lessons one to four', 'A model comparison paragraph, deliberately flawed'],
          prep: ['Write the flawed model yourself so the flaws are the ones your class actually makes.'],
          script: [],
          worksheet: { id: 'g7-ela-u4-l5-ws', title: 'Comparison With a Point', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Thesis makes a judgement, not an observation.', 'Uses point-by-point organisation.', 'Each paragraph ends with a so-what sentence.'],
            exitTicket: 'Write your comparison thesis in one sentence, and underline the part that could be disagreed with.',
          },
          differentiation: {
            support: ['Provide the point-by-point skeleton with topic sentences supplied.'],
            extension: ['Write the same comparison for two different audiences and account for what changes.'],
            language: ['Give a bank of comparison connectives — whereas, by contrast, in the same way, more decisively — and require three.'],
          },
          misconceptions: [
            { misconception: 'A comparison essay is a list of similarities followed by a list of differences.', looksLike: 'Two paragraphs, one per text, with no interaction between them.', correction: 'Require each paragraph to mention both texts. It forces point-by-point structure without a lecture on structure.' },
          ],
          homeExtension: ['Compare two reviews of the same film and decide which one a friend should read before deciding.'],
        },
      ],
    },

    /* ============================================================== UNIT 5 */
    {
      id: 'g7-ela-u5',
      gradeId: 'g7',
      subjectId: 'ela',
      sequence: 5,
      title: 'Page, Stage and Screen',
      bigIdea:
        'Every medium can do things the others cannot — and every adaptation is therefore a series of decisions about what to keep, what to show and what the audience will now never know.',
      description:
        'Students read a scene, then watch or listen to it, and account for the difference in terms of technique rather than preference. Camera angle, casting, music, cutting, staging and the actor\'s voice each get their own lesson-sized attention, and the unit closes with an argument about which version better serves the story.',
      weeks: 4,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RL.7.7', framework: 'CCSS-ELA', text: 'Compare and contrast a written story, drama or poem to its audio, filmed, staged or multimedia version, analysing the effects of techniques unique to each medium.' },
        { code: 'CCSS.ELA-LITERACY.SL.7.2', framework: 'CCSS-ELA', text: 'Analyse the main ideas and supporting details presented in diverse media and formats and explain how the ideas clarify a topic, text or issue under study.' },
        { code: 'CCSS.ELA-LITERACY.RL.7.5', framework: 'CCSS-ELA', text: 'Analyse how a drama\'s or poem\'s form or structure contributes to its meaning.' },
        { code: 'CCSS.ELA-LITERACY.RL.7.3', framework: 'CCSS-ELA', text: 'Analyse how particular elements of a story or drama interact.' },
      ],
      lessonTitles: [
        'Reading the Scene Before You Watch It',
        'What the Camera Decides for You',
        'What a Voice Adds and Takes Away',
        'Cuts, Compressions and Inventions',
        'Which Version Serves the Story Better?',
      ],
      performanceTask:
        'The Adaptation Verdict: students compare one scene across page and screen in a four-paragraph argument that identifies three techniques unique to the filmed version, explains what each accomplishes, names one thing the page did that the film could not, and delivers a judgement about which version a first-time audience should meet first.',
      lessons: [
        {
          id: 'g7-ela-u5-l1',
          unitId: 'g7-ela-u5',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Reading the Scene Before You Watch It',
          essentialQuestion: 'What does my own imagination supply that a film will have to decide?',
          summary:
            'Students annotate a scene for everything the text leaves unspecified — faces, weather, distance, tone of voice — and record their own choices before seeing anyone else\'s. This becomes the baseline the rest of the unit measures against.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.7', framework: 'CCSS-ELA', text: 'Compare and contrast a written story, drama or poem to its audio, filmed, staged or multimedia version.' },
            { code: 'CCSS.ELA-LITERACY.RL.7.1', framework: 'CCSS-ELA', text: 'Cite several pieces of textual evidence to support analysis.' },
          ],
          objectives: [
            'I can list what the text specifies and what it leaves to me.',
            'I can record my own casting, setting and tone choices before watching.',
          ],
          vocabulary: [
            { term: 'adaptation', definition: 'A version of a story remade in another medium.' },
            { term: 'indeterminacy', definition: 'The things a text simply does not say, which every reader fills in differently.' },
          ],
          materials: ['A scene from a novel or play with a well-known screen version', 'Blank storyboard frames'],
          prep: ['Do not tell students which adaptation they will watch. Foreknowledge contaminates their own imagining.'],
          script: [],
          worksheet: { id: 'g7-ela-u5-l1-ws', title: 'Before the Film', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Distinguishes specified detail from filled-in detail.', 'Records concrete personal choices with reasons drawn from the text.'],
            exitTicket: 'Name one thing you pictured that the text never actually said.',
          },
          differentiation: {
            support: ['Provide a checklist of categories: face, age, weather, room, distance, volume.'],
            extension: ['Storyboard the scene in six frames with camera positions marked.'],
          },
          misconceptions: [
            { misconception: 'The text described the character fully.', looksLike: 'A student insists on a detail the text never gives.', correction: 'Hunt for the sentence together. When it cannot be found, that is the discovery — the reader supplied it.' },
          ],
          homeExtension: ['Describe a character from a book to someone who has not read it and see how differently they picture them.'],
        },
        {
          id: 'g7-ela-u5-l2',
          unitId: 'g7-ela-u5',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'What the Camera Decides for You',
          essentialQuestion: 'How does where the camera stands change what I feel?',
          summary:
            'A technical vocabulary lesson with immediate application: shot distance, angle, focus and movement, each demonstrated on the same two seconds of footage and then hunted in the adaptation.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.7', framework: 'CCSS-ELA', text: 'Compare and contrast a written story to its filmed version, analysing the effects of techniques unique to each medium.' },
            { code: 'CCSS.ELA-LITERACY.SL.7.2', framework: 'CCSS-ELA', text: 'Analyse the main ideas and supporting details presented in diverse media and formats.' },
          ],
          objectives: [
            'I can name shot distance and camera angle accurately.',
            'I can explain what a specific camera choice does to the viewer.',
          ],
          vocabulary: [
            { term: 'close-up', definition: 'A shot filling the frame with a face or object, forcing attention and intimacy.' },
            { term: 'low angle', definition: 'A camera positioned below the subject, which tends to make it look larger or more powerful.' },
            { term: 'shallow focus', definition: 'Keeping one plane sharp and blurring the rest, which tells the viewer where to look.' },
          ],
          materials: ['A two-minute clip you can pause frequently', 'A one-page shot vocabulary reference'],
          prep: ['Cue three specific timestamps in advance. Hunting for a shot live kills the momentum.'],
          script: [],
          worksheet: { id: 'g7-ela-u5-l2-ws', title: 'Where Is the Camera?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names shot types correctly.', 'Explains the effect of one shot in terms of viewer attention or feeling.'],
            exitTicket: 'Describe one shot from the clip and say what it made you feel about the character.',
          },
          differentiation: {
            support: ['Work with two shot types only — close-up and wide — until the distinction is automatic.'],
            extension: ['Find a shot that contradicts the dialogue and explain the tension it creates.'],
          },
          misconceptions: [
            { misconception: 'Camera choices are just how it was filmed.', looksLike: 'A student treats every shot as neutral.', correction: 'Show the same line delivered in close-up and in wide shot. Ask which character seems to be losing. The answer changes with nothing but distance.' },
          ],
          homeExtension: ['Watch one minute of anything and count how many separate shots it contains. The number usually shocks people.'],
        },
        {
          id: 'g7-ela-u5-l3',
          unitId: 'g7-ela-u5',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'What a Voice Adds and Takes Away',
          essentialQuestion: 'What does an actor decide that a reader used to decide?',
          summary:
            'Audio adaptation. Students hear the same line read three ways, then compare an audiobook or radio version to their own reading and account for what the performance fixed in place.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.7', framework: 'CCSS-ELA', text: 'Compare and contrast a written story, drama or poem to its audio version, analysing the effects of techniques unique to each medium.' },
            { code: 'CCSS.ELA-LITERACY.RL.7.4', framework: 'CCSS-ELA', text: 'Analyse the impact of a specific word choice on meaning and tone.' },
          ],
          objectives: [
            'I can describe how pace, pause and emphasis change a line\'s meaning.',
            'I can explain what a performance closes off for the listener.',
          ],
          vocabulary: [
            { term: 'inflection', definition: 'The rise and fall of a voice, which can turn a statement into a question or an accusation.' },
            { term: 'pace', definition: 'The speed of delivery, which controls tension.' },
          ],
          materials: ['An audiobook or radio drama excerpt', 'A single line of dialogue for the three-readings exercise'],
          prep: ['Practise the three readings yourself. They need to be genuinely different, not three volumes of the same thing.'],
          script: [],
          worksheet: { id: 'g7-ela-u5-l3-ws', title: 'Three Ways to Say It', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Describes a vocal technique precisely.', 'Names something a performance removed from the reader\'s control.'],
            exitTicket: 'Which reading of the line was closest to yours, and what does the difference tell you?',
          },
          differentiation: {
            support: ['Compare two readings rather than three.'],
            extension: ['Record two readings of the same paragraph designed to make a listener draw opposite conclusions.'],
            language: ['Inflection carries different meanings across languages; invite students to demonstrate a pattern from another language they speak.'],
          },
          misconceptions: [
            { misconception: 'A good narrator reads the words neutrally.', looksLike: 'A student says the audiobook added nothing.', correction: 'Play a flat machine reading against a performed one. Neutral is not available; even flatness is a choice.' },
          ],
          homeExtension: ['Read a paragraph aloud twice, deliberately different, and ask a listener what changed.'],
        },
        {
          id: 'g7-ela-u5-l4',
          unitId: 'g7-ela-u5',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Cuts, Compressions and Inventions',
          essentialQuestion: 'What did the adaptation remove, merge or make up, and why?',
          summary:
            'Students audit an adaptation against the text scene by scene, classifying every change as a cut, a compression, a reordering or an invention, then reason about the constraint that produced it.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.7', framework: 'CCSS-ELA', text: 'Compare and contrast a written story to its filmed or staged version, analysing the effects of techniques unique to each medium.' },
            { code: 'CCSS.ELA-LITERACY.RL.7.5', framework: 'CCSS-ELA', text: 'Analyse how a drama\'s or poem\'s form or structure contributes to its meaning.' },
          ],
          objectives: [
            'I can classify each change as a cut, compression, reordering or invention.',
            'I can name the constraint that probably caused a change.',
          ],
          vocabulary: [
            { term: 'compression', definition: 'Merging several scenes or characters into one to save time.' },
            { term: 'invention', definition: 'Something in the adaptation that is not in the source at all.' },
          ],
          materials: ['The text scene and the corresponding film sequence', 'A four-column audit sheet'],
          prep: ['Time both versions. The runtime difference is usually the whole explanation for half the changes.'],
          script: [],
          worksheet: { id: 'g7-ela-u5-l4-ws', title: 'The Adaptation Audit', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Classifies at least six changes correctly.', 'Offers a defensible reason for one invention.'],
            exitTicket: 'Name the one change you think was a mistake, and defend it against the constraint that caused it.',
          },
          differentiation: {
            support: ['Audit a single two-minute sequence rather than a whole scene.'],
            extension: ['Propose an alternative solution to the constraint that produced the change you disliked most.'],
          },
          misconceptions: [
            { misconception: 'Changes happen because the film-makers did not read the book properly.', looksLike: 'A student explains every change as carelessness.', correction: 'Give them the runtime and the page count and ask them to fit one into the other. Constraint explains far more than incompetence.' },
          ],
          homeExtension: ['Ask someone who has seen an adaptation but not read the source what they think happens in the book.'],
        },
        {
          id: 'g7-ela-u5-l5',
          unitId: 'g7-ela-u5',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Which Version Serves the Story Better?',
          essentialQuestion: 'Can I argue for a version without just saying which one I preferred?',
          summary:
            'The unit argument. Students take a position on which version better serves the story, supported by technique-based evidence, and must acknowledge one respect in which the other version wins.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.7.7', framework: 'CCSS-ELA', text: 'Compare and contrast a written story to its audio, filmed or staged version, analysing the effects of techniques unique to each medium.' },
            { code: 'CCSS.ELA-LITERACY.W.7.1', framework: 'CCSS-ELA', text: 'Write arguments to support claims with clear reasons and relevant evidence.' },
          ],
          objectives: [
            'I can argue for a version using technique as evidence rather than preference.',
            'I can concede one genuine strength of the version I did not choose.',
          ],
          vocabulary: [
            { term: 'concession', definition: 'Admitting a real strength in the position you are arguing against.' },
            { term: 'criterion', definition: 'The standard you are judging by, stated openly so a reader can test it.' },
          ],
          materials: ['All unit notes', 'A two-sided argument frame'],
          prep: ['Decide and state the criterion for the class — serves the story is deliberately vague until someone defines it.'],
          script: [],
          worksheet: { id: 'g7-ela-u5-l5-ws', title: 'The Adaptation Verdict', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['States a criterion openly.', 'Uses three technique-based pieces of evidence.', 'Includes a genuine concession.'],
            exitTicket: 'Name one respect in which the version you did not choose is better.',
          },
          differentiation: {
            support: ['Provide the criterion and two of the three pieces of evidence.'],
            extension: ['Argue the case you personally disagree with and make it convincing.'],
          },
          misconceptions: [
            { misconception: 'Faithful means better.', looksLike: 'A student\'s only criterion is closeness to the book.', correction: 'Ask whether a filmed version that reproduced every word would be good. The obvious no forces a real criterion.' },
          ],
          homeExtension: ['Have the argument with someone at home who prefers the other version and see which of your reasons survive.'],
        },
      ],
    },

    /* ============================================================== UNIT 6 */
    {
      id: 'g7-ela-u6',
      gradeId: 'g7',
      subjectId: 'ela',
      sequence: 6,
      title: 'Writing an Argument That Answers Back',
      bigIdea:
        'A serious argument does not pretend the other side does not exist — it states the strongest version of the opposing claim and then answers it.',
      description:
        'The writing unit that gathers the whole year. Students find a claim genuinely worth arguing, build an evidence file from credible sources, write the counterclaim paragraph properly rather than as a token gesture, and revise with a single ruthless test: does this sentence argue? Every reading skill from Unit 3 comes back as a writing standard.',
      weeks: 6,
      standards: [
        { code: 'CCSS.ELA-LITERACY.W.7.1', framework: 'CCSS-ELA', text: 'Write arguments to support claims with clear reasons and relevant evidence.' },
        { code: 'CCSS.ELA-LITERACY.W.7.1.A', framework: 'CCSS-ELA', text: 'Introduce claims, acknowledge alternate or opposing claims, and organise the reasons and evidence logically.' },
        { code: 'CCSS.ELA-LITERACY.W.7.1.B', framework: 'CCSS-ELA', text: 'Support claims with logical reasoning and relevant evidence, using accurate, credible sources and demonstrating an understanding of the topic.' },
        { code: 'CCSS.ELA-LITERACY.W.7.5', framework: 'CCSS-ELA', text: 'With guidance and support, develop and strengthen writing as needed by planning, revising, editing, rewriting or trying a new approach.' },
        { code: 'CCSS.ELA-LITERACY.W.7.9.B', framework: 'CCSS-ELA', text: 'Apply grade 7 reading standards to literary nonfiction, tracing and evaluating an argument and specific claims in a text.' },
      ],
      lessonTitles: [
        'Finding a Claim Worth Arguing',
        'Building the Evidence File',
        'The Counterclaim Paragraph',
        'Cohesion: Making the Paragraphs Hold Hands',
        'Revision: Cut Everything That Does Not Argue',
      ],
      performanceTask:
        'The Argument Essay: a five-paragraph formal argument on a claim of the student\'s choosing, with at least four pieces of evidence from at least three credible sources, a counterclaim paragraph that states the opposing position strongly enough that someone holding it would agree with the summary, and a works-consulted list.',
      lessons: [
        {
          id: 'g7-ela-u6-l1',
          unitId: 'g7-ela-u6',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Finding a Claim Worth Arguing',
          essentialQuestion: 'What makes a claim worth spending three weeks on?',
          summary:
            'Students test candidate claims against three criteria: someone reasonable disagrees, evidence exists and is findable, and the writer does not already know the answer. Most first attempts fail at least two.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.7.1.A', framework: 'CCSS-ELA', text: 'Introduce claims, acknowledge alternate or opposing claims, and organise the reasons and evidence logically.' },
          ],
          objectives: [
            'I can write a claim that a reasonable person could disagree with.',
            'I can reject my own claim if the evidence for it does not exist.',
          ],
          vocabulary: [
            { term: 'arguable', definition: 'Capable of being disagreed with by a reasonable, informed person.' },
            { term: 'scope', definition: 'How much a claim covers — too wide and it cannot be supported in five paragraphs.' },
          ],
          materials: ['A list of twenty candidate topics', 'The three-criteria checklist'],
          prep: ['Prepare two claims of your own, one that passes and one that fails, and be honest about which is which.'],
          script: [],
          worksheet: { id: 'g7-ela-u6-l1-ws', title: 'Is This Worth Arguing?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Produces a claim passing all three criteria.', 'Explains why a rejected claim failed.'],
            exitTicket: 'Write your claim and the strongest sentence someone who disagrees would say.',
          },
          differentiation: {
            support: ['Offer five pre-tested claims to choose from.'],
            extension: ['Narrow a too-wide claim three times and note what is gained at each narrowing.'],
            language: ['Practise the disagreement test orally: can you say the opposite without sounding ridiculous?'],
          },
          misconceptions: [
            { misconception: 'A strong opinion makes a strong claim.', looksLike: 'A student picks something nobody disputes and cannot find an opposing view.', correction: 'Ask them to write the opposing claim. If it sounds absurd, there is no argument to be had.' },
          ],
          homeExtension: ['Try your claim on an adult and note the first objection they raise. That objection is your counterclaim.'],
        },
        {
          id: 'g7-ela-u6-l2',
          unitId: 'g7-ela-u6',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'Building the Evidence File',
          essentialQuestion: 'How do I gather evidence without accidentally gathering only what agrees with me?',
          summary:
            'Research with a deliberate constraint: students must find at least one credible source that undercuts their own claim before they are allowed to start drafting.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.7.8', framework: 'CCSS-ELA', text: 'Gather relevant information from multiple print and digital sources, using search terms effectively; assess the credibility and accuracy of each source; quote or paraphrase while avoiding plagiarism.' },
            { code: 'CCSS.ELA-LITERACY.W.7.1.B', framework: 'CCSS-ELA', text: 'Support claims with logical reasoning and relevant evidence, using accurate, credible sources.' },
          ],
          objectives: [
            'I can search with terms that would find evidence against me as well as for me.',
            'I can record a source so I can find it again and credit it.',
            'I can paraphrase without copying sentence structure.',
          ],
          vocabulary: [
            { term: 'paraphrase', definition: 'Restating an idea in your own words and sentence shapes, with the source still credited.' },
            { term: 'plagiarism', definition: 'Presenting someone else\'s words or ideas as your own.' },
            { term: 'search term', definition: 'The words you type, which decide what you are able to find.' },
          ],
          materials: ['Devices or a prepared source pack', 'Evidence file cards with source, claim supported, and quotation fields'],
          prep: ['Model one search where you deliberately look for the opposing evidence. Students almost never do this unprompted.'],
          script: [],
          worksheet: { id: 'g7-ela-u6-l2-ws', title: 'The Evidence File', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Collects four usable pieces of evidence from three sources.', 'Includes at least one that undercuts the claim.', 'Paraphrases without copying structure.'],
            exitTicket: 'Show me the source that disagrees with you and say what it costs your argument.',
          },
          differentiation: {
            support: ['Provide a curated pack of six sources, two of them opposing.'],
            extension: ['Trace one statistic back to its original study and check whether the reporting matched it.'],
            language: ['Paraphrasing is genuinely harder in a second language; allow a two-step process of note-taking in any language then writing in English.'],
          },
          misconceptions: [
            { misconception: 'Changing a few words counts as paraphrasing.', looksLike: 'A sentence with the same structure and three synonyms swapped in.', correction: 'Cover the source and have the student say the idea aloud, then write what they said. Structure changes automatically when the sentence is rebuilt from meaning.' },
          ],
          homeExtension: ['Search for evidence against something you firmly believe and see how easy or hard it is to find.'],
        },
        {
          id: 'g7-ela-u6-l3',
          unitId: 'g7-ela-u6',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'The Counterclaim Paragraph',
          essentialQuestion: 'How do I state the other side strongly and still win?',
          summary:
            'The paragraph most students fake. They learn the three-move structure — state it fairly, concede what is true, then answer with evidence — and are held to the test that a believer would recognise their own view.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.7.1.A', framework: 'CCSS-ELA', text: 'Introduce claims, acknowledge alternate or opposing claims, and organise the reasons and evidence logically.' },
            { code: 'CCSS.ELA-LITERACY.W.7.1.E', framework: 'CCSS-ELA', text: 'Provide a concluding statement or section that follows from and supports the argument presented.' },
          ],
          objectives: [
            'I can state an opposing claim so fairly that someone holding it would agree with my summary.',
            'I can concede a true point without giving up my claim.',
            'I can answer a counterclaim with evidence rather than repetition.',
          ],
          vocabulary: [
            { term: 'counterclaim', definition: 'The opposing position, stated in its strongest honest form.' },
            { term: 'rebuttal', definition: 'The answer to the counterclaim, which must contain new evidence rather than a restatement.' },
            { term: 'concession', definition: 'Admitting something true that the other side has right.' },
          ],
          materials: ['Three model counterclaim paragraphs of varying quality', 'The evidence file from lesson two'],
          prep: ['Write the weakest model yourself — a straw man dressed as balance — so students can dismantle it.'],
          script: [],
          worksheet: { id: 'g7-ela-u6-l3-ws', title: 'State It, Concede It, Answer It', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Opposing claim stated fairly enough to pass the recognition test.', 'A real concession is made.', 'The rebuttal introduces new evidence.'],
            exitTicket: 'Read your counterclaim sentence to someone who disagrees with you and ask whether it is fair.',
          },
          differentiation: {
            support: ['Provide the three-move frame with the first sentence of each move supplied.'],
            extension: ['Write a counterclaim paragraph so strong that a reader might change sides, then write the rebuttal that holds the line.'],
            language: ['Give concession connectives explicitly — admittedly, it is true that, this does not mean that — and require one of each.'],
          },
          misconceptions: [
            { misconception: 'Acknowledging the other side weakens my argument.', looksLike: 'A one-line dismissal labelled as a counterclaim.', correction: 'Show two versions to a genuinely undecided reader. The one that engages wins almost every time, and students believe results more than instruction.' },
          ],
          homeExtension: ['Ask someone who disagrees with your claim to state their reason, and write it down in their words before you argue.'],
        },
        {
          id: 'g7-ela-u6-l4',
          unitId: 'g7-ela-u6',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Cohesion: Making the Paragraphs Hold Hands',
          essentialQuestion: 'How do I make five paragraphs feel like one argument?',
          summary:
            'Transitions as logical joints rather than decoration. Students diagnose where an argument jolts, then repair it by naming the relationship between the two paragraphs.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.7.1.C', framework: 'CCSS-ELA', text: 'Use words, phrases and clauses to create cohesion and clarify the relationships among claim, reasons and evidence.' },
            { code: 'CCSS.ELA-LITERACY.W.7.4', framework: 'CCSS-ELA', text: 'Produce clear and coherent writing in which the development, organisation and style are appropriate to task, purpose and audience.' },
          ],
          objectives: [
            'I can name the logical relationship between two paragraphs before I write the transition.',
            'I can replace a decorative transition with one that carries meaning.',
          ],
          vocabulary: [
            { term: 'cohesion', definition: 'The quality of writing where each part connects clearly to the next.' },
            { term: 'transition', definition: 'A word or phrase naming the relationship between two ideas.' },
          ],
          materials: ['A draft with the transitions removed', 'A relationship bank: adds to, contrasts with, caused by, despite'],
          prep: ['Strip the transitions out of a real student draft, with permission, and use that.'],
          script: [],
          worksheet: { id: 'g7-ela-u6-l4-ws', title: 'Name the Joint', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names the relationship before choosing the transition word.', 'No transition is purely decorative.'],
            exitTicket: 'Between your paragraphs two and three, what is the actual relationship? Name it in one word.',
          },
          differentiation: {
            support: ['Supply the relationship names and let the student match transitions to them.'],
            extension: ['Reorder the paragraphs of a draft and rewrite the transitions to fit the new order.'],
            language: ['Transition words are highly idiomatic; keep a running class bank sorted by relationship rather than alphabetically.'],
          },
          misconceptions: [
            { misconception: 'Transitions are words you sprinkle at the start of paragraphs.', looksLike: 'Every paragraph opening with "furthermore" regardless of relationship.', correction: 'Delete all of them and ask what each paragraph does to the one before. Write that, then find the word for it.' },
          ],
          homeExtension: ['Read your draft aloud to someone and mark every place they look confused. Those are the missing joints.'],
        },
        {
          id: 'g7-ela-u6-l5',
          unitId: 'g7-ela-u6',
          gradeId: 'g7',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Revision: Cut Everything That Does Not Argue',
          essentialQuestion: 'Which sentences in my essay are actually doing work?',
          summary:
            'Revision as subtraction. Students mark every sentence as claim, reason, evidence, explanation or nothing, then delete the nothings and discover the essay improves.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.7.5', framework: 'CCSS-ELA', text: 'With guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising, editing, rewriting or trying a new approach.' },
            { code: 'CCSS.ELA-LITERACY.W.7.1.D', framework: 'CCSS-ELA', text: 'Establish and maintain a formal style.' },
          ],
          objectives: [
            'I can label every sentence in my draft by the job it does.',
            'I can delete sentences that do no job, including ones I like.',
            'I can maintain a formal style without becoming unreadable.',
          ],
          vocabulary: [
            { term: 'revision', definition: 'Changing what the writing says and does, as opposed to editing, which fixes how it is written.' },
            { term: 'formal style', definition: 'Writing that avoids slang and contractions and addresses a reader it does not know.' },
          ],
          materials: ['Student drafts', 'Five-colour labelling key', 'Red pens for deletion'],
          prep: ['Label one of your own paragraphs in advance and find something you have to delete. Model losing a sentence you liked.'],
          script: [],
          worksheet: { id: 'g7-ela-u6-l5-ws', title: 'What Job Does This Sentence Do?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Every sentence labelled.', 'At least three sentences deleted with reasons.', 'Formal style maintained after cutting.'],
            exitTicket: 'Which sentence did you most regret deleting, and why was it right to delete it?',
          },
          differentiation: {
            support: ['Label one paragraph rather than the whole essay.'],
            extension: ['Cut the essay by a quarter without losing any evidence, then compare the two versions.'],
            language: ['Formality is a register, not a vocabulary test. Focus on contractions and direct address rather than long words.'],
          },
          misconceptions: [
            { misconception: 'Longer is stronger.', looksLike: 'Padding sentences added to reach a length target.', correction: 'Count the pieces of evidence in the long version and the short one. When the number is the same, the extra words argued nothing.' },
          ],
          homeExtension: ['Read your final paragraph aloud to someone and ask them to tell you the claim. If they cannot, revise it once more.'],
        },
      ],
    },
  ],
}

export default course
