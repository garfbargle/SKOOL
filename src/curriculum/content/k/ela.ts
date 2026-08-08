import type { SubjectCourse } from '../../types'

/**
 * Kindergarten English Language Arts — built on the science of reading.
 *
 * The order of this course is deliberate and it is not negotiable: sounds
 * before letters, letters before words, words before sentences. Comprehension
 * runs alongside the whole thing through read-alouds, because a five-year-old's
 * listening comprehension is years ahead of their decoding and there is no
 * reason to make them wait.
 */
const course: SubjectCourse = {
  gradeId: 'k',
  subjectId: 'ela',
  title: 'Kindergarten English Language Arts',
  overview:
    'Learning to read is not learning to recognise words. It is learning that the words you already say are made of small sounds, that those sounds are written down with letters, and that the process runs in reverse when you read. Almost every child who struggles later struggles here, at the sound level, and almost every one of them can be caught in kindergarten. So this year is unashamedly about phonemes and letter-sounds — with rich read-alouds every single day, because the point of all that machinery is a story.',
  yearGoals: [
    'Hear, isolate, blend and segment the individual sounds inside spoken words.',
    'Name every upper- and lowercase letter and produce a sound for each one.',
    'Blend letter sounds to read simple three-sound words, and recognise around thirty high-frequency words on sight.',
    'Listen to a story and retell it in order, naming who was in it, where it happened and what they did.',
    'Draw, label and write a simple sentence using the sounds they can hear in the words.',
  ],
  units: [
    /* ============================================================ UNIT 1 */
    {
      id: 'k-ela-u1',
      gradeId: 'k',
      subjectId: 'ela',
      sequence: 1,
      title: 'How Books and Print Work',
      bigIdea:
        'Print is not decoration. Those marks are the exact words a person said, sitting still on the page so anyone can say them again.',
      description:
        'Before a child can read print, they have to notice that print is the thing being read. This short unit builds the conventions that fluent readers forget they ever learned: which way up the book goes, which direction the eye travels, where one word ends and the next begins, and the fact that a real person wrote those words down on purpose.',
      weeks: 3,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RF.K.1', framework: 'CCSS-ELA', text: 'Demonstrate understanding of the organisation and basic features of print.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.1.A', framework: 'CCSS-ELA', text: 'Follow words from left to right, top to bottom, and page by page.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.1.B', framework: 'CCSS-ELA', text: 'Recognise that spoken words are represented in written language by specific sequences of letters.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.1.C', framework: 'CCSS-ELA', text: 'Understand that words are separated by spaces in print.' },
        { code: 'CCSS.ELA-LITERACY.RI.K.5', framework: 'CCSS-ELA', text: 'Identify the front cover, back cover and title page of a book.' },
        { code: 'CCSS.ELA-LITERACY.RL.K.6', framework: 'CCSS-ELA', text: 'With prompting and support, name the author and illustrator of a story and define the role of each in telling the story.' },
      ],
      lessonTitles: [
        'The Front, the Back and the Right Way Up',
        'We Read This Way: Left to Right, Top to Bottom',
        'A Word Is a Bunch of Letters with Space Around It',
        'Letters, Words and Sentences Are Different Things',
        'Somebody Wrote This and Somebody Drew It',
      ],
      performanceTask:
        'The Book Tour: hand the child an unfamiliar picture book and ask them to give you the tour — front cover, title, author, illustrator, where to start reading, which way to go and where the next page is. They may not read a single word, and that is fine.',
      lessons: [
        {
          id: 'k-ela-u1-l1',
          unitId: 'k-ela-u1',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'The Front, the Back and the Right Way Up',
          essentialQuestion: 'How do I hold a book so it is ready to read?',
          summary:
            'Front cover, back cover, title page, spine and the right way up. Handled as a game where you hand over books deliberately upside down and back to front for the child to fix.',
          durationMin: 20,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.K.5', framework: 'CCSS-ELA', text: 'Identify the front cover, back cover and title page of a book.' },
          ],
          objectives: ['I can find the front cover and the back cover.', 'I can turn a book the right way up.', 'I can point to the title.'],
          vocabulary: [
            { term: 'cover', definition: 'The outside of the book, front and back.' },
            { term: 'title', definition: 'The name of the book, printed on the front.' },
            { term: 'spine', definition: 'The bendy edge that holds all the pages together.' },
          ],
          materials: ['Four or five picture books of different shapes', 'A sticky note'],
          prep: ['Stack the books deliberately wrong — upside down, back cover up, on their sides.'],
          script: [],
          worksheet: { id: 'k-ela-u1-l1-ws', title: 'Parts of a Book', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Orients an unfamiliar book correctly without being told.', 'Points to the front cover, back cover and title.'],
            exitTicket: 'Hand over a book upside down and say nothing. Watch whether it gets turned before it gets opened.',
          },
          differentiation: {
            support: ['Stick a small green dot on the front cover of the practice books, then peel it off once orientation is automatic.'],
            extension: ['Find the title page inside and explain how it differs from the cover.'],
          },
          misconceptions: [
            {
              misconception: 'The picture on the front is the title.',
              looksLike: 'Asked to point to the title, the child points at the illustration.',
              correction: 'Run your finger under the printed title while you say it. "These marks say the name. The picture shows it."',
            },
          ],
          homeExtension: ['Let the child choose and carry the bedtime book, and hand it to you ready to read.'],
        },
        {
          id: 'k-ela-u1-l2',
          unitId: 'k-ela-u1',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'We Read This Way: Left to Right, Top to Bottom',
          essentialQuestion: 'Where do my eyes go when I read?',
          summary:
            'Directionality and return sweep, taught with a finger under the print during every read-aloud. The child takes over as the pointer.',
          durationMin: 20,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.1.A', framework: 'CCSS-ELA', text: 'Follow words from left to right, top to bottom, and page by page.' },
          ],
          objectives: ['I can point under the words as you read them.', 'I know to go back to the left when a line runs out.'],
          vocabulary: [
            { term: 'left', definition: 'The side we start on.' },
            { term: 'right', definition: 'The side we finish on.' },
            { term: 'line', definition: 'One row of words across the page.' },
          ],
          materials: ['A big-print picture book with two or three lines per page', 'A lolly stick or chopstick to use as a pointer'],
          prep: ['Choose a book with short, well-spaced lines. Dense text defeats the purpose.'],
          script: [],
          worksheet: { id: 'k-ela-u1-l2-ws', title: 'Follow the Words', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Tracks left to right with a pointer.', 'Sweeps back to the left at the end of a line without prompting.'],
            exitTicket: 'Read one page while the child points. Success is the return sweep, not perfect word matching.',
          },
          differentiation: {
            support: ['Put a green sticker at the start of the line and a red one at the end.'],
            extension: ['Ask the child to predict where you will point next before you move.'],
          },
          misconceptions: [
            {
              misconception: 'Reading follows the pictures around the page.',
              looksLike: 'The finger wanders to the illustration mid-sentence.',
              correction: 'Cover the picture with your hand for one page. The print is now the only thing to follow.',
            },
          ],
          homeExtension: ['Let the child be the pointer for one page of every bedtime story.'],
        },
        {
          id: 'k-ela-u1-l3',
          unitId: 'k-ela-u1',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'A Word Is a Bunch of Letters with Space Around It',
          essentialQuestion: 'How do I know where one word stops and the next one starts?',
          summary:
            'Word boundaries in print. The child frames single words with two fingers or a cut-out window and counts the words in a sentence they have just heard.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.1.C', framework: 'CCSS-ELA', text: 'Understand that words are separated by spaces in print.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.1.B', framework: 'CCSS-ELA', text: 'Recognise that spoken words are represented in written language by specific sequences of letters.' },
          ],
          objectives: ['I can frame one word with my fingers.', 'I can count how many words are in a short printed sentence.'],
          vocabulary: [
            { term: 'word', definition: 'A group of letters with a space on each side.' },
            { term: 'space', definition: 'The gap that keeps words from running together.' },
          ],
          materials: ['A card with a small rectangular window cut in it', 'A sentence written large on paper'],
          prep: ['Write one four-word sentence in big letters with exaggerated spaces between the words.'],
          script: [],
          worksheet: { id: 'k-ela-u1-l3-ws', title: 'Find the Words', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Frames a single word rather than part of one.', 'Counts the words in a four-word sentence correctly.'],
            exitTicket: 'Write "I like my dog" and ask how many words. Four is the answer; four letters counted is the error to catch.',
          },
          differentiation: {
            support: ['Write the sentence with each word in a different colour before moving to plain black.'],
            extension: ['Ask which word in the sentence is the longest, and check by counting letters.'],
          },
          misconceptions: [
            {
              misconception: 'Every letter is a word.',
              looksLike: 'Asked to count words, the child counts letters and reports fourteen.',
              correction: 'Frame each word with the window card and count only the frames.',
            },
          ],
          homeExtension: ['Count the words on a cereal packet or a shop sign while you wait.'],
        },
        {
          id: 'k-ela-u1-l4',
          unitId: 'k-ela-u1',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Letters, Words and Sentences Are Different Things',
          essentialQuestion: 'What is the difference between a letter, a word and a sentence?',
          summary:
            'Nests the three units of print inside each other so the vocabulary of every later lesson means something. Ends with the child building a sentence from cut-out word cards.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.1', framework: 'CCSS-ELA', text: 'Demonstrate understanding of the organisation and basic features of print.' },
            { code: 'CCSS.ELA-LITERACY.L.K.2.B', framework: 'CCSS-ELA', text: 'Recognise and name end punctuation.' },
          ],
          objectives: ['I can point to a letter, a word and a whole sentence.', 'I know a sentence starts with a big letter and ends with a full stop.'],
          vocabulary: [
            { term: 'letter', definition: 'One single mark of the alphabet.' },
            { term: 'sentence', definition: 'A group of words that tells a whole thought.' },
            { term: 'full stop', definition: 'The little dot that shows a sentence has finished.' },
          ],
          materials: ['Cut-out word cards for one simple sentence', 'A highlighter'],
          prep: ['Cut a four-word sentence into separate word cards and shuffle them.'],
          script: [],
          worksheet: { id: 'k-ela-u1-l4-ws', title: 'Letter, Word, Sentence', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Distinguishes letter, word and sentence on request.', 'Rebuilds a shuffled sentence in an order that makes sense.'],
            exitTicket: 'Point to a page and say: show me one letter. Now one word. Now a whole sentence.',
          },
          differentiation: {
            support: ['Use a three-word sentence and keep the capital letter as the visual clue for where it starts.'],
            extension: ['Rearrange the cards into a silly order and ask the child to explain why it does not work.'],
          },
          misconceptions: [
            {
              misconception: 'A sentence is any line of print on the page.',
              looksLike: 'The child treats a line break as the end of a sentence.',
              correction: 'Hunt for full stops together and highlight them. The dot ends the sentence, not the edge of the page.',
            },
          ],
          homeExtension: ['On a birthday card, ask the child to find one letter, one word and the whole message.'],
        },
        {
          id: 'k-ela-u1-l5',
          unitId: 'k-ela-u1',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Somebody Wrote This and Somebody Drew It',
          essentialQuestion: 'Who made this book?',
          summary:
            'Author and illustrator as jobs done by real people, which quietly plants the idea that the child could do those jobs too. Ends with the child naming themselves as the author of their own drawing.',
          durationMin: 20,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.K.6', framework: 'CCSS-ELA', text: 'With prompting and support, name the author and illustrator of a story and define the role of each in telling the story.' },
            { code: 'CCSS.ELA-LITERACY.RL.K.7', framework: 'CCSS-ELA', text: 'With prompting and support, describe the relationship between illustrations and the story in which they appear.' },
          ],
          objectives: ['I can say what an author does and what an illustrator does.', 'I can be the author and illustrator of my own page.'],
          vocabulary: [
            { term: 'author', definition: 'The person who wrote the words.' },
            { term: 'illustrator', definition: 'The person who drew the pictures.' },
          ],
          materials: ['Two or three picture books', 'Blank paper', 'Crayons'],
          prep: ['Find one book where the author and illustrator are two different people and one where they are the same person.'],
          script: [],
          worksheet: { id: 'k-ela-u1-l5-ws', title: 'Author and Illustrator', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Explains both roles in their own words.', 'Signs their own drawing as author and illustrator.'],
            exitTicket: 'Hold up a cover and ask who wrote the words and who drew the pictures.',
          },
          differentiation: {
            support: ['Act it out: you be the author and say a sentence, the child be the illustrator and draw it.'],
            extension: ['Compare two books by the same illustrator and describe what looks the same.'],
          },
          misconceptions: [
            {
              misconception: 'One person makes the whole book alone, always.',
              looksLike: 'The child assumes the illustrator also wrote the words.',
              correction: 'Show a book with two names on the cover and read both, saying what each one did.',
            },
          ],
          homeExtension: ['Ask "who is the author?" before opening any bedtime book. It takes four seconds.'],
        },
      ],
    },
    /* ============================================================ UNIT 2 */
    {
      id: 'k-ela-u2',
      gradeId: 'k',
      subjectId: 'ela',
      sequence: 2,
      title: 'Hearing the Sounds Inside Words',
      bigIdea:
        'Every word you say is built out of small sounds, and you can pull those sounds apart and push them back together with nothing but your ears and your mouth.',
      description:
        'This is the highest-leverage unit of the kindergarten year and there is not a single letter in it. Phonemic awareness is purely oral: rhyme, syllables, onset and rime, then the individual phonemes. Children who can segment and blend phonemes orally learn phonics quickly. Children who cannot will meet letters as a memory task instead of a code, so do not rush this.',
      weeks: 6,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RF.K.2', framework: 'CCSS-ELA', text: 'Demonstrate understanding of spoken words, syllables and sounds (phonemes).' },
        { code: 'CCSS.ELA-LITERACY.RF.K.2.A', framework: 'CCSS-ELA', text: 'Recognise and produce rhyming words.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.2.B', framework: 'CCSS-ELA', text: 'Count, pronounce, blend and segment syllables in spoken words.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.2.C', framework: 'CCSS-ELA', text: 'Blend and segment onsets and rimes of single-syllable spoken words.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.2.D', framework: 'CCSS-ELA', text: 'Isolate and pronounce the initial, medial vowel and final sounds (phonemes) in three-phoneme (CVC) words.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.2.E', framework: 'CCSS-ELA', text: 'Add or substitute individual sounds (phonemes) in simple one-syllable words to make new words.' },
      ],
      lessonTitles: [
        'Words That Rhyme',
        'Clapping the Beats in a Word',
        'What Is the First Sound You Hear?',
        'Pushing Sounds Together and Pulling Them Apart',
        'The Sound Hiding in the Middle',
      ],
      performanceTask:
        'Robot Restaurant: you order food in robot talk — "I would like the /k/ /a/ /p/" — and the child fetches the right object, then takes your order back the same way, segmenting a word of their own choosing.',
      lessons: [
        {
          id: 'k-ela-u2-l1',
          unitId: 'k-ela-u2',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Words That Rhyme',
          essentialQuestion: 'What makes two words sound like they belong together?',
          summary:
            'Rhyme recognition then rhyme production, using nursery rhymes and a stop-before-the-rhyming-word game so the child supplies it.',
          durationMin: 20,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.2.A', framework: 'CCSS-ELA', text: 'Recognise and produce rhyming words.' },
          ],
          objectives: ['I can tell if two words rhyme.', 'I can say a word that rhymes with a word you give me.'],
          vocabulary: [
            { term: 'rhyme', definition: 'Two words that end with the same sound.', example: 'Cat and hat rhyme.' },
            { term: 'ending', definition: 'The last part of the word.' },
          ],
          materials: ['A nursery rhyme book or your memory', 'A few small objects: cat toy, hat, mat'],
          prep: ['Choose three rhymes you can say from memory so you can watch the child instead of the page.'],
          script: [],
          worksheet: { id: 'k-ela-u2-l1-ws', title: 'Do These Rhyme?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Judges rhyming pairs correctly at least four times out of five.', 'Produces one rhyme for a given word, real or nonsense.'],
            exitTicket: 'Say "pig" and ask for a word that rhymes. Accept "wig", "big" and also "zig" — nonsense rhymes prove the ear is working.',
          },
          differentiation: {
            support: ['Offer a forced choice: "Does cat rhyme with hat, or with dog?"'],
            extension: ['Build a rhyme chain of four or more words and see how long it can run.'],
          },
          misconceptions: [
            {
              misconception: 'Words that start the same rhyme.',
              looksLike: 'Asked what rhymes with cat, the child says "cup".',
              correction: 'Stretch both endings out loud: "caaat, cuuup". Point at your mouth, not the words.',
            },
          ],
          homeExtension: ['Sing the same three nursery rhymes all week and stop before the last word every time.'],
        },
        {
          id: 'k-ela-u2-l2',
          unitId: 'k-ela-u2',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'Clapping the Beats in a Word',
          essentialQuestion: 'How many beats are hiding in my name?',
          summary:
            'Syllable counting with claps, chin drops and hopping. Uses the child’s own name and the names of everyone they love, which makes the practice self-motivating.',
          durationMin: 20,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.2.B', framework: 'CCSS-ELA', text: 'Count, pronounce, blend and segment syllables in spoken words.' },
          ],
          objectives: ['I can clap once for each beat in a word.', 'I can say how many beats a word has.'],
          vocabulary: [
            { term: 'beat', definition: 'One clap-sized chunk of a word.', example: 'Elephant has three beats.' },
            { term: 'syllable', definition: 'The grown-up word for a beat.' },
          ],
          materials: ['A drum, a pot lid or just two hands'],
          prep: ['Write down six family names in advance, mixing one-, two- and three-beat names.'],
          script: [],
          worksheet: { id: 'k-ela-u2-l2-ws', title: 'Clap the Beats', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Claps the correct number of syllables for one-, two- and three-syllable words.'],
            exitTicket: 'Say "butterfly" and ask for the claps. Three.',
          },
          differentiation: {
            support: ['Put a hand under the chin — the jaw drops once per syllable, which is a physical cue the ear can trust.'],
            extension: ['Sort the family names into a one-clap pile, a two-clap pile and a three-clap pile.'],
          },
          misconceptions: [
            {
              misconception: 'Every sound is a beat.',
              looksLike: 'The child claps three times for "cat".',
              correction: 'Slow down and use the chin drop. "Cat" only drops the jaw once.',
            },
          ],
          homeExtension: ['Clap the syllables of everything on the shopping list as you unpack it.'],
        },
        {
          id: 'k-ela-u2-l3',
          unitId: 'k-ela-u2',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'What Is the First Sound You Hear?',
          essentialQuestion: 'What sound does a word start with?',
          summary:
            'Isolating the initial phoneme — the first genuinely phonemic skill and the one that unlocks letter-sound work in the next unit. Still entirely oral.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.2.D', framework: 'CCSS-ELA', text: 'Isolate and pronounce the initial, medial vowel and final sounds (phonemes) in three-phoneme (CVC) words.' },
          ],
          objectives: ['I can say the very first sound in a word.', 'I can find two things that start with the same sound.'],
          vocabulary: [
            { term: 'first sound', definition: 'The sound your mouth makes right at the start of a word.', example: 'Sun starts with /s/.' },
            { term: 'same', definition: 'Not different.' },
          ],
          materials: ['A bag of eight small household objects with clear initial sounds', 'A sorting tray or two paper plates'],
          prep: ['Choose objects with continuous first sounds where you can — /m/, /s/, /f/, /l/ can be stretched, /t/ and /b/ cannot.'],
          script: [],
          worksheet: { id: 'k-ela-u2-l3-ws', title: 'First Sounds', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Isolates the initial sound of a spoken word without saying the whole word first.'],
            exitTicket: 'Say "fish" and ask for the first sound. Look for /f/, not "fuh" and not "eff".',
          },
          differentiation: {
            support: ['Stretch the first sound yourself for a long beat before handing the word over: "ffffish".'],
            extension: ['Ask for the last sound too, which is considerably harder than the first.'],
          },
          misconceptions: [
            {
              misconception: 'The first sound is the letter name.',
              looksLike: 'Asked for the first sound in "sun", the child answers "ess".',
              correction: 'Say "I want the sound your mouth makes, not the letter’s name" and model /s/ with an exaggerated hiss.',
            },
          ],
          homeExtension: ['Play "I spy with my little eye, something starting with /b/" using sounds rather than letter names.'],
        },

        /* ---------------------------------------------------- L4 authored */
        {
          id: 'k-ela-u2-l4',
          unitId: 'k-ela-u2',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 4,
          status: 'authored',
          title: 'Pushing Sounds Together and Pulling Them Apart',
          essentialQuestion: 'How can I turn three little sounds into a whole word, and a whole word back into three sounds?',
          summary:
            'Oral blending and segmenting of three-phoneme words, using sound boxes and a counter per sound. This is the single best predictor of later reading success and it happens with no letters on the table at all — the child is training an ear, not a memory.',
          durationMin: 30,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.2.D', framework: 'CCSS-ELA', text: 'Isolate and pronounce the initial, medial vowel and final sounds (phonemes) in three-phoneme (CVC) words.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.2.C', framework: 'CCSS-ELA', text: 'Blend and segment onsets and rimes of single-syllable spoken words.' },
          ],
          objectives: [
            'I can listen to three sounds and say the whole word.',
            'I can say a word slowly and push one counter for each sound I hear.',
            'I can tell you how many sounds are in a short word.',
          ],
          vocabulary: [
            { term: 'sound', definition: 'One tiny noise your mouth makes inside a word.', example: 'Cat has three sounds: /k/ /a/ /t/.' },
            { term: 'blend', definition: 'To push the sounds together fast until they make a word.', example: '/m/ /a/ /p/ blends into map.' },
            { term: 'segment', definition: 'To pull a word apart into its sounds, slowly.', example: 'Sun segments into /s/ /u/ /n/.' },
            { term: 'sound box', definition: 'One square for each sound in the word.' },
          ],
          materials: [
            'Three small counters, buttons or dried beans per person',
            'The printed worksheet with sound boxes',
            'A soft toy to be the robot (any toy will do — it only has to talk oddly)',
            'A crayon',
          ],
          prep: [
            'Practise saying /k/ /a/ /t/ out loud yourself. Say pure sounds: /k/ not "kuh", /t/ not "tuh". The added "uh" is the most common adult error and it makes blending much harder for the child.',
            'Cut or tear three counters loose so they can be pushed one at a time.',
            'Decide on your robot voice now, before the child is watching.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Robot Who Cannot Say Words',
              minutes: 5,
              say: [
                'This robot has a broken voice. It can only say sounds, never whole words. Listen to what it wants for lunch.',
                '/h/ … /a/ … /m/.',
                'What does the robot want? Say the sounds fast and see what falls out.',
                'Ham! You did it. You took three broken bits and made a whole word.',
                'Try another one. The robot wants a … /f/ … /i/ … /sh/.',
              ],
              do: [
                'Hold the toy up and use an obviously silly voice. Leave about one second between each sound.',
                'On the second try, shorten the gaps so the sounds run closer together — that shortening is the scaffold.',
              ],
              studentDoes: ['Listens to segmented words and says the blended word.'],
              checks: [
                {
                  ask: 'What word did the robot say?',
                  lookFor: 'The correctly blended word, said as one piece.',
                  ifStuck: 'Say the sounds again with almost no gap at all — "fffiiishh" — so it is nearly the word already. Then stretch the gaps back out over the next few turns.',
                },
              ],
              tip: 'Keep your sounds clean. If you say "huh-a-muh" the child has to blend six sounds instead of three, and they will fail at something they can actually do.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'One Counter for One Sound',
              minutes: 6,
              say: [
                'Now we go the other way. I take a whole word and pull it apart. Watch my hand.',
                'The word is sun. I am going to say it slowly and push one counter into a box for every sound.',
                '/s/ — push. /u/ — push. /n/ — push. Three counters. Three sounds. Sun.',
                'Notice I did not push a counter for every letter, because we are not looking at letters. We are listening. Three sounds, three pushes.',
                'Let me do one more. Map. /m/ — push. /a/ — push. /p/ — push. Three again.',
              ],
              do: [
                'Use the three-box strip on the worksheet and push a real counter into each box as you say each sound.',
                'Say the sound as the counter lands, not before. The synchrony is the teaching.',
              ],
              studentDoes: ['Watches, then says the sounds with you on the second word.'],
              checks: [
                {
                  ask: 'How many sounds were in map?',
                  lookFor: 'Three, ideally with a glance at the three counters.',
                  ifStuck: 'Do it again more slowly and let the child push the counters while you say the sounds.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Your Mouth, Your Counters',
              minutes: 8,
              say: [
                'Your turn. I say the word once, you say it slowly and push the counters.',
                'The word is pig. Say it slowly.',
                'Beautiful. /p/ /i/ /g/. Three sounds.',
                'Next word: bed. Now: fan. Now a tricky one — up. Careful, that one is short.',
                'Up only had two! Not every word has three. Your ears decided that, not me.',
              ],
              do: [
                'Work through pig, bed, fan, up, hot. The two-phoneme word in the middle stops the child pushing three counters out of habit.',
                'If the child pushes three for "up", do not correct — say the word slowly together and let them recount.',
              ],
              studentDoes: ['Segments spoken words, pushing one counter per phoneme, and states the count.'],
              checks: [
                {
                  ask: 'Say the word slowly for me. How many sounds did your mouth make?',
                  lookFor: 'The correct phoneme count, with pushes matching the sounds one to one.',
                  ifStuck: 'Hold the child’s hand and push the counters together while they say the word. Physical synchrony first, independence later.',
                },
                {
                  ask: 'What is the middle sound in pig?',
                  lookFor: '/i/. The middle vowel is the hardest of the three positions.',
                  ifStuck: 'Push all three counters, then point only at the middle one and say the word slowly again.',
                },
              ],
              tip: 'Do not let the child look at written words during this lesson even if they ask. Letters short-circuit the ear, and the ear is what you are building.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Sound Box Page',
              minutes: 8,
              say: [
                'This page has pictures and sound boxes. I will tell you what each picture is, and then you do the work.',
                'Say the word slowly. Push a counter into a box for each sound. Then colour in that many boxes.',
                'The first one is a cat. Say it slowly. /k/ /a/ /t/. Three boxes coloured.',
                'The last part is the robot again — I say the sounds and you circle the picture I meant.',
              ],
              do: [
                'Name every picture out loud before the child starts. This is a listening task, not a guessing task, and a wrong label ruins the item.',
                'Leave the counters on the table. Colouring the boxes comes after pushing, not instead of it.',
              ],
              studentDoes: ['Segments each pictured word and colours one box per sound, then blends the robot words.'],
              checks: [
                { ask: 'Show me how you knew it was three.', lookFor: 'The child re-says the word slowly and touches each box.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Robot Goodbye',
              minutes: 3,
              say: [
                'The robot wants to say goodnight but it can only do sounds. Ready?',
                '/b/ … /e/ … /d/.',
                'Bed! Off we go. Tomorrow the robot is going to try four sounds and I think it will get in a muddle.',
              ],
              do: ['Segment two or three closing words and let the child blend each one.'],
              studentDoes: ['Blends segmented words instantly at the end of the lesson.'],
              checks: [{ ask: '/h/ /o/ /t/ — what did the robot say?', lookFor: 'Hot, blended without hesitation.' }],
            },
          ],
          worksheet: {
            id: 'k-ela-u2-l4-ws',
            title: 'Say It Slow, Say It Fast',
            style: 'line-art',
            prepNotes:
              'There is not a single letter on this page and that is deliberate. If your child asks how to spell the words, say "not today — today is ears only". Have three counters ready; the boxes are meant to be pushed into before they are coloured.',
            sections: [
              {
                id: 's1',
                title: 'Push a Counter for Every Sound',
                directions: 'Say the picture name slowly. Push one counter into a box for each sound you hear. Then colour in the boxes you used.',
                layout: 'column',
                items: [
                  'Picture 1 — say it slowly, then colour one box per sound.',
                  'Picture 2 — say it slowly, then colour one box per sound.',
                  'Picture 3 — say it slowly, then colour one box per sound.',
                ],
                images: [
                  {
                    id: 'img-soundbox-strip-3',
                    slot: 'Sound box strip beside each picture',
                    purpose:
                      'Gives an abstract, invisible thing — a phoneme — a physical place to live. The child can push a counter into a square and see the number of sounds, which is the whole reason Elkonin boxes outperform simply asking "how many sounds?".',
                    subject: 'a horizontal strip of three identical empty squares joined side by side in a single row, drawn as a plain outlined grid',
                    count: 3,
                    composition:
                      'exactly three equal squares in one straight horizontal row sharing common edges, each square large enough to hold a counter, thick even outlines, interiors completely blank white',
                    mustInclude: ['exactly three squares of identical size', 'all three squares completely empty', 'squares sharing straight vertical dividing lines with no gap between them'],
                    mustAvoid: ['any dots, letters, numbers or marks inside the squares', 'a fourth square', 'rounded or uneven squares', 'shading or colour fill'],
                    aspect: '3:1',
                    altText: 'A strip of three empty sound boxes',
                    style: 'manipulative',
                  },
                  {
                    id: 'img-cat-cvc',
                    slot: 'Picture 1 — cat',
                    purpose:
                      'A three-phoneme word with a stop sound at each end, which is the standard first segmenting target. The picture must be instantly nameable as exactly "cat", because a child who calls it "kitty" is segmenting a different word.',
                    subject: 'a single simple cartoon cat sitting upright in side view — an object whose English name is the three-phoneme word "cat", /k/ /a/ /t/',
                    count: 1,
                    composition: 'one cat centred in the frame with generous white space around it, whole body visible, plain white background',
                    mustInclude: [
                      'exactly one cat',
                      'the animal must read unmistakably as a plain domestic cat so the child names it "cat" and segments /k/ /a/ /t/',
                      'a clearly visible tail, whiskers and pointed ears so it cannot be mistaken for a dog or a rabbit',
                    ],
                    mustAvoid: ['a kitten in a basket or any prop that would prompt a different word', 'a collar, bow or hat', 'background scenery', 'more than one animal'],
                    aspect: '1:1',
                    altText: 'A cat',
                  },
                  {
                    id: 'img-sun-cvc',
                    slot: 'Picture 2 — sun',
                    purpose:
                      'A three-phoneme word beginning with a continuous sound, which the child can stretch and hold. Stretchable first sounds are much easier to isolate than stop sounds, so this item is the confidence-builder in the middle of the set.',
                    subject: 'a single simple sun with a round centre and straight triangular rays — an object whose English name is the three-phoneme word "sun", /s/ /u/ /n/',
                    count: 1,
                    composition: 'one sun centred in the frame with clear white space around it, rays evenly spaced all the way round, plain white background',
                    mustInclude: [
                      'exactly one sun',
                      'the object must read unmistakably as a sun so the child names it "sun" and segments /s/ /u/ /n/',
                      'a clearly round centre with distinct separated rays',
                    ],
                    mustAvoid: ['a face drawn on the sun', 'clouds, sky, landscape or horizon', 'a sunset or half-sun that might be named "sunset"', 'sparkles or glow effects'],
                    aspect: '1:1',
                    altText: 'A sun',
                  },
                  {
                    id: 'img-pig-cvc',
                    slot: 'Picture 3 — pig',
                    purpose:
                      'A three-phoneme word whose medial vowel /i/ is the hardest position for a five-year-old to hear. Placing it last means the child meets the difficulty once the routine is already running.',
                    subject: 'a single simple cartoon pig standing in side view — an object whose English name is the three-phoneme word "pig", /p/ /i/ /g/',
                    count: 1,
                    composition: 'one pig centred in the frame with generous white space around it, whole body and all four legs visible, plain white background',
                    mustInclude: [
                      'exactly one pig',
                      'the animal must read unmistakably as a pig so the child names it "pig" and segments /p/ /i/ /g/',
                      'a clearly visible snout and curly tail',
                    ],
                    mustAvoid: ['mud, a farm, a sty or a fence', 'a piglet shown with a parent, which might prompt the word "piglet"', 'clothing or props', 'more than one animal'],
                    aspect: '1:1',
                    altText: 'A pig',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Robot Talk',
                directions: 'I will talk like the robot. Listen to the sounds, push them together, and tell me the word. Then draw it in the box.',
                layout: 'column',
                writingLines: 0,
                items: [
                  'Robot says: /m/ … /o/ … /p/',
                  'Robot says: /b/ … /u/ … /s/',
                  'Robot says: /l/ … /e/ … /g/',
                  'Robot says: /f/ … /a/ … /n/',
                ],
              },
              {
                id: 's3',
                title: 'Two Sounds or Three?',
                directions: 'Some words are shorter than they look. Say each picture name slowly and count the sounds. Write the number.',
                layout: 'row',
                images: [
                  {
                    id: 'img-bee-two-phoneme',
                    slot: 'Two-sound word — bee',
                    purpose:
                      'Breaks the habit of answering "three" to every question. A two-phoneme word forces the child to actually listen rather than apply the pattern of the previous section.',
                    subject: 'a single simple cartoon bee in side view with two wings and striped body — an object whose English name is the two-phoneme word "bee", /b/ /ee/',
                    count: 1,
                    composition: 'one bee centred in the frame with clear white space around it, wings and stripes clearly visible, plain white background',
                    mustInclude: [
                      'exactly one bee',
                      'the insect must read unmistakably as a bee so the child names it "bee" and segments just /b/ /ee/',
                      'clear body stripes and two visible wings',
                    ],
                    mustAvoid: ['a flower, hive, honey pot or any prop that would prompt a longer word', 'a swarm or second insect', 'a flight path or motion lines', 'background scenery'],
                    aspect: '1:1',
                    altText: 'A bee',
                  },
                  {
                    id: 'img-hat-three-phoneme',
                    slot: 'Three-sound word — hat',
                    purpose:
                      'Sits directly beside the two-sound item so the contrast is immediate. Together the pair tests whether the child is counting sounds or guessing a fixed number.',
                    subject: 'a single simple sun hat with a round crown and a brim, shown on its own — an object whose English name is the three-phoneme word "hat", /h/ /a/ /t/',
                    count: 1,
                    composition: 'one hat centred in the frame in side view with clear white space around it, plain white background',
                    mustInclude: [
                      'exactly one hat',
                      'the object must read unmistakably as a plain hat so the child names it "hat" and segments /h/ /a/ /t/',
                      'a simple crown and brim with no decoration',
                    ],
                    mustAvoid: ['a head or person wearing the hat', 'a cap with a peak, which a child may name "cap"', 'ribbons, flowers or badges', 'background scenery'],
                    aspect: '1:1',
                    altText: 'A hat',
                  },
                ],
              },
            ],
            answerKey: [
              'Sound boxes: cat = 3 sounds, sun = 3 sounds, pig = 3 sounds. All three boxes coloured each time.',
              'Robot Talk: mop, bus, leg, fan. Drawings need only be recognisable to the child.',
              'Two or three: bee = 2 sounds, hat = 3 sounds.',
            ],
          },
          assessment: {
            successCriteria: [
              'Blends three separately spoken phonemes into a word without a model.',
              'Segments a spoken CVC word into its three phonemes, one push per sound.',
              'States the number of sounds in a short word, including when it is not three.',
            ],
            exitTicket:
              'Say "/l/ /a/ /p/" and ask for the word. Then say "lap" and ask for the sounds. Both directions matter — plenty of children can blend but not segment, and segmenting is the one that predicts spelling.',
            rubric: [
              { level: 'emerging', descriptor: 'Blends onset and rime (/k/ … at) but cannot hold three separate phonemes in mind; repeats the last sound back instead of the word.' },
              { level: 'developing', descriptor: 'Blends three phonemes reliably and segments the first and last sound, but misses or guesses the medial vowel.' },
              { level: 'secure', descriptor: 'Blends and segments three-phoneme words in both directions, and correctly counts words that have two or four sounds.' },
            ],
          },
          differentiation: {
            support: [
              'Drop to two-phoneme words first: up, at, in, on, me. Two is genuinely easier and it is not a lesser skill, just an earlier one.',
              'Split the word at the onset only — /k/ … "at" — before splitting all three. Onset-rime is the natural halfway house.',
              'Use words that start with stretchy sounds (/m/, /s/, /f/, /l/, /n/) so the first phoneme can be held for a full second.',
            ],
            extension: [
              'Move to four-phoneme words with blends: stop, flag, jump, hand.',
              'Play phoneme substitution: "Say cat. Now change the /k/ to /h/. What have you got?"',
              'Ask for the sound in a named position: "What is the last sound in bus? What is the middle sound in hop?"',
            ],
            language: [
              'Some phonemes do not exist in every language. If a sound is genuinely not in the child’s first language, choose different practice words rather than drilling a contrast their ear has not been built for.',
              'Segmenting in the home language works just as well for building the underlying skill. The awareness transfers even when the specific sounds do not.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Sounds have "uh" on the end — the first sound in bat is "buh".',
              looksLike: 'The child blends /b/ /a/ /t/ as "buh-a-tuh" and cannot make it collapse into a word.',
              correction: 'This one is almost always inherited from the adult. Clip your own consonants hard: /b/ is a puff, not a syllable. Whisper the sound if that helps you shorten it.',
            },
            {
              misconception: 'The number of sounds equals the number of letters.',
              looksLike: 'The child insists "ship" has four sounds because they have seen it written.',
              correction: 'Keep letters off the table entirely in this unit. If the child brings up spelling, praise it and say "that is for our letters lesson — right now we are only using ears".',
            },
            {
              misconception: 'Segmenting means saying the word slowly, in one long stretch.',
              looksLike: 'Asked to segment "sun", the child says "ssssuuunnn" as a single unbroken sound.',
              correction: 'That is actually good progress — accept it warmly, then add the pushes. The counters break the stretch into separate pieces.',
            },
          ],
          homeExtension: [
            'Talk like the robot at transitions: "Time to get your /k/ /oa/ /t/." It costs no extra time and gives dozens of reps a week.',
            'In the bath, segment the names of the toys. Wet fingers on the side of the tub work perfectly well as sound boxes.',
            'When your child says a word you love, say it back in sounds and let them blend it. Make it a joke between you, not a drill.',
          ],
          teacherNotes:
            'If you only have time to do one thing properly this year, do this. Phonemic segmentation is the strongest single predictor of how easily a child will learn to read, and unlike vocabulary or background knowledge it can be built from nothing in a few weeks of five-minute sessions. Be honest with yourself about your own pronunciation of the sounds — a recording of yourself saying /b/ /d/ /g/ /p/ /t/ is worth the mild embarrassment.',
        },
        {
          id: 'k-ela-u2-l5',
          unitId: 'k-ela-u2',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'The Sound Hiding in the Middle',
          essentialQuestion: 'What is the sound right in the middle of a word?',
          summary:
            'Medial vowel isolation, the hardest of the three phoneme positions. Uses sound boxes with the first and last counters already placed so only the middle is in question.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.2.D', framework: 'CCSS-ELA', text: 'Isolate and pronounce the initial, medial vowel and final sounds (phonemes) in three-phoneme (CVC) words.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.2.E', framework: 'CCSS-ELA', text: 'Add or substitute individual sounds (phonemes) in simple one-syllable words to make new words.' },
          ],
          objectives: ['I can say the middle sound in a three-sound word.', 'I can swap the middle sound to make a new word.'],
          vocabulary: [
            { term: 'middle', definition: 'In between the first and the last.' },
            { term: 'swap', definition: 'To take one out and put another one in.' },
          ],
          materials: ['Three counters, one in a different colour for the middle', 'The sound box strip from lesson 4'],
          prep: ['Prepare word chains where only the vowel changes: hat/hit/hot, pin/pan/pen.'],
          script: [],
          worksheet: { id: 'k-ela-u2-l5-ws', title: 'The Middle Sound', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Isolates the medial vowel in a spoken CVC word.', 'Produces a new word when the vowel is swapped.'],
            exitTicket: 'Say "hop". Ask for the middle sound. Then ask what it becomes if the middle changes to /i/.',
          },
          differentiation: {
            support: ['Place the first and last counters yourself so only the middle is unknown.'],
            extension: ['Run a five-word vowel chain and have the child predict the next word before you say it.'],
          },
          misconceptions: [
            {
              misconception: 'The middle sound is whichever sound is easiest to hear.',
              looksLike: 'Asked for the middle sound in "map", the child answers /m/.',
              correction: 'Push all three counters, cover the outer two with your hands, and say the word again slowly.',
            },
          ],
          homeExtension: ['Play silly-word swap in the car: "What if cat had an /o/ in the middle? Cot!"'],
        },
      ],
    },
    /* ============================================================ UNIT 3 */
    {
      id: 'k-ela-u3',
      gradeId: 'k',
      subjectId: 'ela',
      sequence: 3,
      title: 'Every Letter Makes a Sound',
      bigIdea:
        'A letter is a picture of a sound. Once you know which sound belongs to which letter, the marks on the page start telling you what to say.',
      description:
        'Letter-sound correspondences for all twenty-six letters, taught sound-first: the child already owns the sound from Unit 2, and the letter is introduced as the way to write it down. Letters arrive in a useful order rather than alphabetical order, so that real words can be built within the first fortnight. Upper and lower case are taught together as two costumes for the same sound.',
      weeks: 8,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RF.K.1.D', framework: 'CCSS-ELA', text: 'Recognise and name all upper- and lowercase letters of the alphabet.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.3', framework: 'CCSS-ELA', text: 'Know and apply grade-level phonics and word analysis skills in decoding words.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.3.A', framework: 'CCSS-ELA', text: 'Demonstrate basic knowledge of one-to-one letter-sound correspondences by producing the primary sound or many of the most frequent sounds for each consonant.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.3.B', framework: 'CCSS-ELA', text: 'Associate the long and short sounds with the common spellings (graphemes) for the five major vowels.' },
        { code: 'CCSS.ELA-LITERACY.L.K.1.A', framework: 'CCSS-ELA', text: 'Print many upper- and lowercase letters.' },
      ],
      lessonTitles: [
        'M Says /m/',
        'S, A, T and P: The First Sound Team',
        'Big Letter, Little Letter, Same Sound',
        'The Five Vowels and Their Short Sounds',
        'Letters That Look Alike: b, d, p and q',
        'A Sound for Every Letter: All Twenty-Six',
      ],
      performanceTask:
        'The Sound Wall: over the unit the child adds one card per letter to a wall chart, each showing the letter they wrote themselves and a picture they chose whose name starts with that sound. Completing the wall is the assessment.',
      lessons: [
        /* ---------------------------------------------------- L1 authored */
        {
          id: 'k-ela-u3-l1',
          unitId: 'k-ela-u3',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 1,
          status: 'authored',
          title: 'M Says /m/',
          essentialQuestion: 'How do I write down the sound /m/?',
          summary:
            'The first letter-sound pairing of the year, and the template for the twenty-five that follow. Sound first, then the letter as the way to record it, then the shape written in the air, in the sand and on the page. M is chosen first because it can be held for a long time, it is easy to form, and it is impossible to confuse with any other letter.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.3.A', framework: 'CCSS-ELA', text: 'Demonstrate basic knowledge of one-to-one letter-sound correspondences by producing the primary sound or many of the most frequent sounds for each consonant.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.1.D', framework: 'CCSS-ELA', text: 'Recognise and name all upper- and lowercase letters of the alphabet.' },
            { code: 'CCSS.ELA-LITERACY.L.K.1.A', framework: 'CCSS-ELA', text: 'Print many upper- and lowercase letters.' },
          ],
          objectives: [
            'I can make the /m/ sound and hold it.',
            'I know the letter m is how we write the sound /m/.',
            'I can hear whether a word starts with /m/.',
            'I can write M and m.',
          ],
          vocabulary: [
            { term: 'letter', definition: 'A mark we write to show a sound.', example: 'The letter m shows the /m/ sound.' },
            { term: 'sound', definition: 'What your mouth does, not what the letter is called.', example: 'The letter m is called "em" but it says /m/.' },
            { term: 'capital', definition: 'The big version of a letter.', example: 'M is the capital.' },
            { term: 'lowercase', definition: 'The small everyday version of a letter.', example: 'm is lowercase.' },
          ],
          materials: [
            'A tray with a thin layer of salt, sand, flour or shaving foam',
            'A crayon or chunky pencil',
            'The printed worksheet',
            'Three or four household objects starting with /m/ — a mug, a mat, a magnet, some milk',
            'Two or three objects that clearly do not — a fork, a sock, a book',
          ],
          prep: [
            'Practise the sound: /mmmmm/ with your lips together, humming. It is not "muh". You should be able to hold it until you run out of breath.',
            'Hide the /m/ objects and the non-/m/ objects together in a bag.',
            'Spread the salt or foam in the tray now — doing it mid-lesson loses the child.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Delicious Sound',
              minutes: 4,
              say: [
                'I am thinking about my favourite food and my mouth is making a noise all by itself. Listen.',
                'Mmmmmmmm.',
                'Do it with me. Lips together. Mmmmmmm. It tickles, doesn’t it?',
                'Now here is the interesting bit. Can you still say it with your mouth open? Try.',
                'You cannot! Your lips have to be shut. That sound only comes out one way, and it is called /m/.',
              ],
              do: [
                'Hum the sound for a long, silly length of time. Let the child beat you at holding it.',
                'Put your fingers on your lips, then on your nose, so the child can feel the buzz.',
              ],
              studentDoes: ['Makes and holds the /m/ sound, notices that the lips must be closed.'],
              checks: [
                {
                  ask: 'What do your lips have to do to make /m/?',
                  lookFor: 'Close, press together, be shut.',
                  ifStuck: 'Hold a small mirror up and let the child watch their own mouth while they hum.',
                },
              ],
              tip: 'Naming what the mouth physically does is not a frill. Children who can feel the difference between sounds sort out /m/ and /n/ far faster than children who only hear them.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'This Is How We Write It',
              minutes: 6,
              say: [
                'Every sound has a way to write it down, so we can keep it and read it later. This is how we write /m/.',
                'Watch my finger. Down, up and over, up and over. That is m. It says /m/.',
                'It has two humps, like two little hills. Down, hump, hump.',
                'There is a big one too, for the starts of names and sentences. M. Down, in, out, down. Same sound, bigger coat.',
                'Say the sound every single time you write it. Down, hump, hump — /m/.',
              ],
              do: [
                'Write a large lowercase m in the salt tray, saying the stroke words and the sound aloud.',
                'Wipe it. Write it again. Then write the capital M.',
                'Never say the letter name in this beat. It is /m/, not "em", until the sound is automatic.',
              ],
              studentDoes: ['Traces m in the salt tray with a finger, saying /m/ each time.'],
              checks: [
                {
                  ask: 'What does this letter say?',
                  lookFor: '/m/, the sound — not "em", the name.',
                  ifStuck: 'Say "the letter is called em, but it SAYS /m/. What does it say?" Both are true; only one is useful today.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'The Mystery Bag',
              minutes: 7,
              say: [
                'There are things in this bag. Some start with /m/ and some do not. You are the judge.',
                'Pull one out. Say its name slowly. Listen to the very beginning.',
                'Mug. Mmmmug. Did you hear it? /m/ at the front. That one goes on the m pile.',
                'Now this one. Sock. Ssssock. Is that /m/? No. It goes on the other pile.',
                'Careful with this one — it is trying to trick you.',
              ],
              do: [
                'Include one deliberate near-miss: something starting with /n/, such as a napkin. /m/ and /n/ are the pair children confuse.',
                'Stretch the first sound of every word yourself before the child judges it.',
              ],
              studentDoes: ['Sorts objects by initial sound, stretching the first sound of each name.'],
              checks: [
                {
                  ask: 'Say it slowly. What is the very first sound?',
                  lookFor: 'The isolated initial phoneme, said cleanly.',
                  ifStuck: 'Say the object name and the sound in a pair — "mug, /m/" — several times, then ask again.',
                },
                {
                  ask: 'Napkin and mug — do they start the same?',
                  lookFor: 'No. If the child says yes, model the two mouth positions side by side.',
                },
              ],
              tip: 'Say every object name yourself before the child judges it. If they call the mug a "cup", the whole item becomes a nonsense question.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'The Worksheet',
              minutes: 6,
              say: [
                'First, the tracing. Say /m/ out loud every time you finish one. Down, hump, hump — /m/.',
                'Next, the pictures. I will tell you what each one is. Colour in only the ones that start with /m/.',
                'Do not colour the ones that start with a different sound, even if you love them.',
                'Last bit is the hunt: circle every m you can find in the row of letters.',
              ],
              do: [
                'Name every picture aloud before the child starts colouring. Say the name once, clearly, and do not stretch the sound for them on this section — that is the task.',
                'Watch the pencil grip and stroke direction on the tracing, not the neatness.',
              ],
              studentDoes: ['Traces M and m, colours only the /m/ pictures, and finds m among similar letters.'],
              checks: [
                { ask: 'Why did you leave that one white?', lookFor: 'Because it starts with a different sound — ideally with the actual sound named.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Ms Around the House',
              minutes: 2,
              say: [
                'Quick — find me one thing in this room that starts with /m/. Go!',
                'Brilliant. Now every time you see this letter today, you shout its sound. Not its name. Its sound.',
                'What does it say? /m/. You have got your first letter.',
              ],
              do: ['Let the child run and fetch. The movement seals a sitting-down lesson.'],
              studentDoes: ['Finds a real object beginning with /m/ and produces the sound.'],
              checks: [{ ask: 'What sound does this letter make?', lookFor: '/m/, produced instantly and cleanly.' }],
            },
          ],
          worksheet: {
            id: 'k-ela-u3-l1-ws',
            title: 'M Says /m/',
            style: 'line-art',
            prepNotes:
              'Read every picture name out loud before your child begins the colouring section — this is a listening task, and a child who names the mitten a "glove" will get it wrong for the right reason. The tracing rows go left to right; do not let the letters be drawn bottom-up, because the stroke habit set now will last for years.',
            sections: [
              {
                id: 's1',
                title: 'Trace and Say',
                directions: 'Trace each letter with your crayon. Say /m/ out loud every single time you finish one.',
                layout: 'trace',
                items: [
                  'M   M   M   M   M',
                  'm   m   m   m   m',
                  'Now write two of your own:  ____   ____',
                ],
              },
              {
                id: 's2',
                title: 'Colour the /m/ Pictures',
                directions: 'I will tell you what each picture is. Say the name slowly and listen to the first sound. Colour it in only if it starts with /m/.',
                layout: 'grid',
                images: [
                  {
                    id: 'img-m-moon',
                    slot: 'Picture 1 — moon (target /m/)',
                    purpose:
                      'A target item with a stretchable initial /m/ and a shape a five-year-old can identify at a glance. Naming reliability is everything on an initial-sound page: an ambiguous picture tests vocabulary rather than phonemic awareness.',
                    subject: 'a single simple crescent moon shown alone — an object whose English name "moon" begins with the target sound /m/',
                    count: 1,
                    composition: 'one crescent moon centred in the frame with generous white space around it, plain white background, clean bold outline',
                    mustInclude: [
                      'exactly one moon',
                      'the object must be unmistakably a moon so the child names it "moon" and hears the initial /m/ sound',
                      'a clear crescent shape with smooth outer and inner curves',
                    ],
                    mustAvoid: ['stars, clouds or a night sky, since those would prompt words that do not begin with /m/', 'a face on the moon', 'a full moon, which a child may name "circle"', 'letters or numbers'],
                    aspect: '1:1',
                    altText: 'A crescent moon',
                  },
                  {
                    id: 'img-m-mouse',
                    slot: 'Picture 2 — mouse (target /m/)',
                    purpose:
                      'A second target item, chosen because children name it instantly and consistently. Two clear targets early in the grid let the child establish the pattern before meeting a distractor.',
                    subject: 'a single simple cartoon mouse in side view with round ears and a long thin tail — an animal whose English name "mouse" begins with the target sound /m/',
                    count: 1,
                    composition: 'one mouse centred in the frame facing right, whole body and tail visible, generous white space around it, plain white background',
                    mustInclude: [
                      'exactly one mouse',
                      'the animal must be unmistakably a mouse so the child names it "mouse" and hears the initial /m/ sound',
                      'two large round ears and one long thin tail',
                    ],
                    mustAvoid: ['cheese, a mouse hole or a trap, since those would prompt other words', 'a rat-like or hamster-like body that could be named differently', 'clothing or props', 'a second animal'],
                    aspect: '1:1',
                    altText: 'A mouse',
                  },
                  {
                    id: 'img-m-mitten',
                    slot: 'Picture 3 — mitten (target /m/)',
                    purpose:
                      'The stretch target. "Mitten" is two syllables, so the child must ignore the length of the word and attend only to its first sound — a small but real generalisation from the two easy items above.',
                    subject: 'a single simple mitten with a separate thumb, shown alone — an object whose English name "mitten" begins with the target sound /m/',
                    count: 1,
                    composition: 'one mitten centred in the frame, thumb clearly separate from the main pocket, cuff at the bottom, generous white space around it, plain white background',
                    mustInclude: [
                      'exactly one mitten',
                      'the object must be unmistakably a mitten with one thumb and no separate fingers, so the child names it "mitten" and hears the initial /m/ sound',
                    ],
                    mustAvoid: ['a five-fingered glove, which the child would name "glove" and which does not begin with /m/', 'a pair of mittens', 'snow, a hand or a coat', 'patterns that obscure the thumb'],
                    aspect: '1:1',
                    altText: 'A mitten',
                  },
                  {
                    id: 'img-m-distractor-sun',
                    slot: 'Picture 4 — sun (distractor, not /m/)',
                    purpose:
                      'A distractor whose initial sound /s/ is maximally different from /m/, so a child with even a rough grasp of the target will reject it. Easy distractors keep the page from becoming discouraging.',
                    subject: 'a single simple sun with a round centre and straight triangular rays — an object whose English name "sun" begins with /s/ and must NOT begin with the target sound /m/',
                    count: 1,
                    composition: 'one sun centred in the frame with rays evenly spaced all the way round, generous white space, plain white background',
                    mustInclude: [
                      'exactly one sun',
                      'the object must be unmistakably a sun so the child names it "sun" and hears that it does not begin with /m/',
                    ],
                    mustAvoid: ['a face on the sun', 'clouds, sky or landscape', 'any object whose name begins with /m/', 'letters or numbers'],
                    aspect: '1:1',
                    altText: 'A sun',
                  },
                  {
                    id: 'img-m-distractor-net',
                    slot: 'Picture 5 — net (near-miss distractor, /n/ not /m/)',
                    purpose:
                      'The one item that genuinely discriminates. /n/ and /m/ are both nasal sounds made with a closed airway and children conflate them constantly, so a child who rejects the net has heard the sound rather than guessed the category.',
                    subject: 'a single simple butterfly net with a round hoop, mesh bag and straight handle — an object whose English name "net" begins with /n/ and must NOT begin with the target sound /m/',
                    count: 1,
                    composition: 'one net shown diagonally across the frame with the hoop and mesh at the top and the handle at the bottom, generous white space, plain white background',
                    mustInclude: [
                      'exactly one net',
                      'the object must be unmistakably a net with visible mesh, so the child names it "net" and must decide whether /n/ is the target sound',
                      'a clearly visible round hoop and straight handle',
                    ],
                    mustAvoid: ['a butterfly, fish or insect caught in the net, since that would prompt a different word', 'a football goal net', 'any object whose name begins with /m/', 'background scenery'],
                    aspect: '1:1',
                    altText: 'A butterfly net',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Hunt for the m',
                directions: 'Circle every letter m you can find. Some of the others look a bit like it, so look carefully.',
                layout: 'row',
                items: [
                  'n   m   w   m   r   n   m   h',
                  'm   n   m   u   m   w   n   m',
                ],
              },
              {
                id: 's4',
                title: 'My Own /m/ Thing',
                directions: 'Draw one thing you found in your house that starts with /m/. Then write the letter m underneath it.',
                layout: 'full',
                writingLines: 1,
              },
            ],
            answerKey: [
              'Trace and say: any recognisable M and m. Watch stroke direction rather than neatness.',
              'Colour: moon, mouse and mitten coloured. Sun and net left white.',
              'Hunt: row one has three m’s; row two has five m’s. Confusing n and m in the hunt is normal on day one.',
              'My own /m/ thing: any drawing the child can name with an initial /m/ — mug, mat, mum, milk, magnet all count.',
            ],
          },
          assessment: {
            successCriteria: [
              'Produces the /m/ sound, not the letter name, when shown the letter.',
              'Identifies whether a spoken word begins with /m/, including against an /n/ near-miss.',
              'Writes a recognisable M and m with a sensible stroke order.',
            ],
            exitTicket:
              'Show the letter m and ask "what does it say?" A child who answers "em" knows the name but not the code. Say "and what SOUND does it make?" — if the second answer comes, they have it.',
            rubric: [
              { level: 'emerging', descriptor: 'Says the letter name rather than the sound, and needs the first sound stretched for them before they can judge a word.' },
              { level: 'developing', descriptor: 'Produces /m/ on sight and sorts obvious words, but is unsure between /m/ and /n/.' },
              { level: 'secure', descriptor: 'Produces the sound instantly, discriminates /m/ from /n/, writes both cases, and spontaneously notices m in print elsewhere.' },
            ],
          },
          differentiation: {
            support: [
              'Work in the salt tray for the whole lesson and skip the pencil entirely. Motor control is not what is being assessed today.',
              'Cut the picture set down to moon and sun only. Two items with a huge sound contrast is a real success.',
              'Anchor the sound to one memorable word and use it every single time: "/m/ like mmmmilk."',
            ],
            extension: [
              'Hunt for /m/ at the end of words as well as the start: ham, drum, swim.',
              'Introduce s next in the same lesson and blend the two into "mmmm-sss" nonsense words for fun.',
              'Ask the child to write m in the air with their whole arm, eyes closed, then check it on paper.',
            ],
            language: [
              '/m/ exists in nearly every language on earth, which makes it an unusually kind starting point. Ask the child for a word in their home language that starts with /m/ and add it to the sound wall.',
              'Be explicit that the letter has a name and a sound and that they are different things. In some languages the letter name contains the sound much more transparently than in English.',
            ],
          },
          misconceptions: [
            {
              misconception: 'The letter says its name — m says "em".',
              looksLike: 'Shown m in a word, the child reads "em" and cannot make the word work.',
              correction: 'Teach the sound alone for the first weeks and only introduce names once sounds are automatic. If the name is already known, use the phrase "its name is em, its job is /m/".',
            },
            {
              misconception: '/m/ has an "uh" attached: the sound is "muh".',
              looksLike: 'The child reads "mat" as "muh-a-tuh".',
              correction: 'Hum it instead of speaking it. A hum physically cannot have a vowel on the end.',
            },
            {
              misconception: 'M and m are two different letters with two different sounds.',
              looksLike: 'The child recognises the capital on their name card but not the lowercase in a book.',
              correction: 'Always show the pair together, written side by side, and say the one sound once for both.',
            },
          ],
          homeExtension: [
            'Put a sticky note with m on the fridge and hunt for /m/ words in the kitchen all week.',
            'Write m in the steam on the bathroom mirror or in bubbles in the bath, saying the sound each time.',
            'Read the shopping list together and let the child spot every m. Print in the wild is more convincing than print on a worksheet.',
          ],
          teacherNotes:
            'This lesson is the pattern for all twenty-six. Sound, then letter, then write it, then hunt for it in real print. Two things are worth being strict about even though they feel fussy: pure sounds with no "uh", and saying the sound aloud on every single tracing repetition. Silent tracing builds handwriting and teaches nothing about reading. Roughly two letters a week for the rest of the unit is a sustainable pace; the sequence m, s, a, t, p, i, n first lets you build real words almost immediately, which matters more than alphabetical tidiness.',
        },
        {
          id: 'k-ela-u3-l2',
          unitId: 'k-ela-u3',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'S, A, T and P: The First Sound Team',
          essentialQuestion: 'How many words can I build with just four letters?',
          summary:
            'Four more letter-sounds, chosen because together with m they make sat, tap, pat, map, mat, at, am and Sam. Real words on day one is the point.',
          durationMin: 30,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.3.A', framework: 'CCSS-ELA', text: 'Demonstrate basic knowledge of one-to-one letter-sound correspondences by producing the primary sound for each consonant.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.3.B', framework: 'CCSS-ELA', text: 'Associate the long and short sounds with the common spellings for the five major vowels.' },
          ],
          objectives: ['I can say the sound for s, a, t and p.', 'I can build a real word with letter cards.'],
          vocabulary: [
            { term: 'vowel', definition: 'A letter whose sound you can sing — a, e, i, o, u.' },
            { term: 'build', definition: 'To put letters in order to make a word.' },
          ],
          materials: ['Letter cards for m, s, a, t, p', 'Salt tray', 'Worksheet'],
          prep: ['Make two copies of the a card — you will need it in the middle of most words.'],
          script: [],
          worksheet: { id: 'k-ela-u3-l2-ws', title: 'The First Sound Team', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Produces all five sounds on sight.', 'Builds at least three real words from the cards.'],
            exitTicket: 'Lay out s, a, t and ask the child to say each sound then push them together.',
          },
          differentiation: {
            support: ['Add one new letter per day instead of four in one sitting.'],
            extension: ['Add n and i and open up sit, pin, tin, nap.'],
          },
          misconceptions: [
            {
              misconception: 'Letters can go in any order and still make the word.',
              looksLike: 'The child builds "tas" and reads it as "sat".',
              correction: 'Sweep your finger under the cards left to right as you sound them out. Order is direction.',
            },
          ],
          homeExtension: ['Build one word a day on the fridge with magnetic letters.'],
        },
        {
          id: 'k-ela-u3-l3',
          unitId: 'k-ela-u3',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Big Letter, Little Letter, Same Sound',
          essentialQuestion: 'Why does the same letter have two shapes?',
          summary:
            'Upper and lowercase matching, with attention to the pairs that look nothing alike (A/a, G/g, R/r) versus the pairs that are simply resized (S/s, C/c, O/o).',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.1.D', framework: 'CCSS-ELA', text: 'Recognise and name all upper- and lowercase letters of the alphabet.' },
          ],
          objectives: ['I can match a capital letter to its lowercase partner.', 'I know both shapes say the same sound.'],
          vocabulary: [
            { term: 'capital', definition: 'The big letter, used at the start of names and sentences.' },
            { term: 'partner', definition: 'The other version of the same letter.' },
          ],
          materials: ['Two sets of letter cards, one upper and one lower', 'A muffin tin for sorting'],
          prep: ['Sort the pairs into two groups yourself: look-alikes and look-nothing-alikes. Teach them separately.'],
          script: [],
          worksheet: { id: 'k-ela-u3-l3-ws', title: 'Find the Partner', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Matches at least twelve upper- and lowercase pairs.', 'Gives the same sound for both members of a pair.'],
            exitTicket: 'Show A and ask for its little partner, then ask what sound both make.',
          },
          differentiation: {
            support: ['Start with the eight pairs that are simply the same shape resized.'],
            extension: ['Sort a jumbled name into capitals and lowercase and explain why the first letter is big.'],
          },
          misconceptions: [
            {
              misconception: 'Capital letters are for shouting or for big things.',
              looksLike: 'The child writes ELEPHANT in capitals and "ant" in lowercase.',
              correction: 'Show that capitals mark the start of a name or a sentence, not the size of the thing.',
            },
          ],
          homeExtension: ['Find the capital letter that starts each family member’s name on the post.'],
        },
        {
          id: 'k-ela-u3-l4',
          unitId: 'k-ela-u3',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'The Five Vowels and Their Short Sounds',
          essentialQuestion: 'Which letters can be in the middle of a word?',
          summary:
            'A, e, i, o and u with their short sounds, framed as the letters that hold a word together. Every CVC word the child will read this year has one of these in the middle.',
          durationMin: 30,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.3.B', framework: 'CCSS-ELA', text: 'Associate the long and short sounds with the common spellings (graphemes) for the five major vowels.' },
          ],
          objectives: ['I can say the short sound for each vowel.', 'I know every little word has a vowel in the middle.'],
          vocabulary: [
            { term: 'vowel', definition: 'One of the five letters a, e, i, o, u.' },
            { term: 'short sound', definition: 'The quick vowel sound, as in cat, bed, pig, hot, cup.' },
          ],
          materials: ['Vowel cards printed in a different colour from the consonants', 'A mirror'],
          prep: ['Print vowels in red and consonants in black. The colour cue is worth keeping all year.'],
          script: [],
          worksheet: { id: 'k-ela-u3-l4-ws', title: 'Five Vowels', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Produces all five short vowel sounds.', 'Identifies the vowel in a three-letter word.'],
            exitTicket: 'Show the word "pot" and ask which letter is the vowel and what it says.',
          },
          differentiation: {
            support: ['Teach a and i only until they are secure, then add o, then e and u.'],
            extension: ['Contrast short and long sounds with pairs like cap and cape.'],
          },
          misconceptions: [
            {
              misconception: 'The vowel sound is whatever the letter is called.',
              looksLike: 'The child reads "cat" as "cayt", using the letter name for a.',
              correction: 'Use a keyword picture for each vowel and return to it every time: a as in apple, e as in egg.',
            },
          ],
          homeExtension: ['Hunt for the red vowel in words on packets and signs.'],
        },
        {
          id: 'k-ela-u3-l5',
          unitId: 'k-ela-u3',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Letters That Look Alike: b, d, p and q',
          essentialQuestion: 'How do I tell b and d apart?',
          summary:
            'Direct instruction on the reversal-prone letters, taught in contrasting pairs with a physical hand cue rather than left as a mystery to be grown out of.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.1.D', framework: 'CCSS-ELA', text: 'Recognise and name all upper- and lowercase letters of the alphabet.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.3.A', framework: 'CCSS-ELA', text: 'Demonstrate basic knowledge of one-to-one letter-sound correspondences for each consonant.' },
          ],
          objectives: ['I can tell b from d using my hands.', 'I can say the right sound for b, d and p.'],
          vocabulary: [
            { term: 'stick', definition: 'The tall straight line part of the letter.' },
            { term: 'ball', definition: 'The round part of the letter.' },
          ],
          materials: ['Letter cards', 'A printed hand cue card'],
          prep: ['Learn the two-fist cue yourself: left fist with thumb up makes b, right fist with thumb up makes d, and together they spell "bed".'],
          script: [],
          worksheet: { id: 'k-ela-u3-l5-ws', title: 'b or d?', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Distinguishes b and d in isolation and inside words.', 'Uses a self-check strategy without being reminded.'],
            exitTicket: 'Show b and d side by side and ask which is which and how they know.',
          },
          differentiation: {
            support: ['Teach b thoroughly for a fortnight before d is introduced at all. Separation in time beats any mnemonic.'],
            extension: ['Add p and q and sort all four by which way the ball faces and whether the stick goes up or down.'],
          },
          misconceptions: [
            {
              misconception: 'Reversing b and d means something is wrong with the child.',
              looksLike: 'A five-year-old writes "dall" for "ball" and an adult panics.',
              correction: 'Reversals are developmentally normal well into Year 1. Teach the cue, keep it light, and only investigate if they persist past seven.',
            },
          ],
          homeExtension: ['Make the bed cue with your hands whenever a b or d appears in a bedtime book.'],
        },
        {
          id: 'k-ela-u3-l6',
          unitId: 'k-ela-u3',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 6,
          status: 'outline',
          title: 'A Sound for Every Letter: All Twenty-Six',
          essentialQuestion: 'Do I know a sound for every single letter now?',
          summary:
            'Consolidation and audit. The child works through the full alphabet, one letter at a time, and you keep an honest record of which sounds are automatic, which are slow and which are missing.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.1.D', framework: 'CCSS-ELA', text: 'Recognise and name all upper- and lowercase letters of the alphabet.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.3.A', framework: 'CCSS-ELA', text: 'Demonstrate basic knowledge of one-to-one letter-sound correspondences by producing the primary sound or many of the most frequent sounds for each consonant.' },
          ],
          objectives: ['I can say a sound for every letter of the alphabet.', 'I can name the letters I still need to practise.'],
          vocabulary: [
            { term: 'alphabet', definition: 'All twenty-six letters together.' },
            { term: 'automatic', definition: 'So fast you do not have to think.' },
          ],
          materials: ['A full set of twenty-six letter cards', 'A tick-list to record results'],
          prep: ['Shuffle the cards. Alphabetical order lets the child recite instead of recognise.'],
          script: [],
          worksheet: { id: 'k-ela-u3-l6-ws', title: 'All Twenty-Six', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Produces a correct sound for at least twenty of the twenty-six letters within three seconds each.'],
            exitTicket: 'Flash ten shuffled cards. Three seconds each. Record hesitations as well as errors.',
          },
          differentiation: {
            support: ['Work in sets of five known letters plus one new one, and keep the known ones in for the confidence.'],
            extension: ['Add the second sounds of c and g, and the fact that y does two jobs.'],
          },
          misconceptions: [
            {
              misconception: 'Reciting the alphabet song means knowing the letters.',
              looksLike: 'The child sings the song fluently but cannot name a card shown out of order.',
              correction: 'Always assess with shuffled cards. The song is a sequence, not knowledge of the symbols.',
            },
          ],
          homeExtension: ['Keep the tick-list on the fridge and retest the shaky five letters once a week.'],
        },
      ],
    },
    /* ============================================================ UNIT 4 */
    {
      id: 'k-ela-u4',
      gradeId: 'k',
      subjectId: 'ela',
      sequence: 4,
      title: 'Blending Sounds into Words',
      bigIdea:
        'Reading a word is not remembering it. It is saying each letter’s sound in order and letting your mouth discover the word.',
      description:
        'The two unit-two and unit-three skills finally meet: the child sounds out a printed word and blends it. Alongside decodable CVC words, a small set of high-frequency words is taught — some of them regular, some genuinely irregular — so that real sentences become readable within weeks. The success criterion for the whole unit is a child who attacks an unknown word instead of waiting to be told.',
      weeks: 7,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RF.K.3.A', framework: 'CCSS-ELA', text: 'Demonstrate basic knowledge of one-to-one letter-sound correspondences by producing the primary sound or many of the most frequent sounds for each consonant.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.3.B', framework: 'CCSS-ELA', text: 'Associate the long and short sounds with the common spellings (graphemes) for the five major vowels.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.3.C', framework: 'CCSS-ELA', text: 'Read common high-frequency words by sight (e.g. the, of, to, you, she, my, is, are, do, does).' },
        { code: 'CCSS.ELA-LITERACY.RF.K.3.D', framework: 'CCSS-ELA', text: 'Distinguish between similarly spelled words by identifying the sounds of the letters that differ.' },
        { code: 'CCSS.ELA-LITERACY.RF.K.4', framework: 'CCSS-ELA', text: 'Read emergent-reader texts with purpose and understanding.' },
      ],
      lessonTitles: [
        'Sound by Sound: Reading Your First Word',
        'Blending Without Stopping',
        'Change One Sound, Change the Word',
        'Words We Know by Heart: the, and, I, see',
        'More Heart Words: a, to, my, like',
        'Reading a Whole Little Book',
      ],
      performanceTask:
        'The First Read: the child reads a four-page decodable book aloud to a listener of their choosing — a grandparent on the phone, a dog, a stuffed rabbit — sounding out the CVC words and reading the heart words on sight.',
      lessons: [
        {
          id: 'k-ela-u4-l1',
          unitId: 'k-ela-u4',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Sound by Sound: Reading Your First Word',
          essentialQuestion: 'What do I do when I see a word I have never seen before?',
          summary:
            'The first decoding routine: touch each letter, say its sound, then sweep and blend. Uses three-letter words built only from letters the child already owns.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.3.A', framework: 'CCSS-ELA', text: 'Demonstrate basic knowledge of one-to-one letter-sound correspondences for each consonant.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.2.C', framework: 'CCSS-ELA', text: 'Blend and segment onsets and rimes of single-syllable spoken words.' },
          ],
          objectives: ['I can touch each letter and say its sound.', 'I can sweep my finger under the word and say it fast.'],
          vocabulary: [
            { term: 'sound out', definition: 'To say each letter’s sound in order.' },
            { term: 'sweep', definition: 'To run your finger under the whole word while you say it fast.' },
          ],
          materials: ['Letter cards for m, s, a, t, p', 'A strip of card to write words on'],
          prep: ['Write four words in advance: mat, sat, tap, Sam. Only use letters already taught.'],
          script: [],
          worksheet: { id: 'k-ela-u4-l1-ws', title: 'Sound It Out', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Sounds out and blends at least two CVC words made from known letters.'],
            exitTicket: 'Write "map" and watch. The finger touching each letter matters as much as the answer.',
          },
          differentiation: {
            support: ['Say the first two sounds for the child and let them supply only the last.'],
            extension: ['Move to four-letter words with a final blend: mast, past.'],
          },
          misconceptions: [
            {
              misconception: 'Reading means guessing from the picture or the first letter.',
              looksLike: 'Shown "mat" next to a picture of a rug, the child says "rug".',
              correction: 'Cover the picture. The word has to carry the load or the strategy never develops.',
            },
          ],
          homeExtension: ['Write one word a day on a sticky note and leave it where the child will find it.'],
        },

        /* ---------------------------------------------------- L2 authored */
        {
          id: 'k-ela-u4-l2',
          unitId: 'k-ela-u4',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 2,
          status: 'authored',
          title: 'Blending Without Stopping',
          essentialQuestion: 'How do I turn the separate sounds into a smooth, whole word?',
          summary:
            'Fixes the most common decoding failure in kindergarten: a child who correctly produces /k/ /a/ /t/ and then cannot say "cat". Continuous blending — sliding from one sound straight into the next without a gap — solves it, and it is a technique the adult has to model before the child can copy it.',
          durationMin: 30,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.3.A', framework: 'CCSS-ELA', text: 'Demonstrate basic knowledge of one-to-one letter-sound correspondences by producing the primary sound or many of the most frequent sounds for each consonant.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.3.B', framework: 'CCSS-ELA', text: 'Associate the long and short sounds with the common spellings (graphemes) for the five major vowels.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.2.D', framework: 'CCSS-ELA', text: 'Isolate and pronounce the initial, medial vowel and final sounds (phonemes) in three-phoneme (CVC) words.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.4', framework: 'CCSS-ELA', text: 'Read emergent-reader texts with purpose and understanding.' },
          ],
          objectives: [
            'I can slide from one sound to the next without stopping.',
            'I can read a three-letter word and say it as one whole word.',
            'I can check my word makes sense by picturing it.',
          ],
          vocabulary: [
            { term: 'blend', definition: 'To slide the sounds together so they turn into a word.', example: 'sssaaat becomes sat.' },
            { term: 'stretch', definition: 'To hold a sound long instead of saying it quickly.', example: 'Stretch the /s/: ssssss.' },
            { term: 'decode', definition: 'To work out a word from its letters.', example: 'I decoded "pig" all by myself.' },
          ],
          materials: [
            'The printed worksheet',
            'Word cards: cat, pig, bus, hen, cap, cup, written large',
            'A pencil or lolly stick to sweep under the words',
            'A crayon',
          ],
          prep: [
            'Practise the slide yourself on the word "sat": ssssaaaat, with no gap at all between the sounds. If you hear a click between the letters, slow down and try again — you cannot teach what you cannot do.',
            'Write the six word cards in large plain lowercase letters.',
            'Have the pictures on the worksheet named in your head so you do not fumble mid-lesson.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'Why the Word Falls Apart',
              minutes: 5,
              say: [
                'Watch me read this word and tell me what goes wrong. Ready?',
                '/s/ … /a/ … /t/. Hmm. /s/ … /a/ … /t/. I still do not know what it says!',
                'What is my problem? I said all the right sounds and I still cannot hear the word.',
                'It is the gaps. I keep stopping in between. Watch what happens if I never stop.',
                'Ssssaaaat. Sat! There it is. The word was hiding in the gaps.',
              ],
              do: [
                'Do the broken version first, with theatrical frustration. Let the child sit with the failure for a moment.',
                'Then do the continuous slide, running your finger smoothly under the letters as you say it.',
              ],
              studentDoes: ['Notices the gaps are the problem and hears the word emerge from the slide.'],
              checks: [
                {
                  ask: 'What did I do differently the second time?',
                  lookFor: 'You did not stop / you joined them up / you said it slowly all in one go.',
                  ifStuck: 'Do both versions back to back twice more. The contrast is what teaches; do not explain it in words.',
                },
              ],
              tip: 'This is the moment where most children go from "sounds out but cannot read" to "reads". If it lands, the rest of the lesson is practice.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'The Slide and the Sweep',
              minutes: 6,
              say: [
                'Here is the rule. Your finger and your voice go at the same speed, and neither one stops.',
                'Watch my finger on the word "pig". It slides under the p and my voice says /p/. It keeps going under the i and my voice says /iiii/. Under the g: /g/.',
                'Ppiiig. Pig!',
                'Now the sweep. Once I have slid through it, I zoom my finger under the whole word and say it at normal speed. Pig.',
                'Slide, then sweep. Every time.',
              ],
              do: [
                'Model on three words: pig, cat, bus. Keep the finger moving continuously — a stopped finger teaches a stopped voice.',
                'On the sweep, move fast and say the word at conversational speed.',
              ],
              studentDoes: ['Watches the finger, then joins in on the third word.'],
              checks: [
                {
                  ask: 'What are the two moves?',
                  lookFor: 'Slide, then sweep.',
                  ifStuck: 'Name them again while doing them, and have the child do the finger while you do the voice.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Your Finger, Your Voice',
              minutes: 8,
              say: [
                'Your turn. Your finger, your voice, no stopping.',
                'Here is the word. Slide.',
                'Hen! Now sweep it and say it like a normal person.',
                'This next one has a bumpy start. /b/ cannot be stretched — it is a quick sound. So do the /b/ fast and then get to the /u/ as quickly as you can. Buuusss. Bus.',
                'Last one. And when you have said it, tell me what it means, because a word you cannot picture is probably not the right word.',
              ],
              do: [
                'Work through hen, bus, cat, pig in that order. Start with the stretchy /h/ and save the stop-sound /b/ for second.',
                'If the child stalls between sounds, hum the vowel for them to land on rather than saying the word.',
                'After every successful word, ask what it means. Decoding without meaning is a habit worth heading off now.',
              ],
              studentDoes: ['Slides and sweeps each word card, then says what the word means.'],
              checks: [
                {
                  ask: 'Say it again without any gaps.',
                  lookFor: 'A continuous slide producing a recognisable word.',
                  ifStuck: 'Split it in two instead of three: /h/ … "en". Onset and rime is a smaller jump and often unlocks it immediately.',
                },
                {
                  ask: 'What is a hen? Show me with your hands.',
                  lookFor: 'Any evidence the decoded word connected to meaning.',
                },
              ],
              tip: 'When a child produces the three sounds but not the word, do not tell them the word. Repeat the sounds faster and closer together yourself, then hand it straight back. Telling them removes the very move they need to practise.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Read and Match',
              minutes: 8,
              say: [
                'On this page there are words and pictures. Read the word first — do not look at the pictures yet.',
                'Slide, sweep, then find the picture it goes with and draw a line.',
                'The last two are sneaky. They are almost the same word. Only the middle sound is different, so read carefully.',
                'If you look at the picture first you will get it right and learn nothing. Word first.',
              ],
              do: [
                'Genuinely cover the picture column with a sheet of paper while the child decodes each word. Uncover it only to match.',
                'Note which words needed a second attempt; those are tomorrow’s warm-up.',
              ],
              studentDoes: ['Decodes each word, then matches it to its picture, including a minimal pair.'],
              checks: [
                { ask: 'How do you know that is cup and not cap?', lookFor: 'Reference to the middle letter and its sound, not the picture.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'One Brand New Word',
              minutes: 3,
              say: [
                'Last thing. I am going to write a word you have definitely never read before.',
                'You do not need me. Slide. Sweep.',
                'Jam! You read a brand new word with nobody helping you. That is the whole job of a reader.',
              ],
              do: ['Write a word using only known letters that has not appeared in the lesson: jam, wig, log, mud.'],
              studentDoes: ['Decodes an unseen word independently.'],
              checks: [{ ask: 'Did I tell you that word?', lookFor: 'No — the child recognising their own independence is the point.' }],
            },
          ],
          worksheet: {
            id: 'k-ela-u4-l2-ws',
            title: 'Slide It, Sweep It, Read It',
            style: 'line-art',
            prepNotes:
              'Cover the picture column with a folded sheet of paper while your child decodes each word, and uncover it only for the matching. If the pictures are visible the child will match by guessing and you will learn nothing about their decoding. The final pair, cap and cup, differ by one letter on purpose.',
            sections: [
              {
                id: 's1',
                title: 'Read the Word, Find the Picture',
                directions: 'Read each word first. Slide your finger under it, then sweep. Now draw a line to the picture it goes with.',
                layout: 'split',
                items: ['cat', 'pig', 'bus'],
                images: [
                  {
                    id: 'img-blend-cat',
                    slot: 'Match picture A — cat',
                    purpose:
                      'A decodable CVC target with two stop consonants around a short /a/. The picture exists only to confirm meaning after decoding, so it must be unambiguous enough that a correct decode maps to it instantly and a wrong decode clearly does not.',
                    subject: 'a single simple cartoon cat sitting upright in side view — the referent of the three-letter decodable word "cat"',
                    count: 1,
                    composition: 'one cat centred in its own box with generous white space, whole body visible, plain white background',
                    mustInclude: ['exactly one cat', 'clearly visible whiskers, pointed ears and a tail so the animal is named "cat" and not "kitty" or "pet"'],
                    mustAvoid: ['a basket, cushion, bowl or any prop', 'a collar or bow', 'a kitten paired with an adult cat', 'background scenery'],
                    aspect: '1:1',
                    altText: 'A cat',
                  },
                  {
                    id: 'img-blend-pig',
                    slot: 'Match picture B — pig',
                    purpose:
                      'The short /i/ target. Children who default to /e/ in the medial position will decode this as "peg", and the mismatch with the picture is the feedback that catches it.',
                    subject: 'a single simple cartoon pig standing in side view — the referent of the three-letter decodable word "pig"',
                    count: 1,
                    composition: 'one pig centred in its own box with generous white space, all four legs and the whole body visible, plain white background',
                    mustInclude: ['exactly one pig', 'a clearly visible round snout and curly tail so the animal is named "pig"'],
                    mustAvoid: ['mud, a trough, a farmyard or a fence', 'more than one animal', 'clothing or props'],
                    aspect: '1:1',
                    altText: 'A pig',
                  },
                  {
                    id: 'img-blend-bus',
                    slot: 'Match picture C — bus',
                    purpose:
                      'The short /u/ target, and the only word on the page beginning with a stop consonant that cannot be stretched. Its presence forces the child to use the quick-then-slide technique taught in the guided beat.',
                    subject: 'a single simple side-view cartoon bus with square windows and two wheels visible — the referent of the three-letter decodable word "bus"',
                    count: 1,
                    composition: 'one bus centred in its own box in flat side view facing right, generous white space around it, plain white background',
                    mustInclude: ['exactly one bus', 'a long boxy body with a row of square windows and two visible wheels so the vehicle is named "bus" and not "van" or "car"'],
                    mustAvoid: ['any writing, destination board, route number or lettering on the bus', 'a road, bus stop, passengers or background', 'a double-decker, which a child may name differently'],
                    aspect: '1:1',
                    altText: 'A bus',
                  },
                ],
              },
              {
                id: 's2',
                title: 'Change One Sound',
                directions: 'Read the first word. Then read the next one. Only one letter changed! Say both words out loud and tell someone what changed.',
                layout: 'column',
                items: [
                  'cat  →  cot  →  cut',
                  'pig  →  pin  →  pit',
                  'hen  →  hut  →  hat',
                  'map  →  mop  →  mob',
                ],
              },
              {
                id: 's3',
                title: 'Careful! These Two Are Nearly the Same',
                directions: 'Read each word slowly. Only the middle sound is different. Tick the picture that matches each word.',
                layout: 'split',
                items: ['cap', 'cup'],
                images: [
                  {
                    id: 'img-minimal-cap',
                    slot: 'Minimal pair A — cap',
                    purpose:
                      'Half of a medial-vowel minimal pair. Choosing between cap and cup is impossible by guessing, so this item isolates whether the child is actually reading the middle letter rather than the outer two.',
                    subject: 'a single simple baseball cap in side view with a curved crown and a forward peak — the referent of the three-letter decodable word "cap"',
                    count: 1,
                    composition: 'one cap centred in its own box in plain side view facing right, peak clearly horizontal, generous white space, plain white background',
                    mustInclude: [
                      'exactly one cap',
                      'a clearly forward-pointing peak so the object is named "cap" and cannot be confused with the brimmed "hat" used elsewhere in the course',
                    ],
                    mustAvoid: ['a head or person wearing it', 'a logo, badge, letter or emblem on the front', 'a brim all the way round, which would make it a hat', 'background scenery'],
                    aspect: '1:1',
                    altText: 'A baseball cap',
                  },
                  {
                    id: 'img-minimal-cup',
                    slot: 'Minimal pair B — cup',
                    purpose:
                      'The other half of the pair. It must sit beside the cap at the same size and weight so nothing but the decoded vowel can distinguish them.',
                    subject: 'a single simple plain drinking cup with one side handle, shown in side view — the referent of the three-letter decodable word "cup"',
                    count: 1,
                    composition: 'one cup centred in its own box in flat side view with the handle on the right, generous white space, plain white background',
                    mustInclude: [
                      'exactly one cup',
                      'a single clearly visible handle and a plain open top so the object is named "cup" and not "glass", "mug of tea" or "bowl"',
                    ],
                    mustAvoid: ['steam, liquid, a saucer, a spoon or a teabag label', 'patterns, letters or decoration on the cup', 'a second cup', 'background scenery'],
                    aspect: '1:1',
                    altText: 'A cup with a handle',
                  },
                ],
              },
            ],
            answerKey: [
              'Read and match: cat to picture A, pig to picture B, bus to picture C.',
              'Change one sound: the child should notice the middle letter changes in row one, the last letter in row two, and be able to read all twelve words. Nonsense pronunciations are worth rereading, not correcting outright.',
              'Minimal pair: cap ticks the baseball cap, cup ticks the cup with the handle.',
            ],
          },
          assessment: {
            successCriteria: [
              'Blends a decoded CVC word into a whole word without an adult modelling it first.',
              'Uses a continuous slide rather than stopping between sounds.',
              'Reads a minimal pair correctly by attending to the medial vowel.',
            ],
            exitTicket:
              'Write an unseen CVC word made from known letters — "jog" or "wet" — and hand it over silently. Independence is the criterion. A correct word after you supplied a sound does not count.',
            rubric: [
              { level: 'emerging', descriptor: 'Produces each letter sound correctly but cannot combine them; recites /k/ /a/ /t/ and then says "I do not know".' },
              { level: 'developing', descriptor: 'Blends successfully after an adult models the slide, and reads familiar words but stalls on unseen ones.' },
              { level: 'secure', descriptor: 'Decodes unseen CVC words independently, self-corrects when the word makes no sense, and reads minimal pairs accurately.' },
            ],
          },
          differentiation: {
            support: [
              'Use only words that begin with a stretchable sound — m, s, f, l, n, r — so the slide can genuinely be held. Stop sounds like /b/ and /t/ make continuous blending physically harder.',
              'Split the word at the onset instead of into three: /p/ … "ig". Two chunks is a smaller working-memory load and often unlocks blending overnight.',
              'Cover the last letter with your thumb, blend the first two, then reveal the last one.',
            ],
            extension: [
              'Move to four-sound words with final blends: fast, jump, hand, milk.',
              'Read a short decodable sentence rather than isolated words: "The pig sat on a mat."',
              'Introduce nonsense words — zop, vim, lut — which prove decoding rather than memory and which children usually find funny.',
            ],
            language: [
              'A child whose first language has no short /a/ or /u/ may decode perfectly and still produce a vowel that sounds wrong to you. Accept the decode; the vowel is a pronunciation matter, not a reading one.',
              'Confirm the meaning of every decoded word. Multilingual learners frequently decode words they have never heard, and the picture match is doing double duty as vocabulary teaching.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Saying the sounds is the same as reading the word.',
              looksLike: 'The child says /k/ /a/ /t/ with confidence, then looks up expectantly and waits to be told what it says.',
              correction: 'Never supply the word. Repeat the three sounds faster and closer together, then stop and wait. The blend has to happen in their mouth, not yours.',
            },
            {
              misconception: 'The picture tells you the word.',
              looksLike: 'Shown "cap" beside a picture of a cap, the child says "hat" — a perfectly sensible label for the picture and a wrong reading of the word.',
              correction: 'Cover the pictures until the word has been decoded. Praise a correct decode over a correct guess, out loud, so the child knows which one you value.',
            },
            {
              misconception: 'The middle letter does not matter much.',
              looksLike: 'Cat, cot and cut are all read as "cat" because the first and last letters match.',
              correction: 'Work in minimal pairs and make the vowel a different colour on the page for a few weeks.',
            },
          ],
          homeExtension: [
            'Write one CVC word on the bathroom mirror each morning. If it gets read, it gets wiped off.',
            'Play "sound out the shopping": find three items in the cupboard whose names are three-sound words and write them for the child to read.',
            'When your child stalls on a word in a bedtime book, count silently to five before helping. Most of the time they get there.',
          ],
          teacherNotes:
            'The gap between "knows all the letter sounds" and "can read a word" is the single most frustrating fortnight of kindergarten, for the adult far more than the child. It is a real cognitive step — holding three sounds in working memory while searching for a match — and it does not respond to being asked harder. It responds to continuous blending, onset-rime chunking and patience. Almost every child crosses it. Do not let anyone tell you the child is not ready for phonics because of it; this is exactly what phonics instruction is for.',
        },
        {
          id: 'k-ela-u4-l3',
          unitId: 'k-ela-u4',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Change One Sound, Change the Word',
          essentialQuestion: 'What happens to the word if I swap one letter?',
          summary:
            'Word chains: cat becomes cot becomes cop becomes top. Each change is one letter, which makes the alphabetic principle visible in a way single words cannot.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.3.D', framework: 'CCSS-ELA', text: 'Distinguish between similarly spelled words by identifying the sounds of the letters that differ.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.2.E', framework: 'CCSS-ELA', text: 'Add or substitute individual sounds in simple one-syllable words to make new words.' },
          ],
          objectives: ['I can change one letter and read the new word.', 'I can say which letter changed.'],
          vocabulary: [{ term: 'chain', definition: 'A line of words where each one changes by only one letter.' }],
          materials: ['Magnetic letters or letter cards', 'A metal tray'],
          prep: ['Plan the chain in advance so every step is a real word.'],
          script: [],
          worksheet: { id: 'k-ela-u4-l3-ws', title: 'Word Chains', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Reads each new word in a five-word chain.', 'Identifies which letter changed each time.'],
            exitTicket: 'Build "man", change one letter to make "mat", and ask what changed.',
          },
          differentiation: {
            support: ['Change only the last letter for the first few rounds.'],
            extension: ['Let the child drive the chain and choose the substitutions themselves.'],
          },
          misconceptions: [
            {
              misconception: 'A new word means starting from scratch.',
              looksLike: 'The child re-sounds all three letters after a single change instead of reading the new word.',
              correction: 'That is fine and even good practice — but point out the two letters that did not move.',
            },
          ],
          homeExtension: ['Do a three-word chain on the fridge each morning.'],
        },
        {
          id: 'k-ela-u4-l4',
          unitId: 'k-ela-u4',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Words We Know by Heart: the, and, I, see',
          essentialQuestion: 'Why can I not sound out the word "the"?',
          summary:
            'The first four high-frequency words, taught by mapping the sounds you can hear onto the letters and flagging only the genuinely irregular part. Not whole-word memorisation, and not pure phonics either.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.3.C', framework: 'CCSS-ELA', text: 'Read common high-frequency words by sight (e.g. the, of, to, you, she, my, is, are, do, does).' },
          ],
          objectives: ['I can read the, and, I and see straight away.', 'I know which part of the word is the tricky bit.'],
          vocabulary: [
            { term: 'heart word', definition: 'A word with a tricky part you have to learn by heart.' },
            { term: 'tricky part', definition: 'The letter that does not say what you expect.' },
          ],
          materials: ['Word cards', 'A small heart sticker or red pen to mark the tricky letters'],
          prep: ['Decide in advance which letters in each word are regular and which are not, and mark only the irregular ones.'],
          script: [],
          worksheet: { id: 'k-ela-u4-l4-ws', title: 'Heart Words', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Reads all four words within two seconds each.', 'Points to the tricky part of "the".'],
            exitTicket: 'Flash the four cards. Two seconds each. Hesitation counts as not yet.',
          },
          differentiation: {
            support: ['Two words a week, not four. Overloading heart words produces guessing.'],
            extension: ['Write a sentence using all four: "I see the cat and the pig."'],
          },
          misconceptions: [
            {
              misconception: 'Heart words are learned by looking at their shape.',
              looksLike: 'The child confuses "the" with "then" and "there" because they are the same overall shape.',
              correction: 'Map every sound to its letter and mark only the genuinely odd one. Shape reading collapses as soon as words get longer.',
            },
          ],
          homeExtension: ['Hunt for "the" on one page of a bedtime book and count how many times it appears.'],
        },
        {
          id: 'k-ela-u4-l5',
          unitId: 'k-ela-u4',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'More Heart Words: a, to, my, like',
          essentialQuestion: 'Which other words do I need to know without sounding out?',
          summary:
            'Four more high-frequency words, plus review of the previous four. Cumulative review is the whole method here — new words without review is how sight vocabulary leaks away.',
          durationMin: 20,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.3.C', framework: 'CCSS-ELA', text: 'Read common high-frequency words by sight.' },
          ],
          objectives: ['I can read eight heart words on sight.', 'I can find heart words inside a real sentence.'],
          vocabulary: [{ term: 'sight', definition: 'Straight away, without working it out.' }],
          materials: ['All eight word cards', 'A highlighter', 'A printed page of simple text'],
          prep: ['Shuffle old and new cards together. Reviewing the old ones is not optional.'],
          script: [],
          worksheet: { id: 'k-ela-u4-l5-ws', title: 'Eight Heart Words', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Reads at least seven of eight cards instantly.', 'Highlights heart words in a real sentence.'],
            exitTicket: 'Flash all eight shuffled. Record which two are slowest and start there tomorrow.',
          },
          differentiation: {
            support: ['Keep the pile at four words and rotate one in only when one is truly secure.'],
            extension: ['Add is, was, you and they.'],
          },
          misconceptions: [
            {
              misconception: 'Once a word has been learned it stays learned.',
              looksLike: 'A word read fluently last week is unrecognisable this week.',
              correction: 'Normal. Sight vocabulary needs spaced review — keep every learned card in the shuffle forever.',
            },
          ],
          homeExtension: ['Highlight every "my" and "like" on a page of junk mail.'],
        },
        {
          id: 'k-ela-u4-l6',
          unitId: 'k-ela-u4',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 6,
          status: 'outline',
          title: 'Reading a Whole Little Book',
          essentialQuestion: 'Can I read a whole book by myself?',
          summary:
            'Decodable text at last. The child reads a four- to eight-page book containing only taught letters and taught heart words, and then reads it again for meaning.',
          durationMin: 30,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RF.K.4', framework: 'CCSS-ELA', text: 'Read emergent-reader texts with purpose and understanding.' },
            { code: 'CCSS.ELA-LITERACY.RF.K.3.C', framework: 'CCSS-ELA', text: 'Read common high-frequency words by sight.' },
          ],
          objectives: ['I can read a short decodable book from start to finish.', 'I can tell you what happened in it.'],
          vocabulary: [{ term: 'decodable', definition: 'A book built only from sounds you already know.' }],
          materials: ['A decodable reader matched to the letters taught so far', 'A bookmark'],
          prep: ['Read the book yourself first and check that every word is decodable with what your child actually knows.'],
          script: [],
          worksheet: { id: 'k-ela-u4-l6-ws', title: 'My First Book', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Reads the book with no more than two words supplied.', 'Retells what happened in one sentence.'],
            exitTicket: 'Close the book and ask what it was about. Decoding without comprehension is only half the job.',
          },
          differentiation: {
            support: ['Read alternate pages. The shared load keeps the story moving and the child listening.'],
            extension: ['Read it a second time for expression, then perform it to someone else.'],
          },
          misconceptions: [
            {
              misconception: 'Any picture book is a good first reading book.',
              looksLike: 'A child who can decode CVC words is handed a levelled reader full of untaught spellings and concludes they cannot read.',
              correction: 'Use genuinely decodable texts until the code is broad enough. Anything else forces guessing.',
            },
          ],
          homeExtension: ['Let the child read their book to a younger sibling, a grandparent or the dog. Repetition with an audience builds fluency.'],
        },
      ],
    },
    /* ============================================================ UNIT 5 */
    {
      id: 'k-ela-u5',
      gradeId: 'k',
      subjectId: 'ela',
      sequence: 5,
      title: 'Stories We Listen To',
      bigIdea:
        'A story has people in it, a place it happens, and things that happen in an order — and you can hold all of that in your head and give it back.',
      description:
        'A five-year-old can understand a story years beyond anything they can decode, so comprehension is built through read-alouds rather than through their own reading. This unit runs alongside the phonics units, not after them. Retelling is the backbone: it is the most reliable way to find out whether a child understood, and it is a skill that has to be taught rather than assumed.',
      weeks: 6,
      standards: [
        { code: 'CCSS.ELA-LITERACY.RL.K.1', framework: 'CCSS-ELA', text: 'With prompting and support, ask and answer questions about key details in a text.' },
        { code: 'CCSS.ELA-LITERACY.RL.K.2', framework: 'CCSS-ELA', text: 'With prompting and support, retell familiar stories, including key details.' },
        { code: 'CCSS.ELA-LITERACY.RL.K.3', framework: 'CCSS-ELA', text: 'With prompting and support, identify characters, settings and major events in a story.' },
        { code: 'CCSS.ELA-LITERACY.RL.K.7', framework: 'CCSS-ELA', text: 'With prompting and support, describe the relationship between illustrations and the story in which they appear.' },
        { code: 'CCSS.ELA-LITERACY.RI.K.1', framework: 'CCSS-ELA', text: 'With prompting and support, ask and answer questions about key details in an informational text.' },
        { code: 'CCSS.ELA-LITERACY.SL.K.2', framework: 'CCSS-ELA', text: 'Confirm understanding of a text read aloud or information presented orally by asking and answering questions about key details and requesting clarification if something is not understood.' },
      ],
      lessonTitles: [
        'Who Is in This Story?',
        'First, Next, Last: Telling the Story Back',
        'Where and When Did It Happen?',
        'Asking Questions About What We Read',
        'Books That Teach Us True Things',
      ],
      performanceTask:
        'The Storyteller’s Chair: the child chooses a book they have heard several times, sits in a designated chair, and tells the whole story to the family from the pictures alone — characters named, setting stated, events in order.',
      lessons: [
        {
          id: 'k-ela-u5-l1',
          unitId: 'k-ela-u5',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Who Is in This Story?',
          essentialQuestion: 'Who is this story about?',
          summary:
            'Characters as the people or animals a story happens to. The child names them, describes them and works out who the story mainly belongs to.',
          durationMin: 20,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.K.3', framework: 'CCSS-ELA', text: 'With prompting and support, identify characters, settings and major events in a story.' },
          ],
          objectives: ['I can name the characters in a story.', 'I can say which one the story is mostly about.'],
          vocabulary: [
            { term: 'character', definition: 'A person or animal in a story.' },
            { term: 'main character', definition: 'The one the story is mostly about.' },
          ],
          materials: ['A picture book with three or four clear characters', 'Sticky notes'],
          prep: ['Read the book once yourself and decide who you would call the main character, in case you are asked.'],
          script: [],
          worksheet: { id: 'k-ela-u5-l1-ws', title: 'Who Is in This Story?', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Names every character in a read-aloud.', 'Identifies the main character and gives a reason.'],
            exitTicket: 'Ask who the story was mostly about and how they know.',
          },
          differentiation: {
            support: ['Stick a sticky note on each character the first time they appear and count them at the end.'],
            extension: ['Ask how a character felt at the start compared with the end.'],
          },
          misconceptions: [
            {
              misconception: 'Every person shown in a picture is a character in the story.',
              looksLike: 'The child lists background figures from the illustrations.',
              correction: 'Ask "does the story tell us anything about them?" Characters do things; background people are scenery.',
            },
          ],
          homeExtension: ['Ask "who was in it?" after every bedtime story. Ten seconds, every night.'],
        },

        /* ---------------------------------------------------- L2 authored */
        {
          id: 'k-ela-u5-l2',
          unitId: 'k-ela-u5',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 2,
          status: 'authored',
          title: 'First, Next, Last: Telling the Story Back',
          essentialQuestion: 'How do I tell a story back to someone who has not heard it?',
          summary:
            'Retelling in sequence, scaffolded by three physical hand positions and three drawing boxes. Retelling is the most honest comprehension check there is — a child who understood can do it and a child who did not cannot fake it — and it is also a skill that improves dramatically with a few weeks of explicit teaching.',
          durationMin: 30,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.K.2', framework: 'CCSS-ELA', text: 'With prompting and support, retell familiar stories, including key details.' },
            { code: 'CCSS.ELA-LITERACY.RL.K.3', framework: 'CCSS-ELA', text: 'With prompting and support, identify characters, settings and major events in a story.' },
            { code: 'CCSS.ELA-LITERACY.SL.K.2', framework: 'CCSS-ELA', text: 'Confirm understanding of a text read aloud by asking and answering questions about key details.' },
            { code: 'CCSS.ELA-LITERACY.SL.K.5', framework: 'CCSS-ELA', text: 'Add drawings or other visual displays to descriptions as desired to provide additional detail.' },
          ],
          objectives: [
            'I can say what happened first, next and last.',
            'I can retell a story so somebody who was not there understands it.',
            'I can draw three pictures in the right order to help me remember.',
          ],
          vocabulary: [
            { term: 'retell', definition: 'To tell a story again in your own words.', example: 'Retell it to Grandma on the phone.' },
            { term: 'first', definition: 'The thing that happened at the very start.' },
            { term: 'next', definition: 'What happened after that.' },
            { term: 'last', definition: 'How the story finished.' },
            { term: 'order', definition: 'The right way round, from beginning to end.' },
          ],
          materials: [
            'A short, strongly sequenced picture book you have already read at least twice — a folk tale or a simple cumulative story works best',
            'The printed worksheet',
            'Crayons',
            'Three sticky notes or bookmarks',
            'A listener who genuinely has not heard the story, even if it is a toy',
          ],
          prep: [
            'Read the book to your child at least twice before this lesson. Retelling an unfamiliar story is a memory test, not a comprehension lesson.',
            'Mark three pages with sticky notes: the opening, the turning point and the ending. You will use them as prompts, not as reading.',
            'Decide who the listener will be and tell them their job is to look confused when something is missing.',
          ],
          script: [
            {
              id: 'b1',
              phase: 'hook',
              title: 'The Muddled Retelling',
              minutes: 5,
              say: [
                'I am going to tell you our story back, but I have got in a terrible muddle. Stop me when it goes wrong.',
                'So — at the end everyone went home. And then the little one got lost. And at the beginning they were all happy again.',
                'What is wrong with my story? It has all the right bits in it!',
                'The order! I told the end first. A story has to come out in the order it happened or nobody can follow it.',
                'Let us fix mine. What really happened first?',
              ],
              do: [
                'Deliver the muddled version completely straight, as though you cannot hear the problem.',
                'Let the child interrupt you. Their interruption is the learning.',
              ],
              studentDoes: ['Spots that the events are out of order and states what really came first.'],
              checks: [
                {
                  ask: 'Why did my story not make sense?',
                  lookFor: 'Any version of "you said it in the wrong order".',
                  ifStuck: 'Do it again with something they know intimately — their own morning. "First I went to bed. Then I woke up. Then I had breakfast at midnight."',
                },
              ],
              tip: 'A muddled retelling of their own daily routine is the most reliable version of this hook if the book does not land. Children are far more possessive about the order of their own day.',
            },
            {
              id: 'b2',
              phase: 'teach',
              title: 'Three Fingers, Three Parts',
              minutes: 6,
              say: [
                'Here is how I hold a story in my head. Three fingers. Watch.',
                'One finger: FIRST. Who was in it and what were they doing at the start?',
                'Two fingers: NEXT. What was the problem, or the exciting bit in the middle?',
                'Three fingers: LAST. How did it end?',
                'Let me retell our story with my fingers. First… Next… Last. Three fingers, whole story.',
              ],
              do: [
                'Hold up the fingers physically and touch each one as you say that part.',
                'Keep your own retelling to three sentences. A long model teaches the child that retelling means reciting.',
              ],
              studentDoes: ['Holds up their own three fingers and copies the labels.'],
              checks: [
                {
                  ask: 'What goes on finger number two?',
                  lookFor: 'The middle, the problem, what happened next.',
                  ifStuck: 'Retell with the book open at your three marked pages, touching a finger at each page.',
                },
              ],
            },
            {
              id: 'b3',
              phase: 'guided',
              title: 'Your Turn, With the Pictures',
              minutes: 8,
              say: [
                'Now you retell it and I will help. The book is open but I am not reading — you are telling.',
                'Finger one. What happened first? Who was in it, and where were they?',
                'Good. Finger two — what went wrong?',
                'Finger three. How did it finish?',
                'You just told me a whole story. You did not read a single word and it still worked.',
              ],
              do: [
                'Let the child hold the book and turn the pages. The pictures are a legitimate scaffold, not cheating.',
                'Prompt only with the finger, not with the content. Hold up two fingers and wait, rather than saying "and then the wolf…".',
                'If a key event is missing, look puzzled and say "wait — how did they get from here to here?"',
              ],
              studentDoes: ['Retells the story in three parts using the illustrations as prompts.'],
              checks: [
                {
                  ask: 'Who was in the story and where were they?',
                  lookFor: 'At least one named character and a stated place.',
                  ifStuck: 'Point at the first illustration and ask the two questions separately.',
                },
                {
                  ask: 'What was the problem in the middle?',
                  lookFor: 'A genuine event, not a description of a picture.',
                  ifStuck: 'Ask "what went wrong?" — problem is an abstract word and "went wrong" is not.',
                },
              ],
              tip: 'Resist finishing their sentences. Retelling is slow and full of pauses, and the pauses are where the thinking happens. Count to five in your head before you help.',
            },
            {
              id: 'b4',
              phase: 'practice',
              title: 'Draw the Three Parts',
              minutes: 8,
              say: [
                'Now we put your retelling on paper so you can keep it.',
                'Three boxes. First box is the beginning, middle box is the middle, last box is the end.',
                'Draw quickly — this is not an art competition, it is a memory. Stick figures are perfect.',
                'When you have drawn all three, write one word under each box if you can. Just the sounds you hear.',
              ],
              do: [
                'Set a real limit — two minutes a box — or the first drawing will absorb the whole lesson.',
                'Accept invented spelling on the labels without correcting it. The label is a memory hook, not a spelling test.',
                'Do the practice sequencing strip together first if the child is unsure what a three-part sequence looks like.',
              ],
              studentDoes: ['Draws three sequenced pictures and labels them with emergent spelling.'],
              checks: [
                { ask: 'Point at your boxes and tell me the story again.', lookFor: 'A retelling that follows the child’s own drawings in order.' },
              ],
            },
            {
              id: 'b5',
              phase: 'close',
              title: 'Tell It to Someone Who Does Not Know',
              minutes: 3,
              say: [
                'Last job. Grandma has never heard this story. Neither has this rabbit. Tell them.',
                'Use your three boxes to help you. First… next… last.',
                'Did they understand it? Then you are a storyteller.',
              ],
              do: ['Phone a real person if you can. A genuine audience changes the quality of a retelling completely.'],
              studentDoes: ['Retells the story to a listener who has not heard it, using the drawings as notes.'],
              checks: [{ ask: 'Did your listener understand? What did you have to add?', lookFor: 'Awareness that the listener needed information the child already had.' }],
            },
          ],
          worksheet: {
            id: 'k-ela-u5-l2-ws',
            title: 'Tell It Back: First, Next, Last',
            style: 'storybook',
            prepNotes:
              'The three big boxes are for your child’s drawings of the book you have been reading — leave them completely blank. The small sequencing strip at the bottom is a separate warm-up with a story of its own, so do it before the boxes if your child is unsure what "in order" means. Two minutes per box, and stick figures count.',
            sections: [
              {
                id: 's1',
                title: 'Put These in Order First',
                directions: 'These three pictures tell a little story, but they are mixed up. Write 1, 2 and 3 to show what happened first, next and last.',
                layout: 'row',
                images: [
                  {
                    id: 'img-seq-seed',
                    slot: 'Sequence picture — planting the seed',
                    purpose:
                      'The first event of a warm-up sequence with an outcome the child can reason about from cause and effect rather than from memory. Practising ordering on a neutral sequence separates the sequencing skill from recall of the book.',
                    subject: 'a child kneeling beside a small empty plant pot filled with soil, dropping a single seed into it from one hand',
                    count: 1,
                    composition: 'one child and one pot, side view, centred with clear white space around them, plain white background, the seed clearly visible between fingers and pot',
                    mustInclude: ['exactly one plant pot containing only bare soil and no plant', 'a single visible seed in the child’s hand', 'the pot clearly empty of any green growth'],
                    mustAvoid: ['any sprout, shoot or flower in the pot', 'a garden, sky or background scenery', 'a second pot', 'numbers, letters or labels'],
                    aspect: '1:1',
                    altText: 'A child dropping a seed into a pot of soil',
                  },
                  {
                    id: 'img-seq-sprout',
                    slot: 'Sequence picture — watering the sprout',
                    purpose:
                      'The middle event. It must be visibly between the other two — some growth but not full growth — so that ordering requires comparing all three rather than spotting one obvious extreme.',
                    subject: 'the same child tilting a small watering can over a plant pot that holds a short green seedling with two small leaves',
                    count: 1,
                    composition: 'one child, one watering can and one pot, side view, centred with clear white space, plain white background, water shown as a few simple falling drops',
                    mustInclude: ['exactly one pot containing one short seedling with exactly two small leaves', 'a watering can tilted over the pot', 'the seedling clearly shorter than the pot is tall'],
                    mustAvoid: ['a flower or bud on the seedling', 'a tall plant', 'a garden or background scenery', 'numbers, letters or labels'],
                    aspect: '1:1',
                    altText: 'A child watering a small seedling in a pot',
                  },
                  {
                    id: 'img-seq-flower',
                    slot: 'Sequence picture — the flower',
                    purpose:
                      'The final event. Making the endpoint unmistakable lets a child who orders correctly explain their reasoning, which is the real target of the warm-up.',
                    subject: 'the same child standing beside a plant pot holding one tall grown flower in full bloom on a straight stem',
                    count: 1,
                    composition: 'one child and one pot, side view, centred with clear white space, plain white background, the flower clearly taller than the child’s waist',
                    mustInclude: ['exactly one pot containing exactly one fully open flower on a tall stem', 'the flower obviously taller and more developed than a seedling'],
                    mustAvoid: ['several flowers', 'a watering can', 'a garden, sky or background scenery', 'numbers, letters or labels'],
                    aspect: '1:1',
                    altText: 'A child beside a pot with a tall flower in bloom',
                  },
                ],
              },
              {
                id: 's2',
                title: 'My Story: First, Next, Last',
                directions: 'Now our book. Draw what happened first in the first box, next in the middle box, and last in the end box. Then write one word under each picture.',
                layout: 'row',
                writingLines: 1,
                images: [
                  {
                    id: 'img-retell-three-boxes',
                    slot: 'Three empty retelling boxes with arrows',
                    purpose:
                      'Gives the retelling a visible shape. Three equal boxes joined by arrows communicate "three parts, in this direction" without a word of explanation, and the child can point at the boxes while they talk.',
                    subject: 'three large identical empty rectangular boxes in a horizontal row, joined left to right by two plain arrows pointing right, with a narrow blank writing line beneath each box',
                    count: 3,
                    composition:
                      'three equal empty rectangles evenly spaced across a wide frame, thick clean outlines, a simple straight arrow pointing right in each gap between boxes, one short horizontal ruled line centred beneath each box, everything else white',
                    mustInclude: ['exactly three boxes of identical size', 'all three boxes completely empty inside', 'exactly two arrows, both pointing left to right', 'one blank ruled line under each box'],
                    mustAvoid: ['any drawing, dot or mark inside the boxes', 'numbers, letters or headings on or above the boxes', 'decorative borders or corners', 'arrows pointing in any other direction'],
                    aspect: '3:1',
                    altText: 'Three empty boxes in a row joined by arrows, with a writing line under each',
                    style: 'line-art',
                  },
                ],
              },
              {
                id: 's3',
                title: 'Who and Where',
                directions: 'Think about our book. Tell someone who was in it and where it happened. Then draw the place.',
                layout: 'full',
                writingLines: 2,
                items: [
                  'The people or animals in my story were …',
                  'It happened in …',
                ],
              },
            ],
            answerKey: [
              'Sequence: seed in pot = 1, watering the seedling = 2, tall flower = 3. Accept any explanation based on the plant getting bigger.',
              'Three boxes: answers vary by book. Look for three distinct events in the correct order, not three drawings of the same moment.',
              'Who and where: at least one named character and one stated place. Invented spelling is expected and correct at this stage.',
            ],
          },
          assessment: {
            successCriteria: [
              'Retells a familiar story in the correct order with a beginning, a middle and an end.',
              'Names at least one character and states where the story happened.',
              'Produces three sequenced drawings that a listener can follow.',
            ],
            exitTicket:
              'Ask the child to retell the story to someone who has not heard it, with the book closed. A retelling that a genuine stranger can follow is the standard — not one that only makes sense to you because you know the book.',
            rubric: [
              { level: 'emerging', descriptor: 'Names isolated things from the pictures — "a wolf, a house" — without events or order.' },
              { level: 'developing', descriptor: 'Retells events accurately when prompted at each stage, but omits the setting or jumps between the middle and the end.' },
              { level: 'secure', descriptor: 'Retells unprompted in order, names characters and setting, and includes the problem and how it was resolved.' },
            ],
          },
          differentiation: {
            support: [
              'Retell only two parts to start with — beginning and end. The middle is the hardest part and can wait a fortnight.',
              'Use the book’s own pictures rather than the child’s drawings as the prompts, turning one page at a time.',
              'Retell a story about the child’s own day before retelling one from a book. Personal narrative comes first developmentally.',
            ],
            extension: [
              'Add a fourth and fifth box and retell in five parts.',
              'Ask why a character did what they did — inference rather than recall.',
              'Retell the story from a different character’s point of view.',
            ],
            language: [
              'Let the child retell in whichever language they think in. The comprehension is the target; the language is not.',
              'Explicitly teach the sequencing words as a set — first, next, then, after that, last — and put them on a strip the child can point at.',
            ],
          },
          misconceptions: [
            {
              misconception: 'Retelling means describing each picture in turn.',
              looksLike: 'The child says "there is a bear, there is a tree, there is a house" with no events and no connections.',
              correction: 'Close the book. Description depends on the pictures; retelling depends on memory of events. Removing the pictures forces the shift.',
            },
            {
              misconception: 'A retelling has to use the book’s exact words.',
              looksLike: 'The child recites memorised phrases and freezes when they lose the thread.',
              correction: 'Say "tell me in your own words, like you are telling a friend". Praise a rough retelling in their own language over a perfect quotation.',
            },
            {
              misconception: 'The listener already knows the story.',
              looksLike: 'The child says "and then he did it and it was fine" without ever naming who or what.',
              correction: 'Use a listener who genuinely has not heard it and let them ask "who?" The confusion of a real audience teaches this better than any reminder.',
            },
          ],
          homeExtension: [
            'Ask for a retelling of the day at dinner, using the three fingers. It is the same skill and it costs no extra time.',
            'Let your child retell the bedtime story back to you before you close the book.',
            'Phone a relative and have the child tell them a story they have just heard. The distance forces them to include the details a face-to-face listener could guess.',
          ],
          teacherNotes:
            'Retelling is unglamorous and it is the best comprehension assessment available to you. It cannot be passed by guessing, it takes ninety seconds, and it surfaces exactly what a child did and did not follow. Two honest notes: children who are still building English will retell far below their actual understanding, so do not confuse expressive language with comprehension, and almost every child’s middle section is weak for months. Beginning and end come first; the middle arrives later.',
        },
        {
          id: 'k-ela-u5-l3',
          unitId: 'k-ela-u5',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Where and When Did It Happen?',
          essentialQuestion: 'Where does this story take place?',
          summary:
            'Setting as place and time, noticed through the illustrations and then through the words alone. Includes the useful move of imagining the same story in a different setting.',
          durationMin: 20,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.K.3', framework: 'CCSS-ELA', text: 'With prompting and support, identify characters, settings and major events in a story.' },
            { code: 'CCSS.ELA-LITERACY.RL.K.7', framework: 'CCSS-ELA', text: 'With prompting and support, describe the relationship between illustrations and the story in which they appear.' },
          ],
          objectives: ['I can say where a story happens.', 'I can find clues about the setting in the pictures.'],
          vocabulary: [
            { term: 'setting', definition: 'Where and when a story happens.' },
            { term: 'clue', definition: 'Something that helps you work out an answer.' },
          ],
          materials: ['Two picture books with very different settings'],
          prep: ['Choose one book set indoors and one set outdoors, ideally in different weather.'],
          script: [],
          worksheet: { id: 'k-ela-u5-l3-ws', title: 'Where Did It Happen?', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['States the setting of a read-aloud.', 'Points to a picture clue that shows the setting.'],
            exitTicket: 'Ask where the story happened and what in the picture tells you so.',
          },
          differentiation: {
            support: ['Offer a choice of two settings and ask which one it is.'],
            extension: ['Ask how the story would change if it happened somewhere else.'],
          },
          misconceptions: [
            {
              misconception: 'The setting is whatever is in the picture on the page you are looking at.',
              looksLike: 'The child names a different setting for every page.',
              correction: 'Flip through several pages and ask what stays the same. Setting is the place the story lives in, not each individual scene.',
            },
          ],
          homeExtension: ['Ask "where did that happen?" after a bedtime story, then ask what made them think so.'],
        },
        {
          id: 'k-ela-u5-l4',
          unitId: 'k-ela-u5',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'Asking Questions About What We Read',
          essentialQuestion: 'What do I still wonder about this book?',
          summary:
            'The child generates questions rather than answering them, which is harder and much more diagnostic. Includes the distinction between questions the book answers and questions it does not.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RL.K.1', framework: 'CCSS-ELA', text: 'With prompting and support, ask and answer questions about key details in a text.' },
            { code: 'CCSS.ELA-LITERACY.SL.K.2', framework: 'CCSS-ELA', text: 'Confirm understanding of a text read aloud by asking and answering questions and requesting clarification if something is not understood.' },
          ],
          objectives: ['I can ask a question about a story.', 'I can say whether the book answered my question.'],
          vocabulary: [
            { term: 'question', definition: 'Something you ask when you want to know.' },
            { term: 'wonder', definition: 'To think about something you are not sure of.' },
          ],
          materials: ['A picture book with some deliberate gaps', 'Sticky notes for recording questions'],
          prep: ['Pick a book that leaves something unexplained. A tidy book gives the child nothing to wonder about.'],
          script: [],
          worksheet: { id: 'k-ela-u5-l4-ws', title: 'I Wonder', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Generates at least two genuine questions about a read-aloud.', 'Distinguishes a question the book answered from one it did not.'],
            exitTicket: 'Ask: what is one thing you still wonder about that book?',
          },
          differentiation: {
            support: ['Give question starters: who, what, where, why, how — and let the child finish them.'],
            extension: ['Sort the questions into ones the book answered and ones we would have to find out elsewhere.'],
          },
          misconceptions: [
            {
              misconception: 'A question is something you already know the answer to.',
              looksLike: 'The child asks "is that a bear?" while pointing at an obvious bear.',
              correction: 'Model real wondering out loud yourself: "I wonder why she did not just tell him."',
            },
          ],
          homeExtension: ['Ask one "I wonder" question yourself at bedtime and leave it hanging.'],
        },
        {
          id: 'k-ela-u5-l5',
          unitId: 'k-ela-u5',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Books That Teach Us True Things',
          essentialQuestion: 'How is a book about real sharks different from a story about a shark?',
          summary:
            'Informational text: topic, facts and the idea that some books are for finding out rather than for a story. Pairs one non-fiction and one fiction book on the same subject.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.RI.K.1', framework: 'CCSS-ELA', text: 'With prompting and support, ask and answer questions about key details in an informational text.' },
            { code: 'CCSS.ELA-LITERACY.RI.K.2', framework: 'CCSS-ELA', text: 'With prompting and support, identify the main topic and retell key details of a text.' },
          ],
          objectives: ['I can say what a book is mostly about.', 'I can tell a story book from a facts book.'],
          vocabulary: [
            { term: 'topic', definition: 'What the whole book is about.' },
            { term: 'fact', definition: 'Something that is really true.' },
          ],
          materials: ['One non-fiction and one fiction book on the same animal'],
          prep: ['Have both books to hand. The comparison is the lesson and it collapses with only one book.'],
          script: [],
          worksheet: { id: 'k-ela-u5-l5-ws', title: 'Story or Facts?', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['States the topic of an informational book.', 'Recalls two facts from it.', 'Sorts two books into story and facts.'],
            exitTicket: 'Hold up both books and ask which one would help if you really wanted to know what sharks eat.',
          },
          differentiation: {
            support: ['Use a photographic non-fiction book — the photographs make the distinction obvious before any text is read.'],
            extension: ['Ask the child to write or dictate one true fact they learned.'],
          },
          misconceptions: [
            {
              misconception: 'Anything in a book is true.',
              looksLike: 'The child cites a talking animal from a story as a fact about animals.',
              correction: 'Compare the two books directly. "Does a real shark wear a hat? Which book would tell us the truth?"',
            },
          ],
          homeExtension: ['Borrow one facts book a week from the library on whatever your child is currently obsessed with.'],
        },
      ],
    },

    /* ============================================================ UNIT 6 */
    {
      id: 'k-ela-u6',
      gradeId: 'k',
      subjectId: 'ela',
      sequence: 6,
      title: 'Drawing, Labelling and Writing It Down',
      bigIdea:
        'Writing is just talking that has been slowed down and written with the sounds you can hear.',
      description:
        'Composition for children who cannot yet spell. Drawing carries the meaning first, labels attach words to it, and sentences arrive last. Invented spelling is not tolerated here, it is required: a child who writes KT for cat is applying phonemic segmentation and letter-sound knowledge at the same time, which is precisely the skill being built.',
      weeks: 6,
      standards: [
        { code: 'CCSS.ELA-LITERACY.W.K.2', framework: 'CCSS-ELA', text: 'Use a combination of drawing, dictating and writing to compose informative or explanatory texts in which they name what they are writing about and supply some information about the topic.' },
        { code: 'CCSS.ELA-LITERACY.W.K.3', framework: 'CCSS-ELA', text: 'Use a combination of drawing, dictating and writing to narrate a single event or several loosely linked events, tell about the events in the order in which they occurred, and provide a reaction to what happened.' },
        { code: 'CCSS.ELA-LITERACY.W.K.1', framework: 'CCSS-ELA', text: 'Use a combination of drawing, dictating and writing to compose opinion pieces in which they tell a reader the topic and state an opinion about it.' },
        { code: 'CCSS.ELA-LITERACY.L.K.2.C', framework: 'CCSS-ELA', text: 'Write a letter or letters for most consonant and short-vowel sounds (phonemes).' },
        { code: 'CCSS.ELA-LITERACY.L.K.2.D', framework: 'CCSS-ELA', text: 'Spell simple words phonetically, drawing on knowledge of sound-letter relationships.' },
        { code: 'CCSS.ELA-LITERACY.L.K.2.A', framework: 'CCSS-ELA', text: 'Capitalise the first word in a sentence and the pronoun I.' },
      ],
      lessonTitles: [
        'Your Picture Tells the Story',
        'Putting Labels on Your Drawing',
        'Writing the Sounds You Hear',
        'One Whole Sentence: Capital, Words, Full Stop',
        'Telling What You Think: My Favourite Book',
      ],
      performanceTask:
        'The Book About Me: a stapled four-page booklet in which the child draws and labels one page about their family, one about something they can do, one about a place they like and one about what they want to be — each with at least one written sentence.',
      lessons: [
        {
          id: 'k-ela-u6-l1',
          unitId: 'k-ela-u6',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 1,
          status: 'outline',
          title: 'Your Picture Tells the Story',
          essentialQuestion: 'How can a drawing say something?',
          summary:
            'Drawing as composition. The child draws one event, then dictates the sentence that goes with it while you scribe, so they see speech turning into print.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.K.3', framework: 'CCSS-ELA', text: 'Use a combination of drawing, dictating and writing to narrate a single event and provide a reaction to what happened.' },
            { code: 'CCSS.ELA-LITERACY.SL.K.5', framework: 'CCSS-ELA', text: 'Add drawings or other visual displays to descriptions as desired to provide additional detail.' },
          ],
          objectives: ['I can draw one thing that happened to me.', 'I can tell you the sentence that goes with my picture.'],
          vocabulary: [
            { term: 'detail', definition: 'A small extra thing that makes your picture tell more.' },
            { term: 'dictate', definition: 'To say the words while somebody else writes them.' },
          ],
          materials: ['Blank paper', 'Crayons or felt tips', 'A pen for you'],
          prep: ['Decide on a shared recent event so the child is not searching for a topic.'],
          script: [],
          worksheet: { id: 'k-ela-u6-l1-ws', title: 'Draw What Happened', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Draws a recognisable single event with at least two details.', 'Dictates a matching sentence.'],
            exitTicket: 'Point at the drawing and ask what is happening in it.',
          },
          differentiation: {
            support: ['Draw alongside the child and narrate your own drawing as you go.'],
            extension: ['Draw two connected pictures and dictate a sentence for each.'],
          },
          misconceptions: [
            {
              misconception: 'A better drawing is a better piece of writing.',
              looksLike: 'The child spends fifteen minutes colouring the sky and has no story.',
              correction: 'Set a timer for the drawing and give the talking the same status. The words are the work.',
            },
          ],
          homeExtension: ['Keep a drawing journal — one picture per day, with the child’s sentence written underneath in your hand.'],
        },
        {
          id: 'k-ela-u6-l2',
          unitId: 'k-ela-u6',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 2,
          status: 'outline',
          title: 'Putting Labels on Your Drawing',
          essentialQuestion: 'How do I name the things in my picture?',
          summary:
            'Labelling as the first independent writing. The child writes the sounds they can hear for each object in their drawing, starting with just the initial consonant.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.K.2', framework: 'CCSS-ELA', text: 'Use a combination of drawing, dictating and writing to compose informative texts in which they name what they are writing about and supply some information.' },
            { code: 'CCSS.ELA-LITERACY.L.K.2.C', framework: 'CCSS-ELA', text: 'Write a letter or letters for most consonant and short-vowel sounds.' },
          ],
          objectives: ['I can write the first sound of a thing I drew.', 'I can put a label next to each thing in my picture.'],
          vocabulary: [
            { term: 'label', definition: 'A word written next to a thing to name it.' },
            { term: 'line', definition: 'The mark that joins a label to the thing it names.' },
          ],
          materials: ['A drawing from the previous lesson', 'A pencil', 'An alphabet strip for reference'],
          prep: ['Have the alphabet strip where the child can see it. Hunting for the letter is part of the task, not a failure.'],
          script: [],
          worksheet: { id: 'k-ela-u6-l2-ws', title: 'Label Your Picture', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['Writes at least three labels using correct initial letters.'],
            exitTicket: 'Point at something in the drawing and ask what letter it starts with, then ask them to write it.',
          },
          differentiation: {
            support: ['Accept a single initial letter as a complete label. K for cat is a real success.'],
            extension: ['Write the first and last sound, then attempt the middle vowel too.'],
          },
          misconceptions: [
            {
              misconception: 'A label has to be spelled correctly to count.',
              looksLike: 'The child refuses to write anything for fear of getting it wrong.',
              correction: 'Say out loud that you want the sounds they hear, not the correct spelling, and that grown-up spelling comes later. Then write something imperfect yourself.',
            },
          ],
          homeExtension: ['Let the child label the shopping list with the first letter of each item.'],
        },
        {
          id: 'k-ela-u6-l3',
          unitId: 'k-ela-u6',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 3,
          status: 'outline',
          title: 'Writing the Sounds You Hear',
          essentialQuestion: 'How do I spell a word I have never written before?',
          summary:
            'Invented spelling as a procedure: say the word slowly, push a counter for each sound, then write a letter for each push. This is Unit 2 running in reverse and it is the origin of independent writing.',
          durationMin: 30,
          standards: [
            { code: 'CCSS.ELA-LITERACY.L.K.2.D', framework: 'CCSS-ELA', text: 'Spell simple words phonetically, drawing on knowledge of sound-letter relationships.' },
            { code: 'CCSS.ELA-LITERACY.L.K.2.C', framework: 'CCSS-ELA', text: 'Write a letter or letters for most consonant and short-vowel sounds.' },
          ],
          objectives: ['I can say a word slowly and write a letter for each sound.', 'I can write a word nobody has taught me.'],
          vocabulary: [
            { term: 'stretch', definition: 'To say a word slowly so you can hear all the sounds.' },
            { term: 'spell', definition: 'To write the letters for the sounds in a word.' },
          ],
          materials: ['Sound box strips from Unit 2', 'Counters', 'Pencil and paper', 'Alphabet strip'],
          prep: ['Choose target words made only from letter-sounds already taught.'],
          script: [],
          worksheet: { id: 'k-ela-u6-l3-ws', title: 'Write the Sounds', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Writes a phonetically plausible spelling for an untaught CVC word.'],
            exitTicket: 'Say "mud" and ask the child to write it. MD is developing, MUD is secure, M is emerging — all three are progress.',
          },
          differentiation: {
            support: ['Write the first and last letters yourself and let the child fill the middle.'],
            extension: ['Move to four-sound words and to two-word phrases.'],
          },
          misconceptions: [
            {
              misconception: 'Invented spelling teaches bad habits.',
              looksLike: 'An adult corrects every word, and the child stops writing anything they cannot spell.',
              correction: 'Phonetic spelling is the strongest available practice of segmenting plus letter-sound knowledge. Correct spelling arrives with more phonics, not with more correction.',
            },
          ],
          homeExtension: ['Let the child write the shopping list. Nobody else has to be able to read it.'],
        },
        {
          id: 'k-ela-u6-l4',
          unitId: 'k-ela-u6',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 4,
          status: 'outline',
          title: 'One Whole Sentence: Capital, Words, Full Stop',
          essentialQuestion: 'What does a whole sentence need?',
          summary:
            'The mechanics of a sentence: a capital at the start, finger spaces between the words, a full stop at the end, and a whole idea in the middle.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.L.K.2.A', framework: 'CCSS-ELA', text: 'Capitalise the first word in a sentence and the pronoun I.' },
            { code: 'CCSS.ELA-LITERACY.L.K.2.B', framework: 'CCSS-ELA', text: 'Recognise and name end punctuation.' },
            { code: 'CCSS.ELA-LITERACY.W.K.3', framework: 'CCSS-ELA', text: 'Use a combination of drawing, dictating and writing to narrate an event.' },
          ],
          objectives: ['I can write one sentence with spaces between the words.', 'I can start with a capital and end with a full stop.'],
          vocabulary: [
            { term: 'finger space', definition: 'The gap you leave between words, as wide as your finger.' },
            { term: 'full stop', definition: 'The dot that ends a sentence.' },
          ],
          materials: ['Lined paper', 'Pencil', 'A lolly stick to use as a spacer'],
          prep: ['Write one model sentence in advance with exaggerated finger spaces.'],
          script: [],
          worksheet: { id: 'k-ela-u6-l4-ws', title: 'One Whole Sentence', style: 'line-art', sections: [] },
          assessment: {
            successCriteria: ['Writes a sentence with visible word boundaries, an initial capital and a full stop.'],
            exitTicket: 'Ask the child to write "I like my dog." and check the three mechanics rather than the spelling.',
          },
          differentiation: {
            support: ['Provide a sentence frame — "I like ___." — and let the child supply only the last word.'],
            extension: ['Write two sentences that go together, then add a question mark to one.'],
          },
          misconceptions: [
            {
              misconception: 'Spaces are decoration.',
              looksLike: 'The child writes "Ilikemydog" as one continuous string.',
              correction: 'Use the lolly stick physically after every word. This is a motor habit before it is a concept.',
            },
          ],
          homeExtension: ['Write one sentence together on a card for someone in the family each week.'],
        },
        {
          id: 'k-ela-u6-l5',
          unitId: 'k-ela-u6',
          gradeId: 'k',
          subjectId: 'ela',
          sequence: 5,
          status: 'outline',
          title: 'Telling What You Think: My Favourite Book',
          essentialQuestion: 'How do I tell someone what I think and why?',
          summary:
            'Opinion writing at its simplest: name the book, say whether you liked it, give one reason. The word "because" is the entire lesson.',
          durationMin: 25,
          standards: [
            { code: 'CCSS.ELA-LITERACY.W.K.1', framework: 'CCSS-ELA', text: 'Use a combination of drawing, dictating and writing to compose opinion pieces in which they tell a reader the topic and state an opinion about it.' },
            { code: 'CCSS.ELA-LITERACY.L.K.2.D', framework: 'CCSS-ELA', text: 'Spell simple words phonetically, drawing on knowledge of sound-letter relationships.' },
          ],
          objectives: ['I can say which book I like best.', 'I can give one reason using the word because.'],
          vocabulary: [
            { term: 'opinion', definition: 'What you think, which somebody else might not think.' },
            { term: 'reason', definition: 'Why you think it.' },
          ],
          materials: ['A pile of books read this year', 'Paper and crayons'],
          prep: ['Lay out five or six familiar books so the choice is concrete rather than abstract.'],
          script: [],
          worksheet: { id: 'k-ela-u6-l5-ws', title: 'My Favourite Book', style: 'storybook', sections: [] },
          assessment: {
            successCriteria: ['States an opinion and supports it with a reason.', 'Produces a drawing plus at least one written sentence.'],
            exitTicket: 'Ask which book is their favourite and why. The "why" is the assessment.',
          },
          differentiation: {
            support: ['Give the sentence frame aloud: "I like ___ because ___." and scribe the second half.'],
            extension: ['Compare two books and say which is better and why.'],
          },
          misconceptions: [
            {
              misconception: 'A reason is just repeating the opinion.',
              looksLike: '"I like it because I like it."',
              correction: 'Ask "what happens in it that you like?" A concrete event is much easier for a five-year-old than an abstract reason.',
            },
          ],
          homeExtension: ['At the end of a book ask "did you like it? Why?" and accept only reasons about the book.'],
        },
      ],
    },
  ],
}

export default course
