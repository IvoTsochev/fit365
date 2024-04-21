import { create } from 'zustand'
import { Session } from '@supabase/supabase-js'


interface IStore {
  session: Session | null
  setSession: (session: Session | null) => void
}

export const useStore = create<IStore>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}))