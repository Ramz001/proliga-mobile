import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '@/utils/supabase'

export const fetchSeason = createAsyncThunk('season/fetchSeason', async () => {
  const { data, error } = await supabase
    .from('season')
    .select('id, name, active')
    .eq('active', 'TRUE')
    .is('deleted_at', null)

  return { data, error }
})
