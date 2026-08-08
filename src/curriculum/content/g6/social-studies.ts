import type { SubjectCourse } from '../../types'

/**
 * Grade 6 Social Studies — the ancient world and world geography.
 *
 * Two commitments shape this course.
 *
 * The first is that history is a set of claims made from evidence, not a list
 * of things that happened. So the year opens with sourcing, and every unit
 * afterwards keeps asking how we know, what survived, and who is missing from
 * the record.
 *
 * The second is that every civilisation here is studied on its own terms.
 * Mesopotamia, Egypt and Nubia, India, China, Greece and Rome are not staging
 * posts on a road leading to modern Europe. Each solved its own problems in its
 * own landscape, and each is given the same seriousness and the same amount of
 * time.
 */
const course: SubjectCourse = {
  gradeId: 'g6',
  subjectId: 'social-studies',
  title: 'Grade 6 Social Studies: The Ancient World',
  overview:
    'This year covers roughly two hundred thousand years, from the first modern humans to the end of the Roman Empire in the west, and it does it through evidence. Learners start by working out how historians know anything at all, then study six ancient societies in the landscapes that shaped them: Mesopotamia between its two rivers, Egypt and Nubia along the Nile, the Indus and Ganges plains, the loess and river valleys of China, the mountainous fragmented peninsula of Greece, and the strategically placed peninsula of Italy. In each case the same questions apply. What did the geography make possible and what did it forbid? Who held power, and who did not? What did they write down, what did they build, and what does that tell us they cared about? And, always: who is missing from the sources, and why?',
  yearGoals: [
    'Read a primary source critically — identify who made it, when, for whom and why, and say what it cannot tell you.',
    'Explain how physical geography shaped settlement, agriculture, trade and power in each society studied.',
    'Compare how different ancient societies organised authority, law and social hierarchy.',
    'Explain multiple causes and effects of major developments, including the shift to farming and the growth of empires.',
    'Organise evidence into a coherent written argument about the past, acknowledging what the evidence does not show.',
    'Recognise the limits of the historical record and name whose voices are systematically absent from it.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'g6-ss-u1',
      gradeId: 'g6',
      subjectId: 'social-studies',
      sequence: 1,
      title: 'How We Know: Evidence, Early Humans and the First Farmers',
      bigIdea:
        'Everything we claim about the past is built from things that happened to survive — and what survived was not chosen fairly.',
      description:
        'The methods unit, taught through the deepest past. Learners handle the question of evidence before they handle any content, then apply it to a period with no writing at all, where every conclusion rests on bones, tools, seeds and buildings. The Neolithic revolution closes the unit, and it is taught as a genuine puzzle: early farmers worked longer hours, ate a narrower diet and were shorter than the foragers they replaced, so the question of why anyone did it is a real one.',
      weeks: 5,
      standards: [
        { code: 'D2.His.9.6-8', framework: 'C3', text: 'Classify the kinds of historical sources used in a secondary interpretation.' },
        { code: 'D2.His.10.6-8', framework: 'C3', text: 'Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources.' },
        { code: 'D2.His.13.6-8', framework: 'C3', text: 'Evaluate the relevancy and utility of a historical source based on information such as maker, date, place of origin, intended audience, and purpose.' },
        { code: 'D2.His.14.6-8', framework: 'C3', text: 'Explain multiple causes and effects of events and developments in the past.' },
        { code: 'D2.Geo.8.6-8', framework: 'C3', text: 'Analyze how relationships between humans and environments extend or contract spatial patterns of settlement and movement.' },
      ],
      lessonTitles: [
        'What Counts as Evidence?',
        'Reading a Primary Source: Who Made This, and Why?',
        'Before Writing: What Bones and Stones Can Tell You',
        'The Neolithic Revolution: Why Would Anyone Start Farming?',
        'What Settling Down Changed — and What It Cost',
      ],
      performanceTask:
        'The Site Report: given a set of ten described finds from an imaginary excavation — postholes, animal bones, grain, a child\'s burial, imported shell beads, a broken quern — the learner writes a report stating three things the site probably shows, one thing it might show, and one thing that cannot be determined from this evidence at all. The third category carries the most marks.',
      lessons: [
        {
          id: 'g6-ss-u1-l1',
          unitId: 'g6-ss-u1',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'What Counts as Evidence?',
          essentialQuestion: 'How does anybody know what happened before anyone alive can remember?',
          summary:
            'An opening audit of the learner\'s own life. What would survive from their bedroom in a thousand years? What would that survival make future historians believe, and what would it hide? The answers set up every sourcing lesson that follows.',
          durationMin: 50,
          standards: [
            { code: 'D2.His.9.6-8', framework: 'C3', text: 'Classify the kinds of historical sources used in a secondary interpretation.' },
            { code: 'D2.His.10.6-8', framework: 'C3', text: 'Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources.' },
          ],
          objectives: [
            'I can distinguish a primary source from a secondary one.',
            'I can predict which objects survive and which do not.',
            'I can explain how survival bias distorts what we know.',
          ],
          vocabulary: [
            { term: 'primary source', definition: 'Something made at the time by someone who was there.' },
            { term: 'secondary source', definition: 'An account written later by someone working from primary sources.' },
            { term: 'survival bias', definition: 'The distortion caused by the fact that only some kinds of evidence last.' },
          ],
          materials: ['A tray of ordinary household objects', 'Sticky notes', 'The printed worksheet'],
          prep: [
            'Assemble a tray with a mix of durable and perishable items: a coin, a plastic toy, a paper letter, a piece of fruit, a wooden spoon, a ceramic mug.',
            'Decide not to answer the question yourself in the first ten minutes. Let the sorting produce the idea.',
          ],
          script: [],
          worksheet: { id: 'g6-ss-u1-l1-ws', title: 'What Would Survive?', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Sorts objects by likely survival with reasons.', 'Explains one way survival bias would mislead a future historian.'],
            exitTicket: 'Ask what a future archaeologist would wrongly conclude about your household from the objects that survived.',
          },
          differentiation: {
            support: ['Sort only into two piles, "lasts" and "rots", before discussing what that means.'],
            extension: ['Explain why we know far more about ancient rulers than about ancient farmers, using survival bias.'],
          },
          misconceptions: [
            {
              misconception: 'History is a record of what happened.',
              looksLike: 'Treating a textbook statement as simply true, with no source behind it.',
              correction: 'Ask where the textbook got it from. Following one claim back to its evidence, once, changes how the whole book reads.',
            },
          ],
          homeExtension: ['Pick five objects from one room and predict which would still exist in a thousand years.'],
        },

        /* ------------------------------------------------------- AUTHORED */
        {
          id: 'g6-ss-u1-l2',
          unitId: 'g6-ss-u1',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'authored',
          title: 'Reading a Primary Source: Who Made This, and Why?',
          essentialQuestion: 'How do I get useful history out of an object made by someone who was not writing for me?',
          summary:
            'The sourcing toolkit, built from a modern object first and then applied to ancient ones. Learners interrogate five questions — who made it, when, for whom, why, and what is missing — and discover that the last question is the one that turns an object into evidence. The lesson deliberately uses a supermarket receipt before it uses a clay tablet, because the reasoning is identical and the receipt is not intimidating.',
          durationMin: 55,
          standards: [
            { code: 'D2.His.13.6-8', framework: 'C3', text: 'Evaluate the relevancy and utility of a historical source based on information such as maker, date, place of origin, intended audience, and purpose.' },
            { code: 'D2.His.10.6-8', framework: 'C3', text: 'Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources.' },
            { code: 'D2.His.6.6-8', framework: 'C3', text: 'Analyze how people\'s perspectives influenced what information is available in the historical sources they created.' },
            { code: 'D3.2.6-8', framework: 'C3', text: 'Evaluate the credibility of a source by determining its relevance and intended use.' },
          ],
          objectives: [
            'I can ask five sourcing questions of any object or document.',
            'I can say who a source was made for, and why that changes what it tells me.',
            'I can name something a source cannot tell me and explain why not.',
            'I can use two different kinds of source together to reach a conclusion neither gives alone.',
          ],
          vocabulary: [
            { term: 'source', definition: 'Anything surviving from the past that can be used as evidence about it.' },
            { term: 'audience', definition: 'The people a source was made for, which shapes what it says and what it hides.' },
            { term: 'purpose', definition: 'The reason a source was made in the first place.' },
            { term: 'artefact', definition: 'An object made or used by people, studied as evidence.' },
            { term: 'corroborate', definition: 'To check one source against another to see whether they agree.' },
            { term: 'provenance', definition: 'Where a source came from and the chain of hands it passed through.' },
          ],
          materials: [
            'A real supermarket receipt from a pocket, bag or bin — the more ordinary the better',
            'A photograph or your own copy of any old family document: a letter, a certificate, an old photo',
            'The printed worksheet',
            'A pencil and a highlighter',
            'A large sheet of paper for the shared source-analysis wheel',
          ],
          prep: [
            'Find the receipt before the lesson and read it yourself. Notice what it tells you and, more importantly, what it quietly hides — who else was there, why the shopping was bought, whether anything was returned.',
            'Draw the five-part analysis wheel on the large sheet in advance. Do not write the questions in yet; you will fill them in together.',
            'Decide the one rule you will enforce all lesson: no conclusion without saying which part of the source produced it. Say it out loud once at the start.',
            'Read the worksheet\'s ancient sources yourself. You do not need specialist knowledge — the point is the questions, not the answers, and being visibly unsure is entirely fine here.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'A Historian Finds Your Receipt',
              minutes: 8,
              say: [
                'Here is a supermarket receipt. It is completely uninteresting. Nobody wrote it to be read by anybody in a hundred years.',
                'Now imagine it survives. In three thousand years somebody digs it up and it is one of about eleven documents anyone has from our entire century.',
                'Tell me what they would learn about us. Go on — what does this actually prove?',
                'Good. Prices. What food existed. What things cost relative to each other. That we counted in a particular currency. That we bought food from a place rather than growing it. All of that is real, solid evidence, from a bin.',
                'Now the harder half. What would they get WRONG?',
                'They would not know if this was a normal shop or a party. They would not know who ate it. They would not know if we liked any of it. And if this was the only document that survived, they might think this is what everyone in the country ate.',
                'That is the whole job. Every source gives you something real and hides something else, and the historian has to know which is which.',
              ],
              do: [
                'Use a genuinely real receipt. Handing over an actual crumpled bit of paper is worth more than any printed example.',
                'Write two columns on the big sheet: WHAT IT SHOWS and WHAT IT HIDES. Fill them as they talk.',
                'Do not correct wrong guesses in this beat. Wrong guesses are the demonstration.',
              ],
              studentDoes: ['Interrogates an ordinary modern object and separates what it evidences from what it merely suggests.'],
              checks: [
                {
                  ask: 'Does this receipt tell you what this family normally eats?',
                  lookFor: 'No — it is one shop on one day, and we have no idea whether it is typical.',
                  ifStuck: 'Ask what they had for dinner last Tuesday, and whether it was typical. The sample-size problem lands immediately.',
                },
                {
                  ask: 'Who is completely invisible in this document?',
                  lookFor: 'Anyone else in the household, anyone who could not afford to shop there, the people who grew or made any of it.',
                },
              ],
              tip: 'Starting modern is not a warm-up. Learners will happily accept an ancient source as mysteriously authoritative while being perfectly sceptical about a receipt. Build the scepticism where it is natural, then carry it backwards.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Five Questions, and the Fifth Is the Real One',
              minutes: 12,
              say: [
                'Here are the five questions. You ask them of everything, and you ask them in this order, because each one changes how you read the next.',
                'One. Who made this? Not who is in it — who physically made it.',
                'Two. When? At the time, or later from memory? Those are very different things.',
                'Three. Who was it for? A letter to a friend, a tax record for an official, a monument for a whole city — completely different rules of honesty apply to each.',
                'Four. Why was it made? Nobody makes anything for no reason. Find the reason and you find the slant.',
                'Five. What is missing? And this is the one that separates a historian from someone reading an old document.',
                'Let me show you why five matters. Suppose we find a stone monument saying a king won a great battle. Question one — made by the king\'s own carvers. Question three — for everyone who walks past. Question four — to make the king look powerful.',
                'So does the monument prove he won?',
                'It proves he wanted people to believe he won. That is still evidence, just of something different. It is excellent evidence about what he thought was worth boasting about.',
                'That move — turning a biased source into good evidence for a different question — is the most useful thing you will learn all year.',
              ],
              do: [
                'Write the five questions onto the wheel as you say them, one per segment. The wheel goes on the wall for the rest of the year.',
                'Work the monument example on paper, aloud, all the way through. Do not shorten it.',
                'Say the sentence "it is evidence of something, just not the thing it claims" and write it down. You will reuse it in every unit.',
              ],
              studentDoes: ['Records the five questions and follows one full worked analysis of a biased source.'],
              checks: [
                {
                  ask: 'A king\'s monument says he won. What is it definitely good evidence for?',
                  lookFor: 'What the king wanted believed, what counted as glory, that he had the resources to build monuments.',
                  ifStuck: 'Ask what a modern politician\'s poster proves. Same reasoning, no historical distance.',
                },
                {
                  ask: 'Why does question three change how you read a document?',
                  lookFor: 'People say different things to different audiences; a private note and a public inscription are honest about different things.',
                },
              ],
              tip: 'Resist teaching "primary sources are reliable and secondary ones are not". It is false and it is the main thing that stops learners reasoning properly. A primary source can be a deliberate lie; a secondary source can be careful and well evidenced.',
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Two Sources, One Question',
              minutes: 13,
              say: [
                'Now something harder. I am going to give you two very different sources about the same place, and neither one answers the question on its own.',
                'Source one: a clay tablet from a Mesopotamian city, covered in wedge marks. When it was translated, it turned out to be a list — quantities of barley, given to named people, over a period of days.',
                'Source two: a burial. A person buried with imported shell beads that came from six hundred miles away, and beside them, a second burial with nothing at all.',
                'The question: was this a society where some people had much more than others?',
                'Run the five questions on the tablet first. Who made it? Why?',
                'Right — an official, or a scribe working for one, to keep track of who got what. Nobody was trying to impress anybody. That is why it is so useful: it is accidentally honest.',
                'Now the burials. What do they show together that neither shows alone?',
                'And now the fifth question for both. What is missing? Who does a barley list never mention? Whose burial never gets found?',
              ],
              do: [
                'Take the two sources one at a time through the wheel. Do not let the learner jump to the conclusion before both have been sourced.',
                'When they reach the conclusion, ask them to say which specific feature of which source produced it. Enforce the rule from the start of the lesson.',
                'Write the joint conclusion down in one sentence and then underline the two bits of evidence inside it.',
              ],
              studentDoes: ['Sources two different kinds of evidence and combines them into a conclusion neither supports alone.'],
              checks: [
                {
                  ask: 'Why is a boring administrative list often better evidence than a proud inscription?',
                  lookFor: 'Because nobody was trying to persuade anybody with it, so it has much less reason to distort.',
                },
                {
                  ask: 'What can neither of these sources tell you?',
                  lookFor: 'What people thought or felt about the inequality, whether it was accepted or resented, what anyone at the bottom would have said.',
                  ifStuck: 'Ask who wrote the tablet and who did not. Literacy is itself a filter on the whole record.',
                },
                {
                  ask: 'If the two sources disagreed, what would you do?',
                  lookFor: 'Look for a third, and ask which has more reason to distort. Do not simply pick the one you prefer.',
                },
              ],
              tip: 'The insight that dull records beat grand ones is genuinely counter-intuitive and genuinely useful. Learners expect the impressive object to be the important one; the tax list is where the social history actually lives.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 17,
              say: [
                'Four sources on the page and they are deliberately four different kinds. One is written, one is a tool, one is a picture, and one is broken.',
                'Section one: run all five questions on each source. Short answers are fine. If you genuinely cannot answer one of the five, write "cannot tell" — that is a real finding and it will be marked as one.',
                'Section two is the broken pot. That one is not really about the pot. It is about what happens when a third of your evidence is missing, which is the normal situation, not the unusual one.',
                'Section three: you get a claim, and you decide which of the four sources supports it, which contradicts it, and which is simply irrelevant. Two of them are irrelevant. Do not force them to be useful.',
                'Section four: write one thing all four sources together cannot tell you about these people, and explain why that gap exists.',
              ],
              do: [
                'Read all four sets of directions aloud before they start.',
                'Praise the first "cannot tell" loudly when it appears. Learners have usually been trained that a blank means failure.',
                'Keep the five-question wheel visible. It should be consulted, not remembered.',
              ],
              studentDoes: ['Applies the five sourcing questions to four different kinds of source and evaluates their relevance to a specific claim.'],
              checks: [
                {
                  ask: 'Which of the four sources was made to be seen by other people, and how does that change what you trust it for?',
                  lookFor: 'The wall painting, identified as public or ceremonial, so it shows an idealised version rather than daily reality.',
                },
                {
                  ask: 'Show me a "cannot tell" you wrote and defend it.',
                  lookFor: 'A defensible gap with a stated reason, not a shrug.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Who Is Not in the Record?',
              minutes: 5,
              say: [
                'One question to finish, and it is the question I want you carrying into every unit this year.',
                'Everything we will study was written down by a very small number of people. Almost everyone who has ever lived left no document at all.',
                'So every time we read something this year, I am going to ask: who is not in this? Whose version is missing, and why is it missing?',
                'Sometimes the answer is that they could not write. Sometimes it is that nobody kept what they made. Sometimes it is that somebody destroyed it deliberately.',
                'That is not a reason to give up on history. It is the reason history is hard and worth doing properly.',
                'Last thing. Give me the five questions.',
              ],
              do: ['Pin the wheel up somewhere permanent. It will be pointed at in every unit for the rest of the year.'],
              studentDoes: ['Recalls the five questions and states one systematic gap in the historical record.'],
              checks: [
                {
                  ask: 'Name one group of people who are almost always missing from ancient written sources, and why.',
                  lookFor: 'Anyone who was not literate — most women, most farmers, enslaved people, children, the poor — because writing was restricted to a small trained group serving the powerful.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g6-ss-u1-l2-ws',
            title: 'Five Questions for Any Source',
            style: 'historical',
            prepNotes:
              'Print this one as large as you can — the images need to be big enough to look at properly, because looking closely is half the task. The five-question wheel in section one is meant to be written in, so check it has not printed too small. If you have any real old object in the house, a coin, a photograph, a document, put it on the table beside the page; the comparison between a printed image and a real object is worth making.',
            sections: [
              {
                id: 's1',
                title: 'Four Sources, Five Questions Each',
                directions:
                  'Look carefully at each source before writing anything. Then answer all five questions for each one: who made it, when, who was it for, why was it made, and what is missing. If a question genuinely cannot be answered from the source, write "cannot tell" and say why. That is a real answer.',
                layout: 'grid',
                items: [
                  'Source A — a clay tablet from a Mesopotamian city, about 4,000 years old. When translated, it lists quantities of barley issued to named individuals over eight days.',
                  'Source B — a shaped stone hand-axe, roughly 300,000 years old, found with animal bones bearing cut marks.',
                  'Source C — a fragment of a tomb wall painting from ancient Egypt, showing three figures harvesting grain.',
                  'Source D — a large storage jar, reconstructed from fragments, with several pieces still missing.',
                ],
                images: [
                  {
                    id: 'g6-ss-u1-img-clay-tablet',
                    slot: 'Source A — Mesopotamian clay tablet',
                    purpose:
                      'An administrative record is the least glamorous and most informative kind of ancient source, and learners need to see one to believe that. Showing it as a small, plain, damaged object rather than a treasure supports exactly the argument the lesson is making.',
                    subject:
                      'a small rectangular clay tablet with rounded corners and slightly uneven edges, its flat face covered in neat horizontal rows of small wedge-shaped impressions pressed into the surface, one corner chipped away',
                    count: 1,
                    composition:
                      'the single tablet shown flat and straight on, filling most of the frame, lit from one side so the impressions cast small shadows and read as depressions rather than as ink, plain neutral background, the chipped corner clearly visible',
                    mustInclude: [
                      'exactly one tablet',
                      'wedge-shaped marks that are clearly impressions pressed into clay, arranged in even horizontal rows',
                      'the dull unglazed surface of sun-dried clay',
                      'visible damage to one corner',
                    ],
                    mustAvoid: [
                      'any modern or alphabetic lettering, numerals or readable writing of any script',
                      'ink, paint or pigment on the surface',
                      'a museum case, label, stand or ruler',
                      'gold, jewels or any suggestion that this is a treasure',
                      'anachronistic objects of any period other than ancient Mesopotamia',
                    ],
                    aspect: '4:3',
                    altText: 'A small chipped clay tablet covered in rows of wedge-shaped impressions',
                    style: 'historical',
                  },
                  {
                    id: 'g6-ss-u1-img-handaxe',
                    slot: 'Source B — a stone hand-axe',
                    purpose:
                      'A tool is evidence with no words at all, which forces the learner to reason from manufacture and wear rather than from content. It also demonstrates that sourcing questions apply to objects, not only to documents.',
                    subject:
                      'a teardrop-shaped stone hand-axe, worked on both faces so its whole surface is covered in overlapping shallow flake scars, one end broad and rounded and the other tapering to a point',
                    count: 1,
                    composition:
                      'the single hand-axe shown flat against a plain neutral background, viewed straight on from directly above, filling most of the frame, side-lit so the flake scars across both faces are clearly visible as shallow facets',
                    mustInclude: [
                      'exactly one hand-axe',
                      'overlapping flake scars covering the whole visible face',
                      'a symmetrical teardrop outline with one worked point',
                    ],
                    mustAvoid: [
                      'a wooden handle, binding, shaft or any hafting',
                      'a hand, museum label, scale bar or display case',
                      'a polished or ground surface, which belongs to a much later period',
                      'anachronistic objects, metal tools or modern materials in the frame',
                    ],
                    aspect: '3:4',
                    altText: 'A teardrop-shaped stone hand-axe covered in flake scars',
                    style: 'historical',
                  },
                  {
                    id: 'g6-ss-u1-img-tomb-painting',
                    slot: 'Source C — Egyptian tomb wall painting fragment',
                    purpose:
                      'A picture made for a tomb was made to be seen, which makes it the ideal source for the audience-and-purpose questions. The learner has to work out that an idealised harvest scene is better evidence of what was valued than of what a day in the fields was like.',
                    subject:
                      'a fragment of an ancient Egyptian painted tomb wall showing three human figures in the conventional Egyptian profile pose, each cutting stalks of grain with a curved sickle, painted in flat earth colours on plaster with a cracked broken edge along one side',
                    count: 3,
                    composition:
                      'the three figures in a single horizontal register across the fragment, all in profile facing the same direction, evenly spaced and each holding a sickle to the standing grain, flat areas of ochre, red and black pigment with no shading or perspective, the plaster surface cracked and one edge broken away irregularly',
                    mustInclude: [
                      'exactly three human figures',
                      'the flat profile convention of Egyptian tomb painting with no perspective or shading',
                      'curved sickles and standing grain',
                      'a broken irregular edge showing this is a fragment',
                    ],
                    mustAvoid: [
                      'hieroglyphs or any written characters',
                      'anachronism of any kind — no metal machinery, no modern clothing, no post-pharaonic objects',
                      'caricatured or exaggerated facial features of any kind',
                      'violence, injury or blood',
                      'a museum frame, mount or caption',
                    ],
                    aspect: '16:9',
                    altText: 'A cracked fragment of Egyptian tomb painting showing three figures harvesting grain with sickles',
                    style: 'historical',
                  },
                ],
                writingLines: 10,
              },
              {
                id: 's2',
                title: 'The Missing Pieces',
                directions:
                  'This jar was rebuilt from fragments found in the ground, and several pieces were never found. Answer the questions underneath. This section is really about what it means to work with an incomplete record — which is almost always the situation.',
                layout: 'full',
                items: [
                  'What can you still tell about this jar despite the missing pieces?',
                  'Name one thing the missing pieces might have shown.',
                  'A historian writes: "This jar was used to store grain." What would they need to know to say that confidently?',
                  'Is a source with pieces missing useless? Explain your answer in one sentence.',
                ],
                images: [
                  {
                    id: 'g6-ss-u1-img-broken-jar',
                    slot: 'Source D — reconstructed storage jar with gaps',
                    purpose:
                      'The incomplete record is an abstract idea until the learner sees literal holes in the evidence. A reconstructed vessel with visible gaps makes "we do not know" into something you can point at, and makes partial conclusions feel legitimate rather than like failure.',
                    subject:
                      'a large ancient plain earthenware storage jar reassembled from fragments, its joins clearly visible as fine lines across the body, with three or four gaps of different sizes where pieces are entirely absent and the dark interior shows through',
                    count: 1,
                    composition:
                      'the single jar standing upright and centred against a plain neutral background, shown straight on and filling most of the frame, the network of joined sherds clearly readable across the surface, three or four irregular missing areas of different sizes distributed around the body, the largest gap on the shoulder of the jar',
                    mustInclude: [
                      'exactly one jar',
                      'visible join lines between reassembled fragments',
                      'at least three clearly empty gaps where pieces are missing',
                      'a plain undecorated utilitarian shape',
                    ],
                    mustAvoid: [
                      'painted decoration, patterns, inscriptions or any lettering',
                      'a museum stand, case, plinth or label',
                      'modern filler or plaster restoring the missing areas',
                      'anachronistic objects, tools or materials in the frame',
                      'a pristine undamaged jar',
                    ],
                    aspect: '3:4',
                    altText: 'A reconstructed ancient storage jar with visible joins and several missing pieces',
                    style: 'historical',
                  },
                ],
                writingLines: 6,
              },
              {
                id: 's3',
                title: 'Which Source Supports the Claim?',
                directions:
                  'Here is a claim: "In this society, some people controlled much more food than others." Go through all four sources. For each one write S if it supports the claim, C if it contradicts it, or N if it is not relevant either way. Then write one sentence for each S explaining exactly which feature of the source does the supporting. Two of the four are N. Do not force them.',
                layout: 'column',
                items: [
                  'Source A — the barley list: S / C / N, because...',
                  'Source B — the hand-axe: S / C / N, because...',
                  'Source C — the harvest painting: S / C / N, because...',
                  'Source D — the storage jar: S / C / N, because...',
                  'Which single source is the strongest evidence for the claim, and why?',
                ],
                images: [
                  {
                    id: 'g6-ss-u1-img-source-wheel',
                    slot: 'Section 3 — blank five-question source wheel',
                    purpose:
                      'A blank wheel keeps the five questions physically present while the learner is judging relevance, so the sourcing habit is applied rather than recalled. Leaving all five segments empty means the learner writes the questions themselves, which is worth far more than reading them.',
                    subject:
                      'a large blank circle divided into five equal empty wedge-shaped segments by straight lines radiating from a small empty circle at the centre',
                    count: 5,
                    composition:
                      'one large circle centred in the frame, five straight lines running from a small central circle to the outer edge creating exactly five equal segments, every segment completely blank inside with plenty of room to write, a small empty circle at the hub, thin even line weight throughout, plain white background',
                    mustInclude: [
                      'exactly five equal segments',
                      'a small empty circle at the centre',
                      'every segment completely empty inside',
                    ],
                    mustAvoid: [
                      'any words, numbers, headings or icons in any segment',
                      'a sixth segment or unequal segment sizes',
                      'colour fill or shading inside the segments',
                      'arrows around the outside suggesting a sequence',
                    ],
                    aspect: '1:1',
                    altText: 'A blank circle divided into five equal empty segments around a small central circle',
                    style: 'diagram',
                  },
                ],
                writingLines: 6,
              },
              {
                id: 's4',
                title: 'Who Is Missing?',
                directions:
                  'Look at all four sources together. Write one thing they cannot tell you about the people who made them, and then explain why that gap exists — not just that it does. Think about who was able to write, who was able to build, and whose things get dug up.',
                layout: 'full',
                items: [
                  'One thing all four sources together cannot tell me:',
                  'Why that gap exists:',
                  'What kind of new source would fill it, if one were ever found?',
                ],
                writingLines: 7,
              },
            ],
            answerKey: [
              'Section 1: Source A — made by a scribe or official, at the time, for administrative use, to keep track of rations; missing: why the barley was given, whether the amounts were fair, anything about people not on the list. Source B — made by whoever used it, no way to date it precisely from the object alone, made for its maker\'s own use, to butcher animals; missing: who they were, what language they spoke, everything about their beliefs. Source C — made by paid artists for a tomb owner, at the time of the burial, for the dead person and for anyone entering the tomb, to show an ideal ordered world; missing: what harvesting actually felt like, whether these were real people, anything the tomb owner did not want shown. Source D — made by a potter for practical use, purpose is storage; missing: what was in it, who owned it, everything on the lost pieces. Accept "cannot tell" generously wherever it is reasoned.',
              'Section 2: you can still tell the shape, the approximate capacity, the material and that it was plain and utilitarian. Missing pieces might have carried decoration, a maker\'s mark, or evidence of a handle. To claim it stored grain, a historian would need residue analysis, grain found inside it, or comparable jars from a known storage context. An incomplete source is not useless — it supports narrower conclusions, and the honest historian states which.',
              'Section 3: A is S — named individuals receiving different quantities is direct evidence of unequal control. D is S but weaker — a large storage jar implies someone had a surplus worth storing, though not who. B is N — a hand-axe is from an entirely different period and society. C is N or a weak S; the painting shows agricultural labour and a tomb owner wealthy enough to commission it, but the painting itself was made to show an ideal, not a distribution. Reward the reasoning rather than the letter.',
              'Section 4: strong answers name what ordinary people thought, what anyone at the bottom of the hierarchy would have said, what women\'s daily lives were like, or what any of it felt like. The gap exists because writing was restricted to a small trained group working for the powerful, because durable materials were expensive, and because tombs and palaces are excavated far more often than ordinary houses.',
            ],
          },
          assessment: {
            successCriteria: [
              'Applies all five sourcing questions to an unfamiliar source without prompting.',
              'Identifies audience and purpose and explains how they shape what a source can be trusted for.',
              'Writes "cannot tell" with a reason rather than guessing.',
              'Judges whether a source is relevant to a specific claim, including recognising when it is not.',
            ],
            exitTicket:
              'Hold up any object in the room and ask for two things a historian in three thousand years could conclude from it, and one thing they would get wrong. Ninety seconds.',
            rubric: [
              { level: 'emerging', descriptor: 'Describes what a source shows but treats it as straightforwardly true, and answers the audience and purpose questions with guesses rather than reasoning from features of the source.' },
              { level: 'developing', descriptor: 'Works through all five questions reliably and identifies purpose, but still treats every source as relevant to whatever claim is on the table.' },
              { level: 'secure', descriptor: 'Reasons from purpose and audience to what a source is genuinely good evidence for, corroborates across sources, and identifies systematic gaps in the record unprompted.' },
            ],
          },
          differentiation: {
            support: [
              'Use three questions instead of five: who made it, why, and what is missing. Add when and for whom in a later lesson.',
              'Do the whole analysis orally with one source before any writing. The thinking and the transcription are separate loads.',
              'Work with the receipt and one ancient source only. Four sources is a lot of reading for one lesson.',
            ],
            extension: [
              'Find two sources that genuinely disagree about the same event and write a paragraph on how a historian would decide between them.',
              'Take Source C and write the same scene as the labourers themselves might have described it, then explain which parts of that account are invented and why they had to be.',
              'Research how a real archaeological site was dated and write up which kinds of evidence were combined to do it.',
            ],
            language: [
              'The five questions work perfectly well as a spoken routine and can be answered in any language before being written in English.',
              'Provide the frame "This source was made by ___ for ___ so it is good evidence for ___ but not for ___." It carries almost the whole skill.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Primary sources are reliable and secondary sources are not.',
              looksLike: 'A royal inscription is accepted as fact because it is primary, while a careful modern historian\'s account is dismissed as "just someone\'s opinion".',
              correction: 'Ask who made the inscription and why. A primary source can be a deliberate boast; the question is never primary or secondary, it is purpose and audience.',
            },
            {
              misconception: 'If a source does not answer the question, it is useless.',
              looksLike: 'The learner discards the hand-axe entirely because it says nothing about inequality.',
              correction: 'Reframe the finding as a result. "This source cannot answer this question" is a valid, markable conclusion, and knowing it prevents the far worse error of inventing an answer.',
            },
            {
              misconception: 'What survives is a fair sample of what existed.',
              looksLike: 'Concluding that ancient societies were mostly made up of kings, priests and soldiers, because those are the people in the sources.',
              correction: 'Go back to the receipt. Ask what would survive from their own home and what proportion of their life it would represent.',
            },
            {
              misconception: 'A biased source is a bad source.',
              looksLike: 'Rejecting the tomb painting because it shows an idealised scene.',
              correction: 'A biased source is excellent evidence for what its maker wanted believed. Change the question rather than discarding the source.',
            },
          ],
          homeExtension: [
            'Find the oldest object in your home. Run the five questions on it and interview whoever knows most about where it came from.',
            'Look at a photograph from at least twenty years ago and work out who took it, who it was for, and what is outside the frame.',
            'Keep one receipt or ticket from this week in a labelled envelope with the date. Write two sentences saying what it would and would not tell someone in a hundred years.',
          ],
          teacherNotes:
            'The receipt is not a gimmick and it should not be skipped for time. Learners approach ancient sources with a reverence that switches off their judgement, and the receipt is the fastest way to get the judgement switched back on before the ancient material arrives. Expect the fifth question to be the hardest by a long way — "what is missing" requires imagining an absence, which is genuinely difficult at this age, and it will need re-teaching in every unit. If you are short of time, cut section three; the sourcing questions in section one and the gaps in section four are what the rest of the year depends on.',
        },

        {
          id: 'g6-ss-u1-l3',
          unitId: 'g6-ss-u1',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Before Writing: What Bones and Stones Can Tell You',
          essentialQuestion: 'How do you write the history of people who left no words at all?',
          summary:
            'Palaeolithic evidence: stone tools, butchered bones, hearths, burials, pigment and cave art. Learners see how much can be reconstructed from material remains alone, and where the reconstruction has to stop.',
          durationMin: 50,
          standards: [
            { code: 'D2.His.9.6-8', framework: 'C3', text: 'Classify the kinds of historical sources used in a secondary interpretation.' },
            { code: 'D2.His.10.6-8', framework: 'C3', text: 'Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources.' },
          ],
          objectives: [
            'I can list the kinds of evidence available for the period before writing.',
            'I can draw a conclusion about daily life from material remains.',
            'I can explain what material evidence cannot tell us about beliefs.',
          ],
          vocabulary: [
            { term: 'archaeology', definition: 'The study of the past through the physical things people left behind.' },
            { term: 'prehistory', definition: 'The period before written records existed in a given place.' },
            { term: 'hunter-gatherer', definition: 'Someone who lives by hunting animals and collecting wild plants rather than farming.' },
          ],
          materials: ['Images of Palaeolithic tools, burials and cave art', 'A world map', 'The printed worksheet'],
          prep: ['Choose two or three sites to use throughout, so the learner builds familiarity rather than meeting a new place each time.'],
          script: [],
          worksheet: { id: 'g6-ss-u1-l3-ws', title: 'History Without Words', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Names four kinds of prehistoric evidence.', 'Distinguishes a supported conclusion from speculation about belief.'],
            exitTicket: 'Show a burial with grave goods and ask what it does and does not prove.',
          },
          differentiation: {
            support: ['Work from one site only, with three finds.'],
            extension: ['Compare two interpretations of the same cave paintings and explain why experts disagree.'],
          },
          misconceptions: [
            {
              misconception: 'Prehistoric people were less intelligent than us.',
              looksLike: 'Describing them as primitive or stupid.',
              correction: 'Ask the learner to knap a functional stone blade, or watch someone do it. The skill required is considerable and takes years to learn.',
            },
          ],
          homeExtension: ['Find out what the oldest known human site in your country is and when it was occupied.'],
        },
        {
          id: 'g6-ss-u1-l4',
          unitId: 'g6-ss-u1',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'The Neolithic Revolution: Why Would Anyone Start Farming?',
          essentialQuestion: 'If early farming meant harder work and worse food, why did it happen at all?',
          summary:
            'The transition treated as a genuine puzzle rather than as obvious progress. Learners weigh the evidence on diet, health, working hours and population, and construct a multi-causal explanation.',
          durationMin: 55,
          standards: [
            { code: 'D2.His.14.6-8', framework: 'C3', text: 'Explain multiple causes and effects of events and developments in the past.' },
            { code: 'D2.Geo.8.6-8', framework: 'C3', text: 'Analyze how relationships between humans and environments extend or contract spatial patterns of settlement and movement.' },
          ],
          objectives: [
            'I can describe what changed when people began farming.',
            'I can give more than one cause for the shift.',
            'I can evaluate whether a change counts as progress and for whom.',
          ],
          vocabulary: [
            { term: 'domestication', definition: 'Changing a wild plant or animal over generations so it is useful to people.' },
            { term: 'surplus', definition: 'More food than is needed immediately, which can be stored or traded.' },
            { term: 'sedentary', definition: 'Staying in one place rather than moving with the seasons.' },
          ],
          materials: ['Skeleton height and health data for forager and farmer populations', 'A map of the Fertile Crescent', 'The printed worksheet'],
          prep: ['Have the counter-intuitive data ready — average height fell, dental health worsened, working hours rose. The surprise is the lesson.'],
          script: [],
          worksheet: { id: 'g6-ss-u1-l4-ws', title: 'A Very Strange Decision', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['States at least three causes.', 'Uses evidence to argue about costs and benefits.'],
            exitTicket: 'Ask whether farming made life better, and require "for whom" in the answer.',
          },
          differentiation: {
            support: ['Sort statements into "better" and "worse" before attempting the causal argument.'],
            extension: ['Compare independent origins of farming in the Fertile Crescent, China and Mesoamerica.'],
          },
          misconceptions: [
            {
              misconception: 'People invented farming because it was obviously better.',
              looksLike: 'A simple progress narrative with no costs.',
              correction: 'Show the skeletal evidence. Explaining why anyone would accept those costs is a much better question.',
            },
          ],
          homeExtension: ['Find out where three foods in your kitchen were first domesticated.'],
        },
        {
          id: 'g6-ss-u1-l5',
          unitId: 'g6-ss-u1',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'What Settling Down Changed — and What It Cost',
          essentialQuestion: 'What follows from a village that nobody leaves?',
          summary:
            'Consequences of permanent settlement: stored surplus, property, specialisation, inherited inequality, disease from crowding and from animals, and the beginnings of organised authority. The chain runs all the way to the next unit.',
          durationMin: 50,
          standards: [
            { code: 'D2.His.14.6-8', framework: 'C3', text: 'Explain multiple causes and effects of events and developments in the past.' },
            { code: 'D2.Eco.1.6-8', framework: 'C3', text: 'Explain how economic decisions affect the well-being of individuals, businesses, and society.' },
          ],
          objectives: [
            'I can trace a chain of consequences from one change.',
            'I can explain how surplus led to specialisation and to inequality.',
            'I can identify who gained and who lost.',
          ],
          vocabulary: [
            { term: 'specialisation', definition: 'People doing different specific jobs rather than everyone doing everything.' },
            { term: 'social hierarchy', definition: 'A ranking of people by status, wealth or power.' },
            { term: 'zoonotic disease', definition: 'A disease that passes from animals to humans, made far more likely by living closely with livestock.' },
          ],
          materials: ['Images of Çatalhöyük or Jericho', 'Cards for a consequence-chain activity', 'The printed worksheet'],
          prep: ['Write the consequence cards in advance so the lesson is spent arranging and arguing, not writing.'],
          script: [],
          worksheet: { id: 'g6-ss-u1-l5-ws', title: 'One Change, Many Consequences', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Builds a chain of at least four linked consequences.', 'Names both a gain and a loss.'],
            exitTicket: 'Ask how storing grain could lead to somebody becoming powerful.',
          },
          differentiation: {
            support: ['Provide the cards already written and ask only for the ordering and the links.'],
            extension: ['Argue whether inequality was an inevitable result of surplus or a choice that was made.'],
          },
          misconceptions: [
            {
              misconception: 'Civilisation is straightforwardly an improvement.',
              looksLike: 'A one-sided account with no costs mentioned.',
              correction: 'Always ask "for whom". A change that benefits some people and harms others is the normal case in history.',
            },
          ],
          homeExtension: ['List five jobs that only exist because other people grow the food.'],
        },
      ],
    },
    /* ============================================================ UNIT 2 */
    {
      id: 'g6-ss-u2',
      gradeId: 'g6',
      subjectId: 'social-studies',
      sequence: 2,
      title: 'Mesopotamia: Rivers, Cities and Written Law',
      bigIdea:
        'A landscape that gave people fertile silt but no rain and no natural defences pushed them into cooperation, irrigation, record-keeping and, eventually, written law.',
      description:
        'The first cities are studied as a response to a specific environment. The Tigris and Euphrates flooded unpredictably and the plain had almost no stone, no timber and no metal, which made irrigation, trade and organisation not optional but necessary. Writing appears here as an accounting technology before it is anything else, and law appears as an attempt to make power predictable. The unit takes seriously that Mesopotamian cities were violent, unequal and extraordinarily inventive at the same time.',
      weeks: 5,
      standards: [
        { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
        { code: 'D2.Geo.4.6-8', framework: 'C3', text: 'Explain how cultural patterns and economic decisions influence environments and the daily lives of people in both nearby and distant places.' },
        { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
        { code: 'D2.His.14.6-8', framework: 'C3', text: 'Explain multiple causes and effects of events and developments in the past.' },
        { code: 'D2.Eco.1.6-8', framework: 'C3', text: 'Explain how economic decisions affect the well-being of individuals, businesses, and society.' },
      ],
      lessonTitles: [
        'Two Rivers and a Flat Plain',
        'Why Cities Happened Here',
        'Cuneiform: Writing Invented by Accountants',
        'Hammurabi\'s Laws and the Idea of Written Rules',
        'Empires, Trade and What Mesopotamia Had to Import',
      ],
      performanceTask:
        'The City Charter: the learner designs a Mesopotamian city on a supplied map of the floodplain, choosing where to site it and justifying the choice on grounds of water, flood risk, trade routes and defence, then writes five laws for it, each one addressing a problem the geography actually creates.',
      lessons: [
        {
          id: 'g6-ss-u2-l1',
          unitId: 'g6-ss-u2',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'Two Rivers and a Flat Plain',
          essentialQuestion: 'What does this landscape make easy, and what does it make impossible?',
          summary:
            'Map work first. Learners read a physical map of the region, note the rainfall, the flooding pattern, the absence of stone, timber and metal ore, and predict what people living there would have to do.',
          durationMin: 50,
          standards: [
            { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
          ],
          objectives: [
            'I can locate the Tigris, the Euphrates and the Fertile Crescent on a map.',
            'I can explain why the region needed irrigation despite having two rivers.',
            'I can predict three consequences of the missing resources.',
          ],
          vocabulary: [
            { term: 'silt', definition: 'Fine fertile soil carried and deposited by a river.' },
            { term: 'irrigation', definition: 'Bringing water to fields through channels dug for the purpose.' },
            { term: 'floodplain', definition: 'Flat land beside a river that floods regularly.' },
          ],
          materials: ['A physical map of south-west Asia', 'A rainfall map', 'Coloured pencils', 'The printed worksheet'],
          prep: ['Have both a physical and a rainfall map. The contradiction between two big rivers and very little rain is the hook.'],
          script: [],
          worksheet: { id: 'g6-ss-u2-l1-ws', title: 'Reading the Floodplain', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Locates and labels the key features.', 'Explains the need for irrigation from the rainfall data.'],
            exitTicket: 'Ask why a farmer here could not simply rely on rain.',
          },
          differentiation: {
            support: ['Provide a partly labelled map so the reasoning is not blocked by the labelling.'],
            extension: ['Compare the Tigris-Euphrates flood pattern with the Nile and predict the social consequences of the difference.'],
            language: ['Physical geography vocabulary transfers well; build a bilingual map glossary and reuse it every unit.'],
          },
          misconceptions: [
            {
              misconception: 'Rivers mean plenty of water, so farming was easy.',
              looksLike: 'No mention of irrigation or flood control.',
              correction: 'Show the rainfall figures. Two rivers in a near-desert still require enormous engineering to be useful.',
            },
          ],
          homeExtension: ['Find the modern countries the two rivers flow through today.'],
        },
        {
          id: 'g6-ss-u2-l2',
          unitId: 'g6-ss-u2',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'Why Cities Happened Here',
          essentialQuestion: 'What has to be true before thousands of strangers can live in one place?',
          summary:
            'Learners work out the preconditions for a city — reliable surplus, storage, defence, water management, and someone to organise it — and then examine Uruk to see the preconditions in place.',
          durationMin: 50,
          standards: [
            { code: 'D2.His.14.6-8', framework: 'C3', text: 'Explain multiple causes and effects of events and developments in the past.' },
            { code: 'D2.Geo.4.6-8', framework: 'C3', text: 'Explain how cultural patterns and economic decisions influence environments and the daily lives of people in both nearby and distant places.' },
          ],
          objectives: [
            'I can list the conditions a city requires.',
            'I can explain how irrigation encouraged central authority.',
            'I can describe the main features of a Mesopotamian city.',
          ],
          vocabulary: [
            { term: 'city-state', definition: 'A city that governs itself and the farmland immediately around it.' },
            { term: 'ziggurat', definition: 'A stepped temple platform at the centre of a Mesopotamian city.' },
            { term: 'scribe', definition: 'A trained professional writer, one of the few literate people in the society.' },
          ],
          materials: ['A city plan of Uruk or Ur', 'Images of a ziggurat', 'The printed worksheet'],
          prep: ['Have a plan of a real city to work from rather than a generic illustration.'],
          script: [],
          worksheet: { id: 'g6-ss-u2-l2-ws', title: 'What a City Needs', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Lists at least four preconditions.', 'Links irrigation to organised authority.'],
            exitTicket: 'Ask who would have had to be in charge of the canals, and why that mattered.',
          },
          differentiation: {
            support: ['Start from a modern town and list what it needs, then transfer.'],
            extension: ['Compare an early city with a large village and identify the real threshold between them.'],
          },
          misconceptions: [
            {
              misconception: 'Cities appeared because people preferred living together.',
              looksLike: 'A preference-based explanation with no material conditions.',
              correction: 'Ask what they would eat. A city cannot exist without a farming surplus and a way of moving it.',
            },
          ],
          homeExtension: ['Work out where your nearest town gets its water from.'],
        },
        {
          id: 'g6-ss-u2-l3',
          unitId: 'g6-ss-u2',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Cuneiform: Writing Invented by Accountants',
          essentialQuestion: 'Why was the first writing a list of goods rather than a story?',
          summary:
            'Writing traced from clay tokens to sealed envelopes to impressed marks to full script. Learners make their own clay tablets and discover why the wedge shape exists at all.',
          durationMin: 55,
          standards: [
            { code: 'D2.His.9.6-8', framework: 'C3', text: 'Classify the kinds of historical sources used in a secondary interpretation.' },
            { code: 'D2.Eco.1.6-8', framework: 'C3', text: 'Explain how economic decisions affect the well-being of individuals, businesses, and society.' },
          ],
          objectives: [
            'I can explain why writing was invented for record-keeping.',
            'I can describe how the wedge shape follows from the materials used.',
            'I can explain what literacy being rare meant for who held power.',
          ],
          vocabulary: [
            { term: 'cuneiform', definition: 'A writing system made of wedge-shaped marks pressed into clay.' },
            { term: 'stylus', definition: 'The cut reed used to press marks into a clay tablet.' },
            { term: 'literacy', definition: 'The ability to read and write, which in Mesopotamia belonged to a very small trained group.' },
          ],
          materials: ['Air-drying clay or plasticine', 'Cut lolly sticks or chopsticks as styluses', 'Images of real tablets'],
          prep: ['Try writing on clay yourself. The reason for the wedge becomes obvious in about thirty seconds and you want to have felt it.'],
          script: [],
          worksheet: { id: 'g6-ss-u2-l3-ws', title: 'Marks in Clay', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Explains the origin of writing in accounting.', 'Links the script\'s form to its materials.'],
            exitTicket: 'Ask why the marks are wedges and not curves.',
          },
          differentiation: {
            support: ['Focus on the practical clay work and one explanation.'],
            extension: ['Compare cuneiform with hieroglyphs and with an alphabet, and explain what an alphabet made possible.'],
            language: ['Compare writing systems the learner already knows. Non-alphabetic scripts are an asset in this lesson.'],
          },
          misconceptions: [
            {
              misconception: 'Writing was invented so people could tell stories.',
              looksLike: 'Assuming literature came first.',
              correction: 'Show the actual earliest tablets. They are receipts, and the literature comes many centuries later.',
            },
          ],
          homeExtension: ['Count how many written things you rely on in one day that are records rather than stories.'],
        },
        {
          id: 'g6-ss-u2-l4',
          unitId: 'g6-ss-u2',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Hammurabi\'s Laws and the Idea of Written Rules',
          essentialQuestion: 'What changes when the rules are written down where everyone can see them?',
          summary:
            'Learners read a selection of the laws, notice that penalties depend on the social rank of both parties, and weigh what a public written code achieves against what it entrenches.',
          durationMin: 55,
          standards: [
            { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
            { code: 'D2.His.4.6-8', framework: 'C3', text: 'Analyze multiple factors that influenced the perspectives of people during different historical eras.' },
          ],
          objectives: [
            'I can explain the purpose of writing laws down publicly.',
            'I can show from the text that penalties depended on social rank.',
            'I can evaluate the code as both a protection and a system of inequality.',
          ],
          vocabulary: [
            { term: 'code', definition: 'An organised collection of laws.' },
            { term: 'stele', definition: 'An upright stone slab carrying an inscription, set up in public.' },
            { term: 'precedent', definition: 'An earlier decision used as a guide for later similar cases.' },
          ],
          materials: ['A translated selection of about fifteen laws', 'An image of the stele', 'The printed worksheet'],
          prep: ['Choose laws that show the rank distinctions plainly, and include two that are protective as well as two that are harsh.'],
          script: [],
          worksheet: { id: 'g6-ss-u2-l4-ws', title: 'The Same Crime, Different Punishment', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Quotes a law to show rank-dependent penalties.', 'States one benefit and one injustice of the code.'],
            exitTicket: 'Ask what is gained when a rule is public rather than decided case by case.',
          },
          differentiation: {
            support: ['Work with six laws rather than fifteen.'],
            extension: ['Compare a Hammurabi law with a modern statute on the same matter and identify what has and has not changed.'],
          },
          misconceptions: [
            {
              misconception: 'Written law means fair law.',
              looksLike: 'Praising the code as just because it is written down.',
              correction: 'Compare the penalties for the same injury done to people of different rank. Predictable is not the same as equal.',
            },
          ],
          homeExtension: ['Write three household rules as a public code and see whether writing them changes how they work.'],
        },
        {
          id: 'g6-ss-u2-l5',
          unitId: 'g6-ss-u2',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Empires, Trade and What Mesopotamia Had to Import',
          essentialQuestion: 'How does a region with no stone, no timber and no metal build cities and armies?',
          summary:
            'Trade as necessity. Learners map where Mesopotamian materials came from, then examine how Akkad, Babylon and Assyria each extended control over the routes, and at what cost.',
          durationMin: 50,
          standards: [
            { code: 'D2.Eco.1.6-8', framework: 'C3', text: 'Explain how economic decisions affect the well-being of individuals, businesses, and society.' },
            { code: 'D2.Geo.11.6-8', framework: 'C3', text: 'Explain how the relationship between the environmental characteristics of places and production of goods influences the spatial patterns of world trade.' },
            { code: 'D2.His.14.6-8', framework: 'C3', text: 'Explain multiple causes and effects of events and developments in the past.' },
          ],
          objectives: [
            'I can map the sources of key imported materials.',
            'I can explain why trade routes became a military objective.',
            'I can describe how one empire extended and lost control.',
          ],
          vocabulary: [
            { term: 'empire', definition: 'A state controlling several formerly independent territories and peoples.' },
            { term: 'tribute', definition: 'Payment made by a conquered people to a ruling power.' },
            { term: 'trade route', definition: 'A regular path along which goods are carried between regions.' },
          ],
          materials: ['A regional map covering Anatolia, the Levant, the Zagros and the Gulf', 'Cards naming traded goods', 'The printed worksheet'],
          prep: ['Prepare the goods cards with origins on the back so the mapping activity is self-checking.'],
          script: [],
          worksheet: { id: 'g6-ss-u2-l5-ws', title: 'Everything Had to Come From Somewhere', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Maps at least four imported materials to their sources.', 'Links resource need to imperial expansion.'],
            exitTicket: 'Ask why controlling a mountain pass could matter more than controlling farmland.',
          },
          differentiation: {
            support: ['Map three goods only, with the routes already drawn.'],
            extension: ['Argue whether Assyrian expansion was driven mainly by resources, security or ideology.'],
          },
          misconceptions: [
            {
              misconception: 'Ancient societies were isolated and self-sufficient.',
              looksLike: 'Assuming everything used in a city was made there.',
              correction: 'Trace a single object — a bronze tool needs copper and tin from two different distant places.',
            },
          ],
          homeExtension: ['Check the origin labels on five household items and map where they came from.'],
        },
      ],
    },

    /* ============================================================ UNIT 3 */
    {
      id: 'g6-ss-u3',
      gradeId: 'g6',
      subjectId: 'social-studies',
      sequence: 3,
      title: 'Egypt and Nubia: The Nile and Its Kingdoms',
      bigIdea:
        'A river that flooded on schedule made a long thin country possible — and it linked two great kingdoms, Egypt and Nubia, that traded, fought, and each in turn ruled the other.',
      description:
        'Egypt is studied alongside Nubia throughout, not as a footnote to it. The Nile\'s predictability is contrasted with Mesopotamia\'s unpredictable rivers, and the political consequences of that difference are drawn out. The unit covers government and daily work, belief and burial and the enormous evidential bias they create, and the kingdom of Kush, which controlled the gold routes, ruled Egypt as its Twenty-Fifth Dynasty, and outlasted pharaonic Egypt by centuries.',
      weeks: 5,
      standards: [
        { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
        { code: 'D2.Geo.6.6-8', framework: 'C3', text: 'Explain how the physical and human characteristics of places and regions are connected to human identities and cultures.' },
        { code: 'D2.His.16.6-8', framework: 'C3', text: 'Organize applicable evidence into a coherent argument about the past.' },
        { code: 'D2.Eco.1.6-8', framework: 'C3', text: 'Explain how economic decisions affect the well-being of individuals, businesses, and society.' },
        { code: 'D2.His.3.6-8', framework: 'C3', text: 'Use questions generated about individuals and groups to analyze why they, and the developments they shaped, are seen as historically significant.' },
      ],
      lessonTitles: [
        'The River That Behaved Itself',
        'Who Actually Ran Egypt?',
        'Belief, Burial and the Evidence It Left Behind',
        'Nubia and Kush: A Kingdom in Its Own Right',
        'Gold, Ebony and Grain: Trade Along the Nile',
      ],
      performanceTask:
        'The Museum Label Problem: given six real objects from Egypt and Nubia, the learner writes a museum label for each — no more than sixty words — stating what it is, what it shows, and one thing it cannot tell us. At least two labels must correct a common assumption, and the Nubian objects must be described on their own terms rather than by comparison with Egypt.',
      lessons: [
        {
          id: 'g6-ss-u3-l1',
          unitId: 'g6-ss-u3',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'The River That Behaved Itself',
          essentialQuestion: 'What difference does it make when the flood arrives at the same time every year?',
          summary:
            'Direct comparison with Mesopotamia. Learners examine the Nile\'s annual cycle, the narrow strip of black land against the red desert, and the political effects of predictability and of natural defence.',
          durationMin: 50,
          standards: [
            { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
            { code: 'D2.Geo.6.6-8', framework: 'C3', text: 'Explain how the physical and human characteristics of places and regions are connected to human identities and cultures.' },
          ],
          objectives: [
            'I can describe the Nile\'s annual flood cycle.',
            'I can explain why Egypt was easier to unify than Mesopotamia.',
            'I can read a satellite image to identify cultivated land.',
          ],
          vocabulary: [
            { term: 'inundation', definition: 'The Nile\'s annual flood, which deposited fertile silt on the fields.' },
            { term: 'delta', definition: 'The fan of channels where a river splits before reaching the sea.' },
            { term: 'cataract', definition: 'A stretch of rapids and rocks in the Nile, forming a natural boundary and a barrier to boats.' },
          ],
          materials: ['A satellite image of the Nile', 'A physical map of north-east Africa', 'The printed worksheet'],
          prep: ['Get a night-time satellite image if you can. The lit strip along the river makes the whole geography argument in one picture.'],
          script: [],
          worksheet: { id: 'g6-ss-u3-l1-ws', title: 'Black Land, Red Land', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Describes the flood cycle and its agricultural effect.', 'Explains one political consequence of predictability.'],
            exitTicket: 'Ask why Egyptians thought of their world as two strips rather than as a territory.',
          },
          differentiation: {
            support: ['Work only with the satellite image and one question.'],
            extension: ['Explain how the Aswan High Dam changed the flood cycle and what that cost.'],
          },
          misconceptions: [
            {
              misconception: 'Egypt is mostly desert, so it must have been poor.',
              looksLike: 'Ignoring the extraordinary productivity of the floodplain.',
              correction: 'Compare crop yields per hectare. The narrow strip was one of the most productive places on Earth.',
            },
          ],
          homeExtension: ['Find a night-time satellite photograph of Egypt and describe what the lights show.'],
        },
        {
          id: 'g6-ss-u3-l2',
          unitId: 'g6-ss-u3',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'Who Actually Ran Egypt?',
          essentialQuestion: 'Below the pharaoh, who made the country work?',
          summary:
            'The administration rather than the throne. Learners examine the roles of viziers, nomarchs, scribes, tax assessors, priests and the enormous majority who farmed, and how power was distributed and recorded.',
          durationMin: 50,
          standards: [
            { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
            { code: 'D2.His.3.6-8', framework: 'C3', text: 'Use questions generated about individuals and groups to analyze why they, and the developments they shaped, are seen as historically significant.' },
          ],
          objectives: [
            'I can describe the main levels of Egyptian administration.',
            'I can explain why scribes were powerful despite not being nobles.',
            'I can explain how the state collected and redistributed grain.',
          ],
          vocabulary: [
            { term: 'pharaoh', definition: 'The ruler of Egypt, understood as both a king and a divine figure.' },
            { term: 'vizier', definition: 'The chief official who ran the government day to day.' },
            { term: 'corvée', definition: 'Labour owed to the state, often during the flood season when fields could not be worked.' },
          ],
          materials: ['A diagram of the administrative hierarchy', 'Extracts from scribal texts', 'The printed worksheet'],
          prep: ['Find a translated scribe\'s text praising the profession. It is funny, self-serving and very useful for sourcing practice.'],
          script: [],
          worksheet: { id: 'g6-ss-u3-l2-ws', title: 'The People Who Kept the Records', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Maps at least four roles in the hierarchy.', 'Explains the power of literacy.'],
            exitTicket: 'Ask why becoming a scribe was one of the few ways to change your position in life.',
          },
          differentiation: {
            support: ['Use a simple four-level diagram to complete.'],
            extension: ['Analyse a scribal text for bias — the scribes wrote the sources that tell us scribes were important.'],
          },
          misconceptions: [
            {
              misconception: 'The pharaoh personally decided everything.',
              looksLike: 'A one-person account of a state of millions.',
              correction: 'Count the surviving administrative documents. Running Egypt was a vast bureaucratic operation.',
            },
          ],
          homeExtension: ['List the jobs needed to run your school or town and sort them into levels.'],
        },
        {
          id: 'g6-ss-u3-l3',
          unitId: 'g6-ss-u3',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Belief, Burial and the Evidence It Left Behind',
          essentialQuestion: 'Why do we know so much more about Egyptian death than about Egyptian life?',
          summary:
            'Religion and funerary practice, taught alongside the evidential bias they create. Tombs were built in the dry desert to last; houses were built of mud brick on the floodplain and are gone.',
          durationMin: 55,
          standards: [
            { code: 'D2.His.10.6-8', framework: 'C3', text: 'Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources.' },
            { code: 'D2.His.16.6-8', framework: 'C3', text: 'Organize applicable evidence into a coherent argument about the past.' },
          ],
          objectives: [
            'I can describe key Egyptian beliefs about the afterlife.',
            'I can explain why funerary evidence dominates the record.',
            'I can identify what we do not know about ordinary daily life, and why.',
          ],
          vocabulary: [
            { term: 'mummification', definition: 'Preserving a body for the afterlife by drying and wrapping it.' },
            { term: 'afterlife', definition: 'Continued existence after death, which Egyptian practice was designed to secure.' },
            { term: 'grave goods', definition: 'Objects buried with a person, often our main source for their society.' },
          ],
          materials: ['Images of tomb goods and of a workers\' village such as Deir el-Medina', 'The printed worksheet'],
          prep: ['Have the Deir el-Medina material ready. It is the exception that shows what is normally missing.'],
          script: [],
          worksheet: { id: 'g6-ss-u3-l3-ws', title: 'What the Desert Kept', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Explains at least two beliefs from evidence.', 'Explains the preservation bias clearly.'],
            exitTicket: 'Ask what we would know about Egypt if the floodplain had preserved houses as well as the desert preserved tombs.',
          },
          differentiation: {
            support: ['Focus on three objects and what each shows.'],
            extension: ['Use the Deir el-Medina records, including a strike over unpaid rations, to reconstruct working life.'],
            language: ['Provide a visual glossary of funerary objects; the vocabulary is dense and specific.'],
          },
          misconceptions: [
            {
              misconception: 'Egyptians were obsessed with death.',
              looksLike: 'Describing the whole culture through tombs.',
              correction: 'Point at the preservation bias. We see their tombs because tombs survive, not because tombs were all they cared about.',
            },
          ],
          homeExtension: ['Ask what objects your family would want kept, and what that would tell a historian.'],
        },
        {
          id: 'g6-ss-u3-l4',
          unitId: 'g6-ss-u3',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Nubia and Kush: A Kingdom in Its Own Right',
          essentialQuestion: 'What was happening upriver, and why is it so often left out?',
          summary:
            'Nubia studied on its own terms: the kingdoms of Kerma, Napata and Meroë, their control of gold and trade, the Kushite pharaohs who ruled Egypt as the Twenty-Fifth Dynasty, and the iron industry and script of Meroë.',
          durationMin: 55,
          standards: [
            { code: 'D2.His.3.6-8', framework: 'C3', text: 'Use questions generated about individuals and groups to analyze why they, and the developments they shaped, are seen as historically significant.' },
            { code: 'D2.His.10.6-8', framework: 'C3', text: 'Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources.' },
            { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
          ],
          objectives: [
            'I can locate Kerma, Napata and Meroë and describe each kingdom.',
            'I can explain how Kush came to rule Egypt.',
            'I can explain why Nubian history is under-represented in many accounts.',
          ],
          vocabulary: [
            { term: 'Kush', definition: 'The Nubian kingdom south of Egypt, powerful for well over a thousand years.' },
            { term: 'Meroë', definition: 'The later Kushite capital, a major ironworking centre with its own script.' },
            { term: 'Twenty-Fifth Dynasty', definition: 'The line of Kushite kings who ruled Egypt for roughly a century.' },
          ],
          materials: ['A map of the Nile from the delta to Meroë', 'Images of Nubian pyramids and Kerma pottery', 'The printed worksheet'],
          prep: [
            'Find images of the Nubian pyramids at Meroë. There are more pyramids in Sudan than in Egypt and almost no learner knows it.',
            'Prepare to address why the imbalance exists: excavation funding, colonial-era priorities, and an undeciphered script.',
          ],
          script: [],
          worksheet: { id: 'g6-ss-u3-l4-ws', title: 'Upriver', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Describes Kush independently of Egypt.', 'Gives at least one reason for its under-representation.'],
            exitTicket: 'Ask for two things Kush is significant for that have nothing to do with Egypt.',
          },
          differentiation: {
            support: ['Focus on Meroë alone, with the pyramids and the ironworking.'],
            extension: ['Investigate the Meroitic script and why it remains largely undeciphered.'],
          },
          misconceptions: [
            {
              misconception: 'Nubia was a lesser copy of Egypt.',
              looksLike: 'Describing Kush only in terms of what it borrowed.',
              correction: 'Lead with what is distinctive — Kerma pottery, Meroitic iron, the script, the queens who ruled in their own right.',
            },
          ],
          homeExtension: ['Find out how many pyramids there are in Sudan compared with Egypt.'],
        },
        {
          id: 'g6-ss-u3-l5',
          unitId: 'g6-ss-u3',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Gold, Ebony and Grain: Trade Along the Nile',
          essentialQuestion: 'What moved up and down this river, and who got rich from it?',
          summary:
            'The Nile as a two-way highway: current carrying boats north, prevailing wind carrying them south. Learners map the goods, the cataract portages, the Red Sea routes and the desert caravans.',
          durationMin: 50,
          standards: [
            { code: 'D2.Eco.1.6-8', framework: 'C3', text: 'Explain how economic decisions affect the well-being of individuals, businesses, and society.' },
            { code: 'D2.Geo.11.6-8', framework: 'C3', text: 'Explain how the relationship between the environmental characteristics of places and production of goods influences the spatial patterns of world trade.' },
          ],
          objectives: [
            'I can explain why the Nile was navigable in both directions.',
            'I can map the main traded goods and their origins.',
            'I can explain who benefited from controlling a cataract.',
          ],
          vocabulary: [
            { term: 'caravan', definition: 'A group travelling together with pack animals across difficult country.' },
            { term: 'portage', definition: 'Carrying boats or cargo overland around an obstacle such as rapids.' },
            { term: 'luxury good', definition: 'A high-value item traded over long distances, such as incense, ebony or gold.' },
          ],
          materials: ['A trade map of the Nile valley and the Red Sea', 'Goods cards', 'The printed worksheet'],
          prep: ['Check the wind and current explanation yourself; it is the detail that makes the whole trade system make sense.'],
          script: [],
          worksheet: { id: 'g6-ss-u3-l5-ws', title: 'Downstream and Upwind', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Explains two-way navigation.', 'Maps at least four goods to their origins.'],
            exitTicket: 'Ask why a kingdom sited at a cataract could become wealthy without producing anything itself.',
          },
          differentiation: {
            support: ['Map three goods with routes already drawn.'],
            extension: ['Investigate Hatshepsut\'s expedition to Punt and what it was for.'],
          },
          misconceptions: [
            {
              misconception: 'Rivers only allow travel downstream.',
              looksLike: 'Assuming all Nile trade flowed north.',
              correction: 'Introduce the prevailing northerly wind. Sail upstream, drift downstream — which is why Egyptian boats had both sails and oars.',
            },
          ],
          homeExtension: ['Find out which way the wind usually blows where you live and how that affected old travel routes.'],
        },
      ],
    },
    /* ============================================================ UNIT 4 */
    {
      id: 'g6-ss-u4',
      gradeId: 'g6',
      subjectId: 'social-studies',
      sequence: 4,
      title: 'Ancient India and Ancient China',
      bigIdea:
        'Two river civilisations on the far side of the world\'s highest mountains, each shaped by a landscape that dictated when you could plant, where you could travel, and how big a state could get.',
      description:
        'The Indus cities come first, and they are genuinely strange: enormous, carefully planned, apparently well drained, with a script nobody can read and no obvious palaces or royal tombs. Then the monsoon and the Ganges plain, and the ideas that spread along the trade routes. China follows with its own contrast — the loess soil and the unpredictable Yellow River, the long dynastic sequence, and the competing answers of Confucianism, Daoism and Legalism to the same question about how people should be governed.',
      weeks: 6,
      standards: [
        { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
        { code: 'D2.His.1.6-8', framework: 'C3', text: 'Analyze connections among events and developments in broader historical contexts.' },
        { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
        { code: 'D2.Geo.7.6-8', framework: 'C3', text: 'Explain how changes in transportation and communication technology influence the spatial connections among human settlements and affect the diffusion of ideas and cultural practices.' },
        { code: 'D2.His.10.6-8', framework: 'C3', text: 'Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources.' },
      ],
      lessonTitles: [
        'The Indus Cities and the Script We Cannot Read',
        'Monsoon, Mountains and the Ganges Plain',
        'Ideas That Travelled: Vedic Religion, Buddhism and the Mauryan State',
        'Loess, Floods and the First Chinese Dynasties',
        'Three Answers to One Question: Confucius, Laozi and the Legalists',
      ],
      performanceTask:
        'The Advisor\'s Memorandum: the learner takes the role of an advisor to a newly powerful ruler in either the Mauryan or the Qin state, and writes a one-page memorandum recommending how the realm should be governed. They must draw on at least two of the philosophies studied, address a specific geographic problem their ruler actually faces, and state honestly what their recommendation would cost.',
      lessons: [
        {
          id: 'g6-ss-u4-l1',
          unitId: 'g6-ss-u4',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'The Indus Cities and the Script We Cannot Read',
          essentialQuestion: 'What can you say about a civilisation whose writing nobody can decipher?',
          summary:
            'Mohenjo-daro and Harappa: grid streets, standardised bricks, covered drains, granaries, a vast trade network, and no identifiable royal tombs or palaces. Learners work from material evidence only, and confront how much is genuinely unknown.',
          durationMin: 55,
          standards: [
            { code: 'D2.His.10.6-8', framework: 'C3', text: 'Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources.' },
            { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
          ],
          objectives: [
            'I can describe the planning features of an Indus city.',
            'I can draw conclusions from material evidence without written sources.',
            'I can state clearly what remains unknown and why.',
          ],
          vocabulary: [
            { term: 'urban planning', definition: 'Designing a city\'s layout in advance rather than letting it grow at random.' },
            { term: 'standardisation', definition: 'Making things to a fixed size or weight across a whole region.' },
            { term: 'undeciphered', definition: 'A script that survives but cannot yet be read.' },
          ],
          materials: ['Site plans of Mohenjo-daro', 'Images of Indus seals and standardised weights', 'A map of the Indus system', 'The printed worksheet'],
          prep: ['Have the standardised brick and weight evidence to hand. It is the strongest argument for large-scale organisation and it needs no text.'],
          script: [],
          worksheet: { id: 'g6-ss-u4-l1-ws', title: 'A City With No Kings We Can Find', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Describes three planning features with evidence.', 'Separates supported conclusions from speculation.'],
            exitTicket: 'Ask what the standardised weights prove, and what they do not.',
          },
          differentiation: {
            support: ['Work from the city plan alone and list what you can see.'],
            extension: ['Compare the absence of monumental royal burials here with their prominence in Egypt, and consider several explanations.'],
          },
          misconceptions: [
            {
              misconception: 'A civilisation without a known king must have been simple.',
              looksLike: 'Ranking the Indus cities below Egypt because no ruler is identified.',
              correction: 'Compare the drainage. Indus sanitation exceeded most cities anywhere for the next three thousand years.',
            },
          ],
          homeExtension: ['Look at a street map of your town and decide whether it was planned or grew.'],
        },
        {
          id: 'g6-ss-u4-l2',
          unitId: 'g6-ss-u4',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'Monsoon, Mountains and the Ganges Plain',
          essentialQuestion: 'How does a wind that changes direction twice a year run a subcontinent?',
          summary:
            'Physical geography of South Asia: the Himalaya as barrier and water source, the monsoon cycle, and the shift of population and power eastwards to the Ganges plain.',
          durationMin: 50,
          standards: [
            { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
            { code: 'D2.Geo.8.6-8', framework: 'C3', text: 'Analyze how relationships between humans and environments extend or contract spatial patterns of settlement and movement.' },
          ],
          objectives: [
            'I can explain the monsoon cycle and its effect on farming.',
            'I can explain how the Himalaya shaped contact with the rest of Asia.',
            'I can account for the eastward shift towards the Ganges.',
          ],
          vocabulary: [
            { term: 'monsoon', definition: 'A seasonal reversal of wind that brings heavy rain for part of the year and dry conditions for the rest.' },
            { term: 'subcontinent', definition: 'A large distinct landmass forming part of a continent.' },
            { term: 'alluvial', definition: 'Made of sediment deposited by rivers, and usually very fertile.' },
          ],
          materials: ['A physical map of South Asia', 'Monsoon rainfall diagrams', 'The printed worksheet'],
          prep: ['Have monthly rainfall figures for one city. The annual pattern is more convincing as numbers than as a description.'],
          script: [],
          worksheet: { id: 'g6-ss-u4-l2-ws', title: 'Waiting for the Rain', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Explains both phases of the monsoon.', 'Links rainfall timing to the agricultural calendar.'],
            exitTicket: 'Ask what happens to a farming society when the monsoon arrives three weeks late.',
          },
          differentiation: {
            support: ['Use a simple two-arrow diagram for the two wind phases.'],
            extension: ['Investigate how monsoon failure contributed to specific historical famines.'],
            language: ['Learners with family links to monsoon regions often have direct knowledge; invite it explicitly.'],
          },
          misconceptions: [
            {
              misconception: 'The monsoon is simply a rainy season.',
              looksLike: 'No mention of the wind reversal that causes it.',
              correction: 'Explain the land-sea heating difference. The wind direction is the mechanism, and the rain is the consequence.',
            },
          ],
          homeExtension: ['Compare monthly rainfall for your own town with a monsoon city.'],
        },
        {
          id: 'g6-ss-u4-l3',
          unitId: 'g6-ss-u4',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Ideas That Travelled: Vedic Religion, Buddhism and the Mauryan State',
          essentialQuestion: 'How does an idea travel further than an army?',
          summary:
            'The Vedic tradition and the emergence of Buddhism and Jainism, then Ashoka\'s Mauryan empire and the rock and pillar edicts — a ruler using inscriptions across a subcontinent to broadcast a policy.',
          durationMin: 55,
          standards: [
            { code: 'D2.His.1.6-8', framework: 'C3', text: 'Analyze connections among events and developments in broader historical contexts.' },
            { code: 'D2.Geo.7.6-8', framework: 'C3', text: 'Explain how changes in transportation and communication technology influence the spatial connections among human settlements and affect the diffusion of ideas and cultural practices.' },
            { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
          ],
          objectives: [
            'I can describe the main features of the Vedic tradition and of early Buddhism.',
            'I can trace how Buddhism spread along trade routes.',
            'I can analyse an edict of Ashoka as a primary source.',
          ],
          vocabulary: [
            { term: 'Vedas', definition: 'The oldest sacred texts of the Indian tradition, transmitted orally for centuries before being written.' },
            { term: 'edict', definition: 'An official public proclamation issued by a ruler.' },
            { term: 'diffusion', definition: 'The spread of an idea or practice from one place or group to another.' },
          ],
          materials: ['Translated extracts from Ashoka\'s edicts', 'A map of Mauryan territory and trade routes', 'The printed worksheet'],
          prep: ['Choose two edicts, ideally one on kindness to animals and one on tolerance between religions, and read them yourself for their propaganda function as well as their content.'],
          script: [],
          worksheet: { id: 'g6-ss-u4-l3-ws', title: 'Carved in Rock, Sent Everywhere', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Sources an edict using the five questions.', 'Maps the spread of Buddhism along known routes.'],
            exitTicket: 'Ask what Ashoka\'s edicts prove and what they only claim.',
          },
          differentiation: {
            support: ['Work with one short edict and the five sourcing questions.'],
            extension: ['Compare Ashoka\'s edicts with Hammurabi\'s laws as two different uses of public inscription.'],
            language: ['Provide a glossary of religious terms with careful, respectful definitions agreed in advance.'],
          },
          misconceptions: [
            {
              misconception: 'Ashoka\'s edicts describe what actually happened.',
              looksLike: 'Treating the inscriptions as a factual account of imperial policy.',
              correction: 'Apply the sourcing questions. They are excellent evidence of what he wanted proclaimed, which is a different claim.',
            },
          ],
          homeExtension: ['Find a public notice in your area and work out who put it there and what they wanted.'],
        },
        {
          id: 'g6-ss-u4-l4',
          unitId: 'g6-ss-u4',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Loess, Floods and the First Chinese Dynasties',
          essentialQuestion: 'Why is the Yellow River called both the cradle of China and China\'s sorrow?',
          summary:
            'The loess plateau, the silt-laden river that builds its own bed above the plain, and the flood control that required organisation on a huge scale. Shang and Zhou, oracle bones, bronze, and the Mandate of Heaven.',
          durationMin: 55,
          standards: [
            { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
            { code: 'D2.His.14.6-8', framework: 'C3', text: 'Explain multiple causes and effects of events and developments in the past.' },
            { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
          ],
          objectives: [
            'I can explain why the Yellow River floods so destructively.',
            'I can describe oracle bones as a primary source.',
            'I can explain the Mandate of Heaven and what it justified.',
          ],
          vocabulary: [
            { term: 'loess', definition: 'Fine wind-blown soil, extremely fertile and extremely easily eroded.' },
            { term: 'oracle bone', definition: 'An animal bone or turtle shell used for divination, carrying the earliest known Chinese writing.' },
            { term: 'Mandate of Heaven', definition: 'The idea that a ruler governs with heaven\'s approval, which can be withdrawn if he rules badly.' },
          ],
          materials: ['A physical map of eastern China', 'Images of oracle bones and Shang bronzes', 'The printed worksheet'],
          prep: ['Find a diagram of the Yellow River bed sitting above the surrounding plain. It explains the flooding in one picture.'],
          script: [],
          worksheet: { id: 'g6-ss-u4-l4-ws', title: 'A River Above the Plain', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Explains the silt and flooding mechanism.', 'Explains how the Mandate of Heaven both legitimised and threatened rulers.'],
            exitTicket: 'Ask how the Mandate of Heaven could be used to justify a rebellion.',
          },
          differentiation: {
            support: ['Focus on the river and one dynasty.'],
            extension: ['Compare the Mandate of Heaven with Egyptian divine kingship as two theories of legitimacy.'],
          },
          misconceptions: [
            {
              misconception: 'Chinese dynasties succeeded one another in an orderly line.',
              looksLike: 'A tidy timeline with no overlaps, gaps or division.',
              correction: 'Show the periods of fragmentation and competing states. The tidy list is a later organising device.',
            },
          ],
          homeExtension: ['Find out whether any river near you has been embanked, and what happens when the banks fail.'],
        },
        {
          id: 'g6-ss-u4-l5',
          unitId: 'g6-ss-u4',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Three Answers to One Question: Confucius, Laozi and the Legalists',
          essentialQuestion: 'If people will not behave, do you educate them, leave them alone, or punish them?',
          summary:
            'Three philosophies presented as competing answers to a live political problem during the Warring States period, then tested against what the Qin actually did and how quickly it fell.',
          durationMin: 55,
          standards: [
            { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
            { code: 'D2.His.4.6-8', framework: 'C3', text: 'Analyze multiple factors that influenced the perspectives of people during different historical eras.' },
            { code: 'D2.His.14.6-8', framework: 'C3', text: 'Explain multiple causes and effects of events and developments in the past.' },
          ],
          objectives: [
            'I can summarise each philosophy\'s answer to how people should be governed.',
            'I can apply each one to a specific problem and predict its policy.',
            'I can explain how Legalist methods unified China and why the Qin fell so fast.',
          ],
          vocabulary: [
            { term: 'Confucianism', definition: 'A tradition holding that good order comes from moral example, education and properly ordered relationships.' },
            { term: 'Daoism', definition: 'A tradition holding that harmony comes from acting in accordance with the natural way and governing as little as possible.' },
            { term: 'Legalism', definition: 'A doctrine holding that order comes from strict published laws with severe and certain punishments.' },
          ],
          materials: ['Short translated extracts from each tradition', 'Scenario cards posing governance problems', 'The printed worksheet'],
          prep: [
            'Write four scenario cards in advance: a famine, a corrupt official, a border raid, a rise in theft.',
            'Do not signal which philosophy you prefer. The argument is better when the adult is genuinely neutral.',
          ],
          script: [],
          worksheet: { id: 'g6-ss-u4-l5-ws', title: 'What Would Each of Them Do?', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['States each position accurately.', 'Applies all three to one scenario with different outcomes.'],
            exitTicket: 'Give one scenario and ask for the Confucian and Legalist responses side by side.',
          },
          differentiation: {
            support: ['Compare two philosophies rather than three.'],
            extension: ['Argue which tradition best explains how the Han state actually operated, using evidence.'],
            language: ['Provide short paraphrased extracts alongside the translations; classical translations are dense.'],
          },
          misconceptions: [
            {
              misconception: 'These are religions rather than political philosophies.',
              looksLike: 'Treating Legalism as a belief system about gods.',
              correction: 'Keep returning to the scenario cards. These are answers to the practical question of how to run a state.',
            },
          ],
          homeExtension: ['Ask two adults how they would handle one of the scenarios and work out which philosophy they are closest to.'],
        },
      ],
    },

    /* ============================================================ UNIT 5 */
    {
      id: 'g6-ss-u5',
      gradeId: 'g6',
      subjectId: 'social-studies',
      sequence: 5,
      title: 'Ancient Greece: City-States and the Question of Who Counts',
      bigIdea:
        'A mountainous, fragmented landscape produced hundreds of small independent states that argued endlessly about how to govern themselves — and the most famous of their answers included far fewer people than its reputation suggests.',
      description:
        'Greek geography comes first, because the mountains and the sea explain both the political fragmentation and the outward orientation towards colonies and trade. Athens and Sparta are compared as two serious and very different solutions to the problem of organising a community. The unit\'s central lesson examines Athenian democracy honestly: genuinely radical in giving ordinary citizens direct power, and built on the exclusion of women, foreign residents and a large enslaved population.',
      weeks: 5,
      standards: [
        { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
        { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
        { code: 'D2.Civ.2.6-8', framework: 'C3', text: 'Explain specific roles played by citizens (such as voters, jurors, taxpayers, members of the armed forces, petitioners, protesters, and office-holders).' },
        { code: 'D2.His.2.6-8', framework: 'C3', text: 'Classify series of historical events and developments as examples of change and/or continuity.' },
        { code: 'D2.His.16.6-8', framework: 'C3', text: 'Organize applicable evidence into a coherent argument about the past.' },
      ],
      lessonTitles: [
        'Mountains, Islands and Why Greece Had Hundreds of States',
        'Athens and Sparta: Two Answers to the Same Problem',
        'Citizens and Non-Citizens: Who Counted in Athenian Democracy',
        'The Persian Wars, Told From Both Sides',
        'What Outlasted the City-States',
      ],
      performanceTask:
        'The Constitution Debate: the learner writes and delivers a five-minute case for how a newly founded Greek colony should be governed, drawing on Athenian, Spartan and oligarchic models. They must state explicitly who will and will not have a say under their proposal, and answer one hostile question about that exclusion.',
      lessons: [
        {
          id: 'g6-ss-u5-l1',
          unitId: 'g6-ss-u5',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'Mountains, Islands and Why Greece Had Hundreds of States',
          essentialQuestion: 'Why did Greece never become one country?',
          summary:
            'Physical geography as political explanation. Learners measure travel times across mountain ranges and across water, and discover that the sea united Greeks while the land divided them.',
          durationMin: 50,
          standards: [
            { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
            { code: 'D2.Geo.8.6-8', framework: 'C3', text: 'Analyze how relationships between humans and environments extend or contract spatial patterns of settlement and movement.' },
          ],
          objectives: [
            'I can describe the physical geography of Greece and the Aegean.',
            'I can explain why sea travel was easier than land travel.',
            'I can link fragmentation to the rise of independent city-states and colonies.',
          ],
          vocabulary: [
            { term: 'polis', definition: 'A Greek city-state: a city together with the land around it, governing itself.' },
            { term: 'colony', definition: 'A new settlement founded overseas by people from an existing city.' },
            { term: 'peninsula', definition: 'Land almost surrounded by water.' },
          ],
          materials: ['A physical map of Greece and the Aegean', 'A map of Greek colonies around the Mediterranean and Black Sea', 'The printed worksheet'],
          prep: ['Have both maps side by side. The scatter of colonies makes no sense without the mountains.'],
          script: [],
          worksheet: { id: 'g6-ss-u5-l1-ws', title: 'Divided by Land, Joined by Sea', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Explains fragmentation from the terrain.', 'Explains colonisation from land shortage and sea access.'],
            exitTicket: 'Ask why a Greek city would found a colony four hundred miles away rather than expand next door.',
          },
          differentiation: {
            support: ['Compare two journeys of similar distance, one over mountains and one by sea.'],
            extension: ['Explain why Greek colonies cluster on coasts and almost never inland.'],
          },
          misconceptions: [
            {
              misconception: 'Ancient Greece was a single country.',
              looksLike: 'Referring to "the Greek government".',
              correction: 'Count the city-states. Athens and Sparta fought a long war against each other; they were not one state.',
            },
          ],
          homeExtension: ['Work out how long it would take to walk over the nearest range of hills to you, and compare with going round.'],
        },
        {
          id: 'g6-ss-u5-l2',
          unitId: 'g6-ss-u5',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'Athens and Sparta: Two Answers to the Same Problem',
          essentialQuestion: 'What is a community for, and what should it ask of the people in it?',
          summary:
            'A structured comparison across government, education, the role of women, the economy and the military. Both are treated as coherent systems with real trade-offs rather than as hero and villain.',
          durationMin: 55,
          standards: [
            { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
            { code: 'D2.His.2.6-8', framework: 'C3', text: 'Classify series of historical events and developments as examples of change and/or continuity.' },
          ],
          objectives: [
            'I can compare Athens and Sparta across five categories.',
            'I can explain a trade-off each system accepted.',
            'I can support a comparison with evidence rather than reputation.',
          ],
          vocabulary: [
            { term: 'oligarchy', definition: 'Rule by a small group.' },
            { term: 'helot', definition: 'A member of the large enslaved population that farmed Spartan land and made the Spartan system possible.' },
            { term: 'agoge', definition: 'The compulsory Spartan upbringing and military training system for boys.' },
          ],
          materials: ['A comparison grid', 'Short source extracts on both cities', 'The printed worksheet'],
          prep: ['Include the helots from the start. A description of Sparta that omits them is not a description of Sparta.'],
          script: [],
          worksheet: { id: 'g6-ss-u5-l2-ws', title: 'Two Cities, Five Questions', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Completes the comparison with evidence.', 'States a genuine trade-off for each city.'],
            exitTicket: 'Ask which city gave more freedom, and require "to whom" in the answer.',
          },
          differentiation: {
            support: ['Compare three categories rather than five.'],
            extension: ['Note that Spartan women had property rights Athenian women did not, and discuss what that complicates.'],
            language: ['A comparison grid is far easier to complete than continuous prose; let the grid be the outcome.'],
          },
          misconceptions: [
            {
              misconception: 'Athens was free and Sparta was not.',
              looksLike: 'A simple good-and-bad comparison.',
              correction: 'Count who was excluded in each. Both were built on enslaved labour, and the freedoms were distributed differently rather than simply present or absent.',
            },
          ],
          homeExtension: ['Ask someone at home which city they would rather live in and make them say who they would be there.'],
        },

        /* ------------------------------------------------------- AUTHORED */
        {
          id: 'g6-ss-u5-l3',
          unitId: 'g6-ss-u5',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'authored',
          title: 'Citizens and Non-Citizens: Who Counted in Athenian Democracy',
          essentialQuestion: 'Athenian democracy gave ordinary people real power over real decisions — so why could most of the people in Athens not use it?',
          summary:
            'The lesson opens by running a vote in the room in which the learner is very likely not permitted to take part, which makes exclusion something felt rather than described. It then examines how Athenian democracy actually worked — the Assembly, the lottery for office, paid jury service, ostracism — with equal seriousness, and ends with the learner shading a hundred-square grid to show who could and could not participate. Both halves matter: it was genuinely radical, and it excluded most of the population.',
          durationMin: 55,
          standards: [
            { code: 'D2.Civ.2.6-8', framework: 'C3', text: 'Explain specific roles played by citizens (such as voters, jurors, taxpayers, members of the armed forces, petitioners, protesters, and office-holders).' },
            { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
            { code: 'D2.His.16.6-8', framework: 'C3', text: 'Organize applicable evidence into a coherent argument about the past.' },
            { code: 'D2.His.4.6-8', framework: 'C3', text: 'Analyze multiple factors that influenced the perspectives of people during different historical eras.' },
          ],
          objectives: [
            'I can describe how a decision was actually made in the Athenian Assembly.',
            'I can explain why selection by lottery is a different idea from selection by election.',
            'I can state who was excluded from citizenship and roughly what proportion of the population that was.',
            'I can argue whether Athens should be called a democracy, using evidence on both sides.',
          ],
          vocabulary: [
            { term: 'citizen', definition: 'In Athens, an adult free man whose parents were both Athenian — entitled to speak and vote in the Assembly.' },
            { term: 'Assembly', definition: 'The open meeting of citizens on the Pnyx hill where laws were debated and decided by show of hands.' },
            { term: 'metic', definition: 'A free foreign resident of Athens who paid tax and could be required to fight, but could not vote or own land.' },
            { term: 'sortition', definition: 'Choosing officials by lottery rather than by election.' },
            { term: 'ostracism', definition: 'A yearly vote in which citizens could expel one person from Athens for ten years, by writing a name on a pottery sherd.' },
            { term: 'direct democracy', definition: 'A system where citizens vote on the decisions themselves rather than electing representatives to decide for them.' },
          ],
          materials: [
            'Six or seven small cards, prepared in advance, each naming an identity in Athens',
            'A hat, bowl or bag to draw the cards from',
            'A genuinely contested question to vote on — something real about the household or the week ahead',
            'The printed worksheet',
            'A pencil and a coloured pencil for the population grid',
            'A calculator, for the percentages in section two',
          ],
          prep: [
            'Write the identity cards before the lesson. Suggested set: adult male citizen; adult male citizen; adult woman of a citizen family; enslaved man working in the silver mines; enslaved woman working in a household; metic merchant from Corinth; boy aged fourteen. Only two of the seven can vote, which is roughly the right proportion.',
            'Choose the vote question carefully. It has to be something the learner genuinely cares about — what is for dinner on Friday, whether a weekend plan happens, how a shared decision gets made. A pretend question produces a pretend feeling and the hook fails.',
            'Decide in advance that you will hold the vote and abide by it, and that you will not soften the exclusion when it stings. You can talk about how it felt afterwards, and you should.',
            'Read the population figures on the worksheet. The exact numbers are debated by historians; say so when you use them rather than presenting an estimate as a fact.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Draw a Card. Then We Vote.',
              minutes: 8,
              say: [
                'We have a real decision to make today, and we are going to make it the Athenian way.',
                'Pick a card out of the bag. Do not show me yet. That is who you are in Athens in about 430 BCE.',
                'Read it out. Right. And the question we are deciding is a real one, it affects you, and whatever the vote says is what happens.',
                'Here are the rules of the Athenian Assembly. Adult men whose parents were both Athenian may speak and vote. Everyone else may not attend.',
                'So — can you vote?',
                'No. Right. You are not allowed in the room.',
                'I can vote. And I am the only one who can. So I am going to decide this, and you are going to live with it.',
                'How does that feel? Say it properly, I actually want to know.',
                'Hold on to that feeling, because that is the experience of roughly nine out of every ten people in Athens, every day, for two hundred years. And Athens is the place we call the birthplace of democracy.',
              ],
              do: [
                'Make it a real decision with a real consequence. The whole beat collapses if the question is invented.',
                'Do not comfort them or break the frame early. Let the unfairness sit for at least thirty seconds.',
                'If they draw a citizen card, swap it — draw again "because there were far more of the other kind". That is accurate, and it keeps the hook.',
                'Write on paper: WHO IS IN THE ROOM? It stays up all lesson.',
              ],
              studentDoes: ['Takes an assigned Athenian identity, discovers whether they may participate, and describes the experience.'],
              checks: [
                {
                  ask: 'Who in this scenario has to obey the decision but had no say in making it?',
                  lookFor: 'Everyone except the citizen — and the recognition that obeying without a say is the normal condition here.',
                  ifStuck: 'Ask who has to eat the dinner, or live with the plan, that they did not choose.',
                },
                {
                  ask: 'Does it change your feeling that this was still much more democratic than anywhere else at the time?',
                  lookFor: 'Any answer that holds both facts at once rather than collapsing to one.',
                },
              ],
              tip: 'This hook works because the exclusion is experienced, not described. Do not water it down. The conversation afterwards, where you name what you deliberately did and why, is part of the lesson and is worth having explicitly.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'What They Actually Built',
              minutes: 12,
              say: [
                'Now the other half, and it is genuinely remarkable, so I want you to take it just as seriously as the exclusion.',
                'Athenian democracy was direct. No representatives, no MPs, no congress. If you were a citizen you went to the hill called the Pnyx, in person, and voted on the actual question — war, taxes, grain supply, a treaty. Six thousand men on a hillside, deciding by show of hands.',
                'Second thing, and this is the one that surprises people. Most public officials were not elected. They were chosen by lot. By lottery.',
                'They had a stone machine for it, called a kleroterion — slots for identity tokens, a tube of black and white balls, and whichever tokens matched the white balls got the job that day.',
                'Think about what that means. Not "who is most popular", not "who has the most money for a campaign". Just: any citizen might have to serve, so any citizen had better understand how the city works.',
                'Third. Jurors were paid. That sounds boring and it is the most radical thing on the list. Payment meant a poor man could afford to spend a day judging a case instead of working. Without pay, only the rich can do public service, and the democracy quietly becomes an oligarchy.',
                'And fourth, my favourite. Once a year they could vote to expel someone from the city for ten years. You scratched the name on a broken bit of pottery and dropped it in. Most citizens could not write much, but they could write a name.',
                'So: real power, exercised in person, by ordinary men, with the state paying so poverty did not shut you out. Nowhere else on Earth was doing that.',
              ],
              do: [
                'Draw the kleroterion on paper as you describe it — a slab with a grid of slots and a tube down one side. The physical machine makes the lottery concrete.',
                'Write the four features on the sheet as a list: Assembly, sortition, payment for service, ostracism.',
                'Pause deliberately after the payment point and ask why it matters. It is the least obvious and the most important.',
              ],
              studentDoes: ['Records the four mechanisms and explains the purpose of payment for public service.'],
              checks: [
                {
                  ask: 'Why choose officials by lottery instead of by election? Give me one good reason.',
                  lookFor: 'It prevents wealth and popularity dominating, spreads participation, and makes everyone learn the job.',
                  ifStuck: 'Ask who wins an election in a society with no rules about money. Then ask who wins a lottery.',
                },
                {
                  ask: 'What would happen to Athenian democracy if jury pay were abolished?',
                  lookFor: 'Only the wealthy could serve, so in practice the poor would be shut out even though formally still citizens.',
                },
                {
                  ask: 'What is the difference between this and how your country is governed?',
                  lookFor: 'Direct rather than representative; lottery rather than election; far narrower citizenship.',
                },
              ],
              tip: 'Give this beat its full weight even though the lesson is partly a critique. A learner who leaves thinking Athenian democracy was simply a fraud has learned something false, and will not understand why anyone has argued about it for two and a half thousand years.',
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Counting Who Is In the Room',
              minutes: 13,
              say: [
                'Now we put numbers on it, because "most people were excluded" is a claim and claims need evidence.',
                'Historians argue about the exact figures, so treat these as reasonable estimates rather than gospel. For Athens around 430 BCE, out of a total population of roughly three hundred thousand: about thirty thousand adult male citizens. Around eighty thousand enslaved people. Around twenty-five thousand metics — free foreigners living and working there. The rest are women and children of citizen families.',
                'Work it out. What percentage of the people in Athens could vote?',
                'About ten percent. One in ten.',
                'Now go back to the cards in the bag. For each identity, tell me two things: could they vote, and did the Assembly\'s decisions affect them?',
                'The enslaved miner. Vote? No. Affected by a decision to expand the silver mines? Completely. That is his life.',
                'The metic merchant. Vote? No. Pays a special tax, can be called up to row in the navy. Affected? Entirely.',
                'The Athenian woman. Vote? No. Cannot own significant property in her own name, cannot speak in the Assembly. Affected by every decision about war, since her sons and husband go.',
                'So here is the argument I want you to be able to run in both directions. Somebody says Athens was not really a democracy at all. Somebody else says it was the most democratic place in the ancient world. Give me the best evidence for each.',
              ],
              do: [
                'Have them do the percentage arithmetic themselves on paper. A number they calculated is a number they believe.',
                'Go through every card in the bag. Skipping any of them lets the exclusion stay abstract.',
                'Write both arguments up in two columns and refuse to resolve it for them.',
              ],
              studentDoes: ['Calculates the proportion of the population with political rights and constructs arguments on both sides of the "was it a democracy" question.'],
              checks: [
                {
                  ask: 'Roughly what fraction of adults in Athens could vote?',
                  lookFor: 'About one in ten of the whole population; the learner can say where the figure came from.',
                  ifStuck: 'Do the division together on the calculator and then say the result as a fraction.',
                },
                {
                  ask: 'Give me the strongest single piece of evidence that Athens WAS a democracy.',
                  lookFor: 'Direct voting on real decisions by ordinary men, with payment so that poverty did not exclude, and offices filled by lot.',
                },
                {
                  ask: 'And the strongest evidence against?',
                  lookFor: 'Around nine in ten people had no say at all, and the whole system rested on the labour of tens of thousands of enslaved people.',
                },
              ],
              tip: 'Both arguments have to be genuinely available or this becomes a lecture with a predetermined verdict. Say plainly that historians still disagree about how to weigh these facts. Learners are much more careful when they know the question is actually open.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 17,
              say: [
                'The page. Four sections and they build on each other.',
                'Section one is the hundred-square grid. Each square is one percent of the people in Athens. Shade it in four different ways for the four groups, using the figures given. When you finish, stand back and look at it — the picture is the argument.',
                'Section two is the Assembly. There is a picture of the Pnyx, where they met. Answer the questions about how a decision was actually made and who was physically present.',
                'Section three is the two objects: the ostracon and the kleroterion. Run the sourcing questions on both. Remember, an object made for a procedure tells you what the procedure was designed to prevent.',
                'Section four is the argument. Was Athens a democracy? You are writing a paragraph with a claim, evidence for it, and — this is required — the strongest single fact against your own position. If your paragraph has nothing against it in it, it is not finished.',
              ],
              do: [
                'Read all four sets of directions aloud before they begin.',
                'On section one, check the shading maths before they get far. It is easy to lose track and end up with a hundred and twenty squares.',
                'On section four, do not tell them which conclusion you want. Mark the reasoning and the honesty about the counter-evidence.',
              ],
              studentDoes: ['Shades a proportional population grid, analyses the Assembly and two democratic instruments, and writes a two-sided argument.'],
              checks: [
                {
                  ask: 'Look at your grid. Which is the biggest single block, and does that surprise you?',
                  lookFor: 'The enslaved population, and a genuine reaction to seeing it as an area rather than as a number.',
                },
                {
                  ask: 'Read me the sentence in your paragraph that argues against your own conclusion.',
                  lookFor: 'A real, strong counter-fact stated fairly, not a token concession.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Who Is In the Room Now?',
              minutes: 5,
              say: [
                'Back to the question at the top of the sheet. Who is in the room?',
                'That question does not stop being useful in 430 BCE. Every time you hear about a decision — in a country, in a school, in this house — it is worth asking who was in the room when it was made, and who has to live with it but was not there.',
                'And one more thing, honestly. Athens is not being singled out here. Nearly every society we study this year excluded most of the people in it from power. Athens is interesting precisely because it is the one that made a serious argument that ordinary people should rule.',
                'Both things are true. It was radical, and it was narrow. You are old enough to hold both at once, and that is the actual historical skill.',
                'Last question. Was Athens a democracy? I do not want a yes or a no. I want a sentence with the word "but" in it.',
              ],
              do: ['Keep the shaded grid. It comes back out in the Rome unit when citizenship is discussed again.'],
              studentDoes: ['States a two-sided judgement about Athenian democracy in one sentence.'],
              checks: [
                {
                  ask: 'Give me your sentence with a "but" in it.',
                  lookFor: 'Both halves held together, e.g. it gave ordinary citizens more real power than anywhere else at the time, but only about one person in ten counted as a citizen.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g6-ss-u5-l3-ws',
            title: 'Who Counted in Athens?',
            style: 'historical',
            prepNotes:
              'The hundred-square grid in section one needs to print with visibly separate cells or the shading turns into a smudge — check it before handing the page over, and use coloured pencils rather than felt pens. The population figures on the page are historians\' estimates and are debated; say so when you introduce them, because a learner who later meets different numbers should know why they differ rather than think one of the sources is wrong.',
            sections: [
              {
                id: 's1',
                title: 'One Hundred People in Athens',
                directions:
                  'The grid below has one hundred squares. Imagine each one is one person out of every hundred living in Athens around 430 BCE. Using the estimates below, shade the squares in four different ways — one for each group. Use a different shade or pattern for each, and write your own key underneath. When you have finished, look at the whole grid before answering the questions.',
                layout: 'full',
                items: [
                  'Adult male citizens (could speak and vote in the Assembly): about 10 out of every 100.',
                  'Enslaved people (no rights at all): about 27 out of every 100.',
                  'Metics — free foreign residents who paid tax and could be called to fight, but could not vote or own land: about 8 out of every 100.',
                  'Women and children of citizen families (not citizens in the political sense): the remaining 55 out of every 100.',
                  'Which group is the largest single block on your grid?',
                  'What percentage of the people in Athens could take part in a vote?',
                  'These are estimates and historians disagree about them. Why is it hard to count the population of an ancient city?',
                ],
                images: [
                  {
                    id: 'g6-ss-u5-img-hundred-grid',
                    slot: 'Section 1 — blank hundred-square population grid',
                    purpose:
                      'A percentage is a number a learner can nod at without feeling. Shading a hundred squares turns the exclusion into an area on the page, and the moment of stepping back to look at the finished grid does more than any statistic in the text.',
                    subject:
                      'a blank square grid of exactly one hundred equal empty cells arranged in ten rows of ten, drawn with clean thin ruled lines',
                    count: 100,
                    composition:
                      'a perfect square divided into exactly ten equal rows and ten equal columns, every one of the hundred cells identical in size and completely empty, thin even line weight throughout with a slightly heavier outer border, cells large enough to shade cleanly with a coloured pencil, plain white background with a clear blank strip beneath for a handwritten key',
                    mustInclude: [
                      'exactly one hundred cells in ten rows of ten',
                      'every cell completely empty and unshaded',
                      'cells all the same size and perfectly square',
                      'a blank strip below the grid for writing a key',
                    ],
                    mustAvoid: [
                      'any numbers, letters, labels or a printed key',
                      'any cells already shaded, tinted or coloured',
                      'human figures or icons inside the cells',
                      'heavier lines dividing the grid into blocks, which would pre-group the data',
                    ],
                    aspect: '1:1',
                    altText: 'A blank ten by ten grid of one hundred empty squares',
                    style: 'diagram',
                  },
                ],
                writingLines: 5,
              },
              {
                id: 's2',
                title: 'The Assembly on the Pnyx',
                directions:
                  'This is where the citizens met. Look at the picture carefully before you answer. Think about how many people could physically fit, how they would hear a speaker, and what that means for how a decision got made.',
                layout: 'full',
                items: [
                  'How was a decision actually taken in the Assembly?',
                  'What difference does it make that citizens had to attend in person, rather than sending a representative?',
                  'A farmer living twenty miles from Athens is a citizen. What stops him attending? What does that mean in practice?',
                  'Look at who is shown in the picture. Who, out of everyone living in Athens, is not there?',
                ],
                images: [
                  {
                    id: 'g6-ss-u5-img-pnyx-assembly',
                    slot: 'Section 2 — citizens at the Assembly',
                    purpose:
                      'Seeing the Assembly as a small group of similar-looking men on a hillside makes the exclusion visible without a word of commentary. Learners consistently notice for themselves who is absent, and that noticing is the point of the section.',
                    subject:
                      'a scene on a rocky open hillside in classical Athens: six adult men in plain draped woollen garments seated on rough rock-cut steps, all facing a seventh man standing on a low stone platform with one arm raised as he speaks',
                    count: 7,
                    composition:
                      'the speaker standing on a low rectangular stone platform at the left, the six seated listeners arranged on shallow rock-cut tiers facing him, an open sky and a bare rocky hillside behind, no buildings other than the plain stone platform, calm daylight, everyone drawn with plain naturalistic faces and ordinary expressions',
                    mustInclude: [
                      'exactly seven figures in total, six seated and one standing',
                      'plain draped classical Greek clothing appropriate to the fifth century BCE',
                      'a low plain stone speaking platform',
                      'an open rocky hillside setting with no roof',
                    ],
                    mustAvoid: [
                      'any anachronism — no modern clothing, spectacles, paper, printed books, chairs or podiums of later design',
                      'caricatured, exaggerated or comic facial features',
                      'weapons, violence, blood or any depiction of conflict',
                      'any written text, inscriptions or lettering in the scene',
                      'temple architecture or a decorated interior, which would misrepresent the location',
                    ],
                    aspect: '16:9',
                    altText: 'Six seated men on rock-cut steps listening to a seventh speaking from a low stone platform',
                    style: 'historical',
                  },
                  {
                    id: 'g6-ss-u5-img-household',
                    slot: 'Section 2 — an Athenian household courtyard',
                    purpose:
                      'Placed directly beside the Assembly picture, this shows the people the Assembly excluded, doing the work the city ran on. Two images on the same page make the comparison for the learner rather than asking them to imagine it.',
                    subject:
                      'a quiet domestic courtyard scene in classical Athens: a woman in a plain draped garment working wool at an upright loom, a second woman carrying a large water jar on her shoulder, and a young child seated on the ground nearby',
                    count: 3,
                    composition:
                      'a plain enclosed courtyard with simple whitewashed walls and a packed earth floor, the loom against the wall at the left, the water carrier crossing the middle ground, the child seated at the right, everyday work shown calmly and with dignity, plain natural daylight',
                    mustInclude: [
                      'exactly three figures',
                      'an upright warp-weighted loom of the correct classical type',
                      'a large two-handled water jar carried on the shoulder',
                      'plain domestic architecture with no decoration',
                    ],
                    mustAvoid: [
                      'anachronism of any kind — no modern furniture, clothing, tools or containers',
                      'caricature, exaggerated features or comic expressions',
                      'any depiction of violence, restraint, punishment or degradation',
                      'any written text or lettering',
                      'a luxurious or palatial setting, which would misrepresent an ordinary household',
                    ],
                    aspect: '4:3',
                    altText: 'An Athenian courtyard with a woman at an upright loom, a woman carrying a water jar, and a seated child',
                    style: 'historical',
                  },
                ],
                writingLines: 6,
              },
              {
                id: 's3',
                title: 'Two Objects, Two Ideas',
                directions:
                  'Here are two things Athenians made to run their democracy. Run the sourcing questions on each: who made it, what was it for, and — the important one — what problem was it designed to solve? An object made for a procedure tells you what that society was worried about.',
                layout: 'split',
                items: [
                  'The ostracon: a broken piece of pottery used as a voting token. Once a year, citizens could scratch a name on one. If enough names matched, that person had to leave Athens for ten years.',
                  'The kleroterion: a stone slab with columns of narrow slots and a tube down one side. Citizens\' identity tokens were slotted in; black and white balls released from the tube decided which rows were selected for public office that day.',
                  'What problem was ostracism designed to solve?',
                  'What problem was the kleroterion designed to solve?',
                  'Why use broken pottery for the votes rather than something better?',
                  'Which of these two objects tells you more about what Athenians feared? Explain.',
                ],
                images: [
                  {
                    id: 'g6-ss-u5-img-ostrakon',
                    slot: 'Section 3 — an ostracon voting sherd',
                    purpose:
                      'The humblest object in the lesson carries the biggest idea: a democracy run on rubbish, because rubbish was free and everyone had some. Seeing that it is a broken bit of a pot, not a ballot paper, makes the point on its own.',
                    subject:
                      'a single irregular fragment of broken ancient pottery, roughly palm-sized, with a curved profile and rough snapped edges, the slightly dished inner surface bearing a few faint scratched marks',
                    count: 1,
                    composition:
                      'the single sherd shown flat and straight on against a plain neutral background, filling most of the frame, the broken edges clearly irregular and unworked, the surface plain reddish-brown earthenware, the scratched marks shallow and indistinct rather than legible',
                    mustInclude: [
                      'exactly one pottery fragment',
                      'clearly broken irregular edges rather than a cut or shaped outline',
                      'a plain unglazed earthenware surface with a slight curve',
                    ],
                    mustAvoid: [
                      'any legible or readable letters, words or characters of any alphabet',
                      'a museum label, stand, case or scale bar',
                      'painted decoration, glaze or a complete intact pot',
                      'anachronistic objects of any later period in the frame',
                    ],
                    aspect: '1:1',
                    altText: 'A single irregular fragment of plain ancient pottery with faint scratched marks',
                    style: 'historical',
                  },
                  {
                    id: 'g6-ss-u5-img-kleroterion',
                    slot: 'Section 3 — the allotment machine',
                    purpose:
                      'Sortition sounds like an abstraction until you see that they built a machine for it. The physical device is the evidence that choosing officials by lot was a serious, routine, engineered part of the system rather than an occasional gesture.',
                    subject:
                      'an upright rectangular stone slab standing on a plain base, its face cut with several vertical columns of narrow horizontal slots arranged in regular rows, and a narrow vertical tube fixed along the left-hand edge with a small opening at the bottom',
                    count: 1,
                    composition:
                      'the single stone slab shown straight on and standing upright, filling most of the frame against a plain neutral background, the grid of narrow slots clearly cut into the face in regular columns and rows, the vertical tube clearly attached along one edge with a visible opening near its base, plain unpolished stone',
                    mustInclude: [
                      'exactly one stone slab',
                      'multiple regular columns of narrow horizontal slots cut into the face',
                      'a narrow vertical tube along one edge with an opening at the bottom',
                    ],
                    mustAvoid: [
                      'any inscriptions, letters or carved text on the stone',
                      'a museum plinth, case, label or modern setting',
                      'decorative carving, statues or ornament',
                      'anachronistic mechanical parts such as gears, springs or metal fittings',
                    ],
                    aspect: '3:4',
                    altText: 'An upright stone slab cut with columns of narrow slots and a tube along one edge',
                    style: 'historical',
                  },
                ],
                writingLines: 6,
              },
              {
                id: 's4',
                title: 'Was Athens a Democracy?',
                directions:
                  'Write one paragraph answering the question. Start with your claim. Give two pieces of evidence for it, using numbers or specific facts from this page. Then — this part is required — state the single strongest fact against your own position and say why it does not change your mind, or admit that it partly does.',
                layout: 'full',
                items: [
                  'My claim:',
                  'Evidence 1:',
                  'Evidence 2:',
                  'The strongest fact against my claim:',
                  'Why it does or does not change my answer:',
                ],
                writingLines: 10,
              },
            ],
            answerKey: [
              'Section 1: 10 squares for citizens, 27 for enslaved people, 8 for metics, 55 for women and children of citizen families. The largest single block is women and children, and the second largest is the enslaved population — both usually surprise learners. About 10 per cent could vote. Counting an ancient city is hard because the surviving figures come from tax and military records that only counted the categories the state cared about, and enslaved people and women were rarely counted as individuals at all.',
              'Section 2: decisions were taken by open show of hands after debate, by whoever turned up on the day. Attending in person meant the decision was made by those who could physically get there and spare the time. A farmer twenty miles away faced a day\'s walk each way plus lost work, so in practice the Assembly over-represented men living in or near the city. Absent from the picture: all women, all enslaved people, all metics, all children — roughly nine tenths of the population.',
              'Section 3: ostracism was designed to stop any one man becoming powerful enough to seize control, by removing him without a trial and without violence. The kleroterion was designed to stop wealth, family connections and popularity determining who held office. Broken pottery was used because it was free, abundant and disposable — a democracy needing thousands of ballots could not afford anything else. Ostracism arguably reveals the deeper fear: that the democracy would be overthrown from inside by one of its own citizens.',
              'Section 4: mark the structure and the honesty rather than the verdict. A strong answer for "yes" cites direct voting on real decisions, sortition and state payment for service, and concedes that about nine in ten people were excluded. A strong answer for "no" cites that exclusion and the dependence on enslaved labour, and concedes that no other contemporary state gave ordinary men anything like this power. A paragraph with no counter-evidence is incomplete regardless of its conclusion.',
            ],
          },
          assessment: {
            successCriteria: [
              'Describes how the Assembly worked and what direct democracy means in practice.',
              'Explains the purpose of sortition and of payment for public service.',
              'States who was excluded and roughly what proportion of the population that was.',
              'Writes a two-sided argument that includes the strongest fact against its own conclusion.',
            ],
            exitTicket:
              'One sentence, and it must contain the word "but": was Athens a democracy? You are checking whether both halves of the lesson survived, not which side they landed on.',
            rubric: [
              { level: 'emerging', descriptor: 'Repeats that Athens invented democracy, or that it was unfair, but holds only one of the two and cannot produce evidence for the other.' },
              { level: 'developing', descriptor: 'Describes both the mechanisms and the exclusions accurately, but argues one side at a time and treats the counter-evidence as a footnote.' },
              { level: 'secure', descriptor: 'Weighs both with specific evidence, uses proportions rather than impressions, and states the strongest opposing fact fairly before judging.' },
            ],
          },
          differentiation: {
            support: [
              'Do the card activity and the hundred-square grid only. Those two together carry the whole argument without any reading.',
              'Pre-shade the first ten squares of the grid so the counting pattern is established before the learner continues.',
              'Give the two-sided paragraph as a fill-in frame: "Athens was ___ because ___ and ___. However, ___."',
            ],
            extension: [
              'Compare Athenian citizenship rules with Roman ones, which extended citizenship far more widely over time, and consider what each was for.',
              'Investigate what happened to Athenian democracy in 411 and 404 BCE, and what those episodes suggest about its stability.',
              'Research a modern country that uses sortition for any public function — several use randomly selected citizens\' assemblies — and evaluate how well it works.',
            ],
            language: [
              'Citizen, metic and enslaved are the three load-bearing words. Put them on cards with a one-line definition and keep them on the table.',
              'The two-sided paragraph is much easier spoken than written. Let the learner argue it aloud first, then write it.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Athenian democracy worked more or less like a modern democracy.',
              looksLike: 'The learner talks about Athenians electing a leader or voting for a party.',
              correction: 'Focus on the two structural differences: they voted on the decisions themselves rather than on people, and most officials were chosen by lot, not elected at all.',
            },
            {
              misconception: 'Everyone in Athens could vote.',
              looksLike: 'Estimating the proportion of participants at over half.',
              correction: 'Shade the grid. Ten squares out of a hundred is impossible to argue with once it is drawn.',
            },
            {
              misconception: 'Pointing out the exclusions means Athens was nothing special.',
              looksLike: 'Dismissing the whole thing as a sham once the enslaved population is mentioned.',
              correction: 'Ask what the alternative was in 430 BCE. Every neighbouring state was ruled by a king, a tyrant or a small aristocracy. Both facts have to be held together.',
            },
            {
              misconception: 'Enslaved people in Athens were prisoners of war from far away and few in number.',
              looksLike: 'Treating slavery as marginal to the economy.',
              correction: 'Look at the numbers and at the silver mines at Laurion, where thousands worked in brutal conditions and which funded much of the city\'s power.',
            },
          ],
          homeExtension: [
            'Find out who is allowed to vote where you live, and who is not — age, citizenship, residency. Then work out roughly what percentage of the people around you that is.',
            'Watch or read about a decision being made at your school or in your area, and ask who was in the room.',
            'Look up a modern citizens\' assembly chosen by lottery, and decide whether you think choosing people at random is a good idea.',
          ],
          teacherNotes:
            'The card activity is the lesson and it needs a real decision behind it. A pretend vote about a pretend question produces a shrug; a real one about something the learner cares about produces the feeling the rest of the lesson analyses. Afterwards, name what you did out loud — say that you set it up deliberately, and ask how it landed. That conversation is not a distraction from the history, it is how the history gets understood.\n\nHold the line on both halves. The pull in either direction is strong: some learners want to declare the whole thing a fraud, others want to keep the birthplace-of-democracy story intact. The historical skill being assessed is the ability to hold both, which is exactly what the required counter-evidence sentence in section four is for. Be honest that the population figures are estimates that historians dispute.',
        },

        {
          id: 'g6-ss-u5-l4',
          unitId: 'g6-ss-u5',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'The Persian Wars, Told From Both Sides',
          essentialQuestion: 'What does this war look like if you are not Greek?',
          summary:
            'Herodotus is our main source and he was Greek. Learners read his account, then consider the Persian empire on its own terms — vast, tolerant of local religion, administratively sophisticated — and ask what a Persian account would have emphasised.',
          durationMin: 55,
          standards: [
            { code: 'D2.His.6.6-8', framework: 'C3', text: 'Analyze how people\'s perspectives influenced what information is available in the historical sources they created.' },
            { code: 'D2.His.13.6-8', framework: 'C3', text: 'Evaluate the relevancy and utility of a historical source based on information such as maker, date, place of origin, intended audience, and purpose.' },
          ],
          objectives: [
            'I can outline the main events of the Persian Wars.',
            'I can evaluate Herodotus as a source.',
            'I can describe the Persian empire without using only Greek descriptions of it.',
          ],
          vocabulary: [
            { term: 'satrapy', definition: 'A province of the Persian empire, run by a governor called a satrap.' },
            { term: 'hoplite', definition: 'A Greek heavy infantryman fighting in close formation with a large round shield.' },
            { term: 'perspective', definition: 'The position a source is written from, which shapes what it includes and how it judges.' },
          ],
          materials: ['Short extracts from Herodotus', 'A map of the Persian empire at its greatest extent', 'Images of Persepolis reliefs'],
          prep: ['Find an image of the Persepolis Apadana reliefs showing delegations from across the empire. It is the best available counterweight to the Greek account.'],
          script: [],
          worksheet: { id: 'g6-ss-u5-l4-ws', title: 'Whose War Is This?', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Evaluates Herodotus using the sourcing questions.', 'Describes at least two Persian achievements on their own terms.'],
            exitTicket: 'Ask what a Persian account of Marathon would probably have emphasised, and why we do not have one.',
          },
          differentiation: {
            support: ['Use one short extract and the five sourcing questions.'],
            extension: ['Compare the scale of the Persian empire with the combined Greek states and consider what the Greeks found so alarming.'],
          },
          misconceptions: [
            {
              misconception: 'The Persians were an uncivilised horde.',
              looksLike: 'Repeating the Greek framing of freedom against barbarism.',
              correction: 'Look at Persian roads, the postal system, the administrative record and the policy of religious tolerance. The framing is a source, not a fact.',
            },
          ],
          homeExtension: ['Find a modern conflict reported differently in two countries and compare the two accounts.'],
        },
        {
          id: 'g6-ss-u5-l5',
          unitId: 'g6-ss-u5',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'What Outlasted the City-States',
          essentialQuestion: 'The city-states lost their independence — so why are we still talking about them?',
          summary:
            'The Peloponnesian War, Macedonian conquest, and the Hellenistic spread of Greek language and ideas from Egypt to Afghanistan. Learners distinguish political survival from cultural transmission.',
          durationMin: 50,
          standards: [
            { code: 'D2.His.2.6-8', framework: 'C3', text: 'Classify series of historical events and developments as examples of change and/or continuity.' },
            { code: 'D2.Geo.7.6-8', framework: 'C3', text: 'Explain how changes in transportation and communication technology influence the spatial connections among human settlements and affect the diffusion of ideas and cultural practices.' },
          ],
          objectives: [
            'I can explain how the city-states lost their independence.',
            'I can describe the spread of Greek culture after Alexander.',
            'I can distinguish a political end from a cultural continuation.',
          ],
          vocabulary: [
            { term: 'Hellenistic', definition: 'The period after Alexander when Greek language and culture spread widely across south-west Asia and Egypt.' },
            { term: 'continuity', definition: 'Something that carries on despite change around it.' },
            { term: 'Alexandria', definition: 'The Egyptian city founded by Alexander, which became a major centre of learning.' },
          ],
          materials: ['A map of Alexander\'s campaigns and the successor kingdoms', 'Images of Greco-Bactrian coins', 'The printed worksheet'],
          prep: ['Find images of Greek-style coins from Bactria. Greek portrait styles in Afghanistan make the point instantly.'],
          script: [],
          worksheet: { id: 'g6-ss-u5-l5-ws', title: 'The Cities Fell, the Ideas Did Not', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Explains the loss of independence.', 'Gives two examples of cultural continuity.'],
            exitTicket: 'Ask for one Greek idea still in use today and one that has entirely disappeared.',
          },
          differentiation: {
            support: ['Focus on Alexandria alone as a case study.'],
            extension: ['Investigate Greco-Buddhist art and explain how two traditions combined.'],
          },
          misconceptions: [
            {
              misconception: 'Greek culture ended when Greece was conquered.',
              looksLike: 'A timeline stopping at 338 BCE.',
              correction: 'Follow the language. Greek remained the language of administration and learning across the eastern Mediterranean for centuries afterwards.',
            },
          ],
          homeExtension: ['Find five English words with Greek roots and work out what each root means.'],
        },
      ],
    },
    /* ============================================================ UNIT 6 */
    {
      id: 'g6-ss-u6',
      gradeId: 'g6',
      subjectId: 'social-studies',
      sequence: 6,
      title: 'Ancient Rome: Republic, Empire and the Argument About the Fall',
      bigIdea:
        'Rome\'s central problem was scale — a set of institutions built to run one city was made to govern three million square kilometres, and almost everything that followed came from that mismatch.',
      description:
        'Italy\'s geography opens the unit: a long peninsula reaching into the middle of the Mediterranean, with more usable farmland than Greece and no mountain barriers dividing it internally. The Republic is studied as a real constitutional system with real conflicts over who held power, and its collapse as a consequence of conquest rather than of individual villainy. The unit ends on historiography: learners compare competing explanations for the end of the western empire and discover that historians have been arguing about it for two hundred years.',
      weeks: 6,
      standards: [
        { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
        { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
        { code: 'D2.His.15.6-8', framework: 'C3', text: 'Evaluate the relative influence of various causes of events and developments in the past.' },
        { code: 'D2.His.17.6-8', framework: 'C3', text: 'Compare the central arguments in secondary works of history in multiple media on related topics in the past.' },
        { code: 'D2.Eco.1.6-8', framework: 'C3', text: 'Explain how economic decisions affect the well-being of individuals, businesses, and society.' },
      ],
      lessonTitles: [
        'A Peninsula in the Middle of a Sea',
        'The Republic: Sharing Power, Unequally',
        'How Winning Wars Destroyed the Republic',
        'Running an Empire: Roads, Water, Law and Soldiers',
        'Why Historians Still Argue About the Fall of Rome',
      ],
      performanceTask:
        'The Causes Ranking: given eight commonly cited causes of the western empire\'s collapse on separate cards, the learner ranks them, groups them into long-term and immediate, and writes a one-page justification of their top choice. They must also explain why one popular cause they rejected is weaker than it looks.',
      lessons: [
        {
          id: 'g6-ss-u6-l1',
          unitId: 'g6-ss-u6',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'A Peninsula in the Middle of a Sea',
          essentialQuestion: 'What made this particular strip of land a good place to build an empire from?',
          summary:
            'Italy\'s geography compared directly with Greece\'s: better farmland, navigable rivers, no internal mountain barriers cutting the peninsula into fragments, and a position that puts every Mediterranean coast within reach by sea.',
          durationMin: 50,
          standards: [
            { code: 'D2.Geo.2.6-8', framework: 'C3', text: 'Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
            { code: 'D2.Geo.8.6-8', framework: 'C3', text: 'Analyze how relationships between humans and environments extend or contract spatial patterns of settlement and movement.' },
          ],
          objectives: [
            'I can describe the physical geography of Italy.',
            'I can compare it with Greece and explain the political difference that followed.',
            'I can explain why Rome\'s position on the Tiber mattered.',
          ],
          vocabulary: [
            { term: 'Apennines', definition: 'The mountain range running down the spine of Italy, high enough to shape settlement but not to divide the peninsula.' },
            { term: 'Latium', definition: 'The fertile plain around Rome where the city began.' },
            { term: 'Mare Nostrum', definition: 'Literally "our sea" — the Roman name for the Mediterranean once they controlled its coasts.' },
          ],
          materials: ['A physical map of Italy', 'A map of the Mediterranean', 'The Greece map from the previous unit for comparison'],
          prep: ['Put the Greece and Italy maps side by side. The comparison is the lesson and it is wasted if the maps are seen in sequence.'],
          script: [],
          worksheet: { id: 'g6-ss-u6-l1-ws', title: 'Why Here?', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Compares the two peninsulas with specific features.', 'Explains one political consequence of the geographic difference.'],
            exitTicket: 'Ask why Italy could unify under one city while Greece did not.',
          },
          differentiation: {
            support: ['Compare three features only, using a two-column table.'],
            extension: ['Explain why Rome\'s inland river site was safer than a coastal one, and what it cost in trade.'],
          },
          misconceptions: [
            {
              misconception: 'Rome succeeded because Romans were unusually determined.',
              looksLike: 'A character-based explanation with no material conditions.',
              correction: 'Ask what they ate. Latium\'s farmland supported a far larger population than any single Greek state could.',
            },
          ],
          homeExtension: ['Look at a map of the Mediterranean and work out which coasts are within a week\'s sail of Italy.'],
        },
        {
          id: 'g6-ss-u6-l2',
          unitId: 'g6-ss-u6',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'The Republic: Sharing Power, Unequally',
          essentialQuestion: 'How do you design a government where nobody can become a king?',
          summary:
            'The Republic as an engineering problem. Consuls in pairs with a one-year term, the Senate, the assemblies, the tribunes and the veto — all mechanisms against concentrated power. Then the Conflict of the Orders and what the plebeians actually won.',
          durationMin: 55,
          standards: [
            { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
            { code: 'D2.Civ.2.6-8', framework: 'C3', text: 'Explain specific roles played by citizens (such as voters, jurors, taxpayers, members of the armed forces, petitioners, protesters, and office-holders).' },
          ],
          objectives: [
            'I can describe the main offices and bodies of the Republic.',
            'I can explain two mechanisms designed to prevent one person taking control.',
            'I can explain what the plebeians gained and what they did not.',
          ],
          vocabulary: [
            { term: 'consul', definition: 'One of two chief magistrates elected for a single year, each able to block the other.' },
            { term: 'tribune', definition: 'An official elected to protect plebeian interests, with the power to veto actions of other magistrates.' },
            { term: 'patrician', definition: 'A member of the hereditary Roman aristocracy.' },
            { term: 'plebeian', definition: 'An ordinary Roman citizen outside the patrician families.' },
          ],
          materials: ['A diagram of the Republican constitution', 'Cards for a role-play of a Senate decision', 'The printed worksheet'],
          prep: ['Prepare a decision for the role-play with a genuine conflict of interest between the orders, so the veto actually gets used.'],
          script: [],
          worksheet: { id: 'g6-ss-u6-l2-ws', title: 'Checks on Power', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Names the key offices and their functions.', 'Explains two anti-tyranny mechanisms.', 'Assesses the limits of plebeian gains.'],
            exitTicket: 'Ask what stops a consul simply staying in power at the end of the year.',
          },
          differentiation: {
            support: ['Focus on the two consuls and the tribunes\' veto only.'],
            extension: ['Compare the Republic\'s separation of powers with a modern constitution and identify the borrowings.'],
          },
          misconceptions: [
            {
              misconception: 'The Roman Republic was a democracy like Athens.',
              looksLike: 'Assuming ordinary citizens voted on laws directly and equally.',
              correction: 'Look at how the assemblies voted — in blocks weighted by wealth, so the richest voted first and often decided the outcome before the poorest voted at all.',
            },
          ],
          homeExtension: ['Find one feature of your own country\'s government designed to stop any one person having too much power.'],
        },
        {
          id: 'g6-ss-u6-l3',
          unitId: 'g6-ss-u6',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'How Winning Wars Destroyed the Republic',
          essentialQuestion: 'Why did Rome\'s greatest military successes break its government?',
          summary:
            'The causal chain: conquest brings enslaved labour and huge estates, small farmers are ruined, the landless join armies loyal to their general rather than to the state, and generals with personal armies end the Republic. Structural, not personal.',
          durationMin: 55,
          standards: [
            { code: 'D2.His.15.6-8', framework: 'C3', text: 'Evaluate the relative influence of various causes of events and developments in the past.' },
            { code: 'D2.Eco.1.6-8', framework: 'C3', text: 'Explain how economic decisions affect the well-being of individuals, businesses, and society.' },
            { code: 'D2.His.14.6-8', framework: 'C3', text: 'Explain multiple causes and effects of events and developments in the past.' },
          ],
          objectives: [
            'I can trace the chain from conquest to the collapse of the Republic.',
            'I can explain why armies became loyal to generals.',
            'I can weigh structural causes against individual actions.',
          ],
          vocabulary: [
            { term: 'latifundium', definition: 'A very large estate worked mainly by enslaved people.' },
            { term: 'proletarian', definition: 'A citizen with no property, who in the late Republic could enlist and depend on a general for land after service.' },
            { term: 'civil war', definition: 'A war fought between groups within the same state.' },
          ],
          materials: ['A cause-and-effect chain activity', 'A timeline of the late Republic', 'The printed worksheet'],
          prep: ['Prepare the chain cards. Learners should assemble the sequence themselves rather than be told it.'],
          script: [],
          worksheet: { id: 'g6-ss-u6-l3-ws', title: 'The Chain That Broke It', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Assembles a coherent causal chain of at least five links.', 'Argues about the relative weight of structure and individuals.'],
            exitTicket: 'Ask whether the Republic would have survived without Caesar, and require a reason.',
          },
          differentiation: {
            support: ['Provide the chain cards in a partly correct order to be fixed.'],
            extension: ['Argue whether the Gracchi were reformers or destabilisers, using evidence.'],
          },
          misconceptions: [
            {
              misconception: 'Julius Caesar destroyed the Republic single-handedly.',
              looksLike: 'A one-man explanation with no structural causes.',
              correction: 'Look at Marius and Sulla, decades earlier. Personal armies and marches on Rome were established before Caesar was born.',
            },
          ],
          homeExtension: ['Find a modern example of a change that had exactly the opposite effect from the one intended.'],
        },
        {
          id: 'g6-ss-u6-l4',
          unitId: 'g6-ss-u6',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Running an Empire: Roads, Water, Law and Soldiers',
          essentialQuestion: 'How do you hold together a territory it takes three months to cross?',
          summary:
            'The practical machinery of empire: the road network, aqueducts and urban water, a legal system applied across provinces, extension of citizenship, and a standing army that was also an engineering corps.',
          durationMin: 55,
          standards: [
            { code: 'D2.Civ.3.6-8', framework: 'C3', text: 'Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements.' },
            { code: 'D2.Geo.7.6-8', framework: 'C3', text: 'Explain how changes in transportation and communication technology influence the spatial connections among human settlements and affect the diffusion of ideas and cultural practices.' },
            { code: 'D2.Eco.1.6-8', framework: 'C3', text: 'Explain how economic decisions affect the well-being of individuals, businesses, and society.' },
          ],
          objectives: [
            'I can explain how roads and communications held the empire together.',
            'I can describe how Roman law worked across different provinces.',
            'I can explain the effect of extending citizenship.',
          ],
          vocabulary: [
            { term: 'aqueduct', definition: 'A channel, often carried on arches, bringing fresh water into a city from a distant source.' },
            { term: 'province', definition: 'A territory outside Italy governed by Rome.' },
            { term: 'Romanisation', definition: 'The spread of Roman practices, language and citizenship through the provinces — uneven, partial and often resisted.' },
          ],
          materials: ['A map of the Roman road network', 'Images of an aqueduct and a fort', 'Extracts from provincial legal documents'],
          prep: ['Have travel-time data for the empire. A map of how long it took to reach each province from Rome is more revealing than a distance map.'],
          script: [],
          worksheet: { id: 'g6-ss-u6-l4-ws', title: 'Holding It Together', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Explains two mechanisms of imperial control.', 'Explains the strategic purpose of extending citizenship.'],
            exitTicket: 'Ask why granting citizenship to conquered peoples was in Rome\'s interest.',
          },
          differentiation: {
            support: ['Focus on roads and the army only.'],
            extension: ['Compare Roman provincial administration with Persian satrapies and assess which was more durable.'],
            language: ['Roman legal and administrative terms survive in many modern languages; collect the cognates.'],
          },
          misconceptions: [
            {
              misconception: 'Roman rule was uniform everywhere.',
              looksLike: 'Assuming every province was governed identically.',
              correction: 'Compare Egypt, Britain and Gaul. Local elites, local law and local religion persisted in very different combinations.',
            },
          ],
          homeExtension: ['Find out whether any road near you follows a Roman route, and check how straight it is.'],
        },
        {
          id: 'g6-ss-u6-l5',
          unitId: 'g6-ss-u6',
          gradeId: 'g6',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Why Historians Still Argue About the Fall of Rome',
          essentialQuestion: 'Did Rome fall, transform, or simply move east?',
          summary:
            'The historiography lesson and the culmination of the year. Learners compare several competing explanations for the end of the western empire, notice that the eastern empire continued for another thousand years, and construct a ranked, evidenced argument of their own.',
          durationMin: 55,
          standards: [
            { code: 'D2.His.17.6-8', framework: 'C3', text: 'Compare the central arguments in secondary works of history in multiple media on related topics in the past.' },
            { code: 'D2.His.15.6-8', framework: 'C3', text: 'Evaluate the relative influence of various causes of events and developments in the past.' },
            { code: 'D2.His.16.6-8', framework: 'C3', text: 'Organize applicable evidence into a coherent argument about the past.' },
          ],
          objectives: [
            'I can summarise at least three competing explanations.',
            'I can rank causes and justify the ranking.',
            'I can explain why the question itself is contested.',
          ],
          vocabulary: [
            { term: 'historiography', definition: 'The study of how history has been written and why interpretations differ.' },
            { term: 'Byzantine', definition: 'The term later historians gave the eastern Roman empire, which continued until 1453.' },
            { term: 'periodisation', definition: 'Dividing the past into named periods — a choice made by historians, not a fact about the past.' },
          ],
          materials: ['Short extracts giving three or four different explanations', 'Cause cards', 'The printed worksheet'],
          prep: [
            'Include the "it did not fall, it transformed" position. It is the one that most changes how learners think about the question.',
            'Have the date 1453 ready. The eastern empire outlasting the western by a thousand years reframes the whole discussion.',
          ],
          script: [],
          worksheet: { id: 'g6-ss-u6-l5-ws', title: 'Rank the Causes', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Summarises three explanations fairly.', 'Ranks causes with justification.', 'Explains why historians disagree.'],
            exitTicket: 'Ask for their top cause and the single best objection to it.',
          },
          differentiation: {
            support: ['Compare two explanations and rank four causes rather than eight.'],
            extension: ['Investigate how the fall of Rome has been used politically at different times, and what that reveals about the historians.'],
          },
          misconceptions: [
            {
              misconception: 'Rome fell in 476 CE and that was the end of it.',
              looksLike: 'A single date given as the answer with nothing after it.',
              correction: 'Point east. Constantinople was still Roman in 1453, and most people in the western provinces in 480 would not have described anything as having ended.',
            },
          ],
          homeExtension: ['Ask two adults why they think Rome fell and compare their answers with the explanations from the lesson.'],
        },
      ],
    },
  ],
}

export default course
