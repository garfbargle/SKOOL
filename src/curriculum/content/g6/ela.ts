import type { SubjectCourse } from '../../types'

/**
 * Grade 6 English Language Arts.
 *
 * Sixth grade is where reading stops being about whether you understood the
 * story and starts being about whether you can prove what you understood. The
 * whole year turns on one habit: point at the line. Every claim a learner makes
 * about a text — about theme, about a character, about an author's motives —
 * has to be attached to words on the page, and every argument they write has to
 * survive someone asking "how do you know?"
 *
 * The scripts assume an eleven- or twelve-year-old with real opinions, a low
 * tolerance for being talked down to, and a strong instinct for spotting when
 * an adult is bluffing. Use that instinct rather than fighting it.
 */
const course: SubjectCourse = {
  gradeId: 'g6',
  subjectId: 'ela',
  title: 'Grade 6 English Language Arts',
  overview:
    'This year the question changes from "what happened in the story?" to "what does the text actually say, and how do you know?" Learners quote precisely, infer carefully, and learn to tell the difference between the two. They trace how a plot is built out of episodes, how a theme is carried by particular details rather than announced, and how an author quietly builds a point of view. A full unit is given to argument — taking one apart, judging whether its claims are really supported, and then building one of their own that would survive the same treatment. Expect resistance at first: "because it just is" has worked for years and it stops working now. That friction is the course.',
  yearGoals: [
    'Cite specific textual evidence for every claim, and know the difference between what a text states and what it implies.',
    'Determine theme and central idea from the details that carry them, and summarise a text without smuggling in your own opinion.',
    'Explain how an author develops a point of view, and how a single sentence, scene or chapter serves the whole text.',
    'Trace an argument, separate claims that are supported by reasons and evidence from claims that are not, and say why.',
    'Write arguments, informative texts and narratives that are organised on purpose rather than by accident.',
    'Work out unfamiliar words from context, roots and affixes, and hear the difference between words that mean nearly the same thing.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'g6-ela-u1',
      gradeId: 'g6',
      subjectId: 'ela',
      sequence: 1,
      title: 'Evidence: What the Text Says and What It Implies',
      bigIdea:
        'An idea about a text is only worth something if you can put your finger on the words that produced it — and inference is not guessing, it is evidence plus reasoning.',
      description:
        'The foundation unit. Learners separate what a text states outright from what it lets you conclude, and they build the habit of quoting the exact words rather than gesturing at the general area. The most important move here is small and unglamorous: choosing the strongest line rather than the first line that mentions the right topic. Everything in the rest of the year is downstream of this.',
      weeks: 5,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RL.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
        { code: 'CCSS.ELA-LITERACY.RI.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
        { code: 'CCSS.ELA-LITERACY.W.6.9', framework: 'CCSS-ELA', text: 'Draw evidence from literary or informational texts to support analysis, reflection, and research.' },
        { code: 'CCSS.ELA-LITERACY.W.6.4', framework: 'CCSS-ELA', text: 'Produce clear and coherent writing in which the development, organization, and style are appropriate to task, purpose, and audience.' },
      ],
      lessonTitles: [
        'Stated or Implied? Sorting What a Text Gives You',
        'Quoting Well: Choosing the Line That Proves It',
        'Inference: Evidence Plus Reasoning, Not Guessing',
        'Annotating: Leaving a Trail Through a Text',
        'The Evidence Paragraph: Claim, Quote, Explain',
      ],
      performanceTask:
        'The Disputed Reading: two readers disagree about a short story — one says the main character is brave, the other says she is reckless. The learner writes a one-page adjudication that quotes at least three lines, explains what each one shows, and names the single strongest piece of evidence for the losing side before explaining why it is not enough.',
      lessons: [
        {
          id: 'g6-ela-u1-l1',
          unitId: 'g6-ela-u1',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Stated or Implied? Sorting What a Text Gives You',
          essentialQuestion: 'How do I tell the difference between what a text tells me and what it lets me work out?',
          summary:
            'Learners sort statements about a short passage into three piles: stated outright, fairly implied, and imported from their own head. The third pile is the point of the lesson — most reading errors at this age are unnoticed imports.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
          ],
          objectives: [
            'I can point to the exact words that state something outright.',
            'I can tell when an idea is implied by the text rather than stated.',
            'I can notice when I have added something the text never gave me.',
          ],
          vocabulary: [
            { term: 'explicit', definition: 'Stated outright in the words on the page, with nothing to work out.', example: 'The text says she was fourteen, so her age is explicit.' },
            { term: 'implicit', definition: 'Not stated, but strongly suggested by what is stated.', example: 'Nobody says she is nervous, but she checks the door four times.' },
            { term: 'assume', definition: 'To treat something as true without evidence for it.', example: 'I assumed the narrator was a boy; the text never says.' },
          ],
          materials: ['A short story or article of about one page', 'Three sticky notes or three coloured pencils', 'The printed worksheet'],
          prep: [
            'Choose a passage with at least one detail readers reliably get wrong. A character whose gender, age or motive is never actually stated is ideal.',
            'Write out six statements about the passage in advance — two explicit, two fairly implied, two imported. Do not label them.',
          ],
          script: [],
          worksheet: { id: 'g6-ela-u1-l1-ws', title: 'Stated, Implied, Imported', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: [
              'Sorts statements into stated, implied and imported with reasons.',
              'Locates the exact line behind every "stated" judgement.',
              'Identifies at least one thing they themselves had assumed.',
            ],
            exitTicket:
              'Give one statement about the passage and ask: stated, implied, or did you bring that with you? Ask them to prove it either way.',
          },
          differentiation: {
            support: ['Cut the passage to a single paragraph and use only three statements. The sorting move matters more than the volume.'],
            extension: ['Ask the learner to write two statements of their own — one implied, one imported — and see whether you can tell which is which.'],
            language: ['Practise the frame "The text says ___, so I think ___." Keep the two halves physically separated on the page.'],
          },
          misconceptions: [
            {
              misconception: 'If it feels obvious, the text must have said it.',
              looksLike: 'The learner insists a character is the narrator\'s brother when the text only says they live in the same house.',
              correction: 'Ask them to find and read the sentence aloud. The search itself does the teaching — there is no sentence.',
            },
          ],
          homeExtension: ['Watch two minutes of any programme with the sound off and list what is shown versus what you are guessing.'],
        },

        /* ------------------------------------------------------- AUTHORED */
        {
          id: 'g6-ela-u1-l2',
          unitId: 'g6-ela-u1',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 2,
          status: 'authored',
          title: 'Quoting Well: Choosing the Line That Proves It',
          essentialQuestion: 'Out of everything in this text, which words actually prove my point?',
          summary:
            'Most learners can find a quotation about the right topic. Far fewer can find the quotation that does the work. This lesson trains the choice: given a claim, generate several candidate quotations, then rank them and defend the ranking. It also introduces the discipline of explaining a quotation instead of dropping it and walking away.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
            { code: 'CCSS.ELA-LITERACY.W.6.9.A', framework: 'CCSS-ELA', text: 'Apply grade 6 Reading standards to literature, including comparing and contrasting texts in different forms or genres.' },
            { code: 'CCSS.ELA-LITERACY.W.6.4', framework: 'CCSS-ELA', text: 'Produce clear and coherent writing in which the development, organization, and style are appropriate to task, purpose, and audience.' },
          ],
          objectives: [
            'I can find more than one possible quotation for a claim before I choose.',
            'I can say why one quotation is stronger evidence than another.',
            'I can write a sentence after a quotation that explains what it shows.',
          ],
          vocabulary: [
            { term: 'evidence', definition: 'The exact words from a text that make a claim believable.', example: 'My evidence is the line where she counts the minutes.' },
            { term: 'claim', definition: 'A statement about a text that somebody could disagree with.', example: 'Marisol wants company but will not ask for it.' },
            { term: 'quotation', definition: 'Words copied exactly from a text and put inside quotation marks.' },
            { term: 'relevant', definition: 'Actually about the thing you are trying to prove, not just nearby in the text.', example: 'The weather is in the passage, but it is not relevant to her loneliness.' },
            { term: 'analysis', definition: 'The sentence where you explain what your evidence shows and why it counts.' },
          ],
          materials: [
            'The printed worksheet, which carries the full passage',
            'A highlighter and a pencil',
            'Three small strips of scrap paper for the ranking activity',
            'A copy of the passage the adult can also mark, so the two of you can compare choices',
          ],
          prep: [
            'Read the passage yourself and mark the three lines you would use for the claim "Marisol wants company but will not ask for it." You will need your own answer, and you should be prepared for the learner to pick a better one.',
            'Cut three paper strips. During the ranking beat the learner writes one candidate quotation on each so they can be physically shuffled into an order.',
            'Decide in advance that you will not accept "it says it in the middle bit". Point at the line or it does not count. Say this out loud once, at the start.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'My Terrible Quotation',
              minutes: 8,
              say: [
                'I am going to make a claim about this passage and then prove it, and I want you to decide whether I actually proved it.',
                'My claim: Marisol wants company but will not ask for it.',
                'My evidence: "Marisol had been sitting in the last row of the bus for three weeks."',
                'There. Proved. Next question.',
                'No? What is wrong with it? It is a real line from the text, I copied it exactly, it is about Marisol.',
                'Right — it is about the right person and it is even about the right situation, and it still does not prove my claim. Sitting at the back for three weeks could mean she loves being alone. That line works just as well for the opposite claim.',
                'So here is today\'s job. Not "find a quote". Find the quote that only fits YOUR claim.',
              ],
              do: [
                'Read the passage aloud once, straight through, before making the claim. Do not comment as you read.',
                'Deliver the terrible quotation with total confidence. Confidence is what makes the learner check it.',
                'Write the claim at the top of a scrap sheet and leave it visible for the whole lesson.',
              ],
              studentDoes: ['Listens to the passage, then objects to the evidence and tries to say why it fails.'],
              checks: [
                {
                  ask: 'Could someone use my line to argue the opposite — that she likes being on her own?',
                  lookFor: 'Yes, because sitting alone at the back fits both stories equally well.',
                  ifStuck: 'Say the opposite claim out loud yourself, using the same quotation, and ask which of the two of you is right.',
                },
              ],
              tip: 'The failure mode you are demonstrating is the single most common one in Year 6 writing: a quotation that is topically related and evidentially useless. Naming it in the first five minutes saves you six weeks.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'The Two Questions I Ask Every Quotation',
              minutes: 12,
              say: [
                'I only ask a quotation two things before I use it.',
                'Question one: does this line fit my claim BETTER than it fits the opposite claim? If it fits both, bin it.',
                'Question two: can I say what it shows without repeating it? If all I can write afterwards is "this shows she sat at the back", the quotation is doing no work.',
                'Watch me run both questions. Candidate: "She did not speak for eleven minutes. Marisol counted."',
                'Question one. Does it fit "wants company"? Marisol is measuring the silence. You do not count the minutes of something you are not paying attention to. Does it fit "likes being alone"? Not really — someone who wanted to be left alone would not be tracking the seconds. So it passes.',
                'Question two. What does it show? It shows she is intensely aware of the person next to her while pretending not to be. That is a real sentence, and I did not just repeat the quotation.',
                'That last sentence has a name. It is the analysis. Quotation without analysis is just copying.',
              ],
              do: [
                'Write the two questions on a card and prop it up. It stays on the table for the rest of the unit.',
                'Model the whole run-through out loud, including the part where you consider the opposite claim seriously. Do not shortcut it.',
                'Under the quotation, write your analysis sentence in a different colour so the two are visibly different jobs.',
              ],
              studentDoes: ['Copies the two questions and watches one full worked example.'],
              checks: [
                {
                  ask: 'Give me a sentence after that quotation that just repeats it. Now give me one that explains it.',
                  lookFor: 'The learner can produce both and can hear the difference between them.',
                  ifStuck: 'Give them the frame "This matters because ___". The word "because" makes repetition almost impossible.',
                },
                {
                  ask: 'Why do I bother testing my quotation against the opposite claim?',
                  lookFor: 'Because evidence that fits both claims does not prove either one.',
                },
              ],
              tip: 'Question two is the one adults skip. If you only teach one of them properly, teach the analysis sentence — it is the difference between a paragraph that argues and a paragraph that decorates.',
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Three Candidates, Ranked',
              minutes: 12,
              say: [
                'Your turn. Same claim: Marisol wants company but will not ask for it.',
                'Go through the passage and find me three candidate quotations. Not the best one — three possibilities. Write each one on a strip.',
                'Now put them in order, best evidence at the top. Move them around on the table until you are happy.',
                'Tell me why the top one beat the second one. Not why it is good — why it is BETTER.',
                'Here is the interesting bit. Which one is at the bottom, and can you argue for it anyway? Sometimes the weak evidence is weak because you have not explained it yet.',
              ],
              do: [
                'Insist on three strips before any ranking begins. The generating and the choosing are different skills and doing them at once collapses both.',
                'Physically shuffle the strips yourself if the learner is reluctant to change their mind — moving paper is easier than admitting error.',
                'Keep your own three choices face down. Reveal them only after the learner has committed to an order.',
              ],
              studentDoes: ['Locates three candidate quotations, ranks them, and justifies the ranking out loud.'],
              checks: [
                {
                  ask: 'Run question one on your bottom strip. Does it fit the opposite claim too?',
                  lookFor: 'A clear yes or no with the opposite claim genuinely tested, not dismissed.',
                  ifStuck: 'Read the strip aloud yourself and argue the opposite claim with it. Let them hear it work.',
                },
                {
                  ask: 'The line "Marisol had already moved her bag off the seat" — where does that go in your ranking, and why?',
                  lookFor: 'High, because it shows her preparing for Priya before being asked. It is an action, not a feeling, and it happened without being requested.',
                },
              ],
              tip: 'If their ranking differs from yours and they can defend it, they win. Say so out loud. A learner who discovers that evidence beats authority in this house will argue with texts for the rest of their life.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 18,
              say: [
                'The page now. The passage is printed at the top so you never have to work from memory.',
                'Section one gives you a claim and four possible quotations. Rank them and cross out the one that is useless. There is definitely one that is useless.',
                'Section two flips it: I give you a quotation and you write the claim it would best support. That is harder than it sounds.',
                'Section three is the paragraph. Claim, quotation, explanation. Three sentences minimum, and the third one is not allowed to repeat the second.',
                'One rule for the whole page: every time you quote, write the exact words. Not the gist. The words.',
              ],
              do: [
                'Read all three sets of directions aloud before they start. Do not assume the page has been read.',
                'Sit where you can see the page but not close enough to hover. The moment you start pointing, the diagnostic is gone.',
                'When they finish, ask them to read their paragraph aloud. Weak analysis is much easier to hear than to see.',
              ],
              studentDoes: ['Completes the ranking, the reverse task and one full evidence paragraph independently.'],
              checks: [
                {
                  ask: 'Read me your third sentence without reading the second one. Does it still make sense on its own?',
                  lookFor: 'An explanation that stands up alone, not a paraphrase of the quotation.',
                },
                {
                  ask: 'Which quotation did you cross out, and what was wrong with it?',
                  lookFor: 'The weather line, rejected because it is in the passage but has nothing to do with the claim.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Point at the Line',
              minutes: 5,
              say: [
                'One last thing and then we stop.',
                'From now on, whenever you tell me something about a text, I am going to say four words: point at the line.',
                'Not because I do not believe you. Because if you cannot find it, one of two things is true — either it is not there, or it is there and you have just not found it yet. Both of those are worth knowing.',
                'Tell me one thing about Marisol. Any one thing. Now point at the line.',
              ],
              do: ['Stick the two-questions card somewhere permanent. It gets used every week for the rest of the year.'],
              studentDoes: ['Makes a claim about the passage and immediately locates the supporting line.'],
              checks: [
                {
                  ask: 'Point at the line.',
                  lookFor: 'A finger on a specific sentence and the sentence read aloud, not a vague sweep of the page.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g6-ela-u1-l2-ws',
            title: 'Choosing the Line That Proves It',
            style: 'flat-vector',
            prepNotes:
              'Print single-sided if you can, so the passage stays visible while the learner writes. The passage must be on the same sheet as section one — a learner flipping back and forth will quote from memory, which is the exact habit this page exists to break. Number the lines of the passage lightly in the margin; it makes discussion enormously faster.',
            sections: [
              {
                id: 's0',
                title: 'The Passage',
                directions: 'Read this twice before you do anything else. The second read is the one that counts.',
                layout: 'full',
                items: [
                  'THE LAST ROW',
                  'Marisol had been sitting in the last row of the bus for three weeks. She told everyone it was because the back seat had the best view, which was true, and because nobody bothered her there, which was also true, and because it was the only seat left when she got on, which was the actual reason.',
                  'On Tuesday, Priya sat down next to her without asking. Marisol shifted towards the window and studied the fogged glass as though something important were happening on the other side of it. Priya opened a battered paperback and read. She did not speak for eleven minutes. Marisol counted.',
                  'On Wednesday Priya sat there again, and Marisol had already moved her bag off the seat before the bus pulled away. The rain came sideways against the windows for the whole journey and neither of them mentioned it.',
                  'On Thursday, Marisol looked at the cover of the book and said, "Is that any good?" Priya did not look up. She said, "Page ninety. Ask me then."',
                ],
              },
              {
                id: 's1',
                title: 'Rank the Evidence',
                directions:
                  'The claim is: Marisol wants company but will not ask for it. Number these four quotations from 1 (strongest evidence) to 4 (weakest). Then cross out the one that is not evidence for this claim at all, and write one sentence saying what is wrong with it.',
                layout: 'column',
                items: [
                  'A. "Marisol had been sitting in the last row of the bus for three weeks."',
                  'B. "She did not speak for eleven minutes. Marisol counted."',
                  'C. "Marisol had already moved her bag off the seat before the bus pulled away."',
                  'D. "The rain came sideways against the windows for the whole journey."',
                  'Which one is not evidence for this claim, and why not?',
                ],
                images: [
                  {
                    id: 'g6-ela-u1-img-scales',
                    slot: 'Section 1 — two-pan balance for weighing evidence',
                    purpose:
                      'Ranking evidence is an abstract act and learners treat it as a matter of taste. A balance makes it physical: two quotations go in, one side goes down, and the learner has to say what made it heavier. The pans are drawn empty so the quotations can be written into them.',
                    subject:
                      'a simple two-pan balance scale drawn in clean flat outline, with a central upright post, a horizontal beam, and two empty shallow pans hanging one from each end of the beam',
                    count: 2,
                    composition:
                      'the balance centred in the frame and shown straight on, the beam perfectly level, both pans identical in size and hanging at exactly the same height, each pan drawn large enough and empty enough to write a short sentence inside, generous white space around the whole object',
                    mustInclude: [
                      'exactly two pans, both completely empty',
                      'the beam level so neither side is already winning',
                      'pans large enough to write inside',
                    ],
                    mustAvoid: [
                      'any weights, objects, coins or symbols sitting in either pan',
                      'a tilted beam that pre-decides the answer',
                      'ornate decoration, laurel wreaths or courtroom imagery',
                      'shading inside the pans that would stop a pencil showing up',
                    ],
                    aspect: '4:3',
                    altText: 'A simple balance scale with two empty pans and a level beam',
                  },
                ],
                writingLines: 3,
              },
              {
                id: 's2',
                title: 'Work Backwards',
                directions:
                  'This time you get the quotation and you write the claim. For each line below, write one claim about Marisol or Priya that this line would be strong evidence for. Remember: a claim is something a reasonable person could disagree with.',
                layout: 'column',
                items: [
                  '1. "She told everyone it was because the back seat had the best view, which was true... and because it was the only seat left when she got on, which was the actual reason."',
                  '2. "Priya did not look up. She said, \'Page ninety. Ask me then.\'"',
                  '3. "Marisol shifted towards the window and studied the fogged glass as though something important were happening on the other side of it."',
                ],
                images: [
                  {
                    id: 'g6-ela-u1-img-tchart',
                    slot: 'Section 2 — blank two-column organiser',
                    purpose:
                      'Keeping the quotation and the claim in physically separate columns stops the two from blurring, which is the commonest failure at this stage — learners write a claim that is really just the quotation reworded. Two columns force a visible gap between the words and the idea.',
                    subject:
                      'a blank two-column table grid with a single header band across the top and five empty rows beneath it, drawn as a plain ruled rectangle',
                    count: 2,
                    composition:
                      'a tall rectangle divided by one vertical line into exactly two columns of equal width, a narrow empty header band across the top and five equal empty rows below it, ruled lines of even weight, every cell completely blank and tall enough for two lines of handwriting',
                    mustInclude: [
                      'exactly two columns of equal width',
                      'exactly five writing rows below the header band',
                      'every cell completely empty',
                    ],
                    mustAvoid: [
                      'any words, headings, numbers or icons in any cell',
                      'a third column',
                      'shaded or tinted rows',
                      'rows too shallow to write two lines in',
                    ],
                    aspect: '3:4',
                    altText: 'A blank two-column table with a header band and five empty rows',
                  },
                ],
                writingLines: 4,
              },
              {
                id: 's3',
                title: 'The Evidence Paragraph',
                directions:
                  'Write one paragraph proving this claim: Priya knows exactly what she is doing. Use the shape in the diagram. Sentence one is the claim. Sentence two is the quotation, copied exactly, in quotation marks. Sentence three explains what it shows — and it is not allowed to repeat sentence two.',
                layout: 'full',
                items: [
                  'Claim: Priya knows exactly what she is doing.',
                  'Sentence 1 — state the claim in your own words.',
                  'Sentence 2 — the quotation, copied exactly, in quotation marks.',
                  'Sentence 3 — what does it show? Start with "This matters because..." if you get stuck.',
                  'Extra: add a fourth sentence with a second quotation only if it says something new.',
                ],
                images: [
                  {
                    id: 'g6-ela-u1-img-cer-stack',
                    slot: 'Section 3 — three-part paragraph organiser',
                    purpose:
                      'The claim-evidence-explanation shape is easy to say and hard to hold in mind while writing. A stacked organiser with three visibly different bands makes the missing third band obvious at a glance, which is exactly the band learners drop.',
                    subject:
                      'three empty rectangular boxes stacked vertically with a short downward arrow between each pair, the top box shortest, the middle box medium height and the bottom box tallest',
                    count: 3,
                    composition:
                      'three boxes of the same width stacked in a single vertical column, clearly separated, joined by two short downward-pointing arrows, heights increasing from top to bottom, all three interiors completely blank and ruled with faint horizontal writing lines',
                    mustInclude: [
                      'exactly three boxes and exactly two connecting arrows',
                      'all three boxes empty apart from faint writing lines',
                      'visibly increasing box height from top to bottom',
                    ],
                    mustAvoid: [
                      'any labels, headings, numbers or icons on or beside the boxes',
                      'a fourth box',
                      'arrows pointing upward or in both directions',
                      'heavy fill colour that would hide pencil writing',
                    ],
                    aspect: '3:4',
                    altText: 'Three empty stacked boxes joined by downward arrows, increasing in height',
                  },
                ],
                writingLines: 8,
              },
              {
                id: 's4',
                title: 'Mark the Text',
                directions:
                  'Go back to the passage. Draw a bracket in the margin beside every place where somebody does something instead of saying something. There are at least four. Underneath, write which one tells you the most, and why.',
                layout: 'full',
                items: [
                  'How many bracketed places did you find?',
                  'Which action tells you the most about what a character is feeling?',
                  'Why is an action sometimes better evidence than a character saying how they feel?',
                ],
                images: [
                  {
                    id: 'g6-ela-u1-img-margin-marks',
                    slot: 'Section 4 — annotated page model',
                    purpose:
                      'Learners are told to annotate and given no picture of what annotation looks like. This shows the physical convention — brackets in a wide margin beside specific lines — without supplying any content, so the learner copies the habit rather than the answer.',
                    subject:
                      'a plain rectangular sheet of paper shown flat and straight on, its text represented only by evenly spaced horizontal grey placeholder lines, with a wide empty margin down the right-hand side carrying four hand-drawn square brackets',
                    count: 4,
                    composition:
                      'the sheet fills the frame, roughly two thirds of the width taken up by the grey placeholder lines and the right third left as a clearly wider empty margin, exactly four square brackets drawn in the margin at irregular vertical intervals, each bracket spanning two or three placeholder lines, nothing written inside the brackets',
                    mustInclude: [
                      'exactly four brackets in the right-hand margin',
                      'body text represented only as featureless grey horizontal lines with no readable characters',
                      'a margin visibly wider than a normal page margin',
                    ],
                    mustAvoid: [
                      'any readable letters, words or numbers anywhere on the sheet',
                      'handwriting or notes inside the margin',
                      'highlighter colour blocks or circled words',
                      'a desk, hands, pen or background scene',
                    ],
                    aspect: '3:4',
                    altText: 'A page of placeholder text lines with four brackets drawn in a wide right margin',
                  },
                ],
                writingLines: 4,
              },
            ],
            answerKey: [
              'Section 1 ranking: C is strongest — she prepares the seat before being asked, and the action is unprompted. B is next, because counting the silence shows sustained attention. A is weak: it fits the opposite claim just as well. D is not evidence at all; the rain is in the passage but has nothing to do with whether Marisol wants company. Accept a swap of B and C if the reasoning is sound.',
              'Section 2: accept any arguable claim that the quotation genuinely supports. Strong answers: (1) Marisol would rather be thought of as private than as unwanted. (2) Priya is offering friendship on her own terms rather than refusing it. (3) Marisol uses looking away as a way of managing how nervous she feels. Reject claims that are just the quotation reworded.',
              'Section 3: full marks need three distinct jobs — a claim in the learner\'s own words, an exactly copied quotation inside quotation marks, and an explanation sentence that adds something the quotation did not say. The commonest failure is a third sentence that paraphrases the second.',
              'Section 4: the four clearest action moments are Marisol shifting to the window, Marisol counting the eleven minutes, Marisol moving her bag in advance, and Priya not looking up when she answers. Accept "neither of them mentioned it" as a fifth. Actions are often better evidence because a character can lie about a feeling but rarely bothers to fake a small habit.',
            ],
          },
          assessment: {
            successCriteria: [
              'Generates more than one candidate quotation before committing to one.',
              'Explains why the chosen quotation is stronger than a rejected one.',
              'Copies quotations exactly and puts them inside quotation marks.',
              'Writes an explanation sentence that adds meaning rather than repeating the quotation.',
            ],
            exitTicket:
              'Give a fresh claim about the passage — "Priya is kinder than she looks" — and ask for one quotation plus one explanation sentence, on a sticky note, in ninety seconds. You are checking whether the third sentence does any work.',
            rubric: [
              { level: 'emerging', descriptor: 'Finds a quotation on the right topic but cannot say why it beats another, and the explanation restates the quotation.' },
              { level: 'developing', descriptor: 'Chooses relevant evidence and copies it accurately; the explanation is present but thin, often a single clause.' },
              { level: 'secure', descriptor: 'Weighs candidates against the opposite claim, selects the discriminating line, and writes an explanation that would still make sense to someone who had not read the passage.' },
            ],
          },
          differentiation: {
            support: [
              'Pre-select four candidate quotations and let the learner rank rather than search. Choosing is the target skill; searching is a separate load you can lift.',
              'Give the sentence starter "This matters because it shows..." and let them use it every single time until it is a habit rather than a crutch.',
              'Shorten the passage to the Tuesday and Wednesday paragraphs only.',
            ],
            extension: [
              'Argue the opposite claim — that Marisol genuinely prefers being alone — and find the best three quotations for it. Then say which case is stronger and why.',
              'Rewrite one sentence of the passage so that the strongest evidence disappears, and explain what you had to remove.',
              'Find a quotation that supports two different claims at once and explain how the same words do two jobs.',
            ],
            language: [
              'Pre-teach "claim", "evidence" and "shows" with a non-text example first: a wet umbrella by the door as evidence that it rained.',
              'Allow the analysis sentence to be spoken and recorded before it is written. The thinking and the transcription are different loads.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Any quotation about the right character or topic counts as evidence.',
              looksLike: 'The learner quotes the line about the back seat having the best view to prove Marisol is lonely, and cannot see the problem when the opposite claim is argued from the same line.',
              correction: 'Argue the opposite claim out loud using their quotation. Once they have heard their own evidence work against them, the test becomes automatic.',
            },
            {
              misconception: 'The quotation speaks for itself, so there is nothing to add afterwards.',
              looksLike: 'A paragraph that ends on the closing quotation mark, or an explanation that says "this shows that she moved her bag".',
              correction: 'Cover the quotation with a finger and ask them to read only the explanation aloud. If it makes no sense alone, it is not analysis yet.',
            },
            {
              misconception: 'Longer quotations are stronger because they contain more.',
              looksLike: 'A whole paragraph is copied out, with the useful eight words buried in the middle.',
              correction: 'Ask them to cut it to the shortest version that still proves the point. Trimming is where the learner discovers which words were doing the work.',
            },
          ],
          homeExtension: [
            'When someone at home makes a claim about a film or a match, ask them cheerfully to point at the line. It works on adults and it makes the habit funny rather than schoolish.',
            'Read a news headline and find the sentence in the article that actually supports it. Sometimes there is not one, and that discovery is worth the whole exercise.',
            'Pick any book being read at home and find the single best sentence for the claim "the main character has changed since chapter one".',
          ],
          teacherNotes:
            'The ranking activity is the heart of this lesson and it is tempting to cut it for time. Do not. Learners who go straight from "find a quotation" to "write a paragraph" produce a paragraph built on the first line they saw. The physical strips matter too — shuffling paper lets a learner change their mind without it feeling like being corrected. If the whole lesson overruns, cut section four of the worksheet instead.',
        },

        {
          id: 'g6-ela-u1-l3',
          unitId: 'g6-ela-u1',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Inference: Evidence Plus Reasoning, Not Guessing',
          essentialQuestion: 'What separates a good inference from a wild guess?',
          summary:
            'Inference gets taught as "reading between the lines", which sounds like intuition and licenses anything. This lesson defines it as an equation instead: text detail plus general knowledge equals inference, and both halves have to be stated.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
            { code: 'CCSS.ELA-LITERACY.RI.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
          ],
          objectives: [
            'I can state the text detail and the outside knowledge behind an inference.',
            'I can rank two inferences and say which is better supported.',
            'I can tell when a text does not give me enough to conclude anything.',
          ],
          vocabulary: [
            { term: 'inference', definition: 'A conclusion you reach by combining a detail in the text with something you already know.' },
            { term: 'plausible', definition: 'Reasonable given the evidence, even if it is not certain.' },
            { term: 'unsupported', definition: 'An idea with nothing in the text behind it.' },
          ],
          materials: ['A short passage with a withheld detail', 'The printed worksheet', 'Sticky notes'],
          prep: [
            'Choose a passage where something important is never stated — a character\'s job, a relationship, a time period.',
            'Prepare three inferences of your own: one strong, one weak, one indefensible. You will ask the learner to sort them.',
          ],
          script: [],
          worksheet: { id: 'g6-ela-u1-l3-ws', title: 'Detail Plus Knowledge', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['States both halves of the inference equation.', 'Distinguishes a supported inference from a guess.'],
            exitTicket: 'Offer an inference about the passage and ask the learner to supply the missing half — the detail or the knowledge — that would justify it.',
          },
          differentiation: {
            support: ['Use pictures before prose. A photo of an unmade bed and an open suitcase generates the same reasoning with no reading load.'],
            extension: ['Find a place where two readers could infer opposite things from the same detail, and explain what extra evidence would settle it.'],
          },
          misconceptions: [
            {
              misconception: 'Inference means whatever the text made me think of.',
              looksLike: 'The learner infers that a character is an orphan because the story made them think of a film they saw.',
              correction: 'Demand both halves of the equation out loud. A missing text half exposes the guess immediately.',
            },
          ],
          homeExtension: ['Look at a photograph of strangers and make three inferences, saying which detail produced each one.'],
        },
        {
          id: 'g6-ela-u1-l4',
          unitId: 'g6-ela-u1',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Annotating: Leaving a Trail Through a Text',
          essentialQuestion: 'How do I mark a text so that my thinking is still there tomorrow?',
          summary:
            'A small, practical system: brackets for evidence, question marks for confusion, arrows for connections, and a circle for a word you cannot define. The goal is a text a learner can return to without rereading it.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
            { code: 'CCSS.ELA-LITERACY.RL.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
          ],
          objectives: [
            'I can use four annotation marks consistently.',
            'I can write a margin note that is a thought, not a summary.',
            'I can find my own evidence again a day later without rereading.',
          ],
          vocabulary: [
            { term: 'annotate', definition: 'To mark a text with symbols and short notes that record your thinking.' },
            { term: 'margin', definition: 'The blank strip down the side of a page, where the notes go.' },
          ],
          materials: ['A photocopied or printed text that may be written on', 'A pencil', 'Two colours of highlighter'],
          prep: [
            'Print the text with a margin of at least four centimetres. Annotation fails with no room to do it in.',
            'Annotate the first paragraph yourself so you have a model to show, complete with one honest question mark.',
          ],
          script: [],
          worksheet: { id: 'g6-ela-u1-l4-ws', title: 'Four Marks', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Uses all four marks in one text.', 'Writes at least three margin notes that are thoughts rather than summaries.'],
            exitTicket: 'Hand back yesterday\'s annotated text and ask them to find one piece of evidence in under thirty seconds using only their marks.',
          },
          differentiation: {
            support: ['Start with two marks, not four. Add the others once the first two are automatic.'],
            extension: ['Annotate for a specific question rather than in general, and compare how different the markings become.'],
            language: ['Allow margin notes in the learner\'s home language. The note is for thinking, not for marking.'],
          },
          misconceptions: [
            {
              misconception: 'Annotating means highlighting the important bits.',
              looksLike: 'A page that is eighty percent yellow and tells the learner nothing on a second visit.',
              correction: 'Set a hard budget: five highlights per page. Scarcity forces judgement.',
            },
          ],
          homeExtension: ['Annotate a recipe or a set of instructions with question marks wherever the wording is unclear.'],
        },
        {
          id: 'g6-ela-u1-l5',
          unitId: 'g6-ela-u1',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'The Evidence Paragraph: Claim, Quote, Explain',
          essentialQuestion: 'How do I build a paragraph that would survive somebody arguing with it?',
          summary:
            'Consolidation. Learners write, swap, attack and revise a single paragraph. The attacking stage is what makes the revising honest, and it is the stage most often skipped.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.6.9', framework: 'CCSS-ELA', text: 'Draw evidence from literary or informational texts to support analysis, reflection, and research.' },
            { code: 'CCSS.ELA-LITERACY.W.6.5', framework: 'CCSS-ELA', text: 'With some guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising, editing, rewriting, or trying a new approach.' },
          ],
          objectives: [
            'I can write a paragraph with a claim, an accurate quotation and a real explanation.',
            'I can find the weakest sentence in somebody else\'s paragraph.',
            'I can revise after criticism without starting again.',
          ],
          vocabulary: [
            { term: 'revise', definition: 'To change the ideas and structure of a piece of writing, not just fix the spelling.' },
            { term: 'transition', definition: 'A word or phrase that shows how one sentence relates to the last one.', example: 'However, in addition, for example.' },
          ],
          materials: ['A shared short text', 'Two copies of the paragraph frame', 'A red pen for the attacking stage'],
          prep: [
            'Write a deliberately mediocre paragraph of your own for the learner to attack first. It is much easier to criticise an adult\'s work than a peer\'s.',
            'Decide on the one revision rule: the learner may not delete and restart, only change what is there.',
          ],
          script: [],
          worksheet: { id: 'g6-ela-u1-l5-ws', title: 'Build It, Break It, Fix It', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Produces a three-part paragraph.', 'Identifies a specific weakness in another paragraph.', 'Makes a revision that addresses the criticism.'],
            exitTicket: 'Ask: what was the weakest sentence in your own paragraph before you revised, and what did you do about it?',
          },
          differentiation: {
            support: ['Provide the claim so all the effort goes into evidence and explanation.'],
            extension: ['Add a counter-sentence: acknowledge the best evidence against your claim and explain why it does not overturn it.'],
          },
          misconceptions: [
            {
              misconception: 'Revising means rewriting it neatly.',
              looksLike: 'A second draft identical to the first with better handwriting.',
              correction: 'Require a visible change to at least one sentence and ask them to say what the change fixed.',
            },
          ],
          homeExtension: ['Write a three-sentence paragraph proving a claim about a family member, with a real quotation of something they actually said.'],
        },
      ],
    },

    /* ============================================================ UNIT 2 */
    {
      id: 'g6-ela-u2',
      gradeId: 'g6',
      subjectId: 'ela',
      sequence: 2,
      title: 'Theme, Plot and the People Who Change',
      bigIdea:
        'A theme is not announced, it is built — out of episodes that follow one another for a reason and characters who are different at the end than they were at the start.',
      description:
        'Learners stop summarising and start analysing structure. They map a plot as a series of episodes and ask what each one is for, track the exact moment a character changes their mind, and learn that a theme is a claim about life that the whole text argues for, not a one-word topic. The unit ends with learners writing a narrative scene that has to turn on a single decision.',
      weeks: 5,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RL.6.2', framework: 'CCSS-ELA', text: 'Determine a theme or central idea of a text and how it is conveyed through particular details; provide a summary of the text distinct from personal opinions or judgments.' },
        { code: 'CCSS.ELA-LITERACY.RL.6.3', framework: 'CCSS-ELA', text: 'Describe how a particular story\'s or drama\'s plot unfolds in a series of episodes as well as how the characters respond or change as the plot moves toward a resolution.' },
        { code: 'CCSS.ELA-LITERACY.RL.6.5', framework: 'CCSS-ELA', text: 'Analyze how a particular sentence, chapter, scene, or stanza fits into the overall structure of a text and contributes to the development of the theme, setting, or plot.' },
        { code: 'CCSS.ELA-LITERACY.W.6.3', framework: 'CCSS-ELA', text: 'Write narratives to develop real or imagined experiences or events using effective technique, relevant descriptive details, and well-structured event sequences.' },
      ],
      lessonTitles: [
        'Theme Is Not the Topic',
        'Episodes: How a Plot Is Built in Pieces',
        'The Moment a Character Changes',
        'Why This Scene, Here? Structure and Purpose',
        'Writing a Scene That Turns',
      ],
      performanceTask:
        'The Theme Trial: the learner argues for a theme statement of a shared novel or story, defends it against a rival theme statement the adult supplies, and must cite one detail from the beginning, one from the middle and one from the end. A theme that only works in the last chapter loses.',
      lessons: [
        {
          id: 'g6-ela-u2-l1',
          unitId: 'g6-ela-u2',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Theme Is Not the Topic',
          essentialQuestion: 'What is the difference between what a story is about and what it says?',
          summary:
            'Learners convert one-word topics into full theme statements: not "friendship" but "friendship costs something, and the story keeps showing the price". The bar is that a theme statement must be arguable.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.6.2', framework: 'CCSS-ELA', text: 'Determine a theme or central idea of a text and how it is conveyed through particular details; provide a summary of the text distinct from personal opinions or judgments.' },
          ],
          objectives: [
            'I can turn a topic word into a theme sentence.',
            'I can find three details that carry the same theme.',
            'I can tell a theme apart from a moral or a lesson.',
          ],
          vocabulary: [
            { term: 'theme', definition: 'What a text says about life, stated as a full sentence someone could disagree with.' },
            { term: 'topic', definition: 'What a text is about, usually one or two words.', example: 'Courage is a topic; "courage usually looks like fear that kept going" is a theme.' },
            { term: 'central idea', definition: 'The equivalent of theme in a nonfiction text — the main point the whole piece supports.' },
          ],
          materials: ['A short story both of you know well', 'Index cards', 'The printed worksheet'],
          prep: [
            'Write six topic words on cards in advance: courage, family, jealousy, home, fairness, loss.',
            'Draft two theme statements for your shared story, one obviously too broad, so the learner has something to sharpen.',
          ],
          script: [],
          worksheet: { id: 'g6-ela-u2-l1-ws', title: 'From Topic to Theme', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Writes a theme as a full arguable sentence.', 'Supports it with three details from different parts of the text.'],
            exitTicket: 'Give a topic word from the story and ask for a theme sentence plus one detail that carries it.',
          },
          differentiation: {
            support: ['Use a picture book or a film. A shorter text makes the whole arc holdable in one sitting.'],
            extension: ['Argue that a text carries two competing themes, and say which one the ending favours.'],
            language: ['Provide the frame "This story says that ___, and it shows that when ___."'],
          },
          misconceptions: [
            {
              misconception: 'The theme is the moral — what you are supposed to learn.',
              looksLike: '"Always tell the truth" offered for a story where telling the truth ruins everything.',
              correction: 'Ask whether the story actually rewards that behaviour. Themes describe; morals instruct.',
            },
          ],
          homeExtension: ['After any film, ask what it was about in one word, then push for a full sentence.'],
        },
        {
          id: 'g6-ela-u2-l2',
          unitId: 'g6-ela-u2',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'Episodes: How a Plot Is Built in Pieces',
          essentialQuestion: 'Why does this happen after that?',
          summary:
            'Plot mapped as episodes rather than as a triangle. For each episode the learner answers one question: what does this make possible that was not possible before?',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.6.3', framework: 'CCSS-ELA', text: 'Describe how a particular story\'s or drama\'s plot unfolds in a series of episodes as well as how the characters respond or change as the plot moves toward a resolution.' },
          ],
          objectives: [
            'I can break a story into episodes and name each one.',
            'I can explain what each episode makes possible.',
            'I can spot an episode that could be removed without breaking the story.',
          ],
          vocabulary: [
            { term: 'episode', definition: 'A chunk of a story with its own small beginning and end, usually one place and one stretch of time.' },
            { term: 'resolution', definition: 'The part where the main problem is settled, well or badly.' },
            { term: 'consequence', definition: 'What follows from something because of it, not just after it.' },
          ],
          materials: ['A shared short story', 'Six index cards or sticky notes', 'A long strip of paper for the timeline'],
          prep: ['Reread the story and decide your own episode boundaries. Expect to disagree with the learner, and let them argue.'],
          script: [],
          worksheet: { id: 'g6-ela-u2-l2-ws', title: 'One Card Per Episode', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Divides a story into episodes with defensible boundaries.', 'States a consequence for each episode.'],
            exitTicket: 'Name any episode and ask what the story would lose if it were cut.',
          },
          differentiation: {
            support: ['Give the episode boundaries and let the learner do only the consequence work.'],
            extension: ['Reorder two episodes and explain precisely what breaks.'],
          },
          misconceptions: [
            {
              misconception: 'Plot is a list of everything that happened.',
              looksLike: 'A retelling with fourteen equally weighted events and no sense of cause.',
              correction: 'Force a hard limit of six cards. Scarcity makes the learner decide what actually mattered.',
            },
          ],
          homeExtension: ['Break the plot of a favourite film into six episodes on six scraps of paper and shuffle them for someone else to reorder.'],
        },
        {
          id: 'g6-ela-u2-l3',
          unitId: 'g6-ela-u2',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'The Moment a Character Changes',
          essentialQuestion: 'Where exactly does a character stop being who they were?',
          summary:
            'Character change located to a single sentence. Learners describe the before-self and the after-self, then hunt for the hinge — and discover that the hinge is often quiet and easy to read past.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.6.3', framework: 'CCSS-ELA', text: 'Describe how a particular story\'s or drama\'s plot unfolds in a series of episodes as well as how the characters respond or change as the plot moves toward a resolution.' },
            { code: 'CCSS.ELA-LITERACY.RL.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
          ],
          objectives: [
            'I can describe a character before and after, using evidence for both.',
            'I can name the specific moment the change happens.',
            'I can tell a change of mind apart from a change of mood.',
          ],
          vocabulary: [
            { term: 'motivation', definition: 'What a character wants, and why they want it.' },
            { term: 'turning point', definition: 'The moment after which the character cannot go back to how they were.' },
            { term: 'trait', definition: 'A lasting quality of a character, as opposed to a passing feeling.' },
          ],
          materials: ['A shared story or novel chapter', 'Two columns drawn on paper: before and after', 'Sticky flags'],
          prep: ['Find your own candidate hinge sentence and be ready to be talked out of it.'],
          script: [],
          worksheet: { id: 'g6-ela-u2-l3-ws', title: 'Before, Hinge, After', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Gives evidence for the before-self and the after-self.', 'Nominates a hinge sentence and defends it.'],
            exitTicket: 'Ask them to read the hinge sentence aloud and say what it is that the character now knows.',
          },
          differentiation: {
            support: ['Work with a character who changes obviously and physically — someone who runs away and comes back.'],
            extension: ['Find a character who does NOT change and argue why the text keeps them fixed.'],
          },
          misconceptions: [
            {
              misconception: 'A character changes when their mood changes.',
              looksLike: 'The learner picks the moment the character bursts into tears.',
              correction: 'Ask whether they would behave differently a week later. Mood passes; change persists.',
            },
          ],
          homeExtension: ['Describe yourself before and after something that happened this year, and name the hinge.'],
        },
        {
          id: 'g6-ela-u2-l4',
          unitId: 'g6-ela-u2',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Why This Scene, Here? Structure and Purpose',
          essentialQuestion: 'What is this chapter doing for the whole book?',
          summary:
            'Direct work on RL.6.5. Learners take one scene and argue for its job — building setting, raising stakes, planting information, delaying the answer — and test the claim by imagining the text without it.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.6.5', framework: 'CCSS-ELA', text: 'Analyze how a particular sentence, chapter, scene, or stanza fits into the overall structure of a text and contributes to the development of the theme, setting, or plot.' },
            { code: 'CCSS.ELA-LITERACY.RI.6.5', framework: 'CCSS-ELA', text: 'Analyze how a particular sentence, paragraph, chapter, or section fits into the overall structure of a text and contributes to the development of the ideas.' },
          ],
          objectives: [
            'I can name the job a scene does for the whole text.',
            'I can explain what would be lost if it were removed.',
            'I can find a sentence that is there mainly to set up something later.',
          ],
          vocabulary: [
            { term: 'structure', definition: 'The order and shape of a text — what comes where, and why.' },
            { term: 'foreshadow', definition: 'To plant something early that only pays off later.' },
            { term: 'pacing', definition: 'How fast a text moves, and where it deliberately slows down.' },
          ],
          materials: ['A shared novel or long article', 'Sticky flags in two colours', 'The printed worksheet'],
          prep: ['Pick one scene that looks skippable but is not, and one that genuinely could go. The contrast is the lesson.'],
          script: [],
          worksheet: { id: 'g6-ela-u2-l4-ws', title: 'What Is This Chapter For?', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Assigns a defensible job to a scene.', 'Explains a specific loss if it were removed.'],
            exitTicket: 'Point at any paragraph and ask what the text would lose without it. "Nothing" is an acceptable answer if defended.',
          },
          differentiation: {
            support: ['Offer four job labels to choose from rather than asking for one from nothing.'],
            extension: ['Compare the job of the first chapter with the job of the last, and describe how the text has changed shape.'],
          },
          misconceptions: [
            {
              misconception: 'Every scene is there to advance the plot.',
              looksLike: 'The learner invents a plot function for a chapter that exists to establish atmosphere.',
              correction: 'Give permission for other jobs: setting, character, delay, contrast. Name them explicitly.',
            },
          ],
          homeExtension: ['Watch a scene from a film and say what the story would lose without it.'],
        },
        {
          id: 'g6-ela-u2-l5',
          unitId: 'g6-ela-u2',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Writing a Scene That Turns',
          essentialQuestion: 'How do I write a scene where something actually changes?',
          summary:
            'Narrative writing with one constraint: by the end of the scene a character must want something different from what they wanted at the start, and the reader must be able to point at the line where it happened.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.6.3', framework: 'CCSS-ELA', text: 'Write narratives to develop real or imagined experiences or events using effective technique, relevant descriptive details, and well-structured event sequences.' },
            { code: 'CCSS.ELA-LITERACY.W.6.3.B', framework: 'CCSS-ELA', text: 'Use narrative techniques, such as dialogue, pacing, and description, to develop experiences, events, and/or characters.' },
          ],
          objectives: [
            'I can write a scene with a beginning want and a different ending want.',
            'I can use dialogue and action instead of stating feelings.',
            'I can mark the turning line in my own draft.',
          ],
          vocabulary: [
            { term: 'dialogue', definition: 'The words characters actually say, punctuated so the reader knows who is speaking.' },
            { term: 'pacing', definition: 'Slowing down for what matters and skipping what does not.' },
          ],
          materials: ['Lined paper or a laptop', 'The scene planner', 'A highlighter for marking the turn'],
          prep: [
            'Write the first two sentences of your own scene to read aloud. Modelling a rough opening is more useful than a polished one.',
            'Agree a hard length limit of one page. The constraint is what forces the turn.',
          ],
          script: [],
          worksheet: { id: 'g6-ela-u2-l5-ws', title: 'One Page, One Turn', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Produces a one-page scene with a clear change of want.', 'Shows feeling through action or dialogue at least twice.'],
            exitTicket: 'Ask the learner to highlight the turning line in their own draft and read the sentence before and after it.',
          },
          differentiation: {
            support: ['Supply the situation and the two wants so the learner only has to write the scene.'],
            extension: ['Write the same scene from the other character\'s point of view and see whether the turn lands in the same place.'],
            language: ['Draft the dialogue orally first and transcribe it afterwards.'],
          },
          misconceptions: [
            {
              misconception: 'A good scene needs a big dramatic event.',
              looksLike: 'An explosion, a car chase, and no change in anybody.',
              correction: 'Ban all external drama for one draft. A scene where someone decides something at a bus stop is harder and better.',
            },
          ],
          homeExtension: ['Write half a page about a real conversation this week in which somebody changed their mind.'],
        },
      ],
    },
    /* ============================================================ UNIT 3 */
    {
      id: 'g6-ela-u3',
      gradeId: 'g6',
      subjectId: 'ela',
      sequence: 3,
      title: 'Point of View: Who Is Telling You This?',
      bigIdea:
        'Every text is told by somebody, and that somebody has a position, a limit and a purpose — none of which they usually announce.',
      description:
        'Learners learn to ask who is speaking before asking what is being said. In fiction that means narrators with blind spots; in nonfiction it means authors with purposes. The unit deliberately puts the two side by side, because the skill is the same one and separating them into different terms hides that.',
      weeks: 4,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RL.6.6', framework: 'CCSS-ELA', text: 'Explain how an author develops the point of view of the narrator or speaker in a text.' },
        { code: 'CCSS.ELA-LITERACY.RI.6.6', framework: 'CCSS-ELA', text: 'Determine an author\'s point of view or purpose in a text and explain how it is conveyed in the text.' },
        { code: 'CCSS.ELA-LITERACY.RI.6.5', framework: 'CCSS-ELA', text: 'Analyze how a particular sentence, paragraph, chapter, or section fits into the overall structure of a text and contributes to the development of the ideas.' },
        { code: 'CCSS.ELA-LITERACY.W.6.2', framework: 'CCSS-ELA', text: 'Write informative/explanatory texts to examine a topic and convey ideas, concepts, and information through the selection, organization, and analysis of relevant content.' },
      ],
      lessonTitles: [
        'First Person, Third Person, and What Each One Cannot See',
        'The Narrator Who Is Wrong',
        'An Author\'s Purpose and How You Can Tell',
        'How Nonfiction Is Built: Text Structures',
        'Writing to Inform: Structure Before Sentences',
      ],
      performanceTask:
        'Two Accounts, One Event: given two short pieces about the same incident — one a first-person narrative, one a news report — the learner writes an explanation of what each teller can and cannot see, quoting the words that gave each position away, and then writes a third account from a witness neither piece includes.',
      lessons: [
        {
          id: 'g6-ela-u3-l1',
          unitId: 'g6-ela-u3',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'First Person, Third Person, and What Each One Cannot See',
          essentialQuestion: 'What does the way a story is told stop me from knowing?',
          summary:
            'Narrative perspective taught through its limits rather than its labels. Learners rewrite one paragraph in three perspectives and list, for each, the information that has now become impossible to give.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.6.6', framework: 'CCSS-ELA', text: 'Explain how an author develops the point of view of the narrator or speaker in a text.' },
          ],
          objectives: [
            'I can identify first-person, third-person limited and third-person omniscient narration.',
            'I can say what each perspective prevents the reader from knowing.',
            'I can rewrite a paragraph in a different perspective.',
          ],
          vocabulary: [
            { term: 'narrator', definition: 'The voice telling the story, who is not the same person as the author.' },
            { term: 'first person', definition: 'Narration using I and we, limited to what that character knows.' },
            { term: 'omniscient', definition: 'A narrator who can see inside every character\'s head.' },
          ],
          materials: ['A short paragraph to rewrite', 'Three coloured pens', 'The printed worksheet'],
          prep: ['Choose a paragraph containing at least one thing only one character could know. That detail is what breaks when the perspective shifts.'],
          script: [],
          worksheet: { id: 'g6-ela-u3-l1-ws', title: 'Three Tellings', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Names the perspective and cites the pronouns and knowledge that prove it.', 'Lists what each perspective cannot reveal.'],
            exitTicket: 'Read three sentences aloud and ask for the perspective of each, plus one thing that narrator cannot tell you.',
          },
          differentiation: {
            support: ['Sort sentences into two piles — I and we versus he, she and they — before adding the limited and omniscient distinction.'],
            extension: ['Find a text that shifts perspective between chapters and explain what the author gains by shifting.'],
          },
          misconceptions: [
            {
              misconception: 'The narrator is the author.',
              looksLike: 'The learner writes "the author feels lonely on the bus".',
              correction: 'Have them write a first-person paragraph as a character utterly unlike themselves, then ask whether it is now autobiography.',
            },
          ],
          homeExtension: ['Retell one thing that happened today in third person, as if you were watching yourself.'],
        },
        {
          id: 'g6-ela-u3-l2',
          unitId: 'g6-ela-u3',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'The Narrator Who Is Wrong',
          essentialQuestion: 'How can I tell when the person telling the story is mistaken?',
          summary:
            'Unreliable narration. Learners hunt for the gap between what a narrator says and what the text shows, which is one of the most enjoyable close-reading skills available at this age.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.6.6', framework: 'CCSS-ELA', text: 'Explain how an author develops the point of view of the narrator or speaker in a text.' },
            { code: 'CCSS.ELA-LITERACY.RL.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
          ],
          objectives: [
            'I can find a place where a narrator\'s account and the evidence disagree.',
            'I can explain how an author signals that a narrator is unreliable.',
            'I can describe what really happened, using evidence.',
          ],
          vocabulary: [
            { term: 'unreliable narrator', definition: 'A narrator whose account the reader has reason to doubt.' },
            { term: 'bias', definition: 'A leaning that makes someone report one side more favourably.' },
            { term: 'contradiction', definition: 'Two statements that cannot both be true.' },
          ],
          materials: ['A short first-person passage with a self-serving narrator', 'Two highlighters', 'The printed worksheet'],
          prep: ['Write or find a passage where the narrator insists they are not upset while every action says otherwise.'],
          script: [],
          worksheet: { id: 'g6-ela-u3-l2-ws', title: 'What He Says, What He Does', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Locates a says-versus-shows contradiction.', 'Reconstructs the likely truth with evidence.'],
            exitTicket: 'Ask for one sentence the narrator would object to you writing about them, and the evidence for it.',
          },
          differentiation: {
            support: ['Use a two-column chart headed "what the narrator claims" and "what actually happens".'],
            extension: ['Rewrite one paragraph so the narrator becomes reliable, and list every change you had to make.'],
          },
          misconceptions: [
            {
              misconception: 'An unreliable narrator is lying on purpose.',
              looksLike: 'The learner calls every biased narrator a liar.',
              correction: 'Distinguish deceiving from being mistaken. Most unreliable narrators believe themselves.',
            },
          ],
          homeExtension: ['Listen to two people describe the same argument and note where the accounts diverge.'],
        },
        {
          id: 'g6-ela-u3-l3',
          unitId: 'g6-ela-u3',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'An Author\'s Purpose and How You Can Tell',
          essentialQuestion: 'What does this writer want me to do, think or feel — and where did they give it away?',
          summary:
            'Purpose located in evidence rather than guessed. Learners look at word choice, what is included, what is left out, and who the piece is addressed to.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.6.6', framework: 'CCSS-ELA', text: 'Determine an author\'s point of view or purpose in a text and explain how it is conveyed in the text.' },
            { code: 'CCSS.ELA-LITERACY.RI.6.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text, including figurative, connotative, and technical meanings.' },
          ],
          objectives: [
            'I can state an author\'s purpose as a sentence about what they want from me.',
            'I can quote three word choices that reveal that purpose.',
            'I can name something the author left out and say why.',
          ],
          vocabulary: [
            { term: 'purpose', definition: 'What the writer is trying to achieve by writing this.' },
            { term: 'audience', definition: 'The people a text is written for, which shapes almost everything about it.' },
            { term: 'omission', definition: 'Something left out, which can be as revealing as what is included.' },
          ],
          materials: ['Two texts on the same subject with different purposes — an advertisement and an encyclopedia entry work well', 'Highlighters'],
          prep: ['Find two genuinely contrasting texts about the same thing. A product page and a product review are easy and effective.'],
          script: [],
          worksheet: { id: 'g6-ela-u3-l3-ws', title: 'Who Wants What From Me?', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['States purpose as a sentence, not a label.', 'Cites three specific word choices as evidence.'],
            exitTicket: 'Give one sentence from either text and ask what it reveals about what the writer wants.',
          },
          differentiation: {
            support: ['Start with texts whose purposes are extreme and obvious before moving to subtle ones.'],
            extension: ['Rewrite one paragraph of the advertisement so its purpose becomes informing rather than selling.'],
            language: ['Collect the vocabulary of persuasion in a running list across the unit.'],
          },
          misconceptions: [
            {
              misconception: 'Purpose means "to inform, to persuade, or to entertain" and nothing more.',
              looksLike: 'A one-word answer with no evidence attached.',
              correction: 'Refuse the three labels for one lesson. Require a full sentence naming what the writer wants the reader to do.',
            },
          ],
          homeExtension: ['Read the back of a cereal packet and list every phrase chosen to make you buy it.'],
        },
        {
          id: 'g6-ela-u3-l4',
          unitId: 'g6-ela-u3',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'How Nonfiction Is Built: Text Structures',
          essentialQuestion: 'Why did the writer put the information in this order?',
          summary:
            'Cause and effect, compare and contrast, problem and solution, chronology, description. Learners identify the structure, then test it by trying to reorder the paragraphs.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.6.5', framework: 'CCSS-ELA', text: 'Analyze how a particular sentence, paragraph, chapter, or section fits into the overall structure of a text and contributes to the development of the ideas.' },
            { code: 'CCSS.ELA-LITERACY.RI.6.3', framework: 'CCSS-ELA', text: 'Analyze in detail how a key individual, event, or idea is introduced, illustrated, and elaborated in a text.' },
          ],
          objectives: [
            'I can name the structure of a nonfiction text and cite the signal words.',
            'I can explain why one paragraph has to come before another.',
            'I can say what a different structure would have made easier or harder.',
          ],
          vocabulary: [
            { term: 'signal words', definition: 'Words that reveal the structure, such as because, however, first, unlike.' },
            { term: 'chronological', definition: 'Ordered by time.' },
            { term: 'cause and effect', definition: 'A structure organised around what made what happen.' },
          ],
          materials: ['Three short nonfiction extracts with different structures', 'Scissors, to cut one into paragraphs'],
          prep: ['Cut one article into separate paragraphs before the lesson. Reassembling it is the whole activity.'],
          script: [],
          worksheet: { id: 'g6-ela-u3-l4-ws', title: 'Put It Back Together', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Identifies structure with signal-word evidence.', 'Reassembles a cut-up article and justifies the order.'],
            exitTicket: 'Give one paragraph and ask what must have come immediately before it, and how they know.',
          },
          differentiation: {
            support: ['Use four paragraphs rather than eight, and leave the first one in place.'],
            extension: ['Rewrite a chronological passage as a cause-and-effect one and note what has to be added.'],
          },
          misconceptions: [
            {
              misconception: 'Nonfiction is just information in whatever order it came.',
              looksLike: 'The learner reassembles the article in an order that reads as random and does not notice.',
              correction: 'Read their version aloud without pausing. The joins that do not work are audible.',
            },
          ],
          homeExtension: ['Find the structure of a set of assembly instructions and explain why step three cannot come first.'],
        },
        {
          id: 'g6-ela-u3-l5',
          unitId: 'g6-ela-u3',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Writing to Inform: Structure Before Sentences',
          essentialQuestion: 'How do I organise what I know before I start writing it?',
          summary:
            'Informative writing planned as a structure first. Learners choose a structure deliberately, build headings, and only then draft — which is the reverse of what most learners do and produces markedly better pieces.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.6.2', framework: 'CCSS-ELA', text: 'Write informative/explanatory texts to examine a topic and convey ideas, concepts, and information through the selection, organization, and analysis of relevant content.' },
            { code: 'CCSS.ELA-LITERACY.W.6.2.A', framework: 'CCSS-ELA', text: 'Introduce a topic; organize ideas, concepts, and information using strategies such as definition, classification, comparison/contrast, and cause/effect.' },
          ],
          objectives: [
            'I can choose a text structure on purpose and say why.',
            'I can plan an informative piece as headings before sentences.',
            'I can use transitions that match my chosen structure.',
          ],
          vocabulary: [
            { term: 'transition', definition: 'A word or phrase that shows the relationship between two ideas.' },
            { term: 'heading', definition: 'A short label that tells the reader what a section is about.' },
          ],
          materials: ['Notes or research on a chosen topic', 'Sticky notes for the planning stage', 'Lined paper or a laptop'],
          prep: [
            'Agree the topic before the lesson so no time is lost to choosing. A topic the learner already knows well is best; research is a separate skill.',
            'Have three structure templates ready to choose between.',
          ],
          script: [],
          worksheet: { id: 'g6-ela-u3-l5-ws', title: 'Headings First', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Produces a plan of headings before drafting.', 'Writes a piece whose paragraphs match its plan.', 'Uses transitions appropriate to the chosen structure.'],
            exitTicket: 'Ask which structure they chose and what a different choice would have cost them.',
          },
          differentiation: {
            support: ['Supply the headings and let the learner fill them. Planning and drafting are two loads; lift one.'],
            extension: ['Write the same information twice under two different structures and say which serves the reader better.'],
            language: ['Provide a transition bank grouped by structure rather than a single alphabetical list.'],
          },
          misconceptions: [
            {
              misconception: 'Planning is a form you fill in after you know what you want to say.',
              looksLike: 'A plan written after the draft, matching it exactly.',
              correction: 'Take the paper away for ten minutes. Planning on sticky notes that can be reordered makes the planning real.',
            },
          ],
          homeExtension: ['Explain to someone at home how something works, using three headings you decide in advance.'],
        },
      ],
    },

    /* ============================================================ UNIT 4 */
    {
      id: 'g6-ela-u4',
      gradeId: 'g6',
      subjectId: 'ela',
      sequence: 4,
      title: 'Argument: Taking One Apart and Building One',
      bigIdea:
        'An argument is a claim held up by reasons, and each reason is held up by evidence — and the whole structure is only as strong as the weakest joint.',
      description:
        'The unit the year is built towards. Learners take real arguments apart into claim, reasons and evidence; judge which claims are actually supported and which are simply asserted loudly; learn to recognise the standard moves that substitute for evidence; and then build an argument of their own that has to survive the same dismantling. Sixth graders are natural arguers and terrible at this, which is a very productive combination.',
      weeks: 6,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RI.6.8', framework: 'CCSS-ELA', text: 'Trace and evaluate the argument and specific claims in a text, distinguishing claims that are supported by reasons and evidence from claims that are not.' },
        { code: 'CCSS.ELA-LITERACY.W.6.1', framework: 'CCSS-ELA', text: 'Write arguments to support claims with clear reasons and relevant evidence.' },
        { code: 'CCSS.ELA-LITERACY.W.6.1.A', framework: 'CCSS-ELA', text: 'Introduce claim(s) and organize the reasons and evidence clearly.' },
        { code: 'CCSS.ELA-LITERACY.W.6.1.B', framework: 'CCSS-ELA', text: 'Support claim(s) with clear reasons and relevant evidence, using credible sources and demonstrating an understanding of the topic or text.' },
        { code: 'CCSS.ELA-LITERACY.SL.6.3', framework: 'CCSS-ELA', text: 'Delineate a speaker\'s argument and specific claims, distinguishing claims that are supported by reasons and evidence from claims that are not.' },
      ],
      lessonTitles: [
        'Claim, Reason, Evidence: Taking an Argument Apart',
        'Which Claims Are Actually Supported?',
        'The Moves People Make Instead of Evidence',
        'Building an Argument: Claim and Reasons',
        'Answering the Other Side',
      ],
      performanceTask:
        'The Two-Sided Brief: the learner picks a genuinely contested question affecting their own life, writes a one-page argument with three reasons and real evidence, then writes half a page giving the strongest version of the opposing case and explaining precisely why it does not overturn their claim. The opposing case is marked as hard as the argument.',
      lessons: [
        {
          id: 'g6-ela-u4-l1',
          unitId: 'g6-ela-u4',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Claim, Reason, Evidence: Taking an Argument Apart',
          essentialQuestion: 'What are the parts of an argument, and how do I find them?',
          summary:
            'Learners dismantle a short opinion piece into its skeleton: one claim, the reasons offered for it, and the evidence offered for each reason. Drawing the map is easy; noticing the reason with nothing under it is the point.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.6.8', framework: 'CCSS-ELA', text: 'Trace and evaluate the argument and specific claims in a text, distinguishing claims that are supported by reasons and evidence from claims that are not.' },
          ],
          objectives: [
            'I can find the main claim of an argument.',
            'I can list the reasons given for it.',
            'I can attach each piece of evidence to the reason it supports.',
          ],
          vocabulary: [
            { term: 'claim', definition: 'The main thing the writer wants you to accept.' },
            { term: 'reason', definition: 'A statement of why the claim should be believed.' },
            { term: 'evidence', definition: 'Facts, examples, data or quotations offered to back a reason.' },
          ],
          materials: ['A short opinion column or letter to a newspaper', 'Three colours of pen', 'The printed worksheet'],
          prep: [
            'Choose an argument with three reasons, one of which has no evidence at all. Real writing supplies these easily.',
            'Map it yourself first so you know where the hole is.',
          ],
          script: [],
          worksheet: { id: 'g6-ela-u4-l1-ws', title: 'The Skeleton of an Argument', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Identifies the claim in one sentence.', 'Lists the reasons separately from the evidence.'],
            exitTicket: 'Read one paragraph aloud and ask: was that a claim, a reason, or evidence?',
          },
          differentiation: {
            support: ['Give a one-paragraph argument with exactly two reasons before moving to a full column.'],
            extension: ['Find an argument where the claim is never stated outright and write it out for the author.'],
          },
          misconceptions: [
            {
              misconception: 'Anything a writer states strongly is evidence.',
              looksLike: 'The learner labels "this is obviously unfair" as evidence.',
              correction: 'Ask where it came from. Evidence has a source outside the writer\'s own head.',
            },
          ],
          homeExtension: ['Map the argument in any advertisement into claim, reasons and evidence, and note which box stays empty.'],
        },

        /* ------------------------------------------------------- AUTHORED */
        {
          id: 'g6-ela-u4-l2',
          unitId: 'g6-ela-u4',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 2,
          status: 'authored',
          title: 'Which Claims Are Actually Supported?',
          essentialQuestion: 'How do I tell a claim that has been proved from one that has only been asserted confidently?',
          summary:
            'The core of RI.6.8. Learners take an argument that has already been mapped and judge each reason separately: is there evidence here, is it relevant, and is there enough of it? The lesson deliberately uses an argument the learner agrees with, because it is easy to audit an argument you dislike and genuinely hard to audit one you want to win.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.6.8', framework: 'CCSS-ELA', text: 'Trace and evaluate the argument and specific claims in a text, distinguishing claims that are supported by reasons and evidence from claims that are not.' },
            { code: 'CCSS.ELA-LITERACY.RI.6.1', framework: 'CCSS-ELA', text: 'Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.' },
            { code: 'CCSS.ELA-LITERACY.SL.6.3', framework: 'CCSS-ELA', text: 'Delineate a speaker\'s argument and specific claims, distinguishing claims that are supported by reasons and evidence from claims that are not.' },
          ],
          objectives: [
            'I can judge each reason in an argument separately instead of judging the argument as a whole.',
            'I can say whether a piece of evidence is relevant to the reason it sits under.',
            'I can find the weakest joint in an argument I agree with.',
          ],
          vocabulary: [
            { term: 'supported', definition: 'Backed by evidence that is both relevant and sufficient.', example: 'The claim about bus times is supported — there is a timetable.' },
            { term: 'asserted', definition: 'Stated as though it were obvious, with nothing behind it.', example: '"Everyone knows this" is an assertion, not evidence.' },
            { term: 'relevant', definition: 'Actually about the reason it is offered for.' },
            { term: 'sufficient', definition: 'Enough. One example is rarely enough to prove a general claim.' },
            { term: 'anecdote', definition: 'A single story used as if it proved a general point.', example: '"My cousin did it and was fine."' },
          ],
          materials: [
            'The printed worksheet, which carries both short arguments',
            'A pencil and a coloured pen',
            'A sticky note for the exit ticket',
            'Optionally, a real opinion column from a newspaper for the extension',
          ],
          prep: [
            'Read both arguments on the worksheet before the lesson and decide your own verdict on each reason. You will disagree with the learner somewhere, which is the best thing that can happen.',
            'Pick a side yourself on the hook question — later school start times — and be honest about it. Auditing your own side out loud is the modelling that makes this lesson work.',
            'Resist the urge to prepare a list of logical fallacy names. That is the next lesson and it will swamp this one.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Two Arguments, Same Side',
              minutes: 8,
              say: [
                'I am going to read you two short arguments. They are both arguing that school should start an hour later. You probably agree with the conclusion. Keep that separate from what I am asking.',
                'First one: "School should start later. Everyone knows teenagers are exhausted. Every single person I have asked agrees. It is honestly ridiculous that nobody has changed it yet."',
                'Second one: "School should start later. Sleep research from several countries finds that adolescents naturally fall asleep about two hours later than younger children. A district in Minnesota moved its start time from 7:25 to 8:30 and attendance rose while reported car accidents among teen drivers fell."',
                'Now. Which of those two would you rather have on your side in an argument with the head teacher?',
                'Right. And here is the uncomfortable bit. The first one is more fun to read. It sounds more certain. It has "everyone knows" and "honestly ridiculous" and it feels like winning.',
                'And it contains no evidence whatsoever. Not a single fact that came from outside the writer\'s own head.',
                'That is what today is. Not "do I agree" — I already know you agree. It is: has this person actually shown me anything?',
              ],
              do: [
                'Read both arguments aloud with equal energy. If you read the first one sarcastically you have given the game away.',
                'Write the two words CONFIDENT and SUPPORTED at the top of a scrap sheet, well apart from each other.',
                'Do not let the learner move on to whether they agree about school start times. Redirect once, firmly, and then it usually sticks.',
              ],
              studentDoes: ['Compares the two arguments and states which is stronger and why.'],
              checks: [
                {
                  ask: 'Point at one thing in the first argument that came from outside the writer\'s head.',
                  lookFor: 'A failed search, and the recognition that "everyone I asked" is still just the writer.',
                  ifStuck: 'Read the first argument again one sentence at a time and ask "where did that come from?" after each.',
                },
                {
                  ask: 'Is the second argument definitely right, then?',
                  lookFor: 'Not necessarily — better supported is not the same as correct. Accept any answer that keeps those two apart.',
                },
              ],
              tip: 'Choosing a topic the learner already agrees with is the whole design. Auditing an argument you want to win is the skill; auditing one you dislike is just disagreeing with extra steps.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Three Questions Per Reason',
              minutes: 12,
              say: [
                'Here is the tool. It is three questions, and you ask them of every reason separately. Not of the argument. Of each reason.',
                'Question one: is there any evidence here at all, or just a confident sentence?',
                'Question two: if there is evidence, is it actually about this reason? Evidence can be perfectly true and still be talking about something else.',
                'Question three: is there enough of it? One person\'s experience is a story. It might be a true story and it still does not prove what happens generally.',
                'Watch me run it. Reason: "later start times would improve attendance." Evidence given: "a district in Minnesota moved to 8:30 and attendance rose."',
                'Question one — yes, there is evidence, and it came from somewhere other than the writer.',
                'Question two — is it about attendance? Yes. Directly. That one passes cleanly.',
                'Question three — enough? Honestly, one district is thin. I would want two or three. So I mark that reason as partly supported and I write why.',
                'Notice I did not say "wrong". Partly supported is a real verdict and it is the most common one. Most arguments are not fraud, they are just underbuilt.',
              ],
              do: [
                'Write the three questions in a column on a card and keep it visible. Number them; you will refer to them by number all lesson.',
                'Work the example on paper where the learner can see the three verdicts written separately: yes, yes, thin.',
                'Introduce the three verdict marks you will use on the worksheet: a tick for supported, a half-tick for partly, a cross for asserted.',
              ],
              studentDoes: ['Copies the three questions and follows one full worked audit.'],
              checks: [
                {
                  ask: 'Give me a piece of evidence that is completely true and completely irrelevant to that reason.',
                  lookFor: 'Something like "teenagers spend three hours a day on their phones" — true, unrelated to whether attendance improves.',
                  ifStuck: 'Offer two candidates yourself and ask which is the irrelevant one.',
                },
                {
                  ask: 'Why is "partly supported" more useful than "wrong"?',
                  lookFor: 'Because it names what is missing, so it tells you what to go and find.',
                },
              ],
              tip: 'Question three is where adults get sloppy too. A single striking example feels like proof to everybody. Say out loud that you find this one hard as well — it buys you enormous credibility for the rest of the unit.',
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Auditing the Argument You Like',
              minutes: 12,
              say: [
                'Now we go back to the first argument. The bad one. The one on your side.',
                'Take each sentence and give it a verdict. Tick, half-tick, or cross. Out loud, and tell me your reason before you mark it.',
                '"Everyone knows teenagers are exhausted." Verdict?',
                'Cross. Right — "everyone knows" is the phrase people use precisely when they do not have the evidence to hand.',
                'Now the harder question. This argument is on your side. Does marking it with crosses mean you have changed your mind about school start times?',
                'No. And that is the most important sentence in this lesson. A bad argument for a true claim is still a bad argument. You can keep the belief and bin the argument.',
                'Last thing before the page. Take the first argument and fix ONE sentence. Do not rewrite it. Change one sentence so it would earn a tick. What would you have to go and find out?',
              ],
              do: [
                'Make the learner say the verdict reason before the mark. If the mark comes first the reason gets invented to fit it.',
                'Write the crosses on the argument yourself, in pen, so the page visibly becomes a marked-up thing rather than a sacred one.',
                'When they propose a fix, ask where they would actually get that information. Naming a source is part of the answer.',
              ],
              studentDoes: ['Assigns and defends a verdict for each sentence of a weak argument, then proposes a specific evidential fix.'],
              checks: [
                {
                  ask: 'You crossed out three sentences in an argument you agree with. What exactly do you still believe, and what have you stopped believing?',
                  lookFor: 'A clean separation: the conclusion may still be believed, but not on the strength of this text.',
                  ifStuck: 'Ask about something low-stakes instead: "if someone gives a rubbish reason that chips are tasty, do chips stop being tasty?"',
                },
                {
                  ask: 'What one piece of evidence would most improve this argument, and where would you find it?',
                  lookFor: 'A specific, findable thing — a sleep study, an attendance record, a survey with a stated number of respondents.',
                },
              ],
              tip: 'If the learner refuses to mark their own side down, do not force it. Switch to an argument for something they mildly dislike, run the audit there, then come back. The transfer usually happens on its own.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 18,
              say: [
                'The page has two arguments on it and neither of them is a straw man. Both are the sort of thing a real person writes.',
                'Section one: map the first argument into the diagram. Claim at the top, reasons underneath, evidence under each reason. If a reason has no evidence, leave the box empty. An empty box is the finding, not a mistake.',
                'Section two: give every reason a verdict using the three marks, and write one sentence explaining each verdict.',
                'Section three: the support gauge. For the argument as a whole, mark where it sits and defend the position underneath.',
                'Section four is the one that will annoy you. You have to write the single best piece of evidence for the side you disagree with. Not a weak one. The best one you can think of.',
                'That last section is not me being difficult. If you cannot state the other side\'s best evidence, you do not understand the argument yet — you have only heard your half of it.',
              ],
              do: [
                'Read all four sets of directions aloud before they begin.',
                'Leave the empty evidence boxes empty. The temptation to fill them in for tidiness is strong and it destroys the diagnostic.',
                'On section four, allow thinking time in silence. It genuinely takes a while the first time.',
              ],
              studentDoes: ['Maps, audits and rates two arguments independently, and articulates the strongest opposing evidence.'],
              checks: [
                {
                  ask: 'Which reason has the emptiest evidence box, and does that sink the whole argument?',
                  lookFor: 'The correct empty box identified, plus a nuanced answer — one weak reason weakens but does not necessarily destroy the case.',
                },
                {
                  ask: 'Read me your section four sentence. Would somebody on that side be happy with how you put it?',
                  lookFor: 'A genuinely strong opposing point stated fairly, not a caricature set up to be knocked down.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Confident Is Not Supported',
              minutes: 5,
              say: [
                'Two words from the top of the page. Confident. Supported.',
                'They are not the same and almost everything designed to persuade you relies on you mixing them up. Adverts, arguments at school, people online, and me, sometimes.',
                'So the question you now own is not "do I believe this?" It is "has this person shown me anything?"',
                'Tell me the three questions without looking at the card.',
              ],
              do: ['Keep the three-questions card. It comes out again in every remaining lesson of this unit.'],
              studentDoes: ['Recalls the three audit questions and states the difference between confident and supported.'],
              checks: [
                {
                  ask: 'Give me a sentence that sounds completely convincing and contains no evidence.',
                  lookFor: 'Any fluent assertion — "obviously", "everyone knows", "it goes without saying" — recognised as empty.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g6-ela-u4-l2-ws',
            title: 'Supported, Partly Supported, Asserted',
            style: 'flat-vector',
            prepNotes:
              'Both arguments are printed in full so nothing depends on memory. The argument map in section one needs to print large enough to write inside — check that the boxes have not shrunk. Give the learner a coloured pen for the verdict marks so the marking is visibly separate from the mapping.',
            sections: [
              {
                id: 's1',
                title: 'Argument A — Map It',
                directions:
                  'Read Argument A, then fill in the map. The claim goes in the top box, each reason in a middle box, and the evidence for that reason in the box beneath it. If a reason has no evidence, leave the box empty and draw a line through it.',
                layout: 'full',
                items: [
                  'ARGUMENT A: "Our school should let pupils use the field at lunchtime all year, not just in summer. First, pupils who move at lunchtime concentrate better afterwards; two teachers told me their afternoon lessons are calmer on days when the field is open. Second, the corridors are dangerously crowded at lunch — last term the school recorded fourteen collisions or falls indoors between 12:30 and 1:15, and only one outdoors. Third, it is just obviously miserable to be stuck inside. Everyone hates it."',
                ],
                images: [
                  {
                    id: 'g6-ela-u4-img-argument-map',
                    slot: 'Section 1 — blank argument map',
                    purpose:
                      'Learners judge arguments as a single lump and so a weak reason gets carried along by a strong one. Separating the structure into boxes forces each reason to be looked at on its own, and makes an empty evidence box impossible to overlook.',
                    subject:
                      'a blank hierarchical argument map made of empty rectangles: one wide rectangle at the top, three equal rectangles in a row beneath it, and one rectangle directly below each of those three, connected by plain straight lines',
                    count: 7,
                    composition:
                      'the single wide box centred across the top, three equal-width boxes evenly spaced in a row below it with a short straight connecting line from the top box down to each, one box of the same width directly beneath each of the three with a short connecting line, all seven boxes completely empty and ruled with faint horizontal writing lines, generous white space between the tiers',
                    mustInclude: [
                      'exactly seven empty boxes arranged in three tiers of one, three and three',
                      'plain straight connecting lines between the tiers',
                      'faint horizontal writing lines inside every box',
                    ],
                    mustAvoid: [
                      'any words, headings, numbers or icons in or beside the boxes',
                      'arrowheads on the connecting lines',
                      'a fourth tier or extra branches',
                      'coloured fill that would obscure pencil writing',
                    ],
                    aspect: '4:3',
                    altText: 'A blank argument map with one box at the top, three below it and one under each of those',
                  },
                ],
                writingLines: 2,
              },
              {
                id: 's2',
                title: 'Give Every Reason a Verdict',
                directions:
                  'For each of the three reasons in Argument A, ask the three questions and give a verdict: a tick for supported, a half-tick for partly supported, a cross for asserted. Then write one sentence saying why. Use the evidence cards below to sort what kind of evidence each reason offers.',
                layout: 'column',
                items: [
                  'Question 1 — is there any evidence at all, or just a confident sentence?',
                  'Question 2 — is the evidence actually about this reason?',
                  'Question 3 — is there enough of it?',
                  'Reason 1 verdict: ______   Why?',
                  'Reason 2 verdict: ______   Why?',
                  'Reason 3 verdict: ______   Why?',
                ],
                images: [
                  {
                    id: 'g6-ela-u4-img-evidence-cards',
                    slot: 'Section 2 — blank evidence cards',
                    purpose:
                      'Writing each piece of evidence onto a separate card stops the learner treating a paragraph as one undifferentiated block of support. Physically separated cards can be judged, and rejected, one at a time.',
                    subject:
                      'six identical blank rectangular cards with slightly rounded corners, arranged in a neat grid of two rows of three',
                    count: 6,
                    composition:
                      'exactly six cards laid out in two even rows of three, all the same size and orientation, clear white gaps between every card, each card outlined with a thin clean border and completely empty apart from three faint horizontal writing lines inside',
                    mustInclude: [
                      'exactly six cards in two rows of three',
                      'all cards identical in size',
                      'three faint writing lines inside each card',
                    ],
                    mustAvoid: [
                      'any text, numbers, symbols or icons on the cards',
                      'cards overlapping or fanned out like a hand of playing cards',
                      'drop shadows heavy enough to read as a background',
                      'a table, desk or hand holding the cards',
                    ],
                    aspect: '4:3',
                    altText: 'Six blank writing cards arranged in two rows of three',
                  },
                  {
                    id: 'g6-ela-u4-img-sorting-trays',
                    slot: 'Section 2 — two empty sorting trays',
                    purpose:
                      'The supported-versus-asserted distinction is binary and learners find it easier to make with a destination in mind. Two empty trays give the sort a physical shape without prejudging which pile is bigger.',
                    subject:
                      'two identical empty shallow rectangular trays drawn in simple outline, side by side and viewed from slightly above',
                    count: 2,
                    composition:
                      'the two trays side by side with a clear gap between them, both exactly the same size and shape, both completely empty, drawn in plain outline with a wide flat interior big enough to write several short lines inside',
                    mustInclude: [
                      'exactly two trays, both empty',
                      'both trays identical in size so neither looks more important',
                      'flat interiors clear enough to write in',
                    ],
                    mustAvoid: [
                      'any labels, symbols, ticks or crosses on the trays',
                      'objects, cards or paper already inside either tray',
                      'one tray drawn larger or fuller than the other',
                      'a desk, shelf or background scene',
                    ],
                    aspect: '16:9',
                    altText: 'Two identical empty sorting trays side by side',
                  },
                ],
                writingLines: 6,
              },
              {
                id: 's3',
                title: 'Argument B — Rate the Whole Thing',
                directions:
                  'Read Argument B. Mark the gauge to show how well supported you think it is overall, then write two sentences: one saying what is strongest about it, and one saying what you would need to see before you would be convinced.',
                layout: 'full',
                items: [
                  'ARGUMENT B: "Homework should be abolished in Year 7. Research from a large review of studies found no measurable link between homework and achievement for pupils under thirteen. Teachers spend hours marking work that changes nothing. And when I asked my class, twenty-two out of twenty-six said homework made them dislike school more than anything else."',
                  'What is the strongest thing about this argument?',
                  'What would you need to see before you were convinced?',
                ],
                images: [
                  {
                    id: 'g6-ela-u4-img-support-gauge',
                    slot: 'Section 3 — blank five-point support gauge',
                    purpose:
                      'Forcing a position on a continuum rather than a yes or no stops learners defaulting to "it was fine". Having to place a mark and then defend that exact spot produces far sharper reasoning than a verdict word does.',
                    subject:
                      'a long blank horizontal gauge: a single straight line with five evenly spaced vertical tick marks along it and a small empty box beneath each tick',
                    count: 5,
                    composition:
                      'the line running nearly the full width of the frame, exactly five tick marks placed at perfectly even intervals including one at each end, a small empty square beneath each tick mark, clear blank space above the line for a handwritten mark, no scale numbering',
                    mustInclude: [
                      'exactly five evenly spaced tick marks',
                      'one small empty box under each tick',
                      'clear blank space above the line',
                    ],
                    mustAvoid: [
                      'any numbers, words or scale labels',
                      'arrowheads on either end of the line',
                      'a needle, pointer, dial or marked position',
                      'colour gradients along the line',
                    ],
                    aspect: '4:1',
                    altText: 'A blank horizontal gauge with five evenly spaced tick marks and an empty box under each',
                  },
                ],
                writingLines: 5,
              },
              {
                id: 's4',
                title: 'The Other Side\'s Best Shot',
                directions:
                  'Pick whichever of the two arguments you agree with more. Now write the single strongest piece of evidence someone on the OTHER side could use. Not a weak one. The best one you can think of. Then say in one sentence why it does not change your mind — or admit that it does.',
                layout: 'full',
                items: [
                  'Which argument do you agree with?',
                  'The other side\'s strongest evidence:',
                  'Why it does not change your mind — or why it does:',
                ],
                writingLines: 8,
              },
            ],
            answerKey: [
              'Section 1 map: Claim — the field should be open all year. Reason 1 — movement improves afternoon concentration; evidence: two teachers\' impressions. Reason 2 — indoor corridors are dangerously crowded; evidence: fourteen recorded indoor incidents against one outdoors. Reason 3 — being stuck inside is miserable; evidence box empty.',
              'Section 2 verdicts: Reason 1 partly supported — there is evidence, it is relevant, but two teachers\' impressions are not enough and are not measurements. Reason 2 supported — the numbers are relevant, specific and come from records rather than from the writer. Reason 3 asserted — "obviously" and "everyone hates it" are the writer talking, not evidence. Accept a half-tick on reason 2 if the learner argues that one term of data is a small sample; that is a good objection.',
              'Section 3: the strongest element is the research review, because it is large and comes from outside the writer. The weakest is the class survey — twenty-six pupils in one class is small, self-selected and asks about liking rather than learning. Convincing evidence would be achievement data from more than one school, and a definition of what counts as homework.',
              'Section 4: mark the fairness of the opposing evidence, not the conclusion. A strong answer states the other side\'s point in a form its own supporters would accept. Full credit is available for changing your mind, and should be said out loud.',
            ],
          },
          assessment: {
            successCriteria: [
              'Audits each reason separately rather than judging the argument as a whole.',
              'Distinguishes evidence that is absent, irrelevant and insufficient, using the right word for each.',
              'Marks down an argument whose conclusion they agree with.',
              'States an opposing position in a form its supporters would recognise.',
            ],
            exitTicket:
              'On a sticky note: "Everyone knows the bus service is getting worse." Ask for two things — is that supported or asserted, and what one piece of evidence would settle it. Thirty seconds.',
            rubric: [
              { level: 'emerging', descriptor: 'Judges the argument as a whole and by whether they agree with the conclusion; "it had evidence" is offered without saying which reason it supported.' },
              { level: 'developing', descriptor: 'Separates reasons and spots the reason with nothing under it, but treats any evidence as sufficient once it is present.' },
              { level: 'secure', descriptor: 'Applies relevance and sufficiency independently, marks down an argument they support, and can state the opposing case fairly and strongly.' },
            ],
          },
          differentiation: {
            support: [
              'Do only Argument A, and only the first two of the three questions. Sufficiency is the hardest of the three and can wait a week.',
              'Pre-map the argument so the learner spends all their effort on the verdicts rather than on locating the parts.',
              'Use tick, half-tick and cross rather than written verdicts. The marking hand often knows before the writing hand does.',
            ],
            extension: [
              'Bring a real opinion column and run the full audit on it. Newspaper comment pieces reliably contain one beautifully unsupported paragraph.',
              'Rewrite Argument A so every reason earns a tick, and list the four things you had to go and find out.',
              'Find an argument where the evidence is genuinely strong but the reason does not actually lead to the claim, and explain the gap.',
            ],
            language: [
              'Build a wall list of assertion signals — obviously, everyone knows, it goes without saying, clearly, any sensible person. Learners spot these long before they can articulate why they matter.',
              'Allow verdicts to be given orally and written afterwards; the judging and the justifying are separate loads.',
            ],
          },
          misconceptions: [
            {
              misconception: 'An argument is good if I agree with its conclusion.',
              looksLike: 'Every reason on the learner\'s own side gets a tick and every reason on the other side gets a cross, regardless of what evidence is present.',
              correction: 'Deliberately audit an argument for a position they hold. Ask what they still believe afterwards. Separating the claim from the case for it is the whole lesson.',
            },
            {
              misconception: 'Any sentence containing a number is evidence.',
              looksLike: '"Twenty-two out of twenty-six said homework made them dislike school" accepted as proof that homework damages learning.',
              correction: 'Ask what the number is measuring. Liking and learning are different things, and a number about one proves nothing about the other.',
            },
            {
              misconception: 'One unsupported reason ruins the whole argument.',
              looksLike: 'The learner throws out Argument A entirely because of its third reason.',
              correction: 'Cover the weak reason with a hand and ask whether what remains still holds up. Arguments degrade rather than collapse, and saying how much they degrade is the skilled part.',
            },
          ],
          homeExtension: [
            'Watch or read one advertisement and find the claim, then hunt for the evidence. Note how often the evidence is a person looking pleased.',
            'Next time you want something at home, write your case with three reasons and real evidence before you ask. It works startlingly often and the effect is instructive.',
            'Take an opinion you hold strongly and write down the best evidence against it. Do not write the rebuttal. Just leave it there overnight.',
          ],
          teacherNotes:
            'The hardest and most valuable moment in this lesson is when the learner marks down an argument for a position they hold. Do not rush past it, and do not let it become a gotcha. Say plainly that you find this hard too, and mean it. If the lesson runs long, cut section three of the worksheet rather than section four — section four is where the unit\'s performance task begins.',
        },

        {
          id: 'g6-ela-u4-l3',
          unitId: 'g6-ela-u4',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'The Moves People Make Instead of Evidence',
          essentialQuestion: 'What do writers do when they have no evidence and still want to win?',
          summary:
            'A short, practical catalogue: loaded words, the single vivid story, everybody-thinks-this, attacking the person, and the false choice between two options. Named plainly rather than in Latin.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.6.8', framework: 'CCSS-ELA', text: 'Trace and evaluate the argument and specific claims in a text, distinguishing claims that are supported by reasons and evidence from claims that are not.' },
            { code: 'CCSS.ELA-LITERACY.RI.6.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text, including figurative, connotative, and technical meanings.' },
          ],
          objectives: [
            'I can name five common substitutes for evidence.',
            'I can find an example of each in real writing.',
            'I can rewrite a loaded sentence neutrally.',
          ],
          vocabulary: [
            { term: 'loaded language', definition: 'Words chosen to make you feel something rather than to describe accurately.' },
            { term: 'false choice', definition: 'Presenting two options as if they were the only ones.' },
            { term: 'anecdote', definition: 'A single story offered as if it proved a general rule.' },
          ],
          materials: ['Two or three real opinion pieces or advertisements', 'Highlighters', 'The printed worksheet'],
          prep: ['Collect examples in advance from real sources. Invented examples are too obvious and teach nothing.'],
          script: [],
          worksheet: { id: 'g6-ela-u4-l3-ws', title: 'Spot the Move', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Identifies at least three of the moves in real text.', 'Rewrites a loaded sentence without the loading.'],
            exitTicket: 'Give one sentence and ask which move it is making, and what evidence would have to replace it.',
          },
          differentiation: {
            support: ['Teach two moves only — loaded words and the single story. They cover most of what learners will meet.'],
            extension: ['Write a paragraph that uses all five moves and is still, technically, true.'],
          },
          misconceptions: [
            {
              misconception: 'Spotting a rhetorical move proves the conclusion is false.',
              looksLike: '"They used loaded words, so they are wrong."',
              correction: 'A bad argument can have a true conclusion. Keep the two judgements apart every single time.',
            },
          ],
          homeExtension: ['Find one loaded word in a headline and suggest a neutral replacement.'],
        },
        {
          id: 'g6-ela-u4-l4',
          unitId: 'g6-ela-u4',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Building an Argument: Claim and Reasons',
          essentialQuestion: 'How do I build something that would survive my own audit?',
          summary:
            'Learners write the skeleton of their own argument — a claim narrow enough to defend, three distinct reasons, and a named source of evidence for each — before writing a single paragraph of prose.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.6.1', framework: 'CCSS-ELA', text: 'Write arguments to support claims with clear reasons and relevant evidence.' },
            { code: 'CCSS.ELA-LITERACY.W.6.1.A', framework: 'CCSS-ELA', text: 'Introduce claim(s) and organize the reasons and evidence clearly.' },
          ],
          objectives: [
            'I can narrow a claim until it is defensible.',
            'I can generate three reasons that are genuinely different from each other.',
            'I can name where each piece of evidence will come from before I write.',
          ],
          vocabulary: [
            { term: 'thesis', definition: 'The single sentence stating what your whole piece will prove.' },
            { term: 'credible', definition: 'Worth believing, because of who produced it and how.' },
          ],
          materials: ['The argument planner', 'Access to a source for checking a fact or two', 'Sticky notes'],
          prep: [
            'Agree the question in advance and make sure it is genuinely contested. An argument nobody disagrees with cannot be practised on.',
            'Have one narrowing example ready: "school is unfair" becoming "our lunch queue system disadvantages Year 7".',
          ],
          script: [],
          worksheet: { id: 'g6-ela-u4-l4-ws', title: 'The Argument Planner', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['States a claim narrow enough to prove.', 'Lists three non-overlapping reasons.', 'Names a real source for each piece of evidence.'],
            exitTicket: 'Ask them to audit their own plan with the three questions from lesson two and say which reason is currently weakest.',
          },
          differentiation: {
            support: ['Provide the claim and ask only for reasons and sources.'],
            extension: ['Write the same argument for two different audiences and note which reasons change.'],
            language: ['Provide sentence frames for reason statements: "One reason ___ is that ___."'],
          },
          misconceptions: [
            {
              misconception: 'Three reasons means saying the same thing three ways.',
              looksLike: 'Reasons that are all "it is unfair" with different wording.',
              correction: 'Ask what evidence each reason would need. Identical evidence means it is one reason, not three.',
            },
          ],
          homeExtension: ['Plan an argument for something you actually want and test it on a sceptical adult before writing it.'],
        },
        {
          id: 'g6-ela-u4-l5',
          unitId: 'g6-ela-u4',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Answering the Other Side',
          essentialQuestion: 'How do I deal with the best argument against me?',
          summary:
            'Counterclaim and rebuttal. Learners state the opposing case at full strength, then either answer it, limit their own claim, or concede — and discover that conceding a point often strengthens the whole piece.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.6.1.B', framework: 'CCSS-ELA', text: 'Support claim(s) with clear reasons and relevant evidence, using credible sources and demonstrating an understanding of the topic or text.' },
            { code: 'CCSS.ELA-LITERACY.W.6.1.E', framework: 'CCSS-ELA', text: 'Provide a concluding statement or section that follows from the argument presented.' },
          ],
          objectives: [
            'I can state the opposing case in a form its supporters would accept.',
            'I can answer it, narrow my claim, or concede — and say which I am doing.',
            'I can write a conclusion that follows from what I actually proved.',
          ],
          vocabulary: [
            { term: 'counterclaim', definition: 'The strongest argument against your position.' },
            { term: 'rebuttal', definition: 'Your answer to the counterclaim.' },
            { term: 'concede', definition: 'To admit a point is right, and then explain why your claim survives anyway.' },
          ],
          materials: ['The draft argument from the previous lesson', 'A red pen', 'The printed worksheet'],
          prep: ['Be ready to argue the other side yourself, properly. A half-hearted opposition teaches nothing.'],
          script: [],
          worksheet: { id: 'g6-ela-u4-l5-ws', title: 'Steelman, Then Answer', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['States a strong counterclaim fairly.', 'Responds to it explicitly.', 'Writes a conclusion that matches what was proved.'],
            exitTicket: 'Ask which of the three responses they used — answer, narrow, or concede — and why that one.',
          },
          differentiation: {
            support: ['Supply the counterclaim so the learner only has to respond.'],
            extension: ['Find a real published argument that concedes a point, and explain how the concession makes it stronger.'],
          },
          misconceptions: [
            {
              misconception: 'Admitting anything means losing.',
              looksLike: 'A counterclaim paragraph that describes the other side as obviously silly.',
              correction: 'Read them a strong published argument that concedes early. Conceding a small point buys credibility for the large one.',
            },
          ],
          homeExtension: ['Ask someone who disagrees with you to state their best reason, and write it down in their words without arguing.'],
        },
      ],
    },

    /* ============================================================ UNIT 5 */
    {
      id: 'g6-ela-u5',
      gradeId: 'g6',
      subjectId: 'ela',
      sequence: 5,
      title: 'Words, Shades of Meaning and Texts Side by Side',
      bigIdea:
        'Two words can mean nearly the same thing and do completely different work, and two texts can cover the same event and leave you with different truths.',
      description:
        'Vocabulary treated as a reading and writing tool rather than a list. Learners work out unfamiliar words from context and from roots, then move to the finer business of connotation — the feeling a word carries alongside its definition. The unit closes by putting texts of different genres side by side on the same subject, which is where word choice and structure become impossible to ignore.',
      weeks: 5,
      standards: [
        { code: 'CCSS.ELA-LITERACY.L.6.4', framework: 'CCSS-ELA', text: 'Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 6 reading and content, choosing flexibly from a range of strategies.' },
        { code: 'CCSS.ELA-LITERACY.L.6.4.A', framework: 'CCSS-ELA', text: 'Use context as a clue to the meaning of a word or phrase.' },
        { code: 'CCSS.ELA-LITERACY.L.6.4.B', framework: 'CCSS-ELA', text: 'Use common, grade-appropriate Greek or Latin affixes and roots as clues to the meaning of a word.' },
        { code: 'CCSS.ELA-LITERACY.L.6.5.C', framework: 'CCSS-ELA', text: 'Distinguish among the connotations (associations) of words with similar denotations (definitions).' },
        { code: 'CCSS.ELA-LITERACY.RL.6.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text, including figurative and connotative meanings; analyze the impact of a specific word choice on meaning and tone.' },
        { code: 'CCSS.ELA-LITERACY.RL.6.9', framework: 'CCSS-ELA', text: 'Compare and contrast texts in different forms or genres in terms of their approaches to similar themes and topics.' },
      ],
      lessonTitles: [
        'Working a Word Out from the Sentence Around It',
        'Greek and Latin Roots: The Word Inside the Word',
        'Figurative Language: Saying One Thing, Meaning Another',
        'Connotation: The Feeling a Word Carries',
        'Same Subject, Different Genre',
      ],
      performanceTask:
        'The Word Swap Experiment: the learner takes one paragraph of published writing, swaps six words for near-synonyms with different connotations, and writes an analysis of exactly how the tone changed and which single swap did the most damage.',
      lessons: [
        {
          id: 'g6-ela-u5-l1',
          unitId: 'g6-ela-u5',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Working a Word Out from the Sentence Around It',
          essentialQuestion: 'What do I do when I hit a word I do not know and cannot look up?',
          summary:
            'Context-clue strategies made explicit: definition in the sentence, contrast signalled by "but" or "unlike", example lists, and inference from the surrounding action. Learners predict, then check, then record how close they were.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.L.6.4.A', framework: 'CCSS-ELA', text: 'Use context as a clue to the meaning of a word or phrase.' },
          ],
          objectives: [
            'I can name which kind of context clue a sentence is giving me.',
            'I can predict a meaning before I check it.',
            'I can say how close my prediction was and what led me astray.',
          ],
          vocabulary: [
            { term: 'context', definition: 'The words and sentences around an unfamiliar word.' },
            { term: 'antonym clue', definition: 'A contrast that tells you the word means roughly the opposite of something nearby.' },
          ],
          materials: ['A text with several unfamiliar words', 'A dictionary, kept closed until the predictions are written', 'The printed worksheet'],
          prep: ['Pick six words from the text in advance and check that at least four are genuinely gettable from context. Some are not, and saying so is honest.'],
          script: [],
          worksheet: { id: 'g6-ela-u5-l1-ws', title: 'Predict, Then Check', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Predicts before checking every time.', 'Names the clue type that produced the prediction.'],
            exitTicket: 'Give one unfamiliar word in a rich sentence and ask for a prediction plus the clue that produced it.',
          },
          differentiation: {
            support: ['Start with sentences where the definition is embedded after a comma. The pattern is highly visible.'],
            extension: ['Find a sentence in which the context actively misleads, and explain how.'],
            language: ['Cognates are a legitimate clue and should be named as a strategy rather than treated as cheating.'],
          },
          misconceptions: [
            {
              misconception: 'If I do not know a word, I should skip it.',
              looksLike: 'Fluent reading with no comprehension of the key sentence.',
              correction: 'Cover one important word in a sentence they understand and ask what is lost. The demonstration lands faster than the instruction.',
            },
          ],
          homeExtension: ['Collect one unfamiliar word a day for a week, with the sentence it came in.'],
        },
        {
          id: 'g6-ela-u5-l2',
          unitId: 'g6-ela-u5',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'Greek and Latin Roots: The Word Inside the Word',
          essentialQuestion: 'How can knowing one root unlock twenty words?',
          summary:
            'A small high-yield set of roots and affixes — port, dict, spect, scrib, tele, geo, bio, trans, sub, pre — used to decode unfamiliar words and to predict the meaning of invented ones.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.L.6.4.B', framework: 'CCSS-ELA', text: 'Use common, grade-appropriate Greek or Latin affixes and roots as clues to the meaning of a word.' },
          ],
          objectives: [
            'I can break a long word into root and affixes.',
            'I can predict the meaning of an unfamiliar word from its parts.',
            'I can list four words sharing a root and say what they have in common.',
          ],
          vocabulary: [
            { term: 'root', definition: 'The core part of a word that carries its main meaning.' },
            { term: 'prefix', definition: 'A word part added to the front that changes the meaning.' },
            { term: 'suffix', definition: 'A word part added to the end, often changing the word\'s job in a sentence.' },
          ],
          materials: ['Index cards for a root wall', 'A dictionary with etymologies', 'The printed worksheet'],
          prep: ['Write each root on a card. Building the wall over the week matters more than the single lesson.'],
          script: [],
          worksheet: { id: 'g6-ela-u5-l2-ws', title: 'One Root, Many Words', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Segments unfamiliar words into parts.', 'Produces a defensible meaning from the parts alone.'],
            exitTicket: 'Invent a word from two taught parts — "telescribe" — and ask what it would mean.',
          },
          differentiation: {
            support: ['Four roots, not ten. Depth over coverage.'],
            extension: ['Find a word whose modern meaning has drifted from its roots and explain the journey.'],
            language: ['Latin roots are visible in Spanish, French, Italian and Portuguese; invite the learner to supply the cognate.'],
          },
          misconceptions: [
            {
              misconception: 'Roots always give the exact meaning.',
              looksLike: 'Insisting a "manuscript" must be handwritten today.',
              correction: 'Treat roots as a strong hint that must then be tested against the sentence.',
            },
          ],
          homeExtension: ['Find three words on food packaging that share a root and work out what the root means.'],
        },
        {
          id: 'g6-ela-u5-l3',
          unitId: 'g6-ela-u5',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Figurative Language: Saying One Thing, Meaning Another',
          essentialQuestion: 'Why would a writer say something that is not literally true?',
          summary:
            'Metaphor, simile, personification and idiom, treated as choices with consequences. For every figure of speech the learner writes the literal version and says what was lost.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.L.6.5.A', framework: 'CCSS-ELA', text: 'Interpret figures of speech in context.' },
            { code: 'CCSS.ELA-LITERACY.RL.6.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text, including figurative and connotative meanings; analyze the impact of a specific word choice on meaning and tone.' },
          ],
          objectives: [
            'I can explain what a metaphor is comparing and what the comparison suggests.',
            'I can rewrite a figure of speech literally and say what is lost.',
            'I can write a metaphor that does a specific job.',
          ],
          vocabulary: [
            { term: 'metaphor', definition: 'Saying one thing is another to transfer its qualities.' },
            { term: 'personification', definition: 'Giving human qualities to something that is not human.' },
            { term: 'idiom', definition: 'A phrase whose meaning cannot be worked out from its words.' },
          ],
          materials: ['A poem and a prose extract', 'Highlighters', 'The printed worksheet'],
          prep: ['Choose a poem with one metaphor that is genuinely arguable. Certainty makes for a dull discussion.'],
          script: [],
          worksheet: { id: 'g6-ela-u5-l3-ws', title: 'What Is It Really Saying?', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Explains what is being compared and why.', 'Produces a literal paraphrase and names the loss.'],
            exitTicket: 'Give a metaphor and ask for the literal version plus one thing that disappeared in translation.',
          },
          differentiation: {
            support: ['Start with similes, where the comparison is signposted by "like" or "as".'],
            extension: ['Track one extended metaphor across a whole poem and explain how it develops.'],
            language: ['Idioms are the hardest category for multilingual learners. Collect them explicitly and swap idioms from other languages.'],
          },
          misconceptions: [
            {
              misconception: 'Figurative language is decoration added to make writing pretty.',
              looksLike: 'Identifying a metaphor correctly and saying it "makes it more interesting".',
              correction: 'Always ask what the comparison claims. "Time is a thief" says something about time that no adjective would.',
            },
          ],
          homeExtension: ['Collect three idioms used at home this week and work out what they literally say.'],
        },
        {
          id: 'g6-ela-u5-l4',
          unitId: 'g6-ela-u5',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Connotation: The Feeling a Word Carries',
          essentialQuestion: 'Why does "thrifty" feel different from "stingy" when they mean the same thing?',
          summary:
            'Near-synonyms placed on a line from warm to cold. Learners then find connotation at work in a real persuasive text and rewrite a paragraph to flip its feeling without changing a single fact.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.L.6.5.C', framework: 'CCSS-ELA', text: 'Distinguish among the connotations (associations) of words with similar denotations (definitions).' },
            { code: 'CCSS.ELA-LITERACY.RI.6.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text, including figurative, connotative, and technical meanings.' },
          ],
          objectives: [
            'I can rank near-synonyms from positive to negative.',
            'I can find connotation being used to persuade.',
            'I can flip a paragraph\'s feeling using word choice alone.',
          ],
          vocabulary: [
            { term: 'denotation', definition: 'A word\'s dictionary meaning.' },
            { term: 'connotation', definition: 'The feeling or association a word carries beyond its definition.' },
            { term: 'tone', definition: 'The attitude a piece of writing takes towards its subject.' },
          ],
          materials: ['Word cards with near-synonym sets', 'A short persuasive text', 'The printed worksheet'],
          prep: ['Prepare four synonym sets, for example: slim, thin, skinny, scrawny. Do not order them yourself in advance — argue it out.'],
          script: [],
          worksheet: { id: 'g6-ela-u5-l4-ws', title: 'Same Meaning, Different Feeling', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Orders synonyms and defends the order.', 'Rewrites a paragraph so the facts stay and the feeling reverses.'],
            exitTicket: 'Give a neutral sentence and ask for a positive and a negative version with the same facts.',
          },
          differentiation: {
            support: ['Sort into three piles — positive, neutral, negative — before attempting a full ordering.'],
            extension: ['Find a news headline about the same event from two outlets and compare the loaded words.'],
            language: ['Connotation rarely transfers between languages; treat disagreements as interesting data rather than errors.'],
          },
          misconceptions: [
            {
              misconception: 'Synonyms are interchangeable.',
              looksLike: 'Swapping "childlike" for "childish" in a compliment.',
              correction: 'Do the swap out loud in a sentence about the learner. The difference is felt immediately.',
            },
          ],
          homeExtension: ['Describe a family member twice using only positive words, then only negative ones, keeping every fact the same.'],
        },
        {
          id: 'g6-ela-u5-l5',
          unitId: 'g6-ela-u5',
          gradeId: 'g6',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Same Subject, Different Genre',
          essentialQuestion: 'What does a poem give me that a report cannot, and the other way round?',
          summary:
            'A poem, a news article and a memoir extract on the same subject. Learners compare what each genre can do, what each has to leave out, and which one they would trust for which purpose.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.6.9', framework: 'CCSS-ELA', text: 'Compare and contrast texts in different forms or genres in terms of their approaches to similar themes and topics.' },
            { code: 'CCSS.ELA-LITERACY.RI.6.9', framework: 'CCSS-ELA', text: 'Compare and contrast one author\'s presentation of events with that of another.' },
          ],
          objectives: [
            'I can describe what each genre does well.',
            'I can name what each genre has to leave out.',
            'I can say which text I would use for which purpose, and why.',
          ],
          vocabulary: [
            { term: 'genre', definition: 'A kind of text with its own conventions and expectations.' },
            { term: 'memoir', definition: 'A true account of part of a writer\'s own life.' },
          ],
          materials: ['Three texts on one subject in three genres', 'A three-column comparison sheet'],
          prep: ['Find the three texts in advance; this is the slow part. Natural disasters, migration and sport all supply good sets.'],
          script: [],
          worksheet: { id: 'g6-ela-u5-l5-ws', title: 'Three Ways In', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Compares approaches rather than summarising each text.', 'Names a genuine limitation of each genre.'],
            exitTicket: 'Ask which text they would give to someone who had to make a decision, and which to someone who had to understand how it felt.',
          },
          differentiation: {
            support: ['Compare two texts before attempting three.'],
            extension: ['Write a fourth version of the same event in a genre none of the three used.'],
            language: ['Provide comparison frames: "Whereas the article ___, the poem ___."'],
          },
          misconceptions: [
            {
              misconception: 'The factual text is the true one and the poem is made up.',
              looksLike: 'Dismissing the memoir as unreliable because it is emotional.',
              correction: 'Ask what the news report cannot tell you about the experience. Different genres are accountable to different truths.',
            },
          ],
          homeExtension: ['Find a song and a news story about the same event and note what only one of them can say.'],
        },
      ],
    },
  ],
}

export default course
