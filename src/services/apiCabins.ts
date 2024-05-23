import supabase, { supabaseUrl } from 'services/supabase.ts';
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
  const imageName = `${Math.random()}-${cabin.image[0].name}`.replace('/', '');

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...cabin, image: imagePath }])
    .select()
    .returns<CabinType>();

  if (error) {
    toast.error(error.message);
    throw new Error('Error with adding cabins');
  }

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, cabin.image[0]);

  if (storageError) {
    toast.error(storageError.message);
    await supabase.from('cabins').delete().eq('id', data.id);
    throw new Error('Error with uploading image');
  }
}
