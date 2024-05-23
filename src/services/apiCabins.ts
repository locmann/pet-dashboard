import supabase from 'services/supabase.ts';
import { CabinInsertType, CabinType } from 'features/cabins/cabinType.ts';
import toast from 'react-hot-toast';

export async function getCabins(): Promise<CabinType[]> {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    toast.error(error.message);
    throw new Error('Error with getting cabins');
  }

  return data;
}

export async function deleteCabin(id: number) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    toast.error(error.message);
    throw new Error('Error with deleting cabins');
  }
}

export async function addCabin(cabin: CabinInsertType) {
  const { error } = await supabase.from('cabins').insert([cabin]).select();

  if (error) {
    toast.error(error.message);
    throw new Error('Error with adding cabins');
  }
}
