import { create } from "zustand";

interface MarkdownStore {
  markdown: string;
  setMarkdown: (text: string) => void;
}

export const useMarkdownStore = create<MarkdownStore>((set) => ({
  markdown: "# Hello World",
  setMarkdown: (text: string) => set({ markdown: text }),
}));

// import useMarkdownStore from '../store/useMarkdownStore'

// const {markdown} = useMarkdownStore()
