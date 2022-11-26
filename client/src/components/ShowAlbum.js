import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ShowAlbum({openModal, setShowModal, url}) {
  let subtitle;

  function openModal() {
    setShowModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={openModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="ALBUM"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <img src={url} onClick={closeModal} style={{ maxHeight: '300px' }} />
      </Modal>
    </div>
  );
}

export default ShowAlbum;