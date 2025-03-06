export type MonthData = {
  experience?: string;
  intention?: string;
  visualization?: string;
  meditation?: string[];
};

export type SessionData = {
  [key: string]: {
    name: string;
    tagline: string;
    time: string;
    image: string;
    months: {
      [month: string]: MonthData;
    };
  };
};

export const sessionData: SessionData = {
  james: {
    name: "James",
    tagline: "Seeing reality clearly",
    time: "Men's Group Meeting",
    image: "https://cdn.midjourney.com/45f33bcb-98dd-470a-8539-ce08b3e5160d/0_1.png",
    months: {
      february2025: {
        experience: "James experienced a month of tremendous trust in himself and the universe despite challenges. He had a creative and energetic period in New York, utilizing his space in Meatpacking District for events and launching his livestream company. He met someone named Adina and began seeing her. Though his bank account became depleted and he had to leave New York to stay with his parents, he viewed this transition with perspective, feeling proud of how authentically he showed up. James got a new tattoo with the Sanskrit word \"asto\" (from untruth) before leaving, symbolizing his desire for a deeper relationship with reality."
      },
      march2025: {
        intention: "I intend to focus on seeing reality more clearly ('asto' - moving away from untruth). I want to recognize when opportunities would be bad for me in the long run and have the patience not to pursue them impulsively. I aim to find peace in stillness rather than constantly seeking peak experiences, while continuing to produce 'magic' in my life.",
        visualization: "Sanskrit word 'asto' transforming into clear path forward, illusions dissolving, authentic presence emerging, stillness revealing hidden magic",
        meditation: [
          "James, visualize yourself standing at the threshold between untruth and clarity. Each breath clears away another layer of illusion. Feel that Sanskrit word 'asto' resonating within you.",
          "Notice how, with each exhalation, you release one more expectation, one more assumption about how things should be. In stillness, you find the magic that has always been there - not in constant peaks, but in the gentle undulations of authentic presence.",
          "You are learning that real creativity doesn't require constant movement; it thrives in the spaces between. Trust this process of coming home to truth."
        ]
      }
    }
  },
  
  andrew: {
    name: "Andrew",
    tagline: "Wellness, sobriety, and love",
    time: "Men's Group Meeting",
    image: "https://cdn.midjourney.com/4276d51a-962b-41ca-ba0d-27128b789282/0_3.png",
    months: {
      february2025: {
        experience: "Andrew returned to New York after 2.5 months away, having recently ended a relationship with a woman he was dating in Mexico who wanted financial support. He's experiencing sadness about the breakup while settling back into New York routines. His part-time work ended in February, and he'll start new part-time work soon that pays about $4,000/month. Andrew describes himself as a \"poor man's power broker,\" oscillating between revolutionary ideas and financial insecurity. Despite the challenges, he's focusing on wellness, meditation, and sobriety, seeking out high-vibe communities that prioritize wellness activities."
      },
      march2025: {
        intention: "I want to find newer and different communities focused on wellness, meditation, and sobriety. I aim to make significant money (saving $1 million in 5 years) while maintaining my well-being. I'm committed to monogamous dating after realizing non-monogamy didn't resolve my restlessness. I seek love while maintaining the stillness and presence I cultivated during my time away.",
        visualization: "Heart surrounded by healing community, meditation space transforming into financial abundance, path to wholeness through conscious choices",
        meditation: [
          "Andrew, place your hand on your heart and feel its steady rhythm. This steadiness exists within you, beyond any relationship, beyond any external validation.",
          "As you breathe, acknowledge the wisdom you discovered in Costa Rica - that the search for 'more' is endless, but presence is always available. Feel how your natural state is one of balance.",
          "Your journey toward monogamy is actually a journey toward wholeness within yourself. The love you seek externally already flows through you when you share your gifts of presence with others and now, increasingly, with yourself."
        ]
      }
    }
  },
  
  max: {
    name: "Max",
    tagline: "Sustainable balance",
    time: "Men's Group Meeting",
    image: "https://cdn.midjourney.com/067e2d2c-be05-4eb0-9d23-431366949b98/0_3.png",
    months: {
      february2025: {
        experience: "Max had a busy month at work, taking on a leadership role with a new team doing front-end development. He often worked late into the evening after helping others during the day. The hard work paid off as he received a promotion, which was especially fulfilling as a self-taught developer who sometimes experiences imposter syndrome. Max traveled to Colombia with his girlfriend to celebrate her 30th birthday, where he obtained his open water diving certificate. He had time for self-reflection during this trip, waking up early and carving out time for himself."
      },
      march2025: {
        intention: "I want to create a more sustainable balance between work, self-care, and relationships. I aim to carve out dedicated time in the mornings to work out and evenings to read, cook, and spend time with friends. I want to shorten the margin between the three cornerstones of my life (self-care, work, and relationships) to create a more balanced and sustainable lifestyle while maintaining my professional momentum.",
        visualization: "Flowing river branching into three balanced streams, each nourishing different aspects of life, energy in perfect equilibrium",
        meditation: [
          "Max, imagine your energy as a flowing river. Until now, this river has sometimes rushed forcefully in one direction, creating imbalance. With each breath, visualize this river branching naturally, nourishing all aspects of your life - your work, your relationships, your self-care.",
          "Feel the satisfaction of your promotion as evidence of your capability. The balance you seek isn't about perfect equality every day but about honoring each aspect of your life in its season.",
          "Your relationship flourishes when you're fulfilled, and you're fulfilled when you honor all parts of yourself."
        ]
      }
    }
  },
  
  mike: {
    name: "Mike",
    tagline: "Presence through transition",
    time: "Men's Group Meeting",
    image: "https://cdn.midjourney.com/7cf8143b-c8f4-415e-b63d-4cfacee7605b/0_2.png",
    months: {
      february2025: {
        experience: "Mike broke his rib at the beginning of February, which limited his ability to exercise - a key mood regulation tool for him. He spent much time at his parents' house, experiencing sadness but finding it \"welcomed\" as part of a grieving process. He went on a few dates with a woman but knew she wasn't right for him, yet found himself repeatedly reconnecting with her before she eventually ended things."
      },
      march2025: {
        intention: "I want to show up with presence for the transitions ahead, especially as I prepare to leave for a Zen Mountain Monastery where I'll participate in intense meditation retreats. I intend to embrace the structure of monastery life (\"the warm hug of death of the schedule\") while continuing my meditation teaching work. I aim to maintain patience with my father, with whom I'm developing a deeper connection as I see and hold space for his father's \"little boy\" and associated fears and anxieties.",
        visualization: "Monastery gates opening to reveal structured freedom, transitional spaces between worlds, patience embodied as warm light",
        meditation: [
          "Mike, as you prepare for significant transitions, breathe into the space of surrender. Feel the liberation in consciously choosing sacrifice without martyrdom. Each breath strengthens your capacity to be present with change.",
          "The monastery schedule you describe as 'the warm hug of death' is actually teaching you that structure creates freedom. As you hold space for your father's inner child, recognize that you're also holding space for your own.",
          "The patience you've cultivated is a gift that will serve you through every transition. Trust that nomadic or rooted, you carry home within you."
        ]
      }
    }
  },
  
  seth: {
    name: "Seth",
    tagline: "Integration and self-commitment",
    time: "Men's Group Meeting",
    image: "https://cdn.midjourney.com/99337a70-159d-425c-bd9f-87cd1e7d8abf/0_2.png",
    months: {
      february2025: {
        experience: "Seth has been navigating the aftermath of a manic episode that occurred at the end of January. He's been observing his different perspectives in various mental states and working to reconcile them to find what's true. He finds the blind spots he has when completely sober particularly concerning."
      },
      march2025: {
        intention: "I want to do things for myself, specifically getting back into yoga to prepare for my upcoming retreat in India and taking Zouk dance classes. I also aim to cut back on cannabis use, particularly while traveling. I'm trying to be more open-minded in dating, exploring connections with people I might not have considered before. My overall goal is to follow through on commitments to myself and explore activities that bring me fulfillment beyond my normal routines.",
        visualization: "Different perspectives merging into unified whole, yoga poses transitioning into dance movements, self-promises manifesting as tangible paths",
        meditation: [
          "Seth, place awareness on the different perspectives within you - the manic energy, the questioning mind, the still observer. Breathe space around each of these aspects, honoring their wisdom while not identifying completely with any single perspective.",
          "With each breath, feel yourself integrating these fragments into a more cohesive whole. Your commitment to following through on promises to yourself - the yoga, the dance classes - is building self-trust.",
          "As you prepare for India, know that your journey there was set in motion by a part of you that recognized something you needed. Trust the process of becoming more whole."
        ]
      }
    }
  },
  
  david: {
    name: "David",
    tagline: "Grounded purpose",
    time: "Men's Group Meeting",
    image: "https://cdn.midjourney.com/96cc5a50-7920-4022-971a-d9fb2ea076e1/0_1.png",
    months: {
      february2025: {
        experience: "David spent the entire month traveling with his partner Andrea, leaving him feeling somewhat burnt out both physically and mentally. His company was acquired after a year of discussions, and while he was well-received by the new ownership, he learned many of his colleagues will be let go."
      },
      march2025: {
        intention: "I aim to find more stillness and mental grounding as I prepare for spring and beyond. I want to be intentional about any sacrifices I make for work, potentially being less social temporarily to make time for work and other hobbies. I'm processing concerns about American political identity and seeking ways to be more intentionally giving back on a daily basis, particularly as my partner Andrea (who is Mexican) faces immigration uncertainty in the current political climate.",
        visualization: "Roots extending deep into earth while traveling, relationship foundation strengthening, conscious action creating ripples of positive change",
        meditation: [
          "David, visualize yourself planting roots even amidst movement. Your breath connects you to the earth beneath you, whether you're traveling or at home. Feel the grounding that comes from knowing your purpose and living your values.",
          "As you navigate work pressure and political concerns, recognize that your foundation remains stable. Your relationship with Andrea flourishes because you both honor the balance between togetherness and individual expression.",
          "As you seek more intentional ways of giving back, trust that your conscious awareness is already shifting the world around you. Your concern is itself a form of action."
        ]
      }
    }
  },
  
  justin: {
    name: "Justin",
    tagline: "Self-compassion and fulfillment",
    time: "Men's Group Meeting",
    image: "https://cdn.midjourney.com/2590358e-c89a-4e81-874e-df829277b5e0/0_2.png",
    months: {
      february2025: {
        experience: "Justin describes February as feeling strangely \"still\" internally, despite actively building a routine, focusing on health, deepening friendships, and making new connections. He's experiencing a sense of unfulfillment and cognitive dissonance - even big events like his mother's health emergency (she was hospitalized but has recovered) didn't evoke the emotional depth he expected."
      },
      march2025: {
        intention: "I want to find pleasure and fulfillment in being of service to myself, having recognized that I find activities like cooking much more gratifying when done for others than for myself alone. I'm seeking a passion project that genuinely excites me and learning to enjoy my accomplishments even when they're just for myself. I aim to find the same joy in self-care that I experience when caring for others.",
        visualization: "Hands offering compassion to self, inner warmth radiating outward, giving and receiving becoming one unified movement",
        meditation: [
          "Justin, place your hands on your heart and stomach, connecting with your center. Feel the warmth generating from within you. As you breathe, imagine directing the same care, attention, and love that you give so freely to others back toward yourself.",
          "Each exhale softens any resistance to receiving your own kindness. Your achievements are meaningful because you accomplished them, not because of how others perceive them. The passion you seek is already within you, waiting to be recognized.",
          "The joy of cooking for yourself can be as rich as cooking for others when you view yourself as worthy of your own care. You are both the giver and receiver of your own compassion."
        ]
      }
    }
  }
}

// ... rest of the sessions 