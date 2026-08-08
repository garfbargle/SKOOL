import type { SubjectCourse } from '../../types'

/**
 * Grade 1 Science — NGSS, phenomenon-first.
 *
 * Every unit opens with something the child can see happen and cannot yet
 * explain: a box you cannot see into, a drum that makes rice jump, a puppy that
 * does not quite match its mother. The three dimensions are not bolted on
 * afterwards — the science and engineering practice is what the child spends
 * the lesson doing, the disciplinary core idea is what they end up knowing, and
 * the crosscutting concept (nearly always Patterns or Cause and Effect at this
 * age) is the sentence you keep repeating until they say it back to you.
 */
const course: SubjectCourse = {
  gradeId: 'g1',
  subjectId: 'science',
  title: 'Grade 1 Science',
  overview:
    'First graders are the best scientists in the building. They will happily test the same thing eleven times, they have no reputation to protect, and they are genuinely surprised by things adults stopped noticing decades ago. This course leans on all of that. Each unit starts with a phenomenon rather than a topic, the child gathers evidence with their own hands, and the explanation is something they build rather than something they are given. Light and sound come first because the evidence arrives instantly; living things and sky patterns come later because they need observations spread over weeks.',
  yearGoals: [
    'Plan and carry out a simple investigation, and use what happened as evidence for what you claim.',
    'Explain that sound comes from something vibrating, and that a vibration can travel and shake something else.',
    'Explain that we see objects only when light reaches them, and predict what different materials will do to a beam of light.',
    'Describe how the external parts of plants and animals help them survive, and use one of those parts as inspiration for a design.',
    'Describe patterns you can predict — in the sky, in the seasons, and in the way young living things resemble their parents.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'g1-sci-u1',
      gradeId: 'g1',
      subjectId: 'science',
      sequence: 1,
      title: 'Light: Why Can I See Anything At All?',
      bigIdea:
        'You do not see an object because your eyes reach out to it. You see it because light reaches the object and then comes back to you — and if you take the light away, the object is still there and you are blind to it.',
      description:
        'The unit is built around one stubborn childhood belief: that seeing comes out of your eyes, and that a truly dark room will get easier to see in if you wait. A sealed viewing box settles that in five minutes. From there the child investigates what happens when different materials are put in the path of a beam, and builds a working vocabulary — light source, beam, shadow, see-through — out of things they have watched happen.',
      weeks: 5,
      standards: [
        { code: '1-PS4-2', framework: 'NGSS', text: 'Make observations to construct an evidence-based account that objects can be seen only when illuminated.' },
        { code: '1-PS4-3', framework: 'NGSS', text: 'Plan and conduct an investigation to determine the effect of placing objects made with different materials in the path of a beam of light.' },
        { code: 'K-2-ETS1-1', framework: 'NGSS', text: 'Ask questions, make observations, and gather information about a situation people want to change to define a simple problem that can be solved through the development of a new or improved object or tool.' },
      ],
      lessonTitles: [
        'The Box You Cannot See Into',
        'Which Things Make Their Own Light?',
        'Putting Things in the Way of a Beam',
        'Shadows: What Blocking Light Looks Like',
        'See-Through, Cloudy or Solid: Sorting Materials',
        'Designing a Window for a Dark Room',
      ],
      performanceTask:
        'The Dark Box Challenge: given a sealed box with a hidden object inside, the child must work out what the object is without opening the box, using only a torch and materials they choose for the window, then explain to an adult why their solution let them see it.',
      lessons: [
        /* ---------------------------------------------------- L1 authored */
        {
          id: 'g1-sci-u1-l1',
          unitId: 'g1-sci-u1',
          gradeId: 'g1',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'The Box You Cannot See Into',
          essentialQuestion: 'Why can I not see the thing inside the box, even though I know it is there?',
          summary:
            'The child looks into a sealed box containing a familiar object and sees nothing. They then let light in, one small step at a time, and build the account themselves: the object was always there, and what changed was the light. This is the observational evidence behind 1-PS4-2, and it directly contradicts what most six-year-olds believe about how seeing works.',
          durationMin: 40,
          standards: [
            { code: '1-PS4-2', framework: 'NGSS', text: 'Make observations to construct an evidence-based account that objects can be seen only when illuminated.' },
            { code: 'K-2-ETS1-1', framework: 'NGSS', text: 'Ask questions, make observations, and gather information about a situation people want to change to define a simple problem.' },
          ],
          objectives: [
            'I can make careful observations and say exactly what I saw.',
            'I can explain that I need light to see an object.',
            'I can use what happened in the box as evidence for what I say.',
          ],
          vocabulary: [
            { term: 'observe', definition: 'To look really carefully and say exactly what you notice.', example: 'I observed that the box was completely black inside.' },
            { term: 'evidence', definition: 'What actually happened, that you use to show your idea is right.', example: 'My evidence is that I could not see it until I let light in.' },
            { term: 'light source', definition: 'Something that makes its own light.', example: 'A torch is a light source.' },
            { term: 'illuminate', definition: 'To shine light onto something.', example: 'The torch illuminated the toy.' },
            { term: 'dark', definition: 'When there is no light at all.', example: 'Inside the sealed box it was completely dark.' },
          ],
          materials: [
            'A shoebox with a lid, or any box with a lid that fits closely',
            'A small familiar object to hide inside — a toy animal, a spoon, a building brick',
            'Something to make a peephole with: a sharp pencil or a skewer, used by the adult only',
            'Tape, to seal any gaps around the lid',
            'A small torch (a flashlight; a phone torch works)',
            'A piece of card and some sticky tape for making the flap',
            'The printed worksheet and a pencil',
          ],
          prep: [
            'Make the viewing box before the lesson. Cut one peephole about the size of a five-pence coin in one end of the shoebox, and cut a small flap in the lid that can be opened and closed. Tape the lid down all the way round.',
            'Put the object inside without the child seeing what it is. This matters — if they know, they will "see" it.',
            'Test it yourself in the room you will use. If light leaks in around the lid, add more tape. A box that half works ruins the lesson.',
            'Do this in the least bright room you have. A cupboard, a hallway or a bathroom with the light off is perfect.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'There Is Something In Here',
              minutes: 6,
              say: [
                'There is something inside this box. I put it in myself. It is definitely in there right now.',
                'Look through this little hole and tell me what it is.',
                'Nothing? Look harder. Really try.',
                'Wait for a bit and let your eyes get used to it. Still nothing?',
                'Now that is strange, because the object has not gone anywhere. It is sitting in there right now while you look at it. So why can you not see it?',
                'That is the question for today, and I genuinely want you to figure it out.',
              ],
              do: [
                'Hold the box steady and let the child look for a good ten or fifteen seconds. Do not rush them.',
                'Shake the box gently so they can hear something is inside. The sound proves the object exists while the eyes say nothing.',
                'Resist explaining. Let the puzzle sit.',
              ],
              studentDoes: ['Looks through the peephole, reports seeing nothing, and hears the object rattle.'],
              checks: [
                {
                  ask: 'Is the object still in the box while you are looking at it?',
                  lookFor: 'Yes — the child is certain the object exists even though they cannot see it.',
                  ifStuck: 'Shake the box again. "Can you hear it? So it is in there. But your eyes say nothing is there. One of your senses is missing something."',
                },
                {
                  ask: 'What do you think you would need to see it?',
                  lookFor: 'Any answer at all. "A light" is the target but "open the box" and "bigger hole" are excellent scientific answers too.',
                },
              ],
              tip: 'The wait-for-your-eyes-to-adjust step is worth doing properly. Children believe that in true darkness you eventually see, and only a genuinely sealed box disproves it.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Change One Thing',
              minutes: 8,
              say: [
                'You said we need light. Let us test that, but carefully — we are going to change one thing at a time, like scientists do.',
                'Watch. I am opening this little flap in the lid. Just a crack. Look again now.',
                'Something? A shape? Not enough to tell what it is?',
                'Now I open the flap all the way. Look again.',
                'There it is. Now tell me — did I put anything new in the box?',
                'No. I did not touch the object at all. The only thing I changed was the light. So the light is what let you see.',
              ],
              do: [
                'Open the flap in three clear stages: shut, a crack, wide open. Let the child look at every stage.',
                'Say out loud each time, "I have not touched the object."',
                'Have the child name what they can see at each stage, in their own words, before you move on.',
              ],
              studentDoes: ['Observes at three light levels and describes what is visible at each.'],
              checks: [
                {
                  ask: 'What was different between the first look and the last look?',
                  lookFor: 'The amount of light. The object stayed the same.',
                  ifStuck: 'Close the flap again and re-ask. Going backwards is more convincing than going forwards.',
                },
                {
                  ask: 'Was the object there the whole time?',
                  lookFor: 'Yes, definitely.',
                },
              ],
              tip: 'Changing one thing while everything else stays the same is the beginning of fair testing, and this is a perfect first example. Name it out loud as you do it.',
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Your Turn With the Torch',
              minutes: 9,
              say: [
                'Now you run it. Close the flap. Is it dark inside again? Can you see the object?',
                'Good. Now shine the torch in through the flap and look through the hole at the same time.',
                'You can see it. Turn the torch off. Gone. On. There. Off. Gone.',
                'Say what is happening as you do it. Use the word light.',
                'Here is a harder one. What if I shine the torch at the OUTSIDE of the box, not into it? Try it. Predict first — what do you think will happen?',
                'Nothing. The light has to actually get to the object. Shining it at the outside does not help at all.',
              ],
              do: [
                'Hand over the torch and let the child do all the switching. The on-off control is what makes the causal link stick.',
                'Insist on a prediction before the outside-the-box test. A prediction that turns out wrong is worth more than a correct guess.',
                'Have them repeat the on-off cycle at least four times. Repetition is what turns a single observation into a rule.',
              ],
              studentDoes: ['Controls the torch, predicts the outcome of shining it outside the box, tests it, and narrates what is happening.'],
              checks: [
                {
                  ask: 'Tell me the rule you have found, in your own words.',
                  lookFor: 'Something like "you can only see something if there is light on it".',
                  ifStuck: 'Give them a sentence frame: "I can see the toy when ___. I cannot see the toy when ___."',
                },
                {
                  ask: 'Why did shining the torch on the outside not work?',
                  lookFor: 'The light could not get in / the light has to reach the object.',
                },
              ],
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Recording What We Found',
              minutes: 12,
              say: [
                'Scientists write down what they saw, because in a week nobody remembers properly.',
                'On this page there are two circles. They are what you saw through the peephole. Draw what you saw with the flap shut in the first one, and what you saw with the flap open in the second.',
                'The first circle is allowed to be completely black. That is not a lazy drawing — that is exactly what you observed, and it is your evidence.',
                'Then there is a sorting part. Some of these things make their own light and some do not. Think carefully about the moon, because that one catches everybody out.',
                'Last, finish the sentence at the bottom. That sentence is your explanation.',
              ],
              do: [
                'Read every set of directions aloud.',
                'Do not talk the child out of the black circle. Colouring a whole circle black is the correct answer and children often think it must be wrong.',
                'For the light-source sort, take answers before giving opinions. The moon question is a genuinely good argument to have.',
              ],
              studentDoes: ['Draws both observations, sorts light sources from non-sources, and completes the explanation sentence.'],
              checks: [
                {
                  ask: 'Why did you colour that whole circle in?',
                  lookFor: 'Because that is what it actually looked like — there was no light.',
                },
                {
                  ask: 'Read me your explanation sentence.',
                  lookFor: 'A statement that connects light and seeing, in the child’s own words.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'The Bedroom Test',
              minutes: 5,
              say: [
                'One last thing to think about. Tonight, when your bedroom light goes off, is your wardrobe still there?',
                'Of course it is. But can you see it?',
                'So things do not disappear in the dark. Your eyes just cannot do their job without light.',
                'Tell me the whole idea in one sentence, and I will write it on the front of the box.',
              ],
              do: [
                'Write the child’s own sentence on the box in their words, not yours. Leave it somewhere visible for the rest of the unit.',
              ],
              studentDoes: ['States the explanation as a single sentence, applied to a new situation.'],
              checks: [
                {
                  ask: 'Say the whole idea in one sentence.',
                  lookFor: 'You can only see something when light shines on it.',
                  ifStuck: 'Offer two versions — one right, one subtly wrong ("things disappear when it is dark") — and ask which one their evidence supports.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'g1-sci-u1-l1-ws',
            title: 'What I Saw In the Box',
            style: 'diagram',
            prepNotes:
              'Print this before you build the box so you know what the diagram is asking for. The child will need a black or dark crayon for the first observation circle — a pencil scribble is not dark enough to feel like real evidence, and the darkness of that circle is the whole point of the page.',
            sections: [
              {
                id: 's1',
                title: 'Our Viewing Box',
                directions: 'This is the box we used. Write what each arrow is pointing at. Use these words: peephole, flap, object, box.',
                layout: 'full',
                images: [
                  {
                    id: 'img-viewing-box-diagram',
                    slot: 'Top of page — the viewing box',
                    purpose: 'Gives the child a labelled record of the apparatus so the investigation can be repeated and explained to somebody who was not there. Labelling the parts also forces them to name the peephole and the flap, which are the two things their explanation depends on.',
                    subject: 'a cutaway side view of a closed rectangular shoebox: a small round peephole in the left-hand end wall, a small hinged flap cut into the top lid on the right, and a simple toy figure standing on the floor inside the box',
                    composition: 'wide landscape frame, the box drawn in clean technical cutaway so the inside is visible, four thin straight leader lines running from the peephole, the flap, the toy and the outer box wall out to four empty circles arranged around the edge of the frame',
                    mustInclude: [
                      'exactly four leader lines each ending in a completely empty circle for the child to write in',
                      'the peephole, the hinged lid flap, the toy inside and the outer box wall each clearly distinguishable',
                      'the flap drawn in the closed position',
                    ],
                    mustAvoid: [
                      'any words, letters or numbers anywhere in the image, including inside the label circles',
                      'shading or darkness inside the box that would obscure the toy',
                      'a person or hands in the frame',
                      'more than four leader lines',
                    ],
                    aspect: '16:9',
                    altText: 'A cutaway diagram of a shoebox with a peephole, a lid flap and a toy inside, with four blank labels',
                  },
                ],
              },
              {
                id: 's2',
                title: 'What I Saw Through the Peephole',
                directions: 'Draw exactly what you saw each time. Do not draw what you know is in there — draw what your eyes actually saw. The first circle is allowed to be completely black.',
                layout: 'split',
                items: ['Circle 1: flap CLOSED', 'Circle 2: flap OPEN'],
                images: [
                  {
                    id: 'img-view-dark',
                    slot: 'Circle 1 — the closed-flap view',
                    purpose: 'A worked example of the hardest thing to accept on this page: that a completely black drawing is a real and valuable observation. Children who see it modelled will produce it honestly instead of drawing what they know is inside.',
                    subject: 'a single thick-outlined empty circle filled solidly and evenly with black, representing a view of complete darkness',
                    count: 1,
                    composition: 'one perfect circle centred in a square frame with a thick clean outline, the whole interior filled with flat solid black, plain white outside the circle',
                    mustInclude: ['exactly one circle', 'the interior completely and evenly black with no shapes, gradients or texture visible'],
                    mustAvoid: ['any faint object, silhouette or outline showing through the black', 'stars, sparkles or highlights', 'any lettering', 'a second circle'],
                    aspect: '1:1',
                    altText: 'A circle filled completely with black',
                    style: 'flat-vector',
                  },
                  {
                    id: 'img-view-lit',
                    slot: 'Circle 2 — the open-flap view',
                    purpose: 'The contrasting example. Placed directly beside the black circle so the child can see that the only difference between the two records is the light, which is exactly the claim they are being asked to make.',
                    subject: 'a single thick-outlined circle containing a small clearly visible toy dinosaur standing in the middle, the inside of the circle pale as if lit from above',
                    count: 1,
                    composition: 'one perfect circle centred in a square frame with a thick clean outline matching the darkened circle it is paired with, one small toy dinosaur centred inside it, the circle interior pale and evenly lit',
                    mustInclude: ['exactly one circle', 'exactly one toy dinosaur, small and fully inside the circle, clearly visible against the pale interior'],
                    mustAvoid: ['any lettering', 'a second object inside the circle', 'a dark or black interior', 'scenery, ground or shadow detail inside the circle'],
                    aspect: '1:1',
                    altText: 'A circle with a small toy dinosaur clearly visible inside it',
                    style: 'flat-vector',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Does It Make Its Own Light?',
                directions: 'Say each one out loud. Does it make its own light all by itself? Circle YES or NO. Argue about the moon — it is the tricky one.',
                layout: 'column',
                items: [
                  'a torch                YES    NO',
                  'the sun                YES    NO',
                  'a candle               YES    NO',
                  'the moon               YES    NO',
                  'a mirror               YES    NO',
                  'a lamp that is switched off    YES    NO',
                ],
                images: [
                  {
                    id: 'img-torch-beam',
                    slot: 'Beside the sorting list — a torch making a beam',
                    purpose: 'Shows a light source doing the one thing that defines it: producing a beam that travels outward and lands on something. The cone of light is the visual the child will reuse in every later lesson of this unit.',
                    subject: 'a hand-held cylindrical electric torch, also called a flashlight, switched on and lying horizontally, with a widening cone of light spreading from its lens onto a small toy car standing a short distance away',
                    count: 1,
                    composition: 'wide landscape frame, the torch at the left pointing right, a clearly drawn widening triangular cone of light reaching across to a single toy car at the right, the car brightly lit where the cone lands and the rest of the frame plain white',
                    mustInclude: [
                      'exactly one torch and exactly one toy car',
                      'a clearly visible cone of light that starts narrow at the torch lens and widens as it travels to the car',
                      'the car sitting fully inside the lit cone',
                    ],
                    mustAvoid: ['any lettering, numbers or brand marks on the torch', 'a hand holding the torch', 'a room, table or background scenery', 'a second light source', 'sparkle or starburst effects at the lens'],
                    aspect: '16:9',
                    altText: 'A torch shining a cone of light onto a toy car',
                    style: 'flat-vector',
                  },
                ],
              },
              {
                id: 's4',
                title: 'What I Found Out',
                directions: 'Finish these sentences. Say them out loud first. An adult can write them for you if you tell them exactly what to put.',
                layout: 'column',
                items: [
                  'When the flap was shut I saw ______________________________',
                  'When the flap was open I saw ______________________________',
                  'The object was in the box the whole time. I know because ______________________________',
                  'So my idea is: you can only see something when ______________________________',
                ],
                writingLines: 8,
              },
            ],
            answerKey: [
              'Our Viewing Box: the four labels are peephole, flap, object and box, in any sensible arrangement.',
              'What I Saw: circle 1 completely black; circle 2 shows the hidden object. A fully black first circle is the correct answer and should be praised.',
              'Does It Make Its Own Light: torch YES, sun YES, candle YES, moon NO, mirror NO, switched-off lamp NO. The moon reflects sunlight rather than making its own — accept a wrong answer here with real interest and come back to it in Unit 6.',
              'What I Found Out: any answer meaning "nothing / just black", "the toy", "I could hear it rattle / you told me / it was there when you opened it", and "there is light on it". Dictated answers are fine — you are assessing the explanation, not the handwriting.',
            ],
          },
          assessment: {
            successCriteria: [
              'Reports the observation honestly, including seeing nothing at all in the dark.',
              'States that light is what changed between the two observations.',
              'Uses the box observation as evidence when explaining why we can see things.',
            ],
            exitTicket:
              'Ask: "If I put your shoes in a completely dark cupboard, are they still there? Can you see them? Why not?" You want all three answers — yes, no, and because there is no light on them.',
            rubric: [
              { level: 'emerging', descriptor: 'Describes what happened but explains it as the object disappearing or the eyes not working, rather than as an absence of light.' },
              { level: 'developing', descriptor: 'Says that light is needed to see, but cannot yet point back to the box observation as the evidence for it.' },
              { level: 'secure', descriptor: 'States that objects can only be seen when light shines on them and cites the closed-flap and open-flap observations as evidence, applying the idea to a new situation.' },
            ],
          },
          differentiation: {
            support: [
              'Use a much bigger flap so the change between dark and lit is dramatic rather than subtle.',
              'Let the child open and close the flap themselves as many times as they want. Control over the variable is what builds the causal link.',
              'Accept a spoken explanation and scribe it word for word. Writing is not the science here.',
            ],
            extension: [
              'Ask what happens with a coloured piece of cellophane over the flap. This previews lesson 3 and the child will want to try every colour.',
              'Try a shiny object and a black cloth object in the box and compare how much light each one needs before it can be seen.',
              'Ask the genuinely hard question: how does the light get from the toy to your eye? Do not resolve it — this is a Grade 4 idea, and letting it hang is honest.',
            ],
            language: [
              'The English words light, bright and lit are close together and easily confused. Use the torch physically as you say each one.',
              'Let the child give the whole explanation in their home language first, then supply the two or three English words they need to say it again.',
              'Pre-teach: torch, flap, peephole, dark, shine.',
            ],
          },
          misconceptions: [
            {
              misconception: 'If you wait long enough in a really dark place, your eyes adjust and you can eventually see.',
              looksLike: 'The child keeps looking through the peephole insisting they will see it in a minute.',
              correction: 'Let them wait. Give them thirty full seconds. Eyes do adapt to dim light, which is why the belief exists, but they cannot adapt to no light at all — and a properly sealed box proves it in a way no explanation can.',
            },
            {
              misconception: 'Seeing works by something coming out of your eyes, like a beam.',
              looksLike: 'The child says they could see it if they looked harder, or if their eyes were better.',
              correction: 'Ask what the torch changed, given that their eyes were the same the whole time. The only thing that changed was outside their body.',
            },
            {
              misconception: 'Objects stop existing, or move, when you cannot see them.',
              looksLike: 'The child suggests the toy came back when the flap opened.',
              correction: 'Shake the box while the flap is shut. The sound proves the object is present and stationary the whole time.',
            },
          ],
          homeExtension: [
            'At bedtime, look around the room with the light on, then off, then on. Ask what changed and what did not.',
            'Look into a cupboard with the door nearly shut and then open. Same investigation, no equipment.',
            'Count the light sources in your home at night — every one of them makes its own light rather than reflecting somebody else’s.',
          ],
          teacherNotes:
            'The three dimensions, plainly. The practice is making observations and constructing an evidence-based account — the child does the observing and you do not supply the conclusion, even when the silence is uncomfortable. The core idea is that objects can be seen only when illuminated. The crosscutting concept is cause and effect, and the sentence to keep repeating is "the only thing I changed was the light". One genuine warning: this only works if the box is properly sealed. If the child can make out a faint shape with the flap closed, the whole argument collapses and they will conclude that waiting helps after all. Spend the extra five minutes on tape.',
        },
        {
          id: 'g1-sci-u1-l2',
          unitId: 'g1-sci-u1',
          gradeId: 'g1',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Which Things Make Their Own Light?',
          essentialQuestion: 'What is the difference between something that shines and something that just looks shiny?',
          summary:
            'Sorting light sources from reflectors. The test is simple and the child can apply it themselves: put it in a completely dark room, and if it still glows it makes its own light.',
          durationMin: 30,
          standards: [
            { code: '1-PS4-2', framework: 'NGSS', text: 'Make observations to construct an evidence-based account that objects can be seen only when illuminated.' },
          ],
          objectives: ['I can name three things that make their own light.', 'I can test whether something is a light source by taking all the other light away.'],
          vocabulary: [
            { term: 'light source', definition: 'Something that makes its own light.', example: 'A candle is a light source.' },
            { term: 'reflect', definition: 'To bounce light back without making any.', example: 'A mirror reflects light.' },
          ],
          materials: ['A torch', 'A mirror', 'A shiny spoon', 'A glow-in-the-dark toy if you have one', 'A dark room'],
          prep: ['Charge the glow-in-the-dark toy under a lamp first, and be ready to explain that it stored light rather than making it.'],
          script: [],
          worksheet: { id: 'g1-sci-u1-l2-ws', title: 'Source or Reflector?', style: 'flat-vector', sections: [] },
          assessment: { successCriteria: ['Sorts six objects correctly.', 'Explains the dark-room test.'], exitTicket: 'Ask whether a mirror is a light source and why not.' },
          differentiation: { support: ['Do the test physically for every object rather than discussing it.'], extension: ['Discuss the moon, which reflects sunlight and fools almost everybody.'] },
          misconceptions: [
            {
              misconception: 'Anything shiny makes light.',
              looksLike: 'The child says a mirror is a light source.',
              correction: 'Take the mirror into a fully dark room. It vanishes, which settles it.',
            },
          ],
          homeExtension: ['Walk around the house at night and list every light source you find.'],
        },
        {
          id: 'g1-sci-u1-l3',
          unitId: 'g1-sci-u1',
          gradeId: 'g1',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Putting Things in the Way of a Beam',
          essentialQuestion: 'What happens to a beam of light when I put something in front of it?',
          summary:
            'The core investigation for 1-PS4-3. The child plans a fair test, puts a series of materials in the path of a torch beam, and records whether the light goes through completely, partly, or not at all.',
          durationMin: 40,
          standards: [
            { code: '1-PS4-3', framework: 'NGSS', text: 'Plan and conduct an investigation to determine the effect of placing objects made with different materials in the path of a beam of light.' },
            { code: 'K-2-ETS1-1', framework: 'NGSS', text: 'Ask questions, make observations, and gather information about a situation people want to change.' },
          ],
          objectives: ['I can plan a test where I only change one thing.', 'I can sort materials by how much light gets through them.'],
          vocabulary: [
            { term: 'beam', definition: 'The path light travels along.', example: 'The torch made a beam across the room.' },
            { term: 'material', definition: 'What something is made of.', example: 'This one is made of a see-through material.' },
            { term: 'fair test', definition: 'Changing only one thing so you know what caused the difference.', example: 'I kept the torch in the same place every time.' },
          ],
          materials: ['A torch', 'A sheet of white card as a screen', 'Test materials: clear plastic, greaseproof paper, cardboard, foil, a thin cloth, a glass of water'],
          prep: ['Mark the position of the torch and the screen on the table with tape so they do not move between tests. That tape is what makes it a fair test.'],
          script: [],
          worksheet: { id: 'g1-sci-u1-l3-ws', title: 'What Gets Through?', style: 'diagram', sections: [] },
          assessment: { successCriteria: ['Keeps the torch and screen in place across all tests.', 'Sorts six materials into three groups by how much light passes.'], exitTicket: 'Hand over a new material and ask for a prediction plus a reason.' },
          differentiation: { support: ['Sort into two groups first — light gets through or it does not.'], extension: ['Test two layers of the same material and see whether the result changes.'] },
          misconceptions: [
            {
              misconception: 'Thin things always let light through and thick things never do.',
              looksLike: 'The child predicts that thin foil will be see-through.',
              correction: 'Test the foil. Thinness is not the variable — what the material is made of is.',
            },
          ],
          homeExtension: ['Hold different things up to a window and sort them by how much light comes through.'],
        },
        {
          id: 'g1-sci-u1-l4',
          unitId: 'g1-sci-u1',
          gradeId: 'g1',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Shadows: What Blocking Light Looks Like',
          essentialQuestion: 'Why does a shadow change size when I move?',
          summary:
            'Shadows as direct evidence that light travels in straight lines and can be blocked. The child changes the distance between object and light and records what happens to the shadow.',
          durationMin: 35,
          standards: [
            { code: '1-PS4-3', framework: 'NGSS', text: 'Plan and conduct an investigation to determine the effect of placing objects made with different materials in the path of a beam of light.' },
            { code: '1-PS4-2', framework: 'NGSS', text: 'Make observations to construct an evidence-based account that objects can be seen only when illuminated.' },
          ],
          objectives: ['I can make a shadow bigger and smaller on purpose.', 'I can explain that a shadow is where the light was blocked.'],
          vocabulary: [
            { term: 'shadow', definition: 'The dark shape where something blocked the light.', example: 'My hand made a shadow on the wall.' },
            { term: 'block', definition: 'To stop something getting past.', example: 'The book blocked the beam.' },
          ],
          materials: ['A torch', 'A blank wall or a sheet of paper', 'Small solid objects', 'A tape measure or a ruler'],
          prep: ['Practise making a shadow puppet yourself. You will need one good one to hold attention.'],
          script: [],
          worksheet: { id: 'g1-sci-u1-l4-ws', title: 'Big Shadow, Small Shadow', style: 'diagram', sections: [] },
          assessment: { successCriteria: ['Predicts correctly whether moving the object closer to the light makes the shadow bigger.', 'Explains a shadow as blocked light.'], exitTicket: 'Ask how to make the shadow as big as possible without moving the wall.' },
          differentiation: { support: ['Do it with hands on a wall before using objects and measurements.'], extension: ['Trace an outdoor shadow at three times of day and explain what moved.'] },
          misconceptions: [
            {
              misconception: 'A shadow is a dark thing that sticks to an object.',
              looksLike: 'The child says the shadow is made of black stuff coming out of the toy.',
              correction: 'Remove the light. The shadow does not survive, because it was never a thing — it is an absence.',
            },
          ],
          homeExtension: ['Make shadow puppets at bedtime and work out how to make a rabbit twice as big.'],
        },
        {
          id: 'g1-sci-u1-l5',
          unitId: 'g1-sci-u1',
          gradeId: 'g1',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'See-Through, Cloudy or Solid: Sorting Materials',
          essentialQuestion: 'How do I describe what a material does to light?',
          summary:
            'Puts vocabulary onto the results of lesson 3. Transparent, translucent and opaque are big words that first graders enjoy precisely because they are big, and each one is now attached to something the child has watched.',
          durationMin: 30,
          standards: [
            { code: '1-PS4-3', framework: 'NGSS', text: 'Plan and conduct an investigation to determine the effect of placing objects made with different materials in the path of a beam of light.' },
          ],
          objectives: ['I can sort materials into three groups.', 'I can use the words see-through, cloudy and solid to describe what light does.'],
          vocabulary: [
            { term: 'transparent', definition: 'Light goes straight through and you can see clearly.', example: 'A window is transparent.' },
            { term: 'translucent', definition: 'Some light gets through but you cannot see clearly.', example: 'Greaseproof paper is translucent.' },
            { term: 'opaque', definition: 'No light gets through at all.', example: 'A book is opaque.' },
          ],
          materials: ['The materials from lesson 3', 'Three sorting hoops or labelled trays'],
          prep: ['Sort the materials yourself first and note the one that is genuinely borderline. Arguing about that one is the best part of the lesson.'],
          script: [],
          worksheet: { id: 'g1-sci-u1-l5-ws', title: 'Three Groups', style: 'flat-vector', sections: [] },
          assessment: { successCriteria: ['Sorts eight materials into three groups and justifies each placement.'], exitTicket: 'Hold up a plastic milk bottle and ask which group it belongs to.' },
          differentiation: { support: ['Use the child-friendly words see-through, cloudy and solid, and add the technical ones later.'], extension: ['Find something at home for each group and photograph it.'] },
          misconceptions: [
            {
              misconception: 'Everything is either see-through or not; there is no middle.',
              looksLike: 'The child forces greaseproof paper into one of the two extremes.',
              correction: 'Hold it up to the torch and ask whether they can see the shape of your hand behind it. Some but not clearly is a real category.',
            },
          ],
          homeExtension: ['Sort the contents of the recycling bin into the three groups.'],
        },
        {
          id: 'g1-sci-u1-l6',
          unitId: 'g1-sci-u1',
          gradeId: 'g1',
          subjectId: 'science',
          sequence: 6,
          status: 'outline',
          title: 'Designing a Window for a Dark Room',
          essentialQuestion: 'Which material should I use if I want light in but nobody looking in?',
          summary:
            'An engineering application. The child defines the problem, chooses a material based on the evidence they gathered, builds a window for a model room, and tests whether it does both jobs.',
          durationMin: 40,
          standards: [
            { code: 'K-2-ETS1-1', framework: 'NGSS', text: 'Ask questions, make observations, and gather information about a situation people want to change to define a simple problem that can be solved through the development of a new or improved object or tool.' },
            { code: 'K-2-ETS1-2', framework: 'NGSS', text: 'Develop a simple sketch, drawing, or physical model to illustrate how the shape of an object helps it function as needed to solve a given problem.' },
            { code: '1-PS4-3', framework: 'NGSS', text: 'Plan and conduct an investigation to determine the effect of placing objects made with different materials in the path of a beam of light.' },
          ],
          objectives: ['I can choose a material because of what I found out about it.', 'I can test whether my design does the job.'],
          vocabulary: [
            { term: 'design', definition: 'A plan you make to solve a problem.', example: 'My design uses cloudy plastic.' },
            { term: 'problem', definition: 'The thing you are trying to fix.', example: 'The problem is that the room is too dark.' },
          ],
          materials: ['A cardboard box room', 'Scraps of every material tested in lesson 3', 'Tape and scissors', 'A torch'],
          prep: ['Cut a window hole in the box before the lesson so the whole session goes on the material choice, which is the science.'],
          script: [],
          worksheet: { id: 'g1-sci-u1-l6-ws', title: 'My Window Design', style: 'diagram', sections: [] },
          assessment: { successCriteria: ['Chooses a translucent material and gives an evidence-based reason.', 'Tests the design against both requirements.'], exitTicket: 'Ask why they did not use cardboard, and why not clear plastic.' },
          differentiation: { support: ['Offer a choice of three materials rather than eight.'], extension: ['Design a second window for a room that must stay completely dark.'] },
          misconceptions: [
            {
              misconception: 'The best design is the one that looks nicest.',
              looksLike: 'The child chooses the shiniest scrap regardless of what it does to light.',
              correction: 'Go back to the results table from lesson 3 and require the choice to be justified from it.',
            },
          ],
          homeExtension: ['Look at bathroom windows and work out why they use the glass they do.'],
        },
      ],
    },
    /* NEXT-UNIT */
  ],
}

export default course
