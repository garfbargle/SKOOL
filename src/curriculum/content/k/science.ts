import type { SubjectCourse } from '../../types'

/**
 * Kindergarten Science — phenomenon-first, three-dimensional.
 *
 * Every unit opens with something the child can actually see happening and
 * cannot immediately explain. The disciplinary core idea, the science and
 * engineering practice and the crosscutting concept are then built in service
 * of explaining that one thing. Nothing here is taught because it is on a list.
 */
const course: SubjectCourse = {
  gradeId: 'k',
  subjectId: 'science',
  title: 'Kindergarten Science',
  overview:
    'Five-year-olds are already scientists in the only way that matters: they notice things and they ask why. What they have not learned yet is what to do next. This course takes eight or nine things a child can watch happening in a garden, a car park or a kitchen — a ball that will not move on its own, a slide too hot to sit on, a plant left in a cupboard — and turns each one into an investigation with a prediction, a test, a record and a conclusion. Very little of it needs equipment. All of it needs somebody willing to say "I do not know, let us find out" and mean it.',
  yearGoals: [
    'Explain that objects move because something pushed or pulled them, and deliberately change how something moves.',
    'Show with their own evidence that sunlight warms the surfaces it lands on, and build something that keeps a place cooler.',
    'Describe the pattern in what plants and animals need to stay alive, and match a living thing to a place it could live.',
    'Observe and record the local weather over several weeks and describe the patterns in what they recorded.',
    'Argue from evidence that living things change the places they live, and propose one thing their household could do differently.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'k-sci-u1',
      gradeId: 'k',
      subjectId: 'science',
      sequence: 1,
      title: 'Pushes and Pulls: Why Things Move',
      bigIdea:
        'Nothing moves by itself. Every time something starts, stops, speeds up or turns, something pushed it or pulled it — and if you change the push, you change what happens.',
      description:
        'The unit opens with a ball sitting still on the floor and a simple question: how do we get it to the other side of the room without picking it up? From there children plan and conduct fair tests comparing strong and gentle pushes, and pushes in different directions. The crosscutting concept doing the work is cause and effect: children stop saying "it just rolled" and start saying "it rolled because I pushed it hard". The unit ends in engineering — designing something that changes a rolling ball’s direction.',
      weeks: 5,
      standards: [
        { code: 'K-PS2-1', framework: 'NGSS', text: 'Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object.' },
        { code: 'K-PS2-2', framework: 'NGSS', text: 'Analyse data to determine if a design solution works as intended to change the speed or direction of an object with a push or a pull.' },
      ],
      lessonTitles: [
        'What Made It Move?',
        'A Harder Push Goes Further',
        'Changing Which Way It Goes',
        'The Ramp Test: Higher, Faster, Further',
        'Design a Way to Stop the Ball',
      ],
      performanceTask:
        'The Marble Rescue: the child designs, builds and tests something out of cardboard, books and tape that changes the direction of a rolling marble so it lands in a cup — then tests it three times and decides from the results whether it worked.',
      lessons: [
        /* ---------------------------------------------------- L1 authored */
        {
          id: 'k-sci-u1-l1',
          unitId: 'k-sci-u1',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'What Made It Move?',
          essentialQuestion: 'Why does a thing that is sitting still suddenly start moving?',
          summary:
            'The foundational cause-and-effect lesson of the year. Children discover that motion always has a cause outside the object, learn to name that cause as a push or a pull, and begin describing the strength and direction of the force rather than just the movement.',
          durationMin: 30,
          standards: [
            { code: 'K-PS2-1', framework: 'NGSS', text: 'Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object.' },
          ],
          objectives: [
            'I can say whether something was a push or a pull.',
            'I know that things do not start moving on their own.',
            'I can make an object go further by pushing it harder.',
          ],
          vocabulary: [
            { term: 'push', definition: 'Making something move away from you.', example: 'I pushed the door and it swung open.' },
            { term: 'pull', definition: 'Making something move towards you.', example: 'I pulled the wagon behind me.' },
            { term: 'force', definition: 'The grown-up word for a push or a pull.', example: 'A force made the ball roll.' },
            { term: 'motion', definition: 'Moving. Not staying still.', example: 'The ball was in motion.' },
            { term: 'strength', definition: 'How hard the push or pull is.', example: 'A gentle push and a hard push have different strengths.' },
          ],
          materials: [
            'A ball that rolls well on your floor — a tennis ball is ideal',
            'A toy car',
            'A wagon, a laundry basket with a rope, or a towel with something sitting on it',
            'A drawer or a door',
            'Masking tape to mark a starting line',
            'The printed worksheet and a crayon',
          ],
          prep: [
            'Clear a run of floor at least three metres long and tape a starting line across it.',
            'Put the ball on the starting line before the child arrives and do not touch it again until the lesson begins.',
            'Decide in advance which objects the child may push around the room, so the answer is never no.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Ball That Will Not Move',
              minutes: 5,
              say: [
                'Look at this ball. I want it to go all the way over there, next to the wall.',
                'So I am going to wait. Balls roll, don’t they? Let us just watch it for a bit.',
                'Still waiting. It is not going anywhere. Why not?',
                'You are right — something has to touch it. Show me. Make it move without picking it up.',
                'There it goes! So what actually made it move? Your hand. Your hand gave it a PUSH.',
              ],
              do: [
                'Genuinely stand and stare at the ball for a good ten seconds. The silence is the hook.',
                'Let the child push it. Do not demonstrate first.',
              ],
              studentDoes: ['Watches the stationary ball, works out that it needs contact, and pushes it.'],
              checks: [
                {
                  ask: 'Why did the ball not move while we were watching it?',
                  lookFor: 'Because nothing touched it / nobody pushed it.',
                  ifStuck: 'Ask directly: "What did you have to do to make it go?" Then name what they did: "You pushed it."',
                },
              ],
              tip: 'Do not skip the waiting. Children genuinely expect the ball to do something, and the disappointment of it doing nothing is the entire lesson in four seconds.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Away From Me, Towards Me',
              minutes: 6,
              say: [
                'There are only two kinds of move-making in the whole world, and here they are.',
                'A PUSH sends something away from me. Watch — I push the car and off it goes.',
                'A PULL brings something towards me. Watch — I pull the basket and it comes to me.',
                'Away from me: push. Towards me: pull. Say it with me and do the hands.',
                'Now this drawer. When I open it, am I pushing or pulling? Pulling — it comes towards me. And when I close it? Pushing. Same drawer, two different forces.',
              ],
              do: [
                'Do the two hand gestures — palms out for push, fingers curling in for pull — and keep using them all unit.',
                'Use the drawer deliberately, because it does both and that surprises children.',
              ],
              studentDoes: ['Copies the gestures and names push or pull for each demonstration.'],
              checks: [
                {
                  ask: 'I am opening the fridge. Push or pull?',
                  lookFor: 'Pull, with the gesture.',
                  ifStuck: 'Stand behind the child, put your hands over theirs, and do the movement together while saying the word.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Gentle Push, Hard Push',
              minutes: 9,
              say: [
                'New question. Can I decide HOW FAR the ball goes, or does the ball decide?',
                'Put the ball on the tape. Give it the gentlest push you possibly can. Watch where it stops.',
                'Let us put a piece of tape where it stopped. Now put the ball back on the line and push it hard.',
                'Look at the difference! What did you change?',
                'You changed the strength of the push. Harder push, further go. You decided, not the ball.',
                'Now try something else. Push it hard again, but this time aim at the sofa instead. What did you change now?',
              ],
              do: [
                'Mark each stopping point with a scrap of tape so the results stay visible. This is the child’s first data.',
                'Insist the ball goes back to the same starting line every time and say why: "Same start, or it is not a fair test."',
                'Run three trials at least: gentle, hard, and hard in a different direction.',
              ],
              studentDoes: ['Conducts a comparison test, marks each result and describes the difference.'],
              checks: [
                {
                  ask: 'Which push sent it further, and why?',
                  lookFor: 'The hard one, because it was a stronger push.',
                  ifStuck: 'Point at the two tape marks. The distance between them is the evidence — let the child see it rather than recall it.',
                },
                {
                  ask: 'Why do we always start the ball in the same place?',
                  lookFor: 'Any grasp of fairness — so we can tell what the push did.',
                  ifStuck: 'Deliberately start the ball halfway down the room and let the child object.',
                },
              ],
              tip: 'The tape marks are doing something important: they turn a memory into evidence sitting on the floor. Leave them there for the rest of the lesson and point at them whenever the child makes a claim.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 7,
              say: [
                'These pictures all show someone making something move. Your job is to work out which force they used.',
                'Ask yourself: is the thing going away from the person, or towards them?',
                'Circle PUSH or PULL for each one.',
                'The last picture shows two cars that were pushed down the same ramp. One went a long way and one did not get far. Circle the one that got the harder push.',
              ],
              do: [
                'Let the child act each picture out with their body before answering. Kinaesthetic first, judgement second.',
                'Do not correct a wrong answer straight away — ask them to show you the movement with their hands.',
              ],
              studentDoes: ['Classifies pictured motions as pushes or pulls and interprets a distance comparison.'],
              checks: [
                { ask: 'Show me with your hands what that person is doing.', lookFor: 'A gesture that matches the direction, before the answer is given.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Force Hunt',
              minutes: 3,
              say: [
                'Sixty seconds. Find me three things in this room that need a push and three that need a pull. Go!',
                'The light switch — push. The curtain — pull. The zip on your coat — that is a pull too.',
                'From now on, every time something moves, I want you to ask yourself: what pushed it or pulled it?',
              ],
              do: ['Run around with them. Standing still while a five-year-old hunts is a wasted minute.'],
              studentDoes: ['Finds and names real pushes and pulls around the room.'],
              checks: [{ ask: 'What made that move?', lookFor: 'Naming an external cause rather than "it just did".' }],
            },
          ],
          worksheet: {
            id: 'k-sci-u1-l1-ws',
            title: 'Push or Pull?',
            style: 'flat-vector',
            prepNotes:
              'Let your child act out each picture with their own body before circling anything. A child who mimes pulling a wagon gets it right; a child who studies the picture often guesses. The last item is a data question rather than a vocabulary one — it is asking them to reason backwards from a result to a cause.',
            sections: [
              {
                id: 's1',
                title: 'Which Force Is It?',
                directions: 'Look at each picture. Is the thing moving AWAY from the person or TOWARDS them? Circle PUSH or PULL.',
                layout: 'grid',
                items: [
                  'Picture 1 —  PUSH   /   PULL',
                  'Picture 2 —  PUSH   /   PULL',
                  'Picture 3 —  PUSH   /   PULL',
                  'Picture 4 —  PUSH   /   PULL',
                ],
                images: [
                  {
                    id: 'img-force-swing-push',
                    slot: 'Picture 1 — pushing a swing',
                    purpose:
                      'The clearest possible push: the child in the picture is behind the object and the object is travelling away from them. Starting with an unambiguous case lets the learner establish the away-from-me rule before meeting anything subtle.',
                    subject: 'a child standing behind a playground swing with both hands flat against the back of the swing seat, the swing tilted forward and away from them, with a short motion arrow pointing away from the child',
                    count: 1,
                    composition: 'side view, the pushing child on the left and the swing moving to the right, both figures fully visible, one simple curved motion arrow pointing right, plain white background',
                    mustInclude: [
                      'the pushing child’s hands clearly in contact with the back of the swing',
                      'the swing clearly displaced away from the pushing child',
                      'exactly one motion arrow, pointing away from the pushing child',
                    ],
                    mustAvoid: ['any words, labels or letters', 'a playground, sky, grass or background scenery', 'more than one arrow', 'the pushing child positioned in front of the swing'],
                    aspect: '1:1',
                    altText: 'A child pushing a swing away from themselves',
                  },
                  {
                    id: 'img-force-wagon-pull',
                    slot: 'Picture 2 — pulling a wagon',
                    purpose:
                      'The matching clearest pull: the handle is in the child’s hand and the wagon follows behind. Paired with picture one, it makes the away-versus-towards contrast the only difference that matters.',
                    subject: 'a child walking forward holding the handle of a four-wheeled toy wagon that trails behind them, with a short motion arrow pointing towards the child',
                    count: 1,
                    composition: 'side view, the walking child on the left facing left and the wagon behind them on the right, the taut handle clearly connecting hand to wagon, one simple straight motion arrow pointing left, plain white background',
                    mustInclude: [
                      'the handle clearly gripped in the child’s hand and clearly attached to the wagon',
                      'the wagon positioned behind the child, following them',
                      'exactly one motion arrow, pointing in the direction the child is walking',
                    ],
                    mustAvoid: ['any words, labels or letters', 'a park, path or background scenery', 'the child pushing the wagon from behind', 'objects loaded in the wagon that would distract from the handle'],
                    aspect: '1:1',
                    altText: 'A child pulling a wagon behind them by its handle',
                  },
                  {
                    id: 'img-force-drawer-pull',
                    slot: 'Picture 3 — pulling a drawer open',
                    purpose:
                      'Moves the idea from toys to furniture, where children rarely think of their own actions as forces at all. The drawer also sets up the later insight that the same object can be both pushed and pulled.',
                    subject: 'a child standing at a chest of drawers with one hand gripping a drawer handle and the drawer sliding out towards them, with a short motion arrow pointing towards the child',
                    count: 1,
                    composition: 'side view, the chest of drawers on the right and the child on the left, exactly one drawer partly open and all others fully closed, one simple straight motion arrow pointing towards the child, plain white background',
                    mustInclude: [
                      'exactly one open drawer, clearly sliding towards the child',
                      'the child’s hand gripping the drawer handle',
                      'exactly one motion arrow, pointing towards the child',
                    ],
                    mustAvoid: ['any words, labels or letters', 'more than one drawer open', 'objects spilling out of the drawer', 'a room, wall decoration or background scenery'],
                    aspect: '1:1',
                    altText: 'A child pulling a drawer open towards themselves',
                  },
                  {
                    id: 'img-force-car-push',
                    slot: 'Picture 4 — pushing a toy car',
                    purpose:
                      'A push with the hand low and the object small, so the child cannot rely on body posture as the cue and must actually judge direction. This is the discriminating item of the set.',
                    subject: 'a child crouching on the floor with one flat hand behind a small toy car, the car rolling away from the hand, with a short motion arrow pointing away from the child',
                    count: 1,
                    composition: 'side view at floor level, the crouching child on the left and the toy car to the right of their hand, one simple straight motion arrow pointing right, plain white background',
                    mustInclude: [
                      'the child’s hand clearly behind the car, not on top of it or in front of it',
                      'the car positioned away from the child in the direction of travel',
                      'exactly one motion arrow, pointing away from the child',
                    ],
                    mustAvoid: ['any words, labels or letters', 'a road, carpet pattern or background scenery', 'the child holding or lifting the car', 'more than one toy car'],
                    aspect: '1:1',
                    altText: 'A child pushing a toy car away across the floor',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Which One Got the Harder Push?',
                directions: 'These two cars started in exactly the same place and both got a push. Look at how far each one went. Circle the car that got the harder push.',
                layout: 'full',
                images: [
                  {
                    id: 'img-force-two-cars-distance',
                    slot: 'Two cars, two distances',
                    purpose:
                      'Asks the child to reason backwards from a result to its cause, which is a genuine step beyond naming a force. The shared starting line is drawn in so that fairness of the test is visible rather than assumed.',
                    subject: 'two identical simple toy cars on a plain floor with a single short vertical starting line behind them — one car stopped a short distance from the line and the other car stopped much further away',
                    count: 2,
                    composition:
                      'a wide horizontal frame with one clear vertical starting line at the far left, both identical cars facing right along the same horizontal path, the near car roughly a quarter of the way across and the far car near the right edge, generous white space, plain white background',
                    mustInclude: [
                      'exactly two cars, identical in size, shape and colour',
                      'one single starting line that both cars clearly began from',
                      'an obviously large difference in the distance each car has travelled from the line',
                    ],
                    mustAvoid: ['any words, numbers, labels or measurement marks', 'a person, hand or ramp in the picture', 'cars of different sizes or colours', 'a road, track or background scenery'],
                    aspect: '3:1',
                    altText: 'Two identical toy cars that started at the same line, one stopped near it and one far away',
                  },
                ],
              },
              {
                id: 's3',
                title: 'My Own Push and Pull',
                directions: 'Draw one thing in your house that you have to PUSH. Draw one thing you have to PULL. Tell someone how you know which is which.',
                layout: 'split',
                writingLines: 1,
              },
            ],
            answerKey: [
              'Picture 1: PUSH. Picture 2: PULL. Picture 3: PULL. Picture 4: PUSH.',
              'Harder push: the car that travelled further from the starting line. A correct answer paired with "because it went further" is the real success.',
              'My own push and pull: any reasonable pair. A door counts twice, and a child who notices that is doing well.',
            ],
          },
          assessment: {
            successCriteria: [
              'States that a still object needs a push or a pull to start moving.',
              'Correctly classifies at least three of four pictured motions as pushes or pulls.',
              'Predicts that a harder push sends an object further, and tests it from a fair starting point.',
            ],
            exitTicket:
              'Roll a ball gently towards the child and ask two things: what made it move, and how could you make it go further? Both answers together show the cause and the variable.',
            rubric: [
              { level: 'emerging', descriptor: 'Describes the movement ("it rolled") but not the cause, and uses push and pull interchangeably.' },
              { level: 'developing', descriptor: 'Names pushes and pulls correctly for clear cases and knows a harder push goes further, but does not yet keep the starting point fixed when testing.' },
              { level: 'secure', descriptor: 'Identifies the force in unfamiliar situations, explains that a still object cannot move itself, and insists on a fair starting point unprompted.' },
            ],
          },
          differentiation: {
            support: [
              'Do the whole lesson with the child’s own body as the object: you push their shoulders gently, then pull their hands. Feeling the force beats watching one.',
              'Use only two pictures rather than four, one obvious push and one obvious pull.',
              'Keep the hand gestures going all week. The motor memory carries the vocabulary when the words will not stick.',
            ],
            extension: [
              'Ask what makes a rolling ball stop, and introduce friction as a push from the floor going the other way.',
              'Test the same push on carpet and on a hard floor and explain the difference.',
              'Ask whether you can push something without touching it, and try it with two magnets.',
            ],
            language: [
              'Push and pull are directional opposites in every language. Ask for both words in the home language and use them alongside the English pair.',
              'Anchor each word to its gesture permanently. When the word is missing, the gesture still carries the meaning and the child can still participate.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Some things move on their own — balls roll because that is what balls do.',
              looksLike: 'Asked what made the ball move, the child says "it is round" or "it just rolls".',
              correction: 'Put the ball on the floor and wait with them, doing nothing at all. Roundness alone produces no motion, and the silence proves it faster than any explanation.',
            },
            {
              misconception: 'Pushing and pulling are about the shape of your hand, not the direction of the movement.',
              looksLike: 'The child says a wagon is being pushed because the person is walking forwards.',
              correction: 'Ask the only question that matters: is the thing going away from the person or coming towards them? Ignore the hand entirely.',
            },
            {
              misconception: 'A heavier object always needs a harder push to move at all, so weight and force are the same thing.',
              looksLike: 'The child says a big ball got a harder push simply because it is big.',
              correction: 'Test two objects of different weights with the same gentle push. Both move; they just move differently.',
            },
          ],
          homeExtension: [
            'Narrate the forces during ordinary chores: "I am pulling the plug out. You are pushing the trolley."',
            'At the playground, ask before every swing push whether they want a gentle one or a strong one, and ask what will be different.',
            'Race two toy cars down the same ramp and let the child change one thing at a time to make one win.',
          ],
          teacherNotes:
            'Three dimensions are genuinely in play here even though the lesson looks like play. The disciplinary core idea is PS2.A, the practice is planning and conducting an investigation, and the crosscutting concept is cause and effect. The part most often skipped is the fair test — returning the ball to the same line every single time. It feels pedantic with a five-year-old and it is the beginning of controlling variables, so hold the line on it. Also worth knowing: the idea that a still object stays still until something acts on it is genuinely counter-intuitive and will need revisiting several times this year.',
        },
        {
          id: 'k-sci-u1-l2',
          unitId: 'k-sci-u1',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'A Harder Push Goes Further',
          essentialQuestion: 'How can I control how far something goes?',
          summary:
            'A controlled comparison of push strength, with the results recorded as tape marks on the floor and then transferred onto paper as the child’s first bar of data.',
          durationMin: 25,
          standards: [
            { code: 'K-PS2-1', framework: 'NGSS', text: 'Plan and conduct an investigation to compare the effects of different strengths of pushes and pulls on the motion of an object.' },
          ],
          objectives: ['I can compare a gentle push with a hard push.', 'I can mark and compare where the object stopped.'],
          vocabulary: [
            { term: 'gentle', definition: 'Soft and light, not hard.' },
            { term: 'distance', definition: 'How far something travelled.' },
            { term: 'fair test', definition: 'Changing only one thing so you know what caused the difference.' },
          ],
          materials: ['A ball or toy car', 'Masking tape', 'A long clear floor'],
          prep: ['Tape a starting line and check the floor is level, or every result will lean one way.'],
          script: [],
          worksheet: { id: 'k-sci-u1-l2-ws', title: 'How Far Did It Go?', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Runs three trials from the same starting line.', 'States the relationship between push strength and distance.'],
            exitTicket: 'Ask how to make the car stop further away without changing the car.',
          },
          differentiation: {
            support: ['Compare only two extremes — the softest possible push and the hardest — and skip the middle.'],
            extension: ['Try three strengths and put the tape marks in order, then predict where a fourth would land.'],
          },
          misconceptions: [
            {
              misconception: 'A different result means somebody did it wrong.',
              looksLike: 'The child is upset when two identical pushes give slightly different distances.',
              correction: 'Repeat every trial three times and talk about how real results wobble. Scientists expect that.',
            },
          ],
          homeExtension: ['Push a laundry basket across the floor with different strengths and mark where it stops.'],
        },
        {
          id: 'k-sci-u1-l3',
          unitId: 'k-sci-u1',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Changing Which Way It Goes',
          essentialQuestion: 'Can I change the direction of something that is already moving?',
          summary:
            'Direction as the second variable. The child intercepts a rolling ball with a hand, a book or a ramp and describes what changed and what caused it.',
          durationMin: 25,
          standards: [
            { code: 'K-PS2-1', framework: 'NGSS', text: 'Plan and conduct an investigation to compare the effects of different directions of pushes and pulls on the motion of an object.' },
          ],
          objectives: ['I can change the direction of a moving object with a push.', 'I can say which way it went before and after.'],
          vocabulary: [
            { term: 'direction', definition: 'Which way something is going.' },
            { term: 'change', definition: 'To make something different from before.' },
          ],
          materials: ['A ball', 'A large hardback book', 'Masking tape'],
          prep: ['Tape a straight lane on the floor so a change of direction is visible against it.'],
          script: [],
          worksheet: { id: 'k-sci-u1-l3-ws', title: 'Which Way Did It Go?', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Changes a rolling ball’s direction on purpose and explains what caused it.'],
            exitTicket: 'Roll a ball past the child and ask them to send it to a named target without picking it up.',
          },
          differentiation: {
            support: ['Use a slow-rolling ball on carpet so there is time to react.'],
            extension: ['Try to make the ball turn a corner twice using two barriers.'],
          },
          misconceptions: [
            {
              misconception: 'Only a push that starts a movement counts as a force.',
              looksLike: 'The child says nothing pushed the ball when it bounced off the book.',
              correction: 'Ask what the ball hit. A barrier pushes back, and that push is why the ball turned.',
            },
          ],
          homeExtension: ['Play a rolling game where the ball has to reach a target by bouncing off a cushion.'],
        },
        {
          id: 'k-sci-u1-l4',
          unitId: 'k-sci-u1',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'The Ramp Test: Higher, Faster, Further',
          essentialQuestion: 'What happens if I make the ramp steeper?',
          summary:
            'A structured investigation with one variable — ramp height — and one measurement — how far the car travels. The first time the child changes something other than their own hand.',
          durationMin: 30,
          standards: [
            { code: 'K-PS2-1', framework: 'NGSS', text: 'Plan and conduct an investigation to compare the effects of different strengths or directions of pushes and pulls on the motion of an object.' },
            { code: 'K-PS2-2', framework: 'NGSS', text: 'Analyse data to determine if a design solution works as intended to change the speed or direction of an object.' },
          ],
          objectives: ['I can build a ramp at two different heights.', 'I can say which height sent the car further and show my evidence.'],
          vocabulary: [
            { term: 'ramp', definition: 'A slope something can roll down.' },
            { term: 'steep', definition: 'Tilted a lot.' },
            { term: 'evidence', definition: 'What you saw that shows you are right.' },
          ],
          materials: ['A plank, a baking tray or a stiff piece of card', 'Books to raise one end', 'A toy car', 'Tape'],
          prep: ['Test the ramp yourself once so you know the car actually reaches the floor at the low setting.'],
          script: [],
          worksheet: { id: 'k-sci-u1-l4-ws', title: 'Ramp Test', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Changes only the ramp height between trials.', 'Uses the tape marks as evidence for a claim.'],
            exitTicket: 'Ask which ramp height would win a distance competition and how they know.',
          },
          differentiation: {
            support: ['Use two dramatically different heights — one book against six — so the difference is unmissable.'],
            extension: ['Add a third height and ask the child to predict the result before testing.'],
          },
          misconceptions: [
            {
              misconception: 'Changing several things at once still tells you what caused the result.',
              looksLike: 'The child raises the ramp and also pushes the car, then claims the ramp did it.',
              correction: 'Ask which one caused it. When they cannot say, run it again changing only the height.',
            },
          ],
          homeExtension: ['Roll things down the stairs-side of a cushion or an ironing board set at different heights.'],
        },
        {
          id: 'k-sci-u1-l5',
          unitId: 'k-sci-u1',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Design a Way to Stop the Ball',
          essentialQuestion: 'Can I build something that changes what a rolling ball does?',
          summary:
            'The engineering close of the unit. The child designs a barrier or funnel from household materials, tests it three times, and uses the results to decide whether it worked.',
          durationMin: 30,
          standards: [
            { code: 'K-PS2-2', framework: 'NGSS', text: 'Analyse data to determine if a design solution works as intended to change the speed or direction of an object with a push or a pull.' },
          ],
          objectives: ['I can build something that changes how a ball moves.', 'I can test it more than once and say whether it worked.'],
          vocabulary: [
            { term: 'design', definition: 'A plan for something you are going to build.' },
            { term: 'test', definition: 'Trying it out to see if it works.' },
            { term: 'improve', definition: 'To make it work better after testing.' },
          ],
          materials: ['Cardboard, cups, books, tape', 'A ball or marble', 'A target cup'],
          prep: ['Put out fewer materials than you think you need. Constraint produces better designs than abundance.'],
          script: [],
          worksheet: { id: 'k-sci-u1-l5-ws', title: 'My Design', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Builds a working solution.', 'Tests three times and judges success from the results rather than from hope.'],
            exitTicket: 'Ask: did your design work? How do you know? Look for a count of successful trials.',
          },
          differentiation: {
            support: ['Offer two ready-made options and let the child choose and test rather than design from nothing.'],
            extension: ['Change the design after testing and explain what was improved and why.'],
          },
          misconceptions: [
            {
              misconception: 'A design that worked once works.',
              looksLike: 'The child declares success after a single lucky run.',
              correction: 'Insist on three tests and count the successes out loud. Two out of three is a genuinely useful answer.',
            },
          ],
          homeExtension: ['Build a marble run from kitchen roll tubes and test which layout gets the marble to the bucket most often.'],
        },
      ],
    },
    /* ============================================================ UNIT 2 */
    {
      id: 'k-sci-u2',
      gradeId: 'k',
      subjectId: 'science',
      sequence: 2,
      title: 'Sunlight and the Warmth of the World',
      bigIdea:
        'Sunlight does not only light things up. It heats whatever it lands on — and if you get between the sun and a surface, that surface stays cool.',
      description:
        'The phenomenon is one every child has already met and never explained: the slide in the playground is too hot to sit on at lunchtime and perfectly fine at nine in the morning. Children make repeated observations of sunlit and shaded surfaces, notice the pattern, and then use it — designing and building a shade structure and testing whether it actually keeps a place cooler. Structure and function is the crosscutting concept, and the unit ends in engineering because that is where the evidence gets used.',
      weeks: 4,
      standards: [
        { code: 'K-PS3-1', framework: 'NGSS', text: 'Make observations to determine the effect of sunlight on Earth’s surface.' },
        { code: 'K-PS3-2', framework: 'NGSS', text: 'Use tools and materials to design and build a structure that will reduce the warming effect of sunlight on an area.' },
      ],
      lessonTitles: [
        'Why Is the Slide So Hot?',
        'Sunny Spot, Shady Spot',
        'Does the Colour Make a Difference?',
        'Designing a Shade for a Toy',
        'Testing Our Shade: Did It Work?',
      ],
      performanceTask:
        'The Cool Spot Challenge: the child builds a shade structure over a small toy left outside, then compares how warm that toy feels after twenty minutes with an identical toy left in full sun, and reports whether the design worked.',
      lessons: [
        /* ---------------------------------------------------- L1 authored */
        {
          id: 'k-sci-u2-l1',
          unitId: 'k-sci-u2',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'Why Is the Slide So Hot?',
          essentialQuestion: 'What does sunlight actually do to the things it lands on?',
          summary:
            'Children put two identical objects in the sun and in the shade, wait, and then feel the difference with their own hands. The evidence is physical and immediate, and it converts a vague sense that "the sun is hot" into a specific, testable claim: sunlight warms the surfaces it lands on.',
          durationMin: 30,
          standards: [
            { code: 'K-PS3-1', framework: 'NGSS', text: 'Make observations to determine the effect of sunlight on Earth’s surface.' },
          ],
          objectives: [
            'I can find a sunny spot and a shady spot.',
            'I can feel and compare how warm two surfaces are.',
            'I can say that sunlight makes things warmer.',
          ],
          vocabulary: [
            { term: 'sunlight', definition: 'The light that comes from the sun.' },
            { term: 'shade', definition: 'A place where something blocks the sunlight.', example: 'It is cooler in the shade of the tree.' },
            { term: 'surface', definition: 'The top or outside of something, the part you can touch.' },
            { term: 'warmer', definition: 'Hotter than the other one.' },
            { term: 'observe', definition: 'To look, feel and notice carefully.' },
          ],
          materials: [
            'Two identical objects that will not be damaged outdoors — two stones, two metal spoons, two dark tiles',
            'A sunny day and somewhere shaded, or a bright window and a cupboard',
            'A timer or a clock',
            'The printed worksheet and a crayon',
            'A towel to sit on outside',
          ],
          prep: [
            'Do a dry run yourself an hour before: put the two objects out and check the sunny one actually gets noticeably warm. Metal and dark stone work; light plastic often does not.',
            'Choose a shady spot that will still be shaded in twenty minutes — the sun moves and a badly chosen spot will ruin the result.',
            'Warn the child that we do not touch anything metal that has been in the sun all day until an adult has tested it first.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Slide That Burns',
              minutes: 5,
              say: [
                'Have you ever gone down a slide in summer and it was so hot you had to jump off?',
                'Here is the strange bit. That same slide, first thing in the morning, is cold. Nobody turned it on. Nobody plugged it in.',
                'So what happened to it in between? What made it hot?',
                'You think it is the sun. Good — that is a proper idea. But how would we PROVE it?',
                'We are going to find out today with two stones and a bit of waiting.',
              ],
              do: [
                'Let the child offer a wrong answer without correcting it. "Lots of people slid on it" is an excellent hypothesis and worth taking seriously.',
                'Write their idea down in front of them. Recording a prediction before testing it is the habit being built.',
              ],
              studentDoes: ['Offers an explanation for why the slide gets hot and commits to it out loud.'],
              checks: [
                {
                  ask: 'What do you think makes the slide hot?',
                  lookFor: 'Any explanation at all. The quality does not matter yet; committing to one does.',
                  ifStuck: 'Offer two options: "Is it the sun, or is it all the children sliding on it?" A choice is easier than a blank.',
                },
              ],
              tip: 'Write the child’s prediction down and keep the paper. Coming back to it at the end — right or wrong — is the moment they learn what a prediction is for.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Setting Up a Fair Test',
              minutes: 6,
              say: [
                'Here are two stones. Feel them both. Are they the same temperature right now?',
                'Same. Good — that matters. If they started different, we would not know what caused anything.',
                'Now this one goes here, in the bright sunshine. And this one goes here, in the shade under the tree.',
                'Everything else about them is the same. Same stones, same day, same starting warmth. Only ONE thing is different: sunlight.',
                'Now the hardest part of science. We wait. Fifteen minutes. Let us go and do something else.',
              ],
              do: [
                'Have the child touch both objects before you place them and say out loud that they feel the same.',
                'Place them yourself so both are genuinely in full sun and full shade — a half-shaded object ruins the comparison.',
                'Set a timer where the child can see it and then genuinely leave.',
              ],
              studentDoes: ['Checks both objects start the same, helps place them, and states what the one difference is.'],
              checks: [
                {
                  ask: 'What is the only thing that is different between our two stones?',
                  lookFor: 'One is in the sun and one is in the shade.',
                  ifStuck: 'List everything that is the same, one at a time, and let the child spot the leftover.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Feel the Difference',
              minutes: 9,
              say: [
                'Timer is done. Before you touch anything — what do you predict?',
                'Now put one hand on each stone at the same time. Both hands, together.',
                'Tell me what you feel. Which one is warmer?',
                'The one in the sun. By a lot, or a little?',
                'Now go and find me two more places outside. One that will be warm and one that will be cool. Put your hand on the pavement in the sun. Now the pavement in the shade. Same thing?',
                'It is not just our stones, then. It is happening everywhere the sun lands.',
              ],
              do: [
                'Insist on both hands at once. Touching one and then the other gives a much weaker comparison.',
                'Take the test out into the world: pavement, car bonnet, grass, a wall. Four extra observations cost two minutes and turn one result into a pattern.',
                'Check anything metal yourself first.',
              ],
              studentDoes: ['Compares the two objects by touch, then repeats the comparison on real surfaces outdoors.'],
              checks: [
                {
                  ask: 'Which is warmer, and what made it warmer?',
                  lookFor: 'The sunny one, because the sunlight landed on it.',
                  ifStuck: 'Move the warm stone into the shade and the cool one into the sun, wait ten minutes and repeat. Swapping them is very convincing.',
                },
                {
                  ask: 'Was it the same on the pavement? And on the wall?',
                  lookFor: 'Recognition that the same thing happened in several places — this is the pattern, and the pattern is the point.',
                },
              ],
              tip: 'The move that makes this stick is testing five or six different surfaces rather than one. A single result is an anecdote; six is a pattern the child found themselves.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Recording What We Found',
              minutes: 7,
              say: [
                'Scientists write things down, so let us write ours down.',
                'On the first part, colour in the stone that was warmer and tick where it was sitting.',
                'On the next part there are three places. For each one, decide: will it be warm or cool? Circle your answer, and be ready to say why.',
                'Last, draw the two stones and where they were. Somebody looking at your page should be able to work out what we did.',
              ],
              do: [
                'Read every picture aloud before the child decides. This is a reasoning task, not a picture-naming test.',
                'Ask "why?" after each answer and accept "because the sun is on it" as a complete kindergarten explanation.',
              ],
              studentDoes: ['Records the result, then applies the pattern to three new situations.'],
              checks: [
                { ask: 'Why did you circle cool for that one?', lookFor: 'Because something is blocking the sun / it is in the shade.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Back to the Prediction',
              minutes: 3,
              say: [
                'Remember what you said at the start about the slide? Let us look at it again.',
                'Were you right? What do you think now?',
                'Sunlight makes things warmer. That is our finding, and you have got the evidence in your own hands.',
                'Next time we are going to try to beat the sun. We are going to build something that keeps a spot cool.',
              ],
              do: ['Physically produce the paper with the original prediction on it.'],
              studentDoes: ['Compares their prediction with the evidence and states the finding.'],
              checks: [{ ask: 'What does sunlight do to things it lands on?', lookFor: 'Makes them warmer or hotter.' }],
            },
          ],
          worksheet: {
            id: 'k-sci-u2-l1-ws',
            title: 'Sun, Shade and Warmth',
            style: 'flat-vector',
            prepNotes:
              'Do the outdoor test before this page — the worksheet records a result, it does not replace one. Read out what each picture shows before your child answers, and after every answer ask why. On a cloudy week you can run the whole investigation with a bright window and a closed cupboard, though the effect is smaller and the wait is longer.',
            sections: [
              {
                id: 's1',
                title: 'What We Found Out',
                directions: 'Here are our two stones. Colour in the one that felt WARMER when you touched it.',
                layout: 'split',
                images: [
                  {
                    id: 'img-stone-in-sun',
                    slot: 'Our stone in the sunny spot',
                    purpose:
                      'Records one half of the comparison in a form the child can point at while explaining. The sharp cast shadow is the visual evidence that this stone is in direct sunlight, which is what makes the picture usable as data rather than decoration.',
                    subject: 'a single plain grey rounded stone sitting on bare ground in bright direct sunlight, casting one sharp dark shadow to one side',
                    count: 1,
                    composition: 'the stone centred in the frame on plain light ground, one crisp hard-edged shadow extending to the right, bright even lighting across the whole scene, no other objects',
                    mustInclude: [
                      'exactly one stone',
                      'one sharp hard-edged shadow beside the stone showing direct sunlight',
                      'bright, evenly lit ground with no overhead shade',
                    ],
                    mustAvoid: ['any words, numbers or labels', 'a sun drawn in the frame', 'a second stone', 'trees, buildings or dappled shade falling anywhere in the picture'],
                    aspect: '1:1',
                    altText: 'A grey stone in bright sunlight casting a sharp shadow',
                  },
                  {
                    id: 'img-stone-in-shade',
                    slot: 'Our stone in the shady spot',
                    purpose:
                      'The matching half. It must be the same stone in the same style so that the only visible difference is the light, exactly as in the real investigation — anything else the child notices becomes a rival explanation.',
                    subject: 'a single plain grey rounded stone identical to the sunlit one, sitting on bare ground fully inside a large soft shadow cast by something out of frame, with no shadow of its own',
                    count: 1,
                    composition: 'the stone centred in the frame on plain ground, the whole area evenly darker and cooler in tone, no sharp cast shadow from the stone itself, no other objects',
                    mustInclude: [
                      'exactly one stone, identical in size, shape and colour to the sunlit stone',
                      'the entire ground area clearly and evenly shaded',
                      'no sharp cast shadow from the stone, because it is not in direct light',
                    ],
                    mustAvoid: ['any words, numbers or labels', 'a patch of bright sunlight anywhere in the frame', 'a different stone shape or colour', 'a tree or object drawn in frame that would add a second variable'],
                    aspect: '1:1',
                    altText: 'An identical grey stone sitting in shade with no shadow of its own',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Warm or Cool?',
                directions: 'Look at each place. Will it feel WARM or COOL to touch? Circle your answer, then tell someone why you think so.',
                layout: 'grid',
                items: [
                  'Place 1 —  WARM   /   COOL',
                  'Place 2 —  WARM   /   COOL',
                  'Place 3 —  WARM   /   COOL',
                ],
                images: [
                  {
                    id: 'img-place-metal-slide-sun',
                    slot: 'Place 1 — a metal slide in full sun',
                    purpose:
                      'Brings the opening phenomenon back as an item the child can now answer with evidence. Getting this right is the clearest sign the investigation transferred to the situation that prompted it.',
                    subject: 'a small metal playground slide standing in open ground in bright direct sunlight, casting one sharp dark shadow across the ground beside it',
                    count: 1,
                    composition: 'side view of the whole slide centred in the frame, bright even lighting, one crisp hard-edged shadow on the ground, plain light background with no other equipment',
                    mustInclude: ['exactly one slide', 'a sharp cast shadow showing the slide is in direct sunlight', 'no shade falling on the slide itself'],
                    mustAvoid: ['any words, numbers or labels', 'children playing on the slide', 'trees or a roof over the slide', 'a full playground scene'],
                    aspect: '1:1',
                    altText: 'A metal slide standing in bright sunlight',
                  },
                  {
                    id: 'img-place-sandpit-umbrella',
                    slot: 'Place 2 — sand under a big umbrella',
                    purpose:
                      'The shaded case, and a preview of the engineering lesson to come. A child who circles COOL and says "because the umbrella is blocking it" has already grasped the design principle of the shade structure.',
                    subject: 'a small square sandpit of pale sand entirely covered by the shadow of one large open parasol standing beside it',
                    count: 1,
                    composition: 'side view with the open parasol on the left and the sandpit beneath its shadow, the shaded area clearly darker in tone, bright ground visible only outside the shadow edge, plain background',
                    mustInclude: [
                      'exactly one open parasol',
                      'the whole sandpit clearly inside the parasol’s shadow',
                      'a visible boundary between the shaded ground and the brighter ground beyond it',
                    ],
                    mustAvoid: ['any words, numbers or labels', 'children, buckets or spades in the sandpit', 'the sandpit partly in sunlight', 'a beach or garden scene'],
                    aspect: '1:1',
                    altText: 'A sandpit shaded by a large open parasol',
                  },
                  {
                    id: 'img-place-dark-car-roof-sun',
                    slot: 'Place 3 — a dark car roof in the open',
                    purpose:
                      'A surface children have been warned about but rarely reasoned about. It is placed last because it also quietly seeds the next lesson on colour, without asking the child to handle that variable yet.',
                    subject: 'one plain dark-coloured car parked alone on open ground in bright direct sunlight, casting one sharp shadow beneath and beside it',
                    count: 1,
                    composition: 'side view of the whole car centred in the frame, bright even lighting on the roof and bonnet, one crisp hard-edged shadow on the ground, plain light background',
                    mustInclude: ['exactly one car', 'a clearly dark-coloured body and roof', 'a sharp cast shadow showing direct sunlight'],
                    mustAvoid: ['any words, numbers, number plate or badge lettering', 'trees, buildings or shade over the car', 'a second vehicle', 'people inside or beside the car'],
                    aspect: '1:1',
                    altText: 'A dark-coloured car parked in bright sunlight',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Draw Our Test',
                directions: 'Draw what we did today. Show both stones and show where each one was sitting. Then finish the sentence out loud: "Sunlight makes things …"',
                layout: 'full',
                writingLines: 2,
              },
            ],
            answerKey: [
              'Our two stones: the sunlit stone is coloured in. Any child who says "because the sun was on it" has the finding.',
              'Warm or cool: Place 1 WARM, Place 2 COOL, Place 3 WARM. The reason matters more than the circle — accept anything referring to sunlight landing on it or being blocked.',
              'Draw our test: look for two stones in two different places, one clearly sunny and one clearly shaded. Spelling and drawing quality are irrelevant.',
            ],
          },
          assessment: {
            successCriteria: [
              'Sets up a comparison where only the sunlight differs.',
              'Reports which surface was warmer, based on their own touch.',
              'Predicts warm or cool for a new surface and justifies it by referring to sunlight.',
            ],
            exitTicket:
              'Point at any two spots outside or by a window, one lit and one shaded, and ask which will be warmer and why. The "why" is the assessment; the "which" can be guessed.',
            rubric: [
              { level: 'emerging', descriptor: 'Reports which object felt warmer but attributes it to the object itself — "stones are warm" — rather than to the sunlight.' },
              { level: 'developing', descriptor: 'Links sunlight to warmth for the tested objects but does not yet apply the pattern confidently to new surfaces.' },
              { level: 'secure', descriptor: 'States the general pattern, predicts correctly for unfamiliar surfaces, and explains shade as something blocking the sunlight.' },
            ],
          },
          differentiation: {
            support: [
              'Use two objects with a dramatic difference — a dark metal tray and the same tray in deep shade. A big effect is easier to feel and easier to believe.',
              'Shorten the wait to five minutes and repeat it twice rather than waiting fifteen once.',
              'Give the comparison words as a pair every time: "warmer or cooler?" A forced choice is much easier than an open question.',
            ],
            extension: [
              'Add a simple thermometer and read the two temperatures rather than relying on touch.',
              'Test the same spot at three different times of day and notice that the shadow has moved.',
              'Ask what would happen on a cloudy day, then wait for one and find out.',
            ],
            language: [
              'Warm, warmer and warmest are a comparative set worth teaching together with hand gestures, because the child needs the comparative form to state the finding at all.',
              'Let the child answer by pointing at the warmer object before they have the words for it. The reasoning can be assessed without the vocabulary.',
            ],
          },
          misconceptions: [
            {
              misconception: 'The sun makes the air hot, and the air is what heats the slide.',
              looksLike: 'The child says the shaded stone should be just as warm because it is the same day and the same air.',
              correction: 'That is a genuinely good argument and it is why our test is worth doing. Put both stones side by side in the same air, one shaded by your hand, and let the result answer.',
            },
            {
              misconception: 'Shade is a cold thing that actively cools objects down.',
              looksLike: 'The child says the tree "made it cold".',
              correction: 'Reframe it as blocking: the tree stops the sunlight arriving, so the stone never gets warmed in the first place. Use your own hand as a shade to make the blocking visible.',
            },
            {
              misconception: 'Only some materials get warm in the sun, so the rule does not really apply.',
              looksLike: 'The child concludes that metal gets hot and nothing else does.',
              correction: 'Test five surfaces including grass, soil and a wall. Everything warms; some things warm faster, which is next lesson’s question.',
            },
          ],
          homeExtension: [
            'On the way to the car, touch the sunny side and the shaded side of the same wall and compare.',
            'Leave a cup of water in the sun and one in the shade all afternoon and compare them at teatime.',
            'Notice out loud where the shade is in your garden at breakfast and again at dinner, and talk about why it moved.',
          ],
          teacherNotes:
            'The three dimensions here are PS3.B as the core idea, making observations as the practice, and cause and effect as the crosscutting concept. Two practical honesties. First, this lesson needs the sun, and on a run of grey days a bright window and a dark cupboard will do but the effect is much weaker — it is worth waiting for a sunny afternoon. Second, do not push for a mechanism. Kindergarten children do not need radiant energy transfer; they need the reliable, evidence-backed observation that sunlight warms surfaces. The mechanism arrives in Year 4 and lands far better on this foundation.',
        },
        {
          id: 'k-sci-u2-l2',
          unitId: 'k-sci-u2',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Sunny Spot, Shady Spot',
          essentialQuestion: 'Where does the shade come from, and why does it move?',
          summary:
            'Shadows as blocked light. The child traces their own shadow in the morning and again in the afternoon and works out why it changed.',
          durationMin: 25,
          standards: [
            { code: 'K-PS3-1', framework: 'NGSS', text: 'Make observations to determine the effect of sunlight on Earth’s surface.' },
          ],
          objectives: ['I can explain that shade happens when something blocks the sunlight.', 'I can notice that shadows move during the day.'],
          vocabulary: [
            { term: 'shadow', definition: 'The dark shape where something blocks the light.' },
            { term: 'block', definition: 'To get in the way of something.' },
          ],
          materials: ['Chalk', 'A sunny outdoor space', 'A torch and a small toy for the indoor version'],
          prep: ['Choose a spot you can return to at the same place later in the day.'],
          script: [],
          worksheet: { id: 'k-sci-u2-l2-ws', title: 'Shadows', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Explains shade as blocked sunlight.', 'Notices that the shadow moved between two observations.'],
            exitTicket: 'Ask the child to make a shadow with their hand and explain what is happening.',
          },
          differentiation: {
            support: ['Use a torch indoors where the light source can be moved by hand.'],
            extension: ['Predict where the shadow will be after lunch, then check.'],
          },
          misconceptions: [
            {
              misconception: 'A shadow is a dark thing that belongs to the object.',
              looksLike: 'The child says the shadow is stuck to their feet and travels with them everywhere.',
              correction: 'Move the torch instead of the object. The shadow jumps, which shows it belongs to the light.',
            },
          ],
          homeExtension: ['Chalk round the child’s shadow at breakfast and stand in the same place at dinner.'],
        },
        {
          id: 'k-sci-u2-l3',
          unitId: 'k-sci-u2',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Does the Colour Make a Difference?',
          essentialQuestion: 'Do dark things get warmer in the sun than light things?',
          summary:
            'A second controlled comparison, this time changing the surface rather than the light. Two identical objects, one black and one white, left in the same sunlight.',
          durationMin: 25,
          standards: [
            { code: 'K-PS3-1', framework: 'NGSS', text: 'Make observations to determine the effect of sunlight on Earth’s surface.' },
          ],
          objectives: ['I can compare how warm a dark surface and a light surface get.', 'I can keep everything the same except the colour.'],
          vocabulary: [
            { term: 'compare', definition: 'To look at two things and find the difference.' },
            { term: 'material', definition: 'What something is made of.' },
          ],
          materials: ['Two identical sheets of paper or card, one black and one white', 'A sunny windowsill'],
          prep: ['Check both sheets start at the same temperature and lie flat in the same light.'],
          script: [],
          worksheet: { id: 'k-sci-u2-l3-ws', title: 'Dark or Light?', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Reports which colour felt warmer.', 'Identifies colour as the only thing that was different.'],
            exitTicket: 'Ask which T-shirt would be cooler on a hot day and why.',
          },
          differentiation: {
            support: ['Use black and white only. Intermediate colours produce differences too small to feel.'],
            extension: ['Add a shiny silver sheet and rank all three.'],
          },
          misconceptions: [
            {
              misconception: 'Colour changes how bright a thing is but cannot change how warm it is.',
              looksLike: 'The child predicts both sheets will be the same because they are the same paper.',
              correction: 'Take the prediction seriously, run the test, and let the hands settle it.',
            },
          ],
          homeExtension: ['Compare the dark and light cars in a car park by touching the bonnets, with permission.'],
        },
        {
          id: 'k-sci-u2-l4',
          unitId: 'k-sci-u2',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Designing a Shade for a Toy',
          essentialQuestion: 'Can I build something that keeps a spot cool?',
          summary:
            'The engineering design lesson. The child chooses materials, sketches a plan and builds a structure to shade a small area, before testing it in the next lesson.',
          durationMin: 30,
          standards: [
            { code: 'K-PS3-2', framework: 'NGSS', text: 'Use tools and materials to design and build a structure that will reduce the warming effect of sunlight on an area.' },
          ],
          objectives: ['I can choose materials that block sunlight.', 'I can draw my plan before I build it.'],
          vocabulary: [
            { term: 'structure', definition: 'Something you build.' },
            { term: 'block', definition: 'To stop the light getting through.' },
            { term: 'plan', definition: 'A drawing of what you are going to make.' },
          ],
          materials: ['Cardboard, foil, cloth, cling film, lolly sticks, tape', 'A small toy', 'Paper for the plan'],
          prep: ['Include one see-through material on purpose. Discovering that cling film is useless is a valuable result.'],
          script: [],
          worksheet: { id: 'k-sci-u2-l4-ws', title: 'My Shade Plan', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Chooses an opaque material and says why.', 'Produces a plan and then builds something that resembles it.'],
            exitTicket: 'Ask why they did not choose the cling film.',
          },
          differentiation: {
            support: ['Offer three materials rather than eight, and hold the structure while the child tapes.'],
            extension: ['Design a shade that stays useful as the sun moves across the sky.'],
          },
          misconceptions: [
            {
              misconception: 'Any covering makes shade.',
              looksLike: 'The child builds a beautiful roof out of clear plastic.',
              correction: 'Hold each material up to a torch before building. What you can see through, light gets through.',
            },
          ],
          homeExtension: ['Notice which things in your street are built to make shade — awnings, umbrellas, big trees.'],
        },
        {
          id: 'k-sci-u2-l5',
          unitId: 'k-sci-u2',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Testing Our Shade: Did It Work?',
          essentialQuestion: 'How do I know whether my design actually worked?',
          summary:
            'The test and the verdict. Two identical toys, one under the structure and one in the open, twenty minutes, and an honest answer either way.',
          durationMin: 30,
          standards: [
            { code: 'K-PS3-2', framework: 'NGSS', text: 'Use tools and materials to design and build a structure that will reduce the warming effect of sunlight on an area.' },
            { code: 'K-PS3-1', framework: 'NGSS', text: 'Make observations to determine the effect of sunlight on Earth’s surface.' },
          ],
          objectives: ['I can test my structure fairly.', 'I can say whether it worked and how I know.'],
          vocabulary: [
            { term: 'result', definition: 'What happened when you tested it.' },
            { term: 'evidence', definition: 'What you saw or felt that shows you are right.' },
          ],
          materials: ['The structure from lesson 4', 'Two identical objects', 'A timer'],
          prep: ['Place both objects at the same time or the comparison is worthless.'],
          script: [],
          worksheet: { id: 'k-sci-u2-l5-ws', title: 'Did It Work?', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Runs a fair comparison.', 'States a conclusion supported by what they felt.', 'Names one improvement.'],
            exitTicket: 'Ask: did your shade work? What is your evidence?',
          },
          differentiation: {
            support: ['Ask only the warmer-or-cooler question and skip the improvement.'],
            extension: ['Rebuild with the improvement and retest to see if it got better.'],
          },
          misconceptions: [
            {
              misconception: 'A design that did not work was a failure and a waste of time.',
              looksLike: 'The child is deflated when the toy under the shade is just as warm.',
              correction: 'Name it as a finding, not a failure. "Now you know cling film does not block sunlight, and nobody told you — you found out."',
            },
          ],
          homeExtension: ['Put the shade over a bowl of ice cubes and time how long they last compared with the sun.'],
        },
      ],
    },
    /* ============================================================ UNIT 3 */
    {
      id: 'k-sci-u3',
      gradeId: 'k',
      subjectId: 'science',
      sequence: 3,
      title: 'What Living Things Need',
      bigIdea:
        'Every living thing needs a few specific things to stay alive, and where it lives is not an accident — it is a place that supplies them.',
      description:
        'The unit opens with two identical seedlings, one on the windowsill and one shut in a cupboard, planted on day one and revisited every day for a fortnight. While they wait, children study what animals need and where they get it. The crosscutting concept is patterns: not "this plant needs water" but "every plant we looked at needed water", which is a different and much more powerful kind of claim. The unit closes with a model matching living things to the places that supply their needs.',
      weeks: 5,
      standards: [
        { code: 'K-LS1-1', framework: 'NGSS', text: 'Use observations to describe patterns of what plants and animals (including humans) need to survive.' },
        { code: 'K-ESS3-1', framework: 'NGSS', text: 'Use a model to represent the relationship between the needs of different plants or animals (including humans) and the places they live.' },
      ],
      lessonTitles: [
        'What Do Animals Eat?',
        'What Does a Plant Need to Stay Alive?',
        'Water for Everybody',
        'A Home That Gives You What You Need',
        'Matching Living Things to Their Places',
      ],
      performanceTask:
        'The Habitat Model: the child builds a shoebox or paper model of a place — pond, woodland, garden — and places three living things in it, explaining for each one what it gets from that place that keeps it alive.',
      lessons: [
        {
          id: 'k-sci-u3-l1',
          unitId: 'k-sci-u3',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'What Do Animals Eat?',
          essentialQuestion: 'What does an animal have to have to stay alive?',
          summary:
            'Food, water, air and shelter as the pattern shared across very different animals. Built by looking at four animals in turn and noticing what keeps recurring.',
          durationMin: 25,
          standards: [
            { code: 'K-LS1-1', framework: 'NGSS', text: 'Use observations to describe patterns of what plants and animals (including humans) need to survive.' },
          ],
          objectives: ['I can name what an animal needs to stay alive.', 'I can see that different animals need the same kinds of things.'],
          vocabulary: [
            { term: 'alive', definition: 'Living, growing and needing things.' },
            { term: 'survive', definition: 'To stay alive.' },
            { term: 'shelter', definition: 'A safe place to be.' },
          ],
          materials: ['Photographs or books showing four very different animals', 'Paper for a shared list'],
          prep: ['Choose four animals that look nothing alike — a fish, a bird, a worm and a dog — so the shared pattern is surprising.'],
          script: [],
          worksheet: { id: 'k-sci-u3-l1-ws', title: 'What Animals Need', style: 'realistic', sections: [] },
          assessment: {
            successCriteria: ['Names food, water and shelter as needs.', 'States that different animals share the same needs.'],
            exitTicket: 'Name an animal the child has not discussed and ask what it needs.',
          },
          differentiation: {
            support: ['Start with a pet or a familiar animal where the child already knows the routine of feeding it.'],
            extension: ['Ask what happens to an animal whose place stops supplying one of its needs.'],
          },
          misconceptions: [
            {
              misconception: 'Only animals that look like pets need looking after.',
              looksLike: 'The child says a worm does not need anything.',
              correction: 'Look closely at a worm in soil and ask where it gets its food, water and safety. Everything alive needs the same short list.',
            },
          ],
          homeExtension: ['Watch the birds in the garden for five minutes and work out where they are getting food and water.'],
        },

        /* ---------------------------------------------------- L2 authored */
        {
          id: 'k-sci-u3-l2',
          unitId: 'k-sci-u3',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 2,
          status: 'authored',
          title: 'What Does a Plant Need to Stay Alive?',
          essentialQuestion: 'What happens to a plant if we take one of its needs away?',
          summary:
            'A two-week investigation compressed into one lesson of setting up and one of concluding. Two identical seedlings, identical care, and exactly one difference: light. Children make daily observations and end with an evidence-based claim about what plants need — the first time in the year that a claim rests on data collected over time.',
          durationMin: 30,
          standards: [
            { code: 'K-LS1-1', framework: 'NGSS', text: 'Use observations to describe patterns of what plants and animals (including humans) need to survive.' },
          ],
          objectives: [
            'I can say what a plant needs to stay alive.',
            'I can set up a fair test where only one thing is different.',
            'I can look at two plants and describe what is different about them.',
          ],
          vocabulary: [
            { term: 'need', definition: 'Something you cannot live without.', example: 'Water is a need. Sweets are not.' },
            { term: 'seedling', definition: 'A very young plant that has just come up.' },
            { term: 'healthy', definition: 'Growing well and looking strong.' },
            { term: 'observe', definition: 'To look carefully and notice what has changed.' },
            { term: 'sunlight', definition: 'Light from the sun that plants use to make their food.' },
          ],
          materials: [
            'Two identical potted seedlings — bean, cress or grass, grown a fortnight in advance, or two identical supermarket herb pots',
            'A bright windowsill and a dark cupboard',
            'A small watering jug and a marked cup so both get exactly the same water',
            'The printed worksheet and crayons',
            'A camera or phone, optional but excellent for recording change over time',
          ],
          prep: [
            'Start the seedlings two weeks before this lesson, or buy two identical pots on the day. Two plants of visibly different sizes will wreck the comparison.',
            'Choose a cupboard that will actually stay closed and dark for two weeks and that nobody needs.',
            'Mark a fill line on a cup so the watering is genuinely identical rather than roughly identical.',
            'Read the whole lesson first: the conclusion happens in a fortnight, not today.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Two Plants, One Cupboard',
              minutes: 5,
              say: [
                'Here are two plants. Look at them really carefully. Are they the same?',
                'Same pot, same soil, same little green leaves, same height. As near to the same as I could get.',
                'Now here is what I am going to do, and you are going to think I am being mean. This one stays here on the windowsill. This one goes in the cupboard. In the dark. With the door shut.',
                'They will both get exactly the same water. Same amount, same day. Everything is the same for both of them except one thing.',
                'What do you think will happen? Say it out loud and I will write it down.',
              ],
              do: [
                'Hold the two pots side by side at the child’s eye level and let them inspect both.',
                'Write the prediction down verbatim and date it. You will need it in a fortnight.',
                'Let them object to the cupboard. The objection is a prediction in disguise.',
              ],
              studentDoes: ['Compares the two plants, predicts what will happen and commits to it out loud.'],
              checks: [
                {
                  ask: 'What do you think the cupboard plant will look like in two weeks?',
                  lookFor: 'Any specific prediction — smaller, dead, yellow, fine.',
                  ifStuck: 'Ask what would happen to them if they lived in a cupboard for two weeks. Children reason about themselves before they reason about plants.',
                },
              ],
              tip: 'Some children find this genuinely upsetting. It helps to say out loud that we will bring the cupboard plant back into the light afterwards and look after it, and then actually do that.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'One Thing Different',
              minutes: 6,
              say: [
                'Let us check I have set this up properly, because if I get it wrong we will not learn anything.',
                'Same kind of plant? Yes. Same size pot? Yes. Same soil? Yes.',
                'Same water? That is why I have this cup with a line on it. Both plants get filled to the line, same day, every time. No cheating and no extra kindness to the cupboard one.',
                'Same warmth? Roughly, yes — the cupboard is in the same room.',
                'So the ONLY thing different is light. Which means if something changes, we know what caused it. That is the whole trick.',
              ],
              do: [
                'Physically point at each thing as you check it. The checking ritual is the practice being taught.',
                'Fill the marked cup and water both plants now, in front of the child.',
              ],
              studentDoes: ['Checks each variable with you and names the one difference.'],
              checks: [
                {
                  ask: 'What is the only thing that is different between our two plants?',
                  lookFor: 'One gets light and one does not.',
                  ifStuck: 'Suggest an unfair version — "shall I give the sunny one extra water?" — and let them tell you why not.',
                },
                {
                  ask: 'Why does everything else have to be the same?',
                  lookFor: 'So we know what made the difference.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'What Do Plants Need? Sorting the List',
              minutes: 8,
              say: [
                'While our plants are working, let us think about the whole list. What does a plant need to stay alive?',
                'Here are some pictures. Some of these are things a plant really needs. Some are not.',
                'Water. Does a plant need water? Yes — what happens if you forget to water one?',
                'Sunlight. That is the one we are testing.',
                'A toy car. Does a plant need a toy car? No! Why not? Because it can live perfectly well without one.',
                'That is how you tell a NEED from a nice thing. A need is something you cannot live without.',
              ],
              do: [
                'Lay the picture cards out and let the child physically sort them into two piles.',
                'Include air and soil in the discussion even though they are hard to picture. Say them out loud and add them to the list.',
                'Push gently on one item — "are you sure a plant does not need soil?" — so sorting requires reasoning rather than sorting by familiarity.',
              ],
              studentDoes: ['Sorts pictures into needs and non-needs, and justifies each one.'],
              checks: [
                {
                  ask: 'Why is that one a need?',
                  lookFor: 'Because the plant would die without it / it cannot live without it.',
                  ifStuck: 'Ask the reverse: "What would happen if the plant never got any?"',
                },
                {
                  ask: 'Do animals need any of the same things?',
                  lookFor: 'Water and air at minimum. This is the pattern the whole unit is building.',
                },
              ],
              tip: 'The distinction between a need and a nice thing is doing real conceptual work and it transfers straight to the animals in the rest of the unit. Spend the time.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Our Observation Page',
              minutes: 8,
              say: [
                'Every few days we are going to come back to this page and draw what our plants look like.',
                'Today is day one. Draw the windowsill plant in the first box and the cupboard plant in the second.',
                'Draw exactly what you see. If they look the same today, then draw them the same — that is honest and it matters.',
                'Now the sorting part. Circle everything a plant really needs and cross out the things it does not.',
              ],
              do: [
                'Do the day-one drawing while both plants are in front of the child.',
                'Diary this. Put a repeating note in your phone for every third day or the investigation quietly dies in week one.',
                'Resist improving their drawing. An honest scruffy record beats a tidy invented one.',
              ],
              studentDoes: ['Draws both plants as they are on day one and sorts the needs.'],
              checks: [
                { ask: 'Are your two drawings the same or different today?', lookFor: 'The same — and an understanding that this is the starting point, not the result.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Into the Cupboard',
              minutes: 3,
              say: [
                'Right. Time to shut the door. You do it.',
                'Every three days we will open it, water them both, and draw what we see.',
                'And in two weeks we will look at what you predicted today and find out if you were right.',
                'Do not peek. Actually — do peek. Peeking is allowed in science, as long as you shut the door again.',
              ],
              do: ['Let the child close the cupboard door themselves and set the reminder together.'],
              studentDoes: ['Closes the cupboard and states when the next observation will be.'],
              checks: [{ ask: 'What are we going to do in three days?', lookFor: 'Water them both and draw them.' }],
            },
          ],
          worksheet: {
            id: 'k-sci-u3-l2-ws',
            title: 'Two Plants, One Difference',
            style: 'realistic',
            prepNotes:
              'This page runs for a fortnight, not an afternoon. Keep it somewhere visible and return to the drawing boxes every three days. The two reference pictures at the top show what a healthy and a light-starved seedling look like — do not show them to your child before their own final observation, or they will draw what they expect instead of what they see.',
            sections: [
              {
                id: 's1',
                title: 'Our Two Plants',
                directions: 'Draw what each plant looks like today. Write the day at the top. Draw exactly what you see, even if they look the same.',
                layout: 'split',
                writingLines: 1,
                images: [
                  {
                    id: 'img-plant-in-light',
                    slot: 'Reference — the windowsill plant after two weeks',
                    purpose:
                      'A reference for what a healthy outcome looks like, for the adult to compare against at the end of the investigation. Kept alongside the deprived plant so the contrast is a single visual judgement rather than a remembered one.',
                    subject: 'a single healthy bean seedling standing upright in a small plain plant pot, with a straight sturdy stem and four broad deep-green leaves',
                    count: 1,
                    composition: 'one pot centred in the frame, the whole plant from soil to top leaf visible, upright and symmetrical, generous white space, plain white background',
                    mustInclude: [
                      'exactly one plant in exactly one pot',
                      'a straight upright stem with four broad leaves of a strong deep green',
                      'leaves held out flat and open, not drooping',
                    ],
                    mustAvoid: ['any words, numbers or labels', 'a window, sill, sun or room background', 'flowers or fruit on the seedling', 'a second pot in the frame'],
                    aspect: '3:4',
                    altText: 'A healthy green bean seedling standing upright in a pot',
                  },
                  {
                    id: 'img-plant-in-dark',
                    slot: 'Reference — the cupboard plant after two weeks',
                    purpose:
                      'The contrasting reference. It must be recognisably the same kind of plant in the same kind of pot so that a child comparing the two attributes the difference to the light and not to the plants having been different all along.',
                    subject: 'a single pale, weak bean seedling in a small plain plant pot identical to the healthy one, with a long thin floppy stem leaning sideways and four small yellowish drooping leaves',
                    count: 1,
                    composition: 'one pot centred in the frame, the whole plant visible, stem clearly leaning and overlong, leaves hanging downward, generous white space, plain white background',
                    mustInclude: [
                      'exactly one plant in exactly one pot identical to the healthy plant’s pot',
                      'a pale yellow-green colour clearly different from healthy green',
                      'a long thin stem that leans over, with drooping leaves',
                    ],
                    mustAvoid: ['any words, numbers or labels', 'a cupboard, darkness or room background', 'a dead brown plant with no leaves at all, which overstates the result', 'a differently shaped pot'],
                    aspect: '3:4',
                    altText: 'A pale, leggy, drooping seedling in a pot',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Need or Not a Need?',
                directions: 'Look at each picture. Does a plant really NEED it to stay alive? Circle the ones it needs. Cross out the ones it does not.',
                layout: 'row',
                images: [
                  {
                    id: 'img-need-watering-can',
                    slot: 'Item 1 — water',
                    purpose:
                      'The need every child already knows, placed first so the sorting rule is established on an easy case before the harder ones arrive.',
                    subject: 'a single simple watering can tilted forward with a few water drops falling from its spout',
                    count: 1,
                    composition: 'one watering can centred in the frame in side view, spout pointing right and down, three or four simple falling drops beneath it, generous white space, plain white background',
                    mustInclude: ['exactly one watering can', 'clearly visible falling water drops so the picture reads as "water" rather than "container"'],
                    mustAvoid: ['any words, numbers or labels', 'a plant, pot or garden in the frame', 'a hosepipe or tap', 'a puddle or background scenery'],
                    aspect: '1:1',
                    altText: 'A watering can pouring water',
                  },
                  {
                    id: 'img-need-sunlight',
                    slot: 'Item 2 — sunlight',
                    purpose:
                      'The need currently under investigation. Its presence on the sorting page lets the child commit to an answer now and check it against their own evidence in a fortnight.',
                    subject: 'a single simple sun with a round centre and straight rays extending outwards',
                    count: 1,
                    composition: 'one sun centred in the frame with rays evenly spaced all the way round, generous white space, plain white background',
                    mustInclude: ['exactly one sun', 'clearly separated straight rays around a round centre so the picture reads unambiguously as sunlight'],
                    mustAvoid: ['any words, numbers or labels', 'a face on the sun', 'clouds, sky or landscape', 'a plant in the frame'],
                    aspect: '1:1',
                    altText: 'A sun with rays',
                  },
                  {
                    id: 'img-need-soil',
                    slot: 'Item 3 — soil',
                    purpose:
                      'A need children usually treat as scenery rather than as something the plant uses. Including it forces a real judgement instead of a recall of the two obvious answers.',
                    subject: 'a single small plain plant pot filled to the brim with dark crumbly soil and nothing growing in it',
                    count: 1,
                    composition: 'one pot centred in the frame in side view, soil surface clearly visible and textured, no plant of any kind, generous white space, plain white background',
                    mustInclude: ['exactly one pot', 'visible dark crumbly soil filling the pot', 'no seedling, shoot or seed showing above the soil'],
                    mustAvoid: ['any words, numbers or labels', 'a plant growing in the pot, which would give the answer away', 'a trowel, gloves or garden background', 'a second pot'],
                    aspect: '1:1',
                    altText: 'A plant pot filled with soil and nothing growing',
                  },
                  {
                    id: 'img-need-distractor-toy',
                    slot: 'Item 4 — a toy car (not a need)',
                    purpose:
                      'The distractor that makes the sorting task meaningful. A child who crosses it out and can say "because a plant can live without it" has understood the definition of a need rather than just recognised familiar garden objects.',
                    subject: 'a single simple side-view toy car with two visible wheels — an object a plant does not need in order to survive',
                    count: 1,
                    composition: 'one toy car centred in the frame in flat side view facing right, generous white space, plain white background',
                    mustInclude: ['exactly one toy car', 'a clearly toy-like simple shape so it is obviously not a piece of gardening equipment'],
                    mustAvoid: ['any words, numbers or lettering on the car', 'a road, garden or background scenery', 'plants or soil in the frame', 'a second vehicle'],
                    aspect: '1:1',
                    altText: 'A toy car',
                  },
                ],
              },
              {
                id: 's3',
                title: 'What I Think Will Happen',
                directions: 'Tell someone what you think the cupboard plant will look like in two weeks. Draw your prediction. We will come back and check.',
                layout: 'full',
                writingLines: 2,
              },
            ],
            answerKey: [
              'Our two plants: on day one both drawings should look the same. By day fourteen the windowsill plant should be green and upright and the cupboard plant pale, leggy and drooping.',
              'Need or not a need: circle the watering can, the sun and the soil. Cross out the toy car. Air is also a need and is worth mentioning even though it cannot be drawn.',
              'Prediction: anything specific. Keep it and compare it with the real result — a wrong prediction that was properly tested is a complete success.',
            ],
          },
          assessment: {
            successCriteria: [
              'Names water, light, air and soil as things plants need.',
              'Explains that only one thing was different between the two plants and why that matters.',
              'Describes the difference between the two plants after two weeks and links it to the missing light.',
            ],
            exitTicket:
              'Ask: what would happen if we put the windowsill plant in the cupboard too? A child who says "then we would not know what caused it" has understood the design of the test, which is a bigger result than knowing the answer.',
            rubric: [
              { level: 'emerging', descriptor: 'Names water as a plant need but treats sunlight as optional, and describes the two plants without connecting the difference to a cause.' },
              { level: 'developing', descriptor: 'Names the main needs and reports the difference between the plants, but does not yet explain why everything else had to be kept the same.' },
              { level: 'secure', descriptor: 'States the needs as a pattern true of plants generally, explains the fair test, and uses their own recorded observations as evidence for the conclusion.' },
            ],
          },
          differentiation: {
            support: [
              'Run a much faster version alongside: cress on damp kitchen roll shows a visible difference in four days rather than fourteen.',
              'Draw the observation together — you draw one plant, the child draws the other.',
              'Reduce the sorting cards to two, one obvious need and one obvious non-need.',
            ],
            extension: [
              'Add a third plant that gets light but no water, and work out which need matters more and over what timescale.',
              'Bring the cupboard plant back into the light and record whether it recovers.',
              'Ask what plants need that we cannot photograph, and introduce air as a real but invisible need.',
            ],
            language: [
              'Alive, dead, healthy and dying are a set of states worth teaching together with the pictures rather than one at a time.',
              'The word "need" is doing a lot of work here and its everyday use is much looser. Contrast "I need a biscuit" with "a plant needs water" explicitly and enjoy the joke.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Plants eat soil, and that is where their food comes from.',
              looksLike: 'The child says the cupboard plant will be fine because it still has all its soil.',
              correction: 'You do not need photosynthesis for this. Point out that the soil level never goes down, and that plants make their food using light — which is exactly why our cupboard plant is struggling.',
            },
            {
              misconception: 'Plants are not really alive, because they do not move or eat.',
              looksLike: 'The child sorts a plant with the rocks rather than the animals when asked what is living.',
              correction: 'Watch the investigation. Something that grows, needs water and can die is alive. Time-lapse footage of a seedling turning towards a window is worth two minutes of anyone’s day.',
            },
            {
              misconception: 'More of a good thing is always better — extra water will make a plant grow faster.',
              looksLike: 'The child wants to give the cupboard plant extra water to help it.',
              correction: 'Take the kindness seriously, then point out that it would break the test. If you have a spare pot, run the too-much-water version as its own investigation.',
            },
          ],
          homeExtension: [
            'Grow cress on a wet paper towel on the windowsill. It comes up in three days and needs no equipment at all.',
            'Put a houseplant next to a window and turn it a quarter turn each week, and watch it lean back towards the light.',
            'Let the child be responsible for watering one plant. Ownership does more for this idea than any worksheet.',
          ],
          teacherNotes:
            'The dimensions here are LS1.C as the core idea, planning and carrying out an investigation as the practice, and patterns as the crosscutting concept. The honest difficulty is time: a fortnight is a long stretch for a five-year-old and for a busy adult, and this investigation dies far more often from being forgotten than from being too hard. Set a recurring reminder and keep the observation page on the fridge. If you only have a week, use cress. And do bring the cupboard plant back into the light at the end — children remember that you kept your word about it far longer than they remember the conclusion.',
        },
        {
          id: 'k-sci-u3-l3',
          unitId: 'k-sci-u3',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'Water for Everybody',
          essentialQuestion: 'Does every living thing need water?',
          summary:
            'The pattern lesson. Children check water against plants, pets, wild animals and themselves, and discover one need that appears on every single list.',
          durationMin: 25,
          standards: [
            { code: 'K-LS1-1', framework: 'NGSS', text: 'Use observations to describe patterns of what plants and animals (including humans) need to survive.' },
          ],
          objectives: ['I can find the need that every living thing shares.', 'I can say where different animals get their water.'],
          vocabulary: [
            { term: 'pattern', definition: 'Something that keeps happening the same way.' },
            { term: 'living thing', definition: 'Anything that is alive — plants, animals and people.' },
          ],
          materials: ['A chart with a row per living thing', 'Pictures or books'],
          prep: ['Draw the chart in advance so the ticks accumulate visibly down the column.'],
          script: [],
          worksheet: { id: 'k-sci-u3-l3-ws', title: 'Everybody Needs Water', style: 'realistic', sections: [] },
          assessment: {
            successCriteria: ['States that all living things need water.', 'Names where two different animals get water.'],
            exitTicket: 'Name any living thing and ask whether it needs water and where it gets it.',
          },
          differentiation: {
            support: ['Use only three living things and tick the column together.'],
            extension: ['Find out about an animal that gets nearly all its water from its food.'],
          },
          misconceptions: [
            {
              misconception: 'Animals that live in water do not need to drink.',
              looksLike: 'The child says fish do not need water because they are already in it.',
              correction: 'Ask what happens to a fish out of water. Being surrounded by a need does not mean not having it.',
            },
          ],
          homeExtension: ['Put out a shallow dish of water for birds and watch who visits.'],
        },
        {
          id: 'k-sci-u3-l4',
          unitId: 'k-sci-u3',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'A Home That Gives You What You Need',
          essentialQuestion: 'Why does an animal live where it lives?',
          summary:
            'Habitat as a supplier of needs rather than a decorative backdrop. The child works out what a place gives an animal and what it would be missing somewhere else.',
          durationMin: 25,
          standards: [
            { code: 'K-ESS3-1', framework: 'NGSS', text: 'Use a model to represent the relationship between the needs of different plants or animals (including humans) and the places they live.' },
          ],
          objectives: ['I can say what an animal gets from the place it lives.', 'I can explain why an animal could not live somewhere else.'],
          vocabulary: [
            { term: 'habitat', definition: 'The place where a living thing lives and gets what it needs.' },
            { term: 'supply', definition: 'To give something that is needed.' },
          ],
          materials: ['Pictures of four habitats and four animals', 'Blu-tack or a felt board'],
          prep: ['Choose animals whose needs are obviously tied to their place — a fish, a camel, a polar bear, a worm.'],
          script: [],
          worksheet: { id: 'k-sci-u3-l4-ws', title: 'Why Do You Live There?', style: 'realistic', sections: [] },
          assessment: {
            successCriteria: ['Matches an animal to a habitat and names two needs the habitat supplies.'],
            exitTicket: 'Ask what a fish would be missing in a desert.',
          },
          differentiation: {
            support: ['Use two very different habitats so the mismatch is obvious.'],
            extension: ['Ask what humans need from where they live and whether we change the place to get it.'],
          },
          misconceptions: [
            {
              misconception: 'Animals live somewhere because they like it.',
              looksLike: 'The child says a polar bear lives in the snow because it likes snow.',
              correction: 'Shift the question from liking to needing: what does the snow give it that it cannot get elsewhere?',
            },
          ],
          homeExtension: ['Look for the smallest habitat you can find — under a stone, in a plant pot — and see who lives there.'],
        },
        {
          id: 'k-sci-u3-l5',
          unitId: 'k-sci-u3',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Matching Living Things to Their Places',
          essentialQuestion: 'Can I build a model that shows why this animal lives here?',
          summary:
            'The unit’s modelling task. The child builds a simple habitat model, places living things in it, and explains for each what the place supplies.',
          durationMin: 30,
          standards: [
            { code: 'K-ESS3-1', framework: 'NGSS', text: 'Use a model to represent the relationship between the needs of different plants or animals (including humans) and the places they live.' },
            { code: 'K-LS1-1', framework: 'NGSS', text: 'Use observations to describe patterns of what plants and animals need to survive.' },
          ],
          objectives: ['I can build a model of a place.', 'I can show where each living thing gets food, water and shelter.'],
          vocabulary: [
            { term: 'model', definition: 'A small version of a real thing that helps you explain it.' },
          ],
          materials: ['A shoebox or a large sheet of paper', 'Drawing and collage materials', 'Small toy animals if you have them'],
          prep: ['Decide on one habitat with the child before the materials come out, or the model becomes a craft project.'],
          script: [],
          worksheet: { id: 'k-sci-u3-l5-ws', title: 'My Habitat Model', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Builds a model containing food, water and shelter.', 'Explains what each living thing gets from the place.'],
            exitTicket: 'Point at one animal in the model and ask where it gets its water.',
          },
          differentiation: {
            support: ['Provide a pre-drawn background and let the child add the living things and the needs.'],
            extension: ['Add a second animal that competes for the same food and discuss what happens.'],
          },
          misconceptions: [
            {
              misconception: 'A model has to look realistic to be useful.',
              looksLike: 'The child worries their pond does not look like a real pond.',
              correction: 'A model is for explaining, not for looking pretty. Ask them to point at where the water is and the model is doing its job.',
            },
          ],
          homeExtension: ['Turn the model into a story about one day in the life of the animal that lives there.'],
        },
      ],
    },
    /* ============================================================ UNIT 4 */
    {
      id: 'k-sci-u4',
      gradeId: 'k',
      subjectId: 'science',
      sequence: 4,
      title: 'Watching the Weather',
      bigIdea:
        'Weather changes every day, but if you write it down for long enough the changes stop looking random and start showing patterns you can use.',
      description:
        'The phenomenon here is not a single dramatic event but an accumulation: one child, one chart, one observation a day, for a month. Children discover that a single day tells you nothing and thirty days tell you a great deal — which is the beginning of understanding data. The second half of the unit turns that idea outward to forecasting: why anyone would want to know tomorrow’s weather, and what people do with the warning when severe weather is coming.',
      weeks: 5,
      standards: [
        { code: 'K-ESS2-1', framework: 'NGSS', text: 'Use and share observations of local weather conditions to describe patterns over time.' },
        { code: 'K-ESS3-2', framework: 'NGSS', text: 'Ask questions to obtain information about the purpose of weather forecasting to prepare for, and respond to, severe weather.' },
      ],
      lessonTitles: [
        'What Is the Weather Doing Today?',
        'A Month of Weather: Building the Chart',
        'What Does Our Chart Tell Us?',
        'How Do People Know What Tomorrow Will Be Like?',
        'Getting Ready Before the Storm',
      ],
      performanceTask:
        'The Weather Report: after a month of recording, the child presents their chart to the family — how many sunny days, how many wet ones, what the pattern was — and then gives tomorrow’s forecast with a reason and a recommendation about what to wear.',
      lessons: [
        /* ---------------------------------------------------- L1 authored */
        {
          id: 'k-sci-u4-l1',
          unitId: 'k-sci-u4',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 1,
          status: 'authored',
          title: 'What Is the Weather Doing Today?',
          essentialQuestion: 'How do I describe the weather accurately enough that someone else could picture it?',
          summary:
            'Sets up the month-long weather record that the rest of the unit depends on. Children learn to observe several separate conditions — sky, precipitation, wind, temperature — rather than reducing the whole day to "nice" or "horrible", and they record day one on a chart they will keep filling in for four weeks.',
          durationMin: 25,
          standards: [
            { code: 'K-ESS2-1', framework: 'NGSS', text: 'Use and share observations of local weather conditions to describe patterns over time.' },
          ],
          objectives: [
            'I can look at the sky and say what the weather is doing.',
            'I can describe the weather in more than one way — sky, rain, wind and how warm it is.',
            'I can record today’s weather on our chart.',
          ],
          vocabulary: [
            { term: 'weather', definition: 'What the sky and the air are doing today.' },
            { term: 'observation', definition: 'Something you noticed by looking, listening or feeling.' },
            { term: 'record', definition: 'To write or draw something down so you can look at it later.' },
            { term: 'temperature', definition: 'How warm or cold it is.' },
            { term: 'condition', definition: 'One thing the weather is doing, like raining or blowing.' },
          ],
          materials: [
            'The printed worksheet with the blank weather chart',
            'Crayons',
            'A window you can see the sky from, or two minutes outside',
            'A ribbon or a strip of plastic bag tied to something outside as a wind indicator',
            'A jar left outside to catch rain, optional but satisfying',
          ],
          prep: [
            'Tie the ribbon outside before you start so the wind indicator is already working.',
            'Decide where the chart will live for the next month and stick it there today. A chart in a drawer is a chart that never gets filled in.',
            'Look at the sky yourself first so you can describe it if the child gets stuck.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Tell Me About Today Without Saying Nice',
              minutes: 4,
              say: [
                'I am going to phone Granny and tell her what the weather is like here. Listen to what I say.',
                '"Hello Granny. The weather is… nice." That is it. That is all I said.',
                'Does Granny know what to wear now? Does she know if she needs an umbrella?',
                'No! "Nice" tells her nothing at all. So help me. Look out of the window and tell me something ACTUALLY useful.',
                'Now that is a weather report. Clouds, no rain, a bit of wind. Granny can pack a bag with that.',
              ],
              do: [
                'Actually mime the phone call and deliver "nice" completely flatly.',
                'Let the child supply the useful details rather than listing them yourself.',
              ],
              studentDoes: ['Recognises that vague words are useless and offers specific observations.'],
              checks: [
                {
                  ask: 'Why was "nice" not good enough?',
                  lookFor: 'It does not tell you anything / everyone means something different by nice.',
                  ifStuck: 'Ask what they would wear if you only told them "nice", and then point out that they had to guess.',
                },
              ],
              tip: 'Vague-to-specific is the whole move of this lesson and it is worth being playfully unhelpful for a good minute before you let them fix it.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Four Things to Check',
              minutes: 6,
              say: [
                'Real weather watchers check the same four things every single day. Let us learn them.',
                'One: the SKY. Is it blue, is it grey, are there clouds, how many?',
                'Two: is anything FALLING? Rain, snow, hail, or nothing at all.',
                'Three: the WIND. Look at my ribbon outside. Is it hanging still, wobbling, or streaming out sideways?',
                'Four: how warm is it? Put your hand out. Warm, cool or properly cold?',
                'Sky, falling, wind, warmth. Four checks, every day, same order.',
              ],
              do: [
                'Go through all four right now, out loud, pointing at each thing.',
                'Use the ribbon rather than describing the wind. A physical indicator turns an invisible condition into an observation.',
              ],
              studentDoes: ['Performs all four checks with you and reports each one.'],
              checks: [
                {
                  ask: 'What are the four things we check?',
                  lookFor: 'Sky, falling, wind, warmth — in any wording.',
                  ifStuck: 'Count them on four fingers and repeat. Use the same four fingers every day for a week.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Your Weather Report',
              minutes: 7,
              say: [
                'Now you do the whole report and I will just listen. Go outside, or stand at the window if it is horrible.',
                'Start with the sky. What have you got?',
                'Anything falling?',
                'Check my ribbon. What is the wind doing?',
                'Hand out. Warm, cool or cold?',
                'Now put it all together into one report, as if I have just come back from somewhere and I have no idea.',
              ],
              do: [
                'Genuinely go outside if you can. A window filters out wind and temperature, which are half the report.',
                'Do not prompt with the four checks — let them remember the sequence, or notice they missed one.',
                'Ask a follow-up if they are vague: "grey — a bit grey or completely grey?"',
              ],
              studentDoes: ['Delivers a four-part weather report from their own observations.'],
              checks: [
                {
                  ask: 'Did you check all four?',
                  lookFor: 'The child self-audits and adds the missing one.',
                  ifStuck: 'Hold up the four fingers silently and let them work out which one has not been used.',
                },
                {
                  ask: 'How do you know it is windy? What did you see?',
                  lookFor: 'Reference to the ribbon, the trees or their own hair — evidence rather than assertion.',
                },
              ],
              tip: 'Push for evidence rather than labels. "Windy" is a conclusion; "the ribbon is sticking straight out" is an observation, and the difference between those two is most of what science is.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Filling In Day One',
              minutes: 6,
              say: [
                'This chart is going to be ours for a whole month. One box every day.',
                'Find today’s box. Now choose the picture that matches what you saw and copy it into the box.',
                'If it is a bit of two things — sunny AND windy — draw both. Real weather does not care about our boxes.',
                'That is day one done. Twenty-nine to go, and then we get to look at the whole thing at once and find out what our weather is actually like.',
              ],
              do: [
                'Have the child copy the symbol themselves rather than sticking one on. Drawing it makes them commit to a judgement.',
                'Put the chart on the fridge now, in front of them.',
                'Agree a time of day for tomorrow’s observation and keep it — same time matters more than the exact time.',
              ],
              studentDoes: ['Selects the matching weather symbol and records day one on the chart.'],
              checks: [
                { ask: 'Why did you pick that one?', lookFor: 'A reference to what they actually observed outside, not what they wish it were.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Tomorrow’s Guess',
              minutes: 2,
              say: [
                'Last thing. What do you think tomorrow will be like?',
                'Write your guess on the edge of the chart. Tomorrow we will find out if you were right.',
                'Nobody can be sure. That is exactly why people invented weather forecasts, and we will find out how those work later on.',
              ],
              do: ['Note the guess in a corner of the chart.'],
              studentDoes: ['Makes and records a prediction for tomorrow.'],
              checks: [{ ask: 'Why did you guess that?', lookFor: 'Any reasoning at all — the clouds, the season, yesterday.' }],
            },
          ],
          worksheet: {
            id: 'k-sci-u4-l1-ws',
            title: 'Our Weather Watch',
            style: 'flat-vector',
            prepNotes:
              'Print this one and put it somewhere permanent — the fridge, the back of a door — because it runs for a month. The four pictures at the top are the key your child copies from; the grid below is where the daily record goes. Same time every day matters more than which time you pick. If you miss days, leave the boxes blank rather than filling them in from memory. Gaps are honest data.',
            sections: [
              {
                id: 's1',
                title: 'Our Weather Key',
                directions: 'These are the four kinds of weather we will look for. Point at each one and say what it shows.',
                layout: 'row',
                images: [
                  {
                    id: 'img-weather-sunny',
                    slot: 'Key symbol 1 — sunny',
                    purpose:
                      'One of four reference symbols the child copies into the daily grid. The symbols must be visually distinct from one another at small size, because the whole month of data depends on a five-year-old being able to redraw them and tell them apart later.',
                    subject: 'a bright sun with straight rays in a completely clear sky with no clouds at all',
                    count: 1,
                    composition: 'one sun centred in a plain light sky filling the whole square frame, rays evenly spaced all round, nothing else in the frame',
                    mustInclude: ['exactly one sun', 'a completely cloudless sky', 'clearly separated straight rays so the symbol is legible when copied small'],
                    mustAvoid: ['any words, numbers or labels', 'clouds of any size', 'a face on the sun', 'ground, horizon, buildings or trees'],
                    aspect: '1:1',
                    altText: 'A sun in a clear sky',
                  },
                  {
                    id: 'img-weather-cloudy',
                    slot: 'Key symbol 2 — cloudy',
                    purpose:
                      'The symbol children most often confuse with rain, so it must show cloud and nothing else. Keeping cloudy and rainy visually separate is what makes the end-of-month tally meaningful.',
                    subject: 'three plain rounded grey clouds filling a sky with no sun and nothing falling from them',
                    count: 3,
                    composition: 'three clouds spread across a plain light sky filling the whole square frame, overlapping only slightly, no gaps of bright blue, nothing else in the frame',
                    mustInclude: ['exactly three clouds', 'no rain, snow or drops of any kind falling', 'no sun visible anywhere'],
                    mustAvoid: ['any words, numbers or labels', 'raindrops or streaks below the clouds', 'a sun peeking out from behind a cloud', 'ground, horizon or buildings'],
                    aspect: '1:1',
                    altText: 'Three grey clouds in a cloudy sky',
                  },
                  {
                    id: 'img-weather-rainy',
                    slot: 'Key symbol 3 — rainy',
                    purpose:
                      'Rain has to be unmistakably falling rather than merely threatened, so the child can distinguish a wet day from an overcast one when they tally the month.',
                    subject: 'one grey cloud with many short straight raindrops falling in parallel lines beneath it',
                    count: 1,
                    composition: 'one cloud across the upper half of a plain light square frame, with evenly spaced short vertical rain strokes filling the space below it down to the bottom edge',
                    mustInclude: ['exactly one cloud', 'clearly visible rain falling as separate parallel strokes', 'rain reaching the bottom of the frame'],
                    mustAvoid: ['any words, numbers or labels', 'a sun, rainbow or lightning', 'puddles, ground or umbrellas', 'a second cloud'],
                    aspect: '1:1',
                    altText: 'A grey cloud with rain falling from it',
                  },
                  {
                    id: 'img-weather-windy',
                    slot: 'Key symbol 4 — windy',
                    purpose:
                      'Wind is invisible, so the symbol has to show its effect rather than the thing itself. Teaching the child to record an effect as evidence of a cause is the point of including wind at all.',
                    subject: 'one bare-branched tree bending clearly to one side with several loose leaves streaming sideways away from it',
                    count: 1,
                    composition: 'one tree standing on the left of a plain light square frame, trunk and branches curving to the right, four or five separate leaves blowing rightwards across the open space, nothing else in the frame',
                    mustInclude: ['exactly one tree', 'the trunk and branches visibly bent to one side', 'several separate leaves blowing horizontally in the same direction'],
                    mustAvoid: ['any words, numbers or labels', 'a sun, clouds or rain', 'a straight upright tree', 'a garden, fence or background scenery'],
                    aspect: '1:1',
                    altText: 'A tree bending sideways with leaves blowing away',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Our Month of Weather',
                directions: 'Every day, find today’s box and draw the weather picture that matches what you saw outside. One box a day.',
                layout: 'grid',
                images: [
                  {
                    id: 'img-weather-blank-grid',
                    slot: 'The blank recording grid',
                    purpose:
                      'The data table for the whole unit. It has to be genuinely empty and evenly ruled, because the child draws into every cell and any pre-existing content would corrupt a month of records.',
                    subject: 'an empty grid of five equal square cells in a single horizontal row, drawn as a plain ruled table with a narrow blank strip above each cell',
                    count: 5,
                    composition:
                      'exactly five equal squares in one straight horizontal row sharing common vertical dividing lines, each square large enough to draw a symbol inside, a narrow empty band running across the top of the row, all lines straight and of even weight, every cell completely blank white',
                    mustInclude: ['exactly five square cells of identical size', 'every cell completely empty', 'straight even ruled lines with no gaps at the corners'],
                    mustAvoid: ['any words, numbers, day names or symbols inside or above the cells', 'a sixth cell', 'shading or colour fill in any cell', 'decorative borders'],
                    aspect: '4:1',
                    altText: 'A blank row of five empty square boxes for recording daily weather',
                    style: 'manipulative',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Today’s Report',
                directions: 'Do the four checks and tell someone your weather report. Then finish these out loud.',
                layout: 'column',
                writingLines: 2,
                items: [
                  'The sky is …',
                  'Falling from the sky: …',
                  'The wind is …',
                  'It feels …',
                ],
              },
            ],
            answerKey: [
              'Weather key: sunny, cloudy, rainy, windy. Any correct naming counts.',
              'Month grid: answers vary. Look for one entry per day and honest gaps where a day was missed.',
              'Today’s report: four separate observations rather than one summary word. "Nice" is not an acceptable answer to any of the four.',
            ],
          },
          assessment: {
            successCriteria: [
              'Describes the weather using at least three separate conditions rather than one summary word.',
              'Gives evidence for an invisible condition such as wind.',
              'Records the day accurately on the chart, choosing a symbol that matches what was observed.',
            ],
            exitTicket:
              'Ask the child to give a weather report to someone who cannot see outside. Three specific conditions is the pass mark. "Nice" is not.',
            rubric: [
              { level: 'emerging', descriptor: 'Uses one global word — nice, horrible, hot — and needs prompting for each separate condition.' },
              { level: 'developing', descriptor: 'Reports sky and rain reliably but forgets wind or temperature without a prompt.' },
              { level: 'secure', descriptor: 'Runs all four checks unprompted, gives observable evidence for each, and records the day accurately.' },
            ],
          },
          differentiation: {
            support: [
              'Start with two checks only — sky and rain — and add wind and warmth in week two.',
              'Use a choice of two symbols rather than four: "sunny or rainy?"',
              'Do the observation at exactly the same time each day. The routine carries children who cannot yet hold the sequence.',
            ],
            extension: [
              'Add a rain jar and record roughly how much water collected each day.',
              'Record the temperature with a simple thermometer alongside the symbol.',
              'Keep two charts, one for morning and one for afternoon, and notice how often they differ.',
            ],
            language: [
              'Weather words are highly specific to place and language. Ask which weather words exist in the home language that English lacks — most languages have at least one, and children enjoy having a word we do not.',
              'Sentence frames work well here: "The sky is ___. The wind is ___." Consistency across a month builds the structure without drilling it.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Weather and season are the same thing — winter means cold, so a cold day means it is winter.',
              looksLike: 'The child says it must be winter because they needed a coat in April.',
              correction: 'The month-long chart resolves this by itself. Point out cold days inside a warm month and let the chart carry the argument.',
            },
            {
              misconception: 'Wind cannot be observed because you cannot see it.',
              looksLike: 'The child says they cannot tell what the wind is doing.',
              correction: 'Point at the ribbon. You never see wind — you see what it does, and that is a perfectly good observation.',
            },
            {
              misconception: 'One day tells you what the weather here is like.',
              looksLike: 'After a wet day the child declares "it always rains here".',
              correction: 'This is exactly what the month of data is for. Say "let us see what the chart says at the end" and hold the question open.',
            },
          ],
          homeExtension: [
            'Give the weather report at breakfast every morning. Thirty seconds, and it becomes the child’s job.',
            'Compare your report with the forecast on the radio and see who was closer.',
            'Phone a relative who lives somewhere else and swap weather reports. The differences are more interesting than the reports.',
          ],
          teacherNotes:
            'The dimensions are ESS2.D as the core idea, analysing and interpreting data as the practice, and patterns as the crosscutting concept. Be realistic: this chart will have gaps, and that is fine — leave them blank rather than back-filling from memory, because a fabricated record teaches the wrong thing about data. The single most valuable habit in the whole lesson is pushing from label to evidence. When a child says "windy", asking "what did you see?" costs three seconds and is the difference between describing the world and asserting things about it.',
        },
        {
          id: 'k-sci-u4-l2',
          unitId: 'k-sci-u4',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'A Month of Weather: Building the Chart',
          essentialQuestion: 'What do we do with all these days once we have collected them?',
          summary:
            'The maintenance lesson, revisited weekly. Children keep the chart going and start noticing runs of similar days while the record is still being built.',
          durationMin: 20,
          standards: [
            { code: 'K-ESS2-1', framework: 'NGSS', text: 'Use and share observations of local weather conditions to describe patterns over time.' },
          ],
          objectives: ['I can record the weather every day.', 'I can notice when several days in a row are the same.'],
          vocabulary: [
            { term: 'chart', definition: 'A picture of information laid out in boxes.' },
            { term: 'in a row', definition: 'One after another with no gaps.' },
          ],
          materials: ['The weather chart from lesson 1', 'Crayons'],
          prep: ['Set a daily reminder. The whole unit depends on this one boring habit.'],
          script: [],
          worksheet: { id: 'k-sci-u4-l2-ws', title: 'Keeping the Record', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Records at least four days in a week without being reminded twice.'],
            exitTicket: 'Ask what the weather did three days ago and let them use the chart to answer.',
          },
          differentiation: {
            support: ['Do the recording together at the same moment each day rather than expecting independence.'],
            extension: ['Add a column for a second observation, such as what they needed to wear.'],
          },
          misconceptions: [
            {
              misconception: 'You can fill in the missed days later from memory.',
              looksLike: 'The child cheerfully invents last Tuesday.',
              correction: 'Leave gaps blank. Explain that made-up data is worse than missing data, and that real scientists have gaps too.',
            },
          ],
          homeExtension: ['Let the child remind YOU to do the chart. Ownership beats obedience.'],
        },
        {
          id: 'k-sci-u4-l3',
          unitId: 'k-sci-u4',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'What Does Our Chart Tell Us?',
          essentialQuestion: 'Now that we have a month, what patterns can we find?',
          summary:
            'Analysing the completed chart: counting each kind of day, finding the most and fewest, and making a statement about local weather supported by the data.',
          durationMin: 30,
          standards: [
            { code: 'K-ESS2-1', framework: 'NGSS', text: 'Use and share observations of local weather conditions to describe patterns over time.' },
          ],
          objectives: ['I can count how many days of each kind we had.', 'I can say something true about our weather using the chart.'],
          vocabulary: [
            { term: 'pattern', definition: 'Something that keeps happening.' },
            { term: 'most', definition: 'The biggest number of them.' },
            { term: 'data', definition: 'All the things we wrote down.' },
          ],
          materials: ['The completed month chart', 'Squared paper for a simple graph'],
          prep: ['Count the categories yourself first so you know what the chart actually says.'],
          script: [],
          worksheet: { id: 'k-sci-u4-l3-ws', title: 'What Our Month Shows', style: 'manipulative', sections: [] },
          assessment: {
            successCriteria: ['Counts each category accurately.', 'Makes one claim about local weather supported by the chart.'],
            exitTicket: 'Ask which kind of day we had most of and how they know.',
          },
          differentiation: {
            support: ['Count one category at a time and colour each one in as you go.'],
            extension: ['Compare this month with the same chart kept next month and describe what changed.'],
          },
          misconceptions: [
            {
              misconception: 'The most memorable day is the most common day.',
              looksLike: 'The child says it was mostly stormy because of one dramatic afternoon.',
              correction: 'Count. The chart outvotes the memory, and noticing that is the whole reason to keep one.',
            },
          ],
          homeExtension: ['Ask a grandparent what the weather is usually like where they live and compare with your chart.'],
        },
        {
          id: 'k-sci-u4-l4',
          unitId: 'k-sci-u4',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'How Do People Know What Tomorrow Will Be Like?',
          essentialQuestion: 'Why does anyone need to know the weather before it happens?',
          summary:
            'Forecasting as a job with a purpose. The child asks questions about who uses forecasts and what for — farmers, pilots, families deciding on coats — and watches a real forecast.',
          durationMin: 25,
          standards: [
            { code: 'K-ESS3-2', framework: 'NGSS', text: 'Ask questions to obtain information about the purpose of weather forecasting to prepare for, and respond to, severe weather.' },
          ],
          objectives: ['I can say why people want to know tomorrow’s weather.', 'I can ask a question about the forecast.'],
          vocabulary: [
            { term: 'forecast', definition: 'A guess about what the weather will do, made from lots of information.' },
            { term: 'prepare', definition: 'To get ready before something happens.' },
          ],
          materials: ['A weather forecast on the radio, television or a phone', 'Paper for questions'],
          prep: ['Have a forecast ready to play. Talking about forecasts without watching one is much weaker.'],
          script: [],
          worksheet: { id: 'k-sci-u4-l4-ws', title: 'Tomorrow’s Weather', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Names two people who need a forecast and why.', 'Asks at least one genuine question about forecasting.'],
            exitTicket: 'Ask who would be most upset by a wrong forecast and why.',
          },
          differentiation: {
            support: ['Focus on one familiar use: deciding what to wear tomorrow.'],
            extension: ['Track the forecast against what actually happened for a week and judge its accuracy.'],
          },
          misconceptions: [
            {
              misconception: 'A forecast is a promise, so a wrong forecast means someone lied.',
              looksLike: 'The child is indignant that the promised sun did not arrive.',
              correction: 'Explain that a forecast is a best guess from lots of information, and that being right most of the time is genuinely useful even though it is not certainty.',
            },
          ],
          homeExtension: ['Check the forecast together each evening and decide together what to wear tomorrow.'],
        },
        {
          id: 'k-sci-u4-l5',
          unitId: 'k-sci-u4',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Getting Ready Before the Storm',
          essentialQuestion: 'What do people do when they know dangerous weather is coming?',
          summary:
            'Severe weather preparation, handled calmly and practically. The emphasis is on what warnings let people do, and on the child’s own household plan, rather than on the drama of the storm.',
          durationMin: 25,
          standards: [
            { code: 'K-ESS3-2', framework: 'NGSS', text: 'Ask questions to obtain information about the purpose of weather forecasting to prepare for, and respond to, severe weather.' },
          ],
          objectives: ['I can name something people do to get ready for severe weather.', 'I know what my family would do.'],
          vocabulary: [
            { term: 'severe', definition: 'Much stronger and more dangerous than usual.' },
            { term: 'warning', definition: 'A message telling you something is coming.' },
            { term: 'safe', definition: 'Not in danger.' },
          ],
          materials: ['Paper for a family plan', 'A torch to include in the kit'],
          prep: ['Decide in advance which severe weather is realistic where you live and stick to that one.'],
          script: [],
          worksheet: { id: 'k-sci-u4-l5-ws', title: 'Our Weather Plan', style: 'flat-vector', sections: [] },
          assessment: {
            successCriteria: ['Names two preparations.', 'Explains that the warning is what makes preparing possible.'],
            exitTicket: 'Ask what our family would do if we heard a big storm was coming tonight.',
          },
          differentiation: {
            support: ['Keep it entirely concrete — torch, water, staying inside — and avoid discussing damage.'],
            extension: ['Make a real household kit and check what is missing.'],
          },
          misconceptions: [
            {
              misconception: 'Severe weather is coming for us personally.',
              looksLike: 'The child becomes anxious and asks repeatedly whether a storm is coming tonight.',
              correction: 'Keep the focus on preparation and on the adults whose job this is. Being ready is the antidote to worry, and the honest answer to "is it coming?" is usually "no, and we would know in advance".',
            },
          ],
          homeExtension: ['Find the torch together and agree where it lives. That is a genuine preparation and it takes two minutes.'],
        },
      ],
    },

    /* ============================================================ UNIT 5 */
    {
      id: 'k-sci-u5',
      gradeId: 'k',
      subjectId: 'science',
      sequence: 5,
      title: 'Changing the World Around Us',
      bigIdea:
        'Living things do not just live in a place — they change it. Squirrels plant trees by forgetting where they buried things, roots crack pavements, and people change everything.',
      description:
        'The unit begins outside, at a paving slab lifted by a tree root or a path worn across a lawn, and asks who did that. Children build an argument from evidence that plants and animals change their environment to meet their needs, and then turn the same lens on themselves: humans change the land, water and air more than anything else does, and some of those changes can be reduced. The unit ends with one concrete thing the household will actually do, which is the difference between a lesson about the environment and an engineering solution.',
      weeks: 4,
      standards: [
        { code: 'K-ESS2-2', framework: 'NGSS', text: 'Construct an argument supported by evidence for how plants and animals (including humans) can change the environment to meet their needs.' },
        { code: 'K-ESS3-3', framework: 'NGSS', text: 'Communicate solutions that will reduce the impact of humans on the land, water, air and/or other living things in the local environment.' },
      ],
      lessonTitles: [
        'Who Made That Hole?',
        'Roots That Crack the Path',
        'How People Change a Place',
        'Where Does Our Rubbish Go?',
        'Our Plan to Help',
      ],
      performanceTask:
        'The Household Pledge: the child identifies one way their family affects the local environment, proposes a change, presents the case to the household with the evidence they gathered, and tracks whether it actually happened for two weeks.',
      lessons: [
        {
          id: 'k-sci-u5-l1',
          unitId: 'k-sci-u5',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 1,
          status: 'outline',
          title: 'Who Made That Hole?',
          essentialQuestion: 'How can I tell that an animal has changed this place?',
          summary:
            'Evidence hunting outdoors. Burrows, nibbled leaves, worm casts, nests and worn paths are all changes an animal made on purpose to meet a need.',
          durationMin: 25,
          standards: [
            { code: 'K-ESS2-2', framework: 'NGSS', text: 'Construct an argument supported by evidence for how plants and animals can change the environment to meet their needs.' },
          ],
          objectives: ['I can find evidence that an animal changed a place.', 'I can say what need that change met.'],
          vocabulary: [
            { term: 'evidence', definition: 'Something you can see that shows what happened.' },
            { term: 'environment', definition: 'Everything around a living thing.' },
            { term: 'burrow', definition: 'A hole an animal digs to live in.' },
          ],
          materials: ['Outdoor space', 'A magnifying glass', 'A camera or a notebook'],
          prep: ['Walk the route yourself first and find two or three examples so the hunt cannot fail.'],
          script: [],
          worksheet: { id: 'k-sci-u5-l1-ws', title: 'Animal Evidence', style: 'realistic', sections: [] },
          assessment: {
            successCriteria: ['Finds at least one real example.', 'Links the change to a need such as food or shelter.'],
            exitTicket: 'Point at a nibbled leaf or a worm cast and ask who did it and why.',
          },
          differentiation: {
            support: ['Show one example and ask what made it, rather than sending them hunting.'],
            extension: ['Work out whether the change helped or harmed the other living things nearby.'],
          },
          misconceptions: [
            {
              misconception: 'Only people change places; animals just live in them.',
              looksLike: 'The child assumes a person dug the hole in the lawn.',
              correction: 'Look at the size and shape of the hole and ask what tool a person would have used. Some evidence is unmistakably not human.',
            },
          ],
          homeExtension: ['Look for evidence of animals in your street on the way to school — droppings, holes, chewed things.'],
        },
        {
          id: 'k-sci-u5-l2',
          unitId: 'k-sci-u5',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 2,
          status: 'outline',
          title: 'Roots That Crack the Path',
          essentialQuestion: 'Can a plant really break a pavement?',
          summary:
            'Plants as slow but powerful agents of change. Roots lifting slabs, moss splitting brickwork, and a bean grown in a sealed pot to feel the force for themselves.',
          durationMin: 25,
          standards: [
            { code: 'K-ESS2-2', framework: 'NGSS', text: 'Construct an argument supported by evidence for how plants and animals can change the environment to meet their needs.' },
          ],
          objectives: ['I can find a place where a plant changed something hard.', 'I can explain that the plant was reaching for what it needs.'],
          vocabulary: [
            { term: 'root', definition: 'The part of a plant that grows down into the soil.' },
            { term: 'crack', definition: 'A split in something hard.' },
          ],
          materials: ['A local pavement, wall or path with visible plant damage', 'A bean and a small tub for the demonstration'],
          prep: ['Find the cracked slab in advance. Searching in the rain with a five-year-old goes badly.'],
          script: [],
          worksheet: { id: 'k-sci-u5-l2-ws', title: 'Plants Change Things', style: 'realistic', sections: [] },
          assessment: {
            successCriteria: ['Identifies plant-caused change in the local environment.', 'Explains it as the plant getting what it needs.'],
            exitTicket: 'Show a weed growing through tarmac and ask what happened here.',
          },
          differentiation: {
            support: ['Use one dramatic example and talk about it rather than searching for several.'],
            extension: ['Ask how long the child thinks it took, and find out how old the tree is.'],
          },
          misconceptions: [
            {
              misconception: 'Plants are too soft and slow to break anything.',
              looksLike: 'The child insists the slab must have been broken by a car.',
              correction: 'Look underneath. The root is right there, and a slow push that never stops is stronger than a fast one.',
            },
          ],
          homeExtension: ['Count how many plants you can find growing out of walls and pavements on one walk.'],
        },
        {
          id: 'k-sci-u5-l3',
          unitId: 'k-sci-u5',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 3,
          status: 'outline',
          title: 'How People Change a Place',
          essentialQuestion: 'What have people changed about where we live?',
          summary:
            'Humans as the largest agent of environmental change, examined without moralising. Roads, houses, farms, parks and drains all began as somebody meeting a need.',
          durationMin: 25,
          standards: [
            { code: 'K-ESS2-2', framework: 'NGSS', text: 'Construct an argument supported by evidence for how plants and animals (including humans) can change the environment to meet their needs.' },
          ],
          objectives: ['I can name three things people built or changed near me.', 'I can say what need each one meets.'],
          vocabulary: [
            { term: 'built', definition: 'Made by people.' },
            { term: 'natural', definition: 'Not made by people.' },
          ],
          materials: ['A walk around the block, or photographs of the local area'],
          prep: ['Pick a route with a mix of built and natural features within five minutes of the door.'],
          script: [],
          worksheet: { id: 'k-sci-u5-l3-ws', title: 'People Changed This', style: 'realistic', sections: [] },
          assessment: {
            successCriteria: ['Sorts local features into built and natural.', 'Names the human need behind two built things.'],
            exitTicket: 'Point at anything out of the window and ask whether people made it and why.',
          },
          differentiation: {
            support: ['Sort just two things — a tree and a lamp post.'],
            extension: ['Ask what was here before the houses, and find an old photograph of the street.'],
          },
          misconceptions: [
            {
              misconception: 'Every change people make is bad.',
              looksLike: 'The child says building a park was bad for the environment.',
              correction: 'Keep the question neutral: what need did this meet, and what did it cost? Some human changes help other living things, and children should meet that complexity now.',
            },
          ],
          homeExtension: ['On a familiar walk, count built things and natural things and see which wins.'],
        },
        {
          id: 'k-sci-u5-l4',
          unitId: 'k-sci-u5',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 4,
          status: 'outline',
          title: 'Where Does Our Rubbish Go?',
          essentialQuestion: 'What happens to something after we throw it away?',
          summary:
            'Tracing the household bin outwards. The child audits one day of family rubbish, sorts it, and finds out that "away" is a real place somewhere.',
          durationMin: 30,
          standards: [
            { code: 'K-ESS3-3', framework: 'NGSS', text: 'Communicate solutions that will reduce the impact of humans on the land, water, air and other living things in the local environment.' },
          ],
          objectives: ['I can sort rubbish into groups.', 'I can say where our rubbish goes after the bin.'],
          vocabulary: [
            { term: 'rubbish', definition: 'Things we throw away.' },
            { term: 'recycle', definition: 'To turn something used into something new instead of throwing it away.' },
            { term: 'reduce', definition: 'To make less of something.' },
          ],
          materials: ['One day of clean household rubbish', 'Gloves', 'Sorting trays or newspaper'],
          prep: ['Wash anything that needs washing first, and remove anything sharp before the child arrives.'],
          script: [],
          worksheet: { id: 'k-sci-u5-l4-ws', title: 'Our Rubbish Audit', style: 'realistic', sections: [] },
          assessment: {
            successCriteria: ['Sorts rubbish into at least three categories.', 'Names one item the family could stop throwing away.'],
            exitTicket: 'Hold up one item and ask what could have happened to it instead of the bin.',
          },
          differentiation: {
            support: ['Sort into two piles only: things that can be used again and things that cannot.'],
            extension: ['Count each category and make a graph, then repeat the audit after a fortnight of changes.'],
          },
          misconceptions: [
            {
              misconception: 'Throwing something away makes it stop existing.',
              looksLike: 'The child says the rubbish "just goes".',
              correction: 'Follow it one step at a time — bin, lorry, landfill — and ask at each step where it is now. It never disappears; it only moves.',
            },
          ],
          homeExtension: ['Let the child be in charge of the recycling for a week and ask them to report on what they found.'],
        },
        {
          id: 'k-sci-u5-l5',
          unitId: 'k-sci-u5',
          gradeId: 'k',
          subjectId: 'science',
          sequence: 5,
          status: 'outline',
          title: 'Our Plan to Help',
          essentialQuestion: 'What is one real thing we could change?',
          summary:
            'The unit’s communicated solution. One change, chosen by the child, argued for with the evidence they collected, agreed by the household and tracked for a fortnight.',
          durationMin: 30,
          standards: [
            { code: 'K-ESS3-3', framework: 'NGSS', text: 'Communicate solutions that will reduce the impact of humans on the land, water, air and other living things in the local environment.' },
            { code: 'K-ESS2-2', framework: 'NGSS', text: 'Construct an argument supported by evidence for how humans can change the environment to meet their needs.' },
          ],
          objectives: ['I can choose one change our family could make.', 'I can explain why it would help and persuade someone.'],
          vocabulary: [
            { term: 'solution', definition: 'An idea that fixes a problem.' },
            { term: 'persuade', definition: 'To help someone agree with you.' },
            { term: 'impact', definition: 'The difference something makes.' },
          ],
          materials: ['Poster paper', 'Crayons', 'The rubbish audit results'],
          prep: ['Be genuinely willing to change the household habit the child chooses, or the lesson teaches the opposite of what it intends.'],
          script: [],
          worksheet: { id: 'k-sci-u5-l5-ws', title: 'Our Plan', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Proposes one specific, achievable change.', 'Gives a reason based on something they observed.', 'Communicates it to the household.'],
            exitTicket: 'Ask the child to tell one family member their plan and why it matters.',
          },
          differentiation: {
            support: ['Offer two options to choose between rather than an open question.'],
            extension: ['Track the change for a fortnight and report whether it worked.'],
          },
          misconceptions: [
            {
              misconception: 'Only enormous changes count.',
              looksLike: 'The child proposes stopping all the cars in the world and then loses interest.',
              correction: 'Redirect to something they can see happen this week. A small change that actually occurs teaches far more than a grand one that does not.',
            },
          ],
          homeExtension: ['Put the poster on the fridge and let the child tick off each day the family managed it.'],
        },
      ],
    },
  ],
}

export default course
