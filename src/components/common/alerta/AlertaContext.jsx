import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AlertaContext = createContext();

export const useAlerta = () => {
  const context = useContext(AlertaContext);
  if (!context) {
    throw new Error('useAlerta debe ser usado dentro de un AlertaProvider');
  }
  return context;
};

export const AlertaProvider = ({ children }) => {
  const [alerta, setAlerta] = useState({ show: false, titulo: '', mensaje: '' });

  const mostrarAlerta = (titulo, mensaje) => {
    setAlerta({ show: true, titulo, mensaje });
  };

  const ocultarAlerta = () => {
    setAlerta({ show: false, titulo: '', mensaje: '' });
  };

  return (
    <AlertaContext.Provider value={{ alerta, mostrarAlerta, ocultarAlerta }}>
      {children}
    </AlertaContext.Provider>
  );
};

AlertaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
