import type { SubjectCourse } from '../../types'

/**
 * Pre-K Social Studies (ages 4–5).
 *
 * Social studies at four is not about countries and dates. It is about the
 * child working out that other people are real, that families come in shapes
 * other than their own, that rules exist for reasons, and that the world is
 * bigger than the room they are standing in.
 *
 * Lessons run 15–25 minutes. Much of the content is emotionally close to home,
 * so the tone matters more here than in any other subject: every family in the
 * room is a real family, and the child in front of you belongs to one of them.
 */
const course: SubjectCourse = {
  gradeId: 'pk4',
  subjectId: 'social-studies',
  title: 'Pre-K Social Studies',
  overview:
    'A four-year-old is at the exact point of discovering that other people have their own insides. This course builds on that. It starts with the child and the people who love them, widens to the community and the people who keep it running, and then takes on the genuinely hard ideas: that a rule can be fair even when you do not like it, that you cannot have everything you want, that a map is the world seen from above, and that grown-ups were once children in a world that looked different. Nearly every lesson involves talking to a real person or handling a real object.',
  yearGoals: [
    'Describe your own family, and recognise that other families are put together differently and are equally families.',
    'Name people who help in your community and say what each of them does.',
    'Tell the difference between something you need and something you want, and make a choice between two things you cannot both have.',
    'Explain why a rule exists, and say what fair looks like when something has to be shared.',
    'Recognise a place drawn from above on a simple map, and describe what was different when grown-ups were little.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'pk4-ss-u1',
      gradeId: 'pk4',
      subjectId: 'social-studies',
      sequence: 1,
      title: 'Me and the People Who Love Me',
      bigIdea:
        'A family is the group of people who look after each other — and no two families are put together the same way.',
      description:
        'The child starts from themselves and works outward. They describe who they are and who is in their family, and then meet the central idea of the unit: that the shape of their own family is one of many, and that a household with one parent, or two mums, or a grandmother in charge, or six children, is just as much a family as any other. Handle this unit with care and with real specifics from the child’s own life.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
        { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child recognises self as a unique individual and respects differences in others.' },
        { code: 'ELOF-SS-Goal P-SS 3', framework: 'HeadStart-ELOF', text: 'Child identifies relationships and roles within their own family.' },
        { code: 'ELOF-SS-Goal P-SS 4', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of their family’s traditions, home language and culture.' },
      ],
      lessonTitles: [
        'All About Me',
        'Families Are Different, Families Are Alike',
        'The Jobs We Do at Home',
        'What My Family Loves to Do',
        'A Portrait of My Family',
      ],
      performanceTask:
        'The Family Book: the child makes a four-page book — who is in my family, what we do together, one thing only my family does, and a drawing of everybody — and reads it aloud to a family member.',
      lessons: [
        /* ---------------------------------------------------- L1 outline */
        {
          id: 'pk4-ss-u1-l1',
          unitId: 'pk4-ss-u1',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'All About Me',
          essentialQuestion: 'Who am I, and what makes me me?',
          summary:
            'The child describes themselves: name, age, what they look like, what they love, what they are scared of, what they are good at. Establishes that describing yourself is allowed and interesting, which the rest of the unit depends on.',
          durationMin: 20,
          standards: [{ code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' }],
          objectives: ['I can say my name and how old I am.', 'I can name two things I like and one thing I am good at.'],
          vocabulary: [
            { term: 'me', definition: 'The person I am, different from everybody else.' },
            { term: 'favourite', definition: 'The one you like the most.' },
          ],
          materials: ['A mirror', 'Paper and crayons in a range of skin-tone colours', 'A photograph of the child'],
          prep: ['Get hold of skin-tone crayons or pencils. A child colouring their own face with a peach crayon that is not their colour is a small avoidable harm.'],
          script: [],
          worksheet: { id: 'pk4-ss-u1-l1-ws', title: 'This Is Me', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['States name and age.', 'Names at least three things about themselves.'],
            exitTicket: 'Ask the child to tell you three things about themselves that you would not know just by looking.',
          },
          differentiation: {
            support: ['Offer choices rather than open questions: "Do you like running or drawing more?"'],
            extension: ['Ask what they would like to be good at that they are not good at yet.'],
            language: ['Let the child name their favourite things in whichever language those things live in for them.'],
          },
          misconceptions: [
            {
              misconception: 'Describing yourself means saying what you are best at compared to other people.',
              looksLike: 'The child says "I am the fastest" and looks for agreement.',
              correction: 'Redirect to preference rather than ranking: "Not who is fastest — what do YOU love doing?"',
            },
          ],
          homeExtension: ['Ask each family member their favourite colour at dinner and see whether any two match.'],
        },

        /* ---------------------------------------------------- L2 authored */
        {
          id: 'pk4-ss-u1-l2',
          unitId: 'pk4-ss-u1',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'authored',
          title: 'Families Are Different, Families Are Alike',
          essentialQuestion: 'If your family does not look like mine, is it still a family?',
          summary:
            'Four-year-olds generalise hard from a sample of one: whatever their household looks like is what a family is. This lesson widens that. Children look at several very different family groups, count the people, notice how different they are, and then find the thing all of them share — the people in them look after each other.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child recognises self as a unique individual and respects differences in others.' },
            { code: 'ELOF-SS-Goal P-SS 3', framework: 'HeadStart-ELOF', text: 'Child identifies relationships and roles within their own family and recognises that families vary.' },
            { code: 'ELOF-SS-Goal P-SS 4', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of their family’s traditions, home language and culture.' },
          ],
          objectives: [
            'I can say who is in my family.',
            'I can see that other families have different people in them.',
            'I can say the one thing all families have in common.',
          ],
          vocabulary: [
            { term: 'family', definition: 'The people who live with you or love you and look after you.', example: 'My family is me, my mum and my nan.' },
            { term: 'different', definition: 'Not the same.', example: 'Her family is different from mine.' },
            { term: 'look after', definition: 'To make sure somebody is safe, fed and cared for.', example: 'My grandad looks after me on Tuesdays.' },
          ],
          materials: [
            'A photograph of the child’s own family, or a drawing of it',
            'Two or three photographs of other real families you know, if you can get them — friends, neighbours, relatives',
            'The printed worksheet',
            'Crayons including a range of skin tones',
          ],
          prep: [
            'Know the child’s family situation before you start. If there has been a recent death, separation or change of carer, decide in advance how you will handle it, and be ready to name it warmly rather than steering round it.',
            'Have the child’s own family photograph on the table from the beginning. Starting from their own family makes everything after it safe.',
            'Rehearse your own one-sentence description of your family, so you go first.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Who Is in Your Family?',
              minutes: 4,
              say: [
                'I will go first. In my family there is me, and there is my brother, and there is my brother’s dog who thinks he is a person.',
                'That is my family. Now you. Who is in your family?',
                'Tell me all of them. Who lives in your house? Who looks after you?',
                'Anybody else? What about people who do not live in your house but who love you?',
                'That is a lot of people. Let us count them on your fingers. How many people are in your family?',
              ],
              do: [
                'Model first, always. Naming your own family gives the child the shape of the answer and permission to give it.',
                'Accept every answer without editing: pets, a cousin in another country, a childminder, a person who has died. All of it counts.',
                'Count the named people on the child’s fingers so the family becomes a countable group.',
              ],
              studentDoes: ['Names the members of their own family and counts them.'],
              checks: [
                {
                  ask: 'How many people are in your family?',
                  lookFor: 'A count that matches the names given.',
                  ifStuck: 'Go person by person: "Who makes your breakfast? Who puts you to bed? Who else?"',
                },
              ],
              tip: 'If a child names somebody who has died or somebody they do not see, do not skip past it. Say the name back gently — "and your grandad, yes" — and carry on. Skipping it teaches them the name is unmentionable.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Four Different Families',
              minutes: 5,
              say: [
                'Now I want to show you some other families. Look at this one.',
                'Count the people. Three. There is a nan and two children. That is their whole family.',
                'Here is another one. Two dads and a baby. Three people again, but a completely different three.',
                'This one has just two people in it — one mum and one child. Still a family.',
                'And look at this one. Count them. Six! That is a big family.',
                'So — do all families have the same number of people in them?',
                'No. Do they all have a mum and a dad? No. They are all different.',
              ],
              do: [
                'Point at each person as you count so the counting stays honest.',
                'Say every family description in exactly the same tone of voice. Any wobble on one of them teaches the child which one is the odd one out.',
                'Do not rank them, compare them to the child’s own, or say "some families are like this, but most are…".',
              ],
              studentDoes: ['Counts the people in each family group and describes who is in it.'],
              checks: [
                {
                  ask: 'Which of these families has the most people?',
                  lookFor: 'The family of six, identified by counting.',
                  ifStuck: 'Count two of them together, side by side, and compare the totals.',
                },
                {
                  ask: 'Is the one with only two people still a family?',
                  lookFor: 'Yes. Look for confidence, not just compliance.',
                  ifStuck: 'Ask the question that settles it: "Do those two look after each other? Then it is a family."',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Finding What Is the Same',
              minutes: 5,
              say: [
                'We have found lots of ways families are different. Now the harder question.',
                'What is the SAME about all of them? Look at all four pictures. What has every single one got?',
                'Hmm. Not the same number of people. Not the same grown-ups.',
                'Here is what I see. In every one of them, there is somebody who looks after somebody else. Every single one.',
                'That is what makes a family a family. Not how many. Not who. Just — they look after each other.',
                'Who looks after you in your family? And is there anybody YOU look after?',
              ],
              do: [
                'Lay all four pictures out at once so the comparison is visual and not from memory.',
                'Let the child offer wrong answers about what is the same — "they all have a child" is a good wrong answer worth exploring.',
                'End on the child’s own family so the general idea lands back home.',
              ],
              studentDoes: ['Compares the four family groups and identifies caring as the shared feature.'],
              checks: [
                {
                  ask: 'What do all these families have that is the same?',
                  lookFor: 'Somebody looking after somebody. Love, caring, helping — all count.',
                  ifStuck: 'Ask about one picture at a time: "Who looks after the baby in this one? And in this one?"',
                },
                {
                  ask: 'Do you look after anyone in your family?',
                  lookFor: 'Anything: a younger sibling, a pet, helping a grandparent. The point is that caring goes both ways.',
                },
              ],
              tip: 'The shared feature has to be something the child arrives at with you, not something you announce. Give it a full minute of genuine wondering before you offer it.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 4,
              say: [
                'On this page are the four families we looked at. Under each one, write or draw how many people are in it.',
                'Then find the family that has the most people and put a star on it.',
                'And in the last big box — that one is for your family. Draw everybody in it. Everybody, including you.',
                'Take your time on that one. You can use any colours you need for people’s skin and hair.',
              ],
              do: [
                'Put the skin-tone crayons within easy reach without making a speech about it.',
                'Let the child include the dog, the person who lives abroad, whoever they want. Their family is theirs to define.',
              ],
              studentDoes: ['Counts each pictured family, marks the largest, and draws their own family.'],
              checks: [
                { ask: 'Tell me who everybody is in your drawing.', lookFor: 'The child names each figure and their relationship.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'One Sentence',
              minutes: 2,
              say: [
                'Finish this sentence for me. A family is…',
                'People who look after each other. That is it. That is the whole thing.',
                'So when you meet somebody whose family is different from yours — more people, fewer people, two grandmas, whatever it is — what do you know about them?',
                'That it is still a family. Exactly right.',
              ],
              do: ['Say the sentence together once, slowly.'],
              studentDoes: ['Completes the sentence in their own words.'],
              checks: [
                { ask: 'What makes a group of people a family?', lookFor: 'They look after each other, they love each other, they live together.' },
              ],
            },
          ],
          worksheet: {
            id: 'pk4-ss-u1-l2-ws',
            title: 'All Kinds of Families',
            style: 'flat-vector',
            prepNotes:
              'Have skin-tone crayons or pencils out before you start. Print in colour if you possibly can — this is one page where the colour is doing pedagogical work rather than decoration. The final box is the child’s own family and should not be rushed or corrected.',
            sections: [
              {
                id: 's1',
                title: 'Count the People',
                directions: 'Look at each family. Count how many people are in it and write the number underneath.',
                layout: 'grid',
                items: ['Family A: ___ people', 'Family B: ___ people', 'Family C: ___ people', 'Family D: ___ people'],
                images: [
                  {
                    id: 'img-family-grandparent-3',
                    slot: 'Family A — a grandmother and two grandchildren',
                    purpose: 'Presents a grandparent-headed household as an ordinary family, which for many children in the room is their own arrangement and is rarely pictured in materials.',
                    subject: 'a warm simple group portrait of exactly three people standing together — an older woman with grey hair and glasses, and two young children of primary school age, one on each side of her',
                    count: 3,
                    composition: 'all three figures standing side by side facing forward, full bodies visible, evenly arranged and clearly separated so each person can be counted, drawn on a plain empty background at the same visual scale as the other three family portraits on this page',
                    mustInclude: [
                      'exactly three people, each fully visible and clearly countable',
                      'a warm friendly expression on every face',
                      'a medium-brown skin tone across the group, drawn respectfully and without caricature',
                      'the older woman drawn with dignity — upright, active and cheerful, not frail',
                    ],
                    mustAvoid: ['a fourth person or a partly cropped figure', 'figures overlapping so that counting becomes uncertain', 'a house, furniture or background scenery', 'any text, name or label', 'exaggerated or stereotyped features'],
                    aspect: '1:1',
                    altText: 'A grandmother standing with two grandchildren',
                  },
                  {
                    id: 'img-family-two-dads-3',
                    slot: 'Family B — two fathers and a baby',
                    purpose: 'Shows a two-father family with exactly the same warmth and visual weight as the others, so the page makes its point by construction rather than by commentary.',
                    subject: 'a warm simple group portrait of exactly three people — two adult men standing side by side, one of them holding a baby in his arms',
                    count: 3,
                    composition: 'the two men standing shoulder to shoulder facing forward with the baby held clearly visible in one man’s arms, all three faces plainly in view and countable, plain empty background, drawn at the same visual scale as the other family portraits on this page',
                    mustInclude: [
                      'exactly three people including the baby',
                      'the baby fully visible and obviously a separate person to be counted',
                      'two different skin tones between the two men — one light, one deep brown — drawn respectfully',
                      'warm relaxed friendly expressions',
                    ],
                    mustAvoid: ['a fourth person', 'the baby hidden, swaddled beyond recognition or facing away', 'a pram, house or background scenery', 'any text or label', 'exaggerated or stereotyped features'],
                    aspect: '1:1',
                    altText: 'Two fathers standing together, one holding a baby',
                  },
                  {
                    id: 'img-family-single-parent-2',
                    slot: 'Family C — one parent and one child',
                    purpose: 'The smallest family on the page. Two people is the case children most often refuse to call a family, so it needs to be here and it needs to look happy.',
                    subject: 'a warm simple portrait of exactly two people — an adult woman wearing a hijab standing beside one child of about four, holding hands',
                    count: 2,
                    composition: 'the two figures standing side by side facing forward and holding hands, both full bodies visible and clearly separate, plain empty background, drawn at the same visual scale as the other family portraits on this page',
                    mustInclude: [
                      'exactly two people',
                      'the hijab drawn accurately and respectfully as ordinary everyday clothing',
                      'a light-brown skin tone drawn respectfully',
                      'happy relaxed expressions on both faces',
                    ],
                    mustAvoid: ['a third person, including anyone in the background', 'any suggestion of sadness, absence or an empty space beside them', 'a house or background scenery', 'any text or label', 'exaggerated or stereotyped features'],
                    aspect: '1:1',
                    altText: 'A mother wearing a hijab holding her young child’s hand',
                  },
                  {
                    id: 'img-family-large-6',
                    slot: 'Family D — a large family of six',
                    purpose: 'The largest group, and the counting stretch of the page. Six figures also lets the picture carry a wheelchair user without it becoming the subject of the image.',
                    subject: 'a warm simple group portrait of exactly six people of mixed ages — two adults, three children and one older man seated in a wheelchair',
                    count: 6,
                    composition: 'all six arranged in a loose group with the seated figure at one end, every face clearly visible and every person clearly separate so all six can be counted, plain empty background, drawn at the same visual scale as the other family portraits on this page',
                    mustInclude: [
                      'exactly six people, each fully visible and countable',
                      'a range of skin tones across the group, all drawn respectfully',
                      'the wheelchair drawn as ordinary everyday equipment with its user smiling and part of the group',
                      'a range of ages from young child to older adult',
                    ],
                    mustAvoid: ['a seventh person or a cropped partial figure', 'figures overlapping so heavily that the count is unclear', 'the wheelchair user placed apart from or behind the group', 'a house, garden or background scenery', 'any text or label'],
                    aspect: '4:3',
                    altText: 'A family of six including a man in a wheelchair',
                  },
                ],
              },
              {
                id: 's2',
                title: 'The Biggest Family',
                directions: 'Which family has the most people? Put a star on it. Which has the fewest? Put a circle on it.',
                layout: 'full',
                items: ['Most people: family ___', 'Fewest people: family ___'],
              },
              {
                id: 's3',
                title: 'My Family',
                directions: 'Now draw your own family in this box. Draw everybody, and do not forget to put yourself in it.',
                layout: 'full',
                writingLines: 1,
                images: [
                  {
                    id: 'img-family-blank-frame',
                    slot: 'Blank family portrait frame',
                    purpose: 'A picture frame rather than a plain box, so the child’s drawing sits alongside the four printed families as one more portrait in the same set rather than as an exercise underneath them.',
                    subject: 'a single large empty decorative picture frame with a plain wide border and a completely blank interior',
                    composition: 'one rectangular frame centred and filling the section, a simple even border of uniform width, the entire inside blank white with no lines, marks or texture',
                    mustInclude: ['a completely empty interior with plenty of room to draw several figures', 'a single unbroken frame border'],
                    mustAvoid: ['any people or figures inside the frame', 'ruled lines inside the frame', 'hearts, flowers or decorative motifs on the border', 'any text or label'],
                    aspect: '4:3',
                    altText: 'An empty picture frame for drawing your own family in',
                  },
                ],
              },
            ],
            answerKey: [
              'Family A: 3 people. Family B: 3 people. Family C: 2 people. Family D: 6 people.',
              'Most people: family D. Fewest: family C.',
              'My family: no correct answer. Accept whoever the child includes, including pets and people who live elsewhere. Ask them to name each figure rather than correcting the drawing.',
            ],
          },
          assessment: {
            successCriteria: [
              'Names the members of their own family.',
              'Counts the people in each pictured family accurately.',
              'States that a family with a different shape is still a family.',
            ],
            exitTicket:
              'Describe a family the child has not seen today — "a boy who lives with his two aunties" — and ask whether that is a family. You are listening for an untroubled yes.',
            rubric: [
              { level: 'emerging', descriptor: 'Describes their own family but insists other arrangements are wrong, incomplete or "not a real family".' },
              { level: 'developing', descriptor: 'Accepts that families differ when shown examples, but defaults to their own structure as the standard when asked about a new case.' },
              { level: 'secure', descriptor: 'Describes their own family and several others without ranking them, and explains that what makes a family is people looking after each other.' },
            ],
          },
          differentiation: {
            support: [
              'Compare two families only — the smallest and the largest — before adding the others.',
              'Use real photographs of families you both know instead of the printed page. Real people are far more persuasive than drawings.',
              'If the child’s own family situation is currently painful, let them draw the family of a friend or a storybook character instead and come back to their own another day.',
            ],
            extension: [
              'Ask who is in the family of a favourite storybook character and whether it looks like theirs.',
              'Introduce the words for extended family — aunt, uncle, cousin, step-brother — and map out who is who.',
              'Ask the child to find a family in a picture book that is put together differently from any on the page.',
            ],
            language: [
              'Family words vary enormously between languages and cultures, and some have no direct English equivalent. Ask what the child calls each person and use that word.',
              'Sentence frame: "In my family there is ___ and ___ and me."',
            ],
          },
          misconceptions: [
            {
              misconception: 'A real family is a mum, a dad and two children, and anything else is missing something.',
              looksLike: 'The child looks at the two-person family and says "where is the dad?" or "that one is not finished".',
              correction: 'Do not argue with it. Show more examples, all described in exactly the same warm tone, and return to the question of who looks after whom. The tone does more work here than the explanation.',
            },
            {
              misconception: 'Families all live in one house, so anybody who lives somewhere else is not family.',
              looksLike: 'The child excludes a parent who lives elsewhere, or a grandparent abroad.',
              correction: 'Ask who loves them and who looks after them. Distance and family membership are separate things, and the child usually knows this once it is put as a question.',
            },
            {
              misconception: 'Other people’s families are odd or funny.',
              looksLike: 'The child laughs or points at one of the pictures.',
              correction: 'Name it calmly and move straight on: "That is his family, just like yours is yours." Do not make a lesson out of the moment; the ordinariness of your reaction is the correction.',
            },
          ],
          homeExtension: [
            'Look at family photographs together and name everybody, including the people the child has never met.',
            'When you visit a friend’s house, notice out loud and without comment who lives there.',
            'Ask a grandparent or older relative who was in their family when they were four. The answer is often surprisingly different.',
          ],
          teacherNotes:
            'The single most important variable in this lesson is your tone, and it has to be identical across all four families. Children read hesitation with total accuracy — a half-second pause before describing the two-dad family teaches more than anything you say afterwards. Practise the four descriptions out loud once before you teach it. Also, be ready for the child to disclose something you did not know about their own household; receive it warmly, do not probe, and carry on with the lesson.',
        },

        /* ---------------------------------------------------- L3 outline */
        {
          id: 'pk4-ss-u1-l3',
          unitId: 'pk4-ss-u1',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'The Jobs We Do at Home',
          essentialQuestion: 'What is my job in my family?',
          summary:
            'Every household runs on unnoticed work. The child audits who does what at home, discovers how much of it happens while they are asleep or out, and claims one job of their own.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 3', framework: 'HeadStart-ELOF', text: 'Child identifies relationships and roles within their own family.' },
            { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
          ],
          objectives: ['I can name three jobs that happen in my house.', 'I can say who usually does each one.'],
          vocabulary: [
            { term: 'job', definition: 'Something somebody has to do so things work.' },
            { term: 'help', definition: 'To do part of somebody else’s job with them.' },
          ],
          materials: ['Picture cards of household jobs', 'A blank chart with a column per family member'],
          prep: ['List the invisible jobs in advance — bins, bills, remembering the dentist — so you can raise the ones the child will never think of.'],
          script: [],
          worksheet: { id: 'pk4-ss-u1-l3-ws', title: 'Who Does What?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names at least four household jobs.', 'Chooses one job to take responsibility for.'],
            exitTicket: 'Ask who washes the clothes in their house, and what would happen if nobody did.',
          },
          differentiation: {
            support: ['Use photographs of your actual kitchen and the actual jobs in it.'],
            extension: ['Ask which jobs happen every day and which happen only sometimes.'],
            language: ['Act out each job before naming it — mime carries the meaning first.'],
          },
          misconceptions: [
            {
              misconception: 'Household jobs happen by themselves.',
              looksLike: 'The child says clean clothes just appear in the drawer.',
              correction: 'Walk the whole route of one item: from the floor, to the basket, to the machine, to the line, to the drawer. Let them do a step.',
            },
          ],
          homeExtension: ['Give the child one real job with a real consequence if it is not done.'],
        },

        /* ---------------------------------------------------- L4 outline */
        {
          id: 'pk4-ss-u1-l4',
          unitId: 'pk4-ss-u1',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'What My Family Loves to Do',
          essentialQuestion: 'What does my family do that makes us us?',
          summary:
            'Family culture in miniature: the food, the songs, the Saturday routine, the words only your family uses. Children discover that the ordinary things they do at home are not universal, which is delightful rather than alarming when it is framed well.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 4', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of their family’s traditions, home language and culture.' },
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child recognises self as a unique individual and respects differences in others.' },
          ],
          objectives: ['I can name something my family does together.', 'I can name a food my family eats a lot of.'],
          vocabulary: [
            { term: 'tradition', definition: 'Something a family does the same way every time.' },
            { term: 'special', definition: 'Different from ordinary, and important to us.' },
          ],
          materials: ['Paper and crayons', 'A family photograph of an ordinary day, not a holiday'],
          prep: ['Ask the family in advance for one small ordinary ritual you can name specifically — a Friday film, a particular breakfast.'],
          script: [],
          worksheet: { id: 'pk4-ss-u1-l4-ws', title: 'This Is What We Do', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Describes one family routine in detail.', 'Names one thing another family does differently.'],
            exitTicket: 'Ask what happens in their house on a Saturday morning.',
          },
          differentiation: {
            support: ['Start with food. Every child can name a meal their family eats.'],
            extension: ['Compare two families’ bedtime routines and find one thing that is the same.'],
            language: ['Home-language words for foods and celebrations are exactly the right words to use here. Ask for them and use them yourself.'],
          },
          misconceptions: [
            {
              misconception: 'Everybody does it the way we do it.',
              looksLike: 'The child is astonished that another family does not have the same Sunday routine.',
              correction: 'Collect three real examples of the same routine done differently. The variety is the point and it is genuinely interesting to them.',
            },
          ],
          homeExtension: ['Teach the child one song, saying or recipe that has been in the family a long time.'],
        },

        /* ---------------------------------------------------- L5 outline */
        {
          id: 'pk4-ss-u1-l5',
          unitId: 'pk4-ss-u1',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'A Portrait of My Family',
          essentialQuestion: 'How can I show my whole family in one picture?',
          summary:
            'The unit consolidation. A careful family portrait with correct skin tones, hair and heights, dictated labels for each person, and a presentation to a real audience.',
          durationMin: 25,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 3', framework: 'HeadStart-ELOF', text: 'Child identifies relationships and roles within their own family.' },
            { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
          ],
          objectives: ['I can draw everybody in my family.', 'I can tell somebody who each person is.'],
          vocabulary: [
            { term: 'portrait', definition: 'A picture of a person or a group of people.' },
            { term: 'oldest', definition: 'The one who has been alive the longest.' },
          ],
          materials: ['Good paper', 'Skin-tone crayons or pencils', 'A mirror', 'A frame or a wall space to display the finished picture'],
          prep: ['Plan where the finished portrait will hang before the child starts drawing. Knowing it will be displayed changes the effort entirely.'],
          script: [],
          worksheet: { id: 'pk4-ss-u1-l5-ws', title: 'My Family Portrait', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Includes every family member and themselves.', 'Names each figure and their relationship.'],
            exitTicket: 'Point at one figure in the drawing and ask who it is and one thing about them.',
          },
          differentiation: {
            support: ['Draw the heads yourself as circles and let the child fill in faces, hair and bodies.'],
            extension: ['Order the family from oldest to youngest and from tallest to shortest, and notice that the two orders differ.'],
            language: ['Scribe the child’s dictated caption in both their home language and English.'],
          },
          misconceptions: [
            {
              misconception: 'A good drawing has to look like a photograph.',
              looksLike: 'The child gives up and screws the paper up.',
              correction: 'Praise the information rather than the likeness: "You put six people in and you remembered the dog."',
            },
          ],
          homeExtension: ['Hang the portrait where visitors will see it and let the child give the tour.'],
        },
      ],
    },

    /* ============================================================ UNIT 2 */
    {
      id: 'pk4-ss-u2',
      gradeId: 'pk4',
      subjectId: 'social-studies',
      sequence: 2,
      title: 'My Community and the People In It',
      bigIdea:
        'A community is all the people who share a place — and it only works because lots of them have a job that helps everybody else.',
      description:
        'The circle widens from the household to the street, the shops, the school and the surgery. Children learn that the places they pass every day are worked in by people with specific jobs, and that those jobs interlock. The unit is at its best when it leaves the table: a walk past four buildings does more than any set of picture cards.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child explores the range of occupations people have and the roles of people in the community.' },
        { code: 'ELOF-SS-Goal P-SS 6', framework: 'HeadStart-ELOF', text: 'Child recognises that they are a member of a group and a community with shared responsibilities.' },
        { code: 'ELOF-SS-Goal P-SS 7', framework: 'HeadStart-ELOF', text: 'Child explores concepts of geography, describing familiar locations and the places around them.' },
      ],
      lessonTitles: [
        'What Is a Community?',
        'The Places on My Street',
        'Who Would You Call?',
        'The Tools Helpers Use',
        'Saying Thank You to a Helper',
      ],
      performanceTask:
        'The Helper Interview: the child prepares two questions, meets a real community worker — a shopkeeper, a postal worker, a nurse, a bin crew — asks the questions, and reports the answers back at home.',
      lessons: [
        {
          id: 'pk4-ss-u2-l1',
          unitId: 'pk4-ss-u2',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'What Is a Community?',
          essentialQuestion: 'Who else lives near me?',
          summary:
            'Establishes that the child belongs to several groups at once — a family, a street, a nursery, a town — and that a community is simply people sharing a place.',
          durationMin: 15,
          standards: [{ code: 'ELOF-SS-Goal P-SS 6', framework: 'HeadStart-ELOF', text: 'Child recognises that they are a member of a group and a community.' }],
          objectives: ['I can name three groups I belong to.', 'I can name two people who live near me.'],
          vocabulary: [
            { term: 'community', definition: 'All the people who live and work in the same place.' },
            { term: 'neighbour', definition: 'Somebody who lives near you.' },
          ],
          materials: ['A set of nested circles drawn on paper: me, my home, my street, my town', 'Photographs of local places'],
          prep: ['Draw the nested circles large. The child stands in the middle of them and the widening is felt physically.'],
          script: [],
          worksheet: { id: 'pk4-ss-u2-l1-ws', title: 'My Community', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names three groups they belong to.', 'Recognises two local places by photograph.'],
            exitTicket: 'Ask the child to name one person who is not in their family but who they see most weeks.',
          },
          differentiation: {
            support: ['Two circles only: my house and my street.'],
            extension: ['Add the wider circles: my town, my country, the world.'],
            language: ['Take photographs of local places and label them together in both languages.'],
          },
          misconceptions: [
            {
              misconception: 'A community means only the people you know by name.',
              looksLike: 'The child insists strangers on the street are not part of it.',
              correction: 'Count the people you pass on a short walk. All of them share this place, known or not.',
            },
          ],
          homeExtension: ['Learn the names of two neighbours this week and say hello using them.'],
        },
        {
          id: 'pk4-ss-u2-l2',
          unitId: 'pk4-ss-u2',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'The Places on My Street',
          essentialQuestion: 'What are the buildings near me for?',
          summary:
            'A walk with a purpose. The child photographs or draws four buildings and works out what happens inside each one and who is in there.',
          durationMin: 25,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 7', framework: 'HeadStart-ELOF', text: 'Child explores concepts of geography and describes familiar places.' },
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child explores the range of occupations people have.' },
          ],
          objectives: ['I can name four places near my home.', 'I can say what happens inside each one.'],
          vocabulary: [
            { term: 'shop', definition: 'A place where you buy things.' },
            { term: 'library', definition: 'A place where you borrow books.' },
          ],
          materials: ['A clipboard', 'A camera or phone', 'Comfortable shoes'],
          prep: ['Walk the route yourself first and pick four genuinely different buildings, not four shops.'],
          script: [],
          worksheet: { id: 'pk4-ss-u2-l2-ws', title: 'Places Near Me', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names four local places and their purpose.', 'Names one person who works in one of them.'],
            exitTicket: 'Ask where you would go to post a letter, and where you would go if you were poorly.',
          },
          differentiation: {
            support: ['Two places, visited properly, beats four glimpsed from a buggy.'],
            extension: ['Rank the places by how often the family uses them.'],
            language: ['Photograph the sign on each building and read it together.'],
          },
          misconceptions: [
            {
              misconception: 'Every building is somebody’s house.',
              looksLike: 'The child asks who sleeps in the library.',
              correction: 'Look in through the window at closing time. Nobody lives there — everyone goes home.',
            },
          ],
          homeExtension: ['On every trip out, name the places you pass and what each one is for.'],
        },

        /* ---------------------------------------------------- L3 authored */
        {
          id: 'pk4-ss-u2-l3',
          unitId: 'pk4-ss-u2',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'authored',
          title: 'Who Would You Call?',
          essentialQuestion: 'When something happens, who is the right person to help?',
          summary:
            'Community helpers taught as problem-solving rather than as a list of costumes. The child is given real situations — a burst pipe, a lost dog, a cut knee, a house on fire — and has to work out who to fetch. The lesson deliberately breaks the emergency-services-only framing that most helper units leave children with.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child explores the range of occupations people have and what people in those roles do.' },
            { code: 'ELOF-SS-Goal P-SS 6', framework: 'HeadStart-ELOF', text: 'Child recognises that they are a member of a community with shared responsibilities.' },
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child recognises self as a unique individual and respects differences in others.' },
          ],
          objectives: [
            'I can name four people who help in my community and say what they do.',
            'I can choose the right helper for a problem.',
            'I know that helpers are ordinary people doing a job.',
          ],
          vocabulary: [
            { term: 'helper', definition: 'Somebody whose job is to help other people in the community.', example: 'A nurse is a helper.' },
            { term: 'emergency', definition: 'Something dangerous happening right now that needs help straight away.', example: 'A fire is an emergency.' },
            { term: 'deliver', definition: 'To bring something to where it needs to go.', example: 'The postal worker delivers the letters.' },
          ],
          materials: [
            'Four helper picture cards, or the printed worksheet cut up',
            'A toy telephone, or any handset',
            'A few real props if you have them: a bandage, a letter, a library book, a hose or length of tubing',
            'The printed worksheet',
            'A crayon',
          ],
          prep: [
            'Find out whether anybody in the child’s family does one of these jobs, and if so, lead with that one.',
            'Cut the situation cards apart before you start, or write four situations on separate slips of paper.',
            'Decide how you will handle the emergency-services conversation. Some children find fire and ambulance talk frightening; keep the tone matter-of-fact and practical rather than dramatic.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Oh No, a Problem',
              minutes: 3,
              say: [
                'I have got a problem and I do not know what to do. Listen.',
                'I have written a letter to my auntie. She lives a long way away — much too far to walk. How does my letter get to her?',
                'Somebody has to take it. Who? Whose job is that?',
                'The postal worker. Exactly. Somebody I have probably never met is going to carry my letter across the whole country for me.',
                'That is what a helper is. Somebody whose job is to do something for other people.',
              ],
              do: [
                'Hold up an actual envelope, addressed and sealed. A real object beats a described one every time.',
                'Look genuinely stuck for a moment before the child answers. Being the one who solves it is the hook.',
              ],
              studentDoes: ['Identifies the postal worker as the person who solves the problem.'],
              checks: [
                {
                  ask: 'Who takes the letter?',
                  lookFor: 'The postal worker, the postman or postwoman, the post office.',
                  ifStuck: 'Ask where letters come out of at home — the letterbox — and who put them there.',
                },
              ],
              tip: 'Starting with the postal worker rather than a firefighter matters. Helper units that lead with sirens leave children thinking helping means emergencies, when almost all of it is quiet and daily.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Four Helpers and What They Do',
              minutes: 5,
              say: [
                'Here are four helpers. Let us find out what each one actually does all day.',
                'This is a firefighter. What do you think the job is? Yes — putting out fires. But also rescuing people, and coming when a cat is stuck up a tree.',
                'This one is a doctor. She looks at you when you are poorly and works out what is wrong.',
                'This is a postal worker. He brings the letters and the parcels, every day, in the rain.',
                'And this is a librarian. She looks after all the books and helps you find the one you want.',
                'Now — which of these four has a job that happens every single day, even when nothing has gone wrong?',
              ],
              do: [
                'Lay the four cards out in a row where the child can reach them.',
                'Say what each helper does in terms of actions, not uniforms. If you find yourself describing a hat, change tack.',
                'Ask the child which of these people they have actually seen in real life.',
              ],
              studentDoes: ['Names each of the four helpers and says one thing they do.'],
              checks: [
                {
                  ask: 'What does a librarian do?',
                  lookFor: 'Looks after books, helps you borrow one, reads stories.',
                  ifStuck: 'Ask what happens when you take a book out of the library and who you give it to.',
                },
                {
                  ask: 'Which of these helpers have you seen with your own eyes?',
                  lookFor: 'Any honest answer. Most children have met the postal worker and never a firefighter.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Who Would You Call?',
              minutes: 6,
              say: [
                'Now the game. I read you a problem, and you pick the helper. Point at the card.',
                'Problem one. Somebody has fallen over in the park and their arm is hurt badly. Who?',
                'The doctor. Good. Actually for that one we might call an ambulance, and the people in it are called paramedics — they are helpers too.',
                'Problem two. There is a parcel that needs to get to a house four streets away. Who?',
                'Problem three. You want to find a book about dinosaurs but you do not know where it is. Who?',
                'Problem four. Smoke is coming out of a window and there is a fire inside. Who?',
                'Last one, and this is the tricky one. Your friend is sad because they lost their toy. Who helps with that?',
              ],
              do: [
                'Read each situation slowly and let the child point rather than speak if that is easier.',
                'For the last question, accept and celebrate the answer "me". That is exactly the point being made.',
                'Keep the fire question brief and practical. Do not embellish it.',
              ],
              studentDoes: ['Matches each situation to an appropriate helper and explains the choice.'],
              checks: [
                {
                  ask: 'Why did you choose that helper?',
                  lookFor: 'A reason connected to what that person does, not to what they wear.',
                  ifStuck: 'Ask what the problem needs: "What has to happen here? Who can do that?"',
                },
                {
                  ask: 'Who helps when somebody is just sad?',
                  lookFor: 'A friend, a family member, me. This is the answer the whole lesson is aiming at.',
                  ifStuck: 'Ask what they do when their friend is sad. They already know; they just have not counted it as helping.',
                },
              ],
              tip: 'The sad-friend question is the most important one in the lesson. Helping is not a uniform, and a four-year-old is entirely capable of doing it.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 4,
              say: [
                'Here are our four helpers on the page. Underneath is a row of four tools.',
                'Draw a line from each helper to the tool they use for their job.',
                'Careful — think about what the tool is FOR, not just which picture is nearest.',
                'Then at the bottom, draw yourself as a helper. What would you help with?',
              ],
              do: [
                'Read each direction aloud and check the child knows what each tool is before they start matching.',
                'Leave the four helper cards on the table as a reference.',
              ],
              studentDoes: ['Matches helpers to tools and draws themselves in a helping role.'],
              checks: [
                { ask: 'What is this tool for?', lookFor: 'A function, not a name — "it listens to your heart" rather than just "stethoscope".' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'You Are a Helper Too',
              minutes: 2,
              say: [
                'One last thing. All of those helpers are just people. They go home at night and have their dinner like everybody else.',
                'And you can be a helper too. What is one thing you could do this week that helps somebody?',
                'That counts. That absolutely counts. You are part of this community as well.',
              ],
              do: ['Write the child’s chosen helping act on a slip of paper and stick it on the fridge.'],
              studentDoes: ['Names one specific helping action they will do.'],
              checks: [
                { ask: 'What will you do to help somebody this week?', lookFor: 'Something concrete and achievable rather than a grand promise.' },
              ],
            },
          ],
          worksheet: {
            id: 'pk4-ss-u2-l3-ws',
            title: 'Who Would You Call?',
            style: 'flat-vector',
            prepNotes:
              'You can cut the four helper pictures out and use them as cards for the guided section, then tape them back on for the matching task — or print two copies. The four helpers are deliberately drawn as a mixed group; do not comment on that to the child, just let it be ordinary.',
            sections: [
              {
                id: 's1',
                title: 'Four People Who Help',
                directions: 'Here are four helpers. Point to each one and tell me what their job is.',
                layout: 'grid',
                items: ['A: ______________', 'B: ______________', 'C: ______________', 'D: ______________'],
                images: [
                  {
                    id: 'img-helper-firefighter',
                    slot: 'Helper A — firefighter',
                    purpose: 'The helper children expect, placed first so the familiar case anchors the category before the quieter jobs are introduced.',
                    subject: 'a single friendly firefighter standing upright in full firefighting kit including helmet, facing forward with a calm confident expression',
                    count: 1,
                    composition: 'one full-length figure centred in the frame with clear space around it, plain empty background, drawn at the same visual scale as the other three helper pictures on this page',
                    mustInclude: [
                      'exactly one person',
                      'a woman firefighter with a deep brown skin tone, drawn respectfully and without caricature',
                      'a calm friendly expression rather than an alarmed one',
                      'clearly recognisable firefighting kit',
                    ],
                    mustAvoid: ['fire, smoke, flames or anything frightening', 'a fire engine or building in the background', 'a second person', 'any text, badge lettering or sign'],
                    aspect: '3:4',
                    altText: 'A firefighter standing in her kit',
                  },
                  {
                    id: 'img-helper-doctor',
                    slot: 'Helper B — doctor',
                    purpose: 'Pairs with the stethoscope in the matching task, and gives a chance to show a medical professional who is not the child’s default mental image of one.',
                    subject: 'a single friendly doctor standing upright wearing everyday clothes with a stethoscope round the neck, facing forward and smiling',
                    count: 1,
                    composition: 'one full-length figure centred with clear space around it, plain empty background, drawn at the same visual scale as the other three helper pictures on this page',
                    mustInclude: [
                      'exactly one person',
                      'a man doctor with an East Asian appearance, drawn respectfully and without caricature',
                      'a clearly visible stethoscope round the neck',
                      'a warm reassuring expression',
                    ],
                    mustAvoid: ['needles, blood or medical equipment that might worry a child', 'a hospital room or background', 'a second person', 'any text or name badge lettering'],
                    aspect: '3:4',
                    altText: 'A doctor standing with a stethoscope round his neck',
                  },
                  {
                    id: 'img-helper-postal',
                    slot: 'Helper C — postal worker',
                    purpose: 'The everyday helper the lesson opens with, and the one most children have actually seen. Being on the page at equal size to the firefighter is the whole argument.',
                    subject: 'a single friendly postal worker standing upright in a uniform with a shoulder bag, holding a small bundle of letters, facing forward and smiling',
                    count: 1,
                    composition: 'one full-length figure centred with clear space around it, plain empty background, drawn at the same visual scale as the other three helper pictures on this page',
                    mustInclude: [
                      'exactly one person',
                      'a woman postal worker with a light skin tone and short grey hair, drawn respectfully',
                      'a shoulder bag and a small bundle of letters clearly visible',
                    ],
                    mustAvoid: ['a van, street or houses in the background', 'writing or addresses visible on the letters', 'a second person', 'any text or logo on the uniform'],
                    aspect: '3:4',
                    altText: 'A postal worker holding a bundle of letters',
                  },
                  {
                    id: 'img-helper-librarian',
                    slot: 'Helper D — librarian',
                    purpose: 'The quietest job on the page, included because it makes the point that helping does not require a uniform or an emergency.',
                    subject: 'a single friendly librarian standing upright in everyday clothes holding a stack of three books, facing forward and smiling',
                    count: 1,
                    composition: 'one full-length figure centred with clear space around it, plain empty background, drawn at the same visual scale as the other three helper pictures on this page',
                    mustInclude: [
                      'exactly one person',
                      'a man librarian who uses a wheelchair, drawn as an ordinary working adult with the chair as unremarkable everyday equipment',
                      'a medium-brown skin tone, drawn respectfully',
                      'exactly three books held in a neat stack',
                    ],
                    mustAvoid: ['bookshelves or a library interior in the background', 'titles or lettering on the book covers', 'a second person', 'any framing that draws attention to the wheelchair as unusual'],
                    aspect: '3:4',
                    altText: 'A librarian in a wheelchair holding three books',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Match the Tool to the Helper',
                directions: 'Each helper needs one of these to do their job. Draw a line from each helper up there to the right tool down here.',
                layout: 'row',
                images: [
                  {
                    id: 'img-helper-tools-4',
                    slot: 'Four tools in a row',
                    purpose: 'Forces the child to reason from what the tool does rather than from what the helper wears, which is the difference between knowing the job and recognising the costume.',
                    subject: 'a horizontal row of four separate objects — a coiled fire hose with a nozzle, a stethoscope, a bundle of envelopes tied with string, and a library date stamp',
                    count: 4,
                    composition: 'a single straight horizontal row, four objects evenly spaced with wide white gaps between them, all drawn at roughly the same overall size, none touching or overlapping',
                    mustInclude: ['exactly four objects', 'each object clearly recognisable in isolation', 'even spacing so lines can be drawn to each without crossing'],
                    mustAvoid: ['any writing, addresses or lettering on the envelopes or the stamp', 'a person or hand holding any object', 'a background or surface', 'objects overlapping'],
                    aspect: '4:1',
                    altText: 'A fire hose, a stethoscope, a bundle of letters and a date stamp in a row',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Me, the Helper',
                directions: 'You are a helper too. Draw yourself helping somebody, and tell me who you are helping and what you are doing.',
                layout: 'full',
                writingLines: 1,
                images: [
                  {
                    id: 'img-helper-blank-box',
                    slot: 'Blank self-portrait box',
                    purpose: 'Puts the child into the same category as the four printed helpers, which is the conclusion the whole lesson is built to reach.',
                    subject: 'a single empty rectangular frame with a plain thin border and a completely blank interior',
                    composition: 'one rectangle centred on the section with an even border of uniform thickness, the whole interior blank white with no lines or marks',
                    mustInclude: ['a completely empty interior', 'a single unbroken border'],
                    mustAvoid: ['any figure, person or object inside the frame', 'ruled lines inside the frame', 'decorative motifs on the border', 'any text or label'],
                    aspect: '4:3',
                    altText: 'An empty box for drawing yourself helping somebody',
                  },
                ],
              },
            ],
            answerKey: [
              'Helpers: A firefighter, B doctor, C postal worker, D librarian.',
              'Tools: firefighter to the hose, doctor to the stethoscope, postal worker to the bundle of letters, librarian to the date stamp.',
              'Me, the helper: any drawing with a named person being helped and a named action. "I help my brother find his shoes" is a full-marks answer.',
            ],
          },
          assessment: {
            successCriteria: [
              'Names four community helpers and one thing each of them does.',
              'Chooses an appropriate helper for at least four of five situations.',
              'Names one way they themselves help somebody.',
            ],
            exitTicket:
              'Give one new situation — "the bins have not been emptied and they are overflowing" — and ask who helps with that. You are checking whether the reasoning transfers beyond the four taught cases.',
            rubric: [
              { level: 'emerging', descriptor: 'Recognises helpers by uniform but cannot say what they do, and picks the same helper for every problem.' },
              { level: 'developing', descriptor: 'Matches the four taught helpers to their jobs correctly, but struggles with a situation outside the four.' },
              { level: 'secure', descriptor: 'Reasons from the problem to the right helper, including for unfamiliar situations, and identifies helping they do themselves.' },
            ],
          },
          differentiation: {
            support: [
              'Use two helpers only, as different as possible: the doctor and the postal worker.',
              'Use real props rather than cards. Handing over an actual bandage makes the match obvious.',
              'Let the child point rather than name. Recognition comes well before retrieval.',
            ],
            extension: [
              'Add helpers who are less visible: the bin crew, the bus driver, the person who fixes the road, the school cook.',
              'Ask what would happen if nobody did one of these jobs for a whole month.',
              'Prepare two questions to ask a real helper and go and ask them.',
            ],
            language: [
              'Job names are concrete and highly picturable. Pair each card with its word and leave them displayed all week.',
              'Ask what these jobs are called in the child’s home language — many families have a member who does one of them.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Helpers are only the people with sirens.',
              looksLike: 'Asked who helps in the community, the child names only police officers, firefighters and ambulance crews.',
              correction: 'Spend a whole day counting the helpers you actually encounter: the bus driver, the shopkeeper, the person who swept the road, the cook. Then compare that list with the number of fire engines you saw.',
            },
            {
              misconception: 'The uniform is what makes somebody a helper.',
              looksLike: 'The child says a doctor in ordinary clothes is not a doctor any more.',
              correction: 'Ask what the doctor actually does. The knowing is in the person, not in the coat. Point out that the librarian and the doctor on the page are in everyday clothes.',
            },
            {
              misconception: 'Children cannot be helpers because they do not have jobs.',
              looksLike: 'The child refuses to draw themselves in the last box.',
              correction: 'Name three things they did today that helped somebody. Helping and being paid are different things, and they were already doing one of them.',
            },
          ],
          homeExtension: [
            'Wave to and thank the people who do a job for you this week — the bin crew, the bus driver, the person at the checkout.',
            'Talk about the jobs the adults in the family do and who those jobs help.',
            'Next time you go to the library or the surgery, let the child do the talking at the desk.',
          ],
          teacherNotes:
            'Most community helper units are really costume units, and children come out of them able to name four uniforms and nothing else. The test of whether this one worked is the transfer question at the end: given a problem they have not been taught, can they reason to a helper? Also worth knowing: children who have had a frightening experience with an ambulance or the police may react strongly to those cards. Watch their face, and if it lands badly, move on quickly and come back another day.',
        },

        {
          id: 'pk4-ss-u2-l4',
          unitId: 'pk4-ss-u2',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'The Tools Helpers Use',
          essentialQuestion: 'What does each helper need to do their job?',
          summary:
            'A closer look at tools and why each one is shaped the way it is. A hose is long because the fire is far away; a stethoscope is quiet because a heartbeat is quiet.',
          durationMin: 20,
          standards: [{ code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child explores the range of occupations people have and the tools they use.' }],
          objectives: ['I can match a tool to a job.', 'I can say why a tool is shaped the way it is.'],
          vocabulary: [
            { term: 'tool', definition: 'Something you use to do a job.' },
            { term: 'uniform', definition: 'Special clothes some people wear for work.' },
          ],
          materials: ['Real tools where possible: a bandage, a whistle, a tape measure, a torch', 'A dressing-up box'],
          prep: ['Borrow one genuine work item from somebody you know. A real object from a real job is worth a dozen pictures.'],
          script: [],
          worksheet: { id: 'pk4-ss-u2-l4-ws', title: 'Tools for the Job', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Matches six tools to jobs.', 'Explains why one tool suits its job.'],
            exitTicket: 'Hold up a torch and ask which helpers would need one and why.',
          },
          differentiation: {
            support: ['Match three tools only, using the real objects rather than pictures.'],
            extension: ['Invent a tool for a job that does not have one yet and draw it.'],
            language: ['Handle each tool while naming it. The object carries the noun.'],
          },
          misconceptions: [
            {
              misconception: 'A tool belongs to only one job.',
              looksLike: 'The child insists a torch is only for firefighters.',
              correction: 'List everybody who might need a torch. The overlap is the interesting bit.',
            },
          ],
          homeExtension: ['Find the tools in your own kitchen and name the job each one is for.'],
        },
        {
          id: 'pk4-ss-u2-l5',
          unitId: 'pk4-ss-u2',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Saying Thank You to a Helper',
          essentialQuestion: 'How do I thank somebody who helped me?',
          summary:
            'The unit closes with a real action: the child makes and delivers a thank-you card to a specific named local worker. Gratitude aimed at a real person, not a category.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 6', framework: 'HeadStart-ELOF', text: 'Child recognises that they are a member of a community with shared responsibilities.' },
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child explores the range of occupations people have.' },
          ],
          objectives: ['I can choose a real person to thank.', 'I can make and give a thank-you card.'],
          vocabulary: [
            { term: 'thank you', definition: 'What you say when somebody has done something for you.' },
            { term: 'grateful', definition: 'Feeling glad about something somebody did for you.' },
          ],
          materials: ['Card and crayons', 'Stickers', 'A stamp if it needs posting'],
          prep: ['Pick the recipient in advance and check you will actually see them. An undelivered card is a flat ending.'],
          script: [],
          worksheet: { id: 'pk4-ss-u2-l5-ws', title: 'My Thank-You Card', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names a specific person and what they did.', 'Delivers the card in person or by post.'],
            exitTicket: 'Ask who they chose and why that person.',
          },
          differentiation: {
            support: ['Scribe the words while the child draws.'],
            extension: ['Write the card to somebody the child has never met, such as a bin crew, and think about how to get it to them.'],
            language: ['Write "thank you" in every language spoken in the household.'],
          },
          misconceptions: [
            {
              misconception: 'You only thank people who gave you something.',
              looksLike: 'The child cannot see why you would thank a bin crew.',
              correction: 'Ask what the street would be like after a month with no bin collection. Then ask again.',
            },
          ],
          homeExtension: ['Say thank you out loud, by name, to one person who serves you this week.'],
        },
      ],
    },

    /* ============================================================ UNIT 3 */
    {
      id: 'pk4-ss-u3',
      gradeId: 'pk4',
      subjectId: 'social-studies',
      sequence: 3,
      title: 'Rules, Fairness and Getting Along',
      bigIdea:
        'Rules are not there to spoil your fun — they exist because there is more than one person in the room, and fair does not always mean identical.',
      description:
        'The hardest unit in the Pre-K year, because it runs directly against a four-year-old’s instincts. Children work out what rules are for by inventing their own and living with the consequences, then take on the genuinely difficult idea that fair sometimes means unequal. Expect strong feelings and treat them as data rather than misbehaviour.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SS-Goal P-SS 6', framework: 'HeadStart-ELOF', text: 'Child recognises that they are a member of a group and a community with shared rules and responsibilities.' },
        { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child recognises self as a unique individual and respects differences in others.' },
        { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
      ],
      lessonTitles: [
        'Why Do We Have Rules?',
        'A Game With No Rules',
        'Taking Turns and Sharing',
        'Is That Fair?',
        'Making a Rule for Our House',
      ],
      performanceTask:
        'The House Rule: the child identifies one recurring problem at home, proposes a rule that would fix it, the family tries it for a week, and then the child reports on whether it worked.',
      lessons: [
        {
          id: 'pk4-ss-u3-l1',
          unitId: 'pk4-ss-u3',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'Why Do We Have Rules?',
          essentialQuestion: 'What is a rule for?',
          summary:
            'Rules examined one at a time by asking what would happen without each one. Hold hands crossing the road, wash before eating, do not hit — each is traced to the harm it prevents.',
          durationMin: 20,
          standards: [{ code: 'ELOF-SS-Goal P-SS 6', framework: 'HeadStart-ELOF', text: 'Child recognises that groups have shared rules and responsibilities.' }],
          objectives: ['I can name three rules we have.', 'I can say what a rule is protecting.'],
          vocabulary: [
            { term: 'rule', definition: 'Something everybody has to do so things stay safe and fair.' },
            { term: 'safe', definition: 'Not going to get hurt.' },
          ],
          materials: ['Paper and a marker for the rule list', 'Photographs of a road, a kitchen, a playground'],
          prep: ['List the rules that actually operate in this household. Invented example rules do not carry the same weight as real ones.'],
          script: [],
          worksheet: { id: 'pk4-ss-u3-l1-ws', title: 'Our Rules and Why', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names three real rules.', 'Explains what one rule prevents.'],
            exitTicket: 'Ask what would happen if there were no rule about holding hands near the road.',
          },
          differentiation: {
            support: ['One rule, examined thoroughly, is plenty.'],
            extension: ['Find a rule that exists somewhere else but not here, and work out why.'],
            language: ['Draw each rule as a small picture and display the set.'],
          },
          misconceptions: [
            {
              misconception: 'Rules are just what grown-ups feel like saying.',
              looksLike: 'The child says the rule exists "because you said so".',
              correction: 'Answer the why honestly for every rule you enforce this week. If you cannot find a reason for one, consider dropping it.',
            },
          ],
          homeExtension: ['When you enforce a rule this week, give the reason each time.'],
        },
        {
          id: 'pk4-ss-u3-l2',
          unitId: 'pk4-ss-u3',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'A Game With No Rules',
          essentialQuestion: 'What happens when nobody agrees how to play?',
          summary:
            'A deliberately chaotic experiment. You play a board game with no rules at all, it collapses within minutes, and then the child invents the rules needed to fix it.',
          durationMin: 25,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 6', framework: 'HeadStart-ELOF', text: 'Child recognises that groups have shared rules and responsibilities.' },
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child recognises self as a unique individual and respects differences in others.' },
          ],
          objectives: ['I can say why a game needs rules.', 'I can suggest a rule that fixes a problem.'],
          vocabulary: [
            { term: 'turn', definition: 'Your go, one person at a time.' },
            { term: 'agree', definition: 'When everybody says yes to the same thing.' },
          ],
          materials: ['Any simple board game with the rules put away', 'Counters and a die'],
          prep: ['Be prepared to genuinely misbehave — move six spaces, take two turns, change the goal. Half-hearted chaos does not make the point.'],
          script: [],
          worksheet: { id: 'pk4-ss-u3-l2-ws', title: 'The Rules We Made', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Identifies a specific problem caused by having no rules.', 'Proposes at least two workable rules.'],
            exitTicket: 'Ask which rule they invented was the most important one and why.',
          },
          differentiation: {
            support: ['Break exactly one rule rather than all of them, so the problem is easy to name.'],
            extension: ['Write the invented rules down and play the game properly with them.'],
            language: ['Use the frame "The rule is: everybody has to ___."'],
          },
          misconceptions: [
            {
              misconception: 'A good rule is one that makes me win.',
              looksLike: 'The child proposes a rule that applies only to you.',
              correction: 'Apply their rule to both of you and play one round. The unfairness arrives immediately and from their own side.',
            },
          ],
          homeExtension: ['Invent a family game together and write down its three rules.'],
        },
        {
          id: 'pk4-ss-u3-l3',
          unitId: 'pk4-ss-u3',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Taking Turns and Sharing',
          essentialQuestion: 'How do two people use one thing?',
          summary:
            'Practical strategies rather than instructions to be nice: a sand timer, splitting the set, one-you-one-me, and the you-cut-I-choose method for dividing anything.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 6', framework: 'HeadStart-ELOF', text: 'Child recognises shared responsibilities within a group.' },
            { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies thoughts and feelings, including their own during conflict.' },
          ],
          objectives: ['I can use a timer to take turns.', 'I can split something into two fair parts.'],
          vocabulary: [
            { term: 'share', definition: 'To let somebody else have some of it too.' },
            { term: 'fair', definition: 'Nobody gets left out or short-changed.' },
          ],
          materials: ['A sand timer or kitchen timer', 'One desirable toy', 'A bar of chocolate or a piece of fruit to divide'],
          prep: ['Use something the child genuinely wants. Practising sharing with an object nobody cares about teaches nothing.'],
          script: [],
          worksheet: { id: 'pk4-ss-u3-l3-ws', title: 'Your Turn, My Turn', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Waits out a timed turn without a meltdown.', 'Divides a set into two equal parts.'],
            exitTicket: 'Give seven grapes to share between two people and see what happens to the seventh.',
          },
          differentiation: {
            support: ['Short turns. Thirty seconds each, repeated, is far easier than five minutes each.'],
            extension: ['Share between three people, which does not divide as neatly and forces real negotiation.'],
            language: ['Teach the phrases "Can I have a turn?" and "You can have it next" as fixed scripts.'],
          },
          misconceptions: [
            {
              misconception: 'Sharing means giving it away and not getting it back.',
              looksLike: 'The child clings to the toy and refuses any turn-taking.',
              correction: 'Make the return visible and reliable. The timer proves the toy comes back, and it comes back every single time.',
            },
          ],
          homeExtension: ['Use a visible timer for anything two people want at once, including screens.'],
        },
        {
          id: 'pk4-ss-u3-l4',
          unitId: 'pk4-ss-u3',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Is That Fair?',
          essentialQuestion: 'Does fair always mean exactly the same?',
          summary:
            'The genuinely hard idea. Three children of different heights need to see over a fence; identical boxes do not work and different boxes do. Fair means everybody gets what they need.',
          durationMin: 25,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child recognises self as a unique individual and respects differences in others.' },
            { code: 'ELOF-SS-Goal P-SS 6', framework: 'HeadStart-ELOF', text: 'Child recognises shared responsibilities within a group.' },
          ],
          objectives: ['I can say when something is not fair.', 'I know that people sometimes need different things.'],
          vocabulary: [
            { term: 'fair', definition: 'Everybody gets what they need.' },
            { term: 'need', definition: 'Something you have to have.' },
          ],
          materials: ['Three boxes of different heights', 'A barrier to see over — a sofa back or a fence', 'Two dolls or toys of different sizes'],
          prep: ['Set up the fence scenario physically. Acting it out beats discussing it by an enormous margin at this age.'],
          script: [],
          worksheet: { id: 'pk4-ss-u3-l4-ws', title: 'What Is Fair?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Judges a scenario as fair or unfair with a reason.', 'Accepts that two people may need different amounts of help.'],
            exitTicket: 'Ask whether it is fair that a baby gets carried and they have to walk.',
          },
          differentiation: {
            support: ['Stick to obviously unfair cases — one person gets everything — before the subtle ones.'],
            extension: ['Discuss why a younger sibling has an earlier bedtime, and whether that is fair.'],
            language: ['Use the frames "That is not fair because ___" and "To be fair, ___ needs ___".'],
          },
          misconceptions: [
            {
              misconception: 'Fair means everybody gets exactly the same thing.',
              looksLike: 'The child objects that a smaller sibling got a smaller portion.',
              correction: 'Give everyone identical shoes for a day. Fair is not sameness — it is everybody being able to walk.',
            },
          ],
          homeExtension: ['When the child says "not fair", ask what they think fair would look like and take the answer seriously.'],
        },
        {
          id: 'pk4-ss-u3-l5',
          unitId: 'pk4-ss-u3',
          gradeId: 'pk4',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Making a Rule for Our House',
          essentialQuestion: 'Can I make a rule?',
          summary:
            'The child becomes a rule-maker. They identify a real recurring irritation at home, propose a rule, the family trials it, and the child reviews whether it worked.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 6', framework: 'HeadStart-ELOF', text: 'Child recognises that they are a member of a group with shared rules and responsibilities.' },
            { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal thoughts and feelings.' },
          ],
          objectives: ['I can think of a rule that would help.', 'I can say who the rule is for.'],
          vocabulary: [
            { term: 'decide', definition: 'To choose what will happen.' },
            { term: 'everybody', definition: 'All the people, with nobody left out.' },
          ],
          materials: ['Card for the rule poster', 'Crayons', 'Blu-tack'],
          prep: ['Be genuinely willing to adopt the rule the child proposes, including if it applies to you. Otherwise this is theatre.'],
          script: [],
          worksheet: { id: 'pk4-ss-u3-l5-ws', title: 'Our New Rule', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Proposes a rule that addresses a real problem.', 'States that the rule applies to everybody including themselves.'],
            exitTicket: 'Ask whether the new rule applies to the grown-ups as well, and watch what happens when you say yes.',
          },
          differentiation: {
            support: ['Offer two ready-made rules to choose between.'],
            extension: ['Review the rule after a week and decide together whether to keep, change or scrap it.'],
            language: ['Draw the rule as a picture with a short dictated caption.'],
          },
          misconceptions: [
            {
              misconception: 'The person who makes the rule does not have to follow it.',
              looksLike: 'The child exempts themselves from their own rule.',
              correction: 'Apply it to them first, cheerfully and immediately. Rules that only bind other people are the thing this lesson exists to prevent.',
            },
          ],
          homeExtension: ['Put the rule poster on the fridge and refer to it by the child’s name as its author.'],
        },
      ],
    },
  ],
}

export default course
