function unsplash(id: string, width = 1600) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`
}

export const photos = {
  journey: {
    src: unsplash("photo-1511632765486-a01980e01a18", 1400),
    alt: "Four friends standing together at sunset, looking out over a valley",
  },
  path: {
    src: unsplash("photo-1441974231531-c6227db76b6e", 1600),
    alt: "A sunlit forest path between tall trees",
  },
  team: {
    src: unsplash("photo-1522202176988-66273c2fd55f", 1400),
    alt: "Three colleagues laughing together over laptops at a wooden table",
  },
}

export const countryPhotos: Record<string, { src: string; alt: string }> = {
  germany: {
    src: unsplash("photo-1560969184-10fe8719e047", 1400),
    alt: "A person walking toward the Brandenburg Gate in Berlin",
  },
  canada: {
    src: unsplash("photo-1517935706615-2717063c2225", 1400),
    alt: "Toronto skyline and the CN Tower in golden light",
  },
  ireland: {
    src: unsplash("photo-1549918864-48ac978761a4", 1400),
    alt: "A Dublin street leading toward a stone church at dusk",
  },
  "united-kingdom": {
    src: unsplash("photo-1513635269975-59663e0ac1ad", 1400),
    alt: "Aerial view of Tower Bridge and the Thames in London",
  },
}
