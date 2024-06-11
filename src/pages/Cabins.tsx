import Heading from '../ui/Heading.ts';
import Row from '../ui/Row';
import CabinTable from 'features/cabins/CabinTable.tsx';
import Button from 'ui/Button.ts';
import { useState } from 'react';
import CreateCabinForm from 'features/cabins/CreateCabinForm.tsx';

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm(!showForm)}>Add cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
