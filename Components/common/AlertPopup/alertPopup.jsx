import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AlertPopup = ({ message, undo, onClose, autoCloseTimeout }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, autoCloseTimeout);

    return () => {
      clearTimeout(timer);
    };
  }, [autoCloseTimeout, onClose]);

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50">
      <div className="bg-black opacity-10 fixed inset-0"></div> {/* Black background with opacity */}
      <div className="card bg-white rounded-lg shadow-md border mt-5 px-5 py-5 z-20 relative">
        <p className="text-[15px] text-black font-bold">{message} &nbsp;
        <span className="cursor-pointer text-center text-orange-A200 text-[15px] font-bold">{undo}</span>
        </p>
      </div>
    </div>

  );
};

AlertPopup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  autoCloseTimeout: PropTypes.number.isRequired,
};

export default AlertPopup;
