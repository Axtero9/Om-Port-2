// Portfolio Video Data organized by client's numbered sequence
const PORTFOLIO_DATA = {
  // Category 1: Contents (Reels / Social Content)
  contents: {
    title: "Social & Brand Content",
    subtitle: "High-retention vertical reels for creators, fitness, retail & lifestyle",
    categoryNumber: "01",
    aspectRatio: "9-16",
    subcategories: ["all", "creators", "gym", "store", "other"],
    items: [
      // CREATORS
      {
        id: "c-creator-1",
        title: "Creator Spotlight #1",
        category: "contents",
        subcategory: "creators",
        tags: ["Creator", "Fast Cuts", "Storytelling"],
        videoSrc: "videos/CONTENTS/CREATORS/1.mp4",
        poster: "thumbnails/CONTENTS_CREATORS_1.webp",
        aspect: "9/16",
        featured: true
      },
      {
        id: "c-creator-2",
        title: "Creator Showcase #2",
        category: "contents",
        subcategory: "creators",
        tags: ["Vlog", "Cinematic", "Color Grade"],
        videoSrc: "videos/CONTENTS/CREATORS/2.mp4",
        poster: "thumbnails/CONTENTS_CREATORS_2.webp",
        aspect: "9/16"
      },
      {
        id: "c-creator-3",
        title: "Visual Reel #3",
        category: "contents",
        subcategory: "creators",
        tags: ["Reel Edit", "Motion Hooks", "Dynamic"],
        videoSrc: "videos/CONTENTS/CREATORS/3.mp4",
        poster: "thumbnails/CONTENTS_CREATORS_3.webp",
        aspect: "9/16"
      },
      {
        id: "c-creator-4",
        title: "High-Energy Cut #4",
        category: "contents",
        subcategory: "creators",
        tags: ["Sound Design", "Pacing", "Effects"],
        videoSrc: "videos/CONTENTS/CREATORS/4.mp4",
        poster: "thumbnails/CONTENTS_CREATORS_4.webp",
        aspect: "9/16"
      },
      // GYM
      {
        id: "c-gym-1",
        title: "Athlete Intensity Cut #1",
        category: "contents",
        subcategory: "gym",
        tags: ["Fitness", "Speed Ramps", "Bass Heavy"],
        videoSrc: "videos/CONTENTS/GYM/1.mp4",
        poster: "thumbnails/CONTENTS_GYM_1.webp",
        aspect: "9/16",
        featured: true
      },
      {
        id: "c-gym-2",
        title: "Hardcore Workout Reel #2",
        category: "contents",
        subcategory: "gym",
        tags: ["Gym Promo", "Transitions", "Grit"],
        videoSrc: "videos/CONTENTS/GYM/2.mp4",
        poster: "thumbnails/CONTENTS_GYM_2.webp",
        aspect: "9/16"
      },
      {
        id: "c-gym-3",
        title: "Power & Form Reel #3",
        category: "contents",
        subcategory: "gym",
        tags: ["Aesthetics", "Slow-Mo", "Beat Drop"],
        videoSrc: "videos/CONTENTS/GYM/3.mp4",
        poster: "thumbnails/CONTENTS_GYM_3.webp",
        aspect: "9/16"
      },
      {
        id: "c-gym-4",
        title: "Championship Prep #4",
        category: "contents",
        subcategory: "gym",
        tags: ["Motivation", "Cinematic Gym", "Hype"],
        videoSrc: "videos/CONTENTS/GYM/4.mp4",
        poster: "thumbnails/CONTENTS_GYM_4.webp",
        aspect: "9/16"
      },
      // STORE / RETAIL
      {
        id: "c-store-1",
        title: "Store Ambience #1",
        category: "contents",
        subcategory: "store",
        tags: ["Store", "Lifestyle", "Commercial"],
        videoSrc: "videos/CONTENTS/STORE/1.mp4",
        poster: "thumbnails/CONTENTS_STORE_1.webp",
        aspect: "9/16"
      },
      {
        id: "c-store-2",
        title: "Product Retail Cut #2",
        category: "contents",
        subcategory: "store",
        tags: ["Retail", "Fashion", "Clean Pacing"],
        videoSrc: "videos/CONTENTS/STORE/2.mp4",
        poster: "thumbnails/CONTENTS_STORE_2.webp",
        aspect: "9/16"
      },
      {
        id: "c-store-3",
        title: "Showroom Experience #3",
        category: "contents",
        subcategory: "store",
        tags: ["Interior", "Aesthetic", "Smooth Flow"],
        videoSrc: "videos/CONTENTS/STORE/3.mp4",
        poster: "thumbnails/CONTENTS_STORE_3.webp",
        aspect: "9/16"
      },
      {
        id: "c-store-4",
        title: "Brand Storefront #4",
        category: "contents",
        subcategory: "store",
        tags: ["Footwear", "Urban", "Commercial"],
        videoSrc: "videos/CONTENTS/STORE/4.mp4",
        poster: "thumbnails/CONTENTS_STORE_4.webp",
        aspect: "9/16"
      },
      // OTHER
      {
        id: "c-other-1",
        title: "Break The Pattern",
        category: "contents",
        subcategory: "other",
        tags: ["Creative Concept", "Typography", "Motion"],
        videoSrc: "videos/CONTENTS/OTHER/BREAK THE PATTERN.mp4",
        poster: "thumbnails/CONTENTS_OTHER_BREAK THE PATTERN.webp",
        aspect: "9/16"
      },
      {
        id: "c-other-2",
        title: "Honorable Moment",
        category: "contents",
        subcategory: "other",
        tags: ["Cinematic", "Story Reel", "Sound FX"],
        videoSrc: "videos/CONTENTS/OTHER/HONORABLE.mp4",
        poster: "thumbnails/CONTENTS_OTHER_HONORABLE.webp",
        aspect: "9/16"
      },
      {
        id: "c-other-3",
        title: "Motion Vignette 14823",
        category: "contents",
        subcategory: "other",
        tags: ["Visual Snippet", "Experimental", "Grade"],
        videoSrc: "videos/CONTENTS/OTHER/Video-14823.mp4",
        poster: "thumbnails/CONTENTS_OTHER_Video-14823.webp",
        aspect: "9/16"
      }
    ]
  },

  // Category 2: Music Videos (16:9 Landscape Cinematic)
  musicVideos: {
    title: "Music Videos",
    subtitle: "Rhythm-synced cinematic music films, narrative transitions & high-octane VFX",
    categoryNumber: "02",
    aspectRatio: "16-9",
    items: [
      {
        id: "mv-ashu",
        title: "ASHU MUSIC X MINI KILLER - BITCH",
        subtitle: "Official Music Video • 4K 60FPS Edit & VFX",
        tags: ["Music Video", "4K HDR", "Beat Sync", "VFX Grading"],
        videoSrc: "videos/MUSIC VIDEOS/ASHU_MUSIC.webm",
        poster: "thumbnails/MUSIC VIDEOS_ASHU_MUSIC.webp",
        aspect: "16/9",
        duration: "Official Video",
        featured: true
      },
      {
        id: "mv-freeverse",
        title: "FREE VERSE",
        subtitle: "Cinematic Rap Track Visual Experience",
        tags: ["Rap Music Video", "Fast Transitions", "Urban Grade"],
        videoSrc: "videos/MUSIC VIDEOS/FREE VERSE.mp4",
        poster: "thumbnails/MUSIC VIDEOS_FREE VERSE.webp",
        aspect: "16/9",
        duration: "Music Video",
        featured: true
      },
      {
        id: "mv-xdg",
        title: "XDG - The Grand Visuals",
        subtitle: "Cinematic Visual Project • Heavy Sound Design & 3D Elements",
        tags: ["Cinematic Film", "Heavy VFX", "Sound Design", "Master Cut"],
        videoSrc: "videos/MUSIC VIDEOS/XDG.mp4",
        poster: "thumbnails/MUSIC VIDEOS_XDG.webp",
        aspect: "16/9",
        duration: "Master Cut",
        isCentered: true // Center card as drawn in notebook
      }
    ]
  },

  // Category 3: AI Fashion (9:16 Vertical on loop)
  aiFashion: {
    title: "AI Fashion Visuals",
    subtitle: "Futuristic fashion aesthetics & generative couture motion loops",
    categoryNumber: "03",
    aspectRatio: "9-16",
    onLoop: true,
    items: [
      {
        id: "ai-f-1",
        title: "Neo-Tokyo Haute Runway",
        tags: ["Generative Fashion", "Cyber Couture", "AI Loop"],
        videoSrc: "videos/AI FASHION VISUALS/1st.mp4",
        poster: "thumbnails/AI FASHION VISUALS_1st.webp",
        aspect: "9/16"
      },
      {
        id: "ai-f-2",
        title: "Metamorphic Silk & Light",
        tags: ["Hyper-Real", "Fabric Dynamics", "AI Motion"],
        videoSrc: "videos/AI FASHION VISUALS/2nd.mp4",
        poster: "thumbnails/AI FASHION VISUALS_2nd.webp",
        aspect: "9/16"
      },
      {
        id: "ai-f-3",
        title: "Futuristic Streetwear Capsule",
        tags: ["Editorial", "Atmospheric", "AI Generation"],
        videoSrc: "videos/AI FASHION VISUALS/3rd.mp4",
        poster: "thumbnails/AI FASHION VISUALS_3rd.webp",
        aspect: "9/16"
      },
      {
        id: "ai-f-4",
        title: "Avant-Garde Chroma Silhouette",
        tags: ["Chroma Lighting", "Runway Flow", "Styling"],
        videoSrc: "videos/AI FASHION VISUALS/4th.mp4",
        poster: "thumbnails/AI FASHION VISUALS_4th.webp",
        aspect: "9/16"
      },
      {
        id: "ai-f-5",
        title: "Cyber-Organza Edition",
        tags: ["Generative Video", "Vogue Aesthetic", "Couture"],
        videoSrc: "videos/AI FASHION VISUALS/5th.mp4",
        poster: "thumbnails/AI FASHION VISUALS_5th.webp",
        aspect: "9/16"
      }
    ]
  },

  // Category 4: AI Visual & Motion (16:9 Landscape on loop)
  aiVisualMotion: {
    title: "AI Visual & Motion",
    subtitle: "Abstract generative motion design, surreal environments & VFX experiments",
    categoryNumber: "04",
    aspectRatio: "16-9",
    onLoop: true,
    items: [
      {
        id: "ai-vm-1",
        title: "Neural Dimension Shift",
        tags: ["Motion Design", "3D Surrealism", "AI Rendering"],
        videoSrc: "videos/AI VISUAL & MOTION/1ST.mp4",
        poster: "thumbnails/AI VISUAL & MOTION_1ST.webp",
        aspect: "16/9"
      },
      {
        id: "ai-vm-2",
        title: "Synthetic Landscape Flow",
        tags: ["Environment", "Atmospheric VFX", "Generative"],
        videoSrc: "videos/AI VISUAL & MOTION/2ND.mp4",
        poster: "thumbnails/AI VISUAL & MOTION_2ND.webp",
        aspect: "16/9"
      },
      {
        id: "ai-vm-3",
        title: "Liquid Chroma Waves",
        tags: ["Fluid Simulation", "Color Kinetic", "Abstract"],
        videoSrc: "videos/AI VISUAL & MOTION/3RD.mp4",
        poster: "thumbnails/AI VISUAL & MOTION_3RD.webp",
        aspect: "16/9"
      },
      {
        id: "ai-vm-4",
        title: "Cybernetic Particles & Void",
        tags: ["Particle VFX", "Glow Dynamics", "Loop"],
        videoSrc: "videos/AI VISUAL & MOTION/4TH.mp4",
        poster: "thumbnails/AI VISUAL & MOTION_4TH.webp",
        aspect: "16/9"
      }
    ]
  },

  // Category 5: AI Commercial (Vertical Product Commercial)
  aiCommercial: {
    title: "AI Product Commercial",
    subtitle: "High-impact AI commercial concepts engineered for modern brands",
    categoryNumber: "05",
    aspectRatio: "9-16",
    items: [
      {
        id: "ai-comm-1",
        title: "Cap Commercial • AI Brand Showcase",
        subtitle: "Generative Product Rendering, CGI Integration & Dynamic Ad Cut",
        tags: ["Product Commercial", "AI 3D Render", "Commercial Ad", "Brand Identity"],
        videoSrc: "videos/AI PRODUCT COMMERCIAL/CAP COMMERCIAL.mp4",
        poster: "thumbnails/AI PRODUCT COMMERCIAL_CAP COMMERCIAL.webp",
        aspect: "9/16",
        featured: true
      }
    ]
  },

  // Category 6: Visual Storytelling (9:16 Narrative Films)
  visualStorytelling: {
    title: "Visual Storytelling",
    subtitle: "Emotional narrative shorts, lyrical visuals & cinematic storytelling",
    categoryNumber: "06",
    aspectRatio: "9-16",
    items: [
      {
        id: "vs-1",
        title: "BITCH • Final Cut",
        tags: ["Narrative", "Music Visualizer", "Drama", "Cinematic"],
        videoSrc: "videos/VISUAL STORYTELLING/BITCH FINAL.mp4",
        poster: "thumbnails/VISUAL STORYTELLING_BITCH FINAL.webp",
        aspect: "9/16"
      },
      {
        id: "vs-2",
        title: "JOH ISHQ HUA",
        tags: ["Poetic Visual", "Romantic Mood", "Color Pacing", "Story"],
        videoSrc: "videos/VISUAL STORYTELLING/JOH ISHQ HUA.mp4",
        poster: "thumbnails/VISUAL STORYTELLING_JOH ISHQ HUA.webp",
        aspect: "9/16"
      },
      {
        id: "vs-3",
        title: "KHALI GHAR • The Solitude",
        tags: ["Melancholy", "Slow Paced", "Atmosphere", "Narrative"],
        videoSrc: "videos/VISUAL STORYTELLING/KHALI GHAR FINAL.mp4",
        poster: "thumbnails/VISUAL STORYTELLING_KHALI GHAR FINAL.webp",
        aspect: "9/16"
      },
      {
        id: "vs-4",
        title: "TALHA ANJUM • Tribute Visual",
        tags: ["Hip-Hop Culture", "Performance Story", "VFX Highlights"],
        videoSrc: "videos/VISUAL STORYTELLING/TALHA ANJUM.mp4",
        poster: "thumbnails/VISUAL STORYTELLING_TALHA ANJUM.webp",
        aspect: "9/16"
      }
    ]
  }
};
