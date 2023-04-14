import React, { useState } from 'react'

import { QRCode } from 'qrcode'
import qrcode from "qrcode";
import QrReader from "react-qr-reader";

export const Scanner = () => {
    const [imageQR, setImageQR] = useState();
     const generateQRCode = async () => {
    const image = await qrcode.toDataURL("20104064");
    setImageQR(image);
  };


  const [webcamResult, setWebcamResult] = useState();
  const webcamError = (error) => {
    if (error) {
      console.log(error);
    }
  };
  const webcamScan = (result) => {
    if (result) {
      setWebcamResult(result);
    }
  };


  return (
    <>
    <div>scanner</div>
      <div className="card col-sm-4">
      <div className="card-header m-1 rounded text-center">
        <h3>Webcam Image</h3>
      </div>
      <div className="card-body text-center">
        <QrReader
          delay={300}
          onError={webcamError}
          onScan={webcamScan}
          legacyMode={false}
          facingMode={"environment"}
        />
      </div>
      <div className="card-footer rounded mb-1">
        <h6>WebCam Result: {webcamResult}</h6>
      </div>
    </div>
    </>
  )
}
