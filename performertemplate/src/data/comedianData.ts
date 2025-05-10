// This file contains all the data for the comedian's website
// Edit this file to update the website content

export interface Show {
  id: string;
  date: string;
  venue: string;
  location: string;
  ticketLink: string;
  sold_out?: boolean;
}

export interface VideoClip {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  date: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export const comedianInfo = {
  name: "Alex Johnson",
  tagline: "Comedy with a side of chaos",
  bio: "Alex Johnson is a stand-up comedian known for sharp observations and unexpected punchlines. With appearances on Comedy Central, Netflix, and major comedy festivals around the world, Alex brings a unique perspective to everyday situations. When not touring, Alex can be found in New York City, developing new material and mentoring up-and-coming comedians.",
  profileImage: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  heroImage: "https://images.pexels.com/photos/5692284/pexels-photo-5692284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  email: "booking@alexjohnsoncomedy.com",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://instagram.com/alexjohnsoncomedy"
    },
    {
      platform: "X",
      url: "https://x.com/alexjohnsoncomedy"
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/alexjohnsoncomedy"
    },
    {
      platform: "TikTok",
      url: "https://tiktok.com/@alexjohnsoncomedy"
    }
  ],
  press: [
    {
      source: "Comedy Times",
      quote: "Hilarious and thought-provoking... Johnson is the voice of a generation.",
      year: "2023"
    },
    {
      source: "Laugh Review",
      quote: "One of the most innovative comedians working today. A must-see performer.",
      year: "2022"
    },
    {
      source: "The Daily Joke",
      quote: "Alex Johnson's new special is a masterclass in timing and delivery.",
      year: "2021"
    }
  ]
};

export const upcomingShows: Show[] = [
  {
    id: "show1",
    date: "2025-01-15",
    venue: "The Comedy Store",
    location: "Los Angeles, CA",
    ticketLink: "https://www.thecomedystore.com/tickets"
  },
  {
    id: "show2",
    date: "2025-01-22",
    venue: "Laugh Factory",
    location: "Chicago, IL",
    ticketLink: "https://www.laughfactory.com/tickets"
  },
  {
    id: "show3",
    date: "2025-02-05",
    venue: "Comedy Cellar",
    location: "New York, NY",
    ticketLink: "https://www.comedycellar.com/tickets",
    sold_out: true
  },
  {
    id: "show4",
    date: "2025-02-18",
    venue: "Punch Line",
    location: "San Francisco, CA",
    ticketLink: "https://www.punchlinecomedyclub.com/tickets"
  },
  {
    id: "show5",
    date: "2025-03-10",
    venue: "Just For Laughs Festival",
    location: "Montreal, Canada",
    ticketLink: "https://www.hahaha.com/tickets"
  }
];

export const videoClips: VideoClip[] = [
  {
    id: "clip1",
    title: "Dating in the Digital Age",
    thumbnailUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "https://youtube.com/watch?v=example1",
    date: "2024-12-01",
    description: "Alex tackles the absurdities of modern dating apps and online relationships."
  },
  {
    id: "clip2",
    title: "Airport Security Theater",
    thumbnailUrl: "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "https://youtube.com/watch?v=example2",
    date: "2024-10-15",
    description: "A hilarious take on the strange rituals of airport security."
  },
  {
    id: "clip3",
    title: "Family Reunions",
    thumbnailUrl: "https://images.pexels.com/photos/7991576/pexels-photo-7991576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "https://youtube.com/watch?v=example3",
    date: "2024-08-22",
    description: "Alex shares stories about the chaos and comedy of family gatherings."
  },
  {
    id: "clip4",
    title: "Live at Madison Square Garden",
    thumbnailUrl: "https://images.pexels.com/photos/11989083/pexels-photo-11989083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "https://youtube.com/watch?v=example4",
    date: "2024-06-30",
    description: "Highlights from Alex's sold-out show at MSG."
  }
];