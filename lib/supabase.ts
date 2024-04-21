import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xabmiutcgohchaweofej.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhYm1pdXRjZ29oY2hhd2VvZmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NDg4OTMsImV4cCI6MjAyOTEyNDg5M30.pexBwc-cOX1aEc5y_GLZYo0i4HsPoRfkZ3elLXskVU8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})