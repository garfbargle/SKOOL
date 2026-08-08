import type { SubjectCourse } from '../../types'

/**
 * Preschool Science — ages 3 to 4.
 *
 * Everything here is play. A three-year-old does not learn science by being
 * told facts about the water cycle; they learn it by putting a stone in a bowl
 * of water and watching what happens. Every lesson is 10–20 minutes, every
 * lesson has something in the child's hands, and no lesson asks the child to
 * read or write a single word. The worksheets are dot-marking, colouring,
 * circling, matching and cut-and-paste.
 */
const course: SubjectCourse = {
  gradeId: 'pk3',
  subjectId: 'science',
  title: 'Preschool Science',
  overview:
    'Preschool science is not a body of knowledge. It is a habit: stop, look closely, say what you notice, and wonder out loud. This year the child uses their five senses as instruments, sorts the world into alive and not alive, watches the weather change from their own window, finds out where animals sleep, grows something from a seed, and drops things into water to see what happens. The adult’s job is to be genuinely curious alongside them and to ask "what do you notice?" more often than "what is this called?"',
  yearGoals: [
    'Use all five senses on purpose, and say one describing word about what was seen, heard, touched, smelled or tasted.',
    'Sort things into alive and not alive, and give a reason — it grows, it eats, it drinks.',
    'Notice and name today’s weather, and choose clothes that match it.',
    'Say what a plant and an animal each need to stay alive, and where an animal lives.',
    'Make a guess before an experiment, try it, and say whether the guess was right — without minding either way.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'pk3-science-u1',
      gradeId: 'pk3',
      subjectId: 'science',
      sequence: 1,
      title: 'My Body Tells Me Things: The Five Senses',
      bigIdea:
        'My eyes, ears, nose, tongue and hands are the tools I use to find out about the world — and each one tells me something different.',
      description:
        'Children this age already use their senses constantly; what they do not yet have is the language to report what a sense told them, or the habit of using one sense at a time on purpose. This unit slows all of that down. Eyes get closed so hands can work. Ears get a whole walk to themselves. By the end the child can answer "how do you know?" with "because I smelled it".',
      weeks: 5,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
        { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk.' },
        { code: 'ELOF-PMP-Goal P-PMP 2', framework: 'HeadStart-ELOF', text: 'Child uses perceptual information to guide motions and interactions with objects and other people.' },
        { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
      ],
      lessonTitles: [
        'What My Eyes Can Do',
        'The Feely Bag',
        'The Listening Walk',
        'Smell Jars',
        'Sweet, Salty, Sour',
        'Looking Closely with a Magnifier',
      ],
      performanceTask:
        'The Sense Museum: lay out five small trays on the floor, one per sense, and let the child give a grown-up a tour. At each tray they point to the body part and say one thing they noticed. Ten minutes, no preparation, and it tells you everything about what stuck.',
      lessons: [
        {
          id: 'pk3-science-u1-l1',
          unitId: 'pk3-science-u1',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'What My Eyes Can Do',
          essentialQuestion: 'What can I find out just by looking?',
          summary:
            'Opens the unit by naming the five senses with a body-part touch for each, then spending most of the time on sight: an I-spy game around one small area of the room, hunting for colours and shapes rather than named objects.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
          ],
          objectives: [
            'I can point to my eyes, ears, nose, tongue and hands.',
            'I can find something red, something round and something tiny just by looking.',
          ],
          vocabulary: [
            { term: 'see', definition: 'What your eyes do.', example: 'I see a blue cup.' },
            { term: 'look', definition: 'To point your eyes at something on purpose.', example: 'Look at this leaf.' },
            { term: 'notice', definition: 'To see something you did not see before.', example: 'I notice a spot on the apple.' },
          ],
          materials: ['A basket of 8–10 small household objects in mixed colours', 'The printed worksheet', 'Chunky crayons'],
          prep: [
            'Fill the basket before the child arrives so the objects are a surprise.',
            'Decide on your five body-part gestures now — eyes, ears, nose, tongue, hands — and use exactly the same ones all unit.',
          ],
          script: [],
          worksheet: { id: 'pk3-science-u1-l1-ws', title: 'What My Eyes Can Do', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Points to the correct body part for each of the five senses.', 'Finds three objects by colour or shape on request.'],
            exitTicket: 'Say "find me something round" and watch. Scanning the room with their eyes rather than wandering and touching is the win.',
          },
          differentiation: {
            support: ['Name two senses only — eyes and ears — and add the others across the week.'],
            extension: ['Play I-spy by shape rather than colour, which is much harder.'],
            language: ['Pair every sense word with its gesture every single time. The gesture is what the child remembers first.'],
          },
          misconceptions: [
            {
              misconception: 'Looking and seeing are the same thing.',
              looksLike: 'The child sweeps their eyes across the basket and says "nothing" when asked to find something small.',
              correction: 'Frame the search physically: cup your hands round one small area and say "only look in here".',
            },
          ],
          homeExtension: ['On any car journey, ask for one thing that is yellow. That is the whole game.'],
        },

        /* -------------------------------------------------------- AUTHORED */
        {
          id: 'pk3-science-u1-l2',
          unitId: 'pk3-science-u1',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 2,
          status: 'authored',
          title: 'The Feely Bag',
          essentialQuestion: 'What can my hands tell me when my eyes are shut?',
          summary:
            'Hands work alone. With sight switched off, the child has to notice texture and temperature and put a word to it before guessing what the object is. This is the first time most three-year-olds describe before they name, which is the beginning of observation.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-PMP-Goal P-PMP 2', framework: 'HeadStart-ELOF', text: 'Child uses perceptual information to guide motions and interactions with objects and other people.' },
            { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
          ],
          objectives: [
            'I can feel something with my hands and say one word about it.',
            'I can use the words soft, hard, bumpy, smooth and cold.',
            'I can guess what a thing is without looking at it.',
          ],
          vocabulary: [
            { term: 'touch', definition: 'What your hands and skin do to find out about something.', example: 'I touch the sponge.' },
            { term: 'soft', definition: 'Squashes gently when you press it.', example: 'The teddy is soft.' },
            { term: 'hard', definition: 'Does not squash at all.', example: 'The stone is hard.' },
            { term: 'bumpy', definition: 'Has lots of little lumps you can feel.', example: 'A pinecone is bumpy.' },
            { term: 'smooth', definition: 'Flat all over with no lumps.', example: 'The pebble is smooth.' },
          ],
          materials: [
            'A pillowcase, cloth shopping bag or old sock — anything you cannot see into',
            'Six safe objects with obviously different textures: a pinecone, a cotton wool ball, a smooth pebble, a sponge, a wooden spoon, a scrunched ball of foil',
            'One thing straight from the fridge for the last beat (a metal spoon or an apple)',
            'The printed worksheet',
            'A chunky crayon',
          ],
          prep: [
            'Choose objects that feel wildly different from each other. Two things that both feel "sort of rough" will not teach anything.',
            'Put the pinecone in first. You need it for the hook.',
            'Check every object for sharp edges and small parts. The child will have their eyes closed.',
            'Agree the no-peeking rule out loud before you start, and follow it yourself first.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Grown-Up Guesses Wrong',
              minutes: 3,
              say: [
                'There is something hidden in this bag. I am going to feel it and guess what it is. No peeking — not even me.',
                'Ooh. It is bumpy. It is pointy. It is hard.',
                'I have got it. It is… a banana!',
                'A banana? Is a banana bumpy and pointy? Let me pull it out. A pinecone! My hands were right. My mouth was silly.',
                'Your turn. I think you are better at this than me.',
              ],
              do: [
                'Reach in with a lot of drama. Screw your face up. Take your time.',
                'Say "banana" with complete confidence. The bigger your certainty, the funnier the reveal.',
                'Pull the pinecone out slowly.',
              ],
              studentDoes: ['Watches, laughs, and corrects you.'],
              checks: [
                {
                  ask: 'Was I right? What did my hands say it felt like?',
                  lookFor: 'A clear no, plus one of the words you used — bumpy, pointy or hard.',
                  ifStuck: 'Put the pinecone in their hands and say, "Tell me one word about how this feels."',
                },
              ],
              tip: 'Being wrong out loud is what gives a three-year-old permission to guess. If you skip this, they will wait for you to tell them the answer all lesson.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Touch Words',
              minutes: 3,
              say: [
                'Our hands can find things out even when our eyes are shut. Hands are clever like that.',
                'Feel this cotton wool. That is soft. Say it with me — soft.',
                'Now hold this pebble. That one is smooth. And it is hard. Two words for one thing is allowed.',
                'Last one — squeeze the sponge. Squishy!',
                'Soft. Smooth. Hard. Squishy. Four words. That is plenty.',
              ],
              do: [
                'Hand over one object at a time. Never two at once during the teaching.',
                'Say the word, then wait for them to say it back before moving on.',
                'Stop at four words even if it is going well.',
              ],
              studentDoes: ['Handles each object and repeats the touch word.'],
              checks: [
                {
                  ask: 'Which one is soft — the cotton wool or the pebble?',
                  lookFor: 'They hand you or point to the cotton wool.',
                  ifStuck: 'Put one in each hand at the same time. The contrast does the teaching without you saying anything.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Your Turn in the Bag',
              minutes: 4,
              say: [
                'Your hand goes in now. No peeking.',
                'Do not tell me what it is yet. First tell me how it feels. Just one word.',
                'Squishy! Good. Now guess. What could it be?',
                'Pull it out and let us look. You were right — you did that with your hands.',
              ],
              do: [
                'Load the bag with only two objects at a time so the guess is a real choice, not a lottery.',
                'Let them keep their hand in as long as they want. Rushing this beat ruins it.',
                'Run four or five rounds if the interest holds. Stop the second it does not.',
              ],
              studentDoes: ['Reaches in, gives a touch word, guesses, then checks by pulling the object out.'],
              checks: [
                {
                  ask: 'How does it feel?',
                  lookFor: 'Any touch word offered before the name of the object.',
                  ifStuck: 'Offer a choice of two: "Is it soft, or is it hard?" Choosing a word is much easier than finding one.',
                },
                {
                  ask: 'How did you know it was the sponge?',
                  lookFor: 'A reason that refers to feeling — squishy, holey, light.',
                },
              ],
              tip: 'If they blurt the name first, that is fine. Just follow with "how did you know?" and the touch word comes out anyway.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Page',
              minutes: 3,
              say: [
                'This page has pictures of things we could touch. Hold the real cotton wool first. Soft.',
                'Now put a big dot on every picture that would feel soft.',
                'Now hold the pinecone. Bumpy. Find the bumpy ones and dot those too.',
                'One picture on this page would feel cold. Find it.',
              ],
              do: [
                'Keep the real objects on the table beside the page. A three-year-old bridges from picture to idea by touching the real thing first.',
                'Point at the real object, then at the row of pictures. Do not explain — just move their attention across.',
              ],
              studentDoes: ['Marks pictures by texture, with the real objects in reach.'],
              checks: [
                {
                  ask: 'Why did you dot that one?',
                  lookFor: 'A touch word, or a stroking or squeezing gesture. The gesture counts.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Eyes Shut, Hands Out',
              minutes: 2,
              say: [
                'One more. Shut your eyes and hold your hands out flat.',
                'How does that feel?',
                'Cold! You are right, it came out of the fridge. Your hands knew and your eyes never opened.',
                'Tonight when you get into bed, feel your blanket and tell me one word.',
              ],
              do: ['Place the chilled object gently in their open palms. Do not press it on them.'],
              studentDoes: ['Names a temperature or texture with eyes closed.'],
              checks: [
                { ask: 'Tell me one touch word.', lookFor: 'Any of the words used today, said without looking.' },
              ],
            },
          ],
          worksheet: {
            id: 'pk3-science-u1-l2-ws',
            title: 'What Do My Hands Know?',
            style: 'line-art',
            prepNotes:
              'Keep the real objects on the table next to the page. On its own the page is too abstract for three — the child matches picture to texture by touching the real thing first, then pointing. Use a chunky crayon: a dot is far easier than a circle at this age, and a dot is all this page asks for.',
            sections: [
              {
                id: 's1',
                title: 'Dot the Soft Things',
                directions: 'Touch the cotton wool. Soft! Now put a dot on every picture that would feel soft.',
                layout: 'row',
                images: [
                  {
                    id: 'img-touch-row-soft',
                    slot: 'Row 1 — four objects, two of them soft',
                    purpose:
                      'Forces a real judgement rather than a sweep of dots. Two of the four are unmistakably soft and two are unmistakably not, so a child who marks all four has not sorted, they have decorated.',
                    subject:
                      'a horizontal row of four separate everyday objects a preschooler would recognise: a fluffy cotton wool ball, a smooth round pebble, a plump teddy bear, a metal teaspoon',
                    count: 4,
                    composition:
                      'one straight horizontal row, four objects evenly spaced with generous white space between each, every object roughly the same overall size on the page and drawn as a clean simple outline large enough for a chunky crayon dot to fit inside it',
                    mustInclude: ['exactly four objects in one row', 'the cotton wool ball drawn with a visibly fluffy fuzzy edge', 'the pebble drawn with a completely smooth unbroken outline'],
                    mustAvoid: ['objects touching or overlapping', 'a table, shelf or background scenery', 'tiny fiddly detail that would crowd out a crayon dot'],
                    aspect: '4:1',
                    altText: 'Four objects in a row: a cotton wool ball, a pebble, a teddy bear and a spoon',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Dot the Bumpy Things',
                directions: 'Feel the pinecone. Bumpy! Put a dot on every picture that would feel bumpy.',
                layout: 'row',
                images: [
                  {
                    id: 'img-touch-row-bumpy',
                    slot: 'Row 2 — four objects, two of them bumpy',
                    purpose:
                      'Bumpy versus smooth is the hardest of the four words to hold, because both can look similar in outline. Drawing the texture into the surface — not the silhouette — is what lets the child answer from the picture.',
                    subject:
                      'a horizontal row of four separate objects: a pinecone with clearly drawn overlapping scales, a smooth glass marble, a whole pineapple with a clearly drawn diamond-patterned skin, a plain flat rectangle of paper',
                    count: 4,
                    composition:
                      'one straight horizontal row, evenly spaced with wide clear gaps, all four objects about the same size on the page, surface texture drawn clearly inside each outline so bumpiness is visible rather than implied',
                    mustInclude: ['exactly four objects', 'visible scale texture on the pinecone', 'visible diamond skin texture on the pineapple', 'the marble and the paper drawn with completely plain untextured surfaces'],
                    mustAvoid: ['objects touching or overlapping', 'shading or gradient that could be mistaken for texture on the smooth objects', 'background scenery'],
                    aspect: '4:1',
                    altText: 'Four objects in a row: a pinecone, a marble, a pineapple and a sheet of paper',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Which One Is Cold?',
                directions: 'One of these would feel cold in your hand. Put your dot on it.',
                layout: 'row',
                images: [
                  {
                    id: 'img-cold-choice-3',
                    slot: 'Row 3 — three objects, one cold',
                    purpose:
                      'Temperature is a sense of touch children rarely name, and a three-item choice keeps it winnable. The steaming mug is the deliberate opposite, so the answer requires a real contrast rather than a guess.',
                    subject:
                      'three separate objects side by side: a clear ice cube with sharp square edges, a knitted woolly mitten, a mug with three curling steam lines rising from it',
                    count: 3,
                    composition:
                      'one horizontal row of three objects, evenly spaced with wide gaps, each object large and simply outlined, the steam lines clearly attached to the mug and not floating loose',
                    mustInclude: ['exactly three objects', 'the ice cube drawn as a clear crisp-edged cube', 'three visible steam curls rising from the mug'],
                    mustAvoid: ['a freezer, kitchen or any background', 'steam or vapour anywhere near the ice cube', 'objects touching'],
                    aspect: '3:1',
                    altText: 'An ice cube, a woolly mitten and a steaming mug in a row',
                  },
                ],
              },
              {
                id: 's4',
                title: 'Our Feely Bag',
                directions: 'This is our bag. Draw the thing you liked feeling the best.',
                layout: 'full',
                writingLines: 3,
                images: [
                  {
                    id: 'img-feely-bag',
                    slot: 'The feely bag with a hand reaching in',
                    purpose:
                      'Gives the lesson a picture the child can point at days later and say what happened. It also shows the routine clearly enough that another adult can run the activity from the page alone.',
                    subject:
                      'a soft cloth drawstring bag standing upright with its opening gathered loosely, and a child’s hand and wrist reaching in through the opening',
                    count: 1,
                    composition:
                      'the bag centred and filling most of the frame, the arm entering from the right side, plenty of clean white space around the bag so a child can draw beside it',
                    mustInclude: ['exactly one bag', 'the child’s hand drawn simply and respectfully with a warm neutral skin tone', 'the drawstring opening clearly gathered so the contents are hidden'],
                    mustAvoid: ['any object visible inside or poking out of the bag', 'lettering, logos or patterns on the fabric', 'a face or full figure'],
                    aspect: '1:1',
                    altText: 'A cloth drawstring bag with a child’s hand reaching inside',
                    style: 'storybook',
                  },
                ],
              },
            ],
            answerKey: [
              'Dot the soft things: the cotton wool ball and the teddy bear.',
              'Dot the bumpy things: the pinecone and the pineapple.',
              'Which one is cold: the ice cube.',
              'Our Feely Bag: any drawing. Ask them to tell you what it is rather than trying to recognise it.',
            ],
          },
          assessment: {
            successCriteria: [
              'Gives at least one touch word before naming an object.',
              'Correctly identifies a soft thing and a hard thing by feel alone.',
              'Keeps their eyes closed for a whole turn without needing reminding twice.',
            ],
            exitTicket:
              'Put one unseen object in their hands and ask, "One word — how does it feel?" A describing word before a guess is the whole target. The guess being wrong does not matter at all.',
            rubric: [
              { level: 'emerging', descriptor: 'Names objects by sight and needs the bag opened; touch words come only when you supply the choice of two.' },
              { level: 'developing', descriptor: 'Uses one or two touch words reliably, usually after being prompted, and can guess a familiar object by feel.' },
              { level: 'secure', descriptor: 'Volunteers a touch word unprompted, uses two or three different words across the session, and explains a guess by referring to how something felt.' },
            ],
          },
          differentiation: {
            support: [
              'Skip the bag. Hold objects behind your back and hand them over one at a time — the closed-eyes rule is the hard part, not the feeling.',
              'Use two objects only, and make them opposites: a stone and a feather.',
              'Accept a gesture instead of a word. Squeezing the air is a legitimate answer for "squishy".',
            ],
            extension: [
              'Add heavy and light as a fifth and sixth word, using two objects the same size.',
              'Let the child load the bag and test you. Being the one who knows the answer is powerful at this age.',
              'Ask them to find something in the room that feels the same as the pinecone.',
            ],
            language: [
              'Say every touch word while the object is actually in their hand. The word attaches to the sensation, not to the picture.',
              'If the child has a home language other than English, ask a family member for the words for soft and hard and use both, back to back, on the same object.',
            ],
          },
          misconceptions: [
            {
              misconception: 'The right answer is the name of the object, so describing is a delay before the real answer.',
              looksLike: 'The child shouts "spoon!" the instant their hand goes in and looks at you for approval, with no interest in how it felt.',
              correction: 'Celebrate the name, then say, "Now the tricky bit — how did your hand know?" Framing the description as the harder, more grown-up part flips which one they aim for.',
            },
            {
              misconception: 'Big means heavy and small means light, so you can tell everything by size.',
              looksLike: 'The child announces the foil ball is heavy because it is large, without weighing it in their hand.',
              correction: 'Hand them the foil ball and the pebble at the same time, one in each hand, and say nothing. The mismatch does the work.',
            },
            {
              misconception: 'Closing your eyes makes the object disappear, so guessing is pointless.',
              looksLike: 'The child peeks constantly, or refuses to guess and says "I do not know" before feeling anything.',
              correction: 'Do a round where you both keep your eyes open and feel with one hand behind your back. Removing the eye-closing removes the anxiety, and the skill still gets practised.',
            },
          ],
          homeExtension: [
            'At bath time, ask for one word about how the water feels, then one about the towel.',
            'In the fruit and veg aisle, let them touch three things and pick the bumpiest.',
            'Put one thing in a sock at bedtime and let them guess it before lights out. It takes ninety seconds and they will ask for it again.',
          ],
          teacherNotes:
            'The instinct is to correct wrong guesses. Do not. The guess is not what is being assessed — the describing word is. A child who says "it is soft and fluffy, it is a rabbit" and pulls out a cotton wool ball has done exactly what this lesson is for. Also: three-year-olds vary enormously in how they feel about not being able to see. If the closed eyes cause real distress, drop them immediately and use the behind-the-back version. The touch work is the point, not the blindfolding.',
        },

        {
          id: 'pk3-science-u1-l3',
          unitId: 'pk3-science-u1',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'The Listening Walk',
          essentialQuestion: 'What sounds are there when I stop talking?',
          summary:
            'A slow walk — round the garden, down the corridor, or just to the front door and back — with one rule: no talking. Afterwards the child names every sound they can remember and you tally them on a scrap of paper.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-ATL-Goal P-ATL 6', framework: 'HeadStart-ELOF', text: 'Child maintains focus and sustains attention with minimal adult support.' },
          ],
          objectives: ['I can be quiet and listen for a whole minute.', 'I can name three sounds I heard.'],
          vocabulary: [
            { term: 'hear', definition: 'What your ears do.', example: 'I hear a bird.' },
            { term: 'loud', definition: 'A big sound.', example: 'The lorry was loud.' },
            { term: 'quiet', definition: 'A small sound, or no sound.', example: 'The cat was quiet.' },
          ],
          materials: ['Nothing at all — this is the one lesson with no kit', 'A scrap of paper for tallying afterwards'],
          prep: [
            'Walk the route yourself first and notice what is actually audible. If it is silent, pick a different time of day.',
            'Set a one-minute timer on your phone for the standing-still portion.',
          ],
          script: [],
          worksheet: { id: 'pk3-science-u1-l3-ws', title: 'Sounds I Heard', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Stays quiet for at least thirty seconds.', 'Names three distinct sounds afterwards.'],
            exitTicket: 'At the front door, ask: "What can you hear right now?" One answer is a pass.',
          },
          differentiation: {
            support: ['Cup your hands behind your ears together and make it a game. Thirty seconds is plenty.'],
            extension: ['Sort the sounds afterwards into loud and quiet, or made-by-people and not-made-by-people.'],
            language: ['Model sound words as sound effects first — whoosh, tap, beep — and the noun second.'],
          },
          misconceptions: [
            {
              misconception: 'Quiet means there is nothing to hear.',
              looksLike: 'The child says "I did not hear anything" after a walk full of birds and traffic.',
              correction: 'Stand completely still and whisper "there is one… and there is another one" as sounds happen. Naming them in the moment is what makes them audible.',
            },
          ],
          homeExtension: ['Do one minute of listening in bed with the light off. It is also an excellent way to settle a wound-up child.'],
        },
        {
          id: 'pk3-science-u1-l4',
          unitId: 'pk3-science-u1',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Smell Jars',
          essentialQuestion: 'Can my nose tell me what something is?',
          summary:
            'Four covered jars — coffee, orange peel, cinnamon, soap — sniffed with eyes closed and matched to a picture. Smell is the sense with the least vocabulary attached, so the aim is matching, not naming.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
          ],
          objectives: ['I can smell something and match it to its picture.', 'I can say whether I like a smell or not.'],
          vocabulary: [
            { term: 'smell', definition: 'What your nose does.', example: 'I smell an orange.' },
            { term: 'sniff', definition: 'To pull air in through your nose on purpose.' },
          ],
          materials: ['Four small jars or cups', 'Coffee grounds, orange peel, cinnamon, a sliver of soap', 'Foil or kitchen paper and an elastic band to cover each jar', 'Pictures of the four things'],
          prep: [
            'Punch a few holes in each cover so the smell escapes but the contents stay hidden.',
            'Check for allergies and skip anything unfamiliar. Nothing here should ever go in a mouth.',
          ],
          script: [],
          worksheet: { id: 'pk3-science-u1-l4-ws', title: 'What Is That Smell?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Matches at least two smells to the correct picture.', 'Sniffs on purpose rather than breathing out at the jar.'],
            exitTicket: 'Hold one jar under their nose and ask them to point at the matching picture.',
          },
          differentiation: {
            support: ['Two jars only, and make them wildly different — coffee and soap.'],
            extension: ['Add a fifth mystery jar and let them describe it before they see the picture.'],
            language: ['Accept "like my grandma’s kitchen" as a perfectly good answer. Smell is remembered as places, not adjectives.'],
          },
          misconceptions: [
            {
              misconception: 'You smell by blowing out.',
              looksLike: 'The child huffs air at the jar and reports nothing.',
              correction: 'Model an exaggerated sniff, hand on your own chest so they can see it rise. Then do it together.',
            },
          ],
          homeExtension: ['Let them smell the bag of coffee, the cut lemon or the herbs before anything goes in the pan.'],
        },
        {
          id: 'pk3-science-u1-l5',
          unitId: 'pk3-science-u1',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Sweet, Salty, Sour',
          essentialQuestion: 'What different things can my tongue tell me?',
          summary:
            'A tiny tasting tray — a raisin, a cracker, a lick of lemon — with three words attached. The sour face is the whole reason this lesson exists and children ask for it again for weeks.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
          ],
          objectives: ['I can taste something and say sweet, salty or sour.', 'I can say which taste I liked best.'],
          vocabulary: [
            { term: 'taste', definition: 'What your tongue does.', example: 'I taste the raisin.' },
            { term: 'sweet', definition: 'Tastes like sugar or fruit.' },
            { term: 'sour', definition: 'Makes your face scrunch up, like lemon.' },
          ],
          materials: ['A raisin or piece of banana', 'A salted cracker', 'A wedge of lemon', 'Three small plates', 'Water to drink between tastes'],
          prep: [
            'Check allergies and dietary needs before you cut anything.',
            'Portions must be tiny. One raisin is a portion.',
            'Have your camera ready for the lemon. You will want it.',
          ],
          script: [],
          worksheet: { id: 'pk3-science-u1-l5-ws', title: 'Sweet, Salty, Sour', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Uses at least two of the three taste words correctly.', 'Tries all three tastes, or clearly declines rather than ignoring.'],
            exitTicket: 'Offer the raisin again and ask which word goes with it.',
          },
          differentiation: {
            support: ['Sweet and sour only. Salty is the hardest of the three to isolate.'],
            extension: ['Add a fourth: something bitter, like a scrap of dark chocolate.'],
            language: ['Pair each word with the face it makes. The face is a better mnemonic than any definition.'],
          },
          misconceptions: [
            {
              misconception: 'Sour means horrible and sweet means nice, so the words are about liking, not tasting.',
              looksLike: 'The child calls a food they dislike "sour" even when it is plainly not.',
              correction: 'Separate the two questions explicitly. First, "what does it taste like?" Then, quite separately, "do you like it?" Some people love sour.',
            },
          ],
          homeExtension: ['Ask which taste word fits at every meal for a week. It takes four seconds and builds the vocabulary faster than any lesson.'],
        },
        {
          id: 'pk3-science-u1-l6',
          unitId: 'pk3-science-u1',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 6,
          status: 'outline',
          title: 'Looking Closely with a Magnifier',
          essentialQuestion: 'What is there that I cannot see until I look really close?',
          summary:
            'The observation habit made explicit. With a magnifying glass — or a phone camera zoomed in — the child looks at a leaf, their own thumb and a crumb, and reports what appeared that was not there before.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-ATL-Goal P-ATL 11', framework: 'HeadStart-ELOF', text: 'Child shows interest in and curiosity about the world around them.' },
          ],
          objectives: ['I can hold a magnifier still and look through it.', 'I can say one thing I noticed that I could not see before.'],
          vocabulary: [
            { term: 'closely', definition: 'Right up near, so you see more.', example: 'Look closely at the leaf.' },
            { term: 'notice', definition: 'To find something you had not seen before.' },
            { term: 'tiny', definition: 'Very, very small.' },
          ],
          materials: ['A magnifying glass, or a phone camera with the zoom on', 'A leaf, a piece of bread, a coin, their own hand'],
          prep: ['Practise holding the magnifier at the right distance yourself so you can show it rather than explain it.', 'Collect the objects into a tray so there is no hunting mid-lesson.'],
          script: [],
          worksheet: { id: 'pk3-science-u1-l6-ws', title: 'Look Closely', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Reports at least one detail visible only under magnification.', 'Uses the phrase "I noticed" or answers the question "what do you notice?"'],
            exitTicket: 'Hand them the magnifier and their own thumb and ask what they can see now.',
          },
          differentiation: {
            support: ['Hold the magnifier for them and let them move the object instead. The focusing is the hard part, not the looking.'],
            extension: ['Draw what they saw through the magnifier, then draw the same thing without it, and compare the two.'],
            language: ['Build the sentence frame "I notice ___" and use it yourself first, several times.'],
          },
          misconceptions: [
            {
              misconception: 'The magnifier makes new things appear, like magic.',
              looksLike: 'The child says the lines on the leaf "came out" of the glass.',
              correction: 'Look at the leaf with bare eyes, then with the glass, then bare again. The lines were always there — the glass only made them bigger.',
            },
          ],
          homeExtension: ['Keep the magnifier in a kitchen drawer. Anything interesting that comes into the house goes under it.'],
        },
      ],
    },

    /* ============================================================ UNIT 2 */
    {
      id: 'pk3-science-u2',
      gradeId: 'pk3',
      subjectId: 'science',
      sequence: 2,
      title: 'Alive or Not Alive?',
      bigIdea:
        'Some things in the world are alive — they eat, drink and grow — and some things are not, no matter how much we love them.',
      description:
        'This is a genuinely hard idea at three, and the confusions are wonderful: cars are alive because they move, teddies are alive because they have faces, trees are not alive because they stay still. The unit gives the child a simple, usable test — does it need food and water, and does it grow? — and then makes them apply it to things that break the rule.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
        { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
        { code: 'ELOF-LC-Goal P-LC 7', framework: 'HeadStart-ELOF', text: 'Child shows understanding of word categories and relationships among words.' },
      ],
      lessonTitles: [
        'Is It Alive?',
        'Alive Things Need Food and Water',
        'Alive Things Grow Bigger',
        'Rocks, Toys and Other Not-Alive Things',
        'Sorting Our Nature Basket',
      ],
      performanceTask:
        'The Nature Basket Sort: after a short walk, the child empties the basket onto a mat and sorts everything into alive, was-alive and never-alive, then explains one item in each pile. Fallen leaves and sticks make this properly interesting.',
      lessons: [
        /* -------------------------------------------------------- AUTHORED */
        {
          id: 'pk3-science-u2-l1',
          unitId: 'pk3-science-u2',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'Is It Alive?',
          essentialQuestion: 'How can I tell if something is alive?',
          summary:
            'A real potted plant and a plastic one sit side by side and look almost the same. The child has to find a test that separates them, and lands on the one that works at this age: alive things need food and water, and alive things grow.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
            { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk.' },
            { code: 'ELOF-LC-Goal P-LC 7', framework: 'HeadStart-ELOF', text: 'Child shows understanding of word categories and relationships among words.' },
          ],
          objectives: [
            'I can say whether something is alive or not alive.',
            'I can give a reason: it needs water, or it grows.',
            'I know a toy animal is not alive even though I love it.',
          ],
          vocabulary: [
            { term: 'alive', definition: 'Needs food and water, and grows bigger.', example: 'The dog is alive.' },
            { term: 'not alive', definition: 'Does not eat, drink or grow.', example: 'The chair is not alive.' },
            { term: 'grow', definition: 'To get bigger over time.', example: 'You grew out of your shoes.' },
            { term: 'real', definition: 'Not pretend.', example: 'This is a real flower.' },
          ],
          materials: [
            'One real houseplant, small enough to hold',
            'One artificial plant or plastic flower — a supermarket one is perfect',
            'A teddy bear or toy animal',
            'A small watering can or cup of water',
            'The printed worksheet',
            'Chunky crayons in two colours',
          ],
          prep: [
            'Put both plants side by side on the table before the child comes in, roughly the same size, so the comparison is set up before you say a word.',
            'Have the water ready. You will pour some on the real plant during the lesson.',
            'Do not hide the teddy. You want it visible so the closing question lands.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'One of These Is Alive',
              minutes: 3,
              say: [
                'Look at my two plants. This one, and this one.',
                'Here is the thing. One of them is alive and one of them is not alive. They look nearly the same.',
                'Which one do you think is alive? Have a good look. You can touch them.',
                'Why do you think that one?',
                'Let me show you how I know. Watch what happens when I give them both a drink.',
              ],
              do: [
                'Let them handle both plants. The soil is a big clue and they will find it.',
                'Pour a little water on the real plant, then on the fake one, where it beads and runs off the plastic.',
                'Do not confirm or deny their first answer. Just pour the water.',
              ],
              studentDoes: ['Handles both plants, picks one, and offers a reason of some kind.'],
              checks: [
                {
                  ask: 'Which one is alive? How can you tell?',
                  lookFor: 'Any reason at all — soil, smell, the way it bends, the water soaking in.',
                  ifStuck: 'Say, "Feel the bottom of each one." The soil versus the plastic base does the teaching.',
                },
              ],
              tip: 'A wrong first guess is more useful than a right one. Resist the urge to tell them.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'The Two Questions',
              minutes: 3,
              say: [
                'Here are my two questions for finding out if something is alive.',
                'Question one: does it need food or water? The real plant drank that water. The plastic one did not — look, it just rolled off.',
                'Question two: does it grow bigger? The real plant will be taller next month. The plastic one will be exactly the same forever.',
                'Needs a drink. Gets bigger. That is alive.',
                'Say the two questions with me. Does it drink? Does it grow?',
              ],
              do: [
                'Hold up one finger for "does it drink" and two for "does it grow". Use the same two fingers all unit.',
                'Point at the water sitting in the soil versus the beads on the plastic leaves.',
              ],
              studentDoes: ['Repeats the two questions with the finger gestures.'],
              checks: [
                {
                  ask: 'Does the plastic plant need a drink?',
                  lookFor: 'No.',
                  ifStuck: 'Ask, "What would happen if we never watered it again?" Nothing. That is the answer.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Walk and Ask',
              minutes: 4,
              say: [
                'Let us walk round the room and ask the two questions about things.',
                'This chair. Does the chair drink? Does the chair grow?',
                'Not alive. You got it.',
                'What about you? Do you drink? Do you grow bigger?',
                'You are alive! And so am I. And so is the cat.',
              ],
              do: [
                'Test six or seven things: a chair, the child, a houseplant, a spoon, a pet if you have one, a shoe, a person out of the window.',
                'Ask both questions every single time, even when it is obvious. The routine is the lesson.',
                'Move fast. This beat should feel like a game, not an interrogation.',
              ],
              studentDoes: ['Applies the two questions to objects around the room and gives a verdict.'],
              checks: [
                { ask: 'Alive or not alive? Tell me why.', lookFor: 'A verdict plus a reason drawn from one of the two questions.' },
                {
                  ask: 'Is a car alive? It moves.',
                  lookFor: 'Not alive, because it does not drink water or grow.',
                  ifStuck: 'This one is genuinely hard because cars move and get filled up. Say, "It does drink petrol, that is clever thinking — but does it grow bigger?"',
                },
              ],
              tip: 'Moving-means-alive is the deepest confusion at this age. That is why the test is drinking and growing, not moving.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Sorting Page',
              minutes: 3,
              say: [
                'On this page, put a green dot on everything that is alive.',
                'Ask my two questions before you dot. Does it drink? Does it grow?',
                'Now find the two pictures that look the same but one is real. Which one is alive?',
              ],
              do: [
                'Read every direction aloud. Assume the child reads nothing on the page.',
                'Say the two questions out loud with them for the first two pictures, then go quiet.',
              ],
              studentDoes: ['Marks living things on the page and identifies the real plant.'],
              checks: [{ ask: 'Why is that one alive?', lookFor: 'A reason, not just a dot. "It drinks" is a full answer.' }],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'The Teddy Question',
              minutes: 2,
              say: [
                'Last one, and it is the hardest. Is Teddy alive?',
                'Ask the questions. Does Teddy drink water? Does Teddy grow bigger?',
                'Teddy is not alive. And here is the important bit — you can still love him just as much.',
                'Not alive does not mean not special.',
              ],
              do: ['Hold the teddy gently and respectfully throughout. Tone matters more than content here.'],
              studentDoes: ['Applies the test to the teddy and reaches the verdict, with support.'],
              checks: [
                {
                  ask: 'Does Teddy grow bigger?',
                  lookFor: 'No.',
                  ifStuck: 'Do not push. If they insist Teddy is alive, say, "He is very special to you," and leave it. It will resolve in its own time.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'pk3-science-u2-l1-ws',
            title: 'Alive or Not Alive?',
            style: 'line-art',
            prepNotes:
              'Give the child two crayon colours and hold the green one yourself until the second section, so the first section does not turn into a colouring page. If you have the real and plastic plants to hand, keep them on the table — the page is much easier to read with the real objects beside it.',
            sections: [
              {
                id: 's1',
                title: 'Dot the Alive Ones',
                directions: 'Ask the two questions about each picture. Does it drink? Does it grow? Put a dot on every one that is alive.',
                layout: 'grid',
                images: [
                  {
                    id: 'img-alive-mix-6',
                    slot: 'Sorting grid — six things, three alive',
                    purpose:
                      'The core assessment. Exactly half are alive, so a child who dots everything or nothing has not sorted. Each living thing is a different kind — plant, animal, insect — so the category cannot be reduced to "animals".',
                    subject:
                      'six separate simple objects and organisms arranged in a grid: a leafy green plant in a pot, a plain wooden chair, a sitting dog, a rounded grey rock, a butterfly with open wings, a metal spoon',
                    count: 6,
                    composition:
                      'a neat two-row by three-column arrangement with generous white space around every item, each drawn as a clean simple outline at roughly the same size on the page, nothing touching or overlapping, each item large enough for a crayon dot to sit on it',
                    mustInclude: ['exactly six items, one per grid cell', 'exactly three living things — the potted plant, the dog and the butterfly', 'exactly three non-living things — the chair, the rock and the spoon'],
                    mustAvoid: ['grid lines or boxes drawn between the items', 'faces on the chair, rock or spoon', 'a floor, sky or any background scenery', 'items touching each other'],
                    aspect: '3:2',
                    altText: 'Six pictures: a potted plant, a chair, a dog, a rock, a butterfly and a spoon',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Which One Is Real?',
                directions: 'These two flowers look nearly the same. Only one is alive. Colour the alive one green.',
                layout: 'split',
                images: [
                  {
                    id: 'img-real-flower',
                    slot: 'Left — the real flower',
                    purpose:
                      'The whole unit hinges on this comparison. The real plant is drawn with soil and a root line visible so there is a findable clue, rather than the child having to guess.',
                    subject:
                      'a single simple daisy growing in a small round plant pot, with visible crumbly soil at the top of the pot, two leaves on the stem and one open flower head',
                    count: 1,
                    composition:
                      'the plant centred and upright, filling most of the frame, the soil surface clearly drawn with a textured crumbly edge, generous white space around the pot',
                    mustInclude: ['exactly one flower', 'clearly visible soil in the pot', 'the stem drawn rising directly out of the soil'],
                    mustAvoid: ['a vase of water', 'lettering or a label on the pot', 'a second flower', 'background scenery'],
                    aspect: '3:4',
                    altText: 'A single daisy growing in a pot of soil',
                  },
                  {
                    id: 'img-fake-flower',
                    slot: 'Right — the artificial flower',
                    purpose:
                      'Deliberately similar in silhouette to the real one so the child cannot answer from shape. The stitched seam and the empty vase are the two clues that reward looking closely.',
                    subject:
                      'a single artificial fabric daisy standing in a plain empty vase, with a visible stitched seam along one petal and a wire visible at the base of the stem',
                    count: 1,
                    composition:
                      'the flower centred and upright at the same size and pose as the real flower opposite, the vase interior clearly empty with no soil and no water, generous white space around it',
                    mustInclude: ['exactly one flower', 'a clearly visible stitched seam on one petal', 'the vase completely empty — no soil, no water'],
                    mustAvoid: ['soil of any kind', 'a price tag or lettering', 'a second flower', 'background scenery'],
                    aspect: '3:4',
                    altText: 'A single fabric flower standing in an empty vase',
                  },
                ],
              },
              {
                id: 's3',
                title: 'What Do Alive Things Need?',
                directions: 'Alive things need these. Point to each one and say what it is. Then colour them all.',
                layout: 'row',
                images: [
                  {
                    id: 'img-needs-3',
                    slot: 'Three needs in a row',
                    purpose:
                      'Turns the abstract test into three concrete pictures the child can point at when asked "why is it alive?" These three images become the answer key they carry through the rest of the unit.',
                    subject:
                      'three separate simple pictures in a row: a watering can tipped forward with a clear stream of water pouring out, a round bowl heaped with food, a bright sun with straight rays',
                    count: 3,
                    composition:
                      'one horizontal row, three items evenly spaced with wide clear gaps, each drawn as a bold simple outline at the same size, large open areas inside each shape so a chunky crayon can colour them',
                    mustInclude: ['exactly three pictures', 'a visible stream of water leaving the watering can', 'the sun drawn with clearly separated straight rays'],
                    mustAvoid: ['a face on the sun', 'lettering or arrows', 'items touching', 'fine detail that would make colouring frustrating'],
                    aspect: '3:1',
                    altText: 'A watering can pouring water, a bowl of food and a sun',
                  },
                ],
              },
              {
                id: 's4',
                title: 'The Tricky One',
                directions: 'Here is Teddy. Ask the two questions. Does Teddy drink? Does Teddy grow? Put a dot on Teddy only if he is alive.',
                layout: 'full',
                images: [
                  {
                    id: 'img-teddy-1',
                    slot: 'The teddy bear',
                    purpose:
                      'The classic hard case, and the reason it is last. A toy with a face triggers every alive-signal a three-year-old has, so applying the test here is the strongest possible evidence the rule has actually been learned.',
                    subject: 'a single plump teddy bear sitting upright facing forward with stitched eyes and a stitched nose',
                    count: 1,
                    composition: 'centred, filling most of the frame, drawn as a clean simple outline with plenty of white space around it',
                    mustInclude: ['exactly one teddy bear', 'clearly stitched eyes and nose so it reads unmistakably as a toy', 'a visible seam line on one arm'],
                    mustAvoid: ['a real bear', 'the teddy holding food or a drink', 'a bed, shelf or background', 'the teddy shown walking or moving'],
                    aspect: '1:1',
                    altText: 'A teddy bear sitting upright',
                  },
                ],
              },
            ],
            answerKey: [
              'Dot the alive ones: the potted plant, the dog and the butterfly. The chair, the rock and the spoon get nothing.',
              'Which one is real: the flower in the pot of soil, on the left.',
              'What alive things need: water, food and sunlight. Any naming of these three is correct.',
              'The tricky one: no dot. Teddy is not alive. Expect and accept resistance here.',
            ],
          },
          assessment: {
            successCriteria: [
              'Sorts at least five of six pictures correctly into alive and not alive.',
              'Gives a reason based on drinking or growing rather than on moving or having a face.',
              'Identifies the real plant when shown a real and an artificial one together.',
            ],
            exitTicket:
              'Hold up a spoon and a leaf. "One of these is alive. Which one, and how do you know?" The reason is what you are marking, not the choice.',
            rubric: [
              { level: 'emerging', descriptor: 'Sorts by whether something has a face or moves; calls the teddy and the car alive, and the tree not alive.' },
              { level: 'developing', descriptor: 'Sorts animals and obvious objects correctly but is unsure about plants, and reverts to the moving rule under pressure.' },
              { level: 'secure', descriptor: 'Applies the drink-and-grow test unprompted, includes plants as alive, and can explain why a toy with a face is not.' },
            ],
          },
          differentiation: {
            support: [
              'Use only real objects, no pictures. A leaf and a stone in their two hands is the whole lesson if that is where they are.',
              'Ask one question instead of two — "does it need a drink?" — until that one is automatic.',
              'Sort into just two hoops or two sheets of paper on the floor, physically placing objects rather than marking a page.',
            ],
            extension: [
              'Introduce the third category: was alive. A fallen leaf, a wooden spoon and a cotton t-shirt all belong there, and it is a genuinely interesting conversation.',
              'Ask what would happen to the real plant if nobody watered it for a month, and to the plastic one.',
              'Let the child test a new object each day and report the verdict at dinner.',
            ],
            language: [
              'Keep the two questions word for word identical every time. The repeated phrasing is a language scaffold as much as a science one.',
              'Use the child’s home language for "alive" alongside English if you can. It is an abstract word in any language and hearing both helps.',
            ],
          },
          misconceptions: [
            {
              misconception: 'If it moves, it is alive.',
              looksLike: 'The child confidently classifies cars, the washing machine and a rolling ball as alive, and a tree as not alive.',
              correction: 'Do not argue about movement. Change the test. Ask the two questions about the car — it does take fuel, which is fair, but it will never be a bigger car. Growing is what settles it.',
            },
            {
              misconception: 'If it has a face, it is alive.',
              looksLike: 'Teddies, dolls and cartoon characters go in the alive pile; a plant or a mushroom does not.',
              correction: 'Put the teddy and the real plant side by side and run both questions on each. The plant wins on both counts despite having no face at all.',
            },
            {
              misconception: 'Plants are not alive because they stay in one place.',
              looksLike: 'The child excludes trees and flowers from the alive group while including every animal.',
              correction: 'Water the plant together and come back in three days. Visible drooping and recovery is the most persuasive evidence a three-year-old will ever get.',
            },
          ],
          homeExtension: [
            'Give the child one job: watering the houseplant. Doing the caring is what makes the aliveness real.',
            'On any walk, play "alive or not alive" with three things you pass. Thirty seconds, no equipment.',
            'When the shopping comes in, ask which things used to be alive. Apples, yes. The tin, no. The bread is a lovely argument.',
          ],
          teacherNotes:
            'Be honest with yourself that this concept will not be finished at the end of this lesson, or this unit. Children hold the moving-means-alive rule well into primary school and it comes back under stress. What you are building now is the habit of asking the two questions, not the finished classification. And if they insist Teddy is alive — let them. Correcting that particular one has never once helped and it costs you the goodwill you need for the rest of the unit.',
        },

        {
          id: 'pk3-science-u2-l2',
          unitId: 'pk3-science-u2',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Alive Things Need Food and Water',
          essentialQuestion: 'What would happen if we stopped feeding it?',
          summary:
            'Deepens the first question of the test. The child feeds a pet or waters a plant, then thinks about what every living thing in the house needs and who provides it.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
          ],
          objectives: ['I can say that alive things need food and water.', 'I can help give food or water to something alive.'],
          vocabulary: [
            { term: 'need', definition: 'Something you must have or you cannot stay well.', example: 'Plants need water.' },
            { term: 'thirsty', definition: 'Needing a drink.' },
          ],
          materials: ['A plant that needs watering', 'A pet, or a bird feeder, or a photo of one', 'A small jug'],
          prep: ['Let the plant get genuinely dry beforehand so the child can see it perk up afterwards.'],
          script: [],
          worksheet: { id: 'pk3-science-u2-l2-ws', title: 'Who Needs a Drink?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names food and water as needs of living things.', 'Identifies who or what in the house needs feeding.'],
            exitTicket: 'Ask: "Who in this house needs a drink today?" Any living answer counts, including themselves.',
          },
          differentiation: {
            support: ['Focus on water only. Food is a bigger idea and can wait a week.'],
            extension: ['Ask what a plant eats, which is a genuinely brilliant question with no easy answer at this age. Sunlight is close enough.'],
            language: ['Use "needs" in a repeated frame: "A dog needs ___. A plant needs ___."'],
          },
          misconceptions: [
            {
              misconception: 'Plants eat soil.',
              looksLike: 'The child says the plant is eating the dirt.',
              correction: 'Reasonable guess, and not worth demolishing. Say plants drink water from the soil and take food from the sunshine, and move on.',
            },
          ],
          homeExtension: ['Make watering the plant a fixed job with a fixed day. Ownership does more than explanation.'],
        },
        {
          id: 'pk3-science-u2-l3',
          unitId: 'pk3-science-u2',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Alive Things Grow Bigger',
          essentialQuestion: 'What has got bigger since I was a baby?',
          summary:
            'The second question of the test, made personal. Baby photos, an outgrown shoe and a pencil mark on the door frame make growing something the child has evidence of in their own body.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-MATH-Goal P-MATH 8', framework: 'HeadStart-ELOF', text: 'Child measures objects by their various attributes using standard and non-standard measurement.' },
          ],
          objectives: ['I can say that I have grown bigger.', 'I can put a baby thing and a big thing in the right order.'],
          vocabulary: [
            { term: 'grow', definition: 'To get bigger over time.' },
            { term: 'baby', definition: 'A very young person or animal.' },
            { term: 'bigger', definition: 'More big than before.' },
          ],
          materials: ['A baby photo of the child', 'A shoe or vest they have outgrown', 'A pencil and a door frame'],
          prep: ['Find the outgrown item beforehand. Trying it on is the moment the lesson turns on.'],
          script: [],
          worksheet: { id: 'pk3-science-u2-l3-ws', title: 'I Am Growing', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['States that they have grown.', 'Orders two or three pictures from smallest to biggest.'],
            exitTicket: 'Hold up the baby shoe next to their foot and ask what happened.',
          },
          differentiation: {
            support: ['Two items only — baby shoe and their shoe. The contrast has to be extreme.'],
            extension: ['Mark their height on the door frame and diarise a re-measure for three months from now.'],
            language: ['Anchor the past tense explicitly: "You were small. Now you are big."'],
          },
          misconceptions: [
            {
              misconception: 'Growing happens all at once, like a switch.',
              looksLike: 'The child expects to be taller tomorrow, or says they will be a grown-up next week.',
              correction: 'Mark the door frame and let time do it. There is no verbal fix for this one, and the wait is part of the learning.',
            },
          ],
          homeExtension: ['Re-measure on the door frame on the first of every month. Three-year-olds adore this.'],
        },
        {
          id: 'pk3-science-u2-l4',
          unitId: 'pk3-science-u2',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Rocks, Toys and Other Not-Alive Things',
          essentialQuestion: 'What are not-alive things like?',
          summary:
            'Gives the not-alive category its own attention rather than defining it only by absence. Not-alive things stay the same, do not need anything from us, and can be made by people.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
          ],
          objectives: ['I can name three things that are not alive.', 'I can say that not-alive things stay the same.'],
          vocabulary: [
            { term: 'made', definition: 'Built by people.', example: 'The chair was made in a factory.' },
            { term: 'same', definition: 'Not changed.' },
          ],
          materials: ['A tray of five clearly non-living objects', 'A rock and a toy from the same tray'],
          prep: ['Include one object made from something that was once alive — a wooden spoon — because that conversation is worth having.'],
          script: [],
          worksheet: { id: 'pk3-science-u2-l4-ws', title: 'Things That Are Not Alive', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names three non-living things and gives a reason.'],
            exitTicket: 'Ask them to find one not-alive thing in the room and say why.',
          },
          differentiation: {
            support: ['Give them a basket and ask them to fill it with not-alive things. Physical collecting beats discussion.'],
            extension: ['Introduce the wooden spoon puzzle: it is not alive now, but it used to be part of a tree.'],
            language: ['Practise the negative form explicitly — "it does not drink" — which is grammatically harder than the positive.'],
          },
          misconceptions: [
            {
              misconception: 'Not alive means broken or dead.',
              looksLike: 'The child looks upset when a favourite toy is put in the not-alive pile.',
              correction: 'Say plainly that a spoon was never alive, so nothing sad has happened to it. Some things are just things, and that is fine.',
            },
          ],
          homeExtension: ['At bath time, sort the toys: all not alive. The child usually finds this hilarious.'],
        },
        {
          id: 'pk3-science-u2-l5',
          unitId: 'pk3-science-u2',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Sorting Our Nature Basket',
          essentialQuestion: 'Is a fallen leaf alive?',
          summary:
            'The unit’s culminating sort, using things collected on a short walk. Introduces a third pile — was alive — which is where leaves, sticks, feathers and shells belong.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
          ],
          objectives: ['I can sort things into alive, was alive and never alive.', 'I can explain one of my choices.'],
          vocabulary: [
            { term: 'sort', definition: 'To put things into groups that go together.' },
            { term: 'was alive', definition: 'Used to be alive but is not any more, like a fallen leaf.' },
          ],
          materials: ['A basket', 'Whatever a ten-minute walk produces: leaves, stones, sticks, feathers, litter', 'Three sheets of paper as sorting mats'],
          prep: ['Do the walk first, as its own activity. Do not try to walk and teach at the same time.'],
          script: [],
          worksheet: { id: 'pk3-science-u2-l5-ws', title: 'Our Nature Basket', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Sorts a basket of found objects into three piles with reasons for at least two.'],
            exitTicket: 'Hold up a stick and ask which pile it goes in and why.',
          },
          differentiation: {
            support: ['Two piles only. The third category is genuinely difficult and is a bonus, not a requirement.'],
            extension: ['Ask what the leaf was part of when it was alive, and where that thing is now.'],
            language: ['Model past tense repeatedly: "This leaf was alive. It is not alive now."'],
          },
          misconceptions: [
            {
              misconception: 'A fallen leaf is still alive because it came from a tree.',
              looksLike: 'The child puts every natural object in the alive pile.',
              correction: 'Ask the two questions of the fallen leaf. It will not drink and it will never get bigger. It was alive, and that is its own special pile.',
            },
          ],
          homeExtension: ['Keep the nature basket by the door and add to it all year. Re-sorting it in a different season is a whole free lesson.'],
        },
      ],
    },

    /* ============================================================ UNIT 3 */
    {
      id: 'pk3-science-u3',
      gradeId: 'pk3',
      subjectId: 'science',
      sequence: 3,
      title: 'Weather and Seasons',
      bigIdea:
        'The weather changes, we can see it change from our own window, and what we wear and do changes with it.',
      description:
        'Weather is the most available science in the world: it is outside the window every single day and it is different every day. This unit builds a daily noticing routine, four weather words with gestures, and the link between weather and what we put on our bodies. Seasons come last and lightly — a three-year-old cannot hold a year in mind, but they can look at one tree four times.',
      weeks: 5,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
        { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
        { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
        { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
      ],
      lessonTitles: [
        'What Is the Weather Today?',
        'Dressing for the Weather',
        'Wind: The Air We Cannot See',
        'Rain, Puddles and Where They Go',
        'One Tree, Four Seasons',
        'Our Weather Chart',
      ],
      performanceTask:
        'The Weather Reporter: for one week, the child looks out of the same window each morning, does the gesture for the weather, and puts a sticker on the chart. On Friday they read the whole week back to a grown-up.',
      lessons: [
        /* -------------------------------------------------------- AUTHORED */
        {
          id: 'pk3-science-u3-l1',
          unitId: 'pk3-science-u3',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'What Is the Weather Today?',
          essentialQuestion: 'What is the weather doing right now, outside my window?',
          summary:
            'Four weather words, four whole-body gestures, and one window. The child learns to answer "what is the weather?" by going and looking rather than by guessing, which is the seed of every observation habit that follows.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk.' },
            { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
          ],
          objectives: [
            'I can look out of the window and say what the weather is.',
            'I can do the gesture for sunny, cloudy, rainy and windy.',
            'I can pick the right coat or hat for today.',
          ],
          vocabulary: [
            { term: 'weather', definition: 'What the sky and the air are doing outside today.', example: 'The weather is rainy.' },
            { term: 'sunny', definition: 'The sun is out and it is bright.' },
            { term: 'cloudy', definition: 'The sky is grey and covered up.' },
            { term: 'rainy', definition: 'Water is falling from the sky.' },
            { term: 'windy', definition: 'The air is pushing things about.' },
          ],
          materials: [
            'A window you can both see out of',
            'A sun hat, a raincoat, a woolly hat and a pair of wellington boots — pile them by the door',
            'The printed worksheet',
            'Chunky crayons',
          ],
          prep: [
            'Check the actual weather before you start so the lesson matches reality. If it is a dull grey nothing, that is genuinely cloudy and that is fine.',
            'Pile the four clothing items where the child can reach them.',
            'Learn the four gestures yourself: arms in a big circle for sunny, hands drifting sideways for cloudy, fingers wiggling downwards for rainy, whole body swaying for windy.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Wrong Clothes',
              minutes: 3,
              say: [
                'I am going outside. Watch me get ready.',
                'Sun hat. Wellington boots. Woolly hat on top of the sun hat. Raincoat. Perfect. Am I ready?',
                'Why are you laughing? What is wrong?',
                'Ah. I do not actually know what the weather is doing, do I? I have not looked.',
                'Come and help me. Let us go and look out of the window.',
              ],
              do: [
                'Put all four items on at once, slowly and seriously. Do not smile.',
                'Keep them all on while you walk to the window. The absurdity is the hook.',
              ],
              studentDoes: ['Laughs, objects, and heads for the window.'],
              checks: [
                {
                  ask: 'How could I find out what the weather is?',
                  lookFor: 'Go and look outside, or look out of the window.',
                  ifStuck: 'Point at the window and say, "What is out there that could tell us?"',
                },
              ],
              tip: 'Wear all four items for the entire hook. Every second you keep the woolly hat on is a second of attention you did not have to ask for.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Four Words, Four Moves',
              minutes: 3,
              say: [
                'There are four weather words I want you to know, and each one has a move.',
                'Sunny — big arms, a great big circle over your head. Sunny!',
                'Cloudy — hands floating sideways, slow and soft. Cloudy.',
                'Rainy — fingers wiggling down, down, down. Rainy!',
                'Windy — whole body swaying like a tree. Whoosh! Windy!',
                'Now I say the word and you do the move. Ready? Rainy!',
              ],
              do: [
                'Do every gesture big and stand up for it. A seated version of this does not work.',
                'Run the call-and-response four or five times, faster each round.',
              ],
              studentDoes: ['Performs each gesture on hearing the word.'],
              checks: [
                { ask: 'Show me windy.', lookFor: 'The swaying gesture, roughly right. Precision does not matter.' },
                { ask: 'What is this one? (do the rainy gesture)', lookFor: 'The word rainy.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Look and Decide',
              minutes: 4,
              say: [
                'Now the real job. Look out of the window. Take your time. Do not answer yet.',
                'Tell me one thing you can see out there.',
                'Is the sun out? Can you see clouds? Are the trees moving?',
                'So what is the weather today? Do the move.',
                'Now go and choose the right thing to put on from the pile.',
              ],
              do: [
                'Give them a genuine silence to look. Count to ten in your head before you say anything.',
                'Ask about the trees specifically — moving branches is how you see wind, and children never think of it themselves the first time.',
                'Let them pick the clothing and put it on. Wearing the answer is worth ten repetitions of saying it.',
              ],
              studentDoes: ['Observes through the window, names the weather, does the gesture, chooses matching clothing.'],
              checks: [
                {
                  ask: 'How do you know it is windy? You cannot see wind.',
                  lookFor: 'Because the trees or the washing or the leaves are moving.',
                  ifStuck: 'Point at anything outside that is moving. "Look at that. What is pushing it?"',
                },
                { ask: 'Which of these should I take outside today?', lookFor: 'A choice that matches what they just observed, with any reason attached.' },
              ],
              tip: 'If the weather is doing two things at once — sunny and windy, say — take both answers. Real weather is not multiple choice and pretending otherwise teaches the wrong thing.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Weather Page',
              minutes: 3,
              say: [
                'Four weather pictures on this page. Put a big dot on the one that matches today.',
                'Do the move first, then find the picture.',
                'Now at the bottom — draw a line from each weather picture to the thing you would wear.',
              ],
              do: [
                'Read the directions aloud. Do the gestures alongside the child as they choose.',
                'Do not correct a matching line straight away. Ask "tell me about that one" instead.',
              ],
              studentDoes: ['Marks today’s weather and matches clothing to weather.'],
              checks: [{ ask: 'Why did you put your dot there?', lookFor: 'A reference to something actually visible outside.' }],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Tomorrow Morning',
              minutes: 2,
              say: [
                'Here is our new job, every single morning.',
                'You go to that window, you look, and you do the move. That is it.',
                'What is the weather right now? Show me one more time.',
                'You are the weather person in this house now.',
              ],
              do: ['Point at the specific window that will be used every day. Same window, same routine.'],
              studentDoes: ['Performs today’s gesture unprompted.'],
              checks: [{ ask: 'Where do you go to check the weather?', lookFor: 'They point at or walk to the window.' }],
            },
          ],
          worksheet: {
            id: 'pk3-science-u3-l1-ws',
            title: 'What Is the Weather Today?',
            style: 'flat-vector',
            prepNotes:
              'Do this page in front of the window, not at the kitchen table. The child should be able to glance up and check. If you plan to run the week-long weather chart, print four copies now and keep them by the window.',
            sections: [
              {
                id: 's1',
                title: 'Dot Today’s Weather',
                directions: 'Look out of the window. Do the move. Now put a big dot on the picture that matches today.',
                layout: 'grid',
                images: [
                  {
                    id: 'img-weather-sunny',
                    slot: 'Weather card 1 — sunny',
                    purpose:
                      'A weather symbol has to be readable at a glance and from across a room, because it will be used every morning for weeks. Sunny is drawn with no cloud at all so it can never be confused with the cloudy card.',
                    subject: 'a single bright sun with eight straight triangular rays and a plain round centre',
                    count: 1,
                    composition: 'centred in the frame with generous white space all round, rays evenly spaced and clearly separated from each other, the whole symbol bold and simple',
                    mustInclude: ['exactly one sun', 'eight clearly separated straight rays', 'a completely clear sky with nothing else in the frame'],
                    mustAvoid: ['a face on the sun', 'any cloud', 'lettering or numbers', 'a landscape or horizon line'],
                    aspect: '1:1',
                    altText: 'A bright sun with straight rays',
                  },
                  {
                    id: 'img-weather-cloudy',
                    slot: 'Weather card 2 — cloudy',
                    purpose:
                      'Cloudy is the weather children most often skip, because nothing is happening. Making it a full card of its own, with no sun peeking out, insists that grey is an answer.',
                    subject: 'three overlapping rounded grey clouds filling the frame, completely covering the sky behind them',
                    count: 3,
                    composition: 'the clouds grouped together across the centre of the frame with soft rounded edges, no gaps of clear sky visible between them, evenly filling the width',
                    mustInclude: ['exactly three clouds', 'no sun or sunbeam visible anywhere'],
                    mustAvoid: ['rain falling from the clouds', 'a sun peeking out from behind', 'lettering', 'a face on the clouds'],
                    aspect: '1:1',
                    altText: 'Three grey clouds covering the sky',
                  },
                  {
                    id: 'img-weather-rainy',
                    slot: 'Weather card 3 — rainy',
                    purpose:
                      'The falling drops must be countable and clearly separated so the card reads as rain rather than as a textured cloud. Children point at the drops when they explain this one.',
                    subject: 'one rounded grey cloud with six separate teardrop-shaped raindrops falling in a line beneath it',
                    count: 6,
                    composition: 'the cloud across the top third of the frame, six identical raindrops spaced evenly below it in a slightly staggered line, each drop clearly separate from the others and from the cloud',
                    mustInclude: ['exactly six raindrops', 'all raindrops the same size and shape', 'clear white space between each drop'],
                    mustAvoid: ['puddles or ground', 'raindrops touching or merging', 'a sun', 'lettering'],
                    aspect: '1:1',
                    altText: 'A cloud with six raindrops falling',
                  },
                  {
                    id: 'img-weather-windy',
                    slot: 'Weather card 4 — windy',
                    purpose:
                      'Wind is invisible, so the card has to show its effect rather than the thing itself. A bending tree with leaves streaming off it is the clearest cue a three-year-old can read, and it matches what they were asked to look for out of the window.',
                    subject: 'a small bare tree bending clearly to the right, with four loose leaves streaming away from it and three long curved motion lines sweeping across the frame',
                    count: 4,
                    composition: 'the tree on the left side of the frame with its trunk and branches visibly leaning right, the four leaves spaced apart in the air to the right of it, the curved lines sweeping left to right behind everything',
                    mustInclude: ['exactly four loose leaves in the air', 'the tree clearly bent to one side', 'three long curved motion lines'],
                    mustAvoid: ['rain or a cloud', 'a face on the tree', 'leaves touching or overlapping', 'lettering'],
                    aspect: '1:1',
                    altText: 'A tree bending in the wind with four leaves blowing away',
                  },
                ],
              },
              {
                id: 's2',
                title: 'What Would You Wear?',
                directions: 'Draw a line from each weather picture up here to the thing you would put on.',
                layout: 'split',
                images: [
                  {
                    id: 'img-weather-clothes-4',
                    slot: 'Clothing row — four items',
                    purpose:
                      'Turns weather from a label into a decision. Each item maps cleanly onto exactly one of the four weather cards, so the matching is solvable, and each is a real thing the child owns and can go and fetch.',
                    subject:
                      'a horizontal row of four separate items of children’s clothing: a wide-brimmed sun hat, a hooded raincoat, a knitted woolly hat with a bobble, a pair of wellington boots standing side by side',
                    count: 4,
                    composition:
                      'one straight horizontal row, four items evenly spaced with wide clear gaps, each drawn as a bold simple outline at roughly the same size, all sitting on a common baseline so matching lines can be drawn cleanly to each',
                    mustInclude: ['exactly four clothing items', 'the raincoat drawn with a clearly visible hood', 'the wellington boots drawn as a pair standing together and counted as one item'],
                    mustAvoid: ['a child wearing the clothes', 'patterns, logos or lettering on any item', 'items touching or overlapping', 'a hook, hanger or background'],
                    aspect: '4:1',
                    altText: 'A sun hat, a raincoat, a woolly hat and a pair of wellington boots in a row',
                  },
                ],
              },
            ],
            answerKey: [
              'Dot today’s weather: whatever is genuinely happening outside. There is no fixed answer and the child should be looking, not remembering.',
              'Matching: sunny to the sun hat, rainy to the raincoat or the wellington boots, cloudy or cold to the woolly hat, windy to the woolly hat. Accept boots for rainy and hat for windy — both are defensible and worth discussing rather than marking wrong.',
            ],
          },
          assessment: {
            successCriteria: [
              'Goes to the window to check rather than guessing from memory.',
              'Names today’s weather with one of the four words.',
              'Chooses a piece of clothing that matches the weather and says why.',
            ],
            exitTicket:
              'Tomorrow morning, before you say anything, see whether they go to the window on their own. The routine sticking is worth more than any answer they gave today.',
            rubric: [
              { level: 'emerging', descriptor: 'Copies the gestures and enjoys them but names the weather from habit or preference rather than from looking.' },
              { level: 'developing', descriptor: 'Looks out of the window when prompted and picks the right word for obvious weather, but is unsure about cloudy and windy.' },
              { level: 'secure', descriptor: 'Checks the window unprompted, uses all four words including cloudy, and justifies windy by naming something that is moving.' },
            ],
          },
          differentiation: {
            support: [
              'Two words only — sunny and rainy — until both are solid. The other two can wait a fortnight.',
              'Go outside and stand in it for thirty seconds instead of looking through glass. Weather felt on the face is far easier to name.',
              'Accept the gesture instead of the word. The word will follow.',
            ],
            extension: [
              'Add snowy, foggy and stormy, with gestures the child invents themselves.',
              'Ask them to predict tomorrow’s weather, write it on a sticky note, and check it in the morning. Being wrong is the fun part.',
              'Keep a tally for a week and ask which weather won.',
            ],
            language: [
              'The gestures are the scaffold here. A child with little English can join in fully from the first minute and produce the words weeks later.',
              'Ask a family member for the four weather words in the home language and use both, in the same breath, at the window.',
            ],
          },
          misconceptions: [
            {
              misconception: 'The weather is whatever it was yesterday, or whatever I want it to be.',
              looksLike: 'The child answers "sunny" instantly, every day, without turning towards the window.',
              correction: 'Refuse to accept an answer given before they have looked. Say, "That might be right. Go and check." Every time, without exception, until the checking becomes the reflex.',
            },
            {
              misconception: 'Wind is not weather because you cannot see it.',
              looksLike: 'On a still grey day the child says windy, or on a blowing day they say nothing is happening.',
              correction: 'Give wind a visible proxy. Hang a ribbon outside the window, or watch a tree. Wind becomes the thing that makes the ribbon dance.',
            },
            {
              misconception: 'Cloudy is not a real weather, it is just no weather.',
              looksLike: 'The child stalls on grey days and says "I do not know" rather than choosing.',
              correction: 'Make cloudy the answer several times deliberately. Give it the same gesture, the same card, the same enthusiasm as sunny.',
            },
          ],
          homeExtension: [
            'One window, every morning, before breakfast. Ten seconds. Do not skip days — the daily-ness is the whole thing.',
            'Let the child choose their own coat based on their own weather call, and let them be a bit cold or a bit warm sometimes. That feedback teaches more than you can.',
            'On a walk, ask them to find something the wind is moving.',
          ],
          teacherNotes:
            'Keep the gestures. It is tempting to drop them once the words are learned, but for a three-year-old the gesture is the memory hook and it stays useful for months. Also, do not let this become a chart-filling exercise. The chart is the record of the looking; the looking is the lesson. If you only have time for one, go and look out of the window and skip the sticker.',
        },

        {
          id: 'pk3-science-u3-l2',
          unitId: 'pk3-science-u3',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Dressing for the Weather',
          essentialQuestion: 'What should I put on today?',
          summary:
            'A dressing-up race against the clock, matching real clothes from a pile to a weather card. The physical act of putting the coat on is what makes the link stick.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
            { code: 'ELOF-PMP-Goal P-PMP 4', framework: 'HeadStart-ELOF', text: 'Child demonstrates personal hygiene and self-care skills.' },
          ],
          objectives: ['I can choose clothes that match the weather.', 'I can put on my own coat.'],
          vocabulary: [
            { term: 'warm', definition: 'Nice and hot, not cold.' },
            { term: 'dry', definition: 'Not wet.' },
          ],
          materials: ['A pile of real clothes for all weathers', 'The four weather cards from lesson 1'],
          prep: ['Use real clothes the child owns, not pictures. Handling their own coat is what makes this work.'],
          script: [],
          worksheet: { id: 'pk3-science-u3-l2-ws', title: 'Dress for the Day', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Matches at least three of four clothing items to the right weather.'],
            exitTicket: 'Hold up the rainy card and ask what they need.',
          },
          differentiation: {
            support: ['Offer a choice of two garments rather than a whole pile.'],
            extension: ['Ask what they would wear somewhere very hot or very snowy, which brings in places they have never been.'],
            language: ['Name each garment as it is picked up. Clothing vocabulary is high-frequency and worth the repetition.'],
          },
          misconceptions: [
            {
              misconception: 'You wear a coat because a grown-up said so, not because of the weather.',
              looksLike: 'The child reaches for the same coat in every condition.',
              correction: 'Step outside for ten seconds without it. The information comes from their own skin, not from you.',
            },
          ],
          homeExtension: ['Let them choose their own outdoor layer every morning, with a two-option limit.'],
        },
        {
          id: 'pk3-science-u3-l3',
          unitId: 'pk3-science-u3',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Wind: The Air We Cannot See',
          essentialQuestion: 'How do I know the wind is there?',
          summary:
            'Ribbons on sticks, a paper windmill and a lot of running about. Wind is introduced as something you find by looking at what it moves, which is a properly scientific move dressed up as a game.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
          ],
          objectives: ['I can find three things the wind is moving.', 'I can make my own wind by blowing.'],
          vocabulary: [
            { term: 'wind', definition: 'Air that is moving.' },
            { term: 'blow', definition: 'To push air out of your mouth.' },
            { term: 'move', definition: 'To go from one place to another.' },
          ],
          materials: ['Ribbons or strips of plastic bag taped to sticks', 'A feather', 'A paper windmill if you have one'],
          prep: ['Pick a breezy day if you can. On a still day, use fans, blowing and a hairdryer on cold.'],
          script: [],
          worksheet: { id: 'pk3-science-u3-l3-ws', title: 'What Does the Wind Move?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Identifies wind by naming something that is moving.', 'Blows a feather across a table on purpose.'],
            exitTicket: 'Ask: "Is it windy right now? How can you tell?"',
          },
          differentiation: {
            support: ['Make wind indoors with a fan so the cause and effect are right in front of them.'],
            extension: ['Race two objects — a feather and a pebble — with the same blow and talk about why one moved.'],
            language: ['Use "the wind is pushing the ___" as a repeated frame.'],
          },
          misconceptions: [
            {
              misconception: 'Wind comes from the trees, because the trees move when it is windy.',
              looksLike: 'The child says the tree is making the wind by waving.',
              correction: 'Blow on their hand. They cannot see your breath either, but they can feel it, and their hand did not make it.',
            },
          ],
          homeExtension: ['Tie a ribbon to the garden fence or a window handle and check it every morning with the weather.'],
        },
        {
          id: 'pk3-science-u3-l4',
          unitId: 'pk3-science-u3',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Rain, Puddles and Where They Go',
          essentialQuestion: 'What happens to a puddle?',
          summary:
            'Chalk round a puddle, come back after lunch, chalk it again. Evaporation is far too big a word, but "the puddle got smaller and the sun took the water" is entirely within reach.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
          ],
          objectives: ['I can draw round a puddle and check it later.', 'I can say whether the puddle got bigger or smaller.'],
          vocabulary: [
            { term: 'puddle', definition: 'A little pool of rain on the ground.' },
            { term: 'dry', definition: 'No water left.' },
            { term: 'smaller', definition: 'Less big than before.' },
          ],
          materials: ['Chalk', 'Wellington boots', 'A puddle, or a bowl of water poured onto a paving slab'],
          prep: ['If it has not rained, make your own puddle on a warm paving stone. It works and it dries faster.'],
          script: [],
          worksheet: { id: 'pk3-science-u3-l4-ws', title: 'Our Puddle', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Compares the puddle before and after and says which is bigger.'],
            exitTicket: 'Point at the two chalk lines and ask what happened.',
          },
          differentiation: {
            support: ['Use a saucer of water on a sunny windowsill. Much faster and easier to see.'],
            extension: ['Set up two puddles, one in sun and one in shade, and check both.'],
            language: ['Model the comparative: "It was this big. Now it is smaller."'],
          },
          misconceptions: [
            {
              misconception: 'The puddle went into the ground, always.',
              looksLike: 'On a paving slab the child still says it soaked in.',
              correction: 'A sensible answer, and often true. Use the saucer version, where soaking in is impossible, to show there is another way for water to go.',
            },
          ],
          homeExtension: ['Jump in every puddle on the way home and notice which ones have gone by the return trip.'],
        },
        {
          id: 'pk3-science-u3-l5',
          unitId: 'pk3-science-u3',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'One Tree, Four Seasons',
          essentialQuestion: 'Does the tree outside always look the same?',
          summary:
            'Names the four seasons using one chosen tree as the anchor. A year is unimaginably long at three, so the lesson does what is possible: notice this tree today and promise to come back.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
          ],
          objectives: ['I can name the season we are in now.', 'I can say one thing our tree looks like today.'],
          vocabulary: [
            { term: 'season', definition: 'A part of the year with its own weather.' },
            { term: 'winter', definition: 'The cold season.' },
            { term: 'summer', definition: 'The hot season.' },
          ],
          materials: ['One tree you can visit or see from a window', 'A phone camera'],
          prep: ['Choose a deciduous tree. An evergreen will undermine the entire lesson.'],
          script: [],
          worksheet: { id: 'pk3-science-u3-l5-ws', title: 'Our Tree Today', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Names the current season.', 'Describes the tree with at least one detail.'],
            exitTicket: 'Ask what season it is now and what our tree looks like.',
          },
          differentiation: {
            support: ['Two seasons only — the one we are in and the opposite one.'],
            extension: ['Photograph the tree today and diarise a return visit in three months.'],
            language: ['Season names are abstract nouns with no everyday use. Attach each to a felt experience: cold hands, bare feet.'],
          },
          misconceptions: [
            {
              misconception: 'Seasons change on a fixed day, or change with the weather each day.',
              looksLike: 'The child declares it is winter because it rained this morning.',
              correction: 'Do not fight this one. Say seasons are much longer than a day, and let the actual passing of months do the teaching.',
            },
          ],
          homeExtension: ['Take the same photo of the same tree on the first of every month. In a year you have something remarkable.'],
        },
        {
          id: 'pk3-science-u3-l6',
          unitId: 'pk3-science-u3',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 6,
          status: 'outline',
          title: 'Our Weather Chart',
          essentialQuestion: 'What was the weather like all week?',
          summary:
            'The unit’s culminating routine. Five days of stickers on a chart, then reading it back: how many sunny days, how many rainy, which one won.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
            { code: 'ELOF-MATH-Goal P-MATH 4', framework: 'HeadStart-ELOF', text: 'Child compares numbers.' },
          ],
          objectives: ['I can put a sticker on the chart for today.', 'I can say which weather happened most this week.'],
          vocabulary: [
            { term: 'chart', definition: 'A picture that shows what happened.' },
            { term: 'most', definition: 'The biggest amount.' },
          ],
          materials: ['A five-column chart on a sheet of paper', 'Weather stickers or crayons', 'The four weather cards'],
          prep: ['Start the chart on a Monday and keep it at the window. Reading it back on Friday is the actual lesson.'],
          script: [],
          worksheet: { id: 'pk3-science-u3-l6-ws', title: 'Our Weather Week', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Completes the chart for five days.', 'Identifies the most common weather of the week.'],
            exitTicket: 'Point at the finished chart and ask which weather we had the most of.',
          },
          differentiation: {
            support: ['Three days rather than five. A week is a long time at three.'],
            extension: ['Count each column and compare the numbers.'],
            language: ['Use the frame "This week we had ___ sunny days."'],
          },
          misconceptions: [
            {
              misconception: 'The chart makes the weather happen.',
              looksLike: 'The child wants to put a sunny sticker on to bring the sun.',
              correction: 'Charming, and worth a gentle laugh rather than a correction. Say the chart is how we remember, not how we decide.',
            },
          ],
          homeExtension: ['Keep the chart on the fridge for a month and let the child fill it in before breakfast.'],
        },
      ],
    },

    /* ============================================================ UNIT 4 */
    {
      id: 'pk3-science-u4',
      gradeId: 'pk3',
      subjectId: 'science',
      sequence: 4,
      title: 'Animals and Where They Live',
      bigIdea:
        'Every animal has a home, and the home is the kind of place that animal needs — a nest up high, a burrow underground, water to swim in.',
      description:
        'Animals are the most reliably interesting thing in the world to a three-year-old, so this unit trades on that. The scientific move underneath the fun is matching a creature to a habitat and giving a reason — birds need to be up high and safe, rabbits need to be underground and hidden.',
      weeks: 5,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
        { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
        { code: 'ELOF-LC-Goal P-LC 7', framework: 'HeadStart-ELOF', text: 'Child shows understanding of word categories and relationships among words.' },
      ],
      lessonTitles: [
        'Every Animal Has a Home',
        'Nests, Burrows and Dens',
        'Animals That Live in Water',
        'Babies and Grown-Ups',
        'Build a Home for a Toy Animal',
      ],
      performanceTask:
        'The Animal Estate Agent: the child is given three toy animals and a box of materials — twigs, cotton wool, a shoebox, blue paper — and has to build each one somewhere to live, then explain why that home suits that animal.',
      lessons: [
        {
          id: 'pk3-science-u4-l1',
          unitId: 'pk3-science-u4',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'Every Animal Has a Home',
          essentialQuestion: 'Where does that animal sleep?',
          summary:
            'Opens the unit with the child’s own home as the anchor — where do you sleep, where does the dog sleep — and extends outwards to animals they know from books and the street.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
          ],
          objectives: ['I can say where I sleep.', 'I can name where two animals live.'],
          vocabulary: [
            { term: 'home', definition: 'The place where you live and sleep.' },
            { term: 'safe', definition: 'Nothing can hurt you there.' },
          ],
          materials: ['Toy animals', 'A picture book with animals in it'],
          prep: ['Start with animals the child has actually seen. Lions can wait.'],
          script: [],
          worksheet: { id: 'pk3-science-u4-l1-ws', title: 'Where Do You Live?', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Names their own sleeping place and two animal homes.'],
            exitTicket: 'Hold up a toy bird and ask where it would sleep.',
          },
          differentiation: {
            support: ['Two animals only, both familiar — a dog and a bird.'],
            extension: ['Ask what would happen if the bird tried to live in the fish tank.'],
            language: ['Build the frame "A ___ lives in a ___."'],
          },
          misconceptions: [
            {
              misconception: 'All animals live in houses like ours.',
              looksLike: 'The child says the squirrel lives in a bedroom.',
              correction: 'Go and look at a real bird’s nest or a real hole in a tree. One real example resets the whole idea.',
            },
          ],
          homeExtension: ['On a walk, find one place an animal could live. A hole, a hedge, a gap under a shed.'],
        },
        {
          id: 'pk3-science-u4-l2',
          unitId: 'pk3-science-u4',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Nests, Burrows and Dens',
          essentialQuestion: 'Why is a nest up high and a burrow down low?',
          summary:
            'Three home types with three names and three hand shapes. The reasoning — up high to be safe from things on the ground, underground to hide — is introduced simply and repeated often.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
            { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
          ],
          objectives: ['I can name a nest, a burrow and a den.', 'I can match an animal to its home.'],
          vocabulary: [
            { term: 'nest', definition: 'A home made of twigs, usually up high.' },
            { term: 'burrow', definition: 'A hole in the ground an animal digs.' },
            { term: 'den', definition: 'A hidden place where an animal rests.' },
          ],
          materials: ['A real abandoned nest if you can find one', 'Pictures of a burrow and a den', 'Twigs and cotton wool'],
          prep: ['Handling a real nest is worth ten pictures. Ask at a garden centre or a park office in autumn.'],
          script: [],
          worksheet: { id: 'pk3-science-u4-l2-ws', title: 'Nest, Burrow or Den?', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Matches three animals to three home types.'],
            exitTicket: 'Show a picture of a rabbit and ask what its home is called.',
          },
          differentiation: {
            support: ['Nest and burrow only. Dens are the vaguest of the three.'],
            extension: ['Ask why a nest is made of soft things inside and scratchy things outside.'],
            language: ['Give each home a hand shape: cupped hands for a nest, a fist tunnel for a burrow.'],
          },
          misconceptions: [
            {
              misconception: 'Animals buy or find their homes rather than building them.',
              looksLike: 'The child says the bird got its nest from a shop.',
              correction: 'Try to build a nest together out of twigs and grass. Failing at it is the most convincing possible demonstration of what a bird can do.',
            },
          ],
          homeExtension: ['Look up into bare trees in winter. Nests are suddenly visible everywhere.'],
        },
        {
          id: 'pk3-science-u4-l3',
          unitId: 'pk3-science-u4',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Animals That Live in Water',
          essentialQuestion: 'Which animals live in water and which live on land?',
          summary:
            'A two-way sort — water animals and land animals — with a water tray to play in and toy creatures to place. Ducks and frogs are the interesting middle cases and should be included on purpose.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
          ],
          objectives: ['I can sort animals into water and land.', 'I can name one animal that does both.'],
          vocabulary: [
            { term: 'water', definition: 'What fish swim in.' },
            { term: 'land', definition: 'The dry ground.' },
            { term: 'swim', definition: 'To move through water.' },
          ],
          materials: ['A washing-up bowl of water', 'Toy animals, plastic ones that can get wet', 'A towel'],
          prep: ['Include a duck and a frog. The both-places answer is the best part of the lesson.'],
          script: [],
          worksheet: { id: 'pk3-science-u4-l3-ws', title: 'Water or Land?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Sorts six animals correctly.', 'Identifies at least one animal that lives in both.'],
            exitTicket: 'Hold up a toy fish and a toy dog and ask which one goes in the bowl.',
          },
          differentiation: {
            support: ['Four animals, all obvious. No middle cases at all.'],
            extension: ['Ask what would happen to the fish out of water and to the dog underwater, kindly and briefly.'],
            language: ['Use "lives in" and "lives on" as a contrasted pair. The prepositions are the tricky part.'],
          },
          misconceptions: [
            {
              misconception: 'Anything that can go in water lives in water.',
              looksLike: 'The child puts the dog in the water pile because dogs can swim.',
              correction: 'Distinguish visiting from living. Ask where the dog sleeps. Not in the pond.',
            },
          ],
          homeExtension: ['At bath time, ask which of the toys could really live in water.'],
        },
        {
          id: 'pk3-science-u4-l4',
          unitId: 'pk3-science-u4',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Babies and Grown-Ups',
          essentialQuestion: 'What do baby animals grow into?',
          summary:
            'Matching baby animals to their grown-up versions, which ties the unit back to the growing test from unit 2. Includes the tadpole and the caterpillar, both of which are properly astonishing.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
          ],
          objectives: ['I can match a baby animal to its grown-up.', 'I know that animals grow, like I do.'],
          vocabulary: [
            { term: 'baby', definition: 'A very young animal.' },
            { term: 'grown-up', definition: 'Fully grown, not a baby any more.' },
            { term: 'change', definition: 'To become different.' },
          ],
          materials: ['Picture pairs of baby and adult animals', 'Scissors and glue for cut-and-paste matching'],
          prep: ['Cut the picture cards out beforehand unless the cutting is the point of your day.'],
          script: [],
          worksheet: { id: 'pk3-science-u4-l4-ws', title: 'Who Do I Grow Into?', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Matches four baby animals to their adults.'],
            exitTicket: 'Show a chick and ask what it will grow into.',
          },
          differentiation: {
            support: ['Three pairs, all mammals, where the baby looks like a small version of the adult.'],
            extension: ['Add the tadpole and the caterpillar, where the baby looks nothing like the adult at all.'],
            language: ['Some baby animals have their own names — puppy, kitten, chick, lamb. Teach these as a word family.'],
          },
          misconceptions: [
            {
              misconception: 'Babies are just smaller versions of adults, always.',
              looksLike: 'The child refuses to believe the tadpole becomes a frog.',
              correction: 'Do not argue. Get frogspawn in spring if you possibly can, or watch a thirty-second video. Seeing it is the only thing that works.',
            },
          ],
          homeExtension: ['Look at photos of a pet or a family member as a baby and as they are now.'],
        },
        {
          id: 'pk3-science-u4-l5',
          unitId: 'pk3-science-u4',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Build a Home for a Toy Animal',
          essentialQuestion: 'What does this animal need in its home?',
          summary:
            'The making lesson. Given a shoebox and a pile of junk, the child builds somewhere for a toy animal to live and has to say why they put each thing in.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
            { code: 'ELOF-ATL-Goal P-ATL 7', framework: 'HeadStart-ELOF', text: 'Child persists in tasks.' },
          ],
          objectives: ['I can build a home for my toy animal.', 'I can say why I put each thing in.'],
          vocabulary: [
            { term: 'build', definition: 'To make something by putting parts together.' },
            { term: 'soft', definition: 'Comfy to lie on.' },
            { term: 'shelter', definition: 'A cover that keeps the rain off.' },
          ],
          materials: ['A shoebox', 'Twigs, dry grass, cotton wool, scraps of fabric, blue paper for water', 'A toy animal', 'Sticky tape'],
          prep: ['Lay all the materials out in separate piles so choosing is visible and easy.'],
          script: [],
          worksheet: { id: 'pk3-science-u4-l5-ws', title: 'My Animal’s Home', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Builds a home with at least two deliberate features and explains one of them.'],
            exitTicket: 'Point at one thing they added and ask why it is there.',
          },
          differentiation: {
            support: ['Offer three materials, not ten. Too much choice stalls a three-year-old completely.'],
            extension: ['Ask them to add somewhere for the animal to get a drink and somewhere to hide.'],
            language: ['Narrate their building back to them as they work. It supplies the vocabulary without interrupting.'],
          },
          misconceptions: [
            {
              misconception: 'An animal home needs the same things as a human home.',
              looksLike: 'The child builds a television and a sofa for the rabbit.',
              correction: 'Enjoy it, then ask the useful question: "Does a rabbit watch telly? What does a rabbit actually need?" Food, water, somewhere to hide.',
            },
          ],
          homeExtension: ['Leave the finished home out on display for a week and let them keep improving it.'],
        },
      ],
    },

    /* ============================================================ UNIT 5 */
    {
      id: 'pk3-science-u5',
      gradeId: 'pk3',
      subjectId: 'science',
      sequence: 5,
      title: 'Plants and What They Need',
      bigIdea:
        'A tiny seed becomes a plant if it gets water, light and time — and we can watch the whole thing happen.',
      description:
        'This unit runs on a single long experiment: beans in a jar against the glass, where roots and shoots are visible. Around it sit lessons on the parts of a plant, what plants need, and where plants grow. The waiting is not a flaw in the unit; the waiting is the unit.',
      weeks: 5,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
        { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
        { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
        { code: 'ELOF-ATL-Goal P-ATL 7', framework: 'HeadStart-ELOF', text: 'Child persists in tasks.' },
      ],
      lessonTitles: [
        'The Parts of a Plant',
        'What Does a Seed Need?',
        'Planting Beans in a Jar',
        'Watching Our Plant Change',
        'Where Plants Grow',
      ],
      performanceTask:
        'The Bean Diary: four drawings of the same bean jar, made a week apart, laid out in order. The child tells the story of their bean from the drawings.',
      lessons: [
        {
          id: 'pk3-science-u5-l1',
          unitId: 'pk3-science-u5',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'The Parts of a Plant',
          essentialQuestion: 'What are the bits of a plant called?',
          summary:
            'Roots, stem, leaves, flower — learned by pulling a whole weed or a spring onion out and laying it flat on the table. Four words, one real plant, no diagrams.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
          ],
          objectives: ['I can point to the roots, the stem and the leaves.', 'I can say the roots go in the ground.'],
          vocabulary: [
            { term: 'roots', definition: 'The stringy bits that go down into the soil and drink.' },
            { term: 'stem', definition: 'The stalk that holds the plant up.' },
            { term: 'leaf', definition: 'The flat green part.' },
          ],
          materials: ['A whole weed pulled up with roots on, or a spring onion from the fridge', 'A tray or newspaper', 'A magnifying glass'],
          prep: ['Pull the weed gently so the roots stay attached. Rinse the soil off in a bowl so the roots are visible.'],
          script: [],
          worksheet: { id: 'pk3-science-u5-l1-ws', title: 'Parts of a Plant', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Points correctly to roots, stem and leaves on a real plant.'],
            exitTicket: 'Hold up the plant and ask them to point to the roots.',
          },
          differentiation: {
            support: ['Two parts only — roots and leaves — since they look most different from each other.'],
            extension: ['Add flower and seed, and look for seeds inside a real fruit.'],
            language: ['Attach each word to a body part: roots are the feet, stem is the tummy, leaves are the hands.'],
          },
          misconceptions: [
            {
              misconception: 'A plant is only the green bit above the ground.',
              looksLike: 'The child is surprised there is anything under the soil at all.',
              correction: 'Pull one up together. The moment the roots come out of the ground is genuinely memorable.',
            },
          ],
          homeExtension: ['Look at the root end of a spring onion, a carrot or a leek while cooking.'],
        },
        {
          id: 'pk3-science-u5-l2',
          unitId: 'pk3-science-u5',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'What Does a Seed Need?',
          essentialQuestion: 'What has to happen before a seed can grow?',
          summary:
            'Sets up the fair test that runs through the unit: two jars, one watered and one not. The child makes a prediction before anything is planted, which is their first real hypothesis.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
          ],
          objectives: ['I can say a seed needs water and light.', 'I can make a guess about which jar will grow.'],
          vocabulary: [
            { term: 'seed', definition: 'A tiny thing a new plant grows out of.' },
            { term: 'guess', definition: 'What you think will happen before you find out.' },
            { term: 'grow', definition: 'To get bigger.' },
          ],
          materials: ['Dried broad beans or runner beans, soaked overnight', 'Two clear jars', 'Kitchen paper', 'Water'],
          prep: ['Soak the beans the night before. Unsoaked beans take a fortnight and lose the child completely.'],
          script: [],
          worksheet: { id: 'pk3-science-u5-l2-ws', title: 'What Will Happen?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['States that a seed needs water.', 'Makes a prediction about the two jars.'],
            exitTicket: 'Point at the dry jar and ask what they think will happen to that one.',
          },
          differentiation: {
            support: ['One jar only. The comparison can come later; getting a bean to grow at all is enough.'],
            extension: ['Add a third jar in a dark cupboard and compare all three.'],
            language: ['Model the frame "I think ___ will happen." Prediction language is new and worth naming.'],
          },
          misconceptions: [
            {
              misconception: 'A seed is not alive, so it cannot grow.',
              looksLike: 'The child sorts the dry bean into the not-alive pile from unit 2.',
              correction: 'An excellent and completely reasonable answer. Say the seed is sleeping and water wakes it up, then let the experiment settle the argument.',
            },
          ],
          homeExtension: ['Save the seeds from an apple or a pepper and try them in a wet kitchen towel.'],
        },
        {
          id: 'pk3-science-u5-l3',
          unitId: 'pk3-science-u5',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Planting Beans in a Jar',
          essentialQuestion: 'Where do the roots go?',
          summary:
            'The planting itself: beans wedged between the glass and a roll of damp kitchen paper so every root and shoot is visible. Hands get wet, which is the point.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
            { code: 'ELOF-PMP-Goal P-PMP 3', framework: 'HeadStart-ELOF', text: 'Child demonstrates increasing control, strength and coordination of small muscles.' },
          ],
          objectives: ['I can put my bean in the jar myself.', 'I can water it without flooding it.'],
          vocabulary: [
            { term: 'plant', definition: 'To put a seed somewhere it can grow.' },
            { term: 'damp', definition: 'A bit wet, not soaking.' },
          ],
          materials: ['Clear jars', 'Kitchen paper', 'Soaked beans', 'A small jug of water', 'A sticky label for the child’s name mark'],
          prep: ['Do one yourself first. The paper roll needs to be tight enough to hold the bean against the glass.'],
          script: [],
          worksheet: { id: 'pk3-science-u5-l3-ws', title: 'My Bean Jar', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Assembles the jar with help and positions the bean against the glass.'],
            exitTicket: 'Ask where we will look to see the roots.',
          },
          differentiation: {
            support: ['You do the paper, they do the bean. The bean is the bit that matters to them.'],
            extension: ['Plant a second bean upside down and see whether the root still goes downwards. It does, and it is fascinating.'],
            language: ['Narrate each step as you both do it. Sequencing words — first, next, last — come free here.'],
          },
          misconceptions: [
            {
              misconception: 'More water means faster growing.',
              looksLike: 'The child fills the jar to the brim every day.',
              correction: 'Let one jar drown, honestly and without drama, and compare. It is the cheapest possible lesson in too much of a good thing.',
            },
          ],
          homeExtension: ['Keep the jar on a windowsill where the child sees it every day without being reminded.'],
        },
        {
          id: 'pk3-science-u5-l4',
          unitId: 'pk3-science-u5',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Watching Our Plant Change',
          essentialQuestion: 'What is different about our bean today?',
          summary:
            'A short repeated observation, run once a week for four weeks. Same jar, same question, one drawing each time. This is the lesson that teaches noticing over time.',
          durationMin: 10,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
          ],
          objectives: ['I can say one thing that has changed.', 'I can draw my bean today.'],
          vocabulary: [
            { term: 'change', definition: 'To become different from before.' },
            { term: 'longer', definition: 'Goes further than it used to.' },
            { term: 'shoot', definition: 'The new green part growing upwards.' },
          ],
          materials: ['The bean jars', 'Paper and crayons', 'Last week’s drawing'],
          prep: ['Keep every drawing. Laying them side by side is the entire payoff of the unit.'],
          script: [],
          worksheet: { id: 'pk3-science-u5-l4-ws', title: 'My Bean This Week', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names one change since last time.', 'Produces a drawing that shows something real about the plant.'],
            exitTicket: 'Hold last week’s drawing next to the jar and ask what is different.',
          },
          differentiation: {
            support: ['Take a photo instead of drawing. Comparing two photos is easier than comparing two drawings.'],
            extension: ['Measure the shoot with a strip of paper each week and line the strips up.'],
            language: ['Comparatives are the target: longer, taller, greener, more.'],
          },
          misconceptions: [
            {
              misconception: 'Nothing is happening because nothing changed since this morning.',
              looksLike: 'The child loses interest after two days and says the bean is broken.',
              correction: 'Only look once a week, not daily. Growth at this speed is invisible day to day and visible week to week.',
            },
          ],
          homeExtension: ['Stick each week’s drawing on the fridge in a row so the sequence is always visible.'],
        },
        {
          id: 'pk3-science-u5-l5',
          unitId: 'pk3-science-u5',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Where Plants Grow',
          essentialQuestion: 'Do plants only grow in gardens?',
          summary:
            'A plant hunt round the neighbourhood. Plants growing out of walls, in cracks in the pavement, in gutters and window boxes are all far more interesting than a tidy flowerbed.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
          ],
          objectives: ['I can find five plants outside.', 'I can find one plant growing somewhere surprising.'],
          vocabulary: [
            { term: 'grow', definition: 'To get bigger where you are.' },
            { term: 'soil', definition: 'The earth plants grow in.' },
            { term: 'crack', definition: 'A thin gap.' },
          ],
          materials: ['Outdoor shoes', 'A phone camera', 'A collecting bag'],
          prep: ['Walk the route first and spot two or three surprising plants so you have something in reserve.'],
          script: [],
          worksheet: { id: 'pk3-science-u5-l5-ws', title: 'Our Plant Hunt', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Finds five plants.', 'Points out one growing somewhere unexpected.'],
            exitTicket: 'Ask for the strangest place they saw a plant today.',
          },
          differentiation: {
            support: ['Three plants and a short route. Finishing matters more than distance.'],
            extension: ['Ask how the seed got into that crack in the wall. Nobody knows exactly, and speculating is excellent.'],
            language: ['Use position words as you go: in, on, under, between, out of.'],
          },
          misconceptions: [
            {
              misconception: 'Plants only exist where someone put them.',
              looksLike: 'The child assumes every plant was planted by a person.',
              correction: 'Find a dandelion in a pavement crack. Nobody planted that, and working out how it got there is a wonderful ten minutes.',
            },
          ],
          homeExtension: ['Keep a running count of plants found in unlikely places. Gutters are the best hunting ground.'],
        },
      ],
    },

    /* ============================================================ UNIT 6 */
    {
      id: 'pk3-science-u6',
      gradeId: 'pk3',
      subjectId: 'science',
      sequence: 6,
      title: 'Water Play: Sink or Float',
      bigIdea:
        'You can guess what water will do to a thing, and then you can find out — and being wrong is the interesting part.',
      description:
        'Water play is where a three-year-old can run a genuine experiment. Predict, test, notice, say what happened. The content — that heaviness is not the same as bigness — matters far less than the habit of guessing before finding out and then not minding the result.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
        { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
        { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
        { code: 'ELOF-ATL-Goal P-ATL 11', framework: 'HeadStart-ELOF', text: 'Child shows interest in and curiosity about the world around them.' },
      ],
      lessonTitles: [
        'Sink or Float?',
        'Guess First, Then Try',
        'Pouring, Filling and Spilling',
        'Things That Soak Up Water',
        'Bubbles',
      ],
      performanceTask:
        'The Sink or Float Show: the child sets up the tub, picks five objects from around the house, takes a grown-up’s prediction for each, and runs the test. They announce each result and keep score of the grown-up’s guesses.',
      lessons: [
        /* -------------------------------------------------------- AUTHORED */
        {
          id: 'pk3-science-u6-l1',
          unitId: 'pk3-science-u6',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'Sink or Float?',
          essentialQuestion: 'What will the water do to this?',
          summary:
            'Two words, a tub of water and a tray of objects. The child guesses with a thumb up or down, drops the object in, and says what happened. The closing surprise — a big wooden block floats and a tiny paperclip sinks — takes the size rule apart.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
          ],
          objectives: [
            'I can say the words sink and float.',
            'I can make a guess with my thumb before I test something.',
            'I can say what actually happened, even when my guess was wrong.',
          ],
          vocabulary: [
            { term: 'float', definition: 'Stays up on top of the water.', example: 'The cork floats.' },
            { term: 'sink', definition: 'Goes down to the bottom.', example: 'The stone sinks.' },
            { term: 'guess', definition: 'What you think will happen before you know.', example: 'My guess is it will float.' },
            { term: 'heavy', definition: 'Hard to lift.', example: 'The stone is heavy.' },
          ],
          materials: [
            'A washing-up bowl or a deep tray, filled two-thirds with water',
            'A towel underneath and another one to hand — this will get wet',
            'Six test objects: a cork, a metal spoon, a plastic duck, a pebble, a leaf, a coin',
            'For the last beat: a large wooden block and a paperclip',
            'The printed worksheet',
            'Chunky crayons',
          ],
          prep: [
            'Put the towel down before you fill the bowl, not after.',
            'Test all six objects yourself first. Some plastics sink and some float, and being surprised yourself mid-lesson is not the plan.',
            'Set the bowl at the child’s standing height. Reaching up into water ends badly.',
            'Keep the wooden block and the paperclip out of sight until the last beat.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Two Things, Two Splashes',
              minutes: 4,
              say: [
                'I have got two things here. A stone and a cork.',
                'I am going to drop them both in and I want you to watch really carefully. Ready?',
                'Splash! Look. Where did the stone go?',
                'All the way down to the bottom. And where is the cork?',
                'Still up on top, bobbing about. Two things, two completely different jobs. Let us find out which things do which.',
              ],
              do: [
                'Drop them at the same time, one from each hand, so the difference is simultaneous and obvious.',
                'Let the child fish them both out. Getting wet immediately sets the tone.',
                'Do not name sink and float yet. That comes next.',
              ],
              studentDoes: ['Watches both objects, retrieves them, and describes where each went.'],
              checks: [
                {
                  ask: 'Where did the stone go? Where did the cork go?',
                  lookFor: 'Down and up, or the bottom and the top. Pointing counts.',
                  ifStuck: 'Do it again slower, one at a time, and narrate: "Down… down… down. And this one — up, up, staying up."',
                },
              ],
              tip: 'Dropping them together is worth the mess. Sequential drops let a three-year-old forget the first one before the second lands.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Sink and Float',
              minutes: 4,
              say: [
                'The two words are sink and float.',
                'Sink means it goes down to the bottom. Say it with me, and point down. Sink.',
                'Float means it stays up on top. Point up. Float.',
                'Now I say a word and you do the point. Float! Sink!',
                'And here is our guessing sign. Thumb up means I think it will float. Thumb down means I think it will sink.',
              ],
              do: [
                'Point down for sink and up for float, every time you say the word, for the whole lesson.',
                'Practise the thumb signal three or four times with no object at all, so the signal is automatic before it has to carry a decision.',
              ],
              studentDoes: ['Points and signals on cue for both words.'],
              checks: [
                { ask: 'Show me sink.', lookFor: 'Thumb or finger pointing down.' },
                { ask: 'The cork stayed on top. Which word is that?', lookFor: 'Float.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Guess, Then Find Out',
              minutes: 5,
              say: [
                'Here is our rule. Guess first. Then test. Never test before you guess.',
                'This spoon. Thumb up or thumb down? What is your guess?',
                'Right, thumb down. Now drop it in. What happened?',
                'You were right! Next one. This leaf — what do you think?',
                'Ooh, you guessed sink and it floated. Your guess was wrong and that is brilliant, because now you know something new.',
              ],
              do: [
                'Insist on a thumb before every single drop. If they reach for the bowl first, gently hold the object back and wait for the thumb.',
                'Make a genuine fuss of a wrong guess. "You found something surprising" is the reaction you want them to expect.',
                'Work through all six objects. Fish each one out before the next goes in.',
              ],
              studentDoes: ['Predicts with a thumb, tests, and reports the result for each object.'],
              checks: [
                {
                  ask: 'What is your guess?',
                  lookFor: 'A committed thumb before the object goes anywhere near the water.',
                  ifStuck: 'Offer the binary out loud: "Up on top, or down to the bottom? Just choose one."',
                },
                {
                  ask: 'Was your guess right?',
                  lookFor: 'An honest yes or no, said without distress.',
                  ifStuck: 'If a wrong guess upsets them, guess wrong yourself loudly on the very next object and cheer about it.',
                },
              ],
              tip: 'The guessing is the science. A child who drops things in the water and watches is playing; a child who commits to a prediction first is experimenting, and the only difference is the thumb.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Page',
              minutes: 5,
              say: [
                'On this page are the six things we just tested.',
                'Put a dot on every single one that floated. Think back — which ones stayed on top?',
                'Now look at the two water pictures. One shows floating and one shows sinking. Which is which?',
                'Draw a line from each of our objects to the right picture.',
              ],
              do: [
                'Keep the wet objects on the towel beside the page. Pointing at the real cork while looking at the drawn cork is what makes the page mean anything.',
                'If they cannot remember a result, put it back in the water rather than telling them.',
              ],
              studentDoes: ['Records results on the page by dotting and matching.'],
              checks: [{ ask: 'How do you know the spoon sank?', lookFor: 'Because we tried it and it went to the bottom.' }],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'The Big Surprise',
              minutes: 2,
              say: [
                'Two last things, and I think these will get you.',
                'This great big heavy wooden block, and this teeny tiny paperclip. Guess. Thumbs.',
                'In they go. The big one floated and the tiny one sank!',
                'So big does not mean sink. Something else is going on, and that is a puzzle for another day.',
              ],
              do: [
                'Let them hold both first so the weight difference registers in their hands.',
                'Do not explain density. Leave the puzzle open — an unanswered question is a fine way to end.',
              ],
              studentDoes: ['Predicts, tests, and registers the surprise.'],
              checks: [
                { ask: 'Was that what you expected?', lookFor: 'Surprise, and an accurate report of what happened.' },
              ],
            },
          ],
          worksheet: {
            id: 'pk3-science-u6-l1-ws',
            title: 'Sink or Float?',
            style: 'line-art',
            prepNotes:
              'Do this page after the water play, not before, and keep the real wet objects on a towel beside it. Put the page somewhere dry — a clipboard on a chair works well — because a three-year-old fresh from a water tray has extremely wet hands.',
            sections: [
              {
                id: 's1',
                title: 'Dot the Floaters',
                directions: 'Here are the six things we tested. Put a dot on every one that floated on top.',
                layout: 'grid',
                images: [
                  {
                    id: 'img-test-objects-6',
                    slot: 'The six test objects',
                    purpose:
                      'These are the exact six objects from the tray, drawn plainly so the child can match picture to memory. Three float and three sink, so a child who dots everything has recalled nothing.',
                    subject:
                      'six separate everyday objects arranged in a grid: a cork, a metal teaspoon, a small rubber duck, a rounded grey pebble, a single flat leaf, a round coin',
                    count: 6,
                    composition:
                      'a two-row by three-column arrangement with generous white space around each object, every object drawn as a clean simple outline at roughly the same size on the page, nothing touching or overlapping, each large enough for a crayon dot',
                    mustInclude: ['exactly six objects, one per grid position', 'each object clearly recognisable in silhouette'],
                    mustAvoid: ['water, a bowl or a tray in the picture', 'boxes or grid lines drawn around the objects', 'objects touching', 'a background'],
                    aspect: '3:2',
                    altText: 'Six objects: a cork, a spoon, a rubber duck, a pebble, a leaf and a coin',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Which Picture Is Floating?',
                directions: 'One of these shows floating and one shows sinking. Point to floating. Then draw a line from each thing above to the right picture.',
                layout: 'split',
                images: [
                  {
                    id: 'img-tub-floating',
                    slot: 'Left — an object floating',
                    purpose:
                      'A side-on cutaway is the only view that shows floating clearly; from above, a floating and a sinking object look identical. This picture is what lets the child see the idea rather than remember the event.',
                    subject:
                      'a side-on cutaway view of a clear rectangular tub of water with a single cork resting on the surface, half above and half below the waterline',
                    count: 1,
                    composition:
                      'the tub drawn as a simple open-topped rectangle seen from the side, a single straight horizontal waterline across it, the cork sitting exactly on that line with its lower half below it, nothing else in the tub',
                    mustInclude: ['exactly one object in the water', 'a clear straight horizontal waterline', 'the cork clearly straddling the waterline'],
                    mustAvoid: ['a second object', 'bubbles, splashes or ripples that obscure the waterline', 'a hand or a face', 'lettering or arrows'],
                    aspect: '1:1',
                    altText: 'A side view of a tub of water with a cork floating on the surface',
                    style: 'diagram',
                  },
                  {
                    id: 'img-tub-sinking',
                    slot: 'Right — an object sunk',
                    purpose:
                      'Deliberately identical to the floating picture in every way except the position of the object, so the only difference the child can notice is the one that matters.',
                    subject:
                      'a side-on cutaway view of a clear rectangular tub of water, identical to the floating one, with a single grey pebble resting flat on the bottom of the tub well below the waterline',
                    count: 1,
                    composition:
                      'the same tub shape, size and waterline as the floating picture, the pebble sitting on the inside floor of the tub with clear water above it, nothing else in the tub',
                    mustInclude: ['exactly one object in the water', 'the same straight horizontal waterline as the floating picture', 'the pebble clearly resting on the bottom'],
                    mustAvoid: ['the pebble touching or breaking the waterline', 'bubbles or motion lines', 'a hand or a face', 'lettering or arrows'],
                    aspect: '1:1',
                    altText: 'A side view of a tub of water with a pebble on the bottom',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's3',
                title: 'The Big Surprise',
                directions: 'The big block floated. The tiny paperclip sank! Colour the one that floated.',
                layout: 'row',
                images: [
                  {
                    id: 'img-block-and-paperclip',
                    slot: 'The two surprise objects',
                    purpose:
                      'Puts the counter-example on the page so it survives the day. The size difference must be extreme, because the whole point is that the bigger object is the one that floats.',
                    subject:
                      'two objects side by side at dramatically different sizes: a large plain wooden cube on the left, and a small metal paperclip on the right roughly one sixth of the cube’s height',
                    count: 2,
                    composition:
                      'both objects on a common baseline with a wide clear gap between them, the size difference obvious and exaggerated, the block drawn with a large plain colourable face and the paperclip drawn with its clear looped wire shape',
                    mustInclude: ['exactly two objects', 'the wooden block at least five times the height of the paperclip', 'a large plain area inside the block outline for colouring'],
                    mustAvoid: ['water in this picture', 'the objects touching', 'lettering or size labels', 'wood grain detail so heavy it cannot be coloured over'],
                    aspect: '3:1',
                    altText: 'A large wooden block beside a tiny paperclip',
                  },
                ],
              },
            ],
            answerKey: [
              'Dot the floaters: the cork, the rubber duck and the leaf. The spoon, the pebble and the coin all sank.',
              'Which picture is floating: the left one, with the cork sitting on the waterline.',
              'The big surprise: colour the wooden block. Being surprised by this is the correct response.',
            ],
          },
          assessment: {
            successCriteria: [
              'Uses the words sink and float correctly for at least four objects.',
              'Gives a thumb prediction before testing, without being reminded every time.',
              'Reports a result accurately even when it contradicts their own guess.',
            ],
            exitTicket:
              'Hand them a new object they have not tested and ask, "Guess first — sink or float?" Committing to a thumb before it touches the water is the pass. Whether they are right does not matter at all.',
            rubric: [
              { level: 'emerging', descriptor: 'Enjoys the water and can say where an object went, but drops things in before guessing and changes the guess after seeing the result.' },
              { level: 'developing', descriptor: 'Uses both words correctly and gives a prediction when prompted; a wrong guess still causes some upset.' },
              { level: 'secure', descriptor: 'Predicts unprompted, reports results honestly including wrong guesses, and shows interest in a surprising outcome rather than dismissing it.' },
            ],
          },
          differentiation: {
            support: [
              'Two objects only, and make them extreme — a stone and a cork. Repeat those two until the words are solid.',
              'Skip the thumbs and just ask "up or down?" out loud. The prediction matters; the signal does not.',
              'Use a shallow tray rather than a deep bowl if water is intimidating.',
            ],
            extension: [
              'Test the same object twice, once flat and once on its edge — a piece of foil is spectacular here.',
              'Try to make something that sinks into something that floats by putting it in a plastic tub.',
              'Sort the tested objects into two groups and ask what the floaters have in common. There is no easy answer and the thinking is worth it.',
            ],
            language: [
              'Sink and float are a matched pair with opposite gestures. Teach them together, always, and always with the pointing.',
              'The frame "I think it will ___" is the sentence to drill, because it carries the whole idea of a prediction.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Big things sink and small things float.',
              looksLike: 'The child predicts confidently by size alone, and is thrown by the coin sinking and the large plastic lid floating.',
              correction: 'That is exactly what the final beat is for. Do not explain it away — let the block and the paperclip stand as an unsolved puzzle. Being told the rule is wrong is far weaker than seeing it fail.',
            },
            {
              misconception: 'Heavy things sink, and heavy means whatever I decide it means.',
              looksLike: 'The child calls whichever object sank "the heavy one" after the fact, regardless of actual weight.',
              correction: 'Weigh two objects in their hands before predicting, and say the guess out loud first. Reasoning backwards from the answer stops as soon as the prediction is committed.',
            },
            {
              misconception: 'A wrong guess means you failed.',
              looksLike: 'The child changes their answer the instant the object hits the water, or refuses to guess at all.',
              correction: 'Guess wrong yourself, loudly, several times, and celebrate it. "I was wrong! Now I know!" is the single most useful sentence you can model in this whole unit.',
            },
          ],
          homeExtension: [
            'Bath time is this lesson, for free, every night. Guess before each toy goes in.',
            'At the sink after dinner, guess whether each thing will sink before it goes into the washing-up water.',
            'At the park pond, drop a leaf and a pebble in and ask for a prediction first. Nothing else needed.',
          ],
          teacherNotes:
            'Do not try to teach why things float. Density is not accessible at three and attempting it turns a joyful twenty minutes into a confusing one. The learning objective is the predict-test-report cycle, and the content is just the vehicle. Also, accept that this lesson is wet. Put the towel down first, roll the sleeves, and let it be as messy as it needs to be — the child who is worried about splashing is not experimenting.',
        },

        {
          id: 'pk3-science-u6-l2',
          unitId: 'pk3-science-u6',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Guess First, Then Try',
          essentialQuestion: 'Can I guess right about something I have never tested?',
          summary:
            'Extends the prediction habit to a fresh set of objects the child chooses themselves from around the house, and turns it into a game against a grown-up who guesses too.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
          ],
          objectives: ['I can choose something and guess what it will do.', 'I can keep score of who guessed right.'],
          vocabulary: [
            { term: 'predict', definition: 'To say what you think will happen next.' },
            { term: 'right', definition: 'The same as what really happened.' },
          ],
          materials: ['The water tub', 'A basket the child fills themselves', 'Towels'],
          prep: ['Set boundaries on what can go in the water before they start collecting. Say it once, clearly.'],
          script: [],
          worksheet: { id: 'pk3-science-u6-l2-ws', title: 'My Guesses', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Predicts before every test.', 'Reports results honestly.'],
            exitTicket: 'Give them one new object and ask for a guess before it goes near the water.',
          },
          differentiation: {
            support: ['Three objects is plenty. Choosing them is half the work.'],
            extension: ['Ask them to predict for an object without touching it, then again after holding it, and see if the guess changes.'],
            language: ['Alternate "I think" and "I guess" so both forms get used.'],
          },
          misconceptions: [
            {
              misconception: 'A guess should only be said out loud if you are sure it is right.',
              looksLike: 'The child stays silent or mumbles until they can see what happened.',
              correction: 'Make guessing a two-player game where you go first and get things wrong. The pressure comes off immediately.',
            },
          ],
          homeExtension: ['Guess before opening anything: the post, a wrapped present, what is for dinner. The habit generalises.'],
        },
        {
          id: 'pk3-science-u6-l3',
          unitId: 'pk3-science-u6',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Pouring, Filling and Spilling',
          essentialQuestion: 'Which container holds the most?',
          summary:
            'Free water play with jugs, funnels and cups of different shapes, framed by one question about capacity. Tall and thin versus short and wide is the interesting comparison.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-MATH-Goal P-MATH 8', framework: 'HeadStart-ELOF', text: 'Child measures objects by their various attributes using standard and non-standard measurement.' },
            { code: 'ELOF-PMP-Goal P-PMP 3', framework: 'HeadStart-ELOF', text: 'Child demonstrates increasing control, strength and coordination of small muscles.' },
          ],
          objectives: ['I can pour from one container into another.', 'I can say which one holds more.'],
          vocabulary: [
            { term: 'full', definition: 'No room for any more.' },
            { term: 'empty', definition: 'Nothing in it.' },
            { term: 'pour', definition: 'To tip so the water runs out.' },
          ],
          materials: ['Jugs, cups, bottles and funnels of assorted shapes', 'A water tray', 'Towels and an apron'],
          prep: ['Include one tall thin container and one short wide one that hold the same amount. That pairing is the whole lesson.'],
          script: [],
          worksheet: { id: 'pk3-science-u6-l3-ws', title: 'Full and Empty', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Pours between containers with reasonable control.', 'Compares two containers and gives an answer with a reason.'],
            exitTicket: 'Hold up the tall thin cup and the short wide one and ask which holds more.',
          },
          differentiation: {
            support: ['Two containers, wide openings, and a low water level.'],
            extension: ['Count how many small cups it takes to fill the big jug.'],
            language: ['Full, empty and half are the three words. Half is the hard one and can wait.'],
          },
          misconceptions: [
            {
              misconception: 'The taller container always holds more.',
              looksLike: 'The child insists the thin tall bottle holds more even after the water is poured from the wide one and fits exactly.',
              correction: 'Pour it back and forth several times. This is conservation of volume and it genuinely will not resolve at three — but the repeated pouring plants it.',
            },
          ],
          homeExtension: ['Let them pour their own drink from a small jug at meals. It is the same skill and it matters to them.'],
        },
        {
          id: 'pk3-science-u6-l4',
          unitId: 'pk3-science-u6',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Things That Soak Up Water',
          essentialQuestion: 'Where did the water go?',
          summary:
            'A drop of water on a sponge, a tissue, a piece of foil and a plastic lid. Some materials drink and some do not, which is a different question from sink and float and worth separating.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
          ],
          objectives: ['I can find out which things soak up water.', 'I can sort materials into soaks-up and does-not.'],
          vocabulary: [
            { term: 'soak up', definition: 'To drink the water in, like a sponge.' },
            { term: 'dry', definition: 'No water on it.' },
            { term: 'wet', definition: 'Water on it or in it.' },
          ],
          materials: ['A pipette or a teaspoon', 'A sponge, kitchen paper, foil, a plastic lid, a scrap of cloth, a coin', 'A tray'],
          prep: ['A pipette gives far better control than a spoon and turns this into a fine-motor lesson too. Any chemist sells them.'],
          script: [],
          worksheet: { id: 'pk3-science-u6-l4-ws', title: 'Soaks Up or Not?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Sorts six materials into two groups by whether they absorb water.'],
            exitTicket: 'Put a drop on the foil and a drop on the tissue and ask what is different.',
          },
          differentiation: {
            support: ['Two materials, maximally different — a sponge and a plastic lid.'],
            extension: ['Ask which material would be best for mopping up a spill, then actually spill something and test it.'],
            language: ['Soak up is a phrasal verb and does not translate obviously. Demonstrate it rather than defining it.'],
          },
          misconceptions: [
            {
              misconception: 'The water disappeared or dried up instantly.',
              looksLike: 'The child says the water vanished when it went into the sponge.',
              correction: 'Squeeze the sponge out over the tray. The water comes straight back and the mystery is solved in two seconds.',
            },
          ],
          homeExtension: ['Next spill, let them choose what to clean it up with and see whether the choice was a good one.'],
        },
        {
          id: 'pk3-science-u6-l5',
          unitId: 'pk3-science-u6',
          gradeId: 'pk3',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Bubbles',
          essentialQuestion: 'What shape is a bubble?',
          summary:
            'Ends the year with bubbles: blowing them, chasing them, and noticing that whatever shape the wand is, the bubble comes out round. It is a real observation with a real surprise in it.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-ATL-Goal P-ATL 11', framework: 'HeadStart-ELOF', text: 'Child shows interest in and curiosity about the world around them.' },
          ],
          objectives: ['I can blow a bubble.', 'I can say that bubbles are round.'],
          vocabulary: [
            { term: 'bubble', definition: 'A ball of air with a thin skin of soapy water round it.' },
            { term: 'round', definition: 'Shaped like a ball or a circle.' },
            { term: 'pop', definition: 'To burst.' },
          ],
          materials: ['Washing-up liquid and water', 'Bubble wands, including a square and a triangle bent from a pipe cleaner', 'Outdoor space'],
          prep: ['Bend two pipe cleaners into a square and a triangle. The prediction that a square wand makes a square bubble is irresistible and wrong.'],
          script: [],
          worksheet: { id: 'pk3-science-u6-l5-ws', title: 'Bubbles', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Blows at least one bubble.', 'States that bubbles are round whatever the wand shape.'],
            exitTicket: 'Hold up the square wand and ask what shape bubble it will make.',
          },
          differentiation: {
            support: ['Wave the wand through the air rather than blowing. Controlled blowing is genuinely hard at three.'],
            extension: ['Try to catch a bubble on a wet hand without popping it, which is possible and thrilling.'],
            language: ['Round, circle and ball are three words for closely related ideas. Use all three.'],
          },
          misconceptions: [
            {
              misconception: 'A square wand makes a square bubble.',
              looksLike: 'The child predicts a square bubble with total confidence.',
              correction: 'A brilliant prediction and exactly the right kind of thinking. Test it. Being wrong here is the best possible ending to the year.',
            },
          ],
          homeExtension: ['Keep a bottle of bubble mixture by the back door. It is the cheapest ten minutes of science there is.'],
        },
      ],
    },
  ],
}

export default course
