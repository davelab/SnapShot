import React from "react";
import Map from './Map';
import Modal from './Modal';


export default function ModalMap({hide, isShowing, lat, lng}) {
  return (
    <Modal
        isShowing={isShowing}
        hide={hide}
        body={<Map {...{lat, lng}} />}
      />
  );
}
