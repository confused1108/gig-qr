import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const QR = () => {
  const [data, setData] = React.useState("Cannot find QR code");

  return(
    <div>
        <BarcodeScannerComponent
          width={300}
          height={300}
          onUpdate={(err, result) => {
            if (result)
                setData(result.text);
            else
                setData("Cannot find QR code");
            }}
        />
        <h3>{data}</h3>
    </div>
    
  );
}

export default QR;