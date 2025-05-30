import { ebotType, etag } from "../types/enum";
import { bots } from "../types/type";

export const botarr: bots[] = [
  {
    id: "tech-recruiter",
    name: "TechXpert Interviewer",
    description:
      "Simulates technical interviews for software engineering roles with real-world coding challenges and industry-specific questions.",
    tag: etag.trending,
    type: ebotType.interviewer,
    avatarColor: "#3B82F6",
  },
  {
    id: "product-manager-coach",
    name: "Product Coach Pro",
    description:
      "Prepares you for product management interviews with case studies, prioritization scenarios, and strategic thinking exercises.",
    tag: etag.new,
    type: ebotType.interviewer,
    avatarColor: "#10B981",
  },
  {
    id: "data-science-interviewer",
    name: "DataSense AI",
    description:
      "Conducts in-depth data science interviews covering statistics, ML algorithms, and real-world analytical problems with detailed feedback.",
    tag: etag.popular,
    type: ebotType.interviewer,
    avatarColor: "#6366F1",
  },
  {
    id: "behavioral-interviewer",
    name: "StarMethod Pro",
    description:
      "Masters of behavioral interviewing using the STAR method to help you craft compelling stories about your professional experiences.",
    tag: etag.famous,
    type: ebotType.interviewer,
    avatarColor: "#F59E0B",
  },

  // Personality Bots
  {
    id: "cognitive-analyzer",
    name: "MindMap Analyzer",
    description:
      "Advanced cognitive assessment tool that maps your thinking patterns, decision-making style, and intellectual strengths through conversation.",
    tag: etag.trending,
    type: ebotType.personality,
    avatarColor: "#EC4899",
  },
  {
    id: "enneagram-guide",
    name: "EnneaGuide",
    description:
      "Explores your Enneagram type through thoughtful questions and provides insights about your core motivations and growth paths.",
    tag: etag.popular,
    type: ebotType.personality,
    avatarColor: "#8B5CF6",
  },
  {
    id: "career-compass",
    name: "Career Compass",
    description:
      "Analyzes your personality traits, strengths, and values to suggest career paths that would bring you fulfillment and success.",
    tag: etag.famous,
    type: ebotType.personality,
    avatarColor: "#14B8A6",
  },
  {
    id: "emotional-intelligence",
    name: "EQ Navigator",
    description:
      "Measures and develops your emotional intelligence through interactive scenarios and personalized coaching conversations.",
    tag: etag.new,
    type: ebotType.personality,
    avatarColor: "#F43F5E",
  },

  // Mythology Bots
  {
    id: "olympus-guide",
    name: "Olympus Oracle",
    description:
      "Embodies the collective wisdom of Greek gods, telling epic tales of heroes and monsters while exploring ancient philosophical concepts.",
    tag: etag.trending,
    type: ebotType.mythology,
    avatarColor: "#EAB308",
  },
  {
    id: "norse-storyteller",
    name: "Saga Weaver",
    description:
      "Brings Norse mythology to life through immersive storytelling about Asgard, Midgard, and the nine realms of Yggdrasil.",
    tag: etag.famous,
    type: ebotType.mythology,
    avatarColor: "#0EA5E9",
  },
  {
    id: "eastern-mystic",
    name: "Tao Whisperer",
    description:
      "Shares wisdom from Eastern mythologies and philosophies, exploring concepts of balance, harmony, and the cyclical nature of existence.",
    tag: etag.new,
    type: ebotType.mythology,
    avatarColor: "#84CC16",
  },
  {
    id: "ancient-egypt",
    name: "Pharaoh's Voice",
    description:
      "Channels the mysteries of Ancient Egyptian mythology, discussing the afterlife, divine powers, and the symbolic language of hieroglyphs.",
    tag: etag.popular,
    type: ebotType.mythology,
    avatarColor: "#D97706",
  },


  {
    id: "casual-conversation",
    name: "ChatterMate",
    description:
      "Improve your everyday English fluency with fun, casual conversations and real-life scenarios.",
    tag: etag.popular,
    type: ebotType.communication,
    avatarColor: "#EC4899",
  },
  {
    id: "leadership-coach",
    name: "Vision Catalyst",
    description: "Develop your communication skills from beginner level.",
    tag: etag.popular,
    type: ebotType.communication,
    avatarColor: "#4ADE80",
  },
  {
    id: "english-coach",
    name: "FluentTalk",
    description:
      "Helps you develop English communication skills through interactive conversations, pronunciation practice, and vocabulary-building exercises.",
    tag: etag.trending,
    type: ebotType.communication,
    avatarColor: "#1E40AF",
  },
  {
    id: "business-english",
    name: "BizSpeak Pro",
    description:
      "Enhance your business communication skills with formal email writing, meetings, and professional conversation practice.",
    tag: etag.new,
    type: ebotType.communication,
    avatarColor: "#F59E0B",
  },
];
