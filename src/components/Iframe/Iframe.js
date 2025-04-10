import React, { useState } from "react";
import Modal from "react-modal";

import "./Iframe.css";

Modal.setAppElement("#root");

export default function FigmaIframe() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="IframeButton" onClick={() => setIsOpen(true)}>
        Icons Gallery
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            width: "80%",
            height: "80%",
            margin: "auto",
            padding: 0,
            borderRadius: "12px",
            overflow: "hidden",
          },
        }}
      >
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="100%"
          height="100%"
          title="Figma Embed"
          src="https://embed.figma.com/design/US9Vlnn18hxcJtzMVO1FMT/Sizebay-Icons?node-id=0-1&embed-host=share"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
}
