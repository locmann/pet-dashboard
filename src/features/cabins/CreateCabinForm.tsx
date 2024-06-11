import styled from 'styled-components';
import Form from 'ui/Form.ts';
import Input from 'ui/Input.ts';
import Textarea from 'ui/Textarea.ts';
import FileInput from 'ui/FileInput.ts';
import Button from 'ui/Button.ts';
import { useForm } from 'react-hook-form';
import { CabinInsertType } from 'features/cabins/cabinType.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCabin } from 'services/apiCabins.ts';
import toast from 'react-hot-toast';

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CabinInsertType>();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (cabin: CabinInsertType) => addCabin(cabin),
    onSuccess: () => {
      reset();
      return queryClient.invalidateQueries(['cabins']);
    },
    onError: (err: Error) => toast.error(err.message),
  });

  const onSubmit = (data: CabinInsertType) => {
    mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          {...register('name', { required: true })}
        />
        {errors.name && <Error>This field is required</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register('maxCapacity', { required: true, min: 1 })}
        />
        {errors.maxCapacity && <Error>This field is required</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register('regularPrice', { required: true })}
        />
        {errors.regularPrice && <Error>This field is required</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register('discount', { required: true })}
        />
        {errors.discount && <Error>This field is required</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          id="description"
          defaultValue=""
          {...register('description')}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          {...register('image')}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => reset()}
        >
          Cancel
        </Button>
        <Button>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
