import type { SubjectCourse } from '../../types'

/**
 * Preschool Social Studies — ages 3 to 4.
 *
 * At three, social studies is not geography or civics. It is the child working
 * out who they are, what they are feeling, that other people are feeling things
 * too, and that a room full of people needs a few agreements to be bearable.
 * Every lesson is 10–20 minutes and play-based, no reading or writing is
 * expected, and every worksheet is dots, colouring, circling, matching or
 * cut-and-paste.
 *
 * A note on the pictures: children need to see people who look like them and
 * people who do not, drawn with equal care. Every image spec in this file that
 * depicts people carries an explicit instruction to that effect.
 */
const course: SubjectCourse = {
  gradeId: 'pk3',
  subjectId: 'social-studies',
  title: 'Preschool Social Studies',
  overview:
    'This year the child answers four questions, in this order, because that is the order they can be answered in: who am I, what am I feeling, how do I get along with the person next to me, and who else is out there. It starts at their own face in the mirror and ends at the shops on their own street. Nothing here is abstract — every idea is anchored to a person the child actually knows or a place they have actually stood in.',
  yearGoals: [
    'Say their own name and age, and name three things they like.',
    'Name the feeling they are having from a choice of four, and notice a feeling in someone else’s face.',
    'Take a turn and give a turn, with an adult nearby, without it ending in tears every time.',
    'Name three jobs people do in their neighbourhood and say what each one helps with.',
    'Recognise that a map is a picture of a real place looked at from above, and find one thing on a simple map of a familiar room.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'pk3-ss-u1',
      gradeId: 'pk3',
      subjectId: 'social-studies',
      sequence: 1,
      title: 'This Is Me, This Is My Family',
      bigIdea:
        'I am one particular person, with my own name, my own face and my own favourite things — and I belong to a group of people who look after me.',
      description:
        'The starting point for everything else. A child who can say who they are, and who can see that the person next to them is a different someone with different favourites, has the foundation for every other social idea in this course. Families are treated exactly as they come: every shape counts, nothing is described as normal or unusual.',
      weeks: 5,
      standards: [
        { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
        { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
        { code: 'ELOF-SE-Goal P-SE 9', framework: 'HeadStart-ELOF', text: 'Child recognises self as a unique individual having own abilities, characteristics, emotions and interests.' },
        { code: 'ELOF-SE-Goal P-SE 11', framework: 'HeadStart-ELOF', text: 'Child has a sense of belonging to family, community and other groups.' },
      ],
      lessonTitles: [
        'My Name, My Face, My Favourites',
        'The People Who Live With Me',
        'Families Come in Many Shapes',
        'Things I Can Do By Myself',
        'My Body From Head to Toe',
      ],
      performanceTask:
        'The All About Me Book: four sheets stapled together — my face, my people, my favourite thing, and something I can do. The child presents it to a family member and talks through each page. Ten minutes to make, and it gets read at bedtime for months.',
      lessons: [
        /* -------------------------------------------------------- AUTHORED */
        {
          id: 'pk3-ss-u1-l1',
          unitId: 'pk3-ss-u1',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'authored',
          title: 'My Name, My Face, My Favourites',
          essentialQuestion: 'Who am I, and what makes me me?',
          summary:
            'A mirror, three fingers held up for an age, and a page of pictures to choose favourites from. The child assembles the first description of themselves they have ever given on purpose, and discovers that their answers are not the same as anyone else’s.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
            { code: 'ELOF-SE-Goal P-SE 9', framework: 'HeadStart-ELOF', text: 'Child recognises self as a unique individual having own abilities, characteristics, emotions and interests.' },
            { code: 'ELOF-SE-Goal P-SE 10', framework: 'HeadStart-ELOF', text: 'Child expresses confidence in own skills and positive feelings about self.' },
          ],
          objectives: [
            'I can say my whole name.',
            'I can show how old I am with my fingers.',
            'I can name three things I like.',
            'I can look in the mirror and say one thing about my face.',
          ],
          vocabulary: [
            { term: 'name', definition: 'The word people call you.', example: 'My name is Amira.' },
            { term: 'me', definition: 'The person I am, nobody else.', example: 'That is me in the photo.' },
            { term: 'favourite', definition: 'The one you like the best.', example: 'My favourite colour is green.' },
            { term: 'different', definition: 'Not the same.', example: 'Your favourite is different from mine.' },
          ],
          materials: [
            'A hand mirror, or any mirror the child can stand at',
            'A photograph of the child',
            'The printed worksheet',
            'Chunky crayons in several colours',
            'Optional: a photo of the people the child lives with',
          ],
          prep: [
            'Have the mirror in your pocket or under a cloth. Producing it is better than it sitting on the table.',
            'Decide your own answers to the three favourite questions before you start. You will be asked and you should have real ones.',
            'If the child’s family situation is complicated, think through your wording now. "The people you live with" is a phrase that fits every family without anyone having to explain themselves.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'I Have Got You Mixed Up',
              minutes: 3,
              say: [
                'Hang on. I think I have got you mixed up with somebody else.',
                'You are the one who loves broccoli more than anything, and hates chocolate, and is fourteen years old. Yes?',
                'No? None of it? Oh dear. I had better start again.',
                'Tell me then. Who are you really?',
              ],
              do: [
                'Look genuinely worried. Check an imaginary list in your hand.',
                'Get every single fact wrong, and get them wrong with total confidence.',
                'Let the child correct each one before you move to the next.',
              ],
              studentDoes: ['Corrects you, loudly, several times over.'],
              checks: [
                {
                  ask: 'So who are you? Tell me your name.',
                  lookFor: 'Their first name at minimum. A whole name is a bonus.',
                  ifStuck: 'Say your own full name first, slowly, then ask again. Modelling the shape of the answer is usually all it takes.',
                },
              ],
              tip: 'Getting facts wrong about a three-year-old is the fastest route to their full attention. They find being misidentified genuinely outrageous and will fix it for you at length.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Name, Age, Favourite',
              minutes: 3,
              say: [
                'There are three things that help somebody know who you are. Watch, I will do mine first.',
                'One — my name. My whole name, both bits.',
                'Two — how old I am. I am too old for fingers, so I will just say it.',
                'Three — one thing I really like. My favourite food is toast. Actually toast.',
                'Your turn. Name. Then hold up your fingers for how old. Then one thing you like.',
              ],
              do: [
                'Count the three on your own fingers as you name them, and use the same three-finger count all week.',
                'Help them set their fingers for their age and hold the shape. This is genuinely fiddly at three.',
              ],
              studentDoes: ['Gives name, holds up fingers for age, names one favourite thing.'],
              checks: [
                { ask: 'How old are you? Show me with your fingers.', lookFor: 'The right number of fingers, however they get them up there.' },
                {
                  ask: 'What is one thing you really like?',
                  lookFor: 'Any answer at all — an object, a food, a person, a programme.',
                  ifStuck: 'Offer a choice of two things you know they like. Choosing is much easier than producing.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'The Mirror',
              minutes: 4,
              say: [
                'Now the good bit. Look in here.',
                'Who is that? That is you. Have a proper look.',
                'Tell me one thing about your face. What colour are your eyes?',
                'What about your hair — is it curly or straight? Short or long?',
                'Now look at my face. Is my hair the same as yours? No! Everybody’s face is their own.',
              ],
              do: [
                'Hold the mirror steady for them or let them hold it. Let them pull faces for a bit; it always happens and it is fine.',
                'Put your face next to theirs in the mirror and compare out loud — eyes, hair, freckles, glasses.',
                'Name features neutrally and warmly. Never rank them.',
              ],
              studentDoes: ['Looks in the mirror and describes one or two features of their own face.'],
              checks: [
                {
                  ask: 'Tell me one thing about your hair.',
                  lookFor: 'Any description — colour, length, curliness, plaits, a hair clip.',
                  ifStuck: 'Describe your own hair first in the same terms. "Mine is short and grey. What about yours?"',
                },
                { ask: 'Is your face the same as mine?', lookFor: 'No, plus one difference they can name.' },
              ],
              tip: 'Some children have never really examined their own face on purpose. Give this beat its full four minutes even if it goes quiet — the quiet is them looking.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The All About Me Page',
              minutes: 3,
              say: [
                'This page is all about you. Nobody else in the world could do this page.',
                'In the empty face, draw your face. Look in the mirror first if you want.',
                'Now find the child whose hair is most like yours and put a dot on them.',
                'At the bottom, put a dot on every single thing you like. As many as you want.',
              ],
              do: [
                'Read each direction aloud and point at the right part of the page. Assume no reading at all.',
                'Leave the mirror on the table while they draw. Looking up at it mid-drawing is exactly what you want.',
                'Say nothing about the quality of the face. Ask them who it is instead.',
              ],
              studentDoes: ['Draws a self-portrait, marks the closest hair match, and dots their preferences.'],
              checks: [
                { ask: 'Tell me about your picture.', lookFor: 'Any narration. A circle with two dots is a complete and correct self-portrait at three.' },
                { ask: 'Why did you dot that one?', lookFor: 'Because I like it. That is a whole answer.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'The Whole Sentence',
              minutes: 2,
              say: [
                'Last thing. Say the whole sentence with me.',
                'My name is ___. I am ___ years old. And I like ___.',
                'Now say it on your own, and say it loud.',
                'There you go. Now I know exactly who you are, and I will not get you mixed up again.',
              ],
              do: ['Say the frame with them once, then stand back and let them do it alone. Applaud.'],
              studentDoes: ['Produces the three-part sentence with fading support.'],
              checks: [
                { ask: 'Who are you?', lookFor: 'Name, age and one preference, in any order and any grammar.' },
              ],
            },
          ],
          worksheet: {
            id: 'pk3-ss-u1-l1-ws',
            title: 'All About Me',
            style: 'line-art',
            prepNotes:
              'Keep the mirror on the table while the child works. This page will be kept — put their name on the back yourself, in pencil, with the date. In a year it is the most valuable piece of paper in the house.',
            sections: [
              {
                id: 's1',
                title: 'This Is My Face',
                directions: 'Look in the mirror. Now draw your face in the empty circle. Give yourself eyes, a nose, a mouth and some hair.',
                layout: 'full',
                images: [
                  {
                    id: 'img-blank-face',
                    slot: 'Empty face outline',
                    purpose:
                      'A prepared oval removes the hardest part of a self-portrait — getting a head-shaped shape onto the page — so the child spends their effort on the features they actually noticed in the mirror. It must be genuinely empty or they will simply trace what is there.',
                    subject: 'a single large empty oval face outline with two simple ears on the sides and a short neck below, and absolutely nothing inside the oval',
                    count: 1,
                    composition: 'the oval centred and filling most of the frame, drawn with a clean bold single line thick enough to survive crayon inside it, the entire interior blank white',
                    mustInclude: ['exactly one face outline', 'the interior of the oval completely empty', 'a bold clear outline'],
                    mustAvoid: ['any eyes, nose, mouth, eyebrows or hair', 'shading, freckles or skin tone inside the oval', 'guide dots or dashed placement marks', 'a body, clothes or background'],
                    aspect: '1:1',
                    altText: 'An empty oval face outline with ears, ready to draw into',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Whose Hair Is Like Mine?',
                directions: 'Look at these four children. Find the one whose hair is most like yours and put a dot on them.',
                layout: 'row',
                images: [
                  {
                    id: 'img-children-faces-4',
                    slot: 'Four children’s faces',
                    purpose:
                      'The child locates themselves in a group and, just as importantly, sees three other children who look nothing like them drawn with exactly the same warmth. Choosing "the one like me" only works if the range on offer is real.',
                    subject:
                      'four children’s head-and-shoulders portraits in a horizontal row, each a different child: one with tightly coiled dark hair and deep brown skin, one with straight black hair and light brown skin, one with long wavy red hair and pale freckled skin, one with short blond hair and a visible hearing aid',
                    count: 4,
                    composition:
                      'one horizontal row, four portraits evenly spaced with clear gaps, all drawn at exactly the same size and at the same head-on angle, all four smiling naturally, each face large enough for a chunky crayon dot',
                    mustInclude: [
                      'exactly four children',
                      'a genuine range of skin tones from pale to deep brown, and clearly different hair textures — coiled, straight, wavy and short',
                      'every child drawn with equal detail, equal prominence and an equally warm expression, with no child made the focal point',
                      'the hearing aid drawn plainly and matter-of-factly, not emphasised',
                    ],
                    mustAvoid: ['any child drawn as a caricature or with exaggerated features', 'one child drawn larger, more central or more detailed than the others', 'clothing or accessories that signal a stereotype', 'lettering or name labels', 'a background'],
                    aspect: '4:1',
                    altText: 'Four children’s faces in a row with different hair and skin tones',
                    style: 'storybook',
                  },
                ],
              },
              {
                id: 's3',
                title: 'How Old Am I?',
                directions: 'Hold up your fingers for how old you are. Now colour that many fingers on the hand in the picture.',
                layout: 'row',
                images: [
                  {
                    id: 'img-hand-fingers',
                    slot: 'An open hand to colour',
                    purpose:
                      'Age is abstract; fingers are not. Colouring the right number of fingers turns "I am three" into a quantity the child can see, and it is the answer they will give to every adult who asks them for the next year.',
                    subject: 'a single child’s open hand shown palm forward with all five fingers spread wide apart and clearly separated',
                    count: 5,
                    composition: 'the hand centred and large in the frame, fingers spread with clear white gaps between each one, drawn as a clean bold outline with a large blank area inside each finger',
                    mustInclude: ['exactly one hand with five clearly separated fingers', 'each finger wide enough inside the outline to be coloured with a chunky crayon', 'a plain unshaded outline so the hand belongs to any child who colours it'],
                    mustAvoid: ['skin tone or shading filled in', 'fingernails drawn in detail', 'a wrist, sleeve or arm', 'numbers or lettering', 'fingers touching'],
                    aspect: '1:1',
                    altText: 'An open hand with five spread fingers to colour in',
                  },
                ],
              },
              {
                id: 's4',
                title: 'Things I Like',
                directions: 'Put a dot on every single thing you like. You can dot as many as you want.',
                layout: 'grid',
                images: [
                  {
                    id: 'img-favourites-6',
                    slot: 'Six things to choose from',
                    purpose:
                      'A preference is only meaningful if it could have been otherwise. Six clearly different options across food, animals, toys and activities means the child’s pattern of dots genuinely says something about them, and can be compared with a sibling’s or yours.',
                    subject:
                      'six separate simple pictures arranged in a grid: a football, a friendly dog, an ice cream cone, an open picture book, a toy car, a bunch of bananas',
                    count: 6,
                    composition:
                      'a two-row by three-column arrangement with generous white space around each picture, all six drawn as clean simple outlines at roughly the same size, nothing touching or overlapping, each big enough for a crayon dot to sit on',
                    mustInclude: ['exactly six pictures, one per grid position', 'each object instantly recognisable in outline alone'],
                    mustAvoid: ['boxes or grid lines drawn around the pictures', 'brand names, logos or lettering', 'pictures touching each other', 'a background'],
                    aspect: '3:2',
                    altText: 'Six pictures: a football, a dog, an ice cream, a book, a toy car and bananas',
                  },
                ],
              },
              {
                id: 's5',
                title: 'My People',
                directions: 'Draw the people you live with in the frame. Draw as many or as few as you need.',
                layout: 'full',
                writingLines: 2,
                images: [
                  {
                    id: 'img-empty-frame',
                    slot: 'Empty picture frame',
                    purpose:
                      'An empty frame lets every family be the right family. Nothing is pre-drawn, so no child has to fit their household into somebody else’s picture of one, and a drawing of two people is as complete as a drawing of seven.',
                    subject: 'a single ornate empty picture frame standing upright, with a completely blank white interior',
                    count: 1,
                    composition: 'the frame centred and filling most of the frame, drawn with a bold decorative border, the whole inside area blank and unruled',
                    mustInclude: ['exactly one frame', 'the interior completely empty and white'],
                    mustAvoid: ['any people, silhouettes or figures inside the frame', 'a photograph or image inside', 'lettering on the frame', 'a wall, shelf or background'],
                    aspect: '4:3',
                    altText: 'An empty picture frame ready to draw a family into',
                  },
                ],
              },
            ],
            answerKey: [
              'This is my face: any drawing. A circle with two dots inside it is a complete self-portrait at three. Ask who it is rather than judging the likeness.',
              'Whose hair is like mine: whichever the child chooses. If they pick a child who looks nothing like them, ask them why — the reason is often about something they liked, not about hair, and that is worth hearing.',
              'How old am I: three fingers coloured for a three-year-old, four for a four-year-old.',
              'Things I like: any number of dots, including all six or just one. There is no wrong pattern.',
              'My people: any number of figures. Do not correct who is missing or who has been added.',
            ],
          },
          assessment: {
            successCriteria: [
              'Says their own first name clearly when asked.',
              'Shows their age on their fingers, with help setting the fingers if needed.',
              'Names at least one thing they like without being given options.',
              'Describes one feature of their own face after looking in the mirror.',
            ],
            exitTicket:
              'Ask a completely fresh question: "If I met your friend and I wanted to tell them about you, what should I say?" Any two facts about themselves is a strong pass.',
            rubric: [
              { level: 'emerging', descriptor: 'Gives their first name when prompted; age and preferences come only as a choice between two options offered by an adult.' },
              { level: 'developing', descriptor: 'Says their name and age unprompted and names a favourite thing, but describes their face only by copying the words you used.' },
              { level: 'secure', descriptor: 'Offers name, age and several preferences without prompting, describes their own appearance in their own words, and notices that someone else’s answers are different.' },
            ],
          },
          differentiation: {
            support: [
              'Split this across two days: name and age on the first, mirror and favourites on the second. Fifteen minutes is a long time when you are the subject of the lesson.',
              'Use a photograph instead of the mirror. Some children find their own reflection much harder to look at than a picture of themselves.',
              'Accept pointing for every answer. Pointing at the ice cream is a preference stated.',
            ],
            extension: [
              'Add a surname and practise the whole name as one piece.',
              'Ask them to interview you with the same three questions, and to remember your answers until teatime.',
              'Ask for a favourite and then a least favourite. Holding both is harder than it sounds.',
            ],
            language: [
              'Names are the one word every child has full confidence in. Start there and build outward.',
              'If the child’s name is pronounced differently at home than at nursery, use the home pronunciation and say it correctly every single time. Nothing in this lesson matters more than that.',
              'The frame "My name is ___, I am ___, I like ___" is worth drilling as a whole chunk rather than as three separate sentences.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Everybody likes what I like, so my favourite is just what things are.',
              looksLike: 'The child is genuinely astonished, or offended, that you do not also have chocolate as your favourite food.',
              correction: 'Do not argue. Take three favourites from three different people in the house and lay them side by side. Different, different, different. That display does more than any explanation.',
            },
            {
              misconception: 'My name is a thing that gets given out by grown-ups, not something that belongs to me.',
              looksLike: 'The child looks at you before answering "what is your name?", waiting for you to supply it.',
              correction: 'Ask the question in situations where you obviously already know the answer, so it is clearly not a test. Then start asking other people their names in front of them.',
            },
            {
              misconception: 'A drawing of me has to look like me or it is wrong.',
              looksLike: 'The child scribbles the face out, or refuses to draw at all, saying "I cannot do it".',
              correction: 'Draw yourself first, badly, on a scrap of paper, and be delighted with it. Then ask them who your terrible drawing is. Once they see that a bad drawing still counts, the pen moves.',
            },
          ],
          homeExtension: [
            'Let them answer for themselves when someone asks their name or age. Wait an uncomfortably long time before rescuing them.',
            'Look through photos of them as a baby and now. "That was you. This is you too."',
            'At dinner, everyone says one thing they liked about the day. It is the same skill and it becomes a habit fast.',
          ],
          teacherNotes:
            'Be careful with the family section. Some children live with a grandparent, or in two houses, or with people whose relationship to them is complicated to explain. "The people you live with" covers all of it without asking anyone to justify anything, and the empty frame means no child has to squeeze their household into a picture of somebody else’s. If a child draws someone who is not there any more, let them, and let them tell you about it. That is the lesson working, not going wrong.',
        },

        {
          id: 'pk3-ss-u1-l2',
          unitId: 'pk3-ss-u1',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'The People Who Live With Me',
          essentialQuestion: 'Who is in my home?',
          summary:
            'Photographs on the table and a name for each person, plus what that person does for the child — who does the cooking, who does the bedtime story, who makes them laugh.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
            { code: 'ELOF-SE-Goal P-SE 11', framework: 'HeadStart-ELOF', text: 'Child has a sense of belonging to family, community and other groups.' },
          ],
          objectives: ['I can name the people I live with.', 'I can say one thing each person does for me.'],
          vocabulary: [
            { term: 'family', definition: 'The people who look after you and belong with you.' },
            { term: 'together', definition: 'With each other.' },
          ],
          materials: ['Photographs of the household', 'Glue and card if you want to make a family fan'],
          prep: ['Ask the family for photos in advance. Include pets and anyone who lives elsewhere but matters.'],
          script: [],
          worksheet: { id: 'pk3-ss-u1-l2-ws', title: 'My People', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Names the people in their household.', 'Says one thing one of them does.'],
            exitTicket: 'Point at a photo and ask who that is and what they do.',
          },
          differentiation: {
            support: ['Two people only, the two closest.'],
            extension: ['Add people who do not live in the house — a grandparent, a cousin, a childminder.'],
            language: ['Family words differ between languages and cultures. Use whatever the child uses at home and do not correct it into English equivalents.'],
          },
          misconceptions: [
            {
              misconception: 'A family means a mum, a dad and children.',
              looksLike: 'The child says someone has "no family" because their household looks different.',
              correction: 'State the rule plainly and often: a family is the people who look after each other. Any number, any grown-ups.',
            },
          ],
          homeExtension: ['Make a phone call to someone in the wider family and let the child do the talking.'],
        },
        {
          id: 'pk3-ss-u1-l3',
          unitId: 'pk3-ss-u1',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Families Come in Many Shapes',
          essentialQuestion: 'Is everybody’s family the same as mine?',
          summary:
            'Picture books and photographs of many different households — big, small, one grown-up, two, three generations under a roof — with one message: they are all families.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 4', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness and appreciation of their own and others’ cultural and linguistic backgrounds.' },
            { code: 'ELOF-SE-Goal P-SE 11', framework: 'HeadStart-ELOF', text: 'Child has a sense of belonging to family, community and other groups.' },
          ],
          objectives: ['I can see that families are different sizes.', 'I can say that all of them are families.'],
          vocabulary: [
            { term: 'different', definition: 'Not the same as another one.' },
            { term: 'same', definition: 'Just like another one.' },
          ],
          materials: ['Two or three picture books showing varied families', 'Photos from friends or relatives if you can get them'],
          prep: ['Choose books where the variety is simply present rather than explained. Children absorb it better when it is not a lesson.'],
          script: [],
          worksheet: { id: 'pk3-ss-u1-l3-ws', title: 'All Kinds of Families', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Identifies two families of different sizes as both being families.'],
            exitTicket: 'Show two pictures and ask which one is a family. Both is the answer you want.',
          },
          differentiation: {
            support: ['Compare just two families: theirs and one other real one they know.'],
            extension: ['Count the people in each family in the book and compare the numbers.'],
            language: ['Ask a family member for the words for grandmother and grandfather in the home language and use them.'],
          },
          misconceptions: [
            {
              misconception: 'Bigger families are better, or smaller families are lonely.',
              looksLike: 'The child says someone is sad because they only have one grown-up.',
              correction: 'Separate size from happiness explicitly. Point out something good about every family shown, including the smallest.',
            },
          ],
          homeExtension: ['Talk about who was in the house when the grown-ups were little. Families change over time and that is interesting.'],
        },
        {
          id: 'pk3-ss-u1-l4',
          unitId: 'pk3-ss-u1',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Things I Can Do By Myself',
          essentialQuestion: 'What can I do all on my own now?',
          summary:
            'A competence audit disguised as a game: shoes on, coat zipped, cup poured, hands washed. Whatever they can do, they demonstrate, and it goes on the list.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SE-Goal P-SE 10', framework: 'HeadStart-ELOF', text: 'Child expresses confidence in own skills and positive feelings about self.' },
            { code: 'ELOF-ATL-Goal P-ATL 10', framework: 'HeadStart-ELOF', text: 'Child demonstrates initiative and independence.' },
          ],
          objectives: ['I can show you three things I can do by myself.', 'I can name one thing I am still learning.'],
          vocabulary: [
            { term: 'myself', definition: 'On my own, with nobody helping.' },
            { term: 'learning', definition: 'Getting better at something you cannot do yet.' },
          ],
          materials: ['Shoes, a coat, a cup and a jug of water', 'A camera to record the demonstrations'],
          prep: ['Choose tasks you know they can nearly do. This lesson should end in success, not frustration.'],
          script: [],
          worksheet: { id: 'pk3-ss-u1-l4-ws', title: 'I Can Do It', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Demonstrates three independent skills.', 'Names one skill still being learned without distress.'],
            exitTicket: 'Ask them to show you the thing they are proudest of doing on their own.',
          },
          differentiation: {
            support: ['Focus on the skills they have already mastered. Confidence is the objective here, not new skills.'],
            extension: ['Pick one not-yet skill and practise it three times. Zips are the classic.'],
            language: ['Use "I can" as the repeated frame. It is a useful structure and a useful sentence to own.'],
          },
          misconceptions: [
            {
              misconception: 'Needing help means being a baby.',
              looksLike: 'The child refuses help on something genuinely too hard and then melts down.',
              correction: 'Say out loud something you need help with yourself, this week, and mean it. Asking for help is a skill, not a failure.',
            },
          ],
          homeExtension: ['Give one job away entirely. Their job, their way, even when it is slower.'],
        },
        {
          id: 'pk3-ss-u1-l5',
          unitId: 'pk3-ss-u1',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'My Body From Head to Toe',
          essentialQuestion: 'What are all the parts of me called?',
          summary:
            'Body-part naming through movement — a song, a body outline drawn round them on a roll of paper, and sticking labels on the right places.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
            { code: 'ELOF-PMP-Goal P-PMP 1', framework: 'HeadStart-ELOF', text: 'Child demonstrates control, strength and coordination of large muscles.' },
          ],
          objectives: ['I can point to eight parts of my body and name them.', 'I can lie still while you draw round me.'],
          vocabulary: [
            { term: 'shoulder', definition: 'Where your arm joins your body.' },
            { term: 'elbow', definition: 'The bendy bit in the middle of your arm.' },
            { term: 'ankle', definition: 'The bendy bit above your foot.' },
          ],
          materials: ['A long roll of paper or taped-together sheets', 'A thick marker', 'Crayons'],
          prep: ['Clear enough floor space to lie down. Tape the paper down at the corners or it will slide.'],
          script: [],
          worksheet: { id: 'pk3-ss-u1-l5-ws', title: 'All of Me', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names and points to eight body parts including two less obvious ones.'],
            exitTicket: 'Say "point to your elbow" and watch.',
          },
          differentiation: {
            support: ['Five parts only: head, arms, legs, hands, feet.'],
            extension: ['Add wrist, ankle, chin and heel, which are all genuinely new words at three.'],
            language: ['Body parts are excellent early vocabulary because the referent is always present. Use both languages if there are two.'],
          },
          misconceptions: [
            {
              misconception: 'The body outline is a picture of a person, so it should have a face and clothes drawn by an adult.',
              looksLike: 'The child asks you to draw the face for them.',
              correction: 'Hand the crayon back. It is their body, so it is their drawing, and any face is the right face.',
            },
          ],
          homeExtension: ['Put the body outline up on a door. It is life-sized and children come back to it for weeks.'],
        },
      ],
    },

    /* ============================================================ UNIT 2 */
    {
      id: 'pk3-ss-u2',
      gradeId: 'pk3',
      subjectId: 'social-studies',
      sequence: 2,
      title: 'Big Feelings and What They Are Called',
      bigIdea:
        'Feelings have names, everybody has all of them, and a feeling you can name is a feeling you can do something about.',
      description:
        'A three-year-old in the grip of a feeling has no word for it, which is a large part of why it is so overwhelming. This unit hands over four words — happy, sad, mad, scared — and attaches each to a face, a body sensation and a picture card. Naming comes first. Managing comes later, and only after naming works.',
      weeks: 5,
      standards: [
        { code: 'ELOF-SE-Goal P-SE 6', framework: 'HeadStart-ELOF', text: 'Child expresses a broad range of emotions and recognises these emotions in self and others.' },
        { code: 'ELOF-SE-Goal P-SE 8', framework: 'HeadStart-ELOF', text: 'Child manages emotions with increasing independence.' },
        { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
        { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
      ],
      lessonTitles: [
        'Happy, Sad, Mad, Scared',
        'Faces Tell Us Feelings',
        'What Makes Me Feel Happy?',
        'When I Feel Mad: Three Calm-Down Tricks',
        'How Does She Feel?',
      ],
      performanceTask:
        'The Feelings Check-In: a laminated card with four faces on it, kept by the door. Twice a day the child points at how they feel. After two weeks they start pointing without being asked, which is the whole point.',
      lessons: [
        /* -------------------------------------------------------- AUTHORED */
        {
          id: 'pk3-ss-u2-l1',
          unitId: 'pk3-ss-u2',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'authored',
          title: 'Happy, Sad, Mad, Scared',
          essentialQuestion: 'What is this feeling called?',
          summary:
            'Four feelings, four faces, four names. The adult pulls the faces first and gets them named, then the child makes them, then they find them on a page. By the end the child has vocabulary for the four states that account for most of their week.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SE-Goal P-SE 6', framework: 'HeadStart-ELOF', text: 'Child expresses a broad range of emotions and recognises these emotions in self and others.' },
            { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
            { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
          ],
          objectives: [
            'I can name four feelings: happy, sad, mad and scared.',
            'I can make each feeling with my face.',
            'I can point to how I am feeling right now.',
          ],
          vocabulary: [
            { term: 'happy', definition: 'The good feeling that makes you smile.', example: 'I feel happy at the park.' },
            { term: 'sad', definition: 'The heavy feeling that can make you cry.', example: 'I felt sad when it broke.' },
            { term: 'mad', definition: 'The hot feeling when something is not fair.', example: 'I feel mad when someone grabs.' },
            { term: 'scared', definition: 'The shaky feeling when something might hurt or surprise you.', example: 'The loud bang made me scared.' },
            { term: 'feeling', definition: 'Something that happens inside you.', example: 'That is a big feeling.' },
          ],
          materials: [
            'A mirror',
            'The printed worksheet',
            'Chunky crayons',
            'Optional: a favourite picture book with clear emotional faces in it',
          ],
          prep: [
            'Practise the four faces yourself in a mirror. Big and unmistakable, not subtle — subtle is unreadable at three.',
            'Think of one small real moment from today for each feeling, involving the child. You will need these in the guided beat.',
            'Decide where the finished feelings card will live — by the door, on the fridge — before you start.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Guess My Face',
              minutes: 3,
              say: [
                'I am going to make some faces and you have to guess what I am feeling. Watch carefully.',
                'Here is the first one. What do you think?',
                'Happy! You got it straight away. How did you know?',
                'My mouth went up. Right. Here is the next one — ready?',
              ],
              do: [
                'Do happy first, then sad, then mad, then scared. Make each one enormous and hold it for a few seconds.',
                'Let them guess before you name it. Take any word close to right.',
                'Ask "how did you know?" after at least two of them.',
              ],
              studentDoes: ['Reads each face and names or approximates the feeling.'],
              checks: [
                {
                  ask: 'How did you know I was sad?',
                  lookFor: 'A feature — mouth down, eyes droopy, or an imitation of the face itself.',
                  ifStuck: 'Do the face again and point at your own mouth. "Look at my mouth. Which way is it going?"',
                },
              ],
              tip: 'Overdo the faces to the point of ridiculousness. A realistic sad face is far too subtle for a three-year-old to decode.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Four Feelings, Four Faces',
              minutes: 3,
              say: [
                'There are four feeling words I want you to have. Everybody feels all four of these. Grown-ups too.',
                'Happy — mouth goes up, eyes go crinkly. Make a happy face at me.',
                'Sad — mouth goes down. Sometimes tears. Make a sad face.',
                'Mad — eyebrows come down, teeth together. It feels hot. Make a mad face. Ooh, good one.',
                'Scared — eyes go wide, mouth goes open. It feels wobbly inside. Make a scared face.',
              ],
              do: [
                'Make each face alongside them, and hold the mirror up so they can see their own.',
                'Name the body clue as well as the face clue. Mad is hot, scared is wobbly — the body language is what they will actually notice in themselves.',
                'Say clearly that everybody has all four, including you. Say it more than once.',
              ],
              studentDoes: ['Produces each of the four faces and looks at it in the mirror.'],
              checks: [
                { ask: 'Show me your mad face.', lookFor: 'A recognisable attempt. Precision is irrelevant.' },
                { ask: 'Which feeling is hot inside?', lookFor: 'Mad.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'When Did You Feel That?',
              minutes: 4,
              say: [
                'Now let us find these feelings in real life. Yesterday, when your tower fell over — which feeling was that?',
                'Mad! You were really mad. That is a big one.',
                'What about this morning when we had pancakes?',
                'Happy. Yes. Now you tell me one. When did you feel scared?',
                'I felt scared too, when the dog barked. Grown-ups get scared as well.',
              ],
              do: [
                'Use real events from the last two days. Made-up examples do not connect at this age.',
                'Offer your own examples for each feeling, honestly. Modelling that adults have all four is a substantial part of the lesson.',
                'Never suggest a feeling was wrong or too big. Name it and move on.',
              ],
              studentDoes: ['Matches feelings to real remembered events, and offers at least one of their own.'],
              checks: [
                {
                  ask: 'Which feeling was that?',
                  lookFor: 'A feeling word attached to a real event.',
                  ifStuck: 'Give them two to choose from: "Was that mad or was that sad?" The distinction between those two is genuinely hard and the choice makes it possible.',
                },
                { ask: 'Can you tell me a time you felt happy?', lookFor: 'Any event, however small or however long ago.' },
              ],
              tip: 'Sad and mad are the pair children mix up most, and adults do too. If they say mad when you would say sad, take it. The naming habit matters more than the precision this year.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Feelings Page',
              minutes: 3,
              say: [
                'Four faces on this page. I am going to say a feeling and you put a dot on the right face.',
                'Find sad. Find mad. Find scared. Find happy.',
                'Now the last picture. This child dropped their ice cream. How do you think they feel? Draw their mouth.',
              ],
              do: [
                'Say the feeling words in a mixed-up order so they cannot answer by position.',
                'For the ice cream picture, accept any answer with a reason. Sad, mad and even happy-if-they-hated-it are all defensible.',
              ],
              studentDoes: ['Identifies the four feeling faces and interprets a situation picture.'],
              checks: [{ ask: 'How do you know that one is scared?', lookFor: 'Reference to the eyes or the open mouth.' }],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'How Are You Right Now?',
              minutes: 2,
              say: [
                'Last question, and it is the real one. How are you feeling right now, this second?',
                'Point at the face on the page.',
                'Happy. Good. I am feeling happy too.',
                'This page is going on the fridge, and I am going to ask you that question every morning.',
              ],
              do: ['Stick the page up somewhere at the child’s eye height before the lesson ends. Do it in front of them.'],
              studentDoes: ['Points at their current feeling.'],
              checks: [
                {
                  ask: 'How do you feel right now?',
                  lookFor: 'A point or a word. Any of the four is correct — there is no right answer to this one.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'pk3-ss-u2-l1-ws',
            title: 'How Do I Feel?',
            style: 'storybook',
            prepNotes:
              'Print two copies. One gets worked on, the other goes on the fridge at the child’s eye height as a permanent pointing card. This page earns its keep over months, not in one sitting.',
            sections: [
              {
                id: 's1',
                title: 'Find the Feeling',
                directions: 'I am going to say a feeling. Put a dot on the face that matches. Ready — find happy.',
                layout: 'grid',
                images: [
                  {
                    id: 'img-face-happy',
                    slot: 'Feeling card 1 — happy',
                    purpose:
                      'The anchor face. Happy is the feeling children read most reliably, so it goes first and sets the visual language — big, unambiguous features — that the other three cards follow.',
                    subject: 'a child’s face in close-up with a wide open smile, raised rounded cheeks and crinkled eyes, with short curly dark hair and deep brown skin',
                    count: 1,
                    composition: 'the face fills most of the frame, drawn head-on with bold simple features, generous white space around the head, no shoulders or body',
                    mustInclude: ['exactly one face', 'an unmistakably wide smile and crinkled eyes', 'the child drawn warmly and respectfully with natural proportions'],
                    mustAvoid: ['a caricature or exaggerated ethnic features', 'lettering or an emoji-style symbol', 'a body, hands or background', 'a subtle or ambiguous expression'],
                    aspect: '1:1',
                    altText: 'A child’s face with a big happy smile',
                  },
                  {
                    id: 'img-face-sad',
                    slot: 'Feeling card 2 — sad',
                    purpose:
                      'Sad and mad are the pair children confuse, so this face is drawn with drooping features and a single tear and deliberately without lowered eyebrows, which belong to mad.',
                    subject: 'a different child’s face in close-up with a downturned mouth, drooping eyelids and one tear on the cheek, with long straight black hair and light brown skin',
                    count: 1,
                    composition: 'the face fills most of the frame at the same size and head-on angle as the happy card, bold simple features, generous white space, no shoulders or body',
                    mustInclude: ['exactly one face', 'a clearly downturned mouth and one visible tear', 'a different child from the happy card, drawn with the same warmth and the same level of detail'],
                    mustAvoid: ['lowered angry eyebrows, which belong to the mad face', 'a caricature', 'lettering or emoji symbols', 'a body or background'],
                    aspect: '1:1',
                    altText: 'A child’s face looking sad with a tear',
                  },
                  {
                    id: 'img-face-mad',
                    slot: 'Feeling card 3 — mad',
                    purpose:
                      'The distinguishing feature of mad is the eyebrows, so they must be the loudest thing in the picture. This is the card the child will point at during a real feeling, so it has to be readable in half a second.',
                    subject: 'a third child’s face in close-up with strongly lowered angled eyebrows, a straight tight mouth and slightly flushed cheeks, with wavy red hair and pale freckled skin',
                    count: 1,
                    composition: 'the face fills most of the frame at the same size and angle as the other cards, the eyebrows drawn heavily and angled sharply downward towards the nose, generous white space, no shoulders or body',
                    mustInclude: ['exactly one face', 'heavy strongly angled eyebrows as the dominant feature', 'a third distinct child, drawn with the same warmth and detail as the others'],
                    mustAvoid: ['tears, which belong to the sad face', 'a snarl, bared teeth or anything frightening', 'lettering or emoji symbols', 'a body or background'],
                    aspect: '1:1',
                    altText: 'A child’s face looking mad with lowered eyebrows',
                  },
                  {
                    id: 'img-face-scared',
                    slot: 'Feeling card 4 — scared',
                    purpose:
                      'Scared is the feeling children have least language for. Wide eyes and a small open mouth are the two cues they can learn to read, and the card must show worry rather than terror so it stays usable.',
                    subject: 'a fourth child’s face in close-up with very wide open eyes, raised eyebrows and a small open oval mouth, with short blond hair, pale skin and round glasses',
                    count: 1,
                    composition: 'the face fills most of the frame at the same size and angle as the other three cards, eyes drawn noticeably larger and rounder than on the other faces, generous white space, no shoulders or body',
                    mustInclude: ['exactly one face', 'very wide round eyes and raised eyebrows', 'a fourth distinct child, drawn with the same warmth and detail as the others', 'the glasses drawn plainly and matter-of-factly'],
                    mustAvoid: ['a horrified or screaming expression', 'tears', 'anything in the picture that is itself frightening', 'lettering or emoji symbols', 'a body or background'],
                    aspect: '1:1',
                    altText: 'A child’s face looking scared with wide eyes',
                  },
                ],
              },
              {
                id: 's2',
                title: 'How Does This Child Feel?',
                directions: 'Look what happened. How do you think this child feels? Draw their mouth to show it.',
                layout: 'full',
                writingLines: 1,
                images: [
                  {
                    id: 'img-dropped-ice-cream',
                    slot: 'The dropped ice cream',
                    purpose:
                      'Moves from reading a face to inferring a feeling from a situation, which is a genuinely harder step. The face is deliberately left without a mouth so the child has to commit to an interpretation rather than copy one.',
                    subject:
                      'a child standing and looking down at a dropped ice cream cone splattered on the pavement in front of them, the child drawn with eyes and eyebrows but with no mouth at all, with braided hair and medium brown skin',
                    count: 1,
                    composition:
                      'the child on the left of the frame looking downward, the fallen ice cream clearly on the ground to their right, plenty of clear space around the lower face so a crayon mouth can be drawn in',
                    mustInclude: ['exactly one child', 'the face drawn with eyes and eyebrows but completely without a mouth', 'the dropped ice cream clearly on the ground and obviously fallen', 'the child drawn warmly and respectfully'],
                    mustAvoid: ['any mouth, smile or frown drawn on the child', 'tears, which would give the answer away', 'other people in the picture', 'lettering or a speech bubble'],
                    aspect: '4:3',
                    altText: 'A child looking at a dropped ice cream, with no mouth drawn on their face',
                  },
                ],
              },
            ],
            answerKey: [
              'Find the feeling: the four faces are happy (wide smile), sad (downturned mouth and a tear), mad (heavy lowered eyebrows) and scared (very wide eyes).',
              'How does this child feel: sad or mad are both correct and both worth discussing. Ask for the reason rather than checking the mouth shape — a child who says "happy, because they didn’t like it" has done excellent thinking.',
            ],
          },
          assessment: {
            successCriteria: [
              'Names all four feelings when shown the faces.',
              'Produces at least three of the four faces on request.',
              'Attaches one feeling to one real remembered event.',
              'Points at how they feel right now without hesitating over whether it is allowed.',
            ],
            exitTicket:
              'Pull one of the four faces yourself, out of the blue, later in the day. If they name it unprompted, it has landed.',
            rubric: [
              { level: 'emerging', descriptor: 'Recognises happy and sad; mad and scared need to be offered as a choice, and feelings are not yet linked to events.' },
              { level: 'developing', descriptor: 'Names all four from pictures and can say when they last felt happy, but confuses sad and mad and rarely names a feeling in the moment.' },
              { level: 'secure', descriptor: 'Uses all four words spontaneously, links them to real events including ones from the past, and notices a feeling in someone else’s face without being asked.' },
            ],
          },
          differentiation: {
            support: [
              'Two feelings only — happy and sad — until both are automatic. The other two can wait weeks and nothing is lost.',
              'Use photographs of the child’s own face rather than drawings. Their own face is the one they read most easily.',
              'Accept a pointed finger for every answer, all lesson.',
            ],
            extension: [
              'Add excited, worried and disappointed. Three-year-olds can hold more feeling words than we usually offer them.',
              'Read a familiar picture book and pause on each page to name what the character is feeling.',
              'Ask what someone could do to help when a person feels each of the four ways.',
            ],
            language: [
              'Feeling words are abstract and hard in any language. The face is the definition — always show it while you say the word.',
              'Ask a family member for the four words in the home language. A child in a big feeling reaches for their first language, and the word being available matters.',
              'Use the frame "I feel ___" rather than "I am ___". It is easier to say and it separates the feeling from the child.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Some feelings are naughty and you are not supposed to have them.',
              looksLike: 'The child hides their mad face, or says "I am not mad" while visibly furious, or looks anxious when asked to make the angry face.',
              correction: 'Say plainly and repeatedly that all four feelings are allowed and everybody has all of them. Name your own mad feelings out loud during the week. What we choose to do with a feeling is a separate question and comes in a later lesson.',
            },
            {
              misconception: 'You can only have one feeling at a time.',
              looksLike: 'The child insists they cannot be excited and scared about the same thing.',
              correction: 'Do not push this one — it is properly difficult. Just say your own mixed feelings out loud sometimes: "I am a bit sad and a bit happy." The idea seeds itself over months.',
            },
            {
              misconception: 'The feeling on someone’s face is about me.',
              looksLike: 'The child assumes an adult’s tired or worried face means they are cross with them.',
              correction: 'Narrate your own face when it does not match the room: "My face looks worried, but it is not about you — I am thinking about work." Children need this said explicitly, more than once.',
            },
          ],
          homeExtension: [
            'Ask "how are you feeling?" at the same moment every day — car door, bath time, lights out. The routine is what makes it answerable.',
            'Name your own feelings out loud, including the unflattering ones. "I am feeling mad because I burnt the toast."',
            'While reading, pause on one picture per book and ask how the character feels.',
          ],
          teacherNotes:
            'Do not turn this into behaviour management. The temptation is to jump straight from "you are mad" to "so what should you do?", and that turns a naming lesson into a telling-off. This unit is only about the words. A child who can say "I am mad" is already doing something enormous, and the strategies land far better in a fortnight once the naming is secure. One more thing: expect them to test the mad face on you within the hour. That is not defiance, it is practice.',
        },

        {
          id: 'pk3-ss-u2-l2',
          unitId: 'pk3-ss-u2',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'Faces Tell Us Feelings',
          essentialQuestion: 'Can I tell how someone feels by looking at them?',
          summary:
            'Reading feelings in other people — photographs, book characters and the faces of people in the house. The move from my feelings to your feelings is the whole lesson.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SE-Goal P-SE 6', framework: 'HeadStart-ELOF', text: 'Child expresses a broad range of emotions and recognises these emotions in self and others.' },
            { code: 'ELOF-SE-Goal P-SE 7', framework: 'HeadStart-ELOF', text: 'Child expresses care and concern toward others.' },
          ],
          objectives: ['I can look at a face and say the feeling.', 'I can notice when somebody in my house looks sad.'],
          vocabulary: [
            { term: 'notice', definition: 'To see something you were not looking for.' },
            { term: 'looks', definition: 'How something seems from the outside.' },
          ],
          materials: ['Photographs of faces, or a picture book with strong expressions', 'A mirror'],
          prep: ['Choose pictures with unmissable expressions. Ambiguous faces defeat the purpose.'],
          script: [],
          worksheet: { id: 'pk3-ss-u2-l2-ws', title: 'Reading Faces', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Identifies the feeling in four photographs of other people.'],
            exitTicket: 'Pull a face and ask them to name it.',
          },
          differentiation: {
            support: ['Use faces of people the child knows. Familiar faces are much easier to read.'],
            extension: ['Ask what might have happened to make that person feel that way.'],
            language: ['Facial expressions are close to universal, so this lesson works well before spoken vocabulary catches up.'],
          },
          misconceptions: [
            {
              misconception: 'People always show their feelings on their faces.',
              looksLike: 'The child insists someone is fine because they are smiling.',
              correction: 'Too subtle to teach directly at three. Just model asking: "You look all right, but how are you actually feeling?"',
            },
          ],
          homeExtension: ['Point out faces in the street or on the bus and wonder aloud what those people might be feeling.'],
        },
        {
          id: 'pk3-ss-u2-l3',
          unitId: 'pk3-ss-u2',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'What Makes Me Feel Happy?',
          essentialQuestion: 'What are the things that make me feel good?',
          summary:
            'Builds a personal happy list — places, people, foods, activities — that becomes a genuinely useful tool on a bad day. This is the first self-regulation lesson in disguise.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
            { code: 'ELOF-SE-Goal P-SE 10', framework: 'HeadStart-ELOF', text: 'Child expresses confidence in own skills and positive feelings about self.' },
          ],
          objectives: ['I can name four things that make me feel happy.', 'I can draw one of them.'],
          vocabulary: [
            { term: 'happy', definition: 'The good feeling that makes you smile.' },
            { term: 'because', definition: 'The word that tells you why.' },
          ],
          materials: ['Paper and crayons', 'Magazines to cut from if you have them'],
          prep: ['Have your own four ready. The child will ask.'],
          script: [],
          worksheet: { id: 'pk3-ss-u2-l3-ws', title: 'My Happy Things', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names four sources of happiness including at least one person and one activity.'],
            exitTicket: 'Ask for one thing that would cheer them up right now.',
          },
          differentiation: {
            support: ['Two things. Offer choices if producing them is hard.'],
            extension: ['Sort the list into things they can do on their own and things that need somebody else.'],
            language: ['Introduce "because" here. It is a big word and this is the easiest possible context for it.'],
          },
          misconceptions: [
            {
              misconception: 'Only new toys and treats make people happy.',
              looksLike: 'Every item on the list is something to be bought.',
              correction: 'Add your own list out loud, full of free things — a walk, a bath, someone laughing. Do not correct theirs, just widen the field.',
            },
          ],
          homeExtension: ['Stick the happy list up and use it on a bad afternoon. "Shall we pick one off your list?"'],
        },
        {
          id: 'pk3-ss-u2-l4',
          unitId: 'pk3-ss-u2',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'When I Feel Mad: Three Calm-Down Tricks',
          essentialQuestion: 'What can I do with a big hot feeling?',
          summary:
            'Three physical strategies — breathe like you are blowing out candles, squeeze your fists and let go, go to a quiet spot — practised while calm so they are available when not.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SE-Goal P-SE 8', framework: 'HeadStart-ELOF', text: 'Child manages emotions with increasing independence.' },
            { code: 'ELOF-ATL-Goal P-ATL 4', framework: 'HeadStart-ELOF', text: 'Child manages actions, words and behaviour with increasing independence.' },
          ],
          objectives: ['I can do the candle breath.', 'I can name one thing to do when I feel mad.'],
          vocabulary: [
            { term: 'calm', definition: 'Quiet and settled inside.' },
            { term: 'breathe', definition: 'To take air in and let it out.' },
          ],
          materials: ['A birthday candle, unlit, or a pinwheel', 'A cushion or a designated calm corner'],
          prep: [
            'Practise these when the child is completely calm. A strategy taught mid-meltdown is not a strategy, it is an argument.',
            'Set up the calm spot together and let them choose where it is.',
          ],
          script: [],
          worksheet: { id: 'pk3-ss-u2-l4-ws', title: 'My Calm-Down Tricks', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Performs the candle breath on request.', 'Names one strategy without prompting.'],
            exitTicket: 'Say "show me your calm-down breath" while everything is peaceful.',
          },
          differentiation: {
            support: ['One strategy only, and make it the breath. Three options is too many to choose between in a big feeling.'],
            extension: ['Add counting to five, or asking for a hug, and let them choose which to use.'],
            language: ['These are physical, not verbal, which is exactly why they work when language deserts a child.'],
          },
          misconceptions: [
            {
              misconception: 'Calming down means the feeling was wrong and has to be got rid of.',
              looksLike: 'The child says sorry for being angry, or hides it.',
              correction: 'Say it clearly: the mad feeling is fine, and always will be. The tricks are for what we do next, not for the feeling itself.',
            },
          ],
          homeExtension: ['Do the candle breath together at bedtime every night so it is well practised before it is ever needed.'],
        },
        {
          id: 'pk3-ss-u2-l5',
          unitId: 'pk3-ss-u2',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'How Does She Feel?',
          essentialQuestion: 'How does somebody else feel when I do that?',
          summary:
            'The first steps of empathy, using toys to act out small scenarios: someone gets left out, someone gets their tower knocked down, someone gets a turn given to them.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SE-Goal P-SE 7', framework: 'HeadStart-ELOF', text: 'Child expresses care and concern toward others.' },
            { code: 'ELOF-SE-Goal P-SE 6', framework: 'HeadStart-ELOF', text: 'Child expresses a broad range of emotions and recognises these emotions in self and others.' },
          ],
          objectives: ['I can say how the other person feels in a story.', 'I can think of one way to help.'],
          vocabulary: [
            { term: 'kind', definition: 'Doing something that helps somebody feel better.' },
            { term: 'help', definition: 'To make things easier for someone.' },
          ],
          materials: ['Two or three toy figures or puppets', 'A few blocks to knock over'],
          prep: ['Keep the scenarios tiny and concrete. Abstract moral situations do not register at three.'],
          script: [],
          worksheet: { id: 'pk3-ss-u2-l5-ws', title: 'How Do They Feel?', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Names the feeling of a character in a scenario.', 'Suggests one helpful action.'],
            exitTicket: 'Knock over a toy’s tower and ask how that toy feels.',
          },
          differentiation: {
            support: ['Use scenarios that happened to the child themselves this week. Their own memory supplies the feeling.'],
            extension: ['Ask how both characters feel, including the one who did the knocking over.'],
            language: ['Third-person feeling talk — "he feels", "she feels" — is grammatically harder than the first person. Model it heavily.'],
          },
          misconceptions: [
            {
              misconception: 'Everybody feels what I feel.',
              looksLike: 'The child insists the other toy is happy because they themselves are happy.',
              correction: 'Entirely age-appropriate and not a fault. Keep asking the question. It resolves gradually over the next two years.',
            },
          ],
          homeExtension: ['When a sibling or friend is upset, ask quietly what might help, rather than instructing.'],
        },
      ],
    },

    /* ============================================================ UNIT 3 */
    {
      id: 'pk3-ss-u3',
      gradeId: 'pk3',
      subjectId: 'social-studies',
      sequence: 3,
      title: 'Getting Along: Turns, Sharing and Rules',
      bigIdea:
        'When people are together, a few agreements make it work — you get a turn, then I get a turn, and everybody knows what happens next.',
      description:
        'Sharing is not a virtue a three-year-old can simply be told to have; it is a set of concrete procedures they can be taught. This unit teaches those procedures — waiting for a turn, using a timer, asking instead of grabbing — and then makes the rules explicit and visible so they belong to the child rather than to the adult enforcing them.',
      weeks: 5,
      standards: [
        { code: 'ELOF-SE-Goal P-SE 4', framework: 'HeadStart-ELOF', text: 'Child engages in cooperative play with other children.' },
        { code: 'ELOF-SE-Goal P-SE 5', framework: 'HeadStart-ELOF', text: 'Child uses basic problem-solving skills to resolve conflicts with other children.' },
        { code: 'ELOF-ATL-Goal P-ATL 2', framework: 'HeadStart-ELOF', text: 'Child follows classroom rules and routines with increasing independence.' },
        { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
      ],
      lessonTitles: [
        'One Turn, Then Your Turn',
        'The Sand Timer',
        'Why Do We Have Rules?',
        'Asking Instead of Grabbing',
        'Jobs We All Do at Home',
      ],
      performanceTask:
        'Our House Rules Poster: three rules the child helps choose, drawn as pictures rather than written, stuck on the wall at their height. They explain each one to a visitor.',
      lessons: [
        {
          id: 'pk3-ss-u3-l1',
          unitId: 'pk3-ss-u3',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'One Turn, Then Your Turn',
          essentialQuestion: 'How do two people play with one toy?',
          summary:
            'Turn-taking taught as a physical routine with a single desirable object and a clear handover phrase. Short turns, many repetitions, adult holding the rhythm.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SE-Goal P-SE 4', framework: 'HeadStart-ELOF', text: 'Child engages in cooperative play with other children.' },
          ],
          objectives: ['I can take a turn and then hand it over.', 'I can say "your turn".'],
          vocabulary: [
            { term: 'turn', definition: 'Your go, then somebody else’s go.' },
            { term: 'wait', definition: 'To stay still until it is your time.' },
          ],
          materials: ['One genuinely desirable toy', 'Two chairs facing each other'],
          prep: ['Keep the first turns to about five seconds. Long turns break this at three.'],
          script: [],
          worksheet: { id: 'pk3-ss-u3-l1-ws', title: 'Taking Turns', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Hands the object over at the end of a turn without a struggle, three times running.'],
            exitTicket: 'Say "my turn" and hold out your hand. Watch what happens.',
          },
          differentiation: {
            support: ['Turns of three seconds. Build the rhythm before you build the duration.'],
            extension: ['Three players, so waiting happens twice before their go comes round.'],
            language: ['"My turn" and "your turn" are a matched pair worth drilling as a chant.'],
          },
          misconceptions: [
            {
              misconception: 'Giving the toy away means never getting it back.',
              looksLike: 'The child clings on and becomes distressed at the handover.',
              correction: 'A completely rational fear. Make the return absolutely reliable, every time, quickly, for a fortnight. Trust is what makes turn-taking possible, not fairness lectures.',
            },
          ],
          homeExtension: ['Take turns with something adults control — choosing the song in the car, pressing the lift button.'],
        },
        {
          id: 'pk3-ss-u3-l2',
          unitId: 'pk3-ss-u3',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'The Sand Timer',
          essentialQuestion: 'How long is a turn?',
          summary:
            'A visible timer takes the decision out of the adult’s hands. When the sand runs out the turn ends, and the child can watch it happening rather than being told.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SE-Goal P-SE 4', framework: 'HeadStart-ELOF', text: 'Child engages in cooperative play with other children.' },
            { code: 'ELOF-ATL-Goal P-ATL 2', framework: 'HeadStart-ELOF', text: 'Child follows classroom rules and routines with increasing independence.' },
          ],
          objectives: ['I can watch the timer and give up my turn when it runs out.'],
          vocabulary: [
            { term: 'timer', definition: 'A thing that shows when time is up.' },
            { term: 'finished', definition: 'All done.' },
          ],
          materials: ['A one-minute or two-minute sand timer', 'A shared toy'],
          prep: ['Sand is far better than a digital timer here, because the child can see how much is left.'],
          script: [],
          worksheet: { id: 'pk3-ss-u3-l2-ws', title: 'When the Sand Runs Out', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Hands over when the timer finishes, with a reminder at most.'],
            exitTicket: 'Start the timer and ask what happens when the sand is all at the bottom.',
          },
          differentiation: {
            support: ['Thirty seconds. Watching the sand is itself absorbing and helps the wait.'],
            extension: ['Let the child run the timer for two other people.'],
            language: ['Use "nearly finished" as a warning phrase, consistently, so it becomes a signal.'],
          },
          misconceptions: [
            {
              misconception: 'The adult decides when the turn ends, so it is unfair when it feels short.',
              looksLike: 'The child argues with you rather than looking at the timer.',
              correction: 'Point at the timer, not at yourself. "It is not me, look — the sand says." Handing authority to the object defuses an enormous amount.',
            },
          ],
          homeExtension: ['Use the timer for screen time and tooth brushing. Same object, same rule, less argument.'],
        },

        {
          id: 'pk3-ss-u3-l3',
          unitId: 'pk3-ss-u3',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Why Do We Have Rules?',
          essentialQuestion: 'What would happen if there were no rules?',
          summary:
            'A deliberately chaotic game with no rules at all, played for two minutes until it collapses, followed by the same game with one rule the child invents. The contrast makes rules feel useful rather than imposed.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-ATL-Goal P-ATL 2', framework: 'HeadStart-ELOF', text: 'Child follows classroom rules and routines with increasing independence.' },
            { code: 'ELOF-SE-Goal P-SE 5', framework: 'HeadStart-ELOF', text: 'Child uses basic problem-solving skills to resolve conflicts with other children.' },
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
          ],
          objectives: ['I can name one rule we have at home.', 'I can say why that rule helps.', 'I can help make a new rule.'],
          vocabulary: [
            { term: 'rule', definition: 'Something we all agree to do so things work.' },
            { term: 'safe', definition: 'Nobody gets hurt.' },
            { term: 'fair', definition: 'Everybody gets the same chance.' },
          ],
          materials: ['A simple ball game or a stack of blocks', 'Paper and crayons for the rules poster', 'Sticky tack'],
          prep: [
            'Be genuinely willing to let the no-rules round descend into chaos. If you rescue it, the lesson has no evidence.',
            'Decide in advance which three rules you actually want on the poster, but let the child arrive at them.',
          ],
          script: [],
          worksheet: { id: 'pk3-ss-u3-l3-ws', title: 'Our Rules', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['States one household rule and gives a reason for it.', 'Contributes at least one rule to the poster.'],
            exitTicket: 'Ask what our rule about hands is, and why we have it.',
          },
          differentiation: {
            support: ['One rule, drawn as one picture. Safety rules are the easiest to justify.'],
            extension: ['Ask what should happen when somebody forgets a rule, which is a genuinely interesting conversation.'],
            language: ['Keep every rule to three words and a picture: "Walk inside." "Gentle hands."'],
          },
          misconceptions: [
            {
              misconception: 'Rules are things grown-ups invented to stop children having fun.',
              looksLike: 'The child recites rules resentfully or only when an adult is watching.',
              correction: 'Let them make a rule for you and hold you to it. Being the rule-maker rather than the rule-follower reframes the whole category in about ninety seconds.',
            },
          ],
          homeExtension: ['Put the picture rules on the wall at child height and refer to the poster rather than to yourself when reminding.'],
        },
        {
          id: 'pk3-ss-u3-l4',
          unitId: 'pk3-ss-u3',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Asking Instead of Grabbing',
          essentialQuestion: 'What do I do when I want something someone else has?',
          summary:
            'Replaces grabbing with a script: stop, say "can I have a turn please", and wait. Rehearsed on purpose, calmly, before it is ever needed in anger.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SE-Goal P-SE 5', framework: 'HeadStart-ELOF', text: 'Child uses basic problem-solving skills to resolve conflicts with other children.' },
            { code: 'ELOF-LC-Goal P-LC 4', framework: 'HeadStart-ELOF', text: 'Child understands, follows and uses appropriate social and conversational rules.' },
          ],
          objectives: ['I can ask for a turn with words.', 'I can wait for an answer.'],
          vocabulary: [
            { term: 'ask', definition: 'To use your words to request something.' },
            { term: 'please', definition: 'The word that makes a request polite.' },
            { term: 'grab', definition: 'To snatch without asking.' },
          ],
          materials: ['Two toys', 'A puppet or a willing sibling to practise on'],
          prep: ['Rehearse the exact sentence you want. One sentence, always the same words.'],
          script: [],
          worksheet: { id: 'pk3-ss-u3-l4-ws', title: 'Using My Words', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Uses the asking sentence in a rehearsed scenario.', 'Waits for a response before acting.'],
            exitTicket: 'Hold something they want and see whether the words come before the hand.',
          },
          differentiation: {
            support: ['Two words is plenty: "turn please". Teach a hand signal alongside it.'],
            extension: ['Practise what to do when the answer is no, which is much harder than asking.'],
            language: ['A child with limited English needs a sign as well as a phrase. Agree one and teach it to everyone in the house.'],
          },
          misconceptions: [
            {
              misconception: 'Asking guarantees a yes.',
              looksLike: 'The child asks politely, hears no, and grabs anyway.',
              correction: 'Practise hearing no while calm. Say no yourself in a rehearsal, then hand it over five seconds later so waiting visibly works.',
            },
          ],
          homeExtension: ['Use the same sentence yourself when you want something they have. Model it, do not just require it.'],
        },
        {
          id: 'pk3-ss-u3-l5',
          unitId: 'pk3-ss-u3',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Jobs We All Do at Home',
          essentialQuestion: 'What is my job in this house?',
          summary:
            'Everybody in the household has jobs, including the child. The lesson names who does what and hands the child one real, non-token responsibility.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
            { code: 'ELOF-ATL-Goal P-ATL 10', framework: 'HeadStart-ELOF', text: 'Child demonstrates initiative and independence.' },
          ],
          objectives: ['I can name a job I do at home.', 'I can say one job somebody else does.'],
          vocabulary: [
            { term: 'job', definition: 'Something you are in charge of doing.' },
            { term: 'help', definition: 'To do part of the work.' },
          ],
          materials: ['A chart with a picture for each job', 'Whatever the jobs require'],
          prep: ['Pick a job that genuinely needs doing. Children spot a made-up job instantly.'],
          script: [],
          worksheet: { id: 'pk3-ss-u3-l5-ws', title: 'My Job', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Names their own job and one other person’s.', 'Completes their job once with a reminder.'],
            exitTicket: 'Ask whose job it is to feed the cat.',
          },
          differentiation: {
            support: ['One job, done at the same time every day, with you alongside.'],
            extension: ['Add a second job and let them choose it.'],
            language: ['Job names are concrete and repeated daily — excellent vocabulary ground.'],
          },
          misconceptions: [
            {
              misconception: 'Jobs are punishments.',
              looksLike: 'The child asks what they did wrong when given a job.',
              correction: 'Frame it as membership, not correction. Everybody in this house has jobs, including the grown-ups, and here is the list to prove it.',
            },
          ],
          homeExtension: ['Do not redo their job in front of them. A badly laid table is a laid table.'],
        },
      ],
    },

    /* ============================================================ UNIT 4 */
    {
      id: 'pk3-ss-u4',
      gradeId: 'pk3',
      subjectId: 'social-studies',
      sequence: 4,
      title: 'The People Who Help Our Neighbourhood',
      bigIdea:
        'Lots of people we do not know do jobs that keep our street working, and each one has tools and a place where they work.',
      description:
        'The first step outside the front door. Community jobs are ideal at this age because they are visible, they involve interesting equipment, and the child has met most of these people already without noticing. The unit deliberately shows a wide range of people in every role, because who a child pictures doing a job is decided embarrassingly early.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
        { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
        { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
      ],
      lessonTitles: [
        'Who Works in Our Neighbourhood?',
        'How Does the Post Get Here?',
        'People Who Keep Us Safe',
        'Where Does Our Food Come From?',
        'What Job Would I Like to Do?',
      ],
      performanceTask:
        'The Neighbourhood Walk Report: a twenty-minute walk with a mission to spot three people at work. Back home, the child tells someone who they saw, what they were carrying, and what they were doing.',
      lessons: [
        /* -------------------------------------------------------- AUTHORED */
        {
          id: 'pk3-ss-u4-l1',
          unitId: 'pk3-ss-u4',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'authored',
          title: 'Who Works in Our Neighbourhood?',
          essentialQuestion: 'Who are the people that help our street work?',
          summary:
            'Four jobs, four sets of tools, and one question the child can ask about anybody they see working: what is that person doing, and what are they carrying? Matching tools to workers gives the abstract idea of a job something to hold on to.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
            { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
          ],
          objectives: [
            'I can name four jobs people do near my home.',
            'I can match a worker to the thing they use.',
            'I can say one thing each worker helps with.',
          ],
          vocabulary: [
            { term: 'job', definition: 'The work somebody does, usually to help other people.', example: 'Her job is driving the bus.' },
            { term: 'helper', definition: 'Somebody who does something useful for other people.' },
            { term: 'neighbourhood', definition: 'The streets and shops near where you live.' },
            { term: 'tool', definition: 'A thing you use to do your job.', example: 'A doctor uses a stethoscope.' },
          ],
          materials: [
            'A real letter or parcel that arrived recently',
            'Any props you have: a toy stethoscope, a shopping basket, a high-visibility vest',
            'The printed worksheet',
            'Chunky crayons',
          ],
          prep: [
            'Keep back a letter that came this morning. Producing real post is better than any picture.',
            'Think of the actual people on your street — the person at the corner shop, the one who empties the bins. Use their real jobs, and their names if you know them.',
            'Notice your own assumptions before you start. Say "the doctor, she" and "the bin collector, she" at least once each during this lesson.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'How Did This Get Here?',
              minutes: 3,
              say: [
                'Look what was on the mat this morning. A letter, with our name on it.',
                'But hang on. This letter came from far away. How did it get from there to our door?',
                'Did it walk? Did it fly on its own?',
                'A person brought it. A person picked it up, carried it here in a big bag, and put it through our door while we were asleep.',
                'There are lots of people like that near us, doing jobs we do not even see.',
              ],
              do: [
                'Hold the real letter up and turn it over. Let them handle it.',
                'Look genuinely puzzled about how it arrived. Take their silly suggestions seriously.',
              ],
              studentDoes: ['Handles the letter and speculates about how it got there.'],
              checks: [
                {
                  ask: 'Who brought this to our house?',
                  lookFor: 'A person, or the postal worker, or "the post lady".',
                  ifStuck: 'Ask, "Did it come by itself?" The absurdity gets them to a person.',
                },
              ],
              tip: 'Real post beats a picture of post by a mile. If nothing came today, keep an envelope back from yesterday.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Four Jobs, Four Things They Carry',
              minutes: 3,
              say: [
                'Here are four people who work near us, and here is how you spot each one — by what they are carrying.',
                'The postal worker carries a big heavy bag full of letters. She walks the whole street.',
                'The doctor uses a stethoscope, that round thing that listens to your chest.',
                'The bin collector rides on the lorry and lifts the wheelie bins. She has a bright yellow jacket so drivers can see her.',
                'The shopkeeper works behind the counter and helps you find things and pay.',
              ],
              do: [
                'Hold up or mime the tool for each job as you name it.',
                'Deliberately vary the pronouns. Say "she" for the bin collector and the doctor. Say it as if it is completely unremarkable, because it is.',
                'Connect each one to a real person if you can. "Like the man in the shop on the corner."',
              ],
              studentDoes: ['Repeats the job names and mimes the tools.'],
              checks: [
                { ask: 'What does the postal worker carry?', lookFor: 'A bag, or letters.' },
                { ask: 'Who wears the bright yellow jacket, and why?', lookFor: 'The bin collector, so people can see her.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Give Them Their Thing',
              minutes: 4,
              say: [
                'Now you are in charge of handing out the equipment. I will tell you who needs it and you find the right thing.',
                'The doctor is here. What does she need?',
                'The bin collector is here. What does she need?',
                'Now backwards. I hold up a thing, you tell me whose it is.',
                'And the big question — what does each one help us with?',
              ],
              do: [
                'Lay out whatever props you have. Mime the ones you do not have and let the child mime them back.',
                'Run the reverse direction too. Tool to worker is a genuinely different task from worker to tool.',
                'End on the helping question for each job. That is the part that makes it social studies rather than vocabulary.',
              ],
              studentDoes: ['Matches tools to workers in both directions and says what each job helps with.'],
              checks: [
                {
                  ask: 'What does the bin collector help us with?',
                  lookFor: 'Taking the rubbish away, keeping the street clean.',
                  ifStuck: 'Ask what would happen if nobody came for the bins for a whole month. The answer arrives immediately and vividly.',
                },
                { ask: 'Whose is this stethoscope?', lookFor: 'The doctor, or the nurse. Both are correct.' },
              ],
              tip: 'The "what would happen if nobody did this job" question is the single most powerful move in this unit. Use it for all four.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Matching Page',
              minutes: 3,
              say: [
                'Four workers at the top of this page and four things at the bottom.',
                'Draw a line from each person to the thing they use.',
                'Say the job name out loud as you draw each line.',
                'Then put a dot on the one you have seen for real, near our house.',
              ],
              do: [
                'Read the directions aloud and point to each part of the page.',
                'Ask about the dotted one afterwards. Where did they see that person? What were they doing?',
              ],
              studentDoes: ['Matches four workers to four tools and identifies one they have seen in real life.'],
              checks: [{ ask: 'Where did you see that one?', lookFor: 'A real place — our street, the shop, the hospital.' }],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Spot One Today',
              minutes: 2,
              say: [
                'Here is your job for today. When we go out, I want you to spot one person working.',
                'When you see them, tell me two things: what they are doing, and what they are carrying.',
                'Anybody counts. Somebody sweeping, somebody driving a van, somebody up a ladder.',
                'Deal? Good. I am relying on you.',
              ],
              do: ['Shake on it. Then actually follow through when you next go out — the follow-through is the lesson.'],
              studentDoes: ['Accepts the spotting mission and can restate it.'],
              checks: [{ ask: 'What are you looking for when we go out?', lookFor: 'Somebody working, and what they are carrying.' }],
            },
          ],
          worksheet: {
            id: 'pk3-ss-u4-l1-ws',
            title: 'People Who Help',
            style: 'storybook',
            prepNotes:
              'Look at this page yourself before handing it over and notice who is drawn in which job — the doctor is a woman in a hijab, the bin collector is a woman, the postal worker is a Black man, the shopkeeper is an older South Asian man. That is deliberate. Say the job names with matching pronouns and do not draw attention to it; the point is that it passes without comment.',
            sections: [
              {
                id: 's1',
                title: 'The People',
                directions: 'Here are four people who help our neighbourhood. Point to each one and say their job with me.',
                layout: 'row',
                images: [
                  {
                    id: 'img-worker-postal',
                    slot: 'Worker 1 — the postal worker',
                    purpose:
                      'Connects directly to the real letter used in the hook, which is the most concrete link to the child’s own life in this unit. The bag is the identifying feature and must be unmistakable.',
                    subject:
                      'a Black man in a postal worker’s uniform walking and carrying a large full shoulder bag of letters, with one letter in his free hand',
                    count: 1,
                    composition: 'a full-length figure standing upright and facing forward, drawn at the same size as the other three worker figures, generous white space around him, no background',
                    mustInclude: ['exactly one person', 'a large obviously full letter bag over the shoulder', 'the figure drawn warmly and respectfully with natural proportions and a friendly ordinary expression'],
                    mustAvoid: ['any caricature or exaggerated features', 'lettering, logos or brand marks on the uniform or bag', 'a street, van or background scenery', 'a heroic or posed stance'],
                    aspect: '3:4',
                    altText: 'A postal worker carrying a bag of letters',
                  },
                  {
                    id: 'img-worker-doctor',
                    slot: 'Worker 2 — the doctor',
                    purpose:
                      'Who a child pictures when they hear the word doctor is settled remarkably early. Drawing this one as a woman in a hijab, with no fuss made of it, is the whole reason this image has its own spec.',
                    subject:
                      'a woman doctor wearing a hijab and a plain white coat, standing and holding a stethoscope in one hand',
                    count: 1,
                    composition: 'a full-length figure standing upright and facing forward, drawn at the same size as the other three worker figures, the stethoscope clearly visible and held away from the body, generous white space, no background',
                    mustInclude: ['exactly one person', 'a clearly visible stethoscope', 'the hijab drawn plainly and matter-of-factly as part of the outfit', 'the figure drawn warmly and respectfully with natural proportions'],
                    mustAvoid: ['any caricature or exaggerated features', 'medical equipment that looks alarming', 'lettering or a name badge with text', 'a hospital or background scenery'],
                    aspect: '3:4',
                    altText: 'A doctor wearing a hijab and holding a stethoscope',
                  },
                  {
                    id: 'img-worker-bins',
                    slot: 'Worker 3 — the bin collector',
                    purpose:
                      'The job children see most often and think about least. Drawn as a woman for the same reason as the doctor, and drawn with the same dignity as the other three — this is the image most likely to be casually condescended to, so it must not be.',
                    subject:
                      'a white woman bin collector in a bright high-visibility jacket and work gloves, standing beside a wheelie bin with one hand on its handle',
                    count: 1,
                    composition: 'a full-length figure standing upright and facing forward, drawn at the same size as the other three worker figures, the wheelie bin beside her and clearly separate from her body, generous white space, no background',
                    mustInclude: ['exactly one person', 'a bright high-visibility jacket', 'the figure drawn warmly and respectfully with natural proportions and the same care as the doctor and the postal worker'],
                    mustAvoid: ['rubbish spilling, flies or anything suggesting the job is dirty or beneath others', 'lettering or council logos', 'a lorry, street or background scenery', 'a stooped or apologetic posture'],
                    aspect: '3:4',
                    altText: 'A bin collector in a high-visibility jacket beside a wheelie bin',
                  },
                  {
                    id: 'img-worker-shopkeeper',
                    slot: 'Worker 4 — the shopkeeper',
                    purpose:
                      'The worker the child has most likely spoken to themselves. Standing behind a counter gives the visual cue for a workplace without needing a whole shop drawn around him.',
                    subject:
                      'an older South Asian man in a shop apron standing behind a plain counter with a shopping basket of groceries on it in front of him',
                    count: 1,
                    composition: 'the figure shown from the waist up behind a plain counter, drawn at the same visual size as the other three worker figures, the basket clearly on the counter, generous white space, no background',
                    mustInclude: ['exactly one person', 'a plain counter and a visible basket of groceries', 'the figure drawn warmly and respectfully with natural proportions and a friendly ordinary expression'],
                    mustAvoid: ['any caricature or exaggerated features', 'shop signage, price labels or any lettering', 'shelves and products filling the background', 'a cluttered scene'],
                    aspect: '3:4',
                    altText: 'A shopkeeper standing behind a counter with a basket of groceries',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Match the Thing They Use',
                directions: 'Draw a line from each person to the thing they use for their job. Say the job out loud as you draw.',
                layout: 'row',
                images: [
                  {
                    id: 'img-worker-tools-4',
                    slot: 'Four tools in a row',
                    purpose:
                      'Tools are the concrete hook for an abstract idea. Placing them in a separate row, in a different order from the workers above, means the matching cannot be done by position and has to be done by thinking.',
                    subject:
                      'a horizontal row of four separate objects: a stethoscope, a wheelie bin, a bulging shoulder bag full of letters, a wire shopping basket',
                    count: 4,
                    composition:
                      'one straight horizontal row, four objects evenly spaced with wide clear gaps, all drawn as clean simple outlines at roughly the same size on a common baseline so matching lines can reach each one, deliberately not in the same order as the people above',
                    mustInclude: ['exactly four objects', 'each object instantly recognisable in outline alone', 'the letter bag drawn visibly full with envelope corners showing'],
                    mustAvoid: ['people in this row', 'lettering, logos or writing on any object', 'objects touching or overlapping', 'a background'],
                    aspect: '4:1',
                    altText: 'A stethoscope, a wheelie bin, a bag of letters and a shopping basket in a row',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Which One Have You Seen?',
                directions: 'Put a big dot on the person you have really seen near our house. Then tell me where you saw them.',
                layout: 'full',
                writingLines: 1,
              },
            ],
            answerKey: [
              'Matching: postal worker to the bag of letters, doctor to the stethoscope, bin collector to the wheelie bin, shopkeeper to the shopping basket.',
              'Which one have you seen: any answer. The follow-up question — where, and what were they doing — is the real assessment.',
            ],
          },
          assessment: {
            successCriteria: [
              'Names at least three of the four jobs.',
              'Matches all four workers to their tools.',
              'Says what one job helps with, in their own words.',
              'Identifies one worker they have seen in real life and where.',
            ],
            exitTicket:
              'On the next trip out, ask them to find one person working and tell you two things about them. Doing this without prompting a week later is the real pass.',
            rubric: [
              { level: 'emerging', descriptor: 'Recognises the workers in pictures and names one or two jobs, but does not yet connect a job to what it does for people.' },
              { level: 'developing', descriptor: 'Names all four jobs and matches the tools, and can say what one or two of the jobs help with.' },
              { level: 'secure', descriptor: 'Names the jobs, explains what each helps with, spots workers unprompted when out, and is not thrown when a job is done by someone unexpected.' },
            ],
          },
          differentiation: {
            support: [
              'Two jobs only, and choose the two the child has actually met — most likely the postal worker and the shopkeeper.',
              'Use real props rather than the page. Wearing a high-visibility vest teaches more than matching a picture of one.',
              'Accept pointing for every answer.',
            ],
            extension: [
              'Add jobs the child is curious about — a vet, a bus driver, a builder — and find the tool for each.',
              'Ask what would happen if nobody did one of these jobs for a whole month.',
              'Write a thank-you card together for someone who does one of these jobs on your street, and actually give it to them.',
            ],
            language: [
              'Job names are concrete nouns attached to visible people, which makes them unusually easy vocabulary. Say each one three times.',
              'If a family member does one of these jobs, start there. A job with a face and a name attached is worth four from a worksheet.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Certain jobs belong to men and certain jobs belong to women.',
              looksLike: 'The child corrects you when you say "the doctor, she", or insists the bin collector must be a man.',
              correction: 'Do not lecture. Just keep saying it, with matching pictures, without comment. The correction that works is repeated ordinary exposure, not an argument — and one real-life encounter with a woman bin collector will do more than a year of pictures.',
            },
            {
              misconception: 'People who work in uniform are there to tell you off.',
              looksLike: 'The child becomes wary or hides when a uniformed worker approaches.',
              correction: 'Frame every job in this unit around what it gives us, not what it stops us doing. Where possible, say hello to a real worker together and let the interaction be ordinary and brief.',
            },
            {
              misconception: 'Only jobs with special outfits count as real work.',
              looksLike: 'The child says a family member who works at home or in an office does not have a job.',
              correction: 'Add the jobs of everyone in the household to the list, including unpaid ones. Caring for people is work and it belongs on the page.',
            },
          ],
          homeExtension: [
            'Wave at the bin lorry. It costs nothing and the crew almost always wave back, which makes the whole idea real.',
            'Let the child hand over the money or the card at the shop and say thank you themselves.',
            'On every walk, spot one person working and ask what they are carrying.',
          ],
          teacherNotes:
            'Be deliberate about who does which job in the pictures and in your language, and then be entirely undramatic about it. Children build their picture of who can do what from exactly this kind of incidental detail, long before anybody sits them down to discuss it — and a lesson that announces "girls can be bin collectors too!" teaches that it is surprising. Saying "she" and moving straight on teaches that it is not.',
        },

        {
          id: 'pk3-ss-u4-l2',
          unitId: 'pk3-ss-u4',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'How Does the Post Get Here?',
          essentialQuestion: 'What happens to a letter after I put it in the postbox?',
          summary:
            'Writes and posts a real letter to a relative, then traces the journey with pictures: postbox, van, sorting place, bag, door. A week later the reply arrives, which is the best possible ending.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
          ],
          objectives: ['I can post a letter in a postbox.', 'I can say two things that happen to it next.'],
          vocabulary: [
            { term: 'post', definition: 'Letters and parcels that get delivered.' },
            { term: 'postbox', definition: 'The box in the street where letters go in.' },
            { term: 'deliver', definition: 'To bring something to somebody’s door.' },
          ],
          materials: ['Paper, envelope and a stamp', 'A relative’s address', 'A walk to the nearest postbox'],
          prep: ['Arrange with the recipient to reply promptly. The arriving reply is what completes the idea.'],
          script: [],
          worksheet: { id: 'pk3-ss-u4-l2-ws', title: 'The Journey of a Letter', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Posts the letter themselves.', 'Describes two stages of the journey.'],
            exitTicket: 'Ask what happens to the letter after it goes into the slot.',
          },
          differentiation: {
            support: ['Two stages only: it goes in the box, a person brings it to the door.'],
            extension: ['Put the journey pictures in order as a sequence.'],
            language: ['Sequencing words are the target here: first, then, next, last.'],
          },
          misconceptions: [
            {
              misconception: 'The letter goes straight from the box to the person, instantly.',
              looksLike: 'The child expects a reply the same afternoon.',
              correction: 'Mark the days off on a calendar. Waiting is part of the lesson and the calendar makes the wait visible instead of infinite.',
            },
          ],
          homeExtension: ['Let the child post every letter the household sends from now on.'],
        },
        {
          id: 'pk3-ss-u4-l3',
          unitId: 'pk3-ss-u4',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'People Who Keep Us Safe',
          essentialQuestion: 'Who helps when something goes wrong?',
          summary:
            'Firefighters, paramedics and police, introduced calmly and without drama. The aim is that these people are recognisable and unfrightening, not that emergencies are exciting.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
            { code: 'ELOF-PMP-Goal P-PMP 5', framework: 'HeadStart-ELOF', text: 'Child develops knowledge about and avoids harmful objects and situations.' },
          ],
          objectives: ['I can name two people who help in an emergency.', 'I know a helper in uniform is safe to go to.'],
          vocabulary: [
            { term: 'safe', definition: 'Nothing can hurt you.' },
            { term: 'emergency', definition: 'When something goes wrong and help is needed fast.' },
            { term: 'uniform', definition: 'Special clothes that show somebody’s job.' },
          ],
          materials: ['Picture books or photographs', 'A toy fire engine or ambulance'],
          prep: ['Keep the tone matter-of-fact. Some children find this topic genuinely worrying and dwelling on danger does harm.'],
          script: [],
          worksheet: { id: 'pk3-ss-u4-l3-ws', title: 'Helpers in Uniform', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Names two emergency helpers and what each does.'],
            exitTicket: 'Show a picture of a firefighter and ask what they help with.',
          },
          differentiation: {
            support: ['One helper only. A local fire station visit, if one is on offer, replaces this whole lesson and does it better.'],
            extension: ['Talk about what a grown-up would do in an emergency, without asking the child to take responsibility for it.'],
            language: ['Uniform colours are a useful identification shortcut and easy vocabulary.'],
          },
          misconceptions: [
            {
              misconception: 'These helpers only appear when something terrible is happening, so seeing one is frightening.',
              looksLike: 'The child becomes anxious at a siren.',
              correction: 'Reframe the siren as somebody being helped right now. "Somebody needs help and they are on their way." It changes the meaning of the sound.',
            },
          ],
          homeExtension: ['When you pass a fire station or see an ambulance, name who is inside and what they do.'],
        },
        {
          id: 'pk3-ss-u4-l4',
          unitId: 'pk3-ss-u4',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Where Does Our Food Come From?',
          essentialQuestion: 'How did this apple get to my plate?',
          summary:
            'Traces one piece of food backwards: plate, kitchen, shop, lorry, farm. Uses one real apple and takes the whole journey in five pictures.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
          ],
          objectives: ['I can say that food grows before it gets to the shop.', 'I can name two people who helped get it to me.'],
          vocabulary: [
            { term: 'farm', definition: 'A place where food is grown or animals are kept.' },
            { term: 'grow', definition: 'To get bigger, like a plant.' },
            { term: 'shop', definition: 'Where we buy things.' },
          ],
          materials: ['One apple', 'Five picture cards for the stages', 'A trip to the greengrocer or supermarket if possible'],
          prep: ['Choose a food with a visible plant origin. An apple works; a fish finger is a much longer conversation.'],
          script: [],
          worksheet: { id: 'pk3-ss-u4-l4-ws', title: 'From the Tree to Me', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Puts three stages of the food journey in order.', 'Names the farmer and the shopkeeper as helpers.'],
            exitTicket: 'Hold up the apple and ask where it was before the shop.',
          },
          differentiation: {
            support: ['Three stages: tree, shop, me.'],
            extension: ['Try a food with a longer story, like bread, and see how far back they can go.'],
            language: ['Sequence words again: first, then, after that, last.'],
          },
          misconceptions: [
            {
              misconception: 'Food is made in the shop.',
              looksLike: 'The child says apples come from the supermarket, full stop.',
              correction: 'Entirely reasonable given their evidence. Go and see a real tree with fruit on it, or grow something. Nothing else works as well.',
            },
          ],
          homeExtension: ['In the shop, ask where one item grew. It slows the trip down and it is worth it.'],
        },
        {
          id: 'pk3-ss-u4-l5',
          unitId: 'pk3-ss-u4',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'What Job Would I Like to Do?',
          essentialQuestion: 'What job would I choose?',
          summary:
            'Dressing up, role play and a drawing. There is no realism requirement and no wrong answer — the point is that the child places themselves in the world of work, not that they pick sensibly.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 1', framework: 'HeadStart-ELOF', text: 'Child identifies personal characteristics, preferences, thoughts and feelings.' },
            { code: 'ELOF-ATL-Goal P-ATL 13', framework: 'HeadStart-ELOF', text: 'Child uses imagination in play and interactions with others.' },
          ],
          objectives: ['I can say a job I would like to do.', 'I can act it out.'],
          vocabulary: [
            { term: 'choose', definition: 'To pick the one you want.' },
            { term: 'pretend', definition: 'To act like something is real when it is a game.' },
          ],
          materials: ['A dressing-up box', 'Paper and crayons'],
          prep: ['Do not steer the choice. Astronaut, dinosaur keeper and "the person who drives the bin lorry" are all excellent answers.'],
          script: [],
          worksheet: { id: 'pk3-ss-u4-l5-ws', title: 'The Job I Would Choose', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Names a job and gives a reason or acts it out.'],
            exitTicket: 'Ask what job they would do and what they would need for it.',
          },
          differentiation: {
            support: ['Offer three jobs from the unit and let them pick.'],
            extension: ['Ask what they would need to learn to do that job.'],
            language: ['"I would like to be a ___" is a complex construction. Accept "I be a doctor" without correcting it.'],
          },
          misconceptions: [
            {
              misconception: 'You have to choose now and it is permanent.',
              looksLike: 'The child gets anxious about picking, or insists they cannot change their mind.',
              correction: 'Say plainly that grown-ups change jobs all the time, and name one you know who did.',
            },
          ],
          homeExtension: ['Leave the dressing-up things out for a week and let the role play run on its own.'],
        },
      ],
    },

    /* ============================================================ UNIT 5 */
    {
      id: 'pk3-ss-u5',
      gradeId: 'pk3',
      subjectId: 'social-studies',
      sequence: 5,
      title: 'Maps of My World',
      bigIdea:
        'A map is a picture of a real place, drawn as if you were looking down on it from above — and you can find real things on it.',
      description:
        'Maps are usually introduced far too late and far too abstractly. A three-year-old can absolutely grasp a map of their own bedroom, because they know the place in their body before they see it on paper. This unit stays inside the child’s own world — a tray, a room, a street they walk down — and never leaves it.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
        { code: 'ELOF-MATH-Goal P-MATH 10', framework: 'HeadStart-ELOF', text: 'Child explores the positions of objects in space.' },
        { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
      ],
      lessonTitles: [
        'Looking Down From Above',
        'A Map of My Bedroom',
        'Walking Down Our Street',
        'Near, Far, Next To, Behind',
        'Follow the Path',
      ],
      performanceTask:
        'The Treasure Hunt: you hide something in the child’s bedroom and mark the spot with an X on the map they made. They use the map to find it. If it works, the concept has landed completely.',
      lessons: [
        {
          id: 'pk3-ss-u5-l1',
          unitId: 'pk3-ss-u5',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'Looking Down From Above',
          essentialQuestion: 'What do things look like from up high?',
          summary:
            'The bird’s-eye view, discovered by standing on a chair and looking straight down at a tray of objects. Photographs of the same tray from the side and from above make the difference undeniable.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-MATH-Goal P-MATH 10', framework: 'HeadStart-ELOF', text: 'Child explores the positions of objects in space.' },
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
          ],
          objectives: ['I can look down at something from above.', 'I can tell which photo was taken from above.'],
          vocabulary: [
            { term: 'above', definition: 'Higher up, over the top of something.' },
            { term: 'below', definition: 'Lower down, underneath.' },
            { term: 'from above', definition: 'Looking straight down on something.' },
          ],
          materials: ['A tray and three chunky objects', 'A step stool or a sturdy chair, with you holding it', 'A phone camera'],
          prep: ['Take both photos yourself in advance so you have them ready if the child does not want to climb.'],
          script: [],
          worksheet: { id: 'pk3-ss-u5-l1-ws', title: 'From Up High', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Distinguishes a from-above photo from a from-the-side photo.'],
            exitTicket: 'Show the two photos and ask which one was taken from up high.',
          },
          differentiation: {
            support: ['Lift them up rather than asking them to climb. The view is the point.'],
            extension: ['Take from-above photos of three different rooms and see if they can identify each.'],
            language: ['Above, below, over and under all get used here. Say them while doing them.'],
          },
          misconceptions: [
            {
              misconception: 'Things change shape when you look at them from a different place.',
              looksLike: 'The child says the cup turned into a circle.',
              correction: 'They are exactly right and it is worth saying so. It looks like a circle from above and it is still a cup. That is precisely the idea a map depends on.',
            },
          ],
          homeExtension: ['Look down the stairwell, or out of an upstairs window at the garden.'],
        },

        /* -------------------------------------------------------- AUTHORED */
        {
          id: 'pk3-ss-u5-l2',
          unitId: 'pk3-ss-u5',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'authored',
          title: 'A Map of My Bedroom',
          essentialQuestion: 'How can a piece of paper show where things really are?',
          summary:
            'The child stands in their own bedroom, looks at where things are, and then places cut-out furniture shapes onto an outline of the room. Because they know the room in their body, the abstraction of a map becomes concrete in one step.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
            { code: 'ELOF-MATH-Goal P-MATH 10', framework: 'HeadStart-ELOF', text: 'Child explores the positions of objects in space.' },
            { code: 'ELOF-PMP-Goal P-PMP 3', framework: 'HeadStart-ELOF', text: 'Child demonstrates increasing control, strength and coordination of small muscles.' },
          ],
          objectives: [
            'I know a map is a picture of a real place from above.',
            'I can put the bed, the door and one more thing in the right place on my map.',
            'I can point at something on the map and then go and touch the real thing.',
          ],
          vocabulary: [
            { term: 'map', definition: 'A picture of a real place, seen from above.', example: 'This is a map of my room.' },
            { term: 'above', definition: 'Looking down from the top.' },
            { term: 'corner', definition: 'Where two walls meet.' },
            { term: 'next to', definition: 'Right beside something.' },
          ],
          materials: [
            'The printed worksheet',
            'Child-safe scissors',
            'A glue stick',
            'The child’s own bedroom, or any room they know well',
            'Optional: a photograph of the room taken from the doorway',
          ],
          prep: [
            'Do this lesson standing in the actual room if you possibly can. At the kitchen table it becomes a cutting exercise and loses its point.',
            'Cut the furniture shapes out yourself if scissors would eat the whole twenty minutes. Cutting is a separate skill and not what is being taught here.',
            'Tidy the floor of the room beforehand so what is where is unambiguous.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'What Can the Fly See?',
              minutes: 4,
              say: [
                'Imagine there is a fly on your bedroom ceiling. Right up there, looking down.',
                'What can the fly see? Can it see the top of your bed?',
                'Can it see the top of your head? What does the top of your head look like?',
                'Lie down on the floor for a second and let me look at you like the fly does. All I can see is the top of you.',
                'That is what a map is. A map is what the fly sees.',
              ],
              do: [
                'Point at the actual ceiling. Physically stand over them and look straight down.',
                'Let them look down at you too — kneel so they can.',
                'Say the phrase "what the fly sees" and reuse it for the rest of the lesson.',
              ],
              studentDoes: ['Imagines the ceiling view, and looks down at an object or a person from above.'],
              checks: [
                {
                  ask: 'What can the fly see from up there?',
                  lookFor: 'The tops of things — the bed, the floor, the top of a head.',
                  ifStuck: 'Hold your phone above a chair, take a photo, and show them. The picture answers the question instantly.',
                },
              ],
              tip: 'The fly is doing a lot of work here. Keep coming back to it: "would the fly see that?"',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'The Same Thing, Two Ways',
              minutes: 4,
              say: [
                'Look at these two pictures. They are both the same tray with the same three things on it.',
                'This one is how you see it when you are sitting at the table. You can see the sides of the cup.',
                'This one is what the fly sees. Straight down. Now the cup is just a circle.',
                'It is still a cup. It did not change. We just moved to look from a different place.',
                'On a map, everything is drawn the fly way.',
              ],
              do: [
                'Put the two worksheet pictures side by side and point back and forth between the same object in each.',
                'If you can, set up the real tray and let them move from sitting to standing over it themselves.',
              ],
              studentDoes: ['Matches the same object across the two views.'],
              checks: [
                {
                  ask: 'Which picture is what the fly sees?',
                  lookFor: 'They point at the from-above one.',
                  ifStuck: 'Ask, "In which one can you see the sides of the cup?" Sides mean you are looking from the side.',
                },
                { ask: 'Is it still a cup in the fly picture?', lookFor: 'Yes.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Stand in the Room and Point',
              minutes: 5,
              say: [
                'Here is an empty map of your room. This line is the wall with the door in it. Go and stand by the real door.',
                'Now find the door on the map. Put your finger on it. Good.',
                'Where is your bed in the real room? Point at it. Now — is it near the door, or far from the door?',
                'So on the map, does the bed go here near the door, or over here?',
                'Try it. Put the bed shape down where you think it goes. You can move it.',
              ],
              do: [
                'Hold the map the same way round as the room, with the door on the map lined up with the real door. Rotating the map is the single most common thing that breaks this lesson.',
                'Do not glue anything yet. Let them place and move the shapes as many times as they want.',
                'Walk to the real object every time before placing its shape.',
              ],
              studentDoes: ['Walks to each real object, then places its cut-out shape on the map.'],
              checks: [
                {
                  ask: 'Is your bed near the door or far from the door?',
                  lookFor: 'A correct near or far judgement about the real room.',
                  ifStuck: 'Walk it with them. Count the steps from the door to the bed. Steps make near and far physical.',
                },
                {
                  ask: 'Show me on the map where you are standing right now.',
                  lookFor: 'A finger somewhere roughly right. Roughly is a complete success at this age.',
                },
              ],
              tip: 'Precision does not matter at all. A bed in the right half of the room is a triumph. What matters is that they walk to the real thing before they place the shape.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Stick It Down',
              minutes: 5,
              say: [
                'Happy with where everything is? Then glue them down.',
                'Bed first. Press it flat.',
                'Now the table, the chair and the rug.',
                'Last thing — draw a little cross where you sleep with your head.',
              ],
              do: [
                'Let them glue, even if a shape is in a slightly odd place. Their map is allowed to be theirs.',
                'Keep saying "would the fly see it there?" rather than correcting directly.',
              ],
              studentDoes: ['Glues the furniture shapes onto the room outline and marks their sleeping spot.'],
              checks: [{ ask: 'Point at your bed on the map, then go and touch the real bed.', lookFor: 'They can move between map and room in both directions.' }],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'The Treasure Test',
              minutes: 2,
              say: [
                'Right. Close your eyes. I am hiding something in this room.',
                'Open them. Look at your map — I have put a cross on the spot.',
                'Where is that? Go and look there.',
                'You found it! Your map worked. That is what maps are for.',
              ],
              do: ['Hide something small and genuinely worth finding. Mark the spot on their finished map with a pencil cross.'],
              studentDoes: ['Reads the cross on the map and goes to the corresponding place in the real room.'],
              checks: [
                {
                  ask: 'Where does the cross say to look?',
                  lookFor: 'They move to roughly the right area of the room.',
                  ifStuck: 'Point at the cross, then at the real spot, and do it again with a much more obvious hiding place.',
                },
              ],
            },
          ],
          worksheet: {
            id: 'pk3-ss-u5-l2-ws',
            title: 'A Map of My Room',
            style: 'diagram',
            prepNotes:
              'Cut the four furniture shapes out before the lesson unless cutting is something you actively want to practise — it can easily eat the whole twenty minutes. Keep the map the same way up as the real room throughout, with the printed door lined up with the real door. Turning the paper round is what breaks this activity, every time.',
            sections: [
              {
                id: 's1',
                title: 'What the Fly Sees',
                directions: 'Both pictures show the same tray. One is how you see it. One is what a fly on the ceiling sees. Point to the fly’s picture.',
                layout: 'split',
                images: [
                  {
                    id: 'img-tray-side-view',
                    slot: 'Left — the tray from the side',
                    purpose:
                      'The familiar view, drawn first so the child has something they already understand to compare against. Showing the sides of the objects is what makes it unmistakably a side view.',
                    subject:
                      'a side-on view of a rectangular tray on a table holding three objects: a cup, a ball and a book lying flat, all seen from eye level so their sides are visible',
                    count: 3,
                    composition: 'the tray shown edge-on across the middle of the frame, the three objects standing on it clearly separated from each other, drawn as clean simple outlines, no background',
                    mustInclude: ['exactly three objects on the tray', 'the sides of the cup clearly visible so it reads as a cup and not a circle', 'the three objects in the same left-to-right order as in the from-above picture'],
                    mustAvoid: ['a room, wall or background', 'more than three objects', 'objects overlapping', 'lettering'],
                    aspect: '4:3',
                    altText: 'A tray with a cup, a ball and a book seen from the side',
                  },
                  {
                    id: 'img-tray-above-view',
                    slot: 'Right — the tray from directly above',
                    purpose:
                      'The whole concept of a map in one picture. Placed directly beside its own side view so the child can trace the same three objects across and see that nothing changed except where they are looking from.',
                    subject:
                      'a directly overhead view of the same rectangular tray with the same three objects: the cup appearing as a circle with a small handle shape, the ball as a plain circle, the book as a plain rectangle',
                    count: 3,
                    composition: 'the tray shown as a plain rectangle filling the frame, the three objects inside it in the same left-to-right positions as the side view, each drawn as its true overhead outline with no perspective at all, no background',
                    mustInclude: ['exactly three objects', 'a strictly straight-down view with no sides of any object visible', 'the three objects in the same left-to-right order as in the side view'],
                    mustAvoid: ['any perspective, tilt or three-quarter angle', 'shadows that imply a viewing angle', 'the sides of the cup', 'lettering'],
                    aspect: '4:3',
                    altText: 'The same tray seen from directly above, with the cup as a circle',
                  },
                ],
              },
              {
                id: 's2',
                title: 'My Empty Room',
                directions: 'This is your room, drawn the fly way. Find the door. Go and stand at the real door.',
                layout: 'full',
                images: [
                  {
                    id: 'img-room-outline',
                    slot: 'The empty room plan',
                    purpose:
                      'The workspace. It has to be genuinely empty except for a door and a window, because those two fixed points are what let the child orient the paper against the real room. Anything else pre-drawn would decide the layout for them.',
                    subject:
                      'an empty overhead floor plan of a rectangular room, drawn as four thick walls with one clear gap in the lower wall for a doorway and one thinner double line in the left wall marking a window',
                    count: 1,
                    composition: 'a large plain rectangle filling most of the frame, walls drawn as thick clean lines, the doorway gap unmistakably a gap in the wall, the window marked as a simple thin double line, the entire interior blank white',
                    mustInclude: ['exactly one room', 'a clear obvious gap in one wall for the door', 'a simple window marking on a different wall', 'the whole interior completely empty'],
                    mustAvoid: ['any furniture drawn inside', 'grid lines, dots or placement guides', 'lettering, labels or a compass', 'shading or floor pattern'],
                    aspect: '4:3',
                    altText: 'An empty overhead plan of a rectangular room with a door gap and a window',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Cut and Stick the Furniture',
                directions: 'Cut out these four things. Walk to the real one first, then put it in the right place on your map.',
                layout: 'row',
                images: [
                  {
                    id: 'img-furniture-cutouts-4',
                    slot: 'Four furniture shapes to cut out',
                    purpose:
                      'Cut-outs let the child try a position, look at the real room, and change their mind — which is exactly the thinking the lesson is for. Drawn as overhead outlines so they match the plan, and kept chunky so small hands can cut and place them.',
                    subject:
                      'four separate overhead furniture shapes in a row, each with a plain cutting border around it: a bed shown as a rounded rectangle with a pillow rectangle at one end, a small square table, a chair shown as a square with a back bar on one side, an oval rug',
                    count: 4,
                    composition:
                      'one horizontal row, four shapes evenly spaced with wide gaps between them, each drawn strictly as an overhead outline with no perspective, each surrounded by a simple plain cutting outline with rounded corners, all chunky and simple enough for a preschooler to cut around',
                    mustInclude: ['exactly four furniture shapes', 'all four drawn strictly from directly above', 'a clear plain cutting border around each shape', 'the bed clearly the largest of the four'],
                    mustAvoid: ['any three-quarter or side view', 'fine detail, patterns or bedding drawn on the shapes', 'shapes touching or sharing a border', 'lettering or labels'],
                    aspect: '4:1',
                    altText: 'Four overhead furniture shapes to cut out: a bed, a table, a chair and a rug',
                  },
                ],
              },
              {
                id: 's4',
                title: 'The Fly on the Ceiling',
                directions: 'Here is our fly, looking down at a whole room. Colour him in.',
                layout: 'full',
                images: [
                  {
                    id: 'img-fly-above-room',
                    slot: 'The fly looking down',
                    purpose:
                      'Gives the lesson’s central metaphor a picture the child can point at afterwards. Showing a child in the room from directly above — a circle of hair and two shoulders — is the detail that makes the overhead view click for a lot of children.',
                    subject:
                      'a cutaway overhead view of a small bedroom with a bed, a table and a rug seen from directly above, one child standing in the middle of the room seen from directly above as the top of their head and their shoulders, and a large friendly cartoon fly hovering in the top corner of the frame',
                    count: 1,
                    composition:
                      'the room fills the frame as a strictly overhead plan, the child small and central and clearly drawn from directly above, the fly larger and in the top right corner, plenty of plain areas for colouring',
                    mustInclude: ['exactly one fly', 'exactly one child, drawn from directly above showing only the top of the head and the shoulders', 'the child drawn warmly and respectfully with a neutral skin tone that a child of any background could colour over', 'the whole room drawn strictly from above with no perspective'],
                    mustAvoid: ['a scary or realistic fly', 'the child drawn from the side or with a visible face', 'lettering or a speech bubble', 'heavy detail that would make colouring frustrating'],
                    aspect: '4:3',
                    altText: 'A cartoon fly looking down at a bedroom from above, with a child seen from the top',
                    style: 'storybook',
                  },
                ],
              },
            ],
            answerKey: [
              'What the fly sees: the right-hand picture, where the cup is a circle.',
              'My empty room: the child should locate the door gap and match it to the real doorway.',
              'Cut and stick: there is no fixed answer — this is a map of their room. Check that the bed and the door have a sensible relationship to each other and accept everything else.',
              'The fly: any colouring.',
            ],
          },
          assessment: {
            successCriteria: [
              'Says that a map shows a place from above.',
              'Locates the door on the map and matches it to the real door.',
              'Places at least two pieces of furniture in roughly the right position.',
              'Finds a hidden object using a cross marked on their own map.',
            ],
            exitTicket:
              'Point at any spot on their finished map and ask them to go and stand there in the real room. Getting to the right half of the room is a pass.',
            rubric: [
              { level: 'emerging', descriptor: 'Enjoys the cutting and sticking but places furniture decoratively; the map and the room are not yet connected.' },
              { level: 'developing', descriptor: 'Places the bed and the door correctly relative to each other and can find things on the map when the paper is held the right way round for them.' },
              { level: 'secure', descriptor: 'Orients the map themselves, places most items sensibly, and can move in both directions between the map and the real room, including finding a hidden object.' },
            ],
          },
          differentiation: {
            support: [
              'Two items only — the bed and the door. That relationship on its own is a real map.',
              'Map a single tray or a dolls’ house instead of a room. Smaller space, same idea, much less to hold in mind.',
              'Pre-cut everything and let them place only. Cutting and mapping at once is two hard tasks stacked.',
            ],
            extension: [
              'Add a window, a toy box and a door that opens the right way.',
              'Map the kitchen or the living room, which are less familiar and therefore harder.',
              'Let them hide something and mark the cross for you to find. Making the map for someone else is a big step up.',
            ],
            language: [
              'Position words are the language target: next to, near, far, in the corner, by the window. Say them while walking to the thing.',
              'The frame "the bed is next to the ___" is worth repeating for each item as it is placed.',
            ],
          },
          misconceptions: [
            {
              misconception: 'A map is a picture of the room the way it looks when you are standing in it.',
              looksLike: 'The child draws or expects a wall with a window on it, and puts the bed standing upright against the edge of the paper.',
              correction: 'Go back to the fly and the tray photographs. Then take an actual overhead photo of the actual room from the doorway with your arm up high, and put it next to the plan.',
            },
            {
              misconception: 'The map still works if you turn the paper round.',
              looksLike: 'The child rotates the page while placing things and everything ends up mirrored or sideways.',
              correction: 'Tape the map to a board or a tray so it cannot turn, and line the printed door up with the real door before you start. This one small physical constraint prevents most of the confusion in this lesson.',
            },
            {
              misconception: 'Things on a map have to be the same size as the real things.',
              looksLike: 'The child objects that the bed cut-out is far too small to be a bed.',
              correction: 'A sharp observation and worth praising. Say that everything on a map is shrunk down by the same amount so it all fits on the paper, and show them how the bed shape is still the biggest of the four.',
            },
          ],
          homeExtension: [
            'Put the finished map on the bedroom wall and use it for hide-and-seek with a cross drawn in pencil.',
            'When you are out, look at any map you pass — a bus map, a park sign, a shopping centre board — and find one thing on it together.',
            'Make a map of the garden or the route to the front gate on a scrap of paper before you walk it.',
          ],
          teacherNotes:
            'Two things make or break this lesson, and neither is the map itself. The first is doing it in the actual room — at the kitchen table it becomes an arts and crafts session and the child learns nothing about space. The second is not letting the paper rotate. Tape it down. Everything else, including wildly approximate furniture placement, is fine. And keep the map afterwards; using it for a real treasure hunt a week later is what converts a nice activity into a concept the child actually holds.',
        },

        {
          id: 'pk3-ss-u5-l3',
          unitId: 'pk3-ss-u5',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Walking Down Our Street',
          essentialQuestion: 'What is on my street?',
          summary:
            'A short walk with a job: notice five things. Back home, those five things go on a long strip of paper in the order they were passed, which is the child’s first street map.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
            { code: 'ELOF-MATH-Goal P-MATH 10', framework: 'HeadStart-ELOF', text: 'Child explores the positions of objects in space.' },
          ],
          objectives: ['I can name five things on my street.', 'I can put them in the order we passed them.'],
          vocabulary: [
            { term: 'street', definition: 'The road where houses and shops are.' },
            { term: 'next', definition: 'The one that comes after.' },
            { term: 'past', definition: 'Going by something.' },
          ],
          materials: ['A long strip of paper', 'Crayons', 'A phone camera for the five landmarks'],
          prep: ['Walk the route yourself and pick five landmarks that are impossible to miss — a postbox, a red door, a big tree.'],
          script: [],
          worksheet: { id: 'pk3-ss-u5-l3-ws', title: 'Our Street', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Recalls five landmarks.', 'Sequences at least three correctly.'],
            exitTicket: 'Ask what we passed just after the postbox.',
          },
          differentiation: {
            support: ['Three landmarks and a very short walk.'],
            extension: ['Walk the route backwards and put the strip in reverse order.'],
            language: ['Ordinal and sequence language: first, next, then, last, after, before.'],
          },
          misconceptions: [
            {
              misconception: 'The street looks the same in both directions, so order does not matter.',
              looksLike: 'The child sequences the landmarks randomly.',
              correction: 'Walk it again and photograph each landmark in order. Laying the photos out in a line makes the sequence visible.',
            },
          ],
          homeExtension: ['On the regular walk to nursery or the shops, ask what comes next before you get there.'],
        },
        {
          id: 'pk3-ss-u5-l4',
          unitId: 'pk3-ss-u5',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Near, Far, Next To, Behind',
          essentialQuestion: 'How do I say where something is?',
          summary:
            'Position vocabulary taught by putting a teddy in places and describing where he went — under the table, behind the chair, next to the door, far from the window.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-MATH-Goal P-MATH 10', framework: 'HeadStart-ELOF', text: 'Child explores the positions of objects in space.' },
            { code: 'ELOF-LC-Goal P-LC 6', framework: 'HeadStart-ELOF', text: 'Child understands and uses a wide variety of words for a variety of purposes.' },
          ],
          objectives: ['I can use four position words correctly.', 'I can put the teddy where you tell me.'],
          vocabulary: [
            { term: 'behind', definition: 'At the back of something.' },
            { term: 'next to', definition: 'Right beside.' },
            { term: 'under', definition: 'Below and covered by.' },
            { term: 'far', definition: 'A long way away.' },
          ],
          materials: ['A teddy or a small toy', 'Ordinary furniture'],
          prep: ['Plan six placements in advance so you are not inventing them under pressure.'],
          script: [],
          worksheet: { id: 'pk3-ss-u5-l4-ws', title: 'Where Is Teddy?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Follows four position instructions.', 'Describes a placement using a position word.'],
            exitTicket: 'Put the teddy behind a chair and ask where he is.',
          },
          differentiation: {
            support: ['Two words — in and under — until both are secure.'],
            extension: ['Let them give you the instructions, which is harder than following them.'],
            language: ['Prepositions are among the last things to come in a second language. Demonstrate every time and never rely on the word alone.'],
          },
          misconceptions: [
            {
              misconception: 'Behind and in front depend on which way I am facing, so they are the same for everybody.',
              looksLike: 'The child says the teddy is behind the chair when it is behind from their side but in front from yours.',
              correction: 'Genuinely difficult and not fully solvable at three. Stand next to them rather than opposite when you give instructions, so your points of view agree.',
            },
          ],
          homeExtension: ['Give position-word instructions during tidying up. "Put it under the bed, next to the box."'],
        },
        {
          id: 'pk3-ss-u5-l5',
          unitId: 'pk3-ss-u5',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Follow the Path',
          essentialQuestion: 'Can I follow a route somebody drew for me?',
          summary:
            'A masking-tape path on the floor with three stops, and a matching drawn route on paper. The child follows the paper and walks the tape, which is the first real act of navigation.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 5', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness of the relationship between people and the environment in which they live and work.' },
            { code: 'ELOF-ATL-Goal P-ATL 8', framework: 'HeadStart-ELOF', text: 'Child holds information in mind and manipulates it to perform tasks.' },
          ],
          objectives: ['I can follow a path drawn on paper.', 'I can stop at each stop in order.'],
          vocabulary: [
            { term: 'path', definition: 'The way you go from one place to another.' },
            { term: 'start', definition: 'Where you begin.' },
            { term: 'end', definition: 'Where you finish.' },
          ],
          materials: ['Masking tape', 'Three objects to be the stops', 'A drawn route on paper'],
          prep: ['Lay the tape path with two clear turns in it. A straight line teaches nothing.'],
          script: [],
          worksheet: { id: 'pk3-ss-u5-l5-ws', title: 'Follow the Path', style: 'diagram', sections: [] },
          assessment: {
            successCriteria: ['Follows the path from start to end, stopping at all three stops in order.'],
            exitTicket: 'Hand them the paper route and see whether they set off in the right direction.',
          },
          differentiation: {
            support: ['One turn and two stops.'],
            extension: ['Let them design the path and draw it for you to follow.'],
            language: ['Direction words: turn, straight on, stop, go.'],
          },
          misconceptions: [
            {
              misconception: 'The paper is a picture to look at, not an instruction to follow.',
              looksLike: 'The child glances at the route and then walks wherever they like.',
              correction: 'Make them carry the paper and stop at each turn to look at it. Physically consulting the map mid-route is the habit being built.',
            },
          ],
          homeExtension: ['Draw a three-step route to the bathroom at bedtime and let them lead the way.'],
        },
      ],
    },

    /* ============================================================ UNIT 6 */
    {
      id: 'pk3-ss-u6',
      gradeId: 'pk3',
      subjectId: 'social-studies',
      sequence: 6,
      title: 'Celebrations at Our House and Yours',
      bigIdea:
        'Every family has special days, and different families celebrate different things — the food, the songs and the people are what make a day special.',
      description:
        'Celebrations are the gentlest possible way into difference, because they are joyful and concrete. The unit starts with what this family does, then looks at what other families do, and holds both without ranking them. Where possible, real families share real things rather than the topic being taught from pictures.',
      weeks: 4,
      standards: [
        { code: 'ELOF-SS-Goal P-SS 4', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness and appreciation of their own and others’ cultural and linguistic backgrounds.' },
        { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
        { code: 'ELOF-SE-Goal P-SE 11', framework: 'HeadStart-ELOF', text: 'Child has a sense of belonging to family, community and other groups.' },
      ],
      lessonTitles: [
        'What Do We Celebrate?',
        'Special Food on Special Days',
        'Songs and Dances We Do Together',
        'A Celebration I Have Never Seen',
        'Making an Invitation',
      ],
      performanceTask:
        'The Celebration Table: the child helps set out one small display for a celebration their family keeps — a cloth, an object, a photo, a food — and tells a visitor about each thing on it.',
      lessons: [
        {
          id: 'pk3-ss-u6-l1',
          unitId: 'pk3-ss-u6',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'What Do We Celebrate?',
          essentialQuestion: 'Which days are special in my family?',
          summary:
            'Photographs of the family’s own celebrations — birthdays, religious festivals, anniversaries, the first day of the holidays — named and put in order round a simple year circle.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 4', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness and appreciation of their own and others’ cultural and linguistic backgrounds.' },
            { code: 'ELOF-SE-Goal P-SE 11', framework: 'HeadStart-ELOF', text: 'Child has a sense of belonging to family, community and other groups.' },
          ],
          objectives: ['I can name two days my family celebrates.', 'I can say one thing we do on that day.'],
          vocabulary: [
            { term: 'celebrate', definition: 'To do something special because a day matters.' },
            { term: 'special', definition: 'Not like an ordinary day.' },
          ],
          materials: ['Family photographs from celebrations', 'A large paper circle for the year'],
          prep: ['Ask the family which celebrations matter to them, and use those, not a generic list.'],
          script: [],
          worksheet: { id: 'pk3-ss-u6-l1-ws', title: 'Our Special Days', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Names two family celebrations and one thing done at each.'],
            exitTicket: 'Show a photo from a celebration and ask what day that was.',
          },
          differentiation: {
            support: ['Birthdays only. Every child has one and it is the most vivid.'],
            extension: ['Put the celebrations in order round the year circle and talk about which comes next.'],
            language: ['Use the family’s own name for each celebration, in the home language, and learn to say it correctly.'],
          },
          misconceptions: [
            {
              misconception: 'Everybody celebrates the same days.',
              looksLike: 'The child assumes a friend has the same festivals.',
              correction: 'Two families, side by side, both real. Not a list of world festivals — just this family and one other one the child knows.',
            },
          ],
          homeExtension: ['Mark the next family celebration on a calendar and count down to it.'],
        },
        {
          id: 'pk3-ss-u6-l2',
          unitId: 'pk3-ss-u6',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'Special Food on Special Days',
          essentialQuestion: 'What do we eat on our special days?',
          summary:
            'Food is the most memorable part of any celebration and the easiest to share. The child helps make or lay out one celebration food and describes it with their senses.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 4', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness and appreciation of their own and others’ cultural and linguistic backgrounds.' },
            { code: 'ELOF-PMP-Goal P-PMP 3', framework: 'HeadStart-ELOF', text: 'Child demonstrates increasing control, strength and coordination of small muscles.' },
          ],
          objectives: ['I can name one food we eat on a special day.', 'I can help make or serve it.'],
          vocabulary: [
            { term: 'feast', definition: 'A big special meal.' },
            { term: 'recipe', definition: 'The instructions for making food.' },
          ],
          materials: ['Ingredients for one simple celebration food', 'Aprons', 'A bowl and a spoon'],
          prep: ['Check allergies and dietary rules before choosing anything. Ask, do not assume.'],
          script: [],
          worksheet: { id: 'pk3-ss-u6-l2-ws', title: 'Our Special Food', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Names a celebration food and the day it belongs to.'],
            exitTicket: 'Ask what we eat on their birthday.',
          },
          differentiation: {
            support: ['Serve rather than cook. Arranging food on a plate is participation.'],
            extension: ['Compare two celebration foods from two different families.'],
            language: ['Food names are excellent vocabulary and often come from the home language. Use the original name.'],
          },
          misconceptions: [
            {
              misconception: 'Unfamiliar food is bad food.',
              looksLike: 'The child says "yuck" about something from another family’s celebration.',
              correction: 'Do not make them taste anything. Say "that is not for you, it is for them, and they love it" and move on. Forced tasting produces the opposite of openness.',
            },
          ],
          homeExtension: ['Cook one family celebration dish together, however simple, and let them stir.'],
        },
        {
          id: 'pk3-ss-u6-l3',
          unitId: 'pk3-ss-u6',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Songs and Dances We Do Together',
          essentialQuestion: 'What songs belong to our special days?',
          summary:
            'Singing and moving. Happy birthday, whatever songs the family sings at festivals, and one song from a family the child knows. Joining in is the objective.',
          durationMin: 15,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 4', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness and appreciation of their own and others’ cultural and linguistic backgrounds.' },
            { code: 'ELOF-PMP-Goal P-PMP 1', framework: 'HeadStart-ELOF', text: 'Child demonstrates control, strength and coordination of large muscles.' },
          ],
          objectives: ['I can join in with a celebration song.', 'I can do the actions.'],
          vocabulary: [
            { term: 'song', definition: 'Words you sing.' },
            { term: 'together', definition: 'Everyone at the same time.' },
          ],
          materials: ['Music', 'Any percussion — pans, shakers, hands'],
          prep: ['Learn one song from a family in your community, properly, and ask them how it goes rather than looking it up.'],
          script: [],
          worksheet: { id: 'pk3-ss-u6-l3-ws', title: 'Our Songs', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Joins in with singing or actions for at least one song.'],
            exitTicket: 'Start the birthday song and see if they join.',
          },
          differentiation: {
            support: ['Actions without singing. Joining in physically counts fully.'],
            extension: ['Learn one line in another language.'],
            language: ['Song is the single easiest route into a new language. Melody carries words that speech cannot.'],
          },
          misconceptions: [
            {
              misconception: 'Songs in another language are nonsense sounds.',
              looksLike: 'The child giggles at unfamiliar words.',
              correction: 'Tell them what the words mean before you sing. Meaning turns funny sounds into a real song.',
            },
          ],
          homeExtension: ['Sing the family celebration songs at ordinary times too, not just on the day.'],
        },
        {
          id: 'pk3-ss-u6-l4',
          unitId: 'pk3-ss-u6',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'A Celebration I Have Never Seen',
          essentialQuestion: 'What do other families celebrate?',
          summary:
            'One celebration from a family the child actually knows, shared by that family if at all possible — an object, a photograph, a food, a story. Specific and real rather than a tour of world festivals.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 4', framework: 'HeadStart-ELOF', text: 'Child demonstrates awareness and appreciation of their own and others’ cultural and linguistic backgrounds.' },
            { code: 'ELOF-SE-Goal P-SE 7', framework: 'HeadStart-ELOF', text: 'Child expresses care and concern toward others.' },
          ],
          objectives: ['I can name one celebration another family has.', 'I can say one thing they do.'],
          vocabulary: [
            { term: 'different', definition: 'Not the same as ours.' },
            { term: 'share', definition: 'To let somebody else have some, or tell them about it.' },
          ],
          materials: ['Whatever a visiting family is willing to bring', 'A picture book about one specific festival'],
          prep: [
            'Ask a real family to share, and give them plenty of notice. If that is not possible, choose one festival and go deep rather than skimming five.',
            'Learn to pronounce the name of the celebration correctly before the lesson.',
          ],
          script: [],
          worksheet: { id: 'pk3-ss-u6-l4-ws', title: 'A Day I Learned About', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Names one other family’s celebration and one thing that happens at it.'],
            exitTicket: 'Ask what the other family does on their special day.',
          },
          differentiation: {
            support: ['One object and one sentence about it is a complete lesson.'],
            extension: ['Compare it with a celebration the child’s own family has and find one thing the two share.'],
            language: ['Say the celebration’s name in its own language and get it right. Nothing signals respect faster.'],
          },
          misconceptions: [
            {
              misconception: 'Other people’s celebrations are strange or pretend.',
              looksLike: 'The child calls another family’s festival "not real".',
              correction: 'Have a real person tell them about it. A face and a story do what no picture book can, and children do not call something pretend when the person who does it is standing there.',
            },
          ],
          homeExtension: ['Wish a neighbour or a friend well on their festival. A four-word greeting matters more than you would think.'],
        },
        {
          id: 'pk3-ss-u6-l5',
          unitId: 'pk3-ss-u6',
          gradeId: 'pk3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Making an Invitation',
          essentialQuestion: 'How do I ask someone to come?',
          summary:
            'The year closes with the child making and giving a real invitation to a real small event — a tea, a game, a family meal. Drawing, decorating, delivering, and someone actually turning up.',
          durationMin: 20,
          standards: [
            { code: 'ELOF-SS-Goal P-SS 2', framework: 'HeadStart-ELOF', text: 'Child demonstrates knowledge of relationships and roles within their own family, home, classroom and community.' },
            { code: 'ELOF-LC-Goal P-LC 4', framework: 'HeadStart-ELOF', text: 'Child understands, follows and uses appropriate social and conversational rules.' },
          ],
          objectives: ['I can make an invitation.', 'I can give it to somebody and ask them to come.'],
          vocabulary: [
            { term: 'invite', definition: 'To ask somebody to come.' },
            { term: 'guest', definition: 'Somebody who comes to visit.' },
            { term: 'welcome', definition: 'Glad you are here.' },
          ],
          materials: ['Card, crayons, stickers', 'A real event to invite someone to', 'An envelope'],
          prep: ['Make sure the event genuinely happens and the guest genuinely comes. An invitation that leads nowhere undoes the lesson.'],
          script: [],
          worksheet: { id: 'pk3-ss-u6-l5-ws', title: 'My Invitation', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Makes an invitation and hands it over with a spoken invitation.'],
            exitTicket: 'Ask who they invited and what they invited them to.',
          },
          differentiation: {
            support: ['You write the words, they draw the picture and hand it over.'],
            extension: ['Make invitations for three guests and plan what each will need.'],
            language: ['"Please come to my ___" is the frame, and it is genuinely useful language.'],
          },
          misconceptions: [
            {
              misconception: 'Giving an invitation means the person is definitely coming.',
              looksLike: 'The child is very upset when somebody cannot make it.',
              correction: 'Say beforehand that people are asked, not told, and that some will be busy. Prepare for a no and it stings much less.',
            },
          ],
          homeExtension: ['Let them invite someone round and be the one who opens the door and says welcome.'],
        },
      ],
    },
  ],
}

export default course
