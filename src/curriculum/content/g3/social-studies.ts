import type { SubjectCourse } from '../../types'

/**
 * Grade 3 Social Studies — communities in time, place, government and trade.
 *
 * Grade 3 is the year the circle widens: from "my family" to "my community,
 * my region, my state". Every unit deliberately anchors an abstract idea in a
 * place the child can walk to.
 */
const course: SubjectCourse = {
  gradeId: 'g3',
  subjectId: 'social-studies',
  title: 'Grade 3 Social Studies',
  overview:
    'Grade 3 is the year a child discovers that the place they live was built by decisions — decisions about where to put a bridge, what to grow, who gets to make the rules, and what to remember. The year moves outward from the child\'s own street to the region and the state, and it moves backward in time from today to the people who were here first. It ends with a real inquiry: a question about the child\'s own community that nobody has handed them the answer to, investigated with actual sources.',
  yearGoals: [
    'Describe how a community changes over time and what stays the same, using evidence rather than guesswork.',
    'Explain what local and state government do, and name the job of each of the three branches.',
    'Use maps and photographs to explain why people settled where they did, and how they adapt to and reshape the land.',
    'Explain how specialisation and trade make people in different places depend on one another.',
    'Investigate a genuine question about the local past using primary sources, and defend a claim with evidence.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'g3-ss-u1',
      gradeId: 'g3',
      subjectId: 'social-studies',
      sequence: 1,
      title: 'Communities Across Time and Place',
      bigIdea:
        'A community is a group of people who share a place and depend on one another — and every community you can see today is the newest layer of a much older place.',
      description:
        'Learners build the two habits the whole year rests on: noticing what a community has (people, work, buildings, rules, shared memory) and noticing that all of it has a history. The unit pairs "then and now" comparisons with the recognition that the land was not empty before the town arrived.',
      weeks: 5,
      standards: [
        { code: 'D2.His.1.3-5', framework: 'C3', text: 'Create and use a chronological sequence of related events to compare developments that happened at the same time.' },
        { code: 'D2.His.2.3-5', framework: 'C3', text: 'Compare life in specific historical time periods to life today.' },
        { code: 'D2.Geo.5.3-5', framework: 'C3', text: 'Explain how the cultural and environmental characteristics of places change over time.' },
        { code: 'D2.Civ.6.3-5', framework: 'C3', text: 'Describe ways in which people benefit from and are challenged by working together, including through government, workplaces, voluntary organisations and families.' },
      ],
      lessonTitles: [
        'What Makes a Group of People a Community',
        'The Same Corner, One Hundred Years Apart',
        'Urban, Suburban, Rural',
        'The First Peoples of Our Region',
        'Newcomers and Why People Move',
      ],
      performanceTask:
        'The Hundred-Year Wall: the child builds a paper timeline of their own community with at least six dated events, and writes two museum cards — one naming something that changed, one naming something that stayed the same — each citing a source.',
      lessons: [
        {
          id: 'g3-ss-u1-l1',
          unitId: 'g3-ss-u1',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'What Makes a Group of People a Community',
          essentialQuestion: 'What do people in a community share, and what do they need from each other?',
          summary:
            'Builds a working definition of community from the child\'s own experience: shared place, shared services, shared rules, shared memory. The child maps who they depend on in an ordinary day.',
          durationMin: 45,
          standards: [
            { code: 'D2.Civ.6.3-5', framework: 'C3', text: 'Describe ways in which people benefit from and are challenged by working together.' },
          ],
          objectives: [
            'I can name four things the people in a community share.',
            'I can name five people outside my family that my day depends on.',
          ],
          vocabulary: [
            { term: 'community', definition: 'A group of people who share a place and depend on one another.' },
            { term: 'depend on', definition: 'To need someone else in order to do what you do.' },
            { term: 'public', definition: 'Belonging to and paid for by everyone, not one person.', example: 'A public library.' },
          ],
          materials: ['A large sheet of paper', 'Coloured pencils', 'A local map or a printed satellite view of your neighbourhood'],
          prep: [
            'Walk to the front door and note three community services you can see or reach in ten minutes — you will use them as examples.',
            'Decide the boundary of "our community" for this unit and keep it consistent all year.',
          ],
          script: [],
          worksheet: { id: 'g3-ss-u1-l1-ws', title: 'A Day of Depending', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Names shared place, shared services, shared rules and shared memory as features of a community.', 'Traces one ordinary object or event back to at least three people outside the family.'],
            exitTicket: 'Ask: "Name one thing you used today that somebody you have never met made possible." Push for a chain, not a single name.',
          },
          differentiation: {
            support: ['Start with a single object — the breakfast bowl — and trace it back one step at a time.'],
            extension: ['Ask the child to find something in the house that nobody in the community made, and defend it.'],
            language: ['Pre-teach "depend", "share" and "public" with objects the child can point to.'],
          },
          misconceptions: [
            { misconception: 'A community is just the people you know.', looksLike: 'The child lists only family and friends.', correction: 'Ask who collects the bins, who fixes the road, who works at the shop. Strangers are the bulk of a community.' },
          ],
          homeExtension: ['On the next errand, count how many people you rely on without speaking to any of them.'],
        },

        /* ------------------------------------------------------ AUTHORED */
        {
          id: 'g3-ss-u1-l2',
          unitId: 'g3-ss-u1',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'authored',
          title: 'The Same Corner, One Hundred Years Apart',
          essentialQuestion: 'What changes in a community over a hundred years, and what stays the same?',
          summary:
            'The child compares two views of one street corner a century apart and learns the historian\'s two-column habit: continuity and change. The hook is a claim they have to disprove — that the two pictures show two different towns.',
          durationMin: 45,
          standards: [
            { code: 'D2.His.2.3-5', framework: 'C3', text: 'Compare life in specific historical time periods to life today.' },
            { code: 'D2.His.1.3-5', framework: 'C3', text: 'Create and use a chronological sequence of related events to compare developments that happened at the same time.' },
            { code: 'D2.Geo.5.3-5', framework: 'C3', text: 'Explain how the cultural and environmental characteristics of places change over time.' },
          ],
          objectives: [
            'I can find evidence that two pictures show the same place at different times.',
            'I can sort what I notice into "changed" and "stayed the same".',
            'I can explain one change using a reason, not just a description.',
          ],
          vocabulary: [
            { term: 'continuity', definition: 'Something that stays the same over a long time.', example: 'The church tower is still there.' },
            { term: 'change', definition: 'Something that is different now from how it was before.' },
            { term: 'evidence', definition: 'The part of a source you can point to that makes you believe something.' },
            { term: 'century', definition: 'One hundred years.' },
          ],
          materials: [
            'The printed worksheet',
            'Two coloured pencils in clearly different colours',
            'A ruler or straight edge',
            'Optional: any old photograph of your own town, from a library website or a family album',
          ],
          prep: [
            'Print the worksheet single-sided so the two street views can sit side by side on the table.',
            'Do the comparison yourself first and find three matching features. You need to know they exist so you can nudge without telling.',
            'Have the two coloured pencils ready: one colour for "changed", one for "stayed the same".',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Two Different Towns',
              minutes: 6,
              say: [
                'Look at these two pictures. Here is what I think: these are two completely different towns.',
                'The old one has horses. The new one has cars. Different buildings, different clothes, different everything. Two towns. I am certain.',
                'Unless… you can prove me wrong. Can you find anything in both pictures that is the same?',
                "You found the hill behind the rooftops. And the tower. And the corner turns the same way. So it's ONE town — a hundred years apart.",
              ],
              do: [
                'Say the wrong claim with real confidence. Do not wink.',
                'When the child finds a match, put a dot on it in both pictures with the same pencil so the pair is visible.',
              ],
              studentDoes: ['Hunts both pictures for matching features and argues that it is one place.'],
              checks: [
                {
                  ask: 'Show me one thing that proves it is the same place.',
                  lookFor: 'A pointed-at feature present in both — the hill, the tower, the shape of the corner, the road bending the same way.',
                  ifStuck: 'Cover the bottom half of both pictures with a sheet of paper so only the skyline shows. The permanent things live up there.',
                },
              ],
              tip: 'Landforms and tall stone buildings survive; shopfronts, vehicles and clothes do not. That single rule explains most of what the child is about to notice.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Two Columns, Two Colours',
              minutes: 10,
              say: [
                'Historians do exactly what you just did, and they write it in two columns. Watch.',
                'Column one: CHANGED. Column two: STAYED THE SAME. Every time I notice something, it has to go in one of them.',
                'Horses became lorries — that goes in CHANGED. The hill is still a hill — STAYED THE SAME.',
                'Here is the hard bit, and it is the whole lesson. For anything in the CHANGED column, I have to ask WHY. Not "what", but "why".',
                'Why did the horses go? Because engines got cheap and a lorry carries more without being fed. That is a reason. "Because it is modern now" is not a reason.',
              ],
              do: [
                'Rule a T-chart on scrap paper and head the two columns as you say them.',
                'Add three items yourself, thinking out loud, and give a reason for each change.',
              ],
              studentDoes: ['Watches the T-chart being built and offers one item for each column.'],
              checks: [
                { ask: 'Which column does the tower go in, and how do you know?', lookFor: 'Stayed the same, because it appears in both pictures in the same spot.' },
                { ask: 'Give me a reason the street is paved now when it was dirt before.', lookFor: 'Anything causal — cars need a hard surface, mud was slow, the town could afford it.', ifStuck: 'Ask what happens to a dirt road in heavy rain, then ask what that does to a delivery van.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Inside the House',
              minutes: 10,
              say: [
                'Streets are the easy part. Now come inside. Here is a kitchen from about the same year as the old street.',
                'Find me three jobs someone had to do in this kitchen that nobody in our kitchen does.',
                'Pumping water. Feeding the stove with wood. Keeping the ice box cold. Those were somebody\'s hours, every single day.',
                'Now the important question. Something in this old kitchen is exactly the same as ours. What is it?',
                'People still cook. People still eat together at a table. The work changed. The reason for the room did not.',
              ],
              do: [
                'Point at one object at a time rather than letting the child scan the whole scene at once.',
                'Resist naming the appliances for them. Let them describe what they see and supply the word after.',
              ],
              studentDoes: ['Identifies vanished daily tasks and names at least one thing that persists.'],
              checks: [
                {
                  ask: 'Whose job do you think it was to carry the water, and how would that change your day?',
                  lookFor: 'A concrete answer about time and effort, ideally noticing that the work usually fell to particular members of a household.',
                  ifStuck: 'Ask how many buckets a family of six would need before breakfast, and how long each trip takes.',
                },
                { ask: 'Name one thing that stayed the same inside the house.', lookFor: 'Cooking, eating together, sleeping, family life.' },
              ],
              tip: 'Steer away from "life was worse then". The honest framing is that the work was different and much of it was harder, and that people in the picture were as clever and capable as we are.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 14,
              say: [
                'Your turn on paper. Use the blue pencil to circle three things that CHANGED, and the green to circle three things that STAYED THE SAME.',
                'Then pick just one of your changes and write the reason on the lines. One sentence. It must start with the word "because".',
                'The last box is the sneaky one. Look at the three old objects and work out what each one was for.',
              ],
              do: [
                'Read each direction aloud before the child starts that section.',
                'When they write the "because" sentence, do not fix the spelling. You are marking the reasoning.',
              ],
              studentDoes: ['Completes the colour-coded comparison, writes one causal sentence, and infers the use of three unfamiliar objects.'],
              checks: [
                { ask: 'Read me your "because" sentence.', lookFor: 'A cause, not a restatement. "Because cars were invented" counts; "because it is different" does not.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'A Hundred Years Forward',
              minutes: 5,
              say: [
                'Last question, and it is a real one. Somebody stands on our corner in a hundred years and looks at a picture of today.',
                'What do you think will have changed?',
                'And what do you think will still be there?',
                'Write your two guesses on the back. We are going to be wrong about some of it, and that is exactly what makes it interesting.',
              ],
              do: ['Write your own two guesses at the same time, and date them.'],
              studentDoes: ['Predicts one change and one continuity for the next century and gives a reason for each.'],
              checks: [
                { ask: 'Why do you think that one will still be there?', lookFor: 'Reasoning from the lesson — heavy, stone, expensive to move, or needed by people in any century.' },
              ],
            },
          ],
          worksheet: {
            id: 'g3-ss-u1-l2-ws',
            title: 'The Same Corner, One Hundred Years Apart',
            style: 'historical',
            prepNotes:
              'The two street views must print at the same size and on the same page, or the matching game collapses. Check the printed sheet before handing it over. Two coloured pencils matter more than they sound: the colour coding is what turns noticing into sorting.',
            sections: [
              {
                id: 's1',
                title: 'Then and Now on the Same Corner',
                directions: 'Look at both pictures carefully. Circle three things that CHANGED in blue. Circle three things that STAYED THE SAME in green. Then finish the sentence: One thing changed because ______.',
                layout: 'split',
                writingLines: 3,
                images: [
                  {
                    id: 'g3-ss-u1-img-street-1910',
                    slot: 'Top — the corner in about 1910',
                    purpose: 'The historical half of the comparison pair. Its job is to carry enough period detail — transport, surfaces, clothing, shopfronts — that the child has real material to sort, while keeping the permanent features visible for the matching task.',
                    subject: 'a small town street corner in about 1910, brick and stone shopfronts with fabric awnings, an unpaved dirt road, two horse-drawn delivery wagons, and townspeople of varied ages walking on a wooden pavement, with a stone church tower and a low wooded hill on the skyline behind the rooftops',
                    count: 2,
                    composition: 'a wide street-level view from the opposite pavement, the corner building placed exactly in the centre of the frame, the church tower and the hill visible above the rooftops on the right, the same viewpoint and camera height that the modern companion image uses',
                    mustInclude: [
                      'period-accurate 1910 detail throughout: long skirts and high collars, flat caps and work aprons, wooden pavement boards, fabric awnings, a dirt road surface',
                      'people of a range of ages and backgrounds shown with dignity, upright and purposeful, dressed appropriately for ordinary working life',
                      'the stone church tower and the wooded hill clearly visible on the skyline',
                      'exactly two horse-drawn delivery wagons',
                    ],
                    mustAvoid: [
                      'any anachronism: cars, tarmac, electric street lighting, plastic, modern signage or clothing',
                      'caricature, exaggerated features or stereotyped costume of any group of people',
                      'any violence, weapons, distress or confrontation',
                      'readable lettering on signs, windows or wagons',
                    ],
                    aspect: '16:9',
                    altText: 'A small town street corner around 1910 with two horse-drawn wagons, a dirt road and a church tower behind the rooftops',
                    style: 'historical',
                  },
                  {
                    id: 'g3-ss-u1-img-street-today',
                    slot: 'Bottom — the same corner today',
                    purpose: 'The modern half of the pair. It must be recognisably the same corner or the entire lesson fails, so the shared skyline features are non-negotiable while everything at street level is deliberately different.',
                    subject: 'the same small town street corner in the present day, the same brick and stone corner building now with large glass shopfronts, a paved road with painted markings, two parked cars and a delivery van, pedestrians in modern clothing, with the identical stone church tower and low wooded hill on the skyline behind the rooftops',
                    count: 2,
                    composition: 'the identical viewpoint, camera height and framing as the 1910 image, corner building dead centre, church tower and hill in the same position on the right of the skyline, so the two pictures overlay exactly',
                    mustInclude: [
                      'the same corner building, church tower and hill in the same positions as the historical companion image',
                      'people of a range of ages and backgrounds shown with dignity in ordinary modern clothing',
                      'exactly two parked cars',
                      'a paved road surface with painted markings and a concrete kerb',
                    ],
                    mustAvoid: [
                      'any change to the skyline, the hill or the position of the church tower',
                      'a different camera angle or a different building shape at the corner',
                      'readable lettering on shopfronts, vehicles or road signs',
                      'crowds, traffic chaos or anything alarming',
                    ],
                    aspect: '16:9',
                    altText: 'The same street corner today with a paved road, two parked cars and the same church tower behind the rooftops',
                    style: 'historical',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Inside the Kitchen',
                directions: 'This kitchen is from the same year as the old street. Find three jobs somebody had to do in this room that nobody does in our kitchen. Write them on the lines. Then draw a star on one thing in the picture that we still do today.',
                layout: 'full',
                writingLines: 4,
                images: [
                  {
                    id: 'g3-ss-u1-img-kitchen-1910',
                    slot: 'A household kitchen in about 1910',
                    purpose: 'Moves the comparison from public street to private life, where the change in daily labour is far starker. Household technology is the clearest evidence a child has that ordinary time was spent very differently.',
                    subject: 'a modest household kitchen in about 1910 with a cast-iron wood-burning range, a hand water pump at a stone sink, a wooden ice box, an enamel jug and basin, a scrubbed wooden table, and a woman and a child working together at the table preparing vegetables',
                    count: 2,
                    composition: 'an interior view from the doorway showing the whole room, the range on the left, the sink and hand pump centre, the table in the foreground right, daylight coming from a single window, every appliance fully visible and unobstructed',
                    mustInclude: [
                      'period-accurate 1910 domestic detail: cast-iron range, hand pump, ice box, enamelware, no electrical fittings',
                      'exactly two people, shown with dignity and calm competence, working together rather than posed',
                      'clean, orderly surroundings that suggest care rather than poverty',
                    ],
                    mustAvoid: [
                      'any anachronism: refrigerator, electric kettle, taps with running water, plastic, modern packaging',
                      'caricature or stereotyped depiction of the household members',
                      'squalor, distress or any suggestion of hardship as spectacle',
                      'readable labels on jars, tins or packets',
                    ],
                    aspect: '4:3',
                    altText: 'A 1910 kitchen with a wood range, a hand water pump and an ice box, where a woman and a child prepare food at a table',
                    style: 'historical',
                  },
                ],
              },
              {
                id: 's3',
                title: 'What Was This For?',
                directions: 'Here are three objects from a hundred years ago. Look at the shape of each one. What do you think each one was used for? Write your best guess under each number, and say what part of the object gave you the clue.',
                layout: 'row',
                writingLines: 6,
                items: [
                  '1. The tall object with the crank handle was used for ______ because ______.',
                  '2. The flat heavy object with the handle on top was used for ______ because ______.',
                  '3. The tin object with a spout and a wick was used for ______ because ______.',
                ],
                images: [
                  {
                    id: 'g3-ss-u1-img-artefacts-3',
                    slot: 'Three household objects from about 1910',
                    purpose: 'Object inference is the gentlest possible introduction to reading a primary source: the child must argue from a physical feature to a use, which is the same move they will make with documents in Unit 6.',
                    subject: 'three separate household objects from about 1910 shown side by side against plain white: a hand-cranked coffee grinder with a wooden box and iron crank, a solid flat iron with a shaped handle, and a tin paraffin lamp with a glass chimney and a wick',
                    count: 3,
                    composition: 'exactly three objects in a single straight horizontal row, evenly spaced with wide white gaps between them, each object shown in clear three-quarter view at the same scale relative to the frame, no overlap, plain white background with a soft ground shadow only',
                    mustInclude: [
                      'exactly three objects, each fully visible and clearly separated',
                      'period-accurate construction: wood, cast iron, tinplate and glass with visible rivets, seams and grain',
                      'the crank, the handle and the wick each clearly visible, since these are the inference clues',
                    ],
                    mustAvoid: [
                      'any modern object, plastic, or electrical cord',
                      'a room, table or background scenery',
                      'objects overlapping or drawn at different scales',
                      'maker marks, brand names or any readable lettering on the objects',
                    ],
                    aspect: '3:1',
                    altText: 'Three objects from about 1910 in a row: a hand coffee grinder, a flat iron and a paraffin lamp',
                    style: 'historical',
                  },
                ],
              },
            ],
            answerKey: [
              'Changed (any three): road surface, transport, shopfront glass, street lighting, clothing, pavement material.',
              'Stayed the same (any three): the hill, the church tower, the corner building, the road bending the same way, shops on the ground floor, people walking to them.',
              '"Because" sentence: accept any causal reason, such as "because cars needed a hard road" or "because the town got electricity". Reject restatements such as "because it is modern".',
              'Kitchen jobs no longer done (any three): pumping and carrying water, chopping and feeding wood to the range, buying and replacing ice, trimming lamp wicks, heating water for washing.',
              'Still done today: cooking, preparing vegetables, eating at a table, families working together in the kitchen.',
              'Objects: 1 — coffee or spice grinder (the crank turns something inside). 2 — a flat iron for pressing clothes (heavy and flat, heated on the range). 3 — a paraffin lamp for light (a wick and a glass chimney). Credit any sensible use that is justified by a named feature.',
            ],
          },
          assessment: {
            successCriteria: [
              'Finds at least two features proving the two street views show one place.',
              'Sorts six observations correctly into changed and stayed the same.',
              'Writes one causal sentence explaining a change, not a description of it.',
              'Infers a plausible use for an unfamiliar object and names the clue.',
            ],
            exitTicket:
              'Ask: "Tell me one thing about our street that has stayed the same for a hundred years, and how you would find out if you are right." The second half is the real assessment — you are listening for the idea that a claim needs a source.',
            rubric: [
              { level: 'emerging', descriptor: 'Lists differences between the pictures but treats them as two unrelated scenes, and explains change by saying it is modern now.' },
              { level: 'developing', descriptor: 'Sorts observations into changed and stayed the same reliably, but reasons are restatements rather than causes.' },
              { level: 'secure', descriptor: 'Proves the two views are one place with named evidence, sorts confidently, and gives a genuine cause for at least one change.' },
            ],
          },
          differentiation: {
            support: [
              'Cover the lower two-thirds of both street pictures so only the skyline is visible. Matching gets much easier and the permanence rule becomes obvious.',
              'Give the T-chart already ruled with the first item filled in on each side.',
              'Accept spoken "because" sentences that you scribe. The reasoning is the target, not the handwriting.',
            ],
            extension: [
              'Find a real photograph of your own town from a library or historical society website and run the same two-column comparison on it.',
              'Ask which of the changes would have been noticed by someone living through it, and which happened too slowly to feel.',
              'Order five changes from earliest to latest and justify the order.',
            ],
            language: [
              'Give the sentence frame "Then there was ___. Now there is ___." before asking for the causal sentence.',
              'Build a small picture glossary of period objects — wagon, awning, range, pump — before the lesson starts.',
            ],
          },
          misconceptions: [
            {
              misconception: 'People in the past were less intelligent than people now.',
              looksLike: 'The child says things like "they did not know about cars" in a tone of pity, or laughs at the clothing.',
              correction: 'Point out that everything in the picture — the wagon, the range, the pump — was designed by someone. Ask what they could do that we cannot: harness a horse, keep a fire at temperature, mend their own boots.',
            },
            {
              misconception: 'Change happens because time passes, so no reason is needed.',
              looksLike: 'Every explanation is a version of "because it was the olden days" or "because it is modern now".',
              correction: 'Refuse the answer kindly and ask what a person had to do to make that change happen. Every change has somebody deciding, paying and building.',
            },
            {
              misconception: 'If something is not visible in the photograph, it did not exist.',
              looksLike: 'The child concludes nobody had a particular job or that a group of people was absent from the town.',
              correction: 'Ask who was behind the camera, who was indoors, and who was at work elsewhere. A photograph is one moment from one viewpoint.',
            },
          ],
          homeExtension: [
            'Ask the oldest person you can reach what stood where a shop you know stands now.',
            'Find one object in your home that your grandparents would recognise instantly, and one they would not recognise at all.',
            'Look up your street on a library website that hosts old photographs and hunt for the skyline features.',
          ],
          teacherNotes:
            'The trap in this lesson is nostalgia in either direction — "life was simpler then" or "how awful for them". Neither is history. Hold the child to evidence and to causes, and the tone sorts itself out. If time is short, cut the third worksheet section rather than the closing prediction; the prediction is what makes the child realise they are inside history rather than looking at it.',
        },

        {
          id: 'g3-ss-u1-l3',
          unitId: 'g3-ss-u1',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Urban, Suburban, Rural',
          essentialQuestion: 'How does where you live change how you live?',
          summary:
            'Three settlement types compared on the same handful of measures — how far to a shop, how you travel, how many neighbours, what the land is used for — so the categories are descriptive rather than a ranking.',
          durationMin: 45,
          standards: [
            { code: 'D2.Geo.3.3-5', framework: 'C3', text: 'Use maps of different scales to describe the locations of cultural and environmental characteristics.' },
            { code: 'D2.Geo.7.3-5', framework: 'C3', text: 'Explain how cultural and environmental characteristics affect the distribution and movement of people, goods and ideas.' },
          ],
          objectives: [
            'I can describe urban, suburban and rural places using more than one feature.',
            'I can say which type my own community is and give two reasons.',
          ],
          vocabulary: [
            { term: 'urban', definition: 'In or around a city, where many people live close together.' },
            { term: 'suburban', definition: 'A settled area just outside a city, mostly houses.' },
            { term: 'rural', definition: 'Countryside, where people live far apart and much land is farmed or wild.' },
            { term: 'population density', definition: 'How many people live in a certain amount of space.' },
          ],
          materials: ['Printed satellite views of one city centre, one suburb and one farming area', 'A comparison chart with four rows', 'Coloured pencils'],
          prep: ['Choose the three satellite views in advance and print them at the same zoom level, or the comparison is meaningless.'],
          script: [],
          worksheet: { id: 'g3-ss-u1-l3-ws', title: 'Three Places, Four Questions', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Uses at least three measures to classify a place.', 'Classifies own community and defends it with evidence from a map.'],
            exitTicket: 'Show an unlabelled satellite view and ask the child to classify it and name the two clues they used.',
          },
          differentiation: {
            support: ['Compare only two types first — city centre and farmland — before introducing the middle case.'],
            extension: ['Investigate a place that is genuinely hard to classify, such as a small town, and argue for a category.'],
          },
          misconceptions: [
            { misconception: 'Urban means bad and rural means nice, or the reverse.', looksLike: 'The child ranks the three types rather than describing them.', correction: 'Ask what is easy in each place and what is hard. Every type wins some rows of the chart.' },
          ],
          homeExtension: ['On the next drive, watch for the moment the landscape changes type, and say when you think you crossed the line.'],
        },
        {
          id: 'g3-ss-u1-l4',
          unitId: 'g3-ss-u1',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'The First Peoples of Our Region',
          essentialQuestion: 'Who lived here before the town, and how did they live with this land?',
          summary:
            'Establishes that the region has a deep human history. The child researches the Indigenous nation or nations of their own area using that nation\'s own present-day website wherever possible, and learns to speak of them in the present tense.',
          durationMin: 45,
          standards: [
            { code: 'D2.His.3.3-5', framework: 'C3', text: 'Generate questions about individuals and groups who have shaped significant historical changes and continuities.' },
            { code: 'D2.Geo.4.3-5', framework: 'C3', text: 'Explain how culture influences the way people modify and adapt to their environments.' },
          ],
          objectives: [
            'I can name at least one Indigenous nation whose homeland includes my region.',
            'I can describe two ways they used the local land, water or seasons.',
            'I can talk about them in the present tense, because they are still here.',
          ],
          vocabulary: [
            { term: 'Indigenous', definition: 'Belonging to a people who have lived in a place since long before others arrived.' },
            { term: 'nation', definition: 'A people with their own government, language and land.' },
            { term: 'homeland', definition: 'The land a people belong to and have cared for over generations.' },
          ],
          materials: ['A map of Indigenous homelands for your region', 'A tribal or First Nations government website for the nation you identify', 'Chart paper'],
          prep: [
            'Identify the nation or nations for your specific location before the lesson and find their own website. Use the name they use for themselves.',
            'Check that any source you use was written or reviewed by that nation.',
          ],
          script: [],
          worksheet: { id: 'g3-ss-u1-l4-ws', title: 'Whose Homeland Is This', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Names a nation correctly and locates its homeland on a map.', 'Gives two specific examples of living with the local environment.', 'Uses present-tense language about the nation today.'],
            exitTicket: 'Ask the child to finish: "The people whose homeland this is are called ___, and today they ___."',
          },
          differentiation: {
            support: ['Focus on one concrete practice — a food, a seasonal move, a material — rather than a survey.'],
            extension: ['Find out what the nation is working on today: language revitalisation, land management, a court case, a museum.'],
            language: ['Practise pronouncing the nation\'s name using an audio clip from their own website before the lesson.'],
          },
          misconceptions: [
            { misconception: 'Indigenous peoples existed only in the past.', looksLike: 'The child uses past tense throughout and is surprised that the nation has a website.', correction: 'Open their current homepage. Read one news item from this year out loud.' },
          ],
          homeExtension: ['Find out whether any place name near you comes from an Indigenous language, and what it means.'],
        },
        {
          id: 'g3-ss-u1-l5',
          unitId: 'g3-ss-u1',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Newcomers and Why People Move',
          essentialQuestion: 'Why do people leave one place and settle in another?',
          summary:
            'Push and pull factors, made concrete with one family story — ideally the child\'s own — and then generalised. Ends by mapping where the people in the community came from.',
          durationMin: 45,
          standards: [
            { code: 'D2.Geo.7.3-5', framework: 'C3', text: 'Explain how cultural and environmental characteristics affect the distribution and movement of people, goods and ideas.' },
            { code: 'D2.His.2.3-5', framework: 'C3', text: 'Compare life in specific historical time periods to life today.' },
          ],
          objectives: [
            'I can explain the difference between a reason to leave and a reason to arrive.',
            'I can tell one true story of a family moving and name the reasons in it.',
          ],
          vocabulary: [
            { term: 'migration', definition: 'Moving from one place to another to live.' },
            { term: 'push factor', definition: 'A reason that makes people want to leave a place.' },
            { term: 'pull factor', definition: 'A reason that makes people want to come to a place.' },
            { term: 'immigrant', definition: 'A person who comes to live in a new country.' },
          ],
          materials: ['A world map', 'Sticky dots or pins', 'A family story, interview or photograph if one is available'],
          prep: [
            'Prepare a second story in case the child\'s family history is unknown, painful or not something they wish to share. Never require a family origin story.',
          ],
          script: [],
          worksheet: { id: 'g3-ss-u1-l5-ws', title: 'Leaving and Arriving', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Sorts six reasons into push and pull correctly.', 'Retells one migration story with at least two reasons named.'],
            exitTicket: 'Give one reason — "there was no work" — and ask whether it is a push or a pull, and why.',
          },
          differentiation: {
            support: ['Use a move the child has actually experienced, even a move across town.'],
            extension: ['Investigate why one particular group settled in your region and what work drew them.'],
          },
          misconceptions: [
            { misconception: 'People move because they do not like their old home.', looksLike: 'The child assumes migration is always rejection.', correction: 'Most people who move miss home. Talk about what people bring with them and keep.' },
          ],
          homeExtension: ['Ask a relative about the furthest move anyone in the family has made, and what they took with them.'],
        },
      ],
    },

    /* ============================================================ UNIT 2 */
    {
      id: 'g3-ss-u2',
      gradeId: 'g3',
      subjectId: 'social-studies',
      sequence: 2,
      title: 'How We Govern Ourselves',
      bigIdea:
        'Government is the way a community decides things together — and it is split into separate branches on purpose, so that no one person holds all of it.',
      description:
        'From playground rules to state law. Learners learn what rules are for, meet the three branches at both local and state level, follow one real idea through the law-making process, and discover the many ways a citizen participates between elections.',
      weeks: 5,
      standards: [
        { code: 'D2.Civ.1.3-5', framework: 'C3', text: 'Distinguish the responsibilities and powers of government officials at various levels and branches of government and in different times and places.' },
        { code: 'D2.Civ.3.3-5', framework: 'C3', text: 'Examine the origins and purposes of rules, laws and key constitutional provisions.' },
        { code: 'D2.Civ.2.3-5', framework: 'C3', text: 'Explain how a democracy relies on people\'s responsible participation, and draw implications for how individuals should participate.' },
        { code: 'D2.Civ.12.3-5', framework: 'C3', text: 'Explain how rules and laws change society and how people change rules and laws.' },
      ],
      lessonTitles: [
        'Rules, Laws and Why We Have Them',
        'Three Branches, One Job Each',
        'Meet Your Local Government',
        'What a State Government Does',
        'Being a Citizen Between Elections',
      ],
      performanceTask:
        'The Real Proposal: the child identifies one thing they would change in their own community, writes a one-page proposal naming which level and branch of government could act on it, and reads it aloud to an audience of at least two adults.',
      lessons: [
        {
          id: 'g3-ss-u2-l1',
          unitId: 'g3-ss-u2',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'Rules, Laws and Why We Have Them',
          essentialQuestion: 'What is a rule for, and what makes a rule a good one?',
          summary:
            'The child audits real rules — household, school, road — against three tests: does it keep people safe, is it fair, and can everyone follow it? Then they write one rule for the household and defend it.',
          durationMin: 45,
          standards: [
            { code: 'D2.Civ.3.3-5', framework: 'C3', text: 'Examine the origins and purposes of rules, laws and key constitutional provisions.' },
          ],
          objectives: [
            'I can explain the difference between a rule and a law.',
            'I can judge a rule against a test instead of just liking or disliking it.',
          ],
          vocabulary: [
            { term: 'rule', definition: 'An agreement about how to behave in one place or group.' },
            { term: 'law', definition: 'A rule made by a government that everyone in a place must follow.' },
            { term: 'consequence', definition: 'What happens when a rule is broken.' },
            { term: 'fair', definition: 'Treating people in a way that gives everyone what they need.' },
          ],
          materials: ['Index cards', 'A printed list of six real rules from home, school and the road'],
          prep: ['Write the six rule cards in advance and include one that is genuinely a bad rule, so there is something to argue about.'],
          script: [],
          worksheet: { id: 'g3-ss-u2-l1-ws', title: 'Testing the Rules', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Applies all three tests to a rule.', 'Distinguishes a rule from a law with an example of each.'],
            exitTicket: 'Give a made-up rule — "nobody may run anywhere, ever" — and ask which test it fails.',
          },
          differentiation: {
            support: ['Use only the safety test to begin with.'],
            extension: ['Rewrite the bad rule so it passes all three tests without losing its purpose.'],
          },
          misconceptions: [
            { misconception: 'Rules exist because adults enjoy control.', looksLike: 'Every rule is judged as unfair.', correction: 'Remove one rule for an afternoon and let the consequences make the argument.' },
          ],
          homeExtension: ['Find the rule in your home that everybody forgets, and work out why it is hard to follow.'],
        },

        /* ------------------------------------------------------ AUTHORED */
        {
          id: 'g3-ss-u2-l2',
          unitId: 'g3-ss-u2',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'authored',
          title: 'Three Branches, One Job Each',
          essentialQuestion: 'Why is the power to govern split into three parts instead of given to one person?',
          summary:
            'The child experiences the problem before the solution: an adult who makes the rule, catches the offender and decides the punishment. From that unfairness the three branches are derived rather than recited.',
          durationMin: 45,
          standards: [
            { code: 'D2.Civ.1.3-5', framework: 'C3', text: 'Distinguish the responsibilities and powers of government officials at various levels and branches of government and in different times and places.' },
            { code: 'D2.Civ.3.3-5', framework: 'C3', text: 'Examine the origins and purposes of rules, laws and key constitutional provisions.' },
            { code: 'D2.Civ.12.3-5', framework: 'C3', text: 'Explain how rules and laws change society and how people change rules and laws.' },
          ],
          objectives: [
            'I can name the job of each of the three branches in my own words.',
            'I can say which branch would handle a situation and why.',
            'I can explain one reason the power is split up.',
          ],
          vocabulary: [
            { term: 'legislative', definition: 'The branch that makes the laws.', example: 'The state legislature.' },
            { term: 'executive', definition: 'The branch that carries out the laws.', example: 'The governor and the mayor.' },
            { term: 'judicial', definition: 'The branch that decides what a law means and whether it was broken.', example: 'The courts.' },
            { term: 'branch', definition: 'One of the three separate parts of a government.' },
            { term: 'separation of powers', definition: 'Splitting the power to govern so that no one person or group holds all of it.' },
          ],
          materials: [
            'The printed worksheet',
            'Eight blank index cards',
            'A pencil',
            'Optional: your state government website open on a screen',
          ],
          prep: [
            'Write the eight scenario cards from the worksheet answer key onto index cards before you start. Sorting physical cards works far better than reading a list.',
            'Look up the name of your governor, your mayor or council chair, and your state\'s highest court. Real names make this concrete.',
            'Decide on the household rule you will invent in the hook, and be ready to be genuinely unreasonable about it.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'I Am In Charge of Everything',
              minutes: 6,
              say: [
                'New rule, effective right now. Nobody in this house may put their elbows on the table. I made that rule. Just me.',
                'And I will be the one who watches to see if you break it. Just me.',
                'And if I decide you broke it, I decide what happens to you. Also just me. Any objections?',
                'Say more about that. What exactly is wrong with it?',
                'Right. I made the rule, I decide if you broke it, and I choose the punishment. There is nobody to appeal to. That is the problem the whole rest of this lesson solves.',
              ],
              do: [
                'Make the rule slightly absurd and enforce it immediately on the nearest elbow.',
                'When the child protests, do not defend yourself. Ask them to name the problem precisely.',
              ],
              studentDoes: ['Objects, and articulates that one person holding all three roles is unfair.'],
              checks: [
                {
                  ask: 'What is the actual problem with me holding all three jobs?',
                  lookFor: 'Anything about there being no check — "you could just say I did it", "there is no one to tell".',
                  ifStuck: 'Accuse them of an elbow offence they did not commit and refuse to hear evidence. The unfairness becomes obvious immediately.',
                },
              ],
              tip: 'Do not rush past the protest. The felt injustice of this moment is the only thing that makes "separation of powers" mean anything to an eight-year-old.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Split It Into Three',
              minutes: 10,
              say: [
                'So let us split my job into three, and give each part to different people.',
                'Job one: MAKE the rule. That is the legislative branch. In our state that is the legislature — a whole room of people who have to agree before anything becomes law.',
                'Job two: CARRY OUT the rule. That is the executive branch. The governor runs the state; the mayor runs the city. They are the ones who actually make it happen — the inspectors, the road crews, the police.',
                'Job three: DECIDE what the rule means and whether somebody broke it. That is the judicial branch. The courts.',
                'Say them back to me with your hands. Make — carry out — decide.',
                'And here is the clever part. Each branch can stop the others. The legislature passes a law and the governor can refuse to sign it. The courts can rule that a law is not allowed. Nobody gets everything they want, and that is on purpose.',
              ],
              do: [
                'Hold up three fingers and assign one job to each finger. Use the same three fingers every time you refer back.',
                'Write the three words on scrap paper in a triangle, not a list, with arrows between them.',
              ],
              studentDoes: ['Repeats the three jobs with a hand gesture for each, and names one branch that can stop another.'],
              checks: [
                { ask: 'Which branch makes the law?', lookFor: 'Legislative — the legislature.', ifStuck: 'Point at the finger you assigned and say the verb: "make".' },
                { ask: 'Why should the same people not both make the law and decide who broke it?', lookFor: 'They could accuse anyone they like; there would be no fair check.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Sort the Cards',
              minutes: 10,
              say: [
                'Eight cards. Each one is a real thing that happens in a state. Put it under the branch whose job it is.',
                'Read this one out. "A judge decides whether a new parking law applies to bicycles." Which branch?',
                'Judicial. It is deciding what the law means. Straight to that pile.',
                'Here is the tricky one, and I want you to argue with me about it. "The governor signs a bill so it becomes a law." Is that making a law or carrying one out?',
                'It is the executive branch doing something to a law the legislature made. The signing is the governor\'s job. Writing the bill was not.',
              ],
              do: [
                'Lay out three labelled zones on the table and let the child place the cards physically.',
                'Deliberately misplace one card yourself and wait to be corrected.',
              ],
              studentDoes: ['Sorts eight scenario cards into three branches and justifies the two hardest.'],
              checks: [
                {
                  ask: 'Why does that one go there?',
                  lookFor: 'The child names the verb — making, carrying out, or deciding — rather than the person.',
                  ifStuck: 'Ask a narrower question: "Is somebody writing a new rule here, or using a rule that already exists?"',
                },
              ],
              tip: 'The signing card is the one that trips almost everyone. Let the child be wrong on it and work it out — it is where the branches touch, which is the point.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 14,
              say: [
                'On the page there are three big empty boxes, one for each branch. Write the branch name in each box and draw the person or place that does that job.',
                'Then there are six situations. Write L, E or J next to each one.',
                'The last part is the real thinking. Somebody wants a new crossing outside the school. Number the steps in the right order and say which branch does each one.',
              ],
              do: [
                'Read the six situations aloud. Do not assume all the vocabulary is readable yet.',
                'Let them attempt the ordering task before you help. Wrong orders are useful conversation.',
              ],
              studentDoes: ['Completes the branch organiser, labels six situations and sequences the crossing scenario.'],
              checks: [
                { ask: 'Which branch has to act first for the crossing to happen, and why?', lookFor: 'The legislative or council side, because somebody has to pass the rule and the money before anyone can build.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Your Rule, Three Branches',
              minutes: 5,
              say: [
                'Invent one rule for this house. Any rule. It has to be one you would actually want.',
                'Now walk it through. Who makes it? Who carries it out? Who decides if somebody broke it?',
                'And here is the last question. Should any of those three be the same person?',
                'No. That is the whole idea, and you worked it out yourself before I told you the words.',
              ],
              do: ['Write the child\'s rule down and actually adopt it for a week if it passes their own three-branch test.'],
              studentDoes: ['Proposes a rule and assigns each of the three functions to a different person.'],
              checks: [
                { ask: 'What would go wrong if you were all three?', lookFor: 'A version of the hook: no fairness, no appeal, nobody to check you.' },
              ],
            },
          ],
          worksheet: {
            id: 'g3-ss-u2-l2-ws',
            title: 'Three Branches, One Job Each',
            style: 'historical',
            prepNotes:
              'Cut the eight scenario cards from the answer key onto index cards before the lesson — the physical sort in beat three does most of the teaching, and reading them off a page does not work nearly as well. The three-box organiser is deliberately empty of printed labels so the child writes the branch names themselves.',
            sections: [
              {
                id: 's1',
                title: 'Who Does What',
                directions: 'Write the name of one branch in each box. Under the name, write the job of that branch in your own words, and draw the person or place that does it.',
                layout: 'grid',
                writingLines: 2,
                images: [
                  {
                    id: 'g3-ss-u2-img-organiser-3',
                    slot: 'Three empty branch boxes',
                    purpose: 'A blank organiser rather than a completed diagram, because the child must generate the three jobs from memory. The empty rectangles are the retrieval practice.',
                    subject: 'three identical empty rounded rectangular boxes with plain outlines, arranged in a row, each with a short horizontal writing rule inside near the top and open space below',
                    count: 3,
                    composition: 'exactly three identical boxes in a single straight horizontal row, evenly spaced with equal gaps, each box the same width and height, a single thin horizontal writing rule inside the top of each box, the rest of each box left completely blank white',
                    mustInclude: ['exactly three identical empty boxes', 'one thin horizontal writing rule inside the top of each box', 'plenty of blank white space inside each box for a child to draw'],
                    mustAvoid: ['any printed words, letters or numbers inside or around the boxes', 'icons, symbols or decoration inside the boxes', 'arrows or connecting lines', 'shading or colour fill that would make pencil hard to see'],
                    aspect: '3:1',
                    altText: 'Three empty labelled boxes in a row for the three branches of government',
                    style: 'diagram',
                  },
                  {
                    id: 'g3-ss-u2-img-legislature',
                    slot: 'The branch that makes the laws',
                    purpose: 'Gives the legislative branch a concrete image: a room full of people who must persuade one another. The crowd is the point — lawmaking is collective, unlike the other two branches.',
                    subject: 'the interior of a state legislative chamber during a session, tiered semicircular wooden desks facing a raised rostrum, twelve seated legislators of varied ages and backgrounds with papers in front of them and one standing to speak',
                    count: 12,
                    composition: 'a wide view from the rear of the chamber looking towards the rostrum, the semicircle of desks filling the lower two thirds of the frame, the standing speaker clearly visible near the centre, tall windows and a coffered ceiling above',
                    mustInclude: [
                      'exactly twelve seated people plus one standing speaker',
                      'people of varied ages, genders and backgrounds shown with dignity, attentive and professional',
                      'architecturally accurate civic detail: tiered curved desks, a raised rostrum, wood panelling, tall windows',
                    ],
                    mustAvoid: [
                      'any readable text on papers, nameplates, banners or walls',
                      'caricature, exaggerated features or a person made to look foolish',
                      'shouting, conflict, protest or any confrontation',
                      'party symbols, flags of any specific party, or campaign material',
                    ],
                    aspect: '4:3',
                    altText: 'A state legislative chamber with twelve seated legislators and one standing to speak',
                    style: 'historical',
                  },
                  {
                    id: 'g3-ss-u2-img-governor-signing',
                    slot: 'The branch that carries out the laws',
                    purpose: 'The signing moment is exactly where the executive and legislative branches touch, which is the hardest distinction in the lesson. Showing it makes the handover visible.',
                    subject: 'a governor seated at a broad desk signing a document with a pen, four people of varied ages and backgrounds standing behind the desk watching, in a formal state office with panelled walls and a tall window',
                    count: 4,
                    composition: 'a three-quarter view from the front, the seated governor centre-left with the pen touching the document, the four standing observers grouped behind and to the right, desk surface clear apart from the document and a pen stand',
                    mustInclude: [
                      'exactly four people standing behind the seated governor',
                      'the pen visibly in contact with the document',
                      'all five people shown with dignity, calm and respectful, of varied ages, genders and backgrounds',
                    ],
                    mustAvoid: [
                      'any readable writing on the document, walls or nameplates',
                      'caricature or resemblance to any real, identifiable public figure',
                      'campaign material, party symbols or slogans',
                      'crowds, cameras crowding the desk, or any chaotic staging',
                    ],
                    aspect: '3:2',
                    altText: 'A governor signing a document at a desk while four people stand behind and watch',
                    style: 'historical',
                  },
                  {
                    id: 'g3-ss-u2-img-courtroom',
                    slot: 'The branch that decides what the law means',
                    purpose: 'Anchors the judicial branch in a room built for listening to both sides. The empty jury seats matter: they show that ordinary people are part of the branch too.',
                    subject: 'the interior of a courtroom with a raised judge\'s bench, a judge in a plain black robe seated at the bench, two tables for the opposing sides below, and a side box containing twelve empty wooden chairs',
                    count: 12,
                    composition: 'a wide view from the rear of the public gallery, the raised bench centred at the back of the frame, the two tables in the middle ground, the jury box with its twelve chairs clearly visible along the right-hand wall, all twelve chairs empty and countable',
                    mustInclude: [
                      'exactly twelve empty wooden chairs in the jury box, evenly spaced and individually countable',
                      'one judge in a plain black robe, shown as calm, attentive and dignified',
                      'accurate civic courtroom architecture: raised bench, wooden rail, panelled walls',
                    ],
                    mustAvoid: [
                      'any readable text on documents, plaques or the bench',
                      'a defendant in restraints, police, weapons, or anyone in distress',
                      'caricature or a menacing, angry or comic judge',
                      'gavel-banging drama or courtroom conflict',
                    ],
                    aspect: '4:3',
                    altText: 'A courtroom with a judge at a raised bench and twelve empty jury chairs',
                    style: 'historical',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Which Branch?',
                directions: 'Read each one. Write L for legislative, E for executive or J for judicial on the line beside it.',
                layout: 'column',
                items: [
                  'The state legislature votes on a bill about school bus safety. ____',
                  'A court decides whether a new law about scooters applies to electric ones. ____',
                  'The governor signs a bill so that it becomes a law. ____',
                  'The state highway department repairs a bridge the law says must be kept safe. ____',
                  'A judge decides that a rule was applied unfairly to someone. ____',
                  'A committee of lawmakers writes a new rule about lake water. ____',
                ],
              },
              {
                id: 's3',
                title: 'How the Crossing Got Built',
                directions: 'Families want a new pedestrian crossing outside the school. Number these steps 1 to 4 in the order they must happen. Then write which branch does each step.',
                layout: 'full',
                writingLines: 5,
                items: [
                  '___ A court decides what the new crossing law means when a driver says the markings were unclear. Branch: ______',
                  '___ Families speak at a public meeting and ask for a crossing. Branch: ______',
                  '___ The city council votes to pass the crossing rule and set aside the money. Branch: ______',
                  '___ The city works department paints the crossing and puts up the lights. Branch: ______',
                ],
                images: [
                  {
                    id: 'g3-ss-u2-img-public-meeting',
                    slot: 'A public meeting where residents speak',
                    purpose: 'Shows the entry point ordinary people have into all of this, which is the participation idea the unit builds towards. Without it, government looks like something done to the child rather than by them.',
                    subject: 'a plain municipal meeting room where five council members sit behind a long table on a low platform and a resident stands at a small lectern facing them, with eight seated residents of varied ages and backgrounds watching from rows of chairs',
                    count: 8,
                    composition: 'a side-on view showing both the council table on the left and the seated audience on the right, the standing resident between them at the lectern, plain walls, folding chairs in two neat rows, all eight seated residents clearly separated and countable',
                    mustInclude: [
                      'exactly eight seated residents, clearly separated and individually countable',
                      'people of varied ages, genders and backgrounds shown with dignity and attention, including at least one child seated with an adult',
                      'an ordinary, modest civic room rather than a grand chamber',
                    ],
                    mustAvoid: [
                      'any readable text on signs, agendas or name cards',
                      'protest placards, shouting, anger or confrontation',
                      'caricature or a person shown as foolish or hostile',
                      'a crowd so dense that the eight seated residents cannot be counted',
                    ],
                    aspect: '16:9',
                    altText: 'A resident speaking at a lectern to five council members while eight residents watch from rows of chairs',
                    style: 'historical',
                  },
                ],
              },
            ],
            answerKey: [
              'Which branch: 1 L, 2 J, 3 E, 4 E, 5 J, 6 L.',
              'Crossing order: 1 — families speak at a public meeting (this is citizens, not a branch; accept "the people"). 2 — the council votes to pass the rule and the money (legislative). 3 — the works department paints and builds (executive). 4 — a court decides what the law means (judicial).',
              'Scenario cards for the physical sort: (L) a committee writes a bill about lake water; (L) the legislature votes on a school bus bill; (E) the governor signs a bill into law; (E) a state inspector checks a restaurant kitchen; (E) the highway crew repairs a bridge; (J) a judge decides whether a law applies to bicycles; (J) a court hears both sides of a dispute about a fence; (J) a judge rules that a rule was applied unfairly.',
              'Branch boxes: legislative — makes the laws, drawn as a chamber of lawmakers. Executive — carries out the laws, drawn as a governor or mayor and the workers they direct. Judicial — decides what laws mean and who broke them, drawn as a courtroom.',
            ],
          },
          assessment: {
            successCriteria: [
              'States the job of each branch using a verb: make, carry out, decide.',
              'Correctly assigns at least five of the six situations.',
              'Explains one reason the three jobs are held by different people.',
              'Places the signing of a bill in the executive branch and can justify it.',
            ],
            exitTicket:
              'Ask: "A new law says all dogs in the park must be on a lead. Who wrote it, who enforces it, and who decides if a cat counts?" You want three different answers, in the right order.',
            rubric: [
              { level: 'emerging', descriptor: 'Recites the three branch names but cannot attach a job to each, and sorts scenarios by guessing at the person named.' },
              { level: 'developing', descriptor: 'Attaches the right job to each branch and sorts clear cases correctly, but the signing of a bill and any case where branches touch are misplaced.' },
              { level: 'secure', descriptor: 'Sorts confidently including the hard cases, justifies by naming the function rather than the official, and explains separation of powers in their own words.' },
            ],
          },
          differentiation: {
            support: [
              'Reduce to two branches first — the ones who make the rule and the ones who decide if it was broken. Add the executive once that split is solid.',
              'Keep the three-finger gesture available all week and use it whenever a rule comes up at home.',
              'Sort only four cards, choosing the four clearest.',
            ],
            extension: [
              'Find the actual names of your governor, your mayor or council chair, and the chief justice of your state\'s highest court.',
              'Investigate one real check: a veto, an override, or a court striking down a law, and explain who stopped whom.',
              'Compare the three branches at state level with the three at national level and list what is the same.',
            ],
            language: [
              'Teach the three verbs first — make, carry out, decide — and attach the long branch names afterwards.',
              'Give the sentence frame "This is the ___ branch because somebody is ___ing a law."',
            ],
          },
          misconceptions: [
            {
              misconception: 'The executive branch is one person — the governor or the mayor.',
              looksLike: 'The child thinks the governor personally repairs bridges and inspects restaurants.',
              correction: 'Count the people in the picture of the works crew. The executive branch is thousands of people carrying out laws; the governor is the one in charge of them.',
            },
            {
              misconception: 'Signing a bill means the governor made the law.',
              looksLike: 'The signing card gets sorted into legislative every time.',
              correction: 'Ask who wrote the words on the paper. Somebody else made it; the governor decided whether to let it take effect.',
            },
            {
              misconception: 'Courts only deal with crimes.',
              looksLike: 'Every judicial card is described as "someone got in trouble".',
              correction: 'Use the bicycle example. Nobody is in trouble; the court is deciding what a word in the law means.',
            },
          ],
          homeExtension: [
            'Find out when your city council or town board meets next. Anyone may attend, and most meetings publish the agenda.',
            'Watch the news for one week and try to spot one story about each branch.',
            'Play the three-branch game with any household dispute: who makes the rule, who carries it out, who decides.',
          ],
          teacherNotes:
            'Do not open with the diagram. Every child in the country has seen a three-branch chart and none of them remember it, because the chart answers a question nobody asked. The unreasonable elbow rule is what makes the chart land. Also be honest that the branches are messier in practice than the boxes suggest — a bright child will notice that agencies write rules too, and they are right.',
        },

        {
          id: 'g3-ss-u2-l3',
          unitId: 'g3-ss-u2',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Meet Your Local Government',
          essentialQuestion: 'Who decides things where I live, and what can they actually decide?',
          summary:
            'Local government made specific: the actual council, the actual mayor or board, the actual services. The child traces one service — refuse collection, the library, the park — back to the people who fund and run it.',
          durationMin: 45,
          standards: [
            { code: 'D2.Civ.1.3-5', framework: 'C3', text: 'Distinguish the responsibilities and powers of government officials at various levels and branches of government.' },
            { code: 'D2.Civ.6.3-5', framework: 'C3', text: 'Describe ways in which people benefit from and are challenged by working together, including through government.' },
          ],
          objectives: [
            'I can name my mayor or council chair and one thing the council decides.',
            'I can trace one local service to the people who run it.',
          ],
          vocabulary: [
            { term: 'council', definition: 'The group of elected people who make decisions for a city or town.' },
            { term: 'mayor', definition: 'The elected leader of a city or town.' },
            { term: 'services', definition: 'Things the government does for everyone, such as roads, libraries and rubbish collection.' },
            { term: 'taxes', definition: 'Money people pay to the government so it can provide services.' },
          ],
          materials: ['Your city or county website on a screen', 'A blank organisation chart', 'A local map'],
          prep: ['Find your council\'s membership page and the next meeting agenda before you begin. Real names and real agenda items transform this lesson.'],
          script: [],
          worksheet: { id: 'g3-ss-u2-l3-ws', title: 'Who Runs Our Town', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Names at least two local officials or bodies and what they do.', 'Explains where the money for one service comes from.'],
            exitTicket: 'Ask who the child would go to about a broken swing in the park, and how they would reach them.',
          },
          differentiation: {
            support: ['Focus on one single service the child uses weekly.'],
            extension: ['Read one item from the real council agenda and work out who it affects.'],
          },
          misconceptions: [
            { misconception: 'The president decides everything.', looksLike: 'National figures are named for local problems.', correction: 'Ask who fills the potholes on your street, and follow the money to the local budget.' },
          ],
          homeExtension: ['Look for the name of the department on the side of the next council vehicle you see.'],
        },
        {
          id: 'g3-ss-u2-l4',
          unitId: 'g3-ss-u2',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'What a State Government Does',
          essentialQuestion: 'What does the state decide that my town does not?',
          summary:
            'Distinguishing levels of government by what each is responsible for: schools, roads, licences, parks, courts. The child sorts responsibilities into local, state and national.',
          durationMin: 45,
          standards: [
            { code: 'D2.Civ.1.3-5', framework: 'C3', text: 'Distinguish the responsibilities and powers of government officials at various levels and branches of government.' },
            { code: 'D2.Civ.12.3-5', framework: 'C3', text: 'Explain how rules and laws change society and how people change rules and laws.' },
          ],
          objectives: [
            'I can sort responsibilities into local, state and national.',
            'I can name three things my state government is responsible for.',
          ],
          vocabulary: [
            { term: 'state', definition: 'A large region with its own government inside a country.' },
            { term: 'governor', definition: 'The elected leader of a state\'s executive branch.' },
            { term: 'legislature', definition: 'The group of elected people who make a state\'s laws.' },
            { term: 'capital', definition: 'The city where a state or country\'s government meets.' },
          ],
          materials: ['A state map showing the capital', 'Sorting cards for twelve responsibilities'],
          prep: ['Check two or three responsibilities that are genuinely shared between levels so you can discuss the overlap honestly.'],
          script: [],
          worksheet: { id: 'g3-ss-u2-l4-ws', title: 'Which Level Decides', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Sorts at least nine of twelve responsibility cards correctly.', 'Locates the state capital and names the governor.'],
            exitTicket: 'Ask which level of government issues a driving licence, and which decides the speed limit on your street.',
          },
          differentiation: {
            support: ['Sort only local versus state, leaving the national level out.'],
            extension: ['Find one responsibility that all three levels share and explain how they divide it.'],
          },
          misconceptions: [
            { misconception: 'The levels are ranked, so the higher one can always overrule.', looksLike: 'The child assumes the state runs the local library.', correction: 'Show the local budget line for the library and the state line for the highway. Different money, different decisions.' },
          ],
          homeExtension: ['Find the state capital on a map and work out how long it would take to drive there.'],
        },
        {
          id: 'g3-ss-u2-l5',
          unitId: 'g3-ss-u2',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Being a Citizen Between Elections',
          essentialQuestion: 'What can a person do about a problem when it is not election day?',
          summary:
            'Participation beyond voting: speaking at a meeting, writing to a representative, petitioning, volunteering, serving on a jury, joining a group. The child chooses one method and drafts it for real.',
          durationMin: 45,
          standards: [
            { code: 'D2.Civ.2.3-5', framework: 'C3', text: 'Explain how a democracy relies on people\'s responsible participation, and draw implications for how individuals should participate.' },
            { code: 'D2.Civ.10.3-5', framework: 'C3', text: 'Identify the beliefs, experiences, perspectives and values that underlie their own and others\' points of view about civic issues.' },
          ],
          objectives: [
            'I can name four ways a person takes part in a democracy besides voting.',
            'I can write a short, polite, specific message to an official about a real problem.',
          ],
          vocabulary: [
            { term: 'citizen', definition: 'A member of a community or country who has both rights and responsibilities.' },
            { term: 'petition', definition: 'A written request signed by many people asking for a change.' },
            { term: 'volunteer', definition: 'Someone who does useful work for others without being paid.' },
            { term: 'representative', definition: 'A person elected to speak and act for others.' },
          ],
          materials: ['Paper and envelope', 'Your representative\'s contact details', 'A model letter'],
          prep: ['Find one genuinely small, local, fixable problem in advance — a missing bin, an unlit path — so the letter has a real target.'],
          script: [],
          worksheet: { id: 'g3-ss-u2-l5-ws', title: 'Ways to Take Part', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Names four forms of participation.', 'Writes a message that states a problem, a location and a request.'],
            exitTicket: 'Ask: "You are eight. Name two things you can do about a problem in your town today."',
          },
          differentiation: {
            support: ['Use a sentence-frame letter with three blanks.'],
            extension: ['Actually send the letter and track whether a reply comes.'],
            language: ['Draft in the stronger language first, then translate the request sentence together.'],
          },
          misconceptions: [
            { misconception: 'Children cannot participate because they cannot vote.', looksLike: 'The child says they will care about it when they are eighteen.', correction: 'Public comment periods have no age limit. Neither does a petition or a letter.' },
          ],
          homeExtension: ['Find out how to report a problem to your council — most have a phone line or a form — and keep the number on the fridge.'],
        },
      ],
    },

    /* ============================================================ UNIT 3 */
    {
      id: 'g3-ss-u3',
      gradeId: 'g3',
      subjectId: 'social-studies',
      sequence: 3,
      title: 'Reading the Land: Regions and How People Live With Them',
      bigIdea:
        'People settle where the land offers something they need, then they adapt themselves to the land — and reshape the land to suit them.',
      description:
        'Learners read maps of several kinds, work out why settlements sit where they sit, and study the two-way relationship between people and environment: adapting to what a place gives, and modifying what it does not. The unit is deliberately honest that modification has costs as well as benefits.',
      weeks: 5,
      standards: [
        { code: 'D2.Geo.1.3-5', framework: 'C3', text: 'Construct maps and other graphic representations of both familiar and unfamiliar places.' },
        { code: 'D2.Geo.2.3-5', framework: 'C3', text: 'Use maps, satellite images, photographs and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
        { code: 'D2.Geo.4.3-5', framework: 'C3', text: 'Explain how culture influences the way people modify and adapt to their environments.' },
        { code: 'D2.Geo.8.3-5', framework: 'C3', text: 'Explain how human settlements and movements relate to the locations and use of various natural resources.' },
      ],
      lessonTitles: [
        'What a Region Is',
        'Maps That Tell You Different Things',
        'Why the Town Ended Up Here',
        'Adapting to the Weather You Get',
        'Changing the Land: Dams, Bridges and Fields',
      ],
      performanceTask:
        'The Settlement Case: given a blank physical map of an imaginary territory, the child chooses a site for a town, marks it, and writes a three-reason defence citing water, land and travel — then names one change they would have to make to the land and one cost of making it.',
      lessons: [
        {
          id: 'g3-ss-u3-l1',
          unitId: 'g3-ss-u3',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'What a Region Is',
          essentialQuestion: 'How do we decide where one place ends and another begins?',
          summary:
            'A region is any area grouped by something shared — landform, climate, language, crops, sport allegiance. The child draws three different region maps of the same territory using three different rules.',
          durationMin: 45,
          standards: [
            { code: 'D2.Geo.3.3-5', framework: 'C3', text: 'Use maps of different scales to describe the locations of cultural and environmental characteristics.' },
            { code: 'D2.Geo.2.3-5', framework: 'C3', text: 'Use maps, satellite images and photographs to explain relationships between locations and environmental characteristics.' },
          ],
          objectives: [
            'I can explain that a region is a group of places that share something.',
            'I can draw region boundaries using a rule I choose and state.',
          ],
          vocabulary: [
            { term: 'region', definition: 'An area where places share something in common.' },
            { term: 'boundary', definition: 'A line where one area ends and another begins.' },
            { term: 'landform', definition: 'A natural shape of the land, like a mountain, valley or plain.' },
          ],
          materials: ['Three copies of the same blank state or country outline', 'Coloured pencils', 'A physical map and a climate map'],
          prep: ['Decide your three grouping rules in advance: landform, rainfall, and something cultural like a food or a dialect word.'],
          script: [],
          worksheet: { id: 'g3-ss-u3-l1-ws', title: 'Three Ways to Cut One Map', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Draws three different regional divisions of one territory and names the rule for each.'],
            exitTicket: 'Ask the child to name a region they belong to and the thing that its places share.',
          },
          differentiation: {
            support: ['Provide two of the three maps already divided and ask only for the rule.'],
            extension: ['Find a place that sits on a boundary and argue for which region it belongs to.'],
          },
          misconceptions: [
            { misconception: 'Regions are fixed and printed on the land.', looksLike: 'The child looks for the real boundary.', correction: 'Show two published maps that divide the same area differently, and ask who decided.' },
          ],
          homeExtension: ['Ask two adults where "the north" of your state begins and compare their answers.'],
        },
        {
          id: 'g3-ss-u3-l2',
          unitId: 'g3-ss-u3',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'Maps That Tell You Different Things',
          essentialQuestion: 'Why do we need more than one map of the same place?',
          summary:
            'Political, physical, climate, resource and road maps of one area, compared. The child learns to read a legend and a scale, and to pick the right map for a question.',
          durationMin: 45,
          standards: [
            { code: 'D2.Geo.1.3-5', framework: 'C3', text: 'Construct maps and other graphic representations of both familiar and unfamiliar places.' },
            { code: 'D2.Geo.2.3-5', framework: 'C3', text: 'Use maps, satellite images, photographs and other representations to explain relationships between the locations of places and regions and their environmental characteristics.' },
          ],
          objectives: [
            'I can use a legend and a scale to answer a question.',
            'I can choose the right kind of map for the question I am asking.',
            'I can draw a map of a familiar place with a legend and a compass rose.',
          ],
          vocabulary: [
            { term: 'legend', definition: 'The key that explains what the symbols and colours on a map mean.' },
            { term: 'scale', definition: 'The part of a map that tells you how map distance matches real distance.' },
            { term: 'compass rose', definition: 'The symbol showing which way is north.' },
            { term: 'symbol', definition: 'A small picture or mark standing for a real thing on the ground.' },
          ],
          materials: ['Four map types of the same region', 'A ruler', 'Blank paper for the child\'s own map'],
          prep: ['Prepare four real questions in advance, each answerable by exactly one of the four maps.'],
          script: [],
          worksheet: { id: 'g3-ss-u3-l2-ws', title: 'Pick the Right Map', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Matches four questions to the correct map type.', 'Measures one distance using the scale.', 'Produces a map with a legend and compass rose.'],
            exitTicket: 'Ask which map you would use to find out whether a hike is uphill, and why.',
          },
          differentiation: {
            support: ['Work with two map types only and use a string for measuring rather than a ruler.'],
            extension: ['Compare a road map and a satellite image and find something present on one and missing from the other.'],
          },
          misconceptions: [
            { misconception: 'A map shows everything that is really there.', looksLike: 'The child assumes an absent feature does not exist.', correction: 'Ask what the mapmaker chose to leave out and why. Every map is a set of decisions.' },
          ],
          homeExtension: ['Draw a map of the route from your door to somewhere you walk often, with a legend of four symbols.'],
        },
        {
          id: 'g3-ss-u3-l3',
          unitId: 'g3-ss-u3',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Why the Town Ended Up Here',
          essentialQuestion: 'What makes a spot on the land worth settling?',
          summary:
            'Site analysis: fresh water, a river crossing, a harbour, flat buildable ground, timber or ore, a route junction. The child evaluates four candidate sites on an imaginary map and defends one.',
          durationMin: 45,
          standards: [
            { code: 'D2.Geo.8.3-5', framework: 'C3', text: 'Explain how human settlements and movements relate to the locations and use of various natural resources.' },
            { code: 'D2.Geo.2.3-5', framework: 'C3', text: 'Use maps and photographs to explain relationships between the locations of places and their environmental characteristics.' },
          ],
          objectives: [
            'I can name four things that make a site good for a settlement.',
            'I can defend a site choice with reasons drawn from a map.',
          ],
          vocabulary: [
            { term: 'settlement', definition: 'A place where people build homes and stay.' },
            { term: 'natural resource', definition: 'Something useful that comes from the earth, like water, wood, soil or stone.' },
            { term: 'ford', definition: 'A shallow place where a river can be crossed on foot.' },
            { term: 'harbour', definition: 'A sheltered place on a coast where boats are safe.' },
          ],
          materials: ['An imaginary physical map with four candidate sites marked', 'A real map of your own town showing its river, coast, road or rail'],
          prep: ['Find out honestly why your own town is where it is. Local historical societies usually publish the answer in one paragraph.'],
          script: [],
          worksheet: { id: 'g3-ss-u3-l3-ws', title: 'Choose the Site', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Chooses a site and gives three map-based reasons.', 'Identifies at least one reason their own town sits where it does.'],
            exitTicket: 'Ask: "If you could only know one thing about a piece of land before settling it, what would you ask?" Water is the strong answer.',
          },
          differentiation: {
            support: ['Reduce to two candidate sites, one obviously better.'],
            extension: ['Explain why some towns were founded in places that turned out to be bad choices.'],
          },
          misconceptions: [
            { misconception: 'Towns are placed at random or just where someone stopped.', looksLike: 'The child chooses a site because it looks nice.', correction: 'Ask where the drinking water comes from and where the goods leave by. Both questions force the geography.' },
          ],
          homeExtension: ['Find the oldest building in your town and see how close it is to water or a crossroads.'],
        },
        {
          id: 'g3-ss-u3-l4',
          unitId: 'g3-ss-u3',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Adapting to the Weather You Get',
          essentialQuestion: 'How do people change themselves to fit a place?',
          summary:
            'Adaptation as design: roofs shaped for snow or monsoon, thick walls for heat, stilts for flood, clothing, crops and daily timetables. The child compares houses from four climates and works out the reason for each feature.',
          durationMin: 45,
          standards: [
            { code: 'D2.Geo.4.3-5', framework: 'C3', text: 'Explain how culture influences the way people modify and adapt to their environments.' },
            { code: 'D2.Geo.2.3-5', framework: 'C3', text: 'Use maps, satellite images and photographs to explain relationships between locations and environmental characteristics.' },
          ],
          objectives: [
            'I can explain one house feature as an answer to a climate problem.',
            'I can name three ways people adapt besides building.',
          ],
          vocabulary: [
            { term: 'adapt', definition: 'To change how you live so you fit the place you are in.' },
            { term: 'climate', definition: 'The usual weather of a place across many years.' },
            { term: 'shelter', definition: 'Something built to protect people from weather.' },
          ],
          materials: ['Photographs of houses from four different climates', 'A world climate map'],
          prep: ['Choose the four house photographs so each has one obvious, explainable feature.'],
          script: [],
          worksheet: { id: 'g3-ss-u3-l4-ws', title: 'Why That Roof', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Explains at least three house features as climate responses.', 'Names three non-building adaptations.'],
            exitTicket: 'Show a steep-pitched roof and ask what problem it solves.',
          },
          differentiation: {
            support: ['Start with snow and a steep roof, which is the easiest causal link to see.'],
            extension: ['Design a house for a climate you have never lived in and label three features with their reasons.'],
          },
          misconceptions: [
            { misconception: 'Buildings look different in other countries just for decoration.', looksLike: 'Features are described as pretty or traditional with no function.', correction: 'Ask what would happen to that roof in three feet of snow, or to that wall in forty-degree heat.' },
          ],
          homeExtension: ['Find one feature of your own home that exists because of local weather.'],
        },

        /* ------------------------------------------------------ AUTHORED */
        {
          id: 'g3-ss-u3-l5',
          unitId: 'g3-ss-u3',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'authored',
          title: 'Changing the Land: Dams, Bridges and Fields',
          essentialQuestion: 'When people reshape the land, who gains and who loses?',
          summary:
            'The other half of the human-environment relationship. The child builds a dam in a tray of soil, then studies a valley before and after a real one, and learns to name both the benefit and the cost of every modification.',
          durationMin: 45,
          standards: [
            { code: 'D2.Geo.4.3-5', framework: 'C3', text: 'Explain how culture influences the way people modify and adapt to their environments.' },
            { code: 'D2.Geo.5.3-5', framework: 'C3', text: 'Explain how the cultural and environmental characteristics of places change over time.' },
            { code: 'D2.Geo.8.3-5', framework: 'C3', text: 'Explain how human settlements and movements relate to the locations and use of various natural resources.' },
          ],
          objectives: [
            'I can tell the difference between adapting to a place and modifying it.',
            'I can name one benefit and one cost of a change people made to the land.',
            'I can explain who decided, who gained and who lost.',
          ],
          vocabulary: [
            { term: 'modify', definition: 'To change something to make it more useful to you.', example: 'People modified the river by building a dam.' },
            { term: 'adapt', definition: 'To change how you live so you fit the place.' },
            { term: 'reservoir', definition: 'A lake made on purpose by holding back a river.' },
            { term: 'irrigation', definition: 'Bringing water to fields so crops can grow where rain is not enough.' },
            { term: 'trade-off', definition: 'Something you give up in order to get something else.' },
          ],
          materials: [
            'A shallow tray or baking dish',
            'Two large cups of soil or sand',
            'A jug of water',
            'Small stones, lolly sticks and a scrap of plastic for dam building',
            'A towel — this beat is genuinely messy',
            'The printed worksheet and a pencil',
          ],
          prep: [
            'Set up the tray outdoors or on a towel. Tilt one end with a book so water runs downhill.',
            'Fill the tray with damp soil and carve a shallow winding channel from the high end to the low end before the child arrives.',
            'Read the worksheet answer key so you know the costs of the dam as well as the benefits — the costs are the part that gets skipped.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Stop the River',
              minutes: 7,
              say: [
                'Here is a river. Watch what it does when I pour.',
                'Straight down the channel and off the end. Now, your job: keep the water up at this end. You may use the stones, the sticks and this bit of plastic.',
                'Go. I will keep pouring.',
                'Look at that. You made a lake where there was no lake. What is under your lake now?',
                'The bit of the valley that used to be dry. You did not just add water. You covered something.',
              ],
              do: [
                'Pour steadily while the child builds so the pressure is real.',
                'When the reservoir forms, point at the drowned section rather than the wall. That is the part that matters.',
              ],
              studentDoes: ['Builds a barrier, forms a reservoir, and notices what is now underwater.'],
              checks: [
                {
                  ask: 'What is different upstream, and what is different downstream?',
                  lookFor: 'More water above the wall, much less below it.',
                  ifStuck: 'Ask them to put a finger in the channel below the dam and say whether it is wet.',
                },
              ],
              tip: 'Do not tidy the flooded end. Leave the drowned channel visible on the table for the rest of the lesson; you will point at it repeatedly.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Adapt or Modify',
              minutes: 9,
              say: [
                'There are two ways to live with a place, and they are opposites.',
                'One: you change YOURSELF. You build a steep roof because snow falls. You plant in spring because that is when the rain comes. That is adapting.',
                'Two: you change the PLACE. You dam the river. You cut a road through the hill. You drain the marsh and farm it. That is modifying.',
                'People do both, all the time. Nothing wrong with either. But modifying has a rule that adapting does not.',
                'Whenever you change the land, somebody gains and somebody loses. The rule is: always ask who.',
                'Your dam gave the upstream farmers water all summer. Who lost?',
                'The people downstream, the fish that swim up the river, and whoever lived on the ground now under your lake.',
              ],
              do: [
                'Write the two words far apart on paper and put examples under each as you say them.',
                'Point back at the tray for every example of modifying.',
              ],
              studentDoes: ['Sorts three examples you give into adapt or modify, and names one loser for each modification.'],
              checks: [
                { ask: 'Is wearing a thick coat adapting or modifying?', lookFor: 'Adapting — you changed yourself, not the place.', ifStuck: 'Ask whether the weather is any different after you put the coat on.' },
                { ask: 'Somebody drains a marsh to plant maize. Who gains and who loses?', lookFor: 'The farmer gains land; the birds, frogs and the flood protection the marsh gave are lost.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'One Valley, Two Pictures',
              minutes: 10,
              say: [
                'Here is a real kind of place. First picture: a valley with three farms, a river and a road along the bottom.',
                'Second picture: the same valley after a dam. Tell me everything you can find that is gone.',
                'Two of the three farms. The road along the valley floor. The bend in the river.',
                'Now tell me what is new.',
                'A big steady lake. A dam wall. A new road up on the hillside. Power lines. And downstream, water that arrives when people want it instead of when it rains.',
                'So: was building it a good idea?',
                'That is not a trick question, and I do not have the answer. What I want is for you to say who you are thinking about when you answer.',
              ],
              do: [
                'Put the two images side by side and make the child point rather than describe from memory.',
                'Refuse a bare yes or no. Ask "good for whom?" every time.',
              ],
              studentDoes: ['Lists losses and gains from the paired images and takes a position naming whose interests they are weighing.'],
              checks: [
                {
                  ask: 'Whose life got better, and whose got worse?',
                  lookFor: 'Named groups — the two families who had to move, downstream towns that no longer flood, the city that got electricity.',
                  ifStuck: 'Ask what happened to the people who lived in the two farms that are now underwater. Somebody had to leave.',
                },
              ],
              tip: 'Resist steering to an answer. A child who can hold both columns at once is doing exactly what this standard asks; a child who has learned that dams are bad has learned a slogan.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 14,
              say: [
                'Page time. First, label six changes in the two valley pictures. Write G for gained and L for lost.',
                'Then look at the terraced hillside and the row of trees across the field. For each one, write what problem the people were solving.',
                'Last box is a two-column table. Pick any ONE change on this page and fill in both columns. You are not allowed to leave the cost column empty.',
              ],
              do: [
                'Read the directions for each section aloud before it is started.',
                'If the cost column stays blank, ask who used to use that piece of land.',
              ],
              studentDoes: ['Labels gains and losses, infers the purpose of two land modifications, and completes a benefit-and-cost table.'],
              checks: [
                { ask: 'What goes in the cost column, and how do you know it is a cost?', lookFor: 'Something specific that somebody lost, not a vague "it is bad for nature".' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'The Change Outside Our Door',
              minutes: 5,
              say: [
                'Last thing. Name one change people made to the land near us. A road, a bridge, a car park, a drain, a levelled field.',
                'Who gains from it?',
                'And who lost something when it was built? Somebody almost always did.',
                'You do not have to decide it was wrong. You just have to remember to ask.',
              ],
              do: ['Name your own example first if the child stalls, and answer both questions honestly about it.'],
              studentDoes: ['Identifies a local modification and names a gainer and a loser.'],
              checks: [
                { ask: 'Who lost something when that was built?', lookFor: 'A specific group or living thing, even a small one — the trees, the people whose houses were bought, the field the children played in.' },
              ],
            },
          ],
          worksheet: {
            id: 'g3-ss-u3-l5-ws',
            title: 'Changing the Land',
            style: 'historical',
            prepNotes:
              'The two valley images must print side by side at matching scale — the whole comparison depends on the viewpoint being identical. Do the soil-tray activity before handing over the page; children who have built a dam read these pictures completely differently from children who have not.',
            sections: [
              {
                id: 's1',
                title: 'One Valley, Before and After',
                directions: 'Compare the two pictures of the same valley. Find six things that are different. Write G next to a change if somebody gained something, and L if somebody lost something. Some changes are both — write both letters.',
                layout: 'split',
                writingLines: 6,
                images: [
                  {
                    id: 'g3-ss-u3-img-valley-before',
                    slot: 'Top — the valley before the dam',
                    purpose: 'Establishes what was there to be lost. Without a concrete before-picture the child cannot name a cost, and the cost column is exactly where this lesson usually fails.',
                    subject: 'a green river valley seen from a hillside, a winding river along the valley floor, three small farmsteads with barns and fenced fields on the flat ground beside the river, a narrow road following the river, and wooded slopes rising on both sides',
                    count: 3,
                    composition: 'a high three-quarter viewpoint from the left-hand slope looking down the valley, the river running from the far distance towards the lower right, exactly three farmsteads clearly separated and countable along the valley floor, the narrow road visible beside the river for its whole length, identical viewpoint to the after image',
                    mustInclude: [
                      'exactly three farmsteads, clearly separated and individually countable',
                      'the road visible along the whole valley floor',
                      'a distinctive rock outcrop on the right-hand slope that will still be visible in the after image',
                    ],
                    mustAvoid: [
                      'any dam, reservoir, power line or construction equipment',
                      'a different viewpoint from the companion after image',
                      'readable text on signs or buildings',
                      'people in distress or any dramatic weather event',
                    ],
                    aspect: '16:9',
                    altText: 'A green river valley with three farms and a road beside a winding river',
                    style: 'historical',
                  },
                  {
                    id: 'g3-ss-u3-img-valley-after',
                    slot: 'Bottom — the same valley after the dam',
                    purpose: 'The paired after-image. Keeping one farm and the rock outcrop visible lets the child anchor the comparison and see precisely what the reservoir covered.',
                    subject: 'the same river valley after a concrete dam has been built across it, a long calm reservoir filling the valley floor, one surviving farmstead high on the shoreline, a new road cut along the hillside above the water, and a line of electricity pylons running over the ridge',
                    count: 1,
                    composition: 'the identical high three-quarter viewpoint from the left-hand slope, the same rock outcrop visible on the right-hand slope, the reservoir covering the ground where the river, the road and two of the farms used to be, exactly one farmstead remaining above the waterline, the dam wall in the middle distance',
                    mustInclude: [
                      'the same rock outcrop and the same skyline as the before image',
                      'exactly one remaining farmstead, clearly visible above the waterline',
                      'the new hillside road and the dam wall both clearly visible',
                    ],
                    mustAvoid: [
                      'any change of viewpoint, framing or skyline',
                      'flooding shown as a disaster, wreckage, or anything frightening',
                      'readable text on signs or the dam',
                      'people or animals in danger',
                    ],
                    aspect: '16:9',
                    altText: 'The same valley after a dam, with a reservoir covering the valley floor and one farm remaining on the shore',
                    style: 'historical',
                  },
                ],
              },
              {
                id: 's2',
                title: 'What Problem Were They Solving?',
                directions: 'Look at each picture. People changed this land on purpose. Write what problem you think they were solving, and the clue in the picture that told you.',
                layout: 'row',
                writingLines: 5,
                items: [
                  'The stepped hillside: the problem was ______. My clue was ______.',
                  'The line of trees across the field: the problem was ______. My clue was ______.',
                ],
                images: [
                  {
                    id: 'g3-ss-u3-img-terraces',
                    slot: 'A terraced hillside',
                    purpose: 'Terracing is the clearest possible example of modification with a visible reason: the steps exist because water and soil run downhill. The child can reason it out unaided.',
                    subject: 'a steep hillside cut into six broad level farming terraces, each terrace held by a low stone retaining wall and planted with a green crop, with two farmers working on the middle terrace',
                    count: 6,
                    composition: 'a side-on view of the hillside so that all six terraces are visible as distinct horizontal steps stacked up the slope, each step clearly separated by its stone wall, the unmodified steep slope visible at the top of the hill for comparison',
                    mustInclude: [
                      'exactly six terrace steps, clearly separated and individually countable',
                      'the low stone retaining wall visible at the edge of each terrace',
                      'exactly two farmers, shown with dignity and skill, working purposefully rather than posed',
                      'a patch of unterraced steep slope above, so the contrast is visible',
                    ],
                    mustAvoid: [
                      'caricature or stereotyped depiction of the farmers or their clothing',
                      'modern machinery that would obscure the terrace structure',
                      'readable text anywhere in the image',
                      'terraces so numerous or faint that they cannot be counted',
                    ],
                    aspect: '4:3',
                    altText: 'A steep hillside cut into six level farming terraces with stone walls, with two farmers working',
                    style: 'historical',
                  },
                  {
                    id: 'g3-ss-u3-img-windbreak',
                    slot: 'A line of trees planted across a field',
                    purpose: 'A subtler modification than a dam or a terrace. The child must infer an invisible force — wind — from a deliberate arrangement, which is a real step up in reasoning.',
                    subject: 'a flat open farm field with a single straight line of eight evenly spaced tall trees planted across it, the bare soil on the windward side rippled and dusty and the crop on the sheltered side standing green and undisturbed',
                    count: 8,
                    composition: 'a low, wide view along the field with the line of trees running from left to right across the middle distance, exactly eight trees evenly spaced and individually countable, the dusty rippled ground on the near side and the green sheltered crop on the far side both clearly visible',
                    mustInclude: [
                      'exactly eight trees in one straight evenly spaced line',
                      'a visible difference between the exposed side and the sheltered side of the line',
                      'a flat, treeless horizon beyond, so the planted line reads as deliberate',
                    ],
                    mustAvoid: [
                      'other trees, hedges or woodland elsewhere in the frame',
                      'trees of different sizes or irregular spacing',
                      'buildings, machinery or readable signage',
                      'a storm, dust cloud or anything alarming',
                    ],
                    aspect: '3:1',
                    altText: 'A straight line of eight trees planted across a flat farm field, sheltering the crop behind them',
                    style: 'historical',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Who Gains, Who Loses',
                directions: 'Choose ONE change from this page. Write it at the top of the table. Then fill in both columns. You must write something in the cost column — every change costs somebody something.',
                layout: 'full',
                writingLines: 8,
                items: [
                  'The change I chose: ______________________',
                  'BENEFIT — who gains, and what do they get?',
                  'COST — who loses, and what do they lose?',
                  'If I had been at the meeting, I would have said ______ because ______.',
                ],
              },
            ],
            answerKey: [
              'Valley differences (any six): the reservoir where the river was (G for water supply and power, L for the land underneath); two farms gone (L); the valley road replaced by a hillside road (G for the new route, L for the old one); the dam wall (G); power lines (G for electricity, L for the view and the ridge habitat); the river bend straightened or drowned (L for fish and for the wetland).',
              'Terraces: the problem was that rain washed soil and water straight down a steep slope, so nothing would grow. Clue — the land has been cut into flat steps with walls holding the soil.',
              'Tree line: the problem was wind blowing soil off a flat open field and damaging the crop. Clue — the ground is bare and rippled on one side of the trees and the crop is green and standing on the other.',
              'Table: accept any specific pairing. Strong answers name real groups on both sides, for example "the city gains steady electricity" and "two farming families lost their homes and the land is under water".',
            ],
          },
          assessment: {
            successCriteria: [
              'Distinguishes adapting from modifying with an example of each.',
              'Finds at least four differences between the paired valley images.',
              'Infers the purpose of the terraces and the windbreak from visual evidence.',
              'Names a specific gainer and a specific loser for one modification.',
            ],
            exitTicket:
              'Ask: "Name one thing people built near us that changed the land, and tell me one good thing and one bad thing about it." A child who can only produce the good thing has not finished the lesson.',
            rubric: [
              { level: 'emerging', descriptor: 'Describes what the pictures show but treats every change as simply an improvement, and cannot name anything lost.' },
              { level: 'developing', descriptor: 'Names gains and losses when prompted, and separates adapting from modifying with support.' },
              { level: 'secure', descriptor: 'Independently produces both columns with named groups, infers purpose from visual evidence, and asks "good for whom?" without being prompted.' },
            ],
          },
          differentiation: {
            support: [
              'Do the whole comparison orally with the child pointing, and scribe their answers onto the page.',
              'Reduce the target to three differences instead of six.',
              'Use the soil tray again for the cost idea: rebuild the dam and ask them to name what is under the lake each time.',
            ],
            extension: [
              'Research one real dam or drainage project near you and find out how many people had to move.',
              'Argue the case from a point of view that is not the child\'s own — a downstream farmer, a fisher, an engineer.',
              'Design a change to the land that solves a local problem, and list its costs before its benefits.',
            ],
            language: [
              'Give the frame "People changed ___ so that ___. This helped ___ but it hurt ___."',
              'Teach the pair adapt and modify with two mimed gestures — one pointing at yourself, one pushing outward.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Changing the land is simply bad, or simply progress.',
              looksLike: 'The child produces a verdict before looking at the evidence, in either direction.',
              correction: 'Refuse the verdict and ask for two columns. The judgement is allowed only after both are filled.',
            },
            {
              misconception: 'Adapting and modifying are the same thing.',
              looksLike: 'Wearing a coat and building a dam are both called "changing the environment".',
              correction: 'Ask a single question each time: after you did it, is the PLACE different, or only YOU?',
            },
            {
              misconception: 'The land was empty before people modified it.',
              looksLike: 'The child sees only the new lake and not the two farms and the habitat underneath it.',
              correction: 'Cover the after image and ask them to list everything in the before image. Then uncover and cross off what is gone.',
            },
          ],
          homeExtension: [
            'On the next journey, count how many changes to the land you pass in ten minutes: cuttings, embankments, drains, bridges, levelled ground.',
            'Find out whether any road or building near you sits on ground that used to be a stream or a marsh. Old maps often show it.',
            'Look at a satellite view of your area and find one perfectly straight line. Straight lines in a landscape are almost always human.',
          ],
          teacherNotes:
            'The soil tray is worth the mess and worth the ten minutes. Children who have physically flooded a valley talk about the after image in a completely different register. The other thing to protect is the cost column — the instinct at this age is to be pleased about the dam and stop there, and the standard is really asking for the second thought.',
        },
      ],
    },

    /* ============================================================ UNIT 4 */
    {
      id: 'g3-ss-u4',
      gradeId: 'g3',
      subjectId: 'social-studies',
      sequence: 4,
      title: 'Making, Trading and Depending on Each Other',
      bigIdea:
        'Nobody makes everything they use, so people specialise in one job and trade for the rest — which quietly ties every community to places it will never see.',
      description:
        'Economics at the scale of a child\'s life. Learners weigh choices and their costs, distinguish goods from services, discover why specialising makes people better off, trace a familiar object back through the people and places that produced it, and see how trade builds interdependence between regions and nations.',
      weeks: 4,
      standards: [
        { code: 'D2.Eco.1.3-5', framework: 'C3', text: 'Compare the benefits and costs of individual choices.' },
        { code: 'D2.Eco.2.3-5', framework: 'C3', text: 'Identify positive and negative incentives that influence the decisions people make.' },
        { code: 'D2.Eco.3.3-5', framework: 'C3', text: 'Identify examples of the variety of resources — human capital, physical capital and natural resources — that are used to produce goods and services.' },
        { code: 'D2.Eco.14.3-5', framework: 'C3', text: 'Explain how trade leads to increasing economic interdependence among nations.' },
      ],
      lessonTitles: [
        'Wants, Needs and the Cost of Choosing',
        'Goods, Services and the People Who Provide Them',
        'Specialising: Doing One Job Well',
        'The Long Journey of an Ordinary Thing',
        'Trade Between Regions and Countries',
      ],
      performanceTask:
        'The Supply Chain Poster: the child chooses one ordinary object from the kitchen and maps its journey backward through at least five stages and two places, labelling the natural resources, the human capital and the physical capital used at each stage.',
      lessons: [
        {
          id: 'g3-ss-u4-l1',
          unitId: 'g3-ss-u4',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'Wants, Needs and the Cost of Choosing',
          essentialQuestion: 'What do I give up whenever I choose something?',
          summary:
            'Scarcity and opportunity cost, taught with a real budget the child actually spends. Every choice is made twice: once for what is chosen and once for what is given up.',
          durationMin: 45,
          standards: [
            { code: 'D2.Eco.1.3-5', framework: 'C3', text: 'Compare the benefits and costs of individual choices.' },
            { code: 'D2.Eco.2.3-5', framework: 'C3', text: 'Identify positive and negative incentives that influence the decisions people make.' },
          ],
          objectives: [
            'I can sort things into needs and wants and defend a hard case.',
            'I can name what I gave up when I chose something.',
          ],
          vocabulary: [
            { term: 'need', definition: 'Something you must have to live and be safe.' },
            { term: 'want', definition: 'Something you would like but can live without.' },
            { term: 'scarcity', definition: 'Not having enough of something for everyone to have all they want.' },
            { term: 'opportunity cost', definition: 'The thing you gave up when you chose something else.' },
          ],
          materials: ['Twelve picture cards of goods', 'Ten paper coins', 'A price list'],
          prep: ['Price the twelve items so that the child can afford about four. Genuine scarcity is what makes this lesson work.'],
          script: [],
          worksheet: { id: 'g3-ss-u4-l1-ws', title: 'Ten Coins', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Spends a fixed budget and names the opportunity cost of two purchases.', 'Argues a borderline need-or-want case.'],
            exitTicket: 'Ask what the child gave up when they picked their afternoon activity today.',
          },
          differentiation: {
            support: ['Reduce to six cards and five coins.'],
            extension: ['Introduce a price change mid-game and ask how it changed the choice.'],
          },
          misconceptions: [
            { misconception: 'Opportunity cost is money.', looksLike: 'The child says the cost was three coins.', correction: 'Ask what they would have bought with those coins. That thing is the cost.' },
          ],
          homeExtension: ['At the shop, name out loud the one thing you did not buy because of the thing you did.'],
        },
        {
          id: 'g3-ss-u4-l2',
          unitId: 'g3-ss-u4',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'Goods, Services and the People Who Provide Them',
          essentialQuestion: 'What is the difference between buying a thing and buying somebody\'s time?',
          summary:
            'Goods versus services, and the three kinds of resources behind both: natural resources, human capital and physical capital. The child audits one day for every good and service consumed.',
          durationMin: 45,
          standards: [
            { code: 'D2.Eco.3.3-5', framework: 'C3', text: 'Identify examples of the variety of resources — human capital, physical capital and natural resources — that are used to produce goods and services.' },
          ],
          objectives: [
            'I can sort ten examples into goods and services.',
            'I can name the natural resource, the tool and the skill behind one product.',
          ],
          vocabulary: [
            { term: 'goods', definition: 'Things people make or grow that you can hold.' },
            { term: 'services', definition: 'Work that one person does for another.' },
            { term: 'human capital', definition: 'The skills and knowledge a worker has.' },
            { term: 'physical capital', definition: 'The tools, machines and buildings used to make things.' },
            { term: 'natural resource', definition: 'Useful material that comes from the earth.' },
          ],
          materials: ['Sorting cards', 'A loaf of bread or any simple manufactured object to take apart in conversation'],
          prep: ['Choose one object to analyse in depth and work out its three resource types before the lesson.'],
          script: [],
          worksheet: { id: 'g3-ss-u4-l2-ws', title: 'Goods, Services, Resources', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Sorts goods and services accurately including two hard cases.', 'Names all three resource types for one product.'],
            exitTicket: 'Ask whether a haircut is a good or a service, and what the barber\'s human capital is.',
          },
          differentiation: {
            support: ['Use the physical test: can you put it in a bag?'],
            extension: ['Find something that is both a good and a service, such as a restaurant meal, and explain the split.'],
          },
          misconceptions: [
            { misconception: 'Only factory work counts as producing.', looksLike: 'Teachers and nurses are not counted as producers.', correction: 'Ask what a nurse produces. Health, safety, recovery — services are production too.' },
          ],
          homeExtension: ['Count the services your household paid for this month, including the invisible ones like water and rubbish collection.'],
        },
        {
          id: 'g3-ss-u4-l3',
          unitId: 'g3-ss-u4',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Specialising: Doing One Job Well',
          essentialQuestion: 'Why do people do one job instead of doing everything themselves?',
          summary:
            'A production line experiment. The child makes paper cards alone, then with each person doing one step, and compares output. Specialisation is discovered, not asserted.',
          durationMin: 45,
          standards: [
            { code: 'D2.Eco.3.3-5', framework: 'C3', text: 'Identify examples of the variety of resources used to produce goods and services.' },
            { code: 'D2.Eco.6.3-5', framework: 'C3', text: 'Explain the relationship between investment in human capital, productivity and future incomes.' },
          ],
          objectives: [
            'I can explain why specialising produces more.',
            'I can name one cost of specialising as well as the benefit.',
          ],
          vocabulary: [
            { term: 'specialise', definition: 'To do one job or make one thing rather than trying to do everything.' },
            { term: 'productivity', definition: 'How much you can produce in a certain amount of time.' },
            { term: 'interdependence', definition: 'When people need each other because each one does something different.' },
          ],
          materials: ['Card, scissors, glue, stickers', 'A timer', 'At least two people'],
          prep: ['Run one round yourself first so you know how long a single card takes and can set a fair time limit.'],
          script: [],
          worksheet: { id: 'g3-ss-u4-l3-ws', title: 'The Card Factory', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Compares two production rounds with numbers.', 'Explains the gain and names one drawback of specialising.'],
            exitTicket: 'Ask why a hospital has surgeons and cleaners rather than everyone doing both.',
          },
          differentiation: {
            support: ['Use two steps rather than four.'],
            extension: ['Introduce a problem — one worker is absent — and ask what specialisation costs when that happens.'],
          },
          misconceptions: [
            { misconception: 'Specialising is always better.', looksLike: 'The child cannot name a drawback.', correction: 'Remove one worker mid-round and let the line stall. Dependence is the cost.' },
          ],
          homeExtension: ['Divide a household job into steps and try it as a line. Time both ways.'],
        },
        {
          id: 'g3-ss-u4-l4',
          unitId: 'g3-ss-u4',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'The Long Journey of an Ordinary Thing',
          essentialQuestion: 'How many people and places does it take to make one ordinary object?',
          summary:
            'Backward mapping of a supply chain from a t-shirt, a pencil or a banana. The child ends up with a chain of at least five stages crossing at least two places.',
          durationMin: 45,
          standards: [
            { code: 'D2.Eco.3.3-5', framework: 'C3', text: 'Identify examples of the variety of resources used to produce goods and services.' },
            { code: 'D2.Geo.7.3-5', framework: 'C3', text: 'Explain how cultural and environmental characteristics affect the distribution and movement of people, goods and ideas.' },
          ],
          objectives: [
            'I can trace an object back through at least five stages.',
            'I can find the countries involved on a world map.',
          ],
          vocabulary: [
            { term: 'producer', definition: 'A person or business that makes or grows something.' },
            { term: 'consumer', definition: 'A person who buys and uses something.' },
            { term: 'supply chain', definition: 'The whole line of people and places that bring a product to you.' },
            { term: 'import', definition: 'A good brought in from another country.' },
          ],
          materials: ['A t-shirt with a country-of-origin label, or a banana', 'A world map', 'Sticky notes'],
          prep: ['Check the label on whatever object you choose so you know at least one real country in the chain.'],
          script: [],
          worksheet: { id: 'g3-ss-u4-l4-ws', title: 'Where Did This Come From', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Builds a chain of five or more stages in the correct order.', 'Locates two countries in the chain on a map.'],
            exitTicket: 'Hold up a pencil and ask for the first three steps backward from your hand.',
          },
          differentiation: {
            support: ['Provide the stages on cards and ask only for the ordering.'],
            extension: ['Work out roughly how far the object travelled and by what transport at each leg.'],
          },
          misconceptions: [
            { misconception: 'Things come from shops.', looksLike: 'The chain stops at the supermarket.', correction: 'Keep asking "and where did the shop get it?" until the child reaches soil, ore or a tree.' },
          ],
          homeExtension: ['Read the country of origin on five things in one cupboard and mark them on a map.'],
        },
        {
          id: 'g3-ss-u4-l5',
          unitId: 'g3-ss-u4',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Trade Between Regions and Countries',
          essentialQuestion: 'Why does one place send away what it has plenty of?',
          summary:
            'Regions trade what they have surplus of for what they lack. A trading game with four regions, each holding an abundance of one resource and a shortage of three, makes the logic unavoidable.',
          durationMin: 45,
          standards: [
            { code: 'D2.Eco.14.3-5', framework: 'C3', text: 'Explain how trade leads to increasing economic interdependence among nations.' },
            { code: 'D2.Eco.9.3-5', framework: 'C3', text: 'Describe the role of price in the market.' },
          ],
          objectives: [
            'I can explain why two places both gain from a trade.',
            'I can name one thing my region sends out and one it brings in.',
          ],
          vocabulary: [
            { term: 'trade', definition: 'Giving something to get something else.' },
            { term: 'export', definition: 'A good sent out to another place to be sold.' },
            { term: 'surplus', definition: 'More of something than you need.' },
            { term: 'interdependence', definition: 'When places need each other because each has something the others lack.' },
          ],
          materials: ['Four envelopes of resource tokens', 'A recipe card for each region listing what it needs', 'A map'],
          prep: ['Stack the envelopes so no region can complete its recipe alone. Trade must be necessary, not optional.'],
          script: [],
          worksheet: { id: 'g3-ss-u4-l5-ws', title: 'Four Regions, One Table', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Completes a recipe through trade and explains why both sides agreed.', 'Names a real export and a real import for their own region.'],
            exitTicket: 'Ask: "Why would a place that grows lots of wheat ever buy food from somewhere else?"',
          },
          differentiation: {
            support: ['Play with two regions before four.'],
            extension: ['Introduce scarcity of one token and watch what happens to what people will give for it.'],
          },
          misconceptions: [
            { misconception: 'In a trade, one side wins and one side loses.', looksLike: 'The child tries to cheat rather than to swap.', correction: 'Ask both sides after a swap whether they are better off. If either says no, the trade would not have happened.' },
          ],
          homeExtension: ['Find out the biggest thing your state sells to other places. Most state governments publish it.'],
        },
      ],
    },

    /* ============================================================ UNIT 5 */
    {
      id: 'g3-ss-u5',
      gradeId: 'g3',
      subjectId: 'social-studies',
      sequence: 5,
      title: 'Heritage: How Communities Remember',
      bigIdea:
        'A community keeps its past alive on purpose — in food, festivals, language, buildings and names — and somebody always decides what is worth keeping.',
      description:
        'Culture is treated as something people actively maintain rather than something they passively have. Learners study traditions in their own household, examine how public memory is built through monuments, museums and street names, and confront the genuinely hard question of who chooses what a community remembers.',
      weeks: 4,
      standards: [
        { code: 'D2.His.2.3-5', framework: 'C3', text: 'Compare life in specific historical time periods to life today.' },
        { code: 'D2.His.3.3-5', framework: 'C3', text: 'Generate questions about individuals and groups who have shaped significant historical changes and continuities.' },
        { code: 'D2.Geo.4.3-5', framework: 'C3', text: 'Explain how culture influences the way people modify and adapt to their environments.' },
        { code: 'D2.Civ.10.3-5', framework: 'C3', text: 'Identify the beliefs, experiences, perspectives and values that underlie their own and others\' points of view about civic issues.' },
      ],
      lessonTitles: [
        'Culture Is What a Group Shares',
        'Holidays, Foods and Family Traditions',
        'Monuments, Museums and Street Names',
        'Stories and Languages That Travel',
        'Who Decides What Gets Remembered',
      ],
      performanceTask:
        'The Community Heritage Box: the child assembles five items — an object, a photograph, a recipe, a recorded story and a place — that together explain their community to someone a hundred years from now, and writes one card for each explaining why it earned its place.',
      lessons: [
        {
          id: 'g3-ss-u5-l1',
          unitId: 'g3-ss-u5',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'Culture Is What a Group Shares',
          essentialQuestion: 'What does a group of people share besides a place?',
          summary:
            'A working definition built from categories the child can populate: language, food, music, celebration, clothing, story, belief, sport. The child fills every category from their own life, then from one other community.',
          durationMin: 45,
          standards: [
            { code: 'D2.Geo.4.3-5', framework: 'C3', text: 'Explain how culture influences the way people modify and adapt to their environments.' },
          ],
          objectives: [
            'I can name six parts of a culture.',
            'I can describe two cultures using the same categories, fairly.',
          ],
          vocabulary: [
            { term: 'culture', definition: 'The shared way of life of a group: their language, food, music, beliefs and celebrations.' },
            { term: 'tradition', definition: 'Something a group does the same way each year and passes on.' },
            { term: 'heritage', definition: 'What people inherit from those who came before them.' },
          ],
          materials: ['A chart with eight culture categories', 'Photographs or objects from your own family'],
          prep: ['Fill the chart for your own household first so you have honest examples ready for every category.'],
          script: [],
          worksheet: { id: 'g3-ss-u5-l1-ws', title: 'Eight Parts of a Culture', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Populates at least six categories for their own culture.', 'Describes another culture without ranking it.'],
            exitTicket: 'Ask the child to name one part of their culture that a visitor would notice within an hour.',
          },
          differentiation: {
            support: ['Work from photographs rather than from memory.'],
            extension: ['Find two cultures that share a category and one where they differ sharply, and describe both neutrally.'],
          },
          misconceptions: [
            { misconception: 'Only other people have a culture.', looksLike: 'The child says their own family is just normal.', correction: 'Ask what a visitor from far away would find strange about your ordinary Tuesday.' },
          ],
          homeExtension: ['Ask an older relative about one tradition that has stopped, and why.'],
        },
        {
          id: 'g3-ss-u5-l2',
          unitId: 'g3-ss-u5',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'outline',
          title: 'Holidays, Foods and Family Traditions',
          essentialQuestion: 'Why do we do the same things at the same time every year?',
          summary:
            'Traditions examined for their function: marking time, remembering an event, binding a group, feeding people. The child documents one household tradition properly, including its origin if it can be found.',
          durationMin: 45,
          standards: [
            { code: 'D2.His.2.3-5', framework: 'C3', text: 'Compare life in specific historical time periods to life today.' },
            { code: 'D2.His.3.3-5', framework: 'C3', text: 'Generate questions about individuals and groups who have shaped significant historical changes and continuities.' },
          ],
          objectives: [
            'I can explain what one tradition is for.',
            'I can record a family tradition so that someone else could follow it.',
          ],
          vocabulary: [
            { term: 'holiday', definition: 'A day a community sets aside to remember or celebrate something together.' },
            { term: 'custom', definition: 'A usual way of doing something in a group.' },
            { term: 'generation', definition: 'All the people born at about the same time in a family or community.' },
          ],
          materials: ['A recipe card template', 'A calendar', 'Access to a relative by phone if possible'],
          prep: ['Have a fallback tradition ready — a community or school one — for children whose family traditions are not available to them.'],
          script: [],
          worksheet: { id: 'g3-ss-u5-l2-ws', title: 'Record a Tradition', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Documents a tradition with steps, timing and purpose.', 'Names what the tradition is for beyond enjoyment.'],
            exitTicket: 'Ask what would be lost if one tradition the child named simply stopped.',
          },
          differentiation: {
            support: ['Document a weekly routine rather than an annual one.'],
            extension: ['Find out how the same holiday is marked differently in two places.'],
            language: ['Record the tradition in the home language first, then translate the steps together.'],
          },
          misconceptions: [
            { misconception: 'Traditions are ancient and unchanging.', looksLike: 'The child assumes every custom is centuries old.', correction: 'Find the start date of one tradition. Many are surprisingly recent, and most have changed.' },
          ],
          homeExtension: ['Cook or make one thing from the documented tradition together this week.'],
        },
        {
          id: 'g3-ss-u5-l3',
          unitId: 'g3-ss-u5',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Monuments, Museums and Street Names',
          essentialQuestion: 'How does a community write its memory into a place?',
          summary:
            'Public memory as physical objects. The child surveys the memory markers within walking distance — plaques, statues, street names, building dates, war memorials — and works out what each one asks passers-by to remember.',
          durationMin: 45,
          standards: [
            { code: 'D2.His.3.3-5', framework: 'C3', text: 'Generate questions about individuals and groups who have shaped significant historical changes and continuities.' },
            { code: 'D2.Geo.5.3-5', framework: 'C3', text: 'Explain how the cultural and environmental characteristics of places change over time.' },
          ],
          objectives: [
            'I can find three memory markers near my home.',
            'I can say what each one asks people to remember, and who it leaves out.',
          ],
          vocabulary: [
            { term: 'monument', definition: 'Something built to make people remember a person or event.' },
            { term: 'plaque', definition: 'A small flat sign fixed to a building or stone to mark something.' },
            { term: 'memorial', definition: 'A place or object that helps people remember those who died.' },
            { term: 'archive', definition: 'A place where a community keeps its records and papers.' },
          ],
          materials: ['A clipboard', 'A camera or phone', 'A local map for marking finds'],
          prep: ['Walk the route in advance and confirm there are at least three markers to find. Building date stones count.'],
          script: [],
          worksheet: { id: 'g3-ss-u5-l3-ws', title: 'Memory Walk', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Records three markers with location and subject.', 'Names one group or story not represented.'],
            exitTicket: 'Ask: "If our community put up one new marker, what should it remember, and where would you put it?"',
          },
          differentiation: {
            support: ['Look for one marker only and study it thoroughly.'],
            extension: ['Compare who is commemorated across all three markers and describe the pattern.'],
          },
          misconceptions: [
            { misconception: 'Monuments tell you what happened.', looksLike: 'The plaque is read as neutral fact.', correction: 'Ask who paid for it, when it was put up, and what they wanted passers-by to feel.' },
          ],
          homeExtension: ['Find the oldest date carved into any building you can walk to.'],
        },
        {
          id: 'g3-ss-u5-l4',
          unitId: 'g3-ss-u5',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Stories and Languages That Travel',
          essentialQuestion: 'How do stories and words move from place to place?',
          summary:
            'Cultural diffusion through the most tangible evidence a child has: loanwords, food names, folk tales that appear in many countries with different characters. The child tracks one word and one story across a map.',
          durationMin: 45,
          standards: [
            { code: 'D2.Geo.7.3-5', framework: 'C3', text: 'Explain how cultural and environmental characteristics affect the distribution and movement of people, goods and ideas.' },
            { code: 'D2.His.2.3-5', framework: 'C3', text: 'Compare life in specific historical time periods to life today.' },
          ],
          objectives: [
            'I can name three words in my language that came from another one.',
            'I can compare two versions of the same folk tale and explain a difference.',
          ],
          vocabulary: [
            { term: 'loanword', definition: 'A word one language borrowed from another.' },
            { term: 'folk tale', definition: 'A story passed down by telling rather than by writing.' },
            { term: 'diffusion', definition: 'The spread of an idea, word or custom from one place to another.' },
          ],
          materials: ['Two versions of one widely travelled folk tale', 'A world map', 'A short list of loanwords'],
          prep: ['Choose two versions of a tale that differ in setting and in the moral, not just in names.'],
          script: [],
          worksheet: { id: 'g3-ss-u5-l4-ws', title: 'Words and Stories on the Move', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Traces three loanwords to their origin languages.', 'Names one meaningful difference between two versions of a tale and suggests why.'],
            exitTicket: 'Ask the child to name one everyday food word that came from another language.',
          },
          differentiation: {
            support: ['Use food words only; they are the most obvious and most fun.'],
            extension: ['Find a story the child\'s own family tells in two different versions and interview both tellers.'],
            language: ['Multilingual learners should lead this lesson — ask them for the loanwords going the other way.'],
          },
          misconceptions: [
            { misconception: 'Languages are sealed off from each other.', looksLike: 'The child assumes all their words are original.', correction: 'Look up the origins of five words from one meal. Almost none will be native.' },
          ],
          homeExtension: ['Ask a speaker of another language for a word that has no good translation, and what it means.'],
        },
        {
          id: 'g3-ss-u5-l5',
          unitId: 'g3-ss-u5',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Who Decides What Gets Remembered',
          essentialQuestion: 'Whose story gets kept, and who decides?',
          summary:
            'The unit\'s hard question, handled at an age-appropriate scale. The child compares who appears in the local markers surveyed earlier with who actually lives and has lived in the community, and proposes a fair addition.',
          durationMin: 45,
          standards: [
            { code: 'D2.Civ.10.3-5', framework: 'C3', text: 'Identify the beliefs, experiences, perspectives and values that underlie their own and others\' points of view about civic issues.' },
            { code: 'D2.His.3.3-5', framework: 'C3', text: 'Generate questions about individuals and groups who have shaped significant historical changes and continuities.' },
          ],
          objectives: [
            'I can explain that somebody chooses what a community remembers.',
            'I can propose one person or event worth remembering and justify it.',
          ],
          vocabulary: [
            { term: 'perspective', definition: 'The point of view a person has because of who they are and what they lived through.' },
            { term: 'commemorate', definition: 'To do something publicly so people remember.' },
            { term: 'evidence', definition: 'The facts you point to in order to support a claim.' },
          ],
          materials: ['The memory walk records from the previous lesson', 'Local census or historical society information if available', 'Card and pens'],
          prep: ['Prepare one genuine local example of someone whose contribution is not marked anywhere. Every community has several.'],
          script: [],
          worksheet: { id: 'g3-ss-u5-l5-ws', title: 'A Marker We Are Missing', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Explains that public memory is chosen, not automatic.', 'Proposes an addition with at least two reasons and a location.'],
            exitTicket: 'Ask who in the community\'s past the child thinks has been left out, and how they would find out for certain.',
          },
          differentiation: {
            support: ['Compare only two markers and ask who is missing between them.'],
            extension: ['Write the actual proposal and send it to the local historical society.'],
          },
          misconceptions: [
            { misconception: 'History remembers everyone who mattered.', looksLike: 'The child assumes anyone important already has a plaque.', correction: 'Count the plaques. Then count the people who have lived in your town. The gap is enormous, and somebody chose.' },
          ],
          homeExtension: ['Ask an older neighbour who is the most important local person nobody has heard of.'],
        },
      ],
    },

    /* ============================================================ UNIT 6 */
    {
      id: 'g3-ss-u6',
      gradeId: 'g3',
      subjectId: 'social-studies',
      sequence: 6,
      title: 'Inquiry: A Question About Our Own Place',
      bigIdea:
        'History is not a list somebody hands you — it is what you can defend with evidence from sources that were actually there.',
      description:
        'The year ends with a real investigation. The child picks a genuine unanswered question about their own community, learns to tell a primary source from a secondary one, reads photographs and documents closely, interviews someone who remembers, handles two sources that disagree, and presents a defended claim to a real audience.',
      weeks: 5,
      standards: [
        { code: 'D1.5.3-5', framework: 'C3', text: 'Determine the kinds of sources that will be helpful in answering compelling and supporting questions.' },
        { code: 'D2.His.9.3-5', framework: 'C3', text: 'Summarise how different kinds of historical sources are used to explain events in the past.' },
        { code: 'D2.His.10.3-5', framework: 'C3', text: 'Compare information provided by different historical sources about the past.' },
        { code: 'D3.1.3-5', framework: 'C3', text: 'Gather relevant information from one or more sources while using the origin, structure and context to guide the selection.' },
        { code: 'D4.1.3-5', framework: 'C3', text: 'Construct arguments using claims and evidence from multiple sources.' },
      ],
      lessonTitles: [
        'Asking a Question Worth Answering',
        'Reading a Photograph Like a Detective',
        'Sources That Were There and Sources That Were Not',
        'Interviewing Someone Who Remembers',
        'Making Our Case in Public',
      ],
      performanceTask:
        'The Local History Case: the child answers their own compelling question in a five-minute presentation to at least two adults outside the household, stating a claim, showing three sources including at least one primary source, and naming one thing they still do not know.',
      lessons: [
        {
          id: 'g3-ss-u6-l1',
          unitId: 'g3-ss-u6',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 1,
          status: 'outline',
          title: 'Asking a Question Worth Answering',
          essentialQuestion: 'What makes a question worth spending three weeks on?',
          summary:
            'The difference between a question you can look up in ten seconds and one that needs investigating. The child generates ten questions about their community and tests each against three criteria.',
          durationMin: 45,
          standards: [
            { code: 'D1.1.3-5', framework: 'C3', text: 'Explain why compelling questions are important to others.' },
            { code: 'D1.5.3-5', framework: 'C3', text: 'Determine the kinds of sources that will be helpful in answering compelling and supporting questions.' },
          ],
          objectives: [
            'I can tell a lookup question from an investigation question.',
            'I can write one compelling question about my own community.',
          ],
          vocabulary: [
            { term: 'compelling question', definition: 'A big question that people genuinely disagree about or do not yet know the answer to.' },
            { term: 'supporting question', definition: 'A smaller question you must answer on the way to the big one.' },
            { term: 'inquiry', definition: 'Investigating a question by gathering and weighing evidence.' },
          ],
          materials: ['Sticky notes', 'A large sheet for the question wall', 'A local map'],
          prep: ['Have two or three strong candidate questions of your own ready in case the child\'s list is all lookups.'],
          script: [],
          worksheet: { id: 'g3-ss-u6-l1-ws', title: 'Ten Questions, One Keeper', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Generates at least eight questions.', 'Selects one and justifies it against all three criteria.', 'Writes three supporting questions beneath it.'],
            exitTicket: 'Give one question — "when was the school built?" — and ask the child to upgrade it into an investigation question.',
          },
          differentiation: {
            support: ['Offer three ready-made compelling questions and ask the child to choose and adapt one.'],
            extension: ['Predict the answer in writing before researching, and seal it to check at the end.'],
          },
          misconceptions: [
            { misconception: 'A good question has a quick answer.', looksLike: 'Every question is a date or a name.', correction: 'Try to answer one on a phone in thirty seconds. If it works, it is not the question.' },
          ],
          homeExtension: ['Ask two adults what they have always wondered about your town.'],
        },

        /* ------------------------------------------------------ AUTHORED */
        {
          id: 'g3-ss-u6-l2',
          unitId: 'g3-ss-u6',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 2,
          status: 'authored',
          title: 'Reading a Photograph Like a Detective',
          essentialQuestion: 'What can a photograph prove, and what does it only hint at?',
          summary:
            'The core source skill of the unit. The child separates what they can see from what they are guessing, learns that a photograph is one person\'s choice of one moment, and practises on three images of the same square across forty years.',
          durationMin: 45,
          standards: [
            { code: 'D2.His.9.3-5', framework: 'C3', text: 'Summarise how different kinds of historical sources are used to explain events in the past.' },
            { code: 'D2.His.6.3-5', framework: 'C3', text: 'Describe how people\'s perspectives shaped the historical sources they created.' },
            { code: 'D2.His.10.3-5', framework: 'C3', text: 'Compare information provided by different historical sources about the past.' },
            { code: 'D3.1.3-5', framework: 'C3', text: 'Gather relevant information from one or more sources while using the origin, structure and context to guide the selection.' },
          ],
          objectives: [
            'I can separate what I observe from what I infer.',
            'I can support an inference by naming the detail it came from.',
            'I can say one thing a photograph cannot tell me.',
          ],
          vocabulary: [
            { term: 'primary source', definition: 'Something made at the time by someone who was there.' },
            { term: 'observe', definition: 'To say what you can actually see, with no guessing.' },
            { term: 'infer', definition: 'To work out something likely from a clue, even though you cannot see it directly.' },
            { term: 'perspective', definition: 'Whose point of view a source was made from.' },
            { term: 'evidence', definition: 'The detail you point to that makes your idea believable.' },
          ],
          materials: [
            'The printed worksheet',
            'A magnifying glass if you have one — it changes how carefully a child looks',
            'Three sticky notes',
            'A pencil',
          ],
          prep: [
            'Print the worksheet as large as your printer allows. Detail is the whole lesson and a small print destroys it.',
            'Study the market image yourself and find five details you might have missed on a first pass. You need to know they are there so you can slow the child down without telling them what to see.',
            'Write the three column headings — SEE, THINK, WONDER — on scrap paper before you start.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'My Confident Wrong Answer',
              minutes: 6,
              say: [
                'Look at this old picture of a market. I have worked it all out already. Listen.',
                'Everyone here was poor, because their clothes are dull and grey. And it was a sad day, because nobody is smiling.',
                'That is my conclusion. Am I right?',
                'Push back on me. Which bit of the picture actually proves anyone was poor?',
                'You are right and I was cheating. Old photographs are grey because of the film, not because of the clothes. And people held still for the camera, so nobody smiles. I made two things up and said them like facts.',
              ],
              do: [
                'Deliver both claims with total confidence and only then invite the challenge.',
                'When the child objects, write your two claims down and put a cross through each as it is demolished.',
              ],
              studentDoes: ['Challenges the claims and identifies that the evidence does not support them.'],
              checks: [
                {
                  ask: 'What would I actually need to see in this picture to prove somebody was poor?',
                  lookFor: 'Something concrete — worn shoes, a patched coat, an empty basket, a bare stall.',
                  ifStuck: 'Ask what a picture of a rich person and a poor person would differ in, and then look for that thing.',
                },
              ],
              tip: 'Being visibly wrong here buys you the whole lesson. The child spends the rest of the session hunting for the difference between seeing and guessing because they just caught you conflating them.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'See, Think, Wonder',
              minutes: 9,
              say: [
                'Three columns. Every detective uses them, and you never mix them up.',
                'SEE is only what is actually in the picture. "A woman is holding a basket." I can point at it. No guessing allowed in this column.',
                'THINK is what you work out from what you see. "She is buying food for a family." I cannot see the family. I am inferring it — but I must be able to say which detail I inferred it from.',
                'WONDER is what the picture makes you want to know but cannot tell you. "What did that cost? Who is she buying for? Did she walk here?"',
                'Watch me do one of each, out loud. See: a boy is standing beside a stall with his hand on a crate. Think: he probably works there, because his hand is on the goods and no adult is pulling him away. Wonder: is that his family\'s stall?',
                'Notice what I did in the THINK column. I said "probably", and I named my clue. Those two moves are the whole skill.',
              ],
              do: [
                'Rule three columns and fill one row in front of the child, thinking aloud including the false starts.',
                'Every time you write in THINK, tap the detail in the picture that produced it.',
              ],
              studentDoes: ['Offers one item for each column and identifies the clue behind their inference.'],
              checks: [
                { ask: 'Is "the man is a farmer" a SEE or a THINK?', lookFor: 'A THINK — you cannot see a job, you infer it from clothes, goods or tools.', ifStuck: 'Ask them to point at the farmer-ness. They cannot, which is the answer.' },
                { ask: 'Give me the clue behind your THINK.', lookFor: 'A named, pointable detail rather than a general impression.' },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Slow Looking',
              minutes: 10,
              say: [
                'Now we go slowly, and I mean genuinely slowly. Cover the whole picture with your hand and uncover one quarter at a time.',
                'Top left quarter only. Tell me five things you can see. Five, not three.',
                'Good. Now the bottom right. Five more.',
                'Here is the one people always miss. Look at the ground. What is it made of, and what does that tell you about this town?',
                'And look at the edge of the picture, right at the border. What is just about to be cut off?',
                'That is the part the photographer decided not to include. Somebody chose this frame. That is the most important thing about any photograph.',
              ],
              do: [
                'Physically cover three quarters of the image with paper. The constraint is what produces the slow looking.',
                'Time thirty seconds of silence on the first quarter before allowing any speech.',
              ],
              studentDoes: ['Generates at least fifteen observations from quarter-by-quarter looking and notices the framing choice.'],
              checks: [
                {
                  ask: 'Who was standing where the camera is, and why did they choose this view?',
                  lookFor: 'Recognition that a person made a choice — to show the busy stalls, the fine building, the crowd.',
                  ifStuck: 'Ask what they would have photographed instead if they wanted the town to look empty.',
                },
              ],
              tip: 'Fifteen observations sounds like a lot and takes about four minutes. It is the single highest-value thing in the lesson; children stop at three unless you make three impossible.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 15,
              say: [
                'Your turn on paper, and there are three pictures now, all of the same square.',
                'Fill in the three columns for the market picture. Two things in each column, minimum. Every THINK needs its clue written next to it.',
                'Then compare the market picture with the later one of the same square. What changed? Careful — the answer is not just "cars".',
                'Last part, and it is the hardest. Look at the family portrait and write one question the photograph cannot answer.',
              ],
              do: [
                'Insist on the clue beside every THINK. A THINK without a clue is a guess, and the entire unit rests on that distinction.',
                'Let the comparison surprise them; do not point out the changes yourself.',
              ],
              studentDoes: ['Completes a see-think-wonder chart with clues, compares two dated images, and articulates a limit of the source.'],
              checks: [
                { ask: 'Read me one THINK and its clue.', lookFor: 'An inference plus a specific, pointable detail. If the clue is "it just looks like it", send them back to the picture.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Who Is Missing',
              minutes: 5,
              say: [
                'One last question, and it is the one real historians argue about.',
                'Who is NOT in this photograph, who was definitely in the town that day?',
                'The people at work indoors. The people too busy to stop. Anyone who did not want to be photographed. Small children at home. Whoever was holding the camera.',
                'So a photograph is true, but it is not the whole truth. It is one person, standing in one spot, on one day, pointing at what they thought was worth keeping.',
              ],
              do: ['Write the closing sentence on a card and keep it visible for the rest of the unit.'],
              studentDoes: ['Names at least two groups absent from the frame and explains why absence is not evidence of non-existence.'],
              checks: [
                { ask: 'If somebody is not in the photograph, does that mean they were not in the town?', lookFor: 'A clear no, with a reason about framing, timing or who was behind the camera.' },
              ],
            },
          ],
          worksheet: {
            id: 'g3-ss-u6-l2-ws',
            title: 'Reading a Photograph Like a Detective',
            style: 'historical',
            prepNotes:
              'Print as large as your printer allows and, if you can, in greyscale — the period feel helps and the detail survives better. A magnifying glass is not a gimmick here: children who are given one look for about three times as long. The three-column chart is deliberately unlabelled inside so the child writes the headings themselves.',
            sections: [
              {
                id: 's1',
                title: 'See, Think, Wonder',
                directions: 'Look at the market picture for a whole minute before you write anything. Then fill in the three columns. Write at least two things in each. Next to every THINK, write the clue you got it from.',
                layout: 'full',
                writingLines: 9,
                images: [
                  {
                    id: 'g3-ss-u6-img-market-1905',
                    slot: 'Market day in the town square, about 1905',
                    purpose: 'The main source of the lesson. It must be dense enough that quarter-by-quarter looking keeps producing new detail, because the whole method depends on the child running out of easy observations and having to look properly.',
                    subject: 'a busy town square on market day in about 1905, four covered market stalls with produce in wooden crates and baskets, seven townspeople of varied ages and backgrounds browsing and trading, cobbled ground, a stone town hall with an arched doorway behind, and a single horse and cart at the edge of the square',
                    count: 7,
                    composition: 'a wide eye-level view across the square, the four stalls arranged along the left and centre, the stone town hall filling the background, the horse and cart entering at the right-hand edge and partly cut off by the frame, all seven people clearly separated and individually countable, rich detail in every quarter of the frame',
                    mustInclude: [
                      'exactly seven people, clearly separated and countable, of varied ages, genders and backgrounds, each shown with dignity and purpose',
                      'period-accurate 1905 detail: long skirts, waistcoats, aprons, flat caps, wooden crates, canvas awnings, cobbled ground',
                      'a cart at the very edge of the frame, deliberately partly cut off',
                      'clear visible detail in every quarter of the image, including the ground surface',
                    ],
                    mustAvoid: [
                      'any anachronism: cars, tarmac, plastic, modern clothing, electric lighting',
                      'caricature, exaggerated features or stereotyped costume for any person',
                      'poverty or hardship depicted as spectacle, and any violence or distress',
                      'readable lettering on stalls, signs, crates or the building',
                    ],
                    aspect: '4:3',
                    altText: 'A busy town square on market day around 1905 with four stalls, seven people and a horse and cart at the edge',
                    style: 'historical',
                  },
                ],
              },
              {
                id: 's2',
                title: 'The Same Square, Forty Years Later',
                directions: 'This is the same square about forty years after the market picture. Write three things that changed and one thing that did not. Then write what you think caused the biggest change.',
                layout: 'full',
                writingLines: 5,
                images: [
                  {
                    id: 'g3-ss-u6-img-square-1945',
                    slot: 'The same square, about 1945',
                    purpose: 'A second source of the same place lets the child compare rather than merely describe, which is the step from observing a source to using two of them together.',
                    subject: 'the same town square about forty years later in the mid-1940s, only two market stalls remaining, a paved road surface with painted markings crossing the square, two early motor vehicles parked near the town hall, and five people of varied ages walking across the open space',
                    count: 5,
                    composition: 'the same wide eye-level viewpoint across the square with the same stone town hall in the background, the two remaining stalls in the same position as two of the earlier four, exactly five people clearly separated and countable, much more empty paved ground than in the earlier image',
                    mustInclude: [
                      'the identical stone town hall with the same arched doorway, in the same position',
                      'exactly five people, of varied ages and backgrounds, shown with dignity',
                      'period-accurate mid-1940s detail: clothing, vehicle shapes, painted road markings',
                      'exactly two remaining market stalls',
                    ],
                    mustAvoid: [
                      'a different viewpoint or a changed town hall',
                      'anachronism from either direction — no horse carts, no modern cars',
                      'any military scene, weapons, damage or distress',
                      'readable lettering anywhere in the image',
                    ],
                    aspect: '4:3',
                    altText: 'The same town square in the mid-1940s with two stalls, a paved road and five people crossing',
                    style: 'historical',
                  },
                  {
                    id: 'g3-ss-u6-img-stall-detail',
                    slot: 'Close view of one corner of the market',
                    purpose: 'A deliberate crop of a corner of the main scene, so the child discovers that zooming in reveals detail that was there all along and that they walked straight past on the first look.',
                    subject: 'a close view of one market stall corner in about 1905, a wooden trestle table with three shallow baskets of vegetables, a hanging brass scale, and a stallholder in an apron handing a wrapped parcel to a customer',
                    count: 3,
                    composition: 'a tight three-quarter close view filling the frame with the trestle table across the lower half, exactly three baskets clearly separated on the table, the hanging scale at the upper left, the two figures from the chest down only so the goods and hands dominate the frame',
                    mustInclude: [
                      'exactly three baskets on the table, clearly separated and countable',
                      'period-accurate 1905 detail: rough wood, woven baskets, brass scale, cloth apron, paper wrapping and string',
                      'both pairs of hands clearly visible in the act of the exchange, shown with dignity and competence',
                    ],
                    mustAvoid: [
                      'modern packaging, plastic, printed labels or price tickets',
                      'faces rendered as caricature, and any exaggerated or comic expression',
                      'readable lettering on the paper, the scale or the crates',
                      'a wide view that loses the close detail',
                    ],
                    aspect: '3:2',
                    altText: 'Close view of a 1905 market stall with three baskets of vegetables, a brass scale and a parcel being handed over',
                    style: 'historical',
                  },
                ],
              },
              {
                id: 's3',
                title: 'What the Picture Cannot Tell You',
                directions: 'This family had their portrait taken in about 1900. Write two things you can SEE. Then write two questions the photograph cannot answer, no matter how hard you look.',
                layout: 'full',
                writingLines: 6,
                images: [
                  {
                    id: 'g3-ss-u6-img-family-portrait',
                    slot: 'A studio family portrait, about 1900',
                    purpose: 'A posed portrait teaches perspective more sharply than a street scene: everything in it was arranged on purpose, so the child can see that a source is made rather than found.',
                    subject: 'a formal studio family portrait from about 1900, five family members of a range of ages arranged in a careful group, two adults seated on plain chairs and three children standing beside them, all in their best clothes, against a plain painted studio backdrop',
                    count: 5,
                    composition: 'a centred symmetrical group filling the frame, the two seated adults in the middle, the three standing children arranged around them, everyone looking directly at the camera with the still, unsmiling expression of a long exposure, plain backdrop with no scenery',
                    mustInclude: [
                      'exactly five people, each individually visible and countable',
                      'period-accurate 1900 clothing and studio conventions: high collars, best clothes, plain backdrop, formal still poses',
                      'every family member depicted with dignity and self-possession, none made to look comic, pitiable or odd',
                    ],
                    mustAvoid: [
                      'caricature, exaggerated features, or stereotyped depiction of any family member',
                      'anachronistic clothing, furniture or backdrop',
                      'a photographic border, frame edge or any studio marking with readable text',
                      'anyone in distress, and any suggestion of hardship as spectacle',
                    ],
                    aspect: '3:4',
                    altText: 'A formal studio portrait of a family of five from about 1900',
                    style: 'historical',
                  },
                ],
              },
            ],
            answerKey: [
              'See, Think, Wonder — accept any accurate observation. Strong THINKs name a clue: "she is shopping for a household, because she has a large basket and is choosing carefully". Reject any THINK without a clue.',
              'Changed: fewer stalls, paved surface instead of cobbles, motor vehicles instead of horses, fewer people in the square, road markings, different clothing.',
              'Did not change: the town hall and its arched doorway, the shape of the square, people still crossing it, the square still being a public gathering place.',
              'Cause of the biggest change: accept any reasoned answer — motor transport meant people could shop further away, shops replaced stalls, the square became a place to drive through rather than trade in.',
              'Cannot be answered by the portrait: what the family sounded like, whether they liked each other, what they ate, how much money they had, what happened to them afterwards, why they had the picture taken, who is missing from it.',
            ],
          },
          assessment: {
            successCriteria: [
              'Keeps observation and inference in separate columns without prompting.',
              'Attaches a specific visual clue to every inference.',
              'Finds three changes and one continuity between two dated images of one place.',
              'States at least one question the source cannot answer, and explains why.',
            ],
            exitTicket:
              'Show any photograph and ask for one SEE, one THINK with its clue, and one WONDER. If the THINK has no clue attached, the skill is not there yet.',
            rubric: [
              { level: 'emerging', descriptor: 'Describes the picture in general terms and states guesses as facts, with observation and inference blended together.' },
              { level: 'developing', descriptor: 'Separates seeing from thinking when the columns are in front of them, and supplies clues when asked for them.' },
              { level: 'secure', descriptor: 'Separates the two unprompted, hedges inferences with "probably", cites a clue every time, and recognises that the frame was somebody\'s choice.' },
            ],
          },
          differentiation: {
            support: [
              'Do the SEE column orally and scribe it, so all the writing energy goes into THINK.',
              'Use the quarter-covering technique for every image, not just the first.',
              'Give the sentence frame "I think ___ because I can see ___." and require it every time.',
            ],
            extension: [
              'Find a real photograph of your own town from a library collection and run the full method on it.',
              'Write the caption the photographer might have given it, then the caption someone in the picture might have given it, and compare.',
              'Work out what the photographer chose to leave out and why, using the cut-off cart as the starting clue.',
            ],
            language: [
              'Teach the three headings as three gestures — eyes, head, question hands — and use them all week.',
              'Allow observations in the home language first; the noticing is the skill, not the English.',
            ],
          },
          misconceptions: [
            {
              misconception: 'A photograph shows what a place was really like.',
              looksLike: 'The child treats the market scene as the whole town on that day.',
              correction: 'Ask who is missing and who chose the frame. Point at the cart cut off at the edge — something was always just outside the picture.',
            },
            {
              misconception: 'An inference is the same as an observation if you feel sure about it.',
              looksLike: 'The child writes "they are a family" in the SEE column.',
              correction: 'Ask them to point at the family-ness with a finger. If it cannot be pointed at, it belongs in THINK.',
            },
            {
              misconception: 'Old photographs are grey because the past was drab.',
              looksLike: 'Claims about mood, poverty or seriousness based on the tones of the image.',
              correction: 'Explain film in one sentence, and explain that long exposures made smiling impossible. Both are properties of the camera, not the century.',
            },
          ],
          homeExtension: [
            'Find the oldest photograph in your home and run see, think, wonder on it with whoever knows the most about it.',
            'Take a photograph of your own street today and write down three things you deliberately left out of the frame.',
            'Search your library\'s digital collection for your town\'s name and pick the strangest picture you find.',
          ],
          teacherNotes:
            'The single thing to hold the line on is the clue. Children will happily produce rich, plausible, entirely invented stories about a photograph, and the stories are so charming that it is tempting to accept them. Ask "what makes you say that?" every single time and the whole unit works; let it slide twice and the presentations at the end will be fiction.',
        },

        {
          id: 'g3-ss-u6-l3',
          unitId: 'g3-ss-u6',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 3,
          status: 'outline',
          title: 'Sources That Were There and Sources That Were Not',
          essentialQuestion: 'How do I know whether to trust what a source tells me?',
          summary:
            'Primary versus secondary sources, sorted by one test: was the maker there at the time? The child sorts ten real sources and then finds three that could answer their own question.',
          durationMin: 45,
          standards: [
            { code: 'D2.His.9.3-5', framework: 'C3', text: 'Summarise how different kinds of historical sources are used to explain events in the past.' },
            { code: 'D1.5.3-5', framework: 'C3', text: 'Determine the kinds of sources that will be helpful in answering compelling and supporting questions.' },
          ],
          objectives: [
            'I can sort sources into primary and secondary and explain the test I used.',
            'I can name three sources that could help answer my own question.',
          ],
          vocabulary: [
            { term: 'primary source', definition: 'Something made at the time by someone who was there.' },
            { term: 'secondary source', definition: 'Something made later by someone who studied the primary sources.' },
            { term: 'archive', definition: 'A collection where original documents and photographs are kept.' },
          ],
          materials: ['Ten printed source examples: a diary page, a photograph, a modern textbook page, a map, a receipt, a news report, an encyclopedia entry, an object, a letter, a documentary still'],
          prep: ['Include at least two genuinely ambiguous sources — a newspaper article about an event thirty years earlier, for instance — so the sorting requires thought.'],
          script: [],
          worksheet: { id: 'g3-ss-u6-l3-ws', title: 'Were You There?', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Sorts eight of ten sources correctly and justifies the two hard ones.', 'Identifies three plausible sources for their own inquiry.'],
            exitTicket: 'Ask whether a book written last year about 1905 is a primary or a secondary source, and why.',
          },
          differentiation: {
            support: ['Use the single question "was the person who made this there at the time?" for every card.'],
            extension: ['Find a source that is primary for one question and secondary for another, and explain the difference.'],
          },
          misconceptions: [
            { misconception: 'Primary sources are always more truthful.', looksLike: 'The child treats a diary as automatically reliable.', correction: 'Ask what the diarist wanted the reader to think. Being there does not make someone impartial.' },
          ],
          homeExtension: ['Find one primary source in your own home that is older than you are.'],
        },
        {
          id: 'g3-ss-u6-l4',
          unitId: 'g3-ss-u6',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 4,
          status: 'outline',
          title: 'Interviewing Someone Who Remembers',
          essentialQuestion: 'How do I turn a person\'s memory into evidence?',
          summary:
            'Oral history practice: writing open questions, listening without interrupting, recording accurately, and understanding that memory is a source with its own strengths and gaps.',
          durationMin: 45,
          standards: [
            { code: 'D3.1.3-5', framework: 'C3', text: 'Gather relevant information from one or more sources while using the origin, structure and context to guide the selection.' },
            { code: 'D2.His.6.3-5', framework: 'C3', text: 'Describe how people\'s perspectives shaped the historical sources they created.' },
          ],
          objectives: [
            'I can write six open questions that cannot be answered with yes or no.',
            'I can record what someone said accurately and separate it from my own opinion.',
          ],
          vocabulary: [
            { term: 'oral history', definition: 'History collected by recording what people remember.' },
            { term: 'open question', definition: 'A question that needs more than yes or no to answer.' },
            { term: 'quotation', definition: 'Somebody\'s exact words, written down without changing them.' },
          ],
          materials: ['A recording device or a notebook', 'A prepared question sheet', 'A willing interviewee arranged in advance'],
          prep: [
            'Arrange the interviewee and warn them of the topic in advance. Ask permission to record, and honour a refusal.',
            'Practise the interview on yourself first so the child hears what a follow-up question sounds like.',
          ],
          script: [],
          worksheet: { id: 'g3-ss-u6-l4-ws', title: 'Six Questions and One Follow-Up', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['Writes six genuinely open questions.', 'Records at least two accurate quotations.', 'Asks one unplanned follow-up question.'],
            exitTicket: 'Give a closed question and ask the child to reopen it: "Did you like school?" becomes "What was a school day like?"',
          },
          differentiation: {
            support: ['Provide four question stems and ask the child to complete them.'],
            extension: ['Interview two people about the same event and note where their accounts differ.'],
            language: ['Conduct the interview in the shared home language and transcribe the key quotations afterwards.'],
          },
          misconceptions: [
            { misconception: 'Memory is a recording and is always accurate.', looksLike: 'The child treats every remembered detail as fact.', correction: 'Ask the interviewee about something checkable and compare. Memory is honest and imperfect at the same time.' },
          ],
          homeExtension: ['Ask one relative the best question from the sheet and write down their exact first sentence.'],
        },
        {
          id: 'g3-ss-u6-l5',
          unitId: 'g3-ss-u6',
          gradeId: 'g3',
          subjectId: 'social-studies',
          sequence: 5,
          status: 'outline',
          title: 'Making Our Case in Public',
          essentialQuestion: 'How do I convince someone using evidence instead of opinion?',
          summary:
            'Claim, evidence, reasoning, and the honest admission of what is still unknown. The child assembles the inquiry into a five-minute presentation and delivers it to a real audience outside the household.',
          durationMin: 45,
          standards: [
            { code: 'D4.1.3-5', framework: 'C3', text: 'Construct arguments using claims and evidence from multiple sources.' },
            { code: 'D4.3.3-5', framework: 'C3', text: 'Present a summary of arguments and explanations to others outside the classroom using print and oral technologies.' },
            { code: 'D2.His.16.3-5', framework: 'C3', text: 'Use evidence to develop a claim about the past.' },
          ],
          objectives: [
            'I can state a claim in one sentence.',
            'I can support it with three pieces of evidence, at least one primary.',
            'I can name one thing I still do not know.',
          ],
          vocabulary: [
            { term: 'claim', definition: 'The answer you are arguing for, said in one clear sentence.' },
            { term: 'evidence', definition: 'The information from sources that supports your claim.' },
            { term: 'reasoning', definition: 'The explanation of how your evidence supports your claim.' },
          ],
          materials: ['Poster card or slides', 'Printed copies of the three chosen sources', 'An audience of at least two adults'],
          prep: [
            'Book the audience in advance. A real listener changes the quality of the work more than any amount of redrafting.',
            'Rehearse once with a timer so the five minutes are real.',
          ],
          script: [],
          worksheet: { id: 'g3-ss-u6-l5-ws', title: 'Claim, Evidence, Reasoning', style: 'historical', sections: [] },
          assessment: {
            successCriteria: ['States a one-sentence claim.', 'Presents three pieces of evidence with sources named.', 'Explains the link between each piece and the claim.', 'Names one remaining uncertainty.'],
            exitTicket: 'Ask the child to say their claim in one sentence with no "um" and no story attached.',
          },
          differentiation: {
            support: ['Use a four-box poster template with the headings already printed.'],
            extension: ['Prepare for one challenging question from the audience and answer it with evidence.'],
            language: ['Rehearse the claim sentence aloud five times before the presentation; fluency on the key sentence carries the rest.'],
          },
          misconceptions: [
            { misconception: 'A strong argument means sounding certain.', looksLike: 'The child hides the gaps in the evidence.', correction: 'Praise the "what I still do not know" slide loudly. Naming the limit is what makes the rest believable.' },
          ],
          homeExtension: ['Give the same presentation to a second audience and notice which question comes up both times.'],
        },
      ],
    },
  ],
}

export default course
