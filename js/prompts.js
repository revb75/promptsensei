// /js/prompts.js
// Seed prompt library for Prompt Sensei
// Usage: import { PROMPT_LIBRARY, buildPromptSet } from '/js/prompts.js';

export const PROMPT_LIBRARY = {
  schemaVersion: 1,
  roles: {
    "student_hs": {
      label: "Student – Middle/High School",
      prompts: [
        "Explain {{topic}} like I’m a 9th grader using a {{interest}} example.",
        "Make a 10-question quiz from my notes on {{topic}}.",
        "Turn this history chapter about {{topic}} into a 6-panel comic script.",
        "Make flashcards for these vocabulary terms: {{terms}}.",
        "Give me 3 analogies for {{concept}} that make it easy to remember."
      ]
    },
    "student_college": {
      label: "Student – College/University",
      prompts: [
        "Summarize this research paper on {{topic}} in 200 words for a non-expert.",
        "Turn my class notes on {{topic}} into a study guide with sections.",
        "Explain {{theory}} with a real-world example from {{interest}}.",
        "Draft a 2-minute speech based on this essay: {{thesis}}.",
        "Ask me 10 oral-exam questions about {{topic}} and grade my answers."
      ]
    },
    "teacher": {
      label: "Teacher / Instructor",
      prompts: [
        "Design a 45-minute lesson plan for {{topic}} with one active-learning task and one exit ticket.",
        "Create 5 open-ended discussion questions for {{text_or_topic}}.",
        "Make a 6-question formative quiz (MC + short answer) for {{topic}}.",
        "Rewrite these instructions for students at a {{reading_level}} reading level.",
        "Suggest a fun analogy from {{interest}} to explain {{concept}}."
      ]
    },
    "researcher": {
      label: "Academic Researcher",
      prompts: [
        "Summarize this abstract about {{topic}} for a non-expert audience in 150 words.",
        "Suggest 3 novel research angles or hypotheses related to {{topic}}.",
        "Turn my findings into a conference slide outline with 5 slides.",
        "Rewrite my paper introduction for clarity and flow (keep citations).",
        "Generate 12 keywords for my paper on {{topic}}."
      ]
    },
    "ed_admin": {
      label: "Education Administrator / Coach",
      prompts: [
        "Draft a motivational email to staff about {{goal}} with 3 concrete next steps.",
        "Create a checklist for improving student engagement in a 45-minute class.",
        "Summarize this policy in plain language and list action items.",
        "Design a 60-minute PD session outline on {{topic}} with activities.",
        "Turn these survey results into 3 priorities and an action plan."
      ]
    },
    "homeschool_parent": {
      label: "Homeschool Parent",
      prompts: [
        "Create a weekly learning plan for {{grade_level}} focused on {{topic}}.",
        "Design a hands-on activity using household items to teach {{concept}}.",
        "Turn this museum trip into a learning scavenger hunt.",
        "Write simple assessment rubrics for reading, writing, and math.",
        "Suggest 5 low-cost projects aligned to {{interest}}."
      ]
    },

    "entrepreneur": {
      label: "Entrepreneur / Startup Founder",
      prompts: [
        "Write a 1-paragraph pitch for my product {{product}} targeting {{audience}}.",
        "Generate 5 creative marketing ideas with $0–$200 budget for {{offer}}.",
        "List my top competitors for {{offer}} and give 3 differentiators.",
        "Suggest 3 lean experiments to test demand for {{idea}} this week.",
        "Draft a concise investor email with traction, ask, and timeline."
      ]
    },
    "smb_owner": {
      label: "Small Business Owner",
      prompts: [
        "Create a social post promoting {{product_or_service}} to {{audience}} with a CTA.",
        "Write a warm thank-you note for loyal customers (email + SMS variants).",
        "Suggest seasonal promotions and a simple calendar for next month.",
        "Turn this website copy into a print flyer (headline + bullets).",
        "List 5 ways to increase local foot traffic for a {{business_type}}."
      ]
    },
    "corp_manager": {
      label: "Corporate Professional (Management)",
      prompts: [
        "Rewrite my meeting agenda to finish in 30 minutes; include timings and owners.",
        "Summarize this report for executives as a 6-bullet brief with risks.",
        "Propose 3 ways to improve team communication for a hybrid team.",
        "Draft a project kickoff email with goals, roles, and first milestones.",
        "Create 6 KPIs for {{project}} with definitions and data sources."
      ]
    },
    "corp_specialist": {
      label: "Corporate Professional (Specialist/Analyst)",
      prompts: [
        "Analyze this dataset and highlight 5 key trends in plain English.",
        "Summarize this technical doc for non-technical stakeholders.",
        "Suggest better charts for these numbers and explain why.",
        "Create an FAQ for our {{process}} process (10 Q&As).",
        "Write a one-page summary of findings with next-step recommendations."
      ]
    },
    "nonprofit_leader": {
      label: "Nonprofit Leader / Community Organizer",
      prompts: [
        "Write a fundraising appeal email centered on {{impact_story}}.",
        "List 5 creative volunteer engagement ideas for {{event_or_program}}.",
        "Turn our mission statement into a 60-second speech.",
        "Draft a press release for our {{event}} using AP style headings.",
        "Suggest 3 ways to increase community awareness on {{issue}}."
      ]
    },

    "writer": {
      label: "Writer / Author",
      prompts: [
        "Give me 5 original story prompts in the {{genre}} genre.",
        "Rewrite this scene to increase tension and pacing (keep POV).",
        "Suggest nuanced character flaws for a protagonist like {{archetype}}.",
        "Turn this outline into chapter-by-chapter summaries.",
        "Propose metaphors for {{emotion_or_event}} without clichés."
      ]
    },
    "journalist": {
      label: "Journalist / Blogger",
      prompts: [
        "Draft 6 headline options for this article (mix lengths & styles).",
        "Summarize this interview into quotable bullets with themes.",
        "Suggest related articles and internal links to add.",
        "Punch up this draft to improve clarity and flow, preserve facts.",
        "Generate 5 follow-up questions for {{subject}}."
      ]
    },
    "artist": {
      label: "Artist / Illustrator",
      prompts: [
        "Suggest visual concepts exploring the theme {{theme}}.",
        "Give 3 ideas for a cohesive series with titles and short blurbs.",
        "Describe a color palette for {{mood}} and why it fits.",
        "Turn this concept into a step-by-step creative brief.",
        "Generate memorable exhibition titles for {{series_title}}."
      ]
    },
    "musician": {
      label: "Musician / Performer",
      prompts: [
        "Write a chorus based on {{emotion_or_story}} with an internal rhyme.",
        "Suggest chord progressions to fit this melody: {{notes_or_mp3_desc}}.",
        "Draft a social post announcing my next gig with venue details.",
        "Brainstorm album themes that align with {{influences}}.",
        "Create a 10-song setlist with energy curve and transitions."
      ]
    },
    "filmmaker": {
      label: "Filmmaker / Videographer",
      prompts: [
        "Outline a 3-minute short film idea about {{theme}} (beat sheet).",
        "Suggest camera angles and shots for {{scene}}.",
        "Write a concise pitch for my documentary on {{topic}}.",
        "List 5 ways to elevate a low-budget scene using lighting and blocking.",
        "Create a shot list for covering {{event}}."
      ]
    },
    "creator": {
      label: "Content Creator / Influencer",
      prompts: [
        "Write a 15-second TikTok/Reel script on {{topic}} with a strong hook.",
        "Suggest trending hashtags and captions for {{niche}}.",
        "List 5 video hook ideas tailored to {{audience}}.",
        "Draft a YouTube title + thumbnail text for {{idea}}.",
        "Plan a week of Instagram posts with CTAs."
      ]
    },
    "photographer": {
      label: "Photographer",
      prompts: [
        "Suggest 5 creative photo concepts around {{theme}}.",
        "Write captions and alt text for this set: {{album_desc}}.",
        "List local locations with good natural light near {{city}}.",
        "Propose a portfolio theme and sequencing logic.",
        "Turn my photo story into a blog outline with subheads."
      ]
    },

    "developer": {
      label: "Software Developer / Engineer",
      prompts: [
        "Explain what this code does in plain English: {{code}}.",
        "Suggest optimizations for this function and explain tradeoffs.",
        "Write unit tests for this snippet using {{framework}}.",
        "Generate API documentation from these endpoints: {{endpoints}}.",
        "List 3 ways to improve performance or readability here."
      ]
    },
    "data_science": {
      label: "Data Analyst / Scientist",
      prompts: [
        "Find trends and anomalies in this dataset: {{data_desc}}.",
        "Suggest a better visualization for these numbers and why.",
        "Explain these results for a non-technical audience.",
        "List 3 testable hypotheses based on {{question}}.",
        "Generate SQL queries to answer: {{analysis_goal}}."
      ]
    },
    "it_cyber": {
      label: "IT / Cybersecurity Professional",
      prompts: [
        "Explain this vulnerability in simple terms and mitigation steps.",
        "Draft steps to secure a small office network with budget options.",
        "Create an incident response checklist for {{scenario}}.",
        "Write a staff-friendly security policy for {{topic}}.",
        "Summarize password hygiene best practices with do/don't list."
      ]
    },
    "product_manager": {
      label: "Product Manager",
      prompts: [
        "Write a user story for {{feature}} in 'As a… I want… so that…' format.",
        "List acceptance criteria for {{feature}} with edge cases.",
        "Summarize customer feedback into 3 themes and sample quotes.",
        "Generate 3 MVP scope options with tradeoffs.",
        "Draft a release announcement with key benefits."
      ]
    },
    "maker": {
      label: "Maker / Inventor",
      prompts: [
        "Suggest improvements to my prototype for {{problem}}.",
        "List potential use cases and early adopters for {{invention}}.",
        "Generate a parts list with suggested suppliers.",
        "Write assembly instructions with safety notes.",
        "Propose marketing angles highlighting {{benefit}}."
      ]
    },

    "artisan": {
      label: "Craftsman / Artisan",
      prompts: [
        "Suggest 3 design directions for my handmade {{item}}.",
        "Write a product description emphasizing materials and story.",
        "List craft fair booth/display ideas that increase foot traffic.",
        "Suggest ways to improve durability and finish for {{item}}.",
        "Draft a workshop flyer with agenda and materials list."
      ]
    },
    "mechanic": {
      label: "Mechanic / Technician",
      prompts: [
        "Explain this repair procedure step-by-step for {{vehicle_or_device}}.",
        "List common causes and diagnostics for {{symptom}}.",
        "Write a customer-friendly repair report for {{job}}.",
        "Create a tool + parts checklist for {{task}}.",
        "Draft a maintenance schedule for {{equipment}}."
      ]
    },
    "contractor": {
      label: "Contractor / Builder",
      prompts: [
        "Write a project proposal for {{job}} with scope, timeline, and cost bands.",
        "Estimate costs for {{build}} with key assumptions.",
        "List safety steps and PPE for the team working on {{task}}.",
        "Suggest 3 ways to reduce material costs without quality loss.",
        "Draft a realistic timeline with milestones for {{project}}."
      ]
    },
    "chef": {
      label: "Chef / Culinary Professional",
      prompts: [
        "Create a 3-course menu around the theme {{theme}}.",
        "Suggest seasonal dishes using {{ingredients}}.",
        "Write a description for my special of the day.",
        "Adapt this recipe for {{diet}} without losing flavor.",
        "Suggest wine or drink pairings for {{dish}}."
      ]
    },
    "farmer": {
      label: "Agriculture / Farming",
      prompts: [
        "Plan a crop rotation schedule for {{acreage}} focusing on {{crops}}.",
        "Suggest pest management approaches for {{issue}}.",
        "List value-added product ideas from {{crop}}.",
        "Write a social post celebrating harvest with community angle.",
        "Create a farm-to-table menu plan using current yields."
      ]
    },

    "healthcare": {
      label: "Healthcare Professional",
      prompts: [
        "Simplify this explanation of {{condition}} for patients (6th grade level).",
        "Create a patient care checklist for {{procedure}}.",
        "Summarize a case note for handoff to a colleague.",
        "Draft a wellness tips flyer for {{audience}}.",
        "Suggest patient engagement ideas for {{clinic_type}}."
      ]
    },
    "first_responder": {
      label: "Law Enforcement / First Responder",
      prompts: [
        "Summarize an incident report focusing on facts and timeline.",
        "Create a community safety flyer on {{topic}}.",
        "Draft talking points for a town hall about {{issue}}.",
        "List training drills for {{scenario}} with objectives.",
        "Suggest a public awareness campaign to address {{risk}}."
      ]
    },
    "military": {
      label: "Military / Veteran",
      prompts: [
        "Translate service experience into resume bullets for {{target_role}}.",
        "Plan a transition to civilian career with 30-60-90 day steps.",
        "Write a short speech for Veterans Day with personal reflection.",
        "Suggest leadership exercises for a small team offsite.",
        "Generate realistic team-building scenarios for {{unit_type}}."
      ]
    },
    "social_worker": {
      label: "Social Worker / Counselor",
      prompts: [
        "Create a resource list for clients needing {{need}}.",
        "Draft a motivational letter using MI style.",
        "Summarize a case plan for stakeholders in plain language.",
        "Suggest group activity ideas for {{population}}.",
        "Write a follow-up email template after first appointment."
      ]
    },
    "policy": {
      label: "Government / Policy Professional",
      prompts: [
        "Summarize this bill about {{topic}} in plain language with pros/cons.",
        "Suggest talking points for a public forum with FAQs.",
        "Draft a 1-page policy brief with background, options, recommendation.",
        "List key stakeholders for {{initiative}} and outreach ideas.",
        "Create a fact sheet with 6 bullets and one chart suggestion."
      ]
    },

    "parent_home": {
      label: "Stay-at-Home Parent",
      prompts: [
        "Create a fun rainy-day plan for kids aged {{ages}} using items at home.",
        "Plan a weeknight dinner menu and grocery list under ${{budget}}.",
        "Turn this shopping list into a categorized budget plan.",
        "Write a short bedtime story about {{theme}} including {{child_name}}.",
        "Design a family chore chart with age-appropriate tasks."
      ]
    },
    "retiree": {
      label: "Retiree",
      prompts: [
        "Plan a month-long hobby project around {{interest}} with milestones.",
        "Write a memoir outline focusing on {{era_or_topic}}.",
        "List ways to share my skills with the community.",
        "Plan a trip focused on {{theme}} with accessible options.",
        "Draft a family history narrative using these notes: {{notes}}."
      ]
    },
    "hobbyist": {
      label: "Hobbyist",
      prompts: [
        "Suggest weekend projects related to {{interest}}.",
        "Write a how-to guide for {{hobby}} with materials and steps.",
        "List online communities worth joining for {{hobby}}.",
        "Generate 3 creative challenges to stretch my skills.",
        "Plan a showcase or post to share my work."
      ]
    },
    "traveler": {
      label: "Traveler / Nomad",
      prompts: [
        "Plan a 7-day itinerary for {{destination}} matching {{budget_level}}.",
        "Suggest hidden gems in {{city}} that fit {{interest}}.",
        "Outline a travel blog entry about {{experience}}.",
        "List essential items for this trip and why they matter.",
        "Write photo captions for this album: {{album_desc}}."
      ]
    }
  },

  // Optional personalization knobs
  ages: {
    "13-17": { tone: "friendly, encouraging", complexity: "simple", readingLevel: "7th grade" },
    "18-24": { tone: "casual but direct", complexity: "moderate", readingLevel: "9th grade" },
    "25-39": { tone: "professional and concise", complexity: "moderate", readingLevel: "10th grade" },
    "40-59": { tone: "practical and respectful", complexity: "moderate", readingLevel: "10th grade" },
    "60+":   { tone: "warm and clear", complexity: "simple", readingLevel: "8th grade" }
  },

  goals: {
    "learn": ["ask-for-explanations", "step-by-steps", "quizzes"],
    "productivity": ["summaries", "action-plans", "templates"],
    "make_money": ["marketing", "offers", "research"],
    "creative": ["story-prompts", "styles", "variations"],
    "fun": ["games", "humor", "surprises"]
  },

  interests: [
    "Cooking & Food",
    "Travel & Adventure",
    "Tech & Coding",
    "Arts & Writing",
    "Fitness & Health",
    "Finance & Investing",
    "Parenting & Family",
    "Gaming & Esports",
    "Education & Learning"
  ]
};

// Helper: builds a starter set based on onboarding
export function buildPromptSet({ roleId, ageBand, interests = [], goals = [] }, limit = 12) {
  const role = PROMPT_LIBRARY.roles[roleId];
  if (!role) return [];

  // Naive personalization: inject first interest where {{interest}} is used
  const firstInterest = interests[0] || "your interests";
  const subst = (s) => s
    .replaceAll("{{interest}}", firstInterest)
    .replaceAll("{{reading_level}}", (PROMPT_LIBRARY.ages[ageBand]?.readingLevel || "9th grade"));

  // Start with role prompts
  let out = role.prompts.map(subst);

  // Light weighting by goals: push certain items to the top if they match keywords
  const goalHints = (goals || []).join(" ").toLowerCase();
  out.sort((a, b) => score(b, goalHints) - score(a, goalHints));

  // Deduplicate & cap
  const seen = new Set();
  const unique = [];
  for (const p of out) {
    const k = p.toLowerCase();
    if (!seen.has(k)) { seen.add(k); unique.push(p); }
    if (unique.length >= limit) break;
  }
  return unique;
}

function score(prompt, hints) {
  let s = 0;
  if (!hints) return s;
  const H = [
    ["summarize", 2], ["summary", 2],
    ["quiz", 2], ["flashcard", 2],
    ["pitch", 3], ["marketing", 2], ["investor", 2],
    ["plan", 1], ["agenda", 1], ["checklist", 1],
    ["story", 1], ["creative", 1], ["variations", 1]
  ];
  const p = prompt.toLowerCase();
  for (const [kw, w] of H) if (p.includes(kw) && hints.includes(kw)) s += w;
  return s;
}
