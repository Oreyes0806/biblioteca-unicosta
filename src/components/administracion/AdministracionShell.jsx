import { Row, Col } from 'react-bootstrap';
import TablaLibros from './TablaLibros';
import FormularioLibro from './FormularioLibro';

const AdministracionShell = () => {
  return (
    <Row>
      <Col xs={12} lg={6}>
        <TablaLibros libros={[{ id: "2010de3f-c039-4a38-b717-b5f479bc3033", titulo: "Sample", autor: "Sample", descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, illo impedit. Quam nulla earum perferendis iure consequuntur debitis quaerat omnis autem exercitationem, quia a ea esse, expedita at molestias magni!", disponible: false, publicacion: "2000" }, { id: "e32094d2-8561-46c7-aa72-66f4f7439f30", titulo: "Sample", autor: "Sample", descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, illo impedit. Quam nulla earum perferendis iure consequuntur debitis quaerat omnis autem exercitationem, quia a ea esse, expedita at molestias magni!", disponible: false, publicacion: "2000" }, { id: "5c5e6a6d-c229-4496-b3ed-7a03d0cba34a", titulo: "Sample", autor: "Sample", descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, illo impedit. Quam nulla earum perferendis iure consequuntur debitis quaerat omnis autem exercitationem, quia a ea esse, expedita at molestias magni!", disponible: false, publicacion: "2000" }, { id: "5c2b1546-b052-4082-92f8-11856cf1158e", titulo: "Sample", autor: "Sample", descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, illo impedit. Quam nulla earum perferendis iure consequuntur debitis quaerat omnis autem exercitationem, quia a ea esse, expedita at molestias magni!", disponible: false, publicacion: "2000" }, { id: "d27a292f-19e0-4f49-9fdc-d6f9fb4f0e17", titulo: "Sample", autor: "Sample", descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, illo impedit. Quam nulla earum perferendis iure consequuntur debitis quaerat omnis autem exercitationem, quia a ea esse, expedita at molestias magni!", disponible: false, publicacion: "2000" }, { id: "832c634e-dafd-4b53-937a-72f99fd33ca4", titulo: "Sample", autor: "Sample", descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, illo impedit. Quam nulla earum perferendis iure consequuntur debitis quaerat omnis autem exercitationem, quia a ea esse, expedita at molestias magni!", disponible: false, publicacion: "2000" }]} />
      </Col>
      <Col xs={12} lg={6}>
        <FormularioLibro />
      </Col>
    </Row>
  );
};

export default AdministracionShell;