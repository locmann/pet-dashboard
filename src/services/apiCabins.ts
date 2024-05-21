import supabase from 'services/supabase.ts';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Error with cabins');
  }

  return data;
}
