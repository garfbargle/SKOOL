import type { SubjectCourse } from '../../types'

/**
 * Grade 3 English Language Arts.
 *
 * Third grade is the hinge year. Up to now a child has been learning to read;
 * from here on they read in order to learn something else. Everything in this
 * course serves that turn: evidence instead of guessing, the message underneath
 * the plot, the parts of a page that is not a story, long words broken into
 * chunks, and writing that has a job to do.
 */
const course: SubjectCourse = {
  gradeId: 'g3',
  subjectId: 'ela',
  title: 'Grade 3 English Language Arts',
  overview:
    'This is the year reading stops being the task and starts being the tool. A Grade 3 reader is expected to answer questions about a text by pointing at the words that prove it, to find the lesson a story is teaching, to pull information out of a page full of headings and captions and diagrams, and to attack a five-syllable word without flinching. Alongside that, they write for three different reasons — to argue, to explain and to tell a story — and they learn that a first draft is not a finished piece. The through-line all year is evidence: what makes you say that, and where is it written down?',
  yearGoals: [
    'Answer questions about a text by referring explicitly to the words on the page rather than to memory or guesswork.',
    'Determine the central message of a story or the main idea of an informational text, and explain how key details support it.',
    'Read unfamiliar multisyllable words by chunking them into syllables and recognising common prefixes, roots and Latin suffixes.',
    'Use headings, captions, diagrams, indexes and search tools to find information efficiently, and describe how sentences and paragraphs connect.',
    'Write opinion pieces with reasons, informative pieces with facts and definitions, and narratives with dialogue and description — then revise them.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'g3-ela-u1',
      gradeId: 'g3',
      subjectId: 'ela',
      sequence: 1,
      title: 'Reading Like a Detective: Evidence in Stories',
      bigIdea:
        'An answer you cannot point to in the text is a guess — and a reader who can point to the proof can defend any answer they give.',
      description:
        'Children arrive in Grade 3 happy to answer questions about a story from memory, from the pictures, or from what they would have done in the character’s place. This unit rewires that habit. Every answer gets underlined, quoted or pointed at. Along the way learners describe characters from their traits, motivations and feelings, and trace how one character’s choice sets off the next event in the story.',
      weeks: 6,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RL.3.1', framework: 'CCSS-ELA', text: 'Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers.' },
        { code: 'CCSS.ELA-LITERACY.RL.3.3', framework: 'CCSS-ELA', text: 'Describe characters in a story — their traits, motivations or feelings — and explain how their actions contribute to the sequence of events.' },
        { code: 'CCSS.ELA-LITERACY.RL.3.4', framework: 'CCSS-ELA', text: 'Determine the meaning of words and phrases as they are used in a text, distinguishing literal from non-literal language.' },
        { code: 'CCSS.ELA-LITERACY.SL.3.1', framework: 'CCSS-ELA', text: 'Engage effectively in a range of collaborative discussions, building on others’ ideas and expressing their own clearly.' },
      ],
      lessonTitles: [
        'Right There in the Text',
        'Questions Worth Asking',
        'Describing a Character from What They Do',
        'One Thing Leads to Another',
        'The Evidence Notebook',
      ],
      performanceTask:
        'The Evidence File: given a short unfamiliar story, the child answers four questions about it and, for each answer, copies out the exact sentence from the text that proves it. An answer with no quotation scores nothing, however sensible it sounds.',
      lessons: [
        /* ---------------------------------------------------- L1 authored */
        {
          id: 'g3-ela-u1-l1',
          unitId: 'g3-ela-u1',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 1,
          status: 'authored',
          title: 'Right There in the Text',
          essentialQuestion: 'How do I prove my answer using the exact words the author wrote?',
          summary:
            'Introduces textual evidence as a habit rather than a skill. The child answers questions about a short story and then underlines the sentence that makes the answer true. The lesson deliberately separates "a good guess" from "a proved answer", because Grade 3 readers are usually excellent guessers and that is what holds them back.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.1', framework: 'CCSS-ELA', text: 'Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers.' },
            { code: 'CCSS.ELA-LITERACY.RL.3.3', framework: 'CCSS-ELA', text: 'Describe characters in a story — their traits, motivations or feelings — and explain how their actions contribute to the sequence of events.' },
          ],
          objectives: [
            'I can answer a question about a story and point to the words that prove it.',
            'I can tell the difference between an answer from the text and an answer from my own head.',
            'I can underline evidence instead of just saying what I think.',
          ],
          vocabulary: [
            { term: 'evidence', definition: 'The exact words in the text that show your answer is right.', example: 'My evidence is the sentence "her voice went thin".' },
            { term: 'explicitly', definition: 'Said in plain words, right there on the page, not hinted at.', example: 'The story explicitly says she checked the gate twice.' },
            { term: 'infer', definition: 'To work something out from clues when the text does not say it outright.', example: 'I infer she is worried, because she checked the gate twice.' },
            { term: 'trait', definition: 'A word that describes what a person is like, not what they did.', example: 'Determined is a trait. Walking to the creek is an action.' },
          ],
          materials: [
            'The printed worksheet, which contains the story "The Gate"',
            'A pencil and a highlighter or coloured pencil for underlining',
            'A sticky note or scrap of paper for the exit ticket',
          ],
          prep: [
            'Read "The Gate" on the worksheet yourself first. It is about 130 words and takes under a minute.',
            'Decide on your deliberately wrong opening claim and say it with total confidence. The confidence is what makes the child argue.',
            'Have your own copy of the story to underline on, so the child sees an adult doing the same work.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'I Am Definitely Right',
              minutes: 7,
              say: [
                'I am going to read you a short story, and then I am going to tell you something about it that I am completely sure of.',
                'Listen. [Read "The Gate" aloud, straight through, no commentary.]',
                'Right. Here is what I know: Rosa did not care about that goat at all. She was annoyed the whole time.',
                'You disagree? Prove it. Not "because I think so" — find me the words. Show me the line.',
                'There it is. "Then she scratched his ears anyway." That word "anyway" does a lot of work, does it not? You just beat me with evidence.',
              ],
              do: [
                'Read the story aloud once at a normal pace. Do not explain anything.',
                'State the wrong claim flatly and hold your ground for a few seconds while the child protests.',
                'When they find the line, underline it on your own copy so they see the move modelled.',
              ],
              studentDoes: ['Listens to the story, disagrees with your claim, and hunts for a line that disproves it.'],
              checks: [
                {
                  ask: 'Which words in the story show me I am wrong?',
                  lookFor: 'A specific sentence quoted or pointed at — most likely the last line about scratching his ears.',
                  ifStuck: 'Narrow the search. "The proof is in the last three lines. Read those three to me and stop when you find it."',
                },
              ],
              tip: 'Being wrong on purpose is the whole engine of this lesson. If you soften the claim into a question, the child has nothing to push against and the energy disappears.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Two Kinds of Answer',
              minutes: 10,
              say: [
                'There are two kinds of answers people give about a story, and only one of them counts in Grade 3.',
                'Here is the first kind. "Rosa was upset because I would be upset if my goat ran off." That is an answer from your own head. It might even be true. But it is not proved.',
                'Here is the second kind. "Rosa was determined, and I know because the story says she walked the fence line all the way to the creek, calling until her voice went thin."',
                'Hear the difference? The second one has the words in it. It has evidence.',
                'So from now on we answer in two parts. Part one: what I think. Part two: the words that prove it. I am going to say it like this — "I think ___, because the text says ___."',
                'Watch me do one. Question: how did Rosa know which way Pip went? I think she followed the hoofprints, because the text says "she found hoofprints in the wet mud, pointing away from the house".',
              ],
              do: [
                'Write the sentence frame where the child can see it: "I think ___, because the text says ___."',
                'Model the underline: read, find, underline, then read the underlined words aloud.',
                'Deliberately model one weak answer first, then repair it into a strong one.',
              ],
              studentDoes: ['Repeats the sentence frame and identifies which of two sample answers is proved.'],
              checks: [
                {
                  ask: 'Which of those two answers would count, and why?',
                  lookFor: 'The second one, because it uses words from the story.',
                  ifStuck: 'Cover the story with your hand and ask them to give the first answer again. If the answer survives with the book closed, it was never from the text.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Question, Answer, Proof',
              minutes: 12,
              say: [
                'Your turn. I ask, you answer, and then you have to underline. No underline, no point.',
                'Question one: was Rosa careful before she went to bed? Answer, then underline.',
                'Question two: what did Pip do when Rosa finally found him?',
                'Question three, this one is harder — the story never says the word "worried" anywhere. So how do we know she was worried?',
                'That is called an inference. The text does not say it outright, but the words still prove it. Even an inference needs evidence — you still have to point at something.',
              ],
              do: [
                'Ask each question and then stop talking. Wait. Silence is what produces the rereading.',
                'Insist on the underline every single time, including when the answer is obviously correct.',
                'On question three, if the child says "I just know", ask: "What did she do that a worried person does?"',
              ],
              studentDoes: ['Answers three questions aloud and underlines the supporting sentence for each.'],
              checks: [
                {
                  ask: 'Read me only your underlined words. Do they still prove your answer on their own?',
                  lookFor: 'The underlined portion actually contains the proof rather than a nearby sentence.',
                  ifStuck: 'Common error: underlining the whole paragraph. Say, "Cut it down to one sentence. Which single sentence does the job?"',
                },
                {
                  ask: 'Which was harder — the answer, or finding the proof?',
                  lookFor: 'Honest reflection; most children say the proof, which is the point.',
                },
              ],
              tip: 'Expect the child to answer from memory and then hunt backwards for the proof. That is fine. The rereading is where the learning happens, whatever order it comes in.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 15,
              say: [
                'Now you do it on paper without me asking. Read the story again first — yes, again. Good readers reread.',
                'Answer each question in the two parts: what you think, then the words from the text.',
                'The last box is the evidence file. Pick your best answer of the four and copy the proof sentence in exactly, spelling and all.',
                'Copying it exactly matters. If you change the words, it is not the author’s evidence any more, it is yours.',
              ],
              do: [
                'Let the child reread silently. Do not read it to them again unless decoding is genuinely blocking comprehension.',
                'Resist correcting handwriting or spelling in the quoted line beyond the accuracy of the copy itself.',
              ],
              studentDoes: ['Completes the worksheet independently, underlining evidence for each answer.'],
              checks: [
                {
                  ask: 'Show me where this answer came from.',
                  lookFor: 'A finger on a specific line, not a wave at the page.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Prove It or Lose It',
              minutes: 6,
              say: [
                'Last game. I make a claim about the story. If it is provable you say "prove it" and find the line. If it is not in the text at all, you say "not in the text".',
                'Rosa owns a dog. … Not in the text! Nothing about a dog anywhere.',
                'Rosa put her boots on. … Prove it. Yes — right there.',
                'Rosa was angry at Mrs Okoye. … Not in the text. We do not know a thing about how she felt about Mrs Okoye.',
                'That is the whole skill. Not what could be true. What is written down.',
              ],
              do: ['Mix three provable claims with two that are plausible but absent from the text.'],
              studentDoes: ['Sorts claims into provable and not-in-the-text, locating the line for the provable ones.'],
              checks: [
                {
                  ask: 'Why is "Rosa was angry at Mrs Okoye" not allowed, even though it could be true?',
                  lookFor: 'Because the story never says anything about it — plausible is not the same as proved.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g3-ela-u1-l1-ws',
            title: 'The Gate: Answer and Prove It',
            style: 'storybook',
            prepNotes:
              'Print single-sided so the story and the questions can be seen at the same time — a child who has to flip the page will answer from memory, which defeats the entire lesson. A highlighter is better than a pencil for the underlining because you can audit the evidence from across the table.',
            sections: [
              {
                id: 's1',
                title: 'The Story',
                directions: 'Read the story once to yourself. Then read it again slowly. Good readers always read it twice.',
                layout: 'full',
                items: [
                  'THE GATE',
                  'Rosa checked the gate twice before she went to bed.',
                  'In the morning the gate was open and Pip the goat was gone. Rosa did not cry. She got her boots.',
                  'She walked the fence line all the way to the creek, calling Pip’s name until her voice went thin. At the creek she found hoofprints in the wet mud, pointing away from the house.',
                  'Rosa followed them uphill through the ferns.',
                  'Pip was standing in Mrs Okoye’s vegetable patch, eating the tops off the carrots. Rosa grabbed his collar.',
                  '"You cost me my whole morning," she said. Then she scratched his ears anyway.',
                ],
                images: [
                  {
                    id: 'img-gate-dawn',
                    slot: 'Story header — the open gate at dawn',
                    purpose:
                      'Anchors the opening image of the story so the child can hold the setting in mind while they hunt for evidence, and gives a reference point for discussing what the picture does NOT tell you — the feelings are only in the words.',
                    subject:
                      'an early-morning farmyard scene with a wooden five-bar gate standing wide open, an empty fenced pen behind it, and a girl of about eight in rubber boots standing in the open gateway looking out toward distant hills',
                    composition:
                      'wide landscape framing, the open gate slightly left of centre, the empty pen visible behind it, the girl small in the frame so the emptiness of the pen reads as the subject, soft low morning light',
                    mustInclude: ['the gate clearly swung fully open', 'the pen behind the gate completely empty of animals', 'the girl wearing rubber boots'],
                    mustAvoid: ['any goat visible anywhere in the picture', 'any text, sign or lettering on the gate', 'a distressed or crying expression on the girl'],
                    aspect: '16:9',
                    altText: 'A girl in boots standing at a wide-open farm gate beside an empty pen in the early morning',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Answer and Prove It',
                directions:
                  'Answer each question. Then go back to the story and underline the words that prove your answer. Every answer needs an underline.',
                layout: 'column',
                writingLines: 8,
                items: [
                  '1. Was Rosa careful about the gate before she went to bed? How do you know?',
                  '2. How did Rosa work out which way Pip had gone?',
                  '3. The story never uses the word "worried". How can we tell Rosa was worried anyway?',
                  '4. Does Rosa love Pip, even though he ruined her morning? Which words prove it?',
                ],
              },
              {
                id: 's3',
                title: 'Look Closely',
                directions:
                  'Count the hoofprints in the mud. Then find the sentence in the story that tells you Rosa found prints, and underline it in a different colour.',
                layout: 'row',
                writingLines: 2,
                images: [
                  {
                    id: 'img-hoofprints-6',
                    slot: 'Item 5 — hoofprints in the mud',
                    purpose:
                      'A countable image tied directly to a line of text. The child must move between picture and words, which is the exact skill of using an illustration to support understanding rather than to replace reading.',
                    subject: 'a patch of wet grey mud beside the edge of a shallow creek with six identical small cloven goat hoofprints pressed into it in a single trail leading away from the water',
                    count: 6,
                    composition:
                      'close overhead view of the mud patch, the six prints in a clear staggered single trail from the bottom right of the frame toward the top left, each print fully visible, deep and crisply outlined, none overlapping or cut off by the frame edge',
                    mustInclude: ['exactly six hoofprints', 'every print the same size and shape', 'a clear direction of travel readable from the trail'],
                    mustAvoid: ['boot prints or human footprints', 'prints running off the edge of the frame', 'the goat itself', 'any arrow, number or label'],
                    aspect: '3:2',
                    altText: 'Six goat hoofprints in wet mud leading away from a creek',
                  },
                  {
                    id: 'img-carrot-patch-4',
                    slot: 'Item 6 — Pip in the vegetable patch',
                    purpose:
                      'Illustrates the moment the child is asked to describe in question two of the answer key, and supplies a countable detail so a reader can practise checking the picture against the words instead of assuming they agree.',
                    subject: 'a small brown and white goat standing in a tidy vegetable patch chewing the green leafy tops of carrots, with exactly four carrots pulled loose and lying on the soil beside him',
                    count: 4,
                    composition:
                      'the goat centred and side-on so he is fully visible, the four loose carrots spread clearly on the bare soil in the foreground, none overlapping, neat rows of undisturbed vegetables behind',
                    mustInclude: ['exactly four loose carrots on the soil', 'the goat visibly chewing green carrot tops', 'the four carrots clearly separated from each other'],
                    mustAvoid: ['more than four loose carrots', 'a person in the picture', 'any text or garden sign', 'carrots hidden behind the goat'],
                    aspect: '4:3',
                    altText: 'A goat eating carrot tops in a vegetable patch with four pulled carrots on the soil',
                  },
                ],
              },
              {
                id: 's4',
                title: 'My Evidence File',
                directions:
                  'Pick the answer you are proudest of. Write the question in the top box, your answer in the middle box, and copy the exact proof sentence from the story into the bottom box. Copy it word for word.',
                layout: 'full',
                images: [
                  {
                    id: 'img-evidence-file-mat',
                    slot: 'Evidence file organiser',
                    purpose:
                      'Physically separates question, claim and proof into three spaces so the child cannot blur them together. Seeing an empty proof box is a far stronger prompt than being reminded to include evidence.',
                    subject:
                      'an empty three-part graphic organiser: one wide empty rounded rectangle at the top, a downward arrow, a wide empty rounded rectangle in the middle, another downward arrow, and a taller empty rounded rectangle at the bottom drawn with a doubled outline',
                    composition:
                      'centred and symmetrical on a plain white ground, all three boxes the same width and completely empty, two clear downward arrows between them, the bottom box noticeably taller than the others with a double outline to mark it as the important one',
                    mustInclude: ['all three boxes completely empty inside', 'two clear downward arrows linking the boxes in order', 'a doubled outline on the bottom box only'],
                    mustAvoid: ['any words, letters, numbers or labels anywhere', 'ruled writing lines inside the boxes', 'decorative illustration', 'shading or fill inside the boxes'],
                    aspect: '3:4',
                    altText: 'An empty three-box organiser linked by downward arrows, the bottom box outlined twice',
                    style: 'diagram',
                  },
                ],
              },
            ],
            answerKey: [
              '1. Yes, she was careful. Proof: "Rosa checked the gate twice before she went to bed."',
              '2. She followed the tracks. Proof: "she found hoofprints in the wet mud, pointing away from the house."',
              '3. Any inference supported by an action: she did not stop to cry, she got her boots, she walked the whole fence line, she called until her voice went thin. Accept any of these; insist on the underline.',
              '4. Yes. Proof: "Then she scratched his ears anyway." Strong answers notice the word "anyway".',
              '5. Six hoofprints. The underlined sentence should be the one about the wet mud.',
              '6. Four loose carrots. The text says Pip was "eating the tops off the carrots" — a good reader notices the picture adds a detail the words never gave.',
              'Evidence file: the proof box must contain a sentence copied exactly from the story, not reworded.',
            ],
          },
          assessment: {
            successCriteria: [
              'Answers a literal question about the story and underlines the sentence that proves it.',
              'Distinguishes an answer that comes from the text from one that comes from personal experience.',
              'Supports an inference with an action stated in the text.',
            ],
            exitTicket:
              'Say: "Rosa is a person who gives up easily." Ask the child to prove you wrong using one sentence from the story. A child who argues from feeling rather than from a line is not there yet.',
            rubric: [
              { level: 'emerging', descriptor: 'Answers plausibly from memory or personal experience and cannot locate a supporting line without being told roughly where to look.' },
              { level: 'developing', descriptor: 'Finds evidence for literal questions but underlines whole paragraphs, or answers inference questions with "I just know".' },
              { level: 'secure', descriptor: 'Locates a single precise sentence for both literal and inferential questions and uses the sentence frame without prompting.' },
            ],
          },
          differentiation: {
            support: [
              'Number the sentences in the story lightly in pencil, so the child can answer "sentence 4" instead of hunting for a line they cannot yet locate quickly.',
              'Do the underlining together for the first two questions and hand over on the third.',
              'Shorten the target: tell them the paragraph the proof is in, and let them find the sentence within it.',
            ],
            extension: [
              'Ask for two different pieces of evidence for the same answer, then ask which is the stronger one and why.',
              'Ask what the picture shows that the words never say, and whether that counts as evidence about the story.',
              'Have the child write a question about the story that CANNOT be answered from the text, and explain why not.',
            ],
            language: [
              'Pre-teach "hoofprints", "fence line" and "vegetable patch" with quick sketches — the vocabulary, not the reasoning, is what usually blocks the answer.',
              'Let the child answer aloud in their stronger language and then copy the English evidence sentence. The proof is in English either way, and the thinking is what you are assessing.',
            ],
          },
          misconceptions: [
            {
              misconception: 'A sensible answer is a correct answer, whether or not the story says it.',
              looksLike: 'The child explains that Rosa was scared of the dark, or that her mother told her to find the goat — details that never appear anywhere in the text.',
              correction: 'Ask them to underline it. When they cannot, name it gently: "That is a good idea about the story, but it is not in the story. We can only use what is written."',
            },
            {
              misconception: 'Evidence means retelling the whole story back.',
              looksLike: 'Asked to prove a point, the child recounts every event from the beginning.',
              correction: 'Set a hard limit of one sentence. "Which ONE sentence does the job? If you had to delete all the others, which would you keep?"',
            },
            {
              misconception: 'If the text does not use the exact word in the question, the answer is not in the text.',
              looksLike: 'Asked how we know Rosa was worried, the child scans for the word "worried", does not find it, and says the story does not say.',
              correction: 'Teach the move explicitly: look for what a worried person DOES. Actions are evidence for feelings.',
            },
          ],
          homeExtension: [
            'At bedtime reading, stop once and ask "how do you know?" — then wait for a finger on the page rather than an explanation.',
            'Play prove-it at dinner with the day itself: "You had a good day at school. Prove it. Give me one thing that actually happened."',
            'Watching a film, pause and ask what the character wants. The evidence is what they DID, not what they said.',
          ],
          teacherNotes:
            'The hardest part of this lesson for an adult is the silence. When you ask "where is the proof?" the child will squirm, and you will want to help. Count to ten in your head before you narrow the search. The rereading that happens in that silence is the entire lesson, and if you fill the gap they never have to do it. Also be honest with yourself about the inference question — needing a nudge on that one is completely normal in the first week.',
        },

        /* --------------------------------------------------- L2–L5 outlines */
        {
          id: 'g3-ela-u1-l2',
          unitId: 'g3-ela-u1',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'Questions Worth Asking',
          essentialQuestion: 'What kind of question makes me read the page again?',
          summary:
            'Flips the usual arrangement: the child writes the questions and the adult answers them. Sorting their own questions into "right there", "put it together" and "not in the book" teaches more about text structure than answering ever does.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.1', framework: 'CCSS-ELA', text: 'Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers.' },
            { code: 'CCSS.ELA-LITERACY.SL.3.1', framework: 'CCSS-ELA', text: 'Engage effectively in collaborative discussions, asking questions to check understanding of information presented.' },
          ],
          objectives: [
            'I can write questions about a story I have read.',
            'I can sort my questions into ones the text answers and ones it does not.',
            'I can answer someone else’s question with evidence.',
          ],
          vocabulary: [
            { term: 'question', definition: 'A sentence that asks for information and ends with a question mark.' },
            { term: 'answerable', definition: 'Able to be answered using the words in the text.' },
          ],
          materials: ['A short story of 200–400 words', 'Sticky notes', 'A pencil'],
          prep: [
            'Choose a story with at least one deliberate gap — something the author leaves unexplained. The gap is what generates the interesting questions.',
            'Write two of your own questions in advance, one answerable and one not, to model the sort.',
          ],
          script: [],
          worksheet: { id: 'g3-ela-u1-l2-ws', title: 'My Questions About This Story', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Writes at least four questions about a story.', 'Sorts them accurately into answerable and not answerable from the text.'],
            exitTicket: 'Ask the child for one question the author never answered, and whether that bothered them as a reader.',
          },
          differentiation: {
            support: ['Supply question starters — who, what, where, why, how — on cards to choose from.'],
            extension: ['Ask the child to write one question whose answer is spread across two different paragraphs.'],
          },
          misconceptions: [
            {
              misconception: 'A good question is one you already know the answer to.',
              looksLike: 'The child asks "What colour was the gate?" when the text states it plainly in line one.',
              correction: 'Introduce the test: if you can answer it without rereading, it is a thin question. Ask one that makes you go back.',
            },
          ],
          homeExtension: ['Before reading a chapter tonight, write down one question you hope it answers. Check afterwards whether it did.'],
        },
        {
          id: 'g3-ela-u1-l3',
          unitId: 'g3-ela-u1',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Describing a Character from What They Do',
          essentialQuestion: 'How do I describe someone I have only met in words?',
          summary:
            'Character traits are inferred from actions, not announced by the author. The child collects three things a character did and converts each one into a trait word, keeping the action attached as proof.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.3', framework: 'CCSS-ELA', text: 'Describe characters in a story — their traits, motivations or feelings — and explain how their actions contribute to the sequence of events.' },
          ],
          objectives: [
            'I can name three things a character did.',
            'I can choose a trait word that those actions show.',
            'I can tell the difference between a trait and a feeling.',
          ],
          vocabulary: [
            { term: 'trait', definition: 'What a person is usually like, on most days.', example: 'Stubborn, generous, cautious.' },
            { term: 'feeling', definition: 'How a person is right now, which can change in a minute.', example: 'Excited, furious, relieved.' },
            { term: 'motivation', definition: 'The reason a character wants what they want.' },
          ],
          materials: ['A story with a strongly drawn character', 'A trait word bank of about twenty words', 'The printed worksheet'],
          prep: [
            'Build the trait word bank in advance and include some difficult ones — loyal, reckless, patient. Children reach for "nice" and "mean" unless better words are physically in front of them.',
          ],
          script: [],
          worksheet: { id: 'g3-ela-u1-l3-ws', title: 'What Kind of Person Is This?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names a trait and supports it with a specific action from the text.', 'Avoids "nice" and "mean" in favour of a precise word.'],
            exitTicket: 'Ask: what is one word for what this character is like, and what did they do that proves it?',
          },
          differentiation: {
            support: ['Give three actions already listed and ask only for the trait word.'],
            extension: ['Find a moment where the character acts against their usual trait, and discuss why.'],
          },
          misconceptions: [
            {
              misconception: 'A trait is how the character feels in one scene.',
              looksLike: 'The child describes a character as "angry" on the basis of one shouted line.',
              correction: 'Ask whether they are angry on every page. A feeling passes; a trait shows up more than once.',
            },
          ],
          homeExtension: ['Pick a character from a show you watch and name their trait, then find the scene that proves it.'],
        },
        {
          id: 'g3-ela-u1-l4',
          unitId: 'g3-ela-u1',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'One Thing Leads to Another',
          essentialQuestion: 'How does what a character does change what happens next?',
          summary:
            'Plot as consequence rather than as a list. The child maps a chain of events and tests each link by asking what would have happened if the character had chosen differently.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.3', framework: 'CCSS-ELA', text: 'Explain how characters’ actions contribute to the sequence of events in a story.' },
          ],
          objectives: [
            'I can put the main events of a story in order.',
            'I can explain how one character’s choice caused the next event.',
          ],
          vocabulary: [
            { term: 'cause', definition: 'The thing that made something else happen.' },
            { term: 'effect', definition: 'The thing that happened because of the cause.' },
            { term: 'sequence', definition: 'The order events happen in.' },
          ],
          materials: ['A familiar story', 'Six index cards', 'The printed worksheet'],
          prep: ['Write the main events on index cards in advance, shuffled, so the child arranges rather than writes.'],
          script: [],
          worksheet: { id: 'g3-ela-u1-l4-ws', title: 'The Chain of Events', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Orders five events correctly.', 'States a because-relationship between two consecutive events.'],
            exitTicket: 'Ask: if the character had NOT done that one thing, what would never have happened?',
          },
          differentiation: {
            support: ['Reduce to three events and use the words "first, then, so".'],
            extension: ['Rewrite one link in the chain and follow the consequences all the way to a different ending.'],
          },
          misconceptions: [
            {
              misconception: 'Events that come one after another are automatically cause and effect.',
              looksLike: 'The child says the goat escaped because Rosa went to bed.',
              correction: 'Apply the removal test: take the first event away. If the second could still happen, it was not the cause.',
            },
          ],
          homeExtension: ['Retell the plot of a film using only sentences that begin with "so" or "because".'],
        },
        {
          id: 'g3-ela-u1-l5',
          unitId: 'g3-ela-u1',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'The Evidence Notebook',
          essentialQuestion: 'Can I do all of it at once on a story I have never seen?',
          summary:
            'The consolidating lesson of the unit. On a cold read, the child answers questions with quotations, names a trait with proof, and explains one cause-and-effect link — the three moves of the unit combined.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.1', framework: 'CCSS-ELA', text: 'Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers.' },
            { code: 'CCSS.ELA-LITERACY.RL.3.3', framework: 'CCSS-ELA', text: 'Describe characters in a story and explain how their actions contribute to the sequence of events.' },
          ],
          objectives: [
            'I can read a new story on my own and answer questions with evidence.',
            'I can describe a character and prove the description.',
          ],
          vocabulary: [{ term: 'quotation', definition: 'Words copied exactly from a text, with quotation marks around them.' }],
          materials: ['An unfamiliar short story of about 300 words', 'The printed worksheet'],
          prep: ['Choose a story the child has genuinely never met. A cold read is the only honest assessment of this unit.'],
          script: [],
          worksheet: { id: 'g3-ela-u1-l5-ws', title: 'Evidence Notebook', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Answers four questions with accurate quotations.', 'Names one trait with supporting evidence.', 'Explains one cause-and-effect link.'],
            exitTicket: 'Ask the child which question was hardest and what they did when they got stuck.',
          },
          differentiation: {
            support: ['Read the story aloud once before the independent read.'],
            extension: ['Ask for a written paragraph combining all three moves rather than separate answers.'],
          },
          misconceptions: [
            {
              misconception: 'Quotation marks are decorative.',
              looksLike: 'The child paraphrases inside quotation marks.',
              correction: 'Compare the two side by side and point out that the marks are a promise that the words are the author’s exact ones.',
            },
          ],
          homeExtension: ['Keep a reading notebook this week with one favourite sentence copied exactly from whatever you read.'],
        },
      ],
    },

    /* ============================================================ UNIT 2 */
    {
      id: 'g3-ela-u2',
      gradeId: 'g3',
      subjectId: 'ela',
      sequence: 2,
      title: 'The Message Underneath: Central Message and Main Idea',
      bigIdea:
        'A story is about what happened, but it is also teaching something — and the details the author chose are what carry the lesson.',
      description:
        'Fables, folktales and myths make the central message unusually visible, so the unit starts there and then transfers the same reasoning to informational text, where the equivalent skill is finding the main idea. The emphasis throughout is on the second half of the standard: not just naming the message, but explaining how the key details convey it.',
      weeks: 5,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RL.3.2', framework: 'CCSS-ELA', text: 'Recount stories, including fables, folktales and myths from diverse cultures; determine the central message, lesson or moral and explain how it is conveyed through key details in the text.' },
        { code: 'CCSS.ELA-LITERACY.RL.3.5', framework: 'CCSS-ELA', text: 'Refer to parts of stories, dramas and poems when writing or speaking about a text, using terms such as chapter, scene and stanza; describe how each successive part builds on earlier sections.' },
        { code: 'CCSS.ELA-LITERACY.RI.3.2', framework: 'CCSS-ELA', text: 'Determine the main idea of a text; recount the key details and explain how they support the main idea.' },
        { code: 'CCSS.ELA-LITERACY.RL.3.9', framework: 'CCSS-ELA', text: 'Compare and contrast the themes, settings and plots of stories written by the same author about the same or similar characters.' },
      ],
      lessonTitles: [
        'Recounting Without Retelling Everything',
        'The Lesson the Story Is Teaching',
        'Same Lesson, Different Story',
        'Main Idea in a True Text',
        'Key Details That Do the Work',
      ],
      performanceTask:
        'The Fable Council: the child reads two short fables from different cultures, states the lesson of each in one sentence, and argues which fable teaches its lesson more convincingly — using key details as the argument.',
      lessons: [
        {
          id: 'g3-ela-u2-l1',
          unitId: 'g3-ela-u2',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Recounting Without Retelling Everything',
          essentialQuestion: 'How do I tell a story back in five sentences instead of fifty?',
          summary:
            'Summarising by selection. The child retells a story in a fixed number of sentences, which forces a judgement about which events actually matter — the prerequisite for finding a central message.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.2', framework: 'CCSS-ELA', text: 'Recount stories, including fables, folktales and myths from diverse cultures.' },
          ],
          objectives: ['I can retell a story in five sentences.', 'I can decide which events are important enough to keep.'],
          vocabulary: [
            { term: 'recount', definition: 'To tell the important parts of a story again in order.' },
            { term: 'summary', definition: 'A short version that keeps only what matters.' },
          ],
          materials: ['A familiar story', 'Five sentence strips', 'The printed worksheet'],
          prep: ['Cut five paper strips. The physical limit of five strips does the teaching for you.'],
          script: [],
          worksheet: { id: 'g3-ela-u2-l1-ws', title: 'Five Sentences, No More', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Produces a five-sentence recount in the right order with no essential event missing.'],
            exitTicket: 'Ask which event they cut out, and why it was safe to lose.',
          },
          differentiation: {
            support: ['Allow drawing in the five boxes before writing in them.'],
            extension: ['Drop the limit to three sentences and discuss what breaks.'],
          },
          misconceptions: [
            {
              misconception: 'A summary is the beginning of the story told in more detail.',
              looksLike: 'The child uses all five sentences on the first page of events and never reaches the ending.',
              correction: 'Fill in the last strip first — the ending — and work backwards from there.',
            },
          ],
          homeExtension: ['Retell the plot of today’s bedtime chapter in exactly three sentences before lights out.'],
        },

        /* ---------------------------------------------------- L2 authored */
        {
          id: 'g3-ela-u2-l2',
          unitId: 'g3-ela-u2',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 2,
          status: 'authored',
          title: 'The Lesson the Story Is Teaching',
          essentialQuestion: 'What is this story trying to teach me, and which details prove it?',
          summary:
            'The child reads a short original fable, states its lesson in one sentence, and then does the harder half of the standard: showing which key details carry that lesson. A deliberate sorting activity separates details that build the message from details that are merely true.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.2', framework: 'CCSS-ELA', text: 'Recount stories, including fables, folktales and myths from diverse cultures; determine the central message, lesson or moral and explain how it is conveyed through key details in the text.' },
            { code: 'CCSS.ELA-LITERACY.RL.3.1', framework: 'CCSS-ELA', text: 'Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers.' },
          ],
          objectives: [
            'I can say the lesson of a fable in one sentence.',
            'I can name the details that teach that lesson.',
            'I can spot a detail that is true but does not carry the lesson.',
          ],
          vocabulary: [
            { term: 'fable', definition: 'A very short story, often with animals, written to teach a lesson.', example: 'A fable usually ends with the lesson made plain.' },
            { term: 'central message', definition: 'The big idea the whole story is teaching, not just what happened.', example: 'The central message is that hurrying can cost you time.' },
            { term: 'moral', definition: 'The lesson of a fable, often stated in one line at the end.' },
            { term: 'key detail', definition: 'A detail the author put in on purpose to build the message.', example: 'Nan warning about the stones is a key detail.' },
          ],
          materials: [
            'The printed worksheet, which contains the fable "Bramble and the River Path"',
            'Scissors, if you want to cut the detail cards out and sort them physically',
            'A pencil',
          ],
          prep: [
            'Read the fable aloud to yourself once. It is short, and it lands better with a small pause before the last line.',
            'Decide whether you are cutting the detail cards out. Physical sorting is worth the two minutes for most children.',
            'Have a ridiculous wrong moral ready for the hook. The more confidently silly it is, the better the argument you get.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Wrong Moral',
              minutes: 7,
              say: [
                'Listen to this little story. It is a fable, which means it is short and it is teaching you something on purpose.',
                '[Read "Bramble and the River Path" aloud. Pause before the last line.]',
                'Right. I have got it. The lesson of that story is: donkeys should not carry flour.',
                'No? Why not? It is true — a donkey did carry flour and it went badly.',
                'Ah. So a lesson has to be about something bigger than one donkey. It has to be advice that works for me and you as well. Say it again — what is the lesson really?',
              ],
              do: [
                'Read the fable aloud once, unhurried, and pause dramatically before Old Nan’s final line.',
                'Deliver the silly moral completely straight. Do not smirk.',
                'Write the child’s attempt at the real lesson on scrap paper, exactly as they say it, however clumsy.',
              ],
              studentDoes: ['Listens to the fable and argues against the false moral.'],
              checks: [
                {
                  ask: 'Why is "donkeys should not carry flour" not the lesson?',
                  lookFor: 'Because it only applies to the story / it is not advice for a person.',
                  ifStuck: 'Ask: "Is that useful to you? Are you planning to carry flour on your back today?" The absurdity does the teaching.',
                },
              ],
              tip: 'The test to plant here is portability. A central message has to travel out of the story and be useful somewhere else. That single idea does most of the work in this unit.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'What Happened Versus What It Teaches',
              minutes: 10,
              say: [
                'Every story has two layers. Layer one is what happened. Layer two is what it teaches.',
                'What happened: a young donkey took a stony shortcut, slipped, split his sack, and got to market with nothing.',
                'What it teaches: the quick way can cost you more than the slow way saves.',
                'See how layer two never mentions the donkey? That is how you know it is a lesson and not a summary.',
                'Now here is the part most people skip. I have to show WHY that is the lesson, using the author’s own details.',
                'Detail one: Old Nan warns him — "stones and mud". The author put that warning in so we would know he was told. Detail two: the stone actually turns under his hoof. Detail three: the flour pours away, so the shortcut costs him everything he was carrying. Detail four: Nan’s last line — "You were faster. I was earlier."',
                'Four details, all pulling in the same direction. That is what a central message looks like when you prove it.',
              ],
              do: [
                'Draw two columns on scrap paper, head one "what happened" and one "what it teaches", and fill them in front of the child.',
                'Point to each detail in the printed fable as you name it.',
                'Underline Old Nan’s last line. It is the hinge of the whole fable.',
              ],
              studentDoes: ['Distinguishes summary from lesson and follows the four supporting details in the text.'],
              checks: [
                {
                  ask: 'Which of my two columns is the summary and which is the lesson?',
                  lookFor: 'Correct identification, ideally with the reason that the lesson has no donkey in it.',
                  ifStuck: 'Offer a third sentence — "Bramble slid on a stone" — and ask which column it belongs in.',
                },
                {
                  ask: 'Why did the author bother to make Old Nan warn him first?',
                  lookFor: 'So we know he had a choice / so the mistake is his fault, which is what makes it a lesson.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Which Details Carry the Lesson?',
              minutes: 12,
              say: [
                'Here are six details from the fable. Every one of them is true. But only some of them are teaching the lesson.',
                'This one: "The flour poured into the water like smoke." Does that carry the lesson? Yes — it shows what the shortcut cost him.',
                'This one: "They went to market every Tuesday." True. But does it teach us anything about shortcuts? No. It is just furniture. The author needed a day of the week.',
                'Sort the rest. Lesson pile on the left, furniture pile on the right. And you have to tell me why each time.',
                'Careful with this one: "Old Nan was already there, selling the last of her flour." Think about it before you decide.',
              ],
              do: [
                'Cut out or read aloud the six detail cards one at a time and hand them over.',
                'Argue back at least once, even when the child is right. Make them defend the placement.',
                'Leave both piles visible on the table for the practice beat.',
              ],
              studentDoes: ['Sorts six details into those that carry the message and those that do not, justifying each.'],
              checks: [
                {
                  ask: 'Why is that one just furniture?',
                  lookFor: 'Because the story would teach the same lesson without it.',
                  ifStuck: 'Apply the deletion test aloud: "Cross it out. Does the lesson still work? Then it was not carrying it."',
                },
                {
                  ask: 'Which single detail is doing the most work?',
                  lookFor: 'Usually the last line, or the split sack. Any defensible choice counts.',
                },
              ],
              tip: 'The deletion test — cross it out and see whether the message survives — is the most transferable thing in this lesson. Say it every time and it becomes theirs.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 14,
              say: [
                'On the page you will write the lesson in one sentence. One. Not a paragraph.',
                'Then you fill the organiser: the lesson at the top, and three key details underneath that prove it.',
                'The last question is the tough one. It gives you a second fable and asks whether it teaches the same lesson or a different one.',
                'Remember the test: a lesson has to work outside the story. If your sentence has a donkey in it, try again.',
              ],
              do: [
                'Insist on one sentence for the lesson. If they write three, ask which one they would keep.',
                'Let them copy details rather than reword them. Accurate copying is a real skill this year.',
              ],
              studentDoes: ['Completes the organiser and compares the fable with a second short text.'],
              checks: [
                {
                  ask: 'Read me your lesson sentence. Could it be advice for a person who has never met a donkey?',
                  lookFor: 'A portable statement with no story-specific characters in it.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Where Else Is This True?',
              minutes: 7,
              say: [
                'Last thing. Your lesson was something like: the quick way can cost more than the slow way saves.',
                'Tell me a time that has been true for you. Not a donkey. A real time.',
                'Rushing your homework and having to do it again. That is exactly it. That is the same lesson wearing different clothes.',
                'That is how you know you have really found the message — you can spot it happening off the page.',
              ],
              do: ['Offer one of your own examples first, briefly, so the child has a model that is not from a book.'],
              studentDoes: ['Applies the central message to a real situation from their own life.'],
              checks: [
                {
                  ask: 'Does the lesson still hold in your example?',
                  lookFor: 'A genuine match rather than any story about hurrying.',
                  ifStuck: 'Prompt with a scenario: "What about packing a bag in a rush before a trip?"',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g3-ela-u2-l2-ws',
            title: 'Bramble and the River Path: Finding the Lesson',
            style: 'storybook',
            prepNotes:
              'The six detail cards in section three work best cut out and sorted physically, so print that section on its own if you can. If you are short of time, sorting with a pencil by writing L or F beside each is fine and loses very little.',
            sections: [
              {
                id: 's1',
                title: 'The Fable',
                directions: 'Read the fable twice. The second time, read the last two lines slowly.',
                layout: 'full',
                items: [
                  'BRAMBLE AND THE RIVER PATH',
                  'Bramble the young donkey and Old Nan the mule carried sacks of flour to market every Tuesday. The road went the long way round the hill.',
                  '"Why do we go round?" Bramble asked. "The river path is half as far."',
                  '"The river path is stones," said Old Nan. "Stones and mud."',
                  'On Tuesday, Bramble took the river path anyway. He was over the first bend before Old Nan had even reached the crossroads.',
                  'Then a stone turned under his hoof. Bramble slid, and his sack split, and the flour poured into the water like smoke.',
                  'He walked into market at noon with an empty sack. Old Nan was already there, selling the last of her flour.',
                  '"You were faster," she said kindly. "I was earlier."',
                ],
                images: [
                  {
                    id: 'img-fork-two-paths',
                    slot: 'Story header — the two paths',
                    purpose:
                      'Makes the choice at the heart of the fable visible in a single glance, so the child can see that both routes were genuinely available and the decision was Bramble’s own — which is what makes the story a lesson rather than an accident.',
                    subject:
                      'a landscape seen from a low hill where a wide smooth dirt road curves gently to the right around the base of a green hill, while a narrow rocky path strewn with loose stones drops away to the left and follows the edge of a fast shallow river',
                    composition:
                      'the two routes clearly diverging from a single point in the lower centre of the frame, the smooth road obviously wider and easier, the stony river path obviously rougher and narrower, both routes visible all the way into the distance where a small market town sits on the horizon',
                    mustInclude: ['two clearly different routes starting from the same point', 'loose scattered stones visible on the river path', 'a smooth even surface on the longer road'],
                    mustAvoid: ['any animals or people on either path', 'signposts, arrows or lettering of any kind', 'the two paths looking equally easy'],
                    aspect: '16:9',
                    altText: 'A wide smooth road curving around a hill and a narrow stony path beside a river, both leading to a distant town',
                  },
                ],
              },
              {
                id: 's2',
                title: 'What Happened, and What It Teaches',
                directions:
                  'Write what happened in the story in two sentences. Then write the lesson in ONE sentence. Your lesson sentence is not allowed to contain the word donkey.',
                layout: 'column',
                writingLines: 6,
                items: ['What happened:', 'The lesson this fable teaches:'],
                images: [
                  {
                    id: 'img-spilled-flour',
                    slot: 'The moment on the stones',
                    purpose:
                      'Shows the cost of the shortcut at the exact moment it happens, which helps a child who can retell the plot but cannot yet feel why the author chose to make the sack split rather than simply making Bramble late.',
                    subject:
                      'a young grey donkey slipping sideways on loose wet stones at the edge of a river, a burst cloth sack sliding off his back with a plume of white flour spilling out into the shallow water',
                    composition:
                      'side-on view with the donkey slightly off balance and clearly mid-slip, the split sack and the pouring flour as the brightest part of the frame, the water carrying a pale swirl of flour downstream',
                    mustInclude: ['the sack visibly split open', 'flour spilling into the water, not onto the bank', 'loose stones under the donkey’s hooves'],
                    mustAvoid: ['an injured or distressed-looking animal', 'blood or anything frightening', 'any other character in the frame', 'text or lettering on the sack'],
                    aspect: '4:3',
                    altText: 'A young donkey slipping on stones as a split sack spills flour into a river',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Sort the Details',
                directions:
                  'Every detail below is true. Beside each one write L if it helps teach the lesson, or F if it is just furniture the story needed. Be ready to say why.',
                layout: 'column',
                items: [
                  'a. They carried flour to market every Tuesday.',
                  'b. Old Nan warned him that the river path was stones and mud.',
                  'c. Bramble was over the first bend before Nan reached the crossroads.',
                  'd. A stone turned under his hoof.',
                  'e. The flour poured into the water like smoke.',
                  'f. "You were faster," she said kindly. "I was earlier."',
                ],
              },
              {
                id: 's4',
                title: 'Build the Proof',
                directions:
                  'Write your lesson in the big box at the top. Then write three key details in the boxes underneath that show how the story teaches it.',
                layout: 'full',
                images: [
                  {
                    id: 'img-message-organiser',
                    slot: 'Central message organiser',
                    purpose:
                      'Forces the child to produce three separate pieces of support rather than one, which is where the "explain how it is conveyed" half of the standard actually lives. Three empty boxes are a much harder prompt to ignore than a verbal reminder.',
                    subject:
                      'an empty graphic organiser with one wide empty rounded rectangle across the top and three identical smaller empty rounded rectangles side by side beneath it, each connected to the top box by a short straight line',
                    composition:
                      'centred and symmetrical on plain white, the top box spanning the full width, the three lower boxes equal in size and evenly spaced with clear gaps between them, three clean connector lines fanning down from the top box to the centre of each lower box',
                    mustInclude: ['exactly three lower boxes, all identical in size', 'all four boxes completely empty', 'clear connector lines from the top box to each lower box'],
                    mustAvoid: ['any words, numbers or labels', 'ruled writing lines inside the boxes', 'shading or coloured fill', 'a fourth lower box'],
                    aspect: '4:3',
                    altText: 'An empty organiser with one wide box on top connected to three smaller boxes below',
                    style: 'diagram',
                  },
                  {
                    id: 'img-market-noon',
                    slot: 'Arriving at market',
                    purpose:
                      'The ending is where the fable delivers its lesson, and children often skim it. Seeing the empty sack next to the nearly sold-out stall makes the contrast in Old Nan’s final line concrete before the child has to explain it.',
                    subject:
                      'a small busy outdoor market at midday: an old brown mule standing beside a wooden stall with just two full flour sacks left on it, while a young grey donkey arrives at the edge of the scene carrying one limp and obviously empty sack',
                    composition:
                      'the mule and the nearly empty stall on the left in bright midday light, the young donkey entering from the right with his empty sack hanging flat and creased, a clear gap of ground between the two animals',
                    count: 2,
                    mustInclude: ['exactly two full flour sacks remaining on the stall', 'the young donkey’s sack visibly flat and empty', 'both animals in the same frame'],
                    mustAvoid: ['any text, price card or sign on the stall', 'a crowd that hides the stall', 'the young donkey carrying anything at all'],
                    aspect: '16:9',
                    altText: 'A mule beside a market stall with two flour sacks left, as a young donkey arrives with an empty sack',
                  },
                ],
              },
            ],
            answerKey: [
              'What happened: any accurate two-sentence recount ending with Bramble arriving last with nothing.',
              'The lesson: any portable version of "the quick way can cost you more than the slow way saves", or "listen to advice from someone with more experience". Reject anything containing a donkey.',
              'Sort the details: a = F (the day of the week is furniture); b = L (he was warned, so the choice is his); c = F, and this one is worth arguing about — it shows he really was faster, which some children will defend as L; d = L; e = L; f = L.',
              'Build the proof: three details from b, d, e and f. Detail c is acceptable if the child argues it well.',
              'Strong answers notice that Old Nan says her last line kindly, not smugly. The author is teaching, not gloating.',
            ],
          },
          assessment: {
            successCriteria: [
              'States the central message in one portable sentence with no story-specific characters in it.',
              'Names at least three key details that convey the message.',
              'Explains why a true detail can still fail to carry the lesson.',
            ],
            exitTicket:
              'Ask the child to finish this sentence out loud: "This story is teaching me that ___." If a donkey appears in the sentence, they are still summarising rather than generalising.',
            rubric: [
              { level: 'emerging', descriptor: 'Retells the plot when asked for the lesson, or offers a moral unconnected to the events.' },
              { level: 'developing', descriptor: 'States a reasonable lesson but supports it with the plot in general rather than with specific chosen details.' },
              { level: 'secure', descriptor: 'States a portable lesson and identifies which specific details build it, including why some true details do not.' },
            ],
          },
          differentiation: {
            support: [
              'Offer three candidate lessons on cards and have the child choose and defend one, rather than composing a sentence from nothing.',
              'Reduce the sort to four detail cards, keeping the two clearest of each kind.',
              'Read the fable aloud twice before any question is asked. Comprehension load, not reasoning, is usually what blocks this lesson.',
            ],
            extension: [
              'Rewrite the fable so it teaches the opposite lesson, changing as few details as possible. This is the hardest and best version of the task.',
              'Find a second fable with the same lesson and compare which details each author chose to carry it.',
              'Ask whether the fable would still teach its lesson if Old Nan never gave the warning, and defend the answer.',
            ],
            language: [
              'Most cultures have an equivalent proverb about haste. Ask for one from home and put it beside the fable — it is a genuine asset here, not a detour.',
              'Pre-teach "crossroads", "hoof" and "split" with quick sketches so the plot is never the obstacle.',
            ],
          },
          misconceptions: [
            {
              misconception: 'The central message is a summary of what happened.',
              looksLike: 'Asked for the lesson, the child says "a donkey took a shortcut and dropped his flour".',
              correction: 'Apply the portability test: could that sentence be advice for a person? Rewrite it until it could.',
            },
            {
              misconception: 'Every detail in a story is equally important because the author wrote it.',
              looksLike: 'The child lists the day of the week as a key detail supporting the message.',
              correction: 'Use the deletion test. Cross the detail out and reread. If the lesson survives untouched, the detail was furniture.',
            },
            {
              misconception: 'The moral is only real if the story states it in a final line.',
              looksLike: 'Faced with a story that does not spell out its lesson, the child says it has not got one.',
              correction: 'Cover Old Nan’s final line and ask whether the lesson is still there. It is — it was in the events all along.',
            },
          ],
          homeExtension: [
            'After a bedtime story, ask "what was that teaching?" rather than "what happened?" The two questions produce very different conversations.',
            'Ask a grandparent or older relative for a story with a lesson from their own childhood, and write the lesson in one sentence.',
            'When a film ends, race each other to state its lesson in a single sentence with no character names allowed.',
          ],
          teacherNotes:
            'The half of this standard that gets skipped everywhere is "explain how it is conveyed through key details". Naming a moral is easy and children get good at guessing plausible ones without reading carefully. The sorting activity is the part that actually assesses reading, so protect its time even if the writing gets shortened. Also expect a genuine argument about detail c — that argument is a better outcome than a tidy answer.',
        },
        {
          id: 'g3-ela-u2-l3',
          unitId: 'g3-ela-u2',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Same Lesson, Different Story',
          essentialQuestion: 'Can two stories from opposite sides of the world teach the same thing?',
          summary:
            'Two folktales from different cultures carrying a similar message are compared. The child finds the shared lesson and then notices how differently each culture dressed it.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.2', framework: 'CCSS-ELA', text: 'Recount stories, including fables, folktales and myths from diverse cultures; determine the central message, lesson or moral.' },
            { code: 'CCSS.ELA-LITERACY.RL.3.9', framework: 'CCSS-ELA', text: 'Compare and contrast the themes, settings and plots of stories.' },
          ],
          objectives: ['I can find the lesson shared by two stories.', 'I can describe how the two settings differ.'],
          vocabulary: [
            { term: 'folktale', definition: 'A story passed down by telling rather than by writing.' },
            { term: 'compare', definition: 'To say how two things are the same.' },
            { term: 'contrast', definition: 'To say how two things are different.' },
          ],
          materials: ['Two short folktales from different cultures with a similar moral', 'A Venn diagram sheet'],
          prep: ['Choose the pair carefully — the messages should match while the settings, animals and tone do not.'],
          script: [],
          worksheet: { id: 'g3-ela-u2-l3-ws', title: 'Two Tales, One Lesson', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['States a shared lesson in one sentence.', 'Names two genuine differences between the tales.'],
            exitTicket: 'Ask which telling they found more convincing, and what in the story made it so.',
          },
          differentiation: {
            support: ['Complete the shared-lesson circle together and let the child fill only the outer sections.'],
            extension: ['Add a third tale and find the lesson all three share.'],
          },
          misconceptions: [
            {
              misconception: 'Two stories with the same animals must have the same lesson.',
              looksLike: 'The child matches tales by character rather than by message.',
              correction: 'Cover the character names and compare only the endings.',
            },
          ],
          homeExtension: ['Ask at home for a family story with a lesson, and compare it with one from the lesson.'],
        },
        {
          id: 'g3-ela-u2-l4',
          unitId: 'g3-ela-u2',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Main Idea in a True Text',
          essentialQuestion: 'What is this whole article mostly about?',
          summary:
            'Transfers central-message reasoning into informational text. The child states the main idea in one sentence and lists the key details that support it, learning that the topic and the main idea are not the same thing.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.3.2', framework: 'CCSS-ELA', text: 'Determine the main idea of a text; recount the key details and explain how they support the main idea.' },
          ],
          objectives: ['I can state the main idea in a sentence.', 'I can list three details that support it.', 'I can tell the topic apart from the main idea.'],
          vocabulary: [
            { term: 'topic', definition: 'What the text is about, usually one or two words.', example: 'The topic is bats.' },
            { term: 'main idea', definition: 'What the text says about the topic, in a whole sentence.', example: 'Bats help farmers by eating insects at night.' },
          ],
          materials: ['A one-page informational article at Grade 3 level', 'The printed worksheet'],
          prep: ['Choose an article with a clear main idea that is NOT stated in the first sentence, so the child has to work.'],
          script: [],
          worksheet: { id: 'g3-ela-u2-l4-ws', title: 'Topic, Main Idea, Details', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Writes a main idea as a full sentence, not a topic word.', 'Supplies three supporting details.'],
            exitTicket: 'Ask for the topic in two words and the main idea in one sentence, and check they are different.',
          },
          differentiation: {
            support: ['Work paragraph by paragraph, naming each one in three words before combining.'],
            extension: ['Compare the main idea with the article’s title and judge whether the title is honest.'],
          },
          misconceptions: [
            {
              misconception: 'The main idea is the first sentence of the text.',
              looksLike: 'The child copies out the opening line whatever it says.',
              correction: 'Use an article whose first sentence is a hook rather than a summary, and let the strategy fail visibly.',
            },
          ],
          homeExtension: ['Read a news story for children together and each write the main idea in a sentence, then compare.'],
        },
        {
          id: 'g3-ela-u2-l5',
          unitId: 'g3-ela-u2',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Key Details That Do the Work',
          essentialQuestion: 'Which details are holding the idea up, and which are just interesting?',
          summary:
            'Sharpens the distinction between supporting detail and colourful extra in informational text, using the deletion test established with fables.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.3.2', framework: 'CCSS-ELA', text: 'Determine the main idea of a text; recount the key details and explain how they support the main idea.' },
          ],
          objectives: ['I can pick out details that support the main idea.', 'I can explain why an interesting detail is not always a key detail.'],
          vocabulary: [{ term: 'supporting detail', definition: 'A fact that helps prove the main idea.' }, { term: 'relevant', definition: 'Connected to the point being made.' }],
          materials: ['An informational article', 'Highlighters in two colours'],
          prep: ['Pre-mark your own copy so you know which details you consider borderline. The borderline ones make the discussion.'],
          script: [],
          worksheet: { id: 'g3-ela-u2-l5-ws', title: 'Which Details Matter?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Highlights supporting details in one colour and extras in another with reasonable accuracy.'],
            exitTicket: 'Ask for one detail they found interesting but decided was not a key detail, and why.',
          },
          differentiation: {
            support: ['Limit the text to two paragraphs.'],
            extension: ['Ask the child to write one new detail that would support the main idea, and one that would not.'],
          },
          misconceptions: [
            {
              misconception: 'The most surprising fact must be the most important one.',
              looksLike: 'The child selects the strangest fact regardless of whether it supports the main idea.',
              correction: 'Ask what point the fact proves. If the answer is "none, it is just cool", it is an extra.',
            },
          ],
          homeExtension: ['Watch a short documentary clip and name one fact that supported the point and one that was just interesting.'],
        },
      ],
    },

    /* ============================================================ UNIT 3 */
    {
      id: 'g3-ela-u3',
      gradeId: 'g3',
      subjectId: 'ela',
      sequence: 3,
      title: 'Reading to Learn: Text Features and How Ideas Connect',
      bigIdea:
        'A page of information is built, not written straight through — and once you can see how it is built, you can find what you need without reading every word.',
      description:
        'This is the unit the whole year is named for. Learners stop treating a nonfiction page as a wall of print and start using its parts: headings, captions, diagrams, bold words, sidebars, contents and index. They then look inside the prose itself and describe the logical connections between sentences and paragraphs — comparison, cause and effect, and sequence.',
      weeks: 6,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RI.3.5', framework: 'CCSS-ELA', text: 'Use text features and search tools such as key words, sidebars and hyperlinks to locate information relevant to a given topic efficiently.' },
        { code: 'CCSS.ELA-LITERACY.RI.3.7', framework: 'CCSS-ELA', text: 'Use information gained from illustrations such as maps and photographs, and from the words in a text, to demonstrate understanding of the text.' },
        { code: 'CCSS.ELA-LITERACY.RI.3.8', framework: 'CCSS-ELA', text: 'Describe the logical connection between particular sentences and paragraphs in a text, such as comparison, cause and effect, or first, second and third in a sequence.' },
        { code: 'CCSS.ELA-LITERACY.RI.3.3', framework: 'CCSS-ELA', text: 'Describe the relationship between a series of historical events, scientific ideas or steps in technical procedures, using language that pertains to time, sequence and cause and effect.' },
        { code: 'CCSS.ELA-LITERACY.RI.3.9', framework: 'CCSS-ELA', text: 'Compare and contrast the most important points and key details presented in two texts on the same topic.' },
      ],
      lessonTitles: [
        'What This Book Is For',
        'Where to Look: The Parts of a Nonfiction Page',
        'Because, So, and Then',
        'First, Next, Finally: Following Steps',
        'Two Books, One Topic',
      ],
      performanceTask:
        'The Ninety-Second Search: given a nonfiction book and three questions, the child finds each answer in under ninety seconds and then explains which text feature got them there — contents, index, heading, caption or diagram.',
      lessons: [
        {
          id: 'g3-ela-u3-l1',
          unitId: 'g3-ela-u3',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'What This Book Is For',
          essentialQuestion: 'How can I tell what a book will teach me before I read it?',
          summary:
            'Previewing a nonfiction book: cover, blurb, contents, headings and pictures, in ninety seconds, followed by a prediction of what the book will and will not cover.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.3.5', framework: 'CCSS-ELA', text: 'Use text features and search tools to locate information relevant to a given topic efficiently.' },
          ],
          objectives: ['I can preview a nonfiction book in under two minutes.', 'I can predict three things the book will tell me.'],
          vocabulary: [
            { term: 'preview', definition: 'A quick look before reading, to see what is coming.' },
            { term: 'contents', definition: 'The list at the front showing what is in each chapter and its page number.' },
          ],
          materials: ['Three nonfiction books on different topics', 'A timer'],
          prep: ['Choose books with genuinely different structures — one with chapters, one with double-page spreads, one heavily illustrated.'],
          script: [],
          worksheet: { id: 'g3-ela-u3-l1-ws', title: 'Ninety-Second Preview', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Uses the contents page rather than flicking randomly.', 'Predicts three topics the book covers.'],
            exitTicket: 'Ask for one question the book will probably NOT answer, and how they can tell.',
          },
          differentiation: {
            support: ['Preview together, reading the contents entries aloud one at a time.'],
            extension: ['Predict which chapter would answer a specific question, then check.'],
          },
          misconceptions: [
            {
              misconception: 'Nonfiction books must be read from the first page to the last.',
              looksLike: 'The child starts at page one when hunting for one specific fact.',
              correction: 'Race them: you use the index, they start at page one. Let the clock make the argument.',
            },
          ],
          homeExtension: ['At the library, choose a nonfiction book using only its contents page.'],
        },

        /* ---------------------------------------------------- L2 authored */
        {
          id: 'g3-ela-u3-l2',
          unitId: 'g3-ela-u3',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 2,
          status: 'authored',
          title: 'Where to Look: The Parts of a Nonfiction Page',
          essentialQuestion: 'Which part of this page will get me the answer fastest?',
          summary:
            'Names and uses the working parts of an informational page — heading, caption, labelled diagram, bold word, sidebar, index — and then puts them to work in a timed search. The point is not vocabulary for its own sake but speed: a reader who knows the parts finds the answer in seconds instead of minutes.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.3.5', framework: 'CCSS-ELA', text: 'Use text features and search tools such as key words, sidebars and hyperlinks to locate information relevant to a given topic efficiently.' },
            { code: 'CCSS.ELA-LITERACY.RI.3.7', framework: 'CCSS-ELA', text: 'Use information gained from illustrations such as maps and photographs, and from the words in a text, to demonstrate understanding of the text.' },
          ],
          objectives: [
            'I can name the parts of a nonfiction page: heading, caption, diagram, label, bold word, sidebar.',
            'I can say what each part is for.',
            'I can use the right part to find an answer quickly.',
          ],
          vocabulary: [
            { term: 'heading', definition: 'The title above a section that tells you what that part is about.', example: 'The heading said "What Beetles Eat", so that is where I looked.' },
            { term: 'caption', definition: 'The small line of writing under a picture that explains it.' },
            { term: 'diagram', definition: 'A drawing with labels that shows how something is put together.' },
            { term: 'label', definition: 'A word on a diagram pointing to one part of the picture.' },
            { term: 'sidebar', definition: 'A box beside the main writing holding an extra fact or story.' },
            { term: 'index', definition: 'The alphabetical list at the back that tells you which page a word is on.' },
          ],
          materials: [
            'The printed worksheet',
            'One real nonfiction book with an index — a library book about animals is ideal',
            'A timer or a phone stopwatch',
            'A pencil and a coloured pencil',
          ],
          prep: [
            'Find a nonfiction book with a genuine index. Some children’s books have only a contents page, which will not do for the final beat.',
            'Write three search questions on a scrap of paper whose answers are definitely in your chosen book. Check each one yourself first — nothing kills this lesson faster than a question the book cannot answer.',
            'Open the book to a page with a labelled diagram and leave it face up on the table.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Beat the Clock',
              minutes: 8,
              say: [
                'Race. You and me. Same book, same question, and the question is: what does a stag beetle eat?',
                'You start on page one and read. I am going to use the back of the book. Ready — go.',
                'Found it. Nine seconds.',
                'I did not read a single page. I went to the index at the back, found the word, and it told me the page number.',
                'That is not cheating. That is what the back of the book is for. Today we learn every part of the book that exists to save you time.',
              ],
              do: [
                'Genuinely race. Start the timer and let the child begin reading from page one.',
                'Use the index in front of them, slowly enough that they can see what you are doing.',
                'Stop the race the moment you find it — the point is the gap, not the humiliation.',
              ],
              studentDoes: ['Attempts the search by reading, then watches how the index was used.'],
              checks: [
                {
                  ask: 'What did I use that you did not?',
                  lookFor: 'The list at the back / the index.',
                  ifStuck: 'Show the index page and run your finger down the alphabetical list, saying the letters aloud.',
                },
              ],
              tip: 'Losing a race is a strong motivator at this age, so keep it warm and make the rematch at the end of the lesson genuinely winnable.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Every Part Has a Job',
              minutes: 12,
              say: [
                'Open the book anywhere. Look at how much of this page is not ordinary writing.',
                'This big bold line at the top is the heading. Its job is to tell you what this whole section is about, so you can skip the section if it is not what you need.',
                'This little line under the photo is the caption. Its job is to explain the picture. Captions are famous for containing a fact that appears nowhere else on the page.',
                'This drawing with words pointing at it is a diagram, and those words are labels. A diagram shows you how something is built — you cannot get that from a sentence.',
                'This word printed darker than the others is a bold word. It is bold because the author thinks it is important, and it usually turns up again in the glossary.',
                'This box off to the side is a sidebar. It holds an extra story or fact that would interrupt the main writing.',
                'And at the very back is the index. Alphabetical. Word, then page number. It is the fastest tool in the whole book.',
                'Six parts, six jobs. Nobody put them there for decoration.',
              ],
              do: [
                'Point to each feature in the real book as you name it. Physical pointing beats a printed list every time.',
                'Read one caption aloud and show that its fact is not in the body text.',
                'Flip to the index and read three entries aloud, showing the page numbers.',
              ],
              studentDoes: ['Locates each feature in the real book as it is named.'],
              checks: [
                {
                  ask: 'What is the job of a caption?',
                  lookFor: 'It explains the picture — and sometimes adds a new fact.',
                  ifStuck: 'Cover the caption and ask what the photo alone tells them. Then uncover it.',
                },
                {
                  ask: 'Why did the author make that one word bold?',
                  lookFor: 'Because it is important / it is a word the book is going to explain.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Which Part Would You Use?',
              minutes: 12,
              say: [
                'I am going to ask you questions, and you do not have to answer them. You just tell me which part of the book you would use.',
                'What are the parts of a beetle called? … Diagram with labels. Exactly — a sentence would take forever.',
                'On which page does the book talk about wings? … Index.',
                'What is happening in this photograph? … Caption.',
                'Is this whole section about food or about habitat? … Heading.',
                'Now a nasty one. What does the word "thorax" mean? … Glossary, or the bold word where it is explained. Both count.',
              ],
              do: [
                'Ask at least eight of these rapid-fire. Speed keeps it a game rather than a quiz.',
                'Occasionally accept two answers as correct and say why both work.',
                'Slip in one question that no feature can answer — such as an opinion question — and discuss it.',
              ],
              studentDoes: ['Matches each question to the text feature that would answer it fastest.'],
              checks: [
                {
                  ask: 'Why the index and not the contents page for that one?',
                  lookFor: 'Because I want one word, not a whole chapter.',
                  ifStuck: 'Compare the two side by side. Contents is by chapter and in book order; the index is by word and in alphabetical order.',
                },
              ],
              tip: 'Answering "which tool" rather than "what is the answer" is what makes this fast enough to build a habit. Resist the urge to make them find the actual facts here — that comes next.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 15,
              say: [
                'On the page there is a nonfiction page with all its parts, but the labels are missing. Write the name of each part in the empty boxes.',
                'Then there is a beetle diagram with five blank labels. You will need the word bank underneath.',
                'The last part asks which tool you would use for six different questions. Write the tool, not the answer.',
              ],
              do: [
                'Read the word bank aloud once before they start; recall is not what is being assessed here.',
                'Leave the real book open on the table as a reference. Copying from a real page is fine.',
              ],
              studentDoes: ['Labels the parts of a page, labels a diagram, and matches questions to search tools.'],
              checks: [
                {
                  ask: 'How did you know that box was the sidebar and not just another paragraph?',
                  lookFor: 'Because it is inside a box, off to the side, separate from the main writing.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'The Rematch',
              minutes: 8,
              say: [
                'Rematch. Same book, three questions, and this time you get the index and I have to read from page one.',
                'Question one: which page talks about where beetles live?',
                'Eleven seconds. You destroyed me.',
                'That is the whole lesson. You did not get faster at reading today. You got faster at knowing where to look.',
              ],
              do: ['Let the child win properly — do not stage it, just genuinely read from page one while they use the index.'],
              studentDoes: ['Uses the index to answer three search questions against the clock.'],
              checks: [
                {
                  ask: 'Which tool did you use for each one, and would another tool have been faster?',
                  lookFor: 'Accurate naming of the tool used and a reasonable comparison.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g3-ela-u3-l2-ws',
            title: 'The Parts of a Nonfiction Page',
            style: 'diagram',
            prepNotes:
              'The images on this page deliberately show a nonfiction page with no readable words in it — the writing is drawn as plain grey placeholder lines. That is intentional. The child is labelling the STRUCTURE, and real words would let them read their way out of the task instead of recognising the shape of each feature.',
            sections: [
              {
                id: 's1',
                title: 'Label the Page',
                directions:
                  'This is a page from a nonfiction book with the writing blurred out. Write the name of each part in the empty box next to it. Use the word bank: heading, caption, photograph, sidebar, diagram, page number.',
                layout: 'full',
                images: [
                  {
                    id: 'img-nonfiction-page-structure-6',
                    slot: 'Nonfiction page with six blank label boxes',
                    purpose:
                      'Assesses recognition of text features by their position and shape rather than by reading them, which is what a reader actually does when scanning a page at speed. Blank label boxes force the naming to come from the child.',
                    subject:
                      'a clean diagram of a single nonfiction book page seen flat on: a thick dark bar across the top standing for a heading, several blocks of evenly spaced plain grey horizontal lines standing for body writing, a rectangular photograph frame with a single short grey line beneath it, a boxed panel down the right-hand side containing its own short grey lines, a small simple line drawing of an insect with three thin leader lines pointing to parts of it, and a small circle in the bottom outer corner; six empty rounded label boxes sit in the outer margin, each joined to one of these features by a thin leader line',
                    count: 6,
                    composition:
                      'the page shown as a plain white rectangle with a clear border, features arranged in a realistic magazine-style layout, the six empty label boxes ranged down the left and right margins outside the page edge, each connected by a single thin straight leader line to exactly one feature, generous white space so nothing crowds',
                    mustInclude: [
                      'exactly six empty label boxes, one per feature',
                      'all writing represented as featureless grey horizontal lines with no readable letters',
                      'each leader line touching exactly one feature and never crossing another leader line',
                    ],
                    mustAvoid: [
                      'any readable words, letters or numbers anywhere in the image',
                      'labels already written inside the boxes',
                      'more than six label boxes',
                      'realistic photographic content inside the photo frame — a plain grey rectangle is correct',
                    ],
                    aspect: '3:4',
                    altText: 'A diagram of a nonfiction page layout with six empty label boxes pointing to its features',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Label the Diagram',
                directions:
                  'A diagram tells you the parts of a thing. Write one word in each empty label box. Use the word bank: head, thorax, abdomen, antenna, leg.',
                layout: 'full',
                images: [
                  {
                    id: 'img-beetle-diagram-5',
                    slot: 'Beetle diagram with five blank labels',
                    purpose:
                      'Gives the child the experience of using a diagram as a source of information rather than as decoration, and quietly teaches insect anatomy vocabulary they will meet again in science this year.',
                    subject:
                      'a clean scientific top-down diagram of a beetle with clearly separated body sections, drawn as a crisp outline, with five thin straight leader lines running outward to five empty rounded label boxes — one line touching the head, one the thorax, one the abdomen, one a single antenna and one a single leg',
                    count: 5,
                    composition:
                      'the beetle centred and symmetrical, viewed from directly above with all six legs and both antennae visible, the five leader lines fanning outward to five empty boxes arranged around the edge of the frame, no leader line crossing another',
                    mustInclude: [
                      'exactly five empty label boxes',
                      'the three body sections clearly separated by visible joins',
                      'each leader line ending precisely on the part it points to',
                    ],
                    mustAvoid: ['any words or letters inside the label boxes', 'a cartoon face or eyes with expression', 'a background, leaf or ground line', 'shading that hides the body joins'],
                    aspect: '4:3',
                    altText: 'A top-down beetle diagram with five empty label boxes joined by leader lines',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Which Tool Would You Use?',
                directions:
                  'For each question, write which part of the book would get you the answer fastest. Write the tool, not the answer. Choose from: contents, index, heading, caption, diagram, glossary.',
                layout: 'column',
                writingLines: 6,
                items: [
                  '1. Which page has the part about beetle wings?',
                  '2. What are the parts of a beetle called?',
                  '3. What does the word "larva" mean?',
                  '4. Is chapter four about food or about enemies?',
                  '5. What is happening in this photograph?',
                  '6. How many chapters are in this book?',
                ],
                images: [
                  {
                    id: 'img-index-structure',
                    slot: 'What an index looks like',
                    purpose:
                      'Many children have never noticed an index and cannot picture one when it is named. Showing its shape — two alphabetical columns with dot leaders and page numbers — makes the tool recognisable on a real shelf book without giving away any content.',
                    subject:
                      'a diagram of a book index page: two narrow vertical columns of short grey placeholder bars of varying length, each bar followed by a row of small dots trailing to a short grey stub at the right-hand margin of its column, with slightly wider gaps separating groups of entries as an alphabet block would',
                    composition:
                      'a plain white page rectangle with a clear border, two even columns separated by a clear vertical gutter, entries evenly spaced, dot leaders neatly aligned, a few entries indented one step to suggest sub-entries',
                    mustInclude: ['two columns of entries', 'dot leaders running from each entry to a short stub at the right', 'a few indented sub-entries'],
                    mustAvoid: ['any readable letters or digits', 'illustrations or photographs on the page', 'a heading bar at the top'],
                    aspect: '3:4',
                    altText: 'A diagram of a two-column book index page with dot leaders and no readable words',
                  },
                  {
                    id: 'img-caption-photo-pair',
                    slot: 'A photograph and its caption',
                    purpose:
                      'Isolates the photograph-and-caption pairing so the child can see that the caption is physically attached to the picture and separate from the body text, which is the visual cue they will use to find it at speed.',
                    subject:
                      'a diagram of a single framed photograph shown as a plain grey rectangle with a narrow horizontal bar directly beneath it containing two short grey placeholder lines, and a separate block of longer grey placeholder lines set clearly apart below',
                    composition:
                      'the photograph frame occupying the upper two thirds, the caption bar tucked immediately under it with almost no gap, then an obvious white gap before the separate body-text block, making the attachment of caption to photo unmistakable',
                    mustInclude: ['the caption bar touching or nearly touching the photo frame', 'a clear white gap between the caption and the body-text block'],
                    mustAvoid: ['any readable words', 'a realistic photographic image inside the frame', 'the caption placed above the photograph'],
                    aspect: '1:1',
                    altText: 'A diagram of a photograph frame with a caption bar directly beneath it, separate from a block of body text',
                  },
                ],
              },
            ],
            answerKey: [
              'Label the page: heading (top bar), photograph (framed rectangle), caption (short line under the photo), sidebar (boxed panel at the side), diagram (the small labelled insect drawing), page number (circle in the outer corner).',
              'Beetle diagram: head, thorax, abdomen, antenna, leg. Accept labels in any order provided each points to the right part.',
              'Which tool: 1 index, 2 diagram, 3 glossary, 4 heading (or contents), 5 caption, 6 contents.',
              'For question 4 accept either heading or contents and ask which would be faster — contents wins if the book is closed, heading wins if it is open.',
            ],
          },
          assessment: {
            successCriteria: [
              'Names six text features and states the job of each.',
              'Chooses the fastest search tool for a given question.',
              'Locates a fact in a real nonfiction book using the index rather than reading sequentially.',
            ],
            exitTicket:
              'Hand the child a nonfiction book and ask them to find any fact about a specific word within thirty seconds. Watch what they reach for. A hand going to page one means the habit has not formed yet.',
            rubric: [
              { level: 'emerging', descriptor: 'Recognises headings and pictures but reads sequentially when searching, and cannot distinguish contents from index.' },
              { level: 'developing', descriptor: 'Names the features correctly and uses the index when reminded, but defaults to flicking through pages under time pressure.' },
              { level: 'secure', descriptor: 'Selects the appropriate tool unprompted, explains why it is the fastest, and uses a diagram or caption as a genuine source of information.' },
            ],
          },
          differentiation: {
            support: [
              'Reduce the labelling to three features — heading, caption and diagram — and add the others in a later session.',
              'Give the word bank as cut-out cards to place rather than words to write, which removes spelling from a task that is not about spelling.',
              'Use a book the child already loves. Familiar content makes the structure easier to see.',
            ],
            extension: [
              'Ask the child to design the page for a topic of their choice, deciding where a sidebar or diagram would genuinely help a reader.',
              'Compare an index with a search box on a website and describe what each does the same and differently.',
              'Find a caption in a real book that contains a fact appearing nowhere else on the page.',
            ],
            language: [
              'These six words are academic vocabulary that transfers into every subject, so it is worth putting them on a wall card and keeping them up all year.',
              'Several of the terms — index, diagram, sidebar — have close cognates in Romance languages. Ask whether the word looks familiar before defining it.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Captions and sidebars are optional extras that can be skipped.',
              looksLike: 'The child reads only the body text and misses a fact that appears solely in a caption.',
              correction: 'Set a question whose answer is only in a caption. One experience of missing it is worth ten reminders.',
            },
            {
              misconception: 'The contents page and the index are the same thing.',
              looksLike: 'The child turns to the front when hunting for a single word.',
              correction: 'Put them side by side. Contents is in book order and lists chapters; the index is alphabetical and lists words.',
            },
            {
              misconception: 'A diagram is just a picture, so there is nothing to read.',
              looksLike: 'The child glances at a labelled diagram and moves on without reading a single label.',
              correction: 'Ask a question that only the diagram answers, such as which part joins to which, and let them discover the labels are the content.',
            },
          ],
          homeExtension: [
            'Use the index of a cookery book to find a recipe with a particular ingredient, and time it.',
            'Look at a newspaper or a magazine and count how many different text features appear on one spread.',
            'On a nature walk, look at an information board and identify its heading, caption and diagram.',
          ],
          teacherNotes:
            'This lesson looks like vocabulary and is really about speed and stamina. A Grade 3 reader who searches sequentially will avoid nonfiction for years because it feels like hard work; the same child with an index habit will happily research. If you only have time for part of the lesson, keep the two races and cut the labelling — the races are what change behaviour.',
        },
        {
          id: 'g3-ela-u3-l3',
          unitId: 'g3-ela-u3',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Because, So, and Then',
          essentialQuestion: 'How are these two sentences connected to each other?',
          summary:
            'The logical connection between sentences and paragraphs is named explicitly: comparison, cause and effect, or sequence. The child annotates the joins in a short informational text and identifies the signal words that mark them.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.3.8', framework: 'CCSS-ELA', text: 'Describe the logical connection between particular sentences and paragraphs in a text, such as comparison, cause and effect, or first, second and third in a sequence.' },
          ],
          objectives: [
            'I can say whether two sentences compare, cause or sequence.',
            'I can find the signal word that shows the connection.',
            'I can explain how one paragraph sets up the next.',
          ],
          vocabulary: [
            { term: 'connection', definition: 'The way two sentences or paragraphs are joined by meaning.' },
            { term: 'signal word', definition: 'A word that shows the connection, like because, however, first or so.' },
            { term: 'comparison', definition: 'Showing how two things are alike or different.' },
          ],
          materials: ['A short informational text with varied connections', 'Three colours of pencil', 'The printed worksheet'],
          prep: ['Mark up your own copy first, colour-coding cause, comparison and sequence. You will find some joins are genuinely ambiguous — those make the best discussion.'],
          script: [],
          worksheet: { id: 'g3-ela-u3-l3-ws', title: 'How These Sentences Join Up', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Correctly names the connection between four pairs of sentences.', 'Identifies at least three signal words.'],
            exitTicket: 'Give two sentences and ask what kind of join sits between them, and which word proves it.',
          },
          differentiation: {
            support: ['Provide the three connection types on cards to place beside each pair rather than to write.'],
            extension: ['Find a connection with no signal word at all and explain how you can still tell.'],
          },
          misconceptions: [
            {
              misconception: 'Sentences that sit next to each other are automatically in a sequence.',
              looksLike: 'The child labels every join "first, second, third" regardless of meaning.',
              correction: 'Try swapping the two sentences over. If the meaning survives the swap, it was never a sequence.',
            },
          ],
          homeExtension: ['Listen for "because" and "so" in conversation this evening and count how many you hear at dinner.'],
        },
        {
          id: 'g3-ela-u3-l4',
          unitId: 'g3-ela-u3',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'First, Next, Finally: Following Steps',
          essentialQuestion: 'How do I read instructions so that the thing actually works?',
          summary:
            'Sequential and procedural text. The child follows a real set of instructions exactly as written, discovers where the writing is ambiguous, and then rewrites one step so it cannot be misread.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.3.3', framework: 'CCSS-ELA', text: 'Describe the relationship between a series of historical events, scientific ideas or steps in technical procedures, using language that pertains to time, sequence and cause and effect.' },
          ],
          objectives: ['I can follow written steps in order.', 'I can spot a step that is not clear enough.', 'I can use time and order words when I write steps.'],
          vocabulary: [
            { term: 'procedure', definition: 'A set of steps for doing something in order.' },
            { term: 'step', definition: 'One instruction in a procedure.' },
          ],
          materials: ['A simple written procedure — folding a paper aeroplane or making a jam sandwich', 'The materials the procedure needs'],
          prep: ['Choose a procedure you can genuinely do at the table, and follow it yourself once, wilfully literally, to find the ambiguous steps.'],
          script: [],
          worksheet: { id: 'g3-ela-u3-l4-ws', title: 'Following the Steps', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Follows a five-step procedure in order without skipping.', 'Rewrites one unclear step more precisely.'],
            exitTicket: 'Ask which step was easiest to get wrong, and why.',
          },
          differentiation: {
            support: ['Read one step at a time and complete it before revealing the next.'],
            extension: ['Write a procedure for someone else to follow literally, then watch them do it exactly as written.'],
          },
          misconceptions: [
            {
              misconception: 'You can skim instructions and work the rest out from the picture.',
              looksLike: 'The child glances at step three, guesses, and ends up with a fold in the wrong place.',
              correction: 'Follow their skimmed version exactly and let the result speak. Then reread the step together.',
            },
          ],
          homeExtension: ['Read a recipe aloud while an adult cooks it exactly as written, and note any step that needed guessing.'],
        },
        {
          id: 'g3-ela-u3-l5',
          unitId: 'g3-ela-u3',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Two Books, One Topic',
          essentialQuestion: 'Why do two books about the same thing not say the same thing?',
          summary:
            'Two texts on one topic are compared for their most important points. The child discovers that authors choose what to include, which is the first step toward reading critically.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.3.9', framework: 'CCSS-ELA', text: 'Compare and contrast the most important points and key details presented in two texts on the same topic.' },
          ],
          objectives: ['I can find a fact that appears in both texts.', 'I can find a fact that appears in only one.', 'I can say which text was more useful for a particular question.'],
          vocabulary: [{ term: 'source', definition: 'A place where information comes from.' }, { term: 'in common', definition: 'Shared by both.' }],
          materials: ['Two short texts on the same topic at different reading levels', 'A comparison chart'],
          prep: ['Pick two texts that genuinely disagree about an emphasis, not just two that overlap.'],
          script: [],
          worksheet: { id: 'g3-ela-u3-l5-ws', title: 'Same Topic, Two Books', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Lists two shared points and two unique points.', 'Judges which text answers a given question better.'],
            exitTicket: 'Ask which of the two texts they would hand to a friend who knew nothing about the topic, and why.',
          },
          differentiation: {
            support: ['Compare only the first paragraph of each text.'],
            extension: ['Find a point where the two texts disagree and work out how a reader could settle it.'],
          },
          misconceptions: [
            {
              misconception: 'If a fact appears in a book it must be the whole truth about the topic.',
              looksLike: 'The child is confused rather than curious when the two texts differ.',
              correction: 'Name the idea plainly: authors choose. Ask what each author seems most interested in.',
            },
          ],
          homeExtension: ['Look up the same animal in two different books or sites and note one thing only one of them mentions.'],
        },
      ],
    },

    /* ============================================================ UNIT 4 */
    {
      id: 'g3-ela-u4',
      gradeId: 'g3',
      subjectId: 'ela',
      sequence: 4,
      title: 'Word Detectives: Long Words and What They Mean',
      bigIdea:
        'A long word is not one hard thing; it is several easy things stuck together, and the parts carry meaning as well as sound.',
      description:
        'Grade 3 is the year words get long. This unit gives learners a repeatable attack on multisyllable words — find the vowels, split into chunks, read the chunks, blend, check it sounds like a real word — and then shows that the same chunks often carry meaning. Prefixes, roots and common Latin suffixes turn decoding into vocabulary, and context clues and glossaries pick up whatever is left.',
      weeks: 6,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RF.3.3.A', framework: 'CCSS-ELA', text: 'Identify and know the meaning of the most common prefixes and derivational suffixes.' },
        { code: 'CCSS.ELA-LITERACY.RF.3.3.B', framework: 'CCSS-ELA', text: 'Decode words with common Latin suffixes.' },
        { code: 'CCSS.ELA-LITERACY.RF.3.3.C', framework: 'CCSS-ELA', text: 'Decode multisyllable words.' },
        { code: 'CCSS.ELA-LITERACY.RF.3.4.C', framework: 'CCSS-ELA', text: 'Use context to confirm or self-correct word recognition and understanding, rereading as necessary.' },
        { code: 'CCSS.ELA-LITERACY.L.3.4.B', framework: 'CCSS-ELA', text: 'Determine the meaning of the new word formed when a known affix is added to a known word.' },
        { code: 'CCSS.ELA-LITERACY.L.3.4.D', framework: 'CCSS-ELA', text: 'Use glossaries or beginning dictionaries, both print and digital, to determine or clarify the precise meaning of key words and phrases.' },
      ],
      lessonTitles: [
        'Chop It Into Chunks',
        'The Latin Suffix Crew',
        'Prefixes Change the Meaning',
        'Clues in the Sentence',
        'Roots, Glossaries and Dictionaries',
      ],
      performanceTask:
        'The Long Word Clinic: given ten unfamiliar multisyllable words from a science text, the child chunks each one aloud, reads it, and predicts its meaning from its parts — then checks two of the predictions in a glossary.',
      lessons: [
        {
          id: 'g3-ela-u4-l1',
          unitId: 'g3-ela-u4',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Chop It Into Chunks',
          essentialQuestion: 'What do I do when the word is enormous?',
          summary:
            'A repeatable syllable-division routine: spot the vowels, split between them, read each chunk, blend, then flex the vowel sound if it does not sound like a real word. The flexing step is the one that is usually missing.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.3.3.C', framework: 'CCSS-ELA', text: 'Decode multisyllable words.' },
            { code: 'CCSS.ELA-LITERACY.RF.3.4.C', framework: 'CCSS-ELA', text: 'Use context to confirm or self-correct word recognition, rereading as necessary.' },
          ],
          objectives: [
            'I can find the vowels in a long word.',
            'I can split a word into syllables and read each chunk.',
            'I can try the other vowel sound when the word does not sound right.',
          ],
          vocabulary: [
            { term: 'syllable', definition: 'A chunk of a word with one vowel sound in it.', example: 'Fan-tas-tic has three syllables.' },
            { term: 'vowel', definition: 'The letters a, e, i, o, u and sometimes y.' },
            { term: 'flex', definition: 'To try the other sound a vowel can make.', example: 'If the short sound is wrong, flex it to the long one.' },
          ],
          materials: ['A list of twelve multisyllable words on card', 'A pencil for marking splits', 'Highlighter'],
          prep: ['Write the twelve words large. Include at least three the child will find genuinely hard, such as "temperature" or "celebration".'],
          script: [],
          worksheet: { id: 'g3-ela-u4-l1-ws', title: 'Chop, Read, Blend', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Splits a four-syllable word accurately.', 'Self-corrects a vowel sound without being told.'],
            exitTicket: 'Give one unfamiliar four-syllable word and watch the strategy, not the answer.',
          },
          differentiation: {
            support: ['Start with two-syllable compound words where the split is obvious.'],
            extension: ['Try five-syllable science words and count the syllables by chin drops.'],
          },
          misconceptions: [
            {
              misconception: 'A long word must be sounded out letter by letter.',
              looksLike: 'The child grinds through "b-u-t-t-e-r-f-l-y" and loses the word before reaching the end.',
              correction: 'Cover all but the first chunk with a finger. Reveal one chunk at a time.',
            },
          ],
          homeExtension: ['Find the longest word on a cereal box and chop it into chunks together.'],
        },
        {
          id: 'g3-ela-u4-l2',
          unitId: 'g3-ela-u4',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'The Latin Suffix Crew',
          essentialQuestion: 'What happens at the end of a long word?',
          summary:
            'Common Latin suffixes — -tion, -sion, -able, -ible, -ment, -ous — behave predictably in both sound and meaning. Learning them as single units removes the hardest part of most long words.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.3.3.B', framework: 'CCSS-ELA', text: 'Decode words with common Latin suffixes.' },
            { code: 'CCSS.ELA-LITERACY.L.3.4.B', framework: 'CCSS-ELA', text: 'Determine the meaning of the new word formed when a known affix is added to a known word.' },
          ],
          objectives: ['I can read the suffixes -tion, -able, -ment and -ous instantly.', 'I can say what the suffix does to the meaning.'],
          vocabulary: [
            { term: 'suffix', definition: 'A word part added to the end of a word that changes its job or meaning.' },
            { term: 'base word', definition: 'The word left when you take the prefix and suffix off.' },
          ],
          materials: ['Suffix cards', 'Base word cards', 'The printed worksheet'],
          prep: ['Make the suffix cards a different colour from the base word cards so the join is visible at a glance.'],
          script: [],
          worksheet: { id: 'g3-ela-u4-l2-ws', title: 'Suffix Builders', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Reads six suffixed words accurately.', 'Explains the meaning change for two of them.'],
            exitTicket: 'Ask what "enjoyable" means and which two parts it is built from.',
          },
          differentiation: {
            support: ['Work with -tion alone until it is automatic.'],
            extension: ['Collect ten -tion words from a science book and find the base word inside each.'],
          },
          misconceptions: [
            {
              misconception: 'The letters t-i-o-n are sounded out separately.',
              looksLike: 'The child reads "sta-ti-on" as three plodding chunks.',
              correction: 'Teach -tion as one card, one sound, never split. It is a unit.',
            },
          ],
          homeExtension: ['Hunt for -tion words on signs and packaging and read each one at speed.'],
        },
        {
          id: 'g3-ela-u4-l3',
          unitId: 'g3-ela-u4',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Prefixes Change the Meaning',
          essentialQuestion: 'How can three letters at the front flip a word around?',
          summary:
            'un-, re-, pre-, dis- and mis- are learned as meaning units. The child predicts the meaning of unfamiliar words from a known base plus a known prefix.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.3.3.A', framework: 'CCSS-ELA', text: 'Identify and know the meaning of the most common prefixes and derivational suffixes.' },
            { code: 'CCSS.ELA-LITERACY.L.3.4.B', framework: 'CCSS-ELA', text: 'Determine the meaning of the new word formed when a known affix is added to a known word.' },
          ],
          objectives: ['I know what un-, re-, pre-, dis- and mis- mean.', 'I can work out a new word from its prefix and base.'],
          vocabulary: [
            { term: 'prefix', definition: 'A word part added to the front of a word that changes its meaning.' },
            { term: 'opposite', definition: 'As different as possible; the reverse.' },
          ],
          materials: ['Prefix cards', 'Base word cards', 'The printed worksheet'],
          prep: ['Include one trap word where the letters look like a prefix but are not — "uncle" is the classic.'],
          script: [],
          worksheet: { id: 'g3-ela-u4-l3-ws', title: 'Front of the Word', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Defines four common prefixes.', 'Predicts the meaning of an unfamiliar prefixed word.'],
            exitTicket: 'Ask what "misjudge" means and how they know.',
          },
          differentiation: {
            support: ['Use only un- and re- and build many examples of each.'],
            extension: ['Discover why "uncle" and "reason" are not prefixed words, and how you can tell.'],
          },
          misconceptions: [
            {
              misconception: 'Any word starting with un- has been made negative.',
              looksLike: 'The child claims "under" means "not der".',
              correction: 'Apply the test: take the prefix off. If a real word is not left behind, it was never a prefix.',
            },
          ],
          homeExtension: ['Find three un- words in a book tonight and check the base word test on each.'],
        },
        {
          id: 'g3-ela-u4-l4',
          unitId: 'g3-ela-u4',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Clues in the Sentence',
          essentialQuestion: 'Can the sentence around a word tell me what it means?',
          summary:
            'Context clue types — definition, example, contrast and general sense — are named and hunted. The child makes a prediction, then checks it, and learns that a wrong prediction is normal rather than a failure.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.L.3.4.A', framework: 'CCSS-ELA', text: 'Use sentence-level context as a clue to the meaning of a word or phrase.' },
            { code: 'CCSS.ELA-LITERACY.RF.3.4.C', framework: 'CCSS-ELA', text: 'Use context to confirm or self-correct word recognition and understanding, rereading as necessary.' },
          ],
          objectives: ['I can guess a word meaning from the sentence.', 'I can name which clue helped me.', 'I can check my guess and change it.'],
          vocabulary: [
            { term: 'context', definition: 'The words and sentences around a word.' },
            { term: 'clue', definition: 'A hint that helps you work something out.' },
          ],
          materials: ['Six sentences containing invented or rare words', 'The printed worksheet'],
          prep: ['Invent two nonsense words for the first examples. Nonsense words guarantee the child uses context rather than memory.'],
          script: [],
          worksheet: { id: 'g3-ela-u4-l4-ws', title: 'What Does It Mean Here?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Makes a reasonable meaning prediction for four unfamiliar words.', 'Names the clue used for at least two.'],
            exitTicket: 'Give one sentence with an unknown word and ask for a meaning plus the clue that produced it.',
          },
          differentiation: {
            support: ['Offer three possible meanings to choose between rather than an open prediction.'],
            extension: ['Write a sentence that gives a strong clue to a word you have just invented.'],
          },
          misconceptions: [
            {
              misconception: 'If you do not know a word you should skip it.',
              looksLike: 'The child reads straight past an unknown word without pausing.',
              correction: 'Stop and ask what the sentence would mean if the word were removed. The gap makes the need visible.',
            },
          ],
          homeExtension: ['When an unknown word comes up in reading, guess first from the sentence and only then look it up.'],
        },
        {
          id: 'g3-ela-u4-l5',
          unitId: 'g3-ela-u4',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Roots, Glossaries and Dictionaries',
          essentialQuestion: 'Where do I go when the clues run out?',
          summary:
            'Known roots are used as clues to related words, and the child practises finding a precise meaning in a glossary and a beginning dictionary, including choosing between two numbered senses.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.L.3.4.C', framework: 'CCSS-ELA', text: 'Use a known root word as a clue to the meaning of an unknown word with the same root.' },
            { code: 'CCSS.ELA-LITERACY.L.3.4.D', framework: 'CCSS-ELA', text: 'Use glossaries or beginning dictionaries, both print and digital, to determine or clarify the precise meaning of key words and phrases.' },
          ],
          objectives: ['I can find a word in a glossary.', 'I can choose the meaning that fits my sentence.', 'I can use a root I know to guess a word I do not.'],
          vocabulary: [
            { term: 'root', definition: 'The core part of a word that carries its main meaning.', example: 'Port means carry, so transport and portable are related.' },
            { term: 'glossary', definition: 'A small dictionary at the back of a book for that book’s special words.' },
          ],
          materials: ['A nonfiction book with a glossary', 'A beginning dictionary', 'The printed worksheet'],
          prep: ['Choose two words with more than one dictionary sense, so the choosing step is real.'],
          script: [],
          worksheet: { id: 'g3-ela-u4-l5-ws', title: 'Looking It Up Properly', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Locates three words in a glossary.', 'Chooses the correct sense of a word with two meanings.'],
            exitTicket: 'Ask for the meaning of "bank" in a given sentence and how they decided between the senses.',
          },
          differentiation: {
            support: ['Practise alphabetical order to the second letter before using the glossary.'],
            extension: ['Collect four words sharing one root and describe the meaning they share.'],
          },
          misconceptions: [
            {
              misconception: 'The first definition in the dictionary is the right one.',
              looksLike: 'The child reads sense one aloud even when it makes nonsense of the sentence.',
              correction: 'Substitute each sense into the sentence and read it aloud. The wrong one sounds wrong.',
            },
          ],
          homeExtension: ['Look up one word a day this week and use it in conversation before bedtime.'],
        },
      ],
    },

    /* ============================================================ UNIT 5 */
    {
      id: 'g3-ela-u5',
      gradeId: 'g3',
      subjectId: 'ela',
      sequence: 5,
      title: 'Point of View: Mine, the Narrator’s, the Author’s',
      bigIdea:
        'Somebody is always telling you the story, and what you think about it does not have to match what they think.',
      description:
        'Learners separate their own point of view from the narrator’s and from the author’s. In stories this means noticing who is speaking and whose side the telling takes; in informational text it means noticing that an author has chosen what to include and what to call it. The unit ends by comparing two texts by different authors on one topic.',
      weeks: 4,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RL.3.6', framework: 'CCSS-ELA', text: 'Distinguish their own point of view from that of the narrator or those of the characters.' },
        { code: 'CCSS.ELA-LITERACY.RI.3.6', framework: 'CCSS-ELA', text: 'Distinguish their own point of view from that of the author of a text.' },
        { code: 'CCSS.ELA-LITERACY.RL.3.9', framework: 'CCSS-ELA', text: 'Compare and contrast the themes, settings and plots of stories written by the same author about the same or similar characters.' },
        { code: 'CCSS.ELA-LITERACY.RI.3.9', framework: 'CCSS-ELA', text: 'Compare and contrast the most important points and key details presented in two texts on the same topic.' },
      ],
      lessonTitles: [
        'Whose Voice Is Telling This?',
        'I Disagree with the Narrator',
        'What Does the Author Want Me to Think?',
        'Same Characters, New Adventure',
        'Two Authors, Two Opinions',
      ],
      performanceTask:
        'The Other Side: the child rewrites one scene of a familiar story from a different character’s point of view, then writes two sentences explaining what changed and what stayed the same.',
      lessons: [
        {
          id: 'g3-ela-u5-l1',
          unitId: 'g3-ela-u5',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Whose Voice Is Telling This?',
          essentialQuestion: 'Who is talking to me when I read a story?',
          summary:
            'Introduces the narrator as a distinct presence. The child identifies first-person and third-person telling by the pronouns and works out how much the narrator can possibly know.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.6', framework: 'CCSS-ELA', text: 'Distinguish their own point of view from that of the narrator or those of the characters.' },
          ],
          objectives: ['I can tell whether a story is told by a character or by an outside voice.', 'I can find the pronouns that prove it.'],
          vocabulary: [
            { term: 'narrator', definition: 'The voice telling the story.' },
            { term: 'first person', definition: 'A story told by a character using I and we.' },
            { term: 'third person', definition: 'A story told by an outside voice using he, she and they.' },
          ],
          materials: ['Two short passages, one first person and one third person', 'Highlighters'],
          prep: ['Pick two passages describing similar events, so only the telling differs.'],
          script: [],
          worksheet: { id: 'g3-ela-u5-l1-ws', title: 'Who Is Telling This?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Identifies first and third person correctly.', 'Cites the pronouns as evidence.'],
            exitTicket: 'Read two sentences aloud and ask who is telling each one.',
          },
          differentiation: {
            support: ['Highlight every pronoun first, then decide.'],
            extension: ['Rewrite a third-person paragraph into first person and notice what has to be cut.'],
          },
          misconceptions: [
            {
              misconception: 'The narrator is the author.',
              looksLike: 'The child says the writer got eaten by the dragon.',
              correction: 'Name the difference: the author invented the voice; the voice is a character in the telling.',
            },
          ],
          homeExtension: ['Retell what happened at school today in third person, as though narrating a story about yourself.'],
        },
        {
          id: 'g3-ela-u5-l2',
          unitId: 'g3-ela-u5',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'I Disagree with the Narrator',
          essentialQuestion: 'Do I have to agree with the person telling the story?',
          summary:
            'A narrator with a strong opinion is put in front of the child, who must state the narrator’s view, state their own, and explain the difference without pretending it away.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.6', framework: 'CCSS-ELA', text: 'Distinguish their own point of view from that of the narrator or those of the characters.' },
          ],
          objectives: ['I can say what the narrator thinks.', 'I can say what I think.', 'I can explain how they differ.'],
          vocabulary: [
            { term: 'point of view', definition: 'What someone thinks and feels about what is happening.' },
            { term: 'disagree', definition: 'To think something different from someone else.' },
          ],
          materials: ['A passage with an opinionated narrator', 'A two-column comparison sheet'],
          prep: ['Choose a narrator whose opinion most children will resist — a character who thinks homework is wonderful works well.'],
          script: [],
          worksheet: { id: 'g3-ela-u5-l2-ws', title: 'Narrator Says, I Say', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['States both viewpoints separately and accurately.'],
            exitTicket: 'Ask what the narrator thinks and then what the child thinks, and check the two answers actually differ.',
          },
          differentiation: {
            support: ['Use sentence frames: "The narrator thinks ___. I think ___."'],
            extension: ['Find the words the narrator uses that reveal the opinion rather than the fact.'],
          },
          misconceptions: [
            {
              misconception: 'Whatever is written in a story is what you are supposed to think.',
              looksLike: 'The child repeats the narrator’s opinion when asked for their own.',
              correction: 'Ask the question with the book closed. Their own view arrives more easily without the page in front of them.',
            },
          ],
          homeExtension: ['After a bedtime story, say whether you agree with how the main character behaved.'],
        },
        {
          id: 'g3-ela-u5-l3',
          unitId: 'g3-ela-u5',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'What Does the Author Want Me to Think?',
          essentialQuestion: 'Is this information, or is somebody trying to persuade me?',
          summary:
            'Authors of informational text have views too. The child hunts for opinion words inside apparently factual writing and distinguishes what the author thinks from what the child thinks.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.3.6', framework: 'CCSS-ELA', text: 'Distinguish their own point of view from that of the author of a text.' },
          ],
          objectives: ['I can find words that show the author’s opinion.', 'I can separate a fact from an opinion in the same paragraph.'],
          vocabulary: [
            { term: 'fact', definition: 'Something that can be checked and proved.' },
            { term: 'opinion', definition: 'What someone thinks, which others might disagree with.' },
            { term: 'persuade', definition: 'To try to make someone agree with you.' },
          ],
          materials: ['A short opinionated informational text such as a piece about zoos', 'Two highlighter colours'],
          prep: ['Choose a text with a genuine slant. A neutral encyclopaedia entry gives the child nothing to find.'],
          script: [],
          worksheet: { id: 'g3-ela-u5-l3-ws', title: 'Fact, Opinion, and Me', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Sorts four statements into fact and opinion.', 'States the author’s view and their own separately.'],
            exitTicket: 'Ask whether the author liked the thing they were writing about, and which word proves it.',
          },
          differentiation: {
            support: ['Use the check test on each sentence: could you prove this with a measurement?'],
            extension: ['Rewrite one opinion sentence so it becomes neutral, and discuss what was lost.'],
          },
          misconceptions: [
            {
              misconception: 'Anything printed in a book is a fact.',
              looksLike: 'The child labels "zoos are wonderful places" as a fact because it is in print.',
              correction: 'Ask whether anyone could disagree without being wrong. If yes, it is an opinion.',
            },
          ],
          homeExtension: ['Find an advertisement and identify one fact and one opinion in it.'],
        },
        {
          id: 'g3-ela-u5-l4',
          unitId: 'g3-ela-u5',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Same Characters, New Adventure',
          essentialQuestion: 'What stays the same when an author writes a second book about the same character?',
          summary:
            'Two books from a series are compared for theme, setting and plot. Children discover that the character stays constant while the problem changes, which is how series work.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.3.9', framework: 'CCSS-ELA', text: 'Compare and contrast the themes, settings and plots of stories written by the same author about the same or similar characters.' },
          ],
          objectives: ['I can compare two books about the same character.', 'I can say what stayed the same and what changed.'],
          vocabulary: [
            { term: 'series', definition: 'A set of books about the same characters.' },
            { term: 'theme', definition: 'The big idea a story keeps coming back to.' },
          ],
          materials: ['Two books from a series the child knows', 'A comparison chart'],
          prep: ['Reread the openings of both books yourself so you can prompt specifically.'],
          script: [],
          worksheet: { id: 'g3-ela-u5-l4-ws', title: 'Book One, Book Two', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Names two similarities and two differences across the pair.'],
            exitTicket: 'Ask which book they would recommend first to a new reader, and why.',
          },
          differentiation: {
            support: ['Compare only the two main characters rather than the whole plots.'],
            extension: ['Predict what the third book in the series would have to keep in order to still feel like the series.'],
          },
          misconceptions: [
            {
              misconception: 'Two books with the same character must have the same theme.',
              looksLike: 'The child assumes the lesson repeats without checking.',
              correction: 'State each theme separately in one sentence before comparing them.',
            },
          ],
          homeExtension: ['Choose the next book in a series and predict one thing that will stay the same.'],
        },
        {
          id: 'g3-ela-u5-l5',
          unitId: 'g3-ela-u5',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Two Authors, Two Opinions',
          essentialQuestion: 'What do I do when two books disagree?',
          summary:
            'Two authors write about the same topic and reach different emphases. The child identifies each author’s point of view and decides what a reader should do about the disagreement.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.3.9', framework: 'CCSS-ELA', text: 'Compare and contrast the most important points and key details presented in two texts on the same topic.' },
            { code: 'CCSS.ELA-LITERACY.RI.3.6', framework: 'CCSS-ELA', text: 'Distinguish their own point of view from that of the author of a text.' },
          ],
          objectives: ['I can state each author’s point of view.', 'I can decide what I think and say why.'],
          vocabulary: [{ term: 'evidence', definition: 'The facts an author uses to back up a point.' }, { term: 'disagreement', definition: 'When two people say different things about the same subject.' }],
          materials: ['Two short texts with different slants on one topic', 'The printed worksheet'],
          prep: ['Make sure both texts are factually reasonable. The disagreement should be about emphasis rather than about one being wrong.'],
          script: [],
          worksheet: { id: 'g3-ela-u5-l5-ws', title: 'Two Authors, One Topic', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['States both authors’ views.', 'Gives their own view with one reason drawn from a text.'],
            exitTicket: 'Ask which author they found more convincing and which sentence convinced them.',
          },
          differentiation: {
            support: ['Read one text per session and compare on the second day.'],
            extension: ['Write one question you would ask each author if they were in the room.'],
          },
          misconceptions: [
            {
              misconception: 'If two texts disagree, one of them must be lying.',
              looksLike: 'The child dismisses one text entirely rather than weighing both.',
              correction: 'Show that both can be true while emphasising different facts. Ask what each author chose to leave out.',
            },
          ],
          homeExtension: ['Ask two adults the same question and notice how the answers differ without either being wrong.'],
        },
      ],
    },

    /* ============================================================ UNIT 6 */
    {
      id: 'g3-ela-u6',
      gradeId: 'g3',
      subjectId: 'ela',
      sequence: 6,
      title: 'Writing with Purpose: Opinion, Information, Story',
      bigIdea:
        'Writing has a job to do — to convince, to teach, or to make someone feel something — and the shape of the piece follows the job.',
      description:
        'Three kinds of writing, each taken from plan to revised draft. Opinion pieces state a view and back it with reasons joined by linking words. Informative pieces develop a topic with facts and definitions. Narratives use dialogue and description of actions, thoughts and feelings. Revision is treated as a normal stage rather than a punishment for a poor first draft.',
      weeks: 7,
      standards: [
        { code: 'CCSS.ELA-LITERACY.W.3.1', framework: 'CCSS-ELA', text: 'Write opinion pieces on topics or texts, supporting a point of view with reasons.' },
        { code: 'CCSS.ELA-LITERACY.W.3.2', framework: 'CCSS-ELA', text: 'Write informative or explanatory texts to examine a topic and convey ideas and information clearly, developing the topic with facts, definitions and details.' },
        { code: 'CCSS.ELA-LITERACY.W.3.3', framework: 'CCSS-ELA', text: 'Write narratives to develop real or imagined experiences or events using effective technique, descriptive details and clear event sequences.' },
        { code: 'CCSS.ELA-LITERACY.W.3.5', framework: 'CCSS-ELA', text: 'With guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising and editing.' },
        { code: 'CCSS.ELA-LITERACY.L.3.1', framework: 'CCSS-ELA', text: 'Demonstrate command of the conventions of standard English grammar and usage when writing or speaking.' },
      ],
      lessonTitles: [
        'Say What You Think, Then Prove It',
        'Reasons in the Right Order',
        'Teaching on Paper: Facts and Definitions',
        'A Story with Talking in It',
        'Making It Better: Planning, Revising, Editing',
      ],
      performanceTask:
        'The Writing Folder: by the end of the unit the child holds three finished pieces — one opinion, one informative, one narrative — each with its planning sheet stapled behind it, so the journey from plan to draft to revision is visible.',
      lessons: [
        /* ---------------------------------------------------- L1 authored */
        {
          id: 'g3-ela-u6-l1',
          unitId: 'g3-ela-u6',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 1,
          status: 'authored',
          title: 'Say What You Think, Then Prove It',
          essentialQuestion: 'How do I write something that actually changes someone’s mind?',
          summary:
            'Opinion writing built on the evidence habit from Unit 1. The child states an opinion, supplies three reasons drawn from real evidence rather than from feeling, joins them with linking words, and closes with a concluding statement. The hook is an adult stating an opinion with no reasons at all, which children find infuriating and therefore memorable.',
          durationMin: 55,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.3.1', framework: 'CCSS-ELA', text: 'Write opinion pieces on topics or texts, supporting a point of view with reasons: introduce the topic, state an opinion, create an organisational structure that lists reasons, provide reasons that support the opinion, use linking words and phrases to connect opinion and reasons, and provide a concluding statement.' },
            { code: 'CCSS.ELA-LITERACY.W.3.5', framework: 'CCSS-ELA', text: 'With guidance and support from adults, develop and strengthen writing as needed by planning, revising and editing.' },
          ],
          objectives: [
            'I can state my opinion in one clear sentence.',
            'I can give three reasons that are not just "because I like it".',
            'I can join my reasons with linking words and finish with a closing sentence.',
          ],
          vocabulary: [
            { term: 'opinion', definition: 'What you think about something, which someone else could disagree with.', example: 'A rabbit would make a better class pet.' },
            { term: 'reason', definition: 'Why you think it. A reason answers the question "why?".', example: 'Because rabbits are awake during the school day.' },
            { term: 'linking word', definition: 'A word that joins your opinion to your reasons.', example: 'because, also, for example, another reason.' },
            { term: 'concluding statement', definition: 'The last sentence, which says your opinion again in different words.' },
          ],
          materials: [
            'The printed worksheet, including the two pet pictures and the care-kit pictures',
            'A pencil and an eraser',
            'A scrap sheet for the planning attempt that goes wrong — there will be one',
          ],
          prep: [
            'Choose your ridiculous unsupported opinion for the hook and commit to it. "Cheese is the best food and I am not explaining why" works.',
            'Look at the two care-kit pictures on the worksheet yourself so you can prompt the child toward facts rather than feelings.',
            'Write the four linking words where they can be seen throughout: because, also, for example, another reason.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'No Reasons, No Deal',
              minutes: 8,
              say: [
                'I have decided. Bananas are the best fruit there is. That is my opinion and I am finished talking.',
                'What do you mean, why? I said it is my opinion.',
                'Oh, you want reasons? Fine. But notice what just happened — the second I gave no reasons, you stopped believing me.',
                'That is the deal with an opinion. Anybody can have one. Only reasons make anybody listen.',
                'Now you try it on me. Tell me your opinion about anything, and say no reasons at all. How does it feel?',
              ],
              do: [
                'State the unsupported opinion flatly and then fold your arms. Refuse to explain for a good ten seconds.',
                'Let the child demand reasons before you concede.',
                'Swap roles so the child experiences how thin an unsupported opinion sounds coming out of their own mouth.',
              ],
              studentDoes: ['Challenges the unsupported opinion and then tries stating one without reasons.'],
              checks: [
                {
                  ask: 'Why did you not believe me about the bananas?',
                  lookFor: 'Because you did not say why / you gave no reasons.',
                  ifStuck: 'Offer two versions of the same claim, one with a reason and one without, and ask which is stronger.',
                },
              ],
              tip: 'The refusal to explain is what makes this work. If you supply reasons straight away the child never feels the gap, and the whole lesson becomes a form to fill in.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Opinion, Three Reasons, Closing Line',
              minutes: 12,
              say: [
                'An opinion piece has a shape. Four parts, always the same.',
                'Part one: the opinion, in one sentence. "I think a rabbit would make a better class pet than a gecko."',
                'Part two, three and four: reasons. Not feelings — reasons. Watch the difference. "Because rabbits are cute" is a feeling. "Because rabbits are awake in the daytime, so we could actually watch it during lessons" is a reason.',
                'Hear it? A reason has a because in the middle and something true on the other side of it.',
                'Then the closing statement. You say your opinion again, in different words, so the reader leaves holding it. "That is why our class should choose a rabbit."',
                'And you glue the whole thing together with linking words: because, also, for example, another reason.',
                'Watch me build a weak one first. "Geckos are best. They are cool. I like them." Three sentences, zero reasons. Now watch me fix it.',
              ],
              do: [
                'Write the four-part shape where the child can see it and keep it visible all lesson.',
                'Model the weak version out loud first and let it sound as bad as it is.',
                'Repair it in front of them, saying which part you are adding as you add it.',
              ],
              studentDoes: ['Distinguishes reasons from feelings and identifies the four parts in your model.'],
              checks: [
                {
                  ask: 'Is "rabbits are fluffy" a reason or a feeling?',
                  lookFor: 'A feeling — unless the child turns it into a reason, such as fluffy animals being calmer to handle, which is a genuinely good move.',
                  ifStuck: 'Ask "so what?" after each statement. If there is no answer, it was a feeling.',
                },
                {
                  ask: 'What job does the closing statement do?',
                  lookFor: 'It says the opinion again so the reader remembers it.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Mining the Pictures for Reasons',
              minutes: 12,
              say: [
                'Now we get reasons the honest way — from evidence. Look at the two care kits on the worksheet.',
                'The rabbit needs five things. Count them. What does that tell you about looking after a rabbit?',
                'The gecko needs five things too, but look at what they are. One of them is a heat lamp. A heat lamp has to be on all the time. What does that mean at the weekend, when nobody is at school?',
                'That is a reason. It came out of a picture, not out of your head. Say it as a full sentence starting with "because".',
                'Find me two more. One for the rabbit and one for the gecko. Evidence first, then the sentence.',
              ],
              do: [
                'Point at specific items in the two care-kit pictures rather than asking in general.',
                'Write each reason down as the child says it, in their words, so the drafting later is copying rather than composing from nothing.',
                'Deliberately find a good reason for the side the child is NOT choosing. Knowing the other side is what makes an opinion strong.',
              ],
              studentDoes: ['Generates three evidence-based reasons and states each as a full because-sentence.'],
              checks: [
                {
                  ask: 'Where did that reason come from?',
                  lookFor: 'A specific item in the picture rather than a general feeling.',
                  ifStuck: 'Narrow it right down: "Look only at the heat lamp. What does a heat lamp need? What if nobody is there?"',
                },
                {
                  ask: 'What is the best reason for the OTHER side?',
                  lookFor: 'A genuine reason, honestly stated. This is hard and worth praising.',
                },
              ],
              tip: 'Reasons that come from evidence are what separates Grade 3 opinion writing from a list of preferences. Mining a picture is the easiest way in, and it transfers directly to mining a text later.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Plan, Then Draft',
              minutes: 16,
              say: [
                'Fill in the plan first. Opinion at the top, three reasons in the boxes, closing line at the bottom. Notes, not sentences — the plan is for you, not for a reader.',
                'Then turn the plan over and write the real thing on the lines. Full sentences now.',
                'Use a linking word at the start of each reason. Circle them when you have finished so I can see them.',
                'Do not start again if you change your mind halfway. Cross out and carry on. Crossing out is what real writers do.',
              ],
              do: [
                'Insist on the plan before the draft. Every child will want to skip it and every child writes a better piece when they do not.',
                'Leave spelling alone during drafting. Editing comes at the end of this unit and interrupting now costs more than it fixes.',
              ],
              studentDoes: ['Completes the planning organiser and writes a four-part opinion paragraph.'],
              checks: [
                {
                  ask: 'Show me your three circled linking words.',
                  lookFor: 'Three different linking words rather than "because" three times.',
                },
                {
                  ask: 'Does your last sentence say your opinion again?',
                  lookFor: 'A closing statement rather than a new reason.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Read It to Someone Who Disagrees',
              minutes: 7,
              say: [
                'Read it to me out loud. I am on the other side, so you have to convince me.',
                'Which reason do you think hit me hardest?',
                'The heat lamp one. It got me because it was a fact I could not argue with.',
                'That is the lesson. The reason with evidence behind it is the one that moves someone. Feelings are easy to disagree with. Facts are not.',
              ],
              do: ['Listen properly and react honestly. Name the reason that genuinely landed and say why.'],
              studentDoes: ['Reads the piece aloud and identifies which reason was strongest.'],
              checks: [
                {
                  ask: 'Which of your reasons is the weakest, and how could you make it stronger?',
                  lookFor: 'Honest self-assessment; usually the child knows exactly which one is thin.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g3-ela-u6-l1-ws',
            title: 'Which Would Make the Better Class Pet?',
            style: 'flat-vector',
            prepNotes:
              'The two care-kit pictures are the engine of this page — they are where the reasons come from. If you print in black and white, spend thirty seconds naming each item aloud with the child before they plan, or the evidence stays invisible and they fall back on "I like rabbits".',
            sections: [
              {
                id: 's1',
                title: 'The Question',
                directions:
                  'Our class can have one pet. It has to be a rabbit or a leopard gecko. Look at both animals, then look at what each one needs. You will decide, but not yet.',
                layout: 'split',
                images: [
                  {
                    id: 'img-pet-rabbit',
                    slot: 'Option A — the rabbit',
                    purpose:
                      'Gives the first option a concrete presence so the choice feels real. Deliberately shown awake and upright, since being active in the daytime is one of the strongest evidence-based reasons available to the child.',
                    subject: 'a single lop-eared pet rabbit sitting upright and alert inside a roomy wire hutch with a wooden shelter at one end and a scattering of hay on the floor',
                    composition: 'side-on view of the whole hutch with the rabbit clearly visible and awake in the open part, plain white background outside the hutch, no other animals',
                    mustInclude: ['the rabbit visibly awake with ears up and eyes open', 'the whole hutch in frame'],
                    mustAvoid: ['any text, name plate or sign', 'a cramped or dirty enclosure', 'a second animal', 'a child or adult in the picture'],
                    aspect: '4:3',
                    altText: 'A lop-eared rabbit sitting alert in a roomy hutch with hay',
                  },
                  {
                    id: 'img-pet-gecko',
                    slot: 'Option B — the leopard gecko',
                    purpose:
                      'The competing option, shown with its heat lamp switched on and a hide to shelter in, so the practical demands of the animal are visible rather than described.',
                    subject: 'a single leopard gecko resting on a flat stone inside a glass tank with a warm heat lamp glowing above one end, a small cave hide at the other end and a shallow water dish',
                    composition: 'side-on view of the whole glass tank, the gecko clearly visible on the stone, the heat lamp obviously switched on and casting a warm pool of light over one half of the tank, plain white background outside the tank',
                    mustInclude: ['the heat lamp clearly switched on', 'the cave hide and the water dish both visible', 'the whole tank in frame'],
                    mustAvoid: ['any text or label on the tank', 'a frightening or aggressive-looking reptile', 'a second animal', 'live insects shown being eaten'],
                    aspect: '4:3',
                    altText: 'A leopard gecko on a stone in a glass tank with a lit heat lamp and a cave hide',
                  },
                ],
              },
              {
                id: 's2',
                title: 'The Evidence',
                directions:
                  'Each animal needs certain things. Count the items in each kit. Write two things you notice that could become a reason.',
                layout: 'split',
                writingLines: 4,
                images: [
                  {
                    id: 'img-rabbit-care-kit-5',
                    slot: 'What a rabbit needs',
                    purpose:
                      'Turns the choice into an evidence problem. Counting and naming the five items gives the child concrete facts to convert into reasons, which is exactly the move that separates an opinion from a preference.',
                    subject: 'five separate rabbit-care items laid out in a single row: a water bottle, a bale of hay, a food bowl, a grooming brush and a litter tray',
                    count: 5,
                    composition: 'a single straight horizontal row on plain white, the five items evenly spaced with clear white gaps, none overlapping, each drawn at a similar visual size so no item dominates',
                    mustInclude: ['exactly five separate items', 'clear separation between every item', 'each item instantly recognisable in silhouette'],
                    mustAvoid: ['any text, packaging label or brand mark', 'the rabbit itself', 'items overlapping or stacked', 'a sixth item'],
                    aspect: '4:1',
                    altText: 'Five rabbit-care items in a row: water bottle, hay, food bowl, brush and litter tray',
                  },
                  {
                    id: 'img-gecko-care-kit-5',
                    slot: 'What a gecko needs',
                    purpose:
                      'The matching evidence set for the other option, kept to the same number of items so the comparison turns on what the items are rather than on how many there are — the heat lamp and the thermometer are the details worth arguing about.',
                    subject: 'five separate leopard-gecko care items laid out in a single row: a heat lamp, a thermometer dial, a cave hide, a shallow water dish and a small tub of dried insect food',
                    count: 5,
                    composition: 'a single straight horizontal row on plain white, the five items evenly spaced with clear white gaps, none overlapping, each drawn at a similar visual size to the rabbit kit above so the two rows can be compared item for item',
                    mustInclude: ['exactly five separate items', 'the heat lamp clearly recognisable as a lamp', 'clear separation between every item'],
                    mustAvoid: ['any text, numbers on the thermometer dial, or packaging labels', 'the gecko itself', 'live insects', 'items overlapping'],
                    aspect: '4:1',
                    altText: 'Five gecko-care items in a row: heat lamp, thermometer, cave hide, water dish and food tub',
                  },
                ],
              },
              {
                id: 's3',
                title: 'My Plan',
                directions:
                  'Fill in the plan in note form. Opinion at the top. Three reasons in the middle boxes — each one must come from the evidence, not from what you like. Closing line at the bottom.',
                layout: 'full',
                images: [
                  {
                    id: 'img-opinion-plan-mat',
                    slot: 'Opinion planning mat',
                    purpose:
                      'The shape of the piece made visible before a single sentence is written. Children who plan on this mat produce three reasons; children who draft straight onto lines usually produce one reason repeated three times.',
                    subject:
                      'an empty planning organiser: one wide empty rounded rectangle across the top, three identical empty rounded rectangles stacked in a vertical column beneath it each preceded by a short right-pointing arrow, and one wide empty rounded rectangle across the bottom',
                    composition:
                      'centred on plain white, the top and bottom boxes spanning the full width and the same size as each other, the three middle boxes narrower, equal in size, evenly stacked with clear gaps, every box completely empty',
                    mustInclude: ['exactly three middle boxes', 'the top and bottom boxes both wider than the middle ones', 'all five boxes completely empty inside'],
                    mustAvoid: ['any words, letters or numbers', 'ruled writing lines inside the boxes', 'shading or coloured fill', 'a fourth middle box'],
                    aspect: '3:4',
                    altText: 'An empty opinion planning mat with a wide box on top, three reason boxes and a wide closing box',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's4',
                title: 'My Opinion Piece',
                directions:
                  'Now write it properly in full sentences. Start each reason with a linking word — because, also, for example, another reason — and circle the linking words when you have finished. End by saying your opinion again in different words.',
                layout: 'full',
                writingLines: 14,
              },
            ],
            answerKey: [
              'There is no correct side. Either animal can be argued well, and a strong piece for the "wrong" animal beats a weak piece for the popular one.',
              'Rabbit kit: five items — water bottle, hay, food bowl, brush, litter tray.',
              'Gecko kit: five items — heat lamp, thermometer, cave hide, water dish, food tub.',
              'Strong reasons drawn from the evidence: the gecko needs a heat lamp that must stay on at weekends and holidays; the rabbit needs daily grooming and a litter tray, which is more work each day; the gecko needs its temperature checked, which needs an adult; the rabbit is awake during the school day.',
              'A secure piece has: one clear opinion sentence, three distinct reasons each tied to evidence, three different linking words, and a closing statement that restates the opinion rather than adding a new reason.',
            ],
          },
          assessment: {
            successCriteria: [
              'States an opinion in one clear sentence.',
              'Provides three distinct reasons, each traceable to evidence rather than preference.',
              'Uses at least two different linking words and finishes with a concluding statement.',
            ],
            exitTicket:
              'Ask the child for their single best reason and where in the evidence it came from. A reason with no source is a preference wearing a costume.',
            rubric: [
              { level: 'emerging', descriptor: 'States an opinion and repeats it in different words in place of giving reasons; linking words absent or all the same.' },
              { level: 'developing', descriptor: 'Gives two or three reasons but at least one is a preference; uses "because" throughout and the closing line introduces something new.' },
              { level: 'secure', descriptor: 'Three distinct evidence-based reasons, varied linking words, and a concluding statement that restates the opinion cleanly.' },
            ],
          },
          differentiation: {
            support: [
              'Scribe the plan for the child while they talk, then let them copy their own words into the draft. The thinking is the target, not the handwriting.',
              'Reduce to two reasons. Two strong reasons beat three padded ones and the shape is identical.',
              'Give the opinion sentence as a frame: "I think our class should choose a ___ because ___."',
            ],
            extension: [
              'Add a counter-argument sentence: "Some people think ___, but ___." This is Grade 5 work and a confident third-grader can do it.',
              'Order the three reasons from weakest to strongest and explain why that order is more persuasive.',
              'Rewrite the piece for a different audience — the head teacher rather than a friend — and note what changed.',
            ],
            language: [
              'The linking words are the highest-value vocabulary here. Put them on a card and let the child copy them directly rather than recall them.',
              'Allow planning notes in the child’s stronger language and drafting in English. Splitting planning from drafting reduces the load on both.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Saying your opinion more loudly or more times counts as giving reasons.',
              looksLike: 'Three sentences that all mean "rabbits are the best", with no because in any of them.',
              correction: 'Ask "so what?" after each sentence. If there is no answer, it was not a reason. Then supply one out loud and let them hear the difference.',
            },
            {
              misconception: 'A reason and a feeling are the same thing.',
              looksLike: '"Because I love rabbits" offered as a reason and defended fiercely.',
              correction: 'Point out that nobody can argue with a feeling, which is exactly why it convinces nobody. Push for something the reader could check.',
            },
            {
              misconception: 'The concluding statement is a place for one last new idea.',
              looksLike: 'The final sentence introduces a fourth reason that appears nowhere else.',
              correction: 'Name the job of the closing line: no new information, just the opinion said again in different words.',
            },
          ],
          homeExtension: [
            'Let the child argue for a change to a household rule, but only with three reasons and a closing line. Take the argument seriously — that is what makes it worth doing.',
            'Watch an advertisement together and count how many reasons it actually gives versus how many feelings it appeals to.',
            'At dinner, everyone states an opinion about the meal and has to support it with one reason nobody can dispute.',
          ],
          teacherNotes:
            'The single hardest thing here is the gap between a reason and a feeling, and it will not close in one lesson. What you are building is the reflex of asking "so what?" after every claim. Also, resist steering the child toward the animal you would choose — a well-argued piece for the option you dislike is the best possible outcome, and telling them so teaches something about argument that no worksheet can.',
        },
        {
          id: 'g3-ela-u6-l2',
          unitId: 'g3-ela-u6',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'Reasons in the Right Order',
          essentialQuestion: 'Does it matter which reason I put first?',
          summary:
            'Organisational structure for opinion writing. The child reorders the same three reasons several ways and judges which sequence is most persuasive, then learns the convention of saving the strongest for last.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.3.1', framework: 'CCSS-ELA', text: 'Write opinion pieces on topics or texts, creating an organisational structure that lists reasons and using linking words to connect opinion and reasons.' },
          ],
          objectives: ['I can order my reasons on purpose.', 'I can use different linking words for each reason.'],
          vocabulary: [
            { term: 'order', definition: 'The sequence you put things in.' },
            { term: 'strongest', definition: 'The reason hardest to argue against.' },
          ],
          materials: ['The opinion piece written in the previous lesson', 'Scissors', 'Glue or tape'],
          prep: ['Have the child’s previous piece to hand. Cutting up their own writing is far more powerful than reordering a stranger’s.'],
          script: [],
          worksheet: { id: 'g3-ela-u6-l2-ws', title: 'Which Reason Goes Last?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Justifies an order for three reasons.', 'Uses three different linking words.'],
            exitTicket: 'Ask which reason they moved and why the new position is better.',
          },
          differentiation: {
            support: ['Work with two reasons and simply decide which goes last.'],
            extension: ['Add a counter-argument and decide where it belongs in the sequence.'],
          },
          misconceptions: [
            {
              misconception: 'Reasons can go in any order because they are all in there somewhere.',
              looksLike: 'The child shrugs when asked why the strongest reason is buried in the middle.',
              correction: 'Read both orders aloud back to back and ask which version left them more convinced.',
            },
          ],
          homeExtension: ['Make a three-reason case for a weekend outing, with the best reason last.'],
        },
        {
          id: 'g3-ela-u6-l3',
          unitId: 'g3-ela-u6',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Teaching on Paper: Facts and Definitions',
          essentialQuestion: 'How do I write so that someone learns something?',
          summary:
            'Informative writing developed with facts, definitions and details, on a topic the child already knows well. Writing to teach is far easier when the content is not also new.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.3.2', framework: 'CCSS-ELA', text: 'Write informative or explanatory texts to examine a topic and convey ideas and information clearly, developing the topic with facts, definitions and details.' },
          ],
          objectives: ['I can group facts about my topic.', 'I can write a definition for a word my reader will not know.', 'I can add a heading and a labelled picture.'],
          vocabulary: [
            { term: 'definition', definition: 'A sentence explaining what a word means.' },
            { term: 'detail', definition: 'A small piece of information that makes a fact clearer.' },
          ],
          materials: ['A planning sheet with three fact boxes', 'The printed worksheet'],
          prep: ['Ask the child in advance to choose a topic they could talk about for two minutes without stopping.'],
          script: [],
          worksheet: { id: 'g3-ela-u6-l3-ws', title: 'Teach Me About It', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Writes three grouped facts with details.', 'Includes one clear definition.', 'Adds a heading and a labelled diagram.'],
            exitTicket: 'Ask what one word their reader will not know, and to define it in a sentence.',
          },
          differentiation: {
            support: ['Talk the whole piece aloud and record it before writing anything down.'],
            extension: ['Add a sidebar containing a fact that would have interrupted the main writing.'],
          },
          misconceptions: [
            {
              misconception: 'Informative writing means writing down everything you know in the order you remember it.',
              looksLike: 'A single long paragraph jumping between unrelated facts.',
              correction: 'Group the facts on cards into three piles first and give each pile a heading.',
            },
          ],
          homeExtension: ['Teach someone at home a skill using only written instructions, and see whether it works.'],
        },
        {
          id: 'g3-ela-u6-l4',
          unitId: 'g3-ela-u6',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'A Story with Talking in It',
          essentialQuestion: 'How do I make my characters sound like real people?',
          summary:
            'Narrative writing with dialogue and description of actions, thoughts and feelings. Punctuating speech is taught as a practical tool for making the story readable, not as a rule to obey.',
          durationMin: 50,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.3.3', framework: 'CCSS-ELA', text: 'Write narratives to develop real or imagined experiences or events, using dialogue and descriptions of actions, thoughts and feelings to develop experiences and events or show the response of characters to situations.' },
            { code: 'CCSS.ELA-LITERACY.L.3.2.C', framework: 'CCSS-ELA', text: 'Use commas and quotation marks in dialogue.' },
          ],
          objectives: ['I can write dialogue with quotation marks.', 'I can show a feeling through an action instead of naming it.'],
          vocabulary: [
            { term: 'dialogue', definition: 'The words characters say out loud, written with quotation marks.' },
            { term: 'show not tell', definition: 'Describing what someone does so the reader works out how they feel.' },
          ],
          materials: ['A story opening to continue', 'The printed worksheet'],
          prep: ['Pick two lines of dialogue from a favourite book to read aloud as a model of how speech is laid out.'],
          script: [],
          worksheet: { id: 'g3-ela-u6-l4-ws', title: 'Make Them Talk', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Writes at least four lines of correctly punctuated dialogue.', 'Shows one emotion through an action.'],
            exitTicket: 'Ask them to show "nervous" without using the word.',
          },
          differentiation: {
            support: ['Write the speech first and add the punctuation afterwards in a second pass.'],
            extension: ['Write a short scene where what a character says and what they do disagree.'],
          },
          misconceptions: [
            {
              misconception: 'Every line of dialogue needs "he said" or "she said" attached.',
              looksLike: 'A back-and-forth conversation weighed down by a said-tag on every single line.',
              correction: 'Read a real page of dialogue aloud and count the tags. There are far fewer than they expect.',
            },
          ],
          homeExtension: ['Write down a real conversation from dinner, word for word, with quotation marks.'],
        },
        {
          id: 'g3-ela-u6-l5',
          unitId: 'g3-ela-u6',
          gradeId: 'g3',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Making It Better: Planning, Revising, Editing',
          essentialQuestion: 'What is the difference between fixing my writing and improving it?',
          summary:
            'Revision and editing are separated and practised as different jobs. Revising changes what the writing says; editing changes how it is spelled and punctuated. Doing them at the same time is why children hate both.',
          durationMin: 45,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.3.5', framework: 'CCSS-ELA', text: 'With guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising and editing.' },
            { code: 'CCSS.ELA-LITERACY.L.3.2', framework: 'CCSS-ELA', text: 'Demonstrate command of the conventions of standard English capitalisation, punctuation and spelling when writing.' },
          ],
          objectives: ['I can revise by adding, cutting or moving.', 'I can edit for capital letters, full stops and spelling.', 'I can do the two jobs separately.'],
          vocabulary: [
            { term: 'revise', definition: 'To change what the writing says so it works better.' },
            { term: 'edit', definition: 'To fix spelling, capital letters and punctuation.' },
          ],
          materials: ['A piece the child wrote earlier in the unit', 'A coloured pen for revision and a different colour for editing'],
          prep: ['Choose a piece written at least two days ago. Distance from your own writing is what makes revision possible.'],
          script: [],
          worksheet: { id: 'g3-ela-u6-l5-ws', title: 'Two Different Jobs', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Makes at least two revisions that change meaning.', 'Finds and corrects at least three surface errors.'],
            exitTicket: 'Ask for one thing they added and one thing they fixed, and which was harder.',
          },
          differentiation: {
            support: ['Revise one sentence only, chosen together in advance.'],
            extension: ['Revise a piece by cutting a quarter of the words without losing any meaning.'],
          },
          misconceptions: [
            {
              misconception: 'Revising means copying the piece out again more neatly.',
              looksLike: 'The child produces an identical second draft in better handwriting.',
              correction: 'Set a rule: the revised version must contain something the first one did not. Neatness is not a revision.',
            },
          ],
          homeExtension: ['Reread a piece of writing from a week ago and find one sentence you would now write differently.'],
        },
      ],
    },
  ],
}

export default course
