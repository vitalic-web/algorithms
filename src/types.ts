import { Ref } from 'vue';

export interface EventTarget extends Event {
  target: HTMLDivElement;
}

export type DisplayArray = number[]

export type SearchNumber = Ref<number>

export type ResultNumber = Ref<number | undefined>

export type SearchIndex = Ref<number | string | null>
