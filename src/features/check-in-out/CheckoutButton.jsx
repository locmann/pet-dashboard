import Button from '../../ui/Button.ts';

function CheckoutButton({ bookingId }) {
  return (
    <Button
      variation="primary"
      size="small"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
