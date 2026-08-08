import type { SubjectCourse } from '../../types'

/**
 * Pre-K Science (ages 4–5).
 *
 * Lessons run 15–25 minutes and are investigation-led: something happens on the
 * table, the child guesses first, and then everyone looks. The through-line for
 * the whole year is a four-step habit — predict, test, observe, explain — used
 * so often that by June the child reaches for it without being asked.
 *
 * Almost nothing here is written down by the child. The worksheets record a
 * prediction and a result, usually by circling or drawing, because a four-year-
 * old who is busy forming letters has stopped watching the experiment.
 */
const course: SubjectCourse = {
  gradeId: 'pk4',
  subjectId: 'science',
  title: 'Pre-K Science',
  overview:
    'Four-year-olds are already doing science: they drop things to see what happens, they ask why the moon followed the car, they poke a woodlouse to make it curl. This course does not teach them to be curious — it teaches them what to do with the curiosity. Every unit runs the same loop: notice something, say what you think will happen, try it, and then say what actually happened even when it was not what you guessed. Along the way children learn to use their senses deliberately, to sort and compare, and to look after living things.',
  yearGoals: [
    'Ask a question about something you noticed, and say out loud what you think will happen before you try it.',
    'Use eyes, ears, hands, nose and tongue on purpose as tools for finding things out.',
    'Describe what living things need to stay alive, and name the stages of a plant and a butterfly life cycle.',
    'Notice and describe the weather each day, and recognise that the seasons change in a repeating pattern.',
    'Sort objects by what they are made of and by what they do, and explain a push, a pull, a sink and a float.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'pk4-sci-u1',
      gradeId: 'pk4',
      subjectId: 'science',
      sequence: 1,
      title: 'Wondering Out Loud: How We Find Things Out',
      bigIdea:
        'A scientist is anybody who wonders something, says what they think will happen, tries it, and then tells the truth about what they saw.',
      description:
        'The unit that makes every other unit work. Children learn the four-step loop — predict, test, observe, explain — on deliberately tiny questions where the answer arrives in under a minute. The hardest part is not the guessing; it is saying "I thought it would sink and it floated" without embarrassment. Treat a wrong prediction as the most interesting thing that can happen and the whole year gets easier.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
        { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
        { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk.' },
        { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
      ],
      lessonTitles: [
        'I Wonder…',
        'Predict, Then Peek',
        'Saying Exactly What We See',
        'Doing It Again to Be Sure',
        'Telling Someone What We Found Out',
      ],
      performanceTask:
        'The Wonder Jar: over a week the child posts a drawing of one thing they wondered about into a jar each day. On Friday you pull one out together, make a prediction, test it if you possibly can, and the child tells another adult what happened.',
      lessons: [
        /* ---------------------------------------------------- L1 outline */
        {
          id: 'pk4-sci-u1-l1',
          unitId: 'pk4-sci-u1',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'I Wonder…',
          essentialQuestion: 'What is a question you can actually find the answer to?',
          summary:
            'Introduces the sentence stem "I wonder…" and sorts wonderings into ones we could try today and ones we would have to look up or ask about. The point is not to rank questions but to show that some of them are things you can go and do something about right now.',
          durationMin: 15,
          standards: [{ code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' }],
          objectives: [
            'I can start a question with the words "I wonder".',
            'I can tell which of my wonderings we could try out today.',
          ],
          vocabulary: [
            { term: 'wonder', definition: 'To not know something and want to find out.', example: 'I wonder if this rock floats.' },
            { term: 'question', definition: 'Something you ask because you want an answer.', example: 'My question is: will it melt?' },
          ],
          materials: ['A jar or box', 'Small squares of paper', 'A crayon', 'Three or four odd objects to spark wondering — a pine cone, a magnet, a sponge'],
          prep: [
            'Put the odd objects on the table before the child arrives and say nothing about them. Let them be noticed.',
            'Have a wondering of your own ready that you genuinely do not know the answer to.',
          ],
          script: [],
          worksheet: { id: 'pk4-sci-u1-l1-ws', title: 'My Wondering Jar', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Asks at least one question beginning "I wonder".', 'Suggests one way we might find out.'],
            exitTicket: 'Hold up the sponge and ask, "What do you wonder about this?" Any genuine question counts, however small.',
          },
          differentiation: {
            support: ['Model three wonderings of your own first. Children copy the form before they invent one.'],
            extension: ['Ask the child to sort their wonderings into "we can try it" and "we have to ask somebody".'],
            language: ['Accept a wondering said as a statement — "this one is heavy?" — and recast it as a question without correcting.'],
          },
          misconceptions: [
            {
              misconception: 'A question is something you ask when you have done something wrong.',
              looksLike: 'The child goes quiet and looks worried when invited to ask a question.',
              correction: 'Ask your own wonderings out loud all day and be visibly delighted when you do not know the answer.',
            },
          ],
          homeExtension: ['Say "I wonder…" out loud once a day about something ordinary and let the child hear you not knowing.'],
        },

        /* ---------------------------------------------------- L2 authored */
        {
          id: 'pk4-sci-u1-l2',
          unitId: 'pk4-sci-u1',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 2,
          status: 'authored',
          title: 'Predict, Then Peek',
          essentialQuestion: 'What do I think will happen — and was I right?',
          summary:
            'The whole scientific loop in twenty minutes, using two ice cubes. The child predicts which will disappear first, one in a warm hand and one on a cold plate, then watches. The lesson deliberately makes being wrong feel good, because a child who is afraid of a wrong guess will stop guessing, and a child who stops guessing has stopped doing science.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions about what will happen.' },
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts simple investigations and experiments.' },
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
          ],
          objectives: [
            'I can say what I think will happen before we start.',
            'I can watch carefully and say what really happened.',
            'I can say "I was wrong" and feel fine about it.',
          ],
          vocabulary: [
            { term: 'predict', definition: 'To say what you think will happen before it happens.', example: 'I predict the ice in my hand melts first.' },
            { term: 'melt', definition: 'When something hard and cold turns into water.', example: 'The ice melted into a puddle.' },
            { term: 'observe', definition: 'To watch something really carefully on purpose.', example: 'We observed the ice for five minutes.' },
          ],
          materials: [
            'Two ice cubes exactly the same size',
            'A small plate or saucer, straight from the fridge if you can',
            'A towel for the wet hand',
            'The printed worksheet',
            'A crayon',
          ],
          prep: [
            'Freeze the ice in a small tray so both cubes are genuinely identical. If one is bigger the child will spot it and the test is spoiled.',
            'Chill the plate for ten minutes. It makes the result clearer and the contrast fairer.',
            'Decide in advance that you will say your own prediction out loud too, and that you will let yourself be wrong at least once.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Two Cubes, One Question',
              minutes: 3,
              say: [
                'Look what I have. Two ice cubes. Are they the same? Check them. Same size?',
                'Same size. Now here is my question. If one ice cube sits in your warm hand, and one ice cube sits on this cold plate — which one turns into water first?',
                "Do not tell me yet. Think about it in your head for a second.",
                'Now tell me. Which one?',
              ],
              do: [
                'Let the child hold both cubes for a moment so they can feel that they are the same.',
                'Ask the question and then stop talking. Let the silence do the work.',
              ],
              studentDoes: ['Handles both cubes, then commits out loud to one of them.'],
              checks: [
                {
                  ask: 'Which one do you think melts first?',
                  lookFor: 'Any answer at all, with a reason attached — "my hand is warm" is a brilliant four-year-old reason.',
                  ifStuck: 'Offer the two options as a choice rather than an open question: "Hand one, or plate one? Just pick."',
                },
              ],
              tip: 'Do not accept "I do not know" as a final answer. Say, "Nobody knows yet — that is why we are doing it. Just guess." A guess you have committed to is what makes the result interesting.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'The Word for Guessing First',
              minutes: 3,
              say: [
                'The guess you just made has a special name. Scientists call it a prediction.',
                'A prediction is when you say what you think will happen BEFORE it happens. Say that word with me: prediction.',
                "Here is the important bit. A prediction is allowed to be wrong. Mine are wrong all the time. When my prediction is wrong I have learned something new, so I actually quite like it.",
                'My prediction is that the plate one melts first. Now let us find out which of us is right.',
              ],
              do: [
                'Write nothing. Just say the word clearly three or four times and let it settle.',
                'Make your own prediction the opposite of the child’s if you can do it honestly. It makes the reveal a contest rather than a test.',
              ],
              studentDoes: ['Says the word "prediction" and repeats their own.'],
              checks: [
                {
                  ask: 'What does a prediction mean?',
                  lookFor: 'What you think will happen, said before it happens.',
                  ifStuck: 'Predict something silly and immediate: "I predict this pencil will roll off the table." Then push it and see.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Now We Test It',
              minutes: 6,
              say: [
                'One cube in your hand. Close your fingers round it. One cube on the cold plate. Do not touch that one.',
                'Now we watch. Watching carefully is a job — it is called observing.',
                'Tell me what you can feel. What is your hand doing? What is happening to the cube?',
                'Look at the plate one. Has anything changed there?',
                'Ooh. Look at the water running down your wrist. What does that tell us?',
              ],
              do: [
                'Keep the child’s hand closed. An open palm slows it down and blurs the result.',
                'Narrate the plate cube every thirty seconds or the child will forget it exists.',
                'Have the towel ready. A cold wet hand ends the lesson early.',
              ],
              studentDoes: ['Holds one cube, watches both, and reports changes out loud as they happen.'],
              checks: [
                {
                  ask: 'What is happening to the ice in your hand?',
                  lookFor: 'Getting smaller, going wet, turning to water, cold and dripping.',
                  ifStuck: 'Ask them to compare directly: "Hold your hand next to the plate. Which cube is smaller now?"',
                },
                {
                  ask: 'Why do you think the hand one is winning?',
                  lookFor: 'Because a hand is warm and the plate is cold. Any mention of warm or cold is the target.',
                  ifStuck: 'Put their other hand on their cheek and then on the plate. "Which is warmer? So which would melt ice faster?"',
                },
              ],
              tip: 'Six minutes is a long time for a four-year-old to watch anything. Keep the talk moving and let them peek at the plate cube as often as they like.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Writing Down What Happened',
              minutes: 6,
              say: [
                'Now we make a record, so we can remember what we found out.',
                'First box: circle the picture of where you PREDICTED it would melt first. That was your guess at the start — be honest, even if you turned out wrong.',
                'Second box: circle where it REALLY melted first. That is what happened.',
                'Are your two circles on the same picture, or different pictures?',
                'Last bit — draw what your hand looked like at the end. Wet? A puddle? Draw it how it really was.',
              ],
              do: [
                'Insist on the prediction box being filled in truthfully. If the child changes their story, say gently, "No — at the start you said the plate. Circle the plate. Being wrong is the good bit."',
                'Read every direction aloud. The child cannot read the page.',
              ],
              studentDoes: ['Completes the prediction box, the result box and the drawing.'],
              checks: [
                {
                  ask: 'Did your prediction match what happened?',
                  lookFor: 'A clear yes or no, said without shame.',
                  ifStuck: 'Point at your own wrong prediction and celebrate it loudly first.',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Four Words',
              minutes: 2,
              say: [
                'We did four things today and I want you to remember them.',
                'We PREDICTED — we guessed first. We TESTED — we tried it. We OBSERVED — we watched really hard. And we EXPLAINED — we said why.',
                'Predict. Test. Observe. Explain. That is what scientists do all day, and you just did all four of them before snack time.',
              ],
              do: ['Count the four words off on your fingers and have the child copy the finger count.'],
              studentDoes: ['Repeats the four words with the finger actions.'],
              checks: [
                {
                  ask: 'What is the very first thing a scientist does?',
                  lookFor: 'Guess, or predict, or say what they think will happen.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'pk4-sci-u1-l2-ws',
            title: 'Predict, Then Peek: The Ice Cube Race',
            style: 'line-art',
            prepNotes:
              'Fill in the prediction box BEFORE you start the test — not afterwards. If you leave it until the end the child will simply circle the right answer and the whole point of the page evaporates. Keep the page away from the melting ice; a wet worksheet is a sad worksheet.',
            sections: [
              {
                id: 's1',
                title: 'My Prediction',
                directions: 'Which ice cube do you think will melt first? Circle that picture. Do this before we start!',
                layout: 'split',
                images: [
                  {
                    id: 'img-ice-in-hand',
                    slot: 'Prediction option A — ice in a hand',
                    purpose: 'Gives the child a concrete picture to circle so the prediction is recorded physically and cannot be quietly revised once the answer is known.',
                    subject: 'a single open child’s palm seen from above with one clear ice cube resting in the centre of it',
                    count: 1,
                    composition: 'the hand centred in the frame, fingers relaxed and open, exactly one cube-shaped block of clear ice sitting in the middle of the palm, plain empty background',
                    mustInclude: ['exactly one ice cube', 'a warm medium-brown skin tone drawn respectfully and simply', 'the ice clearly cube shaped with visible straight edges'],
                    mustAvoid: ['more than one ice cube', 'water droplets or a puddle at this stage', 'a table, sleeve or background scenery', 'a face or body'],
                    aspect: '1:1',
                    altText: 'One ice cube resting in an open hand',
                  },
                  {
                    id: 'img-ice-on-plate',
                    slot: 'Prediction option B — ice on a plate',
                    purpose: 'The matching alternative. Drawn at the same visual weight as the hand so neither option looks like the intended answer.',
                    subject: 'a single plain round saucer seen from a low angle with one clear ice cube sitting in the middle of it',
                    count: 1,
                    composition: 'the saucer centred in the frame at the same overall size as the hand in the paired picture, exactly one cube-shaped block of clear ice in the centre, plain empty background',
                    mustInclude: ['exactly one ice cube', 'a completely plain undecorated saucer'],
                    mustAvoid: ['more than one ice cube', 'a pattern or rim decoration on the plate', 'water or a puddle', 'a table or background scenery'],
                    aspect: '1:1',
                    altText: 'One ice cube sitting on a plain saucer',
                  },
                ],
              },
              {
                id: 's2',
                title: 'What Really Happened',
                directions: 'Now look. Which one melted first for real? Circle it. Was it the same as your guess?',
                layout: 'full',
                items: ['My guess and what happened were:   THE SAME    /    DIFFERENT'],
                images: [
                  {
                    id: 'img-melting-stages-3',
                    slot: 'Three stages of one melting cube',
                    purpose: 'Melting is gradual, so children often describe the ice as having "gone" rather than changed. Three frozen moments side by side give them the language of a process with a middle, not just a before and after.',
                    subject: 'three side-by-side panels showing one ice cube at three stages of melting — a full sharp-edged cube, a smaller rounded cube sitting in a small pool of water, and a shallow pool of water with no ice left',
                    count: 3,
                    composition: 'three equal panels in one horizontal row separated by thin vertical dividing lines, each panel containing exactly one stage, the ice clearly shrinking from left to right and the pool of water clearly growing',
                    mustInclude: ['exactly three panels', 'a clearly cube-shaped block with straight edges in the first panel', 'no ice at all remaining in the third panel'],
                    mustAvoid: ['arrows or numbers between the panels', 'a hand or plate in any panel', 'the ice looking the same size across panels'],
                    aspect: '3:1',
                    altText: 'Three panels showing an ice cube melting into a puddle',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Draw Your Hand at the End',
                directions: 'Draw your hand the way it looked when the ice was gone. Was it wet? Was there a puddle? Draw it how it really was.',
                layout: 'full',
                writingLines: 0,
                images: [
                  {
                    id: 'img-empty-drawing-frame',
                    slot: 'Blank drawing box',
                    purpose: 'A bordered space signals to the child that drawing is the task here, not decoration of the whole page, and it keeps their record in one findable place.',
                    subject: 'a single empty rectangular frame with a plain rounded border and a completely blank interior',
                    composition: 'one large rectangle centred with a clean even border of uniform thickness, the entire inside blank white with no lines, dots or texture',
                    mustInclude: ['a completely empty interior', 'a single unbroken border'],
                    mustAvoid: ['ruled lines inside the frame', 'decorative corners, stars or doodles', 'any text or label', 'a second frame'],
                    aspect: '4:3',
                    altText: 'An empty box for drawing in',
                  },
                ],
              },
              {
                id: 's4',
                title: 'Next Time I Wonder…',
                directions: 'Here are three more things. Which one do you want to test next time? Circle it and tell someone your prediction.',
                layout: 'row',
                images: [
                  {
                    id: 'img-next-tests-3',
                    slot: 'Three objects to predict about next',
                    purpose: 'Extends the loop past this lesson by handing the child the choice of the next question, which is what turns a one-off activity into a habit.',
                    subject: 'a horizontal row of three separate simple everyday objects — one wax crayon, one chocolate button, and one small metal spoon',
                    count: 3,
                    composition: 'a single straight horizontal row, three objects evenly spaced with wide white gaps, all drawn at roughly the same overall size, none touching',
                    mustInclude: ['exactly three objects', 'each object clearly recognisable on its own', 'even spacing with clear separation'],
                    mustAvoid: ['a table, hand or background', 'objects overlapping', 'any text, label or wrapper lettering'],
                    aspect: '3:1',
                    altText: 'A crayon, a chocolate button and a metal spoon in a row',
                  },
                ],
              },
            ],
            answerKey: [
              'Prediction box: whatever the child genuinely guessed. There is no wrong answer here and it must not be corrected.',
              'What really happened: the ice in the hand almost always melts first, because a hand is much warmer than a chilled plate.',
              'Same or different: either is a correct completion. A "different" answer deserves more praise, not less.',
              'Drawing: look for wetness or a puddle — evidence the child observed the end state rather than drawing a generic hand.',
              'Next time: any of the three is fine. Listen for a prediction attached to the choice.',
            ],
          },
          assessment: {
            successCriteria: [
              'States a prediction out loud before the test begins.',
              'Describes at least two changes observed during the test.',
              'Says whether the prediction matched the result without distress.',
            ],
            exitTicket:
              'Hold up a paper clip over a cup of water and ask, "What do you predict?" You are listening for a committed guess, not a correct one. A child who says "I do not know" needs another round of low-stakes predicting.',
            rubric: [
              { level: 'emerging', descriptor: 'Will not commit to a guess, or changes the guess as soon as the result appears.' },
              { level: 'developing', descriptor: 'Predicts when prompted and reports the result, but treats a wrong prediction as a failure.' },
              { level: 'secure', descriptor: 'Predicts spontaneously with a reason attached, and reports a mismatched result cheerfully as something learned.' },
            ],
          },
          differentiation: {
            support: [
              'Offer the prediction as a two-way choice rather than an open question. Choosing is far easier than generating.',
              'Shorten the wait by using crushed ice or a smaller cube. Six minutes of watching is genuinely hard at four.',
              'Let the child hold both cubes, one in each hand, if the plate is too abstract. The contrast is weaker but the loop still runs.',
            ],
            extension: [
              'Ask what would happen with three cubes: hand, plate, and one in a cup of warm water. Predict the order of all three.',
              'Ask the child to design the next test themselves — what would they change to make the hand one melt even faster?',
              'Introduce the idea of a fair test: why did both cubes have to be the same size at the start?',
            ],
            language: [
              'Drill the frame "I predict that ___ will ___." The structure carries more weight than the vocabulary here.',
              'Pair each of the four words — predict, test, observe, explain — with a fixed hand gesture and use the gesture every time you say the word.',
            ],
          },
          misconceptions: [
            {
              misconception: 'A prediction is supposed to be right, and a wrong one means you failed.',
              looksLike: 'The child quietly changes their answer once they can see which cube is winning, or refuses to guess at all.',
              correction: 'Make your own prediction out loud, be wrong, and be delighted about it. Say "I was wrong! Brilliant. Now I know something I did not know this morning." Children copy the emotion, not the instruction.',
            },
            {
              misconception: 'The ice disappeared — it went away and stopped existing.',
              looksLike: 'Asked where the ice went, the child says "it is gone" and cannot point to anything.',
              correction: 'Tip the water from the plate into a spoon and hold it up. "This is the ice. It is still here — it just changed into water." Then freeze that same water overnight and show them it came back.',
            },
            {
              misconception: 'Observing means looking at something once.',
              looksLike: 'The child glances at the plate cube, says "nothing", and turns away.',
              correction: 'Give observing a rhythm. "Check again in ten seconds. And again. Scientists look at the same thing over and over."',
            },
          ],
          homeExtension: [
            'Predict before you open things: what colour is the inside of this pepper? How many seeds in this apple? Cut, and count.',
            'At bath time, predict which bath toys will float before they go in.',
            'When you are cooking, ask for a prediction about what will happen to the butter in the hot pan, then watch it together.',
          ],
          teacherNotes:
            'The science content of this lesson is nearly nothing — hands are warmer than plates. That is deliberate. What you are actually installing is the willingness to commit to a guess in front of another person and then be publicly wrong, which is the single hardest habit in the whole subject and the one that pays off for the next fifteen years. If the child will not guess, stay on this lesson and run it again with different objects until they will.',
        },

        /* ---------------------------------------------------- L3 outline */
        {
          id: 'pk4-sci-u1-l3',
          unitId: 'pk4-sci-u1',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Saying Exactly What We See',
          essentialQuestion: 'How do I describe something so well that somebody else can picture it?',
          summary:
            'Precise observation language. The child describes a hidden object well enough for you to pick it out of a group, which forces them past "it is nice" and into colour, size, shape and texture.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
            { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk.' },
          ],
          objectives: ['I can describe a thing using its colour, size, shape and how it feels.', 'I can tell what I see instead of what I think about it.'],
          vocabulary: [
            { term: 'describe', definition: 'To use words to tell somebody what something is like.' },
            { term: 'rough', definition: 'Bumpy and scratchy to touch, not smooth.' },
            { term: 'smooth', definition: 'Flat and even to touch, with no bumps.' },
          ],
          materials: ['Six or seven small everyday objects with obviously different colours and textures', 'A tea towel to hide them under'],
          prep: ['Choose objects that differ in more than one way, so a one-word description is never enough.'],
          script: [],
          worksheet: { id: 'pk4-sci-u1-l3-ws', title: 'Say What You See', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Gives at least two different describing words for one object.', 'Uses a describing word about how something looks or feels rather than whether they like it.'],
            exitTicket: 'Hand over a leaf and ask for three things about it. Three is the bar; two is developing.',
          },
          differentiation: {
            support: ['Offer a choice of two words each time: "Is it rough or smooth? Big or little?"'],
            extension: ['Play in reverse — you describe, the child picks the object out of the group.'],
            language: ['Build a describing-word wall with a real object taped beside each word.'],
          },
          misconceptions: [
            {
              misconception: 'Describing something means saying whether you like it.',
              looksLike: 'Asked to describe a shell the child says "it is lovely" and stops.',
              correction: 'Say "that tells me about you. Now tell me about the shell." Then ask a pointed question about colour or shape.',
            },
          ],
          homeExtension: ['Play I Spy using texture and shape clues rather than first letters.'],
        },

        /* ---------------------------------------------------- L4 outline */
        {
          id: 'pk4-sci-u1-l4',
          unitId: 'pk4-sci-u1',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Doing It Again to Be Sure',
          essentialQuestion: 'If I do it one more time, will the same thing happen?',
          summary:
            'The idea of repeating a test. A dropped ball bounces; does it bounce every time? Children discover that scientists do things more than once because once might have been a fluke.',
          durationMin: 15,
          standards: [{ code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments, including repeating an investigation.' }],
          objectives: ['I can do the same test more than once.', 'I can say whether the same thing happened again.'],
          vocabulary: [
            { term: 'again', definition: 'One more time, the same way.' },
            { term: 'same', definition: 'Not different at all.' },
          ],
          materials: ['A bouncy ball and a beanbag', 'A hard floor'],
          prep: ['Drop both objects yourself first so you know how they behave and can keep the drop height honest.'],
          script: [],
          worksheet: { id: 'pk4-sci-u1-l4-ws', title: 'Again and Again', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Repeats a test three times without changing how it is done.', 'Says whether the result was the same each time.'],
            exitTicket: 'Drop the beanbag once, then ask: "Will it do the same thing if I drop it again? How do we find out?"',
          },
          differentiation: {
            support: ['Count the trials out loud on fingers so the repetition is visible.'],
            extension: ['Change one thing deliberately — drop from a chair instead — and ask why that is not a fair repeat.'],
            language: ['Use the frame "Again it ___." every trial.'],
          },
          misconceptions: [
            {
              misconception: 'Once you know the answer there is no reason to do it again.',
              looksLike: 'The child loses interest after one drop and wants a new activity.',
              correction: 'Rig one trial to differ — drop the ball onto a rug — so a repeat genuinely produces a surprise.',
            },
          ],
          homeExtension: ['Bounce a ball ten times on different floors and notice where it bounces best.'],
        },

        /* ---------------------------------------------------- L5 outline */
        {
          id: 'pk4-sci-u1-l5',
          unitId: 'pk4-sci-u1',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Telling Someone What We Found Out',
          essentialQuestion: 'How do I tell somebody else what happened?',
          summary:
            'Communicating results. The child reports one investigation from the unit to a second adult or a video camera, in order: what we wondered, what we thought, what we did, what happened.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
            { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk.' },
          ],
          objectives: ['I can tell somebody what we did and what happened.', 'I can tell it in the right order.'],
          vocabulary: [
            { term: 'found out', definition: 'Learned something by trying it.' },
            { term: 'first, then, last', definition: 'Words that put things in the order they happened.' },
          ],
          materials: ['The completed ice cube worksheet from lesson 2', 'A willing listener, or a phone to record on'],
          prep: ['Line up a real audience. Reporting to a person who genuinely does not know is far more motivating than reporting to you.'],
          script: [],
          worksheet: { id: 'pk4-sci-u1-l5-ws', title: 'My Science Report', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Recounts an investigation in a sensible order.', 'Names both the prediction and the result.'],
            exitTicket: 'Ask the child to tell a family member about the ice cubes without your help. Listen for prediction and result both appearing.',
          },
          differentiation: {
            support: ['Prompt with the four words — predict, test, observe, explain — one at a time as a running order.'],
            extension: ['Ask the listener to ask one question back, and let the child answer it.'],
            language: ['Let the child report in their home language first, then in English. The structure transfers even when the words do not.'],
          },
          misconceptions: [
            {
              misconception: 'Reporting means saying the answer.',
              looksLike: 'The child says "the hand one won" and stops.',
              correction: 'Ask "how do you know?" and "what did you think before?" until the story has a beginning as well as an end.',
            },
          ],
          homeExtension: ['At dinner, let the child give a one-minute report on something they found out today.'],
        },
      ],
    },

    /* ============================================================ UNIT 2 */
    {
      id: 'pk4-sci-u2',
      gradeId: 'pk4',
      subjectId: 'science',
      sequence: 2,
      title: 'My Five Senses Are My Tools',
      bigIdea:
        'Eyes, ears, hands, nose and tongue are not just parts of your body — they are the instruments you find things out with, and each one tells you something the others cannot.',
      description:
        'Children have five senses long before they know they are using them. This unit makes each one deliberate: looking closely rather than glancing, listening rather than hearing, feeling rather than touching. The pay-off is that from here on you can say "use your senses" and the child knows what to actually do. Take the food safety rule seriously — nothing goes in a mouth unless you handed it over.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena — objects, materials, organisms and events.' },
        { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
        { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk.' },
      ],
      lessonTitles: [
        'Eyes Are for Looking Closely',
        'Ears Are for Listening Closely',
        'Hands Tell Us Things Our Eyes Cannot',
        'Smell and Taste: The Careful Senses',
        'All My Senses on One Apple',
      ],
      performanceTask:
        'The Five Senses Table: the child sets out one object and dictates a card for it with one thing each sense tells them about it, then presents the table to a family member.',
      lessons: [
        /* ---------------------------------------------------- L1 outline */
        {
          id: 'pk4-sci-u2-l1',
          unitId: 'pk4-sci-u2',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'Eyes Are for Looking Closely',
          essentialQuestion: 'What do I see when I really look, that I miss when I just glance?',
          summary:
            'Close looking with a magnifier. The child draws a leaf from memory, then looks at it through a lens and draws it again, and the two drawings make the difference between glancing and observing impossible to miss.',
          durationMin: 20,
          standards: [{ code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena using their senses.' }],
          objectives: ['I can look at one thing for a long time.', 'I can find a detail I did not see at first.'],
          vocabulary: [
            { term: 'magnifier', definition: 'A special glass that makes small things look bigger.' },
            { term: 'detail', definition: 'A tiny part you only see if you look hard.' },
          ],
          materials: ['A hand magnifier (a clear glass of water works if you have none)', 'Leaves, a feather, a coin, a piece of bread', 'Paper and crayons'],
          prep: ['Collect three or four things with fine detail. Bread and feathers are startling under a lens; plastic toys are not.'],
          script: [],
          worksheet: { id: 'pk4-sci-u2-l1-ws', title: 'Before I Looked, After I Looked', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names at least one detail visible only on close inspection.', 'Second drawing contains detail the first did not.'],
            exitTicket: 'Hand over the magnifier and a fingertip. Ask what they can see that they could not see before.',
          },
          differentiation: {
            support: ['Hold the magnifier steady for the child; focusing it is a fiddly motor task that can swallow the whole lesson.'],
            extension: ['Ask the child to draw the leaf big enough to fill the page. Scale forces attention to detail.'],
            language: ['Name the parts as you find them — vein, edge, stem — pointing each time.'],
          },
          misconceptions: [
            {
              misconception: 'A magnifier makes things actually get bigger.',
              looksLike: 'The child is surprised the leaf is small again when the lens comes away.',
              correction: 'Move the lens on and off slowly. "The leaf is not changing. The glass is helping your eyes."',
            },
          ],
          homeExtension: ['Look at three things through a magnifier before bed: skin, fabric, a crumb.'],
        },

        /* ---------------------------------------------------- L2 outline */
        {
          id: 'pk4-sci-u2-l2',
          unitId: 'pk4-sci-u2',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Ears Are for Listening Closely',
          essentialQuestion: 'What can I hear when everything else goes quiet?',
          summary:
            'A one-minute silent listening walk followed by matching shaker sounds. Children discover that hearing happens to you but listening is something you choose to do.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena using their senses.' },
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
          ],
          objectives: ['I can be quiet and name three sounds I hear.', 'I can match two containers that sound the same.'],
          vocabulary: [
            { term: 'listen', definition: 'To use your ears on purpose.' },
            { term: 'loud', definition: 'A big sound that is easy to hear.' },
            { term: 'quiet', definition: 'A small sound that is hard to hear.' },
          ],
          materials: ['Six opaque pots with lids', 'Rice, coins and cotton wool — two pots of each'],
          prep: ['Make the shaker pairs in advance and mark the bases so you know the answers without shaking.'],
          script: [],
          worksheet: { id: 'pk4-sci-u2-l2-ws', title: 'What I Heard', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names three distinct sounds after a silent minute.', 'Matches at least two shaker pairs by sound alone.'],
            exitTicket: 'Shake one pot behind your back and ask which of the three it matches.',
          },
          differentiation: {
            support: ['Use two pairs only, and make them wildly different — coins and cotton wool.'],
            extension: ['Add a fourth pair that is only slightly different from another, such as rice and lentils.'],
            language: ['Offer sound words as choices: rattly, swishy, clinky, soft.'],
          },
          misconceptions: [
            {
              misconception: 'Silence means there is nothing to hear.',
              looksLike: 'The child says "nothing" after the quiet minute.',
              correction: 'Wait longer. Thirty more seconds of genuine silence and the fridge, the traffic and their own breathing arrive.',
            },
          ],
          homeExtension: ['Lie down at bedtime and count five sounds in the house before going to sleep.'],
        },

        /* ---------------------------------------------------- L3 authored */
        {
          id: 'pk4-sci-u2-l3',
          unitId: 'pk4-sci-u2',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 3,
          status: 'authored',
          title: 'Hands Tell Us Things Our Eyes Cannot',
          essentialQuestion: 'Can I know what something is without looking at it?',
          summary:
            'The mystery bag. With their eyes shut the child reaches into a bag and identifies objects by touch alone, then explains which clue gave it away. Removing sight forces the vocabulary of texture, weight, shape and temperature into use, because pointing is no longer an option.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena, including materials, using their senses.' },
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena by observable properties.' },
            { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk, describing what they notice.' },
          ],
          objectives: [
            'I can find out what something is using only my hands.',
            'I can say how something feels: rough, smooth, soft, hard, cold, bumpy.',
            'I can say which clue told me what it was.',
          ],
          vocabulary: [
            { term: 'texture', definition: 'How something feels when you touch it.', example: 'The pine cone has a bumpy texture.' },
            { term: 'rough', definition: 'Scratchy and bumpy, not smooth.', example: 'Sandpaper is rough.' },
            { term: 'smooth', definition: 'Even all over with no bumps.', example: 'The pebble is smooth.' },
            { term: 'clue', definition: 'A little bit of information that helps you work something out.', example: 'The clue was that it felt cold.' },
          ],
          materials: [
            'A cloth bag, a pillowcase or a sock with a wide opening',
            'Six familiar objects with strongly different textures: a metal spoon, a cotton wool ball, a pine cone, a smooth pebble, a wooden block, a sponge',
            'A duplicate set of the same six objects, out of sight',
            'The printed worksheet',
            'A crayon',
          ],
          prep: [
            'Choose objects the child can already name confidently. This lesson is about touch, not about vocabulary you have not taught yet.',
            'Nothing sharp, nothing small enough to swallow, nothing precious. Hands go in blind.',
            'Load the bag out of sight so the child never sees the full set. Once they have seen it, they are remembering rather than feeling.',
            'Keep the duplicate set hidden until the reveal at the end.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Bag Knows Something You Do Not',
              minutes: 3,
              say: [
                'There is something in this bag and I am not going to tell you what it is.',
                'You are not allowed to look. Not even a peek. But you ARE allowed to put your hand in.',
                'Reach in. Do not pull it out. Just feel it. Feel all round it.',
                'Do not say what it is yet! First tell me how it FEELS.',
              ],
              do: [
                'Load one very distinctive object first — the pine cone is ideal.',
                'Hold the bag at the child’s chest height and keep the opening turned away from their face.',
                'Block the guess if it comes too fast. The describing is the lesson; the naming is just the prize.',
              ],
              studentDoes: ['Reaches into the bag and describes the object by touch before naming it.'],
              checks: [
                {
                  ask: 'How does it feel? Give me one word.',
                  lookFor: 'Bumpy, scratchy, pointy, hard — any texture word.',
                  ifStuck: 'Offer a pair to choose between: "Is it smooth, or is it bumpy?" Choosing comes before generating.',
                },
              ],
              tip: 'The urge to guess immediately is enormous. Say "hold the guess in your mouth" and make it a game of not saying it yet.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Words for the Way Things Feel',
              minutes: 4,
              say: [
                'Your hands just told you things your eyes never got to see. Hands are a tool for finding out.',
                'Here are the words we use. Feel this spoon. Smooth. Say it — smooth.',
                'Feel this pine cone. Rough and bumpy.',
                'Feel the cotton wool. Soft. Feel the wooden block. Hard.',
                'And feel the spoon again — is it warm or cold? Cold. Metal is nearly always cold. That is a really useful clue.',
              ],
              do: [
                'Hand over each object openly, eyes allowed, one at a time.',
                'Say the word as their fingers are actually on the object, not before and not after.',
                'Put the spoon against the back of their hand for the cold one. Fingertips are less sensitive to temperature than the back of the hand.',
              ],
              studentDoes: ['Handles each object with eyes open and repeats the texture word.'],
              checks: [
                {
                  ask: 'Which one of these is the roughest?',
                  lookFor: 'The pine cone, chosen by feeling rather than by looking.',
                  ifStuck: 'Have them close their eyes and compare just two: pine cone and pebble.',
                },
                { ask: 'Which one feels cold even though the room is warm?', lookFor: 'The metal spoon.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Guess It Blind',
              minutes: 6,
              say: [
                'Now the real game. Eyes shut — properly shut, no cheating fingers over the eyes.',
                'I put one thing in the bag. You reach in, feel it, and tell me two things about how it feels. THEN you guess.',
                'Two clues first, then the guess. Ready?',
                'You said soft and squishy, and you guessed the sponge. Let us see. You were right! Which clue told you?',
                'The squishy one. Good. Squishy is a sponge clue.',
              ],
              do: [
                'Run four or five rounds, swapping the object each time while their eyes are shut.',
                'Always ask for two descriptors before the guess. Every single time — the routine is what builds the habit.',
                'When a guess is wrong, do not correct it. Ask "feel it again — is it soft like a sponge?" and let them revise.',
              ],
              studentDoes: ['Identifies objects by touch, giving two texture clues before each guess.'],
              checks: [
                {
                  ask: 'Which clue told you what it was?',
                  lookFor: 'A specific property named — the bumps, the cold, the weight, the pointy bit.',
                  ifStuck: 'Ask what it was NOT: "How did you know it was not the cotton wool?"',
                },
                {
                  ask: 'Tell me two things before you guess.',
                  lookFor: 'Two different properties, not the same one twice.',
                  ifStuck: 'Prompt the missing category: "That is how it feels. Now — big or little?"',
                },
              ],
              tip: 'Blindness is the whole mechanic. If the child keeps peeking, sit them beside you facing away from the bag rather than making a fight of it.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 5,
              say: [
                'Here is the page. Look at these six things — these are the ones that were in the bag.',
                'First job: circle the ones that felt ROUGH. Take your time. You can touch the real ones again if you want.',
                'Second job: draw a line from each thing to the word that fits it best.',
                'Last job: draw the one that felt coldest.',
              ],
              do: [
                'Keep the real objects on the table. Going back to the object to check is exactly what you want, not cheating.',
                'Read every direction aloud twice.',
              ],
              studentDoes: ['Sorts the pictured objects by texture and identifies the coldest one.'],
              checks: [
                { ask: 'Why did you circle the pine cone?', lookFor: 'Because it feels bumpy or scratchy — a property, not "because I like it".' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'The Reveal',
              minutes: 2,
              say: [
                'Ready for the big reveal? Here is everything that was in the bag.',
                'You got five of them right with your eyes shut. Your hands did that. Not your eyes — your hands.',
                'So if I ask you tomorrow to find out about something, what could you use besides looking?',
              ],
              do: ['Tip the whole duplicate set out at once. The reveal is the reward for the whole lesson.'],
              studentDoes: ['Names touch as a way of finding out.'],
              checks: [{ ask: 'What can your hands tell you that your eyes cannot?', lookFor: 'How something feels, whether it is cold, whether it is heavy.' }],
            },
          ],
          worksheet: {
            id: 'pk4-sci-u2-l3-ws',
            title: 'What My Hands Told Me',
            style: 'line-art',
            prepNotes:
              'Keep the real objects on the table while the child works. This page is a record of a physical experience, not a memory test, and going back to touch the pine cone again is the correct behaviour.',
            sections: [
              {
                id: 's1',
                title: 'The Things in the Bag',
                directions: 'These are the six things that were hiding in the bag. Point to each one and tell me how it felt.',
                layout: 'row',
                images: [
                  {
                    id: 'img-bag-objects-6',
                    slot: 'The six mystery objects',
                    purpose: 'Gives the child a picture of the complete set so the sorting tasks below have a fixed reference, and lets you check they can connect a remembered feeling to a seen object.',
                    subject: 'a horizontal row of six separate simple everyday objects — a metal teaspoon, a round cotton wool ball, a pine cone, a smooth oval pebble, a square wooden block and a rectangular kitchen sponge',
                    count: 6,
                    composition: 'a single straight horizontal row, six objects evenly spaced with clear white gaps between each, all drawn at roughly the same overall size regardless of their real sizes, none touching or overlapping',
                    mustInclude: ['exactly six objects', 'the pine cone drawn with clearly visible individual scales so it reads as bumpy', 'the sponge drawn with visible holes so it reads as squishy'],
                    mustAvoid: ['a bag, table or background', 'objects overlapping', 'any label or text', 'a seventh object'],
                    aspect: '4:1',
                    altText: 'A spoon, cotton wool, a pine cone, a pebble, a wooden block and a sponge in a row',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Circle the Rough Ones',
                directions: 'Some of these feel rough and bumpy. Some feel smooth. Circle every one that felt ROUGH.',
                layout: 'grid',
                images: [
                  {
                    id: 'img-rough-pinecone',
                    slot: 'Sort item — pine cone',
                    purpose: 'The clearest rough example. Drawn with exaggerated scale texture so the picture itself carries the tactile information the child is being asked to recall.',
                    subject: 'a single pine cone shown from the side with clearly defined overlapping woody scales',
                    count: 1,
                    composition: 'one pine cone centred in the frame with generous white space around it, scales drawn as distinct separate shapes so the surface reads as strongly bumpy',
                    mustInclude: ['exactly one pine cone', 'individually visible scales across the whole surface'],
                    mustAvoid: ['pine needles, branches or a forest floor', 'a smooth simplified outline with no scale detail', 'more than one cone'],
                    aspect: '1:1',
                    altText: 'A single pine cone with clearly bumpy scales',
                  },
                  {
                    id: 'img-smooth-pebble',
                    slot: 'Sort item — pebble',
                    purpose: 'The clean contrast to the pine cone. An unmarked outline makes smoothness visible, which is otherwise a hard property to draw.',
                    subject: 'a single smooth oval river pebble',
                    count: 1,
                    composition: 'one pebble centred with generous white space, drawn as a plain even oval with an unbroken outline and no surface marks at all',
                    mustInclude: ['exactly one pebble', 'a completely unmarked smooth surface'],
                    mustAvoid: ['cracks, speckles, sparkles or texture marks', 'water, sand or background', 'more than one pebble'],
                    aspect: '1:1',
                    altText: 'A single smooth oval pebble',
                  },
                  {
                    id: 'img-soft-cotton',
                    slot: 'Sort item — cotton wool',
                    purpose: 'Soft belongs in neither the rough nor the smooth pile cleanly, which is the useful bit: it makes the child think about the category rather than sorting by habit.',
                    subject: 'a single round ball of cotton wool with a soft irregular fluffy edge',
                    count: 1,
                    composition: 'one cotton wool ball centred with generous white space, the outline drawn as a soft wavy irregular edge rather than a clean circle so it reads as fluffy',
                    mustInclude: ['exactly one cotton wool ball', 'a fluffy irregular outline'],
                    mustAvoid: ['a hard clean circular outline', 'a packet, jar or background', 'more than one ball'],
                    aspect: '1:1',
                    altText: 'A single fluffy cotton wool ball',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Which One Felt Coldest?',
                directions: 'One of these felt cold even though the room was warm. Draw a big circle round it.',
                layout: 'row',
                images: [
                  {
                    id: 'img-cold-choice-3',
                    slot: 'Three objects — one metal',
                    purpose: 'Isolates temperature as a property in its own right. Metal feeling cold in a warm room is genuinely surprising to a four-year-old and is worth its own item.',
                    subject: 'a horizontal row of three separate objects — a metal teaspoon, a square wooden block and a rectangular sponge',
                    count: 3,
                    composition: 'a single straight horizontal row of three objects, evenly spaced with wide white gaps, all at roughly equal overall size, the spoon drawn with a bright shiny highlight so the metal reads clearly',
                    mustInclude: ['exactly three objects', 'a visible shine or highlight on the metal spoon', 'visible wood grain on the block'],
                    mustAvoid: ['a fourth object', 'a table or background', 'objects touching', 'snowflakes, ice or any cold symbol'],
                    aspect: '3:1',
                    altText: 'A metal spoon, a wooden block and a sponge in a row',
                  },
                ],
              },
              {
                id: 's4',
                title: 'My Own Mystery Object',
                directions: 'Find something in this room and feel it with your eyes shut. Draw it in the box, then tell someone two words for how it felt.',
                layout: 'full',
                writingLines: 1,
                images: [
                  {
                    id: 'img-mystery-bag-hand',
                    slot: 'Mystery bag illustration',
                    purpose: 'A picture of the activity itself, which helps the child explain to another adult at home what they were doing without needing you to translate.',
                    subject: 'a soft cloth drawstring bag with one child’s arm reaching in through the opening up to the wrist, the contents completely hidden',
                    count: 1,
                    composition: 'the bag centred and upright, the opening gathered around the wrist so nothing inside is visible, plain empty background',
                    mustInclude: ['exactly one bag', 'the contents of the bag completely hidden', 'a warm deep-brown skin tone drawn simply and respectfully'],
                    mustAvoid: ['any object visible inside or poking out of the bag', 'a face or full body', 'patterns, logos or lettering on the bag', 'background scenery'],
                    aspect: '1:1',
                    altText: 'A hand reaching into a closed cloth mystery bag',
                  },
                ],
              },
            ],
            answerKey: [
              'Circle the rough ones: the pine cone. The pebble is smooth and the cotton wool is soft — accept a circle on cotton wool if the child explains it as "not smooth", which is a reasonable four-year-old reading.',
              'Coldest: the metal spoon.',
              'Own mystery object: any object, provided two texture words come with it.',
            ],
          },
          assessment: {
            successCriteria: [
              'Identifies at least four of six objects by touch alone.',
              'Gives two texture words before guessing, without being reminded every time.',
              'Names the specific clue that led to a correct identification.',
            ],
            exitTicket:
              'Put one new object in the bag — a hairbrush works well. Ask for two clues before the guess. Two clues is the bar, not the right answer.',
            rubric: [
              { level: 'emerging', descriptor: 'Guesses immediately without describing, and needs to look before committing.' },
              { level: 'developing', descriptor: 'Describes when prompted, using one or two words repeatedly such as "soft" for everything.' },
              { level: 'secure', descriptor: 'Volunteers several distinct properties — texture, weight, temperature, shape — and explains which one settled it.' },
            ],
          },
          differentiation: {
            support: [
              'Start with two objects only, as different as you can make them: cotton wool and a spoon.',
              'Let the child keep their eyes open but hold the object behind their back. Same skill, less anxiety.',
              'Give the texture word as a choice of two every single round rather than asking an open question.',
            ],
            extension: [
              'Add two objects that feel similar — a wooden block and a plastic block — and see whether weight or temperature separates them.',
              'Reverse the roles: the child loads the bag and you have to guess, describing aloud as you go.',
              'Ask the child to sort all six objects into rough and smooth piles with their eyes shut throughout.',
            ],
            language: [
              'Texture words are highly concrete and transfer easily. Teach the pair rough/smooth first and add soft/hard only once that pair is secure.',
              'Use the frame "It feels ___ and it feels ___. I think it is a ___." every round until it is automatic.',
            ],
          },
          misconceptions: [
            {
              misconception: 'You can only really know what something is by looking at it.',
              looksLike: 'The child insists on peeking before every guess, or says "I cannot tell" without exploring with their fingers.',
              correction: 'Slow the touching right down. Guide their hand round the whole object — the top, the edges, the underneath — and narrate what their fingers are meeting.',
            },
            {
              misconception: 'Everything soft is the same and everything hard is the same.',
              looksLike: 'Cotton wool and the sponge both get called "soft" and the child cannot separate them.',
              correction: 'Squeeze both in turn and name the difference: the sponge springs back, the cotton wool stays squashed. Add "squishy" and "fluffy" as separate words.',
            },
            {
              misconception: 'Metal is cold because it has been in the fridge.',
              looksLike: 'The child looks for a reason outside the object — "somebody put it in the freezer".',
              correction: 'Leave the spoon on the warm table for ten minutes in plain sight and feel it again. Still cold. It is what metal does.',
            },
          ],
          homeExtension: [
            'Sock-drawer mystery bag: put three things in a sock at bath time and take turns guessing.',
            'On a walk, close your eyes and feel three different tree trunks. Which is roughest?',
            'While putting shopping away, ask the child to find the coldest thing in the bag by touch.',
          ],
          teacherNotes:
            'Do not let this become a naming quiz. The object names are already known; what is new is the deliberate use of one sense while another is switched off, and the language for what that sense reports. If the child gets every object right in ninety seconds, the lesson is not finished — go back and make them justify each one.',
        },

        /* ---------------------------------------------------- L4 outline */
        {
          id: 'pk4-sci-u2-l4',
          unitId: 'pk4-sci-u2',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Smell and Taste: The Careful Senses',
          essentialQuestion: 'What can my nose tell me before my mouth finds out?',
          summary:
            'Smell jars and a safe taste test with foods you have provided. The safety rule is taught as part of the science: scientists never taste an unknown thing, and neither do we.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena using their senses.' },
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
          ],
          objectives: ['I can name a smell without looking.', 'I know I only taste things a grown-up has given me.'],
          vocabulary: [
            { term: 'smell', definition: 'What your nose tells you about something.' },
            { term: 'sour', definition: 'A sharp taste that makes your face scrunch, like lemon.' },
            { term: 'sweet', definition: 'A sugary taste, like honey.' },
          ],
          materials: ['Three covered pots holding cinnamon, orange peel and mint', 'Small tastes of apple, lemon and cracker', 'Water to rinse'],
          prep: ['Check allergies before you plan a single taste. If in any doubt, run the smell half only.'],
          script: [],
          worksheet: { id: 'pk4-sci-u2-l4-ws', title: 'My Nose Knows', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Identifies at least one smell with eyes closed.', 'States the rule about not tasting unknown things.'],
            exitTicket: 'Hold a covered pot under their nose and ask what food it makes them think of.',
          },
          differentiation: {
            support: ['Show the three possible answers as pictures first so smelling is a matching task, not a recall task.'],
            extension: ['Hold the nose and taste an apple slice. Does it still taste of apple? A memorable demonstration of the two senses working together.'],
            language: ['Taste words are strongly cultural — invite the child’s own food words and use them.'],
          },
          misconceptions: [
            {
              misconception: 'If it smells nice it is safe to eat.',
              looksLike: 'The child reaches for anything sweet-smelling, including soap or a candle.',
              correction: 'State the rule flatly and repeat it every session: we only taste what a grown-up hands us. Smelling nice is not the same as being food.',
            },
          ],
          homeExtension: ['Smell the ingredients as you cook and name each one before it goes in the pan.'],
        },

        /* ---------------------------------------------------- L5 outline */
        {
          id: 'pk4-sci-u2-l5',
          unitId: 'pk4-sci-u2',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'All My Senses on One Apple',
          essentialQuestion: 'What do all five senses together tell me about one thing?',
          summary:
            'The unit consolidation. One apple is investigated with every sense in turn — looked at, listened to as it is bitten, felt, smelled and finally tasted — and the child dictates one observation per sense.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena using all of their senses.' },
            { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk.' },
          ],
          objectives: ['I can use all five senses on one object.', 'I can say one thing each sense told me.'],
          vocabulary: [
            { term: 'senses', definition: 'The five ways we find things out: seeing, hearing, touching, smelling and tasting.' },
            { term: 'crunchy', definition: 'Makes a loud snapping noise when you bite it.' },
          ],
          materials: ['One apple', 'A knife for adult use only', 'Paper and crayons'],
          prep: ['Do the bite yourself first with your eyes shut so you know what the sound observation is going to be.'],
          script: [],
          worksheet: { id: 'pk4-sci-u2-l5-ws', title: 'One Apple, Five Senses', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Gives one observation for each of the five senses.', 'Names which sense produced each observation.'],
            exitTicket: 'Hold up a banana. Ask which sense will be most useful for finding out whether it is ripe.',
          },
          differentiation: {
            support: ['Do one sense per day across a week rather than all five in one sitting.'],
            extension: ['Repeat with an onion and compare which senses were most useful for each food.'],
            language: ['Touch the relevant body part as each sense is named. The gesture anchors the word.'],
          },
          misconceptions: [
            {
              misconception: 'Taste is the only sense that matters for food.',
              looksLike: 'The child wants to skip straight to eating.',
              correction: 'Hold the apple back. Make the eating the reward that comes after the other four senses have reported in.',
            },
          ],
          homeExtension: ['Play "five senses" with one item from every meal for a week.'],
        },
      ],
    },

    /* ============================================================ UNIT 3 */
    {
      id: 'pk4-sci-u3',
      gradeId: 'pk4',
      subjectId: 'science',
      sequence: 3,
      title: 'Living Things and What They Need',
      bigIdea:
        'Living things eat, drink, grow and need looking after. A rock does none of those, and a teddy bear only pretends to.',
      description:
        'Four-year-olds apply "alive" generously — to the wind, to a moving car, to a favourite toy. This unit builds the test that sorts it out: does it grow, does it need food and water, will it die if nobody looks after it? Children then take real responsibility for one living thing, which is where the idea stops being a definition and starts being a duty.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena, including living organisms.' },
        { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
        { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
      ],
      lessonTitles: [
        'Alive, Not Alive, Never Was Alive',
        'What Every Living Thing Needs',
        'Looking After Something That Is Alive',
        'Animal Homes and Why They Are There',
        'Same Kind, Different Kind',
      ],
      performanceTask:
        'The Keeper: the child takes charge of one living thing for two weeks — a bean plant, a snail in a jar with airholes, or the family pet’s water bowl — and reports each day on what it needed and what they gave it.',
      lessons: [
        {
          id: 'pk4-sci-u3-l1',
          unitId: 'pk4-sci-u3',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'Alive, Not Alive, Never Was Alive',
          essentialQuestion: 'How can I tell if something is alive?',
          summary:
            'A three-way sort using real objects: a potted plant, a stone, a wooden spoon, a woodlouse in a jar, a teddy bear. The third pile — things that were once alive or came from living things — is the one that produces the real thinking.',
          durationMin: 20,
          standards: [{ code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena, including living and non-living things.' }],
          objectives: ['I can sort things into alive and not alive.', 'I can say why I put something in the alive pile.'],
          vocabulary: [
            { term: 'alive', definition: 'It grows, it needs food and water, and it can die.' },
            { term: 'living thing', definition: 'Anything that is alive, like a plant, an animal or you.' },
          ],
          materials: ['A potted plant', 'A stone', 'A wooden spoon', 'A teddy bear', 'A woodlouse or worm in a ventilated jar', 'Two hoops or two sheets of paper to sort onto'],
          prep: ['Include the teddy bear deliberately. The argument about the teddy is the most useful two minutes of the lesson.'],
          script: [],
          worksheet: { id: 'pk4-sci-u3-l1-ws', title: 'Alive or Not Alive?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Sorts six familiar objects correctly.', 'Justifies at least one placement using growing, eating or drinking.'],
            exitTicket: 'Hold up a cut flower in a vase and ask whether it is alive. Any reasoned answer counts; the reasoning is the assessment.',
          },
          differentiation: {
            support: ['Use two piles only and start with obvious cases: a plant and a spoon.'],
            extension: ['Add hard cases — a seed, an egg, a cut flower — and let the child argue about them.'],
            language: ['Use the frame "It is alive because it ___."'],
          },
          misconceptions: [
            {
              misconception: 'Anything that moves is alive.',
              looksLike: 'The child says a car, a river or the wind is alive.',
              correction: 'Apply the food and water test out loud. "Does a car eat? Does it drink? Does it grow bigger?" Moving is not the test.',
            },
          ],
          homeExtension: ['On a walk, point at things and ask "alive or not alive?" — and take the tricky ones seriously.'],
        },
        {
          id: 'pk4-sci-u3-l2',
          unitId: 'pk4-sci-u3',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'What Every Living Thing Needs',
          essentialQuestion: 'What do plants, animals and people all need to stay alive?',
          summary:
            'Builds the shared list — food or light, water, air, somewhere to live — by comparing what a person needs with what a plant needs and finding the overlap.',
          durationMin: 20,
          standards: [{ code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes what living organisms need to survive.' }],
          objectives: ['I can name three things a living thing needs.', 'I can say what a plant needs that I do not.'],
          vocabulary: [
            { term: 'need', definition: 'Something you cannot live without.' },
            { term: 'water', definition: 'What everything alive has to drink or soak up.' },
            { term: 'shelter', definition: 'A safe place to live.' },
          ],
          materials: ['Two identical potted plants', 'Pictures of a person, a dog and a tree', 'A dark cupboard for the light experiment'],
          prep: ['Set up the two plants today — one watered, one not — so the result exists in a week.'],
          script: [],
          worksheet: { id: 'pk4-sci-u3-l2-ws', title: 'What Do We Need?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names food, water and air or light as needs.', 'Distinguishes a need from a nice-to-have.'],
            exitTicket: 'Ask what would happen to the plant on the windowsill if nobody watered it all month.',
          },
          differentiation: {
            support: ['Focus on water alone. One need understood deeply beats four listed.'],
            extension: ['Start the two-plant experiment properly and predict the outcome in writing.'],
            language: ['Contrast "need" and "want" early — it also sets up the social studies unit on the same words.'],
          },
          misconceptions: [
            {
              misconception: 'Plants eat food from the soil the way we eat dinner.',
              looksLike: 'The child says the plant eats mud.',
              correction: 'Keep it honest and simple at this age: plants need light, water and air to make their own food. The detail comes later.',
            },
          ],
          homeExtension: ['Put the child in charge of watering one houseplant, with a jug they can lift themselves.'],
        },
        {
          id: 'pk4-sci-u3-l3',
          unitId: 'pk4-sci-u3',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Looking After Something That Is Alive',
          essentialQuestion: 'What is my job if I am in charge of a living thing?',
          summary:
            'Care as a practical routine. The child takes on daily responsibility for a plant or a small creature and learns that living things need something every day, not once.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations, including observing a living thing over time.' },
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
          ],
          objectives: ['I can do my caring job every day.', 'I can notice when a living thing needs something.'],
          vocabulary: [
            { term: 'care for', definition: 'To give a living thing what it needs, every day.' },
            { term: 'gentle', definition: 'Soft and careful, so nothing gets hurt.' },
          ],
          materials: ['A hardy plant or a jar with a snail and airholes', 'A small watering jug', 'A tick chart on the fridge'],
          prep: ['Choose something genuinely hard to kill. A dead first pet is a heavy lesson for a four-year-old.'],
          script: [],
          worksheet: { id: 'pk4-sci-u3-l3-ws', title: 'My Caring Job', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Completes the daily care task on at least five days.', 'Describes one change in the living thing over the fortnight.'],
            exitTicket: 'Ask what the plant would say if it could talk today.',
          },
          differentiation: {
            support: ['Attach the job to an existing routine — right after breakfast, every day, same jug.'],
            extension: ['Keep a drawing diary of the plant once a week and compare the four drawings at the end.'],
            language: ['Narrate the care aloud in a fixed sequence so the words attach to the actions.'],
          },
          misconceptions: [
            {
              misconception: 'More water is more caring.',
              looksLike: 'The child drowns the plant with daily flooding.',
              correction: 'Teach the finger test — poke the soil, water only if it is dry. Caring means checking, not pouring.',
            },
          ],
          homeExtension: ['Give the child one genuine daily job involving a living thing and do not do it for them.'],
        },
        {
          id: 'pk4-sci-u3-l4',
          unitId: 'pk4-sci-u3',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Animal Homes and Why They Are There',
          essentialQuestion: 'Where do animals live, and what makes it a good home?',
          summary:
            'Matching animals to habitats and reasoning about why. A fish home has to have water in it; a worm home has to be dark and damp. The child then builds a home for a woodlouse and tests whether it stays.',
          durationMin: 25,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes organisms and the places they live.' },
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
          ],
          objectives: ['I can match an animal to the place it lives.', 'I can say one thing that makes it a good home for that animal.'],
          vocabulary: [
            { term: 'home', definition: 'The place an animal lives and is safe.' },
            { term: 'damp', definition: 'A bit wet, but not soaking.' },
          ],
          materials: ['A shallow tray', 'Damp soil, dry sand, a leaf, a stone', 'Two or three woodlice, returned outside afterwards'],
          prep: ['Set up a choice chamber: half the tray damp and dark, half dry and bright. Then let the woodlice vote with their feet.'],
          script: [],
          worksheet: { id: 'pk4-sci-u3-l4-ws', title: 'Where Do They Live?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Matches four animals to their homes.', 'Predicts which side of the tray the woodlice will choose and says why.'],
            exitTicket: 'Ask why a fish could not live in the woodlouse tray.',
          },
          differentiation: {
            support: ['Use three very familiar animals: a fish, a bird and a dog.'],
            extension: ['Change one variable — make both sides damp but only one dark — and see what the woodlice do then.'],
            language: ['Build a picture-and-word card for each habitat and lay them out as a matching game.'],
          },
          misconceptions: [
            {
              misconception: 'Animals live where they do because they like it best, in the way a child likes a bedroom.',
              looksLike: 'The child says the worm lives underground because it is cosy.',
              correction: 'Redirect to needs: the worm needs damp, or it dries out. Homes are about staying alive, not about taste.',
            },
          ],
          homeExtension: ['Lift a stone or a log in the garden and see who is living underneath. Put it back exactly as you found it.'],
        },
        {
          id: 'pk4-sci-u3-l5',
          unitId: 'pk4-sci-u3',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Same Kind, Different Kind',
          essentialQuestion: 'How are two dogs the same, and how are they different?',
          summary:
            'Variation within a group. All dogs have four legs and fur, but no two are identical — and the same is true of leaves from one tree, and of the children in one family.',
          durationMin: 20,
          standards: [{ code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena, noticing similarities and differences.' }],
          objectives: ['I can say one way two animals are the same.', 'I can say one way they are different.'],
          vocabulary: [
            { term: 'alike', definition: 'The same in some way.' },
            { term: 'different', definition: 'Not the same.' },
          ],
          materials: ['A handful of leaves from a single tree', 'Photographs of several dog breeds'],
          prep: ['Collect at least ten leaves from one tree. The point only lands when the sample is big enough to show real variety.'],
          script: [],
          worksheet: { id: 'pk4-sci-u3-l5-ws', title: 'Alike and Different', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['States one similarity and one difference for a pair of things.', 'Recognises that leaves from one tree are all leaves but none identical.'],
            exitTicket: 'Hold up two leaves from the same tree and ask for one same and one different.',
          },
          differentiation: {
            support: ['Compare two things at a time, never more.'],
            extension: ['Order the leaves from smallest to largest and talk about why they vary.'],
            language: ['Use the frames "Both of them ___" and "But this one ___".'],
          },
          misconceptions: [
            {
              misconception: 'If two things look different they must be different kinds of thing.',
              looksLike: 'The child says a chihuahua and a great dane cannot both be dogs.',
              correction: 'Go back to the shared features — four legs, fur, tail, barks. Same kind, different size.',
            },
          ],
          homeExtension: ['Compare everyone’s hands at dinner: what is the same about all of them, and what is different?'],
        },
      ],
    },

    /* ============================================================ UNIT 4 */
    {
      id: 'pk4-sci-u4',
      gradeId: 'pk4',
      subjectId: 'science',
      sequence: 4,
      title: 'Life Cycles: Seeds, Sprouts and Butterflies',
      bigIdea:
        'Living things change as they grow, and they change in the same order every time — a caterpillar never turns into a seed and a bean never hatches from an egg.',
      description:
        'Two life cycles run side by side: a bean from seed to plant, which the child grows themselves, and a butterfly from egg to adult, which they meet through observation and story. The big cognitive move is sequence — that the stages come in a fixed order — and the second is that the caterpillar and the butterfly are the same animal, which four-year-olds find genuinely hard to believe.',
      weeks: 5,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena, including living organisms and how they change.' },
        { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments, including observing change over time.' },
        { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
      ],
      lessonTitles: [
        'What Is Inside a Seed?',
        'Planting and Waiting',
        'The Parts of a Plant and What They Do',
        'The Caterpillar That Changed',
        'Life Cycles Go Round and Round',
      ],
      performanceTask:
        'The Growing Diary: the child keeps a four-page drawing diary of their own bean from planting to first leaves, then puts the four pages in order and tells the story to somebody who has not seen it.',
      lessons: [
        /* ---------------------------------------------------- L1 authored */
        {
          id: 'pk4-sci-u4-l1',
          unitId: 'pk4-sci-u4',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'What Is Inside a Seed?',
          essentialQuestion: 'How can a whole plant come out of something this small?',
          summary:
            'A soaked broad bean splits neatly into two halves and reveals a tiny complete plant curled up inside, with a root and two leaves already formed. Nothing else in the Pre-K year produces quite this reaction. The lesson uses the surprise to establish that a seed is not a magic pellet but a packed lunch with a baby plant in it.',
          durationMin: 25,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena, including the parts of living organisms.' },
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
            { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk about what they observe.' },
          ],
          objectives: [
            'I can predict what is inside a seed before we open it.',
            'I can find the baby plant inside a soaked bean.',
            'I can point to the part that will become the root and the part that will become the leaves.',
          ],
          vocabulary: [
            { term: 'seed', definition: 'The little package a new plant grows out of.', example: 'An apple has seeds inside it.' },
            { term: 'sprout', definition: 'When a seed first starts to grow and pushes out.', example: 'The bean sprouted after four days.' },
            { term: 'root', definition: 'The part of a plant that grows down into the soil and drinks the water.', example: 'The root goes down.' },
            { term: 'shoot', definition: 'The part of a plant that grows up towards the light.', example: 'The shoot goes up.' },
          ],
          materials: [
            'Six broad beans or runner beans soaked in water overnight',
            'Three dry beans of the same kind, not soaked, for comparison',
            'A magnifier',
            'A saucer',
            'A few other seeds to look at: a sunflower seed, an apple pip, a pumpkin seed',
            'The printed worksheet',
            'A crayon',
          ],
          prep: [
            'Soak the beans for a full twelve hours. Under-soaked beans will not split cleanly and the lesson falls flat — this is the one preparation step that genuinely cannot be skipped.',
            'Split one bean yourself the night before so you know exactly where the little plant sits and can find it fast in front of the child.',
            'Keep three beans dry. The comparison between dry and soaked is half the point.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Something Is Hiding in Here',
              minutes: 4,
              say: [
                'Look at this. It is a bean. It is smaller than your thumb.',
                'Now look at this picture — that is a bean plant. It is taller than you are.',
                'Here is my question. How does something that big come out of something this small? What is inside this bean?',
                'Have a guess. What do you think we will find if we open it up?',
              ],
              do: [
                'Hold the dry bean and the picture of the full plant side by side. The size gap is the hook.',
                'Take every guess seriously, including "nothing" and "mud".',
              ],
              studentDoes: ['Handles the dry bean and offers a prediction about the inside.'],
              checks: [
                {
                  ask: 'What do you predict is inside?',
                  lookFor: 'Any committed guess. Common ones: nothing, powder, a tiny plant, seeds.',
                  ifStuck: 'Offer three options to choose between: "Nothing at all? Or dust? Or a tiny plant?"',
                },
              ],
              tip: 'Write the prediction down in front of the child, or draw it. Making the guess permanent before the reveal is what makes the reveal land.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Dry Bean, Wet Bean',
              minutes: 5,
              say: [
                'Feel this dry one. Hard as a stone, isn’t it? Try to squeeze it. It will not squash.',
                'Now feel this one. It has been sitting in water all night. What is different?',
                'Fatter. Softer. Wrinkly skin. It drank the water all night long and it got fat.',
                'That is the first thing a seed does. Before anything else happens, it drinks.',
                'And now that it is soft, we can open it. Watch.',
              ],
              do: [
                'Give the child both beans, one in each hand, and let them squeeze both.',
                'Peel the loose skin off the soaked bean slowly and let the child pull the last of it.',
                'Do not open the two halves yet. Build it.',
              ],
              studentDoes: ['Compares the dry and soaked beans by squeezing, and describes two differences.'],
              checks: [
                {
                  ask: 'What is different about the wet one?',
                  lookFor: 'Softer, fatter, bigger, the skin comes off.',
                  ifStuck: 'Ask them to squeeze each one in turn while you count to three. The difference is unmistakable by feel.',
                },
                { ask: 'Where did the water go?', lookFor: 'Into the bean. It drank it.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'The Reveal',
              minutes: 7,
              say: [
                'Now. Push your thumbnails in at the seam and open it like a little book.',
                'Look inside. Look really carefully. Do you see it?',
                'There. That tiny curled up thing stuck to one half. That is a baby plant. It was in there the whole time.',
                'Look through the magnifier. Can you see the pointy bit? That is going to be the root — that grows DOWN into the soil.',
                'And these two tiny leaf shapes here — those grow UP into the light.',
                'And all the rest, these two big fat halves? That is its lunch. The baby plant eats that until it can make its own food.',
              ],
              do: [
                'Let the child open their own bean, even if it takes three tries and two ruined beans. That is what the spare beans are for.',
                'Point with a cocktail stick rather than a finger — a fingertip covers the entire embryo.',
                'Give them a second and third bean to open once they know what they are looking for.',
              ],
              studentDoes: ['Splits a soaked bean, locates the embryo, and points out the root and the leaves.'],
              checks: [
                {
                  ask: 'Show me the part that will grow down into the ground.',
                  lookFor: 'A point at the radicle — the little pointed tip.',
                  ifStuck: 'Point at it yourself with the stick and then ask them to find it on a fresh bean.',
                },
                {
                  ask: 'What are the two big fat halves for?',
                  lookFor: 'Food for the baby plant. Lunch, dinner, packed lunch — all fine.',
                  ifStuck: 'Ask "if the plant is underground in the dark, where does it get food from? There is no sunshine down there yet."',
                },
              ],
              tip: 'Some beans split badly and the embryo tears. Have plenty. A child who never gets a clean look has not had the lesson.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 7,
              say: [
                'Here is the page. The first picture shows the inside of the bean, big.',
                'Colour the root — the part that goes down — in brown. Colour the little leaves in green.',
                'Next bit: here are four pictures of a bean growing, all mixed up. Number them 1, 2, 3, 4 in the right order. Which happens first?',
                'Last bit: these are five different seeds. Circle the biggest one and put a cross on the smallest.',
              ],
              do: [
                'Keep an opened bean beside the page so the child can compare the drawing to the real thing.',
                'For the ordering task, ask "which one comes first?" rather than "put them in order" — one decision at a time.',
              ],
              studentDoes: ['Labels the seed parts by colour, sequences the four growth stages, and compares seed sizes.'],
              checks: [
                { ask: 'How did you know that one was first?', lookFor: 'Because nothing has come out of it yet / because it is still just a seed.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Back to the Question',
              minutes: 2,
              say: [
                'Right at the start I asked how something as big as a bean plant comes out of something this small.',
                'Now you know. It does not come out of nowhere. The plant was already in there, curled up, waiting.',
                'What does it need to wake up and start growing?',
                'Water. Tomorrow we will give it some soil and see if we are right.',
              ],
              do: ['Return to the original prediction and compare it with what was actually found.'],
              studentDoes: ['Answers the essential question in their own words.'],
              checks: [
                {
                  ask: 'Was your prediction right?',
                  lookFor: 'An honest yes or no. Both are equally good.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'pk4-sci-u4-l1-ws',
            title: 'Inside a Seed',
            style: 'diagram',
            prepNotes:
              'Keep one opened bean on the table next to the page. The diagram is a magnified, tidied-up version of the real thing, and a four-year-old will not connect the two unless both are in front of them at once. Brown and green crayons are worth digging out specifically for this.',
            sections: [
              {
                id: 's1',
                title: 'The Baby Plant Inside',
                directions: 'This is what we saw inside our bean, drawn really big. Colour the root brown. Colour the two little leaves green.',
                layout: 'full',
                images: [
                  {
                    id: 'img-bean-open-embryo',
                    slot: 'Opened bean with embryo',
                    purpose: 'The centrepiece of the lesson made permanent. The real embryo is a few millimetres long and easily lost; a clean magnified drawing lets the child colour and name the parts they only glimpsed.',
                    subject: 'a magnified cross-section of a soaked broad bean split open into its two fat halves lying side by side, with the small curled plant embryo attached to the inner face of one half, showing one pointed downward root tip and two small folded leaf shapes',
                    composition: 'the two bean halves opened flat like a book, filling most of the frame, the embryo drawn large and clearly separated from the surrounding seed flesh with a distinct outline, the pointed root tip and the two leaf shapes each clearly distinguishable from one another',
                    mustInclude: [
                      'exactly two bean halves',
                      'exactly one embryo, attached to one half only',
                      'one clearly pointed root tip and exactly two small leaf shapes on the embryo',
                      'clean outlines with no fill, so the child can colour inside them',
                    ],
                    mustAvoid: ['labels, arrows, numbers or any text', 'soil, a pot or a background', 'the embryo drawn as an already-grown plant with a stem and open leaves', 'shading or colour fill inside the outlines'],
                    aspect: '4:3',
                    altText: 'A bean split into two halves with the tiny curled baby plant inside',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Put Them in Order',
                directions: 'These four pictures are jumbled up. Which one happens first? Write 1 in that box. Then 2, then 3, then 4.',
                layout: 'grid',
                items: ['Box A: ___', 'Box B: ___', 'Box C: ___', 'Box D: ___'],
                images: [
                  {
                    id: 'img-bean-stages-4',
                    slot: 'Four growth stages, out of order',
                    purpose: 'Sequencing is the core cognitive skill of the whole unit. Presenting the stages out of order forces the child to reason from the plant itself rather than reading left to right.',
                    subject: 'four separate panels in a two by two grid showing four stages of a bean growing, deliberately out of sequence — a plain whole bean seed, a young plant with a straight stem and two open leaves, a seed with a single short white root emerging downward, and a seed with a root below and a bent shoot pushing up',
                    count: 4,
                    composition: 'a two by two grid of four equal square panels each with a clear border and generous white space, one growth stage per panel, a horizontal soil line drawn across the lower part of the three panels that show growth so up and down are unambiguous',
                    mustInclude: [
                      'exactly four panels, one stage in each',
                      'the stages deliberately not in chronological order',
                      'a visible soil line in the three panels showing root growth',
                      'roots drawn growing downward and shoots drawn growing upward in every panel',
                    ],
                    mustAvoid: ['numbers, letters, arrows or any text in or between the panels', 'the panels arranged in correct chronological order', 'flowers or beans on the young plant', 'a pot or decorative background'],
                    aspect: '1:1',
                    altText: 'Four jumbled panels showing a bean seed, a rooting seed, a sprouting seed and a young plant',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Seeds Come in All Sizes',
                directions: 'All of these are seeds. Circle the biggest one. Put a cross on the smallest one.',
                layout: 'row',
                images: [
                  {
                    id: 'img-seed-sizes-5',
                    slot: 'Five seeds at true relative size',
                    purpose: 'Corrects the assumption that a big plant must come from a big seed. Seeing a poppy seed beside a broad bean makes the point without any explaining.',
                    subject: 'a horizontal row of five different seeds shown at their true relative sizes — a large flat broad bean, an oval pumpkin seed, a striped sunflower seed, a small teardrop apple pip and a tiny round poppy seed',
                    count: 5,
                    composition: 'a single straight horizontal row on a common baseline, five seeds evenly spaced with clear white gaps, sizes strictly proportional to one another so the broad bean is dramatically larger than the poppy seed, none touching',
                    mustInclude: ['exactly five seeds', 'true relative sizes with a very obvious difference between the largest and the smallest', 'each seed shaped distinctly enough to tell apart'],
                    mustAvoid: ['all seeds drawn at the same size', 'labels, names or text', 'a packet, hand or background', 'seeds overlapping'],
                    aspect: '4:1',
                    altText: 'Five seeds of very different sizes in a row',
                  },
                ],
              },
              {
                id: 's4',
                title: 'My Prediction',
                directions: 'Before we opened it, what did you think was inside the bean? Draw your guess in this box. It does not matter if you were wrong.',
                layout: 'full',
                writingLines: 1,
                images: [
                  {
                    id: 'img-prediction-box',
                    slot: 'Blank prediction box',
                    purpose: 'Keeps the prediction habit from unit 1 running inside a content lesson, and gives the child a place to record a guess they can look back at without shame.',
                    subject: 'a single empty rectangular frame with a plain thin border and a completely blank interior',
                    composition: 'one rectangle centred on the section, even border of uniform thickness, entirely blank inside with no lines or marks',
                    mustInclude: ['a completely empty interior', 'one single frame'],
                    mustAvoid: ['ruled lines inside the frame', 'decoration on the border', 'any text or label', 'a second frame'],
                    aspect: '3:2',
                    altText: 'An empty box for drawing a prediction',
                  },
                ],
              },
            ],
            answerKey: [
              'Seed diagram: the pointed tip coloured brown is the root; the two small folded shapes coloured green are the first leaves. The two fat halves are the food store and stay uncoloured.',
              'Order: whole seed first, then the seed with a root going down, then the seed with a root and a shoot, then the young plant with open leaves.',
              'Seed sizes: circle the broad bean, cross the poppy seed.',
              'Prediction: any drawing. Do not mark this for accuracy — mark it for honesty.',
            ],
          },
          assessment: {
            successCriteria: [
              'Finds the embryo inside a soaked bean without being shown where it is a second time.',
              'Points out the root and the leaves and says which way each will grow.',
              'Puts four growth stages in the correct order.',
            ],
            exitTicket:
              'Hand the child a fresh soaked bean and say, "Show me the baby plant." Finding it unaided is the whole assessment.',
            rubric: [
              { level: 'emerging', descriptor: 'Opens the bean and enjoys it, but cannot locate the embryo without it being pointed out each time.' },
              { level: 'developing', descriptor: 'Finds the embryo and names it as a baby plant, but muddles which part goes up and which goes down.' },
              { level: 'secure', descriptor: 'Finds the embryo unaided, distinguishes root from shoot, and explains that the two halves are stored food.' },
            ],
          },
          differentiation: {
            support: [
              'Split the beans yourself and hand over halves that are already open. The finding matters far more than the splitting.',
              'Use only the dry versus soaked comparison if the embryo is too small for the child to see. That alone is a full lesson.',
              'Trace the child’s finger down the root and up over the leaves so the directions are felt as well as seen.',
            ],
            extension: [
              'Set up a jar germinator: a damp paper towel against the glass with beans wedged between, so the root and shoot can be watched daily.',
              'Open a sunflower seed and a pumpkin seed too, and compare whether the same parts are in there.',
              'Ask what would happen if you planted the bean upside down. Then actually do it and watch the root turn.',
            ],
            language: [
              'Root and shoot rhyme, which is useful — pair each with a hand gesture, down for root and up for shoot, and use them constantly.',
              'Many children know a food word for bean in their home language before the science word. Use both and treat them as equal.',
            ],
          },
          misconceptions: [
            {
              misconception: 'A seed is just a hard lump, and the plant is somehow made out of soil.',
              looksLike: 'Asked what is inside, the child says "nothing" or "mud", and after opening it still describes the plant as coming from the ground.',
              correction: 'The opened bean settles it directly. Come back to it: "Was there a plant in there, or not?" Then germinate one on a wet paper towel with no soil at all.',
            },
            {
              misconception: 'The seed needs soil more than it needs water.',
              looksLike: 'The child insists a bean cannot sprout on a damp paper towel.',
              correction: 'Run both side by side — one bean in soil, one on a wet towel. Both sprout. Water is the trigger; soil comes into its own later.',
            },
            {
              misconception: 'Bigger seeds grow into bigger plants.',
              looksLike: 'The child predicts the poppy seed will grow into something tiny.',
              correction: 'Show a photograph of a poppy beside a bean plant. The seed size and the plant size are not related in the way it feels like they should be.',
            },
          ],
          homeExtension: [
            'Look for seeds inside the food you eat this week — apple, pepper, tomato, avocado — and line up the ones you find on the windowsill.',
            'Soak three dried beans from the cupboard overnight and open them at breakfast.',
            'Save an apple pip, plant it in a pot, and be honest that it might take years. Waiting is part of the science.',
          ],
          teacherNotes:
            'The soaking is not optional and twelve hours is not negotiable — a dry bean will shatter and there will be nothing to see. Beyond that, this is the easiest lesson in the year to teach well, because the material does the work. Your job is mostly to slow the child down at the moment of opening so they actually look before they lose interest.',
        },

        {
          id: 'pk4-sci-u4-l2',
          unitId: 'pk4-sci-u4',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Planting and Waiting',
          essentialQuestion: 'What does my seed need from me?',
          summary:
            'The child plants their own bean, decides what it needs, and starts a drawing diary. Waiting is taught explicitly as part of the science — most of growing happens when nobody is watching.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments over time.' },
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
          ],
          objectives: ['I can plant a seed the right way up in soil.', 'I can say what my seed needs every day.'],
          vocabulary: [
            { term: 'plant', definition: 'To put a seed in soil so it can grow.' },
            { term: 'soil', definition: 'The earth that plants grow in.' },
          ],
          materials: ['Soaked beans', 'A clear plastic cup per bean', 'Compost', 'A small jug of water', 'A sunny windowsill'],
          prep: ['Use clear cups and push the bean against the side so the root is visible as it grows. Opaque pots hide the best part.'],
          script: [],
          worksheet: { id: 'pk4-sci-u4-l2-ws', title: 'My Bean Diary: Day One', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Plants a bean with the right amount of soil and water.', 'Names light and water as daily needs.'],
            exitTicket: 'Ask what would happen if we put the cup in a dark cupboard and never watered it.',
          },
          differentiation: {
            support: ['Pre-fill the cups with soil so the child only makes the hole and places the bean.'],
            extension: ['Plant a second bean in the dark as a control and predict the difference.'],
            language: ['Photograph each step and put the pictures in order as a wordless instruction sequence.'],
          },
          misconceptions: [
            {
              misconception: 'Checking the seed by digging it up helps it grow.',
              looksLike: 'The child excavates the bean daily to see how it is doing.',
              correction: 'Use a clear cup with the bean against the side, so checking is possible without disturbing anything.',
            },
          ],
          homeExtension: ['Keep the cup where the child eats breakfast so it gets looked at every single morning.'],
        },
        {
          id: 'pk4-sci-u4-l3',
          unitId: 'pk4-sci-u4',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'The Parts of a Plant and What They Do',
          essentialQuestion: 'What job does each part of a plant do?',
          summary:
            'Roots, stem, leaves and flower, each tied to a job rather than just a name. A celery stick in coloured water shows the stem doing its job overnight.',
          durationMin: 20,
          standards: [{ code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes the parts of living organisms and what they do.' }],
          objectives: ['I can name four parts of a plant.', 'I can say what the roots and the leaves are for.'],
          vocabulary: [
            { term: 'stem', definition: 'The part that holds the plant up and carries water.' },
            { term: 'leaf', definition: 'The flat green part that catches the sunshine.' },
          ],
          materials: ['A whole plant with the roots washed clean', 'A celery stick with leaves', 'Food colouring', 'A glass of water'],
          prep: ['Start the celery in coloured water the night before so the coloured veins are already visible.'],
          script: [],
          worksheet: { id: 'pk4-sci-u4-l3-ws', title: 'Parts of a Plant', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Points to and names roots, stem, leaves and flower.', 'Explains that roots drink and leaves catch light.'],
            exitTicket: 'Point at the stem of any houseplant and ask what its job is.',
          },
          differentiation: {
            support: ['Teach two parts only — roots and leaves — and add the rest later.'],
            extension: ['Cut the celery across and look at the coloured tubes through a magnifier.'],
            language: ['Act out the parts with the whole body: feet as roots, arms as leaves, standing tall as the stem.'],
          },
          misconceptions: [
            {
              misconception: 'The flower is the most important part because it is the prettiest.',
              looksLike: 'The child says a plant without a flower is not really a plant.',
              correction: 'Look at grass, a fern and a lettuce. All plants, no flowers in sight today.',
            },
          ],
          homeExtension: ['Name the part of the plant you are eating at dinner: carrot is a root, celery is a stem, lettuce is leaves.'],
        },
        {
          id: 'pk4-sci-u4-l4',
          unitId: 'pk4-sci-u4',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'The Caterpillar That Changed',
          essentialQuestion: 'How can a caterpillar turn into a butterfly?',
          summary:
            'The butterfly life cycle in four stages. The hard idea is identity: the caterpillar and the butterfly are the same individual animal, not a parent and a child.',
          durationMin: 25,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes living organisms and how they change over time.' },
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
          ],
          objectives: ['I can name the four stages of a butterfly.', 'I know the caterpillar and the butterfly are the same animal.'],
          vocabulary: [
            { term: 'caterpillar', definition: 'The long wriggly stage that hatches from a butterfly egg and eats leaves.' },
            { term: 'chrysalis', definition: 'The hard case a caterpillar makes around itself while it changes.' },
            { term: 'life cycle', definition: 'All the stages a living thing goes through, in order, again and again.' },
          ],
          materials: ['Four stage cards to sequence', 'A picture book of the butterfly life cycle', 'Modelling dough'],
          prep: ['If the season allows, order a live caterpillar kit. Nothing on paper competes with the real thing.'],
          script: [],
          worksheet: { id: 'pk4-sci-u4-l4-ws', title: 'From Egg to Butterfly', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Sequences egg, caterpillar, chrysalis and butterfly correctly.', 'States that the butterfly was once the caterpillar.'],
            exitTicket: 'Lay the four cards out wrongly and ask the child to fix them.',
          },
          differentiation: {
            support: ['Use three stages, dropping the egg, until the sequence is secure.'],
            extension: ['Compare with a frog life cycle and find what the two have in common.'],
            language: ['Act the cycle out physically: curl up as the egg, wriggle as the caterpillar, go still as the chrysalis, fly as the butterfly.'],
          },
          misconceptions: [
            {
              misconception: 'The butterfly is the caterpillar’s mother, or a different animal that comes along afterwards.',
              looksLike: 'The child says the caterpillar went away and a butterfly arrived.',
              correction: 'Track one individual through the story with a name. "This is Alfie. Alfie is the caterpillar. Alfie is inside the chrysalis. Now here is Alfie with wings."',
            },
          ],
          homeExtension: ['Look for caterpillars on garden leaves in spring and check the same leaf every few days.'],
        },
        {
          id: 'pk4-sci-u4-l5',
          unitId: 'pk4-sci-u4',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Life Cycles Go Round and Round',
          essentialQuestion: 'What happens after the last stage?',
          summary:
            'The cycle closes. The butterfly lays eggs, the plant makes seeds, and the whole thing starts again — which is the difference between a line and a cycle.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena, including patterns in living things.' },
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
          ],
          objectives: ['I can put a life cycle in a circle instead of a line.', 'I can say what comes after the last picture.'],
          vocabulary: [
            { term: 'cycle', definition: 'Something that goes round and round and starts again.' },
            { term: 'again', definition: 'One more time, from the beginning.' },
          ],
          materials: ['Stage cards for both the bean and the butterfly', 'A paper plate to arrange them on as a circle', 'Split pin and arrow, optional'],
          prep: ['Arrange the cards as a circle on the plate before the lesson so the shape of the answer is already in the room.'],
          script: [],
          worksheet: { id: 'pk4-sci-u4-l5-ws', title: 'Round and Round', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Arranges four stages in a closed circle.', 'Explains that the last stage produces the first one again.'],
            exitTicket: 'Point at the adult butterfly card and ask, "What comes next?"',
          },
          differentiation: {
            support: ['Physically walk the circle on the floor with the cards laid out big.'],
            extension: ['Compare the bean cycle and the butterfly cycle and find the matching stage in each.'],
            language: ['Use a rolling hand gesture every time the word cycle is said.'],
          },
          misconceptions: [
            {
              misconception: 'A life cycle ends with the grown-up stage.',
              looksLike: 'The child lays the cards in a straight line and says "finished".',
              correction: 'Ask where the next egg comes from. Then bend the line round until it touches its own beginning.',
            },
          ],
          homeExtension: ['Save seeds from something you ate, plant them, and close the cycle for real.'],
        },
      ],
    },

    /* ============================================================ UNIT 5 */
    {
      id: 'pk4-sci-u5',
      gradeId: 'pk4',
      subjectId: 'science',
      sequence: 5,
      title: 'Weather Watchers and the Turning Year',
      bigIdea:
        'The weather is different every day, but the seasons come round in the same order every year — so some things you have to look and see, and some things you can know in advance.',
      description:
        'Daily weather observation is the backbone: one look out of the window, one symbol on a chart, every day. Over weeks the chart becomes data the child can read. Alongside it runs the slower idea of seasons, taught through one tree observed across the year, because a four-year-old cannot hold twelve months in mind but can remember one tree.',
      weeks: 5,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena, including weather and events in the natural world.' },
        { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
        { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
      ],
      lessonTitles: [
        'What Is the Weather Doing Today?',
        'Dressing for the Weather',
        'Where Does Rain Come From?',
        'One Tree, Four Seasons',
        'Reading Our Weather Chart',
      ],
      performanceTask:
        'The Weather Report: after a month of daily charting, the child presents a television-style weather report — what it has mostly been, what today is, and what they predict for tomorrow, with a reason.',
      lessons: [
        {
          id: 'pk4-sci-u5-l1',
          unitId: 'pk4-sci-u5',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'What Is the Weather Doing Today?',
          essentialQuestion: 'How do I describe what the sky is doing right now?',
          summary:
            'Establishes the daily routine and the five weather words. The child goes outside, looks up, feels the air, and chooses a symbol for the chart. This runs every day for the rest of the year.',
          durationMin: 15,
          standards: [{ code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena in the natural world, including weather.' }],
          objectives: ['I can look outside and say what the weather is doing.', 'I can pick the right symbol for today.'],
          vocabulary: [
            { term: 'weather', definition: 'What the sky and the air are doing today.' },
            { term: 'cloudy', definition: 'The sky is covered in clouds and the sun is hidden.' },
            { term: 'windy', definition: 'The air is moving hard enough to push things about.' },
          ],
          materials: ['A wall chart with a square per day', 'Five symbol cards: sun, cloud, rain, wind, snow', 'Somewhere to stand outside'],
          prep: ['Fix the chart at the child’s eye height, not yours. A chart they cannot reach becomes your chart.'],
          script: [],
          worksheet: { id: 'pk4-sci-u5-l1-ws', title: 'Today the Weather Is…', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Chooses an appropriate weather symbol unaided.', 'Names two things they noticed outside.'],
            exitTicket: 'Ask the child to describe today’s weather to someone on the phone, who cannot see out of the window.',
          },
          differentiation: {
            support: ['Offer two symbols to choose between rather than all five.'],
            extension: ['Add temperature: hot, warm, cool, cold, chosen by how the air feels on bare arms.'],
            language: ['Weather words are highly picturable. Pair every word with its symbol permanently.'],
          },
          misconceptions: [
            {
              misconception: 'The weather is whatever it was this morning, or whatever season it is.',
              looksLike: 'The child says "sunny, because it is summer" without looking out.',
              correction: 'Make going outside and looking up non-negotiable before the symbol is chosen.',
            },
          ],
          homeExtension: ['Do the weather symbol together at the same time every morning, even at the weekend.'],
        },
        {
          id: 'pk4-sci-u5-l2',
          unitId: 'pk4-sci-u5',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Dressing for the Weather',
          essentialQuestion: 'How does the weather change what I put on?',
          summary:
            'Matching clothes to conditions, then a deliberate mismatch — wellies on a hot day, a sun hat in the rain — so the child has to argue about why it is wrong.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
            { code: 'ELOF-SCI-Goal P-SCI 2', framework: 'HeadStart-ELOF', text: 'Child engages in scientific talk.' },
          ],
          objectives: ['I can choose the right clothes for today’s weather.', 'I can say why a choice is wrong.'],
          vocabulary: [
            { term: 'waterproof', definition: 'Keeps the rain out and does not soak through.' },
            { term: 'shade', definition: 'A cooler place out of the sun.' },
          ],
          materials: ['A pile of real clothes: coat, sun hat, wellies, scarf, sandals, umbrella', 'A suitcase or bag to pack'],
          prep: ['Use real clothes rather than pictures. Putting a scarf on in a warm room makes the argument physical.'],
          script: [],
          worksheet: { id: 'pk4-sci-u5-l2-ws', title: 'What Shall I Wear?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Matches at least four items to the right weather.', 'Explains one mismatch.'],
            exitTicket: 'Hold up a woolly hat and ask what weather it is for and why.',
          },
          differentiation: {
            support: ['Sort into just two piles: hot day and cold day.'],
            extension: ['Pack a bag for a day where the weather changes halfway through.'],
            language: ['Name each garment as it is handled. Clothing vocabulary varies enormously between households.'],
          },
          misconceptions: [
            {
              misconception: 'Coats make you warm on their own, like a heater.',
              looksLike: 'The child says the coat is warm even when it has been on the cold floor all night.',
              correction: 'Feel the coat before putting it on — it is cold. It keeps your own warmth in rather than making warmth.',
            },
          ],
          homeExtension: ['Let the child choose their own outdoor clothes each morning after checking the weather.'],
        },
        {
          id: 'pk4-sci-u5-l3',
          unitId: 'pk4-sci-u5',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Where Does Rain Come From?',
          essentialQuestion: 'How does water get up into the sky and then fall down again?',
          summary:
            'A jug of hot water, a plate of ice cubes on top, and rain falling inside a bowl. Kept deliberately simple — water goes up invisibly, gathers, and comes back down.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena and events.' },
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
          ],
          objectives: ['I can watch water turn into a cloud and back into drops.', 'I can say that rain comes from clouds.'],
          vocabulary: [
            { term: 'steam', definition: 'The cloudy mist that comes off very hot water.' },
            { term: 'drop', definition: 'One tiny round bit of water.' },
          ],
          materials: ['A heatproof bowl', 'Hot water, handled only by the adult', 'A plate', 'Ice cubes'],
          prep: ['You handle the hot water at every stage. Set the child’s chair back far enough that reaching in is not possible.'],
          script: [],
          worksheet: { id: 'pk4-sci-u5-l3-ws', title: 'Rain in a Bowl', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Predicts where the drops will form.', 'Describes water going up and coming back down.'],
            exitTicket: 'Ask where the puddle in the playground goes when the sun comes out.',
          },
          differentiation: {
            support: ['Just do the cold-window version: breathe on cold glass and watch it fog.'],
            extension: ['Mark a puddle with chalk on a sunny day and re-draw the outline every hour.'],
            language: ['Use up-arrows and down-arrows drawn in the air as you narrate.'],
          },
          misconceptions: [
            {
              misconception: 'Clouds are made of cotton wool or smoke.',
              looksLike: 'The child says clouds are fluffy and solid enough to sit on.',
              correction: 'Point at the mist over the bowl. That is a cloud, and your hand goes straight through it.',
            },
          ],
          homeExtension: ['Watch the bathroom mirror fog up during a shower and wipe a drop trail down it.'],
        },
        {
          id: 'pk4-sci-u5-l4',
          unitId: 'pk4-sci-u5',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'One Tree, Four Seasons',
          essentialQuestion: 'How does the same tree look different through the year?',
          summary:
            'One chosen tree, visited and drawn once a season. The four drawings side by side make the year visible in a way no calendar can for a four-year-old.',
          durationMin: 25,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes living organisms and how they change over time.' },
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
          ],
          objectives: ['I can name the four seasons.', 'I can say one thing my tree does in each season.'],
          vocabulary: [
            { term: 'season', definition: 'One of the four parts of the year: spring, summer, autumn, winter.' },
            { term: 'bare', definition: 'With nothing on it — a tree with no leaves at all.' },
          ],
          materials: ['A chosen tree you can reach easily', 'A clipboard and crayons', 'A folder for the four drawings'],
          prep: ['Choose a deciduous tree. An evergreen barely changes and makes for a disappointing year.'],
          script: [],
          worksheet: { id: 'pk4-sci-u5-l4-ws', title: 'My Tree This Season', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names the four seasons in order.', 'Describes one seasonal change in the tree.'],
            exitTicket: 'Show a photograph of a bare tree and ask which season it is and how they can tell.',
          },
          differentiation: {
            support: ['Focus on two contrasting seasons only — leaves and no leaves.'],
            extension: ['Collect one leaf per visit and tape it beside each drawing.'],
            language: ['Season names carry different associations in different climates. Ask what the seasons are like where the family is from.'],
          },
          misconceptions: [
            {
              misconception: 'Trees die in winter.',
              looksLike: 'The child says the bare tree is dead.',
              correction: 'Look for the buds on the twigs in January. They are already there, tightly shut and waiting.',
            },
          ],
          homeExtension: ['Take a photo of the same tree on the first of every month from the same spot.'],
        },
        {
          id: 'pk4-sci-u5-l5',
          unitId: 'pk4-sci-u5',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Reading Our Weather Chart',
          essentialQuestion: 'What does a month of weather tell us?',
          summary:
            'The chart becomes data. The child counts the symbols in each category, finds which weather happened most, and makes a prediction for tomorrow with a reason.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
          ],
          objectives: ['I can count how many rainy days we had.', 'I can say which weather we had the most of.'],
          vocabulary: [
            { term: 'most', definition: 'The biggest number of them.' },
            { term: 'chart', definition: 'A picture that shows what happened, day by day.' },
          ],
          materials: ['The completed month of weather chart', 'Counters to place on each square while counting'],
          prep: ['Cut the month’s squares apart so they can be physically sorted into piles. Counting a pile is far easier than counting a grid.'],
          script: [],
          worksheet: { id: 'pk4-sci-u5-l5-ws', title: 'Our Weather Month', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Counts each weather category accurately.', 'Identifies the most common weather and makes a reasoned prediction.'],
            exitTicket: 'Ask what the weather will probably be tomorrow, and why they think so.',
          },
          differentiation: {
            support: ['Compare only two categories: rainy days against sunny days.'],
            extension: ['Build the piles into a bar graph and compare two different months.'],
            language: ['Use the frames "We had ___ rainy days" and "We had the most ___".'],
          },
          misconceptions: [
            {
              misconception: 'Whatever the weather is today is what it will be tomorrow.',
              looksLike: 'The child predicts today’s weather again with total certainty.',
              correction: 'Look back at the chart for a day when the weather changed. Predicting is a good guess, not a promise.',
            },
          ],
          homeExtension: ['Compare your chart with the weather forecast on the phone and see how often the forecast was right.'],
        },
      ],
    },

    /* ============================================================ UNIT 6 */
    {
      id: 'pk4-sci-u6',
      gradeId: 'pk4',
      subjectId: 'science',
      sequence: 6,
      title: 'Materials, Pushes and Pulls',
      bigIdea:
        'Everything is made of something, and things only move when something pushes or pulls them.',
      description:
        'Physical science, entirely through investigation. Children sort objects by what they are made of and what those materials do, then move to forces: a push, a pull, and what happens on a ramp. The sink and float lesson at the centre brings back the predict-test-observe-explain loop from unit 1 and applies it to a question where almost every child holds a wrong theory going in.',
      weeks: 5,
      standards: [
        { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena, including objects and materials.' },
        { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena by their properties.' },
        { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
        { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
      ],
      lessonTitles: [
        'What Is It Made Of?',
        'Hard, Soft, Bendy, Stretchy',
        'Will It Sink or Will It Float?',
        'Push It, Pull It',
        'Ramp Races',
      ],
      performanceTask:
        'The Best Boat: given foil, a cork, a plastic lid and modelling clay, the child builds something that floats and carries three coins without sinking, and explains why they chose what they chose.',
      lessons: [
        {
          id: 'pk4-sci-u6-l1',
          unitId: 'pk4-sci-u6',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'What Is It Made Of?',
          essentialQuestion: 'What is this thing actually made from?',
          summary:
            'Sorting everyday objects by material — wood, metal, plastic, paper, fabric — and discovering that one material makes many different things and one kind of thing can be made of several materials.',
          durationMin: 20,
          standards: [{ code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena by the materials they are made from.' }],
          objectives: ['I can name five materials.', 'I can sort objects by what they are made of.'],
          vocabulary: [
            { term: 'material', definition: 'What a thing is made out of.' },
            { term: 'metal', definition: 'A hard shiny material that is usually cold to touch.' },
            { term: 'plastic', definition: 'A light material that can be almost any colour.' },
          ],
          materials: ['A tray of twelve objects across five materials', 'Five labelled sorting hoops or sheets'],
          prep: ['Include one object made of two materials — a pencil, or a toothbrush — to cause the useful argument.'],
          script: [],
          worksheet: { id: 'pk4-sci-u6-l1-ws', title: 'Made Of What?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Sorts ten objects by material with no more than two errors.', 'Names the material of an unfamiliar object.'],
            exitTicket: 'Hold up a spoon and a wooden spoon. Same thing or different? What is different about them?',
          },
          differentiation: {
            support: ['Sort into three materials only: wood, metal and plastic.'],
            extension: ['Find three things in the room made of the same material and explain why that material was chosen for each.'],
            language: ['Material names are concrete nouns that transfer easily. Label a box for each and keep them out all week.'],
          },
          misconceptions: [
            {
              misconception: 'The material is the same as the object — a spoon is made of spoon.',
              looksLike: 'Asked what a spoon is made of, the child says "a spoon".',
              correction: 'Put a metal spoon, a wooden spoon and a plastic spoon side by side. Same thing, three materials.',
            },
          ],
          homeExtension: ['While unpacking the shopping, name the material of each package.'],
        },
        {
          id: 'pk4-sci-u6-l2',
          unitId: 'pk4-sci-u6',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Hard, Soft, Bendy, Stretchy',
          essentialQuestion: 'What can each material do?',
          summary:
            'Testing properties rather than naming them. Can you bend it? Stretch it? Squash it? Children test each material against each question and record yes or no.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations to test the properties of materials.' },
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena.' },
          ],
          objectives: ['I can test whether something bends.', 'I can say which material is best for a job.'],
          vocabulary: [
            { term: 'bendy', definition: 'It changes shape when you push it and does not snap.' },
            { term: 'stretchy', definition: 'It gets longer when you pull it and goes back again.' },
          ],
          materials: ['A rubber band, a lolly stick, a straw, a sponge, a paper clip, a piece of card'],
          prep: ['Test everything yourself first so nothing snaps unexpectedly in small hands.'],
          script: [],
          worksheet: { id: 'pk4-sci-u6-l2-ws', title: 'Can It Bend? Can It Stretch?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Tests each object against each property.', 'Chooses a suitable material for a stated job.'],
            exitTicket: 'Ask which material they would use to make a raincoat, and why.',
          },
          differentiation: {
            support: ['Test one property across all objects before introducing the second.'],
            extension: ['Ask why windows are made of glass and not cardboard, and take the answer seriously.'],
            language: ['The -y ending pattern helps: bendy, stretchy, bumpy, squishy.'],
          },
          misconceptions: [
            {
              misconception: 'Hard means strong and soft means weak.',
              looksLike: 'The child predicts a dry spaghetti strand is stronger than a rubber band.',
              correction: 'Pull both. The hard one snaps first. Hard and strong are not the same thing.',
            },
          ],
          homeExtension: ['At the shops, ask why each thing is packaged in the material it is packaged in.'],
        },

        /* ---------------------------------------------------- L3 authored */
        {
          id: 'pk4-sci-u6-l3',
          unitId: 'pk4-sci-u6',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 3,
          status: 'authored',
          title: 'Will It Sink or Will It Float?',
          essentialQuestion: 'Can I tell what will float before I put it in?',
          summary:
            'The full investigation loop applied to a question every four-year-old thinks they already know the answer to. Nearly all of them believe heavy things sink and light things float, and the lesson is built around the two objects that break that rule: a big light wooden block that floats and a tiny heavy screw that sinks.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
            { code: 'ELOF-SCI-Goal P-SCI 3', framework: 'HeadStart-ELOF', text: 'Child compares and categorises observable phenomena by observable properties.' },
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
          ],
          objectives: [
            'I can predict whether something will sink or float.',
            'I can test it and sort it into the right group.',
            'I know that big things can float and tiny things can sink.',
          ],
          vocabulary: [
            { term: 'float', definition: 'To stay up on top of the water.', example: 'The cork floats.' },
            { term: 'sink', definition: 'To go down to the bottom of the water.', example: 'The coin sank straight away.' },
            { term: 'surface', definition: 'The very top of the water.', example: 'The leaf sat on the surface.' },
            { term: 'predict', definition: 'To say what you think will happen before it happens.', example: 'I predict the spoon will sink.' },
          ],
          materials: [
            'A clear tub or washing-up bowl, filled two-thirds with water',
            'A cork, a metal spoon, a plastic bottle top, a large light wooden block, a small heavy metal screw or bolt, a rubber ball',
            'A towel, and more towel than you think',
            'The printed worksheet',
            'A crayon',
          ],
          prep: [
            'Choose the wooden block and the screw deliberately: the block must be visibly big, the screw visibly tiny. If the child cannot see that the big one is the light one, the surprise never happens.',
            'Fill the tub before the child arrives. Filling it together costs ten minutes and all the momentum.',
            'Work on a towel, on the floor or outside. Plan for water everywhere and it will not derail the lesson.',
            'Test all six objects yourself first. A bottle top that fills with water and sinks halfway is confusing at this age.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Two Objects, One Rule',
              minutes: 3,
              say: [
                'Hold this wooden block. Now hold this little screw. Which one is heavier?',
                'The block. It is much bigger and it is heavier.',
                'Right. Now — which one do you think will sink?',
                'You said the block, because it is heavy. That is exactly what I would have said too. Let us find out.',
                'Screw first. Ready? Plop. It sank. Now the block. Ready?',
                'It floated! The big heavy one floated and the tiny one sank. Something is going on here.',
              ],
              do: [
                'Put both objects in the child’s hands at the same time so the weight difference is felt, not told.',
                'Drop the screw first. The expected result first, then the surprise.',
                'Let the surprise sit. Do not explain it. Just look puzzled together.',
              ],
              studentDoes: ['Compares the two objects by weight, predicts, and watches both results.'],
              checks: [
                {
                  ask: 'Which one did you think would sink? What actually happened?',
                  lookFor: 'An honest account of the mismatch between the prediction and the result.',
                  ifStuck: 'Do it again. The second run of a surprising result is often when it registers.',
                },
              ],
              tip: 'Do not resolve this. The right emotional state to leave the child in is confusion, because that is what makes them want to test the other four objects.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Two Words and Two Piles',
              minutes: 3,
              say: [
                'We need two words. When something stays up on top, we say it FLOATS. Say it — floats.',
                'When it goes all the way down to the bottom, we say it SINKS. Sinks.',
                'Watch my hands. Floats — my hand stays up here on the top. Sinks — my hand goes all the way down.',
                'Now we are going to test four more things. Every time, you predict FIRST. Then we drop it in.',
                'And here is the rule for today: it is completely fine to be wrong. I was wrong about the block and I am a grown-up.',
              ],
              do: [
                'Give both words a fixed hand gesture and use them every single time for the rest of the lesson.',
                'Line the four remaining objects up beside the tub in the order you will test them.',
              ],
              studentDoes: ['Repeats both words with the gestures.'],
              checks: [
                { ask: 'Show me with your hand what floating looks like.', lookFor: 'A flat hand held at the top, not moving down.' },
                { ask: 'What is the very first thing we do before we drop it in?', lookFor: 'Predict, or guess.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Test the Rest',
              minutes: 7,
              say: [
                'Object one: the cork. Predict. Sink or float?',
                'Now drop it in. Was your prediction right?',
                'Put it on the FLOATS side of the towel. We are making two piles.',
                'Object two: the spoon. Predict first — no dropping until you have said it.',
                'Sank. Onto the sinks pile it goes.',
                'Now look at your two piles. Is there anything the same about all the floaters?',
              ],
              do: [
                'Enforce the prediction before every single drop. If the object goes in first, that trial is wasted.',
                'Build the two physical piles on the towel as you go. The piles become the data.',
                'After the fourth object, stop and make the child look at the two groups before continuing.',
              ],
              studentDoes: ['Predicts, tests and sorts each object into a floats pile or a sinks pile.'],
              checks: [
                {
                  ask: 'What do all the things in the floats pile have in common?',
                  lookFor: 'Anything at all: wood, plastic, they have air in them, they are round. Any hypothesis is a good hypothesis here.',
                  ifStuck: 'Ask what they are made of instead. Material is the pattern a four-year-old can actually see.',
                },
                {
                  ask: 'How many of your predictions were right so far?',
                  lookFor: 'A count, said without anxiety about the wrong ones.',
                },
              ],
              tip: 'Wet hands and a full tub mean the child will want to splash. Give them thirty seconds of licensed splashing at the end rather than fighting it throughout.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Record Sheet',
              minutes: 5,
              say: [
                'Now we write down what we found. Six objects on this page.',
                'For each one, colour the water box if it FLOATED and colour the bottom box if it SANK.',
                'Then the last question at the bottom: circle the one that surprised you the most.',
                'And here is the tricky one. There is a picture of a big log and a tiny nail. Which do you think floats now?',
              ],
              do: [
                'Keep the two physical piles on the towel while the child works so the page can be filled in from the evidence rather than from memory.',
                'Read all directions aloud.',
              ],
              studentDoes: ['Records the six results and answers the transfer question about the log and the nail.'],
              checks: [
                {
                  ask: 'Why did you say the log floats when it is so much bigger than the nail?',
                  lookFor: 'Because size is not the thing that matters / because wood floats.',
                  ifStuck: 'Point back at the wooden block in the floats pile. "What was that made of? And what is a log made of?"',
                },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'What We Thought and What We Know',
              minutes: 2,
              say: [
                'At the start you thought heavy things sink and light things float. So did I.',
                'Then what happened? The big heavy block floated and the tiny screw sank.',
                'So that rule was wrong. It is not about heavy. It is about what it is made of — wood and cork and plastic float, metal and stone sink.',
                'You changed your mind because of what you SAW. That is the best thing a scientist ever does.',
              ],
              do: ['Hold up the block and the screw one last time, one in each hand.'],
              studentDoes: ['States the revised rule in their own words.'],
              checks: [
                {
                  ask: 'Is it true that all heavy things sink?',
                  lookFor: 'No — the big block was heavy and it floated.',
                  ifStuck: 'Hand them the block again. "Is this heavy? Did it sink?"',
                },
              ],
            },
          ],
          worksheet: {
            id: 'pk4-sci-u6-l3-ws',
            title: 'Sink or Float?',
            style: 'line-art',
            prepNotes:
              'This page gets wet. Print a spare. Fill it in after the testing is finished rather than between trials, or the child will spend the lesson colouring instead of watching the water.',
            sections: [
              {
                id: 's1',
                title: 'What Happens in the Water',
                directions: 'Look at this picture. One thing is floating on the top. One thing is down at the bottom. Point to each one and say the word.',
                layout: 'full',
                images: [
                  {
                    id: 'img-tub-cross-section',
                    slot: 'Water tub in cross-section',
                    purpose: 'Fixes the meaning of the two words with a single picture. Children conflate floating with being wet, so seeing an object resting on the surface line beside one on the bottom does more than any definition.',
                    subject: 'a side-on cross-section view of a clear rectangular tub of water with a straight horizontal water line, one cork resting on the surface of the water and one metal spoon lying flat on the bottom of the tub',
                    count: 2,
                    composition: 'the tub drawn as a clean open-topped rectangle seen straight from the side, a single straight horizontal line marking the water surface across the full width, exactly one cork sitting half in and half out of the water on that line, exactly one spoon resting on the inside floor of the tub, a clear expanse of water between the two objects',
                    mustInclude: ['exactly two objects, one at the surface and one at the bottom', 'a single clear horizontal water line', 'the cork breaking the surface so part of it is above the water line'],
                    mustAvoid: ['bubbles, splashes or ripples that obscure the water line', 'an object floating halfway down in the middle of the water', 'a table, hands or background', 'any text or arrows'],
                    aspect: '4:3',
                    altText: 'A tub of water seen from the side with a cork floating on top and a spoon on the bottom',
                    style: 'diagram',
                  },
                ],
              },
              {
                id: 's2',
                title: 'What We Tested',
                directions: 'Here are the six things we put in the water. Colour a circle round the ones that FLOATED.',
                layout: 'row',
                images: [
                  {
                    id: 'img-test-objects-6',
                    slot: 'The six test objects',
                    purpose: 'The record of the experiment. The six are drawn at honest relative sizes so the big-block-floats and tiny-screw-sinks contrast is visible on the page and not only in memory.',
                    subject: 'a horizontal row of six separate objects — a cork, a metal teaspoon, a round plastic bottle top, a large square wooden block, a small metal screw and a rubber ball',
                    count: 6,
                    composition: 'a single straight horizontal row on a common baseline, six objects evenly spaced with clear white gaps, drawn at honest relative sizes so the wooden block is clearly the largest and the screw is clearly the smallest, none touching',
                    mustInclude: ['exactly six objects', 'the wooden block drawn clearly larger than every other object', 'the screw drawn clearly smaller than every other object', 'visible wood grain on the block and a metallic shine on the spoon and screw'],
                    mustAvoid: ['water, a tub or a background', 'all objects drawn at the same size', 'objects overlapping', 'labels or text'],
                    aspect: '4:1',
                    altText: 'A cork, spoon, bottle top, wooden block, screw and rubber ball in a row',
                  },
                ],
              },
              {
                id: 's3',
                title: 'The Surprise',
                directions: 'The big heavy block floated and the tiny screw sank! Draw a circle round the one that surprised you most.',
                layout: 'split',
                images: [
                  {
                    id: 'img-block-vs-screw',
                    slot: 'The two rule-breakers side by side',
                    purpose: 'Isolates the pair that defeats the heavy-sinks theory. Putting only these two on one line, with the size difference exaggerated, makes the contradiction impossible to look past.',
                    subject: 'exactly two objects side by side — a large square wooden block on the left and a very small metal screw on the right',
                    count: 2,
                    composition: 'two objects on a common baseline with a wide gap between them, the wooden block drawn at least five times the height of the screw, both drawn as clean outlines with the wood grain and the screw thread clearly visible',
                    mustInclude: ['exactly two objects', 'an extreme and obvious size difference between them', 'visible screw threads so the screw reads as metal'],
                    mustAvoid: ['water or a tub', 'a third object', 'the two objects drawn at similar sizes', 'text, arrows or labels'],
                    aspect: '16:9',
                    altText: 'A large wooden block beside a very small metal screw',
                  },
                ],
              },
              {
                id: 's4',
                title: 'What About These?',
                directions: 'We did not test these two. A big log and a tiny nail. Which one do you think floats? Circle it, and tell someone why.',
                layout: 'split',
                writingLines: 1,
                images: [
                  {
                    id: 'img-log-transfer',
                    slot: 'Transfer item — a log',
                    purpose: 'Tests whether the material rule transfers to an object the child has never put in water. A log is enormous, which is exactly why it is the right test of whether size has been dropped as the explanation.',
                    subject: 'a single large cut log with visible bark on the outside and tree rings on the cut end',
                    count: 1,
                    composition: 'one log lying horizontally, centred and filling most of the frame, drawn as a clean outline with the growth rings clearly visible on the sawn end so the material reads unmistakably as wood',
                    mustInclude: ['exactly one log', 'clearly visible tree rings on the cut end', 'visible bark texture on the outside'],
                    mustAvoid: ['water, a forest, an axe or a background', 'more than one log', 'text or labels'],
                    aspect: '1:1',
                    altText: 'A single large wooden log',
                  },
                  {
                    id: 'img-nail-transfer',
                    slot: 'Transfer item — a nail',
                    purpose: 'The paired alternative. Drawn small and obviously metallic so the child must choose on material rather than on which picture is bigger.',
                    subject: 'a single small metal nail with a flat round head and a sharp point',
                    count: 1,
                    composition: 'one nail lying horizontally, centred, drawn much smaller within its frame than the log is within its own so the size contrast survives the two frames being the same size, with a bright highlight along the shaft so it reads as metal',
                    mustInclude: ['exactly one nail', 'a clear metallic highlight along the shaft', 'a visible flat head and a sharp point'],
                    mustAvoid: ['a hammer, wood or a background', 'more than one nail', 'the nail drawn large enough to fill the frame', 'text or labels'],
                    aspect: '1:1',
                    altText: 'A single small metal nail',
                  },
                ],
              },
            ],
            answerKey: [
              'Floated: the cork, the plastic bottle top, the large wooden block and the rubber ball.',
              'Sank: the metal spoon and the metal screw.',
              'The surprise: usually the wooden block. Accept either — what matters is that the child can say why it was surprising.',
              'Transfer: the log floats and the nail sinks. Listen for a reason based on material — "wood floats" — rather than on size.',
            ],
          },
          assessment: {
            successCriteria: [
              'Predicts before every trial without being reminded by the end of the lesson.',
              'Sorts all six tested objects correctly into floats and sinks.',
              'States that a big thing can float and a small thing can sink.',
            ],
            exitTicket:
              'Hold up a metal fork and a plastic fork. Ask for a prediction on each, with a reason. A reason mentioning what it is made of is a secure answer; a reason mentioning size is not.',
            rubric: [
              { level: 'emerging', descriptor: 'Enjoys the water and reports results accurately, but keeps predicting on size alone even after seeing the block float.' },
              { level: 'developing', descriptor: 'Predicts confidently and records results correctly, and can repeat that wood floats, but reverts to "heavy things sink" for a new object.' },
              { level: 'secure', descriptor: 'Predicts using material rather than size, applies it to untested objects such as the log, and can explain why the original heavy-sinks rule was wrong.' },
            ],
          },
          differentiation: {
            support: [
              'Test three objects rather than six. Two obvious floaters and one obvious sinker is a complete lesson.',
              'Skip the recording sheet entirely and make the two physical piles the whole record.',
              'If predicting is hard, offer a two-way choice by holding out a hand for each: "This hand is sink, this hand is float. Touch one."',
            ],
            extension: [
              'Give the child a lump of modelling clay. It sinks as a ball — can they change its shape so it floats?',
              'Test one object in salty water and the same object in tap water.',
              'Ask them to find three things in the house they predict will float, then test all three.',
            ],
            language: [
              'Sink and float both have strong hand gestures. Use them constantly and let the child answer with the gesture before the word.',
              'Watch for "sink" the kitchen fixture causing confusion. Name it explicitly and laugh about it rather than ignoring it.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Heavy things sink and light things float.',
              looksLike: 'The child confidently predicts that the big wooden block will sink and the tiny screw will float, and keeps predicting by weight even after the demonstration.',
              correction: 'Do the block and screw comparison several times in one session. One demonstration rarely shifts a theory this strongly held. Then group the results by material and let the child see the wood pile and the metal pile.',
            },
            {
              misconception: 'Big things sink and small things float.',
              looksLike: 'After abandoning weight, the child switches to size as the rule and predicts the log will sink.',
              correction: 'Put the large wooden block and the tiny screw side by side in the water at the same time. Size fails as an explanation exactly as fast as weight did.',
            },
            {
              misconception: 'Floating means being partly wet, so anything wet is floating.',
              looksLike: 'The child says the spoon is floating because it is under the water and wet.',
              correction: 'Use the cross-section picture and the two hand gestures. Floating means the top of it is out in the air. Point at the bit of the cork that is dry.',
            },
          ],
          homeExtension: [
            'Bath time is a free laboratory. Predict each toy before it goes in.',
            'At the sink, test which bits of the washing up float and see whether the material rule holds.',
            'Drop a grape and a cherry tomato into a glass of water and see which does what. Then try it in fizzy water.',
          ],
          teacherNotes:
            'The heavy-sinks theory is one of the strongest intuitive beliefs a four-year-old holds, and one lesson will not remove it. What you are aiming for is a crack in it — a memory of a big block floating that they cannot explain away. Come back to it in the bath a dozen times over the following months. The honest scientific explanation involves density and displacement, which is well beyond Pre-K; "what it is made of" is the right approximation for now and it is not a lie, just an unfinished truth.',
        },

        {
          id: 'pk4-sci-u6-l4',
          unitId: 'pk4-sci-u6',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Push It, Pull It',
          essentialQuestion: 'What makes something start moving, and what makes it stop?',
          summary:
            'Forces named and felt. The child pushes and pulls a loaded box across the floor, discovers that a bigger push makes it go further, and learns that things do not move by themselves.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 1', framework: 'HeadStart-ELOF', text: 'Child observes and describes observable phenomena and events, including how objects move.' },
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
          ],
          objectives: ['I can show a push and a pull.', 'I can make something go further by pushing harder.'],
          vocabulary: [
            { term: 'push', definition: 'To move something away from you.' },
            { term: 'pull', definition: 'To move something towards you.' },
            { term: 'force', definition: 'The push or the pull that makes something move.' },
          ],
          materials: ['A cardboard box', 'Heavy books to load it with', 'A length of string', 'A toy car', 'Chalk or tape to mark distances'],
          prep: ['Mark a start line on the floor. Without it there is nothing to compare and the lesson has no result.'],
          script: [],
          worksheet: { id: 'pk4-sci-u6-l4-ws', title: 'Pushes and Pulls', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Demonstrates and names a push and a pull.', 'Predicts that a harder push moves the car further.'],
            exitTicket: 'Ask whether opening a door is a push or a pull, then go and check together.',
          },
          differentiation: {
            support: ['Use only the toy car. The loaded box is heavy and can be discouraging.'],
            extension: ['Load the box more heavily and ask why the same push moves it less far.'],
            language: ['Push and pull are directional. Use your own body as the reference point every time you say them.'],
          },
          misconceptions: [
            {
              misconception: 'Things stop on their own because they run out of go.',
              looksLike: 'The child says the car "got tired".',
              correction: 'Roll the car on carpet and then on a smooth floor. Something is stopping it, and you can change how much.',
            },
          ],
          homeExtension: ['Label the doors at home: which need a push and which need a pull?'],
        },
        {
          id: 'pk4-sci-u6-l5',
          unitId: 'pk4-sci-u6',
          gradeId: 'pk4',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Ramp Races',
          essentialQuestion: 'What makes a car go further down a ramp?',
          summary:
            'A fair test with one variable. The child changes the height of the ramp, keeps everything else the same, and measures how far the car travels. The unit and the year end with a genuine controlled experiment.',
          durationMin: 25,
          standards: [
            { code: 'ELOF-SCI-Goal P-SCI 5', framework: 'HeadStart-ELOF', text: 'Child plans and conducts investigations and experiments.' },
            { code: 'ELOF-SCI-Goal P-SCI 4', framework: 'HeadStart-ELOF', text: 'Child asks a question, gathers information and makes predictions.' },
            { code: 'ELOF-SCI-Goal P-SCI 6', framework: 'HeadStart-ELOF', text: 'Child analyses results, draws conclusions and communicates results.' },
          ],
          objectives: ['I can make a ramp higher and predict what happens.', 'I can keep everything else the same so the test is fair.'],
          vocabulary: [
            { term: 'ramp', definition: 'A slope that things roll down.' },
            { term: 'steep', definition: 'Very slanted, going down sharply.' },
            { term: 'fair test', definition: 'Changing only one thing so you know what caused the difference.' },
          ],
          materials: ['A plank, a baking tray or a stiff piece of card', 'Books to raise one end', 'The same toy car every time', 'Chalk or sticky notes to mark where the car stops'],
          prep: ['Practise the release yourself. Letting go without pushing is genuinely hard and it is the thing that spoils the fairness.'],
          script: [],
          worksheet: { id: 'pk4-sci-u6-l5-ws', title: 'How Far Did It Go?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Predicts that a steeper ramp sends the car further.', 'Uses the same car and the same release each time.'],
            exitTicket: 'Ask what we would have to keep the same if we wanted to test a different car tomorrow.',
          },
          differentiation: {
            support: ['Compare two heights only — one book against five books — and skip the middle cases.'],
            extension: ['Test a heavy car against a light one from the same height, and change the ramp surface with a towel.'],
            language: ['Mark each run with a sticky note. The row of notes is a graph the child can read without any numbers.'],
          },
          misconceptions: [
            {
              misconception: 'Giving the car a push at the top is allowed and does not affect the result.',
              looksLike: 'The child shoves the car off and reports a longer distance.',
              correction: 'Race a pushed run against a released run from the same height. It is obviously unfair, and the child will say so themselves.',
            },
          ],
          homeExtension: ['Roll things down the slide at the park and see which travels furthest.'],
        },
      ],
    },
  ],
}

export default course
