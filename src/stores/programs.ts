// import api from '@/configs/router/axios';
import { create } from 'zustand'


export type CardType = {
  img: string;
  title: string;
  rate: string;
  reviews: string;
  university: string;
  tag: string;
  time: string;
  filters: string[]
};

const card: CardType = {
  img: "/assets/img/university/catalog/img.png",
  title: "Master degree in Mathematics and Computer Science",
  rate: "4,5",
  reviews: "1k",
  university: "Kyiv University",
  time: "4h50m",
  tag: "",
  filters: []
};
const items = Array.from({ length: 9 }, (_, index) => ({ ...card, title: card.title + index }));

type StoreType = {
  cards: CardType[],
  tags: string[],
  setTags: (val: string[]) => void
  filters: string[],
  setFilters: (val: string[]) => void
  fetchCards: () => void
  search: string,
  setSearch: (val: string) => void
  cardsFiltered: () => CardType[],
}


const usePrograms = create<StoreType>((set, get) => ({
  cards: [],
  tags: [],
  setTags: (val) => set({ tags: val }),
  filters: [],
  setFilters: (val) => set({ filters: val }),
  search: "",
  setSearch: (val) => set({ search: val }),
  fetchCards: async () => {
    const data = items;

    const tagsPool = ["design", "computer-science", "buisness", "marketing"];
    const degreeTypes = ["non-degree", "undergraduate", "graduate", "doctoral"];
    const languages = ["english", "ukrainian"];
    const modes = ["online", "on-campus"];
    const tuitions = ["free", "10k-100k"];
    const durations = ["1-3-hours", "3-6-hours"];

    const cardsWithTags = data.map((card: CardType) => ({
      ...card,
      tag: tagsPool[Math.floor(Math.random() * tagsPool.length)],
      filters: [
        degreeTypes[Math.floor(Math.random() * degreeTypes.length)],
        languages[Math.floor(Math.random() * languages.length)],
        modes[Math.floor(Math.random() * modes.length)],
        tuitions[Math.floor(Math.random() * tuitions.length)],
        durations[Math.floor(Math.random() * durations.length)]
      ],
    }));

    set({ cards: cardsWithTags });
  },

  cardsFiltered: () => {
    const { cards, search, tags, filters } = get();

    const trimmedSearch = search.trim().toLowerCase();

    return cards.filter((card) => {
      const matchesSearch = !trimmedSearch || card.title.toLowerCase().includes(trimmedSearch);

      const matchesTag = tags.length ? tags.includes(card.tag) : true;
      const matchesFilters = filters.length ? card.filters.some(filItem => filters.includes(filItem)) : true;

      return (
        matchesSearch &&
        matchesTag &&
        matchesFilters
      );
    });
  }
}))

export default usePrograms