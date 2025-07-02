import api from '@/configs/router/axios';
import { create } from 'zustand'


export type TypeCard = {
  tag: string;
  image: string;
  logo: string;
  name: string;
  rate: string;
  reviews: string;
  country: string;
  price: string;
  programs: {
    label: string;
    active: boolean;
  }[];
};

// const cardsData: TypeCard[] = [
//   {
//     tag: "marketing",
//     image: "/assets/img/explore-topics/universities/img-1.png",
//     logo: "/assets/img/explore-topics/universities/logo.png",
//     title: "Kyiv University",
//     rate: "4,5",
//     reviews: "1k",
//     country: "Ukrain",
//     price: "10k -80K",
//     programs: [
//       {
//         label: "Design",
//         active: false,
//       },
//       {
//         label: "Computer science",
//         active: true,
//       },
//       {
//         label: "Buisness",
//         active: false,
//       },
//       {
//         label: "Marketing",
//         active: false,
//       },
//     ],
//   },
//   {
//     tag: "buisness",
//     image: "/assets/img/explore-topics/universities/img-2.png",
//     logo: "/assets/img/explore-topics/universities/logo.png",
//     title: "Lviv University",
//     rate: "4,5",
//     reviews: "1k",
//     country: "Ukrain",
//     price: "10k -80K",
//     programs: [
//       {
//         label: "Design",
//         active: false,
//       },
//       {
//         label: "Computer science",
//         active: true,
//       },
//       {
//         label: "Marketing",
//         active: false,
//       },
//     ],
//   },
//   {
//     tag: "computer-science",
//     image: "/assets/img/explore-topics/universities/img-3.png",
//     logo: "/assets/img/explore-topics/universities/logo.png",
//     title: "Kharkiv University",
//     rate: "4,5",
//     reviews: "1k",
//     country: "Ukrain",
//     price: "10k -80K",
//     programs: [
//       {
//         label: "Computer science",
//         active: true,
//       },
//       {
//         label: "Buisness",
//         active: false,
//       },
//     ],
//   },
//   {
//     tag: "design",
//     image: "/assets/img/explore-topics/universities/img-3.png",
//     logo: "/assets/img/explore-topics/universities/logo.png",
//     title: "Kharkiv University",
//     rate: "4,5",
//     reviews: "1k",
//     country: "Ukrain",
//     price: "10k -80K",
//     programs: [
//       {
//         label: "Computer science",
//         active: true,
//       },
//       {
//         label: "Buisness",
//         active: false,
//       },
//     ],
//   },
//   {
//     tag: "buisness",
//     image: "/assets/img/explore-topics/universities/img-1.png",
//     logo: "/assets/img/explore-topics/universities/logo.png",
//     title: "Kyiv University",
//     rate: "4,5",
//     reviews: "1k",
//     country: "Ukrain",
//     price: "10k -80K",
//     programs: [
//       {
//         label: "Design",
//         active: false,
//       },
//       {
//         label: "Computer science",
//         active: true,
//       },
//       {
//         label: "Buisness",
//         active: false,
//       },
//       {
//         label: "Marketing",
//         active: false,
//       },
//     ],
//   },
//   {
//     tag: "design",
//     image: "/assets/img/explore-topics/universities/img-2.png",
//     logo: "/assets/img/explore-topics/universities/logo.png",
//     title: "Lviv University",
//     rate: "4,5",
//     reviews: "1k",
//     country: "Ukrain",
//     price: "10k -80K",
//     programs: [
//       {
//         label: "Design",
//         active: false,
//       },
//       {
//         label: "Computer science",
//         active: true,
//       },
//       {
//         label: "Marketing",
//         active: false,
//       },
//     ],
//   },
// ];

type StoreType = {
  cards: TypeCard[],
  tags: string[],
  fetchCards: () => void
  setTags: (val: string[]) => void
  search: string,
  setSearch: (val: string) => void
  cardsFiltered: () => TypeCard[],
}


const useUniversities = create<StoreType>((set, get) => ({
  cards: [],
  tags: [],
  setTags: (val) => set({ tags: val }),
  fetchCards: async () => {
    const { search } = get()
    const data = await api.get('/providers/providers', {
      params: {
        search: search
      }
    })

    const tagsPool = ["design", "computer-science", "buisness", "marketing"];

    const cardsWithTags = data.data.map((card: TypeCard) => ({
      ...card,
      tag: tagsPool[Math.floor(Math.random() * tagsPool.length)],
    }));

    set({ cards: cardsWithTags })
  },
  search: "",
  setSearch: (val) => set({ search: val }),
  cardsFiltered: () => {
    const { cards, search, tags } = get();

    const trimmedSearch = search.trim().toLowerCase();

    return cards.filter((card) => {
      const matchesSearch = !trimmedSearch || card.name.toLowerCase().includes(trimmedSearch);
      const matchesTags = tags.length ? tags.includes(card.tag) : true;
      return matchesSearch && matchesTags;
    });
  }
}))

export default useUniversities